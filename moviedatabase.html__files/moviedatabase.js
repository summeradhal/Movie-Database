var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){

	// var apiKey='a57d629c0189135ef18672bad05964ed';
    var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman';
    // var keywordUrl= 'http://api.themoviedb.org/3/keyword/';

    $http({
        method: 'GET',
        url: movieURL,
    }).then(function successFunction(movieData){
            $scope.movieArray = movieData.data.results;
    }, function failureFunction(movieData){

    }
    );
});

// $http({

// 	method:'GET',
// 	url:keywordUrl,
// }).then(function successFunction(movieData){
// 		$scope.movieArray=movieData.data.results;
// 	},function failureFunction(movieData){


// });



 //end of get keyword