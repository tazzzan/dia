
var dia = angular.module('dia', ['ui.router'])


    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {


        $stateProvider.state('main', {
            url: '/',
            abstract: true,
            templateUrl: 'app/templates/main.html'
        });
    	
    	$stateProvider.state('login', {
            url: '/login',
            abstract: true,
            templateUrl: 'app/templates/login.html'
        });

        $stateProvider.state('login.loginTab', {
            url: '/loginTab',
            views: {
            	"loginArea": {templateUrl: 'app/templates/pageParts/registerLogin/loginTab.html'},
                "liveStream": {templateUrl: 'app/templates/pageParts/main/seekerAndVoter/liveStream/liveStream.html'}
           }
        });

        $stateProvider.state('login.registerTab', {
            url: '/registerTab',
            views: {
                "loginArea": {templateUrl: 'app/templates/pageParts/registerLogin/registerTab.html'},
                "liveStream": {templateUrl: 'app/templates/pageParts/main/seekerAndVoter/liveStream/liveStream.html'}
            }
        });

        $stateProvider.state('login.resetTab', {
            url: '/resetTab',
            views: {
                "loginArea": {templateUrl: 'app/templates/pageParts/registerLogin/resetTab.html'},
                "liveStream": {templateUrl: 'app/templates/pageParts/main/seekerAndVoter/liveStream/liveStream.html'}
            }
        });


        $stateProvider.state('administration', {
            url: '/administration',
            templateUrl: 'app/templates/administration.html'
        });

        $stateProvider.state('main.profile', {
            url: '/profile',
            views: {
                "main": {templateUrl: 'app/templates/pageParts/profile/mainProfile.html'},
                "profile": {templateUrl: 'app/templates/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'app/templates/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'app/templates/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'app/templates/pageParts/navbar/navbar.html'}
            }
        });

        $stateProvider.state('main.messages', {
            url: '/messages',
            views: {
                "main": {templateUrl: 'app/templates/pageParts/messages/mainMessages.html'},
                "profile": {templateUrl: 'app/templates/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'app/templates/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'app/templates/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'app/templates/pageParts/navbar/navbar.html'}
            }
        });

        $stateProvider.state('main.favourites', {
            url: '/favourites',
            views: {
                "main": {templateUrl: 'app/templates/pageParts/favourites/mainFavourites.html'},
                "profile": {templateUrl: 'app/templates/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'app/templates/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'app/templates/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'app/templates/pageParts/navbar/navbar.html'}
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
            templateUrl: 'app/templates/roleMains/mainSeekerAndVoter.html'
           
        });

        $stateProvider.state('role.seekerAndVoter.start', {
            url: '/start',
            views: {
                "liveStreamSV": {templateUrl: 'app/templates/pageParts/main/seekerAndVoter/liveStream/liveStream.html'},
                "backgroundSV": {templateUrl: 'app/templates/pageParts/main/seekerAndVoter/background/background.html'},
                "profile": {templateUrl: 'app/templates/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'app/templates/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'app/templates/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'app/templates/pageParts/navbar/navbar.html'}
            }
        });

        $stateProvider.state('role.publisher', {
            url: '/publisher',
            abstract: true,
            templateUrl: 'app/templates/roleMains/mainPublisher.html'

        });

        $stateProvider.state('role.publisher.start', {
            url: '/start',
            views: {
                "liveStreamP": {templateUrl: 'app/templates/pageParts/main/publisher/liveStream/liveStream.html'},
                "controlBarP": {templateUrl: 'app/templates/pageParts/main/publisher/controlBar/controlBar.html'},
                "backgroundP": {templateUrl: 'app/templates/pageParts/main/publisher/background/background.html'},
                "profile": {templateUrl: 'app/templates/pageParts/profile/profileSummary.html'},
                "favourites": {templateUrl: 'app/templates/pageParts/favourites/favouritesArea.html'},
                "messages": {templateUrl: 'app/templates/pageParts/messages/messagesArea.html'},
                "navbar": {templateUrl: 'app/templates/pageParts/navbar/navbar.html'}
            }
        });
        
        
        
        

    	$locationProvider.html5Mode(true);
        $urlRouterProvider.when('/login', '/login/loginTab');
        $urlRouterProvider.when('/main', 'role.seekerAndVoter.start');
    	$urlRouterProvider.otherwise('/');
    	
    	
    	
    	
    	
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
        templateUrl: 'app/templates/pageParts/main/seekerAndVoter/background/bodyBackground.html',
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
        templateUrl: 'app/templates/pageParts/main/publisher/background/bodyBackground.html',
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
        template: '<span data-ng-click="edit()" data-ng-bind="value"></span><input data-ng-model="value">',
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
