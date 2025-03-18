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
