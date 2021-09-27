module.exports = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Nome progetto',
  },
  {
    type: 'confirm',
    name: 'isMVC',
    message: 'Vuoi usare il pattern MVC ??',
    default: true,
  },
  {
    type: 'checkbox',
    name: 'core',
    message: 'Scegli i componenti CORE da creare',
    choices: [
      { name: 'Application', value: 'Application' },
      { name: 'Controller', value: 'Controller' },
      { name: 'Database', value: 'Database' },
      { name: 'Middelware', value: 'Middelware' },
      { name: 'JwtAuth', value: 'JwtAuth' },
      { name: 'Model', value: 'Model' },
      { name: 'Request', value: 'Request' },
      { name: 'Response', value: 'Response' },
      { name: 'Router', value: 'Router' },
    ],
  },
  {
    when: (context) => context.core.includes('JwtAuth'),
    name: 'jwt',
    message: 'Vuoi aggiungere la lib JWT ??',
    type: 'confirm',
    default: true,
  },
  {
    type: 'checkbox',
    name: 'model',
    message: 'Scegli i componenti MODEL da creare',
    choices: [{ name: 'User', value: 'User' }],
  },
  {
    type: 'checkbox',
    name: 'controller',
    message: 'Scegli i componenti CONTROLLER da creare',
    choices: [
      { name: 'Auth', value: 'AuthController' },
      { name: 'User', value: 'UserController' },
    ],
  },
  {
    type: 'checkbox',
    name: 'middelware',
    message: 'Scegli i componenti MIDDELWARE da creare',
    choices: [
      { name: 'Auth', value: 'AuthMiddelware' },
      { name: 'Admin', value: 'AdminMiddelware' },
    ],
  },
  {
    /* when: (context) => context.exception, */
    type: 'checkbox',
    name: 'exception',
    message: 'Scegli i componenti EXCEPTION da creare',
    choices: [
      { name: 'Auth', value: 'AuthException' },
      { name: 'User', value: 'UserException' },
      { name: 'Db', value: 'DbException' },
    ],
  },
];
