commands.echo = {
    run: (args) => {
        return new Promise(async resolve => {
            if (args.length > 0) addLine(args.join(" "));
            resolve(true);
        });
    },
    helpMessage: "echo [text] - Displays text",
};