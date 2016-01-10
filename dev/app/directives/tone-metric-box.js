/*jshint multistr: true */
(function(){

    'use strict';

    var toneMetricBox = function () {

        var getUpDownDirection = function(metric) {
                if ( metric < 50 )
                    return ' down';

                return ' up';
        };

        var getLeftRightDirection = function(metric) {
            return ' right';
        };

        var directions = {
            'test'              : getUpDownDirection,
            'maintainability'   : getUpDownDirection,
            'security'          : getLeftRightDirection,
            'workmanship'       : getLeftRightDirection
        };

        return {
            restrict: 'A',
            scope: {
                type: '=',
                length: '=',
            },
            link: function(scope, element) {
                var className = scope.type;
                var metric = scope.length;
                var direction = directions[className](metric);
                element.addClass("metric-box " + className + direction);
            },
            template: '<span class="number">{{length}}</span> \
            <span class="description">{{type}}</span>'
        };
    };

  angular.module('tasklist-one')
     .directive('toneMetricBox', [toneMetricBox]);

})();
