const input = document.getElementById("selected");
const typing = document.querySelector(".input");
const output = document.querySelector(".output");
const body = document.querySelector("body");

const commands = {};
const files = {};

let log = [];
let logIndex = 0;

const handler = {
  set(target, key, value) {
    target[key] = value;
    if (key === "canType") {
      typing.classList.toggle("active", value);
      input.focus();
    }
    return true;
  },
  handleInput(event) {
    if (proxyCanType.canType) {
      scrollToLatest(output);
      if (input.value) {
        typing.textContent += input.value;
      }
      input.value = "";
      input.focus();
    } else {
      input.value = "";
    }
  },
  handleClick(event) {
    if (proxyCanType.canType) {
      input.focus();
      scrollToLatest(output);
      scrollToLatest(body);
    }
  },
  handleKeydown(event) {
    if (proxyCanType.canType) {
      if (event.code === "Backspace") {
        typing.textContent = typing.textContent.slice(0, -1);
      } else if (event.code === "Tab") {
        event.preventDefault();
        const currentText = typing.textContent;
        const [command, ...args] = currentText.toLowerCase().split(" ");
        let lastArg = args[args.length - 1];
        if (commands[command]) {
          const { autofill: commandFunction } = commands[command];
          if (commandFunction) {
            const autofill = commandFunction();
            const matchedOption = autofill.find(option => option.startsWith(lastArg));
            if (matchedOption) {
              typing.textContent += matchedOption.slice(lastArg.length);
            }
          }
        } else if (command && args.length === 0) {
          const matchedCommand = Object.keys(commands).find(possibleCommand => possibleCommand.startsWith(command));
          if (matchedCommand) {
            typing.textContent += matchedCommand.slice(command.length);
          }
        }
      } else if (event.code === "Enter") {
        event.preventDefault();
        logIndex = 0;
        log.push(typing.textContent);
        const [command, ...args] = typing.textContent.toLowerCase().split(" ");
        if (commands[command]) {
          const { run: commandFunction } = commands[command];
          proxyCanType.canType = false;
          if (commandFunction) commandFunction(args).then(() => {
            proxyCanType.canType = true;
          });

        } else {
          addLine(`Command Not Found: "${command}"`);
        }
        typing.textContent = "";
      } else if (event.code === "ArrowUp" && logIndex < log.length) {
        event.preventDefault();
        typing.textContent = log[log.length - logIndex - 1];
        logIndex++;
      } else if (event.code === "ArrowDown" && logIndex >= 0) {
        event.preventDefault();
        if (logIndex === 0) {
          typing.textContent = "";
        } else {
          logIndex--;
          typing.textContent = log[log.length - logIndex];
        }
      }

      input.focus();
    }
  },
};

const proxyCanType = new Proxy({ canType: false }, handler);

runConsecutively(startup);

input.addEventListener("input", handler.handleInput);
document.addEventListener("click", handler.handleClick);
document.addEventListener("keydown", handler.handleKeydown);
