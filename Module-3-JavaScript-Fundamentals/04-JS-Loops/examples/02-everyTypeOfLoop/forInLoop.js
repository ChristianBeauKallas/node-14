const student = {
    name: 'Monica', //key value pairs
    class: 7, //key value pairs
    age: 12 //key value pairs
}

// using for...in
for ( let key in student ) {
let val = student[key] //square brackets find the value within
    // display the properties
    console.log(`${key} => ${val}`);
}

