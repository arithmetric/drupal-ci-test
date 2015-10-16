module.exports = function(grunt) {

  // Load all plugins and tasks defined by the grunt-drupal-tasks package.
  require('grunt-drupal-tasks')(grunt);

  // If bin/grunt exists, load task files.
  if (grunt.file.exists(__dirname + '/bin/grunt')) {
    grunt.loadTasks(__dirname + '/bin/grunt');
  }

  // Modify the default task to fully build and configure the project.
  var tasksDefault = [
    'bundle-install',
    'composer:install',
    'validate',
    'drushmake:default',
    'scaffold',
    'compile-theme'
  ];
  grunt.task.renameTask('default', 'default-original');
  grunt.registerTask('default', tasksDefault);

};
