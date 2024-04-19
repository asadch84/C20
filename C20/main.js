//🚀 Day 20 Challenge: Start Coding! 🚀
//Question 58: Average Score Calculator: 
//Write a simple program that can take lots of scores and find their average.
// Function to calculate the average score
function calculateAverageScore(scores) {
    // Add all scores together and divids by the number of scores
    var sum = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return sum / scores.length;
}
// Example usage:
// List of scores
var scores = [85, 90, 75, 95, 88];
// Calculate the average score by calling the function and passing the scores array
var average = calculateAverageScore(scores);
// Print the average score
console.log("Average Score:", average);
//Question 59: Add a Special Number: Make a program that creates custom adders. 
// These adders can add a specific number to any other number you give them later.
// Function to create a custom adder
function createAdder(numberToAdd) {
    // Return a function that takes a number as input and adds it to the numberToAdd
    return function (number) {
        return number + numberToAdd;
    };
}
// Example usage:
// Create a custom adder that adds 5 to any number
var addFive = createAdder(5);
// Add 5 to a number (e.g., 10)
console.log("Adding 5 to 10:", addFive(10)); // Output: 15
// Create a custom adder that adds -3 to any number
var addNegativeThree = createAdder(-3);
// Add -3 to a number (e.g., 8)
console.log("Adding -3 to 8:", addNegativeThree(8)); // Output: 5
//Question 60: Self-Running User Profile: 
//Create a quick, self-setup profile for a user ellthat can t you the user's name and age.
// Function to create a user profile
function createUserProfile() {
    var name = "asad";
    var age = 40;
    // Return an object with a displayProfile method
    return {
        displayProfile: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
}
// Assign the result of createUserProfile() to a variable
var userProfile = createUserProfile();
// Call the displayProfile method on the userProfile object
userProfile.displayProfile(); // It will display the user's name and age
