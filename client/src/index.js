const header = require("./js/header.js");
const create_header = header.create_header();

const projects = require("./js/projects.js");
const create_projects = projects.create_projects();

const contact = require("./js/contact.js");
const create_contact = contact.create_contact();

console.info(create_header);
console.info(create_projects);
console.info(create_contact)