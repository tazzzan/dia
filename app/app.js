var dia =  angular.module('dia', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/login/loginTab');
        $urlRouterProvider.when('/login','/login/loginTab');
        $urlRouterProvider.when('/main', '/role/seekerAndVoter/start');





        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'partials/login.html'
        });



        $stateProvider.state('login.loginTab', {
            url:'/loginTab',
            views: {
                "loginArea": {templateUrl: 'partials/pageParts/registerLogin/loginTab.html'},
                "liveStream": {templateUrl: 'partials/pageParts/main/seekerAndVoter/liveStream/liveStream.html'}
            }
        });

        $stateProvider.state('login.registerTab', {
            url:'/registerTab',
            views: {
                "loginArea": {templateUrl: 'partials/pageParts/registerLogin/registerTab.html'},
                "liveStream": {templateUrl: 'partials/pageParts/main/seekerAndVoter/liveStream/liveStream.html'}
            }
        });

        $stateProvider.state('login.resetTab', {
            url:'/resetTab',
            views: {
                "loginArea": {templateUrl: 'partials/pageParts/registerLogin/resetTab.html'},
                "liveStream": {templateUrl: 'partials/pageParts/main/seekerAndVoter/liveStream/liveStream.html'}
            }
        });




        $stateProvider.state('administration', {
            url:'/administration',
            templateUrl: 'partials/administration.html'
        });





        $stateProvider.state('main', {
            url: '/main',
            templateUrl: 'partials/main.html'

        });


        $stateProvider.state('main.profile', {
            url: '/profile',
            views:
            {
                "main": {templateUrl: 'partials/pageParts/profile/mainProfile.html'},
                "profile": {templateUrl: 'partials/pageParts/profile/profileSummaryShort.html'},
                "favourites": {templateUrl: 'partials/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'partials/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'partials/pageParts/navbar/navbar.html'}
            }
        });

        $stateProvider.state('main.messages', {
            url: '/messages',
            views:
            {
                "main": {templateUrl: 'partials/pageParts/messages/mainMessages.html'},
                "profile": {templateUrl: 'partials/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'partials/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'partials/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'partials/pageParts/navbar/navbar.html'}
            }
        });

        $stateProvider.state('main.favourites', {
            url: '/favourites',
            views:
            {
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
            views:
            {
                "liveStreamSV": {templateUrl: 'partials/pageParts/main/seekerAndVoter/liveStream/liveStream.html'},
                "backgroundSV": {templateUrl: 'partials/pageParts/main/seekerAndVoter/background/background.html'},
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
       link: function(scope, $scope) {

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
        restrict: 'E',
        transclude: true,
        scope: {voteoption: '='},
        template: '<drag-drop target-object="droppable2" id="draggableVoteOption">{{ voteoption }}</drag-drop>'
    };

});

dia.directive('backgroundSection', function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {background: '='},
        template: '<p class="draggableBackground" >{{ background.text }}</p>',
        link: function (scope, element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }

    };
});

dia.directive('dragDrop', function () {
    return {
        restrict: 'E',
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


dia.directive('commentArrow', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="commentArrow">  </div>'
    }
});


