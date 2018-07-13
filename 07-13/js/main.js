console.log("hey");
// Create a function called `go` that takes 2 arguments: 

// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console 
// (for example): `The car is moving forward, at 25 mph.`

// Add a condition inside the function to check if the speed is greater than 75 mph. 
// If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!

function go(direction, speed) {
    if (speed > 75) {
        console.log(`The car is moving forwrad at ${speed} mph. SLOW DOWN!!!`);
    } else {
        console.log(`The car is moving ${direction}, at ${speed} mph. You're good!`);
    }
}

go("forwards", "25");
go("backwards", "75");
go("backwards", "90");