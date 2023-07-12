commands.cat = {
    run: (args) => {
        return new Promise(async resolve => {
            if (args.length > 0 && files[args[0]]) await files[args[0]].run();
            else await addLine("File not found");
            resolve(true);
        });
    },
    autofill: () => Object.keys(files),
    helpMessage: "cat [file] - Displays the contents of a file",
};