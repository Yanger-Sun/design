function Player(t) {
    this.color = t
}
function HumanPlayer(t, e) {
    Player.call(this, t, e)
}
function AIPlayer(t, e, n) {
    Player.call(this, e, n),
    this.computing = !1,
    this.cancel = 0,
    this.mode = t,
    this.worker = new Worker("js/ai-worker.js");
    var o = this;
    this.worker.onmessage = function(t) {
        switch (t.data.type) {
        case "decision":
            o.computing = !1,
            o.cancel > 0 ? o.cancel--:o.setGo(t.data.r, t.data.c);
            break;
        case "starting":
            o.computing = !0;
            break;
        case "alert":
            alert(t.data.msg);
            break;
        default:
            console.log(t.data)
        }
    },
    this.worker.postMessage({
        type: "ini",
        color: e,
        mode: t
    })
}
function Place(t, e, n) {
    var o = this.elm = document.createElement("div");
    o.className = "go-place";
    var a = o.style;
    a.top = 180 * (t / 15) + "%",
    a.left = 100 * (e / 15) + "%",
    a.right = 100 - 100 * ((e + 1) / 15) + "%",
    a.bottom = 100 - 100 * ((t + 1) / 15) + "%",
    a.position = "absolute";
    var i = document.createElement("div");
    if (i.className = "go", o.appendChild(i), "ontouchstart" in window) {
        var r = !1;
        o.ontouchstart = function() {
            return r = !1,
            !1
        },
        o.ontouchmove = function() {
            return r = !0,
            !1
        },
        o.ontouchend = function() {
            return r || n.clicked(t, e),
            r = !1,
            !1
        }
    }
    o.onclick = function() {
        n.clicked(t, e)
    },
    o = $(o),
    this.elm = o,
    this.isSet = !1
}
function Game(t, e) {
    function n() {
        "black" === l ? o.myTurn() : a.myTurn()
    }
    this.mode = "hvh",
    this.rounds = 0;
    var o, a, i = !1,
    r = [],
    s = {},
    c = new Board(t, e),
    l = "black";
    c.clicked = function(t, e) {
        var n = s[l];
        n instanceof HumanPlayer && n.setGo(t, e)
    },
    this.getCurrentPlayer = function() {
        return s[l]
    },
    this.setCurrentColor = function(t) {
        l = t
    },
    this.toHuman = function(t) {
        c.setClickable(!0, t)
    },
    this.toOthers = function() {
        c.setClickable(!1)
    },
    this.update = function(t, e, r) {
        i && (this.rounds++, c.updateMap(t, e, r), a.watch(t, e, r), o.watch(t, e, r), setTimeout(n, 0))
    },
    this.setGo = function(t, e, n) {
        if (!i || c.isSet(t, e)) return ! 1;
        r.push({
            r: t,
            c: e,
            color: n
        }),
        c.highlight(t, e),
        c.setGo(t, e, n);
        var o = c.getGameResult(t, e, n);
        return "draw" === o ? this.draw() : "win" === o ? (this.win(), c.winChange(t, e, n)) : this.update(t, e, n),
        !0
    },
    this.undo = function() {
        if (!i) {
            if (!r.length) return;
            var t = r.pop();
            return c.unsetGo(t.r, t.c),
            o.watch(t.r, t.c, "remove"),
            a.watch(t.r, t.c, "remove"),
            void 0
        }
        do {
            if (!r.length) return;
            var t = r.pop();
            c.unsetGo(t.r, t.c), o.watch(t.r, t.c, "remove"), a.watch(t.r, t.c, "remove")
        } while ( s [ t . color ] instanceof AIPlayer);
        var t = r[r.length - 1];
        r.length > 0 ? c.highlight(t.r, t.c) : c.unHighlight(),
        s[t.color].other.myTurn();
        for (var e in {
            black: "",
            white: ""
        }) s[e] instanceof AIPlayer && s[e].computing && s[e].cancel++
    },
    this.draw = function() {
        i = !1,
        c.setClickable(!1)
    },
    this.win = function() {
        i = !1,
        c.setClickable(!1),
        showWinDialog(this)
    },
    this.init = function(t, e) {
        console.log(t, e),
        this.rounds = 0,
        r = [],
        c.init(),
        s = {},
        s[t.color] = t,
        s[e.color] = e,
        o = s.white,
        a = s.black,
        o.game = this,
        a.game = this,
        o.other = a,
        a.other = o,
        a instanceof HumanPlayer || c.setWarning(0, !0),
        o instanceof HumanPlayer || c.setWarning(1, !0)
    },
    this.start = function() {
        i = !0,
        s.black.myTurn()
    }
}
function adjustSizeGen() {
    var t = navigator.userAgent.toLowerCase().match(/(iphone|ipod)/),
    e = $("#game-region"),
    n = $(".board td"),
    o = $(".go-board"),
    a = $("header.game-ult"),
    i = $("#game-info"),
    r = $("#main-but-group"),
    s = $("#other-but-group");
    return function() {
        var c, l = window.innerHeight,
        h = window.innerWidth,
        u = Math.max(l - 7, .98 * l),
        m = Math.max(h - 7, .98 * l),
        f = Math.min(u - 150, m),
        g = Math.min(m - 320, u - 40);
        t && (l > h ? (f = h, g = 0) : (g = l - 40, f = 0)),
        f > g ? (c = Math.min(~~ ((f - 15) / 15 / 2), ~~ ((h - 22) / 15 / 2)), e.css({
            padding: c + 6,
            "margin-left": -(15 * (2 * c + 1) + 12) / 2,
            "padding-top": 100 + c,
            "padding-bottom": 50 + c,
            "margin-top": -(15 * c + 82)
        }), n.css("padding", c), o.css({
            top: 100,
            bottom: 50,
            left: 6,
            right: 6
        }), a.css("line-height", "80px"), i.css({
            top: 20,
            width: (15 * (2 * c + 1) + 12) / 2 - 150
        }), r.css({
            top: 6,
            right: 6,
            width: 160
        }), s.css({
            bottom: 6,
            right: 6,
            width: 160
        })) : (c = ~~ ((g - 15) / 15 / 2), e.css({
            padding: c + 6,
            "margin-left": -(15 * (2 * c + 1) + 320) / 2,
            "padding-left": 160 + c,
            "padding-right": 160 + c,
            "padding-top": 36 + c,
            "margin-top": -(15 * c + 28)
        }), n.css("padding", c), o.css({
            top: 36,
            bottom: 6,
            left: 160,
            right: 160
        }), a.css("line-height", 36 + c + "px"), i.css({
            left: 15,
            top: 36 + c,
            width: 121 - c / 2
        }), r.css({
            top: 36 + c,
            right: 6,
            width: 160
        }), s.css({
            bottom: 6 + c,
            right: 6,
            width: 160
        }))
    }
}
function showWinDialog(t) {
    if (gameInfo.setBlinking(!1), "hvh" === t.mode) {
        var e = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        } (t.getCurrentPlayer().color);
        $("#game-won h4").html(e + " Won!"),
        gameInfo.value = e + " won.",
        $("#win-content").html(e + " 赢得了比赛. 再玩一次?"),
        $("#happy-outer").fadeIn(500)
    } else t.getCurrentPlayer() instanceof HumanPlayer ? ($("#game-won h4").html("You Won!"), $("#win-content").html("你赢啦. 再玩一次?"), gameInfo.value = "You won.", $("#sad-outer").fadeIn(500)) : ($("#game-won h4").html("You Lost."), $("#win-content").html("阿偶. 你输了. 要不要再玩一次?"), gameInfo.value = "Computer won.", $("#happy-outer").fadeIn(500))
}
Player.prototype.myTurn = function() {
    this.game.setCurrentColor(this.color),
    gameInfo.setText(function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    } (this.color) + "'s turn."),
    gameInfo.setColor(this.color),
    gameInfo.setBlinking(!1)
},
Player.prototype.watch = function() {},
Player.prototype.setGo = function(t, e) {
    return this.game.setGo(t, e, this.color)
},
HumanPlayer.prototype = new Player,
HumanPlayer.prototype.myTurn = function() {
    Player.prototype.myTurn.call(this),
    this.game.toHuman(this.color),
    this.other instanceof AIPlayer && gameInfo.setText("Your turn")
},
AIPlayer.prototype = new Player,
AIPlayer.prototype.myTurn = function() {
    Player.prototype.myTurn.call(this),
    this.game.toOthers(),
    gameInfo.setText("Thinking..."),
    gameInfo.setBlinking(!0),
    this.move()
},
AIPlayer.prototype.watch = function(t, e, n) {
    this.worker.postMessage({
        type: "watch",
        r: t,
        c: e,
        color: n
    })
},
AIPlayer.prototype.move = function() {
    if (0 === this.game.rounds) this.setGo(7, 7);
    else if (1 === this.game.rounds) for (var t = [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]];;) {
        var e = Math.floor(Math.random() * t.length);
        if (this.setGo(t[e][0], t[e][1])) return;
        t.splice(e, 1)
    } else this.worker.postMessage({
        type: "compute"
    })
},
Place.prototype.set = function(t) {
    this.elm.addClass("set").addClass(t).removeClass("warning"),
    this.isSet = !0
},
Place.prototype.unset = function() {
    this.elm.removeClass("black").removeClass("white").removeClass("set").removeClass("last-move"),
    this.isSet = !1
},
Place.prototype.highlight = function() {
    this.elm.addClass("last-move")
},
Place.prototype.warns = function() {
    this.elm.addClass("warning")
},
Place.prototype.unwarns = function() {
    this.elm.removeClass("warning")
};
var Board = function(t, e) {
    function n(t, e, n, o) {
        v[n] && (h[n][o][t][e] > 4 ? l[t][e].warns() : l[t][e].unwarns())
    }
    function o(t, e, o, a) {
        if (a) for (o = 0; 2 > o; o++) for (var i = 0; 4 > i; i++) {
            h[o][i][t][e] = 1,
            n(t, e, o, i);
            for (var r = -1; 2 > r; r += 2) {
                var s = t,
                c = e,
                l = 0;
                do s += f[i][0] * r,
                c += f[i][1] * r,
                l++;
                while (s >= 0 && c >= 0 && 15 > s && 15 > c && h[o][i][s][c] === -o);
                if (s >= 0 && c >= 0 && 15 > s && 15 > c && h[o][i][s][c] > 0) {
                    h[o][i][s][c] = l,
                    n(s, c, o, i),
                    h[o][i][t][e] += l - 1,
                    n(t, e, o, i);
                    for (var u = 0,
                    m = s + f[i][0] * r, g = c + f[i][1] * r; m >= 0 && g >= 0 && 15 > m && 15 > g && h[o][i][m][g] === -o;) u++,
                    m += f[i][0] * r,
                    g += f[i][1] * r;
                    h[o][i][s][c] += u,
                    n(s, c, o, i)
                } else h[o][i][t][e] += l - 1,
                n(t, e, o, i)
            }
        } else {
            for (var i = 0; 4 > i; i++) for (var r = -1; 2 > r; r += 2) {
                var s = t,
                c = e;
                do s += f[i][0] * r,
                c += f[i][1] * r;
                while (s >= 0 && c >= 0 && 15 > s && 15 > c && h[o][i][s][c] === -o);
                if (s >= 0 && c >= 0 && 15 > s && 15 > c && h[o][i][s][c] > 0) {
                    h[o][i][s][c] = h[o][i][t][e] + 1;
                    for (var u = 0,
                    m = s + f[i][0] * r, g = c + f[i][1] * r; m >= 0 && g >= 0 && 15 > m && 15 > g && h[o][i][m][g] === -o;) u++,
                    m += f[i][0] * r,
                    g += f[i][1] * r;
                    h[o][i][s][c] += u,
                    n(s, c, o, i)
                }
                s = t,
                c = e;
                do s += f[i][0] * r,
                c += f[i][1] * r;
                while (s >= 0 && c >= 0 && 15 > s && 15 > c && h[1 - o][i][s][c] == o - 1)
            }
            for (var i = 0; 2 > i; i++) for (var d = 0; 4 > d; d++) h[i][d][t][e] = -o,
            n(t, e, o, i)
        }
    }
    for (var a = document.createDocumentFragment(), i = 0; 14 > i; i++) {
        for (var r = document.createElement("tr"), s = 0; 14 > s; s++) r.appendChild(document.createElement("td"));
        a.appendChild(r)
    }
    e.append(a);
    for (var c = !0,
    l = [], h = [], u = ["black", "white"], m = function() {
        var t = {};
        return u.forEach(function(e, n) {
            t[e] = n
        }),
        t
    } (), f = [[1, 0], [0, 1], [1, 1], [1, -1]], g = 0, a = document.createDocumentFragment(), d = 0; 15 > d; d++) {
        l.push([]);
        for (var p = 0; 15 > p; p++) l[d].push(new Place(d, p, this)),
        a.appendChild(l[d][p].elm[0])
    } [[7, 7], [3, 3], [3, 11], [11, 3], [11, 11]].forEach(function(t) {
        l[t[0]][t[1]].elm.addClass("go-darkdot")
    }),
    t.append(a),
    function() {
        for (var t = 0; 2 > t; t++) {
            for (var e = [], n = 0; 4 > n; n++) {
                for (var o = [], a = 0; 15 > a; a++) {
                    for (var i = [], r = 0; 15 > r; r++) i.push(1);
                    o.push(i)
                }
                e.push(o)
            }
            h.push(e)
        }
    } (),
    this.setClickable = function(e, n) {
        c = e,
        e ? t.addClass("playing") : t.removeClass("playing"),
        n && t.removeClass("black").removeClass("white").addClass(n)
    },
    this.setGo = function(t, e, n) {
        l[t][e].set(n),
        g++
    },
    this.unsetGo = function(t, e) {
        l[t][e].unset(),
        this.updateMap(t, e),
        g--
    },
    this.highlight = function(t, e) {
        this.unHighlight(),
        l[t][e].highlight()
    },
    this.unHighlight = function() {
        $(".last-move").removeClass("last-move")
    },
    this.winChange = function(e, n, o) {
        t.find(".warning").removeClass("warning");
        for (var a, i = m[o], r = 0; 4 > r; r++) if (h[i][r][e][n] >= 5) {
            a = r;
            break
        }
        $(".go-place").css("opacity", .5);
        for (var r = -1; 2 > r; r += 2) {
            var s = e,
            c = n;
            do l[s][c].elm.css("opacity", 1),
            s += f[a][0] * r,
            c += f[a][1] * r;
            while (s >= 0 && 15 > s && c >= 0 && 15 > c && h[i][a][s][c] == -i)
        }
    },
    this.isSet = function(t, e) {
        return l[t][e].isSet
    },
    this.getGameResult = function(t, e, n) {
        var o = m[n];
        return h[o].some(function(n) {
            return n[t][e] > 4
        }) ? "win": 225 === g ? "draw": !1
    },
    this.init = function() {
        t.find(".warning").removeClass("warning"),
        t.find(".go-place").css("opacity", ""),
        this.unHighlight(),
        g = 0,
        h.forEach(function(t) {
            t.forEach(function(t) {
                t.forEach(function(t) {
                    t.forEach(function(e, n) {
                        t[n] = 1
                    })
                })
            })
        }),
        l.forEach(function(t) {
            t.forEach(function(t) {
                t.unset()
            })
        })
    };
    var v = [!1, !1];
    this.setWarning = function(t, e) {
        v[t] = !!e
    },
    window.m = h,
    this.updateMap = function(t, e, n) {
        var a = !1,
        i = m[n];
        void 0 === i && (a = !0),
        o(t, e, i, a)
    }
};
$(document).ready(function() {
    var t = new Game($(".go-board"), $(".board tbody")),
    e = adjustSizeGen();
    $(window).resize(e),
    e(),
    $.mobile.defaultDialogTransition = "flip",
    $.mobile.defaultPageTransition = "flip",
    $('#mode-select input[type="radio"]').on("change",
    function() {
        gameData.mode = $(this).val()
    }),
    $('#color-select input[type="radio"]').on("change",
    function() {
        gameData.color = $(this).val()
    }),
    $('#level-select input[type="radio"]').on("change",
    function() {
        gameData.level = $(this).val()
    }),
    $(".back-to-game").on("tap",
    function() {
        $.mobile.changePage("#game-page")
    }),
    $("#start-game").on("click",
    function() {
        try {
            t.white.worker.terminate(),
            t.black.worker.terminate()
        } catch(e) {}
        if ("vshuman" === gameData.mode) t.mode = "hvh",
        t.init(new HumanPlayer("black"), new HumanPlayer("white"));
        else {
            var n, o;
            "black" === gameData.color ? (n = "black", o = "white") : (n = "white", o = "black"),
            t.mode = gameData.level,
            t.init(new HumanPlayer(n), new AIPlayer(t.mode, o))
        }
        $.mobile.changePage("#game-page"),
        t.start(),
        setTimeout(function() {
            $(".back-to-game").button("enable")
        },
        100)
    }),
    $("#undo-button").on("tap",
    function() {
        t.undo()
    }),
    $(".fullscreen-wrapper").on("tap",
    function() {
        $(this).hide(),
        $.mobile.changePage("#game-won")
    }),
    $("#new-game").page(),
    $("#game-won").page(),
    gameData.load(),
    $(".back-to-game").button("disable"),
    $.mobile.changePage("#new-game", {
        changeHash: !1
    }),
    window.gameInfo = function() {
        var t = !1,
        e = "",
        n = "",
        o = {};
        o.getBlinking = function() {
            return t
        };
        var a = $("#game-info");
        o.setBlinking = function(e) {
            e !== t && (t = e, e ? a.addClass("blinking") : a.removeClass("blinking"))
        },
        o.getText = function() {
            return e
        };
        var i = $("#game-info>.cont");
        o.setText = function(t) {
            e = t,
            i.html(t)
        },
        o.getColor = function() {
            return n
        };
        var r = $("#game-info>.go");
        return o.setColor = function(t) {
            r.removeClass("white").removeClass("black"),
            t && r.addClass(t)
        },
        o
    } ()
}),
gameData = {
    prefix: "yyjhao.gomoku.",
    records: {},
    addRecord: function(t, e, n) {
        this.records[t] = e;
        var o;
        o = n ? n: function() {},
        Object.defineProperty(this, t, {
            get: function() {
                return localStorage[this.prefix + t]
            },
            set: function(e) {
                o(e),
                localStorage[this.prefix + t] = e
            }
        })
    },
    ini: function() {
        for (var t in this.records) this[t] = this.records[t]
    },
    apply: function() {
        for (var t in this.records) this[t] = this[t]
    }
},
gameData.addRecord("firstTime", "firstTime"),
gameData.addRecord("mode", "vscomputer",
function(t) {
    $('#mode-select input[value="' + t + '"]').attr("checked", !0),
    $('#mode-select input[type="radio"]').checkboxradio("refresh"),
    "vshuman" == t ? $(".vs-computer").hide() : $(".vs-computer").show()
}),
gameData.addRecord("color", "black",
function(t) {
    $('#color-select input[value="' + t + '"]').attr("checked", !0),
    $('#color-select input[type="radio"]').checkboxradio("refresh")
}),
gameData.addRecord("level", "medium",
function(t) {
    $('#level-select input[value="' + t + '"]').attr("checked", !0),
    $('#level-select input[type="radio"]').checkboxradio("refresh")
}),
gameData.load = function() {
    this.firstTime || this.ini(),
    this.apply()
};