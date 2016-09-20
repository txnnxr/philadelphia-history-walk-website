var budgetController = function($scope){
	$scope.sliderValue = 12;
	$scope.testUpdate = "test"
	$scope.update = function(){	
		//shows/hides maps corresponding to budget 
		if($scope.sliderValue >= 17 && $scope.sliderValue <= 32){
			$scope.testUpdate = "middle";
			$("#low-map").hide();
			$('#mid-map').show();
			$("#high-map").hide();
		}else if($scope.sliderValue <= 50 && $scope.sliderValue >= 33){
			$scope.testUpdate = "top";
			$("#low-map").hide();
			$('#mid-map').hide();
			$("#high-map").show();			
		}else{
			$scope.testUpdate = "low";
			$("#low-map").show();
			$('#mid-map').hide();
			$("#high-map").hide();			
		}
	}
}
angular
	.module('phwApp', [])
	.controller('budgetController', budgetController)
	//.service('searchData', searchData);