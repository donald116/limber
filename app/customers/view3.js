'use strict';

angular.module('myApp.customers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customers', {
    templateUrl: 'customers/view3.html',
    controller: 'View3Ctrl'
  });
}])

var app = angular.module('myApp', []);
 app.controller('View3Ctrl', function($scope) {
  $scope.message= "msg";

   });

		//var ngApp = angular.module("ngApp", []);

app.controller('View3Ctrl', ['$http', function($http){
  var thisCtrl = this;

  this.getData = function () {
  this.route = 'customers/customers.json';
  $http.get(thisCtrl.route)
    .success(function(data){
     // console.log(data);
     alert("essai...");
    })
    .error(function(data){
      console.log("Error getting data from " + thisCtrl.route);
    });  
}
}]);

.controller('View3Ctrl', [function() {

}]);
