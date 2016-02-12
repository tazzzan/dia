var dia = angular.module("dia", []);


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

dia.directive('makeDraggable', function () {
    return {
        restrict: 'AE',
        transclude: true,
        link: function (element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }
    }
})

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

dia.directive('dropArea', function () {
    return {
        restrict: 'A',
        transclude: true,
        template: '<div id="dropArea"> ökjö </div>',
        link: function (scope, element, attrs) {
            element.parent().bind('mouseenter', function () {
                element.show();
            });
            element.parent().bind('mouseleave', function () {
                element.hide();
            });
        }
    }
});

