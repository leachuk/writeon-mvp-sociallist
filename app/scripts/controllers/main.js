'use strict';

angular.module('sociallistMvp1App')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.user = {};

  	$scope.userSignIn = function(){
		var data = {};
		data.username = $scope.user.email;
		data.password = $scope.user.password;
		console.log(data);

		//abstract to an auth API service
		$http.post('http://localhost:9000/api/users/signin', data).
		success(function(outdata, status, headers, config) {
			console.log(outdata);
			window.localStorage.setItem("writeon.authtoken", outdata.token);
			window.localStorage.setItem("writeon.username", data.username);
			//now redirect to users home page, where token is checked for
			window.location = "/home"; //will prob need to change this to come from header referer
		}).
		error(function(data, status, headers, config) {
			console.log("Invalid login attempt: " + data);
			$scope.signinForm.$setValidity("unauthorised", false);
		});
  	};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
