String Generator
================

String Generator generates random strings.

Installation
------------
```
npm install string-gen
```

API Usage
---------

### Example:

```js
var stringGenerator = require("string-generator");

console.log(stringGenerator.randomString(15));
console.log(stringGenerator.randomString(15, "abcdefghijklmnopqrstuvwxyz"));
console.log(stringGenerator.randomAlphaNumericString(15));
```

### Available functions

**stringGenerator.randomString(length, characters)**

Generates a random string of length `length`, optionally from the set of characters in `characters`.

Parameters:

|Parameter|Type|Description|
|---------|----|-----------|
|length|number|The length of string to generate|
|characters|string|The characters from which to generate the string. If this argument is undefined, the default set of characters is used.|

Default set of characters: ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+-={}[]:\";'<>?,./|\``

**stringGenerator.randomAlphaNumericString(length)**

Generates a random string of length `length` from the set of alphanumeric characters (including both uppercase and lowercase).

Parameters:

|Parameter|Type|Description|
|---------|----|-----------|
|length|number|The length of string to generate|

**stringGenerator.randomHex(length)**

Generates a random hex string of length `length`.

Parameters:

|Parameter|Type|Description|
|---------|----|-----------|
|length|number|The length of string to generate|
