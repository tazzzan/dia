var dia =  angular.module('dia', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/login');
        $urlRouterProvider.when('/login','/login/loginTab');
        $urlRouterProvider.when('/main', '/main/seekerAndVoter');

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'partials/login.html'
        });



        $stateProvider.state('login.loginTab', {
            url:'/loginTab',
            views: {
                "loginArea": {templateUrl: 'partials/pageParts/registerLogin/loginTab.html'},
                "liveStream": {templateUrl: 'partials/liveStream.html'}
            }
        });

        $stateProvider.state('login.registerTab', {
            url:'/registerTab',
            views: {
                "loginArea": {templateUrl: 'partials/pageParts/registerLogin/registerTab.html'},
                "liveStream": {templateUrl: 'partials/liveStream.html'}
            }
        });

        $stateProvider.state('login.resetTab', {
            url:'/resetTab',
            views: {
                "loginArea": {templateUrl: 'partials/pageParts/registerLogin/resetTab.html'},
                "liveStream": {templateUrl: 'partials/liveStream.html'}
            }
        });





        $stateProvider.state('main', {
            url: '/main',
            templateUrl: 'partials/main.html',

        });

        $stateProvider.state('main.seekerAndVoter', {
            url: '/seekerAndVoter',
            views: {
                "liveStream": {templateUrl: 'partials/liveStream.html'}
            }
        })

    }])




dia.directive('topicSection', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {topicbody: '='},
        templateURL:'view1.html',
        link: function (scope, element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }
    };
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
        template: '<div id="draggableVoteOption" drag-drop target-object="droppable2">{{ voteoption }}</div>',


    };
});

dia.directive('dragDrop', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {targetObject:'@'},
        link: function(scope, element) {
            $( element ).draggable({appendTo: 'body', revert: true});
            var targetId = "#" + scope.targetObject;
            $(targetId).droppable({

                accept: $( element ),
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

dia.directive('boxBackground', function () {
    return {
        restrict: 'AE',
        transclude: true,
        template : '<div class="draggableTopicsComment">' +
            '           <img src="img/merkel.jpg" style="width:80px;height:88px;float:right" id="topicImage"/>' +
            '           <p> EDDDDD</p>' +
                    '</div>',
        link: function (scope, element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }
    }
});

dia.directive('commentArrow', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="commentArrow">  </div>'
    }
});


