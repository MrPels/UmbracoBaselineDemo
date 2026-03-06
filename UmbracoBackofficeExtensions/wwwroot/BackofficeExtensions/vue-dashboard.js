import { UmbContextConsumer as Xo } from "@umbraco-cms/backoffice/context-api";
import { UMB_AUTH_CONTEXT as Zo } from "@umbraco-cms/backoffice/auth";
import { UMB_NOTIFICATION_CONTEXT as Qo } from "@umbraco-cms/backoffice/notification";
const As = Document.prototype.createElement, kn = As.call(document, "template");
Document.prototype.createElement = function(e, t) {
  return !t && typeof e == "string" && e.includes("-") && customElements.get(e) ? (kn.innerHTML = `<${e}></${e}>`, kn.content.removeChild(
    kn.content.firstElementChild
  )) : As.call(this, e, t);
};
console.debug("[createElement patch] Active");
// @__NO_SIDE_EFFECTS__
function ze(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const K = Object.freeze({}), St = Object.freeze([]), ne = () => {
}, Ps = () => !1, Yt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), yn = (e) => e.startsWith("onUpdate:"), z = Object.assign, gr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ei = Object.prototype.hasOwnProperty, H = (e, t) => ei.call(e, t), A = Array.isArray, at = (e) => zt(e) === "[object Map]", Ms = (e) => zt(e) === "[object Set]", Br = (e) => zt(e) === "[object Date]", M = (e) => typeof e == "function", q = (e) => typeof e == "string", Ve = (e) => typeof e == "symbol", L = (e) => e !== null && typeof e == "object", mr = (e) => (L(e) || M(e)) && M(e.then) && M(e.catch), Is = Object.prototype.toString, zt = (e) => Is.call(e), br = (e) => zt(e).slice(8, -1), Rs = (e) => zt(e) === "[object Object]", yr = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nt = /* @__PURE__ */ ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ti = /* @__PURE__ */ ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Pn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ni = /-\w/g, ie = Pn(
  (e) => e.replace(ni, (t) => t.slice(1).toUpperCase())
), ri = /\B([A-Z])/g, ot = Pn(
  (e) => e.replace(ri, "-$1").toLowerCase()
), mt = Pn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ft = Pn(
  (e) => e ? `on${mt(e)}` : ""
), dt = (e, t) => !Object.is(e, t), It = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, _n = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, si = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Kr;
const Xt = () => Kr || (Kr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _r(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = q(r) ? ci(r) : _r(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (q(e) || L(e))
    return e;
}
const oi = /;(?![^(]*\))/g, ii = /:([^]+)/, li = /\/\*[^]*?\*\//g;
function ci(e) {
  const t = {};
  return e.replace(li, "").split(oi).forEach((n) => {
    if (n) {
      const r = n.split(ii);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function vr(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const r = vr(e[n]);
      r && (t += r + " ");
    }
  else if (L(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const fi = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ui = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ai = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", di = /* @__PURE__ */ ze(fi), pi = /* @__PURE__ */ ze(ui), hi = /* @__PURE__ */ ze(ai), gi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mi = /* @__PURE__ */ ze(gi);
function Ds(e) {
  return !!e || e === "";
}
function bi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = wr(e[r], t[r]);
  return n;
}
function wr(e, t) {
  if (e === t) return !0;
  let n = Br(e), r = Br(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ve(e), r = Ve(t), n || r)
    return e === t;
  if (n = A(e), r = A(t), n || r)
    return n && r ? bi(e, t) : !1;
  if (n = L(e), r = L(t), n || r) {
    if (!n || !r)
      return !1;
    const s = Object.keys(e).length, o = Object.keys(t).length;
    if (s !== o)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), f = t.hasOwnProperty(i);
      if (l && !f || !l && f || !wr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Fs = (e) => !!(e && e.__v_isRef === !0), Re = (e) => q(e) ? e : e == null ? "" : A(e) || L(e) && (e.toString === Is || !M(e.toString)) ? Fs(e) ? Re(e.value) : JSON.stringify(e, js, 2) : String(e), js = (e, t) => Fs(t) ? js(e, t.value) : at(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[Un(r, o) + " =>"] = s, n),
    {}
  )
} : Ms(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Un(n))
} : Ve(t) ? Un(t) : L(t) && !A(t) && !Rs(t) ? String(t) : t, Un = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ve(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Te(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let de;
class yi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = de, !t && de && (this.index = (de.scopes || (de.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = de;
      try {
        return de = this, t();
      } finally {
        de = n;
      }
    } else
      Te("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = de, de = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (de = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function _i() {
  return de;
}
let U;
const Bn = /* @__PURE__ */ new WeakSet();
class Hs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, de && de.active && de.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Bn.has(this) && (Bn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ls(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Wr(this), Vs(this);
    const t = U, n = Ce;
    U = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      U !== this && Te(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ks(this), U = t, Ce = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Cr(t);
      this.deps = this.depsTail = void 0, Wr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Bn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Qn(this) && this.run();
  }
  get dirty() {
    return Qn(this);
  }
}
let Ns = 0, Lt, Vt;
function Ls(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Vt, Vt = e;
    return;
  }
  e.next = Lt, Lt = e;
}
function xr() {
  Ns++;
}
function Sr() {
  if (--Ns > 0)
    return;
  if (Vt) {
    let t = Vt;
    for (Vt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Lt; ) {
    let t = Lt;
    for (Lt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Vs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ks(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Cr(r), vi(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function Qn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Us(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Us(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Kt) || (e.globalVersion = Kt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Qn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, r = Ce;
  U = e, Ce = !0;
  try {
    Vs(e);
    const s = e.fn(e._value);
    (t.version === 0 || dt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    U = n, Ce = r, ks(e), e.flags &= -3;
  }
}
function Cr(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Cr(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function vi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ce = !0;
const Bs = [];
function Oe() {
  Bs.push(Ce), Ce = !1;
}
function Ee() {
  const e = Bs.pop();
  Ce = e === void 0 ? !0 : e;
}
function Wr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let Kt = 0;
class wi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ks {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, this.subsHead = void 0;
  }
  track(t) {
    if (!U || !Ce || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new wi(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Ws(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = r);
    }
    return U.onTrack && U.onTrack(
      z(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Kt++, this.notify(t);
  }
  notify(t) {
    xr();
    try {
      for (let n = this.subsHead; n; n = n.nextSub)
        n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
          z(
            {
              effect: n.sub
            },
            t
          )
        );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Sr();
    }
  }
}
function Ws(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ws(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const er = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ Symbol(
  "Object iterate"
), tr = /* @__PURE__ */ Symbol(
  "Map keys iterate"
), Wt = /* @__PURE__ */ Symbol(
  "Array iterate"
);
function ee(e, t, n) {
  if (Ce && U) {
    let r = er.get(e);
    r || er.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Ks()), s.map = r, s.key = n), s.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function Fe(e, t, n, r, s, o) {
  const i = er.get(e);
  if (!i) {
    Kt++;
    return;
  }
  const l = (f) => {
    f && f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: s,
      oldTarget: o
    });
  };
  if (xr(), t === "clear")
    i.forEach(l);
  else {
    const f = A(e), p = f && yr(n);
    if (f && n === "length") {
      const d = Number(r);
      i.forEach((a, g) => {
        (g === "length" || g === Wt || !Ve(g) && g >= d) && l(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), p && l(i.get(Wt)), t) {
        case "add":
          f ? p && l(i.get("length")) : (l(i.get(pt)), at(e) && l(i.get(tr)));
          break;
        case "delete":
          f || (l(i.get(pt)), at(e) && l(i.get(tr)));
          break;
        case "set":
          at(e) && l(i.get(pt));
          break;
      }
  }
  Sr();
}
function _t(e) {
  const t = /* @__PURE__ */ D(e);
  return t === e ? t : (ee(t, "iterate", Wt), /* @__PURE__ */ he(e) ? t : t.map(Ye));
}
function Mn(e) {
  return ee(e = /* @__PURE__ */ D(e), "iterate", Wt), e;
}
function tt(e, t) {
  return /* @__PURE__ */ ke(e) ? Ot(/* @__PURE__ */ st(e) ? Ye(t) : t) : Ye(t);
}
const xi = {
  __proto__: null,
  [Symbol.iterator]() {
    return Kn(this, Symbol.iterator, (e) => tt(this, e));
  },
  concat(...e) {
    return _t(this).concat(
      ...e.map((t) => A(t) ? _t(t) : t)
    );
  },
  entries() {
    return Kn(this, "entries", (e) => (e[1] = tt(this, e[1]), e));
  },
  every(e, t) {
    return Ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ke(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => tt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Ke(
      this,
      "find",
      e,
      t,
      (n) => tt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ke(
      this,
      "findLast",
      e,
      t,
      (n) => tt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Wn(this, "includes", e);
  },
  indexOf(...e) {
    return Wn(this, "indexOf", e);
  },
  join(e) {
    return _t(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Wn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rt(this, "pop");
  },
  push(...e) {
    return Rt(this, "push", e);
  },
  reduce(e, ...t) {
    return Gr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gr(this, "reduceRight", e, t);
  },
  shift() {
    return Rt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rt(this, "splice", e);
  },
  toReversed() {
    return _t(this).toReversed();
  },
  toSorted(e) {
    return _t(this).toSorted(e);
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rt(this, "unshift", e);
  },
  values() {
    return Kn(this, "values", (e) => tt(this, e));
  }
};
function Kn(e, t, n) {
  const r = Mn(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ he(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.done || (o.value = n(o.value)), o;
  }), s;
}
const Si = Array.prototype;
function Ke(e, t, n, r, s, o) {
  const i = Mn(e), l = i !== e && !/* @__PURE__ */ he(e), f = i[t];
  if (f !== Si[t]) {
    const a = f.apply(e, o);
    return l ? Ye(a) : a;
  }
  let p = n;
  i !== e && (l ? p = function(a, g) {
    return n.call(this, tt(e, a), g, e);
  } : n.length > 2 && (p = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const d = f.call(i, p, r);
  return l && s ? s(d) : d;
}
function Gr(e, t, n, r) {
  const s = Mn(e);
  let o = n;
  return s !== e && (/* @__PURE__ */ he(e) ? n.length > 3 && (o = function(i, l, f) {
    return n.call(this, i, l, f, e);
  }) : o = function(i, l, f) {
    return n.call(this, i, tt(e, l), f, e);
  }), s[t](o, ...r);
}
function Wn(e, t, n) {
  const r = /* @__PURE__ */ D(e);
  ee(r, "iterate", Wt);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ vn(n[0]) ? (n[0] = /* @__PURE__ */ D(n[0]), r[t](...n)) : s;
}
function Rt(e, t, n = []) {
  Oe(), xr();
  const r = (/* @__PURE__ */ D(e))[t].apply(e, n);
  return Sr(), Ee(), r;
}
const Ci = /* @__PURE__ */ ze("__proto__,__v_isRef,__isVue"), Gs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ve)
);
function Ti(e) {
  Ve(e) || (e = String(e));
  const t = /* @__PURE__ */ D(this);
  return ee(t, "has", e), t.hasOwnProperty(e);
}
class qs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Qs : Zs : o ? Xs : zs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = A(t);
    if (!s) {
      let f;
      if (i && (f = xi[n]))
        return f;
      if (n === "hasOwnProperty")
        return Ti;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Z(t) ? t : r
    );
    if ((Ve(n) ? Gs.has(n) : Ci(n)) || (s || ee(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ Z(l)) {
      const f = i && yr(n) ? l : l.value;
      return s && L(f) ? /* @__PURE__ */ rr(f) : f;
    }
    return L(l) ? s ? /* @__PURE__ */ rr(l) : /* @__PURE__ */ Tr(l) : l;
  }
}
class Js extends qs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    const i = A(t) && yr(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ ke(o);
      if (!/* @__PURE__ */ he(r) && !/* @__PURE__ */ ke(r) && (o = /* @__PURE__ */ D(o), r = /* @__PURE__ */ D(r)), !i && /* @__PURE__ */ Z(o) && !/* @__PURE__ */ Z(r))
        return p ? (Te(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (o.value = r, !0);
    }
    const l = i ? Number(n) < t.length : H(t, n), f = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Z(t) ? t : s
    );
    return t === /* @__PURE__ */ D(s) && (l ? dt(r, o) && Fe(t, "set", n, r, o) : Fe(t, "add", n, r)), f;
  }
  deleteProperty(t, n) {
    const r = H(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && Fe(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ve(n) || !Gs.has(n)) && ee(t, "has", n), r;
  }
  ownKeys(t) {
    return ee(
      t,
      "iterate",
      A(t) ? "length" : pt
    ), Reflect.ownKeys(t);
  }
}
class Ys extends qs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Te(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Te(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Oi = /* @__PURE__ */ new Js(), Ei = /* @__PURE__ */ new Ys(), $i = /* @__PURE__ */ new Js(!0), Ai = /* @__PURE__ */ new Ys(!0), nr = (e) => e, on = (e) => Reflect.getPrototypeOf(e);
function Pi(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = /* @__PURE__ */ D(s), i = at(o), l = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, p = s[e](...r), d = n ? nr : t ? Ot : Ye;
    return !t && ee(
      o,
      "iterate",
      f ? tr : pt
    ), z(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: a, done: g } = p.next();
          return g ? { value: a, done: g } : {
            value: l ? [d(a[0]), d(a[1])] : d(a),
            done: g
          };
        }
      }
    );
  };
}
function ln(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Te(
        `${mt(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ D(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Mi(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = /* @__PURE__ */ D(o), l = /* @__PURE__ */ D(s);
      e || (dt(s, l) && ee(i, "get", s), ee(i, "get", l));
      const { has: f } = on(i), p = t ? nr : e ? Ot : Ye;
      if (f.call(i, s))
        return p(o.get(s));
      if (f.call(i, l))
        return p(o.get(l));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && ee(/* @__PURE__ */ D(s), "iterate", pt), s.size;
    },
    has(s) {
      const o = this.__v_raw, i = /* @__PURE__ */ D(o), l = /* @__PURE__ */ D(s);
      return e || (dt(s, l) && ee(i, "has", s), ee(i, "has", l)), s === l ? o.has(s) : o.has(s) || o.has(l);
    },
    forEach(s, o) {
      const i = this, l = i.__v_raw, f = /* @__PURE__ */ D(l), p = t ? nr : e ? Ot : Ye;
      return !e && ee(f, "iterate", pt), l.forEach((d, a) => s.call(o, p(d), p(a), i));
    }
  };
  return z(
    n,
    e ? {
      add: ln("add"),
      set: ln("set"),
      delete: ln("delete"),
      clear: ln("clear")
    } : {
      add(s) {
        !t && !/* @__PURE__ */ he(s) && !/* @__PURE__ */ ke(s) && (s = /* @__PURE__ */ D(s));
        const o = /* @__PURE__ */ D(this);
        return on(o).has.call(o, s) || (o.add(s), Fe(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !/* @__PURE__ */ he(o) && !/* @__PURE__ */ ke(o) && (o = /* @__PURE__ */ D(o));
        const i = /* @__PURE__ */ D(this), { has: l, get: f } = on(i);
        let p = l.call(i, s);
        p ? qr(i, l, s) : (s = /* @__PURE__ */ D(s), p = l.call(i, s));
        const d = f.call(i, s);
        return i.set(s, o), p ? dt(o, d) && Fe(i, "set", s, o, d) : Fe(i, "add", s, o), this;
      },
      delete(s) {
        const o = /* @__PURE__ */ D(this), { has: i, get: l } = on(o);
        let f = i.call(o, s);
        f ? qr(o, i, s) : (s = /* @__PURE__ */ D(s), f = i.call(o, s));
        const p = l ? l.call(o, s) : void 0, d = o.delete(s);
        return f && Fe(o, "delete", s, void 0, p), d;
      },
      clear() {
        const s = /* @__PURE__ */ D(this), o = s.size !== 0, i = at(s) ? new Map(s) : new Set(s), l = s.clear();
        return o && Fe(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Pi(s, e, t);
  }), n;
}
function In(e, t) {
  const n = Mi(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    H(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Ii = {
  get: /* @__PURE__ */ In(!1, !1)
}, Ri = {
  get: /* @__PURE__ */ In(!1, !0)
}, Di = {
  get: /* @__PURE__ */ In(!0, !1)
}, Fi = {
  get: /* @__PURE__ */ In(!0, !0)
};
function qr(e, t, n) {
  const r = /* @__PURE__ */ D(n);
  if (r !== n && t.call(e, r)) {
    const s = br(e);
    Te(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const zs = /* @__PURE__ */ new WeakMap(), Xs = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap();
function ji(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Hi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ji(br(e));
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  return /* @__PURE__ */ ke(e) ? e : Rn(
    e,
    !1,
    Oi,
    Ii,
    zs
  );
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return Rn(
    e,
    !1,
    $i,
    Ri,
    Xs
  );
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return Rn(
    e,
    !0,
    Ei,
    Di,
    Zs
  );
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return Rn(
    e,
    !0,
    Ai,
    Fi,
    Qs
  );
}
function Rn(e, t, n, r, s) {
  if (!L(e))
    return Te(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Hi(e);
  if (o === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return /* @__PURE__ */ ke(e) ? /* @__PURE__ */ st(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function D(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ D(t) : e;
}
function Li(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && _n(e, "__v_skip", !0), e;
}
const Ye = (e) => L(e) ? /* @__PURE__ */ Tr(e) : e, Ot = (e) => L(e) ? /* @__PURE__ */ rr(e) : e;
// @__NO_SIDE_EFFECTS__
function Z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Vi(e) {
  return /* @__PURE__ */ Z(e) ? e.value : e;
}
const ki = {
  get: (e, t, n) => t === "__v_raw" ? e : Vi(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Z(s) && !/* @__PURE__ */ Z(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function eo(e) {
  return /* @__PURE__ */ st(e) ? e : new Proxy(e, ki);
}
class Ui {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ks(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Kt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Ls(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return Us(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Te("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t, n = !1) {
  let r, s;
  return M(e) ? r = e : (r = e.get, s = e.set), new Ui(r, s, n);
}
const cn = {}, wn = /* @__PURE__ */ new WeakMap();
let ut;
function Ki(e, t = !1, n = ut) {
  if (n) {
    let r = wn.get(n);
    r || wn.set(n, r = []), r.push(e);
  } else t || Te(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Wi(e, t, n = K) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: l, call: f } = n, p = ($) => {
    (n.onWarn || Te)(
      "Invalid watch source: ",
      $,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = ($) => s ? $ : /* @__PURE__ */ he($) || s === !1 || s === 0 ? rt($, 1) : rt($);
  let a, g, T, I, O = !1, Y = !1;
  if (/* @__PURE__ */ Z(e) ? (g = () => e.value, O = /* @__PURE__ */ he(e)) : /* @__PURE__ */ st(e) ? (g = () => d(e), O = !0) : A(e) ? (Y = !0, O = e.some(($) => /* @__PURE__ */ st($) || /* @__PURE__ */ he($)), g = () => e.map(($) => {
    if (/* @__PURE__ */ Z($))
      return $.value;
    if (/* @__PURE__ */ st($))
      return d($);
    if (M($))
      return f ? f($, 2) : $();
    p($);
  })) : M(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (T) {
      Oe();
      try {
        T();
      } finally {
        Ee();
      }
    }
    const $ = ut;
    ut = a;
    try {
      return f ? f(e, 3, [I]) : e(I);
    } finally {
      ut = $;
    }
  } : (g = ne, p(e)), t && s) {
    const $ = g, Q = s === !0 ? 1 / 0 : s;
    g = () => rt($(), Q);
  }
  const G = _i(), k = () => {
    a.stop(), G && G.active && gr(G.effects, a);
  };
  if (o && t) {
    const $ = t;
    t = (...Q) => {
      $(...Q), k();
    };
  }
  let V = Y ? new Array(e.length).fill(cn) : cn;
  const ge = ($) => {
    if (!(!(a.flags & 1) || !a.dirty && !$))
      if (t) {
        const Q = a.run();
        if (s || O || (Y ? Q.some((ye, te) => dt(ye, V[te])) : dt(Q, V))) {
          T && T();
          const ye = ut;
          ut = a;
          try {
            const te = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              V === cn ? void 0 : Y && V[0] === cn ? [] : V,
              I
            ];
            V = Q, f ? f(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            ut = ye;
          }
        }
      } else
        a.run();
  };
  return l && l(ge), a = new Hs(g), a.scheduler = i ? () => i(ge, !1) : ge, I = ($) => Ki($, !1, a), T = a.onStop = () => {
    const $ = wn.get(a);
    if ($) {
      if (f)
        f($, 4);
      else
        for (const Q of $) Q();
      wn.delete(a);
    }
  }, a.onTrack = n.onTrack, a.onTrigger = n.onTrigger, t ? r ? ge(!0) : V = a.run() : i ? i(ge.bind(null, !0), !0) : a.run(), k.pause = a.pause.bind(a), k.resume = a.resume.bind(a), k.stop = k, k;
}
function rt(e, t = 1 / 0, n) {
  if (t <= 0 || !L(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Z(e))
    rt(e.value, t, n);
  else if (A(e))
    for (let r = 0; r < e.length; r++)
      rt(e[r], t, n);
  else if (Ms(e) || at(e))
    e.forEach((r) => {
      rt(r, t, n);
    });
  else if (Rs(e)) {
    for (const r in e)
      rt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && rt(e[r], t, n);
  }
  return e;
}
const ht = [];
function an(e) {
  ht.push(e);
}
function dn() {
  ht.pop();
}
let Gn = !1;
function w(e, ...t) {
  if (Gn) return;
  Gn = !0, Oe();
  const n = ht.length ? ht[ht.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = Gi();
  if (r)
    Et(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, l;
          return (l = (i = o.toString) == null ? void 0 : i.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${nn(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...qi(s)), console.warn(...o);
  }
  Ee(), Gn = !1;
}
function Gi() {
  let e = ht[ht.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function qi(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Ji(n));
  }), t;
}
function Ji({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${nn(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...Yi(e.props), o] : [s + o];
}
function Yi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...to(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function to(e, t, n) {
  return q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ Z(t) ? (t = to(e, /* @__PURE__ */ D(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : M(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ D(t), n ? t : [`${e}=`, t]);
}
const Or = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Et(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Zt(s, t, n);
  }
}
function Ue(e, t, n, r) {
  if (M(e)) {
    const s = Et(e, t, n, r);
    return s && mr(s) && s.catch((o) => {
      Zt(o, t, n);
    }), s;
  }
  if (A(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(Ue(e[o], t, n, r));
    return s;
  } else
    w(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Zt(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || K;
  if (t) {
    let l = t.parent;
    const f = t.proxy, p = Or[n];
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let a = 0; a < d.length; a++)
          if (d[a](e, f, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Oe(), Et(o, null, 10, [
        e,
        f,
        p
      ]), Ee();
      return;
    }
  }
  zi(e, n, s, r, i);
}
function zi(e, t, n, r = !0, s = !1) {
  {
    const o = Or[t];
    if (n && an(n), w(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && dn(), r)
      throw e;
    console.error(e);
  }
}
const oe = [];
let De = -1;
const Ct = [];
let nt = null, xt = 0;
const no = /* @__PURE__ */ Promise.resolve();
let xn = null;
const Xi = 100;
function Zi(e) {
  const t = xn || no;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qi(e) {
  let t = De + 1, n = oe.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = oe[r], o = Gt(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Dn(e) {
  if (!(e.flags & 1)) {
    const t = Gt(e), n = oe[oe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Gt(n) ? oe.push(e) : oe.splice(Qi(t), 0, e), e.flags |= 1, ro();
  }
}
function ro() {
  xn || (xn = no.then(io));
}
function so(e) {
  A(e) ? Ct.push(...e) : nt && e.id === -1 ? nt.splice(xt + 1, 0, e) : e.flags & 1 || (Ct.push(e), e.flags |= 1), ro();
}
function Jr(e, t, n = De + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < oe.length; n++) {
    const r = oe[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || Er(t, r))
        continue;
      oe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function oo(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)].sort(
      (n, r) => Gt(n) - Gt(r)
    );
    if (Ct.length = 0, nt) {
      nt.push(...t);
      return;
    }
    for (nt = t, e = e || /* @__PURE__ */ new Map(), xt = 0; xt < nt.length; xt++) {
      const n = nt[xt];
      Er(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    nt = null, xt = 0;
  }
}
const Gt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function io(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => Er(e, n);
  try {
    for (De = 0; De < oe.length; De++) {
      const n = oe[De];
      if (n && !(n.flags & 8)) {
        if (t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Et(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; De < oe.length; De++) {
      const n = oe[De];
      n && (n.flags &= -2);
    }
    De = -1, oe.length = 0, oo(e), xn = null, (oe.length || Ct.length) && io(e);
  }
}
function Er(e, t) {
  const n = e.get(t) || 0;
  if (n > Xi) {
    const r = t.i, s = r && Hr(r.type);
    return Zt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ne = !1;
const pn = /* @__PURE__ */ new Map();
Xt().__VUE_HMR_RUNTIME__ = {
  createRecord: qn(lo),
  rerender: qn(nl),
  reload: qn(rl)
};
const bt = /* @__PURE__ */ new Map();
function el(e) {
  const t = e.type.__hmrId;
  let n = bt.get(t);
  n || (lo(t, e.type), n = bt.get(t)), n.instances.add(e);
}
function tl(e) {
  bt.get(e.type.__hmrId).instances.delete(e);
}
function lo(e, t) {
  return bt.has(e) ? !1 : (bt.set(e, {
    initialDef: Sn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Sn(e) {
  return Wo(e) ? e.__vccOpts : e;
}
function nl(e, t) {
  const n = bt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Sn(r.type).render = t), r.renderCache = [], Ne = !0, r.job.flags & 8 || r.update(), Ne = !1;
  }));
}
function rl(e, t) {
  const n = bt.get(e);
  if (!n) return;
  t = Sn(t), Yr(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = Sn(o.type);
    let l = pn.get(i);
    l || (i !== n.initialDef && Yr(i, t), pn.set(i, l = /* @__PURE__ */ new Set())), l.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (l.add(o), o.ceReload(t.styles), l.delete(o)) : o.parent ? Dn(() => {
      o.job.flags & 8 || (Ne = !0, o.parent.update(), Ne = !1, l.delete(o));
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  so(() => {
    pn.clear();
  });
}
function Yr(e, t) {
  z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function qn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let je, jt = [], sr = !1;
function Qt(e, ...t) {
  je ? je.emit(e, ...t) : sr || jt.push({ event: e, args: t });
}
function co(e, t) {
  var n, r;
  je = e, je ? (je.enabled = !0, jt.forEach(({ event: s, args: o }) => je.emit(s, ...o)), jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    co(o, t);
  }), setTimeout(() => {
    je || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, sr = !0, jt = []);
  }, 3e3)) : (sr = !0, jt = []);
}
function sl(e, t) {
  Qt("app:init", e, t, {
    Fragment: ve,
    Text: en,
    Comment: be,
    Static: gn
  });
}
function ol(e) {
  Qt("app:unmount", e);
}
const il = /* @__PURE__ */ $r(
  "component:added"
  /* COMPONENT_ADDED */
), fo = /* @__PURE__ */ $r(
  "component:updated"
  /* COMPONENT_UPDATED */
), ll = /* @__PURE__ */ $r(
  "component:removed"
  /* COMPONENT_REMOVED */
), cl = (e) => {
  je && typeof je.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !je.cleanupBuffer(e) && ll(e);
};
// @__NO_SIDE_EFFECTS__
function $r(e) {
  return (t) => {
    Qt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const fl = /* @__PURE__ */ uo(
  "perf:start"
  /* PERFORMANCE_START */
), ul = /* @__PURE__ */ uo(
  "perf:end"
  /* PERFORMANCE_END */
);
function uo(e) {
  return (t, n, r) => {
    Qt(e, t.appContext.app, t.uid, t, n, r);
  };
}
function al(e, t, n) {
  Qt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let pe = null, ao = null;
function Cn(e) {
  const t = pe;
  return pe = e, ao = e && e.type.__scopeId || null, t;
}
function dl(e, t = pe, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && ds(-1);
    const o = Cn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Cn(o), r._d && ds(1);
    }
    return fo(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function po(e) {
  ti(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function lt(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    o && (l.oldValue = o[i].value);
    let f = l.dir[r];
    f && (Oe(), Ue(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ee());
  }
}
function pl(e, t) {
  if ((!X || X.isMounted) && w("provide() can only be used inside setup()."), X) {
    let n = X.provides;
    const r = X.parent && X.parent.provides;
    r === n && (n = X.provides = Object.create(r)), n[e] = t;
  }
}
function hn(e, t, n = !1) {
  const r = Uo();
  if (r || Tt) {
    let s = Tt ? Tt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && M(t) ? t.call(r && r.proxy) : t;
    w(`injection "${String(e)}" not found.`);
  } else
    w("inject() can only be used inside setup() or functional components.");
}
const hl = /* @__PURE__ */ Symbol.for("v-scx"), gl = () => {
  {
    const e = hn(hl);
    return e || w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Jn(e, t, n) {
  return M(t) || w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ho(e, t, n);
}
function ho(e, t, n = K) {
  const { immediate: r, deep: s, flush: o, once: i } = n;
  t || (r !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = z({}, n);
  l.onWarn = w;
  const f = t && r || !t && o !== "post";
  let p;
  if (Jt) {
    if (o === "sync") {
      const T = gl();
      p = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!f) {
      const T = () => {
      };
      return T.stop = ne, T.resume = ne, T.pause = ne, T;
    }
  }
  const d = X;
  l.call = (T, I, O) => Ue(T, d, I, O);
  let a = !1;
  o === "post" ? l.scheduler = (T) => {
    ae(T, d && d.suspense);
  } : o !== "sync" && (a = !0, l.scheduler = (T, I) => {
    I ? T() : Dn(T);
  }), l.augmentJob = (T) => {
    t && (T.flags |= 4), a && (T.flags |= 2, d && (T.id = d.uid, T.i = d));
  };
  const g = Wi(e, t, l);
  return Jt && (p ? p.push(g) : f && g()), g;
}
function ml(e, t, n) {
  const r = this.proxy, s = q(e) ? e.includes(".") ? go(r, e) : () => r[e] : e.bind(r, r);
  let o;
  M(t) ? o = t : (o = t.handler, n = t);
  const i = tn(this), l = ho(s, o.bind(r), n);
  return i(), l;
}
function go(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const bl = /* @__PURE__ */ Symbol("_vte"), yl = (e) => e.__isTeleport, _l = /* @__PURE__ */ Symbol("_leaveCb");
function Ar(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ar(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function mo(e, t) {
  return M(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    z({ name: e.name }, t, { setup: e })
  ) : e;
}
function bo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zr = /* @__PURE__ */ new WeakSet();
function Xr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Tn = /* @__PURE__ */ new WeakMap();
function kt(e, t, n, r, s = !1) {
  if (A(e)) {
    e.forEach(
      (O, Y) => kt(
        O,
        t && (A(t) ? t[Y] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Ut(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && kt(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? jr(r.component) : r.el, i = s ? null : o, { i: l, r: f } = e;
  if (!l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, d = l.refs === K ? l.refs = {} : l.refs, a = l.setupState, g = /* @__PURE__ */ D(a), T = a === K ? Ps : (O) => (H(g, O) && !/* @__PURE__ */ Z(g[O]) && w(
    `Template ref "${O}" used on a non-ref value. It will not work in the production build.`
  ), zr.has(g[O]) || Xr(d, O) ? !1 : H(g, O)), I = (O, Y) => !(zr.has(O) || Y && Xr(d, Y));
  if (p != null && p !== f) {
    if (Zr(t), q(p))
      d[p] = null, T(p) && (a[p] = null);
    else if (/* @__PURE__ */ Z(p)) {
      const O = t;
      I(p, O.k) && (p.value = null), O.k && (d[O.k] = null);
    }
  }
  if (M(f))
    Et(f, l, 12, [i, d]);
  else {
    const O = q(f), Y = /* @__PURE__ */ Z(f);
    if (O || Y) {
      const G = () => {
        if (e.f) {
          const k = O ? T(f) ? a[f] : d[f] : I(f) || !e.k ? f.value : d[e.k];
          if (s)
            A(k) && gr(k, o);
          else if (A(k))
            k.includes(o) || k.push(o);
          else if (O)
            d[f] = [o], T(f) && (a[f] = d[f]);
          else {
            const V = [o];
            I(f, e.k) && (f.value = V), e.k && (d[e.k] = V);
          }
        } else O ? (d[f] = i, T(f) && (a[f] = i)) : Y ? (I(f, e.k) && (f.value = i), e.k && (d[e.k] = i)) : w("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (i) {
        const k = () => {
          G(), Tn.delete(e);
        };
        k.id = -1, Tn.set(e, k), ae(k, n);
      } else
        Zr(e), G();
    } else
      w("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function Zr(e) {
  const t = Tn.get(e);
  t && (t.flags |= 8, Tn.delete(e));
}
Xt().requestIdleCallback;
Xt().cancelIdleCallback;
const Ut = (e) => !!e.type.__asyncLoader, Pr = (e) => e.type.__isKeepAlive;
function vl(e, t) {
  yo(e, "a", t);
}
function wl(e, t) {
  yo(e, "da", t);
}
function yo(e, t, n = X) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Fn(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Pr(s.parent.vnode) && xl(r, t, n, s), s = s.parent;
  }
}
function xl(e, t, n, r) {
  const s = Fn(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  _o(() => {
    gr(r[t], s);
  }, n);
}
function Fn(e, t, n = X, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Oe();
      const l = tn(n), f = Ue(t, n, e, i);
      return l(), Ee(), f;
    });
    return r ? s.unshift(o) : s.push(o), o;
  } else {
    const s = ft(Or[e].replace(/ hook$/, ""));
    w(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Xe = (e) => (t, n = X) => {
  (!Jt || e === "sp") && Fn(e, (...r) => t(...r), n);
}, Sl = Xe("bm"), Cl = Xe("m"), Tl = Xe(
  "bu"
), Ol = Xe("u"), El = Xe(
  "bum"
), _o = Xe("um"), $l = Xe(
  "sp"
), Al = Xe("rtg"), Pl = Xe("rtc");
function Ml(e, t = X) {
  Fn("ec", e, t);
}
const Il = "components";
function Rl(e, t) {
  return Fl(Il, e, !0, t) || e;
}
const Dl = /* @__PURE__ */ Symbol.for("v-ndc");
function Fl(e, t, n = !0, r = !1) {
  const s = pe || X;
  if (s) {
    const o = s.type;
    {
      const l = Hr(
        o,
        !1
      );
      if (l && (l === t || l === ie(t) || l === mt(ie(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Qr(s[e] || o[e], t) || // global registration
      Qr(s.appContext[e], t)
    );
    return !i && r ? o : (n && !i && w(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else
    w(
      `resolve${mt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Qr(e, t) {
  return e && (e[t] || e[ie(t)] || e[mt(ie(t))]);
}
function es(e, t, n, r) {
  let s;
  const o = n, i = A(e);
  if (i || q(e)) {
    const l = i && /* @__PURE__ */ st(e);
    let f = !1, p = !1;
    l && (f = !/* @__PURE__ */ he(e), p = /* @__PURE__ */ ke(e), e = Mn(e)), s = new Array(e.length);
    for (let d = 0, a = e.length; d < a; d++)
      s[d] = t(
        f ? p ? Ot(Ye(e[d])) : Ye(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || w(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, o);
  } else if (L(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, f) => t(l, f, void 0, o)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let f = 0, p = l.length; f < p; f++) {
        const d = l[f];
        s[f] = t(e[d], d, f, o);
      }
    }
  else
    s = [];
  return s;
}
const or = (e) => e ? Bo(e) ? jr(e) : or(e.parent) : null, gt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => /* @__PURE__ */ He(e.props),
    $attrs: (e) => /* @__PURE__ */ He(e.attrs),
    $slots: (e) => /* @__PURE__ */ He(e.slots),
    $refs: (e) => /* @__PURE__ */ He(e.refs),
    $parent: (e) => or(e.parent),
    $root: (e) => or(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Dn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zi.bind(e.proxy)),
    $watch: (e) => ml.bind(e)
  })
), Mr = (e) => e === "_" || e === "$", Yn = (e, t) => e !== K && !e.__isScriptSetup && H(e, t), vo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: f } = e;
    if (t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Yn(r, t))
          return i[t] = 1, r[t];
        if (s !== K && H(s, t))
          return i[t] = 2, s[t];
        if (H(o, t))
          return i[t] = 3, o[t];
        if (n !== K && H(n, t))
          return i[t] = 4, n[t];
        ir && (i[t] = 0);
      }
    }
    const p = gt[t];
    let d, a;
    if (p)
      return t === "$attrs" ? (ee(e.attrs, "get", ""), En()) : t === "$slots" && ee(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== K && H(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      a = f.config.globalProperties, H(a, t)
    )
      return a[t];
    pe && (!q(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== K && Mr(t[0]) && H(s, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === pe && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return Yn(s, t) ? (s[t] = n, !0) : s.__isScriptSetup && H(s, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== K && H(r, t) ? (r[t] = n, !0) : H(e.props, t) ? (w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: o, type: i }
  }, l) {
    let f;
    return !!(n[l] || e !== K && l[0] !== "$" && H(e, l) || Yn(t, l) || H(o, l) || H(r, l) || H(gt, l) || H(s.config.globalProperties, l) || (f = i.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
vo.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function jl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(gt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => gt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ne
    });
  }), t;
}
function Hl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: ne
    });
  });
}
function Nl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ D(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Mr(r[0])) {
        w(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: ne
      });
    }
  });
}
function ts(e) {
  return A(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ll() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ir = !0;
function Vl(e) {
  const t = xo(e), n = e.proxy, r = e.ctx;
  ir = !1, t.beforeCreate && ns(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: i,
    watch: l,
    provide: f,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: a,
    mounted: g,
    beforeUpdate: T,
    updated: I,
    activated: O,
    deactivated: Y,
    beforeDestroy: G,
    beforeUnmount: k,
    destroyed: V,
    unmounted: ge,
    render: $,
    renderTracked: Q,
    renderTriggered: ye,
    errorCaptured: te,
    serverPrefetch: le,
    // public API
    expose: Be,
    inheritAttrs: Ze,
    // assets
    components: we,
    directives: rn,
    filters: Nr
  } = t, Qe = Ll();
  {
    const [N] = e.propsOptions;
    if (N)
      for (const F in N)
        Qe("Props", F);
  }
  if (p && kl(p, r, Qe), i)
    for (const N in i) {
      const F = i[N];
      M(F) ? (Object.defineProperty(r, N, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), Qe("Methods", N)) : w(
        `Method "${N}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    M(s) || w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const N = s.call(n, n);
    if (mr(N) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !L(N))
      w("data() should return an object.");
    else {
      e.data = /* @__PURE__ */ Tr(N);
      for (const F in N)
        Qe("Data", F), Mr(F[0]) || Object.defineProperty(r, F, {
          configurable: !0,
          enumerable: !0,
          get: () => N[F],
          set: ne
        });
    }
  }
  if (ir = !0, o)
    for (const N in o) {
      const F = o[N], $e = M(F) ? F.bind(n, n) : M(F.get) ? F.get.bind(n, n) : ne;
      $e === ne && w(`Computed property "${N}" has no getter.`);
      const Nn = !M(F) && M(F.set) ? F.set.bind(n) : () => {
        w(
          `Write operation failed: computed property "${N}" is readonly.`
        );
      }, $t = Hc({
        get: $e,
        set: Nn
      });
      Object.defineProperty(r, N, {
        enumerable: !0,
        configurable: !0,
        get: () => $t.value,
        set: (yt) => $t.value = yt
      }), Qe("Computed", N);
    }
  if (l)
    for (const N in l)
      wo(l[N], r, n, N);
  if (f) {
    const N = M(f) ? f.call(n) : f;
    Reflect.ownKeys(N).forEach((F) => {
      pl(F, N[F]);
    });
  }
  d && ns(d, e, "c");
  function ce(N, F) {
    A(F) ? F.forEach(($e) => N($e.bind(n))) : F && N(F.bind(n));
  }
  if (ce(Sl, a), ce(Cl, g), ce(Tl, T), ce(Ol, I), ce(vl, O), ce(wl, Y), ce(Ml, te), ce(Pl, Q), ce(Al, ye), ce(El, k), ce(_o, ge), ce($l, le), A(Be))
    if (Be.length) {
      const N = e.exposed || (e.exposed = {});
      Be.forEach((F) => {
        Object.defineProperty(N, F, {
          get: () => n[F],
          set: ($e) => n[F] = $e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === ne && (e.render = $), Ze != null && (e.inheritAttrs = Ze), we && (e.components = we), rn && (e.directives = rn), le && bo(e);
}
function kl(e, t, n = ne) {
  A(e) && (e = lr(e));
  for (const r in e) {
    const s = e[r];
    let o;
    L(s) ? "default" in s ? o = hn(
      s.from || r,
      s.default,
      !0
    ) : o = hn(s.from || r) : o = hn(s), /* @__PURE__ */ Z(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o, n("Inject", r);
  }
}
function ns(e, t, n) {
  Ue(
    A(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function wo(e, t, n, r) {
  let s = r.includes(".") ? go(n, r) : () => n[r];
  if (q(e)) {
    const o = t[e];
    M(o) ? Jn(s, o) : w(`Invalid watch handler specified by key "${e}"`, o);
  } else if (M(e))
    Jn(s, e.bind(n));
  else if (L(e))
    if (A(e))
      e.forEach((o) => wo(o, t, n, r));
    else {
      const o = M(e.handler) ? e.handler.bind(n) : t[e.handler];
      M(o) ? Jn(s, o, e) : w(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    w(`Invalid watch option: "${r}"`, e);
}
function xo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let f;
  return l ? f = l : !s.length && !n && !r ? f = t : (f = {}, s.length && s.forEach(
    (p) => On(f, p, i, !0)
  ), On(f, t, i)), L(t) && o.set(t, f), f;
}
function On(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && On(e, o, n, !0), s && s.forEach(
    (i) => On(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Ul[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ul = {
  data: rs,
  props: ss,
  emits: ss,
  // objects
  methods: Ht,
  computed: Ht,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: Ht,
  directives: Ht,
  // watch
  watch: Kl,
  // provide / inject
  provide: rs,
  inject: Bl
};
function rs(e, t) {
  return t ? e ? function() {
    return z(
      M(e) ? e.call(this, this) : e,
      M(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Bl(e, t) {
  return Ht(lr(e), lr(t));
}
function lr(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ss(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    ts(e),
    ts(t ?? {})
  ) : t;
}
function Kl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = z(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = se(e[r], t[r]);
  return n;
}
function So() {
  return {
    app: null,
    config: {
      isNativeTag: Ps,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Wl = 0;
function Gl(e, t) {
  return function(r, s = null) {
    M(r) || (r = z({}, r)), s != null && !L(s) && (w("root props passed to app.mount() must be an object."), s = null);
    const o = So(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const p = o.app = {
      _uid: Wl++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: gs,
      get config() {
        return o.config;
      },
      set config(d) {
        w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...a) {
        return i.has(d) ? w("Plugin has already been applied to target app.") : d && M(d.install) ? (i.add(d), d.install(p, ...a)) : M(d) ? (i.add(d), d(p, ...a)) : w(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(d) {
        return o.mixins.includes(d) ? w(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : o.mixins.push(d), p;
      },
      component(d, a) {
        return pr(d, o.config), a ? (o.components[d] && w(`Component "${d}" has already been registered in target app.`), o.components[d] = a, p) : o.components[d];
      },
      directive(d, a) {
        return po(d), a ? (o.directives[d] && w(`Directive "${d}" has already been registered in target app.`), o.directives[d] = a, p) : o.directives[d];
      },
      mount(d, a, g) {
        if (f)
          w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const T = p._ceVNode || Le(r, s);
          return T.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), o.reload = () => {
            const I = it(T);
            I.el = null, e(I, d, g);
          }, e(T, d, g), f = !0, p._container = d, d.__vue_app__ = p, p._instance = T.component, sl(p, gs), jr(T.component);
        }
      },
      onUnmount(d) {
        typeof d != "function" && w(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        f ? (Ue(
          l,
          p._instance,
          16
        ), e(null, p._container), p._instance = null, ol(p), delete p._container.__vue_app__) : w("Cannot unmount an app that is not mounted.");
      },
      provide(d, a) {
        return d in o.provides && (H(o.provides, d) ? w(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : w(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), o.provides[d] = a, p;
      },
      runWithContext(d) {
        const a = Tt;
        Tt = p;
        try {
          return d();
        } finally {
          Tt = a;
        }
      }
    };
    return p;
  };
}
let Tt = null;
const ql = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ie(t)}Modifiers`] || e[`${ot(t)}Modifiers`];
function Jl(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || K;
  {
    const {
      emitsOptions: d,
      propsOptions: [a]
    } = e;
    if (d)
      if (!(t in d))
        (!a || !(ft(ie(t)) in a)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ft(ie(t))}" prop.`
        );
      else {
        const g = d[t];
        M(g) && (g(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const o = t.startsWith("update:"), i = o && ql(r, t.slice(7));
  i && (i.trim && (s = n.map((d) => q(d) ? d.trim() : d)), i.number && (s = n.map(si))), al(e, t, s);
  {
    const d = t.toLowerCase();
    d !== t && r[ft(d)] && w(
      `Event "${d}" is emitted in component ${nn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ot(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = r[l = ft(t)] || // also try camelCase event handler (#2249)
  r[l = ft(ie(t))];
  !f && o && (f = r[l = ft(ot(t))]), f && Ue(
    f,
    e,
    6,
    s
  );
  const p = r[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ue(
      p,
      e,
      6,
      s
    );
  }
}
const Yl = /* @__PURE__ */ new WeakMap();
function Co(e, t, n = !1) {
  const r = n ? Yl : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, l = !1;
  if (!M(e)) {
    const f = (p) => {
      const d = Co(p, t, !0);
      d && (l = !0, z(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !l ? (L(e) && r.set(e, null), null) : (A(o) ? o.forEach((f) => i[f] = null) : z(i, o), L(e) && r.set(e, i), i);
}
function jn(e, t) {
  return !e || !Yt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, ot(t)) || H(e, t));
}
let cr = !1;
function En() {
  cr = !0;
}
function os(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [o],
    slots: i,
    attrs: l,
    emit: f,
    render: p,
    renderCache: d,
    props: a,
    data: g,
    setupState: T,
    ctx: I,
    inheritAttrs: O
  } = e, Y = Cn(e);
  let G, k;
  cr = !1;
  try {
    if (n.shapeFlag & 4) {
      const $ = s || r, Q = T.__isScriptSetup ? new Proxy($, {
        get(ye, te, le) {
          return w(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ye, te, le);
        }
      }) : $;
      G = Se(
        p.call(
          Q,
          $,
          d,
          /* @__PURE__ */ He(a),
          T,
          g,
          I
        )
      ), k = l;
    } else {
      const $ = t;
      l === a && En(), G = Se(
        $.length > 1 ? $(
          /* @__PURE__ */ He(a),
          {
            get attrs() {
              return En(), /* @__PURE__ */ He(l);
            },
            slots: i,
            emit: f
          }
        ) : $(
          /* @__PURE__ */ He(a),
          null
        )
      ), k = t.props ? l : zl(l);
    }
  } catch ($) {
    Bt.length = 0, Zt($, e, 1), G = Le(be);
  }
  let V = G, ge;
  if (G.patchFlag > 0 && G.patchFlag & 2048 && ([V, ge] = To(G)), k && O !== !1) {
    const $ = Object.keys(k), { shapeFlag: Q } = V;
    if ($.length) {
      if (Q & 7)
        o && $.some(yn) && (k = Xl(
          k,
          o
        )), V = it(V, k, !1, !0);
      else if (!cr && V.type !== be) {
        const ye = Object.keys(l), te = [], le = [];
        for (let Be = 0, Ze = ye.length; Be < Ze; Be++) {
          const we = ye[Be];
          Yt(we) ? yn(we) || te.push(we[2].toLowerCase() + we.slice(3)) : le.push(we);
        }
        le.length && w(
          `Extraneous non-props attributes (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && w(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (is(V) || w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), V = it(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (is(V) || w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Ar(V, n.transition)), ge ? ge(V) : G = V, Cn(Y), G;
}
const To = (e) => {
  const t = e.children, n = e.dynamicChildren, r = Ir(t, !1);
  if (r) {
    if (r.patchFlag > 0 && r.patchFlag & 2048)
      return To(r);
  } else return [e, void 0];
  const s = t.indexOf(r), o = n ? n.indexOf(r) : -1, i = (l) => {
    t[s] = l, n && (o > -1 ? n[o] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Se(r), i];
};
function Ir(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (Hn(s)) {
      if (s.type !== be || s.children === "v-if") {
        if (n)
          return;
        if (n = s, t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ir(n.children);
      }
    } else
      return;
  }
  return n;
}
const zl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Yt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Xl = (e, t) => {
  const n = {};
  for (const r in e)
    (!yn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, is = (e) => e.shapeFlag & 7 || e.type === be;
function Zl(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: l, patchFlag: f } = t, p = o.emitsOptions;
  if ((s || l) && Ne || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? ls(r, i, p) : !!i;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        const g = d[a];
        if (Oo(i, r, g) && !jn(p, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? ls(r, i, p) : !0 : !!i;
  return !1;
}
function ls(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (Oo(t, e, o) && !jn(n, o))
      return !0;
  }
  return !1;
}
function Oo(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && L(r) && L(s) ? !wr(r, s) : r !== s;
}
function Ql({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Eo = {}, $o = () => Object.create(Eo), Ao = (e) => Object.getPrototypeOf(e) === Eo;
function ec(e, t, n, r = !1) {
  const s = {}, o = $o();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Po(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  Io(t || {}, s, e), n ? e.props = r ? s : /* @__PURE__ */ Ni(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function tc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function nc(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, l = /* @__PURE__ */ D(s), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !tc(e) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        let g = d[a];
        if (jn(e.emitsOptions, g))
          continue;
        const T = t[g];
        if (f)
          if (H(o, g))
            T !== o[g] && (o[g] = T, p = !0);
          else {
            const I = ie(g);
            s[I] = fr(
              f,
              l,
              I,
              T,
              e,
              !1
            );
          }
        else
          T !== o[g] && (o[g] = T, p = !0);
      }
    }
  } else {
    Po(e, t, s, o) && (p = !0);
    let d;
    for (const a in l)
      (!t || // for camelCase
      !H(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = ot(a)) === a || !H(t, d))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[a] = fr(
        f,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (o !== l)
      for (const a in o)
        (!t || !H(t, a)) && (delete o[a], p = !0);
  }
  p && Fe(e.attrs, "set", ""), Io(t || {}, s, e);
}
function Po(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let f in t) {
      if (Nt(f))
        continue;
      const p = t[f];
      let d;
      s && H(s, d = ie(f)) ? !o || !o.includes(d) ? n[d] = p : (l || (l = {}))[d] = p : jn(e.emitsOptions, f) || (!(f in r) || p !== r[f]) && (r[f] = p, i = !0);
    }
  if (o) {
    const f = /* @__PURE__ */ D(n), p = l || K;
    for (let d = 0; d < o.length; d++) {
      const a = o[d];
      n[a] = fr(
        s,
        f,
        a,
        p[a],
        e,
        !H(p, a)
      );
    }
  }
  return i;
}
function fr(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const l = H(i, "default");
    if (l && r === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && M(f)) {
        const { propsDefaults: p } = s;
        if (n in p)
          r = p[n];
        else {
          const d = tn(s);
          r = p[n] = f.call(
            null,
            t
          ), d();
        }
      } else
        r = f;
      s.ce && s.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !l ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === ot(n)) && (r = !0));
  }
  return r;
}
const rc = /* @__PURE__ */ new WeakMap();
function Mo(e, t, n = !1) {
  const r = n ? rc : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, l = [];
  let f = !1;
  if (!M(e)) {
    const d = (a) => {
      f = !0;
      const [g, T] = Mo(a, t, !0);
      z(i, g), T && l.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !f)
    return L(e) && r.set(e, St), St;
  if (A(o))
    for (let d = 0; d < o.length; d++) {
      q(o[d]) || w("props must be strings when using array syntax.", o[d]);
      const a = ie(o[d]);
      cs(a) && (i[a] = K);
    }
  else if (o) {
    L(o) || w("invalid props options", o);
    for (const d in o) {
      const a = ie(d);
      if (cs(a)) {
        const g = o[d], T = i[a] = A(g) || M(g) ? { type: g } : z({}, g), I = T.type;
        let O = !1, Y = !0;
        if (A(I))
          for (let G = 0; G < I.length; ++G) {
            const k = I[G], V = M(k) && k.name;
            if (V === "Boolean") {
              O = !0;
              break;
            } else V === "String" && (Y = !1);
          }
        else
          O = M(I) && I.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = O, T[
          1
          /* shouldCastTrue */
        ] = Y, (O || H(T, "default")) && l.push(a);
      }
    }
  }
  const p = [i, l];
  return L(e) && r.set(e, p), p;
}
function cs(e) {
  return e[0] !== "$" && !Nt(e) ? !0 : (w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function sc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Io(e, t, n) {
  const r = /* @__PURE__ */ D(t), s = n.propsOptions[0], o = Object.keys(e).map((i) => ie(i));
  for (const i in s) {
    let l = s[i];
    l != null && oc(
      i,
      r[i],
      l,
      /* @__PURE__ */ He(r),
      !o.includes(i)
    );
  }
}
function oc(e, t, n, r, s) {
  const { type: o, required: i, validator: l, skipCheck: f } = n;
  if (i && s) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (o != null && o !== !0 && !f) {
      let p = !1;
      const d = A(o) ? o : [o], a = [];
      for (let g = 0; g < d.length && !p; g++) {
        const { valid: T, expectedType: I } = lc(t, d[g]);
        a.push(I || ""), p = T;
      }
      if (!p) {
        w(cc(e, t, a));
        return;
      }
    }
    l && !l(t, r) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ic = /* @__PURE__ */ ze(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function lc(e, t) {
  let n;
  const r = sc(t);
  if (r === "null")
    n = e === null;
  else if (ic(r)) {
    const s = typeof e;
    n = s === r.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else r === "Object" ? n = L(e) : r === "Array" ? n = A(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function cc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(mt).join(" | ")}`;
  const s = n[0], o = br(t), i = fs(t, s), l = fs(t, o);
  return n.length === 1 && us(s) && !fc(s, o) && (r += ` with value ${i}`), r += `, got ${o} `, us(o) && (r += `with value ${l}.`), r;
}
function fs(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function us(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function fc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Rr = (e) => e === "_" || e === "_ctx" || e === "$stable", Dr = (e) => A(e) ? e.map(Se) : [Se(e)], uc = (e, t, n) => {
  if (t._n)
    return t;
  const r = dl((...s) => (X && !(n === null && pe) && !(n && n.root !== X.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Dr(t(...s))), n);
  return r._c = !1, r;
}, Ro = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Rr(s)) continue;
    const o = e[s];
    if (M(o))
      t[s] = uc(s, o, r);
    else if (o != null) {
      w(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Dr(o);
      t[s] = () => i;
    }
  }
}, Do = (e, t) => {
  Pr(e.vnode) || w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Dr(t);
  e.slots.default = () => n;
}, ur = (e, t, n) => {
  for (const r in t)
    (n || !Rr(r)) && (e[r] = t[r]);
}, ac = (e, t, n) => {
  const r = e.slots = $o();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (ur(r, t, n), n && _n(r, "_", s, !0)) : Ro(t, r);
  } else t && Do(e, t);
}, dc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = K;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? Ne ? (ur(s, t, n), Fe(e, "set", "$slots")) : n && l === 1 ? o = !1 : ur(s, t, n) : (o = !t.$stable, Ro(t, s)), i = t;
  } else t && (Do(e, t), i = { default: 1 });
  if (o)
    for (const l in s)
      !Rr(l) && i[l] == null && delete s[l];
};
let Dt, Ge;
function vt(e, t) {
  e.appContext.config.performance && $n() && Ge.mark(`vue-${t}-${e.uid}`), fl(e, t, $n() ? Ge.now() : Date.now());
}
function wt(e, t) {
  if (e.appContext.config.performance && $n()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end", s = `<${nn(e, e.type)}> ${t}`;
    Ge.mark(r), Ge.measure(s, n, r), Ge.clearMeasures(s), Ge.clearMarks(n), Ge.clearMarks(r);
  }
  ul(e, t, $n() ? Ge.now() : Date.now());
}
function $n() {
  return Dt !== void 0 || (typeof window < "u" && window.performance ? (Dt = !0, Ge = window.performance) : Dt = !1), Dt;
}
function pc() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ae = yc;
function hc(e) {
  return gc(e);
}
function gc(e, t) {
  pc();
  const n = Xt();
  n.__VUE__ = !0, co(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: l,
    createComment: f,
    setText: p,
    setElementText: d,
    parentNode: a,
    nextSibling: g,
    setScopeId: T = ne,
    insertStaticContent: I
  } = e, O = (c, u, h, _ = null, b = null, m = null, S = void 0, x = null, v = Ne ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Ft(c, u) && (_ = sn(c), et(c, b, m, !0), c = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: y, ref: P, shapeFlag: C } = u;
    switch (y) {
      case en:
        Y(c, u, h, _);
        break;
      case be:
        G(c, u, h, _);
        break;
      case gn:
        c == null ? k(u, h, _, S) : V(c, u, h, S);
        break;
      case ve:
        rn(
          c,
          u,
          h,
          _,
          b,
          m,
          S,
          x,
          v
        );
        break;
      default:
        C & 1 ? Q(
          c,
          u,
          h,
          _,
          b,
          m,
          S,
          x,
          v
        ) : C & 6 ? Nr(
          c,
          u,
          h,
          _,
          b,
          m,
          S,
          x,
          v
        ) : C & 64 || C & 128 ? y.process(
          c,
          u,
          h,
          _,
          b,
          m,
          S,
          x,
          v,
          Pt
        ) : w("Invalid VNode type:", y, `(${typeof y})`);
    }
    P != null && b ? kt(P, c && c.ref, m, u || c, !u) : P == null && c && c.ref != null && kt(c.ref, null, m, c, !0);
  }, Y = (c, u, h, _) => {
    if (c == null)
      r(
        u.el = l(u.children),
        h,
        _
      );
    else {
      const b = u.el = c.el;
      u.children !== c.children && p(b, u.children);
    }
  }, G = (c, u, h, _) => {
    c == null ? r(
      u.el = f(u.children || ""),
      h,
      _
    ) : u.el = c.el;
  }, k = (c, u, h, _) => {
    [c.el, c.anchor] = I(
      c.children,
      u,
      h,
      _,
      c.el,
      c.anchor
    );
  }, V = (c, u, h, _) => {
    if (u.children !== c.children) {
      const b = g(c.anchor);
      $(c), [u.el, u.anchor] = I(
        u.children,
        h,
        b,
        _
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, ge = ({ el: c, anchor: u }, h, _) => {
    let b;
    for (; c && c !== u; )
      b = g(c), r(c, h, _), c = b;
    r(u, h, _);
  }, $ = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = g(c), s(c), c = h;
    s(u);
  }, Q = (c, u, h, _, b, m, S, x, v) => {
    if (u.type === "svg" ? S = "svg" : u.type === "math" && (S = "mathml"), c == null)
      ye(
        u,
        h,
        _,
        b,
        m,
        S,
        x,
        v
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), Be(
          c,
          u,
          b,
          m,
          S,
          x,
          v
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ye = (c, u, h, _, b, m, S, x) => {
    let v, y;
    const { props: P, shapeFlag: C, transition: E, dirs: R } = c;
    if (v = c.el = i(
      c.type,
      m,
      P && P.is,
      P
    ), C & 8 ? d(v, c.children) : C & 16 && le(
      c.children,
      v,
      null,
      _,
      b,
      zn(c, m),
      S,
      x
    ), R && lt(c, null, _, "created"), te(v, c, c.scopeId, S, _), P) {
      for (const W in P)
        W !== "value" && !Nt(W) && o(v, W, null, P[W], m, _);
      "value" in P && o(v, "value", null, P.value, m), (y = P.onVnodeBeforeMount) && Ie(y, _, c);
    }
    _n(v, "__vnode", c, !0), _n(v, "__vueParentComponent", _, !0), R && lt(c, null, _, "beforeMount");
    const j = mc(b, E);
    j && E.beforeEnter(v), r(v, u, h), ((y = P && P.onVnodeMounted) || j || R) && ae(() => {
      y && Ie(y, _, c), j && E.enter(v), R && lt(c, null, _, "mounted");
    }, b);
  }, te = (c, u, h, _, b) => {
    if (h && T(c, h), _)
      for (let m = 0; m < _.length; m++)
        T(c, _[m]);
    if (b) {
      let m = b.subTree;
      if (m.patchFlag > 0 && m.patchFlag & 2048 && (m = Ir(m.children) || m), u === m || Ho(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const S = b.vnode;
        te(
          c,
          S,
          S.scopeId,
          S.slotScopeIds,
          b.parent
        );
      }
    }
  }, le = (c, u, h, _, b, m, S, x, v = 0) => {
    for (let y = v; y < c.length; y++) {
      const P = c[y] = x ? qe(c[y]) : Se(c[y]);
      O(
        null,
        P,
        u,
        h,
        _,
        b,
        m,
        S,
        x
      );
    }
  }, Be = (c, u, h, _, b, m, S) => {
    const x = u.el = c.el;
    x.__vnode = u;
    let { patchFlag: v, dynamicChildren: y, dirs: P } = u;
    v |= c.patchFlag & 16;
    const C = c.props || K, E = u.props || K;
    let R;
    if (h && ct(h, !1), (R = E.onVnodeBeforeUpdate) && Ie(R, h, u, c), P && lt(u, c, h, "beforeUpdate"), h && ct(h, !0), Ne && (v = 0, S = !1, y = null), (C.innerHTML && E.innerHTML == null || C.textContent && E.textContent == null) && d(x, ""), y ? (Ze(
      c.dynamicChildren,
      y,
      x,
      h,
      _,
      zn(u, b),
      m
    ), ar(c, u)) : S || $e(
      c,
      u,
      x,
      null,
      h,
      _,
      zn(u, b),
      m,
      !1
    ), v > 0) {
      if (v & 16)
        we(x, C, E, h, b);
      else if (v & 2 && C.class !== E.class && o(x, "class", null, E.class, b), v & 4 && o(x, "style", C.style, E.style, b), v & 8) {
        const j = u.dynamicProps;
        for (let W = 0; W < j.length; W++) {
          const B = j[W], fe = C[B], ue = E[B];
          (ue !== fe || B === "value") && o(x, B, fe, ue, b, h);
        }
      }
      v & 1 && c.children !== u.children && d(x, u.children);
    } else !S && y == null && we(x, C, E, h, b);
    ((R = E.onVnodeUpdated) || P) && ae(() => {
      R && Ie(R, h, u, c), P && lt(u, c, h, "updated");
    }, _);
  }, Ze = (c, u, h, _, b, m, S) => {
    for (let x = 0; x < u.length; x++) {
      const v = c[x], y = u[x], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ft(v, y) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? a(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      O(
        v,
        y,
        P,
        null,
        _,
        b,
        m,
        S,
        !0
      );
    }
  }, we = (c, u, h, _, b) => {
    if (u !== h) {
      if (u !== K)
        for (const m in u)
          !Nt(m) && !(m in h) && o(
            c,
            m,
            u[m],
            null,
            b,
            _
          );
      for (const m in h) {
        if (Nt(m)) continue;
        const S = h[m], x = u[m];
        S !== x && m !== "value" && o(c, m, x, S, b, _);
      }
      "value" in h && o(c, "value", u.value, h.value, b);
    }
  }, rn = (c, u, h, _, b, m, S, x, v) => {
    const y = u.el = c ? c.el : l(""), P = u.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: E, slotScopeIds: R } = u;
    // #5523 dev root fragment may inherit directives
    (Ne || C & 2048) && (C = 0, v = !1, E = null), R && (x = x ? x.concat(R) : R), c == null ? (r(y, h, _), r(P, h, _), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      P,
      b,
      m,
      S,
      x,
      v
    )) : C > 0 && C & 64 && E && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === E.length ? (Ze(
      c.dynamicChildren,
      E,
      h,
      b,
      m,
      S,
      x
    ), ar(c, u)) : $e(
      c,
      u,
      h,
      P,
      b,
      m,
      S,
      x,
      v
    );
  }, Nr = (c, u, h, _, b, m, S, x, v) => {
    u.slotScopeIds = x, c == null ? u.shapeFlag & 512 ? b.ctx.activate(
      u,
      h,
      _,
      S,
      v
    ) : Qe(
      u,
      h,
      _,
      b,
      m,
      S,
      v
    ) : ce(c, u, v);
  }, Qe = (c, u, h, _, b, m, S) => {
    const x = c.component = Ec(
      c,
      _,
      b
    );
    if (x.type.__hmrId && el(x), an(c), vt(x, "mount"), Pr(c) && (x.ctx.renderer = Pt), vt(x, "init"), Ac(x, !1, S), wt(x, "init"), Ne && (c.el = null), x.asyncDep) {
      if (b && b.registerDep(x, N, S), !c.el) {
        const v = x.subTree = Le(be);
        G(null, v, u, h), c.placeholder = v.el;
      }
    } else
      N(
        x,
        c,
        u,
        h,
        b,
        m,
        S
      );
    dn(), wt(x, "mount");
  }, ce = (c, u, h) => {
    const _ = u.component = c.component;
    if (Zl(c, u, h))
      if (_.asyncDep && !_.asyncResolved) {
        an(u), F(_, u, h), dn();
        return;
      } else
        _.next = u, _.update();
    else
      u.el = c.el, _.vnode = u;
  }, N = (c, u, h, _, b, m, S) => {
    const x = () => {
      if (c.isMounted) {
        let { next: C, bu: E, u: R, parent: j, vnode: W } = c;
        {
          const Pe = Fo(c);
          if (Pe) {
            C && (C.el = W.el, F(c, C, S)), Pe.asyncDep.then(() => {
              ae(() => {
                c.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let B = C, fe;
        an(C || c.vnode), ct(c, !1), C ? (C.el = W.el, F(c, C, S)) : C = W, E && It(E), (fe = C.props && C.props.onVnodeBeforeUpdate) && Ie(fe, j, C, W), ct(c, !0), vt(c, "render");
        const ue = os(c);
        wt(c, "render");
        const Ae = c.subTree;
        c.subTree = ue, vt(c, "patch"), O(
          Ae,
          ue,
          // parent may have changed if it's in a teleport
          a(Ae.el),
          // anchor may have changed if it's in a fragment
          sn(Ae),
          c,
          b,
          m
        ), wt(c, "patch"), C.el = ue.el, B === null && Ql(c, ue.el), R && ae(R, b), (fe = C.props && C.props.onVnodeUpdated) && ae(
          () => Ie(fe, j, C, W),
          b
        ), fo(c), dn();
      } else {
        let C;
        const { el: E, props: R } = u, { bm: j, m: W, parent: B, root: fe, type: ue } = c, Ae = Ut(u);
        ct(c, !1), j && It(j), !Ae && (C = R && R.onVnodeBeforeMount) && Ie(C, B, u), ct(c, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(ue), vt(c, "render");
          const Pe = c.subTree = os(c);
          wt(c, "render"), vt(c, "patch"), O(
            null,
            Pe,
            h,
            _,
            c,
            b,
            m
          ), wt(c, "patch"), u.el = Pe.el;
        }
        if (W && ae(W, b), !Ae && (C = R && R.onVnodeMounted)) {
          const Pe = u;
          ae(
            () => Ie(C, B, Pe),
            b
          );
        }
        (u.shapeFlag & 256 || B && Ut(B.vnode) && B.vnode.shapeFlag & 256) && c.a && ae(c.a, b), c.isMounted = !0, il(c), u = h = _ = null;
      }
    };
    c.scope.on();
    const v = c.effect = new Hs(x);
    c.scope.off();
    const y = c.update = v.run.bind(v), P = c.job = v.runIfDirty.bind(v);
    P.i = c, P.id = c.uid, v.scheduler = () => Dn(P), ct(c, !0), v.onTrack = c.rtc ? (C) => It(c.rtc, C) : void 0, v.onTrigger = c.rtg ? (C) => It(c.rtg, C) : void 0, y();
  }, F = (c, u, h) => {
    u.component = c;
    const _ = c.vnode.props;
    c.vnode = u, c.next = null, nc(c, u.props, _, h), dc(c, u.children, h), Oe(), Jr(c), Ee();
  }, $e = (c, u, h, _, b, m, S, x, v = !1) => {
    const y = c && c.children, P = c ? c.shapeFlag : 0, C = u.children, { patchFlag: E, shapeFlag: R } = u;
    if (E > 0) {
      if (E & 128) {
        $t(
          y,
          C,
          h,
          _,
          b,
          m,
          S,
          x,
          v
        );
        return;
      } else if (E & 256) {
        Nn(
          y,
          C,
          h,
          _,
          b,
          m,
          S,
          x,
          v
        );
        return;
      }
    }
    R & 8 ? (P & 16 && At(y, b, m), C !== y && d(h, C)) : P & 16 ? R & 16 ? $t(
      y,
      C,
      h,
      _,
      b,
      m,
      S,
      x,
      v
    ) : At(y, b, m, !0) : (P & 8 && d(h, ""), R & 16 && le(
      C,
      h,
      _,
      b,
      m,
      S,
      x,
      v
    ));
  }, Nn = (c, u, h, _, b, m, S, x, v) => {
    c = c || St, u = u || St;
    const y = c.length, P = u.length, C = Math.min(y, P);
    let E;
    for (E = 0; E < C; E++) {
      const R = u[E] = v ? qe(u[E]) : Se(u[E]);
      O(
        c[E],
        R,
        h,
        null,
        b,
        m,
        S,
        x,
        v
      );
    }
    y > P ? At(
      c,
      b,
      m,
      !0,
      !1,
      C
    ) : le(
      u,
      h,
      _,
      b,
      m,
      S,
      x,
      v,
      C
    );
  }, $t = (c, u, h, _, b, m, S, x, v) => {
    let y = 0;
    const P = u.length;
    let C = c.length - 1, E = P - 1;
    for (; y <= C && y <= E; ) {
      const R = c[y], j = u[y] = v ? qe(u[y]) : Se(u[y]);
      if (Ft(R, j))
        O(
          R,
          j,
          h,
          null,
          b,
          m,
          S,
          x,
          v
        );
      else
        break;
      y++;
    }
    for (; y <= C && y <= E; ) {
      const R = c[C], j = u[E] = v ? qe(u[E]) : Se(u[E]);
      if (Ft(R, j))
        O(
          R,
          j,
          h,
          null,
          b,
          m,
          S,
          x,
          v
        );
      else
        break;
      C--, E--;
    }
    if (y > C) {
      if (y <= E) {
        const R = E + 1, j = R < P ? u[R].el : _;
        for (; y <= E; )
          O(
            null,
            u[y] = v ? qe(u[y]) : Se(u[y]),
            h,
            j,
            b,
            m,
            S,
            x,
            v
          ), y++;
      }
    } else if (y > E)
      for (; y <= C; )
        et(c[y], b, m, !0), y++;
    else {
      const R = y, j = y, W = /* @__PURE__ */ new Map();
      for (y = j; y <= E; y++) {
        const re = u[y] = v ? qe(u[y]) : Se(u[y]);
        re.key != null && (W.has(re.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(re.key),
          "Make sure keys are unique."
        ), W.set(re.key, y));
      }
      let B, fe = 0;
      const ue = E - j + 1;
      let Ae = !1, Pe = 0;
      const Mt = new Array(ue);
      for (y = 0; y < ue; y++) Mt[y] = 0;
      for (y = R; y <= C; y++) {
        const re = c[y];
        if (fe >= ue) {
          et(re, b, m, !0);
          continue;
        }
        let Me;
        if (re.key != null)
          Me = W.get(re.key);
        else
          for (B = j; B <= E; B++)
            if (Mt[B - j] === 0 && Ft(re, u[B])) {
              Me = B;
              break;
            }
        Me === void 0 ? et(re, b, m, !0) : (Mt[Me - j] = y + 1, Me >= Pe ? Pe = Me : Ae = !0, O(
          re,
          u[Me],
          h,
          null,
          b,
          m,
          S,
          x,
          v
        ), fe++);
      }
      const Vr = Ae ? bc(Mt) : St;
      for (B = Vr.length - 1, y = ue - 1; y >= 0; y--) {
        const re = j + y, Me = u[re], kr = u[re + 1], Ur = re + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          kr.el || jo(kr)
        ) : _;
        Mt[y] === 0 ? O(
          null,
          Me,
          h,
          Ur,
          b,
          m,
          S,
          x,
          v
        ) : Ae && (B < 0 || y !== Vr[B] ? yt(Me, h, Ur, 2) : B--);
      }
    }
  }, yt = (c, u, h, _, b = null) => {
    const { el: m, type: S, transition: x, children: v, shapeFlag: y } = c;
    if (y & 6) {
      yt(c.component.subTree, u, h, _);
      return;
    }
    if (y & 128) {
      c.suspense.move(u, h, _);
      return;
    }
    if (y & 64) {
      S.move(c, u, h, Pt);
      return;
    }
    if (S === ve) {
      r(m, u, h);
      for (let C = 0; C < v.length; C++)
        yt(v[C], u, h, _);
      r(c.anchor, u, h);
      return;
    }
    if (S === gn) {
      ge(c, u, h);
      return;
    }
    if (_ !== 2 && y & 1 && x)
      if (_ === 0)
        x.beforeEnter(m), r(m, u, h), ae(() => x.enter(m), b);
      else {
        const { leave: C, delayLeave: E, afterLeave: R } = x, j = () => {
          c.ctx.isUnmounted ? s(m) : r(m, u, h);
        }, W = () => {
          m._isLeaving && m[_l](
            !0
            /* cancelled */
          ), C(m, () => {
            j(), R && R();
          });
        };
        E ? E(m, j, W) : W();
      }
    else
      r(m, u, h);
  }, et = (c, u, h, _ = !1, b = !1) => {
    const {
      type: m,
      props: S,
      ref: x,
      children: v,
      dynamicChildren: y,
      shapeFlag: P,
      patchFlag: C,
      dirs: E,
      cacheIndex: R
    } = c;
    if (C === -2 && (b = !1), x != null && (Oe(), kt(x, null, h, c, !0), Ee()), R != null && (u.renderCache[R] = void 0), P & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const j = P & 1 && E, W = !Ut(c);
    let B;
    if (W && (B = S && S.onVnodeBeforeUnmount) && Ie(B, u, c), P & 6)
      zo(c.component, h, _);
    else {
      if (P & 128) {
        c.suspense.unmount(h, _);
        return;
      }
      j && lt(c, null, u, "beforeUnmount"), P & 64 ? c.type.remove(
        c,
        u,
        h,
        Pt,
        _
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== ve || C > 0 && C & 64) ? At(
        y,
        u,
        h,
        !1,
        !0
      ) : (m === ve && C & 384 || !b && P & 16) && At(v, u, h), _ && Ln(c);
    }
    (W && (B = S && S.onVnodeUnmounted) || j) && ae(() => {
      B && Ie(B, u, c), j && lt(c, null, u, "unmounted");
    }, h);
  }, Ln = (c) => {
    const { type: u, el: h, anchor: _, transition: b } = c;
    if (u === ve) {
      c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((S) => {
        S.type === be ? s(S.el) : Ln(S);
      }) : Yo(h, _);
      return;
    }
    if (u === gn) {
      $(c);
      return;
    }
    const m = () => {
      s(h), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: S, delayLeave: x } = b, v = () => S(h, m);
      x ? x(c.el, m, v) : v();
    } else
      m();
  }, Yo = (c, u) => {
    let h;
    for (; c !== u; )
      h = g(c), s(c), c = h;
    s(u);
  }, zo = (c, u, h) => {
    c.type.__hmrId && tl(c);
    const { bum: _, scope: b, job: m, subTree: S, um: x, m: v, a: y } = c;
    as(v), as(y), _ && It(_), b.stop(), m && (m.flags |= 8, et(S, c, u, h)), x && ae(x, u), ae(() => {
      c.isUnmounted = !0;
    }, u), cl(c);
  }, At = (c, u, h, _ = !1, b = !1, m = 0) => {
    for (let S = m; S < c.length; S++)
      et(c[S], u, h, _, b);
  }, sn = (c) => {
    if (c.shapeFlag & 6)
      return sn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = g(c.anchor || c.el), h = u && u[bl];
    return h ? g(h) : u;
  };
  let Vn = !1;
  const Lr = (c, u, h) => {
    let _;
    c == null ? u._vnode && (et(u._vnode, null, null, !0), _ = u._vnode.component) : O(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, Vn || (Vn = !0, Jr(_), oo(), Vn = !1);
  }, Pt = {
    p: O,
    um: et,
    m: yt,
    r: Ln,
    mt: Qe,
    mc: le,
    pc: $e,
    pbc: Ze,
    n: sn,
    o: e
  };
  return {
    render: Lr,
    hydrate: void 0,
    createApp: Gl(Lr)
  };
}
function zn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ct({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ar(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (A(r) && A(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let l = s[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[o] = qe(s[o]), l.el = i.el), !n && l.patchFlag !== -2 && ar(i, l)), l.type === en && (l.patchFlag === -1 && (l = s[o] = qe(l)), l.el = i.el), l.type === be && !l.el && (l.el = i.el), l.el && (l.el.__vnode = l);
    }
}
function bc(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, l;
  const f = e.length;
  for (r = 0; r < f; r++) {
    const p = e[r];
    if (p !== 0) {
      if (s = n[n.length - 1], e[s] < p) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < p ? o = l + 1 : i = l;
      p < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Fo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fo(t);
}
function as(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function jo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? jo(t.subTree) : null;
}
const Ho = (e) => e.__isSuspense;
function yc(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : so(e);
}
const ve = /* @__PURE__ */ Symbol.for("v-fgt"), en = /* @__PURE__ */ Symbol.for("v-txt"), be = /* @__PURE__ */ Symbol.for("v-cmt"), gn = /* @__PURE__ */ Symbol.for("v-stc"), Bt = [];
let me = null;
function _e(e = !1) {
  Bt.push(me = e ? null : []);
}
function _c() {
  Bt.pop(), me = Bt[Bt.length - 1] || null;
}
let qt = 1;
function ds(e, t = !1) {
  qt += e, e < 0 && me && t && (me.hasOnce = !0);
}
function No(e) {
  return e.dynamicChildren = qt > 0 ? me || St : null, _c(), qt > 0 && me && me.push(e), e;
}
function xe(e, t, n, r, s, o) {
  return No(
    J(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function vc(e, t, n, r, s) {
  return No(
    Le(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function Hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ft(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = pn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const wc = (...e) => xc(
  ...e
), Lo = ({ key: e }) => e ?? null, mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || /* @__PURE__ */ Z(e) || M(e) ? { i: pe, r: e, k: t, f: !!n } : e : null);
function J(e, t = null, n = null, r = 0, s = null, o = e === ve ? 0 : 1, i = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Lo(t),
    ref: t && mn(t),
    scopeId: ao,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  };
  return l ? (Fr(f, n), o & 128 && e.normalize(f)) : n && (f.shapeFlag |= q(n) ? 8 : 16), f.key !== f.key && w("VNode created with invalid key (NaN). VNode type:", f.type), qt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && me.push(f), f;
}
const Le = wc;
function xc(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === Dl) && (e || w(`Invalid vnode type when creating vnode: ${e}.`), e = be), Hn(e)) {
    const l = it(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Fr(l, n), qt > 0 && !o && me && (l.shapeFlag & 6 ? me[me.indexOf(e)] = l : me.push(l)), l.patchFlag = -2, l;
  }
  if (Wo(e) && (e = e.__vccOpts), t) {
    t = Sc(t);
    let { class: l, style: f } = t;
    l && !q(l) && (t.class = vr(l)), L(f) && (/* @__PURE__ */ vn(f) && !A(f) && (f = z({}, f)), t.style = _r(f));
  }
  const i = q(e) ? 1 : Ho(e) ? 128 : yl(e) ? 64 : L(e) ? 4 : M(e) ? 2 : 0;
  return i & 4 && /* @__PURE__ */ vn(e) && (e = /* @__PURE__ */ D(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), J(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Sc(e) {
  return e ? /* @__PURE__ */ vn(e) || Ao(e) ? z({}, e) : e : null;
}
function it(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: l, transition: f } = e, p = t ? Cc(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Lo(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? A(o) ? o.concat(mn(t)) : [o, mn(t)] : mn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i === -1 && A(l) ? l.map(Vo) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && it(e.ssContent),
    ssFallback: e.ssFallback && it(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && r && Ar(
    d,
    f.clone(d)
  ), d;
}
function Vo(e) {
  const t = it(e);
  return A(e.children) && (t.children = e.children.map(Vo)), t;
}
function ko(e = " ", t = 0) {
  return Le(en, null, e, t);
}
function fn(e = "", t = !1) {
  return t ? (_e(), vc(be, null, e)) : Le(be, null, e);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? Le(be) : A(e) ? Le(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hn(e) ? qe(e) : Le(en, null, String(e));
}
function qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : it(e);
}
function Fr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Fr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ao(t) ? t._ctx = pe : s === 3 && pe && (pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else M(t) ? (t = { default: t, _ctx: pe }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ko(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Cc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = vr([t.class, r.class]));
      else if (s === "style")
        t.style = _r([t.style, r.style]);
      else if (Yt(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(A(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Ie(e, t, n, r = null) {
  Ue(e, t, 7, [
    n,
    r
  ]);
}
const Tc = So();
let Oc = 0;
function Ec(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Tc, o = {
    uid: Oc++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new yi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Mo(r, s),
    emitsOptions: Co(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = jl(o), o.root = t ? t.root : o, o.emit = Jl.bind(null, o), e.ce && e.ce(o), o;
}
let X = null;
const Uo = () => X || pe;
let An, dr;
{
  const e = Xt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  An = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => X = n
  ), dr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Jt = n
  );
}
const tn = (e) => {
  const t = X;
  return An(e), e.scope.on(), () => {
    e.scope.off(), An(t);
  };
}, ps = () => {
  X && X.scope.off(), An(null);
}, $c = /* @__PURE__ */ ze("slot,component");
function pr(e, { isNativeTag: t }) {
  ($c(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Bo(e) {
  return e.vnode.shapeFlag & 4;
}
let Jt = !1;
function Ac(e, t = !1, n = !1) {
  t && dr(t);
  const { props: r, children: s } = e.vnode, o = Bo(e);
  ec(e, r, o, t), ac(e, s, n || t);
  const i = o ? Pc(e, t) : void 0;
  return t && dr(!1), i;
}
function Pc(e, t) {
  const n = e.type;
  {
    if (n.name && pr(n.name, e.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let o = 0; o < s.length; o++)
        pr(s[o], e.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let o = 0; o < s.length; o++)
        po(s[o]);
    }
    n.compilerOptions && Mc() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, vo), Hl(e);
  const { setup: r } = n;
  if (r) {
    Oe();
    const s = e.setupContext = r.length > 1 ? Dc(e) : null, o = tn(e), i = Et(
      r,
      e,
      0,
      [
        /* @__PURE__ */ He(e.props),
        s
      ]
    ), l = mr(i);
    if (Ee(), o(), (l || e.sp) && !Ut(e) && bo(e), l) {
      if (i.then(ps, ps), t)
        return i.then((f) => {
          hs(e, f, t);
        }).catch((f) => {
          Zt(f, e, 0);
        });
      if (e.asyncDep = i, !e.suspense) {
        const f = nn(e, n);
        w(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      hs(e, i, t);
  } else
    Ko(e, t);
}
function hs(e, t, n) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : L(t) ? (Hn(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = eo(t), Nl(e)) : t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ko(e, n);
}
const Mc = () => !0;
function Ko(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ne);
  {
    const s = tn(e);
    Oe();
    try {
      Vl(e);
    } finally {
      Ee(), s();
    }
  }
  !r.render && e.render === ne && !t && (r.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function: ", r));
}
const Ic = {
  get(e, t) {
    return En(), ee(e, "get", ""), e[t];
  },
  set() {
    return w("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return w("setupContext.attrs is readonly."), !1;
  }
};
function Rc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ee(e, "get", "$slots"), t[n];
    }
  });
}
function Dc(e) {
  const t = (n) => {
    if (e.exposed && w("expose() should be called only once per setup()."), n != null) {
      let r = typeof n;
      r === "object" && (A(n) ? r = "array" : /* @__PURE__ */ Z(n) && (r = "ref")), r !== "object" && w(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ic));
      },
      get slots() {
        return r || (r = Rc(e));
      },
      get emit() {
        return (s, ...o) => e.emit(s, ...o);
      },
      expose: t
    });
  }
}
function jr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(eo(Li(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in gt)
        return gt[n](e);
    },
    has(t, n) {
      return n in t || n in gt;
    }
  })) : e.proxy;
}
const Fc = /(?:^|[-_])\w/g, jc = (e) => e.replace(Fc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Hr(e, t = !0) {
  return M(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function nn(e, t, n = !1) {
  let r = Hr(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(e.components) || e.parent && s(
      e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? jc(r) : n ? "App" : "Anonymous";
}
function Wo(e) {
  return M(e) && "__vccOpts" in e;
}
const Hc = (e, t) => {
  const n = /* @__PURE__ */ Bi(e, t, Jt);
  {
    const r = Uo();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Nc() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!L(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ Z(a)) {
        Oe();
        const g = a.value;
        return Ee(), [
          "div",
          {},
          ["span", e, d(a)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ st(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ he(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${/* @__PURE__ */ ke(a) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ ke(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ he(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...o(a.$)
        ];
    }
  };
  function o(a) {
    const g = [];
    a.type.props && a.props && g.push(i("props", /* @__PURE__ */ D(a.props))), a.setupState !== K && g.push(i("setup", a.setupState)), a.data !== K && g.push(i("data", /* @__PURE__ */ D(a.data)));
    const T = f(a, "computed");
    T && g.push(i("computed", T));
    const I = f(a, "inject");
    return I && g.push(i("injected", I)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function i(a, g) {
    return g = z({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((T) => [
          "div",
          {},
          ["span", r, T + ": "],
          l(g[T], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", r, a] : L(a) ? ["object", { object: g ? /* @__PURE__ */ D(a) : a }] : ["span", n, String(a)];
  }
  function f(a, g) {
    const T = a.type;
    if (M(T))
      return;
    const I = {};
    for (const O in a.ctx)
      p(T, O, g) && (I[O] = a.ctx[O]);
    return I;
  }
  function p(a, g, T) {
    const I = a[T];
    if (A(I) && I.includes(g) || L(I) && g in I || a.extends && p(a.extends, g, T) || a.mixins && a.mixins.some((O) => p(O, g, T)))
      return !0;
  }
  function d(a) {
    return /* @__PURE__ */ he(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const gs = "3.5.29", Je = w;
let hr;
const ms = typeof window < "u" && window.trustedTypes;
if (ms)
  try {
    hr = /* @__PURE__ */ ms.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Je(`Error creating trusted types policy: ${e}`);
  }
const Go = hr ? (e) => hr.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Vc = "http://www.w3.org/1998/Math/MathML", We = typeof document < "u" ? document : null, bs = We && /* @__PURE__ */ We.createElement("template"), kc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? We.createElementNS(Lc, e) : t === "mathml" ? We.createElementNS(Vc, e) : n ? We.createElement(e, { is: n }) : We.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => We.createTextNode(e),
  createComment: (e) => We.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => We.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      bs.innerHTML = Go(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = bs.content;
      if (r === "svg" || r === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Uc = /* @__PURE__ */ Symbol("_vtc");
function Bc(e, t, n) {
  const r = e[Uc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ys = /* @__PURE__ */ Symbol("_vod"), Kc = /* @__PURE__ */ Symbol("_vsh"), Wc = /* @__PURE__ */ Symbol("CSS_VAR_TEXT"), Gc = /(?:^|;)\s*display\s*:/;
function qc(e, t, n) {
  const r = e.style, s = q(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (q(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && bn(r, l, "");
        }
      else
        for (const i in t)
          n[i] == null && bn(r, i, "");
    for (const i in n)
      i === "display" && (o = !0), bn(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[Wc];
      i && (n += ";" + i), r.cssText = n, o = Gc.test(n);
    }
  } else t && e.removeAttribute("style");
  ys in e && (e[ys] = o ? r.display : "", e[Kc] && (r.display = "none"));
}
const Jc = /[^\\];\s*$/, _s = /\s*!important$/;
function bn(e, t, n) {
  if (A(n))
    n.forEach((r) => bn(e, t, r));
  else if (n == null && (n = ""), Jc.test(n) && Je(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Yc(e, t);
    _s.test(n) ? e.setProperty(
      ot(r),
      n.replace(_s, ""),
      "important"
    ) : e[r] = n;
  }
}
const vs = ["Webkit", "Moz", "ms"], Xn = {};
function Yc(e, t) {
  const n = Xn[t];
  if (n)
    return n;
  let r = ie(t);
  if (r !== "filter" && r in e)
    return Xn[t] = r;
  r = mt(r);
  for (let s = 0; s < vs.length; s++) {
    const o = vs[s] + r;
    if (o in e)
      return Xn[t] = o;
  }
  return t;
}
const ws = "http://www.w3.org/1999/xlink";
function xs(e, t, n, r, s, o = mi(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ws, t.slice(6, t.length)) : e.setAttributeNS(ws, t, n) : n == null || o && !Ds(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ve(n) ? String(n) : n
  );
}
function Ss(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Go(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ds(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    i || Je(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(s || t);
}
function zc(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Xc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Cs = /* @__PURE__ */ Symbol("_vei");
function Zc(e, t, n, r, s = null) {
  const o = e[Cs] || (e[Cs] = {}), i = o[t];
  if (r && i)
    i.value = Os(r, t);
  else {
    const [l, f] = Qc(t);
    if (r) {
      const p = o[t] = nf(
        Os(r, t),
        s
      );
      zc(e, l, p, f);
    } else i && (Xc(e, l, i, f), o[t] = void 0);
  }
}
const Ts = /(?:Once|Passive|Capture)$/;
function Qc(e) {
  let t;
  if (Ts.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ts); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ot(e.slice(2)), t];
}
let Zn = 0;
const ef = /* @__PURE__ */ Promise.resolve(), tf = () => Zn || (ef.then(() => Zn = 0), Zn = Date.now());
function nf(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ue(
      rf(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = tf(), n;
}
function Os(e, t) {
  return M(e) || A(e) ? e : (Je(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ne);
}
function rf(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const Es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sf = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? Bc(e, r, i) : t === "style" ? qc(e, n, r) : Yt(t) ? yn(t) || Zc(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : of(e, t, r, i)) ? (Ss(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xs(e, t, r, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !q(r)) ? Ss(e, ie(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), xs(e, t, r, i));
};
function of(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Es(t) && M(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Es(t) && q(n) ? !1 : t in e;
}
const lf = /* @__PURE__ */ z({ patchProp: sf }, kc);
let $s;
function cf() {
  return $s || ($s = hc(lf));
}
const ff = ((...e) => {
  const t = cf().createApp(...e);
  af(t), df(t);
  const { mount: n } = t;
  return t.mount = (r) => {
    const s = pf(r);
    if (!s) return;
    const o = t._component;
    !M(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, uf(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
});
function uf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function af(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => di(t) || pi(t) || hi(t),
    writable: !1
  });
}
function df(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Je(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Je(r), n;
      },
      set() {
        Je(r);
      }
    });
  }
}
function pf(e) {
  if (q(e)) {
    const t = document.querySelector(e);
    return t || Je(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Je(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function hf() {
  Nc();
}
hf();
const gf = "/umbraco/management/api/v1";
let un = null;
async function qo(e, t) {
  const n = new Xo(e, t);
  try {
    n.hostConnected();
    const r = await n.asPromise();
    if (!r)
      throw new Error("Context var null: " + t.toString());
    return console.log("[Umbraco] Got context:", t.toString()), r;
  } finally {
    n.hostDisconnected(), n.destroy();
  }
}
async function mf(e) {
  if (un) return un;
  const n = await (await qo(e, Zo)).getOpenApiConfiguration();
  return un = typeof n.token == "function" ? await n.token() : n.token, console.log("[Umbraco] Got auth token"), un;
}
async function bf(e, t) {
  const n = await mf(e), r = await fetch(gf + t, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + n
    }
  });
  if (!r.ok)
    throw new Error("Management API fejl: " + r.status + " " + t);
  return r.json();
}
async function yf(e, t, n, r) {
  try {
    (await qo(e, Qo)).peek(t, { data: { headline: n, message: r } });
  } catch {
    console.log("[Notification fallback]", t, n, r);
  }
}
const Jo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, _f = /* @__PURE__ */ mo({
  name: "Button",
  // Host-elementet (custom element) injiceres fra createApp().provide()
  //inject: ['hostElement'],
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    addToCounter: function() {
      this.counter++;
    }
  }
});
function vf(e, t, n, r, s, o) {
  return _e(), xe("button", {
    class: "btn btn-primary",
    onClick: t[0] || (t[0] = (...i) => e.addToCounter && e.addToCounter(...i))
  }, "Click me (" + Re(e.counter) + ")", 1);
}
const wf = /* @__PURE__ */ Jo(_f, [["render", vf]]), xf = /* @__PURE__ */ mo({
  name: "BrandDashboard",
  // Host-elementet (custom element) injiceres fra createApp().provide()
  inject: ["hostElement"],
  components: {
    "semler-button": wf
  },
  data() {
    return {
      loading: !0,
      error: null,
      currentUser: null,
      documents: [],
      stats: [
        { label: "Sider", value: "–" },
        { label: "Media", value: "–" },
        { label: "Sprog", value: "–" },
        { label: "Dokumenttyper", value: "–" }
      ]
    };
  },
  async mounted() {
    console.log("[Vue] Host element:", this.hostElement?.tagName), await this.refreshAll();
  },
  methods: {
    async api(e) {
      return bf(this.hostElement, e);
    },
    async refreshAll() {
      this.loading = !0, this.error = null;
      try {
        await Promise.all([
          this.loadUser(),
          this.loadDocuments(),
          this.loadStats()
        ]), yf(this.hostElement, "positive", "Dashboard klar", "Data loaded!");
      } catch (e) {
        console.error("[Vue] Refresh fejlede:", e), this.error = e.message;
      } finally {
        this.loading = !1;
      }
    },
    async loadUser() {
      this.currentUser = await this.api("/user/current");
    },
    async loadDocuments() {
      const e = await this.api("/tree/document/root?skip=0&take=10");
      this.documents = e.items ?? [];
    },
    async loadStats() {
      const [e, t, n, r] = await Promise.all([
        // tree/document/root for at tælle content nodes
        this.api("/tree/document/root?skip=0&take=0"),
        // collection/media kræver id — brug tree/media/root i stedet
        this.api("/tree/media/root?skip=0&take=0"),
        // language endpoint har GET med paging
        this.api("/language"),
        // tree/document-type/root for at tælle dokumenttyper
        this.api("/tree/document-type/root?skip=0&take=0")
      ]);
      this.stats = [
        { label: "Sider", value: e.total ?? 0 },
        { label: "Media", value: t.total ?? 0 },
        { label: "Sprog", value: n.items?.length ?? 0 },
        { label: "Dokumenttyper", value: r.total ?? 0 }
      ];
    },
    getDocumentName(e) {
      return e.variants?.[0]?.name ?? "Uden navn";
    },
    getDocumentTypeAlias(e) {
      return e.documentType?.alias ?? "Ukendt";
    },
    getStatusColor(e) {
      const t = e.variants?.[0]?.state;
      return t === "Published" || t === "PublishedPendingChanges" ? "positive" : t === "Draft" ? "warning" : "default";
    },
    getStatusLabel(e) {
      const t = e.variants?.[0]?.state;
      return t === "Published" ? "Publiceret" : t === "PublishedPendingChanges" ? "Publiceret (ændringer)" : t === "Draft" ? "Kladde" : t ?? "Ukendt";
    },
    formatDate(e) {
      const t = e.createDate;
      return t ? new Date(t).toLocaleDateString("da-DK", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : "–";
    }
  }
}), Sf = { class: "brand-dashboard" }, Cf = { key: 0 }, Tf = {
  key: 1,
  headline: "Velkommen"
}, Of = {
  class: "dashboard-grid",
  style: { "margin-top": "16px" }
}, Ef = { class: "stat-card" }, $f = { class: "stat-value" }, Af = { class: "stat-label" }, Pf = {
  headline: "Senest opdateret content",
  style: { "margin-top": "16px" }
}, Mf = { key: 0 }, If = { look: "secondary" }, Rf = ["color"], Df = { key: 1 }, Ff = {
  headline: "Hurtige handlinger",
  style: { "margin-top": "16px" }
}, jf = {
  key: 2,
  style: { color: "red" }
};
function Hf(e, t, n, r, s, o) {
  const i = Rl("semler-button");
  return _e(), xe("div", Sf, [
    e.loading ? (_e(), xe("uui-loader-bar", Cf)) : fn("", !0),
    e.currentUser ? (_e(), xe("uui-box", Tf, [
      J("p", null, [
        t[1] || (t[1] = ko(" Logget ind som ", -1)),
        J("strong", null, Re(e.currentUser.name), 1)
      ])
    ])) : fn("", !0),
    J("div", Of, [
      (_e(!0), xe(ve, null, es(e.stats, (l) => (_e(), xe("uui-box", {
        key: l.label
      }, [
        J("div", Ef, [
          J("span", $f, Re(l.value), 1),
          J("span", Af, Re(l.label), 1)
        ])
      ]))), 128))
    ]),
    J("uui-box", Pf, [
      e.documents.length ? (_e(), xe("uui-table", Mf, [
        t[2] || (t[2] = J("uui-table-head", null, [
          J("uui-table-head-cell", null, "Navn"),
          J("uui-table-head-cell", null, "Type"),
          J("uui-table-head-cell", null, "Status"),
          J("uui-table-head-cell", null, "Opdateret")
        ], -1)),
        (_e(!0), xe(ve, null, es(e.documents, (l) => (_e(), xe("uui-table-row", {
          key: l.id
        }, [
          J("uui-table-cell", null, Re(e.getDocumentName(l)), 1),
          J("uui-table-cell", null, [
            J("uui-tag", If, Re(e.getDocumentTypeAlias(l)), 1)
          ]),
          J("uui-table-cell", null, [
            J("uui-tag", {
              color: e.getStatusColor(l),
              look: "primary"
            }, Re(e.getStatusLabel(l)), 9, Rf)
          ]),
          J("uui-table-cell", null, Re(e.formatDate(l)), 1)
        ]))), 128))
      ])) : e.loading ? fn("", !0) : (_e(), xe("p", Df, "Ingen content fundet."))
    ]),
    J("uui-box", Ff, [
      J("uui-button", {
        look: "primary",
        color: "positive",
        label: "Opdater",
        onClick: t[0] || (t[0] = (...l) => e.refreshAll && e.refreshAll(...l))
      }),
      Le(i)
    ]),
    e.error ? (_e(), xe("p", jf, Re(e.error), 1)) : fn("", !0)
  ]);
}
const Nf = /* @__PURE__ */ Jo(xf, [["render", Hf]]);
class Lf extends HTMLElement {
  connectedCallback() {
    const t = document.createElement("div");
    this.appendChild(t), this._app = ff(Nf), this._app.provide("hostElement", this), this._app.mount(t), console.log("[Vue Dashboard] Mounted semler-brand-dashboard");
  }
  disconnectedCallback() {
    this._app && (this._app.unmount(), this._app = null), this.innerHTML = "", console.log("[Vue Dashboard] Unmounted semler-brand-dashboard");
  }
}
customElements.define("semler-brand-dashboard", Lf);
//# sourceMappingURL=vue-dashboard.js.map
