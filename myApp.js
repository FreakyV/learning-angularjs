

var myApp = angular.module('myApp', []);


myApp.controller("exemplctrl1", function($scope){
	$scope.age = 0;
	$scope.majeurOrMineurText = function(){
	console.log('test');
		return ($scope.age >= 18) ? 'majeur' : 'mineur';
	};

});