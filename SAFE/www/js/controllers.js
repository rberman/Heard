angular.module('app.controllers', [])

//  Cite https://www.thepolyglotdeveloper.com/2014/10/implement-google-maps-using-ionicframework/
//  Cite http://ionicframework.com/docs/api/service/$ionicPopup/

.controller('reportCtrl', function($scope) {

})

.controller('safeCtrl', function($scope, $ionicLoading) {
  //$scope.$on( "$ionicView.enter", function() {
  //  google.maps.event.trigger( map, 'resize' );
  //});

  $scope.initMap = function() {
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


      google.maps.event.addListenerOnce($scope.map, 'idle', function(){
        var latLng = new google.maps.LatLng(44.457101,  -93.154726);

        var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng,
          icon: 'http://maps.google.com/mapfiles/ms/icons/purple.png'
        });

        var infoWindow = new google.maps.InfoWindow({
          content: "This was a report"
        });

        google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
        });
      });
    });
  }

})

.controller('reportCtrl', function($scope, $ionicPopup, $ionicLoading) {

  $scope.initReportMap = function() {
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
  };


  // A confirm dialog
  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Call 911',
      template: 'Are you sure you want to call 911?'
    });
    confirmPopup.then(function(res) {
      if(res) {
        document.location.href = 'tel:16504641779'
      } else {
        console.log('You are not sure');
      }
    });
  };
})



.controller('feedCtrl', function($scope, Reports) {

  Reports.query().$promise.then(function(data) {
    $scope.reports = data;
    console.log($scope.reports);
  });

  $scope.getColor = function(category_id) {
    if (category_id == 1) return "calm"; // verbal
    if (category_id == 2) return "balanced"; // physical
    if (category_id == 3) return "royal"; // other
  }

});
