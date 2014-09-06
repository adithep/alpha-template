Package.describe({
  summary: "Basic template control",
  version: "0.0.1",
  name: "bads:alpha-template"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.2-rc1');
  api.use([
    'bads:core-lib',
    'bads:utilities',
    'bads:alpha-stylus',
    'coffeescript',
    'standard-app-packages'
  ]);
  api.add_files(['template-control.coffee', 'subscription.coffee', 'template-control.sty'], 'client');
});

Package.on_test(function (api) {
  api.use("bads:alpha-template");

  api.add_files('template-control_tests.js', ['client', 'server']);
});
