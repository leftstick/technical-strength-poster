(function (ng) {
    'use strict';

    var poster = ng.module('poster', ['aMap']);

    poster.controller('PosterController', ['$scope', function ($scope) {
        var longitude = 121.4718388298;
        var latitude = 31.2085856666;
        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            width: 500,
            height: 400,
            markers: [{
                longitude: longitude,
                latitude: latitude,
                title: '<b>杰升企业管理咨询有限公司教练社</b>',
                content: '徐家汇路436弄1号301室(靠近泰康路思南路)。提供5个免费停车位'
            }]
        };
    }]);

}(angular));