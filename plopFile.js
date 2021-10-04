const backendGen = require('./generators/backend');
const npmGen = require('./generators/npm');
const recursive = require('inquirer-recursive');
const directory = require('inquirer-directory');
//For use directory inside recursive promts, register directory in the inquirer of inquirer-recursive
const inquirerRecursive = require('inquirer-recursive/node_modules/inquirer');
inquirerRecursive.registerPrompt('directory', require('inquirer-directory'));

module.exports = (plop) => {
  plop.load('plop-pack-npm-install-packages');
  plop.setPrompt('recursive', recursive);
  plop.setPrompt('directory', directory);
  //HELPER
  plop.setHelper('addSlash', (txt) => '\\' + txt);
  plop.setHelper(
    'firstUpperCase',
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1),
  );

  // controller generator
  plop.setGenerator('[Backend] create project MVC', backendGen.createProject);
  plop.setGenerator('[Backend] add file to project ', backendGen.addFile);
  plop.setGenerator('[Frontend] add NPM packages to project ', npmGen);
};
