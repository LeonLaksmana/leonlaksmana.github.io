! function() {
    const e = document.getElementById("textContainer"),
        n = document.getElementById("line1"),
        t = document.getElementById("line2"),
        o = document.querySelectorAll(".popup-menu button"),
        d = document.getElementById("svgDefs"),
        s = document.getElementById("textPanel"),
        a = document.getElementById("togglePanelBtn"),
        r = document.getElementById("closePanelBtn"),
        i = document.getElementById("inputLine1"),
        h = document.getElementById("inputLine2"),
        f = document.getElementById("applyTextBtn"),
        c = document.getElementById("resetTextBtn"),
        l = document.getElementById("sizeRange"),
        u = document.getElementById("sizeDisplay"),
        g = document.getElementById("colorPreview"),
        w = document.getElementById("colorHex"),
        M = document.getElementById("colorPicker"),
        m = document.getElementById("colorSquare"),
        y = document.getElementById("hueBar"),
        N = document.getElementById("colorSelector"),
        x = document.getElementById("hueSelector");
    let p = {
            h: 0,
            s: 0,
            b: 0
        },
        v = "#000000",
        b = !1,
        E = null;
    const O = {
        "shadow-bottom-right": "shadow-bottom-right",
        "shadow-top-right": "shadow-top-right",
        "shadow-top-left": "shadow-top-left",
        "shadow-bottom-left": "shadow-bottom-left"
    };

    function B(e) {
        const n = e.toString(16);
        return 1 === n.length ? "0" + n : n
    }

    function L(e) {
        return n = function(e) {
            const n = e.h / 360,
                t = e.s / 100,
                o = e.b / 100,
                d = Math.floor(6 * n),
                s = 6 * n - d,
                a = o * (1 - t),
                r = o * (1 - s * t),
                i = o * (1 - (1 - s) * t);
            let h, f, c;
            switch (d % 6) {
                case 0:
                    h = o, f = i, c = a;
                    break;
                case 1:
                    h = r, f = o, c = a;
                    break;
                case 2:
                    h = a, f = o, c = i;
                    break;
                case 3:
                    h = a, f = r, c = o;
                    break;
                case 4:
                    h = i, f = a, c = o;
                    break;
                case 5:
                    h = o, f = a, c = r
            }
            return {
                r: Math.round(255 * h),
                g: Math.round(255 * f),
                b: Math.round(255 * c)
            }
        }(e), "#" + B(n.r) + B(n.g) + B(n.b);
        var n
    }

    function C(e) {
        const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return n ? {
            r: parseInt(n[1], 16),
            g: parseInt(n[2], 16),
            b: parseInt(n[3], 16)
        } : {
            r: 0,
            g: 0,
            b: 0
        }
    }

    function I(e) {
        const n = e.r / 255,
            t = e.g / 255,
            o = e.b / 255,
            d = Math.max(n, t, o),
            s = Math.min(n, t, o);
        let a, r, i = d;
        const h = d - s;
        if (r = 0 === d ? 0 : h / d, d === s) a = 0;
        else {
            switch (d) {
                case n:
                    a = (t - o) / h + (t < o ? 6 : 0);
                    break;
                case t:
                    a = (o - n) / h + 2;
                    break;
                case o:
                    a = (n - t) / h + 4
            }
            a /= 6
        }
        return {
            h: Math.round(360 * a),
            s: Math.round(100 * r),
            b: Math.round(100 * i)
        }
    }

    function S(n) {
        const t = C(n),
            o = `rgb(${t.r},${t.g},${t.b})`,
            s = `\n                    \x3c!-- 1. SHADOW BOTTOM-RIGHT --\x3e\n                    <filter id="shadow-bottom-right" x="-200%" y="-200%" width="500%" height="500%">\n                        <feFlood flood-color="${o}" result="color"/>\n                        <feComposite in="color" in2="SourceAlpha" operator="in" result="colored-text"/>\n                        <feGaussianBlur in="colored-text" stdDeviation="0.2" result="blurred"/>\n                        <feOffset in="blurred" dx="2" dy="2" result="shadow1"/>\n                        <feMerge result="shadow-chain">\n                            <feMergeNode in="colored-text"/>\n                            <feMergeNode in="shadow1"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain" dx="4" dy="4" result="shadow2"/>\n                        <feMerge result="shadow-chain2">\n                            <feMergeNode in="shadow-chain"/>\n                            <feMergeNode in="shadow2"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain2" dx="8" dy="8" result="shadow3"/>\n                        <feMerge result="shadow-chain3">\n                            <feMergeNode in="shadow-chain2"/>\n                            <feMergeNode in="shadow3"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain3" dx="16" dy="16" result="shadow4"/>\n                        <feMerge result="shadow-chain4">\n                            <feMergeNode in="shadow-chain3"/>\n                            <feMergeNode in="shadow4"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain4" dx="32" dy="32" result="shadow5"/>\n                        <feMerge result="shadow-chain5">\n                            <feMergeNode in="shadow-chain4"/>\n                            <feMergeNode in="shadow5"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain5" dx="64" dy="64" result="shadow6"/>\n                        <feMerge result="shadow-chain6">\n                            <feMergeNode in="shadow-chain5"/>\n                            <feMergeNode in="shadow6"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain6" dx="128" dy="128" result="shadow7"/>\n                        <feMerge result="shadow-chain7">\n                            <feMergeNode in="shadow-chain6"/>\n                            <feMergeNode in="shadow7"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain7" dx="256" dy="256" result="shadow8"/>\n                        <feMerge result="shadow-chain8">\n                            <feMergeNode in="shadow-chain7"/>\n                            <feMergeNode in="shadow8"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain8" dx="512" dy="512" result="shadow9"/>\n                        <feMerge result="shadow-chain9">\n                            <feMergeNode in="shadow-chain8"/>\n                            <feMergeNode in="shadow9"/>\n                        </feMerge>\n                        <feMerge>\n                            <feMergeNode in="shadow-chain9"/>\n                            <feMergeNode in="SourceGraphic"/>\n                        </feMerge>\n                    </filter>\n\n                    \x3c!-- 2. SHADOW TOP-RIGHT --\x3e\n                    <filter id="shadow-top-right" x="-200%" y="-200%" width="500%" height="500%">\n                        <feFlood flood-color="${o}" result="color"/>\n                        <feComposite in="color" in2="SourceAlpha" operator="in" result="colored-text"/>\n                        <feGaussianBlur in="colored-text" stdDeviation="0.2" result="blurred"/>\n                        <feOffset in="blurred" dx="2" dy="-2" result="shadow1"/>\n                        <feMerge result="shadow-chain">\n                            <feMergeNode in="colored-text"/>\n                            <feMergeNode in="shadow1"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain" dx="4" dy="-4" result="shadow2"/>\n                        <feMerge result="shadow-chain2">\n                            <feMergeNode in="shadow-chain"/>\n                            <feMergeNode in="shadow2"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain2" dx="8" dy="-8" result="shadow3"/>\n                        <feMerge result="shadow-chain3">\n                            <feMergeNode in="shadow-chain2"/>\n                            <feMergeNode in="shadow3"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain3" dx="16" dy="-16" result="shadow4"/>\n                        <feMerge result="shadow-chain4">\n                            <feMergeNode in="shadow-chain3"/>\n                            <feMergeNode in="shadow4"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain4" dx="32" dy="-32" result="shadow5"/>\n                        <feMerge result="shadow-chain5">\n                            <feMergeNode in="shadow-chain4"/>\n                            <feMergeNode in="shadow5"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain5" dx="64" dy="-64" result="shadow6"/>\n                        <feMerge result="shadow-chain6">\n                            <feMergeNode in="shadow-chain5"/>\n                            <feMergeNode in="shadow6"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain6" dx="128" dy="-128" result="shadow7"/>\n                        <feMerge result="shadow-chain7">\n                            <feMergeNode in="shadow-chain6"/>\n                            <feMergeNode in="shadow7"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain7" dx="256" dy="-256" result="shadow8"/>\n                        <feMerge result="shadow-chain8">\n                            <feMergeNode in="shadow-chain7"/>\n                            <feMergeNode in="shadow8"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain8" dx="512" dy="-512" result="shadow9"/>\n                        <feMerge result="shadow-chain9">\n                            <feMergeNode in="shadow-chain8"/>\n                            <feMergeNode in="shadow9"/>\n                        </feMerge>\n                        <feMerge>\n                            <feMergeNode in="shadow-chain9"/>\n                            <feMergeNode in="SourceGraphic"/>\n                        </feMerge>\n                    </filter>\n\n                    \x3c!-- 3. SHADOW TOP-LEFT --\x3e\n                    <filter id="shadow-top-left" x="-200%" y="-200%" width="500%" height="500%">\n                        <feFlood flood-color="${o}" result="color"/>\n                        <feComposite in="color" in2="SourceAlpha" operator="in" result="colored-text"/>\n                        <feGaussianBlur in="colored-text" stdDeviation="0.2" result="blurred"/>\n                        <feOffset in="blurred" dx="-2" dy="-2" result="shadow1"/>\n                        <feMerge result="shadow-chain">\n                            <feMergeNode in="colored-text"/>\n                            <feMergeNode in="shadow1"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain" dx="-4" dy="-4" result="shadow2"/>\n                        <feMerge result="shadow-chain2">\n                            <feMergeNode in="shadow-chain"/>\n                            <feMergeNode in="shadow2"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain2" dx="-8" dy="-8" result="shadow3"/>\n                        <feMerge result="shadow-chain3">\n                            <feMergeNode in="shadow-chain2"/>\n                            <feMergeNode in="shadow3"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain3" dx="-16" dy="-16" result="shadow4"/>\n                        <feMerge result="shadow-chain4">\n                            <feMergeNode in="shadow-chain3"/>\n                            <feMergeNode in="shadow4"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain4" dx="-32" dy="-32" result="shadow5"/>\n                        <feMerge result="shadow-chain5">\n                            <feMergeNode in="shadow-chain4"/>\n                            <feMergeNode in="shadow5"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain5" dx="-64" dy="-64" result="shadow6"/>\n                        <feMerge result="shadow-chain6">\n                            <feMergeNode in="shadow-chain5"/>\n                            <feMergeNode in="shadow6"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain6" dx="-128" dy="-128" result="shadow7"/>\n                        <feMerge result="shadow-chain7">\n                            <feMergeNode in="shadow-chain6"/>\n                            <feMergeNode in="shadow7"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain7" dx="-256" dy="-256" result="shadow8"/>\n                        <feMerge result="shadow-chain8">\n                            <feMergeNode in="shadow-chain7"/>\n                            <feMergeNode in="shadow8"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain8" dx="-512" dy="-512" result="shadow9"/>\n                        <feMerge result="shadow-chain9">\n                            <feMergeNode in="shadow-chain8"/>\n                            <feMergeNode in="shadow9"/>\n                        </feMerge>\n                        <feMerge>\n                            <feMergeNode in="shadow-chain9"/>\n                            <feMergeNode in="SourceGraphic"/>\n                        </feMerge>\n                    </filter>\n\n                    \x3c!-- 4. SHADOW BOTTOM-LEFT --\x3e\n                    <filter id="shadow-bottom-left" x="-200%" y="-200%" width="500%" height="500%">\n                        <feFlood flood-color="${o}" result="color"/>\n                        <feComposite in="color" in2="SourceAlpha" operator="in" result="colored-text"/>\n                        <feGaussianBlur in="colored-text" stdDeviation="0.2" result="blurred"/>\n                        <feOffset in="blurred" dx="-2" dy="2" result="shadow1"/>\n                        <feMerge result="shadow-chain">\n                            <feMergeNode in="colored-text"/>\n                            <feMergeNode in="shadow1"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain" dx="-4" dy="4" result="shadow2"/>\n                        <feMerge result="shadow-chain2">\n                            <feMergeNode in="shadow-chain"/>\n                            <feMergeNode in="shadow2"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain2" dx="-8" dy="8" result="shadow3"/>\n                        <feMerge result="shadow-chain3">\n                            <feMergeNode in="shadow-chain2"/>\n                            <feMergeNode in="shadow3"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain3" dx="-16" dy="16" result="shadow4"/>\n                        <feMerge result="shadow-chain4">\n                            <feMergeNode in="shadow-chain3"/>\n                            <feMergeNode in="shadow4"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain4" dx="-32" dy="32" result="shadow5"/>\n                        <feMerge result="shadow-chain5">\n                            <feMergeNode in="shadow-chain4"/>\n                            <feMergeNode in="shadow5"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain5" dx="-64" dy="64" result="shadow6"/>\n                        <feMerge result="shadow-chain6">\n                            <feMergeNode in="shadow-chain5"/>\n                            <feMergeNode in="shadow6"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain6" dx="-128" dy="128" result="shadow7"/>\n                        <feMerge result="shadow-chain7">\n                            <feMergeNode in="shadow-chain6"/>\n                            <feMergeNode in="shadow7"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain7" dx="-256" dy="256" result="shadow8"/>\n                        <feMerge result="shadow-chain8">\n                            <feMergeNode in="shadow-chain7"/>\n                            <feMergeNode in="shadow8"/>\n                        </feMerge>\n                        <feOffset in="shadow-chain8" dx="-512" dy="512" result="shadow9"/>\n                        <feMerge result="shadow-chain9">\n                            <feMergeNode in="shadow-chain8"/>\n                            <feMergeNode in="shadow9"/>\n                        </feMerge>\n                        <feMerge>\n                            <feMergeNode in="shadow-chain9"/>\n                            <feMergeNode in="SourceGraphic"/>\n                        </feMerge>\n                    </filter>\n                `;
        d.innerHTML = s;
        const a = document.querySelector(".popup-menu button.active");
        if (a) {
            const n = a.dataset.filter;
            n && O[n] && (e.style.filter = `url(#${O[n]})`)
        } else e.style.filter = "url(#shadow-bottom-right)"
    }

    function k() {
        const e = L(p);
        v = e, g.style.backgroundColor = e, w.textContent = e.toUpperCase();
        const n = m.getBoundingClientRect(),
            t = n.width || 156,
            o = n.height || 156,
            d = p.s / 100 * t,
            s = (100 - p.b) / 100 * o;
        N.style.left = d + "px", N.style.top = s + "px";
        const a = y.getBoundingClientRect().height || 156,
            r = (360 - p.h) / 360 * a;
        x.style.top = r + "px";
        const i = L({
            h: p.h,
            s: 100,
            b: 100
        });
        m.style.backgroundColor = i, S(e)
    }

    function P(e) {
        const n = m.getBoundingClientRect(),
            t = n.width,
            o = n.height,
            d = Math.max(0, Math.min(e.clientX - n.left, t)),
            s = Math.max(0, Math.min(e.clientY - n.top, o));
        p.s = Math.round(d / t * 100), p.b = 100 - Math.round(s / o * 100), k()
    }

    function D(e) {
        const n = y.getBoundingClientRect(),
            t = n.height,
            o = Math.max(0, Math.min(e.clientY - n.top, t));
        p.h = Math.round(360 * (1 - o / t)), k()
    }
    g.addEventListener("click", function(e) {
        e.stopPropagation(),
            function() {
                if (M.classList.toggle("visible"), M.classList.contains("visible")) {
                    const e = I(C(v));
                    p = e, k()
                }
            }()
    }), m.addEventListener("mousedown", function(e) {
        b = !0, E = "color", P(e), e.preventDefault()
    }), y.addEventListener("mousedown", function(e) {
        b = !0, E = "hue", D(e), e.preventDefault()
    }), document.addEventListener("mousemove", function(e) {
        b && ("color" === E ? P(e) : "hue" === E && D(e))
    }), document.addEventListener("mouseup", function() {
        b = !1, E = null
    }), document.addEventListener("click", function(e) {
        if (M.classList.contains("visible")) {
            const n = M.contains(e.target),
                t = g.contains(e.target);
            n || t || M.classList.remove("visible")
        }
    });
    console.log("&Toc on codepen - https://codepen.io/ol-ivier");
    const T = document.querySelector(".popup-menu button.active");
    if (T) {
        const n = T.dataset.filter;
        n && O[n] && (e.style.filter = `url(#${O[n]})`)
    } else e.style.filter = "url(#shadow-bottom-right)";

    function $(n) {
        const t = parseFloat(n);
        isNaN(t) || (u.textContent = t + "rem", e.style.fontSize = t + "rem")
    }

    function A() {
        s.classList.remove("open"), M.classList.remove("visible")
    }

    function F() {
        let o = i.value.trim(),
            d = h.value.trim();
        n.textContent = o ? o.toUpperCase() : "", t.textContent = d ? d.toUpperCase() : "";
        const s = parseFloat(l.value);
        !isNaN(s) && s > 0 && (e.style.fontSize = s + "rem", u.textContent = s + "rem"), A()
    }
    o.forEach(n => {
        n.addEventListener("click", function(n) {
            const t = this.dataset.filter;
            t && O[t] && (e.style.filter = `url(#${O[t]})`, o.forEach(e => e.classList.remove("active")), this.classList.add("active"))
        })
    }), document.getElementById("menuPopup").addEventListener("click", e => e.stopPropagation()), l.addEventListener("input", function() {
        $(this.value)
    }), a.addEventListener("click", o => {
        o.stopPropagation(), s.classList.contains("open") ? A() : function() {
            s.classList.add("open"), i.value = n.textContent, h.value = t.textContent;
            const o = parseFloat(window.getComputedStyle(e).fontSize) / parseFloat(getComputedStyle(document.documentElement).fontSize),
                d = Math.round(2 * o) / 2;
            l.value = d, $(d);
            const a = I(C(v));
            p = a, k(), M.classList.remove("visible")
        }()
    }), r.addEventListener("click", A), document.addEventListener("click", e => {
        if (s.classList.contains("open")) {
            const n = s.contains(e.target),
                t = a.contains(e.target);
            n || t || A()
        }
    }), f.addEventListener("click", F), i.addEventListener("keydown", e => {
        "Enter" === e.key && (e.preventDefault(), F())
    }), h.addEventListener("keydown", e => {
        "Enter" === e.key && (e.preventDefault(), F())
    }), c.addEventListener("click", () => {
        n.textContent = "BE", t.textContent = "HAPPY", i.value = "BE", h.value = "HAPPY", l.value = 11, $(11), p = {
            h: 0,
            s: 0,
            b: 0
        }, v = "#000000", k(), A()
    }), p = {
        h: 0,
        s: 0,
        b: 0
    }, v = "#000000", S("#000000"), g.style.backgroundColor = "#000000", w.textContent = "#000000", l.value = 11, $(11), setTimeout(() => {
        const n = document.querySelector(".popup-menu button.active");
        if (n) {
            const t = n.dataset.filter;
            t && O[t] && (e.style.filter = `url(#${O[t]})`)
        }
    }, 50)
}();