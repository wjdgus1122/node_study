const {nextTick} = require('process')
const path = require('path')

console.log('start');

console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.extname('index.html'))
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, '.js'))

// console.log(path.delimiter)

// console.log(process.env.PATH);
// process.env.PATH.split(path.delimiter)

// console.log(process.env.PATH);
// process.env.PATH.split(path.delimiter)



setTimeout(()=>{
    console.log('timeout callback')
},0)

nextTick(()=>{
    console.log('nextTick callback')
})

console.log('end') 