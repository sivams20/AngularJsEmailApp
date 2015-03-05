/**
 * Created by Sivam on 2015-03-04.
 */

var app = angular.module('EmailApp');

app.controller('InboxCtrl',['$scope',function($scope){

    console.log("Inbox Controller");
    $scope.title = "My Inbox";

}]);