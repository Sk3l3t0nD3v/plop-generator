module.exports = function (data) {
  const actions = [];
  const {
    projectName,
    projectAbsolutePath,
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
      actions.push(addIndexPage(projectName, projectAbsolutePath, controller));
    core.length > 0 &&
      actions.push(...addCorePages(projectName, projectAbsolutePath, core));
    controller.length > 0 &&
      actions.push(
        ...addControllerPages(projectName, projectAbsolutePath, controller),
      );
    model.length > 0 &&
      actions.push(...addModelPages(projectName, projectAbsolutePath, model));
    exception.length > 0 &&
      actions.push(
        ...addExceptionPages(projectName, projectAbsolutePath, exception),
      );
    middelware.length > 0 &&
      actions.push(
        ...addMiddelwarePages(projectName, projectAbsolutePath, middelware),
      );
    if (core.includes('Database')) {
      actions.push({
        type: 'add',
        path: `${projectAbsolutePath}/${projectName}/config.php`,
        templateFile: 'templates/mvc/config.hbs',
        abortOnFail: true,
      });
    }
    if (jwt) {
      actions.push({
        type: 'addMany',
        base: 'templates/mvc/vendor/jwt/',
        destination: `${projectAbsolutePath}/${projectName}/vendor/jwt/`,
        templateFiles: `templates/mvc/vendor/jwt/*.php`,
        abortOnFail: true,
      });
    }
  }
  return actions;
};

const addIndexPage = (projectName, projectAbsolutePath, controller) => {
  if (controller.length === 0) return controller;
  return {
    type: 'add',
    path: `${projectAbsolutePath}/${projectName}/public/index.php`,
    templateFile: 'templates/mvc/index.hbs',
    data: {
      user: controller.filter((e) => e.includes('UserController')),
      auth: controller.map((e) => e.includes('AuthController')),
      controllers: controller,
    },
    abortOnFail: true,
  };
};
const addControllerPages = (projectName, projectAbsolutePath, controller) => {
  return controller.map((c) => ({
    type: 'add',
    path: `${projectAbsolutePath}/${projectName}/controllers/${c}.php`,
    templateFile: `templates/mvc/controllers/${c}.hbs`,
    abortOnFail: true,
  }));
};
const addModelPages = (projectName, projectAbsolutePath, model) => {
  return model.map((m) => ({
    type: 'add',
    path: `${projectAbsolutePath}/${projectName}/models/${m}.php`,
    templateFile: `templates/mvc/models/${m}.hbs`,
    abortOnFail: true,
  }));
};
const addCorePages = (projectName, projectAbsolutePath, core) => {
  return core.map((c) => ({
    type: 'add',
    path: `${projectAbsolutePath}/${projectName}/core/${c}.php`,
    templateFile: `templates/mvc/core/${c}.hbs`,
    abortOnFail: true,
  }));
};
const addExceptionPages = (projectName, projectAbsolutePath, exception) => {
  return exception.map((e) => ({
    type: 'add',
    path: `${projectAbsolutePath}/${projectName}/exceptions/${e}.php`,
    templateFile: `templates/mvc/exceptions/${e}.hbs`,
    abortOnFail: true,
  }));
};
const addMiddelwarePages = (projectName, projectAbsolutePath, middelware) => {
  return middelware.map((m) => ({
    type: 'add',
    path: `${projectAbsolutePath}/${projectName}/middelwares/${m}.php`,
    templateFile: `templates/mvc/middelwares/${m}.hbs`,
    abortOnFail: true,
  }));
};
