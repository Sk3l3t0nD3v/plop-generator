const prompts = {
  mvc: require('../prompts/mvc'),
  files: require('../prompts/addFile'),
};
const actions = {
  mvc: require('../actions/mvc'),
  files: require('../actions/addFile'),
};
module.exports = {
  createProject: {
    descriptions: 'Create PHP MVC project',
    prompts: prompts.mvc,
    actions: actions.mvc,
  },
  addFile: {
    descriptions: 'Add files to project',
    prompts: prompts.files,
    actions: actions.files,
  },
};
