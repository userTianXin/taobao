 $('.hiden-box').show()
            .css({
                left: ((wW - 1190)/2 + 149),
                top:  beginH
            }).animate({width: '729px'}, 300);
        $('.hiden-box > li').hide();
        $('#hiden-'+num).fadeIn(200);
        beginH = 138;
    }, function(){
        $(this).find('h3').css({border: ''})
            .end().find('span').css({color: ""});
        $('.hiden-box').hide().css({width: '0'});
    });
    $('.hiden-box').hover(function(){
        $('.s_'+num).css({
            border: '1px solid #f40',
            borderRight: '1px solid #fff'
        }).find('h3').css({border: 'none'})
            .end().find('span').css({color: "#f40"});
        $(this).show().css({width: '729px'});
    }, function(){
        $('.s_'+num).css({
            border: '',
            borderRight: ''
        }).find('h3').css({border: ''})
            .end().find('span').css({color: ""});
        $(this).animate({
            width: 0
        }, 200).hide(200);
    });

})();