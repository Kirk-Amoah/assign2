'use strict';

var myApp = angular.module('myApp.view1', ['ngRoute'])
var gen ="";
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


			 
myApp.controller('View1Ctrl', ['$scope',function($scope) {
	$scope.user={"date":"",
			 "gender":gen};
			
	
}]);


	 
myApp.filter('convertDate', function(){
	return function(input){
	input = input || '';
	var result = input;
     return convertName(result.date,gen)};
	 
});


var myDays=
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]


function convertDate(aText)

{

myDays= 

["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

var myDate=new Date(aText)
var day;
return day=myDays[myDate.getDay()];

}

function convertName($d,$g){
	
	$d=convertDate($d);
	
		if($d=="Monday" && $g=="male"){
		 return "Kwadwo";
		 }
		else if ($d=="Monday" && $g=="female"){
		 return "Adwoa";
		 }
		else if ($d=="Tuesday" && $g=="male"){
		 return "Kwabena";
		 }
		else if ($d=="Tuesday" && $g=="female"){
		 return "Abena";
		 }
		else if ($d=="Wednesday" && $g=="male"){
		 return "Kwaku";
		 }
		else if ($d=="Wednesday" && $g=="female"){
		 return "Akua";
		 }
		else if ($d=="Thursday" && $g=="male"){
		 return "Yaw";
		 }
		else if ($d=="Thursday" && $g=="female"){
		 return "Yaa";
		 }
		else if ($d=="Friday" && $g=="male"){
		 return "kofi";
		 }
		else if ($d=="Friday" && $g=="female"){
		 return "efua";
		 }
		else if ($d=="Saturday" && $g=="male"){
		 return "Kwame";
		 }
		else if ($d=="Saturday" && $g=="female"){
		 return "Ama";
		 }
		else if ($d=="Sunday" && $g=="male"){
		 return "Kwesi";
		 }
		else if ($d=="Sunday" && $g=="female"){
		 return "Akosua";
		 }
	};
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
	
 window.fbAsyncInit = function() {
    FB.init({
		appId      : '353218604843896',
      xfbml      : true,
      version    : 'v2.1'
    });
  };
	
	
	
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,birthday,gender', function(response) {
      console.log('Successful login for: ' + response.name);
	  console.log(response.gender);
	  console.log(response.birthday);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
		gen = response.gender;
    });
  }
