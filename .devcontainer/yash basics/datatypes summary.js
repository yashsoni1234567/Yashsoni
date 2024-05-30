// primitive data types

// 7 types : String, Number, boolean, null, undefined, symbol, BigINT


const score = 100
const scoreValue = 100.3
const isloggedIn = false
const outsidetemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 735829783472058785230458372384379n

// Reference data types( non primitve)

// array, objects, functions
const heros = ["yash", "soni", "mayur" ];


let myobj = {
    name: "yash",
    age: 22,
}

const myFunction = function(){
    console.log("hello ");
}
console.log(typeof outsidetemp);