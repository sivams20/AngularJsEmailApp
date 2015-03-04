/**
 * Created by Sivam on 2015-03-04.
 */


var app = angular.module('EmailApp',['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/inbox',{
            templateUrl: 'views/inbox.html',
            controller : 'InboxCtrl'
        })
        .otherwise({
            redirectTo : '/inbox'
        })

}]);

