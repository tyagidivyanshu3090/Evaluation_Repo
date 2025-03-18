// ? Commit 1: Null & NaN quirk Behaviour -> javaScript bug
// console.log(typeof null); //* object

// console.log(null === null); // true
// console.log(null == undefined); // true
// console.log(typeof null === "object"); // true, but misleading
// console.log(null instanceof Object); //! false (proves null is NOT an object)

// // * NaN is not a number but typeof shows number

// console.log(typeof NaN); // "number".
// // It is a special value that represents an invalid or undefined mathematical operation.
// console.log(0 / 0); // NaN
// console.log(Math.sqrt(-1)); // NaN (because square root of negative numbers is not real)
// console.log(parseInt("hello")); // NaN (cannot convert "hello" to a number)

// ? Commit 2: type Coercion

console.log("5" + 2); // * 52
console.log("5" - 2); // * 3
