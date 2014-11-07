requirejs.config({
    paths: {
        bootstrap             : 'http://getbootstrap.com/dist/js/bootstrap.min',
		jquery				  : 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        angular               : 'https://code.angularjs.org/1.2.26/angular.min',
        angular_route         : 'https://code.angularjs.org/1.2.26/angular-route.min',
        app                   : 'app'
    },
    shim: {
        "bootstrap":
        {
            deps: ["jquery"]
        },
        "angular":
        {
            deps: ["jquery"]
        },
        "angular_route":
        {
            deps: ["angular"]
        },
        "app":
        {
            deps: ["angular","angular_route"]
        }
    },
    waitSeconds: 0
});

require(["bootstrap","angular","angular_route","app"], function(app) {
    angular.bootstrap(document, ['app']);
});