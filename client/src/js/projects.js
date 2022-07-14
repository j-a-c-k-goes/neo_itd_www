function create_projects () {
	const data = require("../json/projects.json");
	const parent = document.createElement("div");
	parent.className = "projects";
	data.forEach( (element) => {
		const section = document.createElement("section");
		section.className = "project";
		section.id = `${element.alias}`

		const h3 = document.createElement("h3");
		h3.innerHTML = `${element.alias}`;
		
		const p = document.createElement("p");
		p.innerHTML = `${element.description}`;

		const rule = document.createElement("hr");
		
		const link_section = document.createElement("section");
		link_section.className = "links";
		const a_internal = document.createElement("a");
		const a_external = document.createElement("a");
		a_internal.href = `${element.hyperlink}`;
		a_internal.innerHTML = `view live project`;
		a_external.href = `${element.hyperlink}`;
		a_external.innerHTML = `project page`;
		const link_elements = [a_internal, a_external];
		link_elements.forEach((link) => {
			link_section.appendChild(link);
		});
	
		const section_elements = [ p,  h3, link_section,  ];

		section_elements.forEach( (e) => {
			section.appendChild(e);
		});
		parent.appendChild(section);
	} );
	document.body.appendChild(parent);
	return parent;
};

module.exports = { create_projects };