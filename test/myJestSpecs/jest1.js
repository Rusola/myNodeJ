// let createFile = require('../createFile.js');
import File from '../../source/myFile.js';
import myGlobe from 'glob';


const test_content = `A small group of words standing together as a conceptual unit`;

describe(`Verify file creation`, () => {

    it(`Should check that specified file path appeared`, ()=>{
        const content = `my content for jest testing`;
        const file_name = `myJestText.txt`;

        File.createFile(file_name, content);

        const pattern = `./files/*`;
        const found_files = myGlob.sync(pattern);

        expect(found_files.length).toEqual(1);
        expect(found_files).toEqual(file_name);
        console.log(found_files);
    });

    it(`Should check that specified file path appeared `, ()=>{
    });
});


// describe(`Verify file reading`, () => {
//     it(`should return file content as a string`, ()=>{
//         expect(File.readFile(`files/myFile.txt`)).toEqual(test_content);
//     });
// });
// describe(`Verify file deleting`, () => {
//     it(`It should `, ()=>{

//     });
// });

