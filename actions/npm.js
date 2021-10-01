const path = require('path');
module.exports = ({ packages, module, where }) => {
  const actions = [];
  console.log(packages);
  packages.forEach((package) => {
    let { pk, md } = package;
    if (package.pk.includes('material')) md = module;

    const rootAppPath = path.resolve(__dirname + '/../src/app');
    console.log(`${rootAppPath}/${where}`);
    console.log(`${pk}/${md}`);
    /*  actions.push({
      type: 'npmInstallPackages',
      install: pk,
    }); */

    //insert module inported to module of app
    actions.push({
      type: 'modify',
      path: `${rootAppPath}/${where}`,
      pattern: /;/m,
      template: `;\r\nimport { ${md} } from '${pk}';`,
    });
    actions.push({
      type: 'modify',
      path: `${rootAppPath}/${where}`,
      pattern: /imports: \[/g,
      template: `imports: [ \r\n ${md},`,
    });
  });
  console.log(actions);
  return actions;
};

/* insert text between
<img src="/assets/img/image.jpg">
str.replace(/(=['"])(\/?assets\/img)/g, '$1mypath$2')
              ^^^^^  ^^^^^^^^^^^^^^      ^^      ^^-
              1st     2nd               1st       2nd
result
<img src="mypath/assets/img/image.jpg">*/
