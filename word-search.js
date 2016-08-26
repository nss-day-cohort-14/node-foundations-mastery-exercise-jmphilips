#!/usr/bin/env node

'use strict';

const { createReadStream } = require('fs');
const { map, split } = require('event-stream');
const { transformStream } = require('./limit-ten.js');

const [,, searchQuery] = process.argv;

createReadStream('/usr/share/dict/words')
	.pipe(split())
	.pipe(map((data, callback) => {

		let newData = "No Match Found";

		data = data.toLowerCase()
		let indexer = searchQuery.length;

		if (data.slice(0, indexer) === searchQuery) {newData = data}

		callback(null, newData)		
	})).pipe(transformStream).pipe(process.stdout)

