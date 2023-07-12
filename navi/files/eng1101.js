files["eng1101.txt"] = {
    run: () => {
        return new Promise(async resolve => {
            await runConsecutively([
                () => addImage("./navi/images/eng1101-1.png", 0),
                () => addImage("./navi/images/eng1101-2.png", 0),
                () => addImage("./navi/images/eng1101-3.png", 0),
                () => addImage("./navi/images/eng1101-4.png", 0),
                () => addImage("./navi/images/eng1101-5.png", 0),
                () => addImage("./navi/images/eng1101-6.png"),
                () => addLine("(Scroll to view pages)"),
                () => addLine("This docuement is the integrative assignment for ENG1101. We were given a case study regarding Caseview AI, an AI tool used in law enforcement to catch criminals. This document shows my ability to use multiple problem solving tools such as the 5 why's, a \"How Might We\" statement, and my own logic to determine the ethicality of using the Clearview AI. I communicate my thought process directly which allows the reader to understand my train of thought, and how I arrived at a certain conclusion. This work is not my best work as it is not properly formatted, and would likely be better as a technical report outlining Clearview AI's uses and ethical challenges."),
            ]);
            resolve(true);
        });
    },
};