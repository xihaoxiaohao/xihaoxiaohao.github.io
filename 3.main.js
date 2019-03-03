webpackJsonp([3], {
    1068: function(e, t, n) {
        "use strict";
        (function(t) {
            function o(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            var r = n(1069),
                i = o(n(10)),
                a = o(n(1));

            function s(e, t) {
                var n = function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e) ? parseFloat(e) : "px" === e.slice(-2) ? parseFloat(e.slice(0, -2)) : void 0
                }(e);
                if ("number" == typeof n) return n;
                var o = function(e) {
                    if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100
                }(e);
                return "number" == typeof o ? o * t : void 0
            }
            var l = {
                above: "above",
                inside: "inside",
                below: "below",
                invisible: "invisible"
            };
            var u = "<Waypoint> expected to receive a single React element child.\n\nSee https://goo.gl/LrBNgw for more info.";

            function c(e) {
                if (e) try {
                    a.Children.only(e)
                } catch (e) {
                    throw new Error(u)
                }
            }

            function d(e) {
                return "string" == typeof e.type
            }
            var f = "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.";
            var p = void 0,
                m = [];
            var v = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }();
            var h = {
                    topOffset: "0px",
                    bottomOffset: "0px",
                    horizontal: !1,
                    onEnter: function() {
                        return function() {}
                    }(),
                    onLeave: function() {
                        return function() {}
                    }(),
                    onPositionChange: function() {
                        return function() {}
                    }(),
                    fireOnRapidScroll: !0
                },
                y = function(e) {
                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var t = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                        return t.refElement = function(e) {
                            return t._ref = e
                        }, t
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, a.Component), v(n, [{
                        key: "componentWillMount",
                        value: function() {
                            return function() {
                                c(this.props.children)
                            }
                        }()
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            return function() {
                                var e = this;
                                n.getWindow() && (this.cancelInitialTimeout = function(e) {
                                    m.push(e), p || (p = setTimeout(function() {
                                        p = null;
                                        for (var e = void 0; e = m.shift();) e()
                                    }, 0));
                                    var t = !0;
                                    return function() {
                                        if (t) {
                                            t = !1;
                                            var n = m.indexOf(e); - 1 !== n && (m.splice(n, 1), !m.length && p && (clearTimeout(p), p = null))
                                        }
                                    }
                                }(function() {
                                    ! function(e, t) {
                                        if (e && !d(e) && !t) throw new Error(f)
                                    }(e.props.children, e._ref), e._handleScroll = e._handleScroll.bind(e), e.scrollableAncestor = e._findScrollableAncestor(), e.scrollEventListenerUnsubscribe = r.addEventListener(e.scrollableAncestor, "scroll", e._handleScroll, {
                                        passive: !0
                                    }), e.resizeEventListenerUnsubscribe = r.addEventListener(window, "resize", e._handleScroll, {
                                        passive: !0
                                    }), e._handleScroll(null)
                                }))
                            }
                        }()
                    }, {
                        key: "componentWillReceiveProps",
                        value: function() {
                            return function(e) {
                                c(e.children)
                            }
                        }()
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            return function() {
                                n.getWindow() && this.scrollableAncestor && this._handleScroll(null)
                            }
                        }()
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            return function() {
                                n.getWindow() && (this.scrollEventListenerUnsubscribe && this.scrollEventListenerUnsubscribe(), this.resizeEventListenerUnsubscribe && this.resizeEventListenerUnsubscribe(), this.cancelInitialTimeout && this.cancelInitialTimeout())
                            }
                        }()
                    }, {
                        key: "_findScrollableAncestor",
                        value: function() {
                            return function() {
                                var e = this.props,
                                    n = e.horizontal,
                                    o = e.scrollableAncestor;
                                if (o) return function(e) {
                                    return "window" === e ? t.window : e
                                }(o);
                                for (var r = this._ref; r.parentNode;) {
                                    if ((r = r.parentNode) === document.body) return window;
                                    var i = window.getComputedStyle(r),
                                        a = (n ? i.getPropertyValue("overflow-x") : i.getPropertyValue("overflow-y")) || i.getPropertyValue("overflow");
                                    if ("auto" === a || "scroll" === a) return r
                                }
                                return window
                            }
                        }()
                    }, {
                        key: "_handleScroll",
                        value: function() {
                            return function(e) {
                                if (this._ref) {
                                    var t = this._getBounds(),
                                        n = function(e) {
                                            return e.viewportBottom - e.viewportTop == 0 ? l.invisible : e.viewportTop <= e.waypointTop && e.waypointTop <= e.viewportBottom ? l.inside : e.viewportTop <= e.waypointBottom && e.waypointBottom <= e.viewportBottom ? l.inside : e.waypointTop <= e.viewportTop && e.viewportBottom <= e.waypointBottom ? l.inside : e.viewportBottom < e.waypointTop ? l.below : e.waypointTop < e.viewportTop ? l.above : l.invisible
                                        }(t),
                                        o = this._previousPosition;
                                    if (this._previousPosition = n, o !== n) {
                                        var r = {
                                            currentPosition: n,
                                            previousPosition: o,
                                            event: e,
                                            waypointTop: t.waypointTop,
                                            waypointBottom: t.waypointBottom,
                                            viewportTop: t.viewportTop,
                                            viewportBottom: t.viewportBottom
                                        };
                                        this.props.onPositionChange.call(this, r), n === l.inside ? this.props.onEnter.call(this, r) : o === l.inside && this.props.onLeave.call(this, r);
                                        var i = o === l.below && n === l.above,
                                            a = o === l.above && n === l.below;
                                        this.props.fireOnRapidScroll && (i || a) && (this.props.onEnter.call(this, {
                                            currentPosition: l.inside,
                                            previousPosition: o,
                                            event: e,
                                            waypointTop: t.waypointTop,
                                            waypointBottom: t.waypointBottom,
                                            viewportTop: t.viewportTop,
                                            viewportBottom: t.viewportBottom
                                        }), this.props.onLeave.call(this, {
                                            currentPosition: n,
                                            previousPosition: l.inside,
                                            event: e,
                                            waypointTop: t.waypointTop,
                                            waypointBottom: t.waypointBottom,
                                            viewportTop: t.viewportTop,
                                            viewportBottom: t.viewportBottom
                                        }))
                                    }
                                }
                            }
                        }()
                    }, {
                        key: "_getBounds",
                        value: function() {
                            return function() {
                                var e = this.props.horizontal,
                                    t = this._ref.getBoundingClientRect(),
                                    n = t.left,
                                    o = t.top,
                                    r = t.right,
                                    i = t.bottom,
                                    a = e ? n : o,
                                    l = e ? r : i,
                                    u = void 0,
                                    c = void 0;
                                this.scrollableAncestor === window ? (u = e ? window.innerWidth : window.innerHeight, c = 0) : (u = e ? this.scrollableAncestor.offsetWidth : this.scrollableAncestor.offsetHeight, c = e ? this.scrollableAncestor.getBoundingClientRect().left : this.scrollableAncestor.getBoundingClientRect().top);
                                var d = this.props,
                                    f = d.bottomOffset;
                                return {
                                    waypointTop: a,
                                    waypointBottom: l,
                                    viewportTop: c + s(d.topOffset, u),
                                    viewportBottom: c + u - s(f, u)
                                }
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            return function() {
                                var e = this,
                                    t = this.props.children;
                                if (!t) return a.createElement("span", {
                                    ref: this.refElement,
                                    style: {
                                        fontSize: 0
                                    }
                                });
                                if (d(t)) {
                                    var n = function(n) {
                                        e.refElement(n), t.ref && t.ref(n)
                                    };
                                    return a.cloneElement(t, {
                                        ref: n
                                    })
                                }
                                return a.cloneElement(t, {
                                    innerRef: this.refElement
                                })
                            }
                        }()
                    }]), n
                }();
            y.propTypes = {
                children: i.node,
                debug: i.bool,
                onEnter: i.func,
                onLeave: i.func,
                onPositionChange: i.func,
                fireOnRapidScroll: i.bool,
                scrollableAncestor: i.any,
                horizontal: i.bool,
                topOffset: i.oneOfType([i.string, i.number]),
                bottomOffset: i.oneOfType([i.string, i.number])
            }, y.above = l.above, y.below = l.below, y.inside = l.inside, y.invisible = l.invisible, y.getWindow = function() {
                if ("undefined" != typeof window) return window
            }, y.defaultProps = h, y.displayName = "Waypoint", e.exports = y
        }).call(t, n(20))
    },
    1069: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EVENT_HANDLERS_KEY = void 0, t.addEventListener = function(e, t, n, i) {
            e[a] || (e[a] = new r.default(e));
            var s = (0, o.default)(i);
            return e[a].add(t, n, s)
        }, t.removeEventListener = function(e) {
            e()
        };
        var o = i(n(1070)),
            r = i(n(1073));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = t.EVENT_HANDLERS_KEY = "__consolidated_events_handlers__"
    },
    1070: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            if (!e) return;
            if (!(0, o.default)()) return !!e.capture;
            return e
        };
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(1071))
    },
    1071: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            void 0 === r && (r = function() {
                if (!o.default) return !1;
                if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) return !1;
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            return function() {
                                e = !0
                            }
                        }()
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {}
                return e
            }());
            return r
        };
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(1072));
        var r = void 0
    },
    1072: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
        t.default = n
    },
    1073: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(1074));

        function i(e) {
            e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice())
        }
        var a = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.target = t, this.events = {}
            }
            return o(e, [{
                key: "getEventHandlers",
                value: function() {
                    return function(e, t) {
                        var n = String(e) + " " + String((0, r.default)(t));
                        return this.events[n] || (this.events[n] = {
                            handlers: [],
                            handleEvent: void 0
                        }, this.events[n].nextHandlers = this.events[n].handlers), this.events[n]
                    }
                }()
            }, {
                key: "handleEvent",
                value: function() {
                    return function(e, t, n) {
                        var o = this.getEventHandlers(e, t);
                        o.handlers = o.nextHandlers, o.handlers.forEach(function(e) {
                            e && e(n)
                        })
                    }
                }()
            }, {
                key: "add",
                value: function() {
                    return function(e, t, n) {
                        var o = this,
                            r = this.getEventHandlers(e, n);
                        i(r), 0 === r.nextHandlers.length && (r.handleEvent = this.handleEvent.bind(this, e, n), this.target.addEventListener(e, r.handleEvent, n)), r.nextHandlers.push(t);
                        var a = !0;
                        return function() {
                            if (a) {
                                a = !1, i(r);
                                var s = r.nextHandlers.indexOf(t);
                                r.nextHandlers.splice(s, 1), 0 === r.nextHandlers.length && (o.target && o.target.removeEventListener(e, r.handleEvent, n), r.handleEvent = void 0)
                            }
                        }
                    }
                }()
            }]), e
        }();
        t.default = a
    },
    1074: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            if (!e) return 0;
            if (!0 === e) return 100;
            var t = e.capture << 0,
                n = e.passive << 1,
                o = e.once << 2;
            return t + n + o
        }
    },
    1075: function(e, t) {
        e.exports = {
            name: "Museum of retro games",
            description: "Here we come to play online, rate and share memory.<br> We owned browser gaming platform allow playing instantly thousands art work of many legendary game consoles: NES, SNES, GBA and more."
        }
    },
    1076: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.thankAndShare = t.ThankAndShare = void 0;
            var o = function() {
                    var e = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
                    return function(t, n, o, r) {
                        var i = t && t.defaultProps,
                            a = arguments.length - 3;
                        if (n || 0 === a || (n = {}), n && i)
                            for (var s in i) void 0 === n[s] && (n[s] = i[s]);
                        else n || (n = i || {});
                        if (1 === a) n.children = r;
                        else if (a > 1) {
                            for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                            n.children = l
                        }
                        return {
                            $$typeof: e,
                            type: t,
                            key: void 0 === o ? null : "" + o,
                            ref: null,
                            props: n,
                            _owner: null
                        }
                    }
                }(),
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                i = n(102),
                a = n(725);

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var l = {
                    US: {
                        name: "USA",
                        message: "Thank you for supporting us. <br/> Keep sharing your childhood with your friends!"
                    },
                    DF: {
                        name: "Default",
                        message: "Thank you for supporting us. <br/> Keep sharing your childhood with your friends!"
                    },
                    IT: {
                        name: "Italy",
                        message: "Grazie per averci supportato. <br/> Continua a condividere la tua infanzia con i tuoi amici!"
                    },
                    JP: {
                        name: "Japan",
                        message: "ご支援いただきありがとうございます。 <br/>あなたの友人とあなたの子供の頃を共有し続けましょう！"
                    },
                    KR: {
                        name: "South Korea",
                        message: "우리를 도와 줘서 고마워. <br/> 어린 시절을 친구들과 공유하십시오!"
                    },
                    MY: {
                        name: "Malaysia",
                        message: "ഞങ്ങളെ പിന്തുണച്ചതിന് നന്ദി. <br/> നിങ്ങളുടെ കുട്ടിക്കാലം സുഹൃത്തുക്കളുമായി പങ്കിടുന്നത് തുടരുക!"
                    },
                    VN: {
                        name: "Vietnam",
                        message: "Cám ơn đã ủng hộ chúng tôi.<br/> Hãy chia sẻ tuổi thơ với bạn bè của mình nhé !"
                    },
                    BR: {
                        name: "Brazil",
                        message: "Obrigado por nos apoiar. <br/> Continue compartilhando sua infância com seus amigos!"
                    },
                    TH: {
                        name: "Thailand",
                        message: "ขอบคุณที่สนับสนุนเรา<br/> ให้แบ่งปันความเป็นเด็กของคุณกับเพื่อนของคุณ!"
                    }
                },
                u = i.net.get("https://json.geoiplookup.io/", {
                    credentials: "omit",
                    isFile: !0
                }),
                c = o(a.SharePageButton, {}),
                d = t.ThankAndShare = function(t) {
                    function n() {
                        var e, t, o;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        return t = o = s(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(i))), o.state = {
                            country: null
                        }, o.mounted = null, s(o, t)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, e.Component), r(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = function(e) {
                                return function() {
                                    var t = e.apply(this, arguments);
                                    return new Promise(function(e, n) {
                                        return function o(r, i) {
                                            try {
                                                var a = t[r](i),
                                                    s = a.value
                                            } catch (e) {
                                                return void n(e)
                                            }
                                            if (!a.done) return Promise.resolve(s).then(function(e) {
                                                o("next", e)
                                            }, function(e) {
                                                o("throw", e)
                                            });
                                            e(s)
                                        }("next")
                                    })
                                }
                            }(regeneratorRuntime.mark(function e() {
                                var t;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.mounted = !0, e.next = 3, u;
                                        case 3:
                                            (t = e.sent) && this.mounted && this.setState({
                                                country: t.country_code || "DF"
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return t.country !== this.state.country
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.state.country) {
                                var e = l[this.state.country] || l.DF;
                                return o("div", {
                                    className: "thank"
                                }, void 0, e.image ? o("img", {
                                    src: e.image,
                                    alt: "Thank you friends loving good old days"
                                }) : null, o("p", {
                                    dangerouslySetInnerHTML: {
                                        __html: e.message
                                    }
                                }), c)
                            }
                            return null
                        }
                    }]), n
                }();
            t.thankAndShare = e.createElement(d, {
                key: 1
            })
        }).call(t, n(1))
    },
    585: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.HomePage = void 0;
        var o, r = function() {
                var e = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
                return function(t, n, o, r) {
                    var i = t && t.defaultProps,
                        a = arguments.length - 3;
                    if (n || 0 === a || (n = {}), n && i)
                        for (var s in i) void 0 === n[s] && (n[s] = i[s]);
                    else n || (n = i || {});
                    if (1 === a) n.children = r;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        n.children = l
                    }
                    return {
                        $$typeof: e,
                        type: t,
                        key: void 0 === o ? null : "" + o,
                        ref: null,
                        props: n,
                        _owner: null
                    }
                }
            }(),
            i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = k(n(1)),
            s = n(78),
            l = n(70),
            u = k(n(1068)),
            c = n(141),
            d = n(635),
            f = k(n(1075)),
            p = k(n(100)),
            m = n(651),
            v = n(101),
            h = k(n(40)),
            y = (n(1076), n(225)),
            b = n(60),
            g = n(689),
            w = n(724),
            _ = n(747);

        function k(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function E(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    return function o(r, i) {
                        try {
                            var a = t[r](i),
                                s = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(s).then(function(e) {
                            o("next", e)
                        }, function(e) {
                            o("throw", e)
                        });
                        e(s)
                    }("next")
                })
            }
        }
        var S = r("hr", {
                className: "my-4"
            }),
            N = r(w.FacebookPage, {}),
            P = r(_.InfoLinkAds, {
                isShow: !0
            }),
            T = r("div", {
                className: "col-lg-12"
            }, void 0, r("h3", {
                className: "text-center text-underline"
            }, void 0, r("a", {
                href: "https://snesnow.com",
                target: "_blank",
                rel: "follow",
                title: "Play SNES games online"
            }, void 0, "Let's play SNES games online from SnesNow.com"))),
            x = r("span", {
                className: "clearfix"
            }),
            L = r("div", {
                className: "w-50 mx-auto mb-5 text-center"
            }),
            O = r("div", {
                className: "col-lg-12 text-center add-home-screen-block"
            }, void 0, r("p", {}, void 0, "Add to home screen like this, ", r("br", {}), "It will become an app !"), r("img", {
                className: "my-4 icon-app",
                src: "/img/icons/Icon-152.png",
                alt: ""
            }), r("img", {
                className: "mx-auto img-fluid d-block home-image-block pb-5",
                src: "/img/add-to-home-screen.png"
            })),
            j = r("h2", {
                className: "heading popular-heading"
            }, void 0, "Top played"),
            B = r("div", {
                className: "w-50 mx-auto mb-5 text-center"
            }),
            C = r("div", {
                className: "w-50 mx-auto mb-5 text-center"
            }),
            R = r("div", {
                className: "col-lg-12"
            }, void 0, r("h3", {
                className: "text-center text-underline"
            }, void 0, r("a", {
                href: "https://snesnow.com/snes-all/a-to-z-A.html",
                target: "_blank",
                rel: "follow",
                title: "Snes games a-to-z"
            }, void 0, "A to Z Snes games from SnesNow.com"))),
            A = r("h2", {
                className: "heading popular-heading text-underline"
            }, void 0, r(b.Link, {
                to: "/nes"
            }, void 0, "All NES games")),
            M = r("div", {
                className: "loader load--sm d-inline-block"
            });
        t.HomePage = (0, s.inject)("store")(o = (0, c.withAsync)(o = (0, s.observer)(o = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.state = {
                    loading: !1,
                    loadingRandom: !1
                }, e.onRandomClick = p.default.debounce(e.onRandomClick.bind(e), 300, !0), e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, a.default.Component), i(t, [{
                key: "onLoadMoreClick",
                value: function() {
                    this.store.game.fetchGames("homePopularGames", {
                        pageNumber: this.gameList.meta.pageNumber + 1
                    })
                }
            }, {
                key: "onRandomClick",
                value: function() {
                    var e = E(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.setState({
                                        loadingRandom: !0
                                    }), e.next = 3, this.store.game.random();
                                case 3:
                                    this.setState({
                                        loadingRandom: !1
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "render",
                value: function() {
                    var e = this.store.game.randomGame;
                    return r("div", {
                        className: "home-page"
                    }, void 0, r(v.Seo, {
                        seoData: {
                            tagLine: ""
                        }
                    }), r("div", {
                        className: "jumbotron bg-dark my-3"
                    }, void 0, r("div", {
                        className: "container"
                    }, void 0, r("h1", {
                        className: "display-4"
                    }, void 0, f.default.name), r("p", {
                        className: "lead",
                        dangerouslySetInnerHTML: {
                            __html: f.default.description
                        }
                    }), S, r("div", {
                        className: "lead " + (e.data ? "text-center" : "")
                    }, void 0, r("button", {
                        role: "button",
                        className: "btn btn-primary btn-lg",
                        onClick: this.onRandomClick
                    }, void 0, e.data ? "Show me another" : "Show me a game now !"), r("div", {
                        className: "row justify-content-center my-4 random-game"
                    }, void 0, r("div", {
                        className: "col-md-5 col-sm-6"
                    }, void 0, r(y.LoaderWrapper, {
                        loading: this.state.loadingRandom
                    }, void 0, e.data ? r(m.MediaCard, {
                        data: e.data
                    }) : N)))))), r("div", {
                        className: "container"
                    }, void 0, P, r("div", {
                        className: "row"
                    }, void 0, T, this.store.game.hotGames.data ? r("div", {
                        className: "col-lg-12"
                    }, void 0, r("h2", {
                        className: "heading popular-heading"
                    }, void 0, "Editor Pick", r("button", {
                        className: "btn btn-outline-light admin-required float-right",
                        onClick: function() {
                            return g.manageHotGame.open(1)
                        }
                    }, void 0, "Edit Hot Games"), x), r(d.ListGame, {
                        col: 2,
                        data: this.store.game.hotGames.data,
                        type: "grid"
                    }), L) : null, h.default.isIos ? O : null, r("div", {
                        className: "col-lg-12"
                    }, void 0, j, r(d.ListGame, {
                        col: 2,
                        data: this.store.game.topGames.data,
                        type: "grid"
                    }), B), this.todayList.data ? r("div", {
                        className: "col-lg-12"
                    }, void 0, r("h2", {
                        className: "heading popular-heading"
                    }, void 0, "Games of ", p.default.getDateString(new Date, h.default.dateFormat)), r(d.ListGame, {
                        col: 2,
                        data: this.todayList.data,
                        type: "grid"
                    }), C) : null, R, r("div", {
                        className: "col-lg-12"
                    }, void 0, A, r(d.ListGame, {
                        col: 2,
                        data: this.gameList.data,
                        type: "grid"
                    }), r("div", {
                        className: "w-50 mx-auto mb-5 text-center"
                    }, void 0, this.renderLoadMore())))))
                }
            }, {
                key: "renderLoadMore",
                value: function() {
                    var e = this.gameList;
                    return e.state === l.stateType.loading ? M : e.meta && e.meta.pageNumber < e.meta.total / e.meta.pageSize ? r(u.default, {
                        onEnter: this.onLoadMoreClick.bind(this)
                    }, void 0, r("button", {
                        onClick: this.onLoadMoreClick.bind(this),
                        role: "button",
                        className: "btn btn-lg btn-outline-primary btn-block"
                    }, void 0, " ", "Load more")) : null
                }
            }, {
                key: "store",
                get: function() {
                    return this.props.store
                }
            }, {
                key: "gameList",
                get: function() {
                    return this.props.store.game.dynamicList.get("homePopularGames")
                }
            }, {
                key: "todayList",
                get: function() {
                    return this.props.store.game.dynamicList.get("today") || {}
                }
            }], [{
                key: "asyncLoad",
                value: function() {
                    var e = E(regeneratorRuntime.mark(function e() {
                        var t, n, o, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.store.game.hasList("homePopularGames")) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 3, this.props.store.game.fetchGames("homePopularGames");
                                case 3:
                                    if (!((t = e.sent) && t.meta && h.default.server)) {
                                        e.next = 10;
                                        break
                                    }
                                    return n = p.default.getDateString(new Date, h.default.dateFormat), o = 6, r = n.split("").reduce(function(e, t) {
                                        return e * (t.charCodeAt(0) || 1)
                                    }, 1), e.next = 10, this.props.store.game.fetchGames("today", {
                                        pageSize: o,
                                        pageNumber: r % Math.ceil(t.meta.total / o) || 1
                                    });
                                case 10:
                                    this.props.store.ui.setBreadcrumb([]);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]), t
        }()) || o) || o) || o
    }
});