/**
 * Created by night on 2016/01/12.
 */

define(['jquery','app/index'], function($,index) {
    var Base = function(){

    };

    Base.prototype = {
        init : function(){
            this.header().footer();
        },
        header : function () {
            var tmpl = new EJS({url: "tmpl/header.ejs"}).render({
                curPage : 'index'
            });

            $('header').html(tmpl).fadeIn();

            //nav 菜单单击事件
            $('nav a').click(function () {
                //跳转
                var target = $(this).attr('data-target');
                //99为header的高度，因为header fixed了，如果不fixed 则不需要减
                $("html,body").animate({scrollTop:$(target).offset().top - 99},300);
            });

            return this;
        },
        footer : function () {
            var tmpl = new EJS({url: "tmpl/footer.ejs"}).render();
            $('footer').html(tmpl).show();

            return this;
        }
    };

    return new Base();
});
