import { UmbContextConsumer as Go } from "@umbraco-cms/backoffice/context-api";
import { UMB_AUTH_CONTEXT as qo } from "@umbraco-cms/backoffice/auth";
import { UMB_NOTIFICATION_CONTEXT as Jo } from "@umbraco-cms/backoffice/notification";
// @__NO_SIDE_EFFECTS__
function ze(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const K = Object.freeze({}), xt = Object.freeze([]), ne = () => {
}, Or = () => !1, Jt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), bn = (e) => e.startsWith("onUpdate:"), z = Object.assign, hs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Yo = Object.prototype.hasOwnProperty, H = (e, t) => Yo.call(e, t), P = Array.isArray, at = (e) => Yt(e) === "[object Map]", Er = (e) => Yt(e) === "[object Set]", ks = (e) => Yt(e) === "[object Date]", M = (e) => typeof e == "function", q = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", L = (e) => e !== null && typeof e == "object", gs = (e) => (L(e) || M(e)) && M(e.then) && M(e.catch), Ar = Object.prototype.toString, Yt = (e) => Ar.call(e), ms = (e) => Yt(e).slice(8, -1), Pr = (e) => Yt(e) === "[object Object]", bs = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zo = /* @__PURE__ */ ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Pn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Xo = /-\w/g, xe = Pn(
  (e) => e.replace(Xo, (t) => t.slice(1).toUpperCase())
), Zo = /\B([A-Z])/g, ot = Pn(
  (e) => e.replace(Zo, "-$1").toLowerCase()
), $n = Pn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ft = Pn(
  (e) => e ? `on${$n(e)}` : ""
), dt = (e, t) => !Object.is(e, t), Mt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, yn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Qo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Us;
const zt = () => Us || (Us = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ys(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = q(s) ? si(s) : ys(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (q(e) || L(e))
    return e;
}
const ei = /;(?![^(]*\))/g, ti = /:([^]+)/, ni = /\/\*[^]*?\*\//g;
function si(e) {
  const t = {};
  return e.replace(ni, "").split(ei).forEach((n) => {
    if (n) {
      const s = n.split(ti);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function _s(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = _s(e[n]);
      s && (t += s + " ");
    }
  else if (L(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ri = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", oi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ii = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", li = /* @__PURE__ */ ze(ri), ci = /* @__PURE__ */ ze(oi), fi = /* @__PURE__ */ ze(ii), ui = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ai = /* @__PURE__ */ ze(ui);
function $r(e) {
  return !!e || e === "";
}
function di(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = vs(e[s], t[s]);
  return n;
}
function vs(e, t) {
  if (e === t) return !0;
  let n = ks(e), s = ks(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ne(e), s = Ne(t), n || s)
    return e === t;
  if (n = P(e), s = P(t), n || s)
    return n && s ? di(e, t) : !1;
  if (n = L(e), s = L(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), f = t.hasOwnProperty(i);
      if (l && !f || !l && f || !vs(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Mr = (e) => !!(e && e.__v_isRef === !0), Be = (e) => q(e) ? e : e == null ? "" : P(e) || L(e) && (e.toString === Ar || !M(e.toString)) ? Mr(e) ? Be(e.value) : JSON.stringify(e, Ir, 2) : String(e), Ir = (e, t) => Mr(t) ? Ir(e, t.value) : at(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[kn(s, o) + " =>"] = r, n),
    {}
  )
} : Er(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => kn(n))
} : Ne(t) ? kn(t) : L(t) && !P(t) && !Pr(t) ? String(t) : t, kn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ne(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Ce(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ae;
class pi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ae, !t && ae && (this.index = (ae.scopes || (ae.scopes = [])).push(
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
      const n = ae;
      try {
        return ae = this, t();
      } finally {
        ae = n;
      }
    } else
      Ce("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ae, ae = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ae = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function hi() {
  return ae;
}
let U;
const Un = /* @__PURE__ */ new WeakSet();
class Rr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ae && ae.active && ae.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Un.has(this) && (Un.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || jr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bs(this), Fr(this);
    const t = U, n = Se;
    U = this, Se = !0;
    try {
      return this.fn();
    } finally {
      U !== this && Ce(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Hr(this), U = t, Se = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ss(t);
      this.deps = this.depsTail = void 0, Bs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Un.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Zn(this) && this.run();
  }
  get dirty() {
    return Zn(this);
  }
}
let Dr = 0, Nt, Lt;
function jr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Lt, Lt = e;
    return;
  }
  e.next = Nt, Nt = e;
}
function ws() {
  Dr++;
}
function xs() {
  if (--Dr > 0)
    return;
  if (Lt) {
    let t = Lt;
    for (Lt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Nt; ) {
    let t = Nt;
    for (Nt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Fr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Ss(s), gi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Zn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Nr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Nr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Bt) || (e.globalVersion = Bt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Zn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, s = Se;
  U = e, Se = !0;
  try {
    Fr(e);
    const r = e.fn(e._value);
    (t.version === 0 || dt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    U = n, Se = s, Hr(e), e.flags &= -3;
  }
}
function Ss(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ss(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function gi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Se = !0;
const Lr = [];
function Te() {
  Lr.push(Se), Se = !1;
}
function Oe() {
  const e = Lr.pop();
  Se = e === void 0 ? !0 : e;
}
function Bs(e) {
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
let Bt = 0;
class mi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Vr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, this.subsHead = void 0;
  }
  track(t) {
    if (!U || !Se || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new mi(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, kr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = s);
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
    this.version++, Bt++, this.notify(t);
  }
  notify(t) {
    ws();
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
      xs();
    }
  }
}
function kr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        kr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Qn = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ Symbol(
  "Object iterate"
), es = /* @__PURE__ */ Symbol(
  "Map keys iterate"
), Kt = /* @__PURE__ */ Symbol(
  "Array iterate"
);
function ee(e, t, n) {
  if (Se && U) {
    let s = Qn.get(e);
    s || Qn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Vr()), r.map = s, r.key = n), r.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function De(e, t, n, s, r, o) {
  const i = Qn.get(e);
  if (!i) {
    Bt++;
    return;
  }
  const l = (f) => {
    f && f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: o
    });
  };
  if (ws(), t === "clear")
    i.forEach(l);
  else {
    const f = P(e), p = f && bs(n);
    if (f && n === "length") {
      const d = Number(s);
      i.forEach((a, g) => {
        (g === "length" || g === Kt || !Ne(g) && g >= d) && l(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), p && l(i.get(Kt)), t) {
        case "add":
          f ? p && l(i.get("length")) : (l(i.get(pt)), at(e) && l(i.get(es)));
          break;
        case "delete":
          f || (l(i.get(pt)), at(e) && l(i.get(es)));
          break;
        case "set":
          at(e) && l(i.get(pt));
          break;
      }
  }
  xs();
}
function yt(e) {
  const t = /* @__PURE__ */ D(e);
  return t === e ? t : (ee(t, "iterate", Kt), /* @__PURE__ */ de(e) ? t : t.map(Ye));
}
function Mn(e) {
  return ee(e = /* @__PURE__ */ D(e), "iterate", Kt), e;
}
function tt(e, t) {
  return /* @__PURE__ */ Le(e) ? Tt(/* @__PURE__ */ rt(e) ? Ye(t) : t) : Ye(t);
}
const bi = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bn(this, Symbol.iterator, (e) => tt(this, e));
  },
  concat(...e) {
    return yt(this).concat(
      ...e.map((t) => P(t) ? yt(t) : t)
    );
  },
  entries() {
    return Bn(this, "entries", (e) => (e[1] = tt(this, e[1]), e));
  },
  every(e, t) {
    return Ue(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ue(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => tt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ue(
      this,
      "find",
      e,
      t,
      (n) => tt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ue(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ue(
      this,
      "findLast",
      e,
      t,
      (n) => tt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ue(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ue(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Kn(this, "includes", e);
  },
  indexOf(...e) {
    return Kn(this, "indexOf", e);
  },
  join(e) {
    return yt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Kn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ue(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return It(this, "pop");
  },
  push(...e) {
    return It(this, "push", e);
  },
  reduce(e, ...t) {
    return Ks(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ks(this, "reduceRight", e, t);
  },
  shift() {
    return It(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ue(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return It(this, "splice", e);
  },
  toReversed() {
    return yt(this).toReversed();
  },
  toSorted(e) {
    return yt(this).toSorted(e);
  },
  toSpliced(...e) {
    return yt(this).toSpliced(...e);
  },
  unshift(...e) {
    return It(this, "unshift", e);
  },
  values() {
    return Bn(this, "values", (e) => tt(this, e));
  }
};
function Bn(e, t, n) {
  const s = Mn(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ de(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.done || (o.value = n(o.value)), o;
  }), r;
}
const yi = Array.prototype;
function Ue(e, t, n, s, r, o) {
  const i = Mn(e), l = i !== e && !/* @__PURE__ */ de(e), f = i[t];
  if (f !== yi[t]) {
    const a = f.apply(e, o);
    return l ? Ye(a) : a;
  }
  let p = n;
  i !== e && (l ? p = function(a, g) {
    return n.call(this, tt(e, a), g, e);
  } : n.length > 2 && (p = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const d = f.call(i, p, s);
  return l && r ? r(d) : d;
}
function Ks(e, t, n, s) {
  const r = Mn(e);
  let o = n;
  return r !== e && (/* @__PURE__ */ de(e) ? n.length > 3 && (o = function(i, l, f) {
    return n.call(this, i, l, f, e);
  }) : o = function(i, l, f) {
    return n.call(this, i, tt(e, l), f, e);
  }), r[t](o, ...s);
}
function Kn(e, t, n) {
  const s = /* @__PURE__ */ D(e);
  ee(s, "iterate", Kt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ _n(n[0]) ? (n[0] = /* @__PURE__ */ D(n[0]), s[t](...n)) : r;
}
function It(e, t, n = []) {
  Te(), ws();
  const s = (/* @__PURE__ */ D(e))[t].apply(e, n);
  return xs(), Oe(), s;
}
const _i = /* @__PURE__ */ ze("__proto__,__v_isRef,__isVue"), Ur = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne)
);
function vi(e) {
  Ne(e) || (e = String(e));
  const t = /* @__PURE__ */ D(this);
  return ee(t, "has", e), t.hasOwnProperty(e);
}
class Br {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Yr : Jr : o ? qr : Gr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = P(t);
    if (!r) {
      let f;
      if (i && (f = bi[n]))
        return f;
      if (n === "hasOwnProperty")
        return vi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Z(t) ? t : s
    );
    if ((Ne(n) ? Ur.has(n) : _i(n)) || (r || ee(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ Z(l)) {
      const f = i && bs(n) ? l : l.value;
      return r && L(f) ? /* @__PURE__ */ ns(f) : f;
    }
    return L(l) ? r ? /* @__PURE__ */ ns(l) : /* @__PURE__ */ Cs(l) : l;
  }
}
class Kr extends Br {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    const i = P(t) && bs(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ Le(o);
      if (!/* @__PURE__ */ de(s) && !/* @__PURE__ */ Le(s) && (o = /* @__PURE__ */ D(o), s = /* @__PURE__ */ D(s)), !i && /* @__PURE__ */ Z(o) && !/* @__PURE__ */ Z(s))
        return p ? (Ce(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (o.value = s, !0);
    }
    const l = i ? Number(n) < t.length : H(t, n), f = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Z(t) ? t : r
    );
    return t === /* @__PURE__ */ D(r) && (l ? dt(s, o) && De(t, "set", n, s, o) : De(t, "add", n, s)), f;
  }
  deleteProperty(t, n) {
    const s = H(t, n), r = t[n], o = Reflect.deleteProperty(t, n);
    return o && s && De(t, "delete", n, void 0, r), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ne(n) || !Ur.has(n)) && ee(t, "has", n), s;
  }
  ownKeys(t) {
    return ee(
      t,
      "iterate",
      P(t) ? "length" : pt
    ), Reflect.ownKeys(t);
  }
}
class Wr extends Br {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ce(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ce(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const wi = /* @__PURE__ */ new Kr(), xi = /* @__PURE__ */ new Wr(), Si = /* @__PURE__ */ new Kr(!0), Ci = /* @__PURE__ */ new Wr(!0), ts = (e) => e, rn = (e) => Reflect.getPrototypeOf(e);
function Ti(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = /* @__PURE__ */ D(r), i = at(o), l = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, p = r[e](...s), d = n ? ts : t ? Tt : Ye;
    return !t && ee(
      o,
      "iterate",
      f ? es : pt
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
function on(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ce(
        `${$n(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ D(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Oi(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = /* @__PURE__ */ D(o), l = /* @__PURE__ */ D(r);
      e || (dt(r, l) && ee(i, "get", r), ee(i, "get", l));
      const { has: f } = rn(i), p = t ? ts : e ? Tt : Ye;
      if (f.call(i, r))
        return p(o.get(r));
      if (f.call(i, l))
        return p(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ee(/* @__PURE__ */ D(r), "iterate", pt), r.size;
    },
    has(r) {
      const o = this.__v_raw, i = /* @__PURE__ */ D(o), l = /* @__PURE__ */ D(r);
      return e || (dt(r, l) && ee(i, "has", r), ee(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
    },
    forEach(r, o) {
      const i = this, l = i.__v_raw, f = /* @__PURE__ */ D(l), p = t ? ts : e ? Tt : Ye;
      return !e && ee(f, "iterate", pt), l.forEach((d, a) => r.call(o, p(d), p(a), i));
    }
  };
  return z(
    n,
    e ? {
      add: on("add"),
      set: on("set"),
      delete: on("delete"),
      clear: on("clear")
    } : {
      add(r) {
        !t && !/* @__PURE__ */ de(r) && !/* @__PURE__ */ Le(r) && (r = /* @__PURE__ */ D(r));
        const o = /* @__PURE__ */ D(this);
        return rn(o).has.call(o, r) || (o.add(r), De(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !/* @__PURE__ */ de(o) && !/* @__PURE__ */ Le(o) && (o = /* @__PURE__ */ D(o));
        const i = /* @__PURE__ */ D(this), { has: l, get: f } = rn(i);
        let p = l.call(i, r);
        p ? Ws(i, l, r) : (r = /* @__PURE__ */ D(r), p = l.call(i, r));
        const d = f.call(i, r);
        return i.set(r, o), p ? dt(o, d) && De(i, "set", r, o, d) : De(i, "add", r, o), this;
      },
      delete(r) {
        const o = /* @__PURE__ */ D(this), { has: i, get: l } = rn(o);
        let f = i.call(o, r);
        f ? Ws(o, i, r) : (r = /* @__PURE__ */ D(r), f = i.call(o, r));
        const p = l ? l.call(o, r) : void 0, d = o.delete(r);
        return f && De(o, "delete", r, void 0, p), d;
      },
      clear() {
        const r = /* @__PURE__ */ D(this), o = r.size !== 0, i = at(r) ? new Map(r) : new Set(r), l = r.clear();
        return o && De(
          r,
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
  ].forEach((r) => {
    n[r] = Ti(r, e, t);
  }), n;
}
function In(e, t) {
  const n = Oi(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    H(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Ei = {
  get: /* @__PURE__ */ In(!1, !1)
}, Ai = {
  get: /* @__PURE__ */ In(!1, !0)
}, Pi = {
  get: /* @__PURE__ */ In(!0, !1)
}, $i = {
  get: /* @__PURE__ */ In(!0, !0)
};
function Ws(e, t, n) {
  const s = /* @__PURE__ */ D(n);
  if (s !== n && t.call(e, s)) {
    const r = ms(e);
    Ce(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Gr = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap();
function Mi(e) {
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
function Ii(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mi(ms(e));
}
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  return /* @__PURE__ */ Le(e) ? e : Rn(
    e,
    !1,
    wi,
    Ei,
    Gr
  );
}
// @__NO_SIDE_EFFECTS__
function Ri(e) {
  return Rn(
    e,
    !1,
    Si,
    Ai,
    qr
  );
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  return Rn(
    e,
    !0,
    xi,
    Pi,
    Jr
  );
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return Rn(
    e,
    !0,
    Ci,
    $i,
    Yr
  );
}
function Rn(e, t, n, s, r) {
  if (!L(e))
    return Ce(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Ii(e);
  if (o === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return /* @__PURE__ */ Le(e) ? /* @__PURE__ */ rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function D(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ D(t) : e;
}
function Di(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && yn(e, "__v_skip", !0), e;
}
const Ye = (e) => L(e) ? /* @__PURE__ */ Cs(e) : e, Tt = (e) => L(e) ? /* @__PURE__ */ ns(e) : e;
// @__NO_SIDE_EFFECTS__
function Z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ji(e) {
  return /* @__PURE__ */ Z(e) ? e.value : e;
}
const Fi = {
  get: (e, t, n) => t === "__v_raw" ? e : ji(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ Z(r) && !/* @__PURE__ */ Z(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function zr(e) {
  return /* @__PURE__ */ rt(e) ? e : new Proxy(e, Fi);
}
class Hi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Vr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Bt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return jr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return Nr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ce("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t, n = !1) {
  let s, r;
  return M(e) ? s = e : (s = e.get, r = e.set), new Hi(s, r, n);
}
const ln = {}, vn = /* @__PURE__ */ new WeakMap();
let ut;
function Li(e, t = !1, n = ut) {
  if (n) {
    let s = vn.get(n);
    s || vn.set(n, s = []), s.push(e);
  } else t || Ce(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Vi(e, t, n = K) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: f } = n, p = (A) => {
    (n.onWarn || Ce)(
      "Invalid watch source: ",
      A,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (A) => r ? A : /* @__PURE__ */ de(A) || r === !1 || r === 0 ? st(A, 1) : st(A);
  let a, g, T, I, O = !1, Y = !1;
  if (/* @__PURE__ */ Z(e) ? (g = () => e.value, O = /* @__PURE__ */ de(e)) : /* @__PURE__ */ rt(e) ? (g = () => d(e), O = !0) : P(e) ? (Y = !0, O = e.some((A) => /* @__PURE__ */ rt(A) || /* @__PURE__ */ de(A)), g = () => e.map((A) => {
    if (/* @__PURE__ */ Z(A))
      return A.value;
    if (/* @__PURE__ */ rt(A))
      return d(A);
    if (M(A))
      return f ? f(A, 2) : A();
    p(A);
  })) : M(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (T) {
      Te();
      try {
        T();
      } finally {
        Oe();
      }
    }
    const A = ut;
    ut = a;
    try {
      return f ? f(e, 3, [I]) : e(I);
    } finally {
      ut = A;
    }
  } : (g = ne, p(e)), t && r) {
    const A = g, Q = r === !0 ? 1 / 0 : r;
    g = () => st(A(), Q);
  }
  const G = hi(), k = () => {
    a.stop(), G && G.active && hs(G.effects, a);
  };
  if (o && t) {
    const A = t;
    t = (...Q) => {
      A(...Q), k();
    };
  }
  let V = Y ? new Array(e.length).fill(ln) : ln;
  const pe = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const Q = a.run();
        if (r || O || (Y ? Q.some((be, te) => dt(be, V[te])) : dt(Q, V))) {
          T && T();
          const be = ut;
          ut = a;
          try {
            const te = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              V === ln ? void 0 : Y && V[0] === ln ? [] : V,
              I
            ];
            V = Q, f ? f(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            ut = be;
          }
        }
      } else
        a.run();
  };
  return l && l(pe), a = new Rr(g), a.scheduler = i ? () => i(pe, !1) : pe, I = (A) => Li(A, !1, a), T = a.onStop = () => {
    const A = vn.get(a);
    if (A) {
      if (f)
        f(A, 4);
      else
        for (const Q of A) Q();
      vn.delete(a);
    }
  }, a.onTrack = n.onTrack, a.onTrigger = n.onTrigger, t ? s ? pe(!0) : V = a.run() : i ? i(pe.bind(null, !0), !0) : a.run(), k.pause = a.pause.bind(a), k.resume = a.resume.bind(a), k.stop = k, k;
}
function st(e, t = 1 / 0, n) {
  if (t <= 0 || !L(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Z(e))
    st(e.value, t, n);
  else if (P(e))
    for (let s = 0; s < e.length; s++)
      st(e[s], t, n);
  else if (Er(e) || at(e))
    e.forEach((s) => {
      st(s, t, n);
    });
  else if (Pr(e)) {
    for (const s in e)
      st(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && st(e[s], t, n);
  }
  return e;
}
const ht = [];
function un(e) {
  ht.push(e);
}
function an() {
  ht.pop();
}
let Wn = !1;
function x(e, ...t) {
  if (Wn) return;
  Wn = !0, Te();
  const n = ht.length ? ht[ht.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = ki();
  if (s)
    Ot(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, l;
          return (l = (i = o.toString) == null ? void 0 : i.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${tn(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Ui(r)), console.warn(...o);
  }
  Oe(), Wn = !1;
}
function ki() {
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
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Ui(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Bi(n));
  }), t;
}
function Bi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${tn(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...Ki(e.props), o] : [r + o];
}
function Ki(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Xr(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Xr(e, t, n) {
  return q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ Z(t) ? (t = Xr(e, /* @__PURE__ */ D(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : M(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ D(t), n ? t : [`${e}=`, t]);
}
const Ts = {
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
function Ot(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Xt(r, t, n);
  }
}
function Ve(e, t, n, s) {
  if (M(e)) {
    const r = Ot(e, t, n, s);
    return r && gs(r) && r.catch((o) => {
      Xt(o, t, n);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(Ve(e[o], t, n, s));
    return r;
  } else
    x(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Xt(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || K;
  if (t) {
    let l = t.parent;
    const f = t.proxy, p = Ts[n];
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
      Te(), Ot(o, null, 10, [
        e,
        f,
        p
      ]), Oe();
      return;
    }
  }
  Wi(e, n, r, s, i);
}
function Wi(e, t, n, s = !0, r = !1) {
  {
    const o = Ts[t];
    if (n && un(n), x(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && an(), s)
      throw e;
    console.error(e);
  }
}
const oe = [];
let Re = -1;
const St = [];
let nt = null, wt = 0;
const Zr = /* @__PURE__ */ Promise.resolve();
let wn = null;
const Gi = 100;
function qi(e) {
  const t = wn || Zr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ji(e) {
  let t = Re + 1, n = oe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = oe[s], o = Wt(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Dn(e) {
  if (!(e.flags & 1)) {
    const t = Wt(e), n = oe[oe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wt(n) ? oe.push(e) : oe.splice(Ji(t), 0, e), e.flags |= 1, Qr();
  }
}
function Qr() {
  wn || (wn = Zr.then(no));
}
function eo(e) {
  P(e) ? St.push(...e) : nt && e.id === -1 ? nt.splice(wt + 1, 0, e) : e.flags & 1 || (St.push(e), e.flags |= 1), Qr();
}
function Gs(e, t, n = Re + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < oe.length; n++) {
    const s = oe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || Os(t, s))
        continue;
      oe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function to(e) {
  if (St.length) {
    const t = [...new Set(St)].sort(
      (n, s) => Wt(n) - Wt(s)
    );
    if (St.length = 0, nt) {
      nt.push(...t);
      return;
    }
    for (nt = t, e = e || /* @__PURE__ */ new Map(), wt = 0; wt < nt.length; wt++) {
      const n = nt[wt];
      Os(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    nt = null, wt = 0;
  }
}
const Wt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function no(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => Os(e, n);
  try {
    for (Re = 0; Re < oe.length; Re++) {
      const n = oe[Re];
      if (n && !(n.flags & 8)) {
        if (t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ot(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Re < oe.length; Re++) {
      const n = oe[Re];
      n && (n.flags &= -2);
    }
    Re = -1, oe.length = 0, to(e), wn = null, (oe.length || St.length) && no(e);
  }
}
function Os(e, t) {
  const n = e.get(t) || 0;
  if (n > Gi) {
    const s = t.i, r = s && Vo(s.type);
    return Xt(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let He = !1;
const dn = /* @__PURE__ */ new Map();
zt().__VUE_HMR_RUNTIME__ = {
  createRecord: Gn(so),
  rerender: Gn(Xi),
  reload: Gn(Zi)
};
const mt = /* @__PURE__ */ new Map();
function Yi(e) {
  const t = e.type.__hmrId;
  let n = mt.get(t);
  n || (so(t, e.type), n = mt.get(t)), n.instances.add(e);
}
function zi(e) {
  mt.get(e.type.__hmrId).instances.delete(e);
}
function so(e, t) {
  return mt.has(e) ? !1 : (mt.set(e, {
    initialDef: xn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function xn(e) {
  return ko(e) ? e.__vccOpts : e;
}
function Xi(e, t) {
  const n = mt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, xn(s.type).render = t), s.renderCache = [], He = !0, s.job.flags & 8 || s.update(), He = !1;
  }));
}
function Zi(e, t) {
  const n = mt.get(e);
  if (!n) return;
  t = xn(t), qs(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const o = s[r], i = xn(o.type);
    let l = dn.get(i);
    l || (i !== n.initialDef && qs(i, t), dn.set(i, l = /* @__PURE__ */ new Set())), l.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (l.add(o), o.ceReload(t.styles), l.delete(o)) : o.parent ? Dn(() => {
      o.job.flags & 8 || (He = !0, o.parent.update(), He = !1, l.delete(o));
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  eo(() => {
    dn.clear();
  });
}
function qs(e, t) {
  z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Gn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let je, jt = [], ss = !1;
function Zt(e, ...t) {
  je ? je.emit(e, ...t) : ss || jt.push({ event: e, args: t });
}
function ro(e, t) {
  var n, s;
  je = e, je ? (je.enabled = !0, jt.forEach(({ event: r, args: o }) => je.emit(r, ...o)), jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    ro(o, t);
  }), setTimeout(() => {
    je || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ss = !0, jt = []);
  }, 3e3)) : (ss = !0, jt = []);
}
function Qi(e, t) {
  Zt("app:init", e, t, {
    Fragment: ye,
    Text: Qt,
    Comment: me,
    Static: hn
  });
}
function el(e) {
  Zt("app:unmount", e);
}
const tl = /* @__PURE__ */ Es(
  "component:added"
  /* COMPONENT_ADDED */
), oo = /* @__PURE__ */ Es(
  "component:updated"
  /* COMPONENT_UPDATED */
), nl = /* @__PURE__ */ Es(
  "component:removed"
  /* COMPONENT_REMOVED */
), sl = (e) => {
  je && typeof je.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !je.cleanupBuffer(e) && nl(e);
};
// @__NO_SIDE_EFFECTS__
function Es(e) {
  return (t) => {
    Zt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const rl = /* @__PURE__ */ io(
  "perf:start"
  /* PERFORMANCE_START */
), ol = /* @__PURE__ */ io(
  "perf:end"
  /* PERFORMANCE_END */
);
function io(e) {
  return (t, n, s) => {
    Zt(e, t.appContext.app, t.uid, t, n, s);
  };
}
function il(e, t, n) {
  Zt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let he = null, lo = null;
function Sn(e) {
  const t = he;
  return he = e, lo = e && e.type.__scopeId || null, t;
}
function ll(e, t = he, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && fr(-1);
    const o = Sn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Sn(o), s._d && fr(1);
    }
    return oo(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function co(e) {
  zo(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function lt(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let f = l.dir[s];
    f && (Te(), Ve(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Oe());
  }
}
function cl(e, t) {
  if ((!X || X.isMounted) && x("provide() can only be used inside setup()."), X) {
    let n = X.provides;
    const s = X.parent && X.parent.provides;
    s === n && (n = X.provides = Object.create(s)), n[e] = t;
  }
}
function pn(e, t, n = !1) {
  const s = Ho();
  if (s || Ct) {
    let r = Ct ? Ct._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && M(t) ? t.call(s && s.proxy) : t;
    x(`injection "${String(e)}" not found.`);
  } else
    x("inject() can only be used inside setup() or functional components.");
}
const fl = /* @__PURE__ */ Symbol.for("v-scx"), ul = () => {
  {
    const e = pn(fl);
    return e || x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function qn(e, t, n) {
  return M(t) || x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), fo(e, t, n);
}
function fo(e, t, n = K) {
  const { immediate: s, deep: r, flush: o, once: i } = n;
  t || (s !== void 0 && x(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && x(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && x(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = z({}, n);
  l.onWarn = x;
  const f = t && s || !t && o !== "post";
  let p;
  if (qt) {
    if (o === "sync") {
      const T = ul();
      p = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!f) {
      const T = () => {
      };
      return T.stop = ne, T.resume = ne, T.pause = ne, T;
    }
  }
  const d = X;
  l.call = (T, I, O) => Ve(T, d, I, O);
  let a = !1;
  o === "post" ? l.scheduler = (T) => {
    ue(T, d && d.suspense);
  } : o !== "sync" && (a = !0, l.scheduler = (T, I) => {
    I ? T() : Dn(T);
  }), l.augmentJob = (T) => {
    t && (T.flags |= 4), a && (T.flags |= 2, d && (T.id = d.uid, T.i = d));
  };
  const g = Vi(e, t, l);
  return qt && (p ? p.push(g) : f && g()), g;
}
function al(e, t, n) {
  const s = this.proxy, r = q(e) ? e.includes(".") ? uo(s, e) : () => s[e] : e.bind(s, s);
  let o;
  M(t) ? o = t : (o = t.handler, n = t);
  const i = en(this), l = fo(r, o.bind(s), n);
  return i(), l;
}
function uo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const dl = /* @__PURE__ */ Symbol("_vte"), pl = (e) => e.__isTeleport, hl = /* @__PURE__ */ Symbol("_leaveCb");
function As(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, As(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function gl(e, t) {
  return M(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    z({ name: e.name }, t, { setup: e })
  ) : e;
}
function ao(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Js = /* @__PURE__ */ new WeakSet();
function Ys(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Cn = /* @__PURE__ */ new WeakMap();
function Vt(e, t, n, s, r = !1) {
  if (P(e)) {
    e.forEach(
      (O, Y) => Vt(
        O,
        t && (P(t) ? t[Y] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (kt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Vt(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? js(s.component) : s.el, i = r ? null : o, { i: l, r: f } = e;
  if (!l) {
    x(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, d = l.refs === K ? l.refs = {} : l.refs, a = l.setupState, g = /* @__PURE__ */ D(a), T = a === K ? Or : (O) => (H(g, O) && !/* @__PURE__ */ Z(g[O]) && x(
    `Template ref "${O}" used on a non-ref value. It will not work in the production build.`
  ), Js.has(g[O]) || Ys(d, O) ? !1 : H(g, O)), I = (O, Y) => !(Js.has(O) || Y && Ys(d, Y));
  if (p != null && p !== f) {
    if (zs(t), q(p))
      d[p] = null, T(p) && (a[p] = null);
    else if (/* @__PURE__ */ Z(p)) {
      const O = t;
      I(p, O.k) && (p.value = null), O.k && (d[O.k] = null);
    }
  }
  if (M(f))
    Ot(f, l, 12, [i, d]);
  else {
    const O = q(f), Y = /* @__PURE__ */ Z(f);
    if (O || Y) {
      const G = () => {
        if (e.f) {
          const k = O ? T(f) ? a[f] : d[f] : I(f) || !e.k ? f.value : d[e.k];
          if (r)
            P(k) && hs(k, o);
          else if (P(k))
            k.includes(o) || k.push(o);
          else if (O)
            d[f] = [o], T(f) && (a[f] = d[f]);
          else {
            const V = [o];
            I(f, e.k) && (f.value = V), e.k && (d[e.k] = V);
          }
        } else O ? (d[f] = i, T(f) && (a[f] = i)) : Y ? (I(f, e.k) && (f.value = i), e.k && (d[e.k] = i)) : x("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (i) {
        const k = () => {
          G(), Cn.delete(e);
        };
        k.id = -1, Cn.set(e, k), ue(k, n);
      } else
        zs(e), G();
    } else
      x("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function zs(e) {
  const t = Cn.get(e);
  t && (t.flags |= 8, Cn.delete(e));
}
zt().requestIdleCallback;
zt().cancelIdleCallback;
const kt = (e) => !!e.type.__asyncLoader, Ps = (e) => e.type.__isKeepAlive;
function ml(e, t) {
  po(e, "a", t);
}
function bl(e, t) {
  po(e, "da", t);
}
function po(e, t, n = X) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (jn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Ps(r.parent.vnode) && yl(s, t, n, r), r = r.parent;
  }
}
function yl(e, t, n, s) {
  const r = jn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ho(() => {
    hs(s[t], r);
  }, n);
}
function jn(e, t, n = X, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Te();
      const l = en(n), f = Ve(t, n, e, i);
      return l(), Oe(), f;
    });
    return s ? r.unshift(o) : r.push(o), o;
  } else {
    const r = ft(Ts[e].replace(/ hook$/, ""));
    x(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Xe = (e) => (t, n = X) => {
  (!qt || e === "sp") && jn(e, (...s) => t(...s), n);
}, _l = Xe("bm"), vl = Xe("m"), wl = Xe(
  "bu"
), xl = Xe("u"), Sl = Xe(
  "bum"
), ho = Xe("um"), Cl = Xe(
  "sp"
), Tl = Xe("rtg"), Ol = Xe("rtc");
function El(e, t = X) {
  jn("ec", e, t);
}
const Al = /* @__PURE__ */ Symbol.for("v-ndc");
function Xs(e, t, n, s) {
  let r;
  const o = n, i = P(e);
  if (i || q(e)) {
    const l = i && /* @__PURE__ */ rt(e);
    let f = !1, p = !1;
    l && (f = !/* @__PURE__ */ de(e), p = /* @__PURE__ */ Le(e), e = Mn(e)), r = new Array(e.length);
    for (let d = 0, a = e.length; d < a; d++)
      r[d] = t(
        f ? p ? Tt(Ye(e[d])) : Ye(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || x(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, o);
  } else if (L(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, f) => t(l, f, void 0, o)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, p = l.length; f < p; f++) {
        const d = l[f];
        r[f] = t(e[d], d, f, o);
      }
    }
  else
    r = [];
  return r;
}
const rs = (e) => e ? No(e) ? js(e) : rs(e.parent) : null, gt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => /* @__PURE__ */ Fe(e.props),
    $attrs: (e) => /* @__PURE__ */ Fe(e.attrs),
    $slots: (e) => /* @__PURE__ */ Fe(e.slots),
    $refs: (e) => /* @__PURE__ */ Fe(e.refs),
    $parent: (e) => rs(e.parent),
    $root: (e) => rs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Dn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qi.bind(e.proxy)),
    $watch: (e) => al.bind(e)
  })
), $s = (e) => e === "_" || e === "$", Jn = (e, t) => e !== K && !e.__isScriptSetup && H(e, t), go = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: f } = e;
    if (t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Jn(s, t))
          return i[t] = 1, s[t];
        if (r !== K && H(r, t))
          return i[t] = 2, r[t];
        if (H(o, t))
          return i[t] = 3, o[t];
        if (n !== K && H(n, t))
          return i[t] = 4, n[t];
        os && (i[t] = 0);
      }
    }
    const p = gt[t];
    let d, a;
    if (p)
      return t === "$attrs" ? (ee(e.attrs, "get", ""), On()) : t === "$slots" && ee(e, "get", t), p(e);
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
    he && (!q(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== K && $s(t[0]) && H(r, t) ? x(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === he && x(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Jn(r, t) ? (r[t] = n, !0) : r.__isScriptSetup && H(r, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== K && H(s, t) ? (s[t] = n, !0) : H(e.props, t) ? (x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (x(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: o, type: i }
  }, l) {
    let f;
    return !!(n[l] || e !== K && l[0] !== "$" && H(e, l) || Jn(t, l) || H(o, l) || H(s, l) || H(gt, l) || H(r.config.globalProperties, l) || (f = i.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
go.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function Pl(e) {
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
function $l(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: ne
    });
  });
}
function Ml(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ D(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if ($s(s[0])) {
        x(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: ne
      });
    }
  });
}
function Zs(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Il() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let os = !0;
function Rl(e) {
  const t = bo(e), n = e.proxy, s = e.ctx;
  os = !1, t.beforeCreate && Qs(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
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
    unmounted: pe,
    render: A,
    renderTracked: Q,
    renderTriggered: be,
    errorCaptured: te,
    serverPrefetch: ie,
    // public API
    expose: ke,
    inheritAttrs: Ze,
    // assets
    components: _e,
    directives: nn,
    filters: Fs
  } = t, Qe = Il();
  {
    const [N] = e.propsOptions;
    if (N)
      for (const j in N)
        Qe("Props", j);
  }
  if (p && Dl(p, s, Qe), i)
    for (const N in i) {
      const j = i[N];
      M(j) ? (Object.defineProperty(s, N, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), Qe("Methods", N)) : x(
        `Method "${N}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    M(r) || x(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const N = r.call(n, n);
    if (gs(N) && x(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !L(N))
      x("data() should return an object.");
    else {
      e.data = /* @__PURE__ */ Cs(N);
      for (const j in N)
        Qe("Data", j), $s(j[0]) || Object.defineProperty(s, j, {
          configurable: !0,
          enumerable: !0,
          get: () => N[j],
          set: ne
        });
    }
  }
  if (os = !0, o)
    for (const N in o) {
      const j = o[N], Ee = M(j) ? j.bind(n, n) : M(j.get) ? j.get.bind(n, n) : ne;
      Ee === ne && x(`Computed property "${N}" has no getter.`);
      const Nn = !M(j) && M(j.set) ? j.set.bind(n) : () => {
        x(
          `Write operation failed: computed property "${N}" is readonly.`
        );
      }, Et = $c({
        get: Ee,
        set: Nn
      });
      Object.defineProperty(s, N, {
        enumerable: !0,
        configurable: !0,
        get: () => Et.value,
        set: (bt) => Et.value = bt
      }), Qe("Computed", N);
    }
  if (l)
    for (const N in l)
      mo(l[N], s, n, N);
  if (f) {
    const N = M(f) ? f.call(n) : f;
    Reflect.ownKeys(N).forEach((j) => {
      cl(j, N[j]);
    });
  }
  d && Qs(d, e, "c");
  function le(N, j) {
    P(j) ? j.forEach((Ee) => N(Ee.bind(n))) : j && N(j.bind(n));
  }
  if (le(_l, a), le(vl, g), le(wl, T), le(xl, I), le(ml, O), le(bl, Y), le(El, te), le(Ol, Q), le(Tl, be), le(Sl, k), le(ho, pe), le(Cl, ie), P(ke))
    if (ke.length) {
      const N = e.exposed || (e.exposed = {});
      ke.forEach((j) => {
        Object.defineProperty(N, j, {
          get: () => n[j],
          set: (Ee) => n[j] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === ne && (e.render = A), Ze != null && (e.inheritAttrs = Ze), _e && (e.components = _e), nn && (e.directives = nn), ie && ao(e);
}
function Dl(e, t, n = ne) {
  P(e) && (e = is(e));
  for (const s in e) {
    const r = e[s];
    let o;
    L(r) ? "default" in r ? o = pn(
      r.from || s,
      r.default,
      !0
    ) : o = pn(r.from || s) : o = pn(r), /* @__PURE__ */ Z(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o, n("Inject", s);
  }
}
function Qs(e, t, n) {
  Ve(
    P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function mo(e, t, n, s) {
  let r = s.includes(".") ? uo(n, s) : () => n[s];
  if (q(e)) {
    const o = t[e];
    M(o) ? qn(r, o) : x(`Invalid watch handler specified by key "${e}"`, o);
  } else if (M(e))
    qn(r, e.bind(n));
  else if (L(e))
    if (P(e))
      e.forEach((o) => mo(o, t, n, s));
    else {
      const o = M(e.handler) ? e.handler.bind(n) : t[e.handler];
      M(o) ? qn(r, o, e) : x(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    x(`Invalid watch option: "${s}"`, e);
}
function bo(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let f;
  return l ? f = l : !r.length && !n && !s ? f = t : (f = {}, r.length && r.forEach(
    (p) => Tn(f, p, i, !0)
  ), Tn(f, t, i)), L(t) && o.set(t, f), f;
}
function Tn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Tn(e, o, n, !0), r && r.forEach(
    (i) => Tn(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = jl[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const jl = {
  data: er,
  props: tr,
  emits: tr,
  // objects
  methods: Ft,
  computed: Ft,
  // lifecycle
  beforeCreate: re,
  created: re,
  beforeMount: re,
  mounted: re,
  beforeUpdate: re,
  updated: re,
  beforeDestroy: re,
  beforeUnmount: re,
  destroyed: re,
  unmounted: re,
  activated: re,
  deactivated: re,
  errorCaptured: re,
  serverPrefetch: re,
  // assets
  components: Ft,
  directives: Ft,
  // watch
  watch: Hl,
  // provide / inject
  provide: er,
  inject: Fl
};
function er(e, t) {
  return t ? e ? function() {
    return z(
      M(e) ? e.call(this, this) : e,
      M(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fl(e, t) {
  return Ft(is(e), is(t));
}
function is(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function tr(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    Zs(e),
    Zs(t ?? {})
  ) : t;
}
function Hl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = z(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = re(e[s], t[s]);
  return n;
}
function yo() {
  return {
    app: null,
    config: {
      isNativeTag: Or,
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
let Nl = 0;
function Ll(e, t) {
  return function(s, r = null) {
    M(s) || (s = z({}, s)), r != null && !L(r) && (x("root props passed to app.mount() must be an object."), r = null);
    const o = yo(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const p = o.app = {
      _uid: Nl++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: dr,
      get config() {
        return o.config;
      },
      set config(d) {
        x(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...a) {
        return i.has(d) ? x("Plugin has already been applied to target app.") : d && M(d.install) ? (i.add(d), d.install(p, ...a)) : M(d) ? (i.add(d), d(p, ...a)) : x(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(d) {
        return o.mixins.includes(d) ? x(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : o.mixins.push(d), p;
      },
      component(d, a) {
        return ds(d, o.config), a ? (o.components[d] && x(`Component "${d}" has already been registered in target app.`), o.components[d] = a, p) : o.components[d];
      },
      directive(d, a) {
        return co(d), a ? (o.directives[d] && x(`Directive "${d}" has already been registered in target app.`), o.directives[d] = a, p) : o.directives[d];
      },
      mount(d, a, g) {
        if (f)
          x(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.__vue_app__ && x(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const T = p._ceVNode || qe(s, r);
          return T.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), o.reload = () => {
            const I = it(T);
            I.el = null, e(I, d, g);
          }, e(T, d, g), f = !0, p._container = d, d.__vue_app__ = p, p._instance = T.component, Qi(p, dr), js(T.component);
        }
      },
      onUnmount(d) {
        typeof d != "function" && x(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        f ? (Ve(
          l,
          p._instance,
          16
        ), e(null, p._container), p._instance = null, el(p), delete p._container.__vue_app__) : x("Cannot unmount an app that is not mounted.");
      },
      provide(d, a) {
        return d in o.provides && (H(o.provides, d) ? x(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : x(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), o.provides[d] = a, p;
      },
      runWithContext(d) {
        const a = Ct;
        Ct = p;
        try {
          return d();
        } finally {
          Ct = a;
        }
      }
    };
    return p;
  };
}
let Ct = null;
const Vl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xe(t)}Modifiers`] || e[`${ot(t)}Modifiers`];
function kl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || K;
  {
    const {
      emitsOptions: d,
      propsOptions: [a]
    } = e;
    if (d)
      if (!(t in d))
        (!a || !(ft(xe(t)) in a)) && x(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ft(xe(t))}" prop.`
        );
      else {
        const g = d[t];
        M(g) && (g(...n) || x(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const o = t.startsWith("update:"), i = o && Vl(s, t.slice(7));
  i && (i.trim && (r = n.map((d) => q(d) ? d.trim() : d)), i.number && (r = n.map(Qo))), il(e, t, r);
  {
    const d = t.toLowerCase();
    d !== t && s[ft(d)] && x(
      `Event "${d}" is emitted in component ${tn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ot(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = s[l = ft(t)] || // also try camelCase event handler (#2249)
  s[l = ft(xe(t))];
  !f && o && (f = s[l = ft(ot(t))]), f && Ve(
    f,
    e,
    6,
    r
  );
  const p = s[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ve(
      p,
      e,
      6,
      r
    );
  }
}
const Ul = /* @__PURE__ */ new WeakMap();
function _o(e, t, n = !1) {
  const s = n ? Ul : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!M(e)) {
    const f = (p) => {
      const d = _o(p, t, !0);
      d && (l = !0, z(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !l ? (L(e) && s.set(e, null), null) : (P(o) ? o.forEach((f) => i[f] = null) : z(i, o), L(e) && s.set(e, i), i);
}
function Fn(e, t) {
  return !e || !Jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, ot(t)) || H(e, t));
}
let ls = !1;
function On() {
  ls = !0;
}
function nr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
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
  } = e, Y = Sn(e);
  let G, k;
  ls = !1;
  try {
    if (n.shapeFlag & 4) {
      const A = r || s, Q = T.__isScriptSetup ? new Proxy(A, {
        get(be, te, ie) {
          return x(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(be, te, ie);
        }
      }) : A;
      G = we(
        p.call(
          Q,
          A,
          d,
          /* @__PURE__ */ Fe(a),
          T,
          g,
          I
        )
      ), k = l;
    } else {
      const A = t;
      l === a && On(), G = we(
        A.length > 1 ? A(
          /* @__PURE__ */ Fe(a),
          {
            get attrs() {
              return On(), /* @__PURE__ */ Fe(l);
            },
            slots: i,
            emit: f
          }
        ) : A(
          /* @__PURE__ */ Fe(a),
          null
        )
      ), k = t.props ? l : Bl(l);
    }
  } catch (A) {
    Ut.length = 0, Xt(A, e, 1), G = qe(me);
  }
  let V = G, pe;
  if (G.patchFlag > 0 && G.patchFlag & 2048 && ([V, pe] = vo(G)), k && O !== !1) {
    const A = Object.keys(k), { shapeFlag: Q } = V;
    if (A.length) {
      if (Q & 7)
        o && A.some(bn) && (k = Kl(
          k,
          o
        )), V = it(V, k, !1, !0);
      else if (!ls && V.type !== me) {
        const be = Object.keys(l), te = [], ie = [];
        for (let ke = 0, Ze = be.length; ke < Ze; ke++) {
          const _e = be[ke];
          Jt(_e) ? bn(_e) || te.push(_e[2].toLowerCase() + _e.slice(3)) : ie.push(_e);
        }
        ie.length && x(
          `Extraneous non-props attributes (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && x(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (sr(V) || x(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), V = it(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (sr(V) || x(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), As(V, n.transition)), pe ? pe(V) : G = V, Sn(Y), G;
}
const vo = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ms(t, !1);
  if (s) {
    if (s.patchFlag > 0 && s.patchFlag & 2048)
      return vo(s);
  } else return [e, void 0];
  const r = t.indexOf(s), o = n ? n.indexOf(s) : -1, i = (l) => {
    t[r] = l, n && (o > -1 ? n[o] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [we(s), i];
};
function Ms(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (Hn(r)) {
      if (r.type !== me || r.children === "v-if") {
        if (n)
          return;
        if (n = r, t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ms(n.children);
      }
    } else
      return;
  }
  return n;
}
const Bl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kl = (e, t) => {
  const n = {};
  for (const s in e)
    (!bn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, sr = (e) => e.shapeFlag & 7 || e.type === me;
function Wl(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: f } = t, p = o.emitsOptions;
  if ((r || l) && He || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? rr(s, i, p) : !!i;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        const g = d[a];
        if (wo(i, s, g) && !Fn(p, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? rr(s, i, p) : !0 : !!i;
  return !1;
}
function rr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (wo(t, e, o) && !Fn(n, o))
      return !0;
  }
  return !1;
}
function wo(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && L(s) && L(r) ? !vs(s, r) : s !== r;
}
function Gl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const xo = {}, So = () => Object.create(xo), Co = (e) => Object.getPrototypeOf(e) === xo;
function ql(e, t, n, s = !1) {
  const r = {}, o = So();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), To(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  Eo(t || {}, r, e), n ? e.props = s ? r : /* @__PURE__ */ Ri(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function Jl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Yl(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, l = /* @__PURE__ */ D(r), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !Jl(e) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        let g = d[a];
        if (Fn(e.emitsOptions, g))
          continue;
        const T = t[g];
        if (f)
          if (H(o, g))
            T !== o[g] && (o[g] = T, p = !0);
          else {
            const I = xe(g);
            r[I] = cs(
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
    To(e, t, r, o) && (p = !0);
    let d;
    for (const a in l)
      (!t || // for camelCase
      !H(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = ot(a)) === a || !H(t, d))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[a] = cs(
        f,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete r[a]);
    if (o !== l)
      for (const a in o)
        (!t || !H(t, a)) && (delete o[a], p = !0);
  }
  p && De(e.attrs, "set", ""), Eo(t || {}, r, e);
}
function To(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let f in t) {
      if (Ht(f))
        continue;
      const p = t[f];
      let d;
      r && H(r, d = xe(f)) ? !o || !o.includes(d) ? n[d] = p : (l || (l = {}))[d] = p : Fn(e.emitsOptions, f) || (!(f in s) || p !== s[f]) && (s[f] = p, i = !0);
    }
  if (o) {
    const f = /* @__PURE__ */ D(n), p = l || K;
    for (let d = 0; d < o.length; d++) {
      const a = o[d];
      n[a] = cs(
        r,
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
function cs(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = H(i, "default");
    if (l && s === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && M(f)) {
        const { propsDefaults: p } = r;
        if (n in p)
          s = p[n];
        else {
          const d = en(r);
          s = p[n] = f.call(
            null,
            t
          ), d();
        }
      } else
        s = f;
      r.ce && r.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ot(n)) && (s = !0));
  }
  return s;
}
const zl = /* @__PURE__ */ new WeakMap();
function Oo(e, t, n = !1) {
  const s = n ? zl : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let f = !1;
  if (!M(e)) {
    const d = (a) => {
      f = !0;
      const [g, T] = Oo(a, t, !0);
      z(i, g), T && l.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !f)
    return L(e) && s.set(e, xt), xt;
  if (P(o))
    for (let d = 0; d < o.length; d++) {
      q(o[d]) || x("props must be strings when using array syntax.", o[d]);
      const a = xe(o[d]);
      or(a) && (i[a] = K);
    }
  else if (o) {
    L(o) || x("invalid props options", o);
    for (const d in o) {
      const a = xe(d);
      if (or(a)) {
        const g = o[d], T = i[a] = P(g) || M(g) ? { type: g } : z({}, g), I = T.type;
        let O = !1, Y = !0;
        if (P(I))
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
  return L(e) && s.set(e, p), p;
}
function or(e) {
  return e[0] !== "$" && !Ht(e) ? !0 : (x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Xl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Eo(e, t, n) {
  const s = /* @__PURE__ */ D(t), r = n.propsOptions[0], o = Object.keys(e).map((i) => xe(i));
  for (const i in r) {
    let l = r[i];
    l != null && Zl(
      i,
      s[i],
      l,
      /* @__PURE__ */ Fe(s),
      !o.includes(i)
    );
  }
}
function Zl(e, t, n, s, r) {
  const { type: o, required: i, validator: l, skipCheck: f } = n;
  if (i && r) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (o != null && o !== !0 && !f) {
      let p = !1;
      const d = P(o) ? o : [o], a = [];
      for (let g = 0; g < d.length && !p; g++) {
        const { valid: T, expectedType: I } = ec(t, d[g]);
        a.push(I || ""), p = T;
      }
      if (!p) {
        x(tc(e, t, a));
        return;
      }
    }
    l && !l(t, s) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ql = /* @__PURE__ */ ze(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ec(e, t) {
  let n;
  const s = Xl(t);
  if (s === "null")
    n = e === null;
  else if (Ql(s)) {
    const r = typeof e;
    n = r === s.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else s === "Object" ? n = L(e) : s === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function tc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map($n).join(" | ")}`;
  const r = n[0], o = ms(t), i = ir(t, r), l = ir(t, o);
  return n.length === 1 && lr(r) && !nc(r, o) && (s += ` with value ${i}`), s += `, got ${o} `, lr(o) && (s += `with value ${l}.`), s;
}
function ir(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function lr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function nc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Is = (e) => e === "_" || e === "_ctx" || e === "$stable", Rs = (e) => P(e) ? e.map(we) : [we(e)], sc = (e, t, n) => {
  if (t._n)
    return t;
  const s = ll((...r) => (X && !(n === null && he) && !(n && n.root !== X.root) && x(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Rs(t(...r))), n);
  return s._c = !1, s;
}, Ao = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Is(r)) continue;
    const o = e[r];
    if (M(o))
      t[r] = sc(r, o, s);
    else if (o != null) {
      x(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = Rs(o);
      t[r] = () => i;
    }
  }
}, Po = (e, t) => {
  Ps(e.vnode) || x(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Rs(t);
  e.slots.default = () => n;
}, fs = (e, t, n) => {
  for (const s in t)
    (n || !Is(s)) && (e[s] = t[s]);
}, rc = (e, t, n) => {
  const s = e.slots = So();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (fs(s, t, n), n && yn(s, "_", r, !0)) : Ao(t, s);
  } else t && Po(e, t);
}, oc = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = K;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? He ? (fs(r, t, n), De(e, "set", "$slots")) : n && l === 1 ? o = !1 : fs(r, t, n) : (o = !t.$stable, Ao(t, r)), i = t;
  } else t && (Po(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Is(l) && i[l] == null && delete r[l];
};
let Rt, We;
function _t(e, t) {
  e.appContext.config.performance && En() && We.mark(`vue-${t}-${e.uid}`), rl(e, t, En() ? We.now() : Date.now());
}
function vt(e, t) {
  if (e.appContext.config.performance && En()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end", r = `<${tn(e, e.type)}> ${t}`;
    We.mark(s), We.measure(r, n, s), We.clearMeasures(r), We.clearMarks(n), We.clearMarks(s);
  }
  ol(e, t, En() ? We.now() : Date.now());
}
function En() {
  return Rt !== void 0 || (typeof window < "u" && window.performance ? (Rt = !0, We = window.performance) : Rt = !1), Rt;
}
function ic() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ue = ac;
function lc(e) {
  return cc(e);
}
function cc(e, t) {
  ic();
  const n = zt();
  n.__VUE__ = !0, ro(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: r,
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
  } = e, O = (c, u, h, _ = null, b = null, m = null, S = void 0, w = null, v = He ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Dt(c, u) && (_ = sn(c), et(c, b, m, !0), c = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: y, ref: $, shapeFlag: C } = u;
    switch (y) {
      case Qt:
        Y(c, u, h, _);
        break;
      case me:
        G(c, u, h, _);
        break;
      case hn:
        c == null ? k(u, h, _, S) : V(c, u, h, S);
        break;
      case ye:
        nn(
          c,
          u,
          h,
          _,
          b,
          m,
          S,
          w,
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
          w,
          v
        ) : C & 6 ? Fs(
          c,
          u,
          h,
          _,
          b,
          m,
          S,
          w,
          v
        ) : C & 64 || C & 128 ? y.process(
          c,
          u,
          h,
          _,
          b,
          m,
          S,
          w,
          v,
          Pt
        ) : x("Invalid VNode type:", y, `(${typeof y})`);
    }
    $ != null && b ? Vt($, c && c.ref, m, u || c, !u) : $ == null && c && c.ref != null && Vt(c.ref, null, m, c, !0);
  }, Y = (c, u, h, _) => {
    if (c == null)
      s(
        u.el = l(u.children),
        h,
        _
      );
    else {
      const b = u.el = c.el;
      u.children !== c.children && p(b, u.children);
    }
  }, G = (c, u, h, _) => {
    c == null ? s(
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
      A(c), [u.el, u.anchor] = I(
        u.children,
        h,
        b,
        _
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, pe = ({ el: c, anchor: u }, h, _) => {
    let b;
    for (; c && c !== u; )
      b = g(c), s(c, h, _), c = b;
    s(u, h, _);
  }, A = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = g(c), r(c), c = h;
    r(u);
  }, Q = (c, u, h, _, b, m, S, w, v) => {
    if (u.type === "svg" ? S = "svg" : u.type === "math" && (S = "mathml"), c == null)
      be(
        u,
        h,
        _,
        b,
        m,
        S,
        w,
        v
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), ke(
          c,
          u,
          b,
          m,
          S,
          w,
          v
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, be = (c, u, h, _, b, m, S, w) => {
    let v, y;
    const { props: $, shapeFlag: C, transition: E, dirs: R } = c;
    if (v = c.el = i(
      c.type,
      m,
      $ && $.is,
      $
    ), C & 8 ? d(v, c.children) : C & 16 && ie(
      c.children,
      v,
      null,
      _,
      b,
      Yn(c, m),
      S,
      w
    ), R && lt(c, null, _, "created"), te(v, c, c.scopeId, S, _), $) {
      for (const W in $)
        W !== "value" && !Ht(W) && o(v, W, null, $[W], m, _);
      "value" in $ && o(v, "value", null, $.value, m), (y = $.onVnodeBeforeMount) && Ie(y, _, c);
    }
    yn(v, "__vnode", c, !0), yn(v, "__vueParentComponent", _, !0), R && lt(c, null, _, "beforeMount");
    const F = fc(b, E);
    F && E.beforeEnter(v), s(v, u, h), ((y = $ && $.onVnodeMounted) || F || R) && ue(() => {
      y && Ie(y, _, c), F && E.enter(v), R && lt(c, null, _, "mounted");
    }, b);
  }, te = (c, u, h, _, b) => {
    if (h && T(c, h), _)
      for (let m = 0; m < _.length; m++)
        T(c, _[m]);
    if (b) {
      let m = b.subTree;
      if (m.patchFlag > 0 && m.patchFlag & 2048 && (m = Ms(m.children) || m), u === m || Io(m.type) && (m.ssContent === u || m.ssFallback === u)) {
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
  }, ie = (c, u, h, _, b, m, S, w, v = 0) => {
    for (let y = v; y < c.length; y++) {
      const $ = c[y] = w ? Ge(c[y]) : we(c[y]);
      O(
        null,
        $,
        u,
        h,
        _,
        b,
        m,
        S,
        w
      );
    }
  }, ke = (c, u, h, _, b, m, S) => {
    const w = u.el = c.el;
    w.__vnode = u;
    let { patchFlag: v, dynamicChildren: y, dirs: $ } = u;
    v |= c.patchFlag & 16;
    const C = c.props || K, E = u.props || K;
    let R;
    if (h && ct(h, !1), (R = E.onVnodeBeforeUpdate) && Ie(R, h, u, c), $ && lt(u, c, h, "beforeUpdate"), h && ct(h, !0), He && (v = 0, S = !1, y = null), (C.innerHTML && E.innerHTML == null || C.textContent && E.textContent == null) && d(w, ""), y ? (Ze(
      c.dynamicChildren,
      y,
      w,
      h,
      _,
      Yn(u, b),
      m
    ), us(c, u)) : S || Ee(
      c,
      u,
      w,
      null,
      h,
      _,
      Yn(u, b),
      m,
      !1
    ), v > 0) {
      if (v & 16)
        _e(w, C, E, h, b);
      else if (v & 2 && C.class !== E.class && o(w, "class", null, E.class, b), v & 4 && o(w, "style", C.style, E.style, b), v & 8) {
        const F = u.dynamicProps;
        for (let W = 0; W < F.length; W++) {
          const B = F[W], ce = C[B], fe = E[B];
          (fe !== ce || B === "value") && o(w, B, ce, fe, b, h);
        }
      }
      v & 1 && c.children !== u.children && d(w, u.children);
    } else !S && y == null && _e(w, C, E, h, b);
    ((R = E.onVnodeUpdated) || $) && ue(() => {
      R && Ie(R, h, u, c), $ && lt(u, c, h, "updated");
    }, _);
  }, Ze = (c, u, h, _, b, m, S) => {
    for (let w = 0; w < u.length; w++) {
      const v = c[w], y = u[w], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dt(v, y) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? a(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      O(
        v,
        y,
        $,
        null,
        _,
        b,
        m,
        S,
        !0
      );
    }
  }, _e = (c, u, h, _, b) => {
    if (u !== h) {
      if (u !== K)
        for (const m in u)
          !Ht(m) && !(m in h) && o(
            c,
            m,
            u[m],
            null,
            b,
            _
          );
      for (const m in h) {
        if (Ht(m)) continue;
        const S = h[m], w = u[m];
        S !== w && m !== "value" && o(c, m, w, S, b, _);
      }
      "value" in h && o(c, "value", u.value, h.value, b);
    }
  }, nn = (c, u, h, _, b, m, S, w, v) => {
    const y = u.el = c ? c.el : l(""), $ = u.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: E, slotScopeIds: R } = u;
    // #5523 dev root fragment may inherit directives
    (He || C & 2048) && (C = 0, v = !1, E = null), R && (w = w ? w.concat(R) : R), c == null ? (s(y, h, _), s($, h, _), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      $,
      b,
      m,
      S,
      w,
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
      w
    ), us(c, u)) : Ee(
      c,
      u,
      h,
      $,
      b,
      m,
      S,
      w,
      v
    );
  }, Fs = (c, u, h, _, b, m, S, w, v) => {
    u.slotScopeIds = w, c == null ? u.shapeFlag & 512 ? b.ctx.activate(
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
    ) : le(c, u, v);
  }, Qe = (c, u, h, _, b, m, S) => {
    const w = c.component = vc(
      c,
      _,
      b
    );
    if (w.type.__hmrId && Yi(w), un(c), _t(w, "mount"), Ps(c) && (w.ctx.renderer = Pt), _t(w, "init"), xc(w, !1, S), vt(w, "init"), He && (c.el = null), w.asyncDep) {
      if (b && b.registerDep(w, N, S), !c.el) {
        const v = w.subTree = qe(me);
        G(null, v, u, h), c.placeholder = v.el;
      }
    } else
      N(
        w,
        c,
        u,
        h,
        b,
        m,
        S
      );
    an(), vt(w, "mount");
  }, le = (c, u, h) => {
    const _ = u.component = c.component;
    if (Wl(c, u, h))
      if (_.asyncDep && !_.asyncResolved) {
        un(u), j(_, u, h), an();
        return;
      } else
        _.next = u, _.update();
    else
      u.el = c.el, _.vnode = u;
  }, N = (c, u, h, _, b, m, S) => {
    const w = () => {
      if (c.isMounted) {
        let { next: C, bu: E, u: R, parent: F, vnode: W } = c;
        {
          const Pe = $o(c);
          if (Pe) {
            C && (C.el = W.el, j(c, C, S)), Pe.asyncDep.then(() => {
              ue(() => {
                c.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let B = C, ce;
        un(C || c.vnode), ct(c, !1), C ? (C.el = W.el, j(c, C, S)) : C = W, E && Mt(E), (ce = C.props && C.props.onVnodeBeforeUpdate) && Ie(ce, F, C, W), ct(c, !0), _t(c, "render");
        const fe = nr(c);
        vt(c, "render");
        const Ae = c.subTree;
        c.subTree = fe, _t(c, "patch"), O(
          Ae,
          fe,
          // parent may have changed if it's in a teleport
          a(Ae.el),
          // anchor may have changed if it's in a fragment
          sn(Ae),
          c,
          b,
          m
        ), vt(c, "patch"), C.el = fe.el, B === null && Gl(c, fe.el), R && ue(R, b), (ce = C.props && C.props.onVnodeUpdated) && ue(
          () => Ie(ce, F, C, W),
          b
        ), oo(c), an();
      } else {
        let C;
        const { el: E, props: R } = u, { bm: F, m: W, parent: B, root: ce, type: fe } = c, Ae = kt(u);
        ct(c, !1), F && Mt(F), !Ae && (C = R && R.onVnodeBeforeMount) && Ie(C, B, u), ct(c, !0);
        {
          ce.ce && ce.ce._hasShadowRoot() && ce.ce._injectChildStyle(fe), _t(c, "render");
          const Pe = c.subTree = nr(c);
          vt(c, "render"), _t(c, "patch"), O(
            null,
            Pe,
            h,
            _,
            c,
            b,
            m
          ), vt(c, "patch"), u.el = Pe.el;
        }
        if (W && ue(W, b), !Ae && (C = R && R.onVnodeMounted)) {
          const Pe = u;
          ue(
            () => Ie(C, B, Pe),
            b
          );
        }
        (u.shapeFlag & 256 || B && kt(B.vnode) && B.vnode.shapeFlag & 256) && c.a && ue(c.a, b), c.isMounted = !0, tl(c), u = h = _ = null;
      }
    };
    c.scope.on();
    const v = c.effect = new Rr(w);
    c.scope.off();
    const y = c.update = v.run.bind(v), $ = c.job = v.runIfDirty.bind(v);
    $.i = c, $.id = c.uid, v.scheduler = () => Dn($), ct(c, !0), v.onTrack = c.rtc ? (C) => Mt(c.rtc, C) : void 0, v.onTrigger = c.rtg ? (C) => Mt(c.rtg, C) : void 0, y();
  }, j = (c, u, h) => {
    u.component = c;
    const _ = c.vnode.props;
    c.vnode = u, c.next = null, Yl(c, u.props, _, h), oc(c, u.children, h), Te(), Gs(c), Oe();
  }, Ee = (c, u, h, _, b, m, S, w, v = !1) => {
    const y = c && c.children, $ = c ? c.shapeFlag : 0, C = u.children, { patchFlag: E, shapeFlag: R } = u;
    if (E > 0) {
      if (E & 128) {
        Et(
          y,
          C,
          h,
          _,
          b,
          m,
          S,
          w,
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
          w,
          v
        );
        return;
      }
    }
    R & 8 ? ($ & 16 && At(y, b, m), C !== y && d(h, C)) : $ & 16 ? R & 16 ? Et(
      y,
      C,
      h,
      _,
      b,
      m,
      S,
      w,
      v
    ) : At(y, b, m, !0) : ($ & 8 && d(h, ""), R & 16 && ie(
      C,
      h,
      _,
      b,
      m,
      S,
      w,
      v
    ));
  }, Nn = (c, u, h, _, b, m, S, w, v) => {
    c = c || xt, u = u || xt;
    const y = c.length, $ = u.length, C = Math.min(y, $);
    let E;
    for (E = 0; E < C; E++) {
      const R = u[E] = v ? Ge(u[E]) : we(u[E]);
      O(
        c[E],
        R,
        h,
        null,
        b,
        m,
        S,
        w,
        v
      );
    }
    y > $ ? At(
      c,
      b,
      m,
      !0,
      !1,
      C
    ) : ie(
      u,
      h,
      _,
      b,
      m,
      S,
      w,
      v,
      C
    );
  }, Et = (c, u, h, _, b, m, S, w, v) => {
    let y = 0;
    const $ = u.length;
    let C = c.length - 1, E = $ - 1;
    for (; y <= C && y <= E; ) {
      const R = c[y], F = u[y] = v ? Ge(u[y]) : we(u[y]);
      if (Dt(R, F))
        O(
          R,
          F,
          h,
          null,
          b,
          m,
          S,
          w,
          v
        );
      else
        break;
      y++;
    }
    for (; y <= C && y <= E; ) {
      const R = c[C], F = u[E] = v ? Ge(u[E]) : we(u[E]);
      if (Dt(R, F))
        O(
          R,
          F,
          h,
          null,
          b,
          m,
          S,
          w,
          v
        );
      else
        break;
      C--, E--;
    }
    if (y > C) {
      if (y <= E) {
        const R = E + 1, F = R < $ ? u[R].el : _;
        for (; y <= E; )
          O(
            null,
            u[y] = v ? Ge(u[y]) : we(u[y]),
            h,
            F,
            b,
            m,
            S,
            w,
            v
          ), y++;
      }
    } else if (y > E)
      for (; y <= C; )
        et(c[y], b, m, !0), y++;
    else {
      const R = y, F = y, W = /* @__PURE__ */ new Map();
      for (y = F; y <= E; y++) {
        const se = u[y] = v ? Ge(u[y]) : we(u[y]);
        se.key != null && (W.has(se.key) && x(
          "Duplicate keys found during update:",
          JSON.stringify(se.key),
          "Make sure keys are unique."
        ), W.set(se.key, y));
      }
      let B, ce = 0;
      const fe = E - F + 1;
      let Ae = !1, Pe = 0;
      const $t = new Array(fe);
      for (y = 0; y < fe; y++) $t[y] = 0;
      for (y = R; y <= C; y++) {
        const se = c[y];
        if (ce >= fe) {
          et(se, b, m, !0);
          continue;
        }
        let $e;
        if (se.key != null)
          $e = W.get(se.key);
        else
          for (B = F; B <= E; B++)
            if ($t[B - F] === 0 && Dt(se, u[B])) {
              $e = B;
              break;
            }
        $e === void 0 ? et(se, b, m, !0) : ($t[$e - F] = y + 1, $e >= Pe ? Pe = $e : Ae = !0, O(
          se,
          u[$e],
          h,
          null,
          b,
          m,
          S,
          w,
          v
        ), ce++);
      }
      const Ns = Ae ? uc($t) : xt;
      for (B = Ns.length - 1, y = fe - 1; y >= 0; y--) {
        const se = F + y, $e = u[se], Ls = u[se + 1], Vs = se + 1 < $ ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ls.el || Mo(Ls)
        ) : _;
        $t[y] === 0 ? O(
          null,
          $e,
          h,
          Vs,
          b,
          m,
          S,
          w,
          v
        ) : Ae && (B < 0 || y !== Ns[B] ? bt($e, h, Vs, 2) : B--);
      }
    }
  }, bt = (c, u, h, _, b = null) => {
    const { el: m, type: S, transition: w, children: v, shapeFlag: y } = c;
    if (y & 6) {
      bt(c.component.subTree, u, h, _);
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
    if (S === ye) {
      s(m, u, h);
      for (let C = 0; C < v.length; C++)
        bt(v[C], u, h, _);
      s(c.anchor, u, h);
      return;
    }
    if (S === hn) {
      pe(c, u, h);
      return;
    }
    if (_ !== 2 && y & 1 && w)
      if (_ === 0)
        w.beforeEnter(m), s(m, u, h), ue(() => w.enter(m), b);
      else {
        const { leave: C, delayLeave: E, afterLeave: R } = w, F = () => {
          c.ctx.isUnmounted ? r(m) : s(m, u, h);
        }, W = () => {
          m._isLeaving && m[hl](
            !0
            /* cancelled */
          ), C(m, () => {
            F(), R && R();
          });
        };
        E ? E(m, F, W) : W();
      }
    else
      s(m, u, h);
  }, et = (c, u, h, _ = !1, b = !1) => {
    const {
      type: m,
      props: S,
      ref: w,
      children: v,
      dynamicChildren: y,
      shapeFlag: $,
      patchFlag: C,
      dirs: E,
      cacheIndex: R
    } = c;
    if (C === -2 && (b = !1), w != null && (Te(), Vt(w, null, h, c, !0), Oe()), R != null && (u.renderCache[R] = void 0), $ & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const F = $ & 1 && E, W = !kt(c);
    let B;
    if (W && (B = S && S.onVnodeBeforeUnmount) && Ie(B, u, c), $ & 6)
      Wo(c.component, h, _);
    else {
      if ($ & 128) {
        c.suspense.unmount(h, _);
        return;
      }
      F && lt(c, null, u, "beforeUnmount"), $ & 64 ? c.type.remove(
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
      (m !== ye || C > 0 && C & 64) ? At(
        y,
        u,
        h,
        !1,
        !0
      ) : (m === ye && C & 384 || !b && $ & 16) && At(v, u, h), _ && Ln(c);
    }
    (W && (B = S && S.onVnodeUnmounted) || F) && ue(() => {
      B && Ie(B, u, c), F && lt(c, null, u, "unmounted");
    }, h);
  }, Ln = (c) => {
    const { type: u, el: h, anchor: _, transition: b } = c;
    if (u === ye) {
      c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((S) => {
        S.type === me ? r(S.el) : Ln(S);
      }) : Ko(h, _);
      return;
    }
    if (u === hn) {
      A(c);
      return;
    }
    const m = () => {
      r(h), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: S, delayLeave: w } = b, v = () => S(h, m);
      w ? w(c.el, m, v) : v();
    } else
      m();
  }, Ko = (c, u) => {
    let h;
    for (; c !== u; )
      h = g(c), r(c), c = h;
    r(u);
  }, Wo = (c, u, h) => {
    c.type.__hmrId && zi(c);
    const { bum: _, scope: b, job: m, subTree: S, um: w, m: v, a: y } = c;
    cr(v), cr(y), _ && Mt(_), b.stop(), m && (m.flags |= 8, et(S, c, u, h)), w && ue(w, u), ue(() => {
      c.isUnmounted = !0;
    }, u), sl(c);
  }, At = (c, u, h, _ = !1, b = !1, m = 0) => {
    for (let S = m; S < c.length; S++)
      et(c[S], u, h, _, b);
  }, sn = (c) => {
    if (c.shapeFlag & 6)
      return sn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = g(c.anchor || c.el), h = u && u[dl];
    return h ? g(h) : u;
  };
  let Vn = !1;
  const Hs = (c, u, h) => {
    let _;
    c == null ? u._vnode && (et(u._vnode, null, null, !0), _ = u._vnode.component) : O(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, Vn || (Vn = !0, Gs(_), to(), Vn = !1);
  }, Pt = {
    p: O,
    um: et,
    m: bt,
    r: Ln,
    mt: Qe,
    mc: ie,
    pc: Ee,
    pbc: Ze,
    n: sn,
    o: e
  };
  return {
    render: Hs,
    hydrate: void 0,
    createApp: Ll(Hs)
  };
}
function Yn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ct({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function us(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (P(s) && P(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = Ge(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && us(i, l)), l.type === Qt && (l.patchFlag === -1 && (l = r[o] = Ge(l)), l.el = i.el), l.type === me && !l.el && (l.el = i.el), l.el && (l.el.__vnode = l);
    }
}
function uc(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const p = e[s];
    if (p !== 0) {
      if (r = n[n.length - 1], e[r] < p) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < p ? o = l + 1 : i = l;
      p < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function $o(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : $o(t);
}
function cr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Mo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Mo(t.subTree) : null;
}
const Io = (e) => e.__isSuspense;
function ac(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : eo(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), Qt = /* @__PURE__ */ Symbol.for("v-txt"), me = /* @__PURE__ */ Symbol.for("v-cmt"), hn = /* @__PURE__ */ Symbol.for("v-stc"), Ut = [];
let ge = null;
function ve(e = !1) {
  Ut.push(ge = e ? null : []);
}
function dc() {
  Ut.pop(), ge = Ut[Ut.length - 1] || null;
}
let Gt = 1;
function fr(e, t = !1) {
  Gt += e, e < 0 && ge && t && (ge.hasOnce = !0);
}
function Ro(e) {
  return e.dynamicChildren = Gt > 0 ? ge || xt : null, dc(), Gt > 0 && ge && ge.push(e), e;
}
function Me(e, t, n, s, r, o) {
  return Ro(
    J(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function pc(e, t, n, s, r) {
  return Ro(
    qe(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dt(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = dn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const hc = (...e) => gc(
  ...e
), Do = ({ key: e }) => e ?? null, gn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || /* @__PURE__ */ Z(e) || M(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function J(e, t = null, n = null, s = 0, r = null, o = e === ye ? 0 : 1, i = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Do(t),
    ref: t && gn(t),
    scopeId: lo,
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
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  return l ? (Ds(f, n), o & 128 && e.normalize(f)) : n && (f.shapeFlag |= q(n) ? 8 : 16), f.key !== f.key && x("VNode created with invalid key (NaN). VNode type:", f.type), Gt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ge.push(f), f;
}
const qe = hc;
function gc(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Al) && (e || x(`Invalid vnode type when creating vnode: ${e}.`), e = me), Hn(e)) {
    const l = it(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ds(l, n), Gt > 0 && !o && ge && (l.shapeFlag & 6 ? ge[ge.indexOf(e)] = l : ge.push(l)), l.patchFlag = -2, l;
  }
  if (ko(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: l, style: f } = t;
    l && !q(l) && (t.class = _s(l)), L(f) && (/* @__PURE__ */ _n(f) && !P(f) && (f = z({}, f)), t.style = ys(f));
  }
  const i = q(e) ? 1 : Io(e) ? 128 : pl(e) ? 64 : L(e) ? 4 : M(e) ? 2 : 0;
  return i & 4 && /* @__PURE__ */ _n(e) && (e = /* @__PURE__ */ D(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), J(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function mc(e) {
  return e ? /* @__PURE__ */ _n(e) || Co(e) ? z({}, e) : e : null;
}
function it(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: f } = e, p = t ? bc(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Do(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? P(o) ? o.concat(gn(t)) : [o, gn(t)] : gn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i === -1 && P(l) ? l.map(jo) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
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
  return f && s && As(
    d,
    f.clone(d)
  ), d;
}
function jo(e) {
  const t = it(e);
  return P(e.children) && (t.children = e.children.map(jo)), t;
}
function Fo(e = " ", t = 0) {
  return qe(Qt, null, e, t);
}
function cn(e = "", t = !1) {
  return t ? (ve(), pc(me, null, e)) : qe(me, null, e);
}
function we(e) {
  return e == null || typeof e == "boolean" ? qe(me) : P(e) ? qe(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hn(e) ? Ge(e) : qe(Qt, null, String(e));
}
function Ge(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : it(e);
}
function Ds(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ds(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Co(t) ? t._ctx = he : r === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else M(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Fo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function bc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = _s([t.class, s.class]));
      else if (r === "style")
        t.style = ys([t.style, s.style]);
      else if (Jt(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(P(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ie(e, t, n, s = null) {
  Ve(e, t, 7, [
    n,
    s
  ]);
}
const yc = yo();
let _c = 0;
function vc(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || yc, o = {
    uid: _c++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new pi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Oo(s, r),
    emitsOptions: _o(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
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
  return o.ctx = Pl(o), o.root = t ? t.root : o, o.emit = kl.bind(null, o), e.ce && e.ce(o), o;
}
let X = null;
const Ho = () => X || he;
let An, as;
{
  const e = zt(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  An = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => X = n
  ), as = t(
    "__VUE_SSR_SETTERS__",
    (n) => qt = n
  );
}
const en = (e) => {
  const t = X;
  return An(e), e.scope.on(), () => {
    e.scope.off(), An(t);
  };
}, ur = () => {
  X && X.scope.off(), An(null);
}, wc = /* @__PURE__ */ ze("slot,component");
function ds(e, { isNativeTag: t }) {
  (wc(e) || t(e)) && x(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function No(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function xc(e, t = !1, n = !1) {
  t && as(t);
  const { props: s, children: r } = e.vnode, o = No(e);
  ql(e, s, o, t), rc(e, r, n || t);
  const i = o ? Sc(e, t) : void 0;
  return t && as(!1), i;
}
function Sc(e, t) {
  const n = e.type;
  {
    if (n.name && ds(n.name, e.appContext.config), n.components) {
      const r = Object.keys(n.components);
      for (let o = 0; o < r.length; o++)
        ds(r[o], e.appContext.config);
    }
    if (n.directives) {
      const r = Object.keys(n.directives);
      for (let o = 0; o < r.length; o++)
        co(r[o]);
    }
    n.compilerOptions && Cc() && x(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, go), $l(e);
  const { setup: s } = n;
  if (s) {
    Te();
    const r = e.setupContext = s.length > 1 ? Ec(e) : null, o = en(e), i = Ot(
      s,
      e,
      0,
      [
        /* @__PURE__ */ Fe(e.props),
        r
      ]
    ), l = gs(i);
    if (Oe(), o(), (l || e.sp) && !kt(e) && ao(e), l) {
      if (i.then(ur, ur), t)
        return i.then((f) => {
          ar(e, f, t);
        }).catch((f) => {
          Xt(f, e, 0);
        });
      if (e.asyncDep = i, !e.suspense) {
        const f = tn(e, n);
        x(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ar(e, i, t);
  } else
    Lo(e, t);
}
function ar(e, t, n) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : L(t) ? (Hn(t) && x(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = zr(t), Ml(e)) : t !== void 0 && x(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Lo(e, n);
}
const Cc = () => !0;
function Lo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ne);
  {
    const r = en(e);
    Te();
    try {
      Rl(e);
    } finally {
      Oe(), r();
    }
  }
  !s.render && e.render === ne && !t && (s.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : x("Component is missing template or render function: ", s));
}
const Tc = {
  get(e, t) {
    return On(), ee(e, "get", ""), e[t];
  },
  set() {
    return x("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return x("setupContext.attrs is readonly."), !1;
  }
};
function Oc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ee(e, "get", "$slots"), t[n];
    }
  });
}
function Ec(e) {
  const t = (n) => {
    if (e.exposed && x("expose() should be called only once per setup()."), n != null) {
      let s = typeof n;
      s === "object" && (P(n) ? s = "array" : /* @__PURE__ */ Z(n) && (s = "ref")), s !== "object" && x(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Tc));
      },
      get slots() {
        return s || (s = Oc(e));
      },
      get emit() {
        return (r, ...o) => e.emit(r, ...o);
      },
      expose: t
    });
  }
}
function js(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(zr(Di(e.exposed)), {
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
const Ac = /(?:^|[-_])\w/g, Pc = (e) => e.replace(Ac, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vo(e, t = !0) {
  return M(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function tn(e, t, n = !1) {
  let s = Vo(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(e.components) || e.parent && r(
      e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Pc(s) : n ? "App" : "Anonymous";
}
function ko(e) {
  return M(e) && "__vccOpts" in e;
}
const $c = (e, t) => {
  const n = /* @__PURE__ */ Ni(e, t, qt);
  {
    const s = Ho();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Mc() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!L(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ Z(a)) {
        Te();
        const g = a.value;
        return Oe(), [
          "div",
          {},
          ["span", e, d(a)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ rt(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ de(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${/* @__PURE__ */ Le(a) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ Le(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ de(a) ? "ShallowReadonly" : "Readonly"],
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
          style: s.style + ";opacity:0.66"
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
          ["span", s, T + ": "],
          l(g[T], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : L(a) ? ["object", { object: g ? /* @__PURE__ */ D(a) : a }] : ["span", n, String(a)];
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
    if (P(I) && I.includes(g) || L(I) && g in I || a.extends && p(a.extends, g, T) || a.mixins && a.mixins.some((O) => p(O, g, T)))
      return !0;
  }
  function d(a) {
    return /* @__PURE__ */ de(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const dr = "3.5.29", Je = x;
let ps;
const pr = typeof window < "u" && window.trustedTypes;
if (pr)
  try {
    ps = /* @__PURE__ */ pr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Je(`Error creating trusted types policy: ${e}`);
  }
const Uo = ps ? (e) => ps.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Rc = "http://www.w3.org/1998/Math/MathML", Ke = typeof document < "u" ? document : null, hr = Ke && /* @__PURE__ */ Ke.createElement("template"), Dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Ke.createElementNS(Ic, e) : t === "mathml" ? Ke.createElementNS(Rc, e) : n ? Ke.createElement(e, { is: n }) : Ke.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Ke.createTextNode(e),
  createComment: (e) => Ke.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ke.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      hr.innerHTML = Uo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = hr.content;
      if (s === "svg" || s === "mathml") {
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
}, jc = /* @__PURE__ */ Symbol("_vtc");
function Fc(e, t, n) {
  const s = e[jc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const gr = /* @__PURE__ */ Symbol("_vod"), Hc = /* @__PURE__ */ Symbol("_vsh"), Nc = /* @__PURE__ */ Symbol("CSS_VAR_TEXT"), Lc = /(?:^|;)\s*display\s*:/;
function Vc(e, t, n) {
  const s = e.style, r = q(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (q(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && mn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && mn(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), mn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Nc];
      i && (n += ";" + i), s.cssText = n, o = Lc.test(n);
    }
  } else t && e.removeAttribute("style");
  gr in e && (e[gr] = o ? s.display : "", e[Hc] && (s.display = "none"));
}
const kc = /[^\\];\s*$/, mr = /\s*!important$/;
function mn(e, t, n) {
  if (P(n))
    n.forEach((s) => mn(e, t, s));
  else if (n == null && (n = ""), kc.test(n) && Je(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Uc(e, t);
    mr.test(n) ? e.setProperty(
      ot(s),
      n.replace(mr, ""),
      "important"
    ) : e[s] = n;
  }
}
const br = ["Webkit", "Moz", "ms"], zn = {};
function Uc(e, t) {
  const n = zn[t];
  if (n)
    return n;
  let s = xe(t);
  if (s !== "filter" && s in e)
    return zn[t] = s;
  s = $n(s);
  for (let r = 0; r < br.length; r++) {
    const o = br[r] + s;
    if (o in e)
      return zn[t] = o;
  }
  return t;
}
const yr = "http://www.w3.org/1999/xlink";
function _r(e, t, n, s, r, o = ai(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(yr, t.slice(6, t.length)) : e.setAttributeNS(yr, t, n) : n == null || o && !$r(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ne(n) ? String(n) : n
  );
}
function vr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Uo(n) : n);
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
    l === "boolean" ? n = $r(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    i || Je(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(r || t);
}
function Bc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Kc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const wr = /* @__PURE__ */ Symbol("_vei");
function Wc(e, t, n, s, r = null) {
  const o = e[wr] || (e[wr] = {}), i = o[t];
  if (s && i)
    i.value = Sr(s, t);
  else {
    const [l, f] = Gc(t);
    if (s) {
      const p = o[t] = Yc(
        Sr(s, t),
        r
      );
      Bc(e, l, p, f);
    } else i && (Kc(e, l, i, f), o[t] = void 0);
  }
}
const xr = /(?:Once|Passive|Capture)$/;
function Gc(e) {
  let t;
  if (xr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(xr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ot(e.slice(2)), t];
}
let Xn = 0;
const qc = /* @__PURE__ */ Promise.resolve(), Jc = () => Xn || (qc.then(() => Xn = 0), Xn = Date.now());
function Yc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ve(
      zc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Jc(), n;
}
function Sr(e, t) {
  return M(e) || P(e) ? e : (Je(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ne);
}
function zc(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const Cr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xc = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? Fc(e, s, i) : t === "style" ? Vc(e, n, s) : Jt(t) ? bn(t) || Wc(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zc(e, t, s, i)) ? (vr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _r(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !q(s)) ? vr(e, xe(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), _r(e, t, s, i));
};
function Zc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Cr(t) && M(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Cr(t) && q(n) ? !1 : t in e;
}
const Qc = /* @__PURE__ */ z({ patchProp: Xc }, Dc);
let Tr;
function ef() {
  return Tr || (Tr = lc(Qc));
}
const tf = ((...e) => {
  const t = ef().createApp(...e);
  sf(t), rf(t);
  const { mount: n } = t;
  return t.mount = (s) => {
    const r = of(s);
    if (!r) return;
    const o = t._component;
    !M(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, nf(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
});
function nf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function sf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => li(t) || ci(t) || fi(t),
    writable: !1
  });
}
function rf(e) {
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
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Je(s), n;
      },
      set() {
        Je(s);
      }
    });
  }
}
function of(e) {
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
function lf() {
  Mc();
}
lf();
const cf = "/umbraco/management/api/v1";
let fn = null;
async function Bo(e, t) {
  const n = new Go(e, t);
  try {
    n.hostConnected();
    const s = await n.asPromise();
    if (!s)
      throw new Error("Context var null: " + t.toString());
    return console.log("[Umbraco] Got context:", t.toString()), s;
  } finally {
    n.hostDisconnected(), n.destroy();
  }
}
async function ff(e) {
  if (fn) return fn;
  const n = await (await Bo(e, qo)).getOpenApiConfiguration();
  return fn = typeof n.token == "function" ? await n.token() : n.token, console.log("[Umbraco] Got auth token"), fn;
}
async function uf(e, t) {
  const n = await ff(e), s = await fetch(cf + t, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + n
    }
  });
  if (!s.ok)
    throw new Error("Management API fejl: " + s.status + " " + t);
  return s.json();
}
async function af(e, t, n, s) {
  try {
    (await Bo(e, Jo)).peek(t, { data: { headline: n, message: s } });
  } catch {
    console.log("[Notification fallback]", t, n, s);
  }
}
const df = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, pf = /* @__PURE__ */ gl({
  name: "BrandDashboard",
  // Host-elementet (custom element) injiceres fra createApp().provide()
  inject: ["hostElement"],
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
      return uf(this.hostElement, e);
    },
    async refreshAll() {
      this.loading = !0, this.error = null;
      try {
        await Promise.all([
          this.loadUser(),
          this.loadDocuments(),
          this.loadStats()
        ]), af(this.hostElement, "positive", "Dashboard klar", "Data loaded!");
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
      const [e, t, n, s] = await Promise.all([
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
        { label: "Dokumenttyper", value: s.total ?? 0 }
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
}), hf = { class: "brand-dashboard" }, gf = { key: 0 }, mf = {
  key: 1,
  headline: "Velkommen"
}, bf = {
  class: "dashboard-grid",
  style: { "margin-top": "16px" }
}, yf = { class: "stat-card" }, _f = { class: "stat-value" }, vf = { class: "stat-label" }, wf = {
  headline: "Senest opdateret content",
  style: { "margin-top": "16px" }
}, xf = { key: 0 }, Sf = { look: "secondary" }, Cf = ["color"], Tf = { key: 1 }, Of = {
  headline: "Hurtige handlinger",
  style: { "margin-top": "16px" }
}, Ef = {
  key: 2,
  style: { color: "red" }
};
function Af(e, t, n, s, r, o) {
  return ve(), Me("div", hf, [
    e.loading ? (ve(), Me("uui-loader-bar", gf)) : cn("", !0),
    e.currentUser ? (ve(), Me("uui-box", mf, [
      J("p", null, [
        t[1] || (t[1] = Fo(" Logget ind som ", -1)),
        J("strong", null, Be(e.currentUser.name), 1)
      ])
    ])) : cn("", !0),
    J("div", bf, [
      (ve(!0), Me(ye, null, Xs(e.stats, (i) => (ve(), Me("uui-box", {
        key: i.label
      }, [
        J("div", yf, [
          J("span", _f, Be(i.value), 1),
          J("span", vf, Be(i.label), 1)
        ])
      ]))), 128))
    ]),
    J("uui-box", wf, [
      e.documents.length ? (ve(), Me("uui-table", xf, [
        t[2] || (t[2] = J("uui-table-head", null, [
          J("uui-table-head-cell", null, "Navn"),
          J("uui-table-head-cell", null, "Type"),
          J("uui-table-head-cell", null, "Status"),
          J("uui-table-head-cell", null, "Opdateret")
        ], -1)),
        (ve(!0), Me(ye, null, Xs(e.documents, (i) => (ve(), Me("uui-table-row", {
          key: i.id
        }, [
          J("uui-table-cell", null, Be(e.getDocumentName(i)), 1),
          J("uui-table-cell", null, [
            J("uui-tag", Sf, Be(e.getDocumentTypeAlias(i)), 1)
          ]),
          J("uui-table-cell", null, [
            J("uui-tag", {
              color: e.getStatusColor(i),
              look: "primary"
            }, Be(e.getStatusLabel(i)), 9, Cf)
          ]),
          J("uui-table-cell", null, Be(e.formatDate(i)), 1)
        ]))), 128))
      ])) : e.loading ? cn("", !0) : (ve(), Me("p", Tf, "Ingen content fundet."))
    ]),
    J("uui-box", Of, [
      J("uui-button", {
        look: "primary",
        color: "positive",
        label: "Opdater",
        onClick: t[0] || (t[0] = (...i) => e.refreshAll && e.refreshAll(...i))
      })
    ]),
    e.error ? (ve(), Me("p", Ef, Be(e.error), 1)) : cn("", !0)
  ]);
}
const Pf = /* @__PURE__ */ df(pf, [["render", Af]]);
class $f extends HTMLElement {
  connectedCallback() {
    const t = document.createElement("div");
    this.appendChild(t), this._app = tf(Pf), this._app.provide("hostElement", this), this._app.mount(t), console.log("[Vue Dashboard] Mounted semler-brand-dashboard");
  }
  disconnectedCallback() {
    this._app && (this._app.unmount(), this._app = null), this.innerHTML = "", console.log("[Vue Dashboard] Unmounted semler-brand-dashboard");
  }
}
customElements.define("semler-brand-dashboard", $f);
//# sourceMappingURL=vue-dashboard.js.map
