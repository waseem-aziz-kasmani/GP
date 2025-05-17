function SaveFile1Text(){
   const fs = require('fs');
    
    const content = 'Hello, world!';
    
    fs.writeFile('File_1.txt', content, (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }
      console.log('File written successfully!');
    });
}
