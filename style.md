## Introduction
The purpose of this file is to cover Rungeon's coding standards. While you can automatically format your code with [Prettier](/contributing.md) it is suggested you refer to this file for specific styles. 

## Formatting

### Use double quotes
Ordinary string literals are delimited with single quotes ("). 

### Block indentation: +2 spaces
Each time a new block is opened, the indent increases by two spaces. 

### Semicolons are required
Every statement must be concluded with a semicolon (;).

## JavaScript

### Use const and let
Declare all variables with either `const` or `let`. The `var` keyword must not be used.

### Use trailing commas
Include a trailing comma whenever there is a line break between the final element and the closing bracket.

Example:

```js
const values = [
  'first value',
  'second value',
];
```

### Arrow functions
Prefer arrow functions over the `function` keyword. 

## Naming

### General rules
- Give as descriptive a name as possible
- Avoid ambigious and unfamiliar abbreviations
- Don't abbreviate by deleting letters within a word
- Use only ASCII characters and digits
- Avoid Hungarian notation

### Naming convention
All variables should be typed in `lowerCamelCase`. 

### File names
File names must be all lowercase and include no punctuation. 

## Notes

### Deprecated
Mark deprecated methods with an annotation (@deprecated). 

### Reformatting existing code
It is not required to change all existing code to meet current style guidelines.
```
