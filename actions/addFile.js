/* module.exports = function (data) {
  console.log(data);
  const actions = [];

  console.log(data);
  let fileName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

  if (data.controller) {
    fileName += 'Controller';
    actions.push({
      type: 'add',
      path: `${data.path}/${fileName}.php`,
      templateFile: `templates/mvc/${folder(data.path)}/${data.controller}.hbs`,
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
    fileName += 'Middelware';
    actions.push({
      type: 'add',
      path: `${data.path}/${fileName}.php`,
      templateFile: `templates/mvc/${folder(data.path)}/${data.middelware}.hbs`,
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
    fileName += 'Exception';
    actions.push({
      type: 'add',
      path: `${data.path}/${fileName}.php`,
      templateFile: `templates/mvc/${folder(data.path)}/${data.exception}.hbs`,
      data: { className: fileName },
      abortOnFail: true,
      skip: () => {
        if (data.exception === undefined) {
          return;
        }
      },
    });
  }

  return actions;
};
 */
module.exports = function (context) {
  const actions = [];

  for (let i = 0; i < context.files.length; i++) {
    const data = context.files[i];

    console.log(data);
    let fileName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

    if (data.controller) {
      fileName += 'Controller';
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
      fileName += 'Middelware';
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
      fileName += 'Exception';
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
  console.log(actions);
  return actions;
};

const folder = (path) => {
  const pathArray = path.split('/');
  return pathArray[pathArray.length - 1];
};
