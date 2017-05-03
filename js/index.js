/**
 * Created by Administrator on 2016/12/13.
 */
var t = setInterval(f,800);
var aboutLi = $(".about_contains ul");
var aboutTop = aboutLi.find("li").outerHeight(true);
function f(){
    aboutTCount++;
    if(aboutTCount == 15){
        aboutTCount = 1;
    }
    aboutLi.find("li").removeClass("now");
    if(aboutLi.find("li").eq(5).text() != ""){
        aboutLi.find("li").eq(5).addClass("now");
    }
    aboutLi.animate({"marginTop":-aboutTop}).queue(function(){
        aboutLi.find("li").eq(0).appendTo(aboutLi);
        aboutLi.css({"marginTop":0});
        $(this).dequeue();
    });
}
clearInterval(t);

$(".story_yp").on("touchstart",function(){
        $(".story_contains").hide();
        $(".yinpin").attr("display","show");
        $(".yinpin").css("display","block");
        drawyinpin();
});
$(".story_sp").on("touchstart",function(){
    $(".story_contains").hide();
    $(".video").attr("display","show");
    $(".video").css("display","block");
        drawvideo();
});

var music = [
    {
        name:"会飞的孩子",
        src:"yinpin/儿童读物-会飞的孩子.mp3"
    },
    {
        name:"卖火柴的小女孩",
        src:"yinpin/儿童读物-卖火柴的小女孩.mp3",
    },
    {
        name:"白雪公主",
        src:"yinpin/儿童读物-白雪公主.mp3",
    },
    {
        name:"鞋盒里的小鸟",
        src:"yinpin/儿童-好习惯(公德品行)-鞋盒里的小鸟.mp3",
    },
    {
        name:"三只小猪",
        src:"yinpin/儿童故事-三只小猪.mp3",
    },
    {
        name:"海的女儿",
        src:"yinpin/儿童故事-海的女儿.mp3",
    },
    {
        name:"狼和小羊",
        src:"yinpin/儿童故事-狼和小羊.mp3",
    },
    {
        name:"豌豆公主",
        src:"yinpin/儿童故事-豌豆公主.mp3",
    },
    {
        name:"七色花",
        src:"yinpin/儿童读物-七色花.mp3",
    },
    {
        name:"三个和尚",
        src:"yinpin/儿童读物-三个和尚.mp3",
    },
    {
        name:"三个好朋友",
        src:"yinpin/儿童读物-三个好朋友.mp3",
    },
    {
        name:"三只小猪盖房子",
        src:"yinpin/儿童读物-三只小猪盖房子.mp3",
    },
    {
        name:"三种语言",
        src:"yinpin/儿童读物-三种语言.mp3",
    },
    {
        name:"不爱刷牙的小狮子",
        src:"yinpin/儿童读物-不爱刷牙的小狮子.mp3",
    },
    {
        name:"不爱吃饭的贝贝",
        src:"yinpin/儿童读物-不爱吃饭的贝贝.mp3",
    },
    {
        name:"不爱洗澡的小猪",
        src:"yinpin/儿童读物-不爱洗澡的小猪.mp3",
    },
    {
        name:"两个神秘的鞋匠",
        src:"yinpin/儿童读物-两个神秘的鞋匠.mp3",
    },
    {
        name:"乌鸦喝水",
        src:"yinpin/儿童读物-乌鸦喝水.mp3",
    },
    {
        name:"什么都知道的小麻雀",
        src:"yinpin/儿童读物-什么都知道的小麻雀.mp3",
    },
    {
        name:"会跑的红萝卜",
        src:"yinpin/儿童读物-会跑的红萝卜.mp3",
    },
    {
        name:"白雪公主",
        src:"yinpin/儿童读物-白雪公主.mp3",
    },
    {
        name:"司马光砸缸",
        src:"yinpin/儿童读物-司马光破缸救人.mp3",
    },
    {
        name:"嫦娥奔月",
        src:"yinpin/儿童读物-嫦娥奔月.mp3",
    },
    {
        name:"宝宝找猫咪",
        src:"yinpin/儿童读物-宝宝找猫咪.mp3",
    },
    {
        name:"小兔的家",
        src:"yinpin/儿童读物-小兔的家.mp3",
    },
    {
        name:"小公鸡和小鸭子",
        src:"yinpin/儿童读物-小公鸡和小鸭子.mp3",
    },
    {
        name:"小星星洗澡",
        src:"yinpin/儿童读物-小星星洗澡.mp3",
    },
    {
        name:"小兔过冬",
        src:"yinpin/儿童读物-小兔过冬.mp3",
    },
]; 
function drawyinpin(){
    $(music).each(function(i,v){
        if(i==0){
            $(".yp_title").html(v.name);
			$(".yp_process audio").attr("src",v.src);
        }
        $("<li>").appendTo($(".yp_list"));
        $(".yp_list").find("li").eq(i).html(v.name)
    })
}

var ypnowIndex;
$(".yp_list").on("touchstart","li",function(e){
	ypnowIndex = $(this).index();
	 $(".yp_title").html(music[ypnowIndex].name);
	$(".yp_process audio").attr("src",music[ypnowIndex].src);
	$(".yp_process audio").get(0).play(); 
})
$(".yinpin .tab_up").on("touchstart",function(){
	$(".yp_process audio").get(0).pause(); 
	ypnowIndex-=1;
	if(ypnowIndex < 0){
    	ypnowIndex = $(".yp_list").find("li").length - 1;
	}
	console.log(music[ypnowIndex].name)
	 $(".yp_title").html(music[ypnowIndex].name);
	$(".yp_process audio").attr("src",music[ypnowIndex].src);
	$(".yp_process audio").get(0).play(); 
})
$(".yinpin .tab_down").on("touchstart",function(){
	$(".yp_process audio").get(0).pause(); 
	ypnowIndex+=1;
	if(ypnowIndex == $(".yp_list").find("li").length){
    	ypnowIndex = 0;
	}
	 $(".yp_title").html(music[ypnowIndex].name);
	$(".yp_process audio").attr("src",music[ypnowIndex].src);
	$(".yp_process audio").get(0).play(); 
})

var video = [
	{
		name:"发现新世界",
		src:"http://player.video.qiyi.com/8eed044a5d7856668bf96bd0bad9db76/0/810/v_19rravyqyk.swf-albumId=206527601-tvId=657683600-isPurchase=0-cnId=4"	
	},
	{
		name:"幼儿园的一天",
		src:"http://player.video.qiyi.com/2e7e272379d2037b4a4f4ba9df0557ee/0/810/v_19rravzbc4.swf-albumId=206527601-tvId=657661000-isPurchase=0-cnId=4"	
	},
	{
		name:"虫儿飞飞",
		src:"http://player.video.qiyi.com/1f89d43b1487b29d4e77f276f3dab7f1/0/810/v_19rravzvys.swf-albumId=206527601-tvId=657687800-isPurchase=0-cnId=4"	
	},
	{
		name:"去野营",
		src:"http://player.video.qiyi.com/0a23e11bc5f399c1e3e5bdd4304aabf3/0/810/v_19rravzwwc.swf-albumId=206527601-tvId=657690400-isPurchase=0-cnId=4"	
	},
	{
		name:"门外的陌生人",
		src:"http://player.video.qiyi.com/a768ed9b39dbca672c29d0236c53b38f/0/810/v_19rravdb5g.swf-albumId=206527601-tvId=658749400-isPurchase=0-cnId=4"	
	}
]
function drawvideo(){
    $(video).each(function(i,v){
        if(i==0){
            $(".video_title").html(v.name);
			$(".video_process audio").attr("src",v.src);
        }
        $("<li>").appendTo($(".video_list"));
        $(".video_list").find("li").eq(i).html(v.name)
    })
}

var videonowIndex;
$(".video_list").on("touchstart","li",function(e){
	videonowIndex = $(this).index();
	 $(".video_title").html(video[videonowIndex].name);
	$(".video_process embed").attr("src",video[videonowIndex].src);
	$(".video_process embed").get(0).play(); 
})
$(".video .tab_up").on("touchstart",function(){
	videonowIndex-=1;
	if(videonowIndex < 0){
    	videonowIndex = $(".video_list").find("li").length - 1;
	}
	console.log(video[videonowIndex].name)
	 $(".video_title").html(video[videonowIndex].name);
	$(".video_process embed").attr("src",video[videonowIndex].src);
	$(".video_process embed").get(0).play(); 
})
$(".video .tab_down").on("touchstart",function(){
	ypnowIndex+=1;
	if(videonowIndex == $(".video_list").find("li").length){
    	videonowIndex = 0;
	}
	 $(".video_title").html(video[videonowIndex].name);
	$(".video_process embed").attr("src",video[videonowIndex].src);
	$(".video_process embed").get(0).play(); 
})


$(".game_five").on("touchstart",function(){
    $(".game").removeClass("show");
    $(".five_row").css("display","block");
});
//五子棋游戏处代码
////// MOBILE GESTURES ////////
$(".game_draw").on("touchstart",function(){
    $(".game").removeClass("show");
    $(".draw").css("display","block");
});
$(".game_2048").on("touchstart",function(){
    $(".game").removeClass("show");
    $(".five iframe").attr("src","game.html");
    $(".five").css("display","block");
});

var szj = [
	{
		name:"三字经1",
		src:"music/儿童读物-《三字经》教读01.mp3"	
	},
	{
		name:"三字经2",
		src:"music/儿童读物-《三字经》教读03.mp3"	
	},
	{
		name:"三字经3",
		src:"music/儿童读物-《三字经》教读03.mp3"	
	},
	{
		name:"三字经4",
		src:"music/儿童读物-《三字经》教读04.mp3"	
	},
	{
		name:"三字经5",
		src:"music/儿童读物-《三字经》教读05.mp3"	
	},
	{
		name:"三字经6",
		src:"music/儿童读物-《三字经》教读06.mp3"	
	},
	{
		name:"三字经7",
		src:"music/儿童读物-《三字经》教读07.mp3"	
	},
	{
		name:"三字经8",
		src:"music/儿童读物-《三字经》教读08.mp3"	
	},
	{
		name:"三字经9",
		src:"music/儿童读物-《三字经》教读09.mp3"	
	},
	{
		name:"三字经10",
		src:"music/儿童读物-《三字经》教读10.mp3"	
	},
	{
		name:"三字经11",
		src:"music/儿童读物-《三字经》教读11.mp3"	
	},
	{
		name:"三字经12",
		src:"music/儿童读物-《三字经》教读12.mp3"	
	},
	{
		name:"三字经13",
		src:"music/儿童读物-《三字经》教读13.mp3"	
	},
	{
		name:"三字经14",
		src:"music/儿童读物-《三字经》教读14.mp3"	
	},
	{
		name:"三字经15",
		src:"music/儿童读物-《三字经》教读15.mp3"	
	},
	{
		name:"三字经16",
		src:"music/儿童读物-《三字经》教读16.mp3"	
	},
	{
		name:"三字经17",
		src:"music/儿童读物-《三字经》教读17.mp3"	
	},
	{
		name:"三字经18",
		src:"music/儿童读物-《三字经》教读18.mp3"	
	},
	{
		name:"三字经19",
		src:"music/儿童读物-《三字经》教读19.mp3"	
	},
	{
		name:"三字经20",
		src:"music/儿童读物-《三字经》教读20.mp3"	
	},
	{
		name:"三字经21",
		src:"music/儿童读物-《三字经》教读21.mp3"	
	},
	{
		name:"三字经22",
		src:"music/儿童读物-《三字经》教读22.mp3"	
	},
	{
		name:"三字经23",
		src:"music/儿童读物-《三字经》教读23.mp3"	
	},
	{
		name:"三字经24",
		src:"music/儿童读物-《三字经》教读24.mp3"	
	},
	{
		name:"三字经25",
		src:"music/儿童读物-《三字经》教读25.mp3"	
	},
	{
		name:"三字经26",
		src:"music/儿童读物-《三字经》教读26.mp3"	
	},
	{
		name:"三字经27",
		src:"music/儿童读物-《三字经》教读27.mp3"	
	},
	{
		name:"三字经28",
		src:"music/儿童读物-《三字经》教读28.mp3"	
	},
	{
		name:"三字经29",
		src:"music/儿童读物-《三字经》教读29.mp3"	
	},
]
var bjx = [
	{
		name:"百家姓",
		src:"music/儿童读物-《百家姓》.mp3"
	}
]
var shi = [
	{
		name:"一去二三里",
		src:"music/儿童故事-一去二三里.mp3"
	},
	{
		name:"静夜思 李白",
		src:"music/儿童读物-静夜思-李白.mp3"
	},
	{
		name:"锄禾",
		src:"music/儿童故事-锄禾.mp3"
	},
	{
		name:"望洞庭 刘禹锡",
		src:"music/儿童读物-望洞庭-刘禹锡.mp3"
	},
	{
		name:"登鹳雀楼",
		src:"music/儿童故事-登鹳雀楼.mp3"
	},
	{
		name:"枫桥夜泊",
		src:"music/嘟拉学古诗-枫桥夜泊.mp3"
	},
	{
		name:"小池 杨万里",
		src:"music/儿童读物-小池-杨万里.mp3"
	},
	{ 
		name:"忆江南 白居易",
		src:"music/儿童读物-忆江南-白居易.mp3"
	},
	{
		name:"茅屋为秋风所破歌 杜甫",
		src:"music/儿童读物-茅屋为秋风所破歌.mp3"
	},
	{
		name:"孔雀东南飞",
		src:"music/瞿弦和-孔雀东南飞(并序)汉乐府民歌.mp3"
	},
]
var dizigui = [
	{
		name:"弟子规(跟读版)1",
		src:"music/儿童读物-弟子规(跟读版)1.mp3"
	},
	{
		name:"弟子规(跟读版)2",
		src:"music/儿童读物-弟子规(跟读版)2.mp3"
	},
	{
		name:"弟子规(跟读版)3",
		src:"music/儿童读物-弟子规(跟读版)3.mp3"
	},
]
var nowBook;
$(".sanzijing").on("touchstart",function(){
	$(".szj").show();
	$(".study.menu_block").removeClass("show");
	$(".szj").attr("display","show");
	makeSZJ(szj);
})
$(".baijiaxing").on("touchstart",function(){
	$(".szj").show();
	$(".study.menu_block").removeClass("show");
	$(".szj").attr("display","show");
	makeSZJ(bjx);
})
$(".gushici").on("touchstart",function(){
	$(".szj").show();
	$(".study.menu_block").removeClass("show");
	$(".szj").attr("display","show");
	makeSZJ(shi);
})
$(".dizigui").on("touchstart",function(){
	$(".szj").show();
	$(".study.menu_block").removeClass("show");
	$(".szj").attr("display","show");
	makeSZJ(dizigui);
})
function makeSZJ(szj){
	nowBook = szj;
	console.log(nowBook);
	$(".study_list").html("");
	$.each(nowBook,function(i,v){
		if(i==0){
			 $(".study_title").html(v.name);
			 $(".study_process audio").attr("src",v.src);
        }
        $("<li>").appendTo($(".study_list"));
        $(".study_list").find("li").eq(i).html(v.name)
	})
}

var studynowIndex;
$(".study_list").on("touchstart","li",function(e){
	console.log(nowBook);
	studynowIndex = $(this).index();
	 $(".study_title").html(nowBook[studynowIndex].name);
	$(".study_process audio").attr("src",nowBook[studynowIndex].src);
	$(".study_process audio").get(0).play(); 
})
$(".szj .tab_up").on("touchstart",function(){
	$(".study_process audio").get(0).pause(); 
	studynowIndex-=1;
	if(studynowIndex < 0){
    	studynowIndex = $(".study_list").find("li").length - 1;
	}
	console.log(nowBook[studynowIndex].name)
	 $(".study_title").html(nowBook[studynowIndex].name);
	$(".study_process audio").attr("src",nowBook[studynowIndex].src);
	$(".study_process audio").get(0).play(); 
})
$(".szj .tab_down").on("touchstart",function(){
	$(".study_process audio").get(0).pause(); 
	studynowIndex+=1;
	if(studynowIndex == $(".study_list").find("li").length){
    	studynowIndex = 0;
	}
	console.log(nowBook[studynowIndex].name)
	 $(".study_title").html(nowBook[studynowIndex].name);
	$(".study_process audio").attr("src",nowBook[studynowIndex].src);
	$(".study_process audio").get(0).play(); 
})









var myElement = document.getElementById('mobilewrap');
var hammertime = new Hammer(myElement);
hammertime.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});

hammertime.on('swipeleft', function(ev) {
    moveDirection(37);
});

hammertime.on('swiperight', function(ev) {
    moveDirection(39);
});

hammertime.on('swipeup', function(ev) {
    moveDirection(38);
});

hammertime.on('swipedown', function(ev) {
    moveDirection(40);
});

/* ---------------------------------------------------------------------- */

var matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
var component = new Array();
var best = 0;
var score = 0;

$(".button").on("click", function() {
    restoreField();
    init();
});

init();

function restoreField() {
    score = 0;
    $(".scorefield").text(score);
    matrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    component = new Array();
    $('.tiles').remove();
    $("#container").append("<div class='tiles'></div>");
    $(".over").css("visibility", "hidden").css("opacity", "0");
}

function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function dueoquattro() {
    return (((Math.random() * 10) > 5) ? 4 : 2);
}

function init() {
    var i = 0;
    while (i < 2) {
        var x = random(0, 4);
        var y = random(0, 4);

        if (matrix[x][y] == 0) {
            i++;
            matrix[x][y] = dueoquattro();
            component.push({
                x: x,
                y: y
            });

            updateTile(12 * x, 12 * y, x, y);
        }
    }
}

function updateTile(trax, tray, x, y) {
    $(".tiles").append("<div class='tile tile-" + matrix[x][y] + " tile-" + x + "-" + y + "' style='transform: translate(" + trax + "vh, " + tray + "vh);'><div class='tile_content'><span>" + matrix[x][y] + "</span></div></div>");
}

window.addEventListener('keydown', this.direction, false);

function compare(a, b) {
    if (dx == 1) {
        if (a.x < b.x)
            return -1;
        if (a.x > b.x)
            return 1;
        return 0;
    }
}

function moveDirection(code) {
    var change = 0;
    switch (code) {
        case 37:
            component.sort(function(a, b) {
                if (a.x < b.x) {
                    return -1;
                }
                if (a.x > b.x) {
                    return 1;
                }
                return 0;
            });
            change = move(-1, 0);
            break;
        case 38:
            component.sort(function(a, b) {
                if (a.y < b.y) {
                    return -1;
                }
                if (a.y > b.y) {
                    return 1;
                }
                return 0;
            });
            change = move(0, -1);
            break;
        case 39:
            component.sort(function(a, b) {
                if (a.x > b.x) {
                    return -1;
                }
                if (a.x < b.x) {
                    return 1;
                }
                return 0;
            });
            change = move(1, 0);
            break;
        case 40:
            component.sort(function(a, b) {
                if (a.y > b.y) {
                    return -1;
                }
                if (a.y < b.y) {
                    return 1;
                }
                return 0;
            });
            change = move(0, 1);
            break;
    }

    if (change > 0) {
        addTile();
    }

    if (checkDefeat()) {
        $(".over").css("visibility", "visible").css("opacity", "1");
    }

}

function checkDefeat() {
    if (component.length == 16) {
        for (var i = 0; i < component.length; i++) {
            for (var x = -1; x <= 1; x++) {
                for (var y = -1; y <= 1; y++) {
                    if (x != y && Math.abs(x) != Math.abs(y)) {
                        if (isMovePossible(component[i].x, component[i].y, x, y, i)) {
                            return false;
                        }
                    }
                }
            }
        }

        return true;
    }
}

function won() {
    $(".won").css("visibility", "visible").css("padding-top", "0px").css("opacity", 1);
}

function direction(e) {
    moveDirection(e.keyCode);
}

function addTile() {
    var i = 0;
    while (i < 1) {
        var x = random(0, 4);
        var y = random(0, 4);

        if (matrix[x][y] == 0) {
            i++;
            matrix[x][y] = dueoquattro();
            component.push({
                x: x,
                y: y
            });

            updateTile(12 * x, 12 * y, x, y);
        }
    }
}

function move(dx, dy) {
    var change = 0;
    for (var i = 0; i < component.length; i++) {
        while (isMovePossible(component[i].x, component[i].y, dx, dy, i)) {
            makeMove(component[i].x, component[i].y, dx, dy, i);
            change++;
            if (component[i].x != -1 && component[i].y != -1) {
                component[i].x += dx;
                component[i].y += dy;
            }
        }
    }

    checkTrash();
    return change;
}

function makeMove(x, y, dx, dy, i) {
    var newX = x + dx;
    var newY = y + dy;
    var newValue = matrix[x][y] + matrix[newX][newY];

    if (matrix[newX][newY] == matrix[x][y]) {
        component[i].x = -1;
        component[i].y = -1;
        score += newValue;
        $(".scorefield").text(score);
        if (score > best) {
            best = score;
            $(".numbest").text(best);
        }
    }

    matrix[newX][newY] = newValue;
    matrix[x][y] = 0;

    updateTile(12 * newX, 12 * newY, newX, newY);
    $('.tile-' + x + '-' + y + '').remove();

    if (newValue == 2048) {
        won();
    }
}

function checkTrash() {
    for (var i = 0; i < component.length; i++) {
        if (component[i].x == -1 && component[i].y == -1) {
            component.splice(i, 1);
        }
    }
}

function isMovePossible(x, y, dx, dy, i) {
    var newX = x + dx;
    var newY = y + dy;

    if (newX < 4 && newX >= 0 && newY < 4 && newY >= 0) {
        if (matrix[newX][newY] == 0) {
            return true;
        } else if (matrix[newX][newY] == matrix[x][y]) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

var canvas = $("#canvas")[0];
var ctxt = canvas.getContext('2d');
var screenW = $(window).width();
var screenH = $(window).height();
$("#canvas").attr("width",screenW * 0.9);
$("#canvas").attr("height",screenH * 0.6);
$("#canvas").css("marginTop",screenH * 0.1);
$("#canvas").css("marginLeft",screenW * 0.05);
var prevX=0,prevY=0,nextX,nextY;
$("#canvas").on("touchstart",function(e){
	 var touchX = e.originalEvent.changedTouches[0].clientX
     var touchY = e.originalEvent.changedTouches[0].clientY;
     canLeft = $("#canvas").offset().left;
     canTop = $("#canvas").offset().top;
	 console.log(canLeft,canTop,touchX,touchY)
     prevY = Math.floor((touchX - canLeft));
     prevX = Math.floor((touchY - canTop));
})
$("#canvas").on("touchmove",function(e){
	 var touchX = e.originalEvent.changedTouches[0].clientX
     var touchY = e.originalEvent.changedTouches[0].clientY;
     canLeft = $("#canvas").offset().left;
     canTop = $("#canvas").offset().top;
	 console.log(canLeft,canTop,touchX,touchY)
     nextY = Math.floor((touchX - canLeft));
     nextX = Math.floor((touchY - canTop));
	 ctxt.strokeStyle = $(".colorBtn input").val();
	 ctxt.beginPath();
	 ctxt.moveTo(prevY,prevX);
	 ctxt.lineTo(nextY,nextX);
	 ctxt.stroke();
	 ctxt.closePath();
	 prevX = nextX;
	 prevY = nextY;
})
$("#canvas").on("touchend",function(e){
	prevY = 0;
	prevX = 0;
})
$(".clearBtn").on("touchstart",function(){
	ctxt.clearRect(0,0,$("#canvas").width(),$("#canvas").height());
})


var growImg = [
	{
		type:"1",
		src:"images/1.jpg"
	},
	{
		type:"1",
		src:"images/2.jpg"
	},
	{
		type:"1",
		src:"images/3.jpg"
	},
	{
		type:"1",
		src:"images/4.jpg"
	},
	{
		type:"1",
		src:"images/5.jpg"
	},
	{
		type:"1",
		src:"images/6.jpg"
	},
	{
		type:"1",
		src:"images/7.jpg"
	},
	{
		type:"1",
		src:"images/8.jpg"
	},
	{
		type:"1",
		src:"images/9.jpg"
	},
	{
		type:"1",
		src:"images/10.jpg"
	},
	{
		type:"1",
		src:"images/11.jpg"
	},
	{
		type:"1",
		src:"images/12.jpg"
	},
	{
		type:"1",
		src:"images/13.jpg"
	},
	{
		type:"1",
		src:"images/14.jpg"
	},
	{
		type:"1",
		src:"images/15.jpg"
	},
	{
		type:"1",
		src:"images/16.jpg"
	},
	{
		type:"1",
		src:"images/17.jpg"
	},
	{
		type:"1",
		src:"images/18.jpg"
	},
]
function makePhoto(){
	$.each(growImg,function(i,v){
		$("<li>").appendTo($(".grow.menu_block ul"));
		$("<img>").attr("src",growImg[i].src).appendTo($(".grow.menu_block ul li").eq(i));
	})
	$("<li>").addClass("add").appendTo($(".grow.menu_block ul"))
}
$(".grow.menu_block").on("touchstart",function(){

	

})
