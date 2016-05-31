/**
 * Created by night on 2016/01/12.
 */
require.config({
    baseUrl: '.',
    urlArgs: 't=' + '20160112161351',
    waitSeconds: 60,
    paths: {
        jquery: "lib/jquery/js/jquery.min",
        ejs: "lib/ejs/js/ejs.min",

        slides: "lib/slides/js/jquery.slides",

        common : "res/js/common",
        app : "res/js/app",

        'data.cases' : "res/data/cases"
    },
    shim: {
        slides : ['jquery']
    }
});

require(['res/js/main'],function(app){
    app.init();
});