// Note: If you move an arrow and stop on fs word then you will see it is Node JS module.

// Note: I am creating a variable...!
const fs = require('fs');

// Note: I am creatimg a .txt file using Node-JS.
// Remember:
// 1: If the file name does not exist then it will create the file and you will see the text on that file that you give it.
// 2: But if the file name exist then it will update the text.

// fs.writeFileSync('read.html', 'Hi Ahmed, Are you learning Node JS?');
fs.writeFileSync('read.txt', 'Hello Ahmed, Welcome to Node-JS World!');

// Note: Now i am updating the text in read.txt file.
fs.writeFileSync('read.txt', 'Hi Ahmed, One day you will be a master of Node JS INSHALLAH');

// Note: Now i am adding some text/data in read.txt file.
fs.appendFileSync('read.txt', '\nI am a future MERN Stack Developer!');

// Note: Now i am going to read the text of read.txt file.
// const buffer_Text = fs.readFileSync('read.txt');
// console.log(buffer_Text);

// Buffer defination:
// Node JS includes additional data type called buffer, (Which is not available in browser's javascript).
// Buffer is mainly used to store binary data, while reading from a file.

// Note: Whenever you want to read the data of any file it will always give you buffer data.

// NOTE: You don't need to be worry their is a way to read the data of another file;
// let fileText = fs.readFileSync('read.txt');
// fileText = fileText.toString();
// console.log(fileText);

// Note: Now i am going to change the name of read.txt file.
fs.renameSync('read.txt', 'my-textfile.txt');