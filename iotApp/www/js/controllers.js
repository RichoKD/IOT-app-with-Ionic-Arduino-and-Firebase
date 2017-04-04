angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('DashCtrl', function($scope,fireBaseData,$firebaseObject) {
	//reference to data in firebase
	ref1 = fireBaseData.ref().ref("switch");
	//Button color
	//$scope.color = $firebaseObject(ref1.child('color'));
	//Variable to be toggled
	$scope.toggle = $firebaseObject(ref1);
	
	/*if ($scope.toggle.state == true){
		$scope.color = "button-positive";
	}else{
		$scope.color = "button-dark";
	}*/
	
	//switches the light on or off and changes the color of the button depending on wether the light is on or off
	$scope.stateChange = function() {
	  if($scope.toggle.state == true){
		ref1.update({
			state : false,
			color : 'button-dark'
		})
		//$scope.color = "button-dark";
	  }else{
		ref1.update({
			state : true,
			color : 'button-positive'
		})
		//$scope.color = "button-positive";
	  }
		console.log($scope.toggle.state);
		console.log('coll '+$scope.toggle.color);
    };
  
/*ref1.once("value").then(function(snapshot){
	
	  if(snapshot.val().state == true){
		$scope.color = "button-positive";
		
	  }else{
		$scope.color = "button-dark";
		}
		console.log('Worked')
	  })*/
	})	
		


.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
