/*
    project module
    - - - - - - - - -
    fetch json from project data
    use data to build project module into grid format.
*/

// - - - load up message  - - -
const load_message = () => { console.log('- - - project module - - -') };

// - - - built in module import - - -
const fs = require('fs');

// - - - fetch required json file - - -
const file = fs.readFileSync('../json/projects.json');

// - - - parse the file as an object - - -
const parsed_file = JSON.parse(file, undefined, 2);

// - - - display alias of each data in object - - -
const list_all = () => {
	parsed_file.forEach( (element, index) => {
		console.log(
			`
		${index}\t${element.alias}\t${element.categories}
		- - - - - - - - - - - - -
		${element.description}
		${element.hyperlink}
		${element.phase[0]}
		${element.intentions[0]}
		${element.budget} BTC
		`)
	});
};
list_all();
// - - - module build - - -
const build_module = () => {
	console.log('- - - building module from data - - -');
	list_all();
	// const div = document.createElement('div');
};

// - - - invoke function - - -
// list_all(parsed_file);
// build_module(parsed_file);

// - - - exports - - -
module.exports = { load_message, build_module };