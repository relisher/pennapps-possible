$(document).ready(function() {



    var $wrap_splashpage = $('#wrap--splashpage');
    var $splashscreen_content = $('#splashscreen');


    var $wrap_nav = $('#wrap--nav');
    var $post_item = $('.post--item');

    var offset_window_information = 25;
    var windowHeigth = $(window).height();







    $(document).on('mousemove', function(e) {

        if ($wrap_splashpage.hasClass("active")) {
             $('#custom-cursor').show();

            $wrap_splashpage
              .mouseover(function() {
                $('#custom-cursor').show();
              })
              .mouseout(function() {
                 $('#custom-cursor').hide();
              });
 


        }

        $('#custom-cursor').css({
            left: e.pageX - 25,
            top: e.pageY - 25,
            pointerEvents: 'none'
        });
        

    });




});


