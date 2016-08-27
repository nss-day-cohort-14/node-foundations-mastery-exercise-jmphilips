#!/usr/bin/env node

'use strict';

const { createReadStream } = require('fs');
const { map, split } = require('event-stream');
const { transformStream } = require('./limit-ten.js');

const [,, userInput] = process.argv;



if (userInput === undefined) {
	console.log("Usage:");
	console.log("./word-search.js `your word to search`");
} else {

	const searchQuery = userInput.toLowerCase();

createReadStream('/usr/share/dict/words')
	.pipe(split())
	.pipe(map((data, callback) => {

		let newData = "No Match Found";

		data = data.toLowerCase()
		let indexer = searchQuery.length;

		if (data.slice(0, indexer) === searchQuery) {newData = data}

		callback(null, newData)		
	})).pipe(transformStream).pipe(process.stdout)
}