/**
 * Created by Ryan on 30/01/2015.
 */
angular.module('MainApp', [])
    .controller('MainCtrl', ['$scope', 'CompileService', function ($scope, CompileService) {
        var vm = this;

        vm.title = "$compile html template";
        activate();

        function activate() {
            CompileService.compile($scope)
        }

        return vm;

    }])
    .factory('CompileService', ['$compile', function ($compile) {
        function compile(scope) {
            var content = '<div id="infowindow_content" ng-include src="\'template.html\'"></div>';
            var compiled = $compile(content)(scope);

            scope.product = "ACME rubber bands";
            console.log(compiled[0]);
        }

        return {
            compile: compile
        }
    }]);