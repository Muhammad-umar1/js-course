// ++++++++++=> Date <=++++++++++++


const date = new Date();

// console.log(typeof date) // object
// console.log(`toString : ${date.toString()}`);
// console.log(`toISOString ${date.toISOString()}`);
// console.log(`toJSON ${date.toJSON()}`);
// console.log(`toLocaleDateString : ${date.toLocaleDateString()}`);
// console.log(`toDateString : ${date.toDateString()}`);
// console.log(`toTimeString ${date.toTimeString()}`);
// console.log(`toLocaleString ${date.toLocaleString()}`);
// console.log(`toLocalString: ${date.toLocaleTimeString()}`);
// console.log(`toUTCString ${date.toUTCString()}`);
console.log(date.toLocaleString('default', {
    weekday: "short",
    month: "short"
}))

// console.log(`year: ${date.getFullYear()}`);
// console.log(`date: ${date.getDate()}`);
// console.log(`hour: ${date.getHours()}`);


// let myCreatedDate = new Date(2024, 0, 30, 11, 19, 20);  //the months starts from 0 in javaScrit
// let myCreatedDate = new Date("2024-01-22")

// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("01-30-2024")

let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(Math.floor(myTimeStamp / 1000))
// console.log(myCreatedDate.getTime())
