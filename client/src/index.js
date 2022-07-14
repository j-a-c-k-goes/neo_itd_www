// - - - built in module import - - -
const fs = require('fs');

// - - - app defined modules - - -
const projects = require('./js/project.js');
const welcome = require('./js/welcome.js');
const contact = require('./js/contact.js');

// - - - export tests  - - -

// - - - welcome module - - -
welcome.load_message();
welcome.build_module();

// - - - project module - - -
projects.load_message();
projects.build_module();

// - - - conctact module - - -
contact.load_message();
contact.build_module();