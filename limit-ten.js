const { Transform } = require('stream'); 

const transformStream = Transform();

let count = 0;

transformStream._transform = (chunk, _, callback) => {

	processedChunk = chunk.toString() + "\n";
	processedChunk == "No Match Found\n" ? processedChunk = null : null;
	count >= 10 ? processedChunk = null : null;
	processedChunk ? count++ : null;

	callback(null, processedChunk)
}

module.exports = { transformStream }