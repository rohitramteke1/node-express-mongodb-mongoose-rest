const fs = require('fs');

fs.mkdir('practice', (err) => {
    console.log("folder created");
})

const filename = './practice/bio.txt';

fs.writeFile(filename, 'data insertion.', (err) => {
    console.log("file create successfully.");
})

fs.appendFile(filename, 'appending data the bio.txt', (err) => {
    console.log('appended data successfully');
})

fs.readFile( filename, 'utf-8', (err, data) => {
    console.log("\nData: ", data);
})

const newFileName = './practice/bio.txt';

fs.rename('practice\bio.txt', newFileName, () => {
    console.log("rename successfully.");
} );

fs.unlink(newFileName, (err) => {
    if ( err ) {
        console.log('Error while deleting the file');
    } else {
        console.log('file deleted successfully');
    }
});

fs.rmdir( 'practice', (err) => {
    console.log('dir deleted successfully.');
});