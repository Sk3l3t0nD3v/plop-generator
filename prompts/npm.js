module.exports = [
  {
    name: 'packages',
    type: 'checkbox',
    choices: [
      {
        name: '[Angular] Add Formly',
        value: { pk: '@ngx-formly/core', md: 'FormlyModule' },
      },
      {
        name: '[Angular] Add Material',
        value: { pk: '@angular/material' },
      },
      {
        name: '[Angular] Syncfusion Grids',
        value: { pk: '@syncfusion/ej2-angular-grids', md: 'GridModule' },
      },
      {
        name: '[Angular] Add Apex Charts',
        value: { pk: 'ng-apexcharts', md: 'NgApexchartsModule' },
      },
      {
        name: '[Angular] Add Strars Rating',
        value: { pk: 'ng-starrating', md: 'RatingModule' },
      },
      {
        name: '[Ionic] Add Storage Angular',
        value: {
          pk: '@ionic/storage-angular',
          md: `IonicStorageModule`,
        },
      },
    ],
    validate: (input) => {
      if (/.+/.test(input)) {
        return true;
      }
      return 'Scegli uno o più pacchetti';
    },
  },
  {
    when: (context) => angularMaterialPackageFound(context.packages),
    name: 'module',
    message: 'Inserisci il nome del modulo di Material da importare :',
    type: 'input',
    validate: (input) => {
      if (/.+/.test(input)) {
        return true;
      }
      return 'Nome modulo is required';
    },
  },
  {
    name: 'where',
    message: 'Dove vuoi importare il modulo ex: profile/profile.module.ts?',
    type: 'input',
    default: 'src/app/app.module.ts',
  },
  {
    type: 'directory',
    name: 'path',
    message: 'Seleziona la cartella root del progetto ',
    basePath: './',
  },
];

const angularMaterialPackageFound = (packages) => {
  if (!packages) return false;
  const found = packages.filter((package) => package.pk.includes('material'));
  return found.length > 0 ? true : false;
};
