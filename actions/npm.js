const path = require('path');
module.exports = ({ package, module, where }) => {
  const actions = [];
  const rootAppPath = path.resolve(__dirname + '/../src/app');
  console.log(`${rootAppPath}/${where}`);
  actions.push({
    type: 'npmInstallPackages',
    install: package,
  });

  //insert module inported to module of app
  actions.push({
    type: 'modify',
    path: `${rootAppPath}/${where}`,
    pattern: /;/m,
    template: ";\r\nimport { {{module}} } from '{{package}}';",
  });
  actions.push({
    type: 'modify',
    path: `${rootAppPath}/${where}`,
    pattern: /imports: \[/g,
    template: `imports: [ \r\n ${module},`,
  });
  return actions;
};

/* insert text between
<img src="/assets/img/image.jpg">
str.replace(/(=['"])(\/?assets\/img)/g, '$1mypath$2')
              ^^^^^  ^^^^^^^^^^^^^^      ^^      ^^-
              1st     2nd               1st       2nd
result
<img src="mypath/assets/img/image.jpg">*/
