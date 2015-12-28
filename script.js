"use strict";

var questions = [
    "What is your name",
    "What is your fav hobby",
    "What is your goal"
];

var answers = [];

function ask(i) {
    process.stdout.write(questions[i]);
    process.stdout.write("\n");
};

process.stdin.on("data", function (data) {
    answers.push(data.toString("utf8").trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit(0);
    }
});

process.on("exit", function () {
    process.stdout.write("Ended\n");
    console.log(answers);
});

ask(0);