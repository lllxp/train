// 定时数组
var timers = [];
// 控制弹幕显示
var isShow = true;
$("#send").on("click", function () {
    var jqueryDom = createScreenbullet($("#bullet-text").val());
    addInterval(jqueryDom);
});
$("#clear").on("click", function () {
    if (isShow) {
        $(".bullet").css("opacity", 0);
        isShow = false;
    } else {
        $(".bullet").css("opacity", 1);
        isShow = true;
    }   
});
// 创建弹幕
function createScreenbullet(text) {
    var Dom = $("<div class='bullet'>" + text + "</div>");
    var r = Math.floor(Math.random() * 254);
    var g = Math.floor(Math.random() * 254);
    var b = Math.floor(Math.random() * 254);
    var fontColor = "rgb("  + r + "," + g + "," + b + ")";
    var fontSize = Math.floor(( Math.random() * 20 ) + 15) + "px";
    var left = $(".container").width() + "px";
    var top = Math.floor(Math.random() * 400) + "px";
    top = parseInt(top) > 352 ? "352px" : top;
    Dom.css({
        "position": 'absolute',
        "color": fontColor,
        "font-size": fontSize,
        "left": left,
        "top": top,
        "whiteSpace": 'nowrap',
        "display": 'block',
    });
    $(".container").append(Dom);
    $("#bullet-text").val("");
    return Dom;
}
//为弹幕添加定时任务
function addInterval(Dom) {
    var i = 0;
    var speed = Math.floor(Math.random() * 5) + 1;
    var timer = setInterval(function () {
        Dom.css("left", (i += speed) + "px");
        if (Dom.offset().left + Dom.width() < $(".container").offset().left) {
            Dom.remove();
            clearInterval(timer);
        }
    }, 10);
    timers.push(timer);
}