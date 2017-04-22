String Generator
================

String Generator generates random strings.

API Usage
---------

### Example:

```js
var stringGenerator = require("string-generator");

console.log(stringGenerator.randomString(15));
console.log(stringGenerator.randomString(15, "abcdefghijklmnopqrstuvwxyz"));
console.log(stringGenerator.randomAlphaNumericString(15));
```

Note: session middleware must be added before the login in order for it to work correctly

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
