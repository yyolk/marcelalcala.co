


var columnSize = Math.floor($(window).width() / $('#container img').size());
$("#container img").wrap('<div class="imgbox" />');
$('.imgbox').each(function(){
    $(this).find('img').css({'visibility' : 'hidden'});
    $(this).css(
            {'background-image' : "url('" + ($(this).find('img')).attr('src') + "')"}
            );
});
$('.imgbox').css({'width':columnSize+'px', 'height' : $(window).height(), 'overflow' : 'hidden'});
$('#container').masonry({singleMode: true, columnWidth: columnSize, itemSelector : '.imgbox' });

$('.imgbox').toggle(
    function(){
        // panel expands
        $(this).addClass('selected');
        $(this).animate({
            width: $(window).width(),
            height: $(window).height(),
            left:0

        });
        $('#container').animate({width: $(window).width(), height:$(window).height()});
        $('.imgbox').not('.selected').hide();

    },

    function(){
        $('#container').masonry();
        $('.imgbox').animate({
            width: columnSize,
            height: $(window).height(),
        });
        $('#container').animate({height:$(window).height()});
        //$('.imgbox').show(200);
        $('.imgbox').fadeIn();
        $(this).removeClass('selected');
    }

);


