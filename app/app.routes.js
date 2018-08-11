(function(){
  angular
    .module('upaiApp')
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<homepage />'
        })
    })
})();