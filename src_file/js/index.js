$(window).scroll(function () {
    var wscroll = $(this).scrollTop();
    $('.logo').css({
        'transform': 'translate(0px , ' + wscroll/2 +'px )'
    })
    $('.back-bird').css({
        'transform': 'translate('+wscroll/8 + 'px,' + wscroll/2 +'px )'
    })
    $('.fore-bird').css({
        'transform': 'translate('+ wscroll/6 + 'px, -' + wscroll/5 +'px )'
    })
    var minus = 100;
    if (wscroll > $('.content').offset().top - ($(window).height()/2.2)) {
        $(".fig").each(function (i) {
            setTimeout(function () {
                $(".fig").eq(i).addClass('is-showing');
            }, 350 * (i + 1))
        });
    }

    if
    (wscroll>($(".mirror-paralax").offset().top - $(window).height()/2)) {
        $(".overlay , .offer").css({ "opacity": "1" })
        
    }
    
    else {
        $(".overlay, .offer").css({ "opacity": "0" })
        
    }


    
 
});

