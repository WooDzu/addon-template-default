var path = require('path');

module.exports = {

  name: 'addon-template-default',

  included: function(app) {

    this.app = app;
    this._super.included(app);
    // var modulePath = path.relative(app.project.root, __dirname);

    app.import('vendor/bootstrap/dist/css/bootstrap.min.css');
    app.import('vendor/bootstrap/dist/css/bootstrap-theme.min.css');
    app.import('vendor/addon-template-default/styles/app.css');
  }
};
