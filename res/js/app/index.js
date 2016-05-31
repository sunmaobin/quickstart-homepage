/**
 * Created by Night on 2016/01/12.
 */
define(['jquery', 'ejs', 'app/dialog', 'slides', 'data.cases'], function($, ejs,dialog,slides,cases) {
    var App = function(){

    };

    App.prototype = {
        init : function () {
            this.main().dialog();
        },
        main : function () {
            var tmpl = new EJS({url: "tmpl/app/index.ejs"}).render({
                cases : cases
            });
            $('main').html(tmpl).fadeIn();
            return this;
        },
        dialog : function () {
            $.each($(".case .item"), function (i,d) {
                $(this).click(function () {
                    dialog.init(i+1);
                });
            });

            return this;
        }
    };

    return new App();
});
