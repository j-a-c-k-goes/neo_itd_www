// - - - built in module import - - -
const fs = require('fs');
const crypto = require('crypto');

// - - - fetch required json file - - -
const file = fs.readFileSync('./json/info.json');

// - - - parse the file as an object - - -
const parsed_file = JSON.parse(file);

// - - - load message - - -
const load_message = () => { console.log('- - - encrypt module - - -') };

// - - - create hash function - - -
 const create_hash = (data) => { return crypto.createHash('sha256').update(data).digest('hex'); };

// - - - module build - - -
const build_module = () => {
	const point_of_contact = `${parsed_file.people[0].role}, ${create_hash(parsed_file.people[0].name)}`;
	console.log('- - - building module from data - - -');
	console.log(`
		${parsed_file.alias[0]}

		email: ${ parsed_file.email }
		ein: ${ create_hash(parsed_file.ein) }
		point of contact: ${ point_of_contact }
		
		${ parsed_file.description[1] }
		`);
	// const div = document.createElement('div');
};

// - - - module exports - - - 
module.exports = { load_message, build_module, create_hash };