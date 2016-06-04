Package.describe({
  name: "one-project-theme"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',

    'nova:core',
    'nova:base-components',
    'nova:posts',
    'nova:users',
    'nova:comments',
    'nova:categories',
    'nova:email',
    'nova:embedly',
    'nova:search',
    'nova:voting',
    'nova:forms',
    'nova:kadira',
    'nova:share'

  ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/stylesheets/custom.scss'
  ], ['client']);

});
