commands.version = {
    run: () => {
        return new Promise(async resolve => {
            addLine(`Version: ${info.version}`);
            resolve(true);
        });
    },
    helpMessage: "version - Displays the current version",
};