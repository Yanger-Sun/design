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
        name:"��ɵĺ���",
        src:"yinpin/��ͯ����-��ɵĺ���.mp3"
    },
    {
        name:"������СŮ��",
        src:"yinpin/��ͯ����-������СŮ��.mp3",
    },
    {
        name:"��ѩ����",
        src:"yinpin/��ͯ����-��ѩ����.mp3",
    },
    {
        name:"Ь�����С��",
        src:"yinpin/��ͯ-��ϰ��(����Ʒ��)-Ь�����С��.mp3",
    },
    {
        name:"��ֻС��",
        src:"yinpin/��ͯ����-��ֻС��.mp3",
    },
    {
        name:"����Ů��",
        src:"yinpin/��ͯ����-����Ů��.mp3",
    },
    {
        name:"�Ǻ�С��",
        src:"yinpin/��ͯ����-�Ǻ�С��.mp3",
    },
    {
        name:"�㶹����",
        src:"yinpin/��ͯ����-�㶹����.mp3",
    },
    {
        name:"��ɫ��",
        src:"yinpin/��ͯ����-��ɫ��.mp3",
    },
    {
        name:"��������",
        src:"yinpin/��ͯ����-��������.mp3",
    },
    {
        name:"����������",
        src:"yinpin/��ͯ����-����������.mp3",
    },
    {
        name:"��ֻС��Ƿ���",
        src:"yinpin/��ͯ����-��ֻС��Ƿ���.mp3",
    },
    {
        name:"��������",
        src:"yinpin/��ͯ����-��������.mp3",
    },
    {
        name:"����ˢ����Сʨ��",
        src:"yinpin/��ͯ����-����ˢ����Сʨ��.mp3",
    },
    {
        name:"�����Է��ı���",
        src:"yinpin/��ͯ����-�����Է��ı���.mp3",
    },
    {
        name:"����ϴ���С��",
        src:"yinpin/��ͯ����-����ϴ���С��.mp3",
    },
    {
        name:"�������ص�Ь��",
        src:"yinpin/��ͯ����-�������ص�Ь��.mp3",
    },
    {
        name:"��ѻ��ˮ",
        src:"yinpin/��ͯ����-��ѻ��ˮ.mp3",
    },
    {
        name:"ʲô��֪����С��ȸ",
        src:"yinpin/��ͯ����-ʲô��֪����С��ȸ.mp3",
    },
    {
        name:"���ܵĺ��ܲ�",
        src:"yinpin/��ͯ����-���ܵĺ��ܲ�.mp3",
    },
    {
        name:"��ѩ����",
        src:"yinpin/��ͯ����-��ѩ����.mp3",
    },
    {
        name:"˾����Ҹ�",
        src:"yinpin/��ͯ����-˾����Ƹ׾���.mp3",
    },
    {
        name:"�϶���",
        src:"yinpin/��ͯ����-�϶���.mp3",
    },
    {
        name:"������è��",
        src:"yinpin/��ͯ����-������è��.mp3",
    },
    {
        name:"С�õļ�",
        src:"yinpin/��ͯ����-С�õļ�.mp3",
    },
    {
        name:"С������СѼ��",
        src:"yinpin/��ͯ����-С������СѼ��.mp3",
    },
    {
        name:"С����ϴ��",
        src:"yinpin/��ͯ����-С����ϴ��.mp3",
    },
    {
        name:"С�ù���",
        src:"yinpin/��ͯ����-С�ù���.mp3",
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
		name:"����������",
		src:"http://player.video.qiyi.com/8eed044a5d7856668bf96bd0bad9db76/0/810/v_19rravyqyk.swf-albumId=206527601-tvId=657683600-isPurchase=0-cnId=4"	
	},
	{
		name:"�׶�԰��һ��",
		src:"http://player.video.qiyi.com/2e7e272379d2037b4a4f4ba9df0557ee/0/810/v_19rravzbc4.swf-albumId=206527601-tvId=657661000-isPurchase=0-cnId=4"	
	},
	{
		name:"����ɷ�",
		src:"http://player.video.qiyi.com/1f89d43b1487b29d4e77f276f3dab7f1/0/810/v_19rravzvys.swf-albumId=206527601-tvId=657687800-isPurchase=0-cnId=4"	
	},
	{
		name:"ȥҰӪ",
		src:"http://player.video.qiyi.com/0a23e11bc5f399c1e3e5bdd4304aabf3/0/810/v_19rravzwwc.swf-albumId=206527601-tvId=657690400-isPurchase=0-cnId=4"	
	},
	{
		name:"�����İ����",
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
//��������Ϸ������
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
		name:"���־�1",
		src:"music/��ͯ����-�����־����̶�01.mp3"	
	},
	{
		name:"���־�2",
		src:"music/��ͯ����-�����־����̶�03.mp3"	
	},
	{
		name:"���־�3",
		src:"music/��ͯ����-�����־����̶�03.mp3"	
	},
	{
		name:"���־�4",
		src:"music/��ͯ����-�����־����̶�04.mp3"	
	},
	{
		name:"���־�5",
		src:"music/��ͯ����-�����־����̶�05.mp3"	
	},
	{
		name:"���־�6",
		src:"music/��ͯ����-�����־����̶�06.mp3"	
	},
	{
		name:"���־�7",
		src:"music/��ͯ����-�����־����̶�07.mp3"	
	},
	{
		name:"���־�8",
		src:"music/��ͯ����-�����־����̶�08.mp3"	
	},
	{
		name:"���־�9",
		src:"music/��ͯ����-�����־����̶�09.mp3"	
	},
	{
		name:"���־�10",
		src:"music/��ͯ����-�����־����̶�10.mp3"	
	},
	{
		name:"���־�11",
		src:"music/��ͯ����-�����־����̶�11.mp3"	
	},
	{
		name:"���־�12",
		src:"music/��ͯ����-�����־����̶�12.mp3"	
	},
	{
		name:"���־�13",
		src:"music/��ͯ����-�����־����̶�13.mp3"	
	},
	{
		name:"���־�14",
		src:"music/��ͯ����-�����־����̶�14.mp3"	
	},
	{
		name:"���־�15",
		src:"music/��ͯ����-�����־����̶�15.mp3"	
	},
	{
		name:"���־�16",
		src:"music/��ͯ����-�����־����̶�16.mp3"	
	},
	{
		name:"���־�17",
		src:"music/��ͯ����-�����־����̶�17.mp3"	
	},
	{
		name:"���־�18",
		src:"music/��ͯ����-�����־����̶�18.mp3"	
	},
	{
		name:"���־�19",
		src:"music/��ͯ����-�����־����̶�19.mp3"	
	},
	{
		name:"���־�20",
		src:"music/��ͯ����-�����־����̶�20.mp3"	
	},
	{
		name:"���־�21",
		src:"music/��ͯ����-�����־����̶�21.mp3"	
	},
	{
		name:"���־�22",
		src:"music/��ͯ����-�����־����̶�22.mp3"	
	},
	{
		name:"���־�23",
		src:"music/��ͯ����-�����־����̶�23.mp3"	
	},
	{
		name:"���־�24",
		src:"music/��ͯ����-�����־����̶�24.mp3"	
	},
	{
		name:"���־�25",
		src:"music/��ͯ����-�����־����̶�25.mp3"	
	},
	{
		name:"���־�26",
		src:"music/��ͯ����-�����־����̶�26.mp3"	
	},
	{
		name:"���־�27",
		src:"music/��ͯ����-�����־����̶�27.mp3"	
	},
	{
		name:"���־�28",
		src:"music/��ͯ����-�����־����̶�28.mp3"	
	},
	{
		name:"���־�29",
		src:"music/��ͯ����-�����־����̶�29.mp3"	
	},
]
var bjx = [
	{
		name:"�ټ���",
		src:"music/��ͯ����-���ټ��ա�.mp3"
	}
]
var shi = [
	{
		name:"һȥ������",
		src:"music/��ͯ����-һȥ������.mp3"
	},
	{
		name:"��ҹ˼ ���",
		src:"music/��ͯ����-��ҹ˼-���.mp3"
	},
	{
		name:"����",
		src:"music/��ͯ����-����.mp3"
	},
	{
		name:"����ͥ ������",
		src:"music/��ͯ����-����ͥ-������.mp3"
	},
	{
		name:"����ȸ¥",
		src:"music/��ͯ����-����ȸ¥.mp3"
	},
	{
		name:"����ҹ��",
		src:"music/���ѧ��ʫ-����ҹ��.mp3"
	},
	{
		name:"С�� ������",
		src:"music/��ͯ����-С��-������.mp3"
	},
	{ 
		name:"�佭�� �׾���",
		src:"music/��ͯ����-�佭��-�׾���.mp3"
	},
	{
		name:"é��Ϊ������Ƹ� �Ÿ�",
		src:"music/��ͯ����-é��Ϊ������Ƹ�.mp3"
	},
	{
		name:"��ȸ���Ϸ�",
		src:"music/���Һ�-��ȸ���Ϸ�(����)���ָ����.mp3"
	},
]
var dizigui = [
	{
		name:"���ӹ�(������)1",
		src:"music/��ͯ����-���ӹ�(������)1.mp3"
	},
	{
		name:"���ӹ�(������)2",
		src:"music/��ͯ����-���ӹ�(������)2.mp3"
	},
	{
		name:"���ӹ�(������)3",
		src:"music/��ͯ����-���ӹ�(������)3.mp3"
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
$("#canvas").attr("height",screenH * 0.8);
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
