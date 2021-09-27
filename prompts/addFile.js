module.exports = [
  {
    message: 'Vuoi aggiungere un file al progetto ?',
    type: 'recursive',
    name: 'files',
    prompts: [
      {
        type: 'directory',
        name: 'path',
        message: 'Seleziona la cartella dove creare il file',
        basePath: './',
      },
      {
        when: (context) => context.path.includes('controllers'),
        type: 'list',
        name: 'controller',
        message: 'Scegli il controller da creare',
        choices: [
          { name: 'User', value: 'UserController' },
          { name: 'Auth', value: 'AuthController' },
          { name: 'Base', value: 'BaseController' },
        ],
      },
      {
        when: (context) => context.path.includes('models'),
        type: 'list',
        name: 'model',
        message: 'Scegli il model da creare',
        choices: [
          { name: 'User', value: 'User' },
          { name: 'Base', value: 'Base' },
        ],
      },
      {
        when: (context) => context.path.includes('middelwares'),
        type: 'list',
        name: 'middelware',
        message: 'Scegli il middelware da creare',
        choices: [
          { name: 'Auth', value: 'AuthMiddelware' },
          { name: 'Admin', value: 'AdminMiddelware' },
          { name: 'Base', value: 'BaseMiddelware' },
        ],
      },
      {
        when: (context) => context.path.includes('exception'),
        type: 'list',
        name: 'exception',
        message: "Scegli l'exception da creare",
        choices: [
          { name: 'Auth', value: 'AuthException' },
          { name: 'Admin', value: 'UserException' },
          { name: 'DataBase', value: 'DbException' },
          { name: 'Base', value: 'BaseException' },
        ],
      },
      {
        when: (context) => Object.values(context)[1].includes('Base'),
        type: 'input',
        name: 'name',
        message: 'Nome file :',
      },
    ],
  },
];
