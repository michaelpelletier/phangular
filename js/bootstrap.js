var Portfolio = Portfolio || {}

Portfolio = angular.module('portfolio_app', ['ngRoute', 'portfolio_app.controllers', 'ngResource', 'ngAnimate', 'ngSanitize', 'portfolio_app.directives']);

Portfolio.config(function($routeProvider) {        
  $routeProvider
    .when('/blog/:id',  	{ templateUrl: 'partials/blog-details.html'})
    .when('/blog',      	{ templateUrl: 'partials/blog.html'})
    .when('/portfolio', 	{ templateUrl: 'partials/portfolio.html'})
    .when('/project/:id',	{ templateUrl: 'partials/project-details.html'})
    .when('/resume',    	{ templateUrl: 'partials/resume.html'})
    .otherwise({redirectTo:'/home', templateUrl:'partials/home.html'});
});

Portfolio.factory('Blog', function ($resource) {
  return $resource('api.php/:id',{}, {
    update: {method:'PUT'}
  });
});

Portfolio.Controllers = angular.module('portfolio_app.controllers', []);
Portfolio.Directives = angular.module('portfolio_app.directives', []);
