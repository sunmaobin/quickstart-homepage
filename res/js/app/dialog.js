/**
 * Created by Night on 2016/01/12.
 */
define(['jquery', 'ejs', 'data.cases'], function($, ejs, cases) {
    var App = function(){
        var start;
    };

    App.prototype = {
        init : function (start) {
            this.start = start || 1;

            this.main();
            var _self = this;
            setTimeout(function () {
                _self.back().slides();
            },500);
        },
        main : function () {
            $("article").fadeOut(function () {
                var tmpl = new EJS({url: "tmpl/app/case.ejs"}).render({
                    cases : cases
                });
                $('body').append(tmpl).show(function () {
                    setTimeout(function () {
                        $('.dialog').removeClass('zoomIn');
                    },1000);
                });

                var tmplFooter = new EJS({url: "tmpl/footer.ejs"}).render();
                $('.dialog footer').append(tmplFooter).show();

                $("html,body").scrollTop(0);
            });
            return this;
        },
        back : function () {
            $('#backHome').click(function () {
                $('.dialog').addClass('zoomOut').hide(function () {
                    $(this).remove();
                    $("article").fadeIn();
                    $("html,body").scrollTop($("#case").offset().top - 100);
                });
            });
            return this;
        },
        slides : function () {
            var _self = this;

            $(".banner").slidesjs({
                width: $(window).width(),
                height: 600,
                start : _self.start,//从第几个开始
                navigation: {
                    active: false,
                    effect: "slide",
                    container : $('.dialog')
                },
                pagination: {
                    active: false
                },
                play: {
                    active: false,
                    effect: "slide",
                    interval: 3000,
                    auto: false,
                    swap: false,
                    pauseOnHover: true,
                    restartDelay: 1500
                },
                effect: {
                    slide: {
                        speed: 500
                    }
                },
                callback: {
                    loaded: function(number) {//加载完成于，可以配置从第几个开始加载
                        var flag = ".slider-content-";
                        setTimeout(function () {
                            $(flag + number).slideDown();
                        },1000);
                    },
                    start: function(number) {//开始于
                        _self.start = number;
                    },
                    complete: function(number) {//结束于
                        var flag = ".slider-content-";
                        $(flag + _self.start).slideUp(function () {
                            $(flag + number).slideDown();
                        });
                    }
                }
            });

            return this;
        }
    };

    return new App();
});
