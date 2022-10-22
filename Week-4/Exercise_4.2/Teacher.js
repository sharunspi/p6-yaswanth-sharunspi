var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

class Teacher extends Person {
  teach(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  }
}

var him = new Teacher();

him.initialize("Sharun", 25);
him.teach("hai");
