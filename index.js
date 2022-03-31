// Question 1
//Print “Star It Ltd.” 10 times without using a loop. (Lang: JavaScript)

document.write('Star It Ltd.</br>')
document.write('Star It Ltd.</br>')
document.write('Star It Ltd.</br>')
document.write('Star It Ltd.</br>')
document.write('Star It Ltd.</br>')
document.write('Star It Ltd.</br>')
document.write('Star It Ltd.</br>')
document.write('Star It Ltd.</br>')
document.write('Star It Ltd.</br>')
document.write('Star It Ltd.</br>')





//Question: 02
//

let obj = { a: 5, b: 6, c: 3, '1': 4, '2': 2 };
let keys = [], values = [];
Object.entries(obj).forEach(([key, value]) => {
    if (key != value) {
        keys.push(key);
        values.push(value)
    }
});

console.log('keys:', keys);
console.log('values:', values);