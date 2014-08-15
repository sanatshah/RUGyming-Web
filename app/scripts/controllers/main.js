'use strict';

var rugym=angular.module('rugymingApp');

rugym.controller('MainCtrl', function($scope, $http){

    var campus; 
    var sport;
   

    $scope.saveCampus=function(){
	campus=$scope.campusOption;

	if (campus=="Busch"){

	    $scope.sportOpt=['Fitness Center', 'Multisports Bay 1 (Badminton)', 'Multisports Bay 2 (Multi-Use)', 'Multisports Bay 3 (Basketball)', 'Racquetball', 'Olympic Pool', 'Patio Pool'];

	}else if (campus=="College Ave"){

	    $scope.sportOpt=['Main Gym','Fitness Center', 'Annex', 'Power Gym', 'Rockwall'];

	}else if (campus=="Cook/Douglas"){
	    
	    $scope.sportOpt=['Gyme Annex', 'Fitness Center', 'Racquet Sports', 'Pool'];


	} else {

	    $scope.sportOpt=['Multisports', 'Fitness Center', 'Multi-Purpose Room'];


	}
	
	

	}

    $scope.saveSport=function(){
	sport=$scope.sportOption;
	}
   

    $scope.timeCheck=function(){

	$scope.meetingareas=times["Busch Campus"]["Sonny Werblin Recreation Center"].meetingareas;
	$scope.answer=true;
	
	var today=new Date();
	var dd=today.getDate();
	var mm=today.getMonth()+1;
	var yyyy=today.getFullYear();
	var hour=today.getHours();
	var min=today.getMinutes();

	dd=25;
	hour=20;
	mm=7;

	var todaydate = mm.toString()+'/'+dd.toString()+'/'+yyyy.toString();
	
	$scope.check=todaydate;
	//$scope.test="hello";

	var opentime=times[campus+" Campus"]["Sonny Werblin Recreation Center"].meetingareas[sport][todaydate];
	$scope.test=opentime;
	var begintime=parseInt(opentime.charAt(0));
	var endtime=(parseInt(opentime.charAt(9)))+12;
	
	
	if ((hour>=begintime)&&(hour<=endtime)){

	    $scope.answer=true;
	    var x=endtime-hour; 

	    if (x<2) { 
		$scope.hurry="Hurry though, it closes in " + x + " hour.";
		$scope.check="It is open."; 
	    } else {
		$scope.check="Open. 'The only limitations one has, are the ones they place on themselves' - Muhammad Ali. ";

	    }

	} else {
	  
	    $scope.answer=true;
	    $scope.check="closed"
	    
	}
    }


});

