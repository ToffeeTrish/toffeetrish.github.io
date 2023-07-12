files["brochure.txt"] = {
    run: () => {
        return new Promise(async resolve => {
            await runConsecutively([
                () => addImage("./navi/images/brochure-1.png", 0),
                () => addImage("./navi/images/brochure-2.png", 0),
                () => addImage("./navi/images/brochure-3.png", 0),
                () => addImage("./navi/images/brochure-4.png"),
                () => addLine("(Scroll to view pages)"),
                () => addLine("This brochure is another assignment for ENG2003. It highlights the X-Minute City for two audience. Highschool graduates, and university graduates. This showcases my ability to communicate with a different variety of audiences, and is a piece that definitely pushed me out of my comfort zone. While this is not my best work, this is definitely a piece that enabled me to develop my communication skills, which enabled me to write my technical paper regarding the X-Minute City."),
            ]);
            resolve(true);
        });
    },
};