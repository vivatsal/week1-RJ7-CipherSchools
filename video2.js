// map()

let array = [1,2,3,4,5];
let newArray = [];

for(let i=0;i<array.length;i++){
    newArray[i] = array[i] * array[i];
}
console.log(newArray);

//By using map
let array1 = [1,2,3,4,5];
function functionForMap(element){
    return element * element;
}
let newArray1 = array1.map(functionForMap);
console.log(newArray1);

let newArray2 = array1.map((element,index) => {
    return element * element;
})
console.log(newArray2);

//For Each
let array3 = [5,10,15,20,25];
array3.forEach((element,index)=>{
    console.log(element);
})
//forEach does not return anything

//filter()

let newArray3 = array3.filter((element) => element >= 10);
console.log(newArray3);

//find()
let temp = array3.find((element) => element > 15);
console.log(temp);

//sort()
let array4 = [35,23,53,56,29,101];
let sortedArray = array4.sort();
console.log(sortedArray);

let sortedArray1 = array4.sort((el1,el2)=>{
    el1 = Number(el1);
    el2 = Number(el2);
    return el1-el2
});
console.log(sortedArray1);

//object Destructuring
let myObject = {
    name: "Alex",
    age: 24,
    address: {
        street: "Brooklyn",
        city: "New York",
        state: "NY",
        country: "USA",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
};
let passportNumber = myObject.address.passportDetails.passportNumber;
console.log(passportNumber);
let {name: myName,age} = myObject;
console.log(myName,age);

//Array Matching

// if(array1 == array2)/

//Ojbect Matching
let obj1 = {name: "Shantanu"};
let obj2 = {name: "Shantanu"};

function areEqual(obj1,obj2){
    if(obj1 == obj2){
        return true;
    }
    if(Object.keys(obj1).length != Object.keys(obj1).length) {
        return false;
    }
    for(let key of Object.keys(obj1)) {
        if(typeof obj2[key] == "undefined") {
            return false;
        }
        if(obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1,obj2));

//Map and Set 

let map = new Map();
map.set(1,"Shantanu");
map.set(2,"Alex");
console.log(map);
map.values()

let set = new Set();

set.add(1);
set.add(-1);
set.add(1);
console.log(set);

//Classes
 class Animal {
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs,color,family,sound){
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
 }
 let animal = new Animal(4,"Brown","rodent","Something");
 console.log(animal);
