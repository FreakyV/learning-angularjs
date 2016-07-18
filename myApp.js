

var myApp = angular.module('myApp', []);


myApp.controller("exemplctrl1", function($scope){
	$scope.age = 0;
	$scope.majeurOrMineurText = function(){
	console.log('test');
		return ($scope.age >= 18) ? 'majeur' : 'mineur';
	};

});


var app = angular.module("app",[]);
app.controller("myController", function($scope){
	console.log('test2');
	$scope.showContent = true;
});

angular.bootstrap(document.getElementById("app2"),['app']);