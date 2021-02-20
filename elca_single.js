! function(e) {
    "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define("hljs", [], function() {
        return window.hljs
    }))
}(function(a) {
    function h(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function _(e, t) {
        var r = e && e.exec(t);
        return r && 0 == r.index
    }

    function s(e) {
        return /^(no-?highlight|plain|text)$/i.test(e)
    }

    function d(e, t) {
        var r, a = {};
        for (r in e) a[r] = e[r];
        if (t)
            for (r in t) a[r] = t[r];
        return a
    }

    function c(e) {
        var n = [];
        return function e(t, r) {
            for (var a = t.firstChild; a; a = a.nextSibling) 3 == a.nodeType ? r += a.nodeValue.length : 1 == a.nodeType && (n.push({
                event: "start",
                offset: r,
                node: a
            }), r = e(a, r), a.nodeName.toLowerCase().match(/br|hr|img|input/) || n.push({
                event: "stop",
                offset: r,
                node: a
            }));
            return r
        }(e, 0), n
    }

    function v(c) {
        function o(e) {
            return e && e.source || e
        }

        function l(e, t) {
            return new RegExp(o(e), "m" + (c.cI ? "i" : "") + (t ? "g" : ""))
        }! function t(r, e) {
            if (!r.compiled) {
                if (r.compiled = !0, r.k = r.k || r.bK, r.k) {
                    function a(t, e) {
                        c.cI && (e = e.toLowerCase()), e.split(" ").forEach(function(e) {
                            e = e.split("|"), n[e[0]] = [t, e[1] ? Number(e[1]) : 1]
                        })
                    }
                    var n = {};
                    "string" == typeof r.k ? a("keyword", r.k) : Object.keys(r.k).forEach(function(e) {
                        a(e, r.k[e])
                    }), r.k = n
                }
                r.lR = l(r.l || /\b\w+\b/, !0), e && (r.bK && (r.b = "\\b(" + r.bK.split(" ").join("|") + ")\\b"), r.b || (r.b = /\B|\b/), r.bR = l(r.b), r.e || r.eW || (r.e = /\B|\b/), r.e && (r.eR = l(r.e)), r.tE = o(r.e) || "", r.eW && e.tE && (r.tE += (r.e ? "|" : "") + e.tE)), r.i && (r.iR = l(r.i)), void 0 === r.r && (r.r = 1), r.c || (r.c = []);
                var i = [];
                r.c.forEach(function(t) {
                    t.v ? t.v.forEach(function(e) {
                        i.push(d(t, e))
                    }) : i.push("self" == t ? r : t)
                }), r.c = i, r.c.forEach(function(e) {
                    t(e, r)
                }), r.starts && t(r.starts, e);
                var s = r.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([r.tE, r.i]).map(o).filter(Boolean);
                r.t = s.length ? l(s.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }(c)
    }

    function y(e, t, n, r) {
        function i(e, t, r, a) {
            return a = '<span class="' + (a ? "" : N.classPrefix), (a += e + '">') + t + (r ? "" : "</span>")
        }

        function s() {
            var e;
            if (void 0 !== l.sL)
                if ((e = "string" == typeof l.sL) && !x[l.sL]) e = h(p);
                else {
                    var t = e ? y(l.sL, p, !0, d[l.sL]) : w(p, l.sL.length ? l.sL : void 0);
                    0 < l.r && (b += t.r), e && (d[l.sL] = t.top), e = i(t.language, t.value, !1, !0)
                }
            else if (l.k) {
                e = "";
                var r = 0;
                for (l.lR.lastIndex = 0, t = l.lR.exec(p); t;) {
                    e += h(p.substr(r, t.index - r)), r = l;
                    var a = t;
                    a = o.cI ? a[0].toLowerCase() : a[0], (r = r.k.hasOwnProperty(a) && r.k[a]) ? (b += r[1], e += i(r[0], h(t[0]))) : e += h(t[0]), r = l.lR.lastIndex, t = l.lR.exec(p)
                }
                e += h(p.substr(r))
            } else e = h(p);
            return e
        }

        function c(e, t) {
            var r = e.cN ? i(e.cN, "", !0) : "";
            p = e.rB ? (u += r, "") : e.eB ? (u += h(t) + r, "") : (u += r, t), l = Object.create(e, {
                parent: {
                    value: l
                }
            })
        }

        function a(e, t) {
            if (p += e, void 0 === t) return u += s(), 0;
            e: {
                for (var r = l, a = 0; a < r.c.length; a++)
                    if (_(r.c[a].bR, t)) {
                        r = r.c[a];
                        break e
                    } r = void 0
            }
            if (r) return u += s(), c(r, t), r.rB ? 0 : t.length;
            if (r = function e(t, r) {
                    if (_(t.eR, r)) {
                        for (; t.endsParent && t.parent;) t = t.parent;
                        return t
                    }
                    return t.eW ? e(t.parent, r) : void 0
                }(l, t)) {
                for ((a = l).rE || a.eE || (p += t), u += s(); l.cN && (u += "</span>"), b += l.r, (l = l.parent) != r.parent;);
                return a.eE && (u += h(t)), p = "", r.starts && c(r.starts, ""), a.rE ? 0 : t.length
            }
            if (!n && _(l.iR, t)) throw Error('Illegal lexeme "' + t + '" for mode "' + (l.cN || "<unnamed>") + '"');
            return p += t, t.length || 1
        }
        var o = k(e);
        if (!o) throw Error('Unknown language: "' + e + '"');
        v(o);
        var l = r || o,
            d = {},
            u = "";
        for (r = l; r != o; r = r.parent) r.cN && (u = i(r.cN, "", !0) + u);
        var p = "",
            b = 0;
        try {
            for (var m, f, g = 0; l.t.lastIndex = g, m = l.t.exec(t);) f = a(t.substr(g, m.index - g), m[0]), g = m.index + f;
            for (a(t.substr(g)), r = l; r.parent; r = r.parent) r.cN && (u += "</span>");
            return {
                r: b,
                value: u,
                language: e,
                top: l
            }
        } catch (e) {
            if (-1 != e.message.indexOf("Illegal")) return {
                r: 0,
                value: h(t)
            };
            throw e
        }
    }

    function w(r, e) {
        e = e || N.languages || Object.keys(x);
        var a = {
                r: 0,
                value: h(r)
            },
            n = a;
        return e.forEach(function(e) {
            if (k(e)) {
                var t = y(e, r, !1);
                t.language = e, t.r > n.r && (n = t), t.r > a.r && (n = a, a = t)
            }
        }), n.language && (a.second_best = n), a
    }

    function o(e) {
        return N.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, t) {
            return t.replace(/\t/g, N.tabReplace)
        })), N.useBR && (e = e.replace(/\n/g, "<br>")), e
    }

    function t(e) {
        var t;
        e: {
            var r, a = e.className + " ";
            if (a += e.parentNode ? e.parentNode.className : "", t = /\blang(?:uage)?-([\w-]+)\b/i.exec(a)) t = k(t[1]) ? t[1] : "no-highlight";
            else {
                for (t = 0, r = (a = a.split(/\s+/)).length; t < r; t++)
                    if (k(a[t]) || s(a[t])) {
                        t = a[t];
                        break e
                    } t = void 0
            }
        }
        if (!s(t)) {
            var n;
            if (N.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : n = e, r = n.textContent, a = t ? y(t, r, !0) : w(r), (n = c(n)).length) {
                var i = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                i.innerHTML = a.value, a.value = function(e, t, r) {
                    function a() {
                        return e.length && t.length ? e[0].offset != t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" == t[0].event ? e : t : e.length ? e : t
                    }

                    function n(e) {
                        o += "<" + e.nodeName.toLowerCase() + Array.prototype.map.call(e.attributes, function(e) {
                            return " " + e.nodeName + '="' + h(e.value) + '"'
                        }).join("") + ">"
                    }

                    function i(e) {
                        o += "</" + e.nodeName.toLowerCase() + ">"
                    }

                    function s(e) {
                        ("start" == e.event ? n : i)(e.node)
                    }
                    for (var c = 0, o = "", l = []; e.length || t.length;) {
                        var d = a();
                        if (o += h(r.substr(c, d[0].offset - c)), c = d[0].offset, d == e) {
                            for (l.reverse().forEach(i); s(d.splice(0, 1)[0]), (d = a()) == e && d.length && d[0].offset == c;);
                            l.reverse().forEach(n)
                        } else "start" == d[0].event ? l.push(d[0].node) : l.pop(), s(d.splice(0, 1)[0])
                    }
                    return o + h(r.substr(c))
                }(n, c(i), r)
            }
            a.value = o(a.value), e.innerHTML = a.value, n = e.className, t = t ? l[t] : a.language, r = [n.trim()], n.match(/\bhljs\b/) || r.push("hljs"), -1 === n.indexOf(t) && r.push(t), n = r.join(" ").trim(), e.className = n, e.result = {
                language: a.language,
                re: a.r
            }, a.second_best && (e.second_best = {
                language: a.second_best.language,
                re: a.second_best.r
            })
        }
    }

    function r() {
        if (!r.called) {
            r.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, t)
        }
    }

    function k(e) {
        return e = (e || "").toLowerCase(), x[e] || x[l[e]]
    }
    var N = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        },
        x = {},
        l = {};
    return a.highlight = y, a.highlightAuto = w, a.fixMarkup = o, a.highlightBlock = t, a.configure = function(e) {
        N = d(N, e)
    }, a.initHighlighting = r, a.initHighlightingOnLoad = function() {
        addEventListener("DOMContentLoaded", r, !1), addEventListener("load", r, !1)
    }, a.registerLanguage = function(t, e) {
        var r = x[t] = e(a);
        r.aliases && r.aliases.forEach(function(e) {
            l[e] = t
        })
    }, a.listLanguages = function() {
        return Object.keys(x)
    }, a.getLanguage = k, a.inherit = d, a.IR = "[a-zA-Z]\\w*", a.UIR = "[a-zA-Z_]\\w*", a.NR = "\\b\\d+(\\.\\d+)?", a.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", a.BNR = "\\b(0b[01]+)", a.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", a.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, a.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [a.BE]
    }, a.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [a.BE]
    }, a.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
    }, a.C = function(e, t, r) {
        return (e = a.inherit({
            cN: "comment",
            b: e,
            e: t,
            c: []
        }, r || {})).c.push(a.PWM), e.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }), e
    }, a.CLCM = a.C("//", "$"), a.CBCM = a.C("/\\*", "\\*/"), a.HCM = a.C("#", "$"), a.NM = {
        cN: "number",
        b: a.NR,
        r: 0
    }, a.CNM = {
        cN: "number",
        b: a.CNR,
        r: 0
    }, a.BNM = {
        cN: "number",
        b: a.BNR,
        r: 0
    }, a.CSSNM = {
        cN: "number",
        b: a.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, a.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [a.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [a.BE]
        }]
    }, a.TM = {
        cN: "title",
        b: a.IR,
        r: 0
    }, a.UTM = {
        cN: "title",
        b: a.UIR,
        r: 0
    }, a.registerLanguage("apache", function(e) {
        var t = {
            cN: "number",
            b: "[\\$%]\\d+"
        };
        return {
            aliases: ["apacheconf"],
            cI: !0,
            c: [e.HCM, {
                cN: "tag",
                b: "</?",
                e: ">"
            }, {
                cN: "keyword",
                b: /\w+/,
                r: 0,
                k: {
                    common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                },
                starts: {
                    e: /$/,
                    r: 0,
                    k: {
                        literal: "on off all"
                    },
                    c: [{
                        cN: "sqbracket",
                        b: "\\s\\[",
                        e: "\\]$"
                    }, {
                        cN: "cbracket",
                        b: "[\\$%]\\{",
                        e: "\\}",
                        c: ["self", t]
                    }, t, e.QSM]
                }
            }],
            i: /\S/
        }
    }), a.registerLanguage("bash", function(e) {
        var t = {
                cN: "variable",
                v: [{
                    b: /\$[\w\d#@][\w\d_]*/
                }, {
                    b: /\$\{(.*?)}/
                }]
            },
            r = {
                cN: "string",
                b: /"/,
                e: /"/,
                c: [e.BE, t, {
                    cN: "variable",
                    b: /\$\(/,
                    e: /\)/,
                    c: [e.BE]
                }]
            };
        return {
            aliases: ["sh", "zsh"],
            l: /-?[a-z\.]+/,
            k: {
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            c: [{
                cN: "shebang",
                b: /^#![^\n]+sh\s*$/,
                r: 10
            }, {
                cN: "function",
                b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                rB: !0,
                c: [e.inherit(e.TM, {
                    b: /\w[\w\d_]*/
                })],
                r: 0
            }, e.HCM, e.NM, r, {
                cN: "string",
                b: /'/,
                e: /'/
            }, t]
        }
    }), a.registerLanguage("coffeescript", function(e) {
        var t = {
                keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
                literal: "true false null undefined yes no on off",
                built_in: "npm require console print module global window document"
            },
            r = {
                cN: "subst",
                b: /#\{/,
                e: /}/,
                k: t
            },
            a = [e.BNM, e.inherit(e.CNM, {
                starts: {
                    e: "(\\s*/)?",
                    r: 0
                }
            }), {
                cN: "string",
                v: [{
                    b: /'''/,
                    e: /'''/,
                    c: [e.BE]
                }, {
                    b: /'/,
                    e: /'/,
                    c: [e.BE]
                }, {
                    b: /"""/,
                    e: /"""/,
                    c: [e.BE, r]
                }, {
                    b: /"/,
                    e: /"/,
                    c: [e.BE, r]
                }]
            }, {
                cN: "regexp",
                v: [{
                    b: "///",
                    e: "///",
                    c: [r, e.HCM]
                }, {
                    b: "//[gim]*",
                    r: 0
                }, {
                    b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
                }]
            }, {
                cN: "property",
                b: "@[A-Za-z$_][0-9A-Za-z$_]*"
            }, {
                b: "`",
                e: "`",
                eB: !0,
                eE: !0,
                sL: "javascript"
            }];
        r.c = a, r = e.inherit(e.TM, {
            b: "[A-Za-z$_][0-9A-Za-z$_]*"
        });
        var n = {
            cN: "params",
            b: "\\([^\\(]",
            rB: !0,
            c: [{
                b: /\(/,
                e: /\)/,
                k: t,
                c: ["self"].concat(a)
            }]
        };
        return {
            aliases: ["coffee", "cson", "iced"],
            k: t,
            i: /\/\*/,
            c: a.concat([e.C("###", "###"), e.HCM, {
                cN: "function",
                b: "^\\s*[A-Za-z$_][0-9A-Za-z$_]*\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>",
                e: "[-=]>",
                rB: !0,
                c: [r, n]
            }, {
                b: /[:\(,=]\s*/,
                r: 0,
                c: [{
                    cN: "function",
                    b: "(\\(.*\\))?\\s*\\B[-=]>",
                    e: "[-=]>",
                    rB: !0,
                    c: [n]
                }]
            }, {
                cN: "class",
                bK: "class",
                e: "$",
                i: /[:="\[\]]/,
                c: [{
                    bK: "extends",
                    eW: !0,
                    i: /[:="\[\]]/,
                    c: [r]
                }, r]
            }, {
                cN: "attribute",
                b: "[A-Za-z$_][0-9A-Za-z$_]*:",
                e: ":",
                rB: !0,
                rE: !0,
                r: 0
            }])
        }
    }), a.registerLanguage("cpp", function(e) {
        var t = {
                cN: "keyword",
                b: "\\b[a-z\\d_]*_t\\b"
            },
            r = {
                cN: "string",
                v: [e.inherit(e.QSM, {
                    b: '((u8?|U)|L)?"'
                }), {
                    b: '(u8?|U)?R"',
                    e: '"',
                    c: [e.BE]
                }, {
                    b: "'\\\\?.",
                    e: "'",
                    i: "."
                }]
            },
            a = {
                cN: "number",
                v: [{
                    b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
                }, {
                    b: e.CNR
                }]
            },
            n = {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line pragma ifdef ifndef",
                c: [{
                    b: /\\\n/,
                    r: 0
                }, {
                    bK: "include",
                    e: "$",
                    c: [r, {
                        cN: "string",
                        b: "<",
                        e: ">",
                        i: "\\n"
                    }]
                }, r, a, e.CLCM, e.CBCM]
            },
            i = e.IR + "\\s*\\(",
            s = {
                keyword: "int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
                built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf",
                literal: "true false nullptr NULL"
            };
        return {
            aliases: "c cc h c++ h++ hpp".split(" "),
            k: s,
            i: "</",
            c: [t, e.CLCM, e.CBCM, a, r, n, {
                b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                e: ">",
                k: s,
                c: ["self", t]
            }, {
                b: e.IR + "::",
                k: s
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "(" + e.IR + "[\\*&\\s]+)+" + i,
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: s,
                i: /[^\w\s\*&]/,
                c: [{
                    b: i,
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: s,
                    r: 0,
                    c: [e.CLCM, e.CBCM, r, a]
                }, e.CLCM, e.CBCM, n]
            }]
        }
    }), a.registerLanguage("cs", function(e) {
        var t = e.IR + "(<" + e.IR + ">)?";
        return {
            aliases: ["csharp"],
            k: "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
            i: /::/,
            c: [e.C("///", "$", {
                rB: !0,
                c: [{
                    cN: "xmlDocTag",
                    v: [{
                        b: "///",
                        r: 0
                    }, {
                        b: "\x3c!--|--\x3e"
                    }, {
                        b: "</?",
                        e: ">"
                    }]
                }]
            }), e.CLCM, e.CBCM, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line region endregion pragma checksum"
            }, {
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            }, e.ASM, e.QSM, e.CNM, {
                bK: "class interface",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [e.TM, e.CLCM, e.CBCM]
            }, {
                bK: "namespace",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [{
                    cN: "title",
                    b: "[a-zA-Z](\\.?\\w)*",
                    r: 0
                }, e.CLCM, e.CBCM]
            }, {
                bK: "new return throw await",
                r: 0
            }, {
                cN: "function",
                b: "(" + t + "\\s+)+" + e.IR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
                c: [{
                    b: e.IR + "\\s*\\(",
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    k: "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }]
        }
    }), a.registerLanguage("css", function(e) {
        var t = {
            cN: "function",
            b: "[a-zA-Z-][a-zA-Z0-9_-]*\\(",
            rB: !0,
            eE: !0,
            e: "\\("
        };
        return {
            cI: !0,
            i: /[=\/|'\$]/,
            c: [e.CBCM, {
                cN: "id",
                b: /#[A-Za-z0-9_-]+/
            }, {
                cN: "class",
                b: /\.[A-Za-z0-9_-]+/
            }, {
                cN: "attr_selector",
                b: /\[/,
                e: /\]/,
                i: "$"
            }, {
                cN: "pseudo",
                b: /:(:)?[a-zA-Z0-9_\-\+\(\)"']+/
            }, {
                cN: "at_rule",
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                cN: "at_rule",
                b: "@",
                e: "[{;]",
                c: [{
                    cN: "keyword",
                    b: /\S+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    r: 0,
                    c: [t, e.ASM, e.QSM, e.CSSNM]
                }]
            }, {
                cN: "tag",
                b: "[a-zA-Z-][a-zA-Z0-9_-]*",
                r: 0
            }, {
                cN: "rules",
                b: "{",
                e: "}",
                i: /\S/,
                c: [e.CBCM, {
                    cN: "rule",
                    b: /[A-Z_\.\-]+\s*:/,
                    rB: !0,
                    e: ";",
                    eW: !0,
                    c: [{
                        cN: "attribute",
                        b: /\S/,
                        e: ":",
                        eE: !0,
                        starts: {
                            cN: "value",
                            eW: !0,
                            eE: !0,
                            c: [t, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                                cN: "hexcolor",
                                b: "#[0-9A-Fa-f]+"
                            }, {
                                cN: "important",
                                b: "!important"
                            }]
                        }
                    }]
                }]
            }]
        }
    }), a.registerLanguage("diff", function(e) {
        return {
            aliases: ["patch"],
            c: [{
                cN: "chunk",
                r: 10,
                v: [{
                    b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
                }, {
                    b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
                }, {
                    b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
                }]
            }, {
                cN: "header",
                v: [{
                    b: /Index: /,
                    e: /$/
                }, {
                    b: /=====/,
                    e: /=====$/
                }, {
                    b: /^\-\-\-/,
                    e: /$/
                }, {
                    b: /^\*{3} /,
                    e: /$/
                }, {
                    b: /^\+\+\+/,
                    e: /$/
                }, {
                    b: /\*{5}/,
                    e: /\*{5}$/
                }]
            }, {
                cN: "addition",
                b: "^\\+",
                e: "$"
            }, {
                cN: "deletion",
                b: "^\\-",
                e: "$"
            }, {
                cN: "change",
                b: "^\\!",
                e: "$"
            }]
        }
    }), a.registerLanguage("http", function(e) {
        return {
            aliases: ["https"],
            i: "\\S",
            c: [{
                cN: "status",
                b: "^HTTP/[0-9\\.]+",
                e: "$",
                c: [{
                    cN: "number",
                    b: "\\b\\d{3}\\b"
                }]
            }, {
                cN: "request",
                b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
                rB: !0,
                e: "$",
                c: [{
                    cN: "string",
                    b: " ",
                    e: " ",
                    eB: !0,
                    eE: !0
                }]
            }, {
                cN: "attribute",
                b: "^\\w",
                e: ": ",
                eE: !0,
                i: "\\n|\\s|=",
                starts: {
                    cN: "string",
                    e: "$"
                }
            }, {
                b: "\\n\\n",
                starts: {
                    sL: [],
                    eW: !0
                }
            }]
        }
    }), a.registerLanguage("ini", function(e) {
        var t = {
            cN: "string",
            c: [e.BE],
            v: [{
                b: "'''",
                e: "'''",
                r: 10
            }, {
                b: '"""',
                e: '"""',
                r: 10
            }, {
                b: '"',
                e: '"'
            }, {
                b: "'",
                e: "'"
            }]
        };
        return {
            aliases: ["toml"],
            cI: !0,
            i: /\S/,
            c: [e.C(";", "$"), e.HCM, {
                cN: "title",
                b: /^\s*\[+/,
                e: /\]+/
            }, {
                cN: "setting",
                b: /^[a-z0-9\[\]_-]+\s*=\s*/,
                e: "$",
                c: [{
                    cN: "value",
                    eW: !0,
                    k: "on off true false yes no",
                    c: [{
                        cN: "variable",
                        v: [{
                            b: /\$[\w\d"][\w\d_]*/
                        }, {
                            b: /\$\{(.*?)}/
                        }]
                    }, t, {
                        cN: "number",
                        b: /([\+\-]+)?[\d]+_[\d_]+/
                    }, e.NM],
                    r: 0
                }]
            }]
        }
    }), a.registerLanguage("java", function(e) {
        var t = e.UIR + "(<" + e.UIR + ">)?";
        return {
            aliases: ["jsp"],
            k: "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
            i: /<\/|#/,
            c: [e.C("/\\*\\*", "\\*/", {
                r: 0,
                c: [{
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }]
            }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
                cN: "class",
                bK: "class interface",
                e: /[{;=]/,
                eE: !0,
                k: "class interface",
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
                c: [{
                    b: e.UIR + "\\s*\\(",
                    rB: !0,
                    r: 0,
                    c: [e.UTM]
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }, {
                cN: "number",
                b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
                r: 0
            }, {
                cN: "annotation",
                b: "@[A-Za-z]+"
            }]
        }
    }), a.registerLanguage("javascript", function(e) {
        return {
            aliases: ["js"],
            k: {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            },
            c: [{
                cN: "pi",
                r: 10,
                b: /^\s*['"]use (strict|asm)['"]/
            }, e.ASM, e.QSM, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE, {
                    cN: "subst",
                    b: "\\$\\{",
                    e: "\\}"
                }]
            }, e.CLCM, e.CBCM, {
                cN: "number",
                v: [{
                    b: "\\b(0[bB][01]+)"
                }, {
                    b: "\\b(0[oO][0-7]+)"
                }, {
                    b: e.CNR
                }],
                r: 0
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM, {
                    b: /</,
                    e: />\s*[);\]]/,
                    r: 0,
                    sL: "xml"
                }],
                r: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    c: [e.CLCM, e.CBCM]
                }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, {
                b: "\\." + e.IR,
                r: 0
            }, {
                bK: "import",
                e: "[;$]",
                k: "import from as",
                c: [e.ASM, e.QSM]
            }, {
                cN: "class",
                bK: "class",
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends"
                }, e.UTM]
            }],
            i: /#/
        }
    }), a.registerLanguage("json", function(e) {
        var t = {
                literal: "true false null"
            },
            r = [e.QSM, e.CNM],
            a = {
                cN: "value",
                e: ",",
                eW: !0,
                eE: !0,
                c: r,
                k: t
            },
            n = {
                b: "{",
                e: "}",
                c: [{
                    cN: "attribute",
                    b: '\\s*"',
                    e: '"\\s*:\\s*',
                    eB: !0,
                    eE: !0,
                    c: [e.BE],
                    i: "\\n",
                    starts: a
                }],
                i: "\\S"
            };
        return e = {
            b: "\\[",
            e: "\\]",
            c: [e.inherit(a, {
                cN: null
            })],
            i: "\\S"
        }, r.splice(r.length, 0, n, e), {
            c: r,
            k: t,
            i: "\\S"
        }
    }), a.registerLanguage("makefile", function(e) {
        var t = {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [e.BE]
        };
        return {
            aliases: ["mk", "mak"],
            c: [e.HCM, {
                b: /^\w+\s*\W*=/,
                rB: !0,
                r: 0,
                starts: {
                    cN: "constant",
                    e: /\s*\W*=/,
                    eE: !0,
                    starts: {
                        e: /$/,
                        r: 0,
                        c: [t]
                    }
                }
            }, {
                cN: "title",
                b: /^[\w]+:\s*$/
            }, {
                cN: "phony",
                b: /^\.PHONY:/,
                e: /$/,
                k: ".PHONY",
                l: /[\.\w]+/
            }, {
                b: /^\t+/,
                e: /$/,
                r: 0,
                c: [e.QSM, t]
            }]
        }
    }), a.registerLanguage("xml", function(e) {
        var t = {
                b: /<\?(php)?(?!\w)/,
                e: /\?>/,
                sL: "php"
            },
            r = {
                eW: !0,
                i: /</,
                r: 0,
                c: [t, {
                    cN: "attribute",
                    b: "[A-Za-z0-9\\._:-]+",
                    r: 0
                }, {
                    b: "=",
                    r: 0,
                    c: [{
                        cN: "value",
                        c: [t],
                        v: [{
                            b: /"/,
                            e: /"/
                        }, {
                            b: /'/,
                            e: /'/
                        }, {
                            b: /[^\s\/>]+/
                        }]
                    }]
                }]
            };
        return {
            aliases: "html xhtml rss atom xsl plist".split(" "),
            cI: !0,
            c: [{
                cN: "doctype",
                b: "<!DOCTYPE",
                e: ">",
                r: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, e.C("\x3c!--", "--\x3e", {
                r: 10
            }), {
                cN: "cdata",
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                cN: "tag",
                b: "<style(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "style"
                },
                c: [r],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: "css"
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "script"
                },
                c: [r],
                starts: {
                    e: "<\/script>",
                    rE: !0,
                    sL: ["actionscript", "javascript", "handlebars"]
                }
            }, t, {
                cN: "pi",
                b: /<\?\w+/,
                e: /\?>/,
                r: 10
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "title",
                    b: /[^ \/><\n\t]+/,
                    r: 0
                }, r]
            }]
        }
    }), a.registerLanguage("markdown", function(e) {
        return {
            aliases: ["md", "mkdown", "mkd"],
            c: [{
                cN: "header",
                v: [{
                    b: "^#{1,6}",
                    e: "$"
                }, {
                    b: "^.+?\\n[=-]{2,}$"
                }]
            }, {
                b: "<",
                e: ">",
                sL: "xml",
                r: 0
            }, {
                cN: "bullet",
                b: "^([*+-]|(\\d+\\.))\\s+"
            }, {
                cN: "strong",
                b: "[*_]{2}.+?[*_]{2}"
            }, {
                cN: "emphasis",
                v: [{
                    b: "\\*.+?\\*"
                }, {
                    b: "_.+?_",
                    r: 0
                }]
            }, {
                cN: "blockquote",
                b: "^>\\s+",
                e: "$"
            }, {
                cN: "code",
                v: [{
                    b: "`.+?`"
                }, {
                    b: "^( {4}|\t)",
                    e: "$",
                    r: 0
                }]
            }, {
                cN: "horizontal_rule",
                b: "^[-\\*]{3,}",
                e: "$"
            }, {
                b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
                rB: !0,
                c: [{
                    cN: "link_label",
                    b: "\\[",
                    e: "\\]",
                    eB: !0,
                    rE: !0,
                    r: 0
                }, {
                    cN: "link_url",
                    b: "\\]\\(",
                    e: "\\)",
                    eB: !0,
                    eE: !0
                }, {
                    cN: "link_reference",
                    b: "\\]\\[",
                    e: "\\]",
                    eB: !0,
                    eE: !0
                }],
                r: 10
            }, {
                b: "^\\[.+\\]:",
                rB: !0,
                c: [{
                    cN: "link_reference",
                    b: "\\[",
                    e: "\\]:",
                    eB: !0,
                    eE: !0,
                    starts: {
                        cN: "link_url",
                        e: "$"
                    }
                }]
            }]
        }
    }), a.registerLanguage("nginx", function(e) {
        var t = {
            cN: "variable",
            v: [{
                b: /\$\d+/
            }, {
                b: /\$\{/,
                e: /}/
            }, {
                b: "[\\$\\@]" + e.UIR
            }]
        };
        return {
            aliases: ["nginxconf"],
            c: [e.HCM, {
                b: e.UIR + "\\s",
                e: ";|{",
                rB: !0,
                c: [{
                    cN: "title",
                    b: e.UIR,
                    starts: {
                        eW: !0,
                        l: "[a-z/_]+",
                        k: {
                            built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
                        },
                        r: 0,
                        i: "=>",
                        c: [e.HCM, {
                            cN: "string",
                            c: [e.BE, t],
                            v: [{
                                b: /"/,
                                e: /"/
                            }, {
                                b: /'/,
                                e: /'/
                            }]
                        }, {
                            cN: "url",
                            b: "([a-z]+):/",
                            e: "\\s",
                            eW: !0,
                            eE: !0,
                            c: [t]
                        }, {
                            cN: "regexp",
                            c: [e.BE, t],
                            v: [{
                                b: "\\s\\^",
                                e: "\\s|{|;",
                                rE: !0
                            }, {
                                b: "~\\*?\\s+",
                                e: "\\s|{|;",
                                rE: !0
                            }, {
                                b: "\\*(\\.[a-z\\-]+)+"
                            }, {
                                b: "([a-z\\-]+\\.)+\\*"
                            }]
                        }, {
                            cN: "number",
                            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
                        }, {
                            cN: "number",
                            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
                            r: 0
                        }, t]
                    }
                }],
                r: 0
            }],
            i: "[^\\s\\}]"
        }
    }), a.registerLanguage("objectivec", function(e) {
        var t = /[a-zA-Z@][a-zA-Z0-9_]*/;
        return {
            aliases: ["mm", "objc", "obj-c"],
            k: {
                keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
                literal: "false true FALSE TRUE nil YES NO NULL",
                built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
            },
            l: t,
            i: "</",
            c: [{
                cN: "built_in",
                b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+"
            }, e.CLCM, e.CBCM, e.CNM, e.QSM, {
                cN: "string",
                v: [{
                    b: '@"',
                    e: '"',
                    i: "\\n",
                    c: [e.BE]
                }, {
                    b: "'",
                    e: "[^\\\\]'",
                    i: "[^\\\\][^']"
                }]
            }, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                c: [{
                    cN: "title",
                    v: [{
                        b: '"',
                        e: '"'
                    }, {
                        b: "<",
                        e: ">"
                    }]
                }]
            }, {
                cN: "class",
                b: "(@interface|@class|@protocol|@implementation)\\b",
                e: "({|$)",
                eE: !0,
                k: "@interface @class @protocol @implementation",
                l: t,
                c: [e.UTM]
            }, {
                cN: "variable",
                b: "\\." + e.UIR,
                r: 0
            }]
        }
    }), a.registerLanguage("perl", function(e) {
        var t = {
                cN: "subst",
                b: "[$@]\\{",
                e: "\\}",
                k: "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
            },
            r = {
                b: "->{",
                e: "}"
            },
            a = {
                cN: "variable",
                v: [{
                    b: /\$\d/
                }, {
                    b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
                }, {
                    b: /[\$%@][^\s\w{]/,
                    r: 0
                }]
            },
            n = [e.BE, t, a];
        return e = [a, e.HCM, e.C("^\\=\\w", "\\=cut", {
            eW: !0
        }), r, {
            cN: "string",
            c: n,
            v: [{
                b: "q[qwxr]?\\s*\\(",
                e: "\\)",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\[",
                e: "\\]",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\{",
                e: "\\}",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\|",
                e: "\\|",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\<",
                e: "\\>",
                r: 5
            }, {
                b: "qw\\s+q",
                e: "q",
                r: 5
            }, {
                b: "'",
                e: "'",
                c: [e.BE]
            }, {
                b: '"',
                e: '"'
            }, {
                b: "`",
                e: "`",
                c: [e.BE]
            }, {
                b: "{\\w+}",
                c: [],
                r: 0
            }, {
                b: "-?\\w+\\s*\\=\\>",
                c: [],
                r: 0
            }]
        }, {
            cN: "number",
            b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            r: 0
        }, {
            b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
            k: "split return print reverse grep",
            r: 0,
            c: [e.HCM, {
                cN: "regexp",
                b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                r: 10
            }, {
                cN: "regexp",
                b: "(m|qr)?/",
                e: "/[a-z]*",
                c: [e.BE],
                r: 0
            }]
        }, {
            cN: "sub",
            bK: "sub",
            e: "(\\s*\\(.*?\\))?[;{]",
            r: 5
        }, {
            cN: "operator",
            b: "-\\w\\b",
            r: 0
        }, {
            b: "^__DATA__$",
            e: "^__END__$",
            sL: "mojolicious",
            c: [{
                b: "^@@.*",
                e: "$",
                cN: "comment"
            }]
        }], t.c = e, {
            aliases: ["pl"],
            k: "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
            c: r.c = e
        }
    }), a.registerLanguage("php", function(e) {
        var t = {
                cN: "variable",
                b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
            },
            r = {
                cN: "preprocessor",
                b: /<\?(php)?|\?>/
            },
            a = {
                cN: "string",
                c: [e.BE, r],
                v: [{
                    b: 'b"',
                    e: '"'
                }, {
                    b: "b'",
                    e: "'"
                }, e.inherit(e.ASM, {
                    i: null
                }), e.inherit(e.QSM, {
                    i: null
                })]
            },
            n = {
                v: [e.BNM, e.CNM]
            };
        return {
            aliases: ["php3", "php4", "php5", "php6"],
            cI: !0,
            k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
            c: [e.CLCM, e.HCM, e.C("/\\*", "\\*/", {
                c: [{
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }, r]
            }), e.C("__halt_compiler.+?;", !1, {
                eW: !0,
                k: "__halt_compiler",
                l: e.UIR
            }), {
                cN: "string",
                b: /<<<['"]?\w+['"]?$/,
                e: /^\w+;?$/,
                c: [e.BE, {
                    cN: "subst",
                    v: [{
                        b: /\$\w+/
                    }, {
                        b: /\{\$/,
                        e: /\}/
                    }]
                }]
            }, r, t, {
                b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                cN: "function",
                bK: "function",
                e: /[;{]/,
                eE: !0,
                i: "\\$|\\[|%",
                c: [e.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    c: ["self", t, e.CBCM, a, n]
                }]
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                eE: !0,
                i: /[:\(\$"]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "namespace",
                e: ";",
                i: /[\.']/,
                c: [e.UTM]
            }, {
                bK: "use",
                e: ";",
                c: [e.UTM]
            }, {
                b: "=>"
            }, a, n]
        }
    }), a.registerLanguage("python", function(e) {
        var t = {
                cN: "prompt",
                b: /^(>>>|\.\.\.) /
            },
            r = {
                cN: "string",
                c: [e.BE],
                v: [{
                    b: /(u|b)?r?'''/,
                    e: /'''/,
                    c: [t],
                    r: 10
                }, {
                    b: /(u|b)?r?"""/,
                    e: /"""/,
                    c: [t],
                    r: 10
                }, {
                    b: /(u|r|ur)'/,
                    e: /'/,
                    r: 10
                }, {
                    b: /(u|r|ur)"/,
                    e: /"/,
                    r: 10
                }, {
                    b: /(b|br)'/,
                    e: /'/
                }, {
                    b: /(b|br)"/,
                    e: /"/
                }, e.ASM, e.QSM]
            },
            a = {
                cN: "number",
                r: 0,
                v: [{
                    b: e.BNR + "[lLjJ]?"
                }, {
                    b: "\\b(0o[0-7]+)[lLjJ]?"
                }, {
                    b: e.CNR + "[lLjJ]?"
                }]
            };
        return {
            aliases: ["py", "gyp"],
            k: {
                keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
                built_in: "Ellipsis NotImplemented"
            },
            i: /(<\/|->|\?)/,
            c: [t, a, r, e.HCM, {
                v: [{
                    cN: "function",
                    bK: "def",
                    r: 10
                }, {
                    cN: "class",
                    bK: "class"
                }],
                e: /:/,
                i: /[${=;\n,]/,
                c: [e.UTM, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    c: ["self", t, a, r]
                }]
            }, {
                cN: "decorator",
                b: /^[\t ]*@/,
                e: /$/
            }, {
                b: /\b(print|exec)\(/
            }]
        }
    }), a.registerLanguage("ruby", function(e) {
        var t = {
                cN: "doctag",
                b: "@[A-Za-z]+"
            },
            r = {
                cN: "value",
                b: "#<",
                e: ">"
            };
        t = [e.C("#", "$", {
            c: [t]
        }), e.C("^\\=begin", "^\\=end", {
            c: [t],
            r: 10
        }), e.C("^__END__", "\\n$")];
        var a = {
                cN: "subst",
                b: "#\\{",
                e: "}",
                k: "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor"
            },
            n = {
                cN: "string",
                c: [e.BE, a],
                v: [{
                    b: /'/,
                    e: /'/
                }, {
                    b: /"/,
                    e: /"/
                }, {
                    b: /`/,
                    e: /`/
                }, {
                    b: "%[qQwWx]?\\(",
                    e: "\\)"
                }, {
                    b: "%[qQwWx]?\\[",
                    e: "\\]"
                }, {
                    b: "%[qQwWx]?{",
                    e: "}"
                }, {
                    b: "%[qQwWx]?<",
                    e: ">"
                }, {
                    b: "%[qQwWx]?/",
                    e: "/"
                }, {
                    b: "%[qQwWx]?%",
                    e: "%"
                }, {
                    b: "%[qQwWx]?-",
                    e: "-"
                }, {
                    b: "%[qQwWx]?\\|",
                    e: "\\|"
                }, {
                    b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
                }]
            },
            i = {
                cN: "params",
                b: "\\(",
                e: "\\)",
                k: "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor"
            };
        return e = [n, r, {
            cN: "class",
            bK: "class module",
            e: "$|;",
            i: /=/,
            c: [e.inherit(e.TM, {
                b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
            }), {
                cN: "inheritance",
                b: "<\\s*",
                c: [{
                    cN: "parent",
                    b: "(" + e.IR + "::)?" + e.IR
                }]
            }].concat(t)
        }, {
            cN: "function",
            bK: "def",
            e: "$|;",
            c: [e.inherit(e.TM, {
                b: "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
            }), i].concat(t)
        }, {
            cN: "constant",
            b: "(::)?(\\b[A-Z]\\w*(::)?)+",
            r: 0
        }, {
            cN: "symbol",
            b: e.UIR + "(\\!|\\?)?:",
            r: 0
        }, {
            cN: "symbol",
            b: ":",
            c: [n, {
                b: "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
            }],
            r: 0
        }, {
            cN: "number",
            b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            r: 0
        }, {
            cN: "variable",
            b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
        }, {
            b: "(" + e.RSR + ")\\s*",
            c: [r, {
                cN: "regexp",
                c: [e.BE, a],
                i: /\n/,
                v: [{
                    b: "/",
                    e: "/[a-z]*"
                }, {
                    b: "%r{",
                    e: "}[a-z]*"
                }, {
                    b: "%r\\(",
                    e: "\\)[a-z]*"
                }, {
                    b: "%r!",
                    e: "![a-z]*"
                }, {
                    b: "%r\\[",
                    e: "\\][a-z]*"
                }]
            }].concat(t),
            r: 0
        }].concat(t), a.c = e, i.c = e, {
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            k: "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
            i: /\/\*/,
            c: t.concat([{
                b: /^\s*=>/,
                cN: "status",
                starts: {
                    e: "$",
                    c: e
                }
            }, {
                cN: "prompt",
                b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
                starts: {
                    e: "$",
                    c: e
                }
            }]).concat(e)
        }
    }), a.registerLanguage("sql", function(e) {
        var t = e.C("--", "$");
        return {
            cI: !0,
            i: /[<>{}*]/,
            c: [{
                cN: "operator",
                bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
                e: /;/,
                eW: !0,
                k: {
                    keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                    literal: "true false null",
                    built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
                },
                c: [{
                    cN: "string",
                    b: "'",
                    e: "'",
                    c: [e.BE, {
                        b: "''"
                    }]
                }, {
                    cN: "string",
                    b: '"',
                    e: '"',
                    c: [e.BE, {
                        b: '""'
                    }]
                }, {
                    cN: "string",
                    b: "`",
                    e: "`",
                    c: [e.BE]
                }, e.CNM, e.CBCM, t]
            }, e.CBCM, t]
        }
    }), a
});

function adBlockNotDetected() {}

var postBody = document.getElementById('post-body'),
    adBlockContent = '<div id="post-body"><blockquote><strong style="display: flex;align-items: center;"><svg width="24" height="24" viewBox="0 0 24 24" style="fill:currentColor;margin-right: 10px;"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"></path></svg>Ad-Block Terdeteksi</strong><p>Mohon maaf, kami mendeteksi bahwa anda telah mengaktifkan Ad-Blocker. Untuk itu, kami berharap agar anda menonaktifkannya.</p><p>Dengan menonaktifkan Ad-Blocker, anda telah membantu kami dalam mengembangkan Website ini. Terimakasih</p></blockquote></div>';

function adBlockDetected() {
    postBody.innerHTML = adBlockContent;
};

var importFAB;
document.addEventListener("DOMContentLoaded", function(e) {
    document.querySelectorAll("pre.hl").forEach(function(e) {
        hljs.highlightBlock(e)
    })
}), "undefined" != typeof fuckAdBlock || "undefined" != typeof FuckAdBlock ? adBlockDetected() : ((importFAB = document.createElement("script")).onload = function() {
    fuckAdBlock.onDetected(adBlockDetected), fuckAdBlock.onNotDetected(adBlockNotDetected)
}, importFAB.onerror = function() {
    adBlockDetected()
}, importFAB.integrity = "sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=", importFAB.crossOrigin = "anonymous", importFAB.src = "https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js", document.head.appendChild(importFAB));

function aFunction() {
    var e, t, n;
    document.querySelector("section#comments") && ((e = document.createElement("script")).async = !0, e.src = "//www.blogger.com/static/v1/jsbin/3858658042-comment_from_post_iframe.js", e.onload = function() {
        BLOG_CMT_createIframe("<data:post.appRpcRelayPath/>"), document.querySelector("#top-continue a").setAttribute("href", "javascript:void(0);"), document.querySelector(".comment-reply").setAttribute("href", "javascript:void(0);");
        var e, t = document.getElementById("comment-editor"),
            n = t.src,
            o = document.querySelectorAll("ol .comment-reply"),
            c = document.getElementsByClassName("comment-form")[0],
            a = o.length,
            d = document.getElementById("top-continue");
        for (i = 0; i < a; i++) ! function(t, n, o, c) {
            t.addEventListener("click", function() {
                var e = t.getAttribute("data-comment-id");
                document.querySelector("#c" + e + " > .comment-replybox-single").appendChild(n), o.src = c + "&parentID=" + e, d.classList.remove("hidden"), d && document.querySelector("#top-continue a").classList.remove("hidden")
            })
        }(o[i], c, t, n);
        d && (d.classList.add("hidden"), j = d.getElementsByTagName("a")[0], j.removeAttribute("class"), (e = document.querySelector("#top-continue > a")).addEventListener("click", function() {
            e.parentNode.appendChild(c), t.src = n, j.classList.add("hidden")
        }))
    }, document.getElementsByTagName("body")[0].appendChild(e), t = (e = document.querySelector("#comment-holder .loadmore")).getAttribute("data-published-min"), n = parseInt(t) + 1, f = e.getAttribute("data-post-id"), g = document.querySelector('link[rel="canonical').getAttribute("href"), e && t && (e.classList.contains("hidden") && e.classList.remove("hidden"), e.addEventListener("click", function() {
        var e = document.createElement("script");
        e.src = "//www.blogger.com/static/v1/widgets/2195516358-widgets.js", e.async = "true", e.onload = function() {
            _WidgetManager._Init("//www.blogger.com/rearrange?blogID=4156644495655521536", "", "4156644495655521536"), _WidgetManager._SetDataContext([{
                data: {
                    dynamicViewsCommentsSrc: "//www.blogblog.com/dynamicviews/f0c16c7f605505d1/js/comments.js"
                }
            }]), _WidgetManager._RegisterWidget("_BlogView", new _WidgetInfo("Blog1", "mainbar", document.getElementById("Blog1"), {
                useNgc: !0
            }, "displayModeFull")), h = document.createElement("script"), h.async = !0, h.src = g + "?action=getComments&widgetId=Blog1&widgetType=Blog&responseType=js&postId=" + f + "&publishedMin=" + n + "&xssi_token=AOuZoY4tR91GIm4atCD_-XhxENqtw38CgQ%3A1594209309080", document.getElementsByTagName("body")[0].appendChild(h)
        }, document.getElementsByTagName("body")[0].appendChild(e)
    })))
}

/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).mediumZoom = t()
}(this, (function() {
    "use strict";
    var e = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
            }
            return e
        },
        t = function(e) {
            return "IMG" === e.tagName
        },
        o = function(e) {
            return e && 1 === e.nodeType
        },
        n = function(e) {
            return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase()
        },
        i = function(e) {
            try {
                return Array.isArray(e) ? e.filter(t) : function(e) {
                    return NodeList.prototype.isPrototypeOf(e)
                }(e) ? [].slice.call(e).filter(t) : o(e) ? [e].filter(t) : "string" == typeof e ? [].slice.call(document.querySelectorAll(e)).filter(t) : []
            } catch (e) {
                throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")
            }
        },
        r = function(e) {
            var t = document.createElement("div");
            return t.classList.add("medium-zoom-overlay"), t.style.background = e, t
        },
        d = function(e) {
            var t = e.getBoundingClientRect(),
                o = t.top,
                n = t.left,
                i = t.width,
                r = t.height,
                d = e.cloneNode(),
                m = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                a = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            return d.removeAttribute("id"), d.style.position = "absolute", d.style.top = o + m + "px", d.style.left = n + a + "px", d.style.width = i + "px", d.style.height = r + "px", d.style.transform = "", d
        },
        m = function(t, o) {
            var n = e({
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, o);
            if ("function" == typeof window.CustomEvent) return new CustomEvent(t, n);
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), i
        };
    return function(e, t) {
            void 0 === t && (t = {});
            var o = t.insertAt;
            if (e && "undefined" != typeof document) {
                var n = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("style");
                i.type = "text/css", "top" === o && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
            }
        }(".medium-zoom-overlay{z-index: 999;position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{z-index: 1000;position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),
        function t(a) {
            var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                c = window.Promise || function(e) {
                    function t() {}
                    e(t, t)
                },
                u = function(e) {
                    var t = e.target;
                    t !== N ? -1 !== O.indexOf(t) && w({
                        target: t
                    }) : E()
                },
                s = function() {
                    if (!A && T.original) {
                        var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                        Math.abs(k - e) > S.scrollOffset && setTimeout(E, 150)
                    }
                },
                f = function(e) {
                    var t = e.key || e.keyCode;
                    "Escape" !== t && "Esc" !== t && 27 !== t || E()
                },
                p = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t;
                    if (t.background && (N.style.background = t.background), t.container && t.container instanceof Object && (n.container = e({}, S.container, t.container)), t.template) {
                        var i = o(t.template) ? t.template : document.querySelector(t.template);
                        n.template = i
                    }
                    return S = e({}, S, n), O.forEach((function(e) {
                        e.dispatchEvent(m("medium-zoom:update", {
                            detail: {
                                zoom: j
                            }
                        }))
                    })), j
                },
                g = function() {
                    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return t(e({}, S, o))
                },
                v = function() {
                    for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    var n = t.reduce((function(e, t) {
                        return [].concat(e, i(t))
                    }), []);
                    return n.filter((function(e) {
                        return -1 === O.indexOf(e)
                    })).forEach((function(e) {
                        O.push(e), e.classList.add("medium-zoom-image")
                    })), x.forEach((function(e) {
                        var t = e.type,
                            o = e.listener,
                            i = e.options;
                        n.forEach((function(e) {
                            e.addEventListener(t, o, i)
                        }))
                    })), j
                },
                h = function() {
                    for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    T.zoomed && E();
                    var n = t.length > 0 ? t.reduce((function(e, t) {
                        return [].concat(e, i(t))
                    }), []) : O;
                    return n.forEach((function(e) {
                        e.classList.remove("medium-zoom-image"), e.dispatchEvent(m("medium-zoom:detach", {
                            detail: {
                                zoom: j
                            }
                        }))
                    })), O = O.filter((function(e) {
                        return -1 === n.indexOf(e)
                    })), j
                },
                z = function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return O.forEach((function(n) {
                        n.addEventListener("medium-zoom:" + e, t, o)
                    })), x.push({
                        type: "medium-zoom:" + e,
                        listener: t,
                        options: o
                    }), j
                },
                y = function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return O.forEach((function(n) {
                        n.removeEventListener("medium-zoom:" + e, t, o)
                    })), x = x.filter((function(o) {
                        return !(o.type === "medium-zoom:" + e && o.listener.toString() === t.toString())
                    })), j
                },
                b = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = t.target,
                        r = function() {
                            var t = {
                                    width: document.documentElement.clientWidth,
                                    height: document.documentElement.clientHeight,
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0
                                },
                                i = void 0,
                                r = void 0;
                            if (S.container)
                                if (S.container instanceof Object) i = (t = e({}, t, S.container)).width - t.left - t.right - 2 * S.margin, r = t.height - t.top - t.bottom - 2 * S.margin;
                                else {
                                    var d = (o(S.container) ? S.container : document.querySelector(S.container)).getBoundingClientRect(),
                                        m = d.width,
                                        a = d.height,
                                        l = d.left,
                                        c = d.top;
                                    t = e({}, t, {
                                        width: m,
                                        height: a,
                                        left: l,
                                        top: c
                                    })
                                } i = i || t.width - 2 * S.margin, r = r || t.height - 2 * S.margin;
                            var u = T.zoomedHd || T.original,
                                s = n(u) ? i : u.naturalWidth || i,
                                f = n(u) ? r : u.naturalHeight || r,
                                p = u.getBoundingClientRect(),
                                g = p.top,
                                v = p.left,
                                h = p.width,
                                z = p.height,
                                y = Math.min(s, i) / h,
                                b = Math.min(f, r) / z,
                                E = Math.min(y, b),
                                w = "scale(" + E + ") translate3d(" + ((i - h) / 2 - v + S.margin + t.left) / E + "px, " + ((r - z) / 2 - g + S.margin + t.top) / E + "px, 0)";
                            T.zoomed.style.transform = w, T.zoomedHd && (T.zoomedHd.style.transform = w)
                        };
                    return new c((function(e) {
                        if (i && -1 === O.indexOf(i)) e(j);
                        else {
                            if (T.zoomed) e(j);
                            else {
                                if (i) T.original = i;
                                else {
                                    if (!(O.length > 0)) return void e(j);
                                    var t = O;
                                    T.original = t[0]
                                }
                                if (T.original.dispatchEvent(m("medium-zoom:open", {
                                        detail: {
                                            zoom: j
                                        }
                                    })), k = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, A = !0, T.zoomed = d(T.original), document.body.appendChild(N), S.template) {
                                    var n = o(S.template) ? S.template : document.querySelector(S.template);
                                    T.template = document.createElement("div"), T.template.appendChild(n.content.cloneNode(!0)), document.body.appendChild(T.template)
                                }
                                if (document.body.appendChild(T.zoomed), window.requestAnimationFrame((function() {
                                        document.body.classList.add("medium-zoom--opened")
                                    })), T.original.classList.add("medium-zoom-image--hidden"), T.zoomed.classList.add("medium-zoom-image--opened"), T.zoomed.addEventListener("click", E), T.zoomed.addEventListener("transitionend", (function t() {
                                        A = !1, T.zoomed.removeEventListener("transitionend", t), T.original.dispatchEvent(m("medium-zoom:opened", {
                                            detail: {
                                                zoom: j
                                            }
                                        })), e(j)
                                    })), T.original.getAttribute("data-zoom-src")) {
                                    T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("srcset"), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.src = T.zoomed.getAttribute("data-zoom-src"), T.zoomedHd.onerror = function() {
                                        clearInterval(a), console.warn("Unable to reach the zoom image target " + T.zoomedHd.src), T.zoomedHd = null, r()
                                    };
                                    var a = setInterval((function() {
                                        T.zoomedHd.complete && (clearInterval(a), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", E), document.body.appendChild(T.zoomedHd), r())
                                    }), 10)
                                } else if (T.original.hasAttribute("srcset")) {
                                    T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.removeAttribute("loading");
                                    var l = T.zoomedHd.addEventListener("load", (function() {
                                        T.zoomedHd.removeEventListener("load", l), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", E), document.body.appendChild(T.zoomedHd), r()
                                    }))
                                } else r()
                            }
                        }
                    }))
                },
                E = function() {
                    return new c((function(e) {
                        if (!A && T.original) {
                            A = !0, document.body.classList.remove("medium-zoom--opened"), T.zoomed.style.transform = "", T.zoomedHd && (T.zoomedHd.style.transform = ""), T.template && (T.template.style.transition = "opacity 150ms", T.template.style.opacity = 0), T.original.dispatchEvent(m("medium-zoom:close", {
                                detail: {
                                    zoom: j
                                }
                            })), T.zoomed.addEventListener("transitionend", (function t() {
                                T.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(T.zoomed), T.zoomedHd && document.body.removeChild(T.zoomedHd), document.body.removeChild(N), T.zoomed.classList.remove("medium-zoom-image--opened"), T.template && document.body.removeChild(T.template), A = !1, T.zoomed.removeEventListener("transitionend", t), T.original.dispatchEvent(m("medium-zoom:closed", {
                                    detail: {
                                        zoom: j
                                    }
                                })), T.original = null, T.zoomed = null, T.zoomedHd = null, T.template = null, e(j)
                            }))
                        } else e(j)
                    }))
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.target;
                    return T.original ? E() : b({
                        target: t
                    })
                },
                L = function() {
                    return S
                },
                H = function() {
                    return O
                },
                C = function() {
                    return T.original
                },
                O = [],
                x = [],
                A = !1,
                k = 0,
                S = l,
                T = {
                    original: null,
                    zoomed: null,
                    zoomedHd: null,
                    template: null
                };
            "[object Object]" === Object.prototype.toString.call(a) ? S = a : (a || "string" == typeof a) && v(a), S = e({
                margin: 0,
                background: "#fff",
                scrollOffset: 40,
                container: null,
                template: null
            }, S);
            var N = r(S.background);
            document.addEventListener("click", u), document.addEventListener("keyup", f), document.addEventListener("scroll", s), window.addEventListener("resize", E);
            var j = {
                open: b,
                close: E,
                toggle: w,
                update: p,
                clone: g,
                attach: v,
                detach: h,
                on: z,
                off: y,
                getOptions: L,
                getImages: H,
                getZoomedImage: C
            };
            return j
        }
}));
mediumZoom('#post-body .separator img, #post-body img');

var toggleComment = document.querySelectorAll(['.show-comment-btn', '.comment-close', '.entry-comments-link']),
    tocButton = document.querySelector('#elcTOC'),
    postComment = document.querySelector('.blog-post-comments'),
    tocContent = document.querySelector('.modal-backdrop .title'),
    tocContainer = document.querySelector('.toc-here'),
    tocContainerElem = '<div class="tocshow scroll-button"><svg height="24" viewBox="0 0 24 24" width="24"><path d="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z"></path></svg></div>';

for (var z = 0; z < toggleComment.length; z++) {
    var elem = toggleComment[z];
    elem.onclick = function() {
        postComment.classList.toggle('active');
    };
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

tocContainer.innerHTML = tocContainerElem;

if (tocButton !== null && tocButton !== '') {
    var tocNode = tocButton.cloneNode(true);


    insertAfter(tocNode, tocContent);

    function tocShow() {
        document.querySelector(".modal-backdrop").classList.toggle("show")
    }

    function modalBackdrop() {
        document.querySelector(".modal-backdrop").classList.remove("show")
    }
}
