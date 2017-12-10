/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    }).when('/aboutUs/history', {
        templateUrl: 'pages/history.html',
        controller: 'aboutUsHistoryController'
    }).when('/aboutUs/aspirantura', {
        templateUrl: 'pages/aspirantura.html',
        controller: 'aboutUsAspiranturaController'
    }).when('/aboutUs/science', {
        templateUrl: 'pages/science.html',
        controller: 'aboutUsScienceController'
    }).when('/aboutUs/students', {
        templateUrl: 'pages/students.html',
        controller: 'aboutUsStudentsController'
    }).when('/aboutUs/study', {
        templateUrl: 'pages/study.html',
        controller: 'aboutUsStudyController'
    }).when('/aboutUs/international', {
        templateUrl: 'pages/international.html',
        controller: 'aboutUsInternationController'
    }).when('/library', {
        templateUrl: 'pages/library.html',
        controller: 'libraryController'
    }).when('/collective', {
        templateUrl: 'pages/collective.html',
        controller: 'collectiveController'
    }).when('/contacts', {
        templateUrl: 'pages/contacts.html',
        controller: 'contactsController'
    });
});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'Main';
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {

        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (var _i = 0; _i < dots.length; _i++) {
            dots[_i].className = dots[_i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function slideTime(n) {
        n = 1;
        showSlides(slideIndex += n);
    }

    setInterval(slideTime, 3000);
}]);

myApp.controller('aboutUsHistoryController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'Second';
}]);

myApp.controller('aboutUsAspiranturaController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'Second';
}]);

myApp.controller('aboutUsScienceController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'Second';
}]);

myApp.controller('aboutUsStudyController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'Second';
}]);

myApp.controller('aboutUsStudentsController', ['$scope', '$log', "$http", function ($scope, $log, $http) {

    $scope.studNews;
    $scope.name = 'Second';

    $scope.getData = function (data) {
        $scope.studNews = data;
        console.log($scope.studNews);
    };
    $http({
        method: 'GET',
        url: '/news.json'
    }).then(function (data) {
        $scope.getData(data.data);
    }, function (response) {
        console.log("fuck");
    });
}]);

myApp.controller('aboutUsInternationController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'Second';
}]);

myApp.controller('libraryController', ['$scope', '$log', "$http", function ($scope, $log, $http) {

    $scope.books;
    $scope.name = 'Second';

    $scope.getData = function (data) {
        $scope.books = data;
        console.log($scope.books);
    };
    $http({
        method: 'GET',
        url: '/books.json'
    }).then(function (data) {
        $scope.getData(data.data);
    }, function (response) {
        console.log("fuck");
    });
}]);

myApp.controller('collectiveController', ['$scope', '$log', '$http', function ($scope, $log, $http) {

    $scope.collective;
    $scope.name = 'Second';

    $scope.getData = function (data) {
        $scope.collective = data;
        console.log($scope.collective);
    };
    $http({
        method: 'GET',
        url: '/collective.json'
    }).then(function (data) {
        $scope.getData(data.data);
    }, function (response) {
        console.log("fuck");
    });
}]);

myApp.controller('contactsController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'Second';
}]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global angular */

/*
Angular touch carousel with CSS GPU accel and slide buffering
http://github.com/revolunet/angular-carousel

*/

angular.module('angular-carousel', ['ngTouch', 'angular-carousel.shifty']);

/***/ })
/******/ ]);