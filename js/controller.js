function footCtrl($scope,$rootScope,$timeout,$q) {

    $scope.isOn1=1;
    $scope.addHigh = function (index) {
        $scope.isOn1=false;
        $scope.isOn2=false;
        $scope.isOn3=false;
        $scope.isOn4=false;
        $scope['isOn'+index] = true;
    };


    $rootScope.$on('$stateChangeStart',function (event,next,nextParam,prev) {
        console.log('页面切换开始');
        //console.log(nextParam);
        $scope.isOn1=false;
        $scope.isOn2=false;
        $scope.isOn3=false;
        $scope.isOn4=false;

        $scope[next.data.ison] = true
    });

    $rootScope.$on('$stateChangeSuccess',function (event,next) {

        if(next.url=='/product'){
            $timeout(function () {
                new IScroll('.list');
            },10);
        }
        console.log('页面切换结束');
    });

}
function homeCtrl($scope,$state,$rootScope) {
    $scope.title= $state.current.data.title;
    console.log($state.params);
}

function productCtrl($scope,$state,$q,debtPro,$timeout) {
    $scope.title= '理财产品';
    $scope.on = 1;
    $scope.tmp =1;
    $scope.toggleOn = function () {
        $scope.on = !$scope.on;
        $scope.tmp = !$scope.tmp;
    };

    $scope.backToHome = function () {
        $state.go('home',{
            id:'111111'
        })
    };

    debtPro.success(function (data) {
        if(data.code == 200){
            $scope.data = data.data.list
        }
    });
}

angular.module('uapp')
    .controller('homeCtrl',homeCtrl)
    .controller('productCtrl',productCtrl)
    .controller('footCtrl',footCtrl);