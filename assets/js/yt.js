$(function(){   
    // 控制影片二開關
    $(".btn_video").click(function () {
        $(".popup_video").css("display","block");
        $("body").css("overflow","hidden");
        player.playVideo();
        window.setTimeout(function () {
            document.querySelector('#popup_player').style.zIndex = '100'
        }, 200)
    })

    $(".icon--close").click(function () {
        $(".popup_video").css("display","none");
        $("body").css("overflow","auto");
        player.stopVideo();
        player.mute()
    })
});

var tag = document.createElement('script');
  
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// popup_player
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('popup_player', {
        height: '360',
        width: '640',
        videoId: 'XOnvbjK2P9Q',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange, //當 Youtube 狀態改變時 ( -1 尚未開始、0 結束、1 正在播放、2 暫停、3 buffering、5 video cue
        }
    });
}
function onPlayerReady(event) {
    player.mute()
    event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 0);
    done = true;
    }
}
function stopVideo() {
    player.stopVideo();
    player.mute()
}

