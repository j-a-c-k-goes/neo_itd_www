(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const header = require("./js/header.js");
const create_header = header.create_header();

const projects = require("./js/projects.js");
const create_projects = projects.create_projects();

const contact = require("./js/contact.js");
const create_contact = contact.create_contact();

console.info(create_header);
console.info(create_projects);
console.info(create_contact)
},{"./js/contact.js":2,"./js/header.js":3,"./js/projects.js":4}],2:[function(require,module,exports){
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
},{"../json/info.json":5}],3:[function(require,module,exports){
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
},{"../json/info.json":5}],4:[function(require,module,exports){
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
},{"../json/projects.json":6}],5:[function(require,module,exports){
module.exports=[
  { "alias": [ "neo itd inc.", "neo information technology and design incorporated", "neo itd" ] },
  { "email": "xyz@neoitd.org" },
  { "ein": "87-2444637" },
  { "description": "information technology and design for hyper function and utility." },
  {  "people": [ { "name": "jack a. lester", "role": "design and applications engineer" } ] }
]

},{}],6:[function(require,module,exports){
module.exports=[
  {
    "alias": "ads go camo",
    "description": "the excitement of discovery integrated into web ads",
    "hyperlink": "",
    "categories": [],
    "intentions":["make an ad invisible without killing advertisements", "designing ads that are more functional within web application space"],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "bop gun",
    "description": "",
    "hyperlink": "",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "comma question",
    "description": "an experiment in syntax and symbology",
    "hyperlink": "",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },
  {
    "alias": "debris floor",
    "description": "a floor and a waste remover",
    "hyperlink": "",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "dimsdale",
    "description": "",
    "hyperlink": "",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "easylikeok",
    "description": "content creator tool",
    "hyperlink": "https://www.easylikeok.com",
    "categories": [],
    "intentions":["expand TikTok trends", "influencer's bff"],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "koi mek",
    "description": "",
    "hyperlink": "",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "lolplastic",
    "description": "waste into wonder",
    "hyperlink": "https://www.lolplastic.com",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },
  
  {
    "alias": "malenko",
    "description": "",
    "hyperlink": "",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "mattrflo",
    "description": "a magical reduction of rest-associated objects",
    "hyperlink": "https://wwww.mattrflo.com",
    "categories": [],
    "intentions":["minimize rest structures", "change dynamics of sleep", "make people float"],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "okcitizen",
    "description": "service design for the have-nots",
    "hyperlink": "https://www.lloydglobal.com",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "ozmoronic",
    "description": "hyper media with half the effort.",
    "hyperlink": "https://www.ozmoronic.com",
    "categories": [],
    "intentions":["deliver autonomous function at user-level", "reduce data redundancy", "social media goes hyper media"],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "pawwws",
    "description": "security for public wifi (unencrpyted networks)",
    "hyperlink": "https://www.pawwws.eth",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "shaft yacht",
    "description": "penile hygeiene strucuture for toilet situations",
    "hyperlink": "https://www.shaftyacht.com",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "sky ray",
    "description": "",
    "hyperlink": "",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },

  {
    "alias": "tube condom",
    "description": "a contraceptive applied like lotion",
    "hyperlink": "",
    "categories": [],
    "intentions":[],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  },
  
  {
    "alias": "yoBpm",
    "description": "infinite autonomous music and rhythm",
    "hyperlink": "https://www.yobpm.com",
    "categories": [],
    "intentions":["expand musical genre", "become a composer's utility"],
    "phase": ["concept","research","model", "make available"],
    "budget": 1
  }
]
},{}]},{},[1]);
