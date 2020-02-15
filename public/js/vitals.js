$(document).ready(function(){
    angular.module('app', [])
        .controller('MainController', function($scope, $timeout) {
            var traits = [];
            $scope.refresh = function() {
                traits = $scope.traits;
                $scope.traits = '';
                $timeout(function() {
                    $scope.traits = traits;
                }, 1);
            }
        $scope.traits = [{
            'name': 'Blood Pressure',
            'status': 'Normal (average)',
            'level': 1.0,
            'passion': '120/90'
        }, {
            'name': 'Temperature',
            'status': 'Normal (average)',
            'level': 1.0,
            'passion': '98.6'
        }, {
            'name': 'Pulse (BPM)',
            'status': 'Normal (average)',
            'level': 1.0,
            'passion': '86'
        }, {
            'name': 'Respiratory Rate',
            'status': 'Normal (low)',
            'level': .60,
            'passion': '14 bpm'
        }];
    })
    .directive('circle', function($timeout) {
        return {
            restrict: 'A',
            scope: {
                'circleSize': '=',
                'circleValue': '=',
                'circleStroke': '=',
                'circleDelay': '='
            },
            link: function(scope, element, attrs) {
                var w = 200,
                    s = 10,
                    delay = scope.circleDelay || 0,
                    full = (w + s) * 3,
                    percentage = full * (1 - scope.circleValue),
                    viewBox = '-' + s / 2 + ' -' + s / 2 + ' ' + (w + s) + ' ' + (w + s),
                    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                    circleBase = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
                    circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

                svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                svg.setAttribute('width', w + s);
                svg.setAttribute('height', w + s);
                svg.setAttribute('viewBox', viewBox);

                circleBase.setAttribute('cx', w / 2);
                circleBase.setAttribute('cy', w / 2);
                circleBase.setAttribute('r', w / 2);
                circleBase.setAttribute('fill', 'none');
                circleBase.setAttribute('stroke', '#CCCCCC');
                circleBase.setAttribute('stroke-width', s);

                circle.setAttribute('cx', w / 2);
                circle.setAttribute('cy', w / 2);
                circle.setAttribute('r', w / 2);
                circle.setAttribute('fill', 'none');
                circle.setAttribute('stroke', '#008dab');
                circle.setAttribute('stroke-width', s);
                circle.setAttribute('stroke-dasharray', full);
                circle.setAttribute('stroke-dashoffset', full);
                circle.setAttribute('transform', 'rotate(-90 100 100)')
                circle.setAttribute('style', 'transition: all 1s cubic-bezier(.3,.53,0,1)');

                svg.appendChild(circleBase);
                svg.appendChild(circle);

                element.append(svg);

                $timeout(function() {
                    circle.setAttribute('stroke-dashoffset', percentage);
                }, 1 + delay);

            }
        }
    });
});
