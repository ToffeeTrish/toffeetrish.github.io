files["xminutecity.txt"] = {
    run: () => {
        return new Promise(async resolve => {
            await runConsecutively([
                () => addImage("./navi/images/xminute1024_2.png", 0),
                () => addImage("./navi/images/xminute1024_3.png", 0),
                () => addImage("./navi/images/xminute1024_4.png", 0),
                () => addImage("./navi/images/xminute1024_5.png", 0),
                () => addImage("./navi/images/xminute1024_6.png", 0),
                () => addImage("./navi/images/xminute1024_7.png", 0),
                () => addImage("./navi/images/xminute1024_8.png", 0),
                () => addImage("./navi/images/xminute1024_9.png", 0),
                () => addImage("./navi/images/xminute1024_10.png", 0),
                () => addImage("./navi/images/xminute1024_11.png", 0),
                () => addImage("./navi/images/xminute1024_12.png", 0),
                () => addImage("./navi/images/xminute1024_13.png", 0),
                () => addImage("./navi/images/xminute1024_14.png", 0),
                () => addImage("./navi/images/xminute1024_15.png"),
                () => addLine("(Scroll to view pages)"),
                () => addLine("The document above is my first term project for my ENG2003 course. This is a paper regarding the X-Minute city, and why it should be implemented within modern society. This piece highlights my researching and professional communcation abilities. While developing this piece, I learned a lot about the IEEE style, and writing documents in general. I believe out of all that I've created during ENG2003, this is my best piece of work, due to its accuracy, length, and detail. I felt pushed out of my comfort zone, which allowed me to explore more potential options for how to properly write this paper."),
                () => addLine("Please note that some personally identifiable information has been removed."),
            ]);
            resolve(true);
        });
    },
};