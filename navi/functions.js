const runConsecutively = (list, index = 0) => {
  if (index >= list.length) return Promise.resolve();
  const currentFunction = list[index];
  return new Promise(resolve => {
    const result = currentFunction();
    if (result === true || result instanceof Promise) resolve(result);
    else resolve();
  }).then(() => runConsecutively(list, index + 1));
};

const appendChild = (HTML) => {
  let newDiv = document.createElement('div');
  newDiv.innerHTML = HTML;

  const firstChild = output.firstChild;
  output.insertBefore(newDiv, firstChild);

};

const addLine = (line = "", time = 50, space = false) => {
  return new Promise(async resolve => {
    await delay(time);
    scrollToLatest(output);
    appendChild(space ? line.replace(/ /g, "&nbsp;") : line);
    scrollToLatest(output);
    resolve(true);
  });
};

const addImage = (image, time = 950) => {
  return new Promise(async resolve => {
    scrollToLatest(output);
    appendChild(`<img src="${image}" alt="image" />`);
    await delay(time);
    scrollToLatest(output);
    resolve(true);
  });
};

const showOK = (time = 100) => {
  return new Promise(async resolve => {
    scrollToLatest(output);
    appendChild(`[ <span class="green">OK</span> ]`);
    await delay(time);
    scrollToLatest(output);
    resolve(true);
  });
};

const threeDots = (times = 3, time = 150) => {
  return new Promise(async resolve => {
    const firstElement = output.querySelector("div");
    for (let i = 0; i < times; i++) {
      await delay(time);
      firstElement.innerHTML += ".";
    }
    firstElement.removeAttribute("id");
    resolve(true);
  });
};


const scrollToLatest = async (element) => {
  await delay(50);
  element.scrollTop = element.scrollHeight;
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
