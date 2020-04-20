(function () {
'use strict';

angular.module('Lunch', [])
.controller('lunchChecker', lunchChecker);

lunchChecker.$inject = ['$scope'];
function lunchChecker($scope) {
  


  $scope.Hello = function () {
    var lunchMenu  = document.getElementById('lunch-menu').value;
    if(lunchMenu===""){
      $scope.msg = "PLease enter data first";
      console.log("PLease enter data first");
    }
    else{
    var result;
      result = lunchMenu.split(","); 
      console.log(result);
      if(result.length<=3){
      console.log("Enjoy");
      $scope.msg = "Enjoy!";

}
else{
  console.log("Too much!");
  $scope.msg = "Too much!";
}
    }
  };
}


})();
