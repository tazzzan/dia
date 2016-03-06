//var chars = angular.module('dia', ['chart.js']).controller('LineCtrl', function ($scope) {

  //  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    //$scope.series = ['Series A', 'Series B'];
    //$scope.data = [

//        [65, 59, 80, 81, 56, 55, 40],
//        [28, 48, 40, 19, 86, 27, 90]
//    ];
//    $scope.onClick = function (points, evt) {
//        console.log(points, evt);
//    };
//});

var dia = angular.module('dia', ['ui.router' ])


    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/login/loginTab');
        $urlRouterProvider.when('/login', '/login/loginTab');
        $urlRouterProvider.when('/main', '/role/seekerAndVoter/start');


        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'partials/login.html'
        });


        $stateProvider.state('login.loginTab', {
            url: '/loginTab',
            views: {
                "loginArea": {templateUrl: 'partials/pageParts/registerLogin/loginTab.html'},
                "liveStream": {templateUrl: 'partials/pageParts/main/seekerAndVoter/liveStream/liveStream.html'}
            }
        });

        $stateProvider.state('login.registerTab', {
            url: '/registerTab',
            views: {
                "loginArea": {templateUrl: 'partials/pageParts/registerLogin/registerTab.html'},
                "liveStream": {templateUrl: 'partials/pageParts/main/seekerAndVoter/liveStream/liveStream.html'}
            }
        });

        $stateProvider.state('login.resetTab', {
            url: '/resetTab',
            views: {
                "loginArea": {templateUrl: 'partials/pageParts/registerLogin/resetTab.html'},
                "liveStream": {templateUrl: 'partials/pageParts/main/seekerAndVoter/liveStream/liveStream.html'}
            }
        });


        $stateProvider.state('administration', {
            url: '/administration',
            templateUrl: 'partials/administration.html'
        });


        $stateProvider.state('main', {
            url: '/main',
            templateUrl: 'partials/main.html'

        });


        $stateProvider.state('main.profile', {
            url: '/profile',
            views: {
                "main": {templateUrl: 'partials/pageParts/profile/mainProfile.html'},
                "profile": {templateUrl: 'partials/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'partials/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'partials/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'partials/pageParts/navbar/navbar.html'}
            }
        });

        $stateProvider.state('main.messages', {
            url: '/messages',
            views: {
                "main": {templateUrl: 'partials/pageParts/messages/mainMessages.html'},
                "profile": {templateUrl: 'partials/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'partials/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'partials/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'partials/pageParts/navbar/navbar.html'}
            }
        });

        $stateProvider.state('main.favourites', {
            url: '/favourites',
            views: {
                "main": {templateUrl: 'partials/pageParts/favourites/mainFavourites.html'},
                "profile": {templateUrl: 'partials/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'partials/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'partials/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'partials/pageParts/navbar/navbar.html'}
            }
        });


        $stateProvider.state('role', {
            url: '/role',
            abstract: true,
            template: '<ui-view/>'
        });

        $stateProvider.state('role.seekerAndVoter', {
            url: '/seekerAndVoter',
            abstract: true,
            templateUrl: 'partials/roleMains/mainSeekerAndVoter.html'

        });

        $stateProvider.state('role.seekerAndVoter.start', {
            url: '/start',
            views: {
                "liveStreamSV": {templateUrl: 'partials/pageParts/main/seekerAndVoter/liveStream/liveStream.html'},
                "backgroundSV": {templateUrl: 'partials/pageParts/main/seekerAndVoter/background/background.html'},
                "profile": {templateUrl: 'partials/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'partials/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'partials/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'partials/pageParts/navbar/navbar.html'}
            }
        });

        $stateProvider.state('role.publisher', {
            url: '/publisher',
            abstract: true,
            templateUrl: 'partials/roleMains/mainPublisher.html'

        });

        $stateProvider.state('role.publisher.start', {
            url: '/start',
            views: {
                "liveStreamP": {templateUrl: 'partials/pageParts/main/publisher/liveStream/liveStream.html'},
                "controlBarP": {templateUrl: 'partials/pageParts/main/publisher/controlBar/controlBar.html'},
                "backgroundP": {templateUrl: 'partials/pageParts/main/publisher/background/background.html'},
                "profile": {templateUrl: 'partials/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'partials/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'partials/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'partials/pageParts/navbar/navbar.html'}
            }
        });

    }]);


dia.directive('topicSection', function () {
    return {
        restrict: 'A',
        scope: {
            indextopic: '@',
            topictopic: '='
        },
        link: function (scope, $scope) {

            $scope.topic = scope.topictopic;
            $scope.topic.idInLiveStream = scope.indextopic;

        }
    }
});


dia.directive('commentSection', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {comment: '='},
        template: '<p class="draggableTopicsComment" >{{ comment }}</p>',
        link: function (scope, element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }

    };
});

dia.directive('voteoptionSection', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {voteoption: '='},
        template: '<p class="draggableVoteOption">{{ voteoption.text }}</p>',
        link: function (scope, element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }

    };

});

dia.directive('backgroundSection', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {background: '='},
        templateUrl: 'partials/pageParts/main/seekerAndVoter/background/bodyBackground.html',
        link: function (scope, element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }

    };
});

dia.directive('backgroundpublisherSection', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {background: '='},
        templateUrl: 'partials/pageParts/main/publisher/background/bodyBackground.html',
        link: function (scope, element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }

    };
});

dia.directive('dragDrop', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {targetObject: '@'},
        link: function (scope, element) {
            $(element).draggable({appendTo: 'body', revert: true});
            var targetId = "#" + scope.targetObject;
            $(targetId).droppable({
                accept: $(element),
                activeClass: "ui-state-default",
                drop: function (event, ui) {
                    $(targetId)
                        .addClass("ui-state-highlight")
                        .find("p")
                        .html("Dropped!");
                }
            });

        }

    }


})

dia.directive('makeDraggable', function () {
    return {
        restrict: 'E',
        transclude: true,
        link: function (scope, element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }
    }
});


dia.directive('commentArrow', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {topicIndex: '='},
        template: '<div class="commentArrow">  </div>',
        link: function ($scope, scope) {
            $scope.commentarrow = new Commentarrow(scope.topicIndex);
        }
    }
});
dia.directive('createTopicadd', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="createTopicArrow"> Add new Topic </div>',
        link: function ($scope, scope) {
            $scope.createTopicadd = new CreateTopicadd();
        }
    }
});



dia.directive('chartBox', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {chartdata: '='},
        template: '<canvas id="line" class="chart chart-line" data="chartdata.data" labels="chartdata.labels" legend="true" series="chartdata.series"></canvas>',
        link: function (scope, element, attrs) {


            //var ctx = document.getElementById("myChart").getContext("2d");
            //
            //var data = {
            //    labels: ["January", "February", "March", "April", "May", "June", "July"],
            //    datasets: [
            //        {
            //            label: "My First dataset",
            //            fillColor: "rgba(220,220,220,0.2)",
            //            strokeColor: "rgba(220,220,220,1)",
            //            pointColor: "rgba(220,220,220,1)",
            //            pointStrokeColor: "#fff",
            //            pointHighlightFill: "#fff",
            //            pointHighlightStroke: "rgba(220,220,220,1)",
            //            data: [65, 59, 80, 81, 56, 55, 40]
            //        },
            //        {
            //            label: "My Second dataset",
            //            fillColor: "rgba(151,187,205,0.2)",
            //            strokeColor: "rgba(151,187,205,1)",
            //            pointColor: "rgba(151,187,205,1)",
            //            pointStrokeColor: "#fff",
            //            pointHighlightFill: "#fff",
            //            pointHighlightStroke: "rgba(151,187,205,1)",
            //            data: [28, 48, 40, 19, 86, 27, 90]
            //        }
            //    ]
            //};
            //
            //
            //Chart.defaults.global = {
            //    // Boolean - Whether to animate the chart
            //    animation: true,
            //
            //    // Number - Number of animation steps
            //    animationSteps: 60,
            //
            //    // String - Animation easing effect
            //    // Possible effects are:
            //    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
            //    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
            //    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
            //    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
            //    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
            //    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
            //    //  easeOutElastic, easeInCubic]
            //    animationEasing: "easeOutQuart",
            //
            //    // Boolean - If we should show the scale at all
            //    showScale: true,
            //
            //    // Boolean - If we want to override with a hard coded scale
            //    scaleOverride: false,
            //
            //    // ** Required if scaleOverride is true **
            //    // Number - The number of steps in a hard coded scale
            //    scaleSteps: null,
            //    // Number - The value jump in the hard coded scale
            //    scaleStepWidth: null,
            //    // Number - The scale starting value
            //    scaleStartValue: null,
            //
            //    // String - Colour of the scale line
            //    scaleLineColor: "rgba(0,0,0,.1)",
            //
            //    // Number - Pixel width of the scale line
            //    scaleLineWidth: 1,
            //
            //    // Boolean - Whether to show labels on the scale
            //    scaleShowLabels: true,
            //
            //    // Interpolated JS string - can access value
            //    scaleLabel: "<%=value%>",
            //
            //    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
            //    scaleIntegersOnly: true,
            //
            //    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            //    scaleBeginAtZero: false,
            //
            //    // String - Scale label font declaration for the scale label
            //    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            //
            //    // Number - Scale label font size in pixels
            //    scaleFontSize: 12,
            //
            //    // String - Scale label font weight style
            //    scaleFontStyle: "normal",
            //
            //    // String - Scale label font colour
            //    scaleFontColor: "#666",
            //
            //    // Boolean - whether or not the chart should be responsive and resize when the browser does.
            //    responsive: false,
            //
            //    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            //    maintainAspectRatio: true,
            //
            //    // Boolean - Determines whether to draw tooltips on the canvas or not
            //    showTooltips: true,
            //
            //    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
            //    customTooltips: false,
            //
            //    // Array - Array of string names to attach tooltip events
            //    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
            //
            //    // String - Tooltip background colour
            //    tooltipFillColor: "rgba(0,0,0,0.8)",
            //
            //    // String - Tooltip label font declaration for the scale label
            //    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            //
            //    // Number - Tooltip label font size in pixels
            //    tooltipFontSize: 14,
            //
            //    // String - Tooltip font weight style
            //    tooltipFontStyle: "normal",
            //
            //    // String - Tooltip label font colour
            //    tooltipFontColor: "#fff",
            //
            //    // String - Tooltip title font declaration for the scale label
            //    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            //
            //    // Number - Tooltip title font size in pixels
            //    tooltipTitleFontSize: 14,
            //
            //    // String - Tooltip title font weight style
            //    tooltipTitleFontStyle: "bold",
            //
            //    // String - Tooltip title font colour
            //    tooltipTitleFontColor: "#fff",
            //
            //    // Number - pixel width of padding around tooltip text
            //    tooltipYPadding: 6,
            //
            //    // Number - pixel width of padding around tooltip text
            //    tooltipXPadding: 6,
            //
            //    // Number - Size of the caret on the tooltip
            //    tooltipCaretSize: 8,
            //
            //    // Number - Pixel radius of the tooltip border
            //    tooltipCornerRadius: 6,
            //
            //    // Number - Pixel offset from point x to tooltip edge
            //    tooltipXOffset: 10,
            //
            //    // String - Template string for single tooltips
            //    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            //
            //    // String - Template string for multiple tooltips
            //    multiTooltipTemplate: "<%= value %>",
            //
            //    // Function - Will fire on animation progression.
            //    onAnimationProgress: function(){},
            //
            //    // Function - Will fire on animation completion.
            //    onAnimationComplete: function(){}
            //};
            //
            //var myNewChart = new Chart(ctx).PolarArea(data);
        }
    }
});

dia.directive('messageBox', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {currentprofile:'=', currentreceiver:'=', filter:'=filter'},
        template: ' <div id="messageBox" ng-repeat=" a in currentprofile.messages | filter : filter  "><p> {{ a.dateOfSend }} {{ " | "+ checkIfSenderOrReceiver() }} </p><p> {{ a.text }}</p></div> ',
        link: function (scope) {

            scope.checkIfSenderOrReceiver = function () {
                if (scope.currentprofile == scope.currentreceiver) {
                    return scope.currentreceiver.name;
                }
                else {
                    return "Me";
                }
            };
        }
    }
});

dia.directive( 'editInPlace', function() {
    return {
        restrict: 'E',
        scope: { value: '=',
                 object: '='},
        template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value">',
        link: function ( $scope, element, attrs ) {
            // Let's get a reference to the input element, as we'll want to reference it.
            var inputElement = angular.element( element.children()[1] );

            // This directive should have a set class so we can style it.
            element.addClass( 'edit-in-place' );

            // Initially, we're not editing.
            $scope.editing = false;

            // ng-click handler to activate edit-in-place
            $scope.edit = function () {
                $scope.editing = true;

                // We control display through a class on the directive itself. See the CSS.
                element.addClass( 'active' );

                // And we must focus the element.
                // `angular.element()` provides a chainable array, like jQuery so to access a native DOM function,
                // we have to reference the first element in the array.
                inputElement[0].focus();
            };

            // When we leave the input, we're done editing.
            inputElement.prop( 'onblur', function() {
                $scope.editing = false;
                element.removeClass( 'active' );

            });

            $scope.selectTopic(object);
            $scope.$apply();
        }
    };
});
