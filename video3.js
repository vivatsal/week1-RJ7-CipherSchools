class ListNode {
    val;
    next;

    constructor(val,next = null) {
        this.val = val;
        this.next = next;
    }
}

class TestClass {
    head;
    constructor(head = null) {
        this.head = head;
    }
    hasLast() {
        return this.head !== null;
    }
    getLast() {
        if(!this.hasLast()) {
            return null;
        }
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        let finalValue = current.val;
        current = this.head;
        while(current.next.next !==null && current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
        return finalValue;
    }
}
let myVariable = new TestClass(
    new ListNode(
        1,new ListNode(2,new ListNode(3,new ListNode(4, new ListNode(5))))
    )
);

console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());


//Promise is a class in JS
//Constructor (function)
//   Promise in Js

let num1 = 10;
let num2 = 30;

let myPromise = new Promise((fullfilled, notFullfilled) => {
  let sum = num1 + num2;
  if (sum > 30) {
    fullfilled();
  } else {
    notFullfilled();
  }
});

myPromise
  .then(() => {
    console.log("Promise is fullfilled");
  })
  .catch(() => {
    console.log("Promise is not fullfilled");
  });

function addTwoNumbers(num1, num2) {
  let sum = 0;
  setTimeout(() => {
    console.log(num1 + num2);
    sum = num1 + num2;
  }, 5000);
  console.log("Inside add Two Numbers");
  return sum;
}
