// DATES


let myDate=new Date()

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());
// console.log(typeof myDate);


// let myCreatedDate=new Date(2026,11,12)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1=new Date("2025-01-06")
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate1=new Date("06-01-2025")
// console.log(myCreatedDate1.toLocaleString());



let myTimeStamp=Date.now()

// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
})

