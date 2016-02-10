var dia = angular.module("dia", []);


dia.directive('myDir', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(".pComment").click(function(){
            $(".draggableTopicsComment").toggle();
            });
        }
    };
});

dia.directive('commentSection', function () {
    return {
        restrict: 'AE',
        transclude: true,
        scope: {comment: '='},
        template: '<p>{{ comment }}</p>',
        link: function (scope, element, attrs) {
            $(element).draggable({appendTo: 'body', revert: true});
        }
    };
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
})


