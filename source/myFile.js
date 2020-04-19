let fs = require(`fs`);

//const content = `******* Hey! Did you know that readFile with ut8 will return a string?! *******`;

function createFile(file_name, content) {
    // Use Absolute path (always?)
    const dir       = `./files/`;
    const file_path = dir + file_name;

    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(file_path, content);

    console.log(`File:${file_path} has been created`);

    return file_path;
}

function readFile(file_path) {

    if(!fs.existsSync(file_path)) {
        throw new Error(`************** Hey! There is no file to Read! *******************`);
    }

    // If the encoding option is specified then this function returns a string. Otherwise it returns a buffer
    const content = fs.readFileSync(file_path, `utf8`);

    console.log(`File:${file_path} has been read`);

    return content;
}

function deleteFile(file_path){
    if(!fs.existsSync(file_path)) {
        throw new Error(`************** Hey! There is no file to Delete! *******************`);
    }

    fs.unlinkSync(file_path);

    //  alert(`oops!`) ?
    console.log(`File:${file_path} has been deleted`);
;}

// const created_file_path = createFile(`myFile.txt`, content2);
// const found_content     = readFile(created_file_path);
// console.log(created_file_path, found_content);

deleteFile(`./files/myFile.txt`);

module.exports = {
    'readFile'  :readFile,
    'createFile': createFile
}



