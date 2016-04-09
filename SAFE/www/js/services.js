angular.module('app.services', ['ngResource'])

.factory('Reports', function($resource){
  return $resource('https://safecarlhacks2016.herokuapp.com/reports.json');
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

