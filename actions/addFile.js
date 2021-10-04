module.exports = function (context) {
  const actions = [];

  for (let i = 0; i < context.files.length; i++) {
    const data = context.files[i];

    //console.log(data);
    let fileName =
      data.name && data.name.charAt(0).toUpperCase() + data.name.slice(1);

    if (data.controller) {
      fileName = fileName ? fileName + 'Controller' : data.controller;
      actions.push({
        type: 'add',
        path: `${data.path}/${fileName}.php`,
        templateFile: `templates/mvc/${folder(data.path)}/${
          data.controller
        }.hbs`,
        data: { className: fileName },
        abortOnFail: true,
        skip: () => {
          if (data.controller === undefined) {
            return;
          }
        },
      });
    }
    if (data.model) {
      fileName = fileName ? fileName : data.model;
      actions.push({
        type: 'add',
        path: `${data.path}/${fileName}.php`,
        templateFile: `templates/mvc/${folder(data.path)}/${data.model}.hbs`,
        data: { className: fileName },
        abortOnFail: true,
        skip: () => {
          if (data.model === undefined) {
            return;
          }
        },
      });
    }
    if (data.middelware) {
      fileName = fileName ? fileName + 'Middelware' : data.middelware;
      actions.push({
        type: 'add',
        path: `${data.path}/${fileName}.php`,
        templateFile: `templates/mvc/${folder(data.path)}/${
          data.middelware
        }.hbs`,
        data: { className: fileName },
        abortOnFail: true,
        skip: () => {
          if (data.middelware === undefined) {
            return;
          }
        },
      });
    }
    if (data.exception) {
      fileName = fileName ? fileName + 'Exception' : data.exception;
      actions.push({
        type: 'add',
        path: `${data.path}/${fileName}.php`,
        templateFile: `templates/mvc/${folder(data.path)}/${
          data.exception
        }.hbs`,
        data: { className: fileName },
        abortOnFail: true,
        skip: () => {
          if (data.exception === undefined) {
            return;
          }
        },
      });
    }
  }
  // console.log(actions);
  return actions;
};

const folder = (path) => {
  const pathArray = path.split('/');
  return pathArray[pathArray.length - 1];
};
