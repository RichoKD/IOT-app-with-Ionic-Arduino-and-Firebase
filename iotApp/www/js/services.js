angular.module('app.services', [])

.factory('fireBaseData', function($firebase) {
	
   var instance = null;
	
	return {
	 initialize: function(){
      var config = {
    
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		storageBucket: "",
		messagingSenderId: ""
		};

        // initialize database and storage
         instance = firebase.initializeApp(config);
         //storageInstance = firebase.storage();
  
	  },
  
  
    /*ref: function(){
      return ref;
    },*/
    ref: function(){
      return instance.database()//instance.database();
    }
  }

})

