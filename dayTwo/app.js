
// -- using nodejs

let prompt = require('prompt-sync')();

// let n = prompt("enter your name")

process.stdout.write(n)

// // -- patern programing

// let n = prompt("enter the amount of stars you want")

for(let i=1; i <= n; i++){
    process.stdout.write("* ")
}
console.log()
 
for(let i=1; i <= n; i++){
    process.stdout.write("* ")
}
console.log()
 
for(let i=1; i <= n; i++){
    process.stdout.write("* ")
}
console.log()
 
for(let i=1; i <= n; i++){
    process.stdout.write("* ")
}
console.log()
 
for(let i=1; i <= n; i++){
    process.stdout.write("* ")
}
console.log()
 
for(let i=1; i <= n; i++){
    process.stdout.write("* ")
}
console.log()
 
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *


// // -------------------------------------------
// // Q.1 right angle trangle

let n = Number(prompt("enter the amount of stars you want"))

for(let i=1; i<=n; i++) {
 for(let j=1; j<=i; j++) {
        process.stdout.write("* ")
 }
 console.log()
}

// // Q.1B 

for(let i=1; i<=n; i++) {
 for(let j=1; j<=i; j++) {
        process.stdout.write(j+" ")
 }
 console.log()
}

// // Q.1C

for(let i=1; i<=n; i++) {
       let ascii = 65;
 for(let j=1; j<=i; j++) {
        process.stdout.write(String.fromCharCode(ascii)+" ")
        ascii++
 }
 console.log()
}

// //----------------------------------------------------
// // Q.2 inverted right angle ftrangle

for(let i=1; i<=n; i++){
       for(let j=1; j<=n-i+1; j++){
              process.stdout.write("* ")
       }
       console.log()
}


// //------------------------------------------------

// // Q.3 mirror right angle triangle

for(let i=1; i<=n; i++){
       for(let j=1; j<=n-i+1; j++){
              process.stdout.write("  ")
       }
       for(let j=1; j<=i; j++){
              process.stdout.write("* ")
       }
       console.log()
       
}