(function(){
  angular
    .module('upaiApp')
    .factory('httpService', httpService)

    function httpService() {
      
      var service = {
        getCard = getCard
      }
      return service;

      function getCard() {
        
      }
    }
})()