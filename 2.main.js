webpackJsonp([2], {
    580: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.GamePage = void 0;
        var s, n, r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                }
                return t
            },
            o = function() {
                var t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
                return function(e, i, s, n) {
                    var r = e && e.defaultProps,
                        o = arguments.length - 3;
                    if (i || 0 === o || (i = {}), i && r)
                        for (var a in r) void 0 === i[a] && (i[a] = r[a]);
                    else i || (i = r || {});
                    if (1 === o) i.children = n;
                    else if (o > 1) {
                        for (var h = Array(o), l = 0; l < o; l++) h[l] = arguments[l + 3];
                        i.children = h
                    }
                    return {
                        $$typeof: t,
                        type: e,
                        key: void 0 === s ? null : "" + s,
                        ref: null,
                        props: i,
                        _owner: null
                    }
                }
            }(),
            a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            h = i(1),
            l = F(h),
            u = i(793),
            c = i(857),
            p = i(141),
            d = i(78),
            m = F(i(100)),
            f = i(635),
            g = i(70),
            _ = i(225),
            b = i(661),
            y = i(724),
            R = i(101),
            v = F(i(228)),
            S = F(i(40)),
            C = i(858),
            T = F(i(860)),
            N = i(725),
            A = i(913),
            E = i(231),
            D = i(649),
            I = i(650),
            O = i(746),
            k = i(227),
            w = i(690),
            M = i(916),
            P = i(747);

        function F(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function x(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new Promise(function(t, i) {
                    return function s(n, r) {
                        try {
                            var o = e[n](r),
                                a = o.value
                        } catch (t) {
                            return void i(t)
                        }
                        if (!o.done) return Promise.resolve(a).then(function(t) {
                            s("next", t)
                        }, function(t) {
                            s("throw", t)
                        });
                        t(a)
                    }("next")
                })
            }
        }
        var L = !1,
            B = o("div", {
                className: "clearfix"
            }),
            V = o("p", {
                className: "info-head text-uppercase mt-4 mb-3"
            }, void 0, "Game info"),
            G = o("p", {
                className: "info-head text-uppercase mt-4 mb-3"
            }, void 0, "Game keywords"),
            q = o("div", {
                className: "game-info"
            }, void 0, o("p", {
                className: "info-head text-uppercase mt-4 mb-3"
            }, void 0, o("a", {
                class: "text-underline",
                href: "https://snesnow.com",
                rel: "follow",
                title: "Snesn games online"
            }, void 0, "Related SNES games")), o("a", {
                class: "text-underline",
                href: "https://snesnow.com/play/contra-iii-the-alien-wars-239.html",
                rel: "follow",
                title: "Contra III - The Alien Wars - SNES"
            }, void 0, "Contra III - The Alien Wars - SNES"), o("br", {}), o("a", {
                class: "text-underline",
                href: "https://snesnow.com/play/mega-man-x-881.html",
                rel: "follow",
                title: "Mega Man X - SNES"
            }, void 0, "Mega Man X - SNES")),
            U = o("div", {
                className: "my-5 hidden-md-up"
            }, void 0, o(y.FacebookPage, {})),
            X = o("div", {
                className: "widget-title text-uppercase text-center mb-5 "
            }, void 0, "You may like"),
            H = o("div", {
                className: "widget-title text-center mb-5"
            }, void 0, "Top played"),
            Y = o("div", {
                className: "my-5 hidden-md-down"
            }, void 0, o(y.FacebookPage, {})),
            W = o("table", {
                className: "table controller-help"
            }, void 0, o("thead", {
                className: "thead-light"
            }, void 0, o("tr", {}, void 0, o("th", {
                scope: "col"
            }, void 0, "Direction"), o("th", {
                scope: "col"
            }, void 0, "Select"), o("th", {
                scope: "col"
            }, void 0, "Start"), o("th", {
                scope: "col"
            }, void 0, "B"), o("th", {
                scope: "col"
            }, void 0, "A"))), o("tbody", {}, void 0, o("tr", {}, void 0, o("td", {
                scope: "col"
            }, void 0, "Arrow"), o("td", {
                scope: "col"
            }, void 0, "Ctrl"), o("td", {
                scope: "col"
            }, void 0, "Enter"), o("td", {
                scope: "col"
            }, void 0, "Z"), o("td", {
                scope: "col"
            }, void 0, "X")))),
            j = o("div", {
                className: "col-12 my-2 py-3 info-head"
            }, void 0, "GAME PICTURES");
        e.GamePage = (s = (0, d.inject)("store"), (0, b.routeAutoReload)(n = s(n = (0, p.withAsync)(n = (0, d.observer)(n = function(t) {
            function e() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.state = {
                    isPlayed: !1,
                    keyController: null,
                    fullMode: !1
                }, t.onOrientationChange = function() {
                    window.innerWidth > window.innerHeight ? t.enableFullScreen() : t.closeFullScreen()
                }, t.handleRate = function(e) {
                    var i = e.type,
                        s = e.rating;
                    "click" === i && (t.setState({
                        rated: s
                    }), t.gameStore.rateGame(t.props.data.id, s))
                }, t.enableFullScreen = t.enableFullScreen.bind(t), t.toggleCrt = t.toggleCrt.bind(t), t.startPlay = t.startPlay.bind(t), t
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, h.Component), a(e, [{
                key: "seoData",
                get: function() {
                    var t = this.props.data;
                    return {
                        title: t.name + " (" + t.console.slug.toUpperCase() + ") - Online Game",
                        ogTitle: t.metadata && t.metadata.ogTitle ? t.metadata.ogTitle : t.name + " Online was released. Play instantly in Facebook App - Retro Remix",
                        ogImage: "" + (t.images && t.images[1] ? t.images[1] : t.thumbnail),
                        keywords: t.name + " " + t.console.slug + ", " + t.name + " online, " + t.name + " html5, " + v.default.stickKeywords,
                        description: this.templates.metaDescription,
                        ogDescription: "Play Mobile Online Emulator with 1200 Nintendo games. Save State, Load State supported (Facebook instantly play).",
                        canonical: S.default.host + t.permalink
                    }
                }
            }, {
                key: "full",
                set: function(t) {
                    t ? ($("body").addClass("full-mode"), M.FixDialog.preOpen()) : ($("body").removeClass("full-mode"), M.FixDialog.preClose()), this.setState({
                        fullMode: t
                    })
                }
            }, {
                key: "templates",
                get: function() {
                    var t = this.props.data;
                    return {
                        gameInfo: t.name + " is an online retro game of " + t.console.name + "/" + t.console.slug.toUpperCase() + " system, which came active for playing online at oldgameshelf.com from " + m.default.getDateString(new Date, "mm/dd/yyy") + ".\n                      Until now, this browser version of " + t.name + " has been archived as a museum artwork and rated " + t.rateValue + " out of 5 mark, " + t.rateCount + " number taken in rating this. The game is kind\n                      of action, adventure, shooting, rgp. You can also play " + t.name + " " + t.console.slug + " on mobile.",
                        metaDescription: t.name + " is an online game of " + t.console.name + ". ✔ Play " + t.name + " " + t.console.slug + ' on mobile with ✔ CRT effect ✔ Save state ✔ Load state for real retro game feeling. This "' + t.name + " " + t.console.slug + '" is in ' + t.console.slug.toUpperCase() + " games list."
                    }
                }
            }, {
                key: "gameStore",
                get: function() {
                    return this.props.store.game
                }
            }]), a(e, [{
                key: "componentDidMount",
                value: function() {
                    var t = this;
                    this.props.data.quickLoad && (this.props.store.game.fetchGameById(this.props.data.id).then(function(e) {
                        t.props.data.arounds = e.arounds
                    }), this.forceUpdate()), this.setState({
                        keyController: this.player.keyboardController
                    }), window.addEventListener("orientationchange", this.onOrientationChange)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("orientationchange", this.onOrientationChange)
                }
            }, {
                key: "toggleCrt",
                value: function() {
                    L = !L, this.forceUpdate()
                }
            }, {
                key: "startPlay",
                value: function() {
                    this.setState({
                        isPlayed: !0
                    }), this.player.start()
                }
            }, {
                key: "saveGame",
                value: function() {
                    this.player.saveState()
                }
            }, {
                key: "loadGame",
                value: function() {
                    this.player.loadState()
                }
            }, {
                key: "downloadScreenShot",
                value: function() {
                    var t = this.player.screenShot();
                    m.default.downloadTag(t, this.props.data.slug + "-" + Date.now())
                }
            }, {
                key: "enableFullScreen",
                value: function() {
                    var t = x(regeneratorRuntime.mark(function t(e) {
                        var i;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (i = !1, !0 !== e) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 4, (0, O.confirm)({
                                        message: "Please rotate your phone to landscape and press Done!",
                                        intent: k.Intent.PRIMARY,
                                        ok: "Done"
                                    });
                                case 4:
                                    if (!t.sent) {
                                        t.next = 6;
                                        break
                                    }
                                    i = !0;
                                case 6:
                                    t.next = 9;
                                    break;
                                case 8:
                                    i = !0;
                                case 9:
                                    this.full = i;
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "closeFullScreen",
                value: function() {
                    var t = x(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.full = !1;
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props.data;
                    return o("div", {
                        className: "game-page " + (this.state.fullMode ? "game-page--full" : "")
                    }, void 0, o(R.Seo, {
                        seoData: this.seoData
                    }), o(E.Rating, {
                        data: r({}, e, {
                            desc: this.templates.metaDescription
                        })
                    }), l.default.createElement(c.KeySetting, {
                        key: 1,
                        ref: function(e) {
                            return t.keySetting = e
                        }
                    }), o("div", {
                        className: "container"
                    }, 2, o("div", {
                        className: "py-5 admin-required"
                    }, void 0, o("button", {
                        type: "button",
                        className: "mr-3 btn btn-outline-light",
                        onClick: function() {
                            return D.editGameModal.open(e)
                        }
                    }, void 0, " ", "Edit game"), o("button", {
                        type: "button",
                        className: "btn btn-outline-light",
                        onClick: function() {
                            return I.addGameModal.open(1)
                        }
                    }, void 0, "New game")), B, o("div", {
                        className: "row"
                    }, void 0, o("div", {
                        className: "col-lg-7"
                    }, void 0, o("div", {
                        className: "bg-dark p-4 game-section"
                    }, void 0, o("h1", {
                        className: "game-title"
                    }, void 0, "Play ", e.name, " online -", " ", e.console.name + " " + e.console.slug.toUpperCase()), o("div", {
                        className: "floatable-container"
                    }, void 0, o("div", {
                        className: "player-container over-x"
                    }, void 0, o("div", {
                        className: "embed-responsive " + (L ? "crt" : "")
                    }, void 0, o("div", {
                        className: "embed-responsive-item"
                    }, void 0, l.default.createElement(u.GamePlayer, {
                        key: "player",
                        isShowProgress: this.state.isPlayed,
                        rom: e.romUrl,
                        ref: function(e) {
                            return t.player = e
                        }
                    }, o("div", {
                        className: "btn-close-full btn btn-outline-light",
                        onClick: this.closeFullScreen.bind(this)
                    }, void 0, "Exit"), this.state.isPlayed ? null : o(h.Fragment, {}, void 0, o("div", {
                        onClick: this.startPlay,
                        className: "player__trigger"
                    }), this.renderControllerHelp())))))), o("div", {
                        className: "btn-group btn-group-sm player-settings d-flex justify-content-center my-2 over-x"
                    }, void 0, o("button", {
                        className: "btn col  " + (L ? "btn-light" : "btn-outline-light"),
                        onClick: this.toggleCrt.bind(this)
                    }, void 0, "CRT effect"), o("button", {
                        className: "btn col btn-outline-light",
                        onClick: this.saveGame.bind(this)
                    }, void 0, "Save game"), o("button", {
                        className: "btn col btn-outline-light",
                        onClick: this.loadGame.bind(this)
                    }, void 0, "Load game"), o("button", {
                        className: "btn col btn-outline-light hidden-sm-down",
                        onClick: this.enableFullScreen.bind(this)
                    }, void 0, "Full screen"), o("button", {
                        className: "btn col btn-outline-light hidden-md-up",
                        onClick: function() {
                            return t.enableFullScreen()
                        }
                    }, void 0, "Landscape Mode"), o("button", {
                        className: "btn col btn-outline-light hidden-sm-down",
                        onClick: this.downloadScreenShot.bind(this)
                    }, void 0, "Screenshot")), o("div", {
                        className: "over-x"
                    }, void 0, o(C.MobileGamepad, {
                        keyController: this.state.keyController
                    })), o("main", {
                        className: "game-content-container mt-4 mb-3"
                    }, void 0, o(P.InfoLinkAds, {
                        isShow: S.default.mobile
                    }), this.renderRateAndShare(), o("div", {
                        className: "game-info"
                    }, void 0, V, o("h2", {}, void 0, this.templates.gameInfo)), o("div", {
                        className: "game-keywords"
                    }, void 0, G, o("a", {
                        title: "Search for " + e.name + " " + e.console.slug,
                        href: "https://www.google.com/search?q=" + encodeURIComponent(this.seoData.keywords.replace(v.default.stickKeywords, "")),
                        target: "_blank"
                    }, void 0, this.seoData.keywords.replace(v.default.stickKeywords, ""))), this.renderGallery(), q)), U, o(A.Comment, {
                        targetId: e.id
                    }), e.arounds ? o("div", {
                        className: "my-4"
                    }, void 0, X, o(f.ListGame, {
                        col: 3,
                        className: "hide-list-type",
                        type: "grid",
                        data: e.arounds
                    })) : null), o("div", {
                        className: "col-lg-4 side-col"
                    }, void 0, o(P.InfoLinkAds, {
                        isShow: !S.default.mobile
                    }), o("div", {
                        className: "bg-dark p-3"
                    }, void 0, H, o(_.Loader, {
                        className: "mx-auto my-4",
                        loading: this.gameStore.topGames.state === g.stateType.loading
                    }, void 0, o(f.ListGame, {
                        className: "hide-list-type is--image-only",
                        type: "grid",
                        data: this.gameStore.topGames.data
                    }))), Y))))
                }
            }, {
                key: "renderControllerHelp",
                value: function() {
                    return W
                }
            }, {
                key: "renderRateAndShare",
                value: function() {
                    var t = this.props.data,
                        e = this.state.rated ? "You Rated " + this.state.rated + " stars. Let's share now !" : "Rate and share";
                    return o("div", {
                        className: "rate-and-share"
                    }, void 0, o("p", {
                        className: "info-head text-uppercase mt-4 my-4"
                    }, void 0, e), o("div", {
                        className: "row justify-content-between align-items-center"
                    }, void 0, o("div", {
                        className: "col"
                    }, void 0, o(T.default, {
                        total: 5,
                        interactive: !this.state.rated,
                        rating: this.state.rated || t.rateValue,
                        onRate: this.handleRate
                    })), o("div", {
                        className: "col text-right"
                    }, void 0, (0, N.renderShares)({
                        url: S.default.host + t.permalink,
                        title: this.seoData.title,
                        image: this.seoData.ogImage
                    }))))
                }
            }, {
                key: "renderGallery",
                value: function() {
                    var t = this.props.data,
                        e = ["Image of playing online", "Screenshot of", "Play online", "Now play", "Game picture", "HTML5 "],
                        i = function(i) {
                            return e[i % e.length] + " " + t.name + " " + t.console.slug.toLowerCase() + " - " + i + "/" + (new Date).getFullYear()
                        };
                    return t.images && t.images.length ? o("div", {
                        className: "row game-pictures"
                    }, void 0, j, t.images.map(function(t, e) {
                        return o("div", {
                            className: "col-md-4 col-sm-6 col-6"
                        }, e, o("figure", {
                            className: "figure",
                            "data-lazyload": t
                        }, void 0, o(w.LazyLoad, {}, void 0, o("img", {
                            className: "figure-img img-fluid",
                            src: t,
                            alt: i(e),
                            title: i(e)
                        })), o("figcaption", {
                            className: "figure-caption"
                        }, void 0, i(e))))
                    })) : null
                }
            }], [{
                key: "asyncLoad",
                value: function() {
                    var t = x(regeneratorRuntime.mark(function t() {
                        var e, i, s;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = this.props.store, i = this.props.match.params.gameId, s = void 0, !this.props.location.state) {
                                        t.next = 6;
                                        break
                                    }(s = this.props.location.state).quickLoad = !0, t.next = 9;
                                    break;
                                case 6:
                                    console.log('fetching game by id')
                                    console.log(e.game.fetchGameById(i));
                                    return t.next = 8, e.game.fetchGameById(i);
                                case 8:
                                    s = t.sent;
                                case 9:
                                    if (!s || this.props.location.pathname !== s.permalink) {
                                        t.next = 13;
                                        break
                                    }
                                    return s.console = e.gameConsole.findConsole[s.consoleId], this.props.store.ui.setBreadcrumb([{
                                        link: S.default.host + "/" + s.console.slug,
                                        name: s.console.name
                                    }, {
                                        link: "" + S.default.host + s.permalink,
                                        name: s.name + " - online " + s.console.slug.toUpperCase()
                                    }]), t.abrupt("return", s);
                                case 13:
                                    return t.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }]), e
        }()) || n) || n) || n) || n)
    },
    630: function(t, e, i) {
        t.exports = {
            Controller: i(692),
            NES: i(797)
        }
    },
    652: function(t, e) {
        t.exports = {
            copyArrayElements: function(t, e, i, s, n) {
                for (var r = 0; r < n; ++r) i[s + r] = t[e + r]
            },
            copyArray: function(t) {
                return t.slice(0)
            },
            fromJSON: function(t, e) {
                for (var i = 0; i < t.JSON_PROPERTIES.length; i++) t[t.JSON_PROPERTIES[i]] = e[t.JSON_PROPERTIES[i]]
            },
            toJSON: function(t) {
                for (var e = {}, i = 0; i < t.JSON_PROPERTIES.length; i++) e[t.JSON_PROPERTIES[i]] = t[t.JSON_PROPERTIES[i]];
                return e
            }
        }
    },
    692: function(t, e) {
        var i = function() {
            this.state = new Array(8);
            for (var t = 0; t < this.state.length; t++) this.state[t] = 64
        };
        i.BUTTON_A = 0, i.BUTTON_B = 1, i.BUTTON_SELECT = 2, i.BUTTON_START = 3, i.BUTTON_UP = 4, i.BUTTON_DOWN = 5, i.BUTTON_LEFT = 6, i.BUTTON_RIGHT = 7, i.prototype = {
            buttonDown: function(t) {
                this.state[t] = 65
            },
            buttonUp: function(t) {
                this.state[t] = 64
            }
        }, t.exports = i
    },
    693: function(t, e) {
        var i = function() {
            this.pix = new Array(64), this.fbIndex = null, this.tIndex = null, this.x = null, this.y = null, this.w = null, this.h = null, this.incX = null, this.incY = null, this.palIndex = null, this.tpri = null, this.c = null, this.initialized = !1, this.opaque = new Array(8)
        };
        i.prototype = {
            setBuffer: function(t) {
                for (this.y = 0; this.y < 8; this.y++) this.setScanline(this.y, t[this.y], t[this.y + 8])
            },
            setScanline: function(t, e, i) {
                for (this.initialized = !0, this.tIndex = t << 3, this.x = 0; this.x < 8; this.x++) this.pix[this.tIndex + this.x] = (e >> 7 - this.x & 1) + ((i >> 7 - this.x & 1) << 1), 0 === this.pix[this.tIndex + this.x] && (this.opaque[t] = !1)
            },
            render: function(t, e, i, s, n, r, o, a, h, l, u, c, p) {
                if (!(r < -7 || r >= 256 || o < -7 || o >= 240))
                    if (this.w = s - e, this.h = n - i, r < 0 && (e -= r), r + s >= 256 && (s = 256 - r), o < 0 && (i -= o), o + n >= 240 && (n = 240 - o), l || u)
                        if (l && !u)
                            for (this.fbIndex = (o << 8) + r, this.tIndex = 7, this.y = 0; this.y < 8; this.y++) {
                                for (this.x = 0; this.x < 8; this.x++) this.x >= e && this.x < s && this.y >= i && this.y < n && (this.palIndex = this.pix[this.tIndex], this.tpri = p[this.fbIndex], 0 !== this.palIndex && c <= (255 & this.tpri) && (t[this.fbIndex] = h[this.palIndex + a], this.tpri = 3840 & this.tpri | c, p[this.fbIndex] = this.tpri)), this.fbIndex++, this.tIndex--;
                                this.fbIndex -= 8, this.fbIndex += 256, this.tIndex += 16
                            } else if (u && !l)
                                for (this.fbIndex = (o << 8) + r, this.tIndex = 56, this.y = 0; this.y < 8; this.y++) {
                                    for (this.x = 0; this.x < 8; this.x++) this.x >= e && this.x < s && this.y >= i && this.y < n && (this.palIndex = this.pix[this.tIndex], this.tpri = p[this.fbIndex], 0 !== this.palIndex && c <= (255 & this.tpri) && (t[this.fbIndex] = h[this.palIndex + a], this.tpri = 3840 & this.tpri | c, p[this.fbIndex] = this.tpri)), this.fbIndex++, this.tIndex++;
                                    this.fbIndex -= 8, this.fbIndex += 256, this.tIndex -= 16
                                } else
                                    for (this.fbIndex = (o << 8) + r, this.tIndex = 63, this.y = 0; this.y < 8; this.y++) {
                                        for (this.x = 0; this.x < 8; this.x++) this.x >= e && this.x < s && this.y >= i && this.y < n && (this.palIndex = this.pix[this.tIndex], this.tpri = p[this.fbIndex], 0 !== this.palIndex && c <= (255 & this.tpri) && (t[this.fbIndex] = h[this.palIndex + a], this.tpri = 3840 & this.tpri | c, p[this.fbIndex] = this.tpri)), this.fbIndex++, this.tIndex--;
                                        this.fbIndex -= 8, this.fbIndex += 256
                                    } else
                                        for (this.fbIndex = (o << 8) + r, this.tIndex = 0, this.y = 0; this.y < 8; this.y++) {
                                            for (this.x = 0; this.x < 8; this.x++) this.x >= e && this.x < s && this.y >= i && this.y < n && (this.palIndex = this.pix[this.tIndex], this.tpri = p[this.fbIndex], 0 !== this.palIndex && c <= (255 & this.tpri) && (t[this.fbIndex] = h[this.palIndex + a], this.tpri = 3840 & this.tpri | c, p[this.fbIndex] = this.tpri)), this.fbIndex++, this.tIndex++;
                                            this.fbIndex -= 8, this.fbIndex += 256
                                        }
            },
            isTransparent: function(t, e) {
                return 0 === this.pix[(e << 3) + t]
            },
            toJSON: function() {
                return {
                    opaque: this.opaque,
                    pix: this.pix
                }
            },
            fromJSON: function(t) {
                this.opaque = t.opaque, this.pix = t.pix
            }
        }, t.exports = i
    },
    694: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            n = i(630);
        var r = {
                88: [1, n.Controller.BUTTON_A],
                90: [1, n.Controller.BUTTON_B],
                17: [1, n.Controller.BUTTON_SELECT],
                13: [1, n.Controller.BUTTON_START],
                38: [1, n.Controller.BUTTON_UP],
                40: [1, n.Controller.BUTTON_DOWN],
                37: [1, n.Controller.BUTTON_LEFT],
                39: [1, n.Controller.BUTTON_RIGHT],
                103: [2, n.Controller.BUTTON_A],
                105: [2, n.Controller.BUTTON_B],
                99: [2, n.Controller.BUTTON_SELECT],
                97: [2, n.Controller.BUTTON_START],
                104: [2, n.Controller.BUTTON_UP],
                98: [2, n.Controller.BUTTON_DOWN],
                100: [2, n.Controller.BUTTON_LEFT],
                102: [2, n.Controller.BUTTON_RIGHT]
            },
            o = function() {
                function t(e) {
                    var i = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.handleKeyDown = function(t) {
                        var e = r[t.keyCode];
                        e && !window.keySetting && (i.onButtonDown(e[0], e[1]), i.stopEvent(t))
                    }, this.handleKeyUp = function(t) {
                        var e = r[t.keyCode];
                        e && !window.keySetting && (i.onButtonUp(e[0], e[1]), i.stopEvent(t))
                    }, this.handleKeyPress = function(t) {
                        i.stopEvent(t)
                    }, this.onButtonDown = e.onButtonDown, this.onButtonUp = e.onButtonUp, localStorage.keySetting && (r = JSON.parse(localStorage.keySetting))
                }
                return s(t, [{
                    key: "directKeyPressDown",
                    value: function(t) {
                        this.onButtonDown(1, t)
                    }
                }, {
                    key: "directKeyPressUp",
                    value: function(t) {
                        this.onButtonUp(1, t)
                    }
                }, {
                    key: "stopEvent",
                    value: function(t) {
                        ["INPUT", "TEXTAREA"].includes(t.target.nodeName) || t.preventDefault()
                    }
                }], [{
                    key: "mapNewKey",
                    value: function(t) {
                        var e = t.button,
                            i = t.key;
                        Object.entries(r).map(function(t) {
                            t[1][0] === e[0] && t[1][1] === e[1] && delete r[t[0]], r[i] = e
                        }), localStorage.keySetting = JSON.stringify(r)
                    }
                }]), t
            }();
        e.default = o
    },
    793: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.GamePlayer = void 0;
        var s = function() {
                var t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
                return function(e, i, s, n) {
                    var r = e && e.defaultProps,
                        o = arguments.length - 3;
                    if (i || 0 === o || (i = {}), i && r)
                        for (var a in r) void 0 === i[a] && (i[a] = r[a]);
                    else i || (i = r || {});
                    if (1 === o) i.children = n;
                    else if (o > 1) {
                        for (var h = Array(o), l = 0; l < o; l++) h[l] = arguments[l + 3];
                        i.children = h
                    }
                    return {
                        $$typeof: t,
                        type: e,
                        key: void 0 === s ? null : "" + s,
                        ref: null,
                        props: i,
                        _owner: null
                    }
                }
            }(),
            n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            r = d(i(1)),
            o = d(i(794)),
            a = d(i(795)),
            h = i(630),
            l = d(i(694)),
            u = d(i(803)),
            c = d(i(695)),
            p = i(856);

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function m(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function f(t, e) {
            return new Promise(function(i, s) {
                var n = new XMLHttpRequest;
                n.open("GET", t), n.overrideMimeType("text/plain; charset=x-user-defined"), n.onload = function() {
                    if (200 === this.status)
                        if (/\.zip$/i.test(t)) {
                            var e = new c.default;
                            e.loadAsync(this.responseText).then(function(t) {
                                e.file(/\.nes$/i)[0].async("binarystring").then(function(t) {
                                    i(t)
                                }).catch(function(t) {
                                    console.log("err err", t)
                                })
                            })
                        } else i(this.responseText);
                    else s(new Error(n.statusText))
                }, n.onerror = function() {
                    s(new Error(n.statusText))
                }, n.onprogress = e, n.send()
            })
        }
        e.GamePlayer = function(t) {
            function e() {
                var t, i, s, n = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                return i = s = m(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(o))), s.state = {
                    running: !1,
                    paused: !1,
                    loadingPercent: 0,
                    loadingRom: !1
                }, s.ready = !1, s.load = function(t) {
                    return function() {
                        var e = t.apply(this, arguments);
                        return new Promise(function(t, i) {
                            return function s(n, r) {
                                try {
                                    var o = e[n](r),
                                        a = o.value
                                } catch (t) {
                                    return void i(t)
                                }
                                if (!o.done) return Promise.resolve(a).then(function(t) {
                                    s("next", t)
                                }, function(t) {
                                    s("throw", t)
                                });
                                t(a)
                            }("next")
                        })
                    }
                }(regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!s.props.rom) {
                                    t.next = 16;
                                    break
                                }
                                return t.prev = 1, s.setState({
                                    loadingRom: !0
                                }), t.next = 5, f(s.props.rom, s.onRomLoading);
                            case 5:
                                e = t.sent, s.setState({
                                    loadingRom: !1
                                }), s.handleLoaded(e), t.next = 14;
                                break;
                            case 10:
                                t.prev = 10, t.t0 = t.catch(1), s.setState({
                                    loadingRom: !1
                                }), window.alert("Error loading ROM !");
                            case 14:
                                t.next = 17;
                                break;
                            case 16:
                                window.alert("No ROM provided");
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }, t, n, [
                        [1, 10]
                    ])
                })), s.handleLoaded = function(t) {
                    s.setState({
                        uiEnabled: !0,
                        running: !0
                    }), s.nes.loadROM(t), s.stop(), s.ready = !0
                }, s.start = function() {
                    s.ready ? (s.frameTimer.start(), s.speakers.start()) : setTimeout(s.start, 500)
                }, s.stop = function() {
                    s.frameTimer.stop(), s.speakers.stop(), clearInterval(s.fpsInterval)
                }, s.handlePauseResume = function() {
                    s.state.paused ? (s.setState({
                        paused: !1
                    }), s.start()) : (s.setState({
                        paused: !0
                    }), s.stop())
                }, s.onRomLoading = function(t) {
                    var e = t.loaded,
                        i = t.total,
                        n = Math.floor(e / i * 100);
                    (n = n > 100 ? 100 : n).log, s.setState({
                        loadingPercent: n
                    })
                }, m(s, i)
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, r.default.Component), n(e, [{
                key: "render",
                value: function() {
                    var t = this;
                    return s("div", {
                        className: "game-player"
                    }, void 0, this.props.isShowProgress && this.state.loadingRom && s(p.ProgressBar, {
                        percent: this.state.loadingPercent
                    }), this.props.children, r.default.createElement(o.default, {
                        key: "screen",
                        ref: function(e) {
                            return t.screen = e
                        },
                        onMouseDown: function(e, i) {
                            t.nes.zapperMove(e, i), t.nes.zapperFireDown()
                        },
                        onMouseUp: function() {
                            t.nes.zapperFireUp()
                        }
                    }))
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var t = this;
                    this.speakers = new a.default({
                        onBufferUnderrun: function(e, i) {
                            t.state.running && !t.state.paused && (t.nes.frame(), t.speakers.buffer.size() < i && t.nes.frame())
                        }
                    }), this.nes = new h.NES({
                        onFrame: this.screen.setBuffer,
                        onStatusUpdate: console.log,
                        onAudioSample: this.speakers.writeSample
                    }), this.frameTimer = new u.default({
                        onGenerateFrame: this.nes.frame,
                        onWriteFrame: this.screen.writeBuffer
                    }), this.keyboardController = new l.default({
                        onButtonDown: this.nes.buttonDown,
                        onButtonUp: this.nes.buttonUp
                    }), document.addEventListener("keydown", this.keyboardController.handleKeyDown), document.addEventListener("keyup", this.keyboardController.handleKeyUp), document.addEventListener("keypress", this.keyboardController.handleKeyPress), this.load()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.stop(), this.clearLocalStorage(), document.removeEventListener("keydown", this.keyboardController.handleKeyDown), document.removeEventListener("keyup", this.keyboardController.handleKeyUp), document.removeEventListener("keypress", this.keyboardController.handleKeyPress)
                }
            }, {
                key: "saveState",
                value: function() {
                    this.nes && localStorage.setItem("save", JSON.stringify(this.nes.toJSON()))
                }
            }, {
                key: "loadState",
                value: function() {
                    if (this.nes) {
                        var t = localStorage.getItem("save");
                        t && this.nes.fromJSON(JSON.parse(t))
                    }
                }
            }, {
                key: "screenShot",
                value: function() {
                    if (this.screen) return this.screen.screenShot()
                }
            }, {
                key: "clearLocalStorage",
                value: function() {
                    localStorage.getItem("clear") || (localStorage.clear(), localStorage.setItem("clear", 1))
                }
            }]), e
        }()
    },
    794: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            n = i(1),
            r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n);
        var o = function(t) {
            function e() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.setBuffer = function(e) {
                    for (var i = 0, s = 0; s < 240; ++s)
                        for (var n = 0; n < 256; ++n) i = 256 * s + n, t.buf32[i] = 4278190080 | e[i]
                }, t.fitInParent = function() {}, t.handleMouseDown = function(e) {
                    if (t.props.onMouseDown) {
                        var i = 256 / parseFloat(t.canvas.style.width),
                            s = t.canvas.getBoundingClientRect(),
                            n = Math.round((e.clientX - s.left) * i),
                            r = Math.round((e.clientY - s.top) * i);
                        t.props.onMouseDown(n, r)
                    }
                }, t.writeBuffer = t.writeBuffer.bind(t), t
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, n.Component), s(e, [{
                key: "render",
                value: function() {
                    var t = this;
                    return r.default.createElement("canvas", {
                        className: "screen",
                        width: "256",
                        height: "240",
                        onMouseDown: this.handleMouseDown,
                        onMouseUp: this.props.onMouseUp,
                        ref: function(e) {
                            t.canvas = e
                        }
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.initCanvas()
                }
            }, {
                key: "initCanvas",
                value: function() {
                    this.context = this.canvas.getContext("2d"), this.imageData = this.context.getImageData(0, 0, 256, 240), this.context.fillStyle = "black", this.context.fillRect(0, 0, 256, 240), this.buf = new ArrayBuffer(this.imageData.data.length), this.buf8 = new Uint8ClampedArray(this.buf), this.buf32 = new Uint32Array(this.buf);
                    for (var t = 0; t < this.buf32.length; ++t) this.buf32[t] = 4278190080
                }
            }, {
                key: "writeBuffer",
                value: function() {
                    var t = this.canvas.getContext("2d");
                    this.imageData.data.set(this.buf8), t.putImageData(this.imageData, 0, 0)
                }
            }, {
                key: "screenShot",
                value: function() {
                    var t = new Image;
                    return t.src = this.canvas.toDataURL("image/png"), t.src
                }
            }]), e
        }();
        e.default = o
    },
    795: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(796));
        var r = function() {
            function t(e) {
                var i = this,
                    s = e.onBufferUnderrun;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.writeSample = function(t, e) {
                    i.buffer.size() / 2 >= i.bufferSize && console.log("Buffer overrun"), i.buffer.enq(t), i.buffer.enq(e)
                }, this.onaudioprocess = function(t) {
                    var e = t.outputBuffer.getChannelData(0),
                        s = t.outputBuffer.getChannelData(1),
                        n = e.length;
                    i.buffer.size() < 2 * n && i.onBufferUnderrun && i.onBufferUnderrun(i.buffer.size(), 2 * n);
                    try {
                        var r = i.buffer.deqN(2 * n)
                    } catch (t) {
                        var o = i.buffer.size() / 2;
                        o > 0 && console.log("Buffer underrun (needed " + n + ", got " + o + ")");
                        for (var a = 0; a < n; a++) e[a] = 0, s[a] = 0;
                        return
                    }
                    for (var h = 0; h < n; h++) e[h] = r[2 * h], s[h] = r[2 * h + 1]
                }, this.onBufferUnderrun = s, this.bufferSize = 8192, this.buffer = new n.default(2 * this.bufferSize)
            }
            return s(t, [{
                key: "start",
                value: function() {
                    var t = window.AudioContext || window.webkitAudioContext;
                    t && (this.audioCtx = new t, this.scriptNode = this.audioCtx.createScriptProcessor(1024, 0, 2), this.scriptNode.onaudioprocess = this.onaudioprocess, this.scriptNode.connect(this.audioCtx.destination))
                }
            }, {
                key: "stop",
                value: function() {
                    this.scriptNode && (this.scriptNode.disconnect(this.audioCtx.destination), this.scriptNode.onaudioprocess = null), this.audioCtx && this.audioCtx.close()
                }
            }]), t
        }();
        e.default = r
    },
    796: function(t, e) {
        function i(t, e) {
            this._elements = new Array(t || 50), this._first = 0, this._last = 0, this._size = 0, this._evictedCb = e
        }
        t.exports = i, i.prototype.capacity = function() {
            return this._elements.length
        }, i.prototype.isEmpty = function() {
            return 0 === this.size()
        }, i.prototype.isFull = function() {
            return this.size() === this.capacity()
        }, i.prototype.peek = function() {
            if (this.isEmpty()) throw new Error("RingBuffer is empty");
            return this._elements[this._first]
        }, i.prototype.peekN = function(t) {
            if (t > this._size) throw new Error("Not enough elements in RingBuffer");
            var e = Math.min(this._first + t, this.capacity()),
                i = this._elements.slice(this._first, e);
            if (e < this.capacity()) return i;
            var s = this._elements.slice(0, t - i.length);
            return i.concat(s)
        }, i.prototype.deq = function() {
            var t = this.peek();
            return this._size--, this._first = (this._first + 1) % this.capacity(), t
        }, i.prototype.deqN = function(t) {
            var e = this.peekN(t);
            return this._size -= t, this._first = (this._first + t) % this.capacity(), e
        }, i.prototype.enq = function(t) {
            this._end = (this._first + this.size()) % this.capacity();
            var e = this.isFull();
            return e && this._evictedCb && this._evictedCb(this._elements[this._end]), this._elements[this._end] = t, e ? this._first = (this._first + 1) % this.capacity() : this._size++, this.size()
        }, i.prototype.size = function() {
            return this._size
        }
    },
    797: function(t, e, i) {
        var s = i(798),
            n = i(692),
            r = i(799),
            o = i(800),
            a = i(801),
            h = function(t) {
                var e;
                if (this.opts = {
                        onFrame: function() {},
                        onAudioSample: null,
                        onStatusUpdate: function() {},
                        onBatteryRamWrite: function() {},
                        preferredFrameRate: 60,
                        emulateSound: !0,
                        sampleRate: 44100
                    }, void 0 !== t)
                    for (e in this.opts) void 0 !== t[e] && (this.opts[e] = t[e]);
                this.frameTime = 1e3 / this.opts.preferredFrameRate, this.ui = {
                    writeFrame: this.opts.onFrame,
                    updateStatus: this.opts.onStatusUpdate
                }, this.cpu = new s(this), this.ppu = new r(this), this.papu = new o(this), this.mmap = null, this.controllers = {
                    1: new n,
                    2: new n
                }, this.ui.updateStatus("Ready to load a ROM."), this.frame = this.frame.bind(this), this.buttonDown = this.buttonDown.bind(this), this.buttonUp = this.buttonUp.bind(this), this.zapperMove = this.zapperMove.bind(this), this.zapperFireDown = this.zapperFireDown.bind(this), this.zapperFireUp = this.zapperFireUp.bind(this)
            };
        h.prototype = {
            fpsFrameCount: 0,
            romData: null,
            reset: function() {
                null !== this.mmap && this.mmap.reset(), this.cpu.reset(), this.ppu.reset(), this.papu.reset(), this.lastFpsTime = null, this.fpsFrameCount = 0
            },
            frame: function() {
                this.ppu.startFrame();
                var t = 0,
                    e = this.opts.emulateSound,
                    i = this.cpu,
                    s = this.ppu,
                    n = this.papu;
                t: for (;;)
                    for (0 === i.cyclesToHalt ? (t = i.emulate(), e && n.clockFrameCounter(t), t *= 3) : i.cyclesToHalt > 8 ? (t = 24, e && n.clockFrameCounter(8), i.cyclesToHalt -= 8) : (t = 3 * i.cyclesToHalt, e && n.clockFrameCounter(i.cyclesToHalt), i.cyclesToHalt = 0); t > 0; t--) {
                        if (s.curX === s.spr0HitX && 1 === s.f_spVisibility && s.scanline - 21 === s.spr0HitY && s.setStatusFlag(s.STATUS_SPRITE0HIT, !0), s.requestEndFrame && (s.nmiCounter--, 0 === s.nmiCounter)) {
                            s.requestEndFrame = !1, s.startVBlank();
                            break t
                        }
                        s.curX++, 341 === s.curX && (s.curX = 0, s.endScanline())
                    }
                this.fpsFrameCount++
            },
            buttonDown: function(t, e) {
                this.controllers[t].buttonDown(e)
            },
            buttonUp: function(t, e) {
                this.controllers[t].buttonUp(e)
            },
            zapperMove: function(t, e) {
                this.mmap && (this.mmap.zapperX = t, this.mmap.zapperY = e)
            },
            zapperFireDown: function() {
                this.mmap && (this.mmap.zapperFired = !0)
            },
            zapperFireUp: function() {
                this.mmap && (this.mmap.zapperFired = !1)
            },
            getFPS: function() {
                var t = +new Date,
                    e = null;
                return this.lastFpsTime && (e = this.fpsFrameCount / ((t - this.lastFpsTime) / 1e3)), this.fpsFrameCount = 0, this.lastFpsTime = t, e
            },
            reloadROM: function() {
                null !== this.romData && this.loadROM(this.romData)
            },
            loadROM: function(t) {
                this.rom = new a(this), this.rom.load(t), this.reset(), this.mmap = this.rom.createMapper(), this.mmap.loadROM(), this.ppu.setMirroring(this.rom.getMirroringType()), this.romData = t
            },
            setFramerate: function(t) {
                this.opts.preferredFrameRate = t, this.frameTime = 1e3 / t, this.papu.setSampleRate(this.opts.sampleRate, !1)
            },
            toJSON: function() {
                return {
                    romData: this.romData,
                    cpu: this.cpu.toJSON(),
                    mmap: this.mmap.toJSON(),
                    ppu: this.ppu.toJSON()
                }
            },
            fromJSON: function(t) {
                this.loadROM(t.romData), this.cpu.fromJSON(t.cpu), this.mmap.fromJSON(t.mmap), this.ppu.fromJSON(t.ppu)
            }
        }, t.exports = h
    },
    798: function(t, e, i) {
        var s = i(652),
            n = function(t) {
                this.nes = t, this.mem = null, this.REG_ACC = null, this.REG_X = null, this.REG_Y = null, this.REG_SP = null, this.REG_PC = null, this.REG_PC_NEW = null, this.REG_STATUS = null, this.F_CARRY = null, this.F_DECIMAL = null, this.F_INTERRUPT = null, this.F_INTERRUPT_NEW = null, this.F_OVERFLOW = null, this.F_SIGN = null, this.F_ZERO = null, this.F_NOTUSED = null, this.F_NOTUSED_NEW = null, this.F_BRK = null, this.F_BRK_NEW = null, this.opdata = null, this.cyclesToHalt = null, this.crash = null, this.irqRequested = null, this.irqType = null, this.reset()
            };
        n.prototype = {
            IRQ_NORMAL: 0,
            IRQ_NMI: 1,
            IRQ_RESET: 2,
            reset: function() {
                this.mem = new Array(65536);
                for (var t = 0; t < 8192; t++) this.mem[t] = 255;
                for (var e = 0; e < 4; e++) {
                    var i = 2048 * e;
                    this.mem[i + 8] = 247, this.mem[i + 9] = 239, this.mem[i + 10] = 223, this.mem[i + 15] = 191
                }
                for (var s = 8193; s < this.mem.length; s++) this.mem[s] = 0;
                this.REG_ACC = 0, this.REG_X = 0, this.REG_Y = 0, this.REG_SP = 511, this.REG_PC = 32767, this.REG_PC_NEW = 32767, this.REG_STATUS = 40, this.setStatus(40), this.F_CARRY = 0, this.F_DECIMAL = 0, this.F_INTERRUPT = 1, this.F_INTERRUPT_NEW = 1, this.F_OVERFLOW = 0, this.F_SIGN = 0, this.F_ZERO = 1, this.F_NOTUSED = 1, this.F_NOTUSED_NEW = 1, this.F_BRK = 1, this.F_BRK_NEW = 1, this.opdata = (new r).opdata, this.cyclesToHalt = 0, this.crash = !1, this.irqRequested = !1, this.irqType = null
            },
            emulate: function() {
                var t, e;
                if (this.irqRequested) {
                    switch (t = this.F_CARRY | (0 === this.F_ZERO ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7, this.REG_PC_NEW = this.REG_PC, this.F_INTERRUPT_NEW = this.F_INTERRUPT, this.irqType) {
                        case 0:
                            if (0 !== this.F_INTERRUPT) break;
                            this.doIrq(t);
                            break;
                        case 1:
                            this.doNonMaskableInterrupt(t);
                            break;
                        case 2:
                            this.doResetInterrupt()
                    }
                    this.REG_PC = this.REG_PC_NEW, this.F_INTERRUPT = this.F_INTERRUPT_NEW, this.F_BRK = this.F_BRK_NEW, this.irqRequested = !1
                }
                var i = this.opdata[this.nes.mmap.load(this.REG_PC + 1)],
                    s = i >> 24,
                    n = 0,
                    r = i >> 8 & 255,
                    o = this.REG_PC;
                this.REG_PC += i >> 16 & 255;
                var a = 0;
                switch (r) {
                    case 0:
                        a = this.load(o + 2);
                        break;
                    case 1:
                        a = this.load(o + 2), a += a < 128 ? this.REG_PC : this.REG_PC - 256;
                        break;
                    case 2:
                        break;
                    case 3:
                        a = this.load16bit(o + 2);
                        break;
                    case 4:
                        a = this.REG_ACC;
                        break;
                    case 5:
                        a = this.REG_PC;
                        break;
                    case 6:
                        a = this.load(o + 2) + this.REG_X & 255;
                        break;
                    case 7:
                        a = this.load(o + 2) + this.REG_Y & 255;
                        break;
                    case 8:
                        (65280 & (a = this.load16bit(o + 2))) != (a + this.REG_X & 65280) && (n = 1), a += this.REG_X;
                        break;
                    case 9:
                        (65280 & (a = this.load16bit(o + 2))) != (a + this.REG_Y & 65280) && (n = 1), a += this.REG_Y;
                        break;
                    case 10:
                        (65280 & (a = this.load(o + 2))) != (a + this.REG_X & 65280) && (n = 1), a += this.REG_X, a &= 255, a = this.load16bit(a);
                        break;
                    case 11:
                        (65280 & (a = this.load16bit(this.load(o + 2)))) != (a + this.REG_Y & 65280) && (n = 1), a += this.REG_Y;
                        break;
                    case 12:
                        a = (a = this.load16bit(o + 2)) < 8191 ? this.mem[a] + (this.mem[65280 & a | 1 + (255 & a) & 255] << 8) : this.nes.mmap.load(a) + (this.nes.mmap.load(65280 & a | 1 + (255 & a) & 255) << 8)
                }
                switch (a &= 65535, 255 & i) {
                    case 0:
                        t = this.REG_ACC + this.load(a) + this.F_CARRY, 0 == (128 & (this.REG_ACC ^ this.load(a))) && 0 != (128 & (this.REG_ACC ^ t)) ? this.F_OVERFLOW = 1 : this.F_OVERFLOW = 0, this.F_CARRY = t > 255 ? 1 : 0, this.F_SIGN = t >> 7 & 1, this.F_ZERO = 255 & t, this.REG_ACC = 255 & t, s += n;
                        break;
                    case 1:
                        this.REG_ACC = this.REG_ACC & this.load(a), this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC, 11 !== r && (s += n);
                        break;
                    case 2:
                        4 === r ? (this.F_CARRY = this.REG_ACC >> 7 & 1, this.REG_ACC = this.REG_ACC << 1 & 255, this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC) : (t = this.load(a), this.F_CARRY = t >> 7 & 1, t = t << 1 & 255, this.F_SIGN = t >> 7 & 1, this.F_ZERO = t, this.write(a, t));
                        break;
                    case 3:
                        0 === this.F_CARRY && (s += (65280 & o) != (65280 & a) ? 2 : 1, this.REG_PC = a);
                        break;
                    case 4:
                        1 === this.F_CARRY && (s += (65280 & o) != (65280 & a) ? 2 : 1, this.REG_PC = a);
                        break;
                    case 5:
                        0 === this.F_ZERO && (s += (65280 & o) != (65280 & a) ? 2 : 1, this.REG_PC = a);
                        break;
                    case 6:
                        t = this.load(a), this.F_SIGN = t >> 7 & 1, this.F_OVERFLOW = t >> 6 & 1, t &= this.REG_ACC, this.F_ZERO = t;
                        break;
                    case 7:
                        1 === this.F_SIGN && (s++, this.REG_PC = a);
                        break;
                    case 8:
                        0 !== this.F_ZERO && (s += (65280 & o) != (65280 & a) ? 2 : 1, this.REG_PC = a);
                        break;
                    case 9:
                        0 === this.F_SIGN && (s += (65280 & o) != (65280 & a) ? 2 : 1, this.REG_PC = a);
                        break;
                    case 10:
                        this.REG_PC += 2, this.push(this.REG_PC >> 8 & 255), this.push(255 & this.REG_PC), this.F_BRK = 1, this.push(this.F_CARRY | (0 === this.F_ZERO ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7), this.F_INTERRUPT = 1, this.REG_PC = this.load16bit(65534), this.REG_PC--;
                        break;
                    case 11:
                        0 === this.F_OVERFLOW && (s += (65280 & o) != (65280 & a) ? 2 : 1, this.REG_PC = a);
                        break;
                    case 12:
                        1 === this.F_OVERFLOW && (s += (65280 & o) != (65280 & a) ? 2 : 1, this.REG_PC = a);
                        break;
                    case 13:
                        this.F_CARRY = 0;
                        break;
                    case 14:
                        this.F_DECIMAL = 0;
                        break;
                    case 15:
                        this.F_INTERRUPT = 0;
                        break;
                    case 16:
                        this.F_OVERFLOW = 0;
                        break;
                    case 17:
                        t = this.REG_ACC - this.load(a), this.F_CARRY = t >= 0 ? 1 : 0, this.F_SIGN = t >> 7 & 1, this.F_ZERO = 255 & t, s += n;
                        break;
                    case 18:
                        t = this.REG_X - this.load(a), this.F_CARRY = t >= 0 ? 1 : 0, this.F_SIGN = t >> 7 & 1, this.F_ZERO = 255 & t;
                        break;
                    case 19:
                        t = this.REG_Y - this.load(a), this.F_CARRY = t >= 0 ? 1 : 0, this.F_SIGN = t >> 7 & 1, this.F_ZERO = 255 & t;
                        break;
                    case 20:
                        t = this.load(a) - 1 & 255, this.F_SIGN = t >> 7 & 1, this.F_ZERO = t, this.write(a, t);
                        break;
                    case 21:
                        this.REG_X = this.REG_X - 1 & 255, this.F_SIGN = this.REG_X >> 7 & 1, this.F_ZERO = this.REG_X;
                        break;
                    case 22:
                        this.REG_Y = this.REG_Y - 1 & 255, this.F_SIGN = this.REG_Y >> 7 & 1, this.F_ZERO = this.REG_Y;
                        break;
                    case 23:
                        this.REG_ACC = 255 & (this.load(a) ^ this.REG_ACC), this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC, s += n;
                        break;
                    case 24:
                        t = this.load(a) + 1 & 255, this.F_SIGN = t >> 7 & 1, this.F_ZERO = t, this.write(a, 255 & t);
                        break;
                    case 25:
                        this.REG_X = this.REG_X + 1 & 255, this.F_SIGN = this.REG_X >> 7 & 1, this.F_ZERO = this.REG_X;
                        break;
                    case 26:
                        this.REG_Y++, this.REG_Y &= 255, this.F_SIGN = this.REG_Y >> 7 & 1, this.F_ZERO = this.REG_Y;
                        break;
                    case 27:
                        this.REG_PC = a - 1;
                        break;
                    case 28:
                        this.push(this.REG_PC >> 8 & 255), this.push(255 & this.REG_PC), this.REG_PC = a - 1;
                        break;
                    case 29:
                        this.REG_ACC = this.load(a), this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC, s += n;
                        break;
                    case 30:
                        this.REG_X = this.load(a), this.F_SIGN = this.REG_X >> 7 & 1, this.F_ZERO = this.REG_X, s += n;
                        break;
                    case 31:
                        this.REG_Y = this.load(a), this.F_SIGN = this.REG_Y >> 7 & 1, this.F_ZERO = this.REG_Y, s += n;
                        break;
                    case 32:
                        4 === r ? (t = 255 & this.REG_ACC, this.F_CARRY = 1 & t, t >>= 1, this.REG_ACC = t) : (t = 255 & this.load(a), this.F_CARRY = 1 & t, t >>= 1, this.write(a, t)), this.F_SIGN = 0, this.F_ZERO = t;
                        break;
                    case 33:
                        break;
                    case 34:
                        t = 255 & (this.load(a) | this.REG_ACC), this.F_SIGN = t >> 7 & 1, this.F_ZERO = t, this.REG_ACC = t, 11 !== r && (s += n);
                        break;
                    case 35:
                        this.push(this.REG_ACC);
                        break;
                    case 36:
                        this.F_BRK = 1, this.push(this.F_CARRY | (0 === this.F_ZERO ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7);
                        break;
                    case 37:
                        this.REG_ACC = this.pull(), this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC;
                        break;
                    case 38:
                        t = this.pull(), this.F_CARRY = 1 & t, this.F_ZERO = 1 == (t >> 1 & 1) ? 0 : 1, this.F_INTERRUPT = t >> 2 & 1, this.F_DECIMAL = t >> 3 & 1, this.F_BRK = t >> 4 & 1, this.F_NOTUSED = t >> 5 & 1, this.F_OVERFLOW = t >> 6 & 1, this.F_SIGN = t >> 7 & 1, this.F_NOTUSED = 1;
                        break;
                    case 39:
                        4 === r ? (t = this.REG_ACC, e = this.F_CARRY, this.F_CARRY = t >> 7 & 1, t = (t << 1 & 255) + e, this.REG_ACC = t) : (t = this.load(a), e = this.F_CARRY, this.F_CARRY = t >> 7 & 1, t = (t << 1 & 255) + e, this.write(a, t)), this.F_SIGN = t >> 7 & 1, this.F_ZERO = t;
                        break;
                    case 40:
                        4 === r ? (e = this.F_CARRY << 7, this.F_CARRY = 1 & this.REG_ACC, t = (this.REG_ACC >> 1) + e, this.REG_ACC = t) : (t = this.load(a), e = this.F_CARRY << 7, this.F_CARRY = 1 & t, t = (t >> 1) + e, this.write(a, t)), this.F_SIGN = t >> 7 & 1, this.F_ZERO = t;
                        break;
                    case 41:
                        if (t = this.pull(), this.F_CARRY = 1 & t, this.F_ZERO = 0 == (t >> 1 & 1) ? 1 : 0, this.F_INTERRUPT = t >> 2 & 1, this.F_DECIMAL = t >> 3 & 1, this.F_BRK = t >> 4 & 1, this.F_NOTUSED = t >> 5 & 1, this.F_OVERFLOW = t >> 6 & 1, this.F_SIGN = t >> 7 & 1, this.REG_PC = this.pull(), this.REG_PC += this.pull() << 8, 65535 === this.REG_PC) return;
                        this.REG_PC--, this.F_NOTUSED = 1;
                        break;
                    case 42:
                        if (this.REG_PC = this.pull(), this.REG_PC += this.pull() << 8, 65535 === this.REG_PC) return;
                        break;
                    case 43:
                        t = this.REG_ACC - this.load(a) - (1 - this.F_CARRY), this.F_SIGN = t >> 7 & 1, this.F_ZERO = 255 & t, 0 != (128 & (this.REG_ACC ^ t)) && 0 != (128 & (this.REG_ACC ^ this.load(a))) ? this.F_OVERFLOW = 1 : this.F_OVERFLOW = 0, this.F_CARRY = t < 0 ? 0 : 1, this.REG_ACC = 255 & t, 11 !== r && (s += n);
                        break;
                    case 44:
                        this.F_CARRY = 1;
                        break;
                    case 45:
                        this.F_DECIMAL = 1;
                        break;
                    case 46:
                        this.F_INTERRUPT = 1;
                        break;
                    case 47:
                        this.write(a, this.REG_ACC);
                        break;
                    case 48:
                        this.write(a, this.REG_X);
                        break;
                    case 49:
                        this.write(a, this.REG_Y);
                        break;
                    case 50:
                        this.REG_X = this.REG_ACC, this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC;
                        break;
                    case 51:
                        this.REG_Y = this.REG_ACC, this.F_SIGN = this.REG_ACC >> 7 & 1, this.F_ZERO = this.REG_ACC;
                        break;
                    case 52:
                        this.REG_X = this.REG_SP - 256, this.F_SIGN = this.REG_SP >> 7 & 1, this.F_ZERO = this.REG_X;
                        break;
                    case 53:
                        this.REG_ACC = this.REG_X, this.F_SIGN = this.REG_X >> 7 & 1, this.F_ZERO = this.REG_X;
                        break;
                    case 54:
                        this.REG_SP = this.REG_X + 256, this.stackWrap();
                        break;
                    case 55:
                        this.REG_ACC = this.REG_Y, this.F_SIGN = this.REG_Y >> 7 & 1, this.F_ZERO = this.REG_Y;
                        break;
                    default:
                        this.nes.stop(), this.nes.crashMessage = "Game crashed, invalid opcode at address $" + o.toString(16)
                }
                return s
            },
            load: function(t) {
                return t < 8192 ? this.mem[2047 & t] : this.nes.mmap.load(t)
            },
            load16bit: function(t) {
                return t < 8191 ? this.mem[2047 & t] | this.mem[t + 1 & 2047] << 8 : this.nes.mmap.load(t) | this.nes.mmap.load(t + 1) << 8
            },
            write: function(t, e) {
                t < 8192 ? this.mem[2047 & t] = e : this.nes.mmap.write(t, e)
            },
            requestIrq: function(t) {
                this.irqRequested && t === this.IRQ_NORMAL || (this.irqRequested = !0, this.irqType = t)
            },
            push: function(t) {
                this.nes.mmap.write(this.REG_SP, t), this.REG_SP--, this.REG_SP = 256 | 255 & this.REG_SP
            },
            stackWrap: function() {
                this.REG_SP = 256 | 255 & this.REG_SP
            },
            pull: function() {
                return this.REG_SP++, this.REG_SP = 256 | 255 & this.REG_SP, this.nes.mmap.load(this.REG_SP)
            },
            pageCrossed: function(t, e) {
                return (65280 & t) != (65280 & e)
            },
            haltCycles: function(t) {
                this.cyclesToHalt += t
            },
            doNonMaskableInterrupt: function(t) {
                0 != (128 & this.nes.mmap.load(8192)) && (this.REG_PC_NEW++, this.push(this.REG_PC_NEW >> 8 & 255), this.push(255 & this.REG_PC_NEW), this.push(t), this.REG_PC_NEW = this.nes.mmap.load(65530) | this.nes.mmap.load(65531) << 8, this.REG_PC_NEW--)
            },
            doResetInterrupt: function() {
                this.REG_PC_NEW = this.nes.mmap.load(65532) | this.nes.mmap.load(65533) << 8, this.REG_PC_NEW--
            },
            doIrq: function(t) {
                this.REG_PC_NEW++, this.push(this.REG_PC_NEW >> 8 & 255), this.push(255 & this.REG_PC_NEW), this.push(t), this.F_INTERRUPT_NEW = 1, this.F_BRK_NEW = 0, this.REG_PC_NEW = this.nes.mmap.load(65534) | this.nes.mmap.load(65535) << 8, this.REG_PC_NEW--
            },
            getStatus: function() {
                return this.F_CARRY | this.F_ZERO << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7
            },
            setStatus: function(t) {
                this.F_CARRY = 1 & t, this.F_ZERO = t >> 1 & 1, this.F_INTERRUPT = t >> 2 & 1, this.F_DECIMAL = t >> 3 & 1, this.F_BRK = t >> 4 & 1, this.F_NOTUSED = t >> 5 & 1, this.F_OVERFLOW = t >> 6 & 1, this.F_SIGN = t >> 7 & 1
            },
            JSON_PROPERTIES: ["mem", "cyclesToHalt", "irqRequested", "irqType", "REG_ACC", "REG_X", "REG_Y", "REG_SP", "REG_PC", "REG_PC_NEW", "REG_STATUS", "F_CARRY", "F_DECIMAL", "F_INTERRUPT", "F_INTERRUPT_NEW", "F_OVERFLOW", "F_SIGN", "F_ZERO", "F_NOTUSED", "F_NOTUSED_NEW", "F_BRK", "F_BRK_NEW"],
            toJSON: function() {
                return s.toJSON(this)
            },
            fromJSON: function(t) {
                s.fromJSON(this, t)
            }
        };
        var r = function() {
            this.opdata = new Array(256);
            for (var t = 0; t < 256; t++) this.opdata[t] = 255;
            this.setOp(this.INS_ADC, 105, this.ADDR_IMM, 2, 2), this.setOp(this.INS_ADC, 101, this.ADDR_ZP, 2, 3), this.setOp(this.INS_ADC, 117, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_ADC, 109, this.ADDR_ABS, 3, 4), this.setOp(this.INS_ADC, 125, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_ADC, 121, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_ADC, 97, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_ADC, 113, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_AND, 41, this.ADDR_IMM, 2, 2), this.setOp(this.INS_AND, 37, this.ADDR_ZP, 2, 3), this.setOp(this.INS_AND, 53, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_AND, 45, this.ADDR_ABS, 3, 4), this.setOp(this.INS_AND, 61, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_AND, 57, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_AND, 33, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_AND, 49, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_ASL, 10, this.ADDR_ACC, 1, 2), this.setOp(this.INS_ASL, 6, this.ADDR_ZP, 2, 5), this.setOp(this.INS_ASL, 22, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_ASL, 14, this.ADDR_ABS, 3, 6), this.setOp(this.INS_ASL, 30, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_BCC, 144, this.ADDR_REL, 2, 2), this.setOp(this.INS_BCS, 176, this.ADDR_REL, 2, 2), this.setOp(this.INS_BEQ, 240, this.ADDR_REL, 2, 2), this.setOp(this.INS_BIT, 36, this.ADDR_ZP, 2, 3), this.setOp(this.INS_BIT, 44, this.ADDR_ABS, 3, 4), this.setOp(this.INS_BMI, 48, this.ADDR_REL, 2, 2), this.setOp(this.INS_BNE, 208, this.ADDR_REL, 2, 2), this.setOp(this.INS_BPL, 16, this.ADDR_REL, 2, 2), this.setOp(this.INS_BRK, 0, this.ADDR_IMP, 1, 7), this.setOp(this.INS_BVC, 80, this.ADDR_REL, 2, 2), this.setOp(this.INS_BVS, 112, this.ADDR_REL, 2, 2), this.setOp(this.INS_CLC, 24, this.ADDR_IMP, 1, 2), this.setOp(this.INS_CLD, 216, this.ADDR_IMP, 1, 2), this.setOp(this.INS_CLI, 88, this.ADDR_IMP, 1, 2), this.setOp(this.INS_CLV, 184, this.ADDR_IMP, 1, 2), this.setOp(this.INS_CMP, 201, this.ADDR_IMM, 2, 2), this.setOp(this.INS_CMP, 197, this.ADDR_ZP, 2, 3), this.setOp(this.INS_CMP, 213, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_CMP, 205, this.ADDR_ABS, 3, 4), this.setOp(this.INS_CMP, 221, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_CMP, 217, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_CMP, 193, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_CMP, 209, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_CPX, 224, this.ADDR_IMM, 2, 2), this.setOp(this.INS_CPX, 228, this.ADDR_ZP, 2, 3), this.setOp(this.INS_CPX, 236, this.ADDR_ABS, 3, 4), this.setOp(this.INS_CPY, 192, this.ADDR_IMM, 2, 2), this.setOp(this.INS_CPY, 196, this.ADDR_ZP, 2, 3), this.setOp(this.INS_CPY, 204, this.ADDR_ABS, 3, 4), this.setOp(this.INS_DEC, 198, this.ADDR_ZP, 2, 5), this.setOp(this.INS_DEC, 214, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_DEC, 206, this.ADDR_ABS, 3, 6), this.setOp(this.INS_DEC, 222, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_DEX, 202, this.ADDR_IMP, 1, 2), this.setOp(this.INS_DEY, 136, this.ADDR_IMP, 1, 2), this.setOp(this.INS_EOR, 73, this.ADDR_IMM, 2, 2), this.setOp(this.INS_EOR, 69, this.ADDR_ZP, 2, 3), this.setOp(this.INS_EOR, 85, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_EOR, 77, this.ADDR_ABS, 3, 4), this.setOp(this.INS_EOR, 93, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_EOR, 89, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_EOR, 65, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_EOR, 81, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_INC, 230, this.ADDR_ZP, 2, 5), this.setOp(this.INS_INC, 246, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_INC, 238, this.ADDR_ABS, 3, 6), this.setOp(this.INS_INC, 254, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_INX, 232, this.ADDR_IMP, 1, 2), this.setOp(this.INS_INY, 200, this.ADDR_IMP, 1, 2), this.setOp(this.INS_JMP, 76, this.ADDR_ABS, 3, 3), this.setOp(this.INS_JMP, 108, this.ADDR_INDABS, 3, 5), this.setOp(this.INS_JSR, 32, this.ADDR_ABS, 3, 6), this.setOp(this.INS_LDA, 169, this.ADDR_IMM, 2, 2), this.setOp(this.INS_LDA, 165, this.ADDR_ZP, 2, 3), this.setOp(this.INS_LDA, 181, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_LDA, 173, this.ADDR_ABS, 3, 4), this.setOp(this.INS_LDA, 189, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_LDA, 185, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_LDA, 161, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_LDA, 177, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_LDX, 162, this.ADDR_IMM, 2, 2), this.setOp(this.INS_LDX, 166, this.ADDR_ZP, 2, 3), this.setOp(this.INS_LDX, 182, this.ADDR_ZPY, 2, 4), this.setOp(this.INS_LDX, 174, this.ADDR_ABS, 3, 4), this.setOp(this.INS_LDX, 190, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_LDY, 160, this.ADDR_IMM, 2, 2), this.setOp(this.INS_LDY, 164, this.ADDR_ZP, 2, 3), this.setOp(this.INS_LDY, 180, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_LDY, 172, this.ADDR_ABS, 3, 4), this.setOp(this.INS_LDY, 188, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_LSR, 74, this.ADDR_ACC, 1, 2), this.setOp(this.INS_LSR, 70, this.ADDR_ZP, 2, 5), this.setOp(this.INS_LSR, 86, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_LSR, 78, this.ADDR_ABS, 3, 6), this.setOp(this.INS_LSR, 94, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_NOP, 234, this.ADDR_IMP, 1, 2), this.setOp(this.INS_ORA, 9, this.ADDR_IMM, 2, 2), this.setOp(this.INS_ORA, 5, this.ADDR_ZP, 2, 3), this.setOp(this.INS_ORA, 21, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_ORA, 13, this.ADDR_ABS, 3, 4), this.setOp(this.INS_ORA, 29, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_ORA, 25, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_ORA, 1, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_ORA, 17, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_PHA, 72, this.ADDR_IMP, 1, 3), this.setOp(this.INS_PHP, 8, this.ADDR_IMP, 1, 3), this.setOp(this.INS_PLA, 104, this.ADDR_IMP, 1, 4), this.setOp(this.INS_PLP, 40, this.ADDR_IMP, 1, 4), this.setOp(this.INS_ROL, 42, this.ADDR_ACC, 1, 2), this.setOp(this.INS_ROL, 38, this.ADDR_ZP, 2, 5), this.setOp(this.INS_ROL, 54, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_ROL, 46, this.ADDR_ABS, 3, 6), this.setOp(this.INS_ROL, 62, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_ROR, 106, this.ADDR_ACC, 1, 2), this.setOp(this.INS_ROR, 102, this.ADDR_ZP, 2, 5), this.setOp(this.INS_ROR, 118, this.ADDR_ZPX, 2, 6), this.setOp(this.INS_ROR, 110, this.ADDR_ABS, 3, 6), this.setOp(this.INS_ROR, 126, this.ADDR_ABSX, 3, 7), this.setOp(this.INS_RTI, 64, this.ADDR_IMP, 1, 6), this.setOp(this.INS_RTS, 96, this.ADDR_IMP, 1, 6), this.setOp(this.INS_SBC, 233, this.ADDR_IMM, 2, 2), this.setOp(this.INS_SBC, 229, this.ADDR_ZP, 2, 3), this.setOp(this.INS_SBC, 245, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_SBC, 237, this.ADDR_ABS, 3, 4), this.setOp(this.INS_SBC, 253, this.ADDR_ABSX, 3, 4), this.setOp(this.INS_SBC, 249, this.ADDR_ABSY, 3, 4), this.setOp(this.INS_SBC, 225, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_SBC, 241, this.ADDR_POSTIDXIND, 2, 5), this.setOp(this.INS_SEC, 56, this.ADDR_IMP, 1, 2), this.setOp(this.INS_SED, 248, this.ADDR_IMP, 1, 2), this.setOp(this.INS_SEI, 120, this.ADDR_IMP, 1, 2), this.setOp(this.INS_STA, 133, this.ADDR_ZP, 2, 3), this.setOp(this.INS_STA, 149, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_STA, 141, this.ADDR_ABS, 3, 4), this.setOp(this.INS_STA, 157, this.ADDR_ABSX, 3, 5), this.setOp(this.INS_STA, 153, this.ADDR_ABSY, 3, 5), this.setOp(this.INS_STA, 129, this.ADDR_PREIDXIND, 2, 6), this.setOp(this.INS_STA, 145, this.ADDR_POSTIDXIND, 2, 6), this.setOp(this.INS_STX, 134, this.ADDR_ZP, 2, 3), this.setOp(this.INS_STX, 150, this.ADDR_ZPY, 2, 4), this.setOp(this.INS_STX, 142, this.ADDR_ABS, 3, 4), this.setOp(this.INS_STY, 132, this.ADDR_ZP, 2, 3), this.setOp(this.INS_STY, 148, this.ADDR_ZPX, 2, 4), this.setOp(this.INS_STY, 140, this.ADDR_ABS, 3, 4), this.setOp(this.INS_TAX, 170, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TAY, 168, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TSX, 186, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TXA, 138, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TXS, 154, this.ADDR_IMP, 1, 2), this.setOp(this.INS_TYA, 152, this.ADDR_IMP, 1, 2), this.cycTable = new Array(7, 6, 2, 8, 3, 3, 5, 5, 3, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 4, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 3, 2, 2, 2, 3, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 4, 2, 2, 2, 5, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 2, 6, 2, 6, 4, 4, 4, 4, 2, 5, 2, 5, 5, 5, 5, 5, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 2, 5, 2, 5, 4, 4, 4, 4, 2, 4, 2, 4, 4, 4, 4, 4, 2, 6, 2, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7, 2, 6, 3, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 4, 4, 7, 7), this.instname = new Array(56), this.instname[0] = "ADC", this.instname[1] = "AND", this.instname[2] = "ASL", this.instname[3] = "BCC", this.instname[4] = "BCS", this.instname[5] = "BEQ", this.instname[6] = "BIT", this.instname[7] = "BMI", this.instname[8] = "BNE", this.instname[9] = "BPL", this.instname[10] = "BRK", this.instname[11] = "BVC", this.instname[12] = "BVS", this.instname[13] = "CLC", this.instname[14] = "CLD", this.instname[15] = "CLI", this.instname[16] = "CLV", this.instname[17] = "CMP", this.instname[18] = "CPX", this.instname[19] = "CPY", this.instname[20] = "DEC", this.instname[21] = "DEX", this.instname[22] = "DEY", this.instname[23] = "EOR", this.instname[24] = "INC", this.instname[25] = "INX", this.instname[26] = "INY", this.instname[27] = "JMP", this.instname[28] = "JSR", this.instname[29] = "LDA", this.instname[30] = "LDX", this.instname[31] = "LDY", this.instname[32] = "LSR", this.instname[33] = "NOP", this.instname[34] = "ORA", this.instname[35] = "PHA", this.instname[36] = "PHP", this.instname[37] = "PLA", this.instname[38] = "PLP", this.instname[39] = "ROL", this.instname[40] = "ROR", this.instname[41] = "RTI", this.instname[42] = "RTS", this.instname[43] = "SBC", this.instname[44] = "SEC", this.instname[45] = "SED", this.instname[46] = "SEI", this.instname[47] = "STA", this.instname[48] = "STX", this.instname[49] = "STY", this.instname[50] = "TAX", this.instname[51] = "TAY", this.instname[52] = "TSX", this.instname[53] = "TXA", this.instname[54] = "TXS", this.instname[55] = "TYA", this.addrDesc = new Array("Zero Page           ", "Relative            ", "Implied             ", "Absolute            ", "Accumulator         ", "Immediate           ", "Zero Page,X         ", "Zero Page,Y         ", "Absolute,X          ", "Absolute,Y          ", "Preindexed Indirect ", "Postindexed Indirect", "Indirect Absolute   ")
        };
        r.prototype = {
            INS_ADC: 0,
            INS_AND: 1,
            INS_ASL: 2,
            INS_BCC: 3,
            INS_BCS: 4,
            INS_BEQ: 5,
            INS_BIT: 6,
            INS_BMI: 7,
            INS_BNE: 8,
            INS_BPL: 9,
            INS_BRK: 10,
            INS_BVC: 11,
            INS_BVS: 12,
            INS_CLC: 13,
            INS_CLD: 14,
            INS_CLI: 15,
            INS_CLV: 16,
            INS_CMP: 17,
            INS_CPX: 18,
            INS_CPY: 19,
            INS_DEC: 20,
            INS_DEX: 21,
            INS_DEY: 22,
            INS_EOR: 23,
            INS_INC: 24,
            INS_INX: 25,
            INS_INY: 26,
            INS_JMP: 27,
            INS_JSR: 28,
            INS_LDA: 29,
            INS_LDX: 30,
            INS_LDY: 31,
            INS_LSR: 32,
            INS_NOP: 33,
            INS_ORA: 34,
            INS_PHA: 35,
            INS_PHP: 36,
            INS_PLA: 37,
            INS_PLP: 38,
            INS_ROL: 39,
            INS_ROR: 40,
            INS_RTI: 41,
            INS_RTS: 42,
            INS_SBC: 43,
            INS_SEC: 44,
            INS_SED: 45,
            INS_SEI: 46,
            INS_STA: 47,
            INS_STX: 48,
            INS_STY: 49,
            INS_TAX: 50,
            INS_TAY: 51,
            INS_TSX: 52,
            INS_TXA: 53,
            INS_TXS: 54,
            INS_TYA: 55,
            INS_DUMMY: 56,
            ADDR_ZP: 0,
            ADDR_REL: 1,
            ADDR_IMP: 2,
            ADDR_ABS: 3,
            ADDR_ACC: 4,
            ADDR_IMM: 5,
            ADDR_ZPX: 6,
            ADDR_ZPY: 7,
            ADDR_ABSX: 8,
            ADDR_ABSY: 9,
            ADDR_PREIDXIND: 10,
            ADDR_POSTIDXIND: 11,
            ADDR_INDABS: 12,
            setOp: function(t, e, i, s, n) {
                this.opdata[e] = 255 & t | (255 & i) << 8 | (255 & s) << 16 | (255 & n) << 24
            }
        }, t.exports = n
    },
    799: function(t, e, i) {
        var s = i(693),
            n = i(652),
            r = function(t) {
                this.nes = t, this.vramMem = null, this.spriteMem = null, this.vramAddress = null, this.vramTmpAddress = null, this.vramBufferedReadValue = null, this.firstWrite = null, this.sramAddress = null, this.currentMirroring = null, this.requestEndFrame = null, this.nmiOk = null, this.dummyCycleToggle = null, this.validTileData = null, this.nmiCounter = null, this.scanlineAlreadyRendered = null, this.f_nmiOnVblank = null, this.f_spriteSize = null, this.f_bgPatternTable = null, this.f_spPatternTable = null, this.f_addrInc = null, this.f_nTblAddress = null, this.f_color = null, this.f_spVisibility = null, this.f_bgVisibility = null, this.f_spClipping = null, this.f_bgClipping = null, this.f_dispType = null, this.cntFV = null, this.cntV = null, this.cntH = null, this.cntVT = null, this.cntHT = null, this.regFV = null, this.regV = null, this.regH = null, this.regVT = null, this.regHT = null, this.regFH = null, this.regS = null, this.curNt = null, this.attrib = null, this.buffer = null, this.bgbuffer = null, this.pixrendered = null, this.validTileData = null, this.scantile = null, this.scanline = null, this.lastRenderedScanline = null, this.curX = null, this.sprX = null, this.sprY = null, this.sprTile = null, this.sprCol = null, this.vertFlip = null, this.horiFlip = null, this.bgPriority = null, this.spr0HitX = null, this.spr0HitY = null, this.hitSpr0 = null, this.sprPalette = null, this.imgPalette = null, this.ptTile = null, this.ntable1 = null, this.currentMirroring = null, this.nameTable = null, this.vramMirrorTable = null, this.palTable = null, this.showSpr0Hit = !1, this.clipToTvSize = !0, this.reset()
            };
        r.prototype = {
            STATUS_VRAMWRITE: 4,
            STATUS_SLSPRITECOUNT: 5,
            STATUS_SPRITE0HIT: 6,
            STATUS_VBLANK: 7,
            reset: function() {
                var t;
                for (this.vramMem = new Array(32768), this.spriteMem = new Array(256), t = 0; t < this.vramMem.length; t++) this.vramMem[t] = 0;
                for (t = 0; t < this.spriteMem.length; t++) this.spriteMem[t] = 0;
                for (this.vramAddress = null, this.vramTmpAddress = null, this.vramBufferedReadValue = 0, this.firstWrite = !0, this.sramAddress = 0, this.currentMirroring = -1, this.requestEndFrame = !1, this.nmiOk = !1, this.dummyCycleToggle = !1, this.validTileData = !1, this.nmiCounter = 0, this.scanlineAlreadyRendered = null, this.f_nmiOnVblank = 0, this.f_spriteSize = 0, this.f_bgPatternTable = 0, this.f_spPatternTable = 0, this.f_addrInc = 0, this.f_nTblAddress = 0, this.f_color = 0, this.f_spVisibility = 0, this.f_bgVisibility = 0, this.f_spClipping = 0, this.f_bgClipping = 0, this.f_dispType = 0, this.cntFV = 0, this.cntV = 0, this.cntH = 0, this.cntVT = 0, this.cntHT = 0, this.regFV = 0, this.regV = 0, this.regH = 0, this.regVT = 0, this.regHT = 0, this.regFH = 0, this.regS = 0, this.curNt = null, this.attrib = new Array(32), this.buffer = new Array(61440), this.bgbuffer = new Array(61440), this.pixrendered = new Array(61440), this.validTileData = null, this.scantile = new Array(32), this.scanline = 0, this.lastRenderedScanline = -1, this.curX = 0, this.sprX = new Array(64), this.sprY = new Array(64), this.sprTile = new Array(64), this.sprCol = new Array(64), this.vertFlip = new Array(64), this.horiFlip = new Array(64), this.bgPriority = new Array(64), this.spr0HitX = 0, this.spr0HitY = 0, this.hitSpr0 = !1, this.sprPalette = new Array(16), this.imgPalette = new Array(16), this.ptTile = new Array(512), t = 0; t < 512; t++) this.ptTile[t] = new s;
                for (this.ntable1 = new Array(4), this.currentMirroring = -1, this.nameTable = new Array(4), t = 0; t < 4; t++) this.nameTable[t] = new o(32, 32, "Nt" + t);
                for (this.vramMirrorTable = new Array(32768), t = 0; t < 32768; t++) this.vramMirrorTable[t] = t;
                this.palTable = new a, this.palTable.loadNTSCPalette(), this.updateControlReg1(0), this.updateControlReg2(0)
            },
            setMirroring: function(t) {
                if (t !== this.currentMirroring) {
                    this.currentMirroring = t, this.triggerRendering(), null === this.vramMirrorTable && (this.vramMirrorTable = new Array(32768));
                    for (var e = 0; e < 32768; e++) this.vramMirrorTable[e] = e;
                    this.defineMirrorRegion(16160, 16128, 32), this.defineMirrorRegion(16192, 16128, 32), this.defineMirrorRegion(16256, 16128, 32), this.defineMirrorRegion(16320, 16128, 32), this.defineMirrorRegion(12288, 8192, 3840), this.defineMirrorRegion(16384, 0, 16384), t === this.nes.rom.HORIZONTAL_MIRRORING ? (this.ntable1[0] = 0, this.ntable1[1] = 0, this.ntable1[2] = 1, this.ntable1[3] = 1, this.defineMirrorRegion(9216, 8192, 1024), this.defineMirrorRegion(11264, 10240, 1024)) : t === this.nes.rom.VERTICAL_MIRRORING ? (this.ntable1[0] = 0, this.ntable1[1] = 1, this.ntable1[2] = 0, this.ntable1[3] = 1, this.defineMirrorRegion(10240, 8192, 1024), this.defineMirrorRegion(11264, 9216, 1024)) : t === this.nes.rom.SINGLESCREEN_MIRRORING ? (this.ntable1[0] = 0, this.ntable1[1] = 0, this.ntable1[2] = 0, this.ntable1[3] = 0, this.defineMirrorRegion(9216, 8192, 1024), this.defineMirrorRegion(10240, 8192, 1024), this.defineMirrorRegion(11264, 8192, 1024)) : t === this.nes.rom.SINGLESCREEN_MIRRORING2 ? (this.ntable1[0] = 1, this.ntable1[1] = 1, this.ntable1[2] = 1, this.ntable1[3] = 1, this.defineMirrorRegion(9216, 9216, 1024), this.defineMirrorRegion(10240, 9216, 1024), this.defineMirrorRegion(11264, 9216, 1024)) : (this.ntable1[0] = 0, this.ntable1[1] = 1, this.ntable1[2] = 2, this.ntable1[3] = 3)
                }
            },
            defineMirrorRegion: function(t, e, i) {
                for (var s = 0; s < i; s++) this.vramMirrorTable[t + s] = e + s
            },
            startVBlank: function() {
                this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NMI), this.lastRenderedScanline < 239 && this.renderFramePartially(this.lastRenderedScanline + 1, 240 - this.lastRenderedScanline), this.endFrame(), this.lastRenderedScanline = -1
            },
            endScanline: function() {
                switch (this.scanline) {
                    case 19:
                        this.dummyCycleToggle && (this.curX = 1, this.dummyCycleToggle = !this.dummyCycleToggle);
                        break;
                    case 20:
                        this.setStatusFlag(this.STATUS_VBLANK, !1), this.setStatusFlag(this.STATUS_SPRITE0HIT, !1), this.hitSpr0 = !1, this.spr0HitX = -1, this.spr0HitY = -1, 1 !== this.f_bgVisibility && 1 !== this.f_spVisibility || (this.cntFV = this.regFV, this.cntV = this.regV, this.cntH = this.regH, this.cntVT = this.regVT, this.cntHT = this.regHT, 1 === this.f_bgVisibility && this.renderBgScanline(!1, 0)), 1 === this.f_bgVisibility && 1 === this.f_spVisibility && this.checkSprite0(0), 1 !== this.f_bgVisibility && 1 !== this.f_spVisibility || this.nes.mmap.clockIrqCounter();
                        break;
                    case 261:
                        this.setStatusFlag(this.STATUS_VBLANK, !0), this.requestEndFrame = !0, this.nmiCounter = 9, this.scanline = -1;
                        break;
                    default:
                        this.scanline >= 21 && this.scanline <= 260 && (1 === this.f_bgVisibility && (this.scanlineAlreadyRendered || (this.cntHT = this.regHT, this.cntH = this.regH, this.renderBgScanline(!0, this.scanline + 1 - 21)), this.scanlineAlreadyRendered = !1, this.hitSpr0 || 1 !== this.f_spVisibility || this.sprX[0] >= -7 && this.sprX[0] < 256 && this.sprY[0] + 1 <= this.scanline - 20 && this.sprY[0] + 1 + (0 === this.f_spriteSize ? 8 : 16) >= this.scanline - 20 && this.checkSprite0(this.scanline - 20) && (this.hitSpr0 = !0)), 1 !== this.f_bgVisibility && 1 !== this.f_spVisibility || this.nes.mmap.clockIrqCounter())
                }
                this.scanline++, this.regsToAddress(), this.cntsToAddress()
            },
            startFrame: function() {
                var t = 0;
                if (0 === this.f_dispType) t = this.imgPalette[0];
                else switch (this.f_color) {
                    case 0:
                        t = 0;
                        break;
                    case 1:
                        t = 65280;
                        break;
                    case 2:
                        t = 16711680;
                        break;
                    case 3:
                        t = 0;
                        break;
                    case 4:
                        t = 255;
                        break;
                    default:
                        t = 0
                }
                var e, i = this.buffer;
                for (e = 0; e < 61440; e++) i[e] = t;
                var s = this.pixrendered;
                for (e = 0; e < s.length; e++) s[e] = 65
            },
            endFrame: function() {
                var t, e, i, s = this.buffer;
                if (this.showSpr0Hit) {
                    if (this.sprX[0] >= 0 && this.sprX[0] < 256 && this.sprY[0] >= 0 && this.sprY[0] < 240) {
                        for (t = 0; t < 256; t++) s[(this.sprY[0] << 8) + t] = 16733525;
                        for (t = 0; t < 240; t++) s[(t << 8) + this.sprX[0]] = 16733525
                    }
                    if (this.spr0HitX >= 0 && this.spr0HitX < 256 && this.spr0HitY >= 0 && this.spr0HitY < 240) {
                        for (t = 0; t < 256; t++) s[(this.spr0HitY << 8) + t] = 5635925;
                        for (t = 0; t < 240; t++) s[(t << 8) + this.spr0HitX] = 5635925
                    }
                }
                if (this.clipToTvSize || 0 === this.f_bgClipping || 0 === this.f_spClipping)
                    for (i = 0; i < 240; i++)
                        for (e = 0; e < 8; e++) s[(i << 8) + e] = 0;
                if (this.clipToTvSize)
                    for (i = 0; i < 240; i++)
                        for (e = 0; e < 8; e++) s[255 + (i << 8) - e] = 0;
                if (this.clipToTvSize)
                    for (i = 0; i < 8; i++)
                        for (e = 0; e < 256; e++) s[(i << 8) + e] = 0, s[(239 - i << 8) + e] = 0;
                this.nes.ui.writeFrame(s)
            },
            updateControlReg1: function(t) {
                this.triggerRendering(), this.f_nmiOnVblank = t >> 7 & 1, this.f_spriteSize = t >> 5 & 1, this.f_bgPatternTable = t >> 4 & 1, this.f_spPatternTable = t >> 3 & 1, this.f_addrInc = t >> 2 & 1, this.f_nTblAddress = 3 & t, this.regV = t >> 1 & 1, this.regH = 1 & t, this.regS = t >> 4 & 1
            },
            updateControlReg2: function(t) {
                this.triggerRendering(), this.f_color = t >> 5 & 7, this.f_spVisibility = t >> 4 & 1, this.f_bgVisibility = t >> 3 & 1, this.f_spClipping = t >> 2 & 1, this.f_bgClipping = t >> 1 & 1, this.f_dispType = 1 & t, 0 === this.f_dispType && this.palTable.setEmphasis(this.f_color), this.updatePalettes()
            },
            setStatusFlag: function(t, e) {
                var i = 1 << t;
                this.nes.cpu.mem[8194] = this.nes.cpu.mem[8194] & 255 - i | (e ? i : 0)
            },
            readStatusRegister: function() {
                var t = this.nes.cpu.mem[8194];
                return this.firstWrite = !0, this.setStatusFlag(this.STATUS_VBLANK, !1), t
            },
            writeSRAMAddress: function(t) {
                this.sramAddress = t
            },
            sramLoad: function() {
                return this.spriteMem[this.sramAddress]
            },
            sramWrite: function(t) {
                this.spriteMem[this.sramAddress] = t, this.spriteRamWriteUpdate(this.sramAddress, t), this.sramAddress++, this.sramAddress %= 256
            },
            scrollWrite: function(t) {
                this.triggerRendering(), this.firstWrite ? (this.regHT = t >> 3 & 31, this.regFH = 7 & t) : (this.regFV = 7 & t, this.regVT = t >> 3 & 31), this.firstWrite = !this.firstWrite
            },
            writeVRAMAddress: function(t) {
                this.firstWrite ? (this.regFV = t >> 4 & 3, this.regV = t >> 3 & 1, this.regH = t >> 2 & 1, this.regVT = 7 & this.regVT | (3 & t) << 3) : (this.triggerRendering(), this.regVT = 24 & this.regVT | t >> 5 & 7, this.regHT = 31 & t, this.cntFV = this.regFV, this.cntV = this.regV, this.cntH = this.regH, this.cntVT = this.regVT, this.cntHT = this.regHT, this.checkSprite0(this.scanline - 20)), this.firstWrite = !this.firstWrite, this.cntsToAddress(), this.vramAddress < 8192 && this.nes.mmap.latchAccess(this.vramAddress)
            },
            vramLoad: function() {
                var t;
                return this.cntsToAddress(), this.regsToAddress(), this.vramAddress <= 16127 ? (t = this.vramBufferedReadValue, this.vramAddress < 8192 ? this.vramBufferedReadValue = this.vramMem[this.vramAddress] : this.vramBufferedReadValue = this.mirroredLoad(this.vramAddress), this.vramAddress < 8192 && this.nes.mmap.latchAccess(this.vramAddress), this.vramAddress += 1 === this.f_addrInc ? 32 : 1, this.cntsFromAddress(), this.regsFromAddress(), t) : (t = this.mirroredLoad(this.vramAddress), this.vramAddress += 1 === this.f_addrInc ? 32 : 1, this.cntsFromAddress(), this.regsFromAddress(), t)
            },
            vramWrite: function(t) {
                this.triggerRendering(), this.cntsToAddress(), this.regsToAddress(), this.vramAddress >= 8192 ? this.mirroredWrite(this.vramAddress, t) : (this.writeMem(this.vramAddress, t), this.nes.mmap.latchAccess(this.vramAddress)), this.vramAddress += 1 === this.f_addrInc ? 32 : 1, this.regsFromAddress(), this.cntsFromAddress()
            },
            sramDMA: function(t) {
                for (var e, i = 256 * t, s = this.sramAddress; s < 256; s++) e = this.nes.cpu.mem[i + s], this.spriteMem[s] = e, this.spriteRamWriteUpdate(s, e);
                this.nes.cpu.haltCycles(513)
            },
            regsFromAddress: function() {
                var t = this.vramTmpAddress >> 8 & 255;
                this.regFV = t >> 4 & 7, this.regV = t >> 3 & 1, this.regH = t >> 2 & 1, this.regVT = 7 & this.regVT | (3 & t) << 3, t = 255 & this.vramTmpAddress, this.regVT = 24 & this.regVT | t >> 5 & 7, this.regHT = 31 & t
            },
            cntsFromAddress: function() {
                var t = this.vramAddress >> 8 & 255;
                this.cntFV = t >> 4 & 3, this.cntV = t >> 3 & 1, this.cntH = t >> 2 & 1, this.cntVT = 7 & this.cntVT | (3 & t) << 3, t = 255 & this.vramAddress, this.cntVT = 24 & this.cntVT | t >> 5 & 7, this.cntHT = 31 & t
            },
            regsToAddress: function() {
                var t = (7 & this.regFV) << 4;
                t |= (1 & this.regV) << 3, t |= (1 & this.regH) << 2, t |= this.regVT >> 3 & 3;
                var e = (7 & this.regVT) << 5;
                e |= 31 & this.regHT, this.vramTmpAddress = 32767 & (t << 8 | e)
            },
            cntsToAddress: function() {
                var t = (7 & this.cntFV) << 4;
                t |= (1 & this.cntV) << 3, t |= (1 & this.cntH) << 2, t |= this.cntVT >> 3 & 3;
                var e = (7 & this.cntVT) << 5;
                e |= 31 & this.cntHT, this.vramAddress = 32767 & (t << 8 | e)
            },
            incTileCounter: function(t) {
                for (var e = t; 0 !== e; e--) this.cntHT++, 32 === this.cntHT && (this.cntHT = 0, this.cntVT++, this.cntVT >= 30 && (this.cntH++, 2 === this.cntH && (this.cntH = 0, this.cntV++, 2 === this.cntV && (this.cntV = 0, this.cntFV++, this.cntFV &= 7))))
            },
            mirroredLoad: function(t) {
                return this.vramMem[this.vramMirrorTable[t]]
            },
            mirroredWrite: function(t, e) {
                if (t >= 16128 && t < 16160) 16128 === t || 16144 === t ? (this.writeMem(16128, e), this.writeMem(16144, e)) : 16132 === t || 16148 === t ? (this.writeMem(16132, e), this.writeMem(16148, e)) : 16136 === t || 16152 === t ? (this.writeMem(16136, e), this.writeMem(16152, e)) : 16140 === t || 16156 === t ? (this.writeMem(16140, e), this.writeMem(16156, e)) : this.writeMem(t, e);
                else {
                    if (!(t < this.vramMirrorTable.length)) throw new Error("Invalid VRAM address: " + t.toString(16));
                    this.writeMem(this.vramMirrorTable[t], e)
                }
            },
            triggerRendering: function() {
                this.scanline >= 21 && this.scanline <= 260 && (this.renderFramePartially(this.lastRenderedScanline + 1, this.scanline - 21 - this.lastRenderedScanline), this.lastRenderedScanline = this.scanline - 21)
            },
            renderFramePartially: function(t, e) {
                if (1 === this.f_spVisibility && this.renderSpritesPartially(t, e, !0), 1 === this.f_bgVisibility) {
                    var i = t << 8,
                        s = t + e << 8;
                    s > 61440 && (s = 61440);
                    for (var n = this.buffer, r = this.bgbuffer, o = this.pixrendered, a = i; a < s; a++) o[a] > 255 && (n[a] = r[a])
                }
                1 === this.f_spVisibility && this.renderSpritesPartially(t, e, !1), this.validTileData = !1
            },
            renderBgScanline: function(t, e) {
                var i = 0 === this.regS ? 0 : 256,
                    s = (e << 8) - this.regFH;
                if (this.curNt = this.ntable1[this.cntV + this.cntV + this.cntH], this.cntHT = this.regHT, this.cntH = this.regH, this.curNt = this.ntable1[this.cntV + this.cntV + this.cntH], e < 240 && e - this.cntFV >= 0) {
                    for (var n, r, o, a, h = this.cntFV << 3, l = this.scantile, u = this.attrib, c = this.ptTile, p = this.nameTable, d = this.imgPalette, m = this.pixrendered, f = t ? this.bgbuffer : this.buffer, g = 0; g < 32; g++) {
                        if (e >= 0) {
                            if (this.validTileData) {
                                if (void 0 === (n = l[g])) continue;
                                r = n.pix, o = u[g]
                            } else {
                                if (void 0 === (n = c[i + p[this.curNt].getTileIndex(this.cntHT, this.cntVT)])) continue;
                                r = n.pix, o = p[this.curNt].getAttrib(this.cntHT, this.cntVT), l[g] = n, u[g] = o
                            }
                            var _ = 0,
                                b = (g << 3) - this.regFH;
                            if (b > -8)
                                if (b < 0 && (s -= b, _ = -b), n.opaque[this.cntFV])
                                    for (; _ < 8; _++) f[s] = d[r[h + _] + o], m[s] |= 256, s++;
                                else
                                    for (; _ < 8; _++) 0 !== (a = r[h + _]) && (f[s] = d[a + o], m[s] |= 256), s++
                        }
                        32 == ++this.cntHT && (this.cntHT = 0, this.cntH++, this.cntH %= 2, this.curNt = this.ntable1[(this.cntV << 1) + this.cntH])
                    }
                    this.validTileData = !0
                }
                this.cntFV++, 8 === this.cntFV && (this.cntFV = 0, this.cntVT++, 30 === this.cntVT ? (this.cntVT = 0, this.cntV++, this.cntV %= 2, this.curNt = this.ntable1[(this.cntV << 1) + this.cntH]) : 32 === this.cntVT && (this.cntVT = 0), this.validTileData = !1)
            },
            renderSpritesPartially: function(t, e, i) {
                if (1 === this.f_spVisibility)
                    for (var s = 0; s < 64; s++)
                        if (this.bgPriority[s] === i && this.sprX[s] >= 0 && this.sprX[s] < 256 && this.sprY[s] + 8 >= t && this.sprY[s] < t + e)
                            if (0 === this.f_spriteSize) this.srcy1 = 0, this.srcy2 = 8, this.sprY[s] < t && (this.srcy1 = t - this.sprY[s] - 1), this.sprY[s] + 8 > t + e && (this.srcy2 = t + e - this.sprY[s] + 1), 0 === this.f_spPatternTable ? this.ptTile[this.sprTile[s]].render(this.buffer, 0, this.srcy1, 8, this.srcy2, this.sprX[s], this.sprY[s] + 1, this.sprCol[s], this.sprPalette, this.horiFlip[s], this.vertFlip[s], s, this.pixrendered) : this.ptTile[this.sprTile[s] + 256].render(this.buffer, 0, this.srcy1, 8, this.srcy2, this.sprX[s], this.sprY[s] + 1, this.sprCol[s], this.sprPalette, this.horiFlip[s], this.vertFlip[s], s, this.pixrendered);
                            else {
                                var n = this.sprTile[s];
                                0 != (1 & n) && (n = this.sprTile[s] - 1 + 256);
                                var r = 0,
                                    o = 8;
                                this.sprY[s] < t && (r = t - this.sprY[s] - 1), this.sprY[s] + 8 > t + e && (o = t + e - this.sprY[s]), this.ptTile[n + (this.vertFlip[s] ? 1 : 0)].render(this.buffer, 0, r, 8, o, this.sprX[s], this.sprY[s] + 1, this.sprCol[s], this.sprPalette, this.horiFlip[s], this.vertFlip[s], s, this.pixrendered), r = 0, o = 8, this.sprY[s] + 8 < t && (r = t - (this.sprY[s] + 8 + 1)), this.sprY[s] + 16 > t + e && (o = t + e - (this.sprY[s] + 8)), this.ptTile[n + (this.vertFlip[s] ? 0 : 1)].render(this.buffer, 0, r, 8, o, this.sprX[s], this.sprY[s] + 1 + 8, this.sprCol[s], this.sprPalette, this.horiFlip[s], this.vertFlip[s], s, this.pixrendered)
                            }
            },
            checkSprite0: function(t) {
                var e;
                this.spr0HitX = -1, this.spr0HitY = -1;
                var i, s, n, r, o, a = 0 === this.f_spPatternTable ? 0 : 256;
                if (i = this.sprX[0], s = this.sprY[0] + 1, 0 === this.f_spriteSize) {
                    if (s <= t && s + 8 > t && i >= -7 && i < 256)
                        if (n = this.ptTile[this.sprTile[0] + a], this.sprCol[0], this.bgPriority[0], e = this.vertFlip[0] ? 7 - (t - s) : t - s, e *= 8, o = 256 * t + i, this.horiFlip[0])
                            for (r = 7; r >= 0; r--) {
                                if (i >= 0 && i < 256 && o >= 0 && o < 61440 && 0 !== this.pixrendered[o] && 0 !== n.pix[e + r]) return this.spr0HitX = o % 256, this.spr0HitY = t, !0;
                                i++, o++
                            } else
                                for (r = 0; r < 8; r++) {
                                    if (i >= 0 && i < 256 && o >= 0 && o < 61440 && 0 !== this.pixrendered[o] && 0 !== n.pix[e + r]) return this.spr0HitX = o % 256, this.spr0HitY = t, !0;
                                    i++, o++
                                }
                } else if (s <= t && s + 16 > t && i >= -7 && i < 256)
                    if ((e = this.vertFlip[0] ? 15 - (t - s) : t - s) < 8 ? n = this.ptTile[this.sprTile[0] + (this.vertFlip[0] ? 1 : 0) + (0 != (1 & this.sprTile[0]) ? 255 : 0)] : (n = this.ptTile[this.sprTile[0] + (this.vertFlip[0] ? 0 : 1) + (0 != (1 & this.sprTile[0]) ? 255 : 0)], this.vertFlip[0] ? e = 15 - e : e -= 8), e *= 8, this.sprCol[0], this.bgPriority[0], o = 256 * t + i, this.horiFlip[0])
                        for (r = 7; r >= 0; r--) {
                            if (i >= 0 && i < 256 && o >= 0 && o < 61440 && 0 !== this.pixrendered[o] && 0 !== n.pix[e + r]) return this.spr0HitX = o % 256, this.spr0HitY = t, !0;
                            i++, o++
                        } else
                            for (r = 0; r < 8; r++) {
                                if (i >= 0 && i < 256 && o >= 0 && o < 61440 && 0 !== this.pixrendered[o] && 0 !== n.pix[e + r]) return this.spr0HitX = o % 256, this.spr0HitY = t, !0;
                                i++, o++
                            }
                return !1
            },
            writeMem: function(t, e) {
                this.vramMem[t] = e, t < 8192 ? (this.vramMem[t] = e, this.patternWrite(t, e)) : t >= 8192 && t < 9152 ? this.nameTableWrite(this.ntable1[0], t - 8192, e) : t >= 9152 && t < 9216 ? this.attribTableWrite(this.ntable1[0], t - 9152, e) : t >= 9216 && t < 10176 ? this.nameTableWrite(this.ntable1[1], t - 9216, e) : t >= 10176 && t < 10240 ? this.attribTableWrite(this.ntable1[1], t - 10176, e) : t >= 10240 && t < 11200 ? this.nameTableWrite(this.ntable1[2], t - 10240, e) : t >= 11200 && t < 11264 ? this.attribTableWrite(this.ntable1[2], t - 11200, e) : t >= 11264 && t < 12224 ? this.nameTableWrite(this.ntable1[3], t - 11264, e) : t >= 12224 && t < 12288 ? this.attribTableWrite(this.ntable1[3], t - 12224, e) : t >= 16128 && t < 16160 && this.updatePalettes()
            },
            updatePalettes: function() {
                var t;
                for (t = 0; t < 16; t++) 0 === this.f_dispType ? this.imgPalette[t] = this.palTable.getEntry(63 & this.vramMem[16128 + t]) : this.imgPalette[t] = this.palTable.getEntry(32 & this.vramMem[16128 + t]);
                for (t = 0; t < 16; t++) 0 === this.f_dispType ? this.sprPalette[t] = this.palTable.getEntry(63 & this.vramMem[16144 + t]) : this.sprPalette[t] = this.palTable.getEntry(32 & this.vramMem[16144 + t])
            },
            patternWrite: function(t, e) {
                var i = Math.floor(t / 16),
                    s = t % 16;
                s < 8 ? this.ptTile[i].setScanline(s, e, this.vramMem[t + 8]) : this.ptTile[i].setScanline(s - 8, this.vramMem[t - 8], e)
            },
            nameTableWrite: function(t, e, i) {
                this.nameTable[t].tile[e] = i, this.checkSprite0(this.scanline - 20)
            },
            attribTableWrite: function(t, e, i) {
                this.nameTable[t].writeAttrib(e, i)
            },
            spriteRamWriteUpdate: function(t, e) {
                var i = Math.floor(t / 4);
                0 === i && this.checkSprite0(this.scanline - 20), t % 4 == 0 ? this.sprY[i] = e : t % 4 == 1 ? this.sprTile[i] = e : t % 4 == 2 ? (this.vertFlip[i] = 0 != (128 & e), this.horiFlip[i] = 0 != (64 & e), this.bgPriority[i] = 0 != (32 & e), this.sprCol[i] = (3 & e) << 2) : t % 4 == 3 && (this.sprX[i] = e)
            },
            doNMI: function() {
                this.setStatusFlag(this.STATUS_VBLANK, !0), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NMI)
            },
            isPixelWhite: function(t, e) {
                return this.triggerRendering(), 16777215 === this.nes.ppu.buffer[(e << 8) + t]
            },
            JSON_PROPERTIES: ["vramMem", "spriteMem", "cntFV", "cntV", "cntH", "cntVT", "cntHT", "regFV", "regV", "regH", "regVT", "regHT", "regFH", "regS", "vramAddress", "vramTmpAddress", "f_nmiOnVblank", "f_spriteSize", "f_bgPatternTable", "f_spPatternTable", "f_addrInc", "f_nTblAddress", "f_color", "f_spVisibility", "f_bgVisibility", "f_spClipping", "f_bgClipping", "f_dispType", "vramBufferedReadValue", "firstWrite", "currentMirroring", "vramMirrorTable", "ntable1", "sramAddress", "hitSpr0", "sprPalette", "imgPalette", "curX", "scanline", "lastRenderedScanline", "curNt", "scantile", "attrib", "buffer", "bgbuffer", "pixrendered", "requestEndFrame", "nmiOk", "dummyCycleToggle", "nmiCounter", "validTileData", "scanlineAlreadyRendered"],
            toJSON: function() {
                var t, e = n.toJSON(this);
                for (e.nameTable = [], t = 0; t < this.nameTable.length; t++) e.nameTable[t] = this.nameTable[t].toJSON();
                for (e.ptTile = [], t = 0; t < this.ptTile.length; t++) e.ptTile[t] = this.ptTile[t].toJSON();
                return e
            },
            fromJSON: function(t) {
                var e;
                for (n.fromJSON(this, t), e = 0; e < this.nameTable.length; e++) this.nameTable[e].fromJSON(t.nameTable[e]);
                for (e = 0; e < this.ptTile.length; e++) this.ptTile[e].fromJSON(t.ptTile[e]);
                for (e = 0; e < this.spriteMem.length; e++) this.spriteRamWriteUpdate(e, this.spriteMem[e])
            }
        };
        var o = function(t, e, i) {
            this.width = t, this.height = e, this.name = i, this.tile = new Array(t * e), this.attrib = new Array(t * e);
            for (var s = 0; s < t * e; s++) this.tile[s] = 0, this.attrib[s] = 0
        };
        o.prototype = {
            getTileIndex: function(t, e) {
                return this.tile[e * this.width + t]
            },
            getAttrib: function(t, e) {
                return this.attrib[e * this.width + t]
            },
            writeAttrib: function(t, e) {
                for (var i, s, n, r = t % 8 * 4, o = 4 * Math.floor(t / 8), a = 0; a < 2; a++)
                    for (var h = 0; h < 2; h++) {
                        i = e >> 2 * (2 * a + h) & 3;
                        for (var l = 0; l < 2; l++)
                            for (var u = 0; u < 2; u++) s = r + 2 * h + u, (n = o + 2 * a + l) * this.width + s, this.attrib[n * this.width + s] = i << 2 & 12
                    }
            },
            toJSON: function() {
                return {
                    tile: this.tile,
                    attrib: this.attrib
                }
            },
            fromJSON: function(t) {
                this.tile = t.tile, this.attrib = t.attrib
            }
        };
        var a = function() {
            this.curTable = new Array(64), this.emphTable = new Array(8), this.currentEmph = -1
        };
        a.prototype = {
            reset: function() {
                this.setEmphasis(0)
            },
            loadNTSCPalette: function() {
                this.curTable = [5395026, 11796480, 10485760, 11599933, 7602281, 91, 95, 6208, 12048, 543240, 26368, 1196544, 7153664, 0, 0, 0, 12899815, 16728064, 14421538, 16729963, 14090399, 6818519, 6588, 21681, 27227, 35843, 43776, 2918400, 10777088, 0, 0, 0, 16316664, 16755516, 16742785, 16735173, 16730354, 14633471, 4681215, 46327, 57599, 58229, 259115, 7911470, 15065624, 7895160, 0, 0, 16777215, 16773822, 16300216, 16300248, 16758527, 16761855, 13095423, 10148607, 8973816, 8650717, 12122296, 16119980, 16777136, 16308472, 0, 0], this.makeTables(), this.setEmphasis(0)
            },
            loadPALPalette: function() {
                this.curTable = [5395026, 11796480, 10485760, 11599933, 7602281, 91, 95, 6208, 12048, 543240, 26368, 1196544, 7153664, 0, 0, 0, 12899815, 16728064, 14421538, 16729963, 14090399, 6818519, 6588, 21681, 27227, 35843, 43776, 2918400, 10777088, 0, 0, 0, 16316664, 16755516, 16742785, 16735173, 16730354, 14633471, 4681215, 46327, 57599, 58229, 259115, 7911470, 15065624, 7895160, 0, 0, 16777215, 16773822, 16300216, 16300248, 16758527, 16761855, 13095423, 10148607, 8973816, 8650717, 12122296, 16119980, 16777136, 16308472, 0, 0], this.makeTables(), this.setEmphasis(0)
            },
            makeTables: function() {
                for (var t, e, i, s, n, r, o, a, h = 0; h < 8; h++)
                    for (r = 1, o = 1, a = 1, 0 != (1 & h) && (r = .75, a = .75), 0 != (2 & h) && (r = .75, o = .75), 0 != (4 & h) && (o = .75, a = .75), this.emphTable[h] = new Array(64), n = 0; n < 64; n++) s = this.curTable[n], t = Math.floor(this.getRed(s) * r), e = Math.floor(this.getGreen(s) * o), i = Math.floor(this.getBlue(s) * a), this.emphTable[h][n] = this.getRgb(t, e, i)
            },
            setEmphasis: function(t) {
                if (t !== this.currentEmph) {
                    this.currentEmph = t;
                    for (var e = 0; e < 64; e++) this.curTable[e] = this.emphTable[t][e]
                }
            },
            getEntry: function(t) {
                return this.curTable[t]
            },
            getRed: function(t) {
                return t >> 16 & 255
            },
            getGreen: function(t) {
                return t >> 8 & 255
            },
            getBlue: function(t) {
                return 255 & t
            },
            getRgb: function(t, e, i) {
                return t << 16 | e << 8 | i
            },
            loadDefaultPalette: function() {
                this.curTable[0] = this.getRgb(117, 117, 117), this.curTable[1] = this.getRgb(39, 27, 143), this.curTable[2] = this.getRgb(0, 0, 171), this.curTable[3] = this.getRgb(71, 0, 159), this.curTable[4] = this.getRgb(143, 0, 119), this.curTable[5] = this.getRgb(171, 0, 19), this.curTable[6] = this.getRgb(167, 0, 0), this.curTable[7] = this.getRgb(127, 11, 0), this.curTable[8] = this.getRgb(67, 47, 0), this.curTable[9] = this.getRgb(0, 71, 0), this.curTable[10] = this.getRgb(0, 81, 0), this.curTable[11] = this.getRgb(0, 63, 23), this.curTable[12] = this.getRgb(27, 63, 95), this.curTable[13] = this.getRgb(0, 0, 0), this.curTable[14] = this.getRgb(0, 0, 0), this.curTable[15] = this.getRgb(0, 0, 0), this.curTable[16] = this.getRgb(188, 188, 188), this.curTable[17] = this.getRgb(0, 115, 239), this.curTable[18] = this.getRgb(35, 59, 239), this.curTable[19] = this.getRgb(131, 0, 243), this.curTable[20] = this.getRgb(191, 0, 191), this.curTable[21] = this.getRgb(231, 0, 91), this.curTable[22] = this.getRgb(219, 43, 0), this.curTable[23] = this.getRgb(203, 79, 15), this.curTable[24] = this.getRgb(139, 115, 0), this.curTable[25] = this.getRgb(0, 151, 0), this.curTable[26] = this.getRgb(0, 171, 0), this.curTable[27] = this.getRgb(0, 147, 59), this.curTable[28] = this.getRgb(0, 131, 139), this.curTable[29] = this.getRgb(0, 0, 0), this.curTable[30] = this.getRgb(0, 0, 0), this.curTable[31] = this.getRgb(0, 0, 0), this.curTable[32] = this.getRgb(255, 255, 255), this.curTable[33] = this.getRgb(63, 191, 255), this.curTable[34] = this.getRgb(95, 151, 255), this.curTable[35] = this.getRgb(167, 139, 253), this.curTable[36] = this.getRgb(247, 123, 255), this.curTable[37] = this.getRgb(255, 119, 183), this.curTable[38] = this.getRgb(255, 119, 99), this.curTable[39] = this.getRgb(255, 155, 59), this.curTable[40] = this.getRgb(243, 191, 63), this.curTable[41] = this.getRgb(131, 211, 19), this.curTable[42] = this.getRgb(79, 223, 75), this.curTable[43] = this.getRgb(88, 248, 152), this.curTable[44] = this.getRgb(0, 235, 219), this.curTable[45] = this.getRgb(0, 0, 0), this.curTable[46] = this.getRgb(0, 0, 0), this.curTable[47] = this.getRgb(0, 0, 0), this.curTable[48] = this.getRgb(255, 255, 255), this.curTable[49] = this.getRgb(171, 231, 255), this.curTable[50] = this.getRgb(199, 215, 255), this.curTable[51] = this.getRgb(215, 203, 255), this.curTable[52] = this.getRgb(255, 199, 255), this.curTable[53] = this.getRgb(255, 199, 219), this.curTable[54] = this.getRgb(255, 191, 179), this.curTable[55] = this.getRgb(255, 219, 171), this.curTable[56] = this.getRgb(255, 231, 163), this.curTable[57] = this.getRgb(227, 255, 163), this.curTable[58] = this.getRgb(171, 243, 191), this.curTable[59] = this.getRgb(179, 255, 207), this.curTable[60] = this.getRgb(159, 255, 243), this.curTable[61] = this.getRgb(0, 0, 0), this.curTable[62] = this.getRgb(0, 0, 0), this.curTable[63] = this.getRgb(0, 0, 0), this.makeTables(), this.setEmphasis(0)
            }
        }, t.exports = r
    },
    800: function(t, e) {
        var i = function(t) {
            this.nes = t, this.square1 = new r(this, !0), this.square2 = new r(this, !1), this.triangle = new o(this), this.noise = new n(this), this.dmc = new s(this), this.frameIrqCounter = null, this.frameIrqCounterMax = 4, this.initCounter = 2048, this.channelEnableValue = null, this.sampleRate = 44100, this.lengthLookup = null, this.dmcFreqLookup = null, this.noiseWavelengthLookup = null, this.square_table = null, this.tnd_table = null, this.frameIrqEnabled = !1, this.frameIrqActive = null, this.frameClockNow = null, this.startedPlaying = !1, this.recordOutput = !1, this.initingHardware = !1, this.masterFrameCounter = null, this.derivedFrameCounter = null, this.countSequence = null, this.sampleTimer = null, this.frameTime = null, this.sampleTimerMax = null, this.sampleCount = null, this.triValue = 0, this.smpSquare1 = null, this.smpSquare2 = null, this.smpTriangle = null, this.smpDmc = null, this.accCount = null, this.prevSampleL = 0, this.prevSampleR = 0, this.smpAccumL = 0, this.smpAccumR = 0, this.dacRange = 0, this.dcValue = 0, this.masterVolume = 256, this.stereoPosLSquare1 = null, this.stereoPosLSquare2 = null, this.stereoPosLTriangle = null, this.stereoPosLNoise = null, this.stereoPosLDMC = null, this.stereoPosRSquare1 = null, this.stereoPosRSquare2 = null, this.stereoPosRTriangle = null, this.stereoPosRNoise = null, this.stereoPosRDMC = null, this.extraCycles = null, this.maxSample = null, this.minSample = null, this.panning = [80, 170, 100, 150, 128], this.setPanning(this.panning), this.initLengthLookup(), this.initDmcFrequencyLookup(), this.initNoiseWavelengthLookup(), this.initDACtables();
            for (var e = 0; e < 20; e++) 16 === e ? this.writeReg(16400, 16) : this.writeReg(16384 + e, 0);
            this.reset()
        };
        i.prototype = {
            reset: function() {
                this.sampleRate = this.nes.opts.sampleRate, this.sampleTimerMax = Math.floor(1832727040 * this.nes.opts.preferredFrameRate / (60 * this.sampleRate)), this.frameTime = Math.floor(14915 * this.nes.opts.preferredFrameRate / 60), this.sampleTimer = 0, this.updateChannelEnable(0), this.masterFrameCounter = 0, this.derivedFrameCounter = 0, this.countSequence = 0, this.sampleCount = 0, this.initCounter = 2048, this.frameIrqEnabled = !1, this.initingHardware = !1, this.resetCounter(), this.square1.reset(), this.square2.reset(), this.triangle.reset(), this.noise.reset(), this.dmc.reset(), this.accCount = 0, this.smpSquare1 = 0, this.smpSquare2 = 0, this.smpTriangle = 0, this.smpDmc = 0, this.frameIrqEnabled = !1, this.frameIrqCounterMax = 4, this.channelEnableValue = 255, this.startedPlaying = !1, this.prevSampleL = 0, this.prevSampleR = 0, this.smpAccumL = 0, this.smpAccumR = 0, this.maxSample = -5e5, this.minSample = 5e5
            },
            readReg: function(t) {
                var e = 0;
                return e |= this.square1.getLengthStatus(), e |= this.square2.getLengthStatus() << 1, e |= this.triangle.getLengthStatus() << 2, e |= this.noise.getLengthStatus() << 3, e |= this.dmc.getLengthStatus() << 4, e |= (this.frameIrqActive && this.frameIrqEnabled ? 1 : 0) << 6, e |= this.dmc.getIrqStatus() << 7, this.frameIrqActive = !1, this.dmc.irqGenerated = !1, 65535 & e
            },
            writeReg: function(t, e) {
                t >= 16384 && t < 16388 ? this.square1.writeReg(t, e) : t >= 16388 && t < 16392 ? this.square2.writeReg(t, e) : t >= 16392 && t < 16396 ? this.triangle.writeReg(t, e) : t >= 16396 && t <= 16399 ? this.noise.writeReg(t, e) : 16400 === t ? this.dmc.writeReg(t, e) : 16401 === t ? this.dmc.writeReg(t, e) : 16402 === t ? this.dmc.writeReg(t, e) : 16403 === t ? this.dmc.writeReg(t, e) : 16405 === t ? (this.updateChannelEnable(e), 0 !== e && this.initCounter > 0 && (this.initingHardware = !0), this.dmc.writeReg(t, e)) : 16407 === t && (this.countSequence = e >> 7 & 1, this.masterFrameCounter = 0, this.frameIrqActive = !1, this.frameIrqEnabled = 0 == (e >> 6 & 1), 0 === this.countSequence ? (this.frameIrqCounterMax = 4, this.derivedFrameCounter = 4) : (this.frameIrqCounterMax = 5, this.derivedFrameCounter = 0, this.frameCounterTick()))
            },
            resetCounter: function() {
                0 === this.countSequence ? this.derivedFrameCounter = 4 : this.derivedFrameCounter = 0
            },
            updateChannelEnable: function(t) {
                this.channelEnableValue = 65535 & t, this.square1.setEnabled(0 != (1 & t)), this.square2.setEnabled(0 != (2 & t)), this.triangle.setEnabled(0 != (4 & t)), this.noise.setEnabled(0 != (8 & t)), this.dmc.setEnabled(0 != (16 & t))
            },
            clockFrameCounter: function(t) {
                if (this.initCounter > 0 && this.initingHardware) return this.initCounter -= t, void(this.initCounter <= 0 && (this.initingHardware = !1));
                t += this.extraCycles;
                var e = this.sampleTimerMax - this.sampleTimer;
                t << 10 > e ? (this.extraCycles = (t << 10) - e >> 10, t -= this.extraCycles) : this.extraCycles = 0;
                var i = this.dmc,
                    s = this.triangle,
                    n = this.square1,
                    r = this.square2,
                    o = this.noise;
                if (i.isEnabled)
                    for (i.shiftCounter -= t << 3; i.shiftCounter <= 0 && i.dmaFrequency > 0;) i.shiftCounter += i.dmaFrequency, i.clockDmc();
                if (s.progTimerMax > 0)
                    for (s.progTimerCount -= t; s.progTimerCount <= 0;) s.progTimerCount += s.progTimerMax + 1, s.linearCounter > 0 && s.lengthCounter > 0 && (s.triangleCounter++, s.triangleCounter &= 31, s.isEnabled && (s.triangleCounter >= 16 ? s.sampleValue = 15 & s.triangleCounter : s.sampleValue = 15 - (15 & s.triangleCounter), s.sampleValue <<= 4));
                n.progTimerCount -= t, n.progTimerCount <= 0 && (n.progTimerCount += n.progTimerMax + 1 << 1, n.squareCounter++, n.squareCounter &= 7, n.updateSampleValue()), r.progTimerCount -= t, r.progTimerCount <= 0 && (r.progTimerCount += r.progTimerMax + 1 << 1, r.squareCounter++, r.squareCounter &= 7, r.updateSampleValue());
                var a = t;
                if (o.progTimerCount - a > 0) o.progTimerCount -= a, o.accCount += a, o.accValue += a * o.sampleValue;
                else
                    for (; a-- > 0;) --o.progTimerCount <= 0 && o.progTimerMax > 0 && (o.shiftReg <<= 1, o.tmp = 32768 & (o.shiftReg << (0 === o.randomMode ? 1 : 6) ^ o.shiftReg), 0 !== o.tmp ? (o.shiftReg |= 1, o.randomBit = 0, o.sampleValue = 0) : (o.randomBit = 1, o.isEnabled && o.lengthCounter > 0 ? o.sampleValue = o.masterVolume : o.sampleValue = 0), o.progTimerCount += o.progTimerMax), o.accValue += o.sampleValue, o.accCount++;
                this.frameIrqEnabled && this.frameIrqActive && this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL), this.masterFrameCounter += t << 1, this.masterFrameCounter >= this.frameTime && (this.masterFrameCounter -= this.frameTime, this.frameCounterTick()), this.accSample(t), this.sampleTimer += t << 10, this.sampleTimer >= this.sampleTimerMax && (this.sample(), this.sampleTimer -= this.sampleTimerMax)
            },
            accSample: function(t) {
                this.triangle.sampleCondition && (this.triValue = Math.floor((this.triangle.progTimerCount << 4) / (this.triangle.progTimerMax + 1)), this.triValue > 16 && (this.triValue = 16), this.triangle.triangleCounter >= 16 && (this.triValue = 16 - this.triValue), this.triValue += this.triangle.sampleValue), 2 === t ? (this.smpTriangle += this.triValue << 1, this.smpDmc += this.dmc.sample << 1, this.smpSquare1 += this.square1.sampleValue << 1, this.smpSquare2 += this.square2.sampleValue << 1, this.accCount += 2) : 4 === t ? (this.smpTriangle += this.triValue << 2, this.smpDmc += this.dmc.sample << 2, this.smpSquare1 += this.square1.sampleValue << 2, this.smpSquare2 += this.square2.sampleValue << 2, this.accCount += 4) : (this.smpTriangle += t * this.triValue, this.smpDmc += t * this.dmc.sample, this.smpSquare1 += t * this.square1.sampleValue, this.smpSquare2 += t * this.square2.sampleValue, this.accCount += t)
            },
            frameCounterTick: function() {
                this.derivedFrameCounter++, this.derivedFrameCounter >= this.frameIrqCounterMax && (this.derivedFrameCounter = 0), 1 !== this.derivedFrameCounter && 3 !== this.derivedFrameCounter || (this.triangle.clockLengthCounter(), this.square1.clockLengthCounter(), this.square2.clockLengthCounter(), this.noise.clockLengthCounter(), this.square1.clockSweep(), this.square2.clockSweep()), this.derivedFrameCounter >= 0 && this.derivedFrameCounter < 4 && (this.square1.clockEnvDecay(), this.square2.clockEnvDecay(), this.noise.clockEnvDecay(), this.triangle.clockLinearCounter()), 3 === this.derivedFrameCounter && 0 === this.countSequence && (this.frameIrqActive = !0)
            },
            sample: function() {
                var t, e;
                this.accCount > 0 ? (this.smpSquare1 <<= 4, this.smpSquare1 = Math.floor(this.smpSquare1 / this.accCount), this.smpSquare2 <<= 4, this.smpSquare2 = Math.floor(this.smpSquare2 / this.accCount), this.smpTriangle = Math.floor(this.smpTriangle / this.accCount), this.smpDmc <<= 4, this.smpDmc = Math.floor(this.smpDmc / this.accCount), this.accCount = 0) : (this.smpSquare1 = this.square1.sampleValue << 4, this.smpSquare2 = this.square2.sampleValue << 4, this.smpTriangle = this.triangle.sampleValue, this.smpDmc = this.dmc.sample << 4);
                var i = Math.floor((this.noise.accValue << 4) / this.noise.accCount);
                this.noise.accValue = i >> 4, this.noise.accCount = 1, t = this.smpSquare1 * this.stereoPosLSquare1 + this.smpSquare2 * this.stereoPosLSquare2 >> 8, e = 3 * this.smpTriangle * this.stereoPosLTriangle + (i << 1) * this.stereoPosLNoise + this.smpDmc * this.stereoPosLDMC >> 8, t >= this.square_table.length && (t = this.square_table.length - 1), e >= this.tnd_table.length && (e = this.tnd_table.length - 1);
                var s = this.square_table[t] + this.tnd_table[e] - this.dcValue;
                t = this.smpSquare1 * this.stereoPosRSquare1 + this.smpSquare2 * this.stereoPosRSquare2 >> 8, e = 3 * this.smpTriangle * this.stereoPosRTriangle + (i << 1) * this.stereoPosRNoise + this.smpDmc * this.stereoPosRDMC >> 8, t >= this.square_table.length && (t = this.square_table.length - 1), e >= this.tnd_table.length && (e = this.tnd_table.length - 1);
                var n = this.square_table[t] + this.tnd_table[e] - this.dcValue,
                    r = s - this.prevSampleL;
                this.prevSampleL += r, this.smpAccumL += r - (this.smpAccumL >> 10), s = this.smpAccumL;
                var o = n - this.prevSampleR;
                this.prevSampleR += o, this.smpAccumR += o - (this.smpAccumR >> 10), n = this.smpAccumR, s > this.maxSample && (this.maxSample = s), s < this.minSample && (this.minSample = s), this.nes.opts.onAudioSample && this.nes.opts.onAudioSample(s / 32768, n / 32768), this.smpSquare1 = 0, this.smpSquare2 = 0, this.smpTriangle = 0, this.smpDmc = 0
            },
            getLengthMax: function(t) {
                return this.lengthLookup[t >> 3]
            },
            getDmcFrequency: function(t) {
                return t >= 0 && t < 16 ? this.dmcFreqLookup[t] : 0
            },
            getNoiseWaveLength: function(t) {
                return t >= 0 && t < 16 ? this.noiseWavelengthLookup[t] : 0
            },
            setPanning: function(t) {
                for (var e = 0; e < 5; e++) this.panning[e] = t[e];
                this.updateStereoPos()
            },
            setMasterVolume: function(t) {
                t < 0 && (t = 0), t > 256 && (t = 256), this.masterVolume = t, this.updateStereoPos()
            },
            updateStereoPos: function() {
                this.stereoPosLSquare1 = this.panning[0] * this.masterVolume >> 8, this.stereoPosLSquare2 = this.panning[1] * this.masterVolume >> 8, this.stereoPosLTriangle = this.panning[2] * this.masterVolume >> 8, this.stereoPosLNoise = this.panning[3] * this.masterVolume >> 8, this.stereoPosLDMC = this.panning[4] * this.masterVolume >> 8, this.stereoPosRSquare1 = this.masterVolume - this.stereoPosLSquare1, this.stereoPosRSquare2 = this.masterVolume - this.stereoPosLSquare2, this.stereoPosRTriangle = this.masterVolume - this.stereoPosLTriangle, this.stereoPosRNoise = this.masterVolume - this.stereoPosLNoise, this.stereoPosRDMC = this.masterVolume - this.stereoPosLDMC
            },
            initLengthLookup: function() {
                this.lengthLookup = [10, 254, 20, 2, 40, 4, 80, 6, 160, 8, 60, 10, 14, 12, 26, 14, 12, 16, 24, 18, 48, 20, 96, 22, 192, 24, 72, 26, 16, 28, 32, 30]
            },
            initDmcFrequencyLookup: function() {
                this.dmcFreqLookup = new Array(16), this.dmcFreqLookup[0] = 3424, this.dmcFreqLookup[1] = 3040, this.dmcFreqLookup[2] = 2720, this.dmcFreqLookup[3] = 2560, this.dmcFreqLookup[4] = 2288, this.dmcFreqLookup[5] = 2032, this.dmcFreqLookup[6] = 1808, this.dmcFreqLookup[7] = 1712, this.dmcFreqLookup[8] = 1520, this.dmcFreqLookup[9] = 1280, this.dmcFreqLookup[10] = 1136, this.dmcFreqLookup[11] = 1024, this.dmcFreqLookup[12] = 848, this.dmcFreqLookup[13] = 672, this.dmcFreqLookup[14] = 576, this.dmcFreqLookup[15] = 432
            },
            initNoiseWavelengthLookup: function() {
                this.noiseWavelengthLookup = new Array(16), this.noiseWavelengthLookup[0] = 4, this.noiseWavelengthLookup[1] = 8, this.noiseWavelengthLookup[2] = 16, this.noiseWavelengthLookup[3] = 32, this.noiseWavelengthLookup[4] = 64, this.noiseWavelengthLookup[5] = 96, this.noiseWavelengthLookup[6] = 128, this.noiseWavelengthLookup[7] = 160, this.noiseWavelengthLookup[8] = 202, this.noiseWavelengthLookup[9] = 254, this.noiseWavelengthLookup[10] = 380, this.noiseWavelengthLookup[11] = 508, this.noiseWavelengthLookup[12] = 762, this.noiseWavelengthLookup[13] = 1016, this.noiseWavelengthLookup[14] = 2034, this.noiseWavelengthLookup[15] = 4068
            },
            initDACtables: function() {
                var t, e, i, s = 0,
                    n = 0;
                for (this.square_table = new Array(512), this.tnd_table = new Array(3264), i = 0; i < 512; i++) t = 95.52 / (8128 / (i / 16) + 100), t *= .98411, t *= 5e4, e = Math.floor(t), this.square_table[i] = e, e > s && (s = e);
                for (i = 0; i < 3264; i++) t = 163.67 / (24329 / (i / 16) + 100), t *= .98411, t *= 5e4, e = Math.floor(t), this.tnd_table[i] = e, e > n && (n = e);
                this.dacRange = s + n, this.dcValue = this.dacRange / 2
            }
        };
        var s = function(t) {
            this.papu = t, this.MODE_NORMAL = 0, this.MODE_LOOP = 1, this.MODE_IRQ = 2, this.isEnabled = null, this.hasSample = null, this.irqGenerated = !1, this.playMode = null, this.dmaFrequency = null, this.dmaCounter = null, this.deltaCounter = null, this.playStartAddress = null, this.playAddress = null, this.playLength = null, this.playLengthCounter = null, this.shiftCounter = null, this.reg4012 = null, this.reg4013 = null, this.sample = null, this.dacLsb = null, this.data = null, this.reset()
        };
        s.prototype = {
            clockDmc: function() {
                this.hasSample && (0 == (1 & this.data) ? this.deltaCounter > 0 && this.deltaCounter-- : this.deltaCounter < 63 && this.deltaCounter++, this.sample = this.isEnabled ? (this.deltaCounter << 1) + this.dacLsb : 0, this.data >>= 1), this.dmaCounter--, this.dmaCounter <= 0 && (this.hasSample = !1, this.endOfSample(), this.dmaCounter = 8), this.irqGenerated && this.papu.nes.cpu.requestIrq(this.papu.nes.cpu.IRQ_NORMAL)
            },
            endOfSample: function() {
                0 === this.playLengthCounter && this.playMode === this.MODE_LOOP && (this.playAddress = this.playStartAddress, this.playLengthCounter = this.playLength), this.playLengthCounter > 0 && (this.nextSample(), 0 === this.playLengthCounter && this.playMode === this.MODE_IRQ && (this.irqGenerated = !0))
            },
            nextSample: function() {
                this.data = this.papu.nes.mmap.load(this.playAddress), this.papu.nes.cpu.haltCycles(4), this.playLengthCounter--, this.playAddress++, this.playAddress > 65535 && (this.playAddress = 32768), this.hasSample = !0
            },
            writeReg: function(t, e) {
                16400 === t ? (e >> 6 == 0 ? this.playMode = this.MODE_NORMAL : 1 == (e >> 6 & 1) ? this.playMode = this.MODE_LOOP : e >> 6 == 2 && (this.playMode = this.MODE_IRQ), 0 == (128 & e) && (this.irqGenerated = !1), this.dmaFrequency = this.papu.getDmcFrequency(15 & e)) : 16401 === t ? (this.deltaCounter = e >> 1 & 63, this.dacLsb = 1 & e, this.sample = (this.deltaCounter << 1) + this.dacLsb) : 16402 === t ? (this.playStartAddress = e << 6 | 49152, this.playAddress = this.playStartAddress, this.reg4012 = e) : 16403 === t ? (this.playLength = 1 + (e << 4), this.playLengthCounter = this.playLength, this.reg4013 = e) : 16405 === t && (0 == (e >> 4 & 1) ? this.playLengthCounter = 0 : (this.playAddress = this.playStartAddress, this.playLengthCounter = this.playLength), this.irqGenerated = !1)
            },
            setEnabled: function(t) {
                !this.isEnabled && t && (this.playLengthCounter = this.playLength), this.isEnabled = t
            },
            getLengthStatus: function() {
                return 0 !== this.playLengthCounter && this.isEnabled ? 1 : 0
            },
            getIrqStatus: function() {
                return this.irqGenerated ? 1 : 0
            },
            reset: function() {
                this.isEnabled = !1, this.irqGenerated = !1, this.playMode = this.MODE_NORMAL, this.dmaFrequency = 0, this.dmaCounter = 0, this.deltaCounter = 0, this.playStartAddress = 0, this.playAddress = 0, this.playLength = 0, this.playLengthCounter = 0, this.sample = 0, this.dacLsb = 0, this.shiftCounter = 0, this.reg4012 = 0, this.reg4013 = 0, this.data = 0
            }
        };
        var n = function(t) {
            this.papu = t, this.isEnabled = null, this.envDecayDisable = null, this.envDecayLoopEnable = null, this.lengthCounterEnable = null, this.envReset = null, this.shiftNow = null, this.lengthCounter = null, this.progTimerCount = null, this.progTimerMax = null, this.envDecayRate = null, this.envDecayCounter = null, this.envVolume = null, this.masterVolume = null, this.shiftReg = 16384, this.randomBit = null, this.randomMode = null, this.sampleValue = null, this.accValue = 0, this.accCount = 1, this.tmp = null, this.reset()
        };
        n.prototype = {
            reset: function() {
                this.progTimerCount = 0, this.progTimerMax = 0, this.isEnabled = !1, this.lengthCounter = 0, this.lengthCounterEnable = !1, this.envDecayDisable = !1, this.envDecayLoopEnable = !1, this.shiftNow = !1, this.envDecayRate = 0, this.envDecayCounter = 0, this.envVolume = 0, this.masterVolume = 0, this.shiftReg = 1, this.randomBit = 0, this.randomMode = 0, this.sampleValue = 0, this.tmp = 0
            },
            clockLengthCounter: function() {
                this.lengthCounterEnable && this.lengthCounter > 0 && (this.lengthCounter--, 0 === this.lengthCounter && this.updateSampleValue())
            },
            clockEnvDecay: function() {
                this.envReset ? (this.envReset = !1, this.envDecayCounter = this.envDecayRate + 1, this.envVolume = 15) : --this.envDecayCounter <= 0 && (this.envDecayCounter = this.envDecayRate + 1, this.envVolume > 0 ? this.envVolume-- : this.envVolume = this.envDecayLoopEnable ? 15 : 0), this.envDecayDisable ? this.masterVolume = this.envDecayRate : this.masterVolume = this.envVolume, this.updateSampleValue()
            },
            updateSampleValue: function() {
                this.isEnabled && this.lengthCounter > 0 && (this.sampleValue = this.randomBit * this.masterVolume)
            },
            writeReg: function(t, e) {
                16396 === t ? (this.envDecayDisable = 0 != (16 & e), this.envDecayRate = 15 & e, this.envDecayLoopEnable = 0 != (32 & e), this.lengthCounterEnable = 0 == (32 & e), this.envDecayDisable ? this.masterVolume = this.envDecayRate : this.masterVolume = this.envVolume) : 16398 === t ? (this.progTimerMax = this.papu.getNoiseWaveLength(15 & e), this.randomMode = e >> 7) : 16399 === t && (this.lengthCounter = this.papu.getLengthMax(248 & e), this.envReset = !0)
            },
            setEnabled: function(t) {
                this.isEnabled = t, t || (this.lengthCounter = 0), this.updateSampleValue()
            },
            getLengthStatus: function() {
                return 0 !== this.lengthCounter && this.isEnabled ? 1 : 0
            }
        };
        var r = function(t, e) {
            this.papu = t, this.dutyLookup = [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], this.impLookup = [1, -1, 0, 0, 0, 0, 0, 0, 1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0], this.sqr1 = e, this.isEnabled = null, this.lengthCounterEnable = null, this.sweepActive = null, this.envDecayDisable = null, this.envDecayLoopEnable = null, this.envReset = null, this.sweepCarry = null, this.updateSweepPeriod = null, this.progTimerCount = null, this.progTimerMax = null, this.lengthCounter = null, this.squareCounter = null, this.sweepCounter = null, this.sweepCounterMax = null, this.sweepMode = null, this.sweepShiftAmount = null, this.envDecayRate = null, this.envDecayCounter = null, this.envVolume = null, this.masterVolume = null, this.dutyMode = null, this.sweepResult = null, this.sampleValue = null, this.vol = null, this.reset()
        };
        r.prototype = {
            reset: function() {
                this.progTimerCount = 0, this.progTimerMax = 0, this.lengthCounter = 0, this.squareCounter = 0, this.sweepCounter = 0, this.sweepCounterMax = 0, this.sweepMode = 0, this.sweepShiftAmount = 0, this.envDecayRate = 0, this.envDecayCounter = 0, this.envVolume = 0, this.masterVolume = 0, this.dutyMode = 0, this.vol = 0, this.isEnabled = !1, this.lengthCounterEnable = !1, this.sweepActive = !1, this.sweepCarry = !1, this.envDecayDisable = !1, this.envDecayLoopEnable = !1
            },
            clockLengthCounter: function() {
                this.lengthCounterEnable && this.lengthCounter > 0 && (this.lengthCounter--, 0 === this.lengthCounter && this.updateSampleValue())
            },
            clockEnvDecay: function() {
                this.envReset ? (this.envReset = !1, this.envDecayCounter = this.envDecayRate + 1, this.envVolume = 15) : --this.envDecayCounter <= 0 && (this.envDecayCounter = this.envDecayRate + 1, this.envVolume > 0 ? this.envVolume-- : this.envVolume = this.envDecayLoopEnable ? 15 : 0), this.envDecayDisable ? this.masterVolume = this.envDecayRate : this.masterVolume = this.envVolume, this.updateSampleValue()
            },
            clockSweep: function() {
                --this.sweepCounter <= 0 && (this.sweepCounter = this.sweepCounterMax + 1, this.sweepActive && this.sweepShiftAmount > 0 && this.progTimerMax > 7 && (this.sweepCarry = !1, 0 === this.sweepMode ? (this.progTimerMax += this.progTimerMax >> this.sweepShiftAmount, this.progTimerMax > 4095 && (this.progTimerMax = 4095, this.sweepCarry = !0)) : this.progTimerMax = this.progTimerMax - ((this.progTimerMax >> this.sweepShiftAmount) - (this.sqr1 ? 1 : 0)))), this.updateSweepPeriod && (this.updateSweepPeriod = !1, this.sweepCounter = this.sweepCounterMax + 1)
            },
            updateSampleValue: function() {
                this.isEnabled && this.lengthCounter > 0 && this.progTimerMax > 7 ? 0 === this.sweepMode && this.progTimerMax + (this.progTimerMax >> this.sweepShiftAmount) > 4095 ? this.sampleValue = 0 : this.sampleValue = this.masterVolume * this.dutyLookup[(this.dutyMode << 3) + this.squareCounter] : this.sampleValue = 0
            },
            writeReg: function(t, e) {
                var i = this.sqr1 ? 0 : 4;
                t === 16384 + i ? (this.envDecayDisable = 0 != (16 & e), this.envDecayRate = 15 & e, this.envDecayLoopEnable = 0 != (32 & e), this.dutyMode = e >> 6 & 3, this.lengthCounterEnable = 0 == (32 & e), this.envDecayDisable ? this.masterVolume = this.envDecayRate : this.masterVolume = this.envVolume, this.updateSampleValue()) : t === 16385 + i ? (this.sweepActive = 0 != (128 & e), this.sweepCounterMax = e >> 4 & 7, this.sweepMode = e >> 3 & 1, this.sweepShiftAmount = 7 & e, this.updateSweepPeriod = !0) : t === 16386 + i ? (this.progTimerMax &= 1792, this.progTimerMax |= e) : t === 16387 + i && (this.progTimerMax &= 255, this.progTimerMax |= (7 & e) << 8, this.isEnabled && (this.lengthCounter = this.papu.getLengthMax(248 & e)), this.envReset = !0)
            },
            setEnabled: function(t) {
                this.isEnabled = t, t || (this.lengthCounter = 0), this.updateSampleValue()
            },
            getLengthStatus: function() {
                return 0 !== this.lengthCounter && this.isEnabled ? 1 : 0
            }
        };
        var o = function(t) {
            this.papu = t, this.isEnabled = null, this.sampleCondition = null, this.lengthCounterEnable = null, this.lcHalt = null, this.lcControl = null, this.progTimerCount = null, this.progTimerMax = null, this.triangleCounter = null, this.lengthCounter = null, this.linearCounter = null, this.lcLoadValue = null, this.sampleValue = null, this.tmp = null, this.reset()
        };
        o.prototype = {
            reset: function() {
                this.progTimerCount = 0, this.progTimerMax = 0, this.triangleCounter = 0, this.isEnabled = !1, this.sampleCondition = !1, this.lengthCounter = 0, this.lengthCounterEnable = !1, this.linearCounter = 0, this.lcLoadValue = 0, this.lcHalt = !0, this.lcControl = !1, this.tmp = 0, this.sampleValue = 15
            },
            clockLengthCounter: function() {
                this.lengthCounterEnable && this.lengthCounter > 0 && (this.lengthCounter--, 0 === this.lengthCounter && this.updateSampleCondition())
            },
            clockLinearCounter: function() {
                this.lcHalt ? (this.linearCounter = this.lcLoadValue, this.updateSampleCondition()) : this.linearCounter > 0 && (this.linearCounter--, this.updateSampleCondition()), this.lcControl || (this.lcHalt = !1)
            },
            getLengthStatus: function() {
                return 0 !== this.lengthCounter && this.isEnabled ? 1 : 0
            },
            readReg: function(t) {
                return 0
            },
            writeReg: function(t, e) {
                16392 === t ? (this.lcControl = 0 != (128 & e), this.lcLoadValue = 127 & e, this.lengthCounterEnable = !this.lcControl) : 16394 === t ? (this.progTimerMax &= 1792, this.progTimerMax |= e) : 16395 === t && (this.progTimerMax &= 255, this.progTimerMax |= (7 & e) << 8, this.lengthCounter = this.papu.getLengthMax(248 & e), this.lcHalt = !0), this.updateSampleCondition()
            },
            clockProgrammableTimer: function(t) {
                if (this.progTimerMax > 0)
                    for (this.progTimerCount += t; this.progTimerMax > 0 && this.progTimerCount >= this.progTimerMax;) this.progTimerCount -= this.progTimerMax, this.isEnabled && this.lengthCounter > 0 && this.linearCounter > 0 && this.clockTriangleGenerator()
            },
            clockTriangleGenerator: function() {
                this.triangleCounter++, this.triangleCounter &= 31
            },
            setEnabled: function(t) {
                this.isEnabled = t, t || (this.lengthCounter = 0), this.updateSampleCondition()
            },
            updateSampleCondition: function() {
                this.sampleCondition = this.isEnabled && this.progTimerMax > 7 && this.linearCounter > 0 && this.lengthCounter > 0
            }
        }, t.exports = i
    },
    801: function(t, e, i) {
        var s = i(802),
            n = i(693),
            r = function(t) {
                this.nes = t, this.mapperName = new Array(92);
                for (var e = 0; e < 92; e++) this.mapperName[e] = "Unknown Mapper";
                this.mapperName[0] = "Direct Access", this.mapperName[1] = "Nintendo MMC1", this.mapperName[2] = "UNROM", this.mapperName[3] = "CNROM", this.mapperName[4] = "Nintendo MMC3", this.mapperName[5] = "Nintendo MMC5", this.mapperName[6] = "FFE F4xxx", this.mapperName[7] = "AOROM", this.mapperName[8] = "FFE F3xxx", this.mapperName[9] = "Nintendo MMC2", this.mapperName[10] = "Nintendo MMC4", this.mapperName[11] = "Color Dreams Chip", this.mapperName[12] = "FFE F6xxx", this.mapperName[15] = "100-in-1 switch", this.mapperName[16] = "Bandai chip", this.mapperName[17] = "FFE F8xxx", this.mapperName[18] = "Jaleco SS8806 chip", this.mapperName[19] = "Namcot 106 chip", this.mapperName[20] = "Famicom Disk System", this.mapperName[21] = "Konami VRC4a", this.mapperName[22] = "Konami VRC2a", this.mapperName[23] = "Konami VRC2a", this.mapperName[24] = "Konami VRC6", this.mapperName[25] = "Konami VRC4b", this.mapperName[32] = "Irem G-101 chip", this.mapperName[33] = "Taito TC0190/TC0350", this.mapperName[34] = "32kB ROM switch", this.mapperName[64] = "Tengen RAMBO-1 chip", this.mapperName[65] = "Irem H-3001 chip", this.mapperName[66] = "GNROM switch", this.mapperName[67] = "SunSoft3 chip", this.mapperName[68] = "SunSoft4 chip", this.mapperName[69] = "SunSoft5 FME-7 chip", this.mapperName[71] = "Camerica chip", this.mapperName[78] = "Irem 74HC161/32-based", this.mapperName[91] = "Pirate HK-SF3 chip"
            };
        r.prototype = {
            VERTICAL_MIRRORING: 0,
            HORIZONTAL_MIRRORING: 1,
            FOURSCREEN_MIRRORING: 2,
            SINGLESCREEN_MIRRORING: 3,
            SINGLESCREEN_MIRRORING2: 4,
            SINGLESCREEN_MIRRORING3: 5,
            SINGLESCREEN_MIRRORING4: 6,
            CHRROM_MIRRORING: 7,
            header: null,
            rom: null,
            vrom: null,
            vromTile: null,
            romCount: null,
            vromCount: null,
            mirroring: null,
            batteryRam: null,
            trainer: null,
            fourScreen: null,
            mapperType: null,
            valid: !1,
            load: function(t) {
                var e, i, s;
                if (-1 === t.indexOf("NES")) throw new Error("Not a valid NES ROM.");
                for (this.header = new Array(16), e = 0; e < 16; e++) this.header[e] = 255 & t.charCodeAt(e);
                this.romCount = this.header[4], this.vromCount = 2 * this.header[5], this.mirroring = 0 != (1 & this.header[6]) ? 1 : 0, this.batteryRam = 0 != (2 & this.header[6]), this.trainer = 0 != (4 & this.header[6]), this.fourScreen = 0 != (8 & this.header[6]), this.mapperType = this.header[6] >> 4 | 240 & this.header[7];
                var r = !1;
                for (e = 8; e < 16; e++)
                    if (0 !== this.header[e]) {
                        r = !0;
                        break
                    } r && (this.mapperType &= 15), this.rom = new Array(this.romCount);
                var o, a, h = 16;
                for (e = 0; e < this.romCount; e++) {
                    for (this.rom[e] = new Array(16384), i = 0; i < 16384 && !(h + i >= t.length); i++) this.rom[e][i] = 255 & t.charCodeAt(h + i);
                    h += 16384
                }
                for (this.vrom = new Array(this.vromCount), e = 0; e < this.vromCount; e++) {
                    for (this.vrom[e] = new Array(4096), i = 0; i < 4096 && !(h + i >= t.length); i++) this.vrom[e][i] = 255 & t.charCodeAt(h + i);
                    h += 4096
                }
                for (this.vromTile = new Array(this.vromCount), e = 0; e < this.vromCount; e++)
                    for (this.vromTile[e] = new Array(256), i = 0; i < 256; i++) this.vromTile[e][i] = new n;
                for (s = 0; s < this.vromCount; s++)
                    for (e = 0; e < 4096; e++) o = e >> 4, (a = e % 16) < 8 ? this.vromTile[s][o].setScanline(a, this.vrom[s][e], this.vrom[s][e + 8]) : this.vromTile[s][o].setScanline(a - 8, this.vrom[s][e - 8], this.vrom[s][e]);
                this.valid = !0
            },
            getMirroringType: function() {
                return this.fourScreen ? this.FOURSCREEN_MIRRORING : 0 === this.mirroring ? this.HORIZONTAL_MIRRORING : this.VERTICAL_MIRRORING
            },
            getMapperName: function() {
                return this.mapperType >= 0 && this.mapperType < this.mapperName.length ? this.mapperName[this.mapperType] : "Unknown Mapper, " + this.mapperType
            },
            mapperSupported: function() {
                return void 0 !== s[this.mapperType]
            },
            createMapper: function() {
                if (this.mapperSupported()) return new s[this.mapperType](this.nes);
                throw new Error("This ROM uses a mapper not supported by JSNES: " + this.getMapperName() + "(" + this.mapperType + ")")
            }
        }, t.exports = r
    },
    802: function(t, e, i) {
        var s = i(652),
            n = {
                0: function(t) {
                    this.nes = t
                }
            };
        n[0].prototype = {
            reset: function() {
                this.joy1StrobeState = 0, this.joy2StrobeState = 0, this.joypadLastWrite = 0, this.zapperFired = !1, this.zapperX = null, this.zapperY = null
            },
            write: function(t, e) {
                t < 8192 ? this.nes.cpu.mem[2047 & t] = e : t > 16407 ? (this.nes.cpu.mem[t] = e, t >= 24576 && t < 32768 && this.nes.opts.onBatteryRamWrite(t, e)) : t > 8199 && t < 16384 ? this.regWrite(8192 + (7 & t), e) : this.regWrite(t, e)
            },
            writelow: function(t, e) {
                t < 8192 ? this.nes.cpu.mem[2047 & t] = e : t > 16407 ? this.nes.cpu.mem[t] = e : t > 8199 && t < 16384 ? this.regWrite(8192 + (7 & t), e) : this.regWrite(t, e)
            },
            load: function(t) {
                return (t &= 65535) > 16407 ? this.nes.cpu.mem[t] : t >= 8192 ? this.regLoad(t) : this.nes.cpu.mem[2047 & t]
            },
            regLoad: function(t) {
                switch (t >> 12) {
                    case 0:
                    case 1:
                        break;
                    case 2:
                    case 3:
                        switch (7 & t) {
                            case 0:
                                return this.nes.cpu.mem[8192];
                            case 1:
                                return this.nes.cpu.mem[8193];
                            case 2:
                                return this.nes.ppu.readStatusRegister();
                            case 3:
                                return 0;
                            case 4:
                                return this.nes.ppu.sramLoad();
                            case 5:
                            case 6:
                                return 0;
                            case 7:
                                return this.nes.ppu.vramLoad()
                        }
                        break;
                    case 4:
                        switch (t - 16405) {
                            case 0:
                                return this.nes.papu.readReg(t);
                            case 1:
                                return this.joy1Read();
                            case 2:
                                var e;
                                return e = null !== this.zapperX && null !== this.zapperY && this.nes.ppu.isPixelWhite(this.zapperX, this.zapperY) ? 0 : 8, this.zapperFired && (e |= 16), 65535 & (this.joy2Read() | e)
                        }
                }
                return 0
            },
            regWrite: function(t, e) {
                switch (t) {
                    case 8192:
                        this.nes.cpu.mem[t] = e, this.nes.ppu.updateControlReg1(e);
                        break;
                    case 8193:
                        this.nes.cpu.mem[t] = e, this.nes.ppu.updateControlReg2(e);
                        break;
                    case 8195:
                        this.nes.ppu.writeSRAMAddress(e);
                        break;
                    case 8196:
                        this.nes.ppu.sramWrite(e);
                        break;
                    case 8197:
                        this.nes.ppu.scrollWrite(e);
                        break;
                    case 8198:
                        this.nes.ppu.writeVRAMAddress(e);
                        break;
                    case 8199:
                        this.nes.ppu.vramWrite(e);
                        break;
                    case 16404:
                        this.nes.ppu.sramDMA(e);
                        break;
                    case 16405:
                        this.nes.papu.writeReg(t, e);
                        break;
                    case 16406:
                        0 == (1 & e) && 1 == (1 & this.joypadLastWrite) && (this.joy1StrobeState = 0, this.joy2StrobeState = 0), this.joypadLastWrite = e;
                        break;
                    case 16407:
                        this.nes.papu.writeReg(t, e);
                        break;
                    default:
                        t >= 16384 && t <= 16407 && this.nes.papu.writeReg(t, e)
                }
            },
            joy1Read: function() {
                var t;
                switch (this.joy1StrobeState) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        t = this.nes.controllers[1].state[this.joy1StrobeState];
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        t = 0;
                        break;
                    case 19:
                        t = 1;
                        break;
                    default:
                        t = 0
                }
                return this.joy1StrobeState++, 24 === this.joy1StrobeState && (this.joy1StrobeState = 0), t
            },
            joy2Read: function() {
                var t;
                switch (this.joy2StrobeState) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        t = this.nes.controllers[2].state[this.joy2StrobeState];
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        t = 0;
                        break;
                    case 19:
                        t = 1;
                        break;
                    default:
                        t = 0
                }
                return this.joy2StrobeState++, 24 === this.joy2StrobeState && (this.joy2StrobeState = 0), t
            },
            loadROM: function() {
                if (!this.nes.rom.valid || this.nes.rom.romCount < 1) throw new Error("NoMapper: Invalid ROM! Unable to load.");
                this.loadPRGROM(), this.loadCHRROM(), this.loadBatteryRam(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)
            },
            loadPRGROM: function() {
                this.nes.rom.romCount > 1 ? (this.loadRomBank(0, 32768), this.loadRomBank(1, 49152)) : (this.loadRomBank(0, 32768), this.loadRomBank(0, 49152))
            },
            loadCHRROM: function() {
                this.nes.rom.vromCount > 0 && (1 === this.nes.rom.vromCount ? (this.loadVromBank(0, 0), this.loadVromBank(0, 4096)) : (this.loadVromBank(0, 0), this.loadVromBank(1, 4096)))
            },
            loadBatteryRam: function() {
                if (this.nes.rom.batteryRam) {
                    var t = this.nes.rom.batteryRam;
                    null !== t && 8192 === t.length && s.copyArrayElements(t, 0, this.nes.cpu.mem, 24576, 8192)
                }
            },
            loadRomBank: function(t, e) {
                t %= this.nes.rom.romCount, s.copyArrayElements(this.nes.rom.rom[t], 0, this.nes.cpu.mem, e, 16384)
            },
            loadVromBank: function(t, e) {
                if (0 !== this.nes.rom.vromCount) {
                    this.nes.ppu.triggerRendering(), s.copyArrayElements(this.nes.rom.vrom[t % this.nes.rom.vromCount], 0, this.nes.ppu.vramMem, e, 4096);
                    var i = this.nes.rom.vromTile[t % this.nes.rom.vromCount];
                    s.copyArrayElements(i, 0, this.nes.ppu.ptTile, e >> 4, 256)
                }
            },
            load32kRomBank: function(t, e) {
                this.loadRomBank(2 * t % this.nes.rom.romCount, e), this.loadRomBank((2 * t + 1) % this.nes.rom.romCount, e + 16384)
            },
            load8kVromBank: function(t, e) {
                0 !== this.nes.rom.vromCount && (this.nes.ppu.triggerRendering(), this.loadVromBank(t % this.nes.rom.vromCount, e), this.loadVromBank((t + 1) % this.nes.rom.vromCount, e + 4096))
            },
            load1kVromBank: function(t, e) {
                if (0 !== this.nes.rom.vromCount) {
                    this.nes.ppu.triggerRendering();
                    var i = Math.floor(t / 4) % this.nes.rom.vromCount,
                        n = t % 4 * 1024;
                    s.copyArrayElements(this.nes.rom.vrom[i], 0, this.nes.ppu.vramMem, n, 1024);
                    for (var r = this.nes.rom.vromTile[i], o = e >> 4, a = 0; a < 64; a++) this.nes.ppu.ptTile[o + a] = r[(t % 4 << 6) + a]
                }
            },
            load2kVromBank: function(t, e) {
                if (0 !== this.nes.rom.vromCount) {
                    this.nes.ppu.triggerRendering();
                    var i = Math.floor(t / 2) % this.nes.rom.vromCount,
                        n = t % 2 * 2048;
                    s.copyArrayElements(this.nes.rom.vrom[i], n, this.nes.ppu.vramMem, e, 2048);
                    for (var r = this.nes.rom.vromTile[i], o = e >> 4, a = 0; a < 128; a++) this.nes.ppu.ptTile[o + a] = r[(t % 2 << 7) + a]
                }
            },
            load8kRomBank: function(t, e) {
                var i = Math.floor(t / 2) % this.nes.rom.romCount,
                    n = t % 2 * 8192;
                s.copyArrayElements(this.nes.rom.rom[i], n, this.nes.cpu.mem, e, 8192)
            },
            clockIrqCounter: function() {},
            latchAccess: function(t) {},
            toJSON: function() {
                return {
                    joy1StrobeState: this.joy1StrobeState,
                    joy2StrobeState: this.joy2StrobeState,
                    joypadLastWrite: this.joypadLastWrite
                }
            },
            fromJSON: function(t) {
                this.joy1StrobeState = t.joy1StrobeState, this.joy2StrobeState = t.joy2StrobeState, this.joypadLastWrite = t.joypadLastWrite
            }
        }, n[1] = function(t) {
            this.nes = t
        }, n[1].prototype = new n[0], n[1].prototype.reset = function() {
            n[0].prototype.reset.apply(this), this.regBuffer = 0, this.regBufferCounter = 0, this.mirroring = 0, this.oneScreenMirroring = 0, this.prgSwitchingArea = 1, this.prgSwitchingSize = 1, this.vromSwitchingSize = 0, this.romSelectionReg0 = 0, this.romSelectionReg1 = 0, this.romBankSelect = 0
        }, n[1].prototype.write = function(t, e) {
            t < 32768 ? n[0].prototype.write.apply(this, arguments) : 0 != (128 & e) ? (this.regBufferCounter = 0, this.regBuffer = 0, 0 === this.getRegNumber(t) && (this.prgSwitchingArea = 1, this.prgSwitchingSize = 1)) : (this.regBuffer = this.regBuffer & 255 - (1 << this.regBufferCounter) | (1 & e) << this.regBufferCounter, this.regBufferCounter++, 5 === this.regBufferCounter && (this.setReg(this.getRegNumber(t), this.regBuffer), this.regBuffer = 0, this.regBufferCounter = 0))
        }, n[1].prototype.setReg = function(t, e) {
            var i;
            switch (t) {
                case 0:
                    (i = 3 & e) !== this.mirroring && (this.mirroring = i, 0 == (2 & this.mirroring) ? this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING) : 0 != (1 & this.mirroring) ? this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING) : this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING)), this.prgSwitchingArea = e >> 2 & 1, this.prgSwitchingSize = e >> 3 & 1, this.vromSwitchingSize = e >> 4 & 1;
                    break;
                case 1:
                    this.romSelectionReg0 = e >> 4 & 1, this.nes.rom.vromCount > 0 && (0 === this.vromSwitchingSize ? 0 === this.romSelectionReg0 ? this.load8kVromBank(15 & e, 0) : this.load8kVromBank(Math.floor(this.nes.rom.vromCount / 2) + (15 & e), 0) : 0 === this.romSelectionReg0 ? this.loadVromBank(15 & e, 0) : this.loadVromBank(Math.floor(this.nes.rom.vromCount / 2) + (15 & e), 0));
                    break;
                case 2:
                    this.romSelectionReg1 = e >> 4 & 1, this.nes.rom.vromCount > 0 && 1 === this.vromSwitchingSize && (0 === this.romSelectionReg1 ? this.loadVromBank(15 & e, 4096) : this.loadVromBank(Math.floor(this.nes.rom.vromCount / 2) + (15 & e), 4096));
                    break;
                default:
                    var s;
                    i = 15 & e;
                    var n = 0;
                    this.nes.rom.romCount >= 32 ? 0 === this.vromSwitchingSize ? 1 === this.romSelectionReg0 && (n = 16) : n = (this.romSelectionReg0 | this.romSelectionReg1 << 1) << 3 : this.nes.rom.romCount >= 16 && 1 === this.romSelectionReg0 && (n = 8), 0 === this.prgSwitchingSize ? (s = n + (15 & e), this.load32kRomBank(s, 32768)) : (s = 2 * n + (15 & e), 0 === this.prgSwitchingArea ? this.loadRomBank(s, 49152) : this.loadRomBank(s, 32768))
            }
        }, n[1].prototype.getRegNumber = function(t) {
            return t >= 32768 && t <= 40959 ? 0 : t >= 40960 && t <= 49151 ? 1 : t >= 49152 && t <= 57343 ? 2 : 3
        }, n[1].prototype.loadROM = function() {
            if (!this.nes.rom.valid) throw new Error("MMC1: Invalid ROM! Unable to load.");
            this.loadRomBank(0, 32768), this.loadRomBank(this.nes.rom.romCount - 1, 49152), this.loadCHRROM(), this.loadBatteryRam(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)
        }, n[1].prototype.switchLowHighPrgRom = function(t) {}, n[1].prototype.switch16to32 = function() {}, n[1].prototype.switch32to16 = function() {}, n[1].prototype.toJSON = function() {
            var t = n[0].prototype.toJSON.apply(this);
            return t.mirroring = this.mirroring, t.oneScreenMirroring = this.oneScreenMirroring, t.prgSwitchingArea = this.prgSwitchingArea, t.prgSwitchingSize = this.prgSwitchingSize, t.vromSwitchingSize = this.vromSwitchingSize, t.romSelectionReg0 = this.romSelectionReg0, t.romSelectionReg1 = this.romSelectionReg1, t.romBankSelect = this.romBankSelect, t.regBuffer = this.regBuffer, t.regBufferCounter = this.regBufferCounter, t
        }, n[1].prototype.fromJSON = function(t) {
            n[0].prototype.fromJSON.apply(this, arguments), this.mirroring = t.mirroring, this.oneScreenMirroring = t.oneScreenMirroring, this.prgSwitchingArea = t.prgSwitchingArea, this.prgSwitchingSize = t.prgSwitchingSize, this.vromSwitchingSize = t.vromSwitchingSize, this.romSelectionReg0 = t.romSelectionReg0, this.romSelectionReg1 = t.romSelectionReg1, this.romBankSelect = t.romBankSelect, this.regBuffer = t.regBuffer, this.regBufferCounter = t.regBufferCounter
        }, n[2] = function(t) {
            this.nes = t
        }, n[2].prototype = new n[0], n[2].prototype.write = function(t, e) {
            t < 32768 ? n[0].prototype.write.apply(this, arguments) : this.loadRomBank(e, 32768)
        }, n[2].prototype.loadROM = function() {
            if (!this.nes.rom.valid) throw new Error("UNROM: Invalid ROM! Unable to load.");
            this.loadRomBank(0, 32768), this.loadRomBank(this.nes.rom.romCount - 1, 49152), this.loadCHRROM(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)
        }, n[3] = function(t) {
            this.nes = t
        }, n[3].prototype = new n[0], n[3].prototype.write = function(t, e) {
            if (t < 32768) n[0].prototype.write.apply(this, arguments);
            else {
                var i = e % (this.nes.rom.vromCount / 2) * 2;
                this.loadVromBank(i, 0), this.loadVromBank(i + 1, 4096), this.load8kVromBank(2 * e, 0)
            }
        }, n[4] = function(t) {
            this.nes = t, this.CMD_SEL_2_1K_VROM_0000 = 0, this.CMD_SEL_2_1K_VROM_0800 = 1, this.CMD_SEL_1K_VROM_1000 = 2, this.CMD_SEL_1K_VROM_1400 = 3, this.CMD_SEL_1K_VROM_1800 = 4, this.CMD_SEL_1K_VROM_1C00 = 5, this.CMD_SEL_ROM_PAGE1 = 6, this.CMD_SEL_ROM_PAGE2 = 7, this.command = null, this.prgAddressSelect = null, this.chrAddressSelect = null, this.pageNumber = null, this.irqCounter = null, this.irqLatchValue = null, this.irqEnable = null, this.prgAddressChanged = !1
        }, n[4].prototype = new n[0], n[4].prototype.write = function(t, e) {
            if (t < 32768) n[0].prototype.write.apply(this, arguments);
            else switch (t) {
                case 32768:
                    this.command = 7 & e;
                    var i = e >> 6 & 1;
                    i !== this.prgAddressSelect && (this.prgAddressChanged = !0), this.prgAddressSelect = i, this.chrAddressSelect = e >> 7 & 1;
                    break;
                case 32769:
                    this.executeCommand(this.command, e);
                    break;
                case 40960:
                    0 != (1 & e) ? this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING) : this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING);
                    break;
                case 40961:
                    break;
                case 49152:
                    this.irqCounter = e;
                    break;
                case 49153:
                    this.irqLatchValue = e;
                    break;
                case 57344:
                    this.irqEnable = 0;
                    break;
                case 57345:
                    this.irqEnable = 1
            }
        }, n[4].prototype.executeCommand = function(t, e) {
            switch (t) {
                case this.CMD_SEL_2_1K_VROM_0000:
                    0 === this.chrAddressSelect ? (this.load1kVromBank(e, 0), this.load1kVromBank(e + 1, 1024)) : (this.load1kVromBank(e, 4096), this.load1kVromBank(e + 1, 5120));
                    break;
                case this.CMD_SEL_2_1K_VROM_0800:
                    0 === this.chrAddressSelect ? (this.load1kVromBank(e, 2048), this.load1kVromBank(e + 1, 3072)) : (this.load1kVromBank(e, 6144), this.load1kVromBank(e + 1, 7168));
                    break;
                case this.CMD_SEL_1K_VROM_1000:
                    0 === this.chrAddressSelect ? this.load1kVromBank(e, 4096) : this.load1kVromBank(e, 0);
                    break;
                case this.CMD_SEL_1K_VROM_1400:
                    0 === this.chrAddressSelect ? this.load1kVromBank(e, 5120) : this.load1kVromBank(e, 1024);
                    break;
                case this.CMD_SEL_1K_VROM_1800:
                    0 === this.chrAddressSelect ? this.load1kVromBank(e, 6144) : this.load1kVromBank(e, 2048);
                    break;
                case this.CMD_SEL_1K_VROM_1C00:
                    0 === this.chrAddressSelect ? this.load1kVromBank(e, 7168) : this.load1kVromBank(e, 3072);
                    break;
                case this.CMD_SEL_ROM_PAGE1:
                    this.prgAddressChanged && (0 === this.prgAddressSelect ? this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 49152) : this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 32768), this.prgAddressChanged = !1), 0 === this.prgAddressSelect ? this.load8kRomBank(e, 32768) : this.load8kRomBank(e, 49152);
                    break;
                case this.CMD_SEL_ROM_PAGE2:
                    this.load8kRomBank(e, 40960), this.prgAddressChanged && (0 === this.prgAddressSelect ? this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 49152) : this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 32768), this.prgAddressChanged = !1)
            }
        }, n[4].prototype.loadROM = function() {
            if (!this.nes.rom.valid) throw new Error("MMC3: Invalid ROM! Unable to load.");
            this.load8kRomBank(2 * (this.nes.rom.romCount - 1), 49152), this.load8kRomBank(2 * (this.nes.rom.romCount - 1) + 1, 57344), this.load8kRomBank(0, 32768), this.load8kRomBank(1, 40960), this.loadCHRROM(), this.loadBatteryRam(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)
        }, n[4].prototype.clockIrqCounter = function() {
            1 === this.irqEnable && (this.irqCounter--, this.irqCounter < 0 && (this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL), this.irqCounter = this.irqLatchValue))
        }, n[4].prototype.toJSON = function() {
            var t = n[0].prototype.toJSON.apply(this);
            return t.command = this.command, t.prgAddressSelect = this.prgAddressSelect, t.chrAddressSelect = this.chrAddressSelect, t.pageNumber = this.pageNumber, t.irqCounter = this.irqCounter, t.irqLatchValue = this.irqLatchValue, t.irqEnable = this.irqEnable, t.prgAddressChanged = this.prgAddressChanged, t
        }, n[4].prototype.fromJSON = function(t) {
            n[0].prototype.fromJSON.apply(this, arguments), this.command = t.command, this.prgAddressSelect = t.prgAddressSelect, this.chrAddressSelect = t.chrAddressSelect, this.pageNumber = t.pageNumber, this.irqCounter = t.irqCounter, this.irqLatchValue = t.irqLatchValue, this.irqEnable = t.irqEnable, this.prgAddressChanged = t.prgAddressChanged
        }, n[5] = function(t) {
            this.nes = t
        }, n[5].prototype = new n[0], n[5].prototype.write = function(t, e) {
            t < 32768 ? n[0].prototype.write.apply(this, arguments) : this.load8kVromBank(e, 0)
        }, n[5].prototype.write = function(t, e) {
            if (t < 20480) n[0].prototype.write.apply(this, arguments);
            else switch (t) {
                case 20736:
                    this.prg_size = 3 & e;
                    break;
                case 20737:
                    this.chr_size = 3 & e;
                    break;
                case 20738:
                    this.sram_we_a = 3 & e;
                    break;
                case 20739:
                    this.sram_we_b = 3 & e;
                    break;
                case 20740:
                    this.graphic_mode = 3 & e;
                    break;
                case 20741:
                    this.nametable_mode = e, this.nametable_type[0] = 3 & e, this.load1kVromBank(3 & e, 8192), e >>= 2, this.nametable_type[1] = 3 & e, this.load1kVromBank(3 & e, 9216), e >>= 2, this.nametable_type[2] = 3 & e, this.load1kVromBank(3 & e, 10240), e >>= 2, this.nametable_type[3] = 3 & e, this.load1kVromBank(3 & e, 11264);
                    break;
                case 20742:
                    this.fill_chr = e;
                    break;
                case 20743:
                    this.fill_pal = 3 & e;
                    break;
                case 20755:
                    this.SetBank_SRAM(3, 3 & e);
                    break;
                case 20756:
                case 20757:
                case 20758:
                case 20759:
                    this.SetBank_CPU(t, e);
                    break;
                case 20768:
                case 20769:
                case 20770:
                case 20771:
                case 20772:
                case 20773:
                case 20774:
                case 20775:
                    this.chr_mode = 0, this.chr_page[0][7 & t] = e, this.SetBank_PPU();
                    break;
                case 20776:
                case 20777:
                case 20778:
                case 20779:
                    this.chr_mode = 1, this.chr_page[1][0 + (3 & t)] = e, this.chr_page[1][4 + (3 & t)] = e, this.SetBank_PPU();
                    break;
                case 20992:
                    this.split_control = e;
                    break;
                case 20993:
                    this.split_scroll = e;
                    break;
                case 20994:
                    this.split_page = 63 & e;
                    break;
                case 20995:
                    this.irq_line = e, this.nes.cpu.ClearIRQ();
                    break;
                case 20996:
                    this.irq_enable = e, this.nes.cpu.ClearIRQ();
                    break;
                case 20997:
                    this.mult_a = e;
                    break;
                case 20998:
                    this.mult_b = e;
                    break;
                default:
                    t >= 20480 && t <= 20501 ? this.nes.papu.exWrite(t, e) : t >= 23552 && t <= 24575 ? 2 === this.graphic_mode || 3 !== this.graphic_mode && this.irq_status : t >= 24576 && t <= 32767 && 2 === this.sram_we_a && this.sram_we_b
            }
        }, n[5].prototype.loadROM = function() {
            if (!this.nes.rom.valid) throw new Error("UNROM: Invalid ROM! Unable to load.");
            this.load8kRomBank(2 * this.nes.rom.romCount - 1, 32768), this.load8kRomBank(2 * this.nes.rom.romCount - 1, 40960), this.load8kRomBank(2 * this.nes.rom.romCount - 1, 49152), this.load8kRomBank(2 * this.nes.rom.romCount - 1, 57344), this.loadCHRROM(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)
        }, n[7] = function(t) {
            this.nes = t
        }, n[7].prototype = new n[0], n[7].prototype.write = function(t, e) {
            t < 32768 ? n[0].prototype.write.apply(this, arguments) : (this.load32kRomBank(7 & e, 32768), 16 & e ? this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING2) : this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING))
        }, n[7].prototype.loadROM = function() {
            if (!this.nes.rom.valid) throw new Error("AOROM: Invalid ROM! Unable to load.");
            this.loadPRGROM(), this.loadCHRROM(), this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET)
        }, n[11] = function(t) {
            this.nes = t
        }, n[11].prototype = new n[0], n[11].prototype.write = function(t, e) {
            if (t < 32768) n[0].prototype.write.apply(this, arguments);
            else {
                var i = 2 * (15 & e) % this.nes.rom.romCount,
                    s = (2 * (15 & e) + 1) % this.nes.rom.romCount;
                if (this.loadRomBank(i, 32768), this.loadRomBank(s, 49152), this.nes.rom.vromCount > 0) {
                    var r = 2 * (e >> 4) % this.nes.rom.vromCount;
                    this.loadVromBank(r, 0), this.loadVromBank(r + 1, 4096)
                }
            }
        }, n[34] = function(t) {
            this.nes = t
        }, n[34].prototype = new n[0], n[34].prototype.write = function(t, e) {
            t < 32768 ? n[0].prototype.write.apply(this, arguments) : this.load32kRomBank(e, 32768)
        }, n[66] = function(t) {
            this.nes = t, console.log("Mapper 66")
        }, n[66].prototype = new n[0], n[66].prototype.write = function(t, e) {
            t < 32768 ? n[0].prototype.write.apply(this, arguments) : (this.load32kRomBank(e >> 4 & 3, 32768), this.load8kVromBank(2 * (3 & e), 0))
        }, t.exports = n
    },
    803: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }
            return function(e, i, s) {
                return i && t(e.prototype, i), s && t(e, s), e
            }
        }();
        var n = function() {
            function t(e) {
                var i = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.onAnimationFrame = function() {
                    if (i.calibrating && (null === i.calibrationStartTime ? (i.calibrationStartTime = (new Date).getTime(), i.calibrationCurrentFrames = 0) : i.calibrationCurrentFrames += 1, i.calibrationCurrentFrames === i.calibrationFrames)) {
                        i.calibrating = !1, now = (new Date).getTime();
                        var t = 1e3 / ((now - i.calibrationStartTime) / i.calibrationFrames);
                        (t <= i.desiredFPS - i.calibrationTolerance || t >= i.desiredFPS + i.calibrationTolerance) && (console.log("Enabling bodge mode. (Desired FPS is " + i.desiredFPS + ", actual FPS is " + t + ")"), i.startBodgeMode())
                    }
                    i.requestAnimationFrame(), i.running && (i.bodgeMode || i.onGenerateFrame(), i.onWriteFrame())
                }, this.startBodgeMode = function() {
                    i.bodgeMode = !0, i.bodgeInterval = setInterval(i.onBodge, 1e3 / i.desiredFPS)
                }, this.onBodge = function() {
                    i.running && i.onGenerateFrame()
                }, this.onGenerateFrame = e.onGenerateFrame, this.onWriteFrame = e.onWriteFrame, this.running = !1, this.bodgeMode = !1, this.desiredFPS = 60, this.calibrationDelay = 200, this.calibrationFrames = 10, this.calibrationTolerance = 5, this.calibrating = !1, this.calibrationStartTime = null, this.calibrationCurrentFrames = null
            }
            return s(t, [{
                key: "start",
                value: function() {
                    this.running = !0, this.requestAnimationFrame(), this.bodgeMode && this.startBodgeMode()
                }
            }, {
                key: "stop",
                value: function() {
                    this.running = !1, this._requestID && window.cancelAnimationFrame(this._requestID), this.bodgeInterval && clearInterval(this.bodgeInterval)
                }
            }, {
                key: "requestAnimationFrame",
                value: function() {
                    this._requestID = window.requestAnimationFrame(this.onAnimationFrame)
                }
            }]), t
        }();
        e.default = n
    },
    856: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ProgressBar = void 0;
        var s = function() {
            var t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
            return function(e, i, s, n) {
                var r = e && e.defaultProps,
                    o = arguments.length - 3;
                if (i || 0 === o || (i = {}), i && r)
                    for (var a in r) void 0 === i[a] && (i[a] = r[a]);
                else i || (i = r || {});
                if (1 === o) i.children = n;
                else if (o > 1) {
                    for (var h = Array(o), l = 0; l < o; l++) h[l] = arguments[l + 3];
                    i.children = h
                }
                return {
                    $$typeof: t,
                    type: e,
                    key: void 0 === s ? null : "" + s,
                    ref: null,
                    props: i,
                    _owner: null
                }
            }
        }();
        ! function(t) {
            t && t.__esModule
        }(i(1));
        e.ProgressBar = function(t) {
            var e = t.percent;
            return s("div", {
                className: "progress"
            }, void 0, s("div", {
                className: "progress-bar",
                style: {
                    width: e + "%"
                }
            }))
        }
    },
    857: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.KeySetting = void 0;
        var s = function() {
                var t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
                return function(e, i, s, n) {
                    var r = e && e.defaultProps,
                        o = arguments.length - 3;
                    if (i || 0 === o || (i = {}), i && r)
                        for (var a in r) void 0 === i[a] && (i[a] = r[a]);
                    else i || (i = r || {});
                    if (1 === o) i.children = n;
                    else if (o > 1) {
                        for (var h = Array(o), l = 0; l < o; l++) h[l] = arguments[l + 3];
                        i.children = h
                    }
                    return {
                        $$typeof: t,
                        type: e,
                        key: void 0 === s ? null : "" + s,
                        ref: null,
                        props: i,
                        _owner: null
                    }
                }
            }(),
            n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            r = l(i(1)),
            o = i(229),
            a = l(i(694)),
            h = i(630);

        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var u = {
                A: h.Controller.BUTTON_A,
                B: h.Controller.BUTTON_B,
                SELECT: h.Controller.BUTTON_SELECT,
                START: h.Controller.BUTTON_START,
                UP: h.Controller.BUTTON_UP,
                DOWN: h.Controller.BUTTON_DOWN,
                LEFT: h.Controller.BUTTON_LEFT,
                RIGHT: h.Controller.BUTTON_RIGHT
            },
            c = s("img", {
                src: "/img/nes-controller.png",
                alt: "Nes controller"
            }),
            p = s(o.ModalBody, {}, void 0, s("div", {
                className: "text-center"
            }, void 0, "Press any key..."));
        e.KeySetting = function(t) {
            function e() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.state = {
                    modal: !1,
                    modalSmall: !1,
                    nController: 1
                }, t.toggle = t.toggle.bind(t), t.toggleSmall = t.toggleSmall.bind(t), t.setController = t.setController.bind(t), t
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, r.default.Component), n(e, [{
                key: "toggle",
                value: function() {
                    this.setState({
                        modal: !this.state.modal
                    })
                }
            }, {
                key: "toggleSmall",
                value: function() {
                    var t = this;
                    this.setState({
                        modalSmall: !this.state.modalSmall
                    }, function() {
                        window.keySetting = t.state.modalSmall
                    })
                }
            }, {
                key: "setNewKey",
                value: function(t) {
                    var e = this;
                    this.handler = function(i) {
                        e.toggleSmall(), a.default.mapNewKey({
                            button: [e.state.nController, u[t]],
                            key: i.keyCode
                        }), document.removeEventListener("keydown", e.handler), document.removeEventListener("keyup", e.handler), i.preventDefault()
                    }, document.addEventListener("keydown", this.handler), document.addEventListener("keyup", this.handler), this.toggleSmall()
                }
            }, {
                key: "setController",
                value: function(t) {
                    this.setState({
                        nController: t
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return s("div", {}, void 0, s(o.Modal, {
                        isOpen: this.state.modal,
                        toggle: this.toggle,
                        className: "key-setting-modal",
                        size: "lg",
                        fade: !0
                    }, void 0, s(o.ModalHeader, {
                        toggle: this.toggle
                    }, void 0, "Controller setting"), s(o.ModalBody, {}, void 0, s("div", {
                        className: "n-controllers"
                    }, void 0, [1, 2].map(function(e) {
                        return s("label", {
                            className: "radio-inline"
                        }, e, s("input", {
                            type: "radio",
                            name: "nController",
                            checked: e === t.state.nController,
                            onChange: function() {
                                return t.setController(e)
                            }
                        }), "Controller ", e)
                    })), s("div", {
                        className: "controller-image"
                    }, void 0, c, Object.keys(u).map(function(e, i) {
                        return s("span", {
                            className: "controller-btn controller-btn--" + e,
                            onClick: function() {
                                return t.setNewKey(e)
                            }
                        }, i)
                    }))), s(o.ModalFooter, {}, void 0, s(o.Button, {
                        color: "secondary",
                        onClick: this.toggle
                    }, void 0, "Close"))), s(o.Modal, {
                        isOpen: this.state.modalSmall,
                        backdrop: "static",
                        toggle: this.toggleSmall,
                        className: "keypress-modal",
                        fade: !1
                    }, void 0, p))
                }
            }]), e
        }()
    },
    858: function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MobileGamepad = void 0;
            var s = function() {
                    var t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
                    return function(e, i, s, n) {
                        var r = e && e.defaultProps,
                            o = arguments.length - 3;
                        if (i || 0 === o || (i = {}), i && r)
                            for (var a in r) void 0 === i[a] && (i[a] = r[a]);
                        else i || (i = r || {});
                        if (1 === o) i.children = n;
                        else if (o > 1) {
                            for (var h = Array(o), l = 0; l < o; l++) h[l] = arguments[l + 3];
                            i.children = h
                        }
                        return {
                            $$typeof: t,
                            type: e,
                            key: void 0 === s ? null : "" + s,
                            ref: null,
                            props: i,
                            _owner: null
                        }
                    }
                }(),
                n = function() {
                    return function(t, e) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return function(t, e) {
                            var i = [],
                                s = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var o, a = t[Symbol.iterator](); !(s = (o = a.next()).done) && (i.push(o.value), !e || i.length !== e); s = !0);
                            } catch (t) {
                                n = !0, r = t
                            } finally {
                                try {
                                    !s && a.return && a.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            return i
                        }(t, e);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                r = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                        }
                    }
                    return function(e, i, s) {
                        return i && t(e.prototype, i), s && t(e, s), e
                    }
                }(),
                o = i(630),
                a = l(i(40)),
                h = l(i(100));

            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            var c = void 0;
            a.default.server || (c = i(859));
            var p = {
                    u: o.Controller.BUTTON_UP,
                    d: o.Controller.BUTTON_DOWN,
                    l: o.Controller.BUTTON_LEFT,
                    r: o.Controller.BUTTON_RIGHT
                },
                d = p.u,
                m = p.l,
                f = p.r,
                g = p.d,
                _ = s("div", {
                    className: "clearfix"
                });
            e.MobileGamepad = function(e) {
                function i() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    var t = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                    return t.onWindowScroll = h.default.debounce(function() {
                        t.activeJoystick()
                    }, 200), t.onButtonUp = t.onButtonUp.bind(t), t.onButtonDown = t.onButtonDown.bind(t), t
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, t.Component), r(i, [{
                    key: "componentDidMount",
                    value: function() {
                        this.activeJoystick(), window.addEventListener("scroll", this.onWindowScroll)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.activeJoystick(), window.removeEventListener("scroll", this.onWindowScroll)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.joystick && this.joystick.destroy()
                    }
                }, {
                    key: "activeJoystick",
                    value: function() {
                        var t = this;
                        this.joystick && this.joystick.destroy();
                        var e = {
                            zone: this.joyContainer,
                            color: "#f8f9fa",
                            multitouch: !0,
                            mode: "static",
                            size: 160,
                            position: {
                                bottom: "95px",
                                left: "95px"
                            },
                            maxNumberOfNipples: 1
                        };

                        function i(t) {
                            var e = null;
                            if (t > 30 && t < 60 && (e = [d, f]), t > 110 && t < 140 && (e = [d, m]), t > 200 && t < 230 && (e = [g, m]), t > 300 && t < 330 && (e = [g, f]), null === e) {
                                var i, s = (u(i = {}, m, 180), u(i, d, 90), u(i, f, 0), u(i, -f, 360), u(i, g, 270), i),
                                    r = Math.abs(t - 180),
                                    o = m,
                                    a = !0,
                                    h = !1,
                                    l = void 0;
                                try {
                                    for (var c, p = Object.entries(s)[Symbol.iterator](); !(a = (c = p.next()).done); a = !0) {
                                        var _ = n(c.value, 2),
                                            b = _[0],
                                            y = _[1];
                                        Math.abs(t - y) < r && (r = Math.abs(t - y), o = b)
                                    }
                                } catch (t) {
                                    h = !0, l = t
                                } finally {
                                    try {
                                        !a && p.return && p.return()
                                    } finally {
                                        if (h) throw l
                                    }
                                }
                                e = [Math.abs(o)]
                            }
                            return e
                        }
                        this.lastDeg = null, this.joystick = c.create(e), this.joystick.on("move", function(e, s) {
                            if (s.distance > 30) {
                                var n = s.angle.degree;
                                if (null === t.lastDeg) i(n).map(function(e) {
                                    t.pressButton(e)
                                });
                                else {
                                    var r = i(t.lastDeg),
                                        o = i(n);
                                    r.map(function(e) {
                                        o.includes(e) || t.releaseButton(e)
                                    }), o.map(function(e) {
                                        r.includes(e) || t.pressButton(e)
                                    })
                                }
                                t.lastDeg = s.angle.degree
                            }
                        }), this.joystick.on("end", function(e) {
                            t.lastDeg && (i(t.lastDeg).map(function(e) {
                                return t.releaseButton(e)
                            }), t.lastDeg = null)
                        })
                    }
                }, {
                    key: "pressButton",
                    value: function(t) {
                        var e = this.props.keyController;
                        e && e.directKeyPressDown(t)
                    }
                }, {
                    key: "releaseButton",
                    value: function(t) {
                        var e = this.props.keyController;
                        e && e.directKeyPressUp(t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return s("div", {
                            className: "mobile-gamepad bg-dark"
                        }, void 0, t.createElement("div", {
                            key: 10,
                            ref: function(t) {
                                return e.joyContainer = t
                            },
                            className: "joystick-zone"
                        }), s("div", {
                            className: "buttons-zone"
                        }, void 0, s("div", {
                            className: "ba-button"
                        }, void 0, s("span", {
                            "data-button": o.Controller.BUTTON_B,
                            className: "btn btn-light circle-btn btn-b",
                            onTouchStart: this.onButtonDown,
                            onTouchEnd: this.onButtonUp,
                            onMouseUp: this.onButtonUp,
                            onMouseDown: this.onButtonDown
                        }, void 0, "B"), s("span", {
                            "data-button": o.Controller.BUTTON_A,
                            className: "btn btn-light circle-btn btn-a",
                            onTouchStart: this.onButtonDown,
                            onTouchEnd: this.onButtonUp,
                            onMouseUp: this.onButtonUp,
                            onMouseDown: this.onButtonDown
                        }, void 0, "A")), s("div", {
                            className: "start-buttons"
                        }, void 0, s("span", {
                            "data-button": o.Controller.BUTTON_SELECT,
                            className: "btn btn-light",
                            onTouchStart: this.onButtonDown,
                            onTouchEnd: this.onButtonUp,
                            onMouseUp: this.onButtonUp,
                            onMouseDown: this.onButtonDown
                        }, void 0, "Select"), s("span", {
                            "data-button": o.Controller.BUTTON_START,
                            className: "btn btn-light",
                            onTouchStart: this.onButtonDown,
                            onTouchEnd: this.onButtonUp,
                            onMouseUp: this.onButtonUp,
                            onMouseDown: this.onButtonDown
                        }, void 0, "Start"))), _)
                    }
                }, {
                    key: "onButtonDown",
                    value: function(t) {
                        var e = this.props.keyController;
                        e && e.directKeyPressDown(t.target.dataset.button), t.preventDefault()
                    }
                }, {
                    key: "onButtonUp",
                    value: function(t) {
                        var e = this.props.keyController;
                        e && e.directKeyPressUp(t.target.dataset.button), t.preventDefault()
                    }
                }]), i
            }()
        }).call(e, i(1))
    },
    859: function(t, e, i) {
        ! function(e) {
            t.exports = e()
        }(function() {
            var t, e = !!("ontouchstart" in window),
                i = !!window.PointerEvent,
                s = !!window.MSPointerEvent,
                n = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                r = {};
            i ? t = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : s ? t = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : e ? (t = {
                start: "touchstart",
                move: "touchmove",
                end: "touchend, touchcancel"
            }, r = n) : t = n;
            var o = {};

            function a() {}

            function h(t, e) {
                return this.identifier = e.identifier, this.position = e.position, this.frontPosition = e.frontPosition, this.collection = t, this.defaults = {
                    size: 100,
                    threshold: .1,
                    color: "white",
                    fadeTime: 250,
                    dataOnly: !1,
                    restJoystick: !0,
                    restOpacity: .5,
                    mode: "dynamic",
                    zone: document.body
                }, this.config(e), "dynamic" === this.options.mode && (this.options.restOpacity = 0), this.id = h.id, h.id += 1, this.buildEl().stylize(), this.instance = {
                    el: this.ui.el,
                    on: this.on.bind(this),
                    off: this.off.bind(this),
                    show: this.show.bind(this),
                    hide: this.hide.bind(this),
                    add: this.addToDom.bind(this),
                    remove: this.removeFromDom.bind(this),
                    destroy: this.destroy.bind(this),
                    resetDirection: this.resetDirection.bind(this),
                    computeDirection: this.computeDirection.bind(this),
                    trigger: this.trigger.bind(this),
                    position: this.position,
                    frontPosition: this.frontPosition,
                    ui: this.ui,
                    identifier: this.identifier,
                    id: this.id,
                    options: this.options
                }, this.instance
            }

            function l(t, e) {
                return this.nipples = [], this.idles = [], this.actives = [], this.ids = [], this.pressureIntervals = {}, this.manager = t, this.id = l.id, l.id += 1, this.defaults = {
                    zone: document.body,
                    multitouch: !1,
                    maxNumberOfNipples: 10,
                    mode: "dynamic",
                    position: {
                        top: 0,
                        left: 0
                    },
                    catchDistance: 200,
                    size: 100,
                    threshold: .1,
                    color: "white",
                    fadeTime: 250,
                    dataOnly: !1,
                    restJoystick: !0,
                    restOpacity: .5
                }, this.config(e), "static" !== this.options.mode && "semi" !== this.options.mode || (this.options.multitouch = !1), this.options.multitouch || (this.options.maxNumberOfNipples = 1), this.updateBox(), this.prepareNipples(), this.bindings(), this.begin(), this.nipples
            }

            function u(t) {
                var e, i = this;
                return i.ids = {}, i.index = 0, i.collections = [], i.config(t), i.prepareCollections(), o.bindEvt(window, "resize", function(t) {
                    clearTimeout(e), e = setTimeout(function() {
                        var t, e = o.getScroll();
                        i.collections.forEach(function(i) {
                            i.forEach(function(i) {
                                t = i.el.getBoundingClientRect(), i.position = {
                                    x: e.x + t.left,
                                    y: e.y + t.top
                                }
                            })
                        })
                    }, 100)
                }), i.collections
            }
            o.distance = function(t, e) {
                var i = e.x - t.x,
                    s = e.y - t.y;
                return Math.sqrt(i * i + s * s)
            }, o.angle = function(t, e) {
                var i = e.x - t.x,
                    s = e.y - t.y;
                return o.degrees(Math.atan2(s, i))
            }, o.findCoord = function(t, e, i) {
                var s = {
                    x: 0,
                    y: 0
                };
                return i = o.radians(i), s.x = t.x - e * Math.cos(i), s.y = t.y - e * Math.sin(i), s
            }, o.radians = function(t) {
                return t * (Math.PI / 180)
            }, o.degrees = function(t) {
                return t * (180 / Math.PI)
            }, o.bindEvt = function(t, e, i) {
                for (var s, n = e.split(/[ ,]+/g), r = 0; r < n.length; r += 1) s = n[r], t.addEventListener ? t.addEventListener(s, i, !1) : t.attachEvent && t.attachEvent(s, i)
            }, o.unbindEvt = function(t, e, i) {
                for (var s, n = e.split(/[ ,]+/g), r = 0; r < n.length; r += 1) s = n[r], t.removeEventListener ? t.removeEventListener(s, i) : t.detachEvent && t.detachEvent(s, i)
            }, o.trigger = function(t, e, i) {
                var s = new CustomEvent(e, i);
                t.dispatchEvent(s)
            }, o.prepareEvent = function(t) {
                return t.preventDefault(), t.type.match(/^touch/) ? t.changedTouches : t
            }, o.getScroll = function() {
                return {
                    x: void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
                    y: void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
                }
            }, o.applyPosition = function(t, e) {
                e.x && e.y ? (t.style.left = e.x + "px", t.style.top = e.y + "px") : (e.top || e.right || e.bottom || e.left) && (t.style.top = e.top, t.style.right = e.right, t.style.bottom = e.bottom, t.style.left = e.left)
            }, o.getTransitionStyle = function(t, e, i) {
                var s = o.configStylePropertyObject(t);
                for (var n in s)
                    if (s.hasOwnProperty(n))
                        if ("string" == typeof e) s[n] = e + " " + i;
                        else {
                            for (var r = "", a = 0, h = e.length; a < h; a += 1) r += e[a] + " " + i + ", ";
                            s[n] = r.slice(0, -2)
                        } return s
            }, o.getVendorStyle = function(t, e) {
                var i = o.configStylePropertyObject(t);
                for (var s in i) i.hasOwnProperty(s) && (i[s] = e);
                return i
            }, o.configStylePropertyObject = function(t) {
                var e = {};
                e[t] = "";
                return ["webkit", "Moz", "o"].forEach(function(i) {
                    e[i + t.charAt(0).toUpperCase() + t.slice(1)] = ""
                }), e
            }, o.extend = function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }, o.safeExtend = function(t, e) {
                var i = {};
                for (var s in t) t.hasOwnProperty(s) && e.hasOwnProperty(s) ? i[s] = e[s] : t.hasOwnProperty(s) && (i[s] = t[s]);
                return i
            }, o.map = function(t, e) {
                if (t.length)
                    for (var i = 0, s = t.length; i < s; i += 1) e(t[i]);
                else e(t)
            }, a.prototype.on = function(t, e) {
                var i, s = t.split(/[ ,]+/g);
                this._handlers_ = this._handlers_ || {};
                for (var n = 0; n < s.length; n += 1) i = s[n], this._handlers_[i] = this._handlers_[i] || [], this._handlers_[i].push(e);
                return this
            }, a.prototype.off = function(t, e) {
                return this._handlers_ = this._handlers_ || {}, void 0 === t ? this._handlers_ = {} : void 0 === e ? this._handlers_[t] = null : this._handlers_[t] && this._handlers_[t].indexOf(e) >= 0 && this._handlers_[t].splice(this._handlers_[t].indexOf(e), 1), this
            }, a.prototype.trigger = function(t, e) {
                var i, s = this,
                    n = t.split(/[ ,]+/g);
                s._handlers_ = s._handlers_ || {};
                for (var r = 0; r < n.length; r += 1) i = n[r], s._handlers_[i] && s._handlers_[i].length && s._handlers_[i].forEach(function(t) {
                    t.call(s, {
                        type: i,
                        target: s
                    }, e)
                })
            }, a.prototype.config = function(t) {
                this.options = this.defaults || {}, t && (this.options = o.safeExtend(this.options, t))
            }, a.prototype.bindEvt = function(e, i) {
                var s = this;
                return s._domHandlers_ = s._domHandlers_ || {}, s._domHandlers_[i] = function() {
                    "function" == typeof s["on" + i] ? s["on" + i].apply(s, arguments) : console.warn('[WARNING] : Missing "on' + i + '" handler.')
                }, o.bindEvt(e, t[i], s._domHandlers_[i]), r[i] && o.bindEvt(e, r[i], s._domHandlers_[i]), s
            }, a.prototype.unbindEvt = function(e, i) {
                return this._domHandlers_ = this._domHandlers_ || {}, o.unbindEvt(e, t[i], this._domHandlers_[i]), r[i] && o.unbindEvt(e, r[i], this._domHandlers_[i]), delete this._domHandlers_[i], this
            }, h.prototype = new a, h.constructor = h, h.id = 0, h.prototype.buildEl = function(t) {
                return this.ui = {}, this.options.dataOnly ? this : (this.ui.el = document.createElement("div"), this.ui.back = document.createElement("div"), this.ui.front = document.createElement("div"), this.ui.el.className = "nipple collection_" + this.collection.id, this.ui.back.className = "back", this.ui.front.className = "front", this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id), this.ui.el.appendChild(this.ui.back), this.ui.el.appendChild(this.ui.front), this)
            }, h.prototype.stylize = function() {
                if (this.options.dataOnly) return this;
                var t = this.options.fadeTime + "ms",
                    e = o.getVendorStyle("borderRadius", "50%"),
                    i = o.getTransitionStyle("transition", "opacity", t),
                    s = {};
                return s.el = {
                    position: "absolute",
                    opacity: this.options.restOpacity,
                    display: "block",
                    zIndex: 999
                }, s.back = {
                    position: "absolute",
                    display: "block",
                    width: this.options.size + "px",
                    height: this.options.size + "px",
                    marginLeft: -this.options.size / 2 + "px",
                    marginTop: -this.options.size / 2 + "px",
                    background: this.options.color,
                    opacity: ".5"
                }, s.front = {
                    width: this.options.size / 2 + "px",
                    height: this.options.size / 2 + "px",
                    position: "absolute",
                    display: "block",
                    marginLeft: -this.options.size / 4 + "px",
                    marginTop: -this.options.size / 4 + "px",
                    background: this.options.color,
                    opacity: ".5"
                }, o.extend(s.el, i), o.extend(s.back, e), o.extend(s.front, e), this.applyStyles(s), this
            }, h.prototype.applyStyles = function(t) {
                for (var e in this.ui)
                    if (this.ui.hasOwnProperty(e))
                        for (var i in t[e]) this.ui[e].style[i] = t[e][i];
                return this
            }, h.prototype.addToDom = function() {
                return this.options.dataOnly || document.body.contains(this.ui.el) ? this : (this.options.zone.appendChild(this.ui.el), this)
            }, h.prototype.removeFromDom = function() {
                return this.options.dataOnly || !document.body.contains(this.ui.el) ? this : (this.options.zone.removeChild(this.ui.el), this)
            }, h.prototype.destroy = function() {
                clearTimeout(this.removeTimeout), clearTimeout(this.showTimeout), clearTimeout(this.restTimeout), this.trigger("destroyed", this.instance), this.removeFromDom(), this.off()
            }, h.prototype.show = function(t) {
                var e = this;
                return e.options.dataOnly ? e : (clearTimeout(e.removeTimeout), clearTimeout(e.showTimeout), clearTimeout(e.restTimeout), e.addToDom(), e.restCallback(), setTimeout(function() {
                    e.ui.el.style.opacity = 1
                }, 0), e.showTimeout = setTimeout(function() {
                    e.trigger("shown", e.instance), "function" == typeof t && t.call(this)
                }, e.options.fadeTime), e)
            }, h.prototype.hide = function(t) {
                var e = this;
                return e.options.dataOnly ? e : (e.ui.el.style.opacity = e.options.restOpacity, clearTimeout(e.removeTimeout), clearTimeout(e.showTimeout), clearTimeout(e.restTimeout), e.removeTimeout = setTimeout(function() {
                    var i = "dynamic" === e.options.mode ? "none" : "block";
                    e.ui.el.style.display = i, "function" == typeof t && t.call(e), e.trigger("hidden", e.instance)
                }, e.options.fadeTime), e.options.restJoystick && e.restPosition(), e)
            }, h.prototype.restPosition = function(t) {
                var e = this;
                e.frontPosition = {
                    x: 0,
                    y: 0
                };
                var i = e.options.fadeTime + "ms",
                    s = {};
                s.front = o.getTransitionStyle("transition", ["top", "left"], i);
                var n = {
                    front: {}
                };
                n.front = {
                    left: e.frontPosition.x + "px",
                    top: e.frontPosition.y + "px"
                }, e.applyStyles(s), e.applyStyles(n), e.restTimeout = setTimeout(function() {
                    "function" == typeof t && t.call(e), e.restCallback()
                }, e.options.fadeTime)
            }, h.prototype.restCallback = function() {
                var t = {};
                t.front = o.getTransitionStyle("transition", "none", ""), this.applyStyles(t), this.trigger("rested", this.instance)
            }, h.prototype.resetDirection = function() {
                this.direction = {
                    x: !1,
                    y: !1,
                    angle: !1
                }
            }, h.prototype.computeDirection = function(t) {
                var e, i, s, n = t.angle.radian,
                    r = Math.PI / 4,
                    o = Math.PI / 2;
                if (e = n > r && n < 3 * r ? "up" : n > -r && n <= r ? "left" : n > 3 * -r && n <= -r ? "down" : "right", i = n > -o && n < o ? "left" : "right", s = n > 0 ? "up" : "down", t.force > this.options.threshold) {
                    var a = {};
                    for (var h in this.direction) this.direction.hasOwnProperty(h) && (a[h] = this.direction[h]);
                    var l = {};
                    for (var h in this.direction = {
                            x: i,
                            y: s,
                            angle: e
                        }, t.direction = this.direction, a) a[h] === this.direction[h] && (l[h] = !0);
                    if (l.x && l.y && l.angle) return t;
                    l.x && l.y || this.trigger("plain", t), l.x || this.trigger("plain:" + i, t), l.y || this.trigger("plain:" + s, t), l.angle || this.trigger("dir dir:" + e, t)
                }
                return t
            }, l.prototype = new a, l.constructor = l, l.id = 0, l.prototype.prepareNipples = function() {
                var t = this.nipples;
                t.on = this.on.bind(this), t.off = this.off.bind(this), t.options = this.options, t.destroy = this.destroy.bind(this), t.ids = this.ids, t.id = this.id, t.processOnMove = this.processOnMove.bind(this), t.processOnEnd = this.processOnEnd.bind(this), t.get = function(e) {
                    if (void 0 === e) return t[0];
                    for (var i = 0, s = t.length; i < s; i += 1)
                        if (t[i].identifier === e) return t[i];
                    return !1
                }
            }, l.prototype.bindings = function() {
                this.bindEvt(this.options.zone, "start"), this.options.zone.style.touchAction = "none", this.options.zone.style.msTouchAction = "none"
            }, l.prototype.begin = function() {
                var t = this.options;
                if ("static" === t.mode) {
                    var e = this.createNipple(t.position, this.manager.getIdentifier());
                    e.add(), this.idles.push(e)
                }
            }, l.prototype.createNipple = function(t, e) {
                var i = o.getScroll(),
                    s = {},
                    n = this.options;
                if (t.x && t.y) s = {
                    x: t.x - (i.x + this.box.left),
                    y: t.y - (i.y + this.box.top)
                };
                else if (t.top || t.right || t.bottom || t.left) {
                    var r = document.createElement("DIV");
                    r.style.display = "hidden", r.style.top = t.top, r.style.right = t.right, r.style.bottom = t.bottom, r.style.left = t.left, r.style.position = "absolute", n.zone.appendChild(r);
                    var a = r.getBoundingClientRect();
                    n.zone.removeChild(r), s = t, t = {
                        x: a.left + i.x,
                        y: a.top + i.y
                    }
                }
                var l = new h(this, {
                    color: n.color,
                    size: n.size,
                    threshold: n.threshold,
                    fadeTime: n.fadeTime,
                    dataOnly: n.dataOnly,
                    restJoystick: n.restJoystick,
                    restOpacity: n.restOpacity,
                    mode: n.mode,
                    identifier: e,
                    position: t,
                    zone: n.zone,
                    frontPosition: {
                        x: 0,
                        y: 0
                    }
                });
                return n.dataOnly || (o.applyPosition(l.ui.el, s), o.applyPosition(l.ui.front, l.frontPosition)), this.nipples.push(l), this.trigger("added " + l.identifier + ":added", l), this.manager.trigger("added " + l.identifier + ":added", l), this.bindNipple(l), l
            }, l.prototype.updateBox = function() {
                this.box = this.options.zone.getBoundingClientRect()
            }, l.prototype.bindNipple = function(t) {
                var e, i = this,
                    s = function(t, s) {
                        e = t.type + " " + s.id + ":" + t.type, i.trigger(e, s)
                    };
                t.on("destroyed", i.onDestroyed.bind(i)), t.on("shown hidden rested dir plain", s), t.on("dir:up dir:right dir:down dir:left", s), t.on("plain:up plain:right plain:down plain:left", s)
            }, l.prototype.pressureFn = function(t, e, i) {
                var s = this,
                    n = 0;
                clearInterval(s.pressureIntervals[i]), s.pressureIntervals[i] = setInterval(function() {
                    var i = t.force || t.pressure || t.webkitForce || 0;
                    i !== n && (e.trigger("pressure", i), s.trigger("pressure " + e.identifier + ":pressure", i), n = i)
                }.bind(s), 100)
            }, l.prototype.onstart = function(t) {
                var e = this,
                    i = e.options;
                t = o.prepareEvent(t), e.updateBox();
                return o.map(t, function(t) {
                    e.actives.length < i.maxNumberOfNipples && e.processOnStart(t)
                }), e.manager.bindDocument(), !1
            }, l.prototype.processOnStart = function(t) {
                var e, i = this,
                    s = i.options,
                    n = i.manager.getIdentifier(t),
                    r = t.force || t.pressure || t.webkitForce || 0,
                    a = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    h = i.getOrCreate(n, a);
                h.identifier !== n && i.manager.removeIdentifier(h.identifier), h.identifier = n;
                var l = function(e) {
                    e.trigger("start", e), i.trigger("start " + e.id + ":start", e), e.show(), r > 0 && i.pressureFn(t, e, e.identifier), i.processOnMove(t)
                };
                if ((e = i.idles.indexOf(h)) >= 0 && i.idles.splice(e, 1), i.actives.push(h), i.ids.push(h.identifier), "semi" !== s.mode) l(h);
                else {
                    if (!(o.distance(a, h.position) <= s.catchDistance)) return h.destroy(), void i.processOnStart(t);
                    l(h)
                }
                return h
            }, l.prototype.getOrCreate = function(t, e) {
                var i, s = this.options;
                return /(semi|static)/.test(s.mode) ? (i = this.idles[0]) ? (this.idles.splice(0, 1), i) : "semi" === s.mode ? this.createNipple(e, t) : (console.warn("Coudln't find the needed nipple."), !1) : i = this.createNipple(e, t)
            }, l.prototype.processOnMove = function(t) {
                var e = this.options,
                    i = this.manager.getIdentifier(t),
                    s = this.nipples.get(i);
                if (!s) return console.error("Found zombie joystick with ID " + i), void this.manager.removeIdentifier(i);
                s.identifier = i;
                var n = s.options.size / 2,
                    r = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    a = o.distance(r, s.position),
                    h = o.angle(r, s.position),
                    l = o.radians(h),
                    u = a / n;
                a > n && (a = n, r = o.findCoord(s.position, a, h)), s.frontPosition = {
                    x: r.x - s.position.x,
                    y: r.y - s.position.y
                }, e.dataOnly || o.applyPosition(s.ui.front, s.frontPosition);
                var c = {
                    identifier: s.identifier,
                    position: r,
                    force: u,
                    pressure: t.force || t.pressure || t.webkitForce || 0,
                    distance: a,
                    angle: {
                        radian: l,
                        degree: h
                    },
                    instance: s
                };
                (c = s.computeDirection(c)).angle = {
                    radian: o.radians(180 - h),
                    degree: 180 - h
                }, s.trigger("move", c), this.trigger("move " + s.id + ":move", c)
            }, l.prototype.processOnEnd = function(t) {
                var e = this,
                    i = e.options,
                    s = e.manager.getIdentifier(t),
                    n = e.nipples.get(s),
                    r = e.manager.removeIdentifier(n.identifier);
                n && (i.dataOnly || n.hide(function() {
                    "dynamic" === i.mode && (n.trigger("removed", n), e.trigger("removed " + n.id + ":removed", n), e.manager.trigger("removed " + n.id + ":removed", n), n.destroy())
                }), clearInterval(e.pressureIntervals[n.identifier]), n.resetDirection(), n.trigger("end", n), e.trigger("end " + n.id + ":end", n), e.ids.indexOf(n.identifier) >= 0 && e.ids.splice(e.ids.indexOf(n.identifier), 1), e.actives.indexOf(n) >= 0 && e.actives.splice(e.actives.indexOf(n), 1), /(semi|static)/.test(i.mode) ? e.idles.push(n) : e.nipples.indexOf(n) >= 0 && e.nipples.splice(e.nipples.indexOf(n), 1), e.manager.unbindDocument(), /(semi|static)/.test(i.mode) && (e.manager.ids[r.id] = r.identifier))
            }, l.prototype.onDestroyed = function(t, e) {
                this.nipples.indexOf(e) >= 0 && this.nipples.splice(this.nipples.indexOf(e), 1), this.actives.indexOf(e) >= 0 && this.actives.splice(this.actives.indexOf(e), 1), this.idles.indexOf(e) >= 0 && this.idles.splice(this.idles.indexOf(e), 1), this.ids.indexOf(e.identifier) >= 0 && this.ids.splice(this.ids.indexOf(e.identifier), 1), this.manager.removeIdentifier(e.identifier), this.manager.unbindDocument()
            }, l.prototype.destroy = function() {
                for (var t in this.unbindEvt(this.options.zone, "start"), this.nipples.forEach(function(t) {
                        t.destroy()
                    }), this.pressureIntervals) this.pressureIntervals.hasOwnProperty(t) && clearInterval(this.pressureIntervals[t]);
                this.trigger("destroyed", this.nipples), this.manager.unbindDocument(), this.off()
            }, u.prototype = new a, u.constructor = u, u.prototype.prepareCollections = function() {
                var t = this;
                t.collections.create = t.create.bind(t), t.collections.on = t.on.bind(t), t.collections.off = t.off.bind(t), t.collections.destroy = t.destroy.bind(t), t.collections.get = function(e) {
                    var i;
                    return t.collections.every(function(t) {
                        return !(i = t.get(e))
                    }), i
                }
            }, u.prototype.create = function(t) {
                return this.createCollection(t)
            }, u.prototype.createCollection = function(t) {
                var e = new l(this, t);
                return this.bindCollection(e), this.collections.push(e), e
            }, u.prototype.bindCollection = function(t) {
                var e, i = this,
                    s = function(t, s) {
                        e = t.type + " " + s.id + ":" + t.type, i.trigger(e, s)
                    };
                t.on("destroyed", i.onDestroyed.bind(i)), t.on("shown hidden rested dir plain", s), t.on("dir:up dir:right dir:down dir:left", s), t.on("plain:up plain:right plain:down plain:left", s)
            }, u.prototype.bindDocument = function() {
                this.binded || (this.bindEvt(document, "move").bindEvt(document, "end"), this.binded = !0)
            }, u.prototype.unbindDocument = function(t) {
                Object.keys(this.ids).length && !0 !== t || (this.unbindEvt(document, "move").unbindEvt(document, "end"), this.binded = !1)
            }, u.prototype.getIdentifier = function(t) {
                var e;
                return t ? void 0 === (e = void 0 === t.identifier ? t.pointerId : t.identifier) && (e = this.latest || 0) : e = this.index, void 0 === this.ids[e] && (this.ids[e] = this.index, this.index += 1), this.latest = e, this.ids[e]
            }, u.prototype.removeIdentifier = function(t) {
                var e = {};
                for (var i in this.ids)
                    if (this.ids[i] === t) {
                        e.id = i, e.identifier = this.ids[i], delete this.ids[i];
                        break
                    } return e
            }, u.prototype.onmove = function(t) {
                return this.onAny("move", t), !1
            }, u.prototype.onend = function(t) {
                return this.onAny("end", t), !1
            }, u.prototype.onAny = function(t, e) {
                var i, s = this,
                    n = "processOn" + t.charAt(0).toUpperCase() + t.slice(1);
                e = o.prepareEvent(e);
                return o.map(e, function(t) {
                    i = s.getIdentifier(t), o.map(s.collections, function(t, e, i) {
                        i.ids.indexOf(e) >= 0 && (i[n](t), t._found_ = !0)
                    }.bind(null, t, i)), t._found_ || s.removeIdentifier(i)
                }), !1
            }, u.prototype.destroy = function() {
                this.unbindDocument(!0), this.ids = {}, this.index = 0, this.collections.forEach(function(t) {
                    t.destroy()
                }), this.off()
            }, u.prototype.onDestroyed = function(t, e) {
                if (this.collections.indexOf(e) < 0) return !1;
                this.collections.splice(this.collections.indexOf(e), 1)
            };
            var c = new u;
            return {
                create: function(t) {
                    return c.create(t)
                },
                factory: c
            }
        })
    },
    860: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Star = void 0;
        var s = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                }
                return t
            },
            n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            r = i(1),
            o = l(r),
            a = l(i(10)),
            h = l(i(861));

        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.Star = h.default;
        var u = function(t) {
            function e(t) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return i.state = {
                    rating: t.rating,
                    lastRating: t.rating,
                    isRating: !1
                }, i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, r.Component), n(e, [{
                key: "callback",
                value: function(t) {
                    var e = this.props.onRate;
                    e && e(t)
                }
            }, {
                key: "willRate",
                value: function(t, e) {
                    this.setState({
                        rating: t,
                        isRating: !0
                    }), this.callback(s({}, e, {
                        rating: t
                    }))
                }
            }, {
                key: "onRate",
                value: function(t, e) {
                    this.setState({
                        rating: t,
                        lastRating: t
                    }), this.callback(s({}, e, {
                        rating: t
                    }))
                }
            }, {
                key: "onCancelRate",
                value: function(t) {
                    var e = this.state.lastRating;
                    this.setState({
                        rating: e,
                        isRating: !1
                    }), this.callback(s({}, t, {
                        rating: e
                    }))
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(t, e) {
                    var i = t.rating;
                    i !== e.rating && this.setState({
                        rating: i,
                        lastRating: i
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props,
                        i = e.total,
                        n = e.interactive,
                        a = e.children,
                        l = function(t, e) {
                            var i = {};
                            for (var s in t) e.indexOf(s) >= 0 || Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
                            return i
                        }(e, ["total", "interactive", "children"]),
                        u = this.state,
                        c = u.rating,
                        p = u.isRating;
                    a = r.Children.toArray(a), delete l.rating, delete l.onRate;
                    var d = Array.apply(null, Array(i)).map(function(e, i) {
                        var s = {
                            isActive: !p && c - i >= 1,
                            willBeActive: p && i < c,
                            isActiveHalf: !p && c - i >= .5 && c - i < 1,
                            isDisabled: !n
                        };
                        return o.default.createElement("div", {
                            key: "star-" + i,
                            onClick: n ? t.onRate.bind(t, i + 1) : null,
                            onMouseEnter: n ? t.willRate.bind(t, i + 1) : null
                        }, a.length ? o.default.cloneElement(a[i % a.length], s) : o.default.createElement(h.default, s))
                    });
                    return n ? o.default.createElement("div", s({
                        className: "react-rater",
                        onMouseLeave: this.onCancelRate.bind(this)
                    }, l), d) : o.default.createElement("div", s({
                        className: "react-rater"
                    }, l), d)
                }
            }]), e
        }();
        e.default = u, u.propTypes = {
            total: a.default.number,
            rating: a.default.number,
            interactive: a.default.bool,
            children: a.default.any,
            onRate: a.default.func
        }, u.defaultProps = {
            total: 5,
            rating: 0,
            interactive: !0
        }
    },
    861: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            n = i(1),
            r = a(n),
            o = a(i(10));

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var h = function(t) {
            function e() {
                return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, n.Component), s(e, [{
                key: "render",
                value: function() {
                    var t = this,
                        e = {
                            isDisabled: "is-disabled",
                            isActive: "is-active",
                            isActiveHalf: "is-active-half",
                            willBeActive: "will-be-active"
                        },
                        i = Object.keys(e).filter(function(e) {
                            return t.props[e]
                        }).map(function(t) {
                            return e[t]
                        }).join(" ");
                    return r.default.createElement("div", {
                        className: "react-rater-star " + i
                    }, "★")
                }
            }]), e
        }();
        e.default = h, h.defaultProps = {
            willBeActive: !1,
            isActive: !1,
            isActiveHalf: !1,
            isDisabled: !1
        }, h.propTypes = {
            isActive: o.default.bool,
            isActiveHalf: o.default.bool,
            willBeActive: o.default.bool,
            isDisabled: o.default.bool
        }
    },
    913: function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Comment = void 0;
            var s, n, r, o = function() {
                    var t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
                    return function(e, i, s, n) {
                        var r = e && e.defaultProps,
                            o = arguments.length - 3;
                        if (i || 0 === o || (i = {}), i && r)
                            for (var a in r) void 0 === i[a] && (i[a] = r[a]);
                        else i || (i = r || {});
                        if (1 === o) i.children = n;
                        else if (o > 1) {
                            for (var h = Array(o), l = 0; l < o; l++) h[l] = arguments[l + 3];
                            i.children = h
                        }
                        return {
                            $$typeof: t,
                            type: e,
                            key: void 0 === s ? null : "" + s,
                            ref: null,
                            props: i,
                            _owner: null
                        }
                    }
                }(),
                a = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                        }
                    }
                    return function(e, i, s) {
                        return i && t(e.prototype, i), s && t(e, s), e
                    }
                }(),
                h = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(10)),
                l = i(595),
                u = i(70),
                c = i(225),
                p = i(141),
                d = i(914),
                m = i(915);

            function f(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    return new Promise(function(t, i) {
                        return function s(n, r) {
                            try {
                                var o = e[n](r),
                                    a = o.value
                            } catch (t) {
                                return void i(t)
                            }
                            if (!o.done) return Promise.resolve(a).then(function(t) {
                                s("next", t)
                            }, function(t) {
                                s("throw", t)
                            });
                            t(a)
                        }("next")
                    })
                }
            }

            function g(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            var _ = o("div", {
                    className: "row"
                }, void 0, o("div", {
                    className: "col-md-6 my-3"
                }, void 0, o("input", {
                    required: !0,
                    type: "text",
                    placeholder: "Your name",
                    className: "form-control",
                    name: "authorName"
                })), o("div", {
                    className: "col-md-6 mt-md-3 mb-3"
                }, void 0, o("input", {
                    required: !0,
                    type: "email",
                    placeholder: "Your email",
                    className: "form-control",
                    name: "authorEmail"
                }))),
                b = o("div", {
                    className: "comment__btn"
                }, void 0, o("button", {
                    type: "submit",
                    className: "btn btn-primary"
                }, void 0, "Send"));
            e.Comment = (0, p.withAsync)((r = n = function(e) {
                function i() {
                    var t, e, s;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];

                    console.log(g(this, (t = i.__proto__ || Object.getPrototypeOf(i)).call.apply(t, [this].concat(r))));

                    return e = s = g(this, (t = i.__proto__ || Object.getPrototypeOf(i)).call.apply(t, [this].concat(r))), s.state = {
                        formDefault: {
                            authorName: localStorage.authorName || "Guest",
                            authorEmail: localStorage.authorEmail || "yours@email.com"
                        },
                        status: null,
                        list: {
                            data: [],
                            pageNumber: 1,
                            total: 0,
                            totalPage: 0
                        },
                        replyId: null
                    }, g(s, e)
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, t.Component), a(i, [{
                    key: "asyncWrapper",
                    value: function() {
                        var t = f(regeneratorRuntime.mark(function t(e) {
                            var i;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.setState({
                                            status: u.stateType.loading
                                        }), t.next = 3, e;
                                    case 3:
                                        return (i = t.sent) && i.data ? this.setState({
                                            status: u.stateType.done
                                        }) : this.setState({
                                            status: u.stateType.error
                                        }), t.abrupt("return", i);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "handleSubmit",
                    value: function() {
                        var t = f(regeneratorRuntime.mark(function t(e) {
                            var i, s;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.asyncWrapper(d.CommentApi.post(this.props.targetId, e));
                                    case 2:
                                        (i = t.sent).data && (localStorage.authorEmail = e.authorEmail, localStorage.authorName = e.authorName, e.parentId ? (s = this.state.list.data.find(function(t) {
                                            return t.id === e.parentId
                                        })).children ? s.children.push(i.data) : s.children = [i.data] : this.state.list.data.push(i.data), this.commentInput.value = "", this.forceUpdate());
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "fetchList",
                    value: function() {
                        var t = f(regeneratorRuntime.mark(function t(e) {
                            var i;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.asyncWrapper(d.CommentApi.fetchList(this.props.targetId, {
                                            pageSize: this.pageSize,
                                            pageNumber: e
                                        }));
                                    case 2:
                                        i = t.sent, this.processListResponse(i);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "processListResponse",
                    value: function() {
                        var t = f(regeneratorRuntime.mark(function t(e) {
                            var i;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e.data && ((i = this.state.list).pageNumber + 1 !== e.meta.pageNumber ? i.data = e.data : i.data = i.data.concat(e.data), i.pageNumber = e.meta.pageNumber, i.total = e.meta.total, i.totalPage = e.meta.totalPage, this.setState({
                                            list: i
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "baseForm",
                    value: function(e) {
                        var i = this;
                        return t.createElement(l.JoiForm, {
                            ref: function(t) {
                                return i.form = t
                            },
                            className: "comment-box",
                            defaultData: this.state.formDefault,
                            onValid: this.handleSubmit.bind(this)
                        }, e ? o("input", {
                            type: "hidden",
                            name: "parentId",
                            value: e
                        }) : null, _, o("div", {
                            className: "cmt-input"
                        }, void 0, b, t.createElement("textarea", {
                            required: !0,
                            title: "comment box",
                            name: "content",
                            ref: function(t) {
                                return i.commentInput = t
                            },
                            placeholder: "Type your comment...."
                        })))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.state.list;
                        return o("div", {
                            className: "comment-zone"
                        }, void 0, o(c.LoaderWrapper, {
                            loading: this.state.status === u.stateType.loading
                        }, void 0, o("section", {
                            className: "section-comment"
                        }, void 0, o("div", {
                            className: "title mt-5 mb-3 text-uppercase"
                        }, void 0, "Comments (", e.total, ")"), this.baseForm(), o("div", {
                            className: "comment-list"
                        }, void 0, e.data ? e.data.map(function(e, i) {
                            return o(m.CommentItem, {
                                data: e,
                                onReplyClick: function(e) {
                                    return t.setState({
                                        replyId: e.id
                                    })
                                },
                                replyForm: e.id === t.state.replyId ? t.baseForm(t.state.replyId) : null
                            }, i)
                        }) : null, e.pageNumber >= e.totalPage ? null : o("a", {
                            href: "javascript:void(0);",
                            onClick: function(i) {
                                return t.fetchList(e.pageNumber + 1)
                            },
                            className: "load-more-comment"
                        }, void 0, "Load more...")))))
                    }
                }], [{
                    key: "asyncLoad",
                    value: function() {
                        var t = f(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, d.CommentApi.fetchList(this.props.targetId, {
                                            pageSize: 20,
                                            pageNumber: 1
                                        });
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }]), i
            }(), n.propsTypes = {
                targetId: h.default.object.isRequired
            }, n.asyncOption = {
                isComponent: !0
            }, s = r)) || s
        }).call(e, i(1))
    },
    914: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CommentApi = void 0;
        var s = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                }
                return t
            },
            n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                return function(e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(),
            r = i(102),
            o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(40));

        function a(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new Promise(function(t, i) {
                    return function s(n, r) {
                        try {
                            var o = e[n](r),
                                a = o.value
                        } catch (t) {
                            return void i(t)
                        }
                        if (!o.done) return Promise.resolve(a).then(function(t) {
                            s("next", t)
                        }, function(t) {
                            s("throw", t)
                        });
                        t(a)
                    }("next")
                })
            }
        }
        e.CommentApi = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return n(t, null, [{
                key: "post",
                value: function() {
                    var t = a(regeneratorRuntime.mark(function t(e, i) {
                        var n;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, r.net.post(o.default.api.gameComment, {
                                        inUrl: {
                                            gameId: e
                                        },
                                        body: s({}, i)
                                    });
                                case 2:
                                    return n = t.sent, t.abrupt("return", n);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function(e, i) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "fetchList",
                value: function() {
                    var t = a(regeneratorRuntime.mark(function t(e) {
                        var i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = s.pageSize,
                            a = void 0 === n ? 12 : n,
                            h = s.pageNumber,
                            l = void 0 === h ? 1 : h;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, r.net.get(o.default.api.gameComment, {
                                        inUrl: {
                                            gameId: e
                                        },
                                        query: {
                                            pageSize: a,
                                            pageNumber: l
                                        }
                                    });
                                case 2:
                                    return (i = t.sent) && i.data && (i.meta.totalPage = Math.ceil(i.meta.total / i.meta.pageSize)), t.abrupt("return", i);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }]), t
        }()
    },
    915: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CommentItem = void 0;
        var s = function() {
                var t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
                return function(e, i, s, n) {
                    var r = e && e.defaultProps,
                        o = arguments.length - 3;
                    if (i || 0 === o || (i = {}), i && r)
                        for (var a in r) void 0 === i[a] && (i[a] = r[a]);
                    else i || (i = r || {});
                    if (1 === o) i.children = n;
                    else if (o > 1) {
                        for (var h = Array(o), l = 0; l < o; l++) h[l] = arguments[l + 3];
                        i.children = h
                    }
                    return {
                        $$typeof: t,
                        type: e,
                        key: void 0 === s ? null : "" + s,
                        ref: null,
                        props: i,
                        _owner: null
                    }
                }
            }(),
            n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(100));
        var r = s("div", {
            className: "comment__avatar"
        }, void 0, s("img", {
            src: "/img/male.png",
            alt: "commenter avatar"
        }));
        e.CommentItem = function t(e) {
            var i = e.data,
                o = e.replyForm,
                a = e.onReplyClick;
            return s("div", {
                className: "comment-item"
            }, void 0, r, s("div", {
                className: "comment__block"
            }, void 0, s("div", {
                className: "comment__name"
            }, void 0, i.authorName), s("div", {
                className: "comment__content"
            }, void 0, i.content), s("div", {
                className: "comment__footer"
            }, void 0, s("span", {}, void 0, n.default.getDateString(i.createdAt, "mm/dd/yyyy")), null === i.parentId ? s("a", {
                href: "javascript:void(0);",
                onClick: function() {
                    return a(i)
                }
            }, void 0, "Reply") : null), s("div", {
                className: "comment__children"
            }, void 0, i.children ? i.children.map(function(e, i) {
                return s(t, {
                    data: e
                }, i)
            }) : null, o)))
        }
    },
    916: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }
            return function(e, i, s) {
                return i && t(e.prototype, i), s && t(e, s), e
            }
        }();
        var n = e.FixDialog = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return s(t, null, [{
                key: "preOpen",
                value: function() {
                    var t = window.scrollY;
                    document.body.style.top = -1 * t + "px", document.body.classList.add("modal--opened")
                }
            }, {
                key: "preClose",
                value: function() {
                    var t = parseInt(document.body.style.top, 10);
                    document.body.classList.remove("modal--opened"), document.body.style.top = 0, window.scrollTo(0, -1 * t)
                }
            }]), t
        }();
        (config.server || config.noFixDialog || !/iPad|iPhone|iPod/.test(navigator ? navigator.userAgent : "")) && (n.preOpen = n.preClose = function() {})
    }
});