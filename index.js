"use strict";

function randomString(length, characters) {
	let possibleCharacters = characters || "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
	let generatedCharacters = [];

	for(var i = 0; i < length; i++) {
		generatedCharacters.push(possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length)));
	}

	return generatedCharacters.join("");
}

function randomAlphaNumericString(length) {
	return randomString(length, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
}

function randomHex(length) {
	return randomString(length, "0123456789ABCDEF");
}

module.exports.randomString = randomString;
module.exports.randomAlphaNumericString = randomAlphaNumericString;
module.exports.randomHex = randomHex;
