module.exports = function (data) {
  const actions = [];
  const {
    projectName,
    isMVC,
    core,
    jwt,
    middelware,
    controller,
    model,
    exception,
  } = data;

  if (isMVC) {
    controller.length > 0 &&
      actions.push(addIndexPage(projectName, controller));
    core.length > 0 && actions.push(...addCorePages(projectName, core));
    controller.length > 0 &&
      actions.push(...addControllerPages(projectName, controller));
    model.length > 0 && actions.push(...addModelPages(projectName, model));
    exception.length > 0 &&
      actions.push(...addExceptionPages(projectName, exception));
    middelware.length > 0 &&
      actions.push(...addMiddelwarePages(projectName, middelware));
    if (core.includes('Database')) {
      actions.push({
        type: 'add',
        path: `dist/${projectName}/config.php`,
        templateFile: 'templates/mvc/config.hbs',
        abortOnFail: true,
      });
    }
    if (jwt) {
      actions.push({
        type: 'addMany',
        base: 'templates/mvc/vendor/jwt/',
        destination: `dist/${projectName}/vendor/jwt/`,
        templateFiles: `templates/mvc/vendor/jwt/*.php`,
        abortOnFail: true,
      });
    }
  }
  return actions;
};

const addIndexPage = (projectName, controller) => {
  if (controller.length === 0) return controller;
  return {
    type: 'add',
    path: `dist/${projectName}/public/index.php`,
    templateFile: 'templates/mvc/index.hbs',
    data: {
      user: controller.filter((e) => e.includes('UserController')),
      auth: controller.map((e) => e.includes('AuthController')),
      controllers: controller,
    },
    abortOnFail: true,
  };
};
const addControllerPages = (projectName, controller) => {
  return controller.map((c) => ({
    type: 'add',
    path: `dist/${projectName}/controllers/${c}.php`,
    templateFile: `templates/mvc/controllers/${c}.hbs`,
    abortOnFail: true,
  }));
};
const addModelPages = (projectName, model) => {
  return model.map((m) => ({
    type: 'add',
    path: `dist/${projectName}/models/${m}.php`,
    templateFile: `templates/mvc/models/${m}.hbs`,
    abortOnFail: true,
  }));
};
const addCorePages = (projectName, core) => {
  return core.map((c) => ({
    type: 'add',
    path: `dist/${projectName}/core/${c}.php`,
    templateFile: `templates/mvc/core/${c}.hbs`,
    abortOnFail: true,
  }));
};
const addExceptionPages = (projectName, exception) => {
  return exception.map((e) => ({
    type: 'add',
    path: `dist/${projectName}/exceptions/${e}.php`,
    templateFile: `templates/mvc/exceptions/${e}.hbs`,
    abortOnFail: true,
  }));
};
const addMiddelwarePages = (projectName, middelware) => {
  return middelware.map((m) => ({
    type: 'add',
    path: `dist/${projectName}/middelwares/${m}.php`,
    templateFile: `templates/mvc/middelwares/${m}.hbs`,
    abortOnFail: true,
  }));
};
