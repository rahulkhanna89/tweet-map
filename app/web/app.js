
var app = angular.module('tweetmap',[]).controller('initialize',['$scope',function($scope,sharedMap){
	$scope.myFunction = function(){
		
		var mapOptions = {
	    	zoom: 2,
	      	center: {lat: -33.865427, lng: 151.196123},
	      	mapTypeId: google.maps.MapTypeId.TERRAIN
	    };
	    
	    $scope.sharedMap = new google.maps.Map(document.getElementById('map'),mapOptions);
	
	

  	};
}]);

app.service('sharedMap', function () {
     var map;
    return map;
});

app.controller('tweetCtrl',['$http', function($http,sharedMap){
    


	$http.get('').success(function(data){
		$scope.sharedMap.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');



	});


}]);