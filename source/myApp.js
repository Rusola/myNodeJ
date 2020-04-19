// let myFile = require('./myFile.js');

// Why this import is not working?
import myFile from 'myFile.js';

const content = `******* Hey! Did you know that readFile with ut8 will return a string?! *******`;

const created_file_path = myFile.createFile(`myFile.txt`, content);
const found_content = myFile.readFile(created_file_path);
console.log(created_file_path, found_content);



