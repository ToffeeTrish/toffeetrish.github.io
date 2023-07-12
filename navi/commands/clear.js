commands.clear = {
    run: () => {
        return new Promise(async resolve => {
            output.innerHTML = "";
            addLine("Cleared Terminal!");
            resolve(true);
        });
    },
    helpMessage: "clear - Clears the terminal",
};