function greet(){
    console.log("Hello Anish")
}

function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World");

  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
      street: '123 Main Street',
      city: 'Anytown',
      country: 'USA'
    },
    hobbies: ['reading', 'traveling', 'coding'],
    isStudent: false,
    sayHello: function() {
      console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName + '.');
    }
  };

  console.log("Keys: "+Object.keys(person))
  console.log("Values: "+Object.values(person))
  console.log("Entries: "+Object.entries(person))

