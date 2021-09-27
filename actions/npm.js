module.exports = ({ packages }) => {
  return [
    {
      type: 'npmInstallPackages',
      install: packages,
    },
  ];
};
