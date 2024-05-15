// for of loop

//    for (const iterator of object) {
    
//    }


// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

//console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

//console.log(map1.get('a'));
// Expected output: 97

//console.log(map1.size);
// Expected output: 3

//map1.delete('b');

//console.log(map1.size);
// Expected output: 2


// the major diff b/w map and object is the order of insertion is same in map where order may change in object.


/* <_________--map and object___________________________________> */

// In JavaScript, both maps and objects are used to store collections of key-value pairs, but they have some differences in their behavior and usage.

// Here are some of the major differences between maps and objects in JavaScript:

// Key Types:

// In objects, keys are always strings or symbols. If you use any other type as a key, it will be implicitly converted to a string.
// In maps, keys can be of any data type, including objects, functions, and primitive values like numbers, strings, and symbols.
// Iteration Order:

// Objects do not guarantee a specific order for iterating over their properties. The order in which properties are enumerated may vary between different JavaScript engines and versions.
// Maps maintain the order of key-value pairs as they are inserted. When iterating over a map, the key-value pairs are returned in the order of insertion.
// Size:

// In objects, you need to manually keep track of the number of properties or use the Object.keys(), Object.values(), or Object.entries() methods to get the number of properties.
// Maps have a built-in size property that returns the number of key-value pairs stored in the map.
// Property Existence:

// In objects, you can check for the existence of a property using the in operator or methods like hasOwnProperty().
// In maps, you can use the has() method to check for the existence of a key.
// Memory Usage:

// Maps typically consume more memory than objects, especially when storing a large number of key-value pairs, due to their internal data structures optimized for various key types and ordered iteration.
// Usage:

// Objects are commonly used for representing structured data and organizing related properties and methods.
// Maps are often used when the order of insertion matters, or when keys are of different data types, or when additional features like maintaining insertion order or easy size retrieval are needed.
// In summary, while objects and maps share some similarities in their use of key-value pairs, they have different characteristics and are suitable for different use cases based on their behavior and features.

// iterate over object by using for in
// identifing the size of object
const person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};
console.log(Object.keys(person).length);


// for (const key in person) {
//     console.log(`${key} : ${person[key]}`);
    
// }




// const personMap = new Map();

// // Adding key-value pairs to the map
// personMap.set("name", "John Doe");
// personMap.set("age", 30);
// personMap.set("email", "john@example.com");


// Iterate over the map
// for (const [key, value] of personMap) {
//     console.log(`${key}: ${value}`);
// }

