var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){



 $scope.searchedTitle=function(){
	var apiKey='fec8b5ab27b292a68294261bb21b04a5';
    var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';
    var keywordURL= 'http://api.themoviedb.org/3/keyword/';
    var genreURL='http://api.themoviedb.org/3/genre/movie/list?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';

    var personURL='http://api.themoviedb.org/3/search/person?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';

    var movieName="";
     movieName=$scope.search;
    console.log(movieName);
    


    $http({
        method: 'GET',
        url: personURL+movieName,
    }).then(function successFunction(movieData){
            $scope.movieArray = movieData.data.results;
    }, function failureFunction(movieData){

    }
    );


// $http({

// 	method:'GET',
// 	url:movieURL+movieName,
	img:$scope.imagePath='http://image.tmdb.org/t/p/w300/',
	
// }).then(function successFunction(movieData){
// 		$scope.movieArray=movieData.data.results;
// 	},function failureFunction(movieData){



// });




 }
});



 //end of get keyword