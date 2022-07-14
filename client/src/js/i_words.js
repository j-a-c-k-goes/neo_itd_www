/* 
    build manage list of i words for i,t,d randomizer
    use json data containg i words
*/

// - - - built in module import - - -
const fs = require('fs');
const data_file = '../json/i_words.json'; // bind file to variable

// - - - get the data - - -
const get_data = () => {
	try{
		const data = fs.readFileSync(data_file);
		return JSON.parse(data);
	} catch(error) {
		return 1;
	}
};

// - - - save updates to data - - -
const save_data = (data) => {
	fs.writeFileSync(data_file,JSON.stringify(data));
};
// - - - add a word (word) - - -
const add_word = (word) => {
	try {
		const data = get_data();
		const duplicate_words = data.filter( (word) => word.word === word );
		if (duplicate_words.length === 0){
			save_data(data);
			return word;
		} else {
			console.log('word is duplicate');
		}
	} catch (error) {
		console.log(error);
		return 1;
	}
} 
// - - - remove a word - - - 
const remove_word = (word) => {
	try{
		const data = get_data();
		const filtered_data = data.filter( (word) => { word.word !== word } );
		save_data(filtered_data);
		return word.length !== filtered_data.length;
	} catch (error) {
		return 1;
	}
	
}
// - - - list all words - - -
const list_words = () => {
	try {
		const data = get_data();
		data.forEach( (element,index) => { console.log(index,'\t', element.word); });
		return { data: data, status: 0 };
	} catch (error) {
		return { data: [], status: 1};
	}
};
// const data = get_data();
// console.log(data[0].word);
list_words();
module.exports = { remove_word, list_words, add_word };