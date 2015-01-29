/**
 * Created by Ryan on 30/01/2015.
 */
angular.module('MainApp', [])
    .controller('MainCtrl', ['$scope', 'CompileService', function ($scope, CompileService) {
        var vm = this;
        vm.title = "Ryan Spears";

       return vm;
    }])
    .factory('CompileService', function () {

        function compile(scope) {

        }

        return {
            compile: compile
        }
    });