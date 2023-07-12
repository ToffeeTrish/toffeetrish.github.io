commands.ls = {
    run: () => {
        return new Promise(async resolve => {
            addLine(Object.keys(files).join(", "));
            resolve(true);
        });
    },
    helpMessage: "ls - Lists all files",
};