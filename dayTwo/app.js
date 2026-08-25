
// -- using nodejs

let prompt = require('prompt-sync')();

// let n = prompt("enter your name")

// process.stdout.write(n)

// -- patern programing

// let n = prompt("enter the amount of stars you want")

// for(let i=1; i <= n; i++){
//     process.stdout.write("* ")
// }
// console.log()
 
// for(let i=1; i <= n; i++){
//     process.stdout.write("* ")
// }
// console.log()
 
// for(let i=1; i <= n; i++){
//     process.stdout.write("* ")
// }
// console.log()
 
// for(let i=1; i <= n; i++){
//     process.stdout.write("* ")
// }
// console.log()
 
// for(let i=1; i <= n; i++){
//     process.stdout.write("* ")
// }
// console.log()
 
// for(let i=1; i <= n; i++){
//     process.stdout.write("* ")
// }
// console.log()
 
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

let n = prompt("enter the amount of stars you want")

for(let i=1; i<=n; i++) {
 for(let j=1; j<=i; j++) {
        process.stdout.write("* ")
 }
 console.log()
}