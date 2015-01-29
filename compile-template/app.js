/**
 * Created by Ryan on 30/01/2015.
 */
angular.module('website', [])
    .controller('MainCtrl', ['$scope', 'CompileService', function ($scope, CompileService) {
        var vm = this;

       return vm;
    }])
    .factory('CompileService', function () {

        function compile(scope) {

        }

        return {
            compile: compile
        }
    });