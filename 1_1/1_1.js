

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits)

// let points = [40,100,1,5,25,10];
// points.sort(function(a,b){return b-a})
// console.log(points)

// let person = [
//     {
//         name : "유재석",
//         point :"78",
//         city : "서울"
//     },
//     {
//         name : "김종국",
//         point :"92",
//         city : "서울"
//     },
//     {
//         name : "양세찬",
//         point :"76",
//         city : "제주"
//     },
//     {
//         name : "하하",
//         point :"81",
//         city : "서울"
//     },
// ];

// person.sort(function(a,b){
//     return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
// })

// console.log(person)


// let userList = [
//     {
//         firstName : "재석",
//         lastName : "유",
//         email : "yu@gmail.com"
//     },
//     {
//         firstName : "종국",
//         lastName : "김",
//         email : "kim@gmail.com"
//     },
//     {
//         firstName : "세찬",
//         lastName : "양",
//         email : "yang@gmail.com"
//     },
//     {
//         firstName : "석진",
//         lastName : "지",
//         email : "ji@gmail.com"
//     },
// ]

// let userList2 = userList.map(function (user) {
//     return {
//         fullName : user.lastName + user.firstName,
//         firstName : user.firstName,
//         lastName : user.lastName,
//         email : user.email
//     }
// })

// console.log(userList2)

// let points = [40, 100, 1, 5, 25, 10];
// let sum = points.reduce(function(total, currentValue){
//     return total + currentValue
// },0)

// console.log(sum)

// function hello(name){
//     console.log("Hello " + name + ". Welcome!")
// }

// hello("Jeremy");

// function hello2(name) {
//     let name2 = "John";
//     console.log(`Hello ${name2}. Welcome! ${name}`);
// }
// hello2("Jeremy")

// let arr1 = [4,5,6];
// let arr2 = [1,2,3];
// let arr3 = [...arr2, ...arr1];
// console.log(arr3)

// let cd = "CD";
// let alphabet = ['A', 'B', ...cd];
// console.log(alphabet)

// function getPerson(){
//     return{
//         firstName : "John",
//         lastName : "Doe",
//         age : 37,
//         email : "john@gmail.com",
//         city : "New York",
//         country : "USA"
//     }
// }

// var {firstName, lastName} = getPerson();

// console.log(firstName);
// console.log(lastName);

// function displayFullName({firstName, lastName}){
//     console.log(`${firstName} ${lastName}`)
// }

// displayFullName(getPerson());

function getScores(){
    return [70,80,90,100]
}

// let scores = getScores();

// let x = scores[0],
// y = scores[1],
// z = scores[2];


// let[x,y,z] =getScores()

// console.log(x)
// console.log(y)
// console.log(z)

// let [x, y, ...args] = getScores();
// console.log(x)
// console.log(y)
// console.log(args)

// function getProfile(){
//     return [
//         'John',
//         'Doe',
//         ['Red', 'Green', 'Blue']
//     ]
// }

// let [
//     firstName,
//     lastName,
//     [
//         color1,
//         color2,
//         color3
//     ]
// ] = getProfile();

// console.log(color1, color2, color3)

// function say(message){
//     if(message != undefined){
//         console.log(message)
//     }else{
//         console.log("파라미터가 넘어오지 않았어요.")
//     }
// }

// say()

// function say(message = "파라미터가 넘어오지 않았어요"){
//     console.log(message)
// }
// say()

// function sum(x1, x2,x3,x4){
//     let y = x1 + x2+x3+x4;

//     return console.log(y);
// }

// sum(5,7,3,9)

// function sum(...args){
//     let total = 0;
//     for(let x of args){
//         total += x;
//     }
//     return console.log(total)
// }

// sum(21,17,38)

// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve("결과 데이터")
//     }else {
//         reject(new Error("에러"))
//     }
// })

// async function myFunction(){
//     const r = await asyncFunction();
// }

// const myFunction2 = async() => {
//     const r =  await asyncFunction();
// }

class Car {
    constructor(modelName, modelYear, type, price){
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    getModelName(){
        return this.modelName;
    }

    getModelYear(){
        return this.modelYear;
    }

    getType(){
        return this.type;
    }

    getPrice(){
        return this.price;
    }

    setModelYear(modelYear){
        this.modelYear = modelYear;
    }

    setType(type){
        this.type = type;
    }

    setPrice(price){
        this.price = price;
    }
}

// let ionic = new Car("아이오닉", "2021", "e", 4000);
// let modelName = ionic.getModelName()
// ionic.setPrice(4300)

// console.log(ionic)
// console.log(modelName)



// class ElectricCar extends Car{
//     constructor(modelName, modelYear, price, chargeTime){
//         super(modelName, modelYear, "e", price);
//         this.chargeTime = chargeTime;
//     }

//     setChargeTime(time){
//         this.chargeTime = true;
//     }

//     getChargeTime(){
//         return this.chargeTime;
//     }
// }

// var regexp = /World/;
// var regexp = new RegExp("World")


// var str = "Hello World! world!";
// const re =  /World/;
// console.log(re.test(str))
// console.log(str.search(re))  

// function myFunction(){
//     console.log('Hello World');
// }

// myFunction();

// const {add, minus, defaultNum} = require('./calculator');

// console.log(add(7,2));
// console.log(minus(7,2))
// console.log(defaultNum)

