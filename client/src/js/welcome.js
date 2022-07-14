// - - - built in module import - - -
const fs = require('fs');

// - - - fetch required json file - - -
const file = fs.readFileSync('./json/info.json');

// - - - parse the file as an object - - -
const parsed_file = JSON.parse(file);

// - - - load message - - -
const load_message = () => { console.log('- - - welcome module - - -') };

// - - - module build - - -
const build_module = () => {
	const date = new Date;
	console.log('- - - building module from data - - -');
	console.log(`
		${parsed_file.alias[1]}\t${date.toLocaleDateString()}\n
		"${ parsed_file.description[0].toUpperCase() }"
		`);
	// const div = document.createElement('div');
};

// - - - module exports - - - 
module.exports = { load_message, build_module };