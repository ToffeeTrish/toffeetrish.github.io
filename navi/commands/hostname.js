commands.hostname = {
    run: () => {
        return new Promise(async resolve => {
            addLine(`Hostname: ${info.hostname}`),
                resolve(true);
        });
    },
    helpMessage: "hostname - Displays the current hostname",
};