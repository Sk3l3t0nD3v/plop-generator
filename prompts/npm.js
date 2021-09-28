module.exports = [
  {
    name: 'package',
    type: 'checkbox',
    choices: [
      { name: '[Angular] Add Formly', value: '@ngx-formly/core' },
      { name: '[Angular] Add Material', value: '@angular/material' },
      {
        name: '[Angular] Syncfusion Grids',
        value: '@syncfusion/ej2-angular-grids',
      },
      { name: '[Angular] Add Apex Charts', value: 'ng-apexcharts' },
      { name: '[Angular] Add Strars Rating', value: 'ng-starrating' },
      { name: '[Ionic] Add Storage Angular', value: '@ionic/storage-angular' },
    ],
    validate: (input) => {
      if (/.+/.test(input)) {
        return true;
      }
      return 'Scegli uno o più pacchetti';
    },
  },
  {
    when: (context) => angularPackageFound(context.package[0]),
    name: 'module',
    message: 'Inserisci il nome del modulo da importare :',
    type: 'input',
    validate: (input) => {
      if (/.+/.test(input)) {
        return true;
      }
      return 'Nome modulo is required';
    },
  },
  {
    when: (context) => angularPackageFound(context.package[0]),
    name: 'where',
    message: 'Dove vuoi importare il modulo ex:profile/profile.module.ts?',
    type: 'input',
    default: 'app.module.ts',
  },
];

const angularPackageFound = (package) => {
  if (!package) return false;
  const modules = ['angular', 'ionic', '@ngx', 'ng-'];
  const found =
    modules.filter((m) => package.includes(m)).length > 0 ? true : false;
  return found;
};
