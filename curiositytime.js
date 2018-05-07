window.setInterval(function(){
    var d = new Date();

    //From Wikipedia: MSD = (unix + (TAI−UTC)) / 88775.244147 + 34127.2954262

    //TAI-UTC is the difference between International Atomic Time and UTC - currently 37 seconds

    //Curiosity is MTC+09:09:40.8

    var unix = Math.floor(d.getTime()/1000);

    var mtime = (unix + 37) / 88775.244147 + 34127.2954262;

    var hours = Math.floor(mtime % 1 * 24 + 9) % 24;
    var min = Math.floor((mtime * 24) % 1 * 60 + 9) % 60;
    var sec = Math.floor((mtime * 24*60) % 1 * 60 + 40.8) % 60;


    if (min<9)
    { var min0 = "0"}
    else { var min0=""}

    if (sec<9)
    { var sec0 = "0"}
    else { var sec0=""}

    var curiosityTime = hours + ":" + min0 + min + ":" + sec0 + sec;

    $("time").text(curiosityTime);
} , 1000);
