/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - When working in global scope "this" binds to the window/console.
* 2. Implicit - Implicit binding is when "this" is bound to an object automatically.
* 3. New - The new binding is used when creating a new instance of an object.
* 4. Explicit - Explicit binding is when you specify in the code what "this" is bound to.
*
* write out a code example of each explanation above
*/

//Principle 1

//code example for Window Binding

console.log(this);

//Principle 2

//code example for Implicit Binding
const person = {
  name: "Ken",
  intro: function () {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

person.intro('Ken')

//Principle 3

//code example for New Binding
function Person(name) {
  this.name = name,
  this.intro = function () {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

const peter = new Person("Peter");

peter.intro();

// Principle 4

// code example for Explicit Binding

const george = new Person("George");
george.intro();
george.intro.call(peter);
