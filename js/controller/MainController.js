
myApp.controller('MainController', function($scope, $route, $routeParams, $location, $localStorage) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    this.test = 'happy';
    $localStorage.cool = 'very happy!';
    $localStorage.cool2 = 'very very happy!';
    $localStorage.yancool = 'so cool!!!!!@@@@@';
    this.cool = $localStorage.yancool;
});
