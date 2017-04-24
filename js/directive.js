angular.module('uapp')
    .directive('chead',function () {
    return {
        restrict:'EC',
        template:'<header class="header">'+
                    '<div class="top">'+
                    '<span class="iconfont">&#xe6ba;</span>'+
                    '<h2>{{title}}</h2>'+
                    '</div>'+
                '</header>',
        scope: {
            title:'@'
        },
        controller:function ($scope,$state,$stateParams) {

        },
        link:function () {

        }
    }
})
    .directive('mcanvas',function ($timeout) {
        return {
            restrict:"E",
            template:'<div style="height:40px;width: 100%"><canvas width="40" height="40" style="display: block;margin: 0 auto;"></canvas></div>',
            scope:{
                percent:'@'
            },
            link:function (scope,element) {
                var ele = element[0].querySelector('canvas');
                console.log();

                var cvs = ele.getContext('2d');
                var deg = Math.PI/180;
                cvs.beginPath();
                cvs.fillStyle = 'orange';
                cvs.moveTo(20,20);
                cvs.arc(20,20,16,-deg*90,deg*360*parseFloat(scope.percent)/100);
                cvs.closePath();
                cvs.fill();

                cvs.beginPath();
                cvs.fillStyle = '#ee234c';
                cvs.moveTo(20,20);
                cvs.arc(20,20,13,0,Math.PI*2);
                cvs.closePath();
                cvs.fill();

            }
        }
    })
    .directive('swipe',function ($timeout) {
        return {
            restrict:'E',
            template:'<div class="swiper-container"><div class="swiper-wrapper">'+
                        '<div class="swiper-slide" ng-repeat="item in imgList"><img ng-src="{{item.src}}" alt=""></div>' +
                    '</div></div>',
            controller:function ($http,$scope) {
                $http
                    .get('data/img.json')
                    .then(function (data) {
                        $scope.imgList = data.data.lists;
                    });
            },
            link:function (scope,element) {
                $timeout(function () {
                    new Swiper('.swiper-container',{
                        autoplay:3000
                    })
                },10);
            }
        }
    });