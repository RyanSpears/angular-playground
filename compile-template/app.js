/**
 * Created by Ryan on 30/01/2015.
 */
angular.module('website', [])
    .controller('MainCtrl', ['$scope', 'ComileService', function ($scope, ComileService) {
        var vm = this;

       return vm;
    }])
    .factory('ComileService', function () {

        function compile(scope) {

        }

        return {
            compile: compile
        }
    });