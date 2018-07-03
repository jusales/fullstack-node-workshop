const express = require("express");
const path = require("path");

const compliments = [
    "You look nice today", 
    "That dress looks nice on you", 
    "Have you been working out?", 
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "You suck at coding"
];

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/compliment", function(req, res) {
    res.json({
        compliment: getRandomComplement()
    })
    .end();
});

app.get("/insult", function(req, res) {
    res.json({
        insult: getRandomInsult()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");

//~Second part~
// const express = require("express");

// const app = express();

// app.get("/", function(req, res) {
//     res.end("Welcome to my site!");
// });

// app.get("/compliment", function(req, res) {
//     res.end("You look nice today");
// });

// app.listen(3000);
// console.log("listening on http://localhost:3000");

// ~First part~
// const http = require("http");

// const server = http.createServer(function(req, res) {
//     console.log(`user visited ${req.url}`);
//     res.end("hello!");
// });

// console.log("listening on http://localhost:3000");
// server.listen(3000);