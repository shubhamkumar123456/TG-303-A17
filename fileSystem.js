//  create a package.json file --> npm init -y
// CRUD --> create , read , update, delete

const fs = require('fs')

//1) create a file using fs module
// fs.writeFileSync('first.pdf', 'this is dummt text')
// fs.writeFileSync('one.html', `<html>
//         <head></head>
//         <body>
//             <h1>This is heading</h1>
//         </body>
//     </html>`)

// fs.writeFileSync('one.js' , 'let a = 12 \n  let b =4 \n console.log(a+b)')


//2) read a file 
// let ans = fs.readFileSync('first.pdf', 'utf-8');
// console.log(ans)
// let ans = fs.readFileSync('one.js', 'utf-8');
// console.log(ans)

//3)rename a file
// fs.renameSync('one.js', 'two.js')

//4)add more text using append method -->
// fs.appendFileSync('two.js','\n console.log(a*b)')

//5) delete a file -->
// fs.unlinkSync('one.html')

