var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/aboutUs/history', {
        templateUrl: 'pages/history.html',
        controller: 'aboutUsHistoryController'
    })
    .when('/aboutUs/aspirantura', {
        templateUrl: 'pages/aspirantura.html',
        controller: 'aboutUsAspiranturaController'
    })
    .when('/aboutUs/science', {
        templateUrl: 'pages/science.html',
        controller: 'aboutUsScienceController'
    })
    .when('/aboutUs/students', {
        templateUrl: 'pages/students.html',
        controller: 'aboutUsStudentsController'
    })
    .when('/aboutUs/study', {
        templateUrl: 'pages/study.html',
        controller: 'aboutUsStudyController'
    })
    .when('/aboutUs/international', {
        templateUrl: 'pages/international.html',
        controller: 'aboutUsInternationController'
    })

    .when('/library', {
        templateUrl: 'pages/library.html',
        controller: 'libraryController'
    })

    .when('/collective', {
        templateUrl: 'pages/collective.html',
        controller: 'collectiveController'
    })

    .when('/contacts', {
        templateUrl: 'pages/contacts.html',
        controller: 'contactsController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if(n > slides.length){
    slideIndex = 1; 
  } 
  if(n < 1){
    slideIndex = slides.length;
  } 
  for(let i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  } 
  for(let i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active","");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+= " active"; 
}

function slideTime(n){
 n=1
 showSlides(slideIndex += n);
 }
 
setInterval(slideTime, 3000);﻿
    
}]);

myApp.controller('aboutUsHistoryController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);

myApp.controller('aboutUsAspiranturaController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);

myApp.controller('aboutUsScienceController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);

myApp.controller('aboutUsStudyController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);

myApp.controller('aboutUsStudentsController', ['$scope', '$log', "$http", function($scope, $log, $http) {
    
    $scope.studNews;
    $scope.name = 'Second';
    
    $scope.getData = (data) => {
      $scope.studNews = data;
      console.log($scope.studNews);
    }
    $http({
      method: 'GET',
      url: '/news.json'
        }).then(function(data) {
         $scope.getData(data.data)
        }, function(response) {
          console.log("fuck");
    });
    
}]);

myApp.controller('aboutUsInternationController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);

myApp.controller('libraryController', ['$scope', '$log', "$http", function($scope, $log, $http) {
    
    $scope.books;
    $scope.name = 'Second';
    
    $scope.getData = (data) => {
      $scope.books = data;
      console.log($scope.books);
    }
    $http({
      method: 'GET',
      url: '/books.json'
        }).then(function(data) {
         $scope.getData(data.data)
        }, function(response) {
          console.log("fuck");
    });
    
    
}]);

myApp.controller('collectiveController', ['$scope', '$log', '$http', function($scope, $log, $http) {

    $scope.collective;
    $scope.name = 'Second';
    
    $scope.getData = (data) => {
      $scope.collective = data;
      console.log($scope.collective);
    }
    $http({
      method: 'GET',
      url: '/collective.json'
        }).then(function(data) {
         $scope.getData(data.data)
        }, function(response) {
          console.log("fuck");
    });

}]);

myApp.controller('contactsController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);
