"use strict";

var fs = require("fs");
var rr = fs.createReadStream("data.txt", "utf8");

// ReadFile
fs.readFile("data.txt", "utf8", function (error, contents) {
    console.log(contents.length);
});

console.log("reading files");

// Stream readable
var file;

rr.on('readable', function () {
    var chunk;
    while (null !== (chunk = rr.read())) {
        console.log(chunk.length);
        file += chunk;
    }
});

rr.on("end", function () {
    console.log(file.length);
    console.log('end');
});
