/***** Node JS Challenge # 01 *****/

// 1: Create a folder called NodeJSChallenge.
// 2: Create a file in it called bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt.
// 6: Now delete both the folder and the file.

// Solution:
const fs = require('fs');

// Note: Creating a folder.
// fs.mkdirSync('NodeJSChallenge');

// Note: Creating a file.
// Note: Remember you have to create a file inside of NodeJSChallenge.
// fs.writeFileSync('NodeJSChallenge/bio.txt' , 'Hi, My name is Ahmed.\nI am 25 years old.\nI live in Nazimabad.');

// Note: Adding some data in bio.txt.
// fs.appendFileSync('NodeJSChallenge/bio.txt', '\nI am software developer.\nI belong to Punjabi family.');

// Note: Reading the data of bio.txt in string format not in buffer.
// let read_Data = fs.readFileSync('NodeJSChallenge/mybio.txt' , 'utf8');
// console.log(read_Data);

// Note: Renaming the file bio.txt to mybio.txt.
// fs.renameSync('NodeJSChallenge/bio.txt' , 'NodeJSChallenge/mybio.txt');

// Note: Deleting mybio.txt.
// fs.unlinkSync('NodeJSChallenge/mybio.txt');

// Note: Deleting NodeJSChallenge folder.
// fs.rmdirSync('NodeJSChallenge');