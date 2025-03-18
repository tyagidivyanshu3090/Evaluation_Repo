# 📝 Commit 1: JavaScript bug

- Null is primitive type in javaScript but `typeof operator` shows it as Object
- NaN stands for "Not-a-Number", but ironically, its type is "number".
  - It is a special value that represents an invalid or undefined mathematical operation.

```js
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN (because square root of negative numbers is not real)
console.log(parseInt("hello")); // NaN (cannot convert "hello" to a number)
```

# 📝 Commit 2: Type coercion

- ✅ General Rule: If one operand is a string in +, JavaScript converts the other operand to a string and concatenates.
- ✅ General Rule: For -, \*, /, %, JavaScript tries to convert strings to numbers if possible.
- ✅ Non-numeric strings result in `NaN` (Not-a-Number) when used in arithmetic operations.

```js
console.log("hello" - 5); // NaN
console.log("20px" / 2); // NaN
```

# 📝 Commit 3: JavaScript

- primitive type are immutable and whereas object types are mutable in js.
- primitive datatye: `Bigint` @ defined using 'n' as the suffix to number or BigInt function

```js
let bigNum = 123456789012345678901234567890n;
let bigNum1 = BigInt(12345678901234567890);
```

- In javaScript function are object and can be assigned to variable, passed as argument or returned form function
- To iterate over the array there are 2 method `forEach` and `map`. Both have same syntax but map function transforms elements and returns a new array whereas forEach(): Executes code but does NOT return a new array

## 🔹 Yes, map() and forEach() do NOT modify the original array

- Both map() and forEach() iterate over an array, but neither modifies the original array directly unless you explicitly change the elements inside the callback.

```js
let numbers = [1, 2, 3, 4];

let result = numbers.forEach((num) => num * 2);

console.log(result); // undefined ❌ (Does not return a new array)
console.log(numbers); // [1, 2, 3, 4] (Original array unchanged)
```

## 🧐 Purpose of isNaN:

- The isNaN() function is used to check if a value is NaN (Not-a-Number). It returns:
- ✅ true → if the value is NaN
- ❌ false → if the value is a valid number
