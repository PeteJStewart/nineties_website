module.exports = function(grunt) {
  //require('load-grunt-tasks')(grunt);

  //var theme_name = 'ni_foundation_theme';
  //var base_theme_path = '../zurb_foundation';

  //var global_vars = {
  //  theme_name: theme_name,
  //  theme_css: 'css',
  //  theme_scss: 'scss',
  //  base_theme_path: base_theme_path
  //};

  var bourbon = require('node-bourbon').includePaths;

  grunt.initConfig({
    //global_vars: global_vars,
    pkg: grunt.file.readJSON('package.json'),


    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    // drush: {
    //   cc_theme_registry: {
    //     args: ['cc', 'theme-registry']
    //   },
    //   cc_css_js: {
    //     args: ['cc', 'all'] //  'css-js'] not working for some reason
    //   },
    //   cc_all: {
    //     args: ['cc', 'all']
    //   }
    // },
    // criticalcss: {
    //     home: {
    //         options: {
    //             url: "http://newint",
    //             width: 1200,
    //             height: 900,
    //             outputfile: "css/critical/home.css",
    //             filename: "css/full.css", // Using path.resolve( path.join( ... ) ) is a good idea here
    //             buffer: 800*1024,
    //             ignoreConsole: false
    //         }
    //     }
    // },

    watch: {
      //grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['compass'], //, 'drush:cc_css_js', 'criticalcss:home'], //not working yet due to phantom jquery trace missing
        //options: {
          //livereload: true
        //}
      },

      // templates: {
      //   files: ['templates/*.tpl.php','template.php', 'theme-settings.php'],
      //   tasks: ['drush:cc_theme_registry']
      // },

      // info: {
      //     files: '*.info',
      //     tasks: ['drush:cc_all'],
      // },
    }
  });
    
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-drush');
  //grunt.loadNpmTasks('grunt-criticalcss');
  //grunt.loadNpmTasks('watch');
  grunt.registerTask('build', ['compass']);
  grunt.registerTask('test', ['compass']);
  grunt.registerTask('watchfiles', ['watch']);
  grunt.registerTask('default', ['build', 'watchfiles']);
};
