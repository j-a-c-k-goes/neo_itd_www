function create_contact () {
	const date = new Date();
	const data = require("../json/info.json");
	const parent = document.createElement("footer");
	
	
	const today = document.createElement("date");
	const alias = document.createElement("h2");
	const email = document.createElement("a")
	const ein = document.createElement("p");
	const desc = document.createElement("p");
	const people = document.createElement("p");

	today.innerHTML = `${date}`;
	alias.innerHTML = data[0].alias[1];
	email.href = `mailto:${data[1].email}`;
	email.innerHTML = data[1].email;
	ein.innerHTML = `ein: ${data[2].ein}`;
	desc.innerHTML = `${data[3].description}`;
	people.innerHTML = `currently @ neo: ${data[4].people[0].name}, ${data[4].people[0].role}`;
	section_elements = [ alias, desc, today,  email, ein, people ];

	section_elements.forEach((element)=>{
		const section = document.createElement("section");
		section.appendChild(element);
		parent.appendChild(section);
	});
	
	
	document.body.appendChild(parent);
	
	return parent;
};

module.exports = { create_contact };