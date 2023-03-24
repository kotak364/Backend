const fs = require('fs');

// const book = {
//    title:"Ego is the Enemy",
//    author   :'Ryan Holiday' 
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON, "bookJSON")

// const bookObject = JSON.parse(bookJSON)
// console.log(bookObject,"bookJSON")

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer =   fs.readFileSync('1-json.json')
// // console.log(dataBuffer,"dataBuffer");
// console.log(dataBuffer.toString(),"dataBuffer");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.title)


//Challange 
const user = fs.readFileSync('1-json.json');
const userJSON = user.toString();
const userdata = JSON.parse(userJSON);
userdata.name = "Jaymeen"
userdata.age = 28
const userString = JSON.stringify(userdata)
console.log(userString, "userString")
fs.writeFileSync('1-json.json', userString)