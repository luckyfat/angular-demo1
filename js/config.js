angular.module('uapp')
.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'views/home.html',
            controller:'homeCtrl',
            data:{
                title:'首页',
                ison:'isOn1'
            },
            params:{
                abc:'信息',
                title:'sada',
                id:''
            }
        })
        .state('product',{
            url:'/product',
            templateUrl:'views/product.html',
            controller:'productCtrl',
            data:{
                test:'AAA',
                ison:'isOn2'
            },
            params:{
                info:'产品页'
            },
            resolve:{
                datas:function ($timeout,$q,$http) {
                    var d = $q.defer();
                    $http.post('data/t1.json').success(function (data) {
                        d.resolve(data)
                    });
                    return d.promise;
                },
                dd:function ($q,$timeout) {
                    var d = $q.defer();
                    $timeout(function () {
                        d.resolve('222')
                    },1000);
                    return d.promise;
                }
            }
        })
});