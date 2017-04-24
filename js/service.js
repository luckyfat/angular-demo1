angular.module('uapp')
    .factory('debtPro',function ($http) {
        return $http.post('data/t1.json',{date:''});
    });
