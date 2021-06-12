$(function () {// function可共用

    // 下拉選單
    $("nav>ul>li").on({
        mouseenter: function () {
            $(this).children("div").stop().slideDown();

        },
        mouseleave: function () {
            $(this).children("div").stop().slideUp();

        },

    });


});

     //換圖輪播調整
     $(".carousel").carousel({
        interval : 3000,
        pause: false
    })