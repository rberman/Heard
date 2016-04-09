angular.module('app.controllers', [])


.controller('reportCtrl', function($scope) {

})


//  Cite https://www.thepolyglotdeveloper.com/2014/10/implement-google-maps-using-ionicframework/

.controller('safeCtrl', function($scope, $ionicLoading) {

  google.maps.event.addDomListener(window, 'load', function() {
    var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "My Location"
      });
    });

    $scope.map = map;
  });

})

.controller('reportCtrl', function($scope, $ionicLoading) {

  google.maps.event.addDomListener(window, 'load', function() {
    var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("report-map"), mapOptions);

    navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "My Location"
      });
    });

    $scope.map = map;
  });

});
