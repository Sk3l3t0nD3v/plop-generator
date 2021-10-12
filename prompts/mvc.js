module.exports = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Nome progetto',
  },
  {
    type: 'input',
    name: 'projectAbsolutePath',
    message: 'Inserisci il path assoluto della cartella del progetto',
    validate: (input) => {
      if (/.+/.test(input)) {
        return true;
      }
      return 'Path obbligatorio';
    },
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
      { name: 'Middleware', value: 'Middleware' },
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
    name: 'middleware',
    message: 'Scegli i componenti MIDDLEWARE da creare',
    choices: [
      { name: 'Auth', value: 'AuthMiddleware' },
      { name: 'Admin', value: 'AdminMiddleware' },
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
