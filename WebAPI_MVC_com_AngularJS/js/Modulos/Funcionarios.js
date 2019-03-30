//injeção de dependencia modelo 1
var app = angular.module('app', []);
app.controller('IndexController', function ($scope) {
    debugger
    $scope.nome = "Jonathan Lemos";
    $scope.Funcionarios = [
        { id: 1, nome: "Sergio" },
        { id: 1, nome: "jonathan" },
        { id: 1, nome: "Lemos" },
        { id: 1, nome: "Santos" },
        { id: 1, nome: "Sergio jonathan" },
    ];
});

//injeção de dependencia modelo 2
//var app = angular.module('app', []);
//app.controller('IndexController', ['$scope', '$http', function ($scope, $http) {
//    $scope.nome = "Jonathan Lemos";
//}]);

//injeção de dependencia modelo 3
//var app = angular.module('app', []);
//function IndexController($scope) {
//    $scope.nome = "Jonathan lemos";
//}
//IndexController.$inject = ['$scope'];
//app.controller('IndexController', IndexController);