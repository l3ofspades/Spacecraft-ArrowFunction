/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
const activateHyperdrive = () => console.log("Hyperdrive activated!")
activateHyperdrive();
/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => "No lifeforms detected"
console.log(scanForLife());
/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
cosnt currentCoordinates = () => ({
    x: Math.floor(Math.random() * 1000),
    y: Math.floor(Math.random() * 1000),
    z: Math.floor(Math.random() * 1000)
});
// This will give you a random set oif coordinates between 0 and 999 every time you call it.

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = {
    name: "Galactic Crusier",
    receiveMessage: (message) => {
        console.log("Message recieved: " + message);
        console.log("this.name is ", this.name);
    }
};

spacecraft.receiveMessage("Welcome back, crew!");




/*
 * Observations: this.name will be undefined because the arrow finctions dont bind their own (this) they capture (this) form the surrounding context.

 * TODO: Explain here. 
// if you want to fix (this) to refer to the spacecraft object
 */ 

// const spacecraft = {
// name: "Galactic Crusier" ,
// receiveMessage(message) {
// console.log("Message recieved: " + message);
// console.log("this.name is: ", this.name); (Correctly logs "Galactic Cruiser") }
// spacecraft.recieveMessage("welcome back, crew!")

