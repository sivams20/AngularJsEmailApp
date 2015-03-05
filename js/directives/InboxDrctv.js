

var app = angular.module('EmailApp');

app.directive('Inbox',function(){

    return {

        restrict : 'E',
        replace : 'true',
        templateUrl : 'js/directives/inbox.tmpl.html',
        link : function( scope, element, attr, ctrl){

        }

    }

});