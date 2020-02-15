$(document).ready(function() {
    function initializeToggles() {
        var toggles = $('.toggle');
        toggles.off();
        toggles.click(function () {
            var onOff = $(this).find('.toggle-on-off');
            var status = $(this).hasClass('off') ? 'on' : 'off';
            var value = $(this).hasClass('off') ? 1 : 0;
            onOff.html(onOff.attr('data-' + status));
            $(this).toggleClass('off').attr('data-value', value);
        });
        $.each(toggles, function (k, v) {
            var onOff = $(this).find('.toggle-on-off');
            var status = $(this).hasClass('off') ? 'off' : 'on';
            var value = $(this).hasClass('off') ? 0 : 1;
            onOff.html(onOff.attr('data-' + status)).attr('data-value', value);
        });
    }

    $(function () {
      initializeToggles();
    });

    // make the hide show button
    $("#users").click(function(){
        $("#toggle").toggle(200);
        $("#visitors").toggle(200);
    });
    $("#discomfort").click(function(){
        $("#fbody").toggle(200);
        $("#bbody").toggle(200);
        $("#questionnaire").toggle(200);
        // document.getElementById("menu-toggler").style.display = "none";
        // $("#menubutton").toggle(200);
    });

    $("#menu-toggler1").click(function(){
        $("#vitals").toggle(300);
        vitals.style.display = "flex";
        $("#menu").toggle();
        $("#menu3").toggle();
    });

    $("#menu-toggler").click(function(){
        $("#menu3").toggle();
        $("#menu1").toggle();
    });

    $("#menu-toggler3").click(function(){
        $("#menu").toggle();
        $('.osk_box').slideToggle(100);
        $("#menu1").toggle();
        $("#menu-toggler3").toggle();
        $("#goback").toggle();
    });

    $("#goback").click(function(){
        $("#goback").toggle();
        $("#menu").toggle();
        $('.osk_box').slideToggle(100);
        $("#menu1").toggle();
        document.getElementById("menu-toggler3").checked = false;

    });

});
