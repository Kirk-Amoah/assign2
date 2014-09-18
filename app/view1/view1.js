'use strict';
var gen = "";
var myApp = angular.module('myApp.view1', ['ngRoute'])



.config(['$routeProvider', function($routeProvider) {
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
	//return function(input){
     //return convertName(input.date,input.gender)};
	 
	 return function(input){
     return convertName(input.date,input.gender)};
	 
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

function convertName($day,$gender){
	
	$day=convertDate($day);
	
		if($day=="Monday" && $gender=="male"){
		 return "Kwadwo";
		 }
		else if ($day=="Monday" && $gender=="female"){
		 return "Adwoa";
		 }
		else if ($day=="Tuesday" && $gender=="male"){
		 return "Kwabena";
		 }
		else if ($day=="Tuesday" && $gender=="female"){
		 return "Abena";
		 }
		else if ($day=="Wednesday" && $gender=="male"){
		 return "Kwaku";
		 }
		else if ($day=="Wednesday" && $gender=="female"){
		 return "Akua";
		 }
		else if ($day=="Thursday" && gender=="male"){
		 return "Yaw";
		 }
		else if ($day=="Thursday" && $gender=="female"){
		 return "Yaa";
		 }
		else if ($day=="Friday" && $gender=="male"){
		 return "kofi";
		 }
		else if ($day=="Friday" && $gender=="female"){
		 return "efua";
		 }
		else if ($day=="Saturday" && $gender=="male"){
		 return "Kwame";
		 }
		else if ($day=="Saturday" && $gender=="female"){
		 return "Ama";
		 }
		else if ($day=="Sunday" && $gender=="male"){
		 return "Kwesi";
		 }
		else if ($day=="Sunday" && $gender=="female"){
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
  // Button.  See the on login handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
	
window.fbAsyncInit = function() {
    FB.init({
      appId      : '721051214599235',
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
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
	  //console.log(response.gender);
	  console.log(response.birthday);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + ' ' + response.birthday + ' ' + response.gender + '!';
		
		  gen = response.gender;
    });
  }
 
   //var gen =  document.getElementById('status').innerHTML = response.gender;
  
 function reallylogout() {
      FB.getLoginStatus(function (response) {
        if (response.authResponse) {
           window.location = "https://www.facebook.com/logout.php?next=" +
             'URL to redirect to' +
             "&access_token=" + response.authResponse.accessToken;
        } else {
           $("#loginButtonDiv").show();
           $("#logoutButtonDiv").hide();
        }
      });
    }
  
