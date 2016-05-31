/**
 * Created by Night on 2016/01/12.
 */
define(['jquery', 'ejs', 'common/base','app/index'], function($, ejs, base,index) {
    var App = function(){

    };

    App.prototype = {
        init : function () {
            //禁止手机端运行
            //TODO:如果需要这里需要扩展
            if(this.ua() == 'app'){
                this.warn();
                return false;
            };

            base.init();
            this.main().scroll();
        },
        main : function () {
            index.init();

            return this;
        },
        warn : function(){
            $("body").html(
                "<div class='warn'>" +
                    "<p>请您在电脑上访问网站</p>" +
                    "<p class='copy'>Copyright &copy; 2016. 橙子科技</p>" +
                "</div>");
        },
        ua : function () {//UA判断
            var ua = navigator.userAgent.toLowerCase();
            if(ua.indexOf("iphone")>0
                || ua.indexOf("ipad")>0
                || ua.indexOf("ipod")>0
                || ua.indexOf("android")>0)
            {
                return 'app';
            };

            return 'pc';
        },
        scroll : function () {//滚动条监听
            var curNav = "#banner";
            var prevNav = curNav;

            window.onscroll = function(){
                var sh = $(document).scrollTop()
                    ,dh = $(document).height()
                    ,wh =$(window).height()
                    ,nav = $("a[data-target]");

                //由于有时候页面到底部了，但是却未到达最后一个元素的位置,hack下。
                if(wh + sh >= dh){
                    nav.removeClass('active');
                    nav.last().addClass('active');
                    return;
                };

                //获取最后一个大于滚动条的位置
                $.each(nav, function (i,d) {
                    var target = $(this).attr('data-target');
                    if(sh >= $(target).offset().top - 100){
                        curNav = target;
                    };
                });

                //防止一直重复更换
                //当然这里也可以使用setTimeout来处理。
                if(prevNav != curNav){
                    nav.removeClass('active');
                    $("a[data-target="+curNav+"]").addClass('active');
                    prevNav = curNav;
                };
            };
            return this;
        }
    };

    return new App();
});
