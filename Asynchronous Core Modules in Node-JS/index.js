/***** Asyncronously Work! *****/

// Most Important NOTE:
// We pass them a function as a argument - a callback - that gets called when that task completes.
// The callback has an argument that tells you whether the operation completed successfully.

const fs = require('fs');

// Note: Creating a file called test.txt
/*
fs.writeFile(
    'test.txt',
    'Hello Ahmed, Welcome to Node JS World!\nNow you need to start working on Node JS as well',
    (error) => {
        if (error) {
            console.log(error);
        }

        else {
            console.log('Operation successfull!');
        }
    });
*/

// Note: Adding some data in test.txt
/*
fs.appendFile(
    'test.txt',
    '\nCurrently you are a React Stack Developer.\nNow you need to become a complete Full Stack Developer.',
    (error) => {
        if (error) {
            console.log(error);
        }

        else {
            console.log('Operation successfull!');
        }
    }
);
*/

// Note: Reading the data of test.txt
/*
fs.readFile(
    'test.txt',
    'UTF-8',
    (error, data) => {
        if (error) {
            console.log(error);
        }

        else {
            console.log(data);
        }
    }
);
*/