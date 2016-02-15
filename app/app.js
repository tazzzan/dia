var dia = angular.module("dia", []);

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
        template: '<p id="draggableVoteOption">{{ voteoption }}</p>',
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
            var targetId = scope.targetObject;
            $("#" + targetId).droppable({
                accept: $(element),
                activeClass: "ui-state-default",
                drop: function( event, ui ) {
                    $( this )
                        .addClass( "ui-state-highlight" )
                        .find( "p" )
                        .html( "Dropped!" );
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



dia.directive('hideElement', function () {
    return {
        restrict: 'A',
        transclude: true,
        link: function (element, attrs) {
            $(element).hide();
        }
    }
});

