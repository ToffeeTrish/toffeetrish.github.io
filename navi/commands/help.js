

commands.help = {
    run: (args) => {
        return new Promise(async resolve => {
            if (args.length === 0) {
                await runConsecutively([
                    () => addLine("Welcome to my portfolio!"),
                    () => addLine("You can view details about each of my projects by running the 'ls' command."),
                    () => addLine("Once you've found a project you'd like to view, run the 'cat' command followed by the name of the project."),
                    () => addLine("For example, to view my best piece of work, run 'cat xminutecity.txt'."),
                    () => addLine(),
                    () => addLine("Commands:"),
                    () => addLine(Object.keys(commands).join(", ")),
                ]);
            } else if (args.length === 1) {
                const command = commands[args[0]];
                // if not command it breaks
                if (command) {
                    if (command.helpMessage) addLine(command.helpMessage);
                    else addLine(`No help available for "${args[0]}"`);
                } else ddLine(`Command Not Found: "${args[0]}"`);
            }
            resolve(true);
        });
    },
    autofill: () => Object.keys(commands),
    helpMessage: "help [command] - Shows all commands or help for a specific command",
};