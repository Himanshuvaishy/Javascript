Q-What are template literals?

Template literals are a feature in JavaScript that allows you to work with strings in a more flexible and readable way. They are especially useful for embedding expressions, creating multi-line strings, and including variables or expressions directly within strings.

Key Features of Template Literals
Backticks ( ) Instead of Quotes:

Unlike regular strings, which are enclosed in single (' ') or double quotes (" "), template literals are enclosed in backticks (`).
Example:
javascript
Copy code
let name = 'Rohit';
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Rohit!
Expression Interpolation:

Template literals allow you to embed variables and expressions inside the string using ${}.
Example:
javascript
Copy code
let a = 5;
let b = 10;
let result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: The sum of 5 and 10 is 15.
Multi-line Strings:

With template literals, you can create multi-line strings easily by pressing Enter to start a new line, without needing special characters like \n.
Example:
javascript
Copy code
let message = `This is a multi-line string.
It spans across multiple lines.
Isn't that cool?`;
console.log(message);
/* 
Output:
This is a multi-line string.
It spans across multiple lines.
Isn't that cool?
*/
Tagged Templates (Advanced):

You can define a function to process a template literal by prefixing the template with a function name (a "tag"). This is more advanced and allows you to manipulate the template strings and values before they are combined into the final string.
Example:
javascript
Copy code
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<strong>${values[i] || ''}</strong>`, '');
}

let name = "Rohit";
let hobby = "coding";
let sentence = highlight`Hello, my name is ${name} and I love ${hobby}.`;
console.log(sentence); // Output: Hello, my name is <strong>Rohit</strong> and I love <strong>coding</strong>.

Why Use Template Literals?

Readability: Template literals make your code more readable, especially when dealing with strings that contain variables or expressions.
Ease of Use: They make it easier to create strings with dynamic content and handle multi-line strings without needing to use concatenation or escape characters.
Flexibility: The ability to include expressions directly within the string makes them a powerful tool for creating complex string outputs.
In summary, template literals are a modern and powerful way to handle strings in JavaScript, making your code cleaner and more efficient.






