var $window = $(window),
    $body = $('body'),
    $panel = $('.section');
$(window).scroll(function() {
    var fagripdots = ($window.scrollTop()/722)*255;
    $("#fagripdots").css("color", "rgb("+fagripdots+","+fagripdots+","+fagripdots+")");
    $("#fagripdots2").css("top", ($window.scrollTop()/722)*110);
    $("#fagripdots3").css("opacity", 0.25-(($window.scrollTop()/722)*(0.25)));
    $("#fagripdots4").css("opacity", 1-($window.scrollTop()/722));
    $("#fagripdots6").css("opacity", 1-($window.scrollTop()/722));
    $("#fagripdots5").css("left", -100+(($window.scrollTop()/722)*(112)) +"%");
    $("#fagripdots7").css("top", -60+(($window.scrollTop()/722)*(68)));
    if($window.scrollTop()==0){
        $("#fagripdots1").css("display", "flex");
    }else{
        $("#fagripdots1").css("display", "none");
    }
}).scroll();
function float2int(value) {
    return value | 0;
}