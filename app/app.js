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


myyy

dia.directive('myDirr', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $( ".draggableTopicsComment" ).draggable({  });
        }
    };
});
