'use strict';

angular.module('sociallistMvp1App')
  .controller('MainCtrl', function ($scope, $http, loomApi) {
  	$scope.user = {};
  	//*** example config override ***//
  	// var loomApiConfig = {
  	// 	port: "9500"
  	// }
  	// loomApi.Config.init(loomApiConfig);

  	$scope.userSignIn = function(){
		var data = {};
		data.username = $scope.user.email;
		data.password = $scope.user.password;
		console.log(data);

		//using abstracted auth API
		loomApi.User.signInUser(data.username, data.password).then(
			function(apidata){
				if(!apidata.status){
					//success
					console.log("signInUser success");
					window.localStorage.setItem("writeon.authtoken", apidata.token);
					window.localStorage.setItem("writeon.username", data.username);
				}else{
					//error
					console.log("signInUser error");
					//TODO handle error and notify client
				}
			}
		);
  	};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
