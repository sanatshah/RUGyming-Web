'use strict';

var rugym=angular.module('rugymingApp');

rugym.controller('MainCtrl', function($scope, $http){

    var campus; 
    var sport;
    var matemp;

    var checkPlace;
   

    $scope.saveCampus=function(){
	campus=$scope.campusOption;

	if (campus=="Busch"){

	    $scope.sportOpt=['Fitness Center', 'Multisports Bay 1 (Badminton)', 'Multisports Bay 2 (Multi-Use)', 'Multisports Bay 3 (Basketball)', 'Racquetball', 'Olympic Pool', 'Patio Pool'];

	    checkPlace=times[campus+" Campus"]["Sonny Werblin Recreation Center"].meetingareas;

	}else if (campus=="College Ave"){

	    $scope.sportOpt=['Main Gym ','Fitness Center', 'Annex', 'Power Gym', 'Rockwall'];
	    
	    checkPlace=times["College Avenue Campus"]["College Avenue Gym"].meetingareas;

	}else if (campus=="Easton Avenue"){

	   
	    $scope.sportOpt=['Rutgers Fitness Center'];
	    checkPlace=times["College Avenue Campus"]["Rutgers Fitness Center (Easton Ave Gym)"].meetingareas;



	    

	 }else if (campus=="Cook/Douglas"){
	    
	    $scope.sportOpt=['Gym Annex', 'Fitness Center', 'Racquet Sports', 'Pool'];
	    checkPlace=times[campus+" Campus"]["Cook/Douglass Recreation Center"].meetingareas;

	} else {

	    $scope.sportOpt=['Multisports', 'Fitness Center', 'Multi-Purpose Room'];
	    checkPlace=times[campus+" Campus"]["Livingston Recreation Center"].meetingareas;

	}
	
	
	}

    $scope.saveSport=function(){
	sport=$scope.sportOption;
	}
   

    $scope.timeCheck=function(){

	$scope.answer=true;
	
	var today=new Date();
	var dd=today.getDate();
	var mm=today.getMonth()+1;
	var yyyy=today.getFullYear();
	var hour=today.getHours();
	var min=today.getMinutes();

	dd=15;
	hour=20;
	mm=7;

	var todaydate = mm.toString()+'/'+dd.toString()+'/'+yyyy.toString();
	
	$scope.check=todaydate;
	//$scope.test="hello";

	var opentime;

	if (campus=="Easton Avenue Gym"){
	   opentime=checkPlace.Hours[todaydate]
	    $scope.test=checkPlace;
	 }   else{
		opentime=checkPlace[sport][todaydate];
	    $scope.test=checkPlace[sport];
		}

	



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

