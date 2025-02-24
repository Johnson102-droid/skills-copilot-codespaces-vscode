const { skillsFunction } = require("./skills"); // Import function from skills.js

function skillsMember() {
    console.log("Skills Member function executed successfully!");
    skillsFunction(); // Call the function from skills.js
}

skillsMember(); // Call the function to test
