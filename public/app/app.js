angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main', controller: 'mainCtrl'});

});

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.myVar = "Please visit us again soon.  We will be rolling out new web applications to help Sewists do what they do best!";
});