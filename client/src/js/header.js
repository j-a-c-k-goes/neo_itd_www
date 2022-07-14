function create_header () {
	const date = new Date();
	const data = require("../json/info.json");
	const parent = document.createElement("header");
	const alias_main = document.createElement("h1");
	const alias_sub = document.createElement("h2");
	const today = document.createElement("date");
	const email = document.createElement("a");
	const ein = document.createElement("p");
	
	today.innerHTML = date;
	alias_main.innerHTML = data[0].alias[0];
	alias_sub.innerHTML = data[3].description;
	email.href = `mailto:${data[1].email}`;
	email.innerHTML = data[1].email;
	ein.innerHTML = `ein: ${data[2].ein}`;

	const arrows = document.createElement("svg");
	arrows.className = "arrows";
	arrows.innerHTML =`
	<svg class="arrows">
    <path class="a1" d="M0 0 L30 32 L60 0"></path>
    <path class="a2" d="M0 20 L30 52 L60 20"></path>
    <path class="a3" d="M0 40 L30 72 L60 40"></path>
    </svg>`

	const header_elements = [ alias_main, arrows ];
	
	header_elements.forEach( (element) => { 
		const section = document.createElement("section");
		section.appendChild(element); 
		parent.appendChild(section);
	});
	
	document.body.appendChild(parent);
	return parent;
};

module.exports = { create_header };