var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// The solution

// .......................

//  --- Method 1 ---

// This is a simple method os ES6 using class and inheritance

// class Teacher extends Person {
//   teach(subject) {
//     console.log(`${this.name} is now teaching ${subject}`);
//   }
// }

// ................

//  --- Method 2 ---
// Teacher class is created
function Teacher() {}

// Assign the prototpes of Person to Teacher
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

// set new method teach to teacher
Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

// creating new teacher with Teacher constructor
var him = new Teacher();

him.initialize("Sharun", 25);
him.teach("hai");
