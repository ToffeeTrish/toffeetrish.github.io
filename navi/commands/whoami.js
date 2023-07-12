commands.whoami = {
    run: () => {
        return new Promise(async resolve => {
            addLine(`You are ${info.username}!`);
            resolve(true);
        });
    },
    helpMessage: "whoami - Displays the current user",
};