
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


$(function() {
    // constants
    var SHOW_CLASS = 'show',
        HIDE_CLASS = 'hide',
        ACTIVE_CLASS = 'active';

    $( '.tabs' ).on( 'click', 'li a', function(e){
        e.preventDefault();
        var $tab = $( this ),
            href = $tab.attr( 'href' );

        $( '.active' ).removeClass( ACTIVE_CLASS );
        $tab.addClass( ACTIVE_CLASS );

        $( '.show' )
            .removeClass( SHOW_CLASS )
            .addClass( HIDE_CLASS )
            .hide();

        $(href)
            .removeClass( HIDE_CLASS )
            .addClass( SHOW_CLASS )
            .hide()
            .fadeIn( 550 );
    });
});