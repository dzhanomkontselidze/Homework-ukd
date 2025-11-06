const fs = require('node:fs');

  const data = fs.readFileSync(
    'information.txt', 
    { 
        encoding:'utf8',
        flag: 'r'
}
);

  console.log(data.replaceAll(" ", "(Dzhano Konzelidse >'^'<)"));  
