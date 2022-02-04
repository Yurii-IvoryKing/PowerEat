/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      1807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      9662: (e, t, i) => {
        var s = i(7854),
          n = i(614),
          r = i(6330),
          o = s.TypeError;
        e.exports = function (e) {
          if (n(e)) return e;
          throw o(r(e) + " is not a function");
        };
      },
      6077: (e, t, i) => {
        var s = i(7854),
          n = i(614),
          r = s.String,
          o = s.TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || n(e)) return e;
          throw o("Can't set " + r(e) + " as a prototype");
        };
      },
      1223: (e, t, i) => {
        var s = i(5112),
          n = i(30),
          r = i(3070),
          o = s("unscopables"),
          a = Array.prototype;
        null == a[o] && r.f(a, o, { configurable: !0, value: n(null) }),
          (e.exports = function (e) {
            a[o][e] = !0;
          });
      },
      1530: (e, t, i) => {
        "use strict";
        var s = i(8710).charAt;
        e.exports = function (e, t, i) {
          return t + (i ? s(e, t).length : 1);
        };
      },
      5787: (e, t, i) => {
        var s = i(7854),
          n = i(7976),
          r = s.TypeError;
        e.exports = function (e, t) {
          if (n(t, e)) return e;
          throw r("Incorrect invocation");
        };
      },
      9670: (e, t, i) => {
        var s = i(7854),
          n = i(111),
          r = s.String,
          o = s.TypeError;
        e.exports = function (e) {
          if (n(e)) return e;
          throw o(r(e) + " is not an object");
        };
      },
      7556: (e, t, i) => {
        var s = i(7293);
        e.exports = s(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      8533: (e, t, i) => {
        "use strict";
        var s = i(2092).forEach,
          n = i(9341)("forEach");
        e.exports = n
          ? [].forEach
          : function (e) {
              return s(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      1318: (e, t, i) => {
        var s = i(5656),
          n = i(1400),
          r = i(6244),
          o = function (e) {
            return function (t, i, o) {
              var a,
                l = s(t),
                c = r(l),
                d = n(o, c);
              if (e && i != i) {
                for (; c > d; ) if ((a = l[d++]) != a) return !0;
              } else
                for (; c > d; d++)
                  if ((e || d in l) && l[d] === i) return e || d || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      2092: (e, t, i) => {
        var s = i(9974),
          n = i(1702),
          r = i(8361),
          o = i(7908),
          a = i(6244),
          l = i(5417),
          c = n([].push),
          d = function (e) {
            var t = 1 == e,
              i = 2 == e,
              n = 3 == e,
              d = 4 == e,
              u = 6 == e,
              p = 7 == e,
              h = 5 == e || u;
            return function (f, g, m, v) {
              for (
                var b,
                  y,
                  x = o(f),
                  w = r(x),
                  S = s(g, m),
                  E = a(w),
                  C = 0,
                  T = v || l,
                  O = t ? T(f, E) : i || p ? T(f, 0) : void 0;
                E > C;
                C++
              )
                if ((h || C in w) && ((y = S((b = w[C]), C, x)), e))
                  if (t) O[C] = y;
                  else if (y)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return b;
                      case 6:
                        return C;
                      case 2:
                        c(O, b);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(O, b);
                    }
              return u ? -1 : n || d ? d : O;
            };
          };
        e.exports = {
          forEach: d(0),
          map: d(1),
          filter: d(2),
          some: d(3),
          every: d(4),
          find: d(5),
          findIndex: d(6),
          filterReject: d(7),
        };
      },
      1194: (e, t, i) => {
        var s = i(7293),
          n = i(5112),
          r = i(7392),
          o = n("species");
        e.exports = function (e) {
          return (
            r >= 51 ||
            !s(function () {
              var t = [];
              return (
                ((t.constructor = {})[o] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      9341: (e, t, i) => {
        "use strict";
        var s = i(7293);
        e.exports = function (e, t) {
          var i = [][e];
          return (
            !!i &&
            s(function () {
              i.call(
                null,
                t ||
                  function () {
                    throw 1;
                  },
                1
              );
            })
          );
        };
      },
      3671: (e, t, i) => {
        var s = i(7854),
          n = i(9662),
          r = i(7908),
          o = i(8361),
          a = i(6244),
          l = s.TypeError,
          c = function (e) {
            return function (t, i, s, c) {
              n(i);
              var d = r(t),
                u = o(d),
                p = a(d),
                h = e ? p - 1 : 0,
                f = e ? -1 : 1;
              if (s < 2)
                for (;;) {
                  if (h in u) {
                    (c = u[h]), (h += f);
                    break;
                  }
                  if (((h += f), e ? h < 0 : p <= h))
                    throw l("Reduce of empty array with no initial value");
                }
              for (; e ? h >= 0 : p > h; h += f)
                h in u && (c = i(c, u[h], h, d));
              return c;
            };
          };
        e.exports = { left: c(!1), right: c(!0) };
      },
      1589: (e, t, i) => {
        var s = i(7854),
          n = i(1400),
          r = i(6244),
          o = i(6135),
          a = s.Array,
          l = Math.max;
        e.exports = function (e, t, i) {
          for (
            var s = r(e),
              c = n(t, s),
              d = n(void 0 === i ? s : i, s),
              u = a(l(d - c, 0)),
              p = 0;
            c < d;
            c++, p++
          )
            o(u, p, e[c]);
          return (u.length = p), u;
        };
      },
      7475: (e, t, i) => {
        var s = i(7854),
          n = i(3157),
          r = i(4411),
          o = i(111),
          a = i(5112)("species"),
          l = s.Array;
        e.exports = function (e) {
          var t;
          return (
            n(e) &&
              ((t = e.constructor),
              ((r(t) && (t === l || n(t.prototype))) ||
                (o(t) && null === (t = t[a]))) &&
                (t = void 0)),
            void 0 === t ? l : t
          );
        };
      },
      5417: (e, t, i) => {
        var s = i(7475);
        e.exports = function (e, t) {
          return new (s(e))(0 === t ? 0 : t);
        };
      },
      7072: (e, t, i) => {
        var s = i(5112)("iterator"),
          n = !1;
        try {
          var r = 0,
            o = {
              next: function () {
                return { done: !!r++ };
              },
              return: function () {
                n = !0;
              },
            };
          (o[s] = function () {
            return this;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !n) return !1;
          var i = !1;
          try {
            var r = {};
            (r[s] = function () {
              return {
                next: function () {
                  return { done: (i = !0) };
                },
              };
            }),
              e(r);
          } catch (e) {}
          return i;
        };
      },
      4326: (e, t, i) => {
        var s = i(1702),
          n = s({}.toString),
          r = s("".slice);
        e.exports = function (e) {
          return r(n(e), 8, -1);
        };
      },
      648: (e, t, i) => {
        var s = i(7854),
          n = i(1694),
          r = i(614),
          o = i(4326),
          a = i(5112)("toStringTag"),
          l = s.Object,
          c =
            "Arguments" ==
            o(
              (function () {
                return arguments;
              })()
            );
        e.exports = n
          ? o
          : function (e) {
              var t, i, s;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (i = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = l(e)), a))
                ? i
                : c
                ? o(t)
                : "Object" == (s = o(t)) && r(t.callee)
                ? "Arguments"
                : s;
            };
      },
      9320: (e, t, i) => {
        "use strict";
        var s = i(1702),
          n = i(2248),
          r = i(2423).getWeakData,
          o = i(9670),
          a = i(111),
          l = i(5787),
          c = i(408),
          d = i(2092),
          u = i(2597),
          p = i(9909),
          h = p.set,
          f = p.getterFor,
          g = d.find,
          m = d.findIndex,
          v = s([].splice),
          b = 0,
          y = function (e) {
            return e.frozen || (e.frozen = new x());
          },
          x = function () {
            this.entries = [];
          },
          w = function (e, t) {
            return g(e.entries, function (e) {
              return e[0] === t;
            });
          };
        (x.prototype = {
          get: function (e) {
            var t = w(this, e);
            if (t) return t[1];
          },
          has: function (e) {
            return !!w(this, e);
          },
          set: function (e, t) {
            var i = w(this, e);
            i ? (i[1] = t) : this.entries.push([e, t]);
          },
          delete: function (e) {
            var t = m(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && v(this.entries, t, 1), !!~t;
          },
        }),
          (e.exports = {
            getConstructor: function (e, t, i, s) {
              var d = e(function (e, n) {
                  l(e, p),
                    h(e, { type: t, id: b++, frozen: void 0 }),
                    null != n && c(n, e[s], { that: e, AS_ENTRIES: i });
                }),
                p = d.prototype,
                g = f(t),
                m = function (e, t, i) {
                  var s = g(e),
                    n = r(o(t), !0);
                  return !0 === n ? y(s).set(t, i) : (n[s.id] = i), e;
                };
              return (
                n(p, {
                  delete: function (e) {
                    var t = g(this);
                    if (!a(e)) return !1;
                    var i = r(e);
                    return !0 === i
                      ? y(t).delete(e)
                      : i && u(i, t.id) && delete i[t.id];
                  },
                  has: function (e) {
                    var t = g(this);
                    if (!a(e)) return !1;
                    var i = r(e);
                    return !0 === i ? y(t).has(e) : i && u(i, t.id);
                  },
                }),
                n(
                  p,
                  i
                    ? {
                        get: function (e) {
                          var t = g(this);
                          if (a(e)) {
                            var i = r(e);
                            return !0 === i
                              ? y(t).get(e)
                              : i
                              ? i[t.id]
                              : void 0;
                          }
                        },
                        set: function (e, t) {
                          return m(this, e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return m(this, e, !0);
                        },
                      }
                ),
                d
              );
            },
          });
      },
      7710: (e, t, i) => {
        "use strict";
        var s = i(2109),
          n = i(7854),
          r = i(1702),
          o = i(4705),
          a = i(1320),
          l = i(2423),
          c = i(408),
          d = i(5787),
          u = i(614),
          p = i(111),
          h = i(7293),
          f = i(7072),
          g = i(8003),
          m = i(9587);
        e.exports = function (e, t, i) {
          var v = -1 !== e.indexOf("Map"),
            b = -1 !== e.indexOf("Weak"),
            y = v ? "set" : "add",
            x = n[e],
            w = x && x.prototype,
            S = x,
            E = {},
            C = function (e) {
              var t = r(w[e]);
              a(
                w,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return b && !p(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, i) {
                      return t(this, 0 === e ? 0 : e, i), this;
                    }
              );
            };
          if (
            o(
              e,
              !u(x) ||
                !(
                  b ||
                  (w.forEach &&
                    !h(function () {
                      new x().entries().next();
                    }))
                )
            )
          )
            (S = i.getConstructor(t, e, v, y)), l.enable();
          else if (o(e, !0)) {
            var T = new S(),
              O = T[y](b ? {} : -0, 1) != T,
              A = h(function () {
                T.has(1);
              }),
              L = f(function (e) {
                new x(e);
              }),
              k =
                !b &&
                h(function () {
                  for (var e = new x(), t = 5; t--; ) e[y](t, t);
                  return !e.has(-0);
                });
            L ||
              (((S = t(function (e, t) {
                d(e, w);
                var i = m(new x(), e, S);
                return null != t && c(t, i[y], { that: i, AS_ENTRIES: v }), i;
              })).prototype = w),
              (w.constructor = S)),
              (A || k) && (C("delete"), C("has"), v && C("get")),
              (k || O) && C(y),
              b && w.clear && delete w.clear;
          }
          return (
            (E[e] = S),
            s({ global: !0, forced: S != x }, E),
            g(S, e),
            b || i.setStrong(S, e, v),
            S
          );
        };
      },
      9920: (e, t, i) => {
        var s = i(2597),
          n = i(3887),
          r = i(1236),
          o = i(3070);
        e.exports = function (e, t, i) {
          for (var a = n(t), l = o.f, c = r.f, d = 0; d < a.length; d++) {
            var u = a[d];
            s(e, u) || (i && s(i, u)) || l(e, u, c(t, u));
          }
        };
      },
      8544: (e, t, i) => {
        var s = i(7293);
        e.exports = !s(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      4994: (e, t, i) => {
        "use strict";
        var s = i(3383).IteratorPrototype,
          n = i(30),
          r = i(9114),
          o = i(8003),
          a = i(7497),
          l = function () {
            return this;
          };
        e.exports = function (e, t, i, c) {
          var d = t + " Iterator";
          return (
            (e.prototype = n(s, { next: r(+!c, i) })),
            o(e, d, !1, !0),
            (a[d] = l),
            e
          );
        };
      },
      8880: (e, t, i) => {
        var s = i(9781),
          n = i(3070),
          r = i(9114);
        e.exports = s
          ? function (e, t, i) {
              return n.f(e, t, r(1, i));
            }
          : function (e, t, i) {
              return (e[t] = i), e;
            };
      },
      9114: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      6135: (e, t, i) => {
        "use strict";
        var s = i(4948),
          n = i(3070),
          r = i(9114);
        e.exports = function (e, t, i) {
          var o = s(t);
          o in e ? n.f(e, o, r(0, i)) : (e[o] = i);
        };
      },
      654: (e, t, i) => {
        "use strict";
        var s = i(2109),
          n = i(6916),
          r = i(1913),
          o = i(6530),
          a = i(614),
          l = i(4994),
          c = i(9518),
          d = i(7674),
          u = i(8003),
          p = i(8880),
          h = i(1320),
          f = i(5112),
          g = i(7497),
          m = i(3383),
          v = o.PROPER,
          b = o.CONFIGURABLE,
          y = m.IteratorPrototype,
          x = m.BUGGY_SAFARI_ITERATORS,
          w = f("iterator"),
          S = "keys",
          E = "values",
          C = "entries",
          T = function () {
            return this;
          };
        e.exports = function (e, t, i, o, f, m, O) {
          l(i, t, o);
          var A,
            L,
            k,
            I = function (e) {
              if (e === f && D) return D;
              if (!x && e in _) return _[e];
              switch (e) {
                case S:
                case E:
                case C:
                  return function () {
                    return new i(this, e);
                  };
              }
              return function () {
                return new i(this);
              };
            },
            M = t + " Iterator",
            P = !1,
            _ = e.prototype,
            $ = _[w] || _["@@iterator"] || (f && _[f]),
            D = (!x && $) || I(f),
            z = ("Array" == t && _.entries) || $;
          if (
            (z &&
              (A = c(z.call(new e()))) !== Object.prototype &&
              A.next &&
              (r || c(A) === y || (d ? d(A, y) : a(A[w]) || h(A, w, T)),
              u(A, M, !0, !0),
              r && (g[M] = T)),
            v &&
              f == E &&
              $ &&
              $.name !== E &&
              (!r && b
                ? p(_, "name", E)
                : ((P = !0),
                  (D = function () {
                    return n($, this);
                  }))),
            f)
          )
            if (((L = { values: I(E), keys: m ? D : I(S), entries: I(C) }), O))
              for (k in L) (x || P || !(k in _)) && h(_, k, L[k]);
            else s({ target: t, proto: !0, forced: x || P }, L);
          return (
            (r && !O) || _[w] === D || h(_, w, D, { name: f }), (g[t] = D), L
          );
        };
      },
      9781: (e, t, i) => {
        var s = i(7293);
        e.exports = !s(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      317: (e, t, i) => {
        var s = i(7854),
          n = i(111),
          r = s.document,
          o = n(r) && n(r.createElement);
        e.exports = function (e) {
          return o ? r.createElement(e) : {};
        };
      },
      8324: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      8509: (e, t, i) => {
        var s = i(317)("span").classList,
          n = s && s.constructor && s.constructor.prototype;
        e.exports = n === Object.prototype ? void 0 : n;
      },
      5268: (e, t, i) => {
        var s = i(4326),
          n = i(7854);
        e.exports = "process" == s(n.process);
      },
      8113: (e, t, i) => {
        var s = i(5005);
        e.exports = s("navigator", "userAgent") || "";
      },
      7392: (e, t, i) => {
        var s,
          n,
          r = i(7854),
          o = i(8113),
          a = r.process,
          l = r.Deno,
          c = (a && a.versions) || (l && l.version),
          d = c && c.v8;
        d && (n = (s = d.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])),
          !n &&
            o &&
            (!(s = o.match(/Edge\/(\d+)/)) || s[1] >= 74) &&
            (s = o.match(/Chrome\/(\d+)/)) &&
            (n = +s[1]),
          (e.exports = n);
      },
      748: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      2109: (e, t, i) => {
        var s = i(7854),
          n = i(1236).f,
          r = i(8880),
          o = i(1320),
          a = i(3505),
          l = i(9920),
          c = i(4705);
        e.exports = function (e, t) {
          var i,
            d,
            u,
            p,
            h,
            f = e.target,
            g = e.global,
            m = e.stat;
          if ((i = g ? s : m ? s[f] || a(f, {}) : (s[f] || {}).prototype))
            for (d in t) {
              if (
                ((p = t[d]),
                (u = e.noTargetGet ? (h = n(i, d)) && h.value : i[d]),
                !c(g ? d : f + (m ? "." : "#") + d, e.forced) && void 0 !== u)
              ) {
                if (typeof p == typeof u) continue;
                l(p, u);
              }
              (e.sham || (u && u.sham)) && r(p, "sham", !0), o(i, d, p, e);
            }
        };
      },
      7293: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      7007: (e, t, i) => {
        "use strict";
        i(4916);
        var s = i(1702),
          n = i(1320),
          r = i(2261),
          o = i(7293),
          a = i(5112),
          l = i(8880),
          c = a("species"),
          d = RegExp.prototype;
        e.exports = function (e, t, i, u) {
          var p = a(e),
            h = !o(function () {
              var t = {};
              return (
                (t[p] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            f =
              h &&
              !o(function () {
                var t = !1,
                  i = /a/;
                return (
                  "split" === e &&
                    (((i = {}).constructor = {}),
                    (i.constructor[c] = function () {
                      return i;
                    }),
                    (i.flags = ""),
                    (i[p] = /./[p])),
                  (i.exec = function () {
                    return (t = !0), null;
                  }),
                  i[p](""),
                  !t
                );
              });
          if (!h || !f || i) {
            var g = s(/./[p]),
              m = t(p, ""[e], function (e, t, i, n, o) {
                var a = s(e),
                  l = t.exec;
                return l === r || l === d.exec
                  ? h && !o
                    ? { done: !0, value: g(t, i, n) }
                    : { done: !0, value: a(i, t, n) }
                  : { done: !1 };
              });
            n(String.prototype, e, m[0]), n(d, p, m[1]);
          }
          u && l(d[p], "sham", !0);
        };
      },
      6677: (e, t, i) => {
        var s = i(7293);
        e.exports = !s(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      2104: (e) => {
        var t = Function.prototype,
          i = t.apply,
          s = t.bind,
          n = t.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (s
            ? n.bind(i)
            : function () {
                return n.apply(i, arguments);
              });
      },
      9974: (e, t, i) => {
        var s = i(1702),
          n = i(9662),
          r = s(s.bind);
        e.exports = function (e, t) {
          return (
            n(e),
            void 0 === t
              ? e
              : r
              ? r(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      6916: (e) => {
        var t = Function.prototype.call;
        e.exports = t.bind
          ? t.bind(t)
          : function () {
              return t.apply(t, arguments);
            };
      },
      6530: (e, t, i) => {
        var s = i(9781),
          n = i(2597),
          r = Function.prototype,
          o = s && Object.getOwnPropertyDescriptor,
          a = n(r, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!s || (s && o(r, "name").configurable));
        e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      1702: (e) => {
        var t = Function.prototype,
          i = t.bind,
          s = t.call,
          n = i && i.bind(s);
        e.exports = i
          ? function (e) {
              return e && n(s, e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return s.apply(e, arguments);
                }
              );
            };
      },
      5005: (e, t, i) => {
        var s = i(7854),
          n = i(614),
          r = function (e) {
            return n(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? r(s[e]) : s[e] && s[e][t];
        };
      },
      1246: (e, t, i) => {
        var s = i(648),
          n = i(8173),
          r = i(7497),
          o = i(5112)("iterator");
        e.exports = function (e) {
          if (null != e) return n(e, o) || n(e, "@@iterator") || r[s(e)];
        };
      },
      8554: (e, t, i) => {
        var s = i(7854),
          n = i(6916),
          r = i(9662),
          o = i(9670),
          a = i(6330),
          l = i(1246),
          c = s.TypeError;
        e.exports = function (e, t) {
          var i = arguments.length < 2 ? l(e) : t;
          if (r(i)) return o(n(i, e));
          throw c(a(e) + " is not iterable");
        };
      },
      8173: (e, t, i) => {
        var s = i(9662);
        e.exports = function (e, t) {
          var i = e[t];
          return null == i ? void 0 : s(i);
        };
      },
      647: (e, t, i) => {
        var s = i(1702),
          n = i(7908),
          r = Math.floor,
          o = s("".charAt),
          a = s("".replace),
          l = s("".slice),
          c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          d = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, i, s, u, p) {
          var h = i + e.length,
            f = s.length,
            g = d;
          return (
            void 0 !== u && ((u = n(u)), (g = c)),
            a(p, g, function (n, a) {
              var c;
              switch (o(a, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return l(t, 0, i);
                case "'":
                  return l(t, h);
                case "<":
                  c = u[l(a, 1, -1)];
                  break;
                default:
                  var d = +a;
                  if (0 === d) return n;
                  if (d > f) {
                    var p = r(d / 10);
                    return 0 === p
                      ? n
                      : p <= f
                      ? void 0 === s[p - 1]
                        ? o(a, 1)
                        : s[p - 1] + o(a, 1)
                      : n;
                  }
                  c = s[d - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        };
      },
      7854: (e, t, i) => {
        var s = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          s("object" == typeof globalThis && globalThis) ||
          s("object" == typeof window && window) ||
          s("object" == typeof self && self) ||
          s("object" == typeof i.g && i.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      2597: (e, t, i) => {
        var s = i(1702),
          n = i(7908),
          r = s({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return r(n(e), t);
          };
      },
      3501: (e) => {
        e.exports = {};
      },
      490: (e, t, i) => {
        var s = i(5005);
        e.exports = s("document", "documentElement");
      },
      4664: (e, t, i) => {
        var s = i(9781),
          n = i(7293),
          r = i(317);
        e.exports =
          !s &&
          !n(function () {
            return (
              7 !=
              Object.defineProperty(r("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      8361: (e, t, i) => {
        var s = i(7854),
          n = i(1702),
          r = i(7293),
          o = i(4326),
          a = s.Object,
          l = n("".split);
        e.exports = r(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == o(e) ? l(e, "") : a(e);
            }
          : a;
      },
      9587: (e, t, i) => {
        var s = i(614),
          n = i(111),
          r = i(7674);
        e.exports = function (e, t, i) {
          var o, a;
          return (
            r &&
              s((o = t.constructor)) &&
              o !== i &&
              n((a = o.prototype)) &&
              a !== i.prototype &&
              r(e, a),
            e
          );
        };
      },
      2788: (e, t, i) => {
        var s = i(1702),
          n = i(614),
          r = i(5465),
          o = s(Function.toString);
        n(r.inspectSource) ||
          (r.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = r.inspectSource);
      },
      2423: (e, t, i) => {
        var s = i(2109),
          n = i(1702),
          r = i(3501),
          o = i(111),
          a = i(2597),
          l = i(3070).f,
          c = i(8006),
          d = i(1156),
          u = i(2050),
          p = i(9711),
          h = i(6677),
          f = !1,
          g = p("meta"),
          m = 0,
          v = function (e) {
            l(e, g, { value: { objectID: "O" + m++, weakData: {} } });
          },
          b = (e.exports = {
            enable: function () {
              (b.enable = function () {}), (f = !0);
              var e = c.f,
                t = n([].splice),
                i = {};
              (i[g] = 1),
                e(i).length &&
                  ((c.f = function (i) {
                    for (var s = e(i), n = 0, r = s.length; n < r; n++)
                      if (s[n] === g) {
                        t(s, n, 1);
                        break;
                      }
                    return s;
                  }),
                  s(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: d.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!o(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!a(e, g)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                v(e);
              }
              return e[g].objectID;
            },
            getWeakData: function (e, t) {
              if (!a(e, g)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                v(e);
              }
              return e[g].weakData;
            },
            onFreeze: function (e) {
              return h && f && u(e) && !a(e, g) && v(e), e;
            },
          });
        r[g] = !0;
      },
      9909: (e, t, i) => {
        var s,
          n,
          r,
          o = i(8536),
          a = i(7854),
          l = i(1702),
          c = i(111),
          d = i(8880),
          u = i(2597),
          p = i(5465),
          h = i(6200),
          f = i(3501),
          g = "Object already initialized",
          m = a.TypeError,
          v = a.WeakMap;
        if (o || p.state) {
          var b = p.state || (p.state = new v()),
            y = l(b.get),
            x = l(b.has),
            w = l(b.set);
          (s = function (e, t) {
            if (x(b, e)) throw new m(g);
            return (t.facade = e), w(b, e, t), t;
          }),
            (n = function (e) {
              return y(b, e) || {};
            }),
            (r = function (e) {
              return x(b, e);
            });
        } else {
          var S = h("state");
          (f[S] = !0),
            (s = function (e, t) {
              if (u(e, S)) throw new m(g);
              return (t.facade = e), d(e, S, t), t;
            }),
            (n = function (e) {
              return u(e, S) ? e[S] : {};
            }),
            (r = function (e) {
              return u(e, S);
            });
        }
        e.exports = {
          set: s,
          get: n,
          has: r,
          enforce: function (e) {
            return r(e) ? n(e) : s(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var i;
              if (!c(t) || (i = n(t)).type !== e)
                throw m("Incompatible receiver, " + e + " required");
              return i;
            };
          },
        };
      },
      7659: (e, t, i) => {
        var s = i(5112),
          n = i(7497),
          r = s("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (n.Array === e || o[r] === e);
        };
      },
      3157: (e, t, i) => {
        var s = i(4326);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == s(e);
          };
      },
      614: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      4411: (e, t, i) => {
        var s = i(1702),
          n = i(7293),
          r = i(614),
          o = i(648),
          a = i(5005),
          l = i(2788),
          c = function () {},
          d = [],
          u = a("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          h = s(p.exec),
          f = !p.exec(c),
          g = function (e) {
            if (!r(e)) return !1;
            try {
              return u(c, d, e), !0;
            } catch (e) {
              return !1;
            }
          },
          m = function (e) {
            if (!r(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return f || !!h(p, l(e));
            } catch (e) {
              return !0;
            }
          };
        (m.sham = !0),
          (e.exports =
            !u ||
            n(function () {
              var e;
              return (
                g(g.call) ||
                !g(Object) ||
                !g(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? m
              : g);
      },
      4705: (e, t, i) => {
        var s = i(7293),
          n = i(614),
          r = /#|\.prototype\./,
          o = function (e, t) {
            var i = l[a(e)];
            return i == d || (i != c && (n(t) ? s(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(r, ".").toLowerCase();
          }),
          l = (o.data = {}),
          c = (o.NATIVE = "N"),
          d = (o.POLYFILL = "P");
        e.exports = o;
      },
      111: (e, t, i) => {
        var s = i(614);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : s(e);
        };
      },
      1913: (e) => {
        e.exports = !1;
      },
      2190: (e, t, i) => {
        var s = i(7854),
          n = i(5005),
          r = i(614),
          o = i(7976),
          a = i(3307),
          l = s.Object;
        e.exports = a
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = n("Symbol");
              return r(t) && o(t.prototype, l(e));
            };
      },
      408: (e, t, i) => {
        var s = i(7854),
          n = i(9974),
          r = i(6916),
          o = i(9670),
          a = i(6330),
          l = i(7659),
          c = i(6244),
          d = i(7976),
          u = i(8554),
          p = i(1246),
          h = i(9212),
          f = s.TypeError,
          g = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          m = g.prototype;
        e.exports = function (e, t, i) {
          var s,
            v,
            b,
            y,
            x,
            w,
            S,
            E = i && i.that,
            C = !(!i || !i.AS_ENTRIES),
            T = !(!i || !i.IS_ITERATOR),
            O = !(!i || !i.INTERRUPTED),
            A = n(t, E),
            L = function (e) {
              return s && h(s, "normal", e), new g(!0, e);
            },
            k = function (e) {
              return C
                ? (o(e), O ? A(e[0], e[1], L) : A(e[0], e[1]))
                : O
                ? A(e, L)
                : A(e);
            };
          if (T) s = e;
          else {
            if (!(v = p(e))) throw f(a(e) + " is not iterable");
            if (l(v)) {
              for (b = 0, y = c(e); y > b; b++)
                if ((x = k(e[b])) && d(m, x)) return x;
              return new g(!1);
            }
            s = u(e, v);
          }
          for (w = s.next; !(S = r(w, s)).done; ) {
            try {
              x = k(S.value);
            } catch (e) {
              h(s, "throw", e);
            }
            if ("object" == typeof x && x && d(m, x)) return x;
          }
          return new g(!1);
        };
      },
      9212: (e, t, i) => {
        var s = i(6916),
          n = i(9670),
          r = i(8173);
        e.exports = function (e, t, i) {
          var o, a;
          n(e);
          try {
            if (!(o = r(e, "return"))) {
              if ("throw" === t) throw i;
              return i;
            }
            o = s(o, e);
          } catch (e) {
            (a = !0), (o = e);
          }
          if ("throw" === t) throw i;
          if (a) throw o;
          return n(o), i;
        };
      },
      3383: (e, t, i) => {
        "use strict";
        var s,
          n,
          r,
          o = i(7293),
          a = i(614),
          l = i(30),
          c = i(9518),
          d = i(1320),
          u = i(5112),
          p = i(1913),
          h = u("iterator"),
          f = !1;
        [].keys &&
          ("next" in (r = [].keys())
            ? (n = c(c(r))) !== Object.prototype && (s = n)
            : (f = !0)),
          null == s ||
          o(function () {
            var e = {};
            return s[h].call(e) !== e;
          })
            ? (s = {})
            : p && (s = l(s)),
          a(s[h]) ||
            d(s, h, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: s, BUGGY_SAFARI_ITERATORS: f });
      },
      7497: (e) => {
        e.exports = {};
      },
      6244: (e, t, i) => {
        var s = i(7466);
        e.exports = function (e) {
          return s(e.length);
        };
      },
      133: (e, t, i) => {
        var s = i(7392),
          n = i(7293);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !n(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && s && s < 41)
            );
          });
      },
      8536: (e, t, i) => {
        var s = i(7854),
          n = i(614),
          r = i(2788),
          o = s.WeakMap;
        e.exports = n(o) && /native code/.test(r(o));
      },
      3009: (e, t, i) => {
        var s = i(7854),
          n = i(7293),
          r = i(1702),
          o = i(1340),
          a = i(3111).trim,
          l = i(1361),
          c = s.parseInt,
          d = s.Symbol,
          u = d && d.iterator,
          p = /^[+-]?0x/i,
          h = r(p.exec),
          f =
            8 !== c(l + "08") ||
            22 !== c(l + "0x16") ||
            (u &&
              !n(function () {
                c(Object(u));
              }));
        e.exports = f
          ? function (e, t) {
              var i = a(o(e));
              return c(i, t >>> 0 || (h(p, i) ? 16 : 10));
            }
          : c;
      },
      1574: (e, t, i) => {
        "use strict";
        var s = i(9781),
          n = i(1702),
          r = i(6916),
          o = i(7293),
          a = i(1956),
          l = i(5181),
          c = i(5296),
          d = i(7908),
          u = i(8361),
          p = Object.assign,
          h = Object.defineProperty,
          f = n([].concat);
        e.exports =
          !p ||
          o(function () {
            if (
              s &&
              1 !==
                p(
                  { b: 1 },
                  p(
                    h({}, "a", {
                      enumerable: !0,
                      get: function () {
                        h(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              i = Symbol(),
              n = "abcdefghijklmnopqrst";
            return (
              (e[i] = 7),
              n.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != p({}, e)[i] || a(p({}, t)).join("") != n
            );
          })
            ? function (e, t) {
                for (
                  var i = d(e), n = arguments.length, o = 1, p = l.f, h = c.f;
                  n > o;

                )
                  for (
                    var g,
                      m = u(arguments[o++]),
                      v = p ? f(a(m), p(m)) : a(m),
                      b = v.length,
                      y = 0;
                    b > y;

                  )
                    (g = v[y++]), (s && !r(h, m, g)) || (i[g] = m[g]);
                return i;
              }
            : p;
      },
      30: (e, t, i) => {
        var s,
          n = i(9670),
          r = i(6048),
          o = i(748),
          a = i(3501),
          l = i(490),
          c = i(317),
          d = i(6200),
          u = d("IE_PROTO"),
          p = function () {},
          h = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          f = function (e) {
            e.write(h("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          g = function () {
            try {
              s = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            g =
              "undefined" != typeof document
                ? document.domain && s
                  ? f(s)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(h("document.F=Object")),
                    e.close(),
                    e.F)
                : f(s);
            for (var i = o.length; i--; ) delete g.prototype[o[i]];
            return g();
          };
        (a[u] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var i;
              return (
                null !== e
                  ? ((p.prototype = n(e)),
                    (i = new p()),
                    (p.prototype = null),
                    (i[u] = e))
                  : (i = g()),
                void 0 === t ? i : r(i, t)
              );
            });
      },
      6048: (e, t, i) => {
        var s = i(9781),
          n = i(3070),
          r = i(9670),
          o = i(5656),
          a = i(1956);
        e.exports = s
          ? Object.defineProperties
          : function (e, t) {
              r(e);
              for (var i, s = o(t), l = a(t), c = l.length, d = 0; c > d; )
                n.f(e, (i = l[d++]), s[i]);
              return e;
            };
      },
      3070: (e, t, i) => {
        var s = i(7854),
          n = i(9781),
          r = i(4664),
          o = i(9670),
          a = i(4948),
          l = s.TypeError,
          c = Object.defineProperty;
        t.f = n
          ? c
          : function (e, t, i) {
              if ((o(e), (t = a(t)), o(i), r))
                try {
                  return c(e, t, i);
                } catch (e) {}
              if ("get" in i || "set" in i) throw l("Accessors not supported");
              return "value" in i && (e[t] = i.value), e;
            };
      },
      1236: (e, t, i) => {
        var s = i(9781),
          n = i(6916),
          r = i(5296),
          o = i(9114),
          a = i(5656),
          l = i(4948),
          c = i(2597),
          d = i(4664),
          u = Object.getOwnPropertyDescriptor;
        t.f = s
          ? u
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), d))
                try {
                  return u(e, t);
                } catch (e) {}
              if (c(e, t)) return o(!n(r.f, e, t), e[t]);
            };
      },
      1156: (e, t, i) => {
        var s = i(4326),
          n = i(5656),
          r = i(8006).f,
          o = i(1589),
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "Window" == s(e)
            ? (function (e) {
                try {
                  return r(e);
                } catch (e) {
                  return o(a);
                }
              })(e)
            : r(n(e));
        };
      },
      8006: (e, t, i) => {
        var s = i(6324),
          n = i(748).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return s(e, n);
          };
      },
      5181: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      9518: (e, t, i) => {
        var s = i(7854),
          n = i(2597),
          r = i(614),
          o = i(7908),
          a = i(6200),
          l = i(8544),
          c = a("IE_PROTO"),
          d = s.Object,
          u = d.prototype;
        e.exports = l
          ? d.getPrototypeOf
          : function (e) {
              var t = o(e);
              if (n(t, c)) return t[c];
              var i = t.constructor;
              return r(i) && t instanceof i
                ? i.prototype
                : t instanceof d
                ? u
                : null;
            };
      },
      2050: (e, t, i) => {
        var s = i(7293),
          n = i(111),
          r = i(4326),
          o = i(7556),
          a = Object.isExtensible,
          l = s(function () {
            a(1);
          });
        e.exports =
          l || o
            ? function (e) {
                return !!n(e) && (!o || "ArrayBuffer" != r(e)) && (!a || a(e));
              }
            : a;
      },
      7976: (e, t, i) => {
        var s = i(1702);
        e.exports = s({}.isPrototypeOf);
      },
      6324: (e, t, i) => {
        var s = i(1702),
          n = i(2597),
          r = i(5656),
          o = i(1318).indexOf,
          a = i(3501),
          l = s([].push);
        e.exports = function (e, t) {
          var i,
            s = r(e),
            c = 0,
            d = [];
          for (i in s) !n(a, i) && n(s, i) && l(d, i);
          for (; t.length > c; ) n(s, (i = t[c++])) && (~o(d, i) || l(d, i));
          return d;
        };
      },
      1956: (e, t, i) => {
        var s = i(6324),
          n = i(748);
        e.exports =
          Object.keys ||
          function (e) {
            return s(e, n);
          };
      },
      5296: (e, t) => {
        "use strict";
        var i = {}.propertyIsEnumerable,
          s = Object.getOwnPropertyDescriptor,
          n = s && !i.call({ 1: 2 }, 1);
        t.f = n
          ? function (e) {
              var t = s(this, e);
              return !!t && t.enumerable;
            }
          : i;
      },
      7674: (e, t, i) => {
        var s = i(1702),
          n = i(9670),
          r = i(6077);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  i = {};
                try {
                  (e = s(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(i, []),
                    (t = i instanceof Array);
                } catch (e) {}
                return function (i, s) {
                  return n(i), r(s), t ? e(i, s) : (i.__proto__ = s), i;
                };
              })()
            : void 0);
      },
      288: (e, t, i) => {
        "use strict";
        var s = i(1694),
          n = i(648);
        e.exports = s
          ? {}.toString
          : function () {
              return "[object " + n(this) + "]";
            };
      },
      2140: (e, t, i) => {
        var s = i(7854),
          n = i(6916),
          r = i(614),
          o = i(111),
          a = s.TypeError;
        e.exports = function (e, t) {
          var i, s;
          if ("string" === t && r((i = e.toString)) && !o((s = n(i, e))))
            return s;
          if (r((i = e.valueOf)) && !o((s = n(i, e)))) return s;
          if ("string" !== t && r((i = e.toString)) && !o((s = n(i, e))))
            return s;
          throw a("Can't convert object to primitive value");
        };
      },
      3887: (e, t, i) => {
        var s = i(5005),
          n = i(1702),
          r = i(8006),
          o = i(5181),
          a = i(9670),
          l = n([].concat);
        e.exports =
          s("Reflect", "ownKeys") ||
          function (e) {
            var t = r.f(a(e)),
              i = o.f;
            return i ? l(t, i(e)) : t;
          };
      },
      2248: (e, t, i) => {
        var s = i(1320);
        e.exports = function (e, t, i) {
          for (var n in t) s(e, n, t[n], i);
          return e;
        };
      },
      1320: (e, t, i) => {
        var s = i(7854),
          n = i(614),
          r = i(2597),
          o = i(8880),
          a = i(3505),
          l = i(2788),
          c = i(9909),
          d = i(6530).CONFIGURABLE,
          u = c.get,
          p = c.enforce,
          h = String(String).split("String");
        (e.exports = function (e, t, i, l) {
          var c,
            u = !!l && !!l.unsafe,
            f = !!l && !!l.enumerable,
            g = !!l && !!l.noTargetGet,
            m = l && void 0 !== l.name ? l.name : t;
          n(i) &&
            ("Symbol(" === String(m).slice(0, 7) &&
              (m = "[" + String(m).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!r(i, "name") || (d && i.name !== m)) && o(i, "name", m),
            (c = p(i)).source ||
              (c.source = h.join("string" == typeof m ? m : ""))),
            e !== s
              ? (u ? !g && e[t] && (f = !0) : delete e[t],
                f ? (e[t] = i) : o(e, t, i))
              : f
              ? (e[t] = i)
              : a(t, i);
        })(Function.prototype, "toString", function () {
          return (n(this) && u(this).source) || l(this);
        });
      },
      7651: (e, t, i) => {
        var s = i(7854),
          n = i(6916),
          r = i(9670),
          o = i(614),
          a = i(4326),
          l = i(2261),
          c = s.TypeError;
        e.exports = function (e, t) {
          var i = e.exec;
          if (o(i)) {
            var s = n(i, e, t);
            return null !== s && r(s), s;
          }
          if ("RegExp" === a(e)) return n(l, e, t);
          throw c("RegExp#exec called on incompatible receiver");
        };
      },
      2261: (e, t, i) => {
        "use strict";
        var s,
          n,
          r = i(6916),
          o = i(1702),
          a = i(1340),
          l = i(7066),
          c = i(2999),
          d = i(2309),
          u = i(30),
          p = i(9909).get,
          h = i(9441),
          f = i(7168),
          g = d("native-string-replace", String.prototype.replace),
          m = RegExp.prototype.exec,
          v = m,
          b = o("".charAt),
          y = o("".indexOf),
          x = o("".replace),
          w = o("".slice),
          S =
            ((n = /b*/g),
            r(m, (s = /a/), "a"),
            r(m, n, "a"),
            0 !== s.lastIndex || 0 !== n.lastIndex),
          E = c.BROKEN_CARET,
          C = void 0 !== /()??/.exec("")[1];
        (S || C || E || h || f) &&
          (v = function (e) {
            var t,
              i,
              s,
              n,
              o,
              c,
              d,
              h = this,
              f = p(h),
              T = a(e),
              O = f.raw;
            if (O)
              return (
                (O.lastIndex = h.lastIndex),
                (t = r(v, O, T)),
                (h.lastIndex = O.lastIndex),
                t
              );
            var A = f.groups,
              L = E && h.sticky,
              k = r(l, h),
              I = h.source,
              M = 0,
              P = T;
            if (
              (L &&
                ((k = x(k, "y", "")),
                -1 === y(k, "g") && (k += "g"),
                (P = w(T, h.lastIndex)),
                h.lastIndex > 0 &&
                  (!h.multiline ||
                    (h.multiline && "\n" !== b(T, h.lastIndex - 1))) &&
                  ((I = "(?: " + I + ")"), (P = " " + P), M++),
                (i = new RegExp("^(?:" + I + ")", k))),
              C && (i = new RegExp("^" + I + "$(?!\\s)", k)),
              S && (s = h.lastIndex),
              (n = r(m, L ? i : h, P)),
              L
                ? n
                  ? ((n.input = w(n.input, M)),
                    (n[0] = w(n[0], M)),
                    (n.index = h.lastIndex),
                    (h.lastIndex += n[0].length))
                  : (h.lastIndex = 0)
                : S &&
                  n &&
                  (h.lastIndex = h.global ? n.index + n[0].length : s),
              C &&
                n &&
                n.length > 1 &&
                r(g, n[0], i, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (n[o] = void 0);
                }),
              n && A)
            )
              for (n.groups = c = u(null), o = 0; o < A.length; o++)
                c[(d = A[o])[0]] = n[d[1]];
            return n;
          }),
          (e.exports = v);
      },
      7066: (e, t, i) => {
        "use strict";
        var s = i(9670);
        e.exports = function () {
          var e = s(this),
            t = "";
          return (
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      2999: (e, t, i) => {
        var s = i(7293),
          n = i(7854).RegExp,
          r = s(function () {
            var e = n("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          }),
          o =
            r ||
            s(function () {
              return !n("a", "y").sticky;
            }),
          a =
            r ||
            s(function () {
              var e = n("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            });
        e.exports = { BROKEN_CARET: a, MISSED_STICKY: o, UNSUPPORTED_Y: r };
      },
      9441: (e, t, i) => {
        var s = i(7293),
          n = i(7854).RegExp;
        e.exports = s(function () {
          var e = n(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      7168: (e, t, i) => {
        var s = i(7293),
          n = i(7854).RegExp;
        e.exports = s(function () {
          var e = n("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      4488: (e, t, i) => {
        var s = i(7854).TypeError;
        e.exports = function (e) {
          if (null == e) throw s("Can't call method on " + e);
          return e;
        };
      },
      3505: (e, t, i) => {
        var s = i(7854),
          n = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            n(s, e, { value: t, configurable: !0, writable: !0 });
          } catch (i) {
            s[e] = t;
          }
          return t;
        };
      },
      8003: (e, t, i) => {
        var s = i(3070).f,
          n = i(2597),
          r = i(5112)("toStringTag");
        e.exports = function (e, t, i) {
          e && !i && (e = e.prototype),
            e && !n(e, r) && s(e, r, { configurable: !0, value: t });
        };
      },
      6200: (e, t, i) => {
        var s = i(2309),
          n = i(9711),
          r = s("keys");
        e.exports = function (e) {
          return r[e] || (r[e] = n(e));
        };
      },
      5465: (e, t, i) => {
        var s = i(7854),
          n = i(3505),
          r = "__core-js_shared__",
          o = s[r] || n(r, {});
        e.exports = o;
      },
      2309: (e, t, i) => {
        var s = i(1913),
          n = i(5465);
        (e.exports = function (e, t) {
          return n[e] || (n[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.20.1",
          mode: s ? "pure" : "global",
          copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
        });
      },
      8710: (e, t, i) => {
        var s = i(1702),
          n = i(9303),
          r = i(1340),
          o = i(4488),
          a = s("".charAt),
          l = s("".charCodeAt),
          c = s("".slice),
          d = function (e) {
            return function (t, i) {
              var s,
                d,
                u = r(o(t)),
                p = n(i),
                h = u.length;
              return p < 0 || p >= h
                ? e
                  ? ""
                  : void 0
                : (s = l(u, p)) < 55296 ||
                  s > 56319 ||
                  p + 1 === h ||
                  (d = l(u, p + 1)) < 56320 ||
                  d > 57343
                ? e
                  ? a(u, p)
                  : s
                : e
                ? c(u, p, p + 2)
                : d - 56320 + ((s - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: d(!1), charAt: d(!0) };
      },
      3111: (e, t, i) => {
        var s = i(1702),
          n = i(4488),
          r = i(1340),
          o = i(1361),
          a = s("".replace),
          l = "[" + o + "]",
          c = RegExp("^" + l + l + "*"),
          d = RegExp(l + l + "*$"),
          u = function (e) {
            return function (t) {
              var i = r(n(t));
              return 1 & e && (i = a(i, c, "")), 2 & e && (i = a(i, d, "")), i;
            };
          };
        e.exports = { start: u(1), end: u(2), trim: u(3) };
      },
      1400: (e, t, i) => {
        var s = i(9303),
          n = Math.max,
          r = Math.min;
        e.exports = function (e, t) {
          var i = s(e);
          return i < 0 ? n(i + t, 0) : r(i, t);
        };
      },
      5656: (e, t, i) => {
        var s = i(8361),
          n = i(4488);
        e.exports = function (e) {
          return s(n(e));
        };
      },
      9303: (e) => {
        var t = Math.ceil,
          i = Math.floor;
        e.exports = function (e) {
          var s = +e;
          return s != s || 0 === s ? 0 : (s > 0 ? i : t)(s);
        };
      },
      7466: (e, t, i) => {
        var s = i(9303),
          n = Math.min;
        e.exports = function (e) {
          return e > 0 ? n(s(e), 9007199254740991) : 0;
        };
      },
      7908: (e, t, i) => {
        var s = i(7854),
          n = i(4488),
          r = s.Object;
        e.exports = function (e) {
          return r(n(e));
        };
      },
      7593: (e, t, i) => {
        var s = i(7854),
          n = i(6916),
          r = i(111),
          o = i(2190),
          a = i(8173),
          l = i(2140),
          c = i(5112),
          d = s.TypeError,
          u = c("toPrimitive");
        e.exports = function (e, t) {
          if (!r(e) || o(e)) return e;
          var i,
            s = a(e, u);
          if (s) {
            if (
              (void 0 === t && (t = "default"), (i = n(s, e, t)), !r(i) || o(i))
            )
              return i;
            throw d("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), l(e, t);
        };
      },
      4948: (e, t, i) => {
        var s = i(7593),
          n = i(2190);
        e.exports = function (e) {
          var t = s(e, "string");
          return n(t) ? t : t + "";
        };
      },
      1694: (e, t, i) => {
        var s = {};
        (s[i(5112)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(s));
      },
      1340: (e, t, i) => {
        var s = i(7854),
          n = i(648),
          r = s.String;
        e.exports = function (e) {
          if ("Symbol" === n(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return r(e);
        };
      },
      6330: (e, t, i) => {
        var s = i(7854).String;
        e.exports = function (e) {
          try {
            return s(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9711: (e, t, i) => {
        var s = i(1702),
          n = 0,
          r = Math.random(),
          o = s((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++n + r, 36);
        };
      },
      3307: (e, t, i) => {
        var s = i(133);
        e.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      5112: (e, t, i) => {
        var s = i(7854),
          n = i(2309),
          r = i(2597),
          o = i(9711),
          a = i(133),
          l = i(3307),
          c = n("wks"),
          d = s.Symbol,
          u = d && d.for,
          p = l ? d : (d && d.withoutSetter) || o;
        e.exports = function (e) {
          if (!r(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && r(d, e) ? (c[e] = d[e]) : (c[e] = l && u ? u(t) : p(t));
          }
          return c[e];
        };
      },
      1361: (e) => {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
      },
      7327: (e, t, i) => {
        "use strict";
        var s = i(2109),
          n = i(2092).filter;
        s(
          { target: "Array", proto: !0, forced: !i(1194)("filter") },
          {
            filter: function (e) {
              return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      9554: (e, t, i) => {
        "use strict";
        var s = i(2109),
          n = i(8533);
        s(
          { target: "Array", proto: !0, forced: [].forEach != n },
          { forEach: n }
        );
      },
      6992: (e, t, i) => {
        "use strict";
        var s = i(5656),
          n = i(1223),
          r = i(7497),
          o = i(9909),
          a = i(3070).f,
          l = i(654),
          c = i(1913),
          d = i(9781),
          u = "Array Iterator",
          p = o.set,
          h = o.getterFor(u);
        e.exports = l(
          Array,
          "Array",
          function (e, t) {
            p(this, { type: u, target: s(e), index: 0, kind: t });
          },
          function () {
            var e = h(this),
              t = e.target,
              i = e.kind,
              s = e.index++;
            return !t || s >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == i
              ? { value: s, done: !1 }
              : "values" == i
              ? { value: t[s], done: !1 }
              : { value: [s, t[s]], done: !1 };
          },
          "values"
        );
        var f = (r.Arguments = r.Array);
        if (
          (n("keys"), n("values"), n("entries"), !c && d && "values" !== f.name)
        )
          try {
            a(f, "name", { value: "values" });
          } catch (e) {}
      },
      5827: (e, t, i) => {
        "use strict";
        var s = i(2109),
          n = i(3671).left,
          r = i(9341),
          o = i(7392),
          a = i(5268);
        s(
          {
            target: "Array",
            proto: !0,
            forced: !r("reduce") || (!a && o > 79 && o < 83),
          },
          {
            reduce: function (e) {
              var t = arguments.length;
              return n(this, e, t, t > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      8309: (e, t, i) => {
        var s = i(9781),
          n = i(6530).EXISTS,
          r = i(1702),
          o = i(3070).f,
          a = Function.prototype,
          l = r(a.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          d = r(c.exec);
        s &&
          !n &&
          o(a, "name", {
            configurable: !0,
            get: function () {
              try {
                return d(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      9601: (e, t, i) => {
        var s = i(2109),
          n = i(1574);
        s(
          { target: "Object", stat: !0, forced: Object.assign !== n },
          { assign: n }
        );
      },
      1539: (e, t, i) => {
        var s = i(1694),
          n = i(1320),
          r = i(288);
        s || n(Object.prototype, "toString", r, { unsafe: !0 });
      },
      1058: (e, t, i) => {
        var s = i(2109),
          n = i(3009);
        s({ global: !0, forced: parseInt != n }, { parseInt: n });
      },
      4916: (e, t, i) => {
        "use strict";
        var s = i(2109),
          n = i(2261);
        s({ target: "RegExp", proto: !0, forced: /./.exec !== n }, { exec: n });
      },
      8783: (e, t, i) => {
        "use strict";
        var s = i(8710).charAt,
          n = i(1340),
          r = i(9909),
          o = i(654),
          a = "String Iterator",
          l = r.set,
          c = r.getterFor(a);
        o(
          String,
          "String",
          function (e) {
            l(this, { type: a, string: n(e), index: 0 });
          },
          function () {
            var e,
              t = c(this),
              i = t.string,
              n = t.index;
            return n >= i.length
              ? { value: void 0, done: !0 }
              : ((e = s(i, n)), (t.index += e.length), { value: e, done: !1 });
          }
        );
      },
      4723: (e, t, i) => {
        "use strict";
        var s = i(6916),
          n = i(7007),
          r = i(9670),
          o = i(7466),
          a = i(1340),
          l = i(4488),
          c = i(8173),
          d = i(1530),
          u = i(7651);
        n("match", function (e, t, i) {
          return [
            function (t) {
              var i = l(this),
                n = null == t ? void 0 : c(t, e);
              return n ? s(n, t, i) : new RegExp(t)[e](a(i));
            },
            function (e) {
              var s = r(this),
                n = a(e),
                l = i(t, s, n);
              if (l.done) return l.value;
              if (!s.global) return u(s, n);
              var c = s.unicode;
              s.lastIndex = 0;
              for (var p, h = [], f = 0; null !== (p = u(s, n)); ) {
                var g = a(p[0]);
                (h[f] = g),
                  "" === g && (s.lastIndex = d(n, o(s.lastIndex), c)),
                  f++;
              }
              return 0 === f ? null : h;
            },
          ];
        });
      },
      5306: (e, t, i) => {
        "use strict";
        var s = i(2104),
          n = i(6916),
          r = i(1702),
          o = i(7007),
          a = i(7293),
          l = i(9670),
          c = i(614),
          d = i(9303),
          u = i(7466),
          p = i(1340),
          h = i(4488),
          f = i(1530),
          g = i(8173),
          m = i(647),
          v = i(7651),
          b = i(5112)("replace"),
          y = Math.max,
          x = Math.min,
          w = r([].concat),
          S = r([].push),
          E = r("".indexOf),
          C = r("".slice),
          T = "$0" === "a".replace(/./, "$0"),
          O = !!/./[b] && "" === /./[b]("a", "$0");
        o(
          "replace",
          function (e, t, i) {
            var r = O ? "$" : "$0";
            return [
              function (e, i) {
                var s = h(this),
                  r = null == e ? void 0 : g(e, b);
                return r ? n(r, e, s, i) : n(t, p(s), e, i);
              },
              function (e, n) {
                var o = l(this),
                  a = p(e);
                if (
                  "string" == typeof n &&
                  -1 === E(n, r) &&
                  -1 === E(n, "$<")
                ) {
                  var h = i(t, o, a, n);
                  if (h.done) return h.value;
                }
                var g = c(n);
                g || (n = p(n));
                var b = o.global;
                if (b) {
                  var T = o.unicode;
                  o.lastIndex = 0;
                }
                for (var O = []; ; ) {
                  var A = v(o, a);
                  if (null === A) break;
                  if ((S(O, A), !b)) break;
                  "" === p(A[0]) && (o.lastIndex = f(a, u(o.lastIndex), T));
                }
                for (var L, k = "", I = 0, M = 0; M < O.length; M++) {
                  for (
                    var P = p((A = O[M])[0]),
                      _ = y(x(d(A.index), a.length), 0),
                      $ = [],
                      D = 1;
                    D < A.length;
                    D++
                  )
                    S($, void 0 === (L = A[D]) ? L : String(L));
                  var z = A.groups;
                  if (g) {
                    var j = w([P], $, _, a);
                    void 0 !== z && S(j, z);
                    var B = p(s(n, void 0, j));
                  } else B = m(P, a, _, $, z, n);
                  _ >= I && ((k += C(a, I, _) + B), (I = _ + P.length));
                }
                return k + C(a, I);
              },
            ];
          },
          !!a(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !T ||
            O
        );
      },
      4129: (e, t, i) => {
        "use strict";
        var s,
          n = i(7854),
          r = i(1702),
          o = i(2248),
          a = i(2423),
          l = i(7710),
          c = i(9320),
          d = i(111),
          u = i(2050),
          p = i(9909).enforce,
          h = i(8536),
          f = !n.ActiveXObject && "ActiveXObject" in n,
          g = function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          m = l("WeakMap", g, c);
        if (h && f) {
          (s = c.getConstructor(g, "WeakMap", !0)), a.enable();
          var v = m.prototype,
            b = r(v.delete),
            y = r(v.has),
            x = r(v.get),
            w = r(v.set);
          o(v, {
            delete: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new s()),
                  b(this, e) || t.frozen.delete(e)
                );
              }
              return b(this, e);
            },
            has: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new s()),
                  y(this, e) || t.frozen.has(e)
                );
              }
              return y(this, e);
            },
            get: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new s()),
                  y(this, e) ? x(this, e) : t.frozen.get(e)
                );
              }
              return x(this, e);
            },
            set: function (e, t) {
              if (d(e) && !u(e)) {
                var i = p(this);
                i.frozen || (i.frozen = new s()),
                  y(this, e) ? w(this, e, t) : i.frozen.set(e, t);
              } else w(this, e, t);
              return this;
            },
          });
        }
      },
      4747: (e, t, i) => {
        var s = i(7854),
          n = i(8324),
          r = i(8509),
          o = i(8533),
          a = i(8880),
          l = function (e) {
            if (e && e.forEach !== o)
              try {
                a(e, "forEach", o);
              } catch (t) {
                e.forEach = o;
              }
          };
        for (var c in n) n[c] && l(s[c] && s[c].prototype);
        l(r);
      },
      3948: (e, t, i) => {
        var s = i(7854),
          n = i(8324),
          r = i(8509),
          o = i(6992),
          a = i(8880),
          l = i(5112),
          c = l("iterator"),
          d = l("toStringTag"),
          u = o.values,
          p = function (e, t) {
            if (e) {
              if (e[c] !== u)
                try {
                  a(e, c, u);
                } catch (t) {
                  e[c] = u;
                }
              if ((e[d] || a(e, d, t), n[t]))
                for (var i in o)
                  if (e[i] !== o[i])
                    try {
                      a(e, i, o[i]);
                    } catch (t) {
                      e[i] = o[i];
                    }
            }
          };
        for (var h in n) p(s[h] && s[h].prototype, h);
        p(r, "DOMTokenList");
      },
      1296: (e, t, i) => {
        var s = /^\s+|\s+$/g,
          n = /^[-+]0x[0-9a-f]+$/i,
          r = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          a = parseInt,
          l = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          d = l || c || Function("return this")(),
          u = Object.prototype.toString,
          p = Math.max,
          h = Math.min,
          f = function () {
            return d.Date.now();
          };
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function m(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == u.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(s, "");
          var i = r.test(e);
          return i || o.test(e)
            ? a(e.slice(2), i ? 2 : 8)
            : n.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, i) {
          var s,
            n,
            r,
            o,
            a,
            l,
            c = 0,
            d = !1,
            u = !1,
            v = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function b(t) {
            var i = s,
              r = n;
            return (s = n = void 0), (c = t), (o = e.apply(r, i));
          }
          function y(e) {
            return (c = e), (a = setTimeout(w, t)), d ? b(e) : o;
          }
          function x(e) {
            var i = e - l;
            return void 0 === l || i >= t || i < 0 || (u && e - c >= r);
          }
          function w() {
            var e = f();
            if (x(e)) return S(e);
            a = setTimeout(
              w,
              (function (e) {
                var i = t - (e - l);
                return u ? h(i, r - (e - c)) : i;
              })(e)
            );
          }
          function S(e) {
            return (a = void 0), v && s ? b(e) : ((s = n = void 0), o);
          }
          function E() {
            var e = f(),
              i = x(e);
            if (((s = arguments), (n = this), (l = e), i)) {
              if (void 0 === a) return y(l);
              if (u) return (a = setTimeout(w, t)), b(l);
            }
            return void 0 === a && (a = setTimeout(w, t)), o;
          }
          return (
            (t = m(t) || 0),
            g(i) &&
              ((d = !!i.leading),
              (r = (u = "maxWait" in i) ? p(m(i.maxWait) || 0, t) : r),
              (v = "trailing" in i ? !!i.trailing : v)),
            (E.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (c = 0),
                (s = l = n = a = void 0);
            }),
            (E.flush = function () {
              return void 0 === a ? o : S(f());
            }),
            E
          );
        };
      },
      773: (e, t, i) => {
        var s = "__lodash_hash_undefined__",
          n = "[object Function]",
          r = "[object GeneratorFunction]",
          o = /^\[object .+?Constructor\]$/,
          a = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = a || l || Function("return this")();
        var d,
          u = Array.prototype,
          p = Function.prototype,
          h = Object.prototype,
          f = c["__core-js_shared__"],
          g = (d = /[^.]+$/.exec((f && f.keys && f.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + d
            : "",
          m = p.toString,
          v = h.hasOwnProperty,
          b = h.toString,
          y = RegExp(
            "^" +
              m
                .call(v)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          x = u.splice,
          w = k(c, "Map"),
          S = k(Object, "create");
        function E(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function C(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function T(e) {
          var t = -1,
            i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function O(e, t) {
          for (var i, s, n = e.length; n--; )
            if ((i = e[n][0]) === (s = t) || (i != i && s != s)) return n;
          return -1;
        }
        function A(e) {
          if (!M(e) || ((t = e), g && g in t)) return !1;
          var t,
            i =
              (function (e) {
                var t = M(e) ? b.call(e) : "";
                return t == n || t == r;
              })(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
                ? y
                : o;
          return i.test(
            (function (e) {
              if (null != e) {
                try {
                  return m.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          );
        }
        function L(e, t) {
          var i,
            s,
            n = e.__data__;
          return (
            "string" == (s = typeof (i = t)) ||
            "number" == s ||
            "symbol" == s ||
            "boolean" == s
              ? "__proto__" !== i
              : null === i
          )
            ? n["string" == typeof t ? "string" : "hash"]
            : n.map;
        }
        function k(e, t) {
          var i = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return A(i) ? i : void 0;
        }
        function I(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var i = function () {
            var s = arguments,
              n = t ? t.apply(this, s) : s[0],
              r = i.cache;
            if (r.has(n)) return r.get(n);
            var o = e.apply(this, s);
            return (i.cache = r.set(n, o)), o;
          };
          return (i.cache = new (I.Cache || T)()), i;
        }
        function M(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        (E.prototype.clear = function () {
          this.__data__ = S ? S(null) : {};
        }),
          (E.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (E.prototype.get = function (e) {
            var t = this.__data__;
            if (S) {
              var i = t[e];
              return i === s ? void 0 : i;
            }
            return v.call(t, e) ? t[e] : void 0;
          }),
          (E.prototype.has = function (e) {
            var t = this.__data__;
            return S ? void 0 !== t[e] : v.call(t, e);
          }),
          (E.prototype.set = function (e, t) {
            return (this.__data__[e] = S && void 0 === t ? s : t), this;
          }),
          (C.prototype.clear = function () {
            this.__data__ = [];
          }),
          (C.prototype.delete = function (e) {
            var t = this.__data__,
              i = O(t, e);
            return (
              !(i < 0) && (i == t.length - 1 ? t.pop() : x.call(t, i, 1), !0)
            );
          }),
          (C.prototype.get = function (e) {
            var t = this.__data__,
              i = O(t, e);
            return i < 0 ? void 0 : t[i][1];
          }),
          (C.prototype.has = function (e) {
            return O(this.__data__, e) > -1;
          }),
          (C.prototype.set = function (e, t) {
            var i = this.__data__,
              s = O(i, e);
            return s < 0 ? i.push([e, t]) : (i[s][1] = t), this;
          }),
          (T.prototype.clear = function () {
            this.__data__ = {
              hash: new E(),
              map: new (w || C)(),
              string: new E(),
            };
          }),
          (T.prototype.delete = function (e) {
            return L(this, e).delete(e);
          }),
          (T.prototype.get = function (e) {
            return L(this, e).get(e);
          }),
          (T.prototype.has = function (e) {
            return L(this, e).has(e);
          }),
          (T.prototype.set = function (e, t) {
            return L(this, e).set(e, t), this;
          }),
          (I.Cache = T),
          (e.exports = I);
      },
      3096: (e, t, i) => {
        var s = "Expected a function",
          n = /^\s+|\s+$/g,
          r = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          l = parseInt,
          c = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
          d = "object" == typeof self && self && self.Object === Object && self,
          u = c || d || Function("return this")(),
          p = Object.prototype.toString,
          h = Math.max,
          f = Math.min,
          g = function () {
            return u.Date.now();
          };
        function m(e, t, i) {
          var n,
            r,
            o,
            a,
            l,
            c,
            d = 0,
            u = !1,
            p = !1,
            m = !0;
          if ("function" != typeof e) throw new TypeError(s);
          function y(t) {
            var i = n,
              s = r;
            return (n = r = void 0), (d = t), (a = e.apply(s, i));
          }
          function x(e) {
            return (d = e), (l = setTimeout(S, t)), u ? y(e) : a;
          }
          function w(e) {
            var i = e - c;
            return void 0 === c || i >= t || i < 0 || (p && e - d >= o);
          }
          function S() {
            var e = g();
            if (w(e)) return E(e);
            l = setTimeout(
              S,
              (function (e) {
                var i = t - (e - c);
                return p ? f(i, o - (e - d)) : i;
              })(e)
            );
          }
          function E(e) {
            return (l = void 0), m && n ? y(e) : ((n = r = void 0), a);
          }
          function C() {
            var e = g(),
              i = w(e);
            if (((n = arguments), (r = this), (c = e), i)) {
              if (void 0 === l) return x(c);
              if (p) return (l = setTimeout(S, t)), y(c);
            }
            return void 0 === l && (l = setTimeout(S, t)), a;
          }
          return (
            (t = b(t) || 0),
            v(i) &&
              ((u = !!i.leading),
              (o = (p = "maxWait" in i) ? h(b(i.maxWait) || 0, t) : o),
              (m = "trailing" in i ? !!i.trailing : m)),
            (C.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (d = 0),
                (n = c = r = l = void 0);
            }),
            (C.flush = function () {
              return void 0 === l ? a : E(g());
            }),
            C
          );
        }
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == p.call(e))
              );
            })(e)
          )
            return NaN;
          if (v(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(n, "");
          var i = o.test(e);
          return i || a.test(e)
            ? l(e.slice(2), i ? 2 : 8)
            : r.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, i) {
          var n = !0,
            r = !0;
          if ("function" != typeof e) throw new TypeError(s);
          return (
            v(i) &&
              ((n = "leading" in i ? !!i.leading : n),
              (r = "trailing" in i ? !!i.trailing : r)),
            m(e, t, { leading: n, maxWait: t, trailing: r })
          );
        };
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var r = (t[s] = { exports: {} });
    return e[s](r, r.exports, i), r.exports;
  }
  (i.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return i.d(t, { a: t }), t;
  }),
    (i.d = (e, t) => {
      for (var s in t)
        i.o(t, s) &&
          !i.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e(e) {
        this.type = e;
      }
      (e.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            i = t.dataset.da.trim().split(","),
            s = {};
          (s.element = t),
            (s.parent = t.parentNode),
            (s.destination = document.querySelector(i[0].trim())),
            (s.breakpoint = i[1] ? i[1].trim() : "767"),
            (s.place = i[2] ? i[2].trim() : "last"),
            (s.index = this.indexInParent(s.parent, s.element)),
            this.оbjects.push(s);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, i) {
              return Array.prototype.indexOf.call(i, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const i = this.mediaQueries[t],
            s = String.prototype.split.call(i, ","),
            n = window.matchMedia(s[0]),
            r = s[1],
            o = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === r;
            });
          n.addListener(function () {
            e.mediaHandler(n, o);
          }),
            this.mediaHandler(n, o);
        }
      }),
        (e.prototype.mediaHandler = function (e, t) {
          if (e.matches)
            for (let e = 0; e < t.length; e++) {
              const i = t[e];
              (i.index = this.indexInParent(i.parent, i.element)),
                this.moveTo(i.place, i.element, i.destination);
            }
          else
            for (let e = t.length - 1; e >= 0; e--) {
              const i = t[e];
              i.element.classList.contains(this.daClassname) &&
                this.moveBack(i.parent, i.element, i.index);
            }
        }),
        (e.prototype.moveTo = function (e, t, i) {
          t.classList.add(this.daClassname),
            "last" === e || e >= i.children.length
              ? i.insertAdjacentElement("beforeend", t)
              : "first" !== e
              ? i.children[e].insertAdjacentElement("beforebegin", t)
              : i.insertAdjacentElement("afterbegin", t);
        }),
        (e.prototype.moveBack = function (e, t, i) {
          t.classList.remove(this.daClassname),
            void 0 !== e.children[i]
              ? e.children[i].insertAdjacentElement("beforebegin", t)
              : e.insertAdjacentElement("beforeend", t);
        }),
        (e.prototype.indexInParent = function (e, t) {
          const i = Array.prototype.slice.call(e.children);
          return Array.prototype.indexOf.call(i, t);
        }),
        (e.prototype.arraySort = function (e) {
          "min" === this.type
            ? Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? -1
                    : "last" === e.place || "first" === t.place
                    ? 1
                    : e.place - t.place
                  : e.breakpoint - t.breakpoint;
              })
            : Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? 1
                    : "last" === e.place || "first" === t.place
                    ? -1
                    : t.place - e.place
                  : t.breakpoint - e.breakpoint;
              });
        });
      new e("max").init(),
        document.querySelector("#map") &&
          ymaps.ready(function () {
            var e = new ymaps.Map("map", {
                controls: [
                  "trafficControl",
                  "typeSelector",
                  "fullscreenControl",
                  "zoomControl",
                  "geolocationControl",
                ],
                center: [55.76, 37.64],
                zoom: 11,
              }),
              t = new ymaps.Polygon(
                [
                  [
                    [55.9378797392184, 37.59188059765626],
                    [55.91937623050167, 37.852805890625014],
                    [55.79733984395754, 37.959922589843764],
                    [55.62677390279352, 38.0011213203125],
                    [55.53498013691004, 37.92147044140625],
                    [55.51004974710499, 37.72371653515627],
                    [55.50849107094701, 37.572654523437514],
                    [55.55989466465658, 37.43807200390625],
                    [55.690435916574906, 37.273277082031264],
                    [55.8375462190853, 37.259544171875014],
                    [55.91937623050167, 37.36391428906249],
                  ],
                ],
                { hintContent: "Пределы бесплатной доставки" },
                {
                  fillColor: "#AAE48F",
                  strokeColor: "#5CB03D",
                  interactivityModel: "default#transparent",
                  strokeWidth: 8,
                  opacity: 0.7,
                }
              );
            e.geoObjects.add(t),
              e.setBounds(t.geometry.getBounds()),
              e.behaviors.disable("scrollZoom");
          });
      class t {
        constructor(e) {
          let t = {
            logging: !0,
            init: !0,
            attributeOpenButton: "data-popup",
            attributeCloseButton: "data-close",
            fixElementSelector: "[data-lp]",
            youtubeAttribute: "data-youtube",
            youtubePlaceAttribute: "data-youtube-place",
            setAutoplayYoutube: !0,
            classes: {
              popup: "popup",
              popupContent: "popup__content",
              popupActive: "popup_show",
              bodyActive: "popup-show",
            },
            focusCatch: !0,
            closeEsc: !0,
            bodyLock: !0,
            bodyLockDelay: 500,
            hashSettings: { location: !0, goHash: !0 },
            on: {
              beforeOpen: function () {},
              afterOpen: function () {},
              beforeClose: function () {},
              afterClose: function () {},
            },
          };
          (this.isOpen = !1),
            (this.targetOpen = { selector: !1, element: !1 }),
            (this.previousOpen = { selector: !1, element: !1 }),
            (this.lastClosed = { selector: !1, element: !1 }),
            (this._dataValue = !1),
            (this.hash = !1),
            (this._reopen = !1),
            (this._selectorOpen = !1),
            (this.lastFocusEl = !1),
            (this._focusEl = [
              "a[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "button:not([disabled]):not([aria-hidden])",
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "area[href]",
              "iframe",
              "object",
              "embed",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this.options = {
              ...t,
              ...e,
              classes: { ...t.classes, ...e?.classes },
              hashSettings: { ...t.hashSettings, ...e?.hashSettings },
              on: { ...t.on, ...e?.on },
            }),
            this.options.init && this.initPopups();
        }
        initPopups() {
          this.popupLogging("Проснулся"), this.eventsPopup();
        }
        eventsPopup() {
          document.addEventListener(
            "click",
            function (e) {
              const t = e.target.closest(
                `[${this.options.attributeOpenButton}]`
              );
              if (t)
                return (
                  e.preventDefault(),
                  (this._dataValue = t.getAttribute(
                    this.options.attributeOpenButton
                  )
                    ? t.getAttribute(this.options.attributeOpenButton)
                    : "error"),
                  "error" !== this._dataValue
                    ? (this.isOpen || (this.lastFocusEl = t),
                      (this.targetOpen.selector = `${this._dataValue}`),
                      (this._selectorOpen = !0),
                      void this.open())
                    : void this.popupLogging(
                        `Ой ой, не заполнен атрибут у ${t.classList}`
                      )
                );
              return e.target.closest(
                `[${this.options.attributeCloseButton}]`
              ) ||
                (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                  this.isOpen)
                ? (e.preventDefault(), void this.close())
                : void 0;
            }.bind(this)
          ),
            document.addEventListener(
              "keydown",
              function (e) {
                if (
                  this.options.closeEsc &&
                  27 == e.which &&
                  "Escape" === e.code &&
                  this.isOpen
                )
                  return e.preventDefault(), void this.close();
                this.options.focusCatch &&
                  9 == e.which &&
                  this.isOpen &&
                  this._focusCatch(e);
              }.bind(this)
            ),
            document.querySelector("form[data-ajax],form[data-dev]") &&
              document.addEventListener(
                "formSent",
                function (e) {
                  const t = e.detail.form.dataset.popupMessage;
                  t && this.open(t);
                }.bind(this)
              ),
            this.options.hashSettings.goHash &&
              (window.addEventListener(
                "hashchange",
                function () {
                  window.location.hash
                    ? this._openToHash()
                    : this.close(this.targetOpen.selector);
                }.bind(this)
              ),
              window.addEventListener(
                "load",
                function () {
                  window.location.hash && this._openToHash();
                }.bind(this)
              ));
        }
        open(e) {
          if (
            (e &&
              "string" == typeof e &&
              "" !== e.trim() &&
              ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
            this.isOpen && ((this._reopen = !0), this.close()),
            this._selectorOpen ||
              (this.targetOpen.selector = this.lastClosed.selector),
            this._reopen ||
              (this.previousActiveElement = document.activeElement),
            (this.targetOpen.element = document.querySelector(
              this.targetOpen.selector
            )),
            this.targetOpen.element)
          ) {
            if (
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              )
            ) {
              const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                  this.options.youtubeAttribute
                )}?rel=0&showinfo=0&autoplay=1`,
                t = document.createElement("iframe");
              t.setAttribute("allowfullscreen", "");
              const i = this.options.setAutoplayYoutube ? "autoplay;" : "";
              t.setAttribute("allow", `${i}; encrypted-media`),
                t.setAttribute("src", e),
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                  this.targetOpen.element
                    .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                    .appendChild(t);
            }
            this.options.hashSettings.location &&
              (this._getHash(), this._setHash()),
              this.options.on.beforeOpen(this),
              this.targetOpen.element.classList.add(
                this.options.classes.popupActive
              ),
              document.body.classList.add(this.options.classes.bodyActive),
              this._reopen ? (this._reopen = !1) : a(),
              this.targetOpen.element.setAttribute("aria-hidden", "false"),
              (this.previousOpen.selector = this.targetOpen.selector),
              (this.previousOpen.element = this.targetOpen.element),
              (this._selectorOpen = !1),
              (this.isOpen = !0),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              document.dispatchEvent(
                new CustomEvent("afterPopupOpen", { detail: { popup: this } })
              ),
              this.popupLogging("Открыл попап");
          } else
            this.popupLogging(
              "Ой ой, такого попапа нет. Проверьте корректность ввода. "
            );
        }
        close(e) {
          e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            (this.previousOpen.selector = e),
            this.isOpen &&
              o &&
              (this.options.on.beforeClose(this),
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              ) &&
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                (this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ).innerHTML = ""),
              this.previousOpen.element.classList.remove(
                this.options.classes.popupActive
              ),
              this.previousOpen.element.setAttribute("aria-hidden", "true"),
              this._reopen ||
                (document.body.classList.remove(
                  this.options.classes.bodyActive
                ),
                a(),
                (this.isOpen = !1)),
              this._removeHash(),
              this._selectorOpen &&
                ((this.lastClosed.selector = this.previousOpen.selector),
                (this.lastClosed.element = this.previousOpen.element)),
              this.options.on.afterClose(this),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              this.popupLogging("Закрыл попап"));
        }
        _getHash() {
          this.options.hashSettings.location &&
            (this.hash = this.targetOpen.selector.includes("#")
              ? this.targetOpen.selector
              : this.targetOpen.selector.replace(".", "#"));
        }
        _openToHash() {
          let e = document.querySelector(
            `.${window.location.hash.replace("#", "")}`
          )
            ? `.${window.location.hash.replace("#", "")}`
            : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
          document.querySelector(
            `[${this.options.attributeOpenButton}="${e}"]`
          ) &&
            e &&
            this.open(e);
        }
        _setHash() {
          history.pushState("", "", this.hash);
        }
        _removeHash() {
          history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e) {
          const t = this.targetOpen.element.querySelectorAll(this._focusEl),
            i = Array.prototype.slice.call(t),
            s = i.indexOf(document.activeElement);
          e.shiftKey &&
            0 === s &&
            (i[i.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              s !== i.length - 1 ||
              (i[0].focus(), e.preventDefault());
        }
        _focusTrap() {
          const e = this.previousOpen.element.querySelectorAll(this._focusEl);
          !this.isOpen && this.lastFocusEl
            ? this.lastFocusEl.focus()
            : e[0].focus();
        }
        popupLogging(e) {
          this.options.logging && d(`[Попапос]: ${e}`);
        }
      }
      let s = (e, t = 500, i = 0) => {
          e.classList.contains("_slide") ||
            (e.classList.add("_slide"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = i ? `${i}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
              (e.hidden = !i),
                !i && e.style.removeProperty("height"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                !i && e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t));
        },
        n = (e, t = 500, i = 0) => {
          if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
              (e.hidden = !e.hidden && null),
              i && e.style.removeProperty("height");
            let s = e.offsetHeight;
            (e.style.overflow = "hidden"),
              (e.style.height = i ? `${i}px` : "0px"),
              (e.style.paddingTop = 0),
              (e.style.paddingBottom = 0),
              (e.style.marginTop = 0),
              (e.style.marginBottom = 0),
              e.offsetHeight,
              (e.style.transitionProperty = "height, margin, padding"),
              (e.style.transitionDuration = t + "ms"),
              (e.style.height = s + "px"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              window.setTimeout(() => {
                e.style.removeProperty("height"),
                  e.style.removeProperty("overflow"),
                  e.style.removeProperty("transition-duration"),
                  e.style.removeProperty("transition-property"),
                  e.classList.remove("_slide");
              }, t);
          }
        },
        r = (e, t = 500) => (e.hidden ? n(e, t) : s(e, t)),
        o = !0,
        a = (e = 500) => {
          document.documentElement.classList.contains("lock") ? l(e) : c(e);
        },
        l = (e = 500) => {
          let t = document.querySelector("body");
          if (o) {
            let i = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < i.length; e++) {
                i[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (o = !1),
              setTimeout(function () {
                o = !0;
              }, e);
          }
        },
        c = (e = 500) => {
          let t = document.querySelector("body");
          if (o) {
            let i = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (o = !1),
              setTimeout(function () {
                o = !0;
              }, e);
          }
        };
      function d(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      function u(e, t) {
        const i = Array.from(e).filter(function (e, i, s) {
          if (e.dataset[t]) return e.dataset[t].split(",")[0];
        });
        if (i.length) {
          const e = [];
          i.forEach((i) => {
            const s = {},
              n = i.dataset[t].split(",");
            (s.value = n[0]),
              (s.type = n[1] ? n[1].trim() : "max"),
              (s.item = i),
              e.push(s);
          });
          let s = e.map(function (e) {
            return (
              "(" +
              e.type +
              "-width: " +
              e.value +
              "px)," +
              e.value +
              "," +
              e.type
            );
          });
          s = (function (e) {
            return e.filter(function (e, t, i) {
              return i.indexOf(e) === t;
            });
          })(s);
          const n = [];
          if (s.length)
            return (
              s.forEach((t) => {
                const i = t.split(","),
                  s = i[1],
                  r = i[2],
                  o = window.matchMedia(i[0]),
                  a = e.filter(function (e) {
                    if (e.value === s && e.type === r) return !0;
                  });
                n.push({ itemsArray: a, matchMedia: o });
              }),
              n
            );
        }
      }
      let p = (e, t = !1, i = 500, s = 0) => {
        const n = document.querySelector(e);
        if (n) {
          let r = "",
            o = 0;
          t &&
            ((r = "header.header"),
            (o = document.querySelector(r).offsetHeight));
          let a = {
            speedAsDuration: !0,
            speed: i,
            header: r,
            offset: s,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (l(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(n, "", a);
          else {
            let e = n.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: o ? e - o : e, behavior: "smooth" });
          }
          d(`[gotoBlock]: Юхуу...едем к ${e}`);
        } else d(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
      };
      class h {
        constructor(e, t = null) {
          if (
            ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
            (this.selectClasses = {
              classSelect: "select",
              classSelectBody: "select__body",
              classSelectTitle: "select__title",
              classSelectValue: "select__value",
              classSelectLabel: "select__label",
              classSelectInput: "select__input",
              classSelectText: "select__text",
              classSelectLink: "select__link",
              classSelectOptions: "select__options",
              classSelectOptionsScroll: "select__scroll",
              classSelectOption: "select__option",
              classSelectContent: "select__content",
              classSelectRow: "select__row",
              classSelectData: "select__asset",
              classSelectDisabled: "_select-disabled",
              classSelectTag: "_select-tag",
              classSelectOpen: "_select-open",
              classSelectActive: "_select-active",
              classSelectFocus: "_select-focus",
              classSelectMultiple: "_select-multiple",
              classSelectCheckBox: "_select-checkbox",
              classSelectOptionSelected: "_select-selected",
            }),
            (this._this = this),
            this.config.init)
          ) {
            const e = t
              ? document.querySelectorAll(t)
              : document.querySelectorAll("select");
            e.length
              ? (this.selectsInit(e),
                this.setLogging(`Проснулся, построил селектов: (${e.length})`))
              : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
          }
        }
        getSelectClass(e) {
          return `.${e}`;
        }
        getSelectElement(e, t) {
          return {
            originalSelect: e.querySelector("select"),
            selectElement: e.querySelector(this.getSelectClass(t)),
          };
        }
        selectsInit(e) {
          e.forEach((e, t) => {
            this.selectInit(e, t + 1);
          }),
            document.addEventListener(
              "click",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            ),
            document.addEventListener(
              "keydown",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            ),
            document.addEventListener(
              "focusin",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            ),
            document.addEventListener(
              "focusout",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            );
        }
        selectInit(e, t) {
          const i = this;
          let s = document.createElement("div");
          if (
            (s.classList.add(this.selectClasses.classSelect),
            e.parentNode.insertBefore(s, e),
            s.appendChild(e),
            (e.hidden = !0),
            t && (e.dataset.id = t),
            s.insertAdjacentHTML(
              "beforeend",
              `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
            ),
            this.selectBuild(e),
            this.getSelectPlaceholder(e) &&
              ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
              this.getSelectPlaceholder(e).label.show))
          ) {
            this.getSelectElement(
              s,
              this.selectClasses.classSelectTitle
            ).selectElement.insertAdjacentHTML(
              "afterbegin",
              `<span class="${this.selectClasses.classSelectLabel}">${
                this.getSelectPlaceholder(e).label.text
                  ? this.getSelectPlaceholder(e).label.text
                  : this.getSelectPlaceholder(e).value
              }</span>`
            );
          }
          (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
            e.addEventListener("change", function (e) {
              i.selectChange(e);
            });
        }
        selectBuild(e) {
          const t = e.parentElement;
          (t.dataset.id = e.dataset.id),
            t.classList.add(
              e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
            ),
            e.multiple
              ? t.classList.add(this.selectClasses.classSelectMultiple)
              : t.classList.remove(this.selectClasses.classSelectMultiple),
            e.hasAttribute("data-checkbox") && e.multiple
              ? t.classList.add(this.selectClasses.classSelectCheckBox)
              : t.classList.remove(this.selectClasses.classSelectCheckBox),
            this.setSelectTitleValue(t, e),
            this.setOptions(t, e),
            e.hasAttribute("data-search") && this.searchActions(t),
            e.hasAttribute("data-open") && this.selectAction(t),
            this.selectDisabled(t, e);
        }
        selectsActions(e) {
          const t = e.target,
            i = e.type;
          if (
            t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
            t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
          ) {
            const s = t.closest(".select")
                ? t.closest(".select")
                : document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${
                      t.closest(
                        this.getSelectClass(this.selectClasses.classSelectTag)
                      ).dataset.selectId
                    }"]`
                  ),
              n = this.getSelectElement(s).originalSelect;
            if ("click" === i) {
              if (!n.disabled)
                if (
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  )
                ) {
                  const e = t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ),
                    i = document.querySelector(
                      `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                    );
                  this.optionAction(s, n, i);
                } else if (
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTitle)
                  )
                )
                  this.selectAction(s);
                else if (
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectOption)
                  )
                ) {
                  const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectOption)
                  );
                  this.optionAction(s, n, e);
                }
            } else
              "focusin" === i || "focusout" === i
                ? t.closest(
                    this.getSelectClass(this.selectClasses.classSelect)
                  ) &&
                  ("focusin" === i
                    ? s.classList.add(this.selectClasses.classSelectFocus)
                    : s.classList.remove(this.selectClasses.classSelectFocus))
                : "keydown" === i && "Escape" === e.code && this.selectsСlose();
          } else this.selectsСlose();
        }
        selectsСlose() {
          const e = document.querySelectorAll(
            `${this.getSelectClass(
              this.selectClasses.classSelect
            )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
          );
          e.length &&
            e.forEach((e) => {
              this.selectAction(e);
            });
        }
        selectAction(e) {
          const t = this.getSelectElement(e).originalSelect,
            i = this.getSelectElement(
              e,
              this.selectClasses.classSelectOptions
            ).selectElement;
          i.classList.contains("_slide") ||
            (e.classList.toggle(this.selectClasses.classSelectOpen),
            r(i, t.dataset.speed));
        }
        setSelectTitleValue(e, t) {
          const i = this.getSelectElement(
              e,
              this.selectClasses.classSelectBody
            ).selectElement,
            s = this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement;
          s && s.remove(),
            i.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
        }
        getSelectTitleValue(e, t) {
          let i = this.getSelectedOptionsData(t, 2).html;
          if (
            (t.multiple &&
              t.hasAttribute("data-tags") &&
              ((i = this.getSelectedOptionsData(t)
                .elements.map(
                  (t) =>
                    `<span role="button" data-select-id="${
                      e.dataset.id
                    }" data-value="${
                      t.value
                    }" class="_select-tag">${this.getSelectElementContent(
                      t
                    )}</span>`
                )
                .join("")),
              t.dataset.tags &&
                document.querySelector(t.dataset.tags) &&
                ((document.querySelector(t.dataset.tags).innerHTML = i),
                t.hasAttribute("data-search") && (i = !1))),
            (i = i.length ? i : t.dataset.placeholder),
            this.getSelectedOptionsData(t).values.length
              ? e.classList.add(this.selectClasses.classSelectActive)
              : e.classList.remove(this.selectClasses.classSelectActive),
            t.hasAttribute("data-search"))
          )
            return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${i}" data-placeholder="${i}" class="${this.selectClasses.classSelectInput}"></span></div>`;
          {
            const e =
              this.getSelectedOptionsData(t).elements.length &&
              this.getSelectedOptionsData(t).elements[0].dataset.class
                ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
                : "";
            return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${i}</span></span></button>`;
          }
        }
        getSelectElementContent(e) {
          const t = e.dataset.asset ? `${e.dataset.asset}` : "",
            i = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
          let s = "";
          return (
            (s += t
              ? `<span class="${this.selectClasses.classSelectRow}">`
              : ""),
            (s += t
              ? `<span class="${this.selectClasses.classSelectData}">`
              : ""),
            (s += t ? i : ""),
            (s += t ? "</span>" : ""),
            (s += t
              ? `<span class="${this.selectClasses.classSelectText}">`
              : ""),
            (s += e.textContent),
            (s += t ? "</span>" : ""),
            (s += t ? "</span>" : ""),
            s
          );
        }
        getSelectPlaceholder(e) {
          const t = Array.from(e.options).find((e) => !e.value);
          if (t)
            return {
              value: t.textContent,
              show: t.hasAttribute("data-show"),
              label: {
                show: t.hasAttribute("data-label"),
                text: t.dataset.label,
              },
            };
        }
        getSelectedOptionsData(e, t) {
          let i = [];
          return (
            e.multiple
              ? (i = Array.from(e.options)
                  .filter((e) => e.value)
                  .filter((e) => e.selected))
              : i.push(e.options[e.selectedIndex]),
            {
              elements: i.map((e) => e),
              values: i.filter((e) => e.value).map((e) => e.value),
              html: i.map((e) => this.getSelectElementContent(e)),
            }
          );
        }
        getOptions(e) {
          let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
            i = e.dataset.scroll
              ? `style="max-height:${e.dataset.scroll}px"`
              : "",
            s = Array.from(e.options);
          if (s.length > 0) {
            let n = "";
            return (
              ((this.getSelectPlaceholder(e) &&
                !this.getSelectPlaceholder(e).show) ||
                e.multiple) &&
                (s = s.filter((e) => e.value)),
              (n += t
                ? `<div ${t} ${i} class="${this.selectClasses.classSelectOptionsScroll}">`
                : ""),
              s.forEach((t) => {
                n += this.getOption(t, e);
              }),
              (n += t ? "</div>" : ""),
              n
            );
          }
        }
        getOption(e, t) {
          const i =
              e.selected && t.multiple
                ? ` ${this.selectClasses.classSelectOptionSelected}`
                : "",
            s =
              e.selected && !t.hasAttribute("data-show-selected")
                ? "hidden"
                : "",
            n = e.dataset.class ? ` ${e.dataset.class}` : "",
            r = !!e.dataset.href && e.dataset.href,
            o = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
          let a = "";
          return (
            (a += r
              ? `<a ${o} ${s} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${i}">`
              : `<button ${s} class="${this.selectClasses.classSelectOption}${n}${i}" data-value="${e.value}" type="button">`),
            (a += this.getSelectElementContent(e)),
            (a += r ? "</a>" : "</button>"),
            a
          );
        }
        setOptions(e, t) {
          this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement.innerHTML = this.getOptions(t);
        }
        optionAction(e, t, i) {
          if (t.multiple) {
            i.classList.toggle(this.selectClasses.classSelectOptionSelected);
            this.getSelectedOptionsData(t).elements.forEach((e) => {
              e.removeAttribute("selected");
            });
            e.querySelectorAll(
              this.getSelectClass(this.selectClasses.classSelectOptionSelected)
            ).forEach((e) => {
              t.querySelector(
                `option[value="${e.dataset.value}"]`
              ).setAttribute("selected", "selected");
            });
          } else
            t.hasAttribute("data-show-selected") ||
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ) &&
                (e.querySelector(
                  `${this.getSelectClass(
                    this.selectClasses.classSelectOption
                  )}[hidden]`
                ).hidden = !1),
              (i.hidden = !0)),
              (t.value = i.hasAttribute("data-value")
                ? i.dataset.value
                : i.textContent),
              this.selectAction(e);
          this.setSelectTitleValue(e, t), this.setSelectChange(t);
        }
        selectChange(e) {
          const t = e.target;
          this.selectBuild(t), this.setSelectChange(t);
        }
        setSelectChange(e) {
          if (
            (e.hasAttribute("data-validate") && g.validateInput(e),
            e.hasAttribute("data-submit") && e.value)
          ) {
            let t = document.createElement("button");
            (t.type = "submit"),
              e.closest("form").append(t),
              t.click(),
              t.remove();
          }
          const t = e.parentElement;
          this.selectCallback(t, e);
        }
        selectDisabled(e, t) {
          t.disabled
            ? (e.classList.add(this.selectClasses.classSelectDisabled),
              (this.getSelectElement(
                e,
                this.selectClasses.classSelectTitle
              ).selectElement.disabled = !0))
            : (e.classList.remove(this.selectClasses.classSelectDisabled),
              (this.getSelectElement(
                e,
                this.selectClasses.classSelectTitle
              ).selectElement.disabled = !1));
        }
        searchActions(e) {
          this.getSelectElement(e).originalSelect;
          const t = this.getSelectElement(
              e,
              this.selectClasses.classSelectInput
            ).selectElement,
            i = this.getSelectElement(
              e,
              this.selectClasses.classSelectOptions
            ).selectElement,
            s = i.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
            n = this;
          t.addEventListener("input", function () {
            s.forEach((e) => {
              e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
                ? (e.hidden = !1)
                : (e.hidden = !0);
            }),
              !0 === i.hidden && n.selectAction(e);
          });
        }
        selectCallback(e, t) {
          document.dispatchEvent(
            new CustomEvent("selectCallback", { detail: { select: t } })
          );
        }
        setLogging(e) {
          this.config.logging && d(`[select]: ${e}`);
        }
      }
      const f = { inputMaskModule: null, selectModule: null };
      let g = {
        getErrors(e) {
          let t = 0,
            i = e.querySelectorAll("*[data-required]");
          return (
            i.length &&
              i.forEach((e) => {
                (null === e.offsetParent && "SELECT" !== e.tagName) ||
                  e.disabled ||
                  (t += this.validateInput(e));
              }),
            t
          );
        },
        validateInput(e) {
          let t = 0;
          return (
            "email" === e.dataset.required
              ? ((e.value = e.value.replace(" ", "")),
                this.emailTest(e)
                  ? (this.addError(e), t++)
                  : this.removeError(e))
              : ("checkbox" !== e.type || e.checked) && e.value
              ? this.removeError(e)
              : (this.addError(e), t++),
            t
          );
        },
        addError(e) {
          e.classList.add("_form-error"),
            e.parentElement.classList.add("_form-error");
          let t = e.parentElement.querySelector(".form__error");
          t && e.parentElement.removeChild(t),
            e.dataset.error &&
              e.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="form__error">${e.dataset.error}</div>`
              );
        },
        removeError(e) {
          e.classList.remove("_form-error"),
            e.parentElement.classList.remove("_form-error"),
            e.parentElement.querySelector(".form__error") &&
              e.parentElement.removeChild(
                e.parentElement.querySelector(".form__error")
              );
        },
        formClean(e) {
          e.reset(),
            setTimeout(() => {
              let t = e.querySelectorAll("input,textarea");
              for (let e = 0; e < t.length; e++) {
                const i = t[e];
                i.parentElement.classList.remove("_form-focus"),
                  i.classList.remove("_form-focus"),
                  g.removeError(i),
                  (i.value = i.dataset.placeholder);
              }
              let i = e.querySelectorAll(".checkbox__input");
              if (i.length > 0)
                for (let e = 0; e < i.length; e++) {
                  i[e].checked = !1;
                }
              if (f.selectModule) {
                let t = e.querySelectorAll(".select");
                if (t.length)
                  for (let e = 0; e < t.length; e++) {
                    const i = t[e].querySelector("select");
                    f.selectModule.selectBuild(i);
                  }
              }
            }, 0);
        },
        emailTest: (e) =>
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
      };
      function m(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function v(e) {
        return e instanceof m(e).Element || e instanceof Element;
      }
      function b(e) {
        return e instanceof m(e).HTMLElement || e instanceof HTMLElement;
      }
      function y(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof m(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var x = Math.max,
        w = Math.min,
        S = Math.round;
      function E(e, t) {
        void 0 === t && (t = !1);
        var i = e.getBoundingClientRect(),
          s = 1,
          n = 1;
        if (b(e) && t) {
          var r = e.offsetHeight,
            o = e.offsetWidth;
          o > 0 && (s = S(i.width) / o || 1),
            r > 0 && (n = S(i.height) / r || 1);
        }
        return {
          width: i.width / s,
          height: i.height / n,
          top: i.top / n,
          right: i.right / s,
          bottom: i.bottom / n,
          left: i.left / s,
          x: i.left / s,
          y: i.top / n,
        };
      }
      function C(e) {
        var t = m(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function T(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function O(e) {
        return ((v(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function A(e) {
        return E(O(e)).left + C(e).scrollLeft;
      }
      function L(e) {
        return m(e).getComputedStyle(e);
      }
      function k(e) {
        var t = L(e),
          i = t.overflow,
          s = t.overflowX,
          n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + n + s);
      }
      function I(e, t, i) {
        void 0 === i && (i = !1);
        var s,
          n,
          r = b(t),
          o =
            b(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                i = S(t.width) / e.offsetWidth || 1,
                s = S(t.height) / e.offsetHeight || 1;
              return 1 !== i || 1 !== s;
            })(t),
          a = O(t),
          l = E(e, o),
          c = { scrollLeft: 0, scrollTop: 0 },
          d = { x: 0, y: 0 };
        return (
          (r || (!r && !i)) &&
            (("body" !== T(t) || k(a)) &&
              (c =
                (s = t) !== m(s) && b(s)
                  ? { scrollLeft: (n = s).scrollLeft, scrollTop: n.scrollTop }
                  : C(s)),
            b(t)
              ? (((d = E(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
              : a && (d.x = A(a))),
          {
            x: l.left + c.scrollLeft - d.x,
            y: l.top + c.scrollTop - d.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function M(e) {
        var t = E(e),
          i = e.offsetWidth,
          s = e.offsetHeight;
        return (
          Math.abs(t.width - i) <= 1 && (i = t.width),
          Math.abs(t.height - s) <= 1 && (s = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: i, height: s }
        );
      }
      function P(e) {
        return "html" === T(e)
          ? e
          : e.assignedSlot || e.parentNode || (y(e) ? e.host : null) || O(e);
      }
      function _(e) {
        return ["html", "body", "#document"].indexOf(T(e)) >= 0
          ? e.ownerDocument.body
          : b(e) && k(e)
          ? e
          : _(P(e));
      }
      function $(e, t) {
        var i;
        void 0 === t && (t = []);
        var s = _(e),
          n = s === (null == (i = e.ownerDocument) ? void 0 : i.body),
          r = m(s),
          o = n ? [r].concat(r.visualViewport || [], k(s) ? s : []) : s,
          a = t.concat(o);
        return n ? a : a.concat($(P(o)));
      }
      function D(e) {
        return ["table", "td", "th"].indexOf(T(e)) >= 0;
      }
      function z(e) {
        return b(e) && "fixed" !== L(e).position ? e.offsetParent : null;
      }
      function j(e) {
        for (var t = m(e), i = z(e); i && D(i) && "static" === L(i).position; )
          i = z(i);
        return i &&
          ("html" === T(i) || ("body" === T(i) && "static" === L(i).position))
          ? t
          : i ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  b(e) &&
                  "fixed" === L(e).position
                )
                  return null;
                for (
                  var i = P(e);
                  b(i) && ["html", "body"].indexOf(T(i)) < 0;

                ) {
                  var s = L(i);
                  if (
                    "none" !== s.transform ||
                    "none" !== s.perspective ||
                    "paint" === s.contain ||
                    -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                    (t && "filter" === s.willChange) ||
                    (t && s.filter && "none" !== s.filter)
                  )
                    return i;
                  i = i.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var B = "top",
        N = "bottom",
        W = "right",
        R = "left",
        H = "auto",
        G = [B, N, W, R],
        F = "start",
        V = "end",
        q = "viewport",
        X = "popper",
        Y = G.reduce(function (e, t) {
          return e.concat([t + "-" + F, t + "-" + V]);
        }, []),
        U = [].concat(G, [H]).reduce(function (e, t) {
          return e.concat([t, t + "-" + F, t + "-" + V]);
        }, []),
        K = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function Z(e) {
        var t = new Map(),
          i = new Set(),
          s = [];
        function n(e) {
          i.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!i.has(e)) {
                  var s = t.get(e);
                  s && n(s);
                }
              }),
            s.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            i.has(e.name) || n(e);
          }),
          s
        );
      }
      var Q = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function J() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function ee(e) {
        void 0 === e && (e = {});
        var t = e,
          i = t.defaultModifiers,
          s = void 0 === i ? [] : i,
          n = t.defaultOptions,
          r = void 0 === n ? Q : n;
        return function (e, t, i) {
          void 0 === i && (i = r);
          var n,
            o,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Q, r),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            d = {
              state: a,
              setOptions: function (i) {
                var n = "function" == typeof i ? i(a.options) : i;
                u(),
                  (a.options = Object.assign({}, r, a.options, n)),
                  (a.scrollParents = {
                    reference: v(e)
                      ? $(e)
                      : e.contextElement
                      ? $(e.contextElement)
                      : [],
                    popper: $(t),
                  });
                var o = (function (e) {
                  var t = Z(e);
                  return K.reduce(function (e, i) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === i;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var i = e[t.name];
                      return (
                        (e[t.name] = i
                          ? Object.assign({}, i, t, {
                              options: Object.assign({}, i.options, t.options),
                              data: Object.assign({}, i.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(s, a.options.modifiers))
                );
                return (
                  (a.orderedModifiers = o.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      i = e.options,
                      s = void 0 === i ? {} : i,
                      n = e.effect;
                    if ("function" == typeof n) {
                      var r = n({ state: a, name: t, instance: d, options: s }),
                        o = function () {};
                      l.push(r || o);
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = a.elements,
                    t = e.reference,
                    i = e.popper;
                  if (J(t, i)) {
                    (a.rects = {
                      reference: I(t, j(i), "fixed" === a.options.strategy),
                      popper: M(i),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var s = 0; s < a.orderedModifiers.length; s++)
                      if (!0 !== a.reset) {
                        var n = a.orderedModifiers[s],
                          r = n.fn,
                          o = n.options,
                          l = void 0 === o ? {} : o,
                          u = n.name;
                        "function" == typeof r &&
                          (a =
                            r({ state: a, options: l, name: u, instance: d }) ||
                            a);
                      } else (a.reset = !1), (s = -1);
                  }
                }
              },
              update:
                ((n = function () {
                  return new Promise(function (e) {
                    d.forceUpdate(), e(a);
                  });
                }),
                function () {
                  return (
                    o ||
                      (o = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (o = void 0), e(n());
                        });
                      })),
                    o
                  );
                }),
              destroy: function () {
                u(), (c = !0);
              },
            };
          if (!J(e, t)) return d;
          function u() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            d.setOptions(i).then(function (e) {
              !c && i.onFirstUpdate && i.onFirstUpdate(e);
            }),
            d
          );
        };
      }
      var te = { passive: !0 };
      const ie = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            i = e.instance,
            s = e.options,
            n = s.scroll,
            r = void 0 === n || n,
            o = s.resize,
            a = void 0 === o || o,
            l = m(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            r &&
              c.forEach(function (e) {
                e.addEventListener("scroll", i.update, te);
              }),
            a && l.addEventListener("resize", i.update, te),
            function () {
              r &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", i.update, te);
                }),
                a && l.removeEventListener("resize", i.update, te);
            }
          );
        },
        data: {},
      };
      function se(e) {
        return e.split("-")[0];
      }
      function ne(e) {
        return e.split("-")[1];
      }
      function re(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function oe(e) {
        var t,
          i = e.reference,
          s = e.element,
          n = e.placement,
          r = n ? se(n) : null,
          o = n ? ne(n) : null,
          a = i.x + i.width / 2 - s.width / 2,
          l = i.y + i.height / 2 - s.height / 2;
        switch (r) {
          case B:
            t = { x: a, y: i.y - s.height };
            break;
          case N:
            t = { x: a, y: i.y + i.height };
            break;
          case W:
            t = { x: i.x + i.width, y: l };
            break;
          case R:
            t = { x: i.x - s.width, y: l };
            break;
          default:
            t = { x: i.x, y: i.y };
        }
        var c = r ? re(r) : null;
        if (null != c) {
          var d = "y" === c ? "height" : "width";
          switch (o) {
            case F:
              t[c] = t[c] - (i[d] / 2 - s[d] / 2);
              break;
            case V:
              t[c] = t[c] + (i[d] / 2 - s[d] / 2);
          }
        }
        return t;
      }
      var ae = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function le(e) {
        var t,
          i = e.popper,
          s = e.popperRect,
          n = e.placement,
          r = e.variation,
          o = e.offsets,
          a = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          d = e.roundOffsets,
          u = e.isFixed,
          p =
            !0 === d
              ? (function (e) {
                  var t = e.x,
                    i = e.y,
                    s = window.devicePixelRatio || 1;
                  return { x: S(t * s) / s || 0, y: S(i * s) / s || 0 };
                })(o)
              : "function" == typeof d
              ? d(o)
              : o,
          h = p.x,
          f = void 0 === h ? 0 : h,
          g = p.y,
          v = void 0 === g ? 0 : g,
          b = o.hasOwnProperty("x"),
          y = o.hasOwnProperty("y"),
          x = R,
          w = B,
          E = window;
        if (c) {
          var C = j(i),
            T = "clientHeight",
            A = "clientWidth";
          if (
            (C === m(i) &&
              "static" !== L((C = O(i))).position &&
              "absolute" === a &&
              ((T = "scrollHeight"), (A = "scrollWidth")),
            (C = C),
            n === B || ((n === R || n === W) && r === V))
          )
            (w = N),
              (v -=
                (u && E.visualViewport ? E.visualViewport.height : C[T]) -
                s.height),
              (v *= l ? 1 : -1);
          if (n === R || ((n === B || n === N) && r === V))
            (x = W),
              (f -=
                (u && E.visualViewport ? E.visualViewport.width : C[A]) -
                s.width),
              (f *= l ? 1 : -1);
        }
        var k,
          I = Object.assign({ position: a }, c && ae);
        return l
          ? Object.assign(
              {},
              I,
              (((k = {})[w] = y ? "0" : ""),
              (k[x] = b ? "0" : ""),
              (k.transform =
                (E.devicePixelRatio || 1) <= 1
                  ? "translate(" + f + "px, " + v + "px)"
                  : "translate3d(" + f + "px, " + v + "px, 0)"),
              k)
            )
          : Object.assign(
              {},
              I,
              (((t = {})[w] = y ? v + "px" : ""),
              (t[x] = b ? f + "px" : ""),
              (t.transform = ""),
              t)
            );
      }
      const ce = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var i = t.styles[e] || {},
              s = t.attributes[e] || {},
              n = t.elements[e];
            b(n) &&
              T(n) &&
              (Object.assign(n.style, i),
              Object.keys(s).forEach(function (e) {
                var t = s[e];
                !1 === t
                  ? n.removeAttribute(e)
                  : n.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            i = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, i.popper),
            (t.styles = i),
            t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var s = t.elements[e],
                  n = t.attributes[e] || {},
                  r = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                b(s) &&
                  T(s) &&
                  (Object.assign(s.style, r),
                  Object.keys(n).forEach(function (e) {
                    s.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      const de = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            i = e.options,
            s = e.name,
            n = i.offset,
            r = void 0 === n ? [0, 0] : n,
            o = U.reduce(function (e, i) {
              return (
                (e[i] = (function (e, t, i) {
                  var s = se(e),
                    n = [R, B].indexOf(s) >= 0 ? -1 : 1,
                    r =
                      "function" == typeof i
                        ? i(Object.assign({}, t, { placement: e }))
                        : i,
                    o = r[0],
                    a = r[1];
                  return (
                    (o = o || 0),
                    (a = (a || 0) * n),
                    [R, W].indexOf(s) >= 0 ? { x: a, y: o } : { x: o, y: a }
                  );
                })(i, t.rects, r)),
                e
              );
            }, {}),
            a = o[t.placement],
            l = a.x,
            c = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[s] = o);
        },
      };
      var ue = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function pe(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ue[e];
        });
      }
      var he = { start: "end", end: "start" };
      function fe(e) {
        return e.replace(/start|end/g, function (e) {
          return he[e];
        });
      }
      function ge(e, t) {
        var i = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (i && y(i)) {
          var s = t;
          do {
            if (s && e.isSameNode(s)) return !0;
            s = s.parentNode || s.host;
          } while (s);
        }
        return !1;
      }
      function me(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ve(e, t) {
        return t === q
          ? me(
              (function (e) {
                var t = m(e),
                  i = O(e),
                  s = t.visualViewport,
                  n = i.clientWidth,
                  r = i.clientHeight,
                  o = 0,
                  a = 0;
                return (
                  s &&
                    ((n = s.width),
                    (r = s.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((o = s.offsetLeft), (a = s.offsetTop))),
                  { width: n, height: r, x: o + A(e), y: a }
                );
              })(e)
            )
          : v(t)
          ? (function (e) {
              var t = E(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : me(
              (function (e) {
                var t,
                  i = O(e),
                  s = C(e),
                  n = null == (t = e.ownerDocument) ? void 0 : t.body,
                  r = x(
                    i.scrollWidth,
                    i.clientWidth,
                    n ? n.scrollWidth : 0,
                    n ? n.clientWidth : 0
                  ),
                  o = x(
                    i.scrollHeight,
                    i.clientHeight,
                    n ? n.scrollHeight : 0,
                    n ? n.clientHeight : 0
                  ),
                  a = -s.scrollLeft + A(e),
                  l = -s.scrollTop;
                return (
                  "rtl" === L(n || i).direction &&
                    (a += x(i.clientWidth, n ? n.clientWidth : 0) - r),
                  { width: r, height: o, x: a, y: l }
                );
              })(O(e))
            );
      }
      function be(e, t, i) {
        var s =
            "clippingParents" === t
              ? (function (e) {
                  var t = $(P(e)),
                    i = ["absolute", "fixed"].indexOf(L(e).position) >= 0,
                    s = i && b(e) ? j(e) : e;
                  return v(s)
                    ? t.filter(function (e) {
                        return (
                          v(e) &&
                          ge(e, s) &&
                          "body" !== T(e) &&
                          (!i || "static" !== L(e).position)
                        );
                      })
                    : [];
                })(e)
              : [].concat(t),
          n = [].concat(s, [i]),
          r = n[0],
          o = n.reduce(function (t, i) {
            var s = ve(e, i);
            return (
              (t.top = x(s.top, t.top)),
              (t.right = w(s.right, t.right)),
              (t.bottom = w(s.bottom, t.bottom)),
              (t.left = x(s.left, t.left)),
              t
            );
          }, ve(e, r));
        return (
          (o.width = o.right - o.left),
          (o.height = o.bottom - o.top),
          (o.x = o.left),
          (o.y = o.top),
          o
        );
      }
      function ye(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function xe(e, t) {
        return t.reduce(function (t, i) {
          return (t[i] = e), t;
        }, {});
      }
      function we(e, t) {
        void 0 === t && (t = {});
        var i = t,
          s = i.placement,
          n = void 0 === s ? e.placement : s,
          r = i.boundary,
          o = void 0 === r ? "clippingParents" : r,
          a = i.rootBoundary,
          l = void 0 === a ? q : a,
          c = i.elementContext,
          d = void 0 === c ? X : c,
          u = i.altBoundary,
          p = void 0 !== u && u,
          h = i.padding,
          f = void 0 === h ? 0 : h,
          g = ye("number" != typeof f ? f : xe(f, G)),
          m = d === X ? "reference" : X,
          b = e.rects.popper,
          y = e.elements[p ? m : d],
          x = be(v(y) ? y : y.contextElement || O(e.elements.popper), o, l),
          w = E(e.elements.reference),
          S = oe({
            reference: w,
            element: b,
            strategy: "absolute",
            placement: n,
          }),
          C = me(Object.assign({}, b, S)),
          T = d === X ? C : w,
          A = {
            top: x.top - T.top + g.top,
            bottom: T.bottom - x.bottom + g.bottom,
            left: x.left - T.left + g.left,
            right: T.right - x.right + g.right,
          },
          L = e.modifiersData.offset;
        if (d === X && L) {
          var k = L[n];
          Object.keys(A).forEach(function (e) {
            var t = [W, N].indexOf(e) >= 0 ? 1 : -1,
              i = [B, N].indexOf(e) >= 0 ? "y" : "x";
            A[e] += k[i] * t;
          });
        }
        return A;
      }
      function Se(e, t, i) {
        return x(e, w(t, i));
      }
      const Ee = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            i = e.options,
            s = e.name,
            n = i.mainAxis,
            r = void 0 === n || n,
            o = i.altAxis,
            a = void 0 !== o && o,
            l = i.boundary,
            c = i.rootBoundary,
            d = i.altBoundary,
            u = i.padding,
            p = i.tether,
            h = void 0 === p || p,
            f = i.tetherOffset,
            g = void 0 === f ? 0 : f,
            m = we(t, {
              boundary: l,
              rootBoundary: c,
              padding: u,
              altBoundary: d,
            }),
            v = se(t.placement),
            b = ne(t.placement),
            y = !b,
            S = re(v),
            E = "x" === S ? "y" : "x",
            C = t.modifiersData.popperOffsets,
            T = t.rects.reference,
            O = t.rects.popper,
            A =
              "function" == typeof g
                ? g(Object.assign({}, t.rects, { placement: t.placement }))
                : g,
            L =
              "number" == typeof A
                ? { mainAxis: A, altAxis: A }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
            k = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            I = { x: 0, y: 0 };
          if (C) {
            if (r) {
              var P,
                _ = "y" === S ? B : R,
                $ = "y" === S ? N : W,
                D = "y" === S ? "height" : "width",
                z = C[S],
                H = z + m[_],
                G = z - m[$],
                V = h ? -O[D] / 2 : 0,
                q = b === F ? T[D] : O[D],
                X = b === F ? -O[D] : -T[D],
                Y = t.elements.arrow,
                U = h && Y ? M(Y) : { width: 0, height: 0 },
                K = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Z = K[_],
                Q = K[$],
                J = Se(0, T[D], U[D]),
                ee = y
                  ? T[D] / 2 - V - J - Z - L.mainAxis
                  : q - J - Z - L.mainAxis,
                te = y
                  ? -T[D] / 2 + V + J + Q + L.mainAxis
                  : X + J + Q + L.mainAxis,
                ie = t.elements.arrow && j(t.elements.arrow),
                oe = ie
                  ? "y" === S
                    ? ie.clientTop || 0
                    : ie.clientLeft || 0
                  : 0,
                ae = null != (P = null == k ? void 0 : k[S]) ? P : 0,
                le = z + te - ae,
                ce = Se(h ? w(H, z + ee - ae - oe) : H, z, h ? x(G, le) : G);
              (C[S] = ce), (I[S] = ce - z);
            }
            if (a) {
              var de,
                ue = "x" === S ? B : R,
                pe = "x" === S ? N : W,
                he = C[E],
                fe = "y" === E ? "height" : "width",
                ge = he + m[ue],
                me = he - m[pe],
                ve = -1 !== [B, R].indexOf(v),
                be = null != (de = null == k ? void 0 : k[E]) ? de : 0,
                ye = ve ? ge : he - T[fe] - O[fe] - be + L.altAxis,
                xe = ve ? he + T[fe] + O[fe] - be - L.altAxis : me,
                Ee =
                  h && ve
                    ? (function (e, t, i) {
                        var s = Se(e, t, i);
                        return s > i ? i : s;
                      })(ye, he, xe)
                    : Se(h ? ye : ge, he, h ? xe : me);
              (C[E] = Ee), (I[E] = Ee - he);
            }
            t.modifiersData[s] = I;
          }
        },
        requiresIfExists: ["offset"],
      };
      const Ce = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            i = e.state,
            s = e.name,
            n = e.options,
            r = i.elements.arrow,
            o = i.modifiersData.popperOffsets,
            a = se(i.placement),
            l = re(a),
            c = [R, W].indexOf(a) >= 0 ? "height" : "width";
          if (r && o) {
            var d = (function (e, t) {
                return ye(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : xe(e, G)
                );
              })(n.padding, i),
              u = M(r),
              p = "y" === l ? B : R,
              h = "y" === l ? N : W,
              f =
                i.rects.reference[c] +
                i.rects.reference[l] -
                o[l] -
                i.rects.popper[c],
              g = o[l] - i.rects.reference[l],
              m = j(r),
              v = m
                ? "y" === l
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              b = f / 2 - g / 2,
              y = d[p],
              x = v - u[c] - d[h],
              w = v / 2 - u[c] / 2 + b,
              S = Se(y, w, x),
              E = l;
            i.modifiersData[s] =
              (((t = {})[E] = S), (t.centerOffset = S - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            i = e.options.element,
            s = void 0 === i ? "[data-popper-arrow]" : i;
          null != s &&
            ("string" != typeof s ||
              (s = t.elements.popper.querySelector(s))) &&
            ge(t.elements.popper, s) &&
            (t.elements.arrow = s);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Te(e, t, i) {
        return (
          void 0 === i && (i = { x: 0, y: 0 }),
          {
            top: e.top - t.height - i.y,
            right: e.right - t.width + i.x,
            bottom: e.bottom - t.height + i.y,
            left: e.left - t.width - i.x,
          }
        );
      }
      function Oe(e) {
        return [B, W, N, R].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Ae = ee({
          defaultModifiers: [
            ie,
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  i = e.name;
                t.modifiersData[i] = oe({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  i = e.options,
                  s = i.gpuAcceleration,
                  n = void 0 === s || s,
                  r = i.adaptive,
                  o = void 0 === r || r,
                  a = i.roundOffsets,
                  l = void 0 === a || a,
                  c = {
                    placement: se(t.placement),
                    variation: ne(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: n,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    le(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: o,
                        roundOffsets: l,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      le(
                        Object.assign({}, c, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: l,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            ce,
            de,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  i = e.options,
                  s = e.name;
                if (!t.modifiersData[s]._skip) {
                  for (
                    var n = i.mainAxis,
                      r = void 0 === n || n,
                      o = i.altAxis,
                      a = void 0 === o || o,
                      l = i.fallbackPlacements,
                      c = i.padding,
                      d = i.boundary,
                      u = i.rootBoundary,
                      p = i.altBoundary,
                      h = i.flipVariations,
                      f = void 0 === h || h,
                      g = i.allowedAutoPlacements,
                      m = t.options.placement,
                      v = se(m),
                      b =
                        l ||
                        (v === m || !f
                          ? [pe(m)]
                          : (function (e) {
                              if (se(e) === H) return [];
                              var t = pe(e);
                              return [fe(e), t, fe(t)];
                            })(m)),
                      y = [m].concat(b).reduce(function (e, i) {
                        return e.concat(
                          se(i) === H
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var i = t,
                                  s = i.placement,
                                  n = i.boundary,
                                  r = i.rootBoundary,
                                  o = i.padding,
                                  a = i.flipVariations,
                                  l = i.allowedAutoPlacements,
                                  c = void 0 === l ? U : l,
                                  d = ne(s),
                                  u = d
                                    ? a
                                      ? Y
                                      : Y.filter(function (e) {
                                          return ne(e) === d;
                                        })
                                    : G,
                                  p = u.filter(function (e) {
                                    return c.indexOf(e) >= 0;
                                  });
                                0 === p.length && (p = u);
                                var h = p.reduce(function (t, i) {
                                  return (
                                    (t[i] = we(e, {
                                      placement: i,
                                      boundary: n,
                                      rootBoundary: r,
                                      padding: o,
                                    })[se(i)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(h).sort(function (e, t) {
                                  return h[e] - h[t];
                                });
                              })(t, {
                                placement: i,
                                boundary: d,
                                rootBoundary: u,
                                padding: c,
                                flipVariations: f,
                                allowedAutoPlacements: g,
                              })
                            : i
                        );
                      }, []),
                      x = t.rects.reference,
                      w = t.rects.popper,
                      S = new Map(),
                      E = !0,
                      C = y[0],
                      T = 0;
                    T < y.length;
                    T++
                  ) {
                    var O = y[T],
                      A = se(O),
                      L = ne(O) === F,
                      k = [B, N].indexOf(A) >= 0,
                      I = k ? "width" : "height",
                      M = we(t, {
                        placement: O,
                        boundary: d,
                        rootBoundary: u,
                        altBoundary: p,
                        padding: c,
                      }),
                      P = k ? (L ? W : R) : L ? N : B;
                    x[I] > w[I] && (P = pe(P));
                    var _ = pe(P),
                      $ = [];
                    if (
                      (r && $.push(M[A] <= 0),
                      a && $.push(M[P] <= 0, M[_] <= 0),
                      $.every(function (e) {
                        return e;
                      }))
                    ) {
                      (C = O), (E = !1);
                      break;
                    }
                    S.set(O, $);
                  }
                  if (E)
                    for (
                      var D = function (e) {
                          var t = y.find(function (t) {
                            var i = S.get(t);
                            if (i)
                              return i.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (C = t), "break";
                        },
                        z = f ? 3 : 1;
                      z > 0;
                      z--
                    ) {
                      if ("break" === D(z)) break;
                    }
                  t.placement !== C &&
                    ((t.modifiersData[s]._skip = !0),
                    (t.placement = C),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            Ee,
            Ce,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  i = e.name,
                  s = t.rects.reference,
                  n = t.rects.popper,
                  r = t.modifiersData.preventOverflow,
                  o = we(t, { elementContext: "reference" }),
                  a = we(t, { altBoundary: !0 }),
                  l = Te(o, s),
                  c = Te(a, n, r),
                  d = Oe(l),
                  u = Oe(c);
                (t.modifiersData[i] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: d,
                  hasPopperEscaped: u,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": d,
                      "data-popper-escaped": u,
                    }
                  ));
              },
            },
          ],
        }),
        Le = "tippy-content",
        ke = "tippy-backdrop",
        Ie = "tippy-arrow",
        Me = "tippy-svg-arrow",
        Pe = { passive: !0, capture: !0 },
        _e = function () {
          return document.body;
        };
      function $e(e, t, i) {
        if (Array.isArray(e)) {
          var s = e[t];
          return null == s ? (Array.isArray(i) ? i[t] : i) : s;
        }
        return e;
      }
      function De(e, t) {
        var i = {}.toString.call(e);
        return 0 === i.indexOf("[object") && i.indexOf(t + "]") > -1;
      }
      function ze(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function je(e, t) {
        return 0 === t
          ? e
          : function (s) {
              clearTimeout(i),
                (i = setTimeout(function () {
                  e(s);
                }, t));
            };
        var i;
      }
      function Be(e) {
        return [].concat(e);
      }
      function Ne(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function We(e) {
        return e.split("-")[0];
      }
      function Re(e) {
        return [].slice.call(e);
      }
      function He(e) {
        return Object.keys(e).reduce(function (t, i) {
          return void 0 !== e[i] && (t[i] = e[i]), t;
        }, {});
      }
      function Ge() {
        return document.createElement("div");
      }
      function Fe(e) {
        return ["Element", "Fragment"].some(function (t) {
          return De(e, t);
        });
      }
      function Ve(e) {
        return De(e, "MouseEvent");
      }
      function qe(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function Xe(e) {
        return Fe(e)
          ? [e]
          : (function (e) {
              return De(e, "NodeList");
            })(e)
          ? Re(e)
          : Array.isArray(e)
          ? e
          : Re(document.querySelectorAll(e));
      }
      function Ye(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function Ue(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function Ke(e) {
        var t,
          i = Be(e)[0];
        return null != i && null != (t = i.ownerDocument) && t.body
          ? i.ownerDocument
          : document;
      }
      function Ze(e, t, i) {
        var s = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[s](t, i);
        });
      }
      function Qe(e, t) {
        for (var i = t; i; ) {
          var s;
          if (e.contains(i)) return !0;
          i =
            null == i.getRootNode || null == (s = i.getRootNode())
              ? void 0
              : s.host;
        }
        return !1;
      }
      var Je = { isTouch: !1 },
        et = 0;
      function tt() {
        Je.isTouch ||
          ((Je.isTouch = !0),
          window.performance && document.addEventListener("mousemove", it));
      }
      function it() {
        var e = performance.now();
        e - et < 20 &&
          ((Je.isTouch = !1), document.removeEventListener("mousemove", it)),
          (et = e);
      }
      function st() {
        var e = document.activeElement;
        if (qe(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var nt =
        !!("undefined" != typeof window && "undefined" != typeof document) &&
        !!window.msCrypto;
      var rt = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        ot = Object.assign(
          {
            appendTo: _e,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          rt,
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        at = Object.keys(ot);
      function lt(e) {
        var t = (e.plugins || []).reduce(function (t, i) {
          var s,
            n = i.name,
            r = i.defaultValue;
          n && (t[n] = void 0 !== e[n] ? e[n] : null != (s = ot[n]) ? s : r);
          return t;
        }, {});
        return Object.assign({}, e, t);
      }
      function ct(e, t) {
        var i = Object.assign(
          {},
          t,
          { content: ze(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(lt(Object.assign({}, ot, { plugins: t })))
                    : at
                ).reduce(function (t, i) {
                  var s = (e.getAttribute("data-tippy-" + i) || "").trim();
                  if (!s) return t;
                  if ("content" === i) t[i] = s;
                  else
                    try {
                      t[i] = JSON.parse(s);
                    } catch (e) {
                      t[i] = s;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (i.aria = Object.assign({}, ot.aria, i.aria)),
          (i.aria = {
            expanded:
              "auto" === i.aria.expanded ? t.interactive : i.aria.expanded,
            content:
              "auto" === i.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : i.aria.content,
          }),
          i
        );
      }
      function dt(e, t) {
        e.innerHTML = t;
      }
      function ut(e) {
        var t = Ge();
        return (
          !0 === e
            ? (t.className = Ie)
            : ((t.className = Me), Fe(e) ? t.appendChild(e) : dt(t, e)),
          t
        );
      }
      function pt(e, t) {
        Fe(t.content)
          ? (dt(e, ""), e.appendChild(t.content))
          : "function" != typeof t.content &&
            (t.allowHTML ? dt(e, t.content) : (e.textContent = t.content));
      }
      function ht(e) {
        var t = e.firstElementChild,
          i = Re(t.children);
        return {
          box: t,
          content: i.find(function (e) {
            return e.classList.contains(Le);
          }),
          arrow: i.find(function (e) {
            return e.classList.contains(Ie) || e.classList.contains(Me);
          }),
          backdrop: i.find(function (e) {
            return e.classList.contains(ke);
          }),
        };
      }
      function ft(e) {
        var t = Ge(),
          i = Ge();
        (i.className = "tippy-box"),
          i.setAttribute("data-state", "hidden"),
          i.setAttribute("tabindex", "-1");
        var s = Ge();
        function n(i, s) {
          var n = ht(t),
            r = n.box,
            o = n.content,
            a = n.arrow;
          s.theme
            ? r.setAttribute("data-theme", s.theme)
            : r.removeAttribute("data-theme"),
            "string" == typeof s.animation
              ? r.setAttribute("data-animation", s.animation)
              : r.removeAttribute("data-animation"),
            s.inertia
              ? r.setAttribute("data-inertia", "")
              : r.removeAttribute("data-inertia"),
            (r.style.maxWidth =
              "number" == typeof s.maxWidth ? s.maxWidth + "px" : s.maxWidth),
            s.role ? r.setAttribute("role", s.role) : r.removeAttribute("role"),
            (i.content === s.content && i.allowHTML === s.allowHTML) ||
              pt(o, e.props),
            s.arrow
              ? a
                ? i.arrow !== s.arrow &&
                  (r.removeChild(a), r.appendChild(ut(s.arrow)))
                : r.appendChild(ut(s.arrow))
              : a && r.removeChild(a);
        }
        return (
          (s.className = Le),
          s.setAttribute("data-state", "hidden"),
          pt(s, e.props),
          t.appendChild(i),
          i.appendChild(s),
          n(e.props, e.props),
          { popper: t, onUpdate: n }
        );
      }
      ft.$$tippy = !0;
      var gt = 1,
        mt = [],
        vt = [];
      function bt(e, t) {
        var i,
          s,
          n,
          r,
          o,
          a,
          l,
          c,
          d = ct(e, Object.assign({}, ot, lt(He(t)))),
          u = !1,
          p = !1,
          h = !1,
          f = !1,
          g = [],
          m = je(X, d.interactiveDebounce),
          v = gt++,
          b = (c = d.plugins).filter(function (e, t) {
            return c.indexOf(e) === t;
          }),
          y = {
            id: v,
            reference: e,
            popper: Ge(),
            popperInstance: null,
            props: d,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: b,
            clearDelayTimeouts: function () {
              clearTimeout(i), clearTimeout(s), cancelAnimationFrame(n);
            },
            setProps: function (t) {
              0;
              if (y.state.isDestroyed) return;
              _("onBeforeUpdate", [y, t]), V();
              var i = y.props,
                s = ct(
                  e,
                  Object.assign({}, i, He(t), { ignoreAttributes: !0 })
                );
              (y.props = s),
                F(),
                i.interactiveDebounce !== s.interactiveDebounce &&
                  (z(), (m = je(X, s.interactiveDebounce)));
              i.triggerTarget && !s.triggerTarget
                ? Be(i.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : s.triggerTarget && e.removeAttribute("aria-expanded");
              D(), P(), S && S(i, s);
              y.popperInstance &&
                (Z(),
                J().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              _("onAfterUpdate", [y, t]);
            },
            setContent: function (e) {
              y.setProps({ content: e });
            },
            show: function () {
              0;
              var e = y.state.isVisible,
                t = y.state.isDestroyed,
                i = !y.state.isEnabled,
                s = Je.isTouch && !y.props.touch,
                n = $e(y.props.duration, 0, ot.duration);
              if (e || t || i || s) return;
              if (L().hasAttribute("disabled")) return;
              if ((_("onShow", [y], !1), !1 === y.props.onShow(y))) return;
              (y.state.isVisible = !0), A() && (w.style.visibility = "visible");
              P(), W(), y.state.isMounted || (w.style.transition = "none");
              if (A()) {
                var r = I(),
                  o = r.box,
                  l = r.content;
                Ye([o, l], 0);
              }
              (a = function () {
                var e;
                if (y.state.isVisible && !f) {
                  if (
                    ((f = !0),
                    w.offsetHeight,
                    (w.style.transition = y.props.moveTransition),
                    A() && y.props.animation)
                  ) {
                    var t = I(),
                      i = t.box,
                      s = t.content;
                    Ye([i, s], n), Ue([i, s], "visible");
                  }
                  $(),
                    D(),
                    Ne(vt, y),
                    null == (e = y.popperInstance) || e.forceUpdate(),
                    _("onMount", [y]),
                    y.props.animation &&
                      A() &&
                      (function (e, t) {
                        H(e, t);
                      })(n, function () {
                        (y.state.isShown = !0), _("onShown", [y]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = y.props.appendTo,
                    i = L();
                  e =
                    (y.props.interactive && t === _e) || "parent" === t
                      ? i.parentNode
                      : ze(t, [i]);
                  e.contains(w) || e.appendChild(w);
                  (y.state.isMounted = !0), Z(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !y.state.isVisible,
                t = y.state.isDestroyed,
                i = !y.state.isEnabled,
                s = $e(y.props.duration, 1, ot.duration);
              if (e || t || i) return;
              if ((_("onHide", [y], !1), !1 === y.props.onHide(y))) return;
              (y.state.isVisible = !1),
                (y.state.isShown = !1),
                (f = !1),
                (u = !1),
                A() && (w.style.visibility = "hidden");
              if ((z(), R(), P(!0), A())) {
                var n = I(),
                  r = n.box,
                  o = n.content;
                y.props.animation && (Ye([r, o], s), Ue([r, o], "hidden"));
              }
              $(),
                D(),
                y.props.animation
                  ? A() &&
                    (function (e, t) {
                      H(e, function () {
                        !y.state.isVisible &&
                          w.parentNode &&
                          w.parentNode.contains(w) &&
                          t();
                      });
                    })(s, y.unmount)
                  : y.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              k().addEventListener("mousemove", m), Ne(mt, m), m(e);
            },
            enable: function () {
              y.state.isEnabled = !0;
            },
            disable: function () {
              y.hide(), (y.state.isEnabled = !1);
            },
            unmount: function () {
              0;
              y.state.isVisible && y.hide();
              if (!y.state.isMounted) return;
              Q(),
                J().forEach(function (e) {
                  e._tippy.unmount();
                }),
                w.parentNode && w.parentNode.removeChild(w);
              (vt = vt.filter(function (e) {
                return e !== y;
              })),
                (y.state.isMounted = !1),
                _("onHidden", [y]);
            },
            destroy: function () {
              0;
              if (y.state.isDestroyed) return;
              y.clearDelayTimeouts(),
                y.unmount(),
                V(),
                delete e._tippy,
                (y.state.isDestroyed = !0),
                _("onDestroy", [y]);
            },
          };
        if (!d.render) return y;
        var x = d.render(y),
          w = x.popper,
          S = x.onUpdate;
        w.setAttribute("data-tippy-root", ""),
          (w.id = "tippy-" + y.id),
          (y.popper = w),
          (e._tippy = y),
          (w._tippy = y);
        var E = b.map(function (e) {
            return e.fn(y);
          }),
          C = e.hasAttribute("aria-expanded");
        return (
          F(),
          D(),
          P(),
          _("onCreate", [y]),
          d.showOnCreate && ee(),
          w.addEventListener("mouseenter", function () {
            y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
          }),
          w.addEventListener("mouseleave", function () {
            y.props.interactive &&
              y.props.trigger.indexOf("mouseenter") >= 0 &&
              k().addEventListener("mousemove", m);
          }),
          y
        );
        function T() {
          var e = y.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function O() {
          return "hold" === T()[0];
        }
        function A() {
          var e;
          return !(null == (e = y.props.render) || !e.$$tippy);
        }
        function L() {
          return l || e;
        }
        function k() {
          var e = L().parentNode;
          return e ? Ke(e) : document;
        }
        function I() {
          return ht(w);
        }
        function M(e) {
          return (y.state.isMounted && !y.state.isVisible) ||
            Je.isTouch ||
            (r && "focus" === r.type)
            ? 0
            : $e(y.props.delay, e ? 0 : 1, ot.delay);
        }
        function P(e) {
          void 0 === e && (e = !1),
            (w.style.pointerEvents = y.props.interactive && !e ? "" : "none"),
            (w.style.zIndex = "" + y.props.zIndex);
        }
        function _(e, t, i) {
          var s;
          (void 0 === i && (i = !0),
          E.forEach(function (i) {
            i[e] && i[e].apply(i, t);
          }),
          i) && (s = y.props)[e].apply(s, t);
        }
        function $() {
          var t = y.props.aria;
          if (t.content) {
            var i = "aria-" + t.content,
              s = w.id;
            Be(y.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(i);
              if (y.state.isVisible) e.setAttribute(i, t ? t + " " + s : s);
              else {
                var n = t && t.replace(s, "").trim();
                n ? e.setAttribute(i, n) : e.removeAttribute(i);
              }
            });
          }
        }
        function D() {
          !C &&
            y.props.aria.expanded &&
            Be(y.props.triggerTarget || e).forEach(function (e) {
              y.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    y.state.isVisible && e === L() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function z() {
          k().removeEventListener("mousemove", m),
            (mt = mt.filter(function (e) {
              return e !== m;
            }));
        }
        function j(t) {
          if (!Je.isTouch || (!h && "mousedown" !== t.type)) {
            var i = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!y.props.interactive || !Qe(w, i)) {
              if (
                Be(y.props.triggerTarget || e).some(function (e) {
                  return Qe(e, i);
                })
              ) {
                if (Je.isTouch) return;
                if (y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
                  return;
              } else _("onClickOutside", [y, t]);
              !0 === y.props.hideOnClick &&
                (y.clearDelayTimeouts(),
                y.hide(),
                (p = !0),
                setTimeout(function () {
                  p = !1;
                }),
                y.state.isMounted || R());
            }
          }
        }
        function B() {
          h = !0;
        }
        function N() {
          h = !1;
        }
        function W() {
          var e = k();
          e.addEventListener("mousedown", j, !0),
            e.addEventListener("touchend", j, Pe),
            e.addEventListener("touchstart", N, Pe),
            e.addEventListener("touchmove", B, Pe);
        }
        function R() {
          var e = k();
          e.removeEventListener("mousedown", j, !0),
            e.removeEventListener("touchend", j, Pe),
            e.removeEventListener("touchstart", N, Pe),
            e.removeEventListener("touchmove", B, Pe);
        }
        function H(e, t) {
          var i = I().box;
          function s(e) {
            e.target === i && (Ze(i, "remove", s), t());
          }
          if (0 === e) return t();
          Ze(i, "remove", o), Ze(i, "add", s), (o = s);
        }
        function G(t, i, s) {
          void 0 === s && (s = !1),
            Be(y.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, i, s),
                g.push({ node: e, eventType: t, handler: i, options: s });
            });
        }
        function F() {
          O() &&
            (G("touchstart", q, { passive: !0 }),
            G("touchend", Y, { passive: !0 })),
            (function (e) {
              return e.split(/\s+/).filter(Boolean);
            })(y.props.trigger).forEach(function (e) {
              if ("manual" !== e)
                switch ((G(e, q), e)) {
                  case "mouseenter":
                    G("mouseleave", Y);
                    break;
                  case "focus":
                    G(nt ? "focusout" : "blur", U);
                    break;
                  case "focusin":
                    G("focusout", U);
                }
            });
        }
        function V() {
          g.forEach(function (e) {
            var t = e.node,
              i = e.eventType,
              s = e.handler,
              n = e.options;
            t.removeEventListener(i, s, n);
          }),
            (g = []);
        }
        function q(e) {
          var t,
            i = !1;
          if (y.state.isEnabled && !K(e) && !p) {
            var s = "focus" === (null == (t = r) ? void 0 : t.type);
            (r = e),
              (l = e.currentTarget),
              D(),
              !y.state.isVisible &&
                Ve(e) &&
                mt.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (y.props.trigger.indexOf("mouseenter") < 0 || u) &&
              !1 !== y.props.hideOnClick &&
              y.state.isVisible
                ? (i = !0)
                : ee(e),
              "click" === e.type && (u = !i),
              i && !s && te(e);
          }
        }
        function X(e) {
          var t = e.target,
            i = L().contains(t) || w.contains(t);
          if ("mousemove" !== e.type || !i) {
            var s = J()
              .concat(w)
              .map(function (e) {
                var t,
                  i = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return i
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: i,
                      props: d,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var i = t.clientX,
                s = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  n = e.popperState,
                  r = e.props.interactiveBorder,
                  o = We(n.placement),
                  a = n.modifiersData.offset;
                if (!a) return !0;
                var l = "bottom" === o ? a.top.y : 0,
                  c = "top" === o ? a.bottom.y : 0,
                  d = "right" === o ? a.left.x : 0,
                  u = "left" === o ? a.right.x : 0,
                  p = t.top - s + l > r,
                  h = s - t.bottom - c > r,
                  f = t.left - i + d > r,
                  g = i - t.right - u > r;
                return p || h || f || g;
              });
            })(s, e) && (z(), te(e));
          }
        }
        function Y(e) {
          K(e) ||
            (y.props.trigger.indexOf("click") >= 0 && u) ||
            (y.props.interactive ? y.hideWithInteractivity(e) : te(e));
        }
        function U(e) {
          (y.props.trigger.indexOf("focusin") < 0 && e.target !== L()) ||
            (y.props.interactive &&
              e.relatedTarget &&
              w.contains(e.relatedTarget)) ||
            te(e);
        }
        function K(e) {
          return !!Je.isTouch && O() !== e.type.indexOf("touch") >= 0;
        }
        function Z() {
          Q();
          var t = y.props,
            i = t.popperOptions,
            s = t.placement,
            n = t.offset,
            r = t.getReferenceClientRect,
            o = t.moveTransition,
            l = A() ? ht(w).arrow : null,
            c = r
              ? {
                  getBoundingClientRect: r,
                  contextElement: r.contextElement || L(),
                }
              : e,
            d = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;
                if (A()) {
                  var i = I().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (e) {
                      "placement" === e
                        ? i.setAttribute("data-placement", t.placement)
                        : t.attributes.popper["data-popper-" + e]
                        ? i.setAttribute("data-" + e, "")
                        : i.removeAttribute("data-" + e);
                    }
                  ),
                    (t.attributes.popper = {});
                }
              },
            },
            u = [
              { name: "offset", options: { offset: n } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !o } },
              d,
            ];
          A() &&
            l &&
            u.push({ name: "arrow", options: { element: l, padding: 3 } }),
            u.push.apply(u, (null == i ? void 0 : i.modifiers) || []),
            (y.popperInstance = Ae(
              c,
              w,
              Object.assign({}, i, {
                placement: s,
                onFirstUpdate: a,
                modifiers: u,
              })
            ));
        }
        function Q() {
          y.popperInstance &&
            (y.popperInstance.destroy(), (y.popperInstance = null));
        }
        function J() {
          return Re(w.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          y.clearDelayTimeouts(), e && _("onTrigger", [y, e]), W();
          var t = M(!0),
            s = T(),
            n = s[0],
            r = s[1];
          Je.isTouch && "hold" === n && r && (t = r),
            t
              ? (i = setTimeout(function () {
                  y.show();
                }, t))
              : y.show();
        }
        function te(e) {
          if (
            (y.clearDelayTimeouts(),
            _("onUntrigger", [y, e]),
            y.state.isVisible)
          ) {
            if (
              !(
                y.props.trigger.indexOf("mouseenter") >= 0 &&
                y.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                u
              )
            ) {
              var t = M(!1);
              t
                ? (s = setTimeout(function () {
                    y.state.isVisible && y.hide();
                  }, t))
                : (n = requestAnimationFrame(function () {
                    y.hide();
                  }));
            }
          } else R();
        }
      }
      function yt(e, t) {
        void 0 === t && (t = {});
        var i = ot.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", tt, Pe),
          window.addEventListener("blur", st);
        var s = Object.assign({}, t, { plugins: i }),
          n = Xe(e).reduce(function (e, t) {
            var i = t && bt(t, s);
            return i && e.push(i), e;
          }, []);
        return Fe(e) ? n[0] : n;
      }
      (yt.defaultProps = ot),
        (yt.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            ot[t] = e[t];
          });
        }),
        (yt.currentInput = Je);
      Object.assign({}, ce, {
        effect: function (e) {
          var t = e.state,
            i = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          Object.assign(t.elements.popper.style, i.popper),
            (t.styles = i),
            t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
        },
      });
      yt.setDefaultProps({ render: ft });
      function xt(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function wt(e = {}, t = {}) {
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : xt(t[i]) &&
              xt(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              wt(e[i], t[i]);
        });
      }
      yt("[data-tippy-content]", {});
      const St = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function Et() {
        const e = "undefined" != typeof document ? document : {};
        return wt(e, St), e;
      }
      const Ct = {
        document: St,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function Tt() {
        const e = "undefined" != typeof window ? window : {};
        return wt(e, Ct), e;
      }
      class Ot extends Array {
        constructor(e) {
          super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this);
        }
      }
      function At(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...At(e)) : t.push(e);
          }),
          t
        );
      }
      function Lt(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function kt(e, t) {
        const i = Tt(),
          s = Et();
        let n = [];
        if (!t && e instanceof Ot) return e;
        if (!e) return new Ot(n);
        if ("string" == typeof e) {
          const i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            let e = "div";
            0 === i.indexOf("<li") && (e = "ul"),
              0 === i.indexOf("<tr") && (e = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
              0 === i.indexOf("<tbody") && (e = "table"),
              0 === i.indexOf("<option") && (e = "select");
            const t = s.createElement(e);
            t.innerHTML = i;
            for (let e = 0; e < t.childNodes.length; e += 1)
              n.push(t.childNodes[e]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              const i = [],
                s = t.querySelectorAll(e);
              for (let e = 0; e < s.length; e += 1) i.push(s[e]);
              return i;
            })(e.trim(), t || s);
        } else if (e.nodeType || e === i || e === s) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof Ot) return e;
          n = e;
        }
        return new Ot(
          (function (e) {
            const t = [];
            for (let i = 0; i < e.length; i += 1)
              -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t;
          })(n)
        );
      }
      kt.fn = Ot.prototype;
      const It = "resize scroll".split(" ");
      function Mt(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              It.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : kt(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      Mt("click"),
        Mt("blur"),
        Mt("focus"),
        Mt("focusin"),
        Mt("focusout"),
        Mt("keyup"),
        Mt("keydown"),
        Mt("keypress"),
        Mt("submit"),
        Mt("change"),
        Mt("mousedown"),
        Mt("mousemove"),
        Mt("mouseup"),
        Mt("mouseenter"),
        Mt("mouseleave"),
        Mt("mouseout"),
        Mt("mouseover"),
        Mt("touchstart"),
        Mt("touchend"),
        Mt("touchmove"),
        Mt("resize"),
        Mt("scroll");
      const Pt = {
        addClass: function (...e) {
          const t = At(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = At(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = At(e.map((e) => e.split(" ")));
          return (
            Lt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = At(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(e, t);
            else
              for (const t in e)
                (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, i, s, n] = e;
          function r(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), kt(t).is(i))) s.apply(t, n);
            else {
              const e = kt(t).parents();
              for (let t = 0; t < e.length; t += 1)
                kt(e[t]).is(i) && s.apply(e[t], n);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
          }
          "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
            n || (n = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (i)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: s,
                    proxyListener: r,
                  }),
                  t.addEventListener(e, r, n);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: s, proxyListener: o }),
                  t.addEventListener(e, o, n);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, i, s, n] = e;
          "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
            n || (n = !1);
          const r = t.split(" ");
          for (let e = 0; e < r.length; e += 1) {
            const t = r[e];
            for (let e = 0; e < this.length; e += 1) {
              const r = this[e];
              let o;
              if (
                (!i && r.dom7Listeners
                  ? (o = r.dom7Listeners[t])
                  : i && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const i = o[e];
                  (s && i.listener === s) ||
                  (s &&
                    i.listener &&
                    i.listener.dom7proxy &&
                    i.listener.dom7proxy === s)
                    ? (r.removeEventListener(t, i.proxyListener, n),
                      o.splice(e, 1))
                    : s ||
                      (r.removeEventListener(t, i.proxyListener, n),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = Tt(),
            i = e[0].split(" "),
            s = e[1];
          for (let n = 0; n < i.length; n += 1) {
            const r = i[n];
            for (let i = 0; i < this.length; i += 1) {
              const n = this[i];
              if (t.CustomEvent) {
                const i = new t.CustomEvent(r, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = e.filter((e, t) => t > 0)),
                  n.dispatchEvent(i),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function i(s) {
                s.target === this &&
                  (e.call(this, s), t.off("transitionend", i));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = Tt();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = Tt(),
              t = Et(),
              i = this[0],
              s = i.getBoundingClientRect(),
              n = t.body,
              r = i.clientTop || n.clientTop || 0,
              o = i.clientLeft || n.clientLeft || 0,
              a = i === e ? e.scrollY : i.scrollTop,
              l = i === e ? e.scrollX : i.scrollLeft;
            return { top: s.top + a - r, left: s.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const i = Tt();
          let s;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (s = 0; s < this.length; s += 1)
                for (const t in e) this[s].style[t] = e[t];
              return this;
            }
            if (this[0])
              return i.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, i) => {
                e.apply(t, [t, i]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = Tt(),
            i = Et(),
            s = this[0];
          let n, r;
          if (!s || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (s.matches) return s.matches(e);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
            if (s.msMatchesSelector) return s.msMatchesSelector(e);
            for (n = kt(e), r = 0; r < n.length; r += 1)
              if (n[r] === s) return !0;
            return !1;
          }
          if (e === i) return s === i;
          if (e === t) return s === t;
          if (e.nodeType || e instanceof Ot) {
            for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
              if (n[r] === s) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return kt([]);
          if (e < 0) {
            const i = t + e;
            return kt(i < 0 ? [] : [this[i]]);
          }
          return kt([this[e]]);
        },
        append: function (...e) {
          let t;
          const i = Et();
          for (let s = 0; s < e.length; s += 1) {
            t = e[s];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const s = i.createElement("div");
                for (s.innerHTML = t; s.firstChild; )
                  this[e].appendChild(s.firstChild);
              } else if (t instanceof Ot)
                for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = Et();
          let i, s;
          for (i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
                this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
            } else if (e instanceof Ot)
              for (s = 0; s < e.length; s += 1)
                this[i].insertBefore(e[s], this[i].childNodes[0]);
            else this[i].insertBefore(e, this[i].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                kt(this[0].nextElementSibling).is(e)
                ? kt([this[0].nextElementSibling])
                : kt([])
              : this[0].nextElementSibling
              ? kt([this[0].nextElementSibling])
              : kt([])
            : kt([]);
        },
        nextAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return kt([]);
          for (; i.nextElementSibling; ) {
            const s = i.nextElementSibling;
            e ? kt(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return kt(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && kt(t.previousElementSibling).is(e)
                ? kt([t.previousElementSibling])
                : kt([])
              : t.previousElementSibling
              ? kt([t.previousElementSibling])
              : kt([]);
          }
          return kt([]);
        },
        prevAll: function (e) {
          const t = [];
          let i = this[0];
          if (!i) return kt([]);
          for (; i.previousElementSibling; ) {
            const s = i.previousElementSibling;
            e ? kt(s).is(e) && t.push(s) : t.push(s), (i = s);
          }
          return kt(t);
        },
        parent: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (e
                ? kt(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                : t.push(this[i].parentNode));
          return kt(t);
        },
        parents: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].parentNode;
            for (; s; )
              e ? kt(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
          }
          return kt(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? kt([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) t.push(s[e]);
          }
          return kt(t);
        },
        children: function (e) {
          const t = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].children;
            for (let i = 0; i < s.length; i += 1)
              (e && !kt(s[i]).is(e)) || t.push(s[i]);
          }
          return kt(t);
        },
        filter: function (e) {
          return kt(Lt(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(Pt).forEach((e) => {
        Object.defineProperty(kt.fn, e, { value: Pt[e], writable: !0 });
      });
      const _t = kt;
      function $t(e, t = 0) {
        return setTimeout(e, t);
      }
      function Dt() {
        return Date.now();
      }
      function zt(e, t = "x") {
        const i = Tt();
        let s, n, r;
        const o = (function (e) {
          const t = Tt();
          let i;
          return (
            t.getComputedStyle && (i = t.getComputedStyle(e, null)),
            !i && e.currentStyle && (i = e.currentStyle),
            i || (i = e.style),
            i
          );
        })(e);
        return (
          i.WebKitCSSMatrix
            ? ((n = o.transform || o.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((r =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (s = r.toString().split(","))),
          "x" === t &&
            (n = i.WebKitCSSMatrix
              ? r.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          "y" === t &&
            (n = i.WebKitCSSMatrix
              ? r.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])),
          n || 0
        );
      }
      function jt(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Bt(...e) {
        const t = Object(e[0]),
          i = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < e.length; n += 1) {
          const r = e[n];
          if (
            null != r &&
            ((s = r),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? s instanceof HTMLElement
              : s && (1 === s.nodeType || 11 === s.nodeType)))
          ) {
            const e = Object.keys(Object(r)).filter((e) => i.indexOf(e) < 0);
            for (let i = 0, s = e.length; i < s; i += 1) {
              const s = e[i],
                n = Object.getOwnPropertyDescriptor(r, s);
              void 0 !== n &&
                n.enumerable &&
                (jt(t[s]) && jt(r[s])
                  ? r[s].__swiper__
                    ? (t[s] = r[s])
                    : Bt(t[s], r[s])
                  : !jt(t[s]) && jt(r[s])
                  ? ((t[s] = {}),
                    r[s].__swiper__ ? (t[s] = r[s]) : Bt(t[s], r[s]))
                  : (t[s] = r[s]));
            }
          }
        }
        var s;
        return t;
      }
      function Nt(e, t, i) {
        e.style.setProperty(t, i);
      }
      function Wt({ swiper: e, targetPosition: t, side: i }) {
        const s = Tt(),
          n = -e.translate;
        let r,
          o = null;
        const a = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          s.cancelAnimationFrame(e.cssModeFrameID);
        const l = t > n ? "next" : "prev",
          c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
          d = () => {
            (r = new Date().getTime()), null === o && (o = r);
            const l = Math.max(Math.min((r - o) / a, 1), 0),
              u = 0.5 - Math.cos(l * Math.PI) / 2;
            let p = n + u * (t - n);
            if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [i]: p }), c(p, t)))
              return (
                (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [i]: p });
                }),
                void s.cancelAnimationFrame(e.cssModeFrameID)
              );
            e.cssModeFrameID = s.requestAnimationFrame(d);
          };
        d();
      }
      let Rt, Ht, Gt;
      function Ft() {
        return (
          Rt ||
            (Rt = (function () {
              const e = Tt(),
                t = Et();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const i = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, i);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          Rt
        );
      }
      function Vt(e = {}) {
        return (
          Ht ||
            (Ht = (function ({ userAgent: e } = {}) {
              const t = Ft(),
                i = Tt(),
                s = i.navigator.platform,
                n = e || i.navigator.userAgent,
                r = { ios: !1, android: !1 },
                o = i.screen.width,
                a = i.screen.height,
                l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = n.match(/(iPad).*OS\s([\d_]+)/);
              const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === s;
              let h = "MacIntel" === s;
              return (
                !c &&
                  h &&
                  t.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${a}`) >= 0 &&
                  ((c = n.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, "13_0_0"]),
                  (h = !1)),
                l && !p && ((r.os = "android"), (r.android = !0)),
                (c || u || d) && ((r.os = "ios"), (r.ios = !0)),
                r
              );
            })(e)),
          Ht
        );
      }
      function qt() {
        return (
          Gt ||
            (Gt = (function () {
              const e = Tt();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          Gt
        );
      }
      const Xt = {
        on(e, t, i) {
          const s = this;
          if ("function" != typeof t) return s;
          const n = i ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][n](t);
            }),
            s
          );
        },
        once(e, t, i) {
          const s = this;
          if ("function" != typeof t) return s;
          function n(...i) {
            s.off(e, n),
              n.__emitterProxy && delete n.__emitterProxy,
              t.apply(s, i);
          }
          return (n.__emitterProxy = t), s.on(e, n, i);
        },
        onAny(e, t) {
          const i = this;
          if ("function" != typeof e) return i;
          const s = t ? "unshift" : "push";
          return (
            i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const i = t.eventsAnyListeners.indexOf(e);
          return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
        },
        off(e, t) {
          const i = this;
          return i.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach((s, n) => {
                      (s === t ||
                        (s.__emitterProxy && s.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(n, 1);
                    });
              }),
              i)
            : i;
        },
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let i, s, n;
          "string" == typeof e[0] || Array.isArray(e[0])
            ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
            : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t)),
            s.unshift(n);
          return (
            (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(n, [e, ...s]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(n, s);
                  });
            }),
            t
          );
        },
      };
      const Yt = {
        updateSize: function () {
          const e = this;
          let t, i;
          const s = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : s[0].clientWidth),
            (i =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : s[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === i && e.isVertical()) ||
              ((t =
                t -
                parseInt(s.css("padding-left") || 0, 10) -
                parseInt(s.css("padding-right") || 0, 10)),
              (i =
                i -
                parseInt(s.css("padding-top") || 0, 10) -
                parseInt(s.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function i(e, i) {
            return parseFloat(e.getPropertyValue(t(i)) || 0);
          }
          const s = e.params,
            { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && s.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = n.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let p = [];
          const h = [],
            f = [];
          let g = s.slidesOffsetBefore;
          "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
          let m = s.slidesOffsetAfter;
          "function" == typeof m && (m = s.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = s.spaceBetween,
            x = -g,
            w = 0,
            S = 0;
          if (void 0 === r) return;
          "string" == typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * r),
            (e.virtualSize = -y),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            s.centeredSlides &&
              s.cssMode &&
              (Nt(e.wrapperEl, "--swiper-centered-offset-before", ""),
              Nt(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const E = s.grid && s.grid.rows > 1 && e.grid;
          let C;
          E && e.grid.initSlides(u);
          const T =
            "auto" === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              (e) => void 0 !== s.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < u; n += 1) {
            C = 0;
            const o = d.eq(n);
            if (
              (E && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display"))
            ) {
              if ("auto" === s.slidesPerView) {
                T && (d[n].style[t("width")] = "");
                const r = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  s.roundLengths)
                )
                  C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = i(r, "width"),
                    t = i(r, "padding-left"),
                    s = i(r, "padding-right"),
                    n = i(r, "margin-left"),
                    a = i(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + n + a;
                  else {
                    const { clientWidth: i, offsetWidth: r } = o[0];
                    C = e + t + s + n + a + (r - i);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  s.roundLengths && (C = Math.floor(C));
              } else
                (C = (r - (s.slidesPerView - 1) * y) / s.slidesPerView),
                  s.roundLengths && (C = Math.floor(C)),
                  d[n] && (d[n].style[t("width")] = `${C}px`);
              d[n] && (d[n].swiperSlideSize = C),
                f.push(C),
                s.centeredSlides
                  ? ((x = x + C / 2 + w / 2 + y),
                    0 === w && 0 !== n && (x = x - r / 2 - y),
                    0 === n && (x = x - r / 2 - y),
                    Math.abs(x) < 0.001 && (x = 0),
                    s.roundLengths && (x = Math.floor(x)),
                    S % s.slidesPerGroup == 0 && p.push(x),
                    h.push(x))
                  : (s.roundLengths && (x = Math.floor(x)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(x),
                    h.push(x),
                    (x = x + C + y)),
                (e.virtualSize += C + y),
                (w = C),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + m),
            o &&
              a &&
              ("slide" === s.effect || "coverflow" === s.effect) &&
              n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
            s.setWrapperSize &&
              n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
            E && e.grid.updateWrapperSize(C, p, t),
            !s.centeredSlides)
          ) {
            const t = [];
            for (let i = 0; i < p.length; i += 1) {
              let n = p[i];
              s.roundLengths && (n = Math.floor(n)),
                p[i] <= e.virtualSize - r && t.push(n);
            }
            (p = t),
              Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - r);
          }
          if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
            const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
              [i]: `${y}px`,
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
              (e -= s.spaceBetween);
            const t = e - r;
            p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0);
              }),
              (e -= s.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              p.forEach((e, i) => {
                p[i] = e - t;
              }),
                h.forEach((e, i) => {
                  h[i] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: f,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            Nt(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              Nt(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              i = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + i));
          }
          u !== c && e.emit("slidesLengthChange"),
            p.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && e.updateSlidesOffset();
        },
        updateAutoHeight: function (e) {
          const t = this,
            i = [],
            s = t.virtual && t.params.virtual.enabled;
          let n,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            s
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                i.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !s) break;
                i.push(o(e));
              }
          else i.push(o(t.activeIndex));
          for (n = 0; n < i.length; n += 1)
            if (void 0 !== i[n]) {
              const e = i[n].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset = e.isHorizontal()
              ? t[i].offsetLeft
              : t[i].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            i = t.params,
            { slides: s, rtlTranslate: n, snapGrid: r } = t;
          if (0 === s.length) return;
          void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          n && (o = e),
            s.removeClass(i.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < s.length; e += 1) {
            const a = s[e];
            let l = a.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
            const c =
                (o + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              d =
                (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + i.spaceBetween),
              u = -(o - l),
              p = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (u <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              s.eq(e).addClass(i.slideVisibleClass)),
              (a.progress = n ? -c : c),
              (a.originalProgress = n ? -d : d);
          }
          t.visibleSlides = _t(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const i = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * i) || 0;
          }
          const i = t.params,
            s = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: r, isEnd: o } = t;
          const a = r,
            l = o;
          0 === s
            ? ((n = 0), (r = !0), (o = !0))
            : ((n = (e - t.minTranslate()) / s), (r = n <= 0), (o = n >= 1)),
            Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !r) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: i,
              $wrapperEl: s,
              activeIndex: n,
              realIndex: r,
            } = e,
            o = e.virtual && i.virtual.enabled;
          let a;
          t.removeClass(
            `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${i.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : t.eq(n)),
            a.addClass(i.slideActiveClass),
            i.loop &&
              (a.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(i.slideNextClass));
          let c = a
            .prevAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass),
              c.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            i = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: s,
              snapGrid: n,
              params: r,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < s.length; e += 1)
              void 0 !== s[e + 1]
                ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                  ? (d = e)
                  : i >= s[e] && i < s[e + 1] && (d = e + 1)
                : i >= s[e] && (d = e);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (n.indexOf(i) >= 0) c = n.indexOf(i);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / r.slidesPerGroup);
          }
          if ((c >= n.length && (c = n.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            i = t.params,
            s = _t(e).closest(`.${i.slideClass}`)[0];
          let n,
            r = !1;
          if (s)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === s) {
                (r = !0), (n = e);
                break;
              }
          if (!s || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = s),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  _t(s).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            i.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const Ut = {
        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
          const {
            params: t,
            rtlTranslate: i,
            translate: s,
            $wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;
          let r = zt(n[0], e);
          return i && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const i = this,
            {
              rtlTranslate: s,
              params: n,
              $wrapperEl: r,
              wrapperEl: o,
              progress: a,
            } = i;
          let l,
            c = 0,
            d = 0;
          i.isHorizontal() ? (c = s ? -e : e) : (d = e),
            n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            n.cssMode
              ? (o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  i.isHorizontal() ? -c : -d)
              : n.virtualTranslate ||
                r.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? c : d);
          const u = i.maxTranslate() - i.minTranslate();
          (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
            l !== a && i.updateProgress(e),
            i.emit("setTranslate", i.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          i = !0,
          s = !0,
          n
        ) {
          const r = this,
            { params: o, wrapperEl: a } = r;
          if (r.animating && o.preventInteractionOnTransition) return !1;
          const l = r.minTranslate(),
            c = r.maxTranslate();
          let d;
          if (
            ((d = s && e > l ? l : s && e < c ? c : e),
            r.updateProgress(d),
            o.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!r.support.smoothScroll)
                return (
                  Wt({
                    swiper: r,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(d),
                i &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(d),
                i &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        i && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Kt({ swiper: e, runCallbacks: t, direction: i, step: s }) {
        const { activeIndex: n, previousIndex: r } = e;
        let o = i;
        if (
          (o || (o = n > r ? "next" : n < r ? "prev" : "reset"),
          e.emit(`transition${s}`),
          t && n !== r)
        ) {
          if ("reset" === o) return void e.emit(`slideResetTransition${s}`);
          e.emit(`slideChangeTransition${s}`),
            "next" === o
              ? e.emit(`slideNextTransition${s}`)
              : e.emit(`slidePrevTransition${s}`);
        }
      }
      const Zt = {
        slideTo: function (e = 0, t = this.params.speed, i = !0, s, n) {
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: f,
          } = r;
          if (
            (r.animating && a.preventInteractionOnTransition) ||
            (!f && !s && !n)
          )
            return !1;
          const g = Math.min(r.params.slidesPerGroupSkip, o);
          let m = g + Math.floor((o - g) / r.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              i &&
              r.emit("beforeSlideChangeStart");
          const v = -l[m];
          if ((r.updateProgress(v), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                i = Math.floor(100 * c[e]),
                s = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= i && t < s - (s - i) / 2
                  ? (o = e)
                  : t >= i && t < s && (o = e + 1)
                : t >= i && (o = e);
            }
          if (r.initialized && o !== u) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            ((b = o > u ? "next" : o < u ? "prev" : "reset"),
            (p && -v === r.translate) || (!p && v === r.translate))
          )
            return (
              r.updateActiveIndex(o),
              a.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== a.effect && r.setTranslate(v),
              "reset" !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)),
              !1
            );
          if (a.cssMode) {
            const e = r.isHorizontal(),
              i = p ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = i),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  Wt({
                    swiper: r,
                    targetPosition: i,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(o),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, b),
            0 === t
              ? r.transitionEnd(i, b)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(i, b));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
          const n = this;
          let r = e;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s);
        },
        slideNext: function (e = this.params.speed, t = !0, i) {
          const s = this,
            { animating: n, enabled: r, params: o } = s;
          if (!r) return s;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
          const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (n && o.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          return o.rewind && s.isEnd
            ? s.slideTo(0, e, t, i)
            : s.slideTo(s.activeIndex + l, e, t, i);
        },
        slidePrev: function (e = this.params.speed, t = !0, i) {
          const s = this,
            {
              params: n,
              animating: r,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = s;
          if (!c) return s;
          if (n.loop) {
            if (r && n.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? s.translate : -s.translate),
            p = o.map((e) => d(e));
          let h = o[p.indexOf(u) - 1];
          if (void 0 === h && n.cssMode) {
            let e;
            o.forEach((t, i) => {
              u >= t && (e = i);
            }),
              void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          return (
            void 0 !== h &&
              ((f = a.indexOf(h)),
              f < 0 && (f = s.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            n.rewind && s.isBeginning
              ? s.slideTo(s.slides.length - 1, e, t, i)
              : s.slideTo(f, e, t, i)
          );
        },
        slideReset: function (e = this.params.speed, t = !0, i) {
          return this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function (e = this.params.speed, t = !0, i, s = 0.5) {
          const n = this;
          let r = n.activeIndex;
          const o = Math.min(n.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[a]) {
            const e = n.snapGrid[a];
            l - e > (n.snapGrid[a + 1] - e) * s &&
              (r += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[a - 1];
            l - e <= (n.snapGrid[a] - e) * s && (r -= n.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, n.slidesGrid.length - 1)),
            n.slideTo(r, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: i } = e,
            s =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              _t(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - s / 2 ||
                  r > e.slides.length - e.loopedSlides + s / 2
                  ? (e.loopFix(),
                    (r = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    $t(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - s
                ? (e.loopFix(),
                  (r = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  $t(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      };
      const Qt = {
        loopCreate: function () {
          const e = this,
            t = Et(),
            { params: i, $wrapperEl: s } = e,
            n = s.children().length > 0 ? _t(s.children()[0].parentNode) : s;
          n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
          let r = n.children(`.${i.slideClass}`);
          if (i.loopFillGroupWithBlank) {
            const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
            if (e !== i.slidesPerGroup) {
              for (let s = 0; s < e; s += 1) {
                const e = _t(t.createElement("div")).addClass(
                  `${i.slideClass} ${i.slideBlankClass}`
                );
                n.append(e);
              }
              r = n.children(`.${i.slideClass}`);
            }
          }
          "auto" !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10)
            )),
            (e.loopedSlides += i.loopAdditionalSlides),
            e.loopedSlides > r.length && (e.loopedSlides = r.length);
          const o = [],
            a = [];
          r.each((t, i) => {
            const s = _t(t);
            i < e.loopedSlides && a.push(t),
              i < r.length && i >= r.length - e.loopedSlides && o.push(t),
              s.attr("data-swiper-slide-index", i);
          });
          for (let e = 0; e < a.length; e += 1)
            n.append(_t(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            n.prepend(_t(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: i,
            loopedSlides: s,
            allowSlidePrev: n,
            allowSlideNext: r,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < s) {
            (l = i.length - 3 * s + t), (l += s);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= i.length - s) {
            (l = -i.length + t + s), (l += s);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: i } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
      function Jt(e) {
        const t = this,
          i = Et(),
          s = Tt(),
          n = t.touchEventsData,
          { params: r, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = _t(l.target);
        if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === l.type),
          !n.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!n.isTouchEvent && "button" in l && l.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!r.noSwipingClass &&
          "" !== r.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = _t(e.path[0]));
        const d = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          u = !(!l.target || !l.target.shadowRoot);
        if (
          r.noSwiping &&
          (u
            ? (function (e, t = this) {
                return (function t(i) {
                  return i && i !== Et() && i !== Tt()
                    ? (i.assignedSlot && (i = i.assignedSlot),
                      i.closest(e) || t(i.getRootNode().host))
                    : null;
                })(t);
              })(d, l.target)
            : c.closest(d)[0])
        )
          return void (t.allowClick = !0);
        if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const p = o.currentX,
          h = o.currentY,
          f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          g = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (f && (p <= g || p >= s.innerWidth - g)) {
          if ("prevent" !== f) return;
          e.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = p),
          (o.startY = h),
          (n.touchStartTime = Dt()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (n.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(n.focusableElements) && (e = !1),
            i.activeElement &&
              _t(i.activeElement).is(n.focusableElements) &&
              i.activeElement !== c[0] &&
              i.activeElement.blur();
          const s = e && t.allowTouchMove && r.touchStartPreventDefault;
          (!r.touchStartForcePreventDefault && !s) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.emit("touchStart", l);
      }
      function ei(e) {
        const t = Et(),
          i = this,
          s = i.touchEventsData,
          { params: n, touches: r, rtlTranslate: o, enabled: a } = i;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
          return void (
            s.startMoving &&
            s.isScrolling &&
            i.emit("touchMoveOpposite", l)
          );
        if (s.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? c.pageX : l.pageX,
          u = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (r.startX = d), void (r.startY = u);
        if (!i.allowTouchMove)
          return (
            (i.allowClick = !1),
            void (
              s.isTouched &&
              (Object.assign(r, {
                startX: d,
                startY: u,
                currentX: d,
                currentY: u,
              }),
              (s.touchStartTime = Dt()))
            )
          );
        if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (i.isVertical()) {
            if (
              (u < r.startY && i.translate <= i.maxTranslate()) ||
              (u > r.startY && i.translate >= i.minTranslate())
            )
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (d < r.startX && i.translate <= i.maxTranslate()) ||
            (d > r.startX && i.translate >= i.minTranslate())
          )
            return;
        if (
          s.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          _t(l.target).is(s.focusableElements)
        )
          return (s.isMoved = !0), void (i.allowClick = !1);
        if (
          (s.allowTouchCallbacks && i.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (r.currentX = d), (r.currentY = u);
        const p = r.currentX - r.startX,
          h = r.currentY - r.startY;
        if (
          i.params.threshold &&
          Math.sqrt(p ** 2 + h ** 2) < i.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (i.isHorizontal() && r.currentY === r.startY) ||
          (i.isVertical() && r.currentX === r.startX)
            ? (s.isScrolling = !1)
            : p * p + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
              (s.isScrolling = i.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && i.emit("touchMoveOpposite", l),
          void 0 === s.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (s.startMoving = !0)),
          s.isScrolling)
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (i.allowClick = !1),
          !n.cssMode && l.cancelable && l.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
          s.isMoved ||
            (n.loop && !n.cssMode && i.loopFix(),
            (s.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating &&
              i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (s.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
              i.setGrabCursor(!0),
            i.emit("sliderFirstMove", l)),
          i.emit("sliderMove", l),
          (s.isMoved = !0);
        let f = i.isHorizontal() ? p : h;
        (r.diff = f),
          (f *= n.touchRatio),
          o && (f = -f),
          (i.swipeDirection = f > 0 ? "prev" : "next"),
          (s.currentTranslate = f + s.startTranslate);
        let g = !0,
          m = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (m = 0),
          f > 0 && s.currentTranslate > i.minTranslate()
            ? ((g = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + f) ** m))
            : f < 0 &&
              s.currentTranslate < i.maxTranslate() &&
              ((g = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - f) ** m)),
          g && (l.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            "next" === i.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !i.allowSlidePrev &&
            "prev" === i.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.allowSlidePrev ||
            i.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(f) > n.threshold || s.allowThresholdMove))
            return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (s.currentTranslate = s.startTranslate),
              void (r.diff = i.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
            n.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          i.params.freeMode &&
            n.freeMode.enabled &&
            i.freeMode &&
            i.freeMode.onTouchMove(),
          i.updateProgress(s.currentTranslate),
          i.setTranslate(s.currentTranslate));
      }
      function ti(e) {
        const t = this,
          i = t.touchEventsData,
          {
            params: s,
            touches: n,
            rtlTranslate: r,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          i.allowTouchCallbacks && t.emit("touchEnd", l),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        s.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = Dt(),
          d = c - i.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - i.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((i.lastClickTime = Dt()),
          $t(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        let u;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (u = s.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          s.cssMode)
        )
          return;
        if (t.params.freeMode && s.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let p = 0,
          h = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== o[e + t]
            ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
            : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
        }
        const f = (u - o[p]) / h,
          g = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (d > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (f >= s.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (f > 1 - s.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + g)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(p + g),
              "prev" === t.swipeDirection && t.slideTo(p));
        }
      }
      function ii() {
        const e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = s),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function si(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function ni() {
        const e = this,
          { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
        if (!s) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let ri = !1;
      function oi() {}
      const ai = (e, t) => {
        const i = Et(),
          {
            params: s,
            touchEvents: n,
            el: r,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!s.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== n.start ||
            !l.passiveListener ||
            !s.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[d](n.start, e.onTouchStart, t),
            r[d](
              n.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            r[d](n.end, e.onTouchEnd, t),
            n.cancel && r[d](n.cancel, e.onTouchEnd, t);
        } else
          r[d](n.start, e.onTouchStart, !1),
            i[d](n.move, e.onTouchMove, c),
            i[d](n.end, e.onTouchEnd, !1);
        (s.preventClicks || s.preventClicksPropagation) &&
          r[d]("click", e.onClick, !0),
          s.cssMode && o[d]("scroll", e.onScroll),
          s.updateOnWindowResize
            ? e[u](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                ii,
                !0
              )
            : e[u]("observerUpdate", ii, !0);
      };
      const li = {
          attachEvents: function () {
            const e = this,
              t = Et(),
              { params: i, support: s } = e;
            (e.onTouchStart = Jt.bind(e)),
              (e.onTouchMove = ei.bind(e)),
              (e.onTouchEnd = ti.bind(e)),
              i.cssMode && (e.onScroll = ni.bind(e)),
              (e.onClick = si.bind(e)),
              s.touch &&
                !ri &&
                (t.addEventListener("touchstart", oi), (ri = !0)),
              ai(e, "on");
          },
          detachEvents: function () {
            ai(this, "off");
          },
        },
        ci = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const di = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: i,
              loopedSlides: s = 0,
              params: n,
              $el: r,
            } = e,
            o = n.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = ci(e, n),
            d = ci(e, l),
            u = n.enabled;
          c && !d
            ? (r.removeClass(
                `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (r.addClass(`${n.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === n.grid.fill)) &&
                r.addClass(`${n.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const p = l.direction && l.direction !== n.direction,
            h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
          p && i && e.changeDirection(), Bt(e.params, l);
          const f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !f ? e.disable() : !u && f && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            h &&
              i &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - s + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t = "window", i) {
          if (!e || ("container" === t && !i)) return;
          let s = !1;
          const n = Tt(),
            r = "window" === t ? n.innerHeight : i.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: r * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: r, value: a } = o[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
              : a <= i.clientWidth && (s = r);
          }
          return s || "max";
        },
      };
      const ui = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: i,
              rtl: s,
              $el: n,
              device: r,
              support: o,
            } = e,
            a = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((s) => {
                        e[s] && i.push(t + s);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: s },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
              ],
              i.containerModifierClass
            );
          t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const pi = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function hi(e, t) {
        return function (i = {}) {
          const s = Object.keys(i)[0],
            n = i[s];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
                !0 === e[s] &&
                (e[s] = { auto: !0 }),
              s in e && "enabled" in n
                ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                  "object" != typeof e[s] ||
                    "enabled" in e[s] ||
                    (e[s].enabled = !0),
                  e[s] || (e[s] = { enabled: !1 }),
                  Bt(t, i))
                : Bt(t, i))
            : Bt(t, i);
        };
      }
      const fi = {
          eventsEmitter: Xt,
          update: Yt,
          translate: Ut,
          transition: {
            setTransition: function (e, t) {
              const i = this;
              i.params.cssMode || i.$wrapperEl.transition(e),
                i.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              const i = this,
                { params: s } = i;
              s.cssMode ||
                (s.autoHeight && i.updateAutoHeight(),
                Kt({
                  swiper: i,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e = !0, t) {
              const i = this,
                { params: s } = i;
              (i.animating = !1),
                s.cssMode ||
                  (i.setTransition(0),
                  Kt({
                    swiper: i,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Zt,
          loop: Qt,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (i.style.cursor = "move"),
                (i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (i.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: li,
          breakpoints: di,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: i } = e,
                { slidesOffsetBefore: s } = i;
              if (s) {
                const t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: ui,
          images: {
            loadImage: function (e, t, i, s, n, r) {
              const o = Tt();
              let a;
              function l() {
                r && r();
              }
              _t(e).parent("picture")[0] || (e.complete && n)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  s && (a.sizes = s),
                  i && (a.srcset = i),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                const s = e.imagesToLoad[i];
                e.loadImage(
                  s,
                  s.currentSrc || s.getAttribute("src"),
                  s.srcset || s.getAttribute("srcset"),
                  s.sizes || s.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        gi = {};
      class mi {
        constructor(...e) {
          let t, i;
          if (
            (1 === e.length &&
            e[0].constructor &&
            "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (i = e[0])
              : ([t, i] = e),
            i || (i = {}),
            (i = Bt({}, i)),
            t && !i.el && (i.el = t),
            i.el && _t(i.el).length > 1)
          ) {
            const e = [];
            return (
              _t(i.el).each((t) => {
                const s = Bt({}, i, { el: t });
                e.push(new mi(s));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = Ft()),
            (s.device = Vt({ userAgent: i.userAgent })),
            (s.browser = qt()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            i.modules &&
              Array.isArray(i.modules) &&
              s.modules.push(...i.modules);
          const n = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: hi(i, n),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const r = Bt({}, pi, n);
          return (
            (s.params = Bt({}, r, gi, i)),
            (s.originalParams = Bt({}, s.params)),
            (s.passedParams = Bt({}, i)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = _t),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: t,
              classNames: [],
              slides: _t(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: Dt(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const i = this;
          e = Math.min(Math.max(e, 0), 1);
          const s = i.minTranslate(),
            n = (i.maxTranslate() - s) * e + s;
          i.translateTo(n, void 0 === t ? 0 : t),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((i) => {
            const s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          const {
            params: i,
            slides: s,
            slidesGrid: n,
            slidesSizesGrid: r,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (i.centeredSlides) {
            let e,
              t = s[a].swiperSlideSize;
            for (let i = a + 1; i < s.length; i += 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < s.length; e += 1) {
              (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              n[a] - n[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: i } = e;
          function s() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          i.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (s(), e.params.autoHeight && e.updateAutoHeight())
              : ((n =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                n || s()),
            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const i = this,
            s = i.params.direction;
          return (
            e || (e = "horizontal" === s ? "vertical" : "horizontal"),
            e === s ||
              ("horizontal" !== e && "vertical" !== e) ||
              (i.$el
                .removeClass(`${i.params.containerModifierClass}${s}`)
                .addClass(`${i.params.containerModifierClass}${e}`),
              i.emitContainerClasses(),
              (i.params.direction = e),
              i.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              i.emit("changeDirection"),
              t && i.update()),
            i
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const i = _t(e || t.params.el);
          if (!(e = i[0])) return !1;
          e.swiper = t;
          const s = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = _t(e.shadowRoot.querySelector(s()));
              return (t.children = (e) => i.children(e)), t;
            }
            return i.children(s());
          })();
          if (0 === n.length && t.params.createElements) {
            const e = Et().createElement("div");
            (n = _t(e)),
              (e.className = t.params.wrapperClass),
              i.append(e),
              i.children(`.${t.params.slideClass}`).each((e) => {
                n.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: i,
              el: e,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
              wrongRTL: "-webkit-box" === n.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e = !0, t = !0) {
          const i = this,
            { params: s, $el: n, $wrapperEl: r, slides: o } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                n.removeAttr("style"),
                r.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          Bt(gi, e);
        }
        static get extendedDefaults() {
          return gi;
        }
        static get defaults() {
          return pi;
        }
        static installModule(e) {
          mi.prototype.__modules__ || (mi.prototype.__modules__ = []);
          const t = mi.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => mi.installModule(e)), mi)
            : (mi.installModule(e), mi);
        }
      }
      Object.keys(fi).forEach((e) => {
        Object.keys(fi[e]).forEach((t) => {
          mi.prototype[t] = fi[e][t];
        });
      }),
        mi.use([
          function ({ swiper: e, on: t, emit: i }) {
            const s = Tt();
            let n = null;
            const r = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              o = () => {
                e && !e.destroyed && e.initialized && i("orientationchange");
              };
            t("init", () => {
              e.params.resizeObserver && void 0 !== s.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((n = new ResizeObserver((t) => {
                    const { width: i, height: s } = e;
                    let n = i,
                      o = s;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: i, target: s }) => {
                        (s && s !== e.el) ||
                          ((n = i ? i.width : (t[0] || t).inlineSize),
                          (o = i ? i.height : (t[0] || t).blockSize));
                      }
                    ),
                      (n === i && o === s) || r();
                  })),
                  n.observe(e.el))
                : (s.addEventListener("resize", r),
                  s.addEventListener("orientationchange", o));
            }),
              t("destroy", () => {
                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                  s.removeEventListener("resize", r),
                  s.removeEventListener("orientationchange", o);
              });
          },
          function ({ swiper: e, extendParams: t, on: i, emit: s }) {
            const n = [],
              r = Tt(),
              o = (e, t = {}) => {
                const i = new (r.MutationObserver || r.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void s("observerUpdate", e[0]);
                    const t = function () {
                      s("observerUpdate", e[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(t)
                      : r.setTimeout(t, 0);
                  }
                );
                i.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  n.push(i);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) o(t[e]);
                  }
                  o(e.$el[0], { childList: e.params.observeSlideChildren }),
                    o(e.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      const vi = mi;
      function bi({ swiper: e, extendParams: t, on: i, emit: s }) {
        const n = Et(),
          r = Tt();
        function o(t) {
          if (!e.enabled) return;
          const { rtlTranslate: i } = e;
          let o = t;
          o.originalEvent && (o = o.originalEvent);
          const a = o.keyCode || o.charCode,
            l = e.params.keyboard.pageUpDown,
            c = l && 33 === a,
            d = l && 34 === a,
            u = 37 === a,
            p = 39 === a,
            h = 38 === a,
            f = 40 === a;
          if (
            !e.allowSlideNext &&
            ((e.isHorizontal() && p) || (e.isVertical() && f) || d)
          )
            return !1;
          if (
            !e.allowSlidePrev &&
            ((e.isHorizontal() && u) || (e.isVertical() && h) || c)
          )
            return !1;
          if (
            !(
              o.shiftKey ||
              o.altKey ||
              o.ctrlKey ||
              o.metaKey ||
              (n.activeElement &&
                n.activeElement.nodeName &&
                ("input" === n.activeElement.nodeName.toLowerCase() ||
                  "textarea" === n.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              e.params.keyboard.onlyInViewport &&
              (c || d || u || p || h || f)
            ) {
              let t = !1;
              if (
                e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
                0 === e.$el.parents(`.${e.params.slideActiveClass}`).length
              )
                return;
              const s = e.$el,
                n = s[0].clientWidth,
                o = s[0].clientHeight,
                a = r.innerWidth,
                l = r.innerHeight,
                c = e.$el.offset();
              i && (c.left -= e.$el[0].scrollLeft);
              const d = [
                [c.left, c.top],
                [c.left + n, c.top],
                [c.left, c.top + o],
                [c.left + n, c.top + o],
              ];
              for (let e = 0; e < d.length; e += 1) {
                const i = d[e];
                if (i[0] >= 0 && i[0] <= a && i[1] >= 0 && i[1] <= l) {
                  if (0 === i[0] && 0 === i[1]) continue;
                  t = !0;
                }
              }
              if (!t) return;
            }
            e.isHorizontal()
              ? ((c || d || u || p) &&
                  (o.preventDefault
                    ? o.preventDefault()
                    : (o.returnValue = !1)),
                (((d || p) && !i) || ((c || u) && i)) && e.slideNext(),
                (((c || u) && !i) || ((d || p) && i)) && e.slidePrev())
              : ((c || d || h || f) &&
                  (o.preventDefault
                    ? o.preventDefault()
                    : (o.returnValue = !1)),
                (d || f) && e.slideNext(),
                (c || h) && e.slidePrev()),
              s("keyPress", a);
          }
        }
        function a() {
          e.keyboard.enabled ||
            (_t(n).on("keydown", o), (e.keyboard.enabled = !0));
        }
        function l() {
          e.keyboard.enabled &&
            (_t(n).off("keydown", o), (e.keyboard.enabled = !1));
        }
        (e.keyboard = { enabled: !1 }),
          t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          i("init", () => {
            e.params.keyboard.enabled && a();
          }),
          i("destroy", () => {
            e.keyboard.enabled && l();
          }),
          Object.assign(e.keyboard, { enable: a, disable: l });
      }
      function yi(e, t, i, s) {
        const n = Et();
        return (
          e.params.createElements &&
            Object.keys(s).forEach((r) => {
              if (!i[r] && !0 === i.auto) {
                let o = e.$el.children(`.${s[r]}`)[0];
                o ||
                  ((o = n.createElement("div")),
                  (o.className = s[r]),
                  e.$el.append(o)),
                  (i[r] = o),
                  (t[r] = o);
              }
            }),
          i
        );
      }
      function xi({ swiper: e, extendParams: t, on: i, emit: s }) {
        function n(t) {
          let i;
          return (
            t &&
              ((i = _t(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                i.length > 1 &&
                1 === e.$el.find(t).length &&
                (i = e.$el.find(t))),
            i
          );
        }
        function r(t, i) {
          const s = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[i ? "addClass" : "removeClass"](s.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](s.lockClass));
        }
        function o() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: i } = e.navigation;
          r(i, e.isBeginning && !e.params.rewind),
            r(t, e.isEnd && !e.params.rewind);
        }
        function a(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              e.slidePrev();
        }
        function l(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
        }
        function c() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = yi(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          const i = n(t.nextEl),
            s = n(t.prevEl);
          i && i.length > 0 && i.on("click", l),
            s && s.length > 0 && s.on("click", a),
            Object.assign(e.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: s,
              prevEl: s && s[0],
            }),
            e.enabled ||
              (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass));
        }
        function d() {
          const { $nextEl: t, $prevEl: i } = e.navigation;
          t &&
            t.length &&
            (t.off("click", l),
            t.removeClass(e.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click", a),
              i.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          i("init", () => {
            c(), o();
          }),
          i("toEdge fromEdge lock unlock", () => {
            o();
          }),
          i("destroy", () => {
            d();
          }),
          i("enable disable", () => {
            const { $nextEl: t, $prevEl: i } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              i &&
                i[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          i("click", (t, i) => {
            const { $nextEl: n, $prevEl: r } = e.navigation,
              o = i.target;
            if (
              e.params.navigation.hideOnClick &&
              !_t(o).is(r) &&
              !_t(o).is(n)
            ) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === o || e.pagination.el.contains(o))
              )
                return;
              let t;
              n
                ? (t = n.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                s(!0 === t ? "navigationShow" : "navigationHide"),
                n && n.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass);
            }
          }),
          Object.assign(e.navigation, { update: o, init: c, destroy: d });
      }
      function wi(e = "") {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`;
      }
      function Si({ swiper: e, extendParams: t, on: i, emit: s }) {
        const n = "swiper-pagination";
        let r;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let o = 0;
        function a() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function l(t, i) {
          const { bulletActiveClass: s } = e.params.pagination;
          t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
        }
        function c() {
          const t = e.rtl,
            i = e.params.pagination;
          if (a()) return;
          const n =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            c = e.pagination.$el;
          let d;
          const u = e.params.loop
            ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((d = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                d > n - 1 - 2 * e.loopedSlides && (d -= n - 2 * e.loopedSlides),
                d > u - 1 && (d -= u),
                d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
              : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === i.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const s = e.pagination.bullets;
            let n, a, u;
            if (
              (i.dynamicBullets &&
                ((r = s
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                c.css(
                  e.isHorizontal() ? "width" : "height",
                  r * (i.dynamicMainBullets + 4) + "px"
                ),
                i.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((o += d - (e.previousIndex - e.loopedSlides || 0)),
                  o > i.dynamicMainBullets - 1
                    ? (o = i.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (n = Math.max(d - o, 0)),
                (a = n + (Math.min(s.length, i.dynamicMainBullets) - 1)),
                (u = (a + n) / 2)),
              s.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${i.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              c.length > 1)
            )
              s.each((e) => {
                const t = _t(e),
                  s = t.index();
                s === d && t.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (s >= n &&
                      s <= a &&
                      t.addClass(`${i.bulletActiveClass}-main`),
                    s === n && l(t, "prev"),
                    s === a && l(t, "next"));
              });
            else {
              const t = s.eq(d),
                r = t.index();
              if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                const t = s.eq(n),
                  o = s.eq(a);
                for (let e = n; e <= a; e += 1)
                  s.eq(e).addClass(`${i.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (r >= s.length) {
                    for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                      s.eq(s.length - e).addClass(
                        `${i.bulletActiveClass}-main`
                      );
                    s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                      `${i.bulletActiveClass}-prev`
                    );
                  } else l(t, "prev"), l(o, "next");
                else l(t, "prev"), l(o, "next");
              }
            }
            if (i.dynamicBullets) {
              const n = Math.min(s.length, i.dynamicMainBullets + 4),
                o = (r * n - r) / 2 - u * r,
                a = t ? "right" : "left";
              s.css(e.isHorizontal() ? a : "top", `${o}px`);
            }
          }
          if (
            ("fraction" === i.type &&
              (c.find(wi(i.currentClass)).text(i.formatFractionCurrent(d + 1)),
              c.find(wi(i.totalClass)).text(i.formatFractionTotal(u))),
            "progressbar" === i.type)
          ) {
            let t;
            t = i.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const s = (d + 1) / u;
            let n = 1,
              r = 1;
            "horizontal" === t ? (n = s) : (r = s),
              c
                .find(wi(i.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`)
                .transition(e.params.speed);
          }
          "custom" === i.type && i.renderCustom
            ? (c.html(i.renderCustom(e, d + 1, u)), s("paginationRender", c[0]))
            : s("paginationUpdate", c[0]),
            e.params.watchOverflow &&
              e.enabled &&
              c[e.isLocked ? "addClass" : "removeClass"](i.lockClass);
        }
        function d() {
          const t = e.params.pagination;
          if (a()) return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            n = e.pagination.$el;
          let r = "";
          if ("bullets" === t.type) {
            let s = e.params.loop
              ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              s > i &&
              (s = i);
            for (let i = 0; i < s; i += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, i, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            n.html(r), (e.pagination.bullets = n.find(wi(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            n.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              n.html(r)),
            "custom" !== t.type && s("paginationRender", e.pagination.$el[0]);
        }
        function u() {
          e.params.pagination = yi(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let i = _t(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              i.length > 1 &&
              ((i = e.$el.find(t.el)),
              i.length > 1 &&
                (i = i.filter((t) => _t(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            i.addClass(t.modifierClass + e.params.direction),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (o = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on("click", wi(t.bulletClass), function (t) {
                t.preventDefault();
                let i = _t(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            Object.assign(e.pagination, { $el: i, el: i[0] }),
            e.enabled || i.addClass(t.lockClass));
        }
        function p() {
          const t = e.params.pagination;
          if (a()) return;
          const i = e.pagination.$el;
          i.removeClass(t.hiddenClass),
            i.removeClass(t.modifierClass + t.type),
            i.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && i.off("click", wi(t.bulletClass));
        }
        i("init", () => {
          u(), d(), c();
        }),
          i("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && c();
          }),
          i("snapIndexChange", () => {
            e.params.loop || c();
          }),
          i("slidesLengthChange", () => {
            e.params.loop && (d(), c());
          }),
          i("snapGridLengthChange", () => {
            e.params.loop || (d(), c());
          }),
          i("destroy", () => {
            p();
          }),
          i("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          i("lock unlock", () => {
            c();
          }),
          i("click", (t, i) => {
            const n = i.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r.length > 0 &&
              !_t(n).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                  (e.navigation.prevEl && n === e.navigation.prevEl))
              )
                return;
              const t = r.hasClass(e.params.pagination.hiddenClass);
              s(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          }),
          Object.assign(e.pagination, {
            render: d,
            update: c,
            init: u,
            destroy: p,
          });
      }
      function Ei() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        Ei(),
          document.querySelector(".swiper") &&
            new vi(".swiper", {
              modules: [xi, Si, bi],
              navigation: {
                nextEl: ".testimonials__nav-right",
                prevEl: ".testimonials__nav-left",
              },
              pagination: {
                el: ".testimonials__nav-pagination",
                type: "bullets",
                clickable: !0,
              },
              simulateTouch: !0,
              touchRatio: 1,
              touchAngle: 45,
              grabCursor: !1,
              slideToClickedSlide: !1,
              keyboard: { enabled: !0, onlyInViewport: !0, pageUpDown: !0 },
              autoHeight: !1,
              slidesPerView: 6,
              watchOverflow: !0,
              spaceBetween: 17,
              initialSlide: 0,
              speed: 800,
              direction: "horizontal",
              effect: "slide",
              breakpoints: {
                1: { slidesPerView: 1 },
                550: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1e3: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
                1360: { slidesPerView: 6 },
              },
              preloadImages: !1,
              lazy: { loadOnTransitionStart: !1, loadPrevNext: !0 },
              watchSlidesProgress: !0,
              watchSlidesVisibility: !0,
              observer: !0,
              observeParents: !0,
              observeSlideChildren: !0,
              on: {
                slideChange: function () {
                  this.pagination.update();
                },
              },
            });
      });
      i(9554), i(4747);
      var Ci,
        Ti = i(1807),
        Oi = i.n(Ti),
        Ai =
          (i(7327),
          i(6992),
          i(9601),
          i(1539),
          i(1058),
          i(8783),
          i(4129),
          i(3948),
          i(3096)),
        Li = i.n(Ai),
        ki = i(1296),
        Ii = i.n(ki),
        Mi = i(773),
        Pi = i.n(Mi),
        _i = [],
        $i = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(Ci || (Ci = {}));
      var Di,
        zi = function (e) {
          return Object.freeze(e);
        },
        ji = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), zi(this);
        },
        Bi = (function () {
          function e(e, t, i, s) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = i),
              (this.height = s),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              zi(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        Ni = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        Wi = function (e) {
          if (Ni(e)) {
            var t = e.getBBox(),
              i = t.width,
              s = t.height;
            return !i && !s;
          }
          var n = e,
            r = n.offsetWidth,
            o = n.offsetHeight;
          return !(r || o || e.getClientRects().length);
        },
        Ri = function (e) {
          var t, i;
          if (e instanceof Element) return !0;
          var s =
            null ===
              (i =
                null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
            void 0 === i
              ? void 0
              : i.defaultView;
          return !!(s && e instanceof s.Element);
        },
        Hi = "undefined" != typeof window ? window : {},
        Gi = new WeakMap(),
        Fi = /auto|scroll/,
        Vi = /^tb|vertical/,
        qi = /msie|trident/i.test(Hi.navigator && Hi.navigator.userAgent),
        Xi = function (e) {
          return parseFloat(e || "0");
        },
        Yi = function (e, t, i) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === i && (i = !1),
            new ji((i ? t : e) || 0, (i ? e : t) || 0)
          );
        },
        Ui = zi({
          devicePixelContentBoxSize: Yi(),
          borderBoxSize: Yi(),
          contentBoxSize: Yi(),
          contentRect: new Bi(0, 0, 0, 0),
        }),
        Ki = function (e, t) {
          if ((void 0 === t && (t = !1), Gi.has(e) && !t)) return Gi.get(e);
          if (Wi(e)) return Gi.set(e, Ui), Ui;
          var i = getComputedStyle(e),
            s = Ni(e) && e.ownerSVGElement && e.getBBox(),
            n = !qi && "border-box" === i.boxSizing,
            r = Vi.test(i.writingMode || ""),
            o = !s && Fi.test(i.overflowY || ""),
            a = !s && Fi.test(i.overflowX || ""),
            l = s ? 0 : Xi(i.paddingTop),
            c = s ? 0 : Xi(i.paddingRight),
            d = s ? 0 : Xi(i.paddingBottom),
            u = s ? 0 : Xi(i.paddingLeft),
            p = s ? 0 : Xi(i.borderTopWidth),
            h = s ? 0 : Xi(i.borderRightWidth),
            f = s ? 0 : Xi(i.borderBottomWidth),
            g = u + c,
            m = l + d,
            v = (s ? 0 : Xi(i.borderLeftWidth)) + h,
            b = p + f,
            y = a ? e.offsetHeight - b - e.clientHeight : 0,
            x = o ? e.offsetWidth - v - e.clientWidth : 0,
            w = n ? g + v : 0,
            S = n ? m + b : 0,
            E = s ? s.width : Xi(i.width) - w - x,
            C = s ? s.height : Xi(i.height) - S - y,
            T = E + g + x + v,
            O = C + m + y + b,
            A = zi({
              devicePixelContentBoxSize: Yi(
                Math.round(E * devicePixelRatio),
                Math.round(C * devicePixelRatio),
                r
              ),
              borderBoxSize: Yi(T, O, r),
              contentBoxSize: Yi(E, C, r),
              contentRect: new Bi(u, l, E, C),
            });
          return Gi.set(e, A), A;
        },
        Zi = function (e, t, i) {
          var s = Ki(e, i),
            n = s.borderBoxSize,
            r = s.contentBoxSize,
            o = s.devicePixelContentBoxSize;
          switch (t) {
            case Ci.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case Ci.BORDER_BOX:
              return n;
            default:
              return r;
          }
        },
        Qi = function (e) {
          var t = Ki(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = zi([t.borderBoxSize])),
            (this.contentBoxSize = zi([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = zi([
              t.devicePixelContentBoxSize,
            ]));
        },
        Ji = function (e) {
          if (Wi(e)) return 1 / 0;
          for (var t = 0, i = e.parentNode; i; ) (t += 1), (i = i.parentNode);
          return t;
        },
        es = function () {
          var e = 1 / 0,
            t = [];
          _i.forEach(function (i) {
            if (0 !== i.activeTargets.length) {
              var s = [];
              i.activeTargets.forEach(function (t) {
                var i = new Qi(t.target),
                  n = Ji(t.target);
                s.push(i),
                  (t.lastReportedSize = Zi(t.target, t.observedBox)),
                  n < e && (e = n);
              }),
                t.push(function () {
                  i.callback.call(i.observer, s, i.observer);
                }),
                i.activeTargets.splice(0, i.activeTargets.length);
            }
          });
          for (var i = 0, s = t; i < s.length; i++) {
            (0, s[i])();
          }
          return e;
        },
        ts = function (e) {
          _i.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (i) {
                i.isActive() &&
                  (Ji(i.target) > e
                    ? t.activeTargets.push(i)
                    : t.skippedTargets.push(i));
              });
          });
        },
        is = function () {
          var e = 0;
          for (
            ts(e);
            _i.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (e = es()), ts(e);
          return (
            _i.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              (function () {
                var e;
                "function" == typeof ErrorEvent
                  ? (e = new ErrorEvent("error", { message: $i }))
                  : ((e = document.createEvent("Event")).initEvent(
                      "error",
                      !1,
                      !1
                    ),
                    (e.message = $i)),
                  window.dispatchEvent(e);
              })(),
            e > 0
          );
        },
        ss = [],
        ns = function (e) {
          if (!Di) {
            var t = 0,
              i = document.createTextNode("");
            new MutationObserver(function () {
              return ss.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(i, { characterData: !0 }),
              (Di = function () {
                i.textContent = "" + (t ? t-- : t++);
              });
          }
          ss.push(e), Di();
        },
        rs = 0,
        os = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        as = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        ls = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        cs = !1,
        ds = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !cs)) {
                cs = !0;
                var i,
                  s = ls(e);
                (i = function () {
                  var i = !1;
                  try {
                    i = is();
                  } finally {
                    if (((cs = !1), (e = s - ls()), !rs)) return;
                    i ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  ns(function () {
                    requestAnimationFrame(i);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, os);
                };
              document.body ? t() : Hi.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                as.forEach(function (t) {
                  return Hi.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                as.forEach(function (t) {
                  return Hi.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        us = function (e) {
          !rs && e > 0 && ds.start(), !(rs += e) && ds.stop();
        },
        ps = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || Ci.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = Zi(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                Ni(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        hs = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        fs = new WeakMap(),
        gs = function (e, t) {
          for (var i = 0; i < e.length; i += 1) if (e[i].target === t) return i;
          return -1;
        },
        ms = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var i = new hs(e, t);
              fs.set(e, i);
            }),
            (e.observe = function (e, t, i) {
              var s = fs.get(e),
                n = 0 === s.observationTargets.length;
              gs(s.observationTargets, t) < 0 &&
                (n && _i.push(s),
                s.observationTargets.push(new ps(t, i && i.box)),
                us(1),
                ds.schedule());
            }),
            (e.unobserve = function (e, t) {
              var i = fs.get(e),
                s = gs(i.observationTargets, t),
                n = 1 === i.observationTargets.length;
              s >= 0 &&
                (n && _i.splice(_i.indexOf(i), 1),
                i.observationTargets.splice(s, 1),
                us(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                i = fs.get(e);
              i.observationTargets.slice().forEach(function (i) {
                return t.unobserve(e, i.target);
              }),
                i.activeTargets.splice(0, i.activeTargets.length);
            }),
            e
          );
        })(),
        vs = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            ms.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Ri(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              ms.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Ri(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              ms.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              ms.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        bs =
          (i(5827),
          i(8309),
          i(4916),
          i(4723),
          i(5306),
          function (e) {
            return Array.prototype.reduce.call(
              e,
              function (e, t) {
                var i = t.name.match(/data-simplebar-(.+)/);
                if (i) {
                  var s = i[1].replace(/\W+(.)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                  switch (t.value) {
                    case "true":
                      e[s] = !0;
                      break;
                    case "false":
                      e[s] = !1;
                      break;
                    case void 0:
                      e[s] = !0;
                      break;
                    default:
                      e[s] = t.value;
                  }
                }
                return e;
              },
              {}
            );
          });
      function ys(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function xs(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      var ws = null,
        Ss = null;
      function Es(e) {
        if (null === ws) {
          var t = xs(e);
          if (void 0 === t) return (ws = 0);
          var i = t.body,
            s = t.createElement("div");
          s.classList.add("simplebar-hide-scrollbar"), i.appendChild(s);
          var n = s.getBoundingClientRect().right;
          i.removeChild(s), (ws = n);
        }
        return ws;
      }
      Oi() &&
        window.addEventListener("resize", function () {
          Ss !== window.devicePixelRatio &&
            ((Ss = window.devicePixelRatio), (ws = null));
        });
      var Cs = (function () {
        function e(t, i) {
          var s = this;
          (this.onScroll = function () {
            var e = ys(s.el);
            s.scrollXTicking ||
              (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
              s.scrollYTicking ||
                (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0));
          }),
            (this.scrollX = function () {
              s.axis.x.isOverflowing &&
                (s.showScrollbar("x"), s.positionScrollbar("x")),
                (s.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              s.axis.y.isOverflowing &&
                (s.showScrollbar("y"), s.positionScrollbar("y")),
                (s.scrollYTicking = !1);
            }),
            (this.onMouseEnter = function () {
              s.showScrollbar("x"), s.showScrollbar("y");
            }),
            (this.onMouseMove = function (e) {
              (s.mouseX = e.clientX),
                (s.mouseY = e.clientY),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseMoveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              s.onMouseMove.cancel(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseLeaveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseLeaveForAxis("y"),
                (s.mouseX = -1),
                (s.mouseY = -1);
            }),
            (this.onWindowResize = function () {
              (s.scrollbarWidth = s.getScrollbarWidth()),
                s.hideNativeScrollbar();
            }),
            (this.hideScrollbars = function () {
              (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                s.isWithinBounds(s.axis.y.track.rect) ||
                  (s.axis.y.scrollbar.el.classList.remove(s.classNames.visible),
                  (s.axis.y.isVisible = !1)),
                s.isWithinBounds(s.axis.x.track.rect) ||
                  (s.axis.x.scrollbar.el.classList.remove(s.classNames.visible),
                  (s.axis.x.isVisible = !1));
            }),
            (this.onPointerEvent = function (e) {
              var t, i;
              (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  (t = s.isWithinBounds(s.axis.x.track.rect)),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  (i = s.isWithinBounds(s.axis.y.track.rect)),
                (t || i) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousedown" === e.type &&
                    (t &&
                      ((s.axis.x.scrollbar.rect =
                        s.axis.x.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.x.scrollbar.rect)
                        ? s.onDragStart(e, "x")
                        : s.onTrackClick(e, "x")),
                    i &&
                      ((s.axis.y.scrollbar.rect =
                        s.axis.y.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.y.scrollbar.rect)
                        ? s.onDragStart(e, "y")
                        : s.onTrackClick(e, "y"))));
            }),
            (this.drag = function (t) {
              var i = s.axis[s.draggedAxis].track,
                n = i.rect[s.axis[s.draggedAxis].sizeAttr],
                r = s.axis[s.draggedAxis].scrollbar,
                o = s.contentWrapperEl[s.axis[s.draggedAxis].scrollSizeAttr],
                a = parseInt(s.elStyles[s.axis[s.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var l =
                ((("y" === s.draggedAxis ? t.pageY : t.pageX) -
                  i.rect[s.axis[s.draggedAxis].offsetAttr] -
                  s.axis[s.draggedAxis].dragOffset) /
                  (n - r.size)) *
                (o - a);
              "x" === s.draggedAxis &&
                ((l =
                  s.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                    ? l - (n + r.size)
                    : l),
                (l =
                  s.isRtl && e.getRtlHelpers().isRtlScrollingInverted
                    ? -l
                    : l)),
                (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] =
                  l);
            }),
            (this.onEndDrag = function (e) {
              var t = xs(s.el),
                i = ys(s.el);
              e.preventDefault(),
                e.stopPropagation(),
                s.el.classList.remove(s.classNames.dragging),
                t.removeEventListener("mousemove", s.drag, !0),
                t.removeEventListener("mouseup", s.onEndDrag, !0),
                (s.removePreventClickId = i.setTimeout(function () {
                  t.removeEventListener("click", s.preventClick, !0),
                    t.removeEventListener("dblclick", s.preventClick, !0),
                    (s.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.minScrollbarWidth = 20),
            (this.options = Object.assign({}, e.defaultOptions, {}, i)),
            (this.classNames = Object.assign(
              {},
              e.defaultOptions.classNames,
              {},
              this.options.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
            }),
            (this.removePreventClickId = null),
            e.instances.has(this.el) ||
              ((this.recalculate = Li()(this.recalculate.bind(this), 64)),
              (this.onMouseMove = Li()(this.onMouseMove.bind(this), 64)),
              (this.hideScrollbars = Ii()(
                this.hideScrollbars.bind(this),
                this.options.timeout
              )),
              (this.onWindowResize = Ii()(this.onWindowResize.bind(this), 64, {
                leading: !0,
              })),
              (e.getRtlHelpers = Pi()(e.getRtlHelpers)),
              this.init());
        }
        (e.getRtlHelpers = function () {
          var t = document.createElement("div");
          t.innerHTML =
            '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var i = t.firstElementChild;
          document.body.appendChild(i);
          var s = i.firstElementChild;
          i.scrollLeft = 0;
          var n = e.getOffset(i),
            r = e.getOffset(s);
          i.scrollLeft = 999;
          var o = e.getOffset(s);
          return {
            isRtlScrollingInverted: n.left !== r.left && r.left - o.left != 0,
            isRtlScrollbarInverted: n.left !== r.left,
          };
        }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              i = xs(e),
              s = ys(e);
            return {
              top: t.top + (s.pageYOffset || i.documentElement.scrollTop),
              left: t.left + (s.pageXOffset || i.documentElement.scrollLeft),
            };
          });
        var t = e.prototype;
        return (
          (t.init = function () {
            e.instances.set(this.el, this),
              Oi() &&
                (this.initDOM(),
                this.setAccessibilityAttributes(),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
          }),
          (t.initDOM = function () {
            var e = this;
            if (
              Array.prototype.filter.call(this.el.children, function (t) {
                return t.classList.contains(e.classNames.wrapper);
              }).length
            )
              (this.wrapperEl = this.el.querySelector(
                "." + this.classNames.wrapper
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector("." + this.classNames.contentWrapper)),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector("." + this.classNames.contentEl)),
                (this.offsetEl = this.el.querySelector(
                  "." + this.classNames.offset
                )),
                (this.maskEl = this.el.querySelector(
                  "." + this.classNames.mask
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  "." + this.classNames.placeholder
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverWrapperEl
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverEl
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.horizontal
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.vertical
                ));
            else {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  this.wrapperEl.classList.add(this.classNames.wrapper),
                  this.contentWrapperEl.classList.add(
                    this.classNames.contentWrapper
                  ),
                  this.offsetEl.classList.add(this.classNames.offset),
                  this.maskEl.classList.add(this.classNames.mask),
                  this.contentEl.classList.add(this.classNames.contentEl),
                  this.placeholderEl.classList.add(this.classNames.placeholder),
                  this.heightAutoObserverWrapperEl.classList.add(
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  this.heightAutoObserverEl.classList.add(
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var t = document.createElement("div"),
                i = document.createElement("div");
              t.classList.add(this.classNames.track),
                i.classList.add(this.classNames.scrollbar),
                t.appendChild(i),
                (this.axis.x.track.el = t.cloneNode(!0)),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                (this.axis.y.track.el = t.cloneNode(!0)),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
              (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                "." + this.classNames.scrollbar
              )),
              this.options.autoHide ||
                (this.axis.x.scrollbar.el.classList.add(
                  this.classNames.visible
                ),
                this.axis.y.scrollbar.el.classList.add(
                  this.classNames.visible
                )),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.setAccessibilityAttributes = function () {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
              this.contentWrapperEl.setAttribute("role", "region"),
              this.contentWrapperEl.setAttribute("aria-label", e);
          }),
          (t.initListeners = function () {
            var e = this,
              t = ys(this.el);
            this.options.autoHide &&
              this.el.addEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl.addEventListener("scroll", this.onScroll),
              t.addEventListener("resize", this.onWindowResize);
            var i = !1,
              s = t.ResizeObserver || vs;
            (this.resizeObserver = new s(function () {
              i && e.recalculate();
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                i = !0;
              }),
              (this.mutationObserver = new t.MutationObserver(
                this.recalculate
              )),
              this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
          }),
          (t.recalculate = function () {
            var e = ys(this.el);
            (this.elStyles = e.getComputedStyle(this.el)),
              (this.isRtl = "rtl" === this.elStyles.direction);
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
              i = this.heightAutoObserverEl.offsetWidth <= 1,
              s = this.contentEl.offsetWidth,
              n = this.contentWrapperEl.offsetWidth,
              r = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding =
              this.elStyles.paddingTop +
              " " +
              this.elStyles.paddingRight +
              " " +
              this.elStyles.paddingBottom +
              " " +
              this.elStyles.paddingLeft),
              (this.wrapperEl.style.margin =
                "-" +
                this.elStyles.paddingTop +
                " -" +
                this.elStyles.paddingRight +
                " -" +
                this.elStyles.paddingBottom +
                " -" +
                this.elStyles.paddingLeft);
            var a = this.contentEl.scrollHeight,
              l = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
              (this.placeholderEl.style.width = i ? s + "px" : "auto"),
              (this.placeholderEl.style.height = a + "px");
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = l > s),
              (this.axis.y.isOverflowing = a > c),
              (this.axis.x.isOverflowing =
                "hidden" !== r && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing =
                "hidden" !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible =
                "x" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              (this.axis.y.forceVisible =
                "y" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing =
              this.axis.x.isOverflowing && l > n - u),
              (this.axis.y.isOverflowing =
                this.axis.y.isOverflowing && a > c - d),
              (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
              (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
              (this.axis.x.scrollbar.el.style.width =
                this.axis.x.scrollbar.size + "px"),
              (this.axis.y.scrollbar.el.style.height =
                this.axis.y.scrollbar.size + "px"),
              this.positionScrollbar("x"),
              this.positionScrollbar("y"),
              this.toggleTrackVisibility("x"),
              this.toggleTrackVisibility("y");
          }),
          (t.getScrollbarSize = function (e) {
            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
              return 0;
            var t,
              i = this.contentEl[this.axis[e].scrollSizeAttr],
              s = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
              n = s / i;
            return (
              (t = Math.max(~~(n * s), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (t = Math.min(t, this.options.scrollbarMaxSize)),
              t
            );
          }),
          (t.positionScrollbar = function (t) {
            if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
              var i = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                s = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                n = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                r = this.axis[t].scrollbar,
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  (o =
                    "x" === t &&
                    this.isRtl &&
                    e.getRtlHelpers().isRtlScrollingInverted
                      ? -o
                      : o) /
                  (i - n),
                l = ~~((s - r.size) * a);
              (l =
                "x" === t &&
                this.isRtl &&
                e.getRtlHelpers().isRtlScrollbarInverted
                  ? l + (s - r.size)
                  : l),
                (r.el.style.transform =
                  "x" === t
                    ? "translate3d(" + l + "px, 0, 0)"
                    : "translate3d(0, " + l + "px, 0)");
            }
          }),
          (t.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              i = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = "visible"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "scroll"))
              : ((t.style.visibility = "hidden"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "hidden")),
              this.axis[e].isOverflowing
                ? (i.style.display = "block")
                : (i.style.display = "none");
          }),
          (t.hideNativeScrollbar = function () {
            (this.offsetEl.style[this.isRtl ? "left" : "right"] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-" + this.scrollbarWidth + "px"
                  : 0);
          }),
          (t.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y"),
              (this.axis[e].track.rect =
                this.axis[e].track.el.getBoundingClientRect()),
              (this.axis[e].scrollbar.rect =
                this.axis[e].scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(this.axis[e].scrollbar.rect)
                ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
                : this.axis[e].scrollbar.el.classList.remove(
                    this.classNames.hover
                  ),
              this.isWithinBounds(this.axis[e].track.rect)
                ? (this.showScrollbar(e),
                  this.axis[e].track.el.classList.add(this.classNames.hover))
                : this.axis[e].track.el.classList.remove(this.classNames.hover);
          }),
          (t.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].track.el.classList.remove(this.classNames.hover),
              this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (t.showScrollbar = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible ||
              (t.classList.add(this.classNames.visible),
              (this.axis[e].isVisible = !0)),
              this.options.autoHide && this.hideScrollbars();
          }),
          (t.onDragStart = function (e, t) {
            void 0 === t && (t = "y");
            var i = xs(this.el),
              s = ys(this.el),
              n = this.axis[t].scrollbar,
              r = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset = r - n.rect[this.axis[t].offsetAttr]),
              (this.draggedAxis = t),
              this.el.classList.add(this.classNames.dragging),
              i.addEventListener("mousemove", this.drag, !0),
              i.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (i.addEventListener("click", this.preventClick, !0),
                  i.addEventListener("dblclick", this.preventClick, !0))
                : (s.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (t.onTrackClick = function (e, t) {
            var i = this;
            if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
              var s = ys(this.el);
              this.axis[t].scrollbar.rect =
                this.axis[t].scrollbar.el.getBoundingClientRect();
              var n = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  ("y" === t ? this.mouseY - n : this.mouseX - n) < 0 ? -1 : 1,
                l = -1 === a ? o - r : o + r;
              !(function e() {
                var n, r;
                -1 === a
                  ? o > l &&
                    ((o -= i.options.clickOnTrackSpeed),
                    i.contentWrapperEl.scrollTo(
                      (((n = {})[i.axis[t].offsetAttr] = o), n)
                    ),
                    s.requestAnimationFrame(e))
                  : o < l &&
                    ((o += i.options.clickOnTrackSpeed),
                    i.contentWrapperEl.scrollTo(
                      (((r = {})[i.axis[t].offsetAttr] = o), r)
                    ),
                    s.requestAnimationFrame(e));
              })();
            }
          }),
          (t.getContentElement = function () {
            return this.contentEl;
          }),
          (t.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (t.getScrollbarWidth = function () {
            try {
              return "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : Es(this.el);
            } catch (e) {
              return Es(this.el);
            }
          }),
          (t.removeListeners = function () {
            var e = this,
              t = ys(this.el);
            this.options.autoHide &&
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              t.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.recalculate.cancel(),
              this.onMouseMove.cancel(),
              this.hideScrollbars.cancel(),
              this.onWindowResize.cancel();
          }),
          (t.unMount = function () {
            this.removeListeners(), e.instances.delete(this.el);
          }),
          (t.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (t.findChild = function (e, t) {
            var i =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return i.call(e, t);
            })[0];
          }),
          e
        );
      })();
      (Cs.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
        (Cs.instances = new WeakMap()),
        (Cs.initDOMLoadedElements = function () {
          document.removeEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements
          ),
            window.removeEventListener("load", this.initDOMLoadedElements),
            Array.prototype.forEach.call(
              document.querySelectorAll("[data-simplebar]"),
              function (e) {
                "init" === e.getAttribute("data-simplebar") ||
                  Cs.instances.has(e) ||
                  new Cs(e, bs(e.attributes));
              }
            );
        }),
        (Cs.removeObserver = function () {
          this.globalObserver.disconnect();
        }),
        (Cs.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            "undefined" != typeof MutationObserver &&
              ((this.globalObserver = new MutationObserver(Cs.handleMutations)),
              this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0,
              })),
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener(
                  "DOMContentLoaded",
                  this.initDOMLoadedElements
                ),
                window.addEventListener("load", this.initDOMLoadedElements));
        }),
        (Cs.handleMutations = function (e) {
          e.forEach(function (e) {
            Array.prototype.forEach.call(e.addedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute("data-simplebar")
                  ? !Cs.instances.has(e) &&
                    document.documentElement.contains(e) &&
                    new Cs(e, bs(e.attributes))
                  : Array.prototype.forEach.call(
                      e.querySelectorAll("[data-simplebar]"),
                      function (e) {
                        "init" !== e.getAttribute("data-simplebar") &&
                          !Cs.instances.has(e) &&
                          document.documentElement.contains(e) &&
                          new Cs(e, bs(e.attributes));
                      }
                    ));
            }),
              Array.prototype.forEach.call(e.removedNodes, function (e) {
                1 === e.nodeType &&
                  ("init" === e.getAttribute("data-simplebar")
                    ? Cs.instances.has(e) &&
                      !document.documentElement.contains(e) &&
                      Cs.instances.get(e).unMount()
                    : Array.prototype.forEach.call(
                        e.querySelectorAll('[data-simplebar="init"]'),
                        function (e) {
                          Cs.instances.has(e) &&
                            !document.documentElement.contains(e) &&
                            Cs.instances.get(e).unMount();
                        }
                      ));
              });
          });
        }),
        (Cs.getOptions = bs),
        Oi() && Cs.initHtmlApi();
      let Ts = !1;
      setTimeout(() => {
        if (Ts) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0);
      var Os = function () {
        return (
          (Os =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          Os.apply(this, arguments)
        );
      };
      var As = (function () {
        function e(e) {
          return (
            (this.cssVenderPrefixes = [
              "TransitionDuration",
              "TransitionTimingFunction",
              "Transform",
              "Transition",
            ]),
            (this.selector = this._getSelector(e)),
            (this.firstElement = this._getFirstEl()),
            this
          );
        }
        return (
          (e.generateUUID = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            );
          }),
          (e.prototype._getSelector = function (e, t) {
            return (
              void 0 === t && (t = document),
              "string" != typeof e
                ? e
                : ((t = t || document),
                  "#" === e.substring(0, 1)
                    ? t.querySelector(e)
                    : t.querySelectorAll(e))
            );
          }),
          (e.prototype._each = function (e) {
            return this.selector
              ? (void 0 !== this.selector.length
                  ? [].forEach.call(this.selector, e)
                  : e(this.selector, 0),
                this)
              : this;
          }),
          (e.prototype._setCssVendorPrefix = function (e, t, i) {
            var s = t.replace(/-([a-z])/gi, function (e, t) {
              return t.toUpperCase();
            });
            -1 !== this.cssVenderPrefixes.indexOf(s)
              ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
                (e.style["webkit" + s] = i),
                (e.style["moz" + s] = i),
                (e.style["ms" + s] = i),
                (e.style["o" + s] = i))
              : (e.style[s] = i);
          }),
          (e.prototype._getFirstEl = function () {
            return this.selector && void 0 !== this.selector.length
              ? this.selector[0]
              : this.selector;
          }),
          (e.prototype.isEventMatched = function (e, t) {
            var i = t.split(".");
            return e
              .split(".")
              .filter(function (e) {
                return e;
              })
              .every(function (e) {
                return -1 !== i.indexOf(e);
              });
          }),
          (e.prototype.attr = function (e, t) {
            return void 0 === t
              ? this.firstElement
                ? this.firstElement.getAttribute(e)
                : ""
              : (this._each(function (i) {
                  i.setAttribute(e, t);
                }),
                this);
          }),
          (e.prototype.find = function (e) {
            return Ls(this._getSelector(e, this.selector));
          }),
          (e.prototype.first = function () {
            return this.selector && void 0 !== this.selector.length
              ? Ls(this.selector[0])
              : Ls(this.selector);
          }),
          (e.prototype.eq = function (e) {
            return Ls(this.selector[e]);
          }),
          (e.prototype.parent = function () {
            return Ls(this.selector.parentElement);
          }),
          (e.prototype.get = function () {
            return this._getFirstEl();
          }),
          (e.prototype.removeAttr = function (e) {
            var t = e.split(" ");
            return (
              this._each(function (e) {
                t.forEach(function (t) {
                  return e.removeAttribute(t);
                });
              }),
              this
            );
          }),
          (e.prototype.wrap = function (e) {
            if (!this.firstElement) return this;
            var t = document.createElement("div");
            return (
              (t.className = e),
              this.firstElement.parentNode.insertBefore(t, this.firstElement),
              this.firstElement.parentNode.removeChild(this.firstElement),
              t.appendChild(this.firstElement),
              this
            );
          }),
          (e.prototype.addClass = function (e) {
            return (
              void 0 === e && (e = ""),
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.add(e);
                });
              }),
              this
            );
          }),
          (e.prototype.removeClass = function (e) {
            return (
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.remove(e);
                });
              }),
              this
            );
          }),
          (e.prototype.hasClass = function (e) {
            return (
              !!this.firstElement && this.firstElement.classList.contains(e)
            );
          }),
          (e.prototype.hasAttribute = function (e) {
            return !!this.firstElement && this.firstElement.hasAttribute(e);
          }),
          (e.prototype.toggleClass = function (e) {
            return this.firstElement
              ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e),
                this)
              : this;
          }),
          (e.prototype.css = function (e, t) {
            var i = this;
            return (
              this._each(function (s) {
                i._setCssVendorPrefix(s, e, t);
              }),
              this
            );
          }),
          (e.prototype.on = function (t, i) {
            var s = this;
            return this.selector
              ? (t.split(" ").forEach(function (t) {
                  Array.isArray(e.eventListeners[t]) ||
                    (e.eventListeners[t] = []),
                    e.eventListeners[t].push(i),
                    s.selector.addEventListener(t.split(".")[0], i);
                }),
                this)
              : this;
          }),
          (e.prototype.once = function (e, t) {
            var i = this;
            return (
              this.on(e, function () {
                i.off(e), t(e);
              }),
              this
            );
          }),
          (e.prototype.off = function (t) {
            var i = this;
            return this.selector
              ? (Object.keys(e.eventListeners).forEach(function (s) {
                  i.isEventMatched(t, s) &&
                    (e.eventListeners[s].forEach(function (e) {
                      i.selector.removeEventListener(s.split(".")[0], e);
                    }),
                    (e.eventListeners[s] = []));
                }),
                this)
              : this;
          }),
          (e.prototype.trigger = function (e, t) {
            if (!this.firstElement) return this;
            var i = new CustomEvent(e.split(".")[0], { detail: t || null });
            return this.firstElement.dispatchEvent(i), this;
          }),
          (e.prototype.load = function (e) {
            var t = this;
            return (
              fetch(e).then(function (e) {
                t.selector.innerHTML = e;
              }),
              this
            );
          }),
          (e.prototype.html = function (e) {
            return void 0 === e
              ? this.firstElement
                ? this.firstElement.innerHTML
                : ""
              : (this._each(function (t) {
                  t.innerHTML = e;
                }),
                this);
          }),
          (e.prototype.append = function (e) {
            return (
              this._each(function (t) {
                "string" == typeof e
                  ? t.insertAdjacentHTML("beforeend", e)
                  : t.appendChild(e);
              }),
              this
            );
          }),
          (e.prototype.prepend = function (e) {
            return (
              this._each(function (t) {
                t.insertAdjacentHTML("afterbegin", e);
              }),
              this
            );
          }),
          (e.prototype.remove = function () {
            return (
              this._each(function (e) {
                e.parentNode.removeChild(e);
              }),
              this
            );
          }),
          (e.prototype.empty = function () {
            return (
              this._each(function (e) {
                e.innerHTML = "";
              }),
              this
            );
          }),
          (e.prototype.scrollTop = function (e) {
            return void 0 !== e
              ? ((document.body.scrollTop = e),
                (document.documentElement.scrollTop = e),
                this)
              : window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0;
          }),
          (e.prototype.scrollLeft = function (e) {
            return void 0 !== e
              ? ((document.body.scrollLeft = e),
                (document.documentElement.scrollLeft = e),
                this)
              : window.pageXOffset ||
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft ||
                  0;
          }),
          (e.prototype.offset = function () {
            if (!this.firstElement) return { left: 0, top: 0 };
            var e = this.firstElement.getBoundingClientRect(),
              t = Ls("body").style().marginLeft;
            return {
              left: e.left - parseFloat(t) + this.scrollLeft(),
              top: e.top + this.scrollTop(),
            };
          }),
          (e.prototype.style = function () {
            return this.firstElement
              ? this.firstElement.currentStyle ||
                  window.getComputedStyle(this.firstElement)
              : {};
          }),
          (e.prototype.width = function () {
            var e = this.style();
            return (
              this.firstElement.clientWidth -
              parseFloat(e.paddingLeft) -
              parseFloat(e.paddingRight)
            );
          }),
          (e.prototype.height = function () {
            var e = this.style();
            return (
              this.firstElement.clientHeight -
              parseFloat(e.paddingTop) -
              parseFloat(e.paddingBottom)
            );
          }),
          (e.eventListeners = {}),
          e
        );
      })();
      function Ls(e) {
        return (
          (function () {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function (e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: null };
              var i = document.createEvent("CustomEvent");
              return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
            };
          })(),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
          new As(e)
        );
      }
      var ks = [
        "src",
        "sources",
        "subHtml",
        "subHtmlUrl",
        "html",
        "video",
        "poster",
        "slideName",
        "responsive",
        "srcset",
        "sizes",
        "iframe",
        "downloadUrl",
        "download",
        "width",
        "facebookShareUrl",
        "tweetText",
        "iframeTitle",
        "twitterShareUrl",
        "pinterestShareUrl",
        "pinterestText",
        "fbHtml",
        "disqusIdentifier",
        "disqusUrl",
      ];
      function Is(e) {
        return "href" === e
          ? "src"
          : (e = (e =
              (e = e.replace("data-", "")).charAt(0).toLowerCase() +
              e.slice(1)).replace(/-([a-z])/g, function (e) {
              return e[1].toUpperCase();
            }));
      }
      var Ms = function (e, t, i, s) {
          void 0 === i && (i = 0);
          var n = Ls(e).attr("data-lg-size") || s;
          if (n) {
            var r = n.split(",");
            if (r[1])
              for (var o = window.innerWidth, a = 0; a < r.length; a++) {
                var l = r[a];
                if (parseInt(l.split("-")[2], 10) > o) {
                  n = l;
                  break;
                }
                a === r.length - 1 && (n = l);
              }
            var c = n.split("-"),
              d = parseInt(c[0], 10),
              u = parseInt(c[1], 10),
              p = t.width(),
              h = t.height() - i,
              f = Math.min(p, d),
              g = Math.min(h, u),
              m = Math.min(f / d, g / u);
            return { width: d * m, height: u * m };
          }
        },
        Ps = function (e, t, i, s, n) {
          if (n) {
            var r = Ls(e).find("img").first();
            if (r.get()) {
              var o = t.get().getBoundingClientRect(),
                a = o.width,
                l = t.height() - (i + s),
                c = r.width(),
                d = r.height(),
                u = r.style(),
                p =
                  (a - c) / 2 -
                  r.offset().left +
                  (parseFloat(u.paddingLeft) || 0) +
                  (parseFloat(u.borderLeft) || 0) +
                  Ls(window).scrollLeft() +
                  o.left,
                h =
                  (l - d) / 2 -
                  r.offset().top +
                  (parseFloat(u.paddingTop) || 0) +
                  (parseFloat(u.borderTop) || 0) +
                  Ls(window).scrollTop() +
                  i;
              return (
                "translate3d(" +
                (p *= -1) +
                "px, " +
                (h *= -1) +
                "px, 0) scale3d(" +
                c / n.width +
                ", " +
                d / n.height +
                ", 1)"
              );
            }
          }
        },
        _s = function (e, t, i, s, n, r) {
          return (
            '<div class="lg-video-cont lg-has-iframe" style="width:' +
            e +
            "; max-width:" +
            i +
            "; height: " +
            t +
            "; max-height:" +
            s +
            '">\n                    <iframe class="lg-object" frameborder="0" ' +
            (r ? 'title="' + r + '"' : "") +
            ' src="' +
            n +
            '"  allowfullscreen="true"></iframe>\n                </div>'
          );
        },
        $s = function (e, t, i, s, n, r) {
          var o =
              "<img " +
              i +
              " " +
              (s ? 'srcset="' + s + '"' : "") +
              "  " +
              (n ? 'sizes="' + n + '"' : "") +
              ' class="lg-object lg-image" data-index="' +
              e +
              '" src="' +
              t +
              '" />',
            a = "";
          r &&
            (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
              var t = "";
              return (
                Object.keys(e).forEach(function (i) {
                  t += " " + i + '="' + e[i] + '"';
                }),
                "<source " + t + "></source>"
              );
            }));
          return "" + a + o;
        },
        Ds = function (e) {
          for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
            var r = e[n].split(" ");
            "" === r[0] && r.splice(0, 1), i.push(r[0]), t.push(r[1]);
          }
          for (var o = window.innerWidth, a = 0; a < t.length; a++)
            if (parseInt(t[a], 10) > o) {
              s = i[a];
              break;
            }
          return s;
        },
        zs = function (e) {
          return !!e && !!e.complete && 0 !== e.naturalWidth;
        },
        js = function (e, t, i, s) {
          return (
            '<div class="lg-video-cont ' +
            (s && s.youtube
              ? "lg-has-youtube"
              : s && s.vimeo
              ? "lg-has-vimeo"
              : "lg-has-html5") +
            '" style="' +
            i +
            '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="Play video"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>Play video</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
            (t || "") +
            '\n            <img class="lg-object lg-video-poster" src="' +
            e +
            '" />\n        </div>'
          );
        },
        Bs = function (e, t, i, s) {
          var n = [],
            r = (function () {
              for (var e = 0, t = 0, i = arguments.length; t < i; t++)
                e += arguments[t].length;
              var s = Array(e),
                n = 0;
              for (t = 0; t < i; t++)
                for (var r = arguments[t], o = 0, a = r.length; o < a; o++, n++)
                  s[n] = r[o];
              return s;
            })(ks, t);
          return (
            [].forEach.call(e, function (e) {
              for (var t = {}, o = 0; o < e.attributes.length; o++) {
                var a = e.attributes[o];
                if (a.specified) {
                  var l = Is(a.name),
                    c = "";
                  r.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
                }
              }
              var d = Ls(e),
                u = d.find("img").first().attr("alt"),
                p = d.attr("title"),
                h = s ? d.attr(s) : d.find("img").first().attr("src");
              (t.thumb = h),
                i && !t.subHtml && (t.subHtml = p || u || ""),
                (t.alt = u || p || ""),
                n.push(t);
            }),
            n
          );
        },
        Ns = function () {
          return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        },
        Ws = function (e, t, i) {
          if (!e)
            return t
              ? { html5: !0 }
              : void console.error(
                  "lightGallery :- data-src is not provided on slide item " +
                    (i + 1) +
                    ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                );
          var s = e.match(
              /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
            ),
            n = e.match(
              /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
            ),
            r = e.match(
              /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
            );
          return s
            ? { youtube: s }
            : n
            ? { vimeo: n }
            : r
            ? { wistia: r }
            : void 0;
        },
        Rs = {
          mode: "lg-slide",
          easing: "ease",
          speed: 400,
          licenseKey: "0000-0000-000-0000",
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 300,
          container: "",
          startAnimationDuration: 400,
          zoomFromOrigin: !0,
          hideBarsDelay: 0,
          showBarsAfter: 1e4,
          slideDelay: 0,
          supportLegacyBrowser: !0,
          allowMediaOverlap: !1,
          videoMaxSize: "1280-720",
          loadYouTubePoster: !0,
          defaultCaptionHeight: 0,
          ariaLabelledby: "",
          ariaDescribedby: "",
          closable: !0,
          swipeToClose: !0,
          closeOnTap: !0,
          showCloseIcon: !0,
          showMaximizeIcon: !1,
          loop: !0,
          escKey: !0,
          keyPress: !0,
          controls: !0,
          slideEndAnimation: !0,
          hideControlOnEnd: !1,
          mousewheel: !1,
          getCaptionFromTitleOrAlt: !0,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: !1,
          preload: 2,
          numberOfSlideItemsInDom: 10,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: 0,
          iframeWidth: "100%",
          iframeHeight: "100%",
          iframeMaxWidth: "100%",
          iframeMaxHeight: "100%",
          download: !0,
          counter: !0,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: !0,
          enableDrag: !0,
          dynamic: !1,
          dynamicEl: [],
          extraProps: [],
          exThumbImage: "",
          isMobile: void 0,
          mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
          plugins: [],
        },
        Hs = "lgAfterAppendSlide",
        Gs = "lgInit",
        Fs = "lgHasVideo",
        Vs = "lgContainerResize",
        qs = "lgUpdateSlides",
        Xs = "lgAfterAppendSubHtml",
        Ys = "lgBeforeOpen",
        Us = "lgAfterOpen",
        Ks = "lgSlideItemLoad",
        Zs = "lgBeforeSlide",
        Qs = "lgAfterSlide",
        Js = "lgPosterClick",
        en = "lgDragStart",
        tn = "lgDragMove",
        sn = "lgDragEnd",
        nn = "lgBeforeNextSlide",
        rn = "lgBeforePrevSlide",
        on = "lgBeforeClose",
        an = "lgAfterClose",
        ln = 0,
        cn = (function () {
          function e(e, t) {
            if (
              ((this.lgOpened = !1),
              (this.index = 0),
              (this.plugins = []),
              (this.lGalleryOn = !1),
              (this.lgBusy = !1),
              (this.currentItemsInDom = []),
              (this.prevScrollTop = 0),
              (this.isDummyImageRemoved = !1),
              (this.dragOrSwipeEnabled = !1),
              (this.mediaContainerPosition = { top: 0, bottom: 0 }),
              !e)
            )
              return this;
            if (
              (ln++,
              (this.lgId = ln),
              (this.el = e),
              (this.LGel = Ls(e)),
              this.generateSettings(t),
              this.buildModules(),
              this.settings.dynamic &&
                void 0 !== this.settings.dynamicEl &&
                !Array.isArray(this.settings.dynamicEl))
            )
              throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return (
              (this.galleryItems = this.getItems()),
              this.normalizeSettings(),
              this.init(),
              this.validateLicense(),
              this
            );
          }
          return (
            (e.prototype.generateSettings = function (e) {
              if (
                ((this.settings = Os(Os({}, Rs), e)),
                this.settings.isMobile &&
                "function" == typeof this.settings.isMobile
                  ? this.settings.isMobile()
                  : Ns())
              ) {
                var t = Os(
                  Os({}, this.settings.mobileSettings),
                  this.settings.mobileSettings
                );
                this.settings = Os(Os({}, this.settings), t);
              }
            }),
            (e.prototype.normalizeSettings = function () {
              this.settings.slideEndAnimation &&
                (this.settings.hideControlOnEnd = !1),
                this.settings.closable || (this.settings.swipeToClose = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                this.settings.dynamic && (this.zoomFromOrigin = !1),
                this.settings.container ||
                  (this.settings.container = document.body),
                (this.settings.preload = Math.min(
                  this.settings.preload,
                  this.galleryItems.length
                ));
            }),
            (e.prototype.init = function () {
              var e = this;
              this.addSlideVideoInfo(this.galleryItems),
                this.buildStructure(),
                this.LGel.trigger(Gs, { instance: this }),
                this.settings.keyPress && this.keyPress(),
                setTimeout(function () {
                  e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
                }, 50),
                this.arrow(),
                this.settings.mousewheel && this.mousewheel(),
                this.settings.dynamic || this.openGalleryOnItemClick();
            }),
            (e.prototype.openGalleryOnItemClick = function () {
              for (
                var e = this,
                  t = function (t) {
                    var s = i.items[t],
                      n = Ls(s),
                      r = As.generateUUID();
                    n.attr("data-lg-id", r).on(
                      "click.lgcustom-item-" + r,
                      function (i) {
                        i.preventDefault();
                        var n = e.settings.index || t;
                        e.openGallery(n, s);
                      }
                    );
                  },
                  i = this,
                  s = 0;
                s < this.items.length;
                s++
              )
                t(s);
            }),
            (e.prototype.buildModules = function () {
              var e = this;
              this.settings.plugins.forEach(function (t) {
                e.plugins.push(new t(e, Ls));
              });
            }),
            (e.prototype.validateLicense = function () {
              this.settings.licenseKey
                ? "0000-0000-000-0000" === this.settings.licenseKey &&
                  console.warn(
                    "lightGallery: " +
                      this.settings.licenseKey +
                      " license key is not valid for production use"
                  )
                : console.error("Please provide a valid license key");
            }),
            (e.prototype.getSlideItem = function (e) {
              return Ls(this.getSlideItemId(e));
            }),
            (e.prototype.getSlideItemId = function (e) {
              return "#lg-item-" + this.lgId + "-" + e;
            }),
            (e.prototype.getIdName = function (e) {
              return e + "-" + this.lgId;
            }),
            (e.prototype.getElementById = function (e) {
              return Ls("#" + this.getIdName(e));
            }),
            (e.prototype.manageSingleSlideClassName = function () {
              this.galleryItems.length < 2
                ? this.outer.addClass("lg-single-item")
                : this.outer.removeClass("lg-single-item");
            }),
            (e.prototype.buildStructure = function () {
              var e = this;
              if (!(this.$container && this.$container.get())) {
                var t = "",
                  i = "";
                this.settings.controls &&
                  (t =
                    '<button type="button" id="' +
                    this.getIdName("lg-prev") +
                    '" aria-label="Previous slide" class="lg-prev lg-icon"> ' +
                    this.settings.prevHtml +
                    ' </button>\n                <button type="button" id="' +
                    this.getIdName("lg-next") +
                    '" aria-label="Next slide" class="lg-next lg-icon"> ' +
                    this.settings.nextHtml +
                    " </button>"),
                  ".lg-item" !== this.settings.appendSubHtmlTo &&
                    (i =
                      '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                var s = "";
                this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
                var n = this.settings.ariaLabelledby
                    ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                    : "",
                  r = this.settings.ariaDescribedby
                    ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                    : "",
                  o =
                    "lg-container " +
                    this.settings.addClass +
                    " " +
                    (document.body !== this.settings.container
                      ? "lg-inline"
                      : ""),
                  a =
                    this.settings.closable && this.settings.showCloseIcon
                      ? '<button type="button" aria-label="Close gallery" id="' +
                        this.getIdName("lg-close") +
                        '" class="lg-close lg-icon"></button>'
                      : "",
                  l = this.settings.showMaximizeIcon
                    ? '<button type="button" aria-label="Toggle maximize" id="' +
                      this.getIdName("lg-maximize") +
                      '" class="lg-maximize lg-icon"></button>'
                    : "",
                  c =
                    '\n        <div class="' +
                    o +
                    '" id="' +
                    this.getIdName("lg-container") +
                    '" tabindex="-1" aria-modal="true" ' +
                    n +
                    " " +
                    r +
                    ' role="dialog"\n        >\n            <div id="' +
                    this.getIdName("lg-backdrop") +
                    '" class="lg-backdrop"></div>\n\n            <div id="' +
                    this.getIdName("lg-outer") +
                    '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                    s +
                    ' ">\n\n              <div id="' +
                    this.getIdName("lg-content") +
                    '" class="lg-content">\n                <div id="' +
                    this.getIdName("lg-inner") +
                    '" class="lg-inner">\n                </div>\n                ' +
                    t +
                    '\n              </div>\n                <div id="' +
                    this.getIdName("lg-toolbar") +
                    '" class="lg-toolbar lg-group">\n                    ' +
                    l +
                    "\n                    " +
                    a +
                    "\n                    </div>\n                    " +
                    (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                    '\n                <div id="' +
                    this.getIdName("lg-components") +
                    '" class="lg-components">\n                    ' +
                    (".lg-sub-html" === this.settings.appendSubHtmlTo
                      ? i
                      : "") +
                    "\n                </div>\n            </div>\n        </div>\n        ";
                Ls(this.settings.container)
                  .css("position", "relative")
                  .append(c),
                  (this.outer = this.getElementById("lg-outer")),
                  (this.$lgComponents = this.getElementById("lg-components")),
                  (this.$backdrop = this.getElementById("lg-backdrop")),
                  (this.$container = this.getElementById("lg-container")),
                  (this.$inner = this.getElementById("lg-inner")),
                  (this.$content = this.getElementById("lg-content")),
                  (this.$toolbar = this.getElementById("lg-toolbar")),
                  this.$backdrop.css(
                    "transition-duration",
                    this.settings.backdropDuration + "ms"
                  );
                var d = this.settings.mode + " ";
                this.manageSingleSlideClassName(),
                  this.settings.enableDrag && (d += "lg-grab "),
                  this.outer.addClass(d),
                  this.$inner.css(
                    "transition-timing-function",
                    this.settings.easing
                  ),
                  this.$inner.css(
                    "transition-duration",
                    this.settings.speed + "ms"
                  ),
                  this.settings.download &&
                    this.$toolbar.append(
                      '<a id="' +
                        this.getIdName("lg-download") +
                        '" target="_blank" rel="noopener" aria-label="Download" download class="lg-download lg-icon"></a>'
                    ),
                  this.counter(),
                  Ls(window).on(
                    "resize.lg.global" +
                      this.lgId +
                      " orientationchange.lg.global" +
                      this.lgId,
                    function () {
                      e.refreshOnResize();
                    }
                  ),
                  this.hideBars(),
                  this.manageCloseGallery(),
                  this.toggleMaximize(),
                  this.initModules();
              }
            }),
            (e.prototype.refreshOnResize = function () {
              if (this.lgOpened) {
                var e = this.galleryItems[this.index].__slideVideoInfo;
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var t = this.mediaContainerPosition,
                  i = t.top,
                  s = t.bottom;
                if (
                  ((this.currentImageSize = Ms(
                    this.items[this.index],
                    this.outer,
                    i + s,
                    e && this.settings.videoMaxSize
                  )),
                  e && this.resizeVideoSlide(this.index, this.currentImageSize),
                  this.zoomFromOrigin && !this.isDummyImageRemoved)
                ) {
                  var n = this.getDummyImgStyles(this.currentImageSize);
                  this.outer
                    .find(".lg-current .lg-dummy-img")
                    .first()
                    .attr("style", n);
                }
                this.LGel.trigger(Vs);
              }
            }),
            (e.prototype.resizeVideoSlide = function (e, t) {
              var i = this.getVideoContStyle(t);
              this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
            }),
            (e.prototype.updateSlides = function (e, t) {
              if (
                (this.index > e.length - 1 && (this.index = e.length - 1),
                1 === e.length && (this.index = 0),
                e.length)
              ) {
                var i = this.galleryItems[t].src;
                (this.galleryItems = e),
                  this.updateControls(),
                  this.$inner.empty(),
                  (this.currentItemsInDom = []);
                var s = 0;
                this.galleryItems.some(function (e, t) {
                  return e.src === i && ((s = t), !0);
                }),
                  (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                  this.loadContent(s, !0),
                  this.getSlideItem(s).addClass("lg-current"),
                  (this.index = s),
                  this.updateCurrentCounter(s),
                  this.LGel.trigger(qs);
              } else this.closeGallery();
            }),
            (e.prototype.getItems = function () {
              if (((this.items = []), this.settings.dynamic))
                return this.settings.dynamicEl || [];
              if ("this" === this.settings.selector) this.items.push(this.el);
              else if (this.settings.selector)
                if ("string" == typeof this.settings.selector)
                  if (this.settings.selectWithin) {
                    var e = Ls(this.settings.selectWithin);
                    this.items = e.find(this.settings.selector).get();
                  } else
                    this.items = this.el.querySelectorAll(
                      this.settings.selector
                    );
                else this.items = this.settings.selector;
              else this.items = this.el.children;
              return Bs(
                this.items,
                this.settings.extraProps,
                this.settings.getCaptionFromTitleOrAlt,
                this.settings.exThumbImage
              );
            }),
            (e.prototype.openGallery = function (e, t) {
              var i = this;
              if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
                (this.lgOpened = !0),
                  this.outer.get().focus(),
                  this.outer.removeClass("lg-hide-items"),
                  this.$container.addClass("lg-show");
                var s = this.getItemsToBeInsertedToDom(e, e);
                this.currentItemsInDom = s;
                var n = "";
                s.forEach(function (e) {
                  n = n + '<div id="' + e + '" class="lg-item"></div>';
                }),
                  this.$inner.append(n),
                  this.addHtml(e);
                var r = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var o = this.mediaContainerPosition,
                  a = o.top,
                  l = o.bottom;
                this.settings.allowMediaOverlap ||
                  this.setMediaContainerPosition(a, l);
                var c = this.galleryItems[e].__slideVideoInfo;
                this.zoomFromOrigin &&
                  t &&
                  ((this.currentImageSize = Ms(
                    t,
                    this.outer,
                    a + l,
                    c && this.settings.videoMaxSize
                  )),
                  (r = Ps(t, this.outer, a, l, this.currentImageSize))),
                  (this.zoomFromOrigin && r) ||
                    (this.outer.addClass(this.settings.startClass),
                    this.getSlideItem(e).removeClass("lg-complete"));
                var d = this.settings.zoomFromOrigin
                  ? 100
                  : this.settings.backdropDuration;
                setTimeout(function () {
                  i.outer.addClass("lg-components-open");
                }, d),
                  (this.index = e),
                  this.LGel.trigger(Ys),
                  this.getSlideItem(e).addClass("lg-current"),
                  (this.lGalleryOn = !1),
                  (this.prevScrollTop = Ls(window).scrollTop()),
                  setTimeout(function () {
                    if (i.zoomFromOrigin && r) {
                      var t = i.getSlideItem(e);
                      t.css("transform", r),
                        setTimeout(function () {
                          t
                            .addClass("lg-start-progress lg-start-end-progress")
                            .css(
                              "transition-duration",
                              i.settings.startAnimationDuration + "ms"
                            ),
                            i.outer.addClass("lg-zoom-from-image");
                        }),
                        setTimeout(function () {
                          t.css("transform", "translate3d(0, 0, 0)");
                        }, 100);
                    }
                    setTimeout(function () {
                      i.$backdrop.addClass("in"),
                        i.$container.addClass("lg-show-in");
                    }, 10),
                      (i.zoomFromOrigin && r) ||
                        setTimeout(function () {
                          i.outer.addClass("lg-visible");
                        }, i.settings.backdropDuration),
                      i.slide(e, !1, !1, !1),
                      i.LGel.trigger(Us);
                  }),
                  document.body === this.settings.container &&
                    Ls("html").addClass("lg-on");
              }
            }),
            (e.prototype.getMediaContainerPosition = function () {
              if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
              var e = this.$toolbar.get().clientHeight || 0,
                t = this.outer.find(".lg-components .lg-sub-html").get(),
                i =
                  this.settings.defaultCaptionHeight ||
                  (t && t.clientHeight) ||
                  0,
                s = this.outer.find(".lg-thumb-outer").get();
              return { top: e, bottom: (s ? s.clientHeight : 0) + i };
            }),
            (e.prototype.setMediaContainerPosition = function (e, t) {
              void 0 === e && (e = 0),
                void 0 === t && (t = 0),
                this.$content.css("top", e + "px").css("bottom", t + "px");
            }),
            (e.prototype.hideBars = function () {
              var e = this;
              setTimeout(function () {
                e.outer.removeClass("lg-hide-items"),
                  e.settings.hideBarsDelay > 0 &&
                    (e.outer.on(
                      "mousemove.lg click.lg touchstart.lg",
                      function () {
                        e.outer.removeClass("lg-hide-items"),
                          clearTimeout(e.hideBarTimeout),
                          (e.hideBarTimeout = setTimeout(function () {
                            e.outer.addClass("lg-hide-items");
                          }, e.settings.hideBarsDelay));
                      }
                    ),
                    e.outer.trigger("mousemove.lg"));
              }, this.settings.showBarsAfter);
            }),
            (e.prototype.initPictureFill = function (e) {
              if (this.settings.supportLegacyBrowser)
                try {
                  picturefill({ elements: [e.get()] });
                } catch (e) {
                  console.warn(
                    "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                  );
                }
            }),
            (e.prototype.counter = function () {
              if (this.settings.counter) {
                var e =
                  '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                  this.getIdName("lg-counter-current") +
                  '" class="lg-counter-current">' +
                  (this.index + 1) +
                  ' </span> /\n                <span id="' +
                  this.getIdName("lg-counter-all") +
                  '" class="lg-counter-all">' +
                  this.galleryItems.length +
                  " </span></div>";
                this.outer.find(this.settings.appendCounterTo).append(e);
              }
            }),
            (e.prototype.addHtml = function (e) {
              var t, i;
              if (
                (this.galleryItems[e].subHtmlUrl
                  ? (i = this.galleryItems[e].subHtmlUrl)
                  : (t = this.galleryItems[e].subHtml),
                !i)
              )
                if (t) {
                  var s = t.substring(0, 1);
                  ("." !== s && "#" !== s) ||
                    (t =
                      this.settings.subHtmlSelectorRelative &&
                      !this.settings.dynamic
                        ? Ls(this.items).eq(e).find(t).first().html()
                        : Ls(t).first().html());
                } else t = "";
              if (".lg-item" !== this.settings.appendSubHtmlTo)
                i
                  ? this.outer.find(".lg-sub-html").load(i)
                  : this.outer.find(".lg-sub-html").html(t);
              else {
                var n = Ls(this.getSlideItemId(e));
                i
                  ? n.load(i)
                  : n.append('<div class="lg-sub-html">' + t + "</div>");
              }
              null != t &&
                ("" === t
                  ? this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .addClass("lg-empty-html")
                  : this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .removeClass("lg-empty-html")),
                this.LGel.trigger(Xs, { index: e });
            }),
            (e.prototype.preload = function (e) {
              for (
                var t = 1;
                t <= this.settings.preload &&
                !(t >= this.galleryItems.length - e);
                t++
              )
                this.loadContent(e + t, !1);
              for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
                this.loadContent(e - i, !1);
            }),
            (e.prototype.getDummyImgStyles = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                margin-left: -" +
                    e.width / 2 +
                    "px;\n                margin-top: -" +
                    e.height / 2 +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getVideoContStyle = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getDummyImageContent = function (e, t, i) {
              var s;
              if ((this.settings.dynamic || (s = Ls(this.items).eq(t)), s)) {
                var n = void 0;
                if (
                  !(n = this.settings.exThumbImage
                    ? s.attr(this.settings.exThumbImage)
                    : s.find("img").first().attr("src"))
                )
                  return "";
                var r =
                  "<img " +
                  i +
                  ' style="' +
                  this.getDummyImgStyles(this.currentImageSize) +
                  '" class="lg-dummy-img" src="' +
                  n +
                  '" />';
                return (
                  e.addClass("lg-first-slide"),
                  this.outer.addClass("lg-first-slide-loading"),
                  r
                );
              }
              return "";
            }),
            (e.prototype.setImgMarkup = function (e, t, i) {
              var s = this.galleryItems[i],
                n = s.alt,
                r = s.srcset,
                o = s.sizes,
                a = s.sources,
                l = n ? 'alt="' + n + '"' : "",
                c =
                  '<picture class="lg-img-wrap"> ' +
                  (this.isFirstSlideWithZoomAnimation()
                    ? this.getDummyImageContent(t, i, l)
                    : $s(i, e, l, r, o, a)) +
                  "</picture>";
              t.prepend(c);
            }),
            (e.prototype.onSlideObjectLoad = function (e, t, i, s) {
              var n = e.find(".lg-object").first();
              zs(n.get()) || t
                ? i()
                : (n.on("load.lg error.lg", function () {
                    i && i();
                  }),
                  n.on("error.lg", function () {
                    s && s();
                  }));
            }),
            (e.prototype.onLgObjectLoad = function (e, t, i, s, n, r) {
              var o = this;
              this.onSlideObjectLoad(
                e,
                r,
                function () {
                  o.triggerSlideItemLoad(e, t, i, s, n);
                },
                function () {
                  e.addClass("lg-complete lg-complete_"),
                    e.html(
                      '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                    );
                }
              );
            }),
            (e.prototype.triggerSlideItemLoad = function (e, t, i, s, n) {
              var r = this,
                o = this.galleryItems[t],
                a = n && "video" === this.getSlideType(o) && !o.poster ? s : 0;
              setTimeout(function () {
                e.addClass("lg-complete lg-complete_"),
                  r.LGel.trigger(Ks, {
                    index: t,
                    delay: i || 0,
                    isFirstSlide: n,
                  });
              }, a);
            }),
            (e.prototype.isFirstSlideWithZoomAnimation = function () {
              return !(
                this.lGalleryOn ||
                !this.zoomFromOrigin ||
                !this.currentImageSize
              );
            }),
            (e.prototype.addSlideVideoInfo = function (e) {
              var t = this;
              e.forEach(function (e, i) {
                (e.__slideVideoInfo = Ws(e.src, !!e.video, i)),
                  e.__slideVideoInfo &&
                    t.settings.loadYouTubePoster &&
                    !e.poster &&
                    e.__slideVideoInfo.youtube &&
                    (e.poster =
                      "//img.youtube.com/vi/" +
                      e.__slideVideoInfo.youtube[1] +
                      "/maxresdefault.jpg");
              });
            }),
            (e.prototype.loadContent = function (e, t) {
              var i = this,
                s = this.galleryItems[e],
                n = Ls(this.getSlideItemId(e)),
                r = s.poster,
                o = s.srcset,
                a = s.sizes,
                l = s.sources,
                c = s.src,
                d = s.video,
                u = d && "string" == typeof d ? JSON.parse(d) : d;
              if (s.responsive) {
                var p = s.responsive.split(",");
                c = Ds(p) || c;
              }
              var h = s.__slideVideoInfo,
                f = "",
                g = !!s.iframe,
                m = !this.lGalleryOn,
                v = 0;
              if (
                (m &&
                  (v =
                    this.zoomFromOrigin && this.currentImageSize
                      ? this.settings.startAnimationDuration + 10
                      : this.settings.backdropDuration + 10),
                !n.hasClass("lg-loaded"))
              ) {
                if (h) {
                  var b = this.mediaContainerPosition,
                    y = b.top,
                    x = b.bottom,
                    w = Ms(
                      this.items[e],
                      this.outer,
                      y + x,
                      h && this.settings.videoMaxSize
                    );
                  f = this.getVideoContStyle(w);
                }
                if (g) {
                  var S = _s(
                    this.settings.iframeWidth,
                    this.settings.iframeHeight,
                    this.settings.iframeMaxWidth,
                    this.settings.iframeMaxHeight,
                    c,
                    s.iframeTitle
                  );
                  n.prepend(S);
                } else if (r) {
                  var E = "";
                  m &&
                    this.zoomFromOrigin &&
                    this.currentImageSize &&
                    (E = this.getDummyImageContent(n, e, ""));
                  S = js(r, E || "", f, h);
                  n.prepend(S);
                } else if (h) {
                  S = '<div class="lg-video-cont " style="' + f + '"></div>';
                  n.prepend(S);
                } else if ((this.setImgMarkup(c, n, e), o || l)) {
                  var C = n.find(".lg-object");
                  this.initPictureFill(C);
                }
                (r || h) &&
                  this.LGel.trigger(Fs, {
                    index: e,
                    src: c,
                    html5Video: u,
                    hasPoster: !!r,
                  }),
                  this.LGel.trigger(Hs, { index: e }),
                  this.lGalleryOn &&
                    ".lg-item" === this.settings.appendSubHtmlTo &&
                    this.addHtml(e);
              }
              var T = 0;
              v && !Ls(document.body).hasClass("lg-from-hash") && (T = v),
                this.isFirstSlideWithZoomAnimation() &&
                  (setTimeout(function () {
                    n.removeClass(
                      "lg-start-end-progress lg-start-progress"
                    ).removeAttr("style");
                  }, this.settings.startAnimationDuration + 100),
                  n.hasClass("lg-loaded") ||
                    setTimeout(function () {
                      if (
                        "image" === i.getSlideType(s) &&
                        (n
                          .find(".lg-img-wrap")
                          .append($s(e, c, "", o, a, s.sources)),
                        o || l)
                      ) {
                        var t = n.find(".lg-object");
                        i.initPictureFill(t);
                      }
                      ("image" === i.getSlideType(s) ||
                        ("video" === i.getSlideType(s) && r)) &&
                        (i.onLgObjectLoad(n, e, v, T, !0, !1),
                        i.onSlideObjectLoad(
                          n,
                          !(!h || !h.html5 || r),
                          function () {
                            i.loadContentOnFirstSlideLoad(e, n, T);
                          },
                          function () {
                            i.loadContentOnFirstSlideLoad(e, n, T);
                          }
                        ));
                    }, this.settings.startAnimationDuration + 100)),
                n.addClass("lg-loaded"),
                (this.isFirstSlideWithZoomAnimation() &&
                  ("video" !== this.getSlideType(s) || r)) ||
                  this.onLgObjectLoad(n, e, v, T, m, !(!h || !h.html5 || r)),
                (this.zoomFromOrigin && this.currentImageSize) ||
                  !n.hasClass("lg-complete_") ||
                  this.lGalleryOn ||
                  setTimeout(function () {
                    n.addClass("lg-complete");
                  }, this.settings.backdropDuration),
                (this.lGalleryOn = !0),
                !0 === t &&
                  (n.hasClass("lg-complete_")
                    ? this.preload(e)
                    : n
                        .find(".lg-object")
                        .first()
                        .on("load.lg error.lg", function () {
                          i.preload(e);
                        }));
            }),
            (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
              var s = this;
              setTimeout(function () {
                t.find(".lg-dummy-img").remove(),
                  t.removeClass("lg-first-slide"),
                  s.outer.removeClass("lg-first-slide-loading"),
                  (s.isDummyImageRemoved = !0),
                  s.preload(e);
              }, i + 300);
            }),
            (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
              var s = this;
              void 0 === i && (i = 0);
              var n = [],
                r = Math.max(i, 3);
              r = Math.min(r, this.galleryItems.length);
              var o = "lg-item-" + this.lgId + "-" + t;
              if (this.galleryItems.length <= 3)
                return (
                  this.galleryItems.forEach(function (e, t) {
                    n.push("lg-item-" + s.lgId + "-" + t);
                  }),
                  n
                );
              if (e < (this.galleryItems.length - 1) / 2) {
                for (var a = e; a > e - r / 2 && a >= 0; a--)
                  n.push("lg-item-" + this.lgId + "-" + a);
                var l = n.length;
                for (a = 0; a < r - l; a++)
                  n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
              } else {
                for (
                  a = e;
                  a <= this.galleryItems.length - 1 && a < e + r / 2;
                  a++
                )
                  n.push("lg-item-" + this.lgId + "-" + a);
                for (l = n.length, a = 0; a < r - l; a++)
                  n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
              }
              return (
                this.settings.loop &&
                  (e === this.galleryItems.length - 1
                    ? n.push("lg-item-" + this.lgId + "-0")
                    : 0 === e &&
                      n.push(
                        "lg-item-" +
                          this.lgId +
                          "-" +
                          (this.galleryItems.length - 1)
                      )),
                -1 === n.indexOf(o) && n.push("lg-item-" + this.lgId + "-" + t),
                n
              );
            }),
            (e.prototype.organizeSlideItems = function (e, t) {
              var i = this,
                s = this.getItemsToBeInsertedToDom(
                  e,
                  t,
                  this.settings.numberOfSlideItemsInDom
                );
              return (
                s.forEach(function (e) {
                  -1 === i.currentItemsInDom.indexOf(e) &&
                    i.$inner.append(
                      '<div id="' + e + '" class="lg-item"></div>'
                    );
                }),
                this.currentItemsInDom.forEach(function (e) {
                  -1 === s.indexOf(e) && Ls("#" + e).remove();
                }),
                s
              );
            }),
            (e.prototype.getPreviousSlideIndex = function () {
              var e = 0;
              try {
                var t = this.outer.find(".lg-current").first().attr("id");
                e = parseInt(t.split("-")[3]) || 0;
              } catch (t) {
                e = 0;
              }
              return e;
            }),
            (e.prototype.setDownloadValue = function (e) {
              if (this.settings.download) {
                var t = this.galleryItems[e];
                if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                  this.outer.addClass("lg-hide-download");
                else {
                  var i = this.getElementById("lg-download");
                  this.outer.removeClass("lg-hide-download"),
                    i.attr("href", t.downloadUrl || t.src),
                    t.download && i.attr("download", t.download);
                }
              }
            }),
            (e.prototype.makeSlideAnimation = function (e, t, i) {
              var s = this;
              this.lGalleryOn && i.addClass("lg-slide-progress"),
                setTimeout(
                  function () {
                    s.outer.addClass("lg-no-trans"),
                      s.outer
                        .find(".lg-item")
                        .removeClass("lg-prev-slide lg-next-slide"),
                      "prev" === e
                        ? (t.addClass("lg-prev-slide"),
                          i.addClass("lg-next-slide"))
                        : (t.addClass("lg-next-slide"),
                          i.addClass("lg-prev-slide")),
                      setTimeout(function () {
                        s.outer.find(".lg-item").removeClass("lg-current"),
                          t.addClass("lg-current"),
                          s.outer.removeClass("lg-no-trans");
                      }, 50);
                  },
                  this.lGalleryOn ? this.settings.slideDelay : 0
                );
            }),
            (e.prototype.slide = function (e, t, i, s) {
              var n = this,
                r = this.getPreviousSlideIndex();
              if (
                ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
                !this.lGalleryOn || r !== e)
              ) {
                var o = this.galleryItems.length;
                if (!this.lgBusy) {
                  this.settings.counter && this.updateCurrentCounter(e);
                  var a = this.getSlideItem(e),
                    l = this.getSlideItem(r),
                    c = this.galleryItems[e],
                    d = c.__slideVideoInfo;
                  if (
                    (this.outer.attr(
                      "data-lg-slide-type",
                      this.getSlideType(c)
                    ),
                    this.setDownloadValue(e),
                    d)
                  ) {
                    var u = this.mediaContainerPosition,
                      p = u.top,
                      h = u.bottom,
                      f = Ms(
                        this.items[e],
                        this.outer,
                        p + h,
                        d && this.settings.videoMaxSize
                      );
                    this.resizeVideoSlide(e, f);
                  }
                  if (
                    (this.LGel.trigger(Zs, {
                      prevIndex: r,
                      index: e,
                      fromTouch: !!t,
                      fromThumb: !!i,
                    }),
                    (this.lgBusy = !0),
                    clearTimeout(this.hideBarTimeout),
                    this.arrowDisable(e),
                    s || (e < r ? (s = "prev") : e > r && (s = "next")),
                    t)
                  ) {
                    this.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-current lg-next-slide");
                    var g = void 0,
                      m = void 0;
                    o > 2
                      ? ((g = e - 1),
                        (m = e + 1),
                        ((0 === e && r === o - 1) ||
                          (e === o - 1 && 0 === r)) &&
                          ((m = 0), (g = o - 1)))
                      : ((g = 0), (m = 1)),
                      "prev" === s
                        ? this.getSlideItem(m).addClass("lg-next-slide")
                        : this.getSlideItem(g).addClass("lg-prev-slide"),
                      a.addClass("lg-current");
                  } else this.makeSlideAnimation(s, a, l);
                  this.lGalleryOn
                    ? setTimeout(function () {
                        n.loadContent(e, !0),
                          ".lg-item" !== n.settings.appendSubHtmlTo &&
                            n.addHtml(e);
                      }, this.settings.speed +
                        50 +
                        (t ? 0 : this.settings.slideDelay))
                    : this.loadContent(e, !0),
                    setTimeout(function () {
                      (n.lgBusy = !1),
                        l.removeClass("lg-slide-progress"),
                        n.LGel.trigger(Qs, {
                          prevIndex: r,
                          index: e,
                          fromTouch: t,
                          fromThumb: i,
                        });
                    }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                      (t ? 0 : this.settings.slideDelay));
                }
                this.index = e;
              }
            }),
            (e.prototype.updateCurrentCounter = function (e) {
              this.getElementById("lg-counter-current").html(e + 1 + "");
            }),
            (e.prototype.updateCounterTotal = function () {
              this.getElementById("lg-counter-all").html(
                this.galleryItems.length + ""
              );
            }),
            (e.prototype.getSlideType = function (e) {
              return e.__slideVideoInfo
                ? "video"
                : e.iframe
                ? "iframe"
                : "image";
            }),
            (e.prototype.touchMove = function (e, t, i) {
              var s = t.pageX - e.pageX,
                n = t.pageY - e.pageY,
                r = !1;
              if (
                (this.swipeDirection
                  ? (r = !0)
                  : Math.abs(s) > 15
                  ? ((this.swipeDirection = "horizontal"), (r = !0))
                  : Math.abs(n) > 15 &&
                    ((this.swipeDirection = "vertical"), (r = !0)),
                r)
              ) {
                var o = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                  null == i || i.preventDefault(),
                    this.outer.addClass("lg-dragging"),
                    this.setTranslate(o, s, 0);
                  var a = o.get().offsetWidth,
                    l = (15 * a) / 100 - Math.abs((10 * s) / 100);
                  this.setTranslate(
                    this.outer.find(".lg-prev-slide").first(),
                    -a + s - l,
                    0
                  ),
                    this.setTranslate(
                      this.outer.find(".lg-next-slide").first(),
                      a + s + l,
                      0
                    );
                } else if (
                  "vertical" === this.swipeDirection &&
                  this.settings.swipeToClose
                ) {
                  null == i || i.preventDefault(),
                    this.$container.addClass("lg-dragging-vertical");
                  var c = 1 - Math.abs(n) / window.innerHeight;
                  this.$backdrop.css("opacity", c);
                  var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                  this.setTranslate(o, 0, n, d, d),
                    Math.abs(n) > 100 &&
                      this.outer
                        .addClass("lg-hide-items")
                        .removeClass("lg-components-open");
                }
              }
            }),
            (e.prototype.touchEnd = function (e, t, i) {
              var s,
                n = this;
              "lg-slide" !== this.settings.mode &&
                this.outer.addClass("lg-slide"),
                setTimeout(function () {
                  n.$container.removeClass("lg-dragging-vertical"),
                    n.outer
                      .removeClass("lg-dragging lg-hide-items")
                      .addClass("lg-components-open");
                  var r = !0;
                  if ("horizontal" === n.swipeDirection) {
                    s = e.pageX - t.pageX;
                    var o = Math.abs(e.pageX - t.pageX);
                    s < 0 && o > n.settings.swipeThreshold
                      ? (n.goToNextSlide(!0), (r = !1))
                      : s > 0 &&
                        o > n.settings.swipeThreshold &&
                        (n.goToPrevSlide(!0), (r = !1));
                  } else if ("vertical" === n.swipeDirection) {
                    if (
                      ((s = Math.abs(e.pageY - t.pageY)),
                      n.settings.closable && n.settings.swipeToClose && s > 100)
                    )
                      return void n.closeGallery();
                    n.$backdrop.css("opacity", 1);
                  }
                  if (
                    (n.outer.find(".lg-item").removeAttr("style"),
                    r && Math.abs(e.pageX - t.pageX) < 5)
                  ) {
                    var a = Ls(i.target);
                    n.isPosterElement(a) && n.LGel.trigger(Js);
                  }
                  n.swipeDirection = void 0;
                }),
                setTimeout(function () {
                  n.outer.hasClass("lg-dragging") ||
                    "lg-slide" === n.settings.mode ||
                    n.outer.removeClass("lg-slide");
                }, this.settings.speed + 100);
            }),
            (e.prototype.enableSwipe = function () {
              var e = this,
                t = {},
                i = {},
                s = !1,
                n = !1;
              this.settings.enableSwipe &&
                (this.$inner.on("touchstart.lg", function (i) {
                  e.dragOrSwipeEnabled = !0;
                  var s = e.getSlideItem(e.index);
                  (!Ls(i.target).hasClass("lg-item") &&
                    !s.get().contains(i.target)) ||
                    e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    1 !== i.targetTouches.length ||
                    ((n = !0),
                    (e.touchAction = "swipe"),
                    e.manageSwipeClass(),
                    (t = {
                      pageX: i.targetTouches[0].pageX,
                      pageY: i.targetTouches[0].pageY,
                    }));
                }),
                this.$inner.on("touchmove.lg", function (r) {
                  n &&
                    "swipe" === e.touchAction &&
                    1 === r.targetTouches.length &&
                    ((i = {
                      pageX: r.targetTouches[0].pageX,
                      pageY: r.targetTouches[0].pageY,
                    }),
                    e.touchMove(t, i, r),
                    (s = !0));
                }),
                this.$inner.on("touchend.lg", function (r) {
                  if ("swipe" === e.touchAction) {
                    if (s) (s = !1), e.touchEnd(i, t, r);
                    else if (n) {
                      var o = Ls(r.target);
                      e.isPosterElement(o) && e.LGel.trigger(Js);
                    }
                    (e.touchAction = void 0), (n = !1);
                  }
                }));
            }),
            (e.prototype.enableDrag = function () {
              var e = this,
                t = {},
                i = {},
                s = !1,
                n = !1;
              this.settings.enableDrag &&
                (this.outer.on("mousedown.lg", function (i) {
                  e.dragOrSwipeEnabled = !0;
                  var n = e.getSlideItem(e.index);
                  (Ls(i.target).hasClass("lg-item") ||
                    n.get().contains(i.target)) &&
                    (e.outer.hasClass("lg-zoomed") ||
                      e.lgBusy ||
                      (i.preventDefault(),
                      e.lgBusy ||
                        (e.manageSwipeClass(),
                        (t = { pageX: i.pageX, pageY: i.pageY }),
                        (s = !0),
                        (e.outer.get().scrollLeft += 1),
                        (e.outer.get().scrollLeft -= 1),
                        e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                        e.LGel.trigger(en))));
                }),
                Ls(window).on("mousemove.lg.global" + this.lgId, function (r) {
                  s &&
                    e.lgOpened &&
                    ((n = !0),
                    (i = { pageX: r.pageX, pageY: r.pageY }),
                    e.touchMove(t, i),
                    e.LGel.trigger(tn));
                }),
                Ls(window).on("mouseup.lg.global" + this.lgId, function (r) {
                  if (e.lgOpened) {
                    var o = Ls(r.target);
                    n
                      ? ((n = !1), e.touchEnd(i, t, r), e.LGel.trigger(sn))
                      : e.isPosterElement(o) && e.LGel.trigger(Js),
                      s &&
                        ((s = !1),
                        e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                  }
                }));
            }),
            (e.prototype.triggerPosterClick = function () {
              var e = this;
              this.$inner.on("click.lg", function (t) {
                !e.dragOrSwipeEnabled &&
                  e.isPosterElement(Ls(t.target)) &&
                  e.LGel.trigger(Js);
              });
            }),
            (e.prototype.manageSwipeClass = function () {
              var e = this.index + 1,
                t = this.index - 1;
              this.settings.loop &&
                this.galleryItems.length > 2 &&
                (0 === this.index
                  ? (t = this.galleryItems.length - 1)
                  : this.index === this.galleryItems.length - 1 && (e = 0)),
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-next-slide lg-prev-slide"),
                t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
                this.getSlideItem(e).addClass("lg-next-slide");
            }),
            (e.prototype.goToNextSlide = function (e) {
              var t = this,
                i = this.settings.loop;
              e && this.galleryItems.length < 3 && (i = !1),
                this.lgBusy ||
                  (this.index + 1 < this.galleryItems.length
                    ? (this.index++,
                      this.LGel.trigger(nn, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : i
                    ? ((this.index = 0),
                      this.LGel.trigger(nn, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-right-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-right-end");
                      }, 400)));
            }),
            (e.prototype.goToPrevSlide = function (e) {
              var t = this,
                i = this.settings.loop;
              e && this.galleryItems.length < 3 && (i = !1),
                this.lgBusy ||
                  (this.index > 0
                    ? (this.index--,
                      this.LGel.trigger(rn, {
                        index: this.index,
                        fromTouch: e,
                      }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : i
                    ? ((this.index = this.galleryItems.length - 1),
                      this.LGel.trigger(rn, {
                        index: this.index,
                        fromTouch: e,
                      }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-left-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-left-end");
                      }, 400)));
            }),
            (e.prototype.keyPress = function () {
              var e = this;
              Ls(window).on("keydown.lg.global" + this.lgId, function (t) {
                e.lgOpened &&
                  !0 === e.settings.escKey &&
                  27 === t.keyCode &&
                  (t.preventDefault(),
                  e.settings.allowMediaOverlap &&
                  e.outer.hasClass("lg-can-toggle") &&
                  e.outer.hasClass("lg-components-open")
                    ? e.outer.removeClass("lg-components-open")
                    : e.closeGallery()),
                  e.lgOpened &&
                    e.galleryItems.length > 1 &&
                    (37 === t.keyCode &&
                      (t.preventDefault(), e.goToPrevSlide()),
                    39 === t.keyCode &&
                      (t.preventDefault(), e.goToNextSlide()));
              });
            }),
            (e.prototype.arrow = function () {
              var e = this;
              this.getElementById("lg-prev").on("click.lg", function () {
                e.goToPrevSlide();
              }),
                this.getElementById("lg-next").on("click.lg", function () {
                  e.goToNextSlide();
                });
            }),
            (e.prototype.arrowDisable = function (e) {
              if (!this.settings.loop && this.settings.hideControlOnEnd) {
                var t = this.getElementById("lg-prev"),
                  i = this.getElementById("lg-next");
                e + 1 === this.galleryItems.length
                  ? i.attr("disabled", "disabled").addClass("disabled")
                  : i.removeAttr("disabled").removeClass("disabled"),
                  0 === e
                    ? t.attr("disabled", "disabled").addClass("disabled")
                    : t.removeAttr("disabled").removeClass("disabled");
              }
            }),
            (e.prototype.setTranslate = function (e, t, i, s, n) {
              void 0 === s && (s = 1),
                void 0 === n && (n = 1),
                e.css(
                  "transform",
                  "translate3d(" +
                    t +
                    "px, " +
                    i +
                    "px, 0px) scale3d(" +
                    s +
                    ", " +
                    n +
                    ", 1)"
                );
            }),
            (e.prototype.mousewheel = function () {
              var e = this,
                t = 0;
              this.outer.on("wheel.lg", function (i) {
                if (i.deltaY && !(e.galleryItems.length < 2)) {
                  i.preventDefault();
                  var s = new Date().getTime();
                  s - t < 1e3 ||
                    ((t = s),
                    i.deltaY > 0
                      ? e.goToNextSlide()
                      : i.deltaY < 0 && e.goToPrevSlide());
                }
              });
            }),
            (e.prototype.isSlideElement = function (e) {
              return (
                e.hasClass("lg-outer") ||
                e.hasClass("lg-item") ||
                e.hasClass("lg-img-wrap")
              );
            }),
            (e.prototype.isPosterElement = function (e) {
              var t = this.getSlideItem(this.index)
                .find(".lg-video-play-button")
                .get();
              return (
                e.hasClass("lg-video-poster") ||
                e.hasClass("lg-video-play-button") ||
                (t && t.contains(e.get()))
              );
            }),
            (e.prototype.toggleMaximize = function () {
              var e = this;
              this.getElementById("lg-maximize").on("click.lg", function () {
                e.$container.toggleClass("lg-inline"), e.refreshOnResize();
              });
            }),
            (e.prototype.invalidateItems = function () {
              for (var e = 0; e < this.items.length; e++) {
                var t = Ls(this.items[e]);
                t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
              }
            }),
            (e.prototype.manageCloseGallery = function () {
              var e = this;
              if (this.settings.closable) {
                var t = !1;
                this.getElementById("lg-close").on("click.lg", function () {
                  e.closeGallery();
                }),
                  this.settings.closeOnTap &&
                    (this.outer.on("mousedown.lg", function (i) {
                      var s = Ls(i.target);
                      t = !!e.isSlideElement(s);
                    }),
                    this.outer.on("mousemove.lg", function () {
                      t = !1;
                    }),
                    this.outer.on("mouseup.lg", function (i) {
                      var s = Ls(i.target);
                      e.isSlideElement(s) &&
                        t &&
                        (e.outer.hasClass("lg-dragging") || e.closeGallery());
                    }));
              }
            }),
            (e.prototype.closeGallery = function (e) {
              var t = this;
              if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
              this.LGel.trigger(on), Ls(window).scrollTop(this.prevScrollTop);
              var i,
                s = this.items[this.index];
              if (this.zoomFromOrigin && s) {
                var n = this.mediaContainerPosition,
                  r = n.top,
                  o = n.bottom,
                  a = this.galleryItems[this.index],
                  l = a.__slideVideoInfo,
                  c = a.poster,
                  d = Ms(
                    s,
                    this.outer,
                    r + o,
                    l && c && this.settings.videoMaxSize
                  );
                i = Ps(s, this.outer, r, o, d);
              }
              this.zoomFromOrigin && i
                ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                  this.getSlideItem(this.index)
                    .addClass("lg-start-end-progress")
                    .css(
                      "transition-duration",
                      this.settings.startAnimationDuration + "ms"
                    )
                    .css("transform", i))
                : (this.outer.addClass("lg-hide-items"),
                  this.outer.removeClass("lg-zoom-from-image")),
                this.destroyModules(),
                (this.lGalleryOn = !1),
                (this.isDummyImageRemoved = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                clearTimeout(this.hideBarTimeout),
                (this.hideBarTimeout = !1),
                Ls("html").removeClass("lg-on"),
                this.outer.removeClass("lg-visible lg-components-open"),
                this.$backdrop.removeClass("in").css("opacity", 0);
              var u =
                this.zoomFromOrigin && i
                  ? Math.max(
                      this.settings.startAnimationDuration,
                      this.settings.backdropDuration
                    )
                  : this.settings.backdropDuration;
              return (
                this.$container.removeClass("lg-show-in"),
                setTimeout(function () {
                  t.zoomFromOrigin &&
                    i &&
                    t.outer.removeClass("lg-zoom-from-image"),
                    t.$container.removeClass("lg-show"),
                    t.$backdrop
                      .removeAttr("style")
                      .css(
                        "transition-duration",
                        t.settings.backdropDuration + "ms"
                      ),
                    t.outer.removeClass("lg-closing " + t.settings.startClass),
                    t
                      .getSlideItem(t.index)
                      .removeClass("lg-start-end-progress"),
                    t.$inner.empty(),
                    t.lgOpened && t.LGel.trigger(an, { instance: t }),
                    t.outer.get() && t.outer.get().blur(),
                    (t.lgOpened = !1);
                }, u + 100),
                u + 100
              );
            }),
            (e.prototype.initModules = function () {
              this.plugins.forEach(function (e) {
                try {
                  e.init();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly initiated"
                  );
                }
              });
            }),
            (e.prototype.destroyModules = function (e) {
              this.plugins.forEach(function (t) {
                try {
                  e ? t.destroy() : t.closeGallery && t.closeGallery();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly destroyed"
                  );
                }
              });
            }),
            (e.prototype.refresh = function (e) {
              this.settings.dynamic || this.invalidateItems(),
                (this.galleryItems = e || this.getItems()),
                this.updateControls(),
                this.openGalleryOnItemClick(),
                this.LGel.trigger(qs);
            }),
            (e.prototype.updateControls = function () {
              this.addSlideVideoInfo(this.galleryItems),
                this.updateCounterTotal(),
                this.manageSingleSlideClassName();
            }),
            (e.prototype.destroy = function () {
              var e = this,
                t = this.closeGallery(!0);
              return (
                setTimeout(function () {
                  e.destroyModules(!0),
                    e.settings.dynamic || e.invalidateItems(),
                    Ls(window).off(".lg.global" + e.lgId),
                    e.LGel.off(".lg"),
                    e.$container.remove();
                }, t),
                t
              );
            }),
            e
          );
        })();
      const dn = function (e, t) {
        return new cn(e, t);
      };
      var un = function () {
          return (
            (un =
              Object.assign ||
              function (e) {
                for (var t, i = 1, s = arguments.length; i < s; i++)
                  for (var n in (t = arguments[i]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }),
            un.apply(this, arguments)
          );
        },
        pn = {
          thumbnail: !0,
          animateThumb: !0,
          currentPagerPosition: "middle",
          alignThumbnails: "middle",
          thumbWidth: 100,
          thumbHeight: "80px",
          thumbMargin: 5,
          appendThumbnailsTo: ".lg-components",
          toggleThumb: !1,
          enableThumbDrag: !0,
          enableThumbSwipe: !0,
          thumbnailSwipeThreshold: 10,
          loadYouTubeThumbnail: !0,
          youTubeThumbSize: 1,
        },
        hn = "lgContainerResize",
        fn = "lgUpdateSlides",
        gn = "lgBeforeOpen",
        mn = "lgBeforeSlide",
        vn = (function () {
          function e(e, t) {
            return (
              (this.thumbOuterWidth = 0),
              (this.thumbTotalWidth = 0),
              (this.translateX = 0),
              (this.thumbClickable = !1),
              (this.core = e),
              (this.$LG = t),
              this
            );
          }
          return (
            (e.prototype.init = function () {
              (this.settings = un(un({}, pn), this.core.settings)),
                (this.thumbOuterWidth = 0),
                (this.thumbTotalWidth =
                  this.core.galleryItems.length *
                  (this.settings.thumbWidth + this.settings.thumbMargin)),
                (this.translateX = 0),
                this.setAnimateThumbStyles(),
                this.core.settings.allowMediaOverlap ||
                  (this.settings.toggleThumb = !1),
                this.settings.thumbnail &&
                  (this.build(),
                  this.settings.animateThumb
                    ? (this.settings.enableThumbDrag && this.enableThumbDrag(),
                      this.settings.enableThumbSwipe && this.enableThumbSwipe(),
                      (this.thumbClickable = !1))
                    : (this.thumbClickable = !0),
                  this.toggleThumbBar(),
                  this.thumbKeyPress());
            }),
            (e.prototype.build = function () {
              var e = this;
              this.setThumbMarkup(),
                this.manageActiveClassOnSlideChange(),
                this.$lgThumb.first().on("click.lg touchend.lg", function (t) {
                  var i = e.$LG(t.target);
                  i.hasAttribute("data-lg-item-id") &&
                    setTimeout(function () {
                      if (e.thumbClickable && !e.core.lgBusy) {
                        var t = parseInt(i.attr("data-lg-item-id"));
                        e.core.slide(t, !1, !0, !1);
                      }
                    }, 50);
                }),
                this.core.LGel.on(mn + ".thumb", function (t) {
                  var i = t.detail.index;
                  e.animateThumb(i);
                }),
                this.core.LGel.on(gn + ".thumb", function () {
                  e.thumbOuterWidth = e.core.outer.get().offsetWidth;
                }),
                this.core.LGel.on(fn + ".thumb", function () {
                  e.rebuildThumbnails();
                }),
                this.core.LGel.on(hn + ".thumb", function () {
                  e.core.lgOpened &&
                    setTimeout(function () {
                      (e.thumbOuterWidth = e.core.outer.get().offsetWidth),
                        e.animateThumb(e.core.index),
                        (e.thumbOuterWidth = e.core.outer.get().offsetWidth);
                    }, 50);
                });
            }),
            (e.prototype.setThumbMarkup = function () {
              var e = "lg-thumb-outer ";
              this.settings.alignThumbnails &&
                (e += "lg-thumb-align-" + this.settings.alignThumbnails);
              var t =
                '<div class="' +
                e +
                '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
              this.core.outer.addClass("lg-has-thumb"),
                ".lg-components" === this.settings.appendThumbnailsTo
                  ? this.core.$lgComponents.append(t)
                  : this.core.outer.append(t),
                (this.$thumbOuter = this.core.outer
                  .find(".lg-thumb-outer")
                  .first()),
                (this.$lgThumb = this.core.outer.find(".lg-thumb").first()),
                this.settings.animateThumb &&
                  this.core.outer
                    .find(".lg-thumb")
                    .css("transition-duration", this.core.settings.speed + "ms")
                    .css("width", this.thumbTotalWidth + "px")
                    .css("position", "relative"),
                this.setThumbItemHtml(this.core.galleryItems);
            }),
            (e.prototype.enableThumbDrag = function () {
              var e = this,
                t = {
                  cords: { startX: 0, endX: 0 },
                  isMoved: !1,
                  newTranslateX: 0,
                  startTime: new Date(),
                  endTime: new Date(),
                  touchMoveTime: 0,
                },
                i = !1;
              this.$thumbOuter.addClass("lg-grab"),
                this.core.outer
                  .find(".lg-thumb")
                  .first()
                  .on("mousedown.lg.thumb", function (s) {
                    e.thumbTotalWidth > e.thumbOuterWidth &&
                      (s.preventDefault(),
                      (t.cords.startX = s.pageX),
                      (t.startTime = new Date()),
                      (e.thumbClickable = !1),
                      (i = !0),
                      (e.core.outer.get().scrollLeft += 1),
                      (e.core.outer.get().scrollLeft -= 1),
                      e.$thumbOuter
                        .removeClass("lg-grab")
                        .addClass("lg-grabbing"));
                  }),
                this.$LG(window).on(
                  "mousemove.lg.thumb.global" + this.core.lgId,
                  function (s) {
                    e.core.lgOpened &&
                      i &&
                      ((t.cords.endX = s.pageX), (t = e.onThumbTouchMove(t)));
                  }
                ),
                this.$LG(window).on(
                  "mouseup.lg.thumb.global" + this.core.lgId,
                  function () {
                    e.core.lgOpened &&
                      (t.isMoved
                        ? (t = e.onThumbTouchEnd(t))
                        : (e.thumbClickable = !0),
                      i &&
                        ((i = !1),
                        e.$thumbOuter
                          .removeClass("lg-grabbing")
                          .addClass("lg-grab")));
                  }
                );
            }),
            (e.prototype.enableThumbSwipe = function () {
              var e = this,
                t = {
                  cords: { startX: 0, endX: 0 },
                  isMoved: !1,
                  newTranslateX: 0,
                  startTime: new Date(),
                  endTime: new Date(),
                  touchMoveTime: 0,
                };
              this.$lgThumb.on("touchstart.lg", function (i) {
                e.thumbTotalWidth > e.thumbOuterWidth &&
                  (i.preventDefault(),
                  (t.cords.startX = i.targetTouches[0].pageX),
                  (e.thumbClickable = !1),
                  (t.startTime = new Date()));
              }),
                this.$lgThumb.on("touchmove.lg", function (i) {
                  e.thumbTotalWidth > e.thumbOuterWidth &&
                    (i.preventDefault(),
                    (t.cords.endX = i.targetTouches[0].pageX),
                    (t = e.onThumbTouchMove(t)));
                }),
                this.$lgThumb.on("touchend.lg", function () {
                  t.isMoved
                    ? (t = e.onThumbTouchEnd(t))
                    : (e.thumbClickable = !0);
                });
            }),
            (e.prototype.rebuildThumbnails = function () {
              var e = this;
              this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),
                setTimeout(function () {
                  (e.thumbTotalWidth =
                    e.core.galleryItems.length *
                    (e.settings.thumbWidth + e.settings.thumbMargin)),
                    e.$lgThumb.css("width", e.thumbTotalWidth + "px"),
                    e.$lgThumb.empty(),
                    e.setThumbItemHtml(e.core.galleryItems),
                    e.animateThumb(e.core.index);
                }, 50),
                setTimeout(function () {
                  e.$thumbOuter.removeClass("lg-rebuilding-thumbnails");
                }, 200);
            }),
            (e.prototype.setTranslate = function (e) {
              this.$lgThumb.css(
                "transform",
                "translate3d(-" + e + "px, 0px, 0px)"
              );
            }),
            (e.prototype.getPossibleTransformX = function (e) {
              return (
                e > this.thumbTotalWidth - this.thumbOuterWidth &&
                  (e = this.thumbTotalWidth - this.thumbOuterWidth),
                e < 0 && (e = 0),
                e
              );
            }),
            (e.prototype.animateThumb = function (e) {
              if (
                (this.$lgThumb.css(
                  "transition-duration",
                  this.core.settings.speed + "ms"
                ),
                this.settings.animateThumb)
              ) {
                var t = 0;
                switch (this.settings.currentPagerPosition) {
                  case "left":
                    t = 0;
                    break;
                  case "middle":
                    t = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                    break;
                  case "right":
                    t = this.thumbOuterWidth - this.settings.thumbWidth;
                }
                (this.translateX =
                  (this.settings.thumbWidth + this.settings.thumbMargin) * e -
                  1 -
                  t),
                  this.translateX >
                    this.thumbTotalWidth - this.thumbOuterWidth &&
                    (this.translateX =
                      this.thumbTotalWidth - this.thumbOuterWidth),
                  this.translateX < 0 && (this.translateX = 0),
                  this.setTranslate(this.translateX);
              }
            }),
            (e.prototype.onThumbTouchMove = function (e) {
              return (
                (e.newTranslateX = this.translateX),
                (e.isMoved = !0),
                (e.touchMoveTime = new Date().valueOf()),
                (e.newTranslateX -= e.cords.endX - e.cords.startX),
                (e.newTranslateX = this.getPossibleTransformX(e.newTranslateX)),
                this.setTranslate(e.newTranslateX),
                this.$thumbOuter.addClass("lg-dragging"),
                e
              );
            }),
            (e.prototype.onThumbTouchEnd = function (e) {
              (e.isMoved = !1),
                (e.endTime = new Date()),
                this.$thumbOuter.removeClass("lg-dragging");
              var t = e.endTime.valueOf() - e.startTime.valueOf(),
                i = e.cords.endX - e.cords.startX,
                s = Math.abs(i) / t;
              return (
                s > 0.15 && e.endTime.valueOf() - e.touchMoveTime < 30
                  ? ((s += 1) > 2 && (s += 1),
                    (s += s * (Math.abs(i) / this.thumbOuterWidth)),
                    this.$lgThumb.css(
                      "transition-duration",
                      Math.min(s - 1, 2) + "settings"
                    ),
                    (i *= s),
                    (this.translateX = this.getPossibleTransformX(
                      this.translateX - i
                    )),
                    this.setTranslate(this.translateX))
                  : (this.translateX = e.newTranslateX),
                Math.abs(e.cords.endX - e.cords.startX) <
                  this.settings.thumbnailSwipeThreshold &&
                  (this.thumbClickable = !0),
                e
              );
            }),
            (e.prototype.getThumbHtml = function (e, t) {
              var i,
                s = this.core.galleryItems[t].__slideVideoInfo || {};
              return (
                (i =
                  s.youtube && this.settings.loadYouTubeThumbnail
                    ? "//img.youtube.com/vi/" +
                      s.youtube[1] +
                      "/" +
                      this.settings.youTubeThumbSize +
                      ".jpg"
                    : e),
                '<div data-lg-item-id="' +
                  t +
                  '" class="lg-thumb-item ' +
                  (t === this.core.index ? " active" : "") +
                  '" \n        style="width:' +
                  this.settings.thumbWidth +
                  "px; height: " +
                  this.settings.thumbHeight +
                  ";\n            margin-right: " +
                  this.settings.thumbMargin +
                  'px;">\n            <img data-lg-item-id="' +
                  t +
                  '" src="' +
                  i +
                  '" />\n        </div>'
              );
            }),
            (e.prototype.getThumbItemHtml = function (e) {
              for (var t = "", i = 0; i < e.length; i++)
                t += this.getThumbHtml(e[i].thumb, i);
              return t;
            }),
            (e.prototype.setThumbItemHtml = function (e) {
              var t = this.getThumbItemHtml(e);
              this.$lgThumb.html(t);
            }),
            (e.prototype.setAnimateThumbStyles = function () {
              this.settings.animateThumb &&
                this.core.outer.addClass("lg-animate-thumb");
            }),
            (e.prototype.manageActiveClassOnSlideChange = function () {
              var e = this;
              this.core.LGel.on(mn + ".thumb", function (t) {
                var i = e.core.outer.find(".lg-thumb-item"),
                  s = t.detail.index;
                i.removeClass("active"), i.eq(s).addClass("active");
              });
            }),
            (e.prototype.toggleThumbBar = function () {
              var e = this;
              this.settings.toggleThumb &&
                (this.core.outer.addClass("lg-can-toggle"),
                this.core.$toolbar.append(
                  '<button type="button" aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>'
                ),
                this.core.outer
                  .find(".lg-toggle-thumb")
                  .first()
                  .on("click.lg", function () {
                    e.core.outer.toggleClass("lg-components-open");
                  }));
            }),
            (e.prototype.thumbKeyPress = function () {
              var e = this;
              this.$LG(window).on(
                "keydown.lg.thumb.global" + this.core.lgId,
                function (t) {
                  e.core.lgOpened &&
                    e.settings.toggleThumb &&
                    (38 === t.keyCode
                      ? (t.preventDefault(),
                        e.core.outer.addClass("lg-components-open"))
                      : 40 === t.keyCode &&
                        (t.preventDefault(),
                        e.core.outer.removeClass("lg-components-open")));
                }
              );
            }),
            (e.prototype.destroy = function () {
              this.settings.thumbnail &&
                (this.$LG(window).off(".lg.thumb.global" + this.core.lgId),
                this.core.LGel.off(".lg.thumb"),
                this.core.LGel.off(".thumb"),
                this.$thumbOuter.remove(),
                this.core.outer.removeClass("lg-has-thumb"));
            }),
            e
          );
        })();
      const bn = vn,
        yn = document.querySelectorAll("[data-gallery]");
      yn.length &&
        yn.forEach((e) => {
          dn(e, {
            plugins: [bn],
            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
            speed: 500,
          });
        });
      window.localStorage;
      const xn = document.querySelectorAll("[data-goal-relative]"),
        wn = document.querySelectorAll("[data-goal]"),
        Sn = document.querySelectorAll("[data-goal-subject]");
      for (let e = 0; e < xn.length; e++)
        Array.from(xn[e].children).forEach(function (e) {
          e.addEventListener("click", En), e.addEventListener("click", Cn);
        });
      document.querySelector("[data-tabs-titles]");
      function En() {
        if (1 != this.dataset.goal && 1 != this.dataset.goalSubject)
          if (2 != this.dataset.goal && 2 != this.dataset.goalSubject)
            if (3 != this.dataset.goal && 3 != this.dataset.goalSubject);
            else {
              for (let e = 0; e < wn.length; e++)
                wn[e].classList.remove("_filter-active");
              for (let e = 0; e < xn.length; e++)
                xn[e].children[2].classList.add("_filter-active");
            }
          else {
            for (let e = 0; e < wn.length; e++)
              wn[e].classList.remove("_filter-active");
            for (let e = 0; e < xn.length; e++)
              xn[e].children[1].classList.add("_filter-active");
          }
        else {
          for (let e = 0; e < wn.length; e++)
            wn[e].classList.remove("_filter-active");
          for (let e = 0; e < xn.length; e++)
            xn[e].children[0].classList.add("_filter-active");
        }
      }
      function Cn() {
        if (1 != this.dataset.goal && 1 != this.dataset.goalSubject)
          if (2 != this.dataset.goal && 2 != this.dataset.goalSubject)
            if (3 != this.dataset.goal && 3 != this.dataset.goalSubject);
            else {
              for (let e = 0; e < Sn.length; e++)
                Sn[e].classList.add("_tab-disabled");
              for (let e = 4; e < 6; e++)
                Sn[e].classList.remove("_tab-disabled");
            }
          else {
            for (let e = 0; e < Sn.length; e++)
              Sn[e].classList.add("_tab-disabled");
            for (let e = 3; e < 4; e++) Sn[e].classList.remove("_tab-disabled");
          }
        else {
          for (let e = 0; e < Sn.length; e++)
            Sn[e].classList.add("_tab-disabled");
          for (let e = 0; e < 3; e++) Sn[e].classList.remove("_tab-disabled");
        }
      }
      Array.from(Sn).forEach(function (e) {
        e.addEventListener("click", Cn), e.addEventListener("click", En);
      });
      const Tn = document.querySelectorAll("[data-short-name]"),
        On = {
          mobile: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
          desctop: [
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
            "Воскресенье",
          ],
        };
      window.addEventListener(
        "resize",
        function () {
          if (Tn)
            for (let e = 0; e < Tn.length; e++)
              window.innerWidth < 768
                ? (Tn[e].innerHTML = On.mobile[e])
                : (Tn[e].innerHTML = On.desctop[e]);
        },
        !1
      ),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              o &&
                (a(), document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        (function () {
          const e = document.querySelectorAll("[data-spollers]");
          if (e.length > 0) {
            const t = Array.from(e).filter(function (e, t, i) {
              return !e.dataset.spollers.split(",")[0];
            });
            t.length && n(t);
            let i = u(e, "spollers");
            function n(e, t = !1) {
              e.forEach((e) => {
                (e = t ? e.item : e),
                  t.matches || !t
                    ? (e.classList.add("_spoller-init"),
                      o(e),
                      e.addEventListener("click", a))
                    : (e.classList.remove("_spoller-init"),
                      o(e, !1),
                      e.removeEventListener("click", a));
              });
            }
            function o(e, t = !0) {
              const i = e.querySelectorAll("[data-spoller]");
              i.length > 0 &&
                i.forEach((e) => {
                  t
                    ? (e.removeAttribute("tabindex"),
                      e.classList.contains("_spoller-active") ||
                        (e.nextElementSibling.hidden = !0))
                    : (e.setAttribute("tabindex", "-1"),
                      (e.nextElementSibling.hidden = !1));
                });
            }
            function a(e) {
              const t = e.target;
              if (t.closest("[data-spoller]")) {
                const i = t.closest("[data-spoller]"),
                  s = i.closest("[data-spollers]"),
                  n = !!s.hasAttribute("data-one-spoller");
                s.querySelectorAll("._slide").length ||
                  (n && !i.classList.contains("_spoller-active") && l(s),
                  i.classList.toggle("_spoller-active"),
                  r(i.nextElementSibling, 500)),
                  e.preventDefault();
              }
            }
            function l(e) {
              const t = e.querySelector("[data-spoller]._spoller-active");
              t &&
                (t.classList.remove("_spoller-active"),
                s(t.nextElementSibling, 500));
            }
            i &&
              i.length &&
              i.forEach((e) => {
                e.matchMedia.addEventListener("change", function () {
                  n(e.itemsArray, e.matchMedia);
                }),
                  n(e.itemsArray, e.matchMedia);
              });
          }
        })(),
        (function () {
          const e = document.querySelectorAll("[data-tabs]");
          let t = [];
          if (e.length > 0) {
            const s = location.hash.replace("#", "");
            s.startsWith("tab-") && (t = s.replace("tab-", "").split("-")),
              e.forEach((e, i) => {
                e.classList.add("_tab-init"),
                  e.setAttribute("data-tabs-index", i),
                  e.addEventListener("click", r),
                  (function (e) {
                    const i = e.querySelectorAll("[data-tabs-titles]>*"),
                      s = e.querySelectorAll("[data-tabs-body]>*"),
                      n = e.dataset.tabsIndex,
                      r = t[0] == n;
                    if (r) {
                      e.querySelector(
                        "[data-tabs-titles]>._tab-active"
                      ).classList.remove("_tab-active");
                    }
                    s.length > 0 &&
                      s.forEach((e, s) => {
                        i[s].setAttribute("data-tabs-title", ""),
                          e.setAttribute("data-tabs-item", ""),
                          r && s == t[1] && i[s].classList.add("_tab-active"),
                          (e.hidden = !i[s].classList.contains("_tab-active"));
                      });
                  })(e);
              });
            let n = u(e, "tabs");
            n &&
              n.length &&
              n.forEach((e) => {
                e.matchMedia.addEventListener("change", function () {
                  i(e.itemsArray, e.matchMedia);
                }),
                  i(e.itemsArray, e.matchMedia);
              });
          }
          function i(e, t) {
            e.forEach((e) => {
              const i = (e = e.item).querySelector("[data-tabs-titles]"),
                s = e.querySelectorAll("[data-tabs-title]"),
                n = e.querySelector("[data-tabs-body]");
              e.querySelectorAll("[data-tabs-item]").forEach((r, o) => {
                t.matches
                  ? (n.append(s[o]),
                    n.append(r),
                    e.classList.add("_tab-spoller"))
                  : (i.append(s[o]), e.classList.remove("_tab-spoller"));
              });
            });
          }
          function r(e) {
            const t = e.target;
            if (t.closest("[data-tabs-title]")) {
              const i = t.closest("[data-tabs-title]"),
                r = i.closest("[data-tabs]");
              if (
                !i.classList.contains("_tab-active") &&
                !r.querySelectorAll("._slide").length
              ) {
                const e = r.querySelector("[data-tabs-title]._tab-active");
                e && e.classList.remove("_tab-active"),
                  i.classList.add("_tab-active"),
                  (function (e) {
                    const t = e.querySelectorAll("[data-tabs-title]"),
                      i = e.querySelectorAll("[data-tabs-item]"),
                      r = e.dataset.tabsIndex,
                      o = (function (e) {
                        if (e.hasAttribute("data-tabs-animate"))
                          return e.dataset.tabsAnimate > 0
                            ? e.dataset.tabsAnimate
                            : 500;
                      })(e);
                    i.length > 0 &&
                      i.forEach((e, i) => {
                        t[i].classList.contains("_tab-active")
                          ? (o ? n(e, o) : (e.hidden = !1),
                            e.closest(".popup") ||
                              (location.hash = `tab-${r}-${i}`))
                          : o
                          ? s(e, o)
                          : (e.hidden = !0);
                      });
                  })(r);
              }
              e.preventDefault();
            }
          }
        })(),
        new t({}),
        (function (e) {
          const t = document.forms;
          if (t.length)
            for (const e of t)
              e.addEventListener("submit", function (e) {
                i(e.target, e);
              }),
                e.addEventListener("reset", function (e) {
                  const t = e.target;
                  g.formClean(t);
                });
          async function i(t, i) {
            if (0 === (e ? g.getErrors(t) : 0)) {
              if (t.hasAttribute("data-ajax")) {
                i.preventDefault();
                const e = t.getAttribute("action")
                    ? t.getAttribute("action").trim()
                    : "#",
                  n = t.getAttribute("method")
                    ? t.getAttribute("method").trim()
                    : "GET",
                  r = new FormData(t);
                t.classList.add("_sending");
                const o = await fetch(e, { method: n, body: r });
                if (o.ok) {
                  await o.json();
                  t.classList.remove("_sending"), s(t);
                } else alert("Ошибка"), t.classList.remove("_sending");
              } else t.hasAttribute("data-dev") && (i.preventDefault(), s(t));
            } else {
              i.preventDefault();
              const e = t.querySelector("._form-error");
              e && t.hasAttribute("data-goto-error") && p(e, !0, 1e3);
            }
          }
          function s(e) {
            document.dispatchEvent(
              new CustomEvent("formSent", { detail: { form: e } })
            ),
              g.formClean(e),
              d(`[Формы]: ${"Форма отправлена!"}`);
          }
        })(!0),
        (f.selectModule = new h({})),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const i = t.closest("[data-goto]"),
                  s = i.dataset.goto ? i.dataset.goto : "",
                  n = !!i.hasAttribute("data-goto-header"),
                  r = i.dataset.gotoSpeed ? i.dataset.gotoSpeed : "500";
                p(s, n, r), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                i = t.target;
              if ("navigator" === i.dataset.watch) {
                const e = i.id,
                  s =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? s && s.classList.add("_navigator-active")
                  : s && s.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })();
    })();
})();
