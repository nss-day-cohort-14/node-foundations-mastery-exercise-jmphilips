const { Transform } = require('stream'); 

const transformStream = Transform();

let count = 0;

transformStream._transform = (chunk, _, callback) => {

	processedChunk = chunk.toString() + "\n"

	if (processedChunk == "No Match Found\n") {
		processedChunk = null
	}
ddddd 
	if (count >= 10) {processedChunk = null};

	if (processedChunk !== null) {count++}

	callback(null, processedChunk)
}

module.exports = { transformStream }