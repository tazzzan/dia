
$(document).ready(function(){
    $("#thisbutton").click(function(){
        $("#thisp").toggle();
    });
});


$(document).ready(function(){
    $(".tbutton ").click(function(){
        $("#thisp").toggle();
    });
});


$(document).ready(function() {
    $( ".draggable" ).draggable({ revert: true});
});

$(document).ready(function() {
    $("#topicAreaTitle").draggable({appendTo: 'body', revert: true});
});