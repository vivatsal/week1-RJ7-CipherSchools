const name1 = "Rishi";
console.log(name1);

let name2 = "Rishi";
name2 = "John";
console.log(name2);

//String Interpolation

let firstName = "Rishi";
let lastName = "Pathania";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

//Default Params

// function addTwoNumbers(num1,num2) {
//     return num1+num2;
// }

let addTwoNumbers = (num1,num2) => {
    return num1+num2;
};
console.log(addTwoNumbers(4,5));

//Rest and spread Operator

//Spread Operator :
let array = [1,2,9,16,25,36];
console.log(...array);

let newArray = [...array,49,64,81,100];
console.log(...newArray);

//Rest Operator:
let maximumNumber = (...numbers) => {
    let maxi = Number.MIN_VALUE;
    for(let number of numbers){
        maxi = Math.max(number,maxi);
    }
    return maxi;
}
console.log(maximumNumber(13,25,13,525,53,535,224,636,363));

//Objects in Javascript:

let object = {
    name: "Rishi",
    age: 20,
    address: {
        city: "Palampur",
        state: "Himachal Pradesh",
        country: "India"
    }
};

let object2 = {...object};
console.log(object2);

object2.address.city = "Kangra";
console.log(object);

object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Dharamshala";
console.log(object);
console.log(object2);