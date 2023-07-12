files["coverletter.txt"] = {
    run: () => {
        return new Promise(async resolve => {
            await runConsecutively([
                () => addImage("./navi/images/coverletter.png"),
                () => addLine("The document above is a cover letter I had written for ENG2003, as though I was applying for a co-op position at IMP Aerospace in Halifax, Nova Scotia. While I was already familiar with writing cover letters in the past, this allowed me to further learn proper formatting styles. I selected this document to showcase due to the fact that it also outlines some of my other skills, including CAD. I believe this cover letter showcases my ability to communicate with a potential employer, and, while not my best work, is something I would be comfortable presenting to an employer."),
            ]);
            resolve(true);
        });
    },
};