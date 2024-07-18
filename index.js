// Example: Hello, World! 
// Reverse String: !dlroW ,olleH

// Write a javascript function that reverses a given string

const reverseStringFunc = (str) => {
	return str.split('').reverse().join('');
};

const text = "Hello, World!";
const reverseText = reverseStringFunc(originalString);

console.log(reverseText); // Output: "!dlroW ,olleH"