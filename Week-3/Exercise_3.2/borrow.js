// office details object containing office details abd fullAddress method
let office = {
  location: "Kerala, India.",
  name: "Hello Pvt. Ltd.",
  buildingNo: "12 A",
  fullAddress: function (...args) {
    return console.log(
      `${this.name} . ${this.buildingNo}, ${this.location}` + args.join(" ,")
    );
  },
};

// object containing details of main office
let mainOffice = {
  location: "Mumbai, India.",
  name: "Hello Pvt. Ltd.",
  buildingNo: "16 A",
};
// additional details regarding new office
const otherDetails = ["673525", "Near Post office"];

// directlly calling the method inside the office object
// here the 'this' is pointing to the office object itself

office.fullAddress();

// using call methods borrowing the method inside the office object and changing the 'this' to mainOffice object
// here arguments are passing with comma seperared
office.fullAddress.call(mainOffice, ...otherDetails);

// using apply methods borrowing the method inside the office object and changing the 'this' to mainOffice object
// here arguments are passing as array
office.fullAddress.apply(mainOffice, otherDetails);

// using bind methods borrowing the method inside the office object and changing the 'this' to mainOffice object
// here arguments are passing with comma seperared
// bind is returing a function so that we can call it later
const newOfficeAddress = office.fullAddress.bind(mainOffice, ...otherDetails);

newOfficeAddress("Asia.");
