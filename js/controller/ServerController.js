
myApp.controller('ServerController', function($http, $scope, $route, $routeParams, $location) {
    var self = this;

    /*$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;*/

    $scope.sort = '';

    self.servers = [];

    $scope.serverSort = 'host';


    getServerStatus();

    /*$http.defaults.headers.common['Authorization'] = 'Basic ' + 'd2F0ZXJ2cG46bGFuZG1hcms1IQ==';
    $http({
        method: 'POST',
        url: 'http://api-test.dev.alfredkan.com/openvpn/getClientConfig',
        cache: true,
        data: {"account":"client35","server":"ca1"},
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function successCallback(response) {
        console.log(response.data);
        self.servers = response.data;
        //$scope.greeting = response;
         //this callback will be called asynchronously
         //when the response is available
    }, function errorCallback(response) {
         //called asynchronously if an error occurs
         //or server returns response with an error status.
    });*/

    // downloadConfig
    $scope.downloadConfig = function(fileContent, fileName){
        /*document.location = 'data:Application/octet-stream,' +
                         encodeURIComponent(dataToDownload);*/
        if(!fileName){
            fileName = 'default.ovpn';
        }
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:application/ovpn,' + encodeURI(fileContent);
        hiddenElement.target = '_blank';
        hiddenElement.download = fileName;
        hiddenElement.click();
    };

    // getClientConfig
    $scope.getClientConfig = function(host){
        var accountId = $routeParams.userId;
        //console.log(host);

        $http.defaults.headers.common['Authorization'] = 'Basic ' + 'd2F0ZXJ2cG46bGFuZG1hcms1IQ==';
        $http({
            method: 'POST',
            url: 'http://api-test.dev.alfredkan.com/openvpn/getClientConfig',
            data: {"account":accountId,"server":host},
            cache: true,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function successCallback(response) {
             //this callback will be called asynchronously
            //self.servers = response.data;
            $scope.downloadConfig(response.data.config, 'wvpn-'+host+'-'+accountId+'.ovpn');
        }, function errorCallback(response) {
             //called asynchronously if an error occurs
             //or server returns response with an error status.
        });
    }

    // getserverstatus
    function getServerStatus(){
        //$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode('watervpn' + ':' + 'landmark5!');
        $http.defaults.headers.common['Authorization'] = 'Basic ' + 'd2F0ZXJ2cG46bGFuZG1hcms1IQ==';
        $http({
            method: 'GET',
            url: 'http://api-test.dev.alfredkan.com/openvpn/getServerStatus',
            cache: true,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function successCallback(response) {
             //this callback will be called asynchronously
             //console.log(response.data);
             //self.servers = response.data;
             //console.log(response.data);

            // convert object to array             
            var output = [];
            for (var key in response.data) {
              output.push(response.data[key]);
            }
            self.servers = output;

            //self.servers = [{host:'ca1', region:'adsfas'}, {host:'aa1', region:'adsfas'}];
        }, function errorCallback(response) {
             //called asynchronously if an error occurs
             //or server returns response with an error status.
        });
    }


});
