function _toConsumableArray(t) {
  if (Array.isArray(t)) {
    for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
    return i;
  }
  return Array.from(t);
}
(function() {
  var t = this;
  (function() {
    (function() {
      this.Rails = {
        linkClickSelector:
          "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: {
          selector:
            "button[data-remote]:not([form]), button[data-confirm]:not([form])",
          exclude: "form button"
        },
        inputChangeSelector:
          "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector:
          "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        formDisableSelector:
          "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        formEnableSelector:
          "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector:
          "button[data-remote][data-disable-with], button[data-remote][data-disable]"
      };
    }.call(this));
  }.call(t));
  var e = t.Rails;
  (function() {
    (function() {
      e.cspNonce = function() {
        var t;
        return (
          (t = document.querySelector("meta[name=csp-nonce]")) && t.content
        );
      };
    }.call(this),
      function() {
        var t, i;
        (i =
          Element.prototype.matches ||
          Element.prototype.matchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
          (e.matches = function(t, e) {
            return null != e.exclude
              ? i.call(t, e.selector) && !i.call(t, e.exclude)
              : i.call(t, e);
          }),
          (t = "_ujsData"),
          (e.getData = function(e, i) {
            var n;
            return null != (n = e[t]) ? n[i] : void 0;
          }),
          (e.setData = function(e, i, n) {
            return null == e[t] && (e[t] = {}), (e[t][i] = n);
          }),
          (e.$ = function(t) {
            return Array.prototype.slice.call(document.querySelectorAll(t));
          });
      }.call(this),
      function() {
        var t, i, n;
        (t = e.$),
          (n = e.csrfToken = function() {
            var t;
            return (
              (t = document.querySelector("meta[name=csrf-token]")) && t.content
            );
          }),
          (i = e.csrfParam = function() {
            var t;
            return (
              (t = document.querySelector("meta[name=csrf-param]")) && t.content
            );
          }),
          (e.CSRFProtection = function(t) {
            var e;
            if (null != (e = n())) return t.setRequestHeader("X-CSRF-Token", e);
          }),
          (e.refreshCSRFTokens = function() {
            var e, r;
            if (((r = n()), (e = i()), null != r && null != e))
              return t('form input[name="' + e + '"]').forEach(function(t) {
                return (t.value = r);
              });
          });
      }.call(this),
      function() {
        var t, i, n, r;
        (n = e.matches),
          "function" != typeof (t = window.CustomEvent) &&
            (((t = function(t, e) {
              var i;
              return (
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  t,
                  e.bubbles,
                  e.cancelable,
                  e.detail
                ),
                i
              );
            }).prototype = window.Event.prototype),
            (r = t.prototype.preventDefault),
            (t.prototype.preventDefault = function() {
              var t;
              return (
                (t = r.call(this)),
                this.cancelable &&
                  !this.defaultPrevented &&
                  Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                      return !0;
                    }
                  }),
                t
              );
            })),
          (i = e.fire = function(e, i, n) {
            var r;
            return (
              (r = new t(i, {bubbles: !0, cancelable: !0, detail: n})),
              e.dispatchEvent(r),
              !r.defaultPrevented
            );
          }),
          (e.stopEverything = function(t) {
            return (
              i(t.target, "ujs:everythingStopped"),
              t.preventDefault(),
              t.stopPropagation(),
              t.stopImmediatePropagation()
            );
          }),
          (e.delegate = function(t, e, i, r) {
            return t.addEventListener(i, function(t) {
              var i;
              for (i = t.target; i instanceof Element && !n(i, e); )
                i = i.parentNode;
              if (i instanceof Element && !1 === r.call(i, t))
                return t.preventDefault(), t.stopPropagation();
            });
          });
      }.call(this),
      function() {
        var t, i, n, r, s, o;
        (r = e.cspNonce),
          (i = e.CSRFProtection),
          e.fire,
          (t = {
            "*": "*/*",
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          }),
          (e.ajax = function(t) {
            var e;
            return (
              (t = s(t)),
              (e = n(t, function() {
                var i, n;
                return (
                  (n = o(
                    null != (i = e.response) ? i : e.responseText,
                    e.getResponseHeader("Content-Type")
                  )),
                  2 === Math.floor(e.status / 100)
                    ? "function" == typeof t.success &&
                      t.success(n, e.statusText, e)
                    : "function" == typeof t.error &&
                      t.error(n, e.statusText, e),
                  "function" == typeof t.complete
                    ? t.complete(e, e.statusText)
                    : void 0
                );
              })),
              !(null != t.beforeSend && !t.beforeSend(e, t)) &&
                (e.readyState === XMLHttpRequest.OPENED
                  ? e.send(t.data)
                  : void 0)
            );
          }),
          (s = function(e) {
            return (
              (e.url = e.url || location.href),
              (e.type = e.type.toUpperCase()),
              "GET" === e.type &&
                e.data &&
                (e.url.indexOf("?") < 0
                  ? (e.url += "?" + e.data)
                  : (e.url += "&" + e.data)),
              null == t[e.dataType] && (e.dataType = "*"),
              (e.accept = t[e.dataType]),
              "*" !== e.dataType && (e.accept += ", */*; q=0.01"),
              e
            );
          }),
          (n = function(t, e) {
            var n;
            return (
              (n = new XMLHttpRequest()).open(t.type, t.url, !0),
              n.setRequestHeader("Accept", t.accept),
              "string" == typeof t.data &&
                n.setRequestHeader(
                  "Content-Type",
                  "application/x-www-form-urlencoded; charset=UTF-8"
                ),
              t.crossDomain ||
                n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              i(n),
              (n.withCredentials = !!t.withCredentials),
              (n.onreadystatechange = function() {
                if (n.readyState === XMLHttpRequest.DONE) return e(n);
              }),
              n
            );
          }),
          (o = function(t, e) {
            var i, n;
            if ("string" == typeof t && "string" == typeof e)
              if (e.match(/\bjson\b/))
                try {
                  t = JSON.parse(t);
                } catch (s) {}
              else if (e.match(/\b(?:java|ecma)script\b/))
                (n = document.createElement("script")).setAttribute(
                  "nonce",
                  r()
                ),
                  (n.text = t),
                  document.head.appendChild(n).parentNode.removeChild(n);
              else if (e.match(/\b(xml|html|svg)\b/)) {
                (i = new DOMParser()), (e = e.replace(/;.+/, ""));
                try {
                  t = i.parseFromString(t, e);
                } catch (s) {}
              }
            return t;
          }),
          (e.href = function(t) {
            return t.href;
          }),
          (e.isCrossDomain = function(t) {
            var e, i;
            ((e = document.createElement("a")).href = location.href),
              (i = document.createElement("a"));
            try {
              return (
                (i.href = t),
                !(
                  ((!i.protocol || ":" === i.protocol) && !i.host) ||
                  e.protocol + "//" + e.host == i.protocol + "//" + i.host
                )
              );
            } catch (n) {
              return n, !0;
            }
          });
      }.call(this),
      function() {
        var t, i;
        (t = e.matches),
          (i = function(t) {
            return Array.prototype.slice.call(t);
          }),
          (e.serializeElement = function(e, n) {
            var r, s;
            return (
              (r = [e]),
              t(e, "form") && (r = i(e.elements)),
              (s = []),
              r.forEach(function(e) {
                if (e.name && !e.disabled)
                  return t(e, "select")
                    ? i(e.options).forEach(function(t) {
                        if (t.selected)
                          return s.push({name: e.name, value: t.value});
                      })
                    : e.checked ||
                      -1 === ["radio", "checkbox", "submit"].indexOf(e.type)
                    ? s.push({name: e.name, value: e.value})
                    : void 0;
              }),
              n && s.push(n),
              s
                .map(function(t) {
                  return null != t.name
                    ? encodeURIComponent(t.name) +
                        "=" +
                        encodeURIComponent(t.value)
                    : t;
                })
                .join("&")
            );
          }),
          (e.formElements = function(e, n) {
            return t(e, "form")
              ? i(e.elements).filter(function(e) {
                  return t(e, n);
                })
              : i(e.querySelectorAll(n));
          });
      }.call(this),
      function() {
        var t, i, n;
        (i = e.fire),
          (n = e.stopEverything),
          (e.handleConfirm = function(e) {
            if (!t(this)) return n(e);
          }),
          (t = function(t) {
            var e, n, r;
            if (!(r = t.getAttribute("data-confirm"))) return !0;
            if (((e = !1), i(t, "confirm"))) {
              try {
                e = confirm(r);
              } catch (s) {}
              n = i(t, "confirm:complete", [e]);
            }
            return e && n;
          });
      }.call(this),
      function() {
        var t, i, n, r, s, o, a, l, u, h, c;
        (u = e.matches),
          (l = e.getData),
          (h = e.setData),
          (c = e.stopEverything),
          (a = e.formElements),
          (e.handleDisabledElement = function(t) {
            if (this.disabled) return c(t);
          }),
          (e.enableElement = function(t) {
            var i;
            return (
              (i = t instanceof Event ? t.target : t),
              u(i, e.linkDisableSelector)
                ? o(i)
                : u(i, e.buttonDisableSelector) || u(i, e.formEnableSelector)
                ? r(i)
                : u(i, e.formSubmitSelector)
                ? s(i)
                : void 0
            );
          }),
          (e.disableElement = function(r) {
            var s;
            return (
              (s = r instanceof Event ? r.target : r),
              u(s, e.linkDisableSelector)
                ? n(s)
                : u(s, e.buttonDisableSelector) || u(s, e.formDisableSelector)
                ? t(s)
                : u(s, e.formSubmitSelector)
                ? i(s)
                : void 0
            );
          }),
          (n = function(t) {
            var e;
            return (
              null != (e = t.getAttribute("data-disable-with")) &&
                (h(t, "ujs:enable-with", t.innerHTML), (t.innerHTML = e)),
              t.addEventListener("click", c),
              h(t, "ujs:disabled", !0)
            );
          }),
          (o = function(t) {
            var e;
            return (
              null != (e = l(t, "ujs:enable-with")) &&
                ((t.innerHTML = e), h(t, "ujs:enable-with", null)),
              t.removeEventListener("click", c),
              h(t, "ujs:disabled", null)
            );
          }),
          (i = function(i) {
            return a(i, e.formDisableSelector).forEach(t);
          }),
          (t = function(t) {
            var e;
            return (
              null != (e = t.getAttribute("data-disable-with")) &&
                (u(t, "button")
                  ? (h(t, "ujs:enable-with", t.innerHTML), (t.innerHTML = e))
                  : (h(t, "ujs:enable-with", t.value), (t.value = e))),
              (t.disabled = !0),
              h(t, "ujs:disabled", !0)
            );
          }),
          (s = function(t) {
            return a(t, e.formEnableSelector).forEach(r);
          }),
          (r = function(t) {
            var e;
            return (
              null != (e = l(t, "ujs:enable-with")) &&
                (u(t, "button") ? (t.innerHTML = e) : (t.value = e),
                h(t, "ujs:enable-with", null)),
              (t.disabled = !1),
              h(t, "ujs:disabled", null)
            );
          });
      }.call(this),
      function() {
        var t;
        (t = e.stopEverything),
          (e.handleMethod = function(i) {
            var n, r, s, o, a, l, u;
            if ((u = (l = this).getAttribute("data-method")))
              return (
                (a = e.href(l)),
                (r = e.csrfToken()),
                (n = e.csrfParam()),
                (s = document.createElement("form")),
                (o =
                  "<input name='_method' value='" + u + "' type='hidden' />"),
                null == n ||
                  null == r ||
                  e.isCrossDomain(a) ||
                  (o +=
                    "<input name='" +
                    n +
                    "' value='" +
                    r +
                    "' type='hidden' />"),
                (o += '<input type="submit" />'),
                (s.method = "post"),
                (s.action = a),
                (s.target = l.target),
                (s.innerHTML = o),
                (s.style.display = "none"),
                document.body.appendChild(s),
                s.querySelector('[type="submit"]').click(),
                t(i)
              );
          });
      }.call(this),
      function() {
        var t,
          i,
          n,
          r,
          s,
          o,
          a,
          l,
          u,
          h = [].slice;
        (o = e.matches),
          (n = e.getData),
          (l = e.setData),
          (i = e.fire),
          (u = e.stopEverything),
          (t = e.ajax),
          (r = e.isCrossDomain),
          (a = e.serializeElement),
          (s = function(t) {
            var e;
            return null != (e = t.getAttribute("data-remote")) && "false" !== e;
          }),
          (e.handleRemote = function(c) {
            var p, d, f, m, g, y, v;
            return (
              !s((m = this)) ||
              (i(m, "ajax:before")
                ? ((v = m.getAttribute("data-with-credentials")),
                  (f = m.getAttribute("data-type") || "script"),
                  o(m, e.formSubmitSelector)
                    ? ((p = n(m, "ujs:submit-button")),
                      (g = n(m, "ujs:submit-button-formmethod") || m.method),
                      (y =
                        n(m, "ujs:submit-button-formaction") ||
                        m.getAttribute("action") ||
                        location.href),
                      "GET" === g.toUpperCase() && (y = y.replace(/\?.*$/, "")),
                      "multipart/form-data" === m.enctype
                        ? ((d = new FormData(m)),
                          null != p && d.append(p.name, p.value))
                        : (d = a(m, p)),
                      l(m, "ujs:submit-button", null),
                      l(m, "ujs:submit-button-formmethod", null),
                      l(m, "ujs:submit-button-formaction", null))
                    : o(m, e.buttonClickSelector) || o(m, e.inputChangeSelector)
                    ? ((g = m.getAttribute("data-method")),
                      (y = m.getAttribute("data-url")),
                      (d = a(m, m.getAttribute("data-params"))))
                    : ((g = m.getAttribute("data-method")),
                      (y = e.href(m)),
                      (d = m.getAttribute("data-params"))),
                  t({
                    type: g || "GET",
                    url: y,
                    data: d,
                    dataType: f,
                    beforeSend: function(t, e) {
                      return i(m, "ajax:beforeSend", [t, e])
                        ? i(m, "ajax:send", [t])
                        : (i(m, "ajax:stopped"), !1);
                    },
                    success: function() {
                      var t;
                      return (
                        (t = 1 <= arguments.length ? h.call(arguments, 0) : []),
                        i(m, "ajax:success", t)
                      );
                    },
                    error: function() {
                      var t;
                      return (
                        (t = 1 <= arguments.length ? h.call(arguments, 0) : []),
                        i(m, "ajax:error", t)
                      );
                    },
                    complete: function() {
                      var t;
                      return (
                        (t = 1 <= arguments.length ? h.call(arguments, 0) : []),
                        i(m, "ajax:complete", t)
                      );
                    },
                    crossDomain: r(y),
                    withCredentials: null != v && "false" !== v
                  }),
                  u(c))
                : (i(m, "ajax:stopped"), !1))
            );
          }),
          (e.formSubmitButtonClick = function() {
            var t, e;
            if ((e = (t = this).form))
              return (
                t.name &&
                  l(e, "ujs:submit-button", {name: t.name, value: t.value}),
                l(e, "ujs:formnovalidate-button", t.formNoValidate),
                l(
                  e,
                  "ujs:submit-button-formaction",
                  t.getAttribute("formaction")
                ),
                l(
                  e,
                  "ujs:submit-button-formmethod",
                  t.getAttribute("formmethod")
                )
              );
          }),
          (e.handleMetaClick = function(t) {
            var e, i, n;
            if (
              ((n = (
                (i = this).getAttribute("data-method") || "GET"
              ).toUpperCase()),
              (e = i.getAttribute("data-params")),
              (t.metaKey || t.ctrlKey) && "GET" === n && !e)
            )
              return t.stopImmediatePropagation();
          });
      }.call(this),
      function() {
        var t, i, n, r, s, o, a, l, u, h, c, p, d, f;
        if (
          ((o = e.fire),
          (n = e.delegate),
          (l = e.getData),
          (t = e.$),
          (f = e.refreshCSRFTokens),
          (i = e.CSRFProtection),
          (s = e.enableElement),
          (r = e.disableElement),
          (h = e.handleDisabledElement),
          (u = e.handleConfirm),
          (d = e.handleRemote),
          (a = e.formSubmitButtonClick),
          (c = e.handleMetaClick),
          (p = e.handleMethod),
          "undefined" != typeof jQuery &&
            null !== jQuery &&
            null != jQuery.ajax)
        ) {
          if (jQuery.rails)
            throw new Error(
              "If you load both jquery_ujs and rails-ujs, use rails-ujs only."
            );
          (jQuery.rails = e),
            jQuery.ajaxPrefilter(function(t, e, n) {
              if (!t.crossDomain) return i(n);
            });
        }
        (e.start = function() {
          if (window._rails_loaded)
            throw new Error("rails-ujs has already been loaded!");
          return (
            window.addEventListener("pageshow", function() {
              return (
                t(e.formEnableSelector).forEach(function(t) {
                  if (l(t, "ujs:disabled")) return s(t);
                }),
                t(e.linkDisableSelector).forEach(function(t) {
                  if (l(t, "ujs:disabled")) return s(t);
                })
              );
            }),
            n(document, e.linkDisableSelector, "ajax:complete", s),
            n(document, e.linkDisableSelector, "ajax:stopped", s),
            n(document, e.buttonDisableSelector, "ajax:complete", s),
            n(document, e.buttonDisableSelector, "ajax:stopped", s),
            n(document, e.linkClickSelector, "click", h),
            n(document, e.linkClickSelector, "click", u),
            n(document, e.linkClickSelector, "click", c),
            n(document, e.linkClickSelector, "click", r),
            n(document, e.linkClickSelector, "click", d),
            n(document, e.linkClickSelector, "click", p),
            n(document, e.buttonClickSelector, "click", h),
            n(document, e.buttonClickSelector, "click", u),
            n(document, e.buttonClickSelector, "click", r),
            n(document, e.buttonClickSelector, "click", d),
            n(document, e.inputChangeSelector, "change", h),
            n(document, e.inputChangeSelector, "change", u),
            n(document, e.inputChangeSelector, "change", d),
            n(document, e.formSubmitSelector, "submit", h),
            n(document, e.formSubmitSelector, "submit", u),
            n(document, e.formSubmitSelector, "submit", d),
            n(document, e.formSubmitSelector, "submit", function(t) {
              return setTimeout(function() {
                return r(t);
              }, 13);
            }),
            n(document, e.formSubmitSelector, "ajax:send", r),
            n(document, e.formSubmitSelector, "ajax:complete", s),
            n(document, e.formInputClickSelector, "click", h),
            n(document, e.formInputClickSelector, "click", u),
            n(document, e.formInputClickSelector, "click", a),
            document.addEventListener("DOMContentLoaded", f),
            (window._rails_loaded = !0)
          );
        }),
          window.Rails === e &&
            o(document, "rails:attachBindings") &&
            e.start();
      }.call(this));
  }.call(this),
    "object" == typeof module && module.exports
      ? (module.exports = e)
      : "function" == typeof define && define.amd && define(e));
}.call(this),
  /*!
   * jQuery JavaScript Library v3.3.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2018-01-20T17:24Z
   */
  (function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function(t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    function i(t, e, i) {
      var n,
        r = (e = e || ot).createElement("script");
      if (((r.text = t), i)) for (n in bt) i[n] && (r[n] = i[n]);
      e.head.appendChild(r).parentNode.removeChild(r);
    }
    function n(t) {
      return null == t
        ? t + ""
        : "object" == typeof t || "function" == typeof t
        ? pt[dt.call(t)] || "object"
        : typeof t;
    }
    function r(t) {
      var e = !!t && "length" in t && t.length,
        i = n(t);
      return (
        !vt(t) &&
        !_t(t) &&
        ("array" === i ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t))
      );
    }
    function s(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }
    function o(t, e, i) {
      return vt(e)
        ? xt.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i;
          })
        : e.nodeType
        ? xt.grep(t, function(t) {
            return (t === e) !== i;
          })
        : "string" != typeof e
        ? xt.grep(t, function(t) {
            return ct.call(e, t) > -1 !== i;
          })
        : xt.filter(e, t, i);
    }
    function a(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; );
      return t;
    }
    function l(t) {
      var e = {};
      return (
        xt.each(t.match($t) || [], function(t, i) {
          e[i] = !0;
        }),
        e
      );
    }
    function u(t) {
      return t;
    }
    function h(t) {
      throw t;
    }
    function c(t, e, i, n) {
      var r;
      try {
        t && vt((r = t.promise))
          ? r
              .call(t)
              .done(e)
              .fail(i)
          : t && vt((r = t.then))
          ? r.call(t, e, i)
          : e.apply(undefined, [t].slice(n));
      } catch (t) {
        i.apply(undefined, [t]);
      }
    }
    function p() {
      ot.removeEventListener("DOMContentLoaded", p),
        t.removeEventListener("load", p),
        xt.ready();
    }
    function d(t, e) {
      return e.toUpperCase();
    }
    function f(t) {
      return t.replace(Ft, "ms-").replace(It, d);
    }
    function m() {
      this.expando = xt.expando + m.uid++;
    }
    function g(t) {
      return (
        "true" === t ||
        ("false" !== t &&
          ("null" === t
            ? null
            : t === +t + ""
            ? +t
            : Ht.test(t)
            ? JSON.parse(t)
            : t))
      );
    }
    function y(t, e, i) {
      var n;
      if (i === undefined && 1 === t.nodeType)
        if (
          ((n = "data-" + e.replace(Bt, "-$&").toLowerCase()),
          "string" == typeof (i = t.getAttribute(n)))
        ) {
          try {
            i = g(i);
          } catch (r) {}
          zt.set(t, e, i);
        } else i = undefined;
      return i;
    }
    function v(t, e, i, n) {
      var r,
        s,
        o = 20,
        a = n
          ? function() {
              return n.cur();
            }
          : function() {
              return xt.css(t, e, "");
            },
        l = a(),
        u = (i && i[3]) || (xt.cssNumber[e] ? "" : "px"),
        h = (xt.cssNumber[e] || ("px" !== u && +l)) && Wt.exec(xt.css(t, e));
      if (h && h[3] !== u) {
        for (l /= 2, u = u || h[3], h = +l || 1; o--; )
          xt.style(t, e, h + u),
            (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0),
            (h /= s);
        (h *= 2), xt.style(t, e, h + u), (i = i || []);
      }
      return (
        i &&
          ((h = +h || +l || 0),
          (r = i[1] ? h + (i[1] + 1) * i[2] : +i[2]),
          n && ((n.unit = u), (n.start = h), (n.end = r))),
        r
      );
    }
    function _(t) {
      var e,
        i = t.ownerDocument,
        n = t.nodeName,
        r = Gt[n];
      return (
        r ||
        ((e = i.body.appendChild(i.createElement(n))),
        (r = xt.css(e, "display")),
        e.parentNode.removeChild(e),
        "none" === r && (r = "block"),
        (Gt[n] = r),
        r)
      );
    }
    function b(t, e) {
      for (var i, n, r = [], s = 0, o = t.length; s < o; s++)
        (n = t[s]).style &&
          ((i = n.style.display),
          e
            ? ("none" === i &&
                ((r[s] = qt.get(n, "display") || null),
                r[s] || (n.style.display = "")),
              "" === n.style.display && Xt(n) && (r[s] = _(n)))
            : "none" !== i && ((r[s] = "none"), qt.set(n, "display", i)));
      for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
      return t;
    }
    function w(t, e) {
      var i;
      return (
        (i =
          "undefined" != typeof t.getElementsByTagName
            ? t.getElementsByTagName(e || "*")
            : "undefined" != typeof t.querySelectorAll
            ? t.querySelectorAll(e || "*")
            : []),
        e === undefined || (e && s(t, e)) ? xt.merge([t], i) : i
      );
    }
    function x(t, e) {
      for (var i = 0, n = t.length; i < n; i++)
        qt.set(t[i], "globalEval", !e || qt.get(e[i], "globalEval"));
    }
    function T(t, e, i, r, s) {
      for (
        var o,
          a,
          l,
          u,
          h,
          c,
          p = e.createDocumentFragment(),
          d = [],
          f = 0,
          m = t.length;
        f < m;
        f++
      )
        if ((o = t[f]) || 0 === o)
          if ("object" === n(o)) xt.merge(d, o.nodeType ? [o] : o);
          else if (ie.test(o)) {
            for (
              a = a || p.appendChild(e.createElement("div")),
                l = (Zt.exec(o) || ["", ""])[1].toLowerCase(),
                u = Kt[l] || Kt._default,
                a.innerHTML = u[1] + xt.htmlPrefilter(o) + u[2],
                c = u[0];
              c--;

            )
              a = a.lastChild;
            xt.merge(d, a.childNodes), ((a = p.firstChild).textContent = "");
          } else d.push(e.createTextNode(o));
      for (p.textContent = "", f = 0; (o = d[f++]); )
        if (r && xt.inArray(o, r) > -1) s && s.push(o);
        else if (
          ((h = xt.contains(o.ownerDocument, o)),
          (a = w(p.appendChild(o), "script")),
          h && x(a),
          i)
        )
          for (c = 0; (o = a[c++]); ) Jt.test(o.type || "") && i.push(o);
      return p;
    }
    function C() {
      return !0;
    }
    function S() {
      return !1;
    }
    function E() {
      try {
        return ot.activeElement;
      } catch (t) {}
    }
    function k(t, e, i, n, r, s) {
      var o, a;
      if ("object" == typeof e) {
        for (a in ("string" != typeof i && ((n = n || i), (i = undefined)), e))
          k(t, a, i, n, e[a], s);
        return t;
      }
      if (
        (null == n && null == r
          ? ((r = i), (n = i = undefined))
          : null == r &&
            ("string" == typeof i
              ? ((r = n), (n = undefined))
              : ((r = n), (n = i), (i = undefined))),
        !1 === r)
      )
        r = S;
      else if (!r) return t;
      return (
        1 === s &&
          ((o = r),
          ((r = function(t) {
            return xt().off(t), o.apply(this, arguments);
          }).guid = o.guid || (o.guid = xt.guid++))),
        t.each(function() {
          xt.event.add(this, e, r, n, i);
        })
      );
    }
    function P(t, e) {
      return (
        (s(t, "table") &&
          s(11 !== e.nodeType ? e : e.firstChild, "tr") &&
          xt(t).children("tbody")[0]) ||
        t
      );
    }
    function A(t) {
      return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function R(t) {
      return (
        "true/" === (t.type || "").slice(0, 5)
          ? (t.type = t.type.slice(5))
          : t.removeAttribute("type"),
        t
      );
    }
    function O(t, e) {
      var i, n, r, s, o, a, l, u;
      if (1 === e.nodeType) {
        if (
          qt.hasData(t) &&
          ((s = qt.access(t)), (o = qt.set(e, s)), (u = s.events))
        )
          for (r in (delete o.handle, (o.events = {}), u))
            for (i = 0, n = u[r].length; i < n; i++)
              xt.event.add(e, r, u[r][i]);
        zt.hasData(t) &&
          ((a = zt.access(t)), (l = xt.extend({}, a)), zt.set(e, l));
      }
    }
    function D(t, e) {
      var i = e.nodeName.toLowerCase();
      "input" === i && Qt.test(t.type)
        ? (e.checked = t.checked)
        : ("input" !== i && "textarea" !== i) ||
          (e.defaultValue = t.defaultValue);
    }
    function $(t, e, n, r) {
      e = ut.apply([], e);
      var s,
        o,
        a,
        l,
        u,
        h,
        c = 0,
        p = t.length,
        d = p - 1,
        f = e[0],
        m = vt(f);
      if (m || (p > 1 && "string" == typeof f && !yt.checkClone && ue.test(f)))
        return t.each(function(i) {
          var s = t.eq(i);
          m && (e[0] = f.call(this, i, s.html())), $(s, e, n, r);
        });
      if (
        p &&
        ((o = (s = T(e, t[0].ownerDocument, !1, t, r)).firstChild),
        1 === s.childNodes.length && (s = o),
        o || r)
      ) {
        for (l = (a = xt.map(w(s, "script"), A)).length; c < p; c++)
          (u = s),
            c !== d &&
              ((u = xt.clone(u, !0, !0)), l && xt.merge(a, w(u, "script"))),
            n.call(t[c], u, c);
        if (l)
          for (
            h = a[a.length - 1].ownerDocument, xt.map(a, R), c = 0;
            c < l;
            c++
          )
            (u = a[c]),
              Jt.test(u.type || "") &&
                !qt.access(u, "globalEval") &&
                xt.contains(h, u) &&
                (u.src && "module" !== (u.type || "").toLowerCase()
                  ? xt._evalUrl && xt._evalUrl(u.src)
                  : i(u.textContent.replace(he, ""), h, u));
      }
      return t;
    }
    function L(t, e, i) {
      for (var n, r = e ? xt.filter(e, t) : t, s = 0; null != (n = r[s]); s++)
        i || 1 !== n.nodeType || xt.cleanData(w(n)),
          n.parentNode &&
            (i && xt.contains(n.ownerDocument, n) && x(w(n, "script")),
            n.parentNode.removeChild(n));
      return t;
    }
    function M(t, e, i) {
      var n,
        r,
        s,
        o,
        a = t.style;
      return (
        (i = i || pe(t)) &&
          ("" !== (o = i.getPropertyValue(e) || i[e]) ||
            xt.contains(t.ownerDocument, t) ||
            (o = xt.style(t, e)),
          !yt.pixelBoxStyles() &&
            ce.test(o) &&
            de.test(e) &&
            ((n = a.width),
            (r = a.minWidth),
            (s = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = o),
            (o = i.width),
            (a.width = n),
            (a.minWidth = r),
            (a.maxWidth = s))),
        o !== undefined ? o + "" : o
      );
    }
    function N(t, e) {
      return {
        get: function() {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get;
        }
      };
    }
    function F(t) {
      if (t in _e) return t;
      for (var e = t[0].toUpperCase() + t.slice(1), i = ve.length; i--; )
        if ((t = ve[i] + e) in _e) return t;
    }
    function I(t) {
      var e = xt.cssProps[t];
      return e || (e = xt.cssProps[t] = F(t) || t), e;
    }
    function j(t, e, i) {
      var n = Wt.exec(e);
      return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
    }
    function q(t, e, i, n, r, s) {
      var o = "width" === e ? 1 : 0,
        a = 0,
        l = 0;
      if (i === (n ? "border" : "content")) return 0;
      for (; o < 4; o += 2)
        "margin" === i && (l += xt.css(t, i + Vt[o], !0, r)),
          n
            ? ("content" === i && (l -= xt.css(t, "padding" + Vt[o], !0, r)),
              "margin" !== i &&
                (l -= xt.css(t, "border" + Vt[o] + "Width", !0, r)))
            : ((l += xt.css(t, "padding" + Vt[o], !0, r)),
              "padding" !== i
                ? (l += xt.css(t, "border" + Vt[o] + "Width", !0, r))
                : (a += xt.css(t, "border" + Vt[o] + "Width", !0, r)));
      return (
        !n &&
          s >= 0 &&
          (l += Math.max(
            0,
            Math.ceil(
              t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5
            )
          )),
        l
      );
    }
    function z(t, e, i) {
      var n = pe(t),
        r = M(t, e, n),
        s = "border-box" === xt.css(t, "boxSizing", !1, n),
        o = s;
      if (ce.test(r)) {
        if (!i) return r;
        r = "auto";
      }
      return (
        (o = o && (yt.boxSizingReliable() || r === t.style[e])),
        ("auto" === r ||
          (!parseFloat(r) && "inline" === xt.css(t, "display", !1, n))) &&
          ((r = t["offset" + e[0].toUpperCase() + e.slice(1)]), (o = !0)),
        (r = parseFloat(r) || 0) +
          q(t, e, i || (s ? "border" : "content"), o, n, r) +
          "px"
      );
    }
    function H(t, e, i, n, r) {
      return new H.prototype.init(t, e, i, n, r);
    }
    function B() {
      we &&
        (!1 === ot.hidden && t.requestAnimationFrame
          ? t.requestAnimationFrame(B)
          : t.setTimeout(B, xt.fx.interval),
        xt.fx.tick());
    }
    function U() {
      return (
        t.setTimeout(function() {
          be = undefined;
        }),
        (be = Date.now())
      );
    }
    function W(t, e) {
      var i,
        n = 0,
        r = {height: t};
      for (e = e ? 1 : 0; n < 4; n += 2 - e)
        r["margin" + (i = Vt[n])] = r["padding" + i] = t;
      return e && (r.opacity = r.width = t), r;
    }
    function V(t, e, i) {
      for (
        var n,
          r = (G.tweeners[e] || []).concat(G.tweeners["*"]),
          s = 0,
          o = r.length;
        s < o;
        s++
      )
        if ((n = r[s].call(i, e, t))) return n;
    }
    function X(t, e, i) {
      var n,
        r,
        s,
        o,
        a,
        l,
        u,
        h,
        c = "width" in e || "height" in e,
        p = this,
        d = {},
        f = t.style,
        m = t.nodeType && Xt(t),
        g = qt.get(t, "fxshow");
      for (n in (i.queue ||
        (null == (o = xt._queueHooks(t, "fx")).unqueued &&
          ((o.unqueued = 0),
          (a = o.empty.fire),
          (o.empty.fire = function() {
            o.unqueued || a();
          })),
        o.unqueued++,
        p.always(function() {
          p.always(function() {
            o.unqueued--, xt.queue(t, "fx").length || o.empty.fire();
          });
        })),
      e))
        if (((r = e[n]), xe.test(r))) {
          if (
            (delete e[n],
            (s = s || "toggle" === r),
            r === (m ? "hide" : "show"))
          ) {
            if ("show" !== r || !g || g[n] === undefined) continue;
            m = !0;
          }
          d[n] = (g && g[n]) || xt.style(t, n);
        }
      if ((l = !xt.isEmptyObject(e)) || !xt.isEmptyObject(d))
        for (n in (c &&
          1 === t.nodeType &&
          ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
          null == (u = g && g.display) && (u = qt.get(t, "display")),
          "none" === (h = xt.css(t, "display")) &&
            (u
              ? (h = u)
              : (b([t], !0),
                (u = t.style.display || u),
                (h = xt.css(t, "display")),
                b([t]))),
          ("inline" === h || ("inline-block" === h && null != u)) &&
            "none" === xt.css(t, "float") &&
            (l ||
              (p.done(function() {
                f.display = u;
              }),
              null == u && ((h = f.display), (u = "none" === h ? "" : h))),
            (f.display = "inline-block"))),
        i.overflow &&
          ((f.overflow = "hidden"),
          p.always(function() {
            (f.overflow = i.overflow[0]),
              (f.overflowX = i.overflow[1]),
              (f.overflowY = i.overflow[2]);
          })),
        (l = !1),
        d))
          l ||
            (g
              ? "hidden" in g && (m = g.hidden)
              : (g = qt.access(t, "fxshow", {display: u})),
            s && (g.hidden = !m),
            m && b([t], !0),
            p.done(function() {
              for (n in (m || b([t]), qt.remove(t, "fxshow"), d))
                xt.style(t, n, d[n]);
            })),
            (l = V(m ? g[n] : 0, n, p)),
            n in g ||
              ((g[n] = l.start), m && ((l.end = l.start), (l.start = 0)));
    }
    function Y(t, e) {
      var i, n, r, s, o;
      for (i in t)
        if (
          ((r = e[(n = f(i))]),
          (s = t[i]),
          Array.isArray(s) && ((r = s[1]), (s = t[i] = s[0])),
          i !== n && ((t[n] = s), delete t[i]),
          (o = xt.cssHooks[n]) && "expand" in o)
        )
          for (i in ((s = o.expand(s)), delete t[n], s))
            i in t || ((t[i] = s[i]), (e[i] = r));
        else e[n] = r;
    }
    function G(t, e, i) {
      var n,
        r,
        s = 0,
        o = G.prefilters.length,
        a = xt.Deferred().always(function() {
          delete l.elem;
        }),
        l = function() {
          if (r) return !1;
          for (
            var e = be || U(),
              i = Math.max(0, u.startTime + u.duration - e),
              n = 1 - (i / u.duration || 0),
              s = 0,
              o = u.tweens.length;
            s < o;
            s++
          )
            u.tweens[s].run(n);
          return (
            a.notifyWith(t, [u, n, i]),
            n < 1 && o
              ? i
              : (o || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
          );
        },
        u = a.promise({
          elem: t,
          props: xt.extend({}, e),
          opts: xt.extend(
            !0,
            {specialEasing: {}, easing: xt.easing._default},
            i
          ),
          originalProperties: e,
          originalOptions: i,
          startTime: be || U(),
          duration: i.duration,
          tweens: [],
          createTween: function(e, i) {
            var n = xt.Tween(
              t,
              u.opts,
              e,
              i,
              u.opts.specialEasing[e] || u.opts.easing
            );
            return u.tweens.push(n), n;
          },
          stop: function(e) {
            var i = 0,
              n = e ? u.tweens.length : 0;
            if (r) return this;
            for (r = !0; i < n; i++) u.tweens[i].run(1);
            return (
              e
                ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e]))
                : a.rejectWith(t, [u, e]),
              this
            );
          }
        }),
        h = u.props;
      for (Y(h, u.opts.specialEasing); s < o; s++)
        if ((n = G.prefilters[s].call(u, t, h, u.opts)))
          return (
            vt(n.stop) &&
              (xt._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        xt.map(h, V, u),
        vt(u.opts.start) && u.opts.start.call(t, u),
        u
          .progress(u.opts.progress)
          .done(u.opts.done, u.opts.complete)
          .fail(u.opts.fail)
          .always(u.opts.always),
        xt.fx.timer(xt.extend(l, {elem: t, anim: u, queue: u.opts.queue})),
        u
      );
    }
    function Q(t) {
      return (t.match($t) || []).join(" ");
    }
    function Z(t) {
      return (t.getAttribute && t.getAttribute("class")) || "";
    }
    function J(t) {
      return Array.isArray(t) ? t : ("string" == typeof t && t.match($t)) || [];
    }
    function K(t, e, i, r) {
      var s;
      if (Array.isArray(e))
        xt.each(e, function(e, n) {
          i || Le.test(t)
            ? r(t, n)
            : K(
                t + "[" + ("object" == typeof n && null != n ? e : "") + "]",
                n,
                i,
                r
              );
        });
      else if (i || "object" !== n(e)) r(t, e);
      else for (s in e) K(t + "[" + s + "]", e[s], i, r);
    }
    function tt(t) {
      return function(e, i) {
        "string" != typeof e && ((i = e), (e = "*"));
        var n,
          r = 0,
          s = e.toLowerCase().match($t) || [];
        if (vt(i))
          for (; (n = s[r++]); )
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
              : (t[n] = t[n] || []).push(i);
      };
    }
    function et(t, e, i, n) {
      function r(a) {
        var l;
        return (
          (s[a] = !0),
          xt.each(t[a] || [], function(t, a) {
            var u = a(e, i, n);
            return "string" != typeof u || o || s[u]
              ? o
                ? !(l = u)
                : void 0
              : (e.dataTypes.unshift(u), r(u), !1);
          }),
          l
        );
      }
      var s = {},
        o = t === Ve;
      return r(e.dataTypes[0]) || (!s["*"] && r("*"));
    }
    function it(t, e) {
      var i,
        n,
        r = xt.ajaxSettings.flatOptions || {};
      for (i in e) e[i] !== undefined && ((r[i] ? t : n || (n = {}))[i] = e[i]);
      return n && xt.extend(!0, t, n), t;
    }
    function nt(t, e, i) {
      for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
        l.shift(),
          n === undefined &&
            (n = t.mimeType || e.getResponseHeader("Content-Type"));
      if (n)
        for (r in a)
          if (a[r] && a[r].test(n)) {
            l.unshift(r);
            break;
          }
      if (l[0] in i) s = l[0];
      else {
        for (r in i) {
          if (!l[0] || t.converters[r + " " + l[0]]) {
            s = r;
            break;
          }
          o || (o = r);
        }
        s = s || o;
      }
      if (s) return s !== l[0] && l.unshift(s), i[s];
    }
    function rt(t, e, i, n) {
      var r,
        s,
        o,
        a,
        l,
        u = {},
        h = t.dataTypes.slice();
      if (h[1]) for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
      for (s = h.shift(); s; )
        if (
          (t.responseFields[s] && (i[t.responseFields[s]] = e),
          !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
          (l = s),
          (s = h.shift()))
        )
          if ("*" === s) s = l;
          else if ("*" !== l && l !== s) {
            if (!(o = u[l + " " + s] || u["* " + s]))
              for (r in u)
                if (
                  (a = r.split(" "))[1] === s &&
                  (o = u[l + " " + a[0]] || u["* " + a[0]])
                ) {
                  !0 === o
                    ? (o = u[r])
                    : !0 !== u[r] && ((s = a[0]), h.unshift(a[1]));
                  break;
                }
            if (!0 !== o)
              if (o && t.throws) e = o(e);
              else
                try {
                  e = o(e);
                } catch (c) {
                  return {
                    state: "parsererror",
                    error: o ? c : "No conversion from " + l + " to " + s
                  };
                }
          }
      return {state: "success", data: e};
    }
    var st = [],
      ot = t.document,
      at = Object.getPrototypeOf,
      lt = st.slice,
      ut = st.concat,
      ht = st.push,
      ct = st.indexOf,
      pt = {},
      dt = pt.toString,
      ft = pt.hasOwnProperty,
      mt = ft.toString,
      gt = mt.call(Object),
      yt = {},
      vt = function(t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
      },
      _t = function(t) {
        return null != t && t === t.window;
      },
      bt = {type: !0, src: !0, noModule: !0},
      wt = "3.3.1",
      xt = function(t, e) {
        return new xt.fn.init(t, e);
      },
      Tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (xt.fn = xt.prototype = {
      jquery: wt,
      constructor: xt,
      length: 0,
      toArray: function() {
        return lt.call(this);
      },
      get: function(t) {
        return null == t
          ? lt.call(this)
          : t < 0
          ? this[t + this.length]
          : this[t];
      },
      pushStack: function(t) {
        var e = xt.merge(this.constructor(), t);
        return (e.prevObject = this), e;
      },
      each: function(t) {
        return xt.each(this, t);
      },
      map: function(t) {
        return this.pushStack(
          xt.map(this, function(e, i) {
            return t.call(e, i, e);
          })
        );
      },
      slice: function() {
        return this.pushStack(lt.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      eq: function(t) {
        var e = this.length,
          i = +t + (t < 0 ? e : 0);
        return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      push: ht,
      sort: st.sort,
      splice: st.splice
    }),
      (xt.extend = xt.fn.extend = function() {
        var t,
          e,
          i,
          n,
          r,
          s,
          o = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;
        for (
          "boolean" == typeof o && ((u = o), (o = arguments[a] || {}), a++),
            "object" == typeof o || vt(o) || (o = {}),
            a === l && ((o = this), a--);
          a < l;
          a++
        )
          if (null != (t = arguments[a]))
            for (e in t)
              (i = o[e]),
                o !== (n = t[e]) &&
                  (u && n && (xt.isPlainObject(n) || (r = Array.isArray(n)))
                    ? (r
                        ? ((r = !1), (s = i && Array.isArray(i) ? i : []))
                        : (s = i && xt.isPlainObject(i) ? i : {}),
                      (o[e] = xt.extend(u, s, n)))
                    : n !== undefined && (o[e] = n));
        return o;
      }),
      xt.extend({
        expando: "jQuery" + (wt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
          throw new Error(t);
        },
        noop: function() {},
        isPlainObject: function(t) {
          var e, i;
          return (
            !(!t || "[object Object]" !== dt.call(t)) &&
            (!(e = at(t)) ||
              ("function" ==
                typeof (i = ft.call(e, "constructor") && e.constructor) &&
                mt.call(i) === gt))
          );
        },
        isEmptyObject: function(t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        globalEval: function(t) {
          i(t);
        },
        each: function(t, e) {
          var i,
            n = 0;
          if (r(t))
            for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
          else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
          return t;
        },
        trim: function(t) {
          return null == t ? "" : (t + "").replace(Tt, "");
        },
        makeArray: function(t, e) {
          var i = e || [];
          return (
            null != t &&
              (r(Object(t))
                ? xt.merge(i, "string" == typeof t ? [t] : t)
                : ht.call(i, t)),
            i
          );
        },
        inArray: function(t, e, i) {
          return null == e ? -1 : ct.call(e, t, i);
        },
        merge: function(t, e) {
          for (var i = +e.length, n = 0, r = t.length; n < i; n++)
            t[r++] = e[n];
          return (t.length = r), t;
        },
        grep: function(t, e, i) {
          for (var n = [], r = 0, s = t.length, o = !i; r < s; r++)
            !e(t[r], r) !== o && n.push(t[r]);
          return n;
        },
        map: function(t, e, i) {
          var n,
            s,
            o = 0,
            a = [];
          if (r(t))
            for (n = t.length; o < n; o++)
              null != (s = e(t[o], o, i)) && a.push(s);
          else for (o in t) null != (s = e(t[o], o, i)) && a.push(s);
          return ut.apply([], a);
        },
        guid: 1,
        support: yt
      }),
      "function" == typeof Symbol &&
        (xt.fn[Symbol.iterator] = st[Symbol.iterator]),
      xt.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function(t, e) {
          pt["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var Ct =
      /*!
       * Sizzle CSS Selector Engine v2.3.3
       * https://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2016-08-08
       */
      (function(t) {
        function e(t, e, i, n) {
          var r,
            s,
            o,
            a,
            l,
            u,
            h,
            p = e && e.ownerDocument,
            f = e ? e.nodeType : 9;
          if (
            ((i = i || []),
            "string" != typeof t || !t || (1 !== f && 9 !== f && 11 !== f))
          )
            return i;
          if (
            !n &&
            ((e ? e.ownerDocument || e : z) !== $ && D(e), (e = e || $), M)
          ) {
            if (11 !== f && (l = yt.exec(t)))
              if ((r = l[1])) {
                if (9 === f) {
                  if (!(o = e.getElementById(r))) return i;
                  if (o.id === r) return i.push(o), i;
                } else if (
                  p &&
                  (o = p.getElementById(r)) &&
                  j(e, o) &&
                  o.id === r
                )
                  return i.push(o), i;
              } else {
                if (l[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                if (
                  (r = l[3]) &&
                  x.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return J.apply(i, e.getElementsByClassName(r)), i;
              }
            if (x.qsa && !V[t + " "] && (!N || !N.test(t))) {
              if (1 !== f) (p = e), (h = t);
              else if ("object" !== e.nodeName.toLowerCase()) {
                for (
                  (a = e.getAttribute("id"))
                    ? (a = a.replace(wt, xt))
                    : e.setAttribute("id", (a = q)),
                    s = (u = E(t)).length;
                  s--;

                )
                  u[s] = "#" + a + " " + d(u[s]);
                (h = u.join(",")), (p = (vt.test(t) && c(e.parentNode)) || e);
              }
              if (h)
                try {
                  return J.apply(i, p.querySelectorAll(h)), i;
                } catch (m) {
                } finally {
                  a === q && e.removeAttribute("id");
                }
            }
          }
          return P(t.replace(at, "$1"), e, i, n);
        }
        function i() {
          function t(i, n) {
            return (
              e.push(i + " ") > T.cacheLength && delete t[e.shift()],
              (t[i + " "] = n)
            );
          }
          var e = [];
          return t;
        }
        function n(t) {
          return (t[q] = !0), t;
        }
        function r(t) {
          var e = $.createElement("fieldset");
          try {
            return !!t(e);
          } catch (i) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function s(t, e) {
          for (var i = t.split("|"), n = i.length; n--; )
            T.attrHandle[i[n]] = e;
        }
        function o(t, e) {
          var i = e && t,
            n =
              i &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              t.sourceIndex - e.sourceIndex;
          if (n) return n;
          if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
          return t ? 1 : -1;
        }
        function a(t) {
          return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }
        function l(t) {
          return function(e) {
            var i = e.nodeName.toLowerCase();
            return ("input" === i || "button" === i) && e.type === t;
          };
        }
        function u(t) {
          return function(e) {
            return "form" in e
              ? e.parentNode && !1 === e.disabled
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && Ct(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function h(t) {
          return n(function(e) {
            return (
              (e = +e),
              n(function(i, n) {
                for (var r, s = t([], i.length, e), o = s.length; o--; )
                  i[(r = s[o])] && (i[r] = !(n[r] = i[r]));
              })
            );
          });
        }
        function c(t) {
          return t && "undefined" != typeof t.getElementsByTagName && t;
        }
        function p() {}
        function d(t) {
          for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
          return n;
        }
        function f(t, e, i) {
          var n = e.dir,
            r = e.next,
            s = r || n,
            o = i && "parentNode" === s,
            a = B++;
          return e.first
            ? function(e, i, r) {
                for (; (e = e[n]); )
                  if (1 === e.nodeType || o) return t(e, i, r);
                return !1;
              }
            : function(e, i, l) {
                var u,
                  h,
                  c,
                  p = [H, a];
                if (l) {
                  for (; (e = e[n]); )
                    if ((1 === e.nodeType || o) && t(e, i, l)) return !0;
                } else
                  for (; (e = e[n]); )
                    if (1 === e.nodeType || o)
                      if (
                        ((h =
                          (c = e[q] || (e[q] = {}))[e.uniqueID] ||
                          (c[e.uniqueID] = {})),
                        r && r === e.nodeName.toLowerCase())
                      )
                        e = e[n] || e;
                      else {
                        if ((u = h[s]) && u[0] === H && u[1] === a)
                          return (p[2] = u[2]);
                        if (((h[s] = p), (p[2] = t(e, i, l)))) return !0;
                      }
                return !1;
              };
        }
        function m(t) {
          return t.length > 1
            ? function(e, i, n) {
                for (var r = t.length; r--; ) if (!t[r](e, i, n)) return !1;
                return !0;
              }
            : t[0];
        }
        function g(t, i, n) {
          for (var r = 0, s = i.length; r < s; r++) e(t, i[r], n);
          return n;
        }
        function y(t, e, i, n, r) {
          for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)
            (s = t[a]) && ((i && !i(s, n, r)) || (o.push(s), u && e.push(a)));
          return o;
        }
        function v(t, e, i, r, s, o) {
          return (
            r && !r[q] && (r = v(r)),
            s && !s[q] && (s = v(s, o)),
            n(function(n, o, a, l) {
              var u,
                h,
                c,
                p = [],
                d = [],
                f = o.length,
                m = n || g(e || "*", a.nodeType ? [a] : a, []),
                v = !t || (!n && e) ? m : y(m, p, t, a, l),
                _ = i ? (s || (n ? t : f || r) ? [] : o) : v;
              if ((i && i(v, _, a, l), r))
                for (u = y(_, d), r(u, [], a, l), h = u.length; h--; )
                  (c = u[h]) && (_[d[h]] = !(v[d[h]] = c));
              if (n) {
                if (s || t) {
                  if (s) {
                    for (u = [], h = _.length; h--; )
                      (c = _[h]) && u.push((v[h] = c));
                    s(null, (_ = []), u, l);
                  }
                  for (h = _.length; h--; )
                    (c = _[h]) &&
                      (u = s ? tt(n, c) : p[h]) > -1 &&
                      (n[u] = !(o[u] = c));
                }
              } else (_ = y(_ === o ? _.splice(f, _.length) : _)), s ? s(null, o, _, l) : J.apply(o, _);
            })
          );
        }
        function _(t) {
          for (
            var e,
              i,
              n,
              r = t.length,
              s = T.relative[t[0].type],
              o = s || T.relative[" "],
              a = s ? 1 : 0,
              l = f(
                function(t) {
                  return t === e;
                },
                o,
                !0
              ),
              u = f(
                function(t) {
                  return tt(e, t) > -1;
                },
                o,
                !0
              ),
              h = [
                function(t, i, n) {
                  var r =
                    (!s && (n || i !== A)) ||
                    ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                  return (e = null), r;
                }
              ];
            a < r;
            a++
          )
            if ((i = T.relative[t[a].type])) h = [f(m(h), i)];
            else {
              if ((i = T.filter[t[a].type].apply(null, t[a].matches))[q]) {
                for (n = ++a; n < r && !T.relative[t[n].type]; n++);
                return v(
                  a > 1 && m(h),
                  a > 1 &&
                    d(
                      t
                        .slice(0, a - 1)
                        .concat({value: " " === t[a - 2].type ? "*" : ""})
                    ).replace(at, "$1"),
                  i,
                  a < n && _(t.slice(a, n)),
                  n < r && _((t = t.slice(n))),
                  n < r && d(t)
                );
              }
              h.push(i);
            }
          return m(h);
        }
        function b(t, i) {
          var r = i.length > 0,
            s = t.length > 0,
            o = function(n, o, a, l, u) {
              var h,
                c,
                p,
                d = 0,
                f = "0",
                m = n && [],
                g = [],
                v = A,
                _ = n || (s && T.find.TAG("*", u)),
                b = (H += null == v ? 1 : Math.random() || 0.1),
                w = _.length;
              for (
                u && (A = o === $ || o || u);
                f !== w && null != (h = _[f]);
                f++
              ) {
                if (s && h) {
                  for (
                    c = 0, o || h.ownerDocument === $ || (D(h), (a = !M));
                    (p = t[c++]);

                  )
                    if (p(h, o || $, a)) {
                      l.push(h);
                      break;
                    }
                  u && (H = b);
                }
                r && ((h = !p && h) && d--, n && m.push(h));
              }
              if (((d += f), r && f !== d)) {
                for (c = 0; (p = i[c++]); ) p(m, g, o, a);
                if (n) {
                  if (d > 0) for (; f--; ) m[f] || g[f] || (g[f] = Q.call(l));
                  g = y(g);
                }
                J.apply(l, g),
                  u &&
                    !n &&
                    g.length > 0 &&
                    d + i.length > 1 &&
                    e.uniqueSort(l);
              }
              return u && ((H = b), (A = v)), m;
            };
          return r ? n(o) : o;
        }
        var w,
          x,
          T,
          C,
          S,
          E,
          k,
          P,
          A,
          R,
          O,
          D,
          $,
          L,
          M,
          N,
          F,
          I,
          j,
          q = "sizzle" + 1 * new Date(),
          z = t.document,
          H = 0,
          B = 0,
          U = i(),
          W = i(),
          V = i(),
          X = function(t, e) {
            return t === e && (O = !0), 0;
          },
          Y = {}.hasOwnProperty,
          G = [],
          Q = G.pop,
          Z = G.push,
          J = G.push,
          K = G.slice,
          tt = function(t, e) {
            for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
            return -1;
          },
          et =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          it = "[\\x20\\t\\r\\n\\f]",
          nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          rt =
            "\\[" +
            it +
            "*(" +
            nt +
            ")(?:" +
            it +
            "*([*^$|!~]?=)" +
            it +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            nt +
            "))|)" +
            it +
            "*\\]",
          st =
            ":(" +
            nt +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            rt +
            ")*)|.*)\\)|)",
          ot = new RegExp(it + "+", "g"),
          at = new RegExp(
            "^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$",
            "g"
          ),
          lt = new RegExp("^" + it + "*," + it + "*"),
          ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
          ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
          ct = new RegExp(st),
          pt = new RegExp("^" + nt + "$"),
          dt = {
            ID: new RegExp("^#(" + nt + ")"),
            CLASS: new RegExp("^\\.(" + nt + ")"),
            TAG: new RegExp("^(" + nt + "|[*])"),
            ATTR: new RegExp("^" + rt),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                it +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                it +
                "*(?:([+-]|)" +
                it +
                "*(\\d+)|))" +
                it +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                it +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                it +
                "*((?:-\\d)?\\d*)" +
                it +
                "*\\)|)(?=[^-]|$)",
              "i"
            )
          },
          ft = /^(?:input|select|textarea|button)$/i,
          mt = /^h\d$/i,
          gt = /^[^{]+\{\s*\[native \w/,
          yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          vt = /[+~]/,
          _t = new RegExp(
            "\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)",
            "ig"
          ),
          bt = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n != n || i
              ? e
              : n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
          },
          wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          xt = function(t, e) {
            return e
              ? "\0" === t
                ? "\ufffd"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          },
          Tt = function() {
            D();
          },
          Ct = f(
            function(t) {
              return !0 === t.disabled && ("form" in t || "label" in t);
            },
            {dir: "parentNode", next: "legend"}
          );
        try {
          J.apply((G = K.call(z.childNodes)), z.childNodes),
            G[z.childNodes.length].nodeType;
        } catch (St) {
          J = {
            apply: G.length
              ? function(t, e) {
                  Z.apply(t, K.call(e));
                }
              : function(t, e) {
                  for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                  t.length = i - 1;
                }
          };
        }
        for (w in ((x = e.support = {}),
        (S = e.isXML = function(t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName;
        }),
        (D = e.setDocument = function(t) {
          var e,
            i,
            n = t ? t.ownerDocument || t : z;
          return n !== $ && 9 === n.nodeType && n.documentElement
            ? ((L = ($ = n).documentElement),
              (M = !S($)),
              z !== $ &&
                (i = $.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", Tt, !1)
                  : i.attachEvent && i.attachEvent("onunload", Tt)),
              (x.attributes = r(function(t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (x.getElementsByTagName = r(function(t) {
                return (
                  t.appendChild($.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (x.getElementsByClassName = gt.test($.getElementsByClassName)),
              (x.getById = r(function(t) {
                return (
                  (L.appendChild(t).id = q),
                  !$.getElementsByName || !$.getElementsByName(q).length
                );
              })),
              x.getById
                ? ((T.filter.ID = function(t) {
                    var e = t.replace(_t, bt);
                    return function(t) {
                      return t.getAttribute("id") === e;
                    };
                  }),
                  (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && M) {
                      var i = e.getElementById(t);
                      return i ? [i] : [];
                    }
                  }))
                : ((T.filter.ID = function(t) {
                    var e = t.replace(_t, bt);
                    return function(t) {
                      var i =
                        "undefined" != typeof t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return i && i.value === e;
                    };
                  }),
                  (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && M) {
                      var i,
                        n,
                        r,
                        s = e.getElementById(t);
                      if (s) {
                        if ((i = s.getAttributeNode("id")) && i.value === t)
                          return [s];
                        for (r = e.getElementsByName(t), n = 0; (s = r[n++]); )
                          if ((i = s.getAttributeNode("id")) && i.value === t)
                            return [s];
                      }
                      return [];
                    }
                  })),
              (T.find.TAG = x.getElementsByTagName
                ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : x.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function(t, e) {
                    var i,
                      n = [],
                      r = 0,
                      s = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (i = s[r++]); ) 1 === i.nodeType && n.push(i);
                      return n;
                    }
                    return s;
                  }),
              (T.find.CLASS =
                x.getElementsByClassName &&
                function(t, e) {
                  if ("undefined" != typeof e.getElementsByClassName && M)
                    return e.getElementsByClassName(t);
                }),
              (F = []),
              (N = []),
              (x.qsa = gt.test($.querySelectorAll)) &&
                (r(function(t) {
                  (L.appendChild(t).innerHTML =
                    "<a id='" +
                    q +
                    "'></a><select id='" +
                    q +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      N.push("[*^$]=" + it + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      N.push("\\[" + it + "*(?:value|" + et + ")"),
                    t.querySelectorAll("[id~=" + q + "-]").length ||
                      N.push("~="),
                    t.querySelectorAll(":checked").length || N.push(":checked"),
                    t.querySelectorAll("a#" + q + "+*").length ||
                      N.push(".#.+[+~]");
                }),
                r(function(t) {
                  t.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var e = $.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      N.push("name" + it + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length &&
                      N.push(":enabled", ":disabled"),
                    (L.appendChild(t).disabled = !0),
                    2 !== t.querySelectorAll(":disabled").length &&
                      N.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    N.push(",.*:");
                })),
              (x.matchesSelector = gt.test(
                (I =
                  L.matches ||
                  L.webkitMatchesSelector ||
                  L.mozMatchesSelector ||
                  L.oMatchesSelector ||
                  L.msMatchesSelector)
              )) &&
                r(function(t) {
                  (x.disconnectedMatch = I.call(t, "*")),
                    I.call(t, "[s!='']:x"),
                    F.push("!=", st);
                }),
              (N = N.length && new RegExp(N.join("|"))),
              (F = F.length && new RegExp(F.join("|"))),
              (e = gt.test(L.compareDocumentPosition)),
              (j =
                e || gt.test(L.contains)
                  ? function(t, e) {
                      var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                      return (
                        t === n ||
                        !(
                          !n ||
                          1 !== n.nodeType ||
                          !(i.contains
                            ? i.contains(n)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(n))
                        )
                      );
                    }
                  : function(t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (X = e
                ? function(t, e) {
                    if (t === e) return (O = !0), 0;
                    var i =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return (
                      i ||
                      (1 &
                        (i =
                          (t.ownerDocument || t) === (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1) ||
                      (!x.sortDetached && e.compareDocumentPosition(t) === i)
                        ? t === $ || (t.ownerDocument === z && j(z, t))
                          ? -1
                          : e === $ || (e.ownerDocument === z && j(z, e))
                          ? 1
                          : R
                          ? tt(R, t) - tt(R, e)
                          : 0
                        : 4 & i
                        ? -1
                        : 1)
                    );
                  }
                : function(t, e) {
                    if (t === e) return (O = !0), 0;
                    var i,
                      n = 0,
                      r = t.parentNode,
                      s = e.parentNode,
                      a = [t],
                      l = [e];
                    if (!r || !s)
                      return t === $
                        ? -1
                        : e === $
                        ? 1
                        : r
                        ? -1
                        : s
                        ? 1
                        : R
                        ? tt(R, t) - tt(R, e)
                        : 0;
                    if (r === s) return o(t, e);
                    for (i = t; (i = i.parentNode); ) a.unshift(i);
                    for (i = e; (i = i.parentNode); ) l.unshift(i);
                    for (; a[n] === l[n]; ) n++;
                    return n
                      ? o(a[n], l[n])
                      : a[n] === z
                      ? -1
                      : l[n] === z
                      ? 1
                      : 0;
                  }),
              $)
            : $;
        }),
        (e.matches = function(t, i) {
          return e(t, null, null, i);
        }),
        (e.matchesSelector = function(t, i) {
          if (
            ((t.ownerDocument || t) !== $ && D(t),
            (i = i.replace(ht, "='$1']")),
            x.matchesSelector &&
              M &&
              !V[i + " "] &&
              (!F || !F.test(i)) &&
              (!N || !N.test(i)))
          )
            try {
              var n = I.call(t, i);
              if (
                n ||
                x.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return n;
            } catch (St) {}
          return e(i, $, null, [t]).length > 0;
        }),
        (e.contains = function(t, e) {
          return (t.ownerDocument || t) !== $ && D(t), j(t, e);
        }),
        (e.attr = function(t, e) {
          (t.ownerDocument || t) !== $ && D(t);
          var i = T.attrHandle[e.toLowerCase()],
            n =
              i && Y.call(T.attrHandle, e.toLowerCase())
                ? i(t, e, !M)
                : undefined;
          return n !== undefined
            ? n
            : x.attributes || !M
            ? t.getAttribute(e)
            : (n = t.getAttributeNode(e)) && n.specified
            ? n.value
            : null;
        }),
        (e.escape = function(t) {
          return (t + "").replace(wt, xt);
        }),
        (e.error = function(t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (e.uniqueSort = function(t) {
          var e,
            i = [],
            n = 0,
            r = 0;
          if (
            ((O = !x.detectDuplicates),
            (R = !x.sortStable && t.slice(0)),
            t.sort(X),
            O)
          ) {
            for (; (e = t[r++]); ) e === t[r] && (n = i.push(r));
            for (; n--; ) t.splice(i[n], 1);
          }
          return (R = null), t;
        }),
        (C = e.getText = function(t) {
          var e,
            i = "",
            n = 0,
            r = t.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) i += C(t);
            } else if (3 === r || 4 === r) return t.nodeValue;
          } else for (; (e = t[n++]); ) i += C(e);
          return i;
        }),
        ((T = e.selectors = {
          cacheLength: 50,
          createPseudo: n,
          match: dt,
          attrHandle: {},
          find: {},
          relative: {
            ">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: !0},
            "~": {dir: "previousSibling"}
          },
          preFilter: {
            ATTR: function(t) {
              return (
                (t[1] = t[1].replace(_t, bt)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(_t, bt)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function(t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || e.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && e.error(t[0]),
                t
              );
            },
            PSEUDO: function(t) {
              var e,
                i = !t[6] && t[2];
              return dt.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : i &&
                      ct.test(i) &&
                      (e = E(i, !0)) &&
                      (e = i.indexOf(")", i.length - e) - i.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                  t.slice(0, 3));
            }
          },
          filter: {
            TAG: function(t) {
              var e = t.replace(_t, bt).toLowerCase();
              return "*" === t
                ? function() {
                    return !0;
                  }
                : function(t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function(t) {
              var e = U[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) &&
                  U(t, function(t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        ("undefined" != typeof t.getAttribute &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function(t, i, n) {
              return function(r) {
                var s = e.attr(r, t);
                return null == s
                  ? "!=" === i
                  : !i ||
                      ((s += ""),
                      "=" === i
                        ? s === n
                        : "!=" === i
                        ? s !== n
                        : "^=" === i
                        ? n && 0 === s.indexOf(n)
                        : "*=" === i
                        ? n && s.indexOf(n) > -1
                        : "$=" === i
                        ? n && s.slice(-n.length) === n
                        : "~=" === i
                        ? (" " + s.replace(ot, " ") + " ").indexOf(n) > -1
                        : "|=" === i &&
                          (s === n || s.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function(t, e, i, n, r) {
              var s = "nth" !== t.slice(0, 3),
                o = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === n && 0 === r
                ? function(t) {
                    return !!t.parentNode;
                  }
                : function(e, i, l) {
                    var u,
                      h,
                      c,
                      p,
                      d,
                      f,
                      m = s !== o ? "nextSibling" : "previousSibling",
                      g = e.parentNode,
                      y = a && e.nodeName.toLowerCase(),
                      v = !l && !a,
                      _ = !1;
                    if (g) {
                      if (s) {
                        for (; m; ) {
                          for (p = e; (p = p[m]); )
                            if (
                              a
                                ? p.nodeName.toLowerCase() === y
                                : 1 === p.nodeType
                            )
                              return !1;
                          f = m = "only" === t && !f && "nextSibling";
                        }
                        return !0;
                      }
                      if (((f = [o ? g.firstChild : g.lastChild]), o && v)) {
                        for (
                          _ =
                            (d =
                              (u =
                                (h =
                                  (c = (p = g)[q] || (p[q] = {}))[p.uniqueID] ||
                                  (c[p.uniqueID] = {}))[t] || [])[0] === H &&
                              u[1]) && u[2],
                            p = d && g.childNodes[d];
                          (p = (++d && p && p[m]) || (_ = d = 0) || f.pop());

                        )
                          if (1 === p.nodeType && ++_ && p === e) {
                            h[t] = [H, d, _];
                            break;
                          }
                      } else if (
                        (v &&
                          (_ = d =
                            (u =
                              (h =
                                (c = (p = e)[q] || (p[q] = {}))[p.uniqueID] ||
                                (c[p.uniqueID] = {}))[t] || [])[0] === H &&
                            u[1]),
                        !1 === _)
                      )
                        for (
                          ;
                          (p = (++d && p && p[m]) || (_ = d = 0) || f.pop()) &&
                          ((a
                            ? p.nodeName.toLowerCase() !== y
                            : 1 !== p.nodeType) ||
                            !++_ ||
                            (v &&
                              ((h =
                                (c = p[q] || (p[q] = {}))[p.uniqueID] ||
                                (c[p.uniqueID] = {}))[t] = [H, _]),
                            p !== e));

                        );
                      return (_ -= r) === n || (_ % n == 0 && _ / n >= 0);
                    }
                  };
            },
            PSEUDO: function(t, i) {
              var r,
                s =
                  T.pseudos[t] ||
                  T.setFilters[t.toLowerCase()] ||
                  e.error("unsupported pseudo: " + t);
              return s[q]
                ? s(i)
                : s.length > 1
                ? ((r = [t, t, "", i]),
                  T.setFilters.hasOwnProperty(t.toLowerCase())
                    ? n(function(t, e) {
                        for (var n, r = s(t, i), o = r.length; o--; )
                          t[(n = tt(t, r[o]))] = !(e[n] = r[o]);
                      })
                    : function(t) {
                        return s(t, 0, r);
                      })
                : s;
            }
          },
          pseudos: {
            not: n(function(t) {
              var e = [],
                i = [],
                r = k(t.replace(at, "$1"));
              return r[q]
                ? n(function(t, e, i, n) {
                    for (var s, o = r(t, null, n, []), a = t.length; a--; )
                      (s = o[a]) && (t[a] = !(e[a] = s));
                  })
                : function(t, n, s) {
                    return (
                      (e[0] = t), r(e, null, s, i), (e[0] = null), !i.pop()
                    );
                  };
            }),
            has: n(function(t) {
              return function(i) {
                return e(t, i).length > 0;
              };
            }),
            contains: n(function(t) {
              return (
                (t = t.replace(_t, bt)),
                function(e) {
                  return (e.textContent || e.innerText || C(e)).indexOf(t) > -1;
                }
              );
            }),
            lang: n(function(t) {
              return (
                pt.test(t || "") || e.error("unsupported lang: " + t),
                (t = t.replace(_t, bt).toLowerCase()),
                function(e) {
                  var i;
                  do {
                    if (
                      (i = M
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function(e) {
              var i = t.location && t.location.hash;
              return i && i.slice(1) === e.id;
            },
            root: function(t) {
              return t === L;
            },
            focus: function(t) {
              return (
                t === $.activeElement &&
                (!$.hasFocus || $.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: u(!1),
            disabled: u(!0),
            checked: function(t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function(t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            empty: function(t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function(t) {
              return !T.pseudos.empty(t);
            },
            header: function(t) {
              return mt.test(t.nodeName);
            },
            input: function(t) {
              return ft.test(t.nodeName);
            },
            button: function(t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function(t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: h(function() {
              return [0];
            }),
            last: h(function(t, e) {
              return [e - 1];
            }),
            eq: h(function(t, e, i) {
              return [i < 0 ? i + e : i];
            }),
            even: h(function(t, e) {
              for (var i = 0; i < e; i += 2) t.push(i);
              return t;
            }),
            odd: h(function(t, e) {
              for (var i = 1; i < e; i += 2) t.push(i);
              return t;
            }),
            lt: h(function(t, e, i) {
              for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
              return t;
            }),
            gt: h(function(t, e, i) {
              for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
              return t;
            })
          }
        }).pseudos.nth = T.pseudos.eq),
        {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}))
          T.pseudos[w] = a(w);
        for (w in {submit: !0, reset: !0}) T.pseudos[w] = l(w);
        return (
          (p.prototype = T.filters = T.pseudos),
          (T.setFilters = new p()),
          (E = e.tokenize = function(t, i) {
            var n,
              r,
              s,
              o,
              a,
              l,
              u,
              h = W[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (a = t, l = [], u = T.preFilter; a; ) {
              for (o in ((n && !(r = lt.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
              (n = !1),
              (r = ut.exec(a)) &&
                ((n = r.shift()),
                s.push({value: n, type: r[0].replace(at, " ")}),
                (a = a.slice(n.length))),
              T.filter))
                !(r = dt[o].exec(a)) ||
                  (u[o] && !(r = u[o](r))) ||
                  ((n = r.shift()),
                  s.push({value: n, type: o, matches: r}),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return i ? a.length : a ? e.error(t) : W(t, l).slice(0);
          }),
          (k = e.compile = function(t, e) {
            var i,
              n = [],
              r = [],
              s = V[t + " "];
            if (!s) {
              for (e || (e = E(t)), i = e.length; i--; )
                (s = _(e[i]))[q] ? n.push(s) : r.push(s);
              (s = V(t, b(r, n))).selector = t;
            }
            return s;
          }),
          (P = e.select = function(t, e, i, n) {
            var r,
              s,
              o,
              a,
              l,
              u = "function" == typeof t && t,
              h = !n && E((t = u.selector || t));
            if (((i = i || []), 1 === h.length)) {
              if (
                (s = h[0] = h[0].slice(0)).length > 2 &&
                "ID" === (o = s[0]).type &&
                9 === e.nodeType &&
                M &&
                T.relative[s[1].type]
              ) {
                if (
                  !(e = (T.find.ID(o.matches[0].replace(_t, bt), e) || [])[0])
                )
                  return i;
                u && (e = e.parentNode), (t = t.slice(s.shift().value.length));
              }
              for (
                r = dt.needsContext.test(t) ? 0 : s.length;
                r-- && ((o = s[r]), !T.relative[(a = o.type)]);

              )
                if (
                  (l = T.find[a]) &&
                  (n = l(
                    o.matches[0].replace(_t, bt),
                    (vt.test(s[0].type) && c(e.parentNode)) || e
                  ))
                ) {
                  if ((s.splice(r, 1), !(t = n.length && d(s))))
                    return J.apply(i, n), i;
                  break;
                }
            }
            return (
              (u || k(t, h))(
                n,
                e,
                !M,
                i,
                !e || (vt.test(t) && c(e.parentNode)) || e
              ),
              i
            );
          }),
          (x.sortStable =
            q
              .split("")
              .sort(X)
              .join("") === q),
          (x.detectDuplicates = !!O),
          D(),
          (x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition($.createElement("fieldset"));
          })),
          r(function(t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              "#" === t.firstChild.getAttribute("href")
            );
          }) ||
            s("type|href|height|width", function(t, e, i) {
              if (!i)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
          (x.attributes &&
            r(function(t) {
              return (
                (t.innerHTML = "<input/>"),
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
              );
            })) ||
            s("value", function(t, e, i) {
              if (!i && "input" === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
          r(function(t) {
            return null == t.getAttribute("disabled");
          }) ||
            s(et, function(t, e, i) {
              var n;
              if (!i)
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (n = t.getAttributeNode(e)) && n.specified
                  ? n.value
                  : null;
            }),
          e
        );
      })(t);
    (xt.find = Ct),
      (xt.expr = Ct.selectors),
      (xt.expr[":"] = xt.expr.pseudos),
      (xt.uniqueSort = xt.unique = Ct.uniqueSort),
      (xt.text = Ct.getText),
      (xt.isXMLDoc = Ct.isXML),
      (xt.contains = Ct.contains),
      (xt.escapeSelector = Ct.escape);
    var St = function(t, e, i) {
        for (var n = [], r = i !== undefined; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (r && xt(t).is(i)) break;
            n.push(t);
          }
        return n;
      },
      Et = function(t, e) {
        for (var i = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && i.push(t);
        return i;
      },
      kt = xt.expr.match.needsContext,
      Pt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (xt.filter = function(t, e, i) {
      var n = e[0];
      return (
        i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType
          ? xt.find.matchesSelector(n, t)
            ? [n]
            : []
          : xt.find.matches(
              t,
              xt.grep(e, function(t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      xt.fn.extend({
        find: function(t) {
          var e,
            i,
            n = this.length,
            r = this;
          if ("string" != typeof t)
            return this.pushStack(
              xt(t).filter(function() {
                for (e = 0; e < n; e++) if (xt.contains(r[e], this)) return !0;
              })
            );
          for (i = this.pushStack([]), e = 0; e < n; e++) xt.find(t, r[e], i);
          return n > 1 ? xt.uniqueSort(i) : i;
        },
        filter: function(t) {
          return this.pushStack(o(this, t || [], !1));
        },
        not: function(t) {
          return this.pushStack(o(this, t || [], !0));
        },
        is: function(t) {
          return !!o(
            this,
            "string" == typeof t && kt.test(t) ? xt(t) : t || [],
            !1
          ).length;
        }
      });
    var At,
      Rt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((xt.fn.init = function(t, e, i) {
      var n, r;
      if (!t) return this;
      if (((i = i || At), "string" == typeof t)) {
        if (
          !(n =
            "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
              ? [null, t, null]
              : Rt.exec(t)) ||
          (!n[1] && e)
        )
          return !e || e.jquery
            ? (e || i).find(t)
            : this.constructor(e).find(t);
        if (n[1]) {
          if (
            ((e = e instanceof xt ? e[0] : e),
            xt.merge(
              this,
              xt.parseHTML(
                n[1],
                e && e.nodeType ? e.ownerDocument || e : ot,
                !0
              )
            ),
            Pt.test(n[1]) && xt.isPlainObject(e))
          )
            for (n in e) vt(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
          return this;
        }
        return (
          (r = ot.getElementById(n[2])) && ((this[0] = r), (this.length = 1)),
          this
        );
      }
      return t.nodeType
        ? ((this[0] = t), (this.length = 1), this)
        : vt(t)
        ? i.ready !== undefined
          ? i.ready(t)
          : t(xt)
        : xt.makeArray(t, this);
    }).prototype = xt.fn),
      (At = xt(ot));
    var Ot = /^(?:parents|prev(?:Until|All))/,
      Dt = {children: !0, contents: !0, next: !0, prev: !0};
    xt.fn.extend({
      has: function(t) {
        var e = xt(t, this),
          i = e.length;
        return this.filter(function() {
          for (var t = 0; t < i; t++) if (xt.contains(this, e[t])) return !0;
        });
      },
      closest: function(t, e) {
        var i,
          n = 0,
          r = this.length,
          s = [],
          o = "string" != typeof t && xt(t);
        if (!kt.test(t))
          for (; n < r; n++)
            for (i = this[n]; i && i !== e; i = i.parentNode)
              if (
                i.nodeType < 11 &&
                (o
                  ? o.index(i) > -1
                  : 1 === i.nodeType && xt.find.matchesSelector(i, t))
              ) {
                s.push(i);
                break;
              }
        return this.pushStack(s.length > 1 ? xt.uniqueSort(s) : s);
      },
      index: function(t) {
        return t
          ? "string" == typeof t
            ? ct.call(xt(t), this[0])
            : ct.call(this, t.jquery ? t[0] : t)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function(t, e) {
        return this.pushStack(xt.uniqueSort(xt.merge(this.get(), xt(t, e))));
      },
      addBack: function(t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      }
    }),
      xt.each(
        {
          parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function(t) {
            return St(t, "parentNode");
          },
          parentsUntil: function(t, e, i) {
            return St(t, "parentNode", i);
          },
          next: function(t) {
            return a(t, "nextSibling");
          },
          prev: function(t) {
            return a(t, "previousSibling");
          },
          nextAll: function(t) {
            return St(t, "nextSibling");
          },
          prevAll: function(t) {
            return St(t, "previousSibling");
          },
          nextUntil: function(t, e, i) {
            return St(t, "nextSibling", i);
          },
          prevUntil: function(t, e, i) {
            return St(t, "previousSibling", i);
          },
          siblings: function(t) {
            return Et((t.parentNode || {}).firstChild, t);
          },
          children: function(t) {
            return Et(t.firstChild);
          },
          contents: function(t) {
            return s(t, "iframe")
              ? t.contentDocument
              : (s(t, "template") && (t = t.content || t),
                xt.merge([], t.childNodes));
          }
        },
        function(t, e) {
          xt.fn[t] = function(i, n) {
            var r = xt.map(this, e, i);
            return (
              "Until" !== t.slice(-5) && (n = i),
              n && "string" == typeof n && (r = xt.filter(n, r)),
              this.length > 1 &&
                (Dt[t] || xt.uniqueSort(r), Ot.test(t) && r.reverse()),
              this.pushStack(r)
            );
          };
        }
      );
    var $t = /[^\x20\t\r\n\f]+/g;
    (xt.Callbacks = function(t) {
      t = "string" == typeof t ? l(t) : xt.extend({}, t);
      var e,
        i,
        r,
        s,
        o = [],
        a = [],
        u = -1,
        h = function() {
          for (s = s || t.once, r = e = !0; a.length; u = -1)
            for (i = a.shift(); ++u < o.length; )
              !1 === o[u].apply(i[0], i[1]) &&
                t.stopOnFalse &&
                ((u = o.length), (i = !1));
          t.memory || (i = !1), (e = !1), s && (o = i ? [] : "");
        },
        c = {
          add: function() {
            return (
              o &&
                (i && !e && ((u = o.length - 1), a.push(i)),
                (function r(e) {
                  xt.each(e, function(e, i) {
                    vt(i)
                      ? (t.unique && c.has(i)) || o.push(i)
                      : i && i.length && "string" !== n(i) && r(i);
                  });
                })(arguments),
                i && !e && h()),
              this
            );
          },
          remove: function() {
            return (
              xt.each(arguments, function(t, e) {
                for (var i; (i = xt.inArray(e, o, i)) > -1; )
                  o.splice(i, 1), i <= u && u--;
              }),
              this
            );
          },
          has: function(t) {
            return t ? xt.inArray(t, o) > -1 : o.length > 0;
          },
          empty: function() {
            return o && (o = []), this;
          },
          disable: function() {
            return (s = a = []), (o = i = ""), this;
          },
          disabled: function() {
            return !o;
          },
          lock: function() {
            return (s = a = []), i || e || (o = i = ""), this;
          },
          locked: function() {
            return !!s;
          },
          fireWith: function(t, i) {
            return (
              s ||
                ((i = [t, (i = i || []).slice ? i.slice() : i]),
                a.push(i),
                e || h()),
              this
            );
          },
          fire: function() {
            return c.fireWith(this, arguments), this;
          },
          fired: function() {
            return !!r;
          }
        };
      return c;
    }),
      xt.extend({
        Deferred: function(e) {
          var i = [
              [
                "notify",
                "progress",
                xt.Callbacks("memory"),
                xt.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                xt.Callbacks("once memory"),
                xt.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                xt.Callbacks("once memory"),
                xt.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ],
            n = "pending",
            r = {
              state: function() {
                return n;
              },
              always: function() {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function(t) {
                return r.then(null, t);
              },
              pipe: function() {
                var t = arguments;
                return xt
                  .Deferred(function(e) {
                    xt.each(i, function(i, n) {
                      var r = vt(t[n[4]]) && t[n[4]];
                      s[n[1]](function() {
                        var t = r && r.apply(this, arguments);
                        t && vt(t.promise)
                          ? t
                              .promise()
                              .progress(e.notify)
                              .done(e.resolve)
                              .fail(e.reject)
                          : e[n[0] + "With"](this, r ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  })
                  .promise();
              },
              then: function(e, n, r) {
                function s(e, i, n, r) {
                  return function() {
                    var a = this,
                      l = arguments,
                      c = function() {
                        var t, c;
                        if (!(e < o)) {
                          if ((t = n.apply(a, l)) === i.promise())
                            throw new TypeError("Thenable self-resolution");
                          (c =
                            t &&
                            ("object" == typeof t || "function" == typeof t) &&
                            t.then),
                            vt(c)
                              ? r
                                ? c.call(t, s(o, i, u, r), s(o, i, h, r))
                                : (o++,
                                  c.call(
                                    t,
                                    s(o, i, u, r),
                                    s(o, i, h, r),
                                    s(o, i, u, i.notifyWith)
                                  ))
                              : (n !== u && ((a = undefined), (l = [t])),
                                (r || i.resolveWith)(a, l));
                        }
                      },
                      p = r
                        ? c
                        : function() {
                            try {
                              c();
                            } catch (t) {
                              xt.Deferred.exceptionHook &&
                                xt.Deferred.exceptionHook(t, p.stackTrace),
                                e + 1 >= o &&
                                  (n !== h && ((a = undefined), (l = [t])),
                                  i.rejectWith(a, l));
                            }
                          };
                    e
                      ? p()
                      : (xt.Deferred.getStackHook &&
                          (p.stackTrace = xt.Deferred.getStackHook()),
                        t.setTimeout(p));
                  };
                }
                var o = 0;
                return xt
                  .Deferred(function(t) {
                    i[0][3].add(s(0, t, vt(r) ? r : u, t.notifyWith)),
                      i[1][3].add(s(0, t, vt(e) ? e : u)),
                      i[2][3].add(s(0, t, vt(n) ? n : h));
                  })
                  .promise();
              },
              promise: function(t) {
                return null != t ? xt.extend(t, r) : r;
              }
            },
            s = {};
          return (
            xt.each(i, function(t, e) {
              var o = e[2],
                a = e[5];
              (r[e[1]] = o.add),
                a &&
                  o.add(
                    function() {
                      n = a;
                    },
                    i[3 - t][2].disable,
                    i[3 - t][3].disable,
                    i[0][2].lock,
                    i[0][3].lock
                  ),
                o.add(e[3].fire),
                (s[e[0]] = function() {
                  return (
                    s[e[0] + "With"](this === s ? undefined : this, arguments),
                    this
                  );
                }),
                (s[e[0] + "With"] = o.fireWith);
            }),
            r.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function(t) {
          var e = arguments.length,
            i = e,
            n = Array(i),
            r = lt.call(arguments),
            s = xt.Deferred(),
            o = function(t) {
              return function(i) {
                (n[t] = this),
                  (r[t] = arguments.length > 1 ? lt.call(arguments) : i),
                  --e || s.resolveWith(n, r);
              };
            };
          if (
            e <= 1 &&
            (c(t, s.done(o(i)).resolve, s.reject, !e),
            "pending" === s.state() || vt(r[i] && r[i].then))
          )
            return s.then();
          for (; i--; ) c(r[i], o(i), s.reject);
          return s.promise();
        }
      });
    var Lt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (xt.Deferred.exceptionHook = function(e, i) {
      t.console &&
        t.console.warn &&
        e &&
        Lt.test(e.name) &&
        t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
    }),
      (xt.readyException = function(e) {
        t.setTimeout(function() {
          throw e;
        });
      });
    var Mt = xt.Deferred();
    (xt.fn.ready = function(t) {
      return (
        Mt.then(t)["catch"](function(t) {
          xt.readyException(t);
        }),
        this
      );
    }),
      xt.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
          (!0 === t ? --xt.readyWait : xt.isReady) ||
            ((xt.isReady = !0),
            (!0 !== t && --xt.readyWait > 0) || Mt.resolveWith(ot, [xt]));
        }
      }),
      (xt.ready.then = Mt.then),
      "complete" === ot.readyState ||
      ("loading" !== ot.readyState && !ot.documentElement.doScroll)
        ? t.setTimeout(xt.ready)
        : (ot.addEventListener("DOMContentLoaded", p),
          t.addEventListener("load", p));
    var Nt = function(t, e, i, r, s, o, a) {
        var l = 0,
          u = t.length,
          h = null == i;
        if ("object" === n(i))
          for (l in ((s = !0), i)) Nt(t, e, l, i[l], !0, o, a);
        else if (
          r !== undefined &&
          ((s = !0),
          vt(r) || (a = !0),
          h &&
            (a
              ? (e.call(t, r), (e = null))
              : ((h = e),
                (e = function(t, e, i) {
                  return h.call(xt(t), i);
                }))),
          e)
        )
          for (; l < u; l++) e(t[l], i, a ? r : r.call(t[l], l, e(t[l], i)));
        return s ? t : h ? e.call(t) : u ? e(t[0], i) : o;
      },
      Ft = /^-ms-/,
      It = /-([a-z])/g,
      jt = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
    (m.uid = 1),
      (m.prototype = {
        cache: function(t) {
          var e = t[this.expando];
          return (
            e ||
              ((e = {}),
              jt(t) &&
                (t.nodeType
                  ? (t[this.expando] = e)
                  : Object.defineProperty(t, this.expando, {
                      value: e,
                      configurable: !0
                    }))),
            e
          );
        },
        set: function(t, e, i) {
          var n,
            r = this.cache(t);
          if ("string" == typeof e) r[f(e)] = i;
          else for (n in e) r[f(n)] = e[n];
          return r;
        },
        get: function(t, e) {
          return e === undefined
            ? this.cache(t)
            : t[this.expando] && t[this.expando][f(e)];
        },
        access: function(t, e, i) {
          return e === undefined ||
            (e && "string" == typeof e && i === undefined)
            ? this.get(t, e)
            : (this.set(t, e, i), i !== undefined ? i : e);
        },
        remove: function(t, e) {
          var i,
            n = t[this.expando];
          if (n !== undefined) {
            if (e !== undefined) {
              i = (e = Array.isArray(e)
                ? e.map(f)
                : (e = f(e)) in n
                ? [e]
                : e.match($t) || []).length;
              for (; i--; ) delete n[e[i]];
            }
            (e === undefined || xt.isEmptyObject(n)) &&
              (t.nodeType
                ? (t[this.expando] = undefined)
                : delete t[this.expando]);
          }
        },
        hasData: function(t) {
          var e = t[this.expando];
          return e !== undefined && !xt.isEmptyObject(e);
        }
      });
    var qt = new m(),
      zt = new m(),
      Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Bt = /[A-Z]/g;
    xt.extend({
      hasData: function(t) {
        return zt.hasData(t) || qt.hasData(t);
      },
      data: function(t, e, i) {
        return zt.access(t, e, i);
      },
      removeData: function(t, e) {
        zt.remove(t, e);
      },
      _data: function(t, e, i) {
        return qt.access(t, e, i);
      },
      _removeData: function(t, e) {
        qt.remove(t, e);
      }
    }),
      xt.fn.extend({
        data: function(t, e) {
          var i,
            n,
            r,
            s = this[0],
            o = s && s.attributes;
          if (t === undefined) {
            if (
              this.length &&
              ((r = zt.get(s)), 1 === s.nodeType && !qt.get(s, "hasDataAttrs"))
            ) {
              for (i = o.length; i--; )
                o[i] &&
                  0 === (n = o[i].name).indexOf("data-") &&
                  ((n = f(n.slice(5))), y(s, n, r[n]));
              qt.set(s, "hasDataAttrs", !0);
            }
            return r;
          }
          return "object" == typeof t
            ? this.each(function() {
                zt.set(this, t);
              })
            : Nt(
                this,
                function(e) {
                  var i;
                  if (s && e === undefined)
                    return (i = zt.get(s, t)) !== undefined
                      ? i
                      : (i = y(s, t)) !== undefined
                      ? i
                      : void 0;
                  this.each(function() {
                    zt.set(this, t, e);
                  });
                },
                null,
                e,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function(t) {
          return this.each(function() {
            zt.remove(this, t);
          });
        }
      }),
      xt.extend({
        queue: function(t, e, i) {
          var n;
          if (t)
            return (
              (e = (e || "fx") + "queue"),
              (n = qt.get(t, e)),
              i &&
                (!n || Array.isArray(i)
                  ? (n = qt.access(t, e, xt.makeArray(i)))
                  : n.push(i)),
              n || []
            );
        },
        dequeue: function(t, e) {
          e = e || "fx";
          var i = xt.queue(t, e),
            n = i.length,
            r = i.shift(),
            s = xt._queueHooks(t, e),
            o = function() {
              xt.dequeue(t, e);
            };
          "inprogress" === r && ((r = i.shift()), n--),
            r &&
              ("fx" === e && i.unshift("inprogress"),
              delete s.stop,
              r.call(t, o, s)),
            !n && s && s.empty.fire();
        },
        _queueHooks: function(t, e) {
          var i = e + "queueHooks";
          return (
            qt.get(t, i) ||
            qt.access(t, i, {
              empty: xt.Callbacks("once memory").add(function() {
                qt.remove(t, [e + "queue", i]);
              })
            })
          );
        }
      }),
      xt.fn.extend({
        queue: function(t, e) {
          var i = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), i--),
            arguments.length < i
              ? xt.queue(this[0], t)
              : e === undefined
              ? this
              : this.each(function() {
                  var i = xt.queue(this, t, e);
                  xt._queueHooks(this, t),
                    "fx" === t && "inprogress" !== i[0] && xt.dequeue(this, t);
                })
          );
        },
        dequeue: function(t) {
          return this.each(function() {
            xt.dequeue(this, t);
          });
        },
        clearQueue: function(t) {
          return this.queue(t || "fx", []);
        },
        promise: function(t, e) {
          var i,
            n = 1,
            r = xt.Deferred(),
            s = this,
            o = this.length,
            a = function() {
              --n || r.resolveWith(s, [s]);
            };
          for (
            "string" != typeof t && ((e = t), (t = undefined)), t = t || "fx";
            o--;

          )
            (i = qt.get(s[o], t + "queueHooks")) &&
              i.empty &&
              (n++, i.empty.add(a));
          return a(), r.promise(e);
        }
      });
    var Ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Wt = new RegExp("^(?:([+-])=|)(" + Ut + ")([a-z%]*)$", "i"),
      Vt = ["Top", "Right", "Bottom", "Left"],
      Xt = function(t, e) {
        return (
          "none" === (t = e || t).style.display ||
          ("" === t.style.display &&
            xt.contains(t.ownerDocument, t) &&
            "none" === xt.css(t, "display"))
        );
      },
      Yt = function(t, e, i, n) {
        var r,
          s,
          o = {};
        for (s in e) (o[s] = t.style[s]), (t.style[s] = e[s]);
        for (s in ((r = i.apply(t, n || [])), e)) t.style[s] = o[s];
        return r;
      },
      Gt = {};
    xt.fn.extend({
      show: function() {
        return b(this, !0);
      },
      hide: function() {
        return b(this);
      },
      toggle: function(t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function() {
              Xt(this) ? xt(this).show() : xt(this).hide();
            });
      }
    });
    var Qt = /^(?:checkbox|radio)$/i,
      Zt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Jt = /^$|^module$|\/(?:java|ecma)script/i,
      Kt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    (Kt.optgroup = Kt.option),
      (Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead),
      (Kt.th = Kt.td);
    var te,
      ee,
      ie = /<|&#?\w+;/;
    (te = ot.createDocumentFragment().appendChild(ot.createElement("div"))),
      (ee = ot.createElement("input")).setAttribute("type", "radio"),
      ee.setAttribute("checked", "checked"),
      ee.setAttribute("name", "t"),
      te.appendChild(ee),
      (yt.checkClone = te.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (te.innerHTML = "<textarea>x</textarea>"),
      (yt.noCloneChecked = !!te.cloneNode(!0).lastChild.defaultValue);
    var ne = ot.documentElement,
      re = /^key/,
      se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      oe = /^([^.]*)(?:\.(.+)|)/;
    (xt.event = {
      global: {},
      add: function(t, e, i, n, r) {
        var s,
          o,
          a,
          l,
          u,
          h,
          c,
          p,
          d,
          f,
          m,
          g = qt.get(t);
        if (g)
          for (
            i.handler && ((i = (s = i).handler), (r = s.selector)),
              r && xt.find.matchesSelector(ne, r),
              i.guid || (i.guid = xt.guid++),
              (l = g.events) || (l = g.events = {}),
              (o = g.handle) ||
                (o = g.handle = function(e) {
                  return void 0 !== xt && xt.event.triggered !== e.type
                    ? xt.event.dispatch.apply(t, arguments)
                    : undefined;
                }),
              u = (e = (e || "").match($t) || [""]).length;
            u--;

          )
            (d = m = (a = oe.exec(e[u]) || [])[1]),
              (f = (a[2] || "").split(".").sort()),
              d &&
                ((c = xt.event.special[d] || {}),
                (d = (r ? c.delegateType : c.bindType) || d),
                (c = xt.event.special[d] || {}),
                (h = xt.extend(
                  {
                    type: d,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && xt.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                  },
                  s
                )),
                (p = l[d]) ||
                  (((p = l[d] = []).delegateCount = 0),
                  (c.setup && !1 !== c.setup.call(t, n, f, o)) ||
                    (t.addEventListener && t.addEventListener(d, o))),
                c.add &&
                  (c.add.call(t, h),
                  h.handler.guid || (h.handler.guid = i.guid)),
                r ? p.splice(p.delegateCount++, 0, h) : p.push(h),
                (xt.event.global[d] = !0));
      },
      remove: function(t, e, i, n, r) {
        var s,
          o,
          a,
          l,
          u,
          h,
          c,
          p,
          d,
          f,
          m,
          g = qt.hasData(t) && qt.get(t);
        if (g && (l = g.events)) {
          for (u = (e = (e || "").match($t) || [""]).length; u--; )
            if (
              ((d = m = (a = oe.exec(e[u]) || [])[1]),
              (f = (a[2] || "").split(".").sort()),
              d)
            ) {
              for (
                c = xt.event.special[d] || {},
                  p = l[(d = (n ? c.delegateType : c.bindType) || d)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  o = s = p.length;
                s--;

              )
                (h = p[s]),
                  (!r && m !== h.origType) ||
                    (i && i.guid !== h.guid) ||
                    (a && !a.test(h.namespace)) ||
                    (n && n !== h.selector && ("**" !== n || !h.selector)) ||
                    (p.splice(s, 1),
                    h.selector && p.delegateCount--,
                    c.remove && c.remove.call(t, h));
              o &&
                !p.length &&
                ((c.teardown && !1 !== c.teardown.call(t, f, g.handle)) ||
                  xt.removeEvent(t, d, g.handle),
                delete l[d]);
            } else for (d in l) xt.event.remove(t, d + e[u], i, n, !0);
          xt.isEmptyObject(l) && qt.remove(t, "handle events");
        }
      },
      dispatch: function(t) {
        var e,
          i,
          n,
          r,
          s,
          o,
          a = xt.event.fix(t),
          l = new Array(arguments.length),
          u = (qt.get(this, "events") || {})[a.type] || [],
          h = xt.event.special[a.type] || {};
        for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
        if (
          ((a.delegateTarget = this),
          !h.preDispatch || !1 !== h.preDispatch.call(this, a))
        ) {
          for (
            o = xt.event.handlers.call(this, a, u), e = 0;
            (r = o[e++]) && !a.isPropagationStopped();

          )
            for (
              a.currentTarget = r.elem, i = 0;
              (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();

            )
              (a.rnamespace && !a.rnamespace.test(s.namespace)) ||
                ((a.handleObj = s),
                (a.data = s.data),
                (n = (
                  (xt.event.special[s.origType] || {}).handle || s.handler
                ).apply(r.elem, l)) !== undefined &&
                  !1 === (a.result = n) &&
                  (a.preventDefault(), a.stopPropagation()));
          return h.postDispatch && h.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function(t, e) {
        var i,
          n,
          r,
          s,
          o,
          a = [],
          l = e.delegateCount,
          u = t.target;
        if (l && u.nodeType && !("click" === t.type && t.button >= 1))
          for (; u !== this; u = u.parentNode || this)
            if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
              for (s = [], o = {}, i = 0; i < l; i++)
                o[(r = (n = e[i]).selector + " ")] === undefined &&
                  (o[r] = n.needsContext
                    ? xt(r, this).index(u) > -1
                    : xt.find(r, this, null, [u]).length),
                  o[r] && s.push(n);
              s.length && a.push({elem: u, handlers: s});
            }
        return (
          (u = this), l < e.length && a.push({elem: u, handlers: e.slice(l)}), a
        );
      },
      addProp: function(t, e) {
        Object.defineProperty(xt.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: vt(e)
            ? function() {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function() {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function(e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e
            });
          }
        });
      },
      fix: function(t) {
        return t[xt.expando] ? t : new xt.Event(t);
      },
      special: {
        load: {noBubble: !0},
        focus: {
          trigger: function() {
            if (this !== E() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === E() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if ("checkbox" === this.type && this.click && s(this, "input"))
              return this.click(), !1;
          },
          _default: function(t) {
            return s(t.target, "a");
          }
        },
        beforeunload: {
          postDispatch: function(t) {
            t.result !== undefined &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          }
        }
      }
    }),
      (xt.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i);
      }),
      (xt.Event = function(t, e) {
        if (!(this instanceof xt.Event)) return new xt.Event(t, e);
        t && t.type
          ? ((this.originalEvent = t),
            (this.type = t.type),
            (this.isDefaultPrevented =
              t.defaultPrevented ||
              (t.defaultPrevented === undefined && !1 === t.returnValue)
                ? C
                : S),
            (this.target =
              t.target && 3 === t.target.nodeType
                ? t.target.parentNode
                : t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget))
          : (this.type = t),
          e && xt.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || Date.now()),
          (this[xt.expando] = !0);
      }),
      (xt.Event.prototype = {
        constructor: xt.Event,
        isDefaultPrevented: S,
        isPropagationStopped: S,
        isImmediatePropagationStopped: S,
        isSimulated: !1,
        preventDefault: function() {
          var t = this.originalEvent;
          (this.isDefaultPrevented = C),
            t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function() {
          var t = this.originalEvent;
          (this.isPropagationStopped = C),
            t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = C),
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation();
        }
      }),
      xt.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function(t) {
            var e = t.button;
            return null == t.which && re.test(t.type)
              ? null != t.charCode
                ? t.charCode
                : t.keyCode
              : !t.which && e !== undefined && se.test(t.type)
              ? 1 & e
                ? 1
                : 2 & e
                ? 3
                : 4 & e
                ? 2
                : 0
              : t.which;
          }
        },
        xt.event.addProp
      ),
      xt.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        },
        function(t, e) {
          xt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
              var i,
                n = this,
                r = t.relatedTarget,
                s = t.handleObj;
              return (
                (r && (r === n || xt.contains(n, r))) ||
                  ((t.type = s.origType),
                  (i = s.handler.apply(this, arguments)),
                  (t.type = e)),
                i
              );
            }
          };
        }
      ),
      xt.fn.extend({
        on: function(t, e, i, n) {
          return k(this, t, e, i, n);
        },
        one: function(t, e, i, n) {
          return k(this, t, e, i, n, 1);
        },
        off: function(t, e, i) {
          var n, r;
          if (t && t.preventDefault && t.handleObj)
            return (
              (n = t.handleObj),
              xt(t.delegateTarget).off(
                n.namespace ? n.origType + "." + n.namespace : n.origType,
                n.selector,
                n.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (r in t) this.off(r, e, t[r]);
            return this;
          }
          return (
            (!1 !== e && "function" != typeof e) || ((i = e), (e = undefined)),
            !1 === i && (i = S),
            this.each(function() {
              xt.event.remove(this, t, i, e);
            })
          );
        }
      });
    var ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      le = /<script|<style|<link/i,
      ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
      he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    xt.extend({
      htmlPrefilter: function(t) {
        return t.replace(ae, "<$1></$2>");
      },
      clone: function(t, e, i) {
        var n,
          r,
          s,
          o,
          a = t.cloneNode(!0),
          l = xt.contains(t.ownerDocument, t);
        if (
          !(
            yt.noCloneChecked ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            xt.isXMLDoc(t)
          )
        )
          for (o = w(a), n = 0, r = (s = w(t)).length; n < r; n++)
            D(s[n], o[n]);
        if (e)
          if (i)
            for (s = s || w(t), o = o || w(a), n = 0, r = s.length; n < r; n++)
              O(s[n], o[n]);
          else O(t, a);
        return (o = w(a, "script")).length > 0 && x(o, !l && w(t, "script")), a;
      },
      cleanData: function(t) {
        for (
          var e, i, n, r = xt.event.special, s = 0;
          (i = t[s]) !== undefined;
          s++
        )
          if (jt(i)) {
            if ((e = i[qt.expando])) {
              if (e.events)
                for (n in e.events)
                  r[n] ? xt.event.remove(i, n) : xt.removeEvent(i, n, e.handle);
              i[qt.expando] = undefined;
            }
            i[zt.expando] && (i[zt.expando] = undefined);
          }
      }
    }),
      xt.fn.extend({
        detach: function(t) {
          return L(this, t, !0);
        },
        remove: function(t) {
          return L(this, t);
        },
        text: function(t) {
          return Nt(
            this,
            function(t) {
              return t === undefined
                ? xt.text(this)
                : this.empty().each(function() {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = t);
                  });
            },
            null,
            t,
            arguments.length
          );
        },
        append: function() {
          return $(this, arguments, function(t) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              P(this, t).appendChild(t);
          });
        },
        prepend: function() {
          return $(this, arguments, function(t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = P(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function() {
          return $(this, arguments, function(t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function() {
          return $(this, arguments, function(t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        empty: function() {
          for (var t, e = 0; null != (t = this[e]); e++)
            1 === t.nodeType && (xt.cleanData(w(t, !1)), (t.textContent = ""));
          return this;
        },
        clone: function(t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function() {
              return xt.clone(this, t, e);
            })
          );
        },
        html: function(t) {
          return Nt(
            this,
            function(t) {
              var e = this[0] || {},
                i = 0,
                n = this.length;
              if (t === undefined && 1 === e.nodeType) return e.innerHTML;
              if (
                "string" == typeof t &&
                !le.test(t) &&
                !Kt[(Zt.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = xt.htmlPrefilter(t);
                try {
                  for (; i < n; i++)
                    1 === (e = this[i] || {}).nodeType &&
                      (xt.cleanData(w(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (r) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function() {
          var t = [];
          return $(
            this,
            arguments,
            function(e) {
              var i = this.parentNode;
              xt.inArray(this, t) < 0 &&
                (xt.cleanData(w(this)), i && i.replaceChild(e, this));
            },
            t
          );
        }
      }),
      xt.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        },
        function(t, e) {
          xt.fn[t] = function(t) {
            for (var i, n = [], r = xt(t), s = r.length - 1, o = 0; o <= s; o++)
              (i = o === s ? this : this.clone(!0)),
                xt(r[o])[e](i),
                ht.apply(n, i.get());
            return this.pushStack(n);
          };
        }
      );
    var ce = new RegExp("^(" + Ut + ")(?!px)[a-z%]+$", "i"),
      pe = function(e) {
        var i = e.ownerDocument.defaultView;
        return (i && i.opener) || (i = t), i.getComputedStyle(e);
      },
      de = new RegExp(Vt.join("|"), "i");
    !(function() {
      function e() {
        if (u) {
          (l.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (u.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            ne.appendChild(l).appendChild(u);
          var e = t.getComputedStyle(u);
          (n = "1%" !== e.top),
            (a = 12 === i(e.marginLeft)),
            (u.style.right = "60%"),
            (o = 36 === i(e.right)),
            (r = 36 === i(e.width)),
            (u.style.position = "absolute"),
            (s = 36 === u.offsetWidth || "absolute"),
            ne.removeChild(l),
            (u = null);
        }
      }
      function i(t) {
        return Math.round(parseFloat(t));
      }
      var n,
        r,
        s,
        o,
        a,
        l = ot.createElement("div"),
        u = ot.createElement("div");
      u.style &&
        ((u.style.backgroundClip = "content-box"),
        (u.cloneNode(!0).style.backgroundClip = ""),
        (yt.clearCloneStyle = "content-box" === u.style.backgroundClip),
        xt.extend(yt, {
          boxSizingReliable: function() {
            return e(), r;
          },
          pixelBoxStyles: function() {
            return e(), o;
          },
          pixelPosition: function() {
            return e(), n;
          },
          reliableMarginLeft: function() {
            return e(), a;
          },
          scrollboxSize: function() {
            return e(), s;
          }
        }));
    })();
    var fe = /^(none|table(?!-c[ea]).+)/,
      me = /^--/,
      ge = {position: "absolute", visibility: "hidden", display: "block"},
      ye = {letterSpacing: "0", fontWeight: "400"},
      ve = ["Webkit", "Moz", "ms"],
      _e = ot.createElement("div").style;
    xt.extend({
      cssHooks: {
        opacity: {
          get: function(t, e) {
            if (e) {
              var i = M(t, "opacity");
              return "" === i ? "1" : i;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(t, e, i, n) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var r,
            s,
            o,
            a = f(e),
            l = me.test(e),
            u = t.style;
          if (
            (l || (e = I(a)),
            (o = xt.cssHooks[e] || xt.cssHooks[a]),
            i === undefined)
          )
            return o && "get" in o && (r = o.get(t, !1, n)) !== undefined
              ? r
              : u[e];
          "string" === (s = typeof i) &&
            (r = Wt.exec(i)) &&
            r[1] &&
            ((i = v(t, e, r)), (s = "number")),
            null != i &&
              i == i &&
              ("number" === s &&
                (i += (r && r[3]) || (xt.cssNumber[a] ? "" : "px")),
              yt.clearCloneStyle ||
                "" !== i ||
                0 !== e.indexOf("background") ||
                (u[e] = "inherit"),
              (o && "set" in o && (i = o.set(t, i, n)) === undefined) ||
                (l ? u.setProperty(e, i) : (u[e] = i)));
        }
      },
      css: function(t, e, i, n) {
        var r,
          s,
          o,
          a = f(e);
        return (
          me.test(e) || (e = I(a)),
          (o = xt.cssHooks[e] || xt.cssHooks[a]) &&
            "get" in o &&
            (r = o.get(t, !0, i)),
          r === undefined && (r = M(t, e, n)),
          "normal" === r && e in ye && (r = ye[e]),
          "" === i || i
            ? ((s = parseFloat(r)), !0 === i || isFinite(s) ? s || 0 : r)
            : r
        );
      }
    }),
      xt.each(["height", "width"], function(t, e) {
        xt.cssHooks[e] = {
          get: function(t, i, n) {
            if (i)
              return !fe.test(xt.css(t, "display")) ||
                (t.getClientRects().length && t.getBoundingClientRect().width)
                ? z(t, e, n)
                : Yt(t, ge, function() {
                    return z(t, e, n);
                  });
          },
          set: function(t, i, n) {
            var r,
              s = pe(t),
              o = "border-box" === xt.css(t, "boxSizing", !1, s),
              a = n && q(t, e, n, o, s);
            return (
              o &&
                yt.scrollboxSize() === s.position &&
                (a -= Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    parseFloat(s[e]) -
                    q(t, e, "border", !1, s) -
                    0.5
                )),
              a &&
                (r = Wt.exec(i)) &&
                "px" !== (r[3] || "px") &&
                ((t.style[e] = i), (i = xt.css(t, e))),
              j(t, i, a)
            );
          }
        };
      }),
      (xt.cssHooks.marginLeft = N(yt.reliableMarginLeft, function(t, e) {
        if (e)
          return (
            (parseFloat(M(t, "marginLeft")) ||
              t.getBoundingClientRect().left -
                Yt(t, {marginLeft: 0}, function() {
                  return t.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      xt.each({margin: "", padding: "", border: "Width"}, function(t, e) {
        (xt.cssHooks[t + e] = {
          expand: function(i) {
            for (
              var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i];
              n < 4;
              n++
            )
              r[t + Vt[n] + e] = s[n] || s[n - 2] || s[0];
            return r;
          }
        }),
          "margin" !== t && (xt.cssHooks[t + e].set = j);
      }),
      xt.fn.extend({
        css: function(t, e) {
          return Nt(
            this,
            function(t, e, i) {
              var n,
                r,
                s = {},
                o = 0;
              if (Array.isArray(e)) {
                for (n = pe(t), r = e.length; o < r; o++)
                  s[e[o]] = xt.css(t, e[o], !1, n);
                return s;
              }
              return i !== undefined ? xt.style(t, e, i) : xt.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        }
      }),
      (xt.Tween = H),
      (H.prototype = {
        constructor: H,
        init: function(t, e, i, n, r, s) {
          (this.elem = t),
            (this.prop = i),
            (this.easing = r || xt.easing._default),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = n),
            (this.unit = s || (xt.cssNumber[i] ? "" : "px"));
        },
        cur: function() {
          var t = H.propHooks[this.prop];
          return t && t.get ? t.get(this) : H.propHooks._default.get(this);
        },
        run: function(t) {
          var e,
            i = H.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = e = xt.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
              : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : H.propHooks._default.set(this),
            this
          );
        }
      }),
      (H.prototype.init.prototype = H.prototype),
      (H.propHooks = {
        _default: {
          get: function(t) {
            var e;
            return 1 !== t.elem.nodeType ||
              (null != t.elem[t.prop] && null == t.elem.style[t.prop])
              ? t.elem[t.prop]
              : (e = xt.css(t.elem, t.prop, "")) && "auto" !== e
              ? e
              : 0;
          },
          set: function(t) {
            xt.fx.step[t.prop]
              ? xt.fx.step[t.prop](t)
              : 1 !== t.elem.nodeType ||
                (null == t.elem.style[xt.cssProps[t.prop]] &&
                  !xt.cssHooks[t.prop])
              ? (t.elem[t.prop] = t.now)
              : xt.style(t.elem, t.prop, t.now + t.unit);
          }
        }
      }),
      (H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
      }),
      (xt.easing = {
        linear: function(t) {
          return t;
        },
        swing: function(t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing"
      }),
      (xt.fx = H.prototype.init),
      (xt.fx.step = {});
    var be,
      we,
      xe = /^(?:toggle|show|hide)$/,
      Te = /queueHooks$/;
    (xt.Animation = xt.extend(G, {
      tweeners: {
        "*": [
          function(t, e) {
            var i = this.createTween(t, e);
            return v(i.elem, t, Wt.exec(e), i), i;
          }
        ]
      },
      tweener: function(t, e) {
        vt(t) ? ((e = t), (t = ["*"])) : (t = t.match($t));
        for (var i, n = 0, r = t.length; n < r; n++)
          (i = t[n]),
            (G.tweeners[i] = G.tweeners[i] || []),
            G.tweeners[i].unshift(e);
      },
      prefilters: [X],
      prefilter: function(t, e) {
        e ? G.prefilters.unshift(t) : G.prefilters.push(t);
      }
    })),
      (xt.speed = function(t, e, i) {
        var n =
          t && "object" == typeof t
            ? xt.extend({}, t)
            : {
                complete: i || (!i && e) || (vt(t) && t),
                duration: t,
                easing: (i && e) || (e && !vt(e) && e)
              };
        return (
          xt.fx.off
            ? (n.duration = 0)
            : "number" != typeof n.duration &&
              (n.duration in xt.fx.speeds
                ? (n.duration = xt.fx.speeds[n.duration])
                : (n.duration = xt.fx.speeds._default)),
          (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
          (n.old = n.complete),
          (n.complete = function() {
            vt(n.old) && n.old.call(this), n.queue && xt.dequeue(this, n.queue);
          }),
          n
        );
      }),
      xt.fn.extend({
        fadeTo: function(t, e, i, n) {
          return this.filter(Xt)
            .css("opacity", 0)
            .show()
            .end()
            .animate({opacity: e}, t, i, n);
        },
        animate: function(t, e, i, n) {
          var r = xt.isEmptyObject(t),
            s = xt.speed(e, i, n),
            o = function() {
              var e = G(this, xt.extend({}, t), s);
              (r || qt.get(this, "finish")) && e.stop(!0);
            };
          return (
            (o.finish = o),
            r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
          );
        },
        stop: function(t, e, i) {
          var n = function(t) {
            var e = t.stop;
            delete t.stop, e(i);
          };
          return (
            "string" != typeof t && ((i = e), (e = t), (t = undefined)),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
              var e = !0,
                r = null != t && t + "queueHooks",
                s = xt.timers,
                o = qt.get(this);
              if (r) o[r] && o[r].stop && n(o[r]);
              else for (r in o) o[r] && o[r].stop && Te.test(r) && n(o[r]);
              for (r = s.length; r--; )
                s[r].elem !== this ||
                  (null != t && s[r].queue !== t) ||
                  (s[r].anim.stop(i), (e = !1), s.splice(r, 1));
              (!e && i) || xt.dequeue(this, t);
            })
          );
        },
        finish: function(t) {
          return (
            !1 !== t && (t = t || "fx"),
            this.each(function() {
              var e,
                i = qt.get(this),
                n = i[t + "queue"],
                r = i[t + "queueHooks"],
                s = xt.timers,
                o = n ? n.length : 0;
              for (
                i.finish = !0,
                  xt.queue(this, t, []),
                  r && r.stop && r.stop.call(this, !0),
                  e = s.length;
                e--;

              )
                s[e].elem === this &&
                  s[e].queue === t &&
                  (s[e].anim.stop(!0), s.splice(e, 1));
              for (e = 0; e < o; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete i.finish;
            })
          );
        }
      }),
      xt.each(["toggle", "show", "hide"], function(t, e) {
        var i = xt.fn[e];
        xt.fn[e] = function(t, n, r) {
          return null == t || "boolean" == typeof t
            ? i.apply(this, arguments)
            : this.animate(W(e, !0), t, n, r);
        };
      }),
      xt.each(
        {
          slideDown: W("show"),
          slideUp: W("hide"),
          slideToggle: W("toggle"),
          fadeIn: {opacity: "show"},
          fadeOut: {opacity: "hide"},
          fadeToggle: {opacity: "toggle"}
        },
        function(t, e) {
          xt.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n);
          };
        }
      ),
      (xt.timers = []),
      (xt.fx.tick = function() {
        var t,
          e = 0,
          i = xt.timers;
        for (be = Date.now(); e < i.length; e++)
          (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || xt.fx.stop(), (be = undefined);
      }),
      (xt.fx.timer = function(t) {
        xt.timers.push(t), xt.fx.start();
      }),
      (xt.fx.interval = 13),
      (xt.fx.start = function() {
        we || ((we = !0), B());
      }),
      (xt.fx.stop = function() {
        we = null;
      }),
      (xt.fx.speeds = {slow: 600, fast: 200, _default: 400}),
      (xt.fn.delay = function(e, i) {
        return (
          (e = (xt.fx && xt.fx.speeds[e]) || e),
          (i = i || "fx"),
          this.queue(i, function(i, n) {
            var r = t.setTimeout(i, e);
            n.stop = function() {
              t.clearTimeout(r);
            };
          })
        );
      }),
      (function() {
        var t = ot.createElement("input"),
          e = ot
            .createElement("select")
            .appendChild(ot.createElement("option"));
        (t.type = "checkbox"),
          (yt.checkOn = "" !== t.value),
          (yt.optSelected = e.selected),
          ((t = ot.createElement("input")).value = "t"),
          (t.type = "radio"),
          (yt.radioValue = "t" === t.value);
      })();
    var Ce,
      Se = xt.expr.attrHandle;
    xt.fn.extend({
      attr: function(t, e) {
        return Nt(this, xt.attr, t, e, arguments.length > 1);
      },
      removeAttr: function(t) {
        return this.each(function() {
          xt.removeAttr(this, t);
        });
      }
    }),
      xt.extend({
        attr: function(t, e, i) {
          var n,
            r,
            s = t.nodeType;
          if (3 !== s && 8 !== s && 2 !== s)
            return "undefined" == typeof t.getAttribute
              ? xt.prop(t, e, i)
              : ((1 === s && xt.isXMLDoc(t)) ||
                  (r =
                    xt.attrHooks[e.toLowerCase()] ||
                    (xt.expr.match.bool.test(e) ? Ce : undefined)),
                i !== undefined
                  ? null === i
                    ? void xt.removeAttr(t, e)
                    : r && "set" in r && (n = r.set(t, i, e)) !== undefined
                    ? n
                    : (t.setAttribute(e, i + ""), i)
                  : r && "get" in r && null !== (n = r.get(t, e))
                  ? n
                  : null == (n = xt.find.attr(t, e))
                  ? undefined
                  : n);
        },
        attrHooks: {
          type: {
            set: function(t, e) {
              if (!yt.radioValue && "radio" === e && s(t, "input")) {
                var i = t.value;
                return t.setAttribute("type", e), i && (t.value = i), e;
              }
            }
          }
        },
        removeAttr: function(t, e) {
          var i,
            n = 0,
            r = e && e.match($t);
          if (r && 1 === t.nodeType)
            for (; (i = r[n++]); ) t.removeAttribute(i);
        }
      }),
      (Ce = {
        set: function(t, e, i) {
          return !1 === e ? xt.removeAttr(t, i) : t.setAttribute(i, i), i;
        }
      }),
      xt.each(xt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = Se[e] || xt.find.attr;
        Se[e] = function(t, e, n) {
          var r,
            s,
            o = e.toLowerCase();
          return (
            n ||
              ((s = Se[o]),
              (Se[o] = r),
              (r = null != i(t, e, n) ? o : null),
              (Se[o] = s)),
            r
          );
        };
      });
    var Ee = /^(?:input|select|textarea|button)$/i,
      ke = /^(?:a|area)$/i;
    xt.fn.extend({
      prop: function(t, e) {
        return Nt(this, xt.prop, t, e, arguments.length > 1);
      },
      removeProp: function(t) {
        return this.each(function() {
          delete this[xt.propFix[t] || t];
        });
      }
    }),
      xt.extend({
        prop: function(t, e, i) {
          var n,
            r,
            s = t.nodeType;
          if (3 !== s && 8 !== s && 2 !== s)
            return (
              (1 === s && xt.isXMLDoc(t)) ||
                ((e = xt.propFix[e] || e), (r = xt.propHooks[e])),
              i !== undefined
                ? r && "set" in r && (n = r.set(t, i, e)) !== undefined
                  ? n
                  : (t[e] = i)
                : r && "get" in r && null !== (n = r.get(t, e))
                ? n
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function(t) {
              var e = xt.find.attr(t, "tabindex");
              return e
                ? parseInt(e, 10)
                : Ee.test(t.nodeName) || (ke.test(t.nodeName) && t.href)
                ? 0
                : -1;
            }
          }
        },
        propFix: {for: "htmlFor", class: "className"}
      }),
      yt.optSelected ||
        (xt.propHooks.selected = {
          get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
          },
          set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
          }
        }),
      xt.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ],
        function() {
          xt.propFix[this.toLowerCase()] = this;
        }
      ),
      xt.fn.extend({
        addClass: function(t) {
          var e,
            i,
            n,
            r,
            s,
            o,
            a,
            l = 0;
          if (vt(t))
            return this.each(function(e) {
              xt(this).addClass(t.call(this, e, Z(this)));
            });
          if ((e = J(t)).length)
            for (; (i = this[l++]); )
              if (((r = Z(i)), (n = 1 === i.nodeType && " " + Q(r) + " "))) {
                for (o = 0; (s = e[o++]); )
                  n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                r !== (a = Q(n)) && i.setAttribute("class", a);
              }
          return this;
        },
        removeClass: function(t) {
          var e,
            i,
            n,
            r,
            s,
            o,
            a,
            l = 0;
          if (vt(t))
            return this.each(function(e) {
              xt(this).removeClass(t.call(this, e, Z(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((e = J(t)).length)
            for (; (i = this[l++]); )
              if (((r = Z(i)), (n = 1 === i.nodeType && " " + Q(r) + " "))) {
                for (o = 0; (s = e[o++]); )
                  for (; n.indexOf(" " + s + " ") > -1; )
                    n = n.replace(" " + s + " ", " ");
                r !== (a = Q(n)) && i.setAttribute("class", a);
              }
          return this;
        },
        toggleClass: function(t, e) {
          var i = typeof t,
            n = "string" === i || Array.isArray(t);
          return "boolean" == typeof e && n
            ? e
              ? this.addClass(t)
              : this.removeClass(t)
            : vt(t)
            ? this.each(function(i) {
                xt(this).toggleClass(t.call(this, i, Z(this), e), e);
              })
            : this.each(function() {
                var e, r, s, o;
                if (n)
                  for (r = 0, s = xt(this), o = J(t); (e = o[r++]); )
                    s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else
                  (t !== undefined && "boolean" !== i) ||
                    ((e = Z(this)) && qt.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        e || !1 === t ? "" : qt.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function(t) {
          var e,
            i,
            n = 0;
          for (e = " " + t + " "; (i = this[n++]); )
            if (1 === i.nodeType && (" " + Q(Z(i)) + " ").indexOf(e) > -1)
              return !0;
          return !1;
        }
      });
    var Pe = /\r/g;
    xt.fn.extend({
      val: function(t) {
        var e,
          i,
          n,
          r = this[0];
        return arguments.length
          ? ((n = vt(t)),
            this.each(function(i) {
              var r;
              1 === this.nodeType &&
                (null == (r = n ? t.call(this, i, xt(this).val()) : t)
                  ? (r = "")
                  : "number" == typeof r
                  ? (r += "")
                  : Array.isArray(r) &&
                    (r = xt.map(r, function(t) {
                      return null == t ? "" : t + "";
                    })),
                ((e =
                  xt.valHooks[this.type] ||
                  xt.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in e &&
                  e.set(this, r, "value") !== undefined) ||
                  (this.value = r));
            }))
          : r
          ? (e =
              xt.valHooks[r.type] || xt.valHooks[r.nodeName.toLowerCase()]) &&
            "get" in e &&
            (i = e.get(r, "value")) !== undefined
            ? i
            : "string" == typeof (i = r.value)
            ? i.replace(Pe, "")
            : null == i
            ? ""
            : i
          : void 0;
      }
    }),
      xt.extend({
        valHooks: {
          option: {
            get: function(t) {
              var e = xt.find.attr(t, "value");
              return null != e ? e : Q(xt.text(t));
            }
          },
          select: {
            get: function(t) {
              var e,
                i,
                n,
                r = t.options,
                o = t.selectedIndex,
                a = "select-one" === t.type,
                l = a ? null : [],
                u = a ? o + 1 : r.length;
              for (n = o < 0 ? u : a ? o : 0; n < u; n++)
                if (
                  ((i = r[n]).selected || n === o) &&
                  !i.disabled &&
                  (!i.parentNode.disabled || !s(i.parentNode, "optgroup"))
                ) {
                  if (((e = xt(i).val()), a)) return e;
                  l.push(e);
                }
              return l;
            },
            set: function(t, e) {
              for (
                var i, n, r = t.options, s = xt.makeArray(e), o = r.length;
                o--;

              )
                ((n = r[o]).selected =
                  xt.inArray(xt.valHooks.option.get(n), s) > -1) && (i = !0);
              return i || (t.selectedIndex = -1), s;
            }
          }
        }
      }),
      xt.each(["radio", "checkbox"], function() {
        (xt.valHooks[this] = {
          set: function(t, e) {
            if (Array.isArray(e))
              return (t.checked = xt.inArray(xt(t).val(), e) > -1);
          }
        }),
          yt.checkOn ||
            (xt.valHooks[this].get = function(t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      }),
      (yt.focusin = "onfocusin" in t);
    var Ae = /^(?:focusinfocus|focusoutblur)$/,
      Re = function(t) {
        t.stopPropagation();
      };
    xt.extend(xt.event, {
      trigger: function(e, i, n, r) {
        var s,
          o,
          a,
          l,
          u,
          h,
          c,
          p,
          d = [n || ot],
          f = ft.call(e, "type") ? e.type : e,
          m = ft.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((o = p = a = n = n || ot),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !Ae.test(f + xt.event.triggered) &&
            (f.indexOf(".") > -1 &&
              ((f = (m = f.split(".")).shift()), m.sort()),
            (u = f.indexOf(":") < 0 && "on" + f),
            ((e = e[xt.expando]
              ? e
              : new xt.Event(f, "object" == typeof e && e)).isTrigger = r
              ? 2
              : 3),
            (e.namespace = m.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = undefined),
            e.target || (e.target = n),
            (i = null == i ? [e] : xt.makeArray(i, [e])),
            (c = xt.event.special[f] || {}),
            r || !c.trigger || !1 !== c.trigger.apply(n, i)))
        ) {
          if (!r && !c.noBubble && !_t(n)) {
            for (
              l = c.delegateType || f, Ae.test(l + f) || (o = o.parentNode);
              o;
              o = o.parentNode
            )
              d.push(o), (a = o);
            a === (n.ownerDocument || ot) &&
              d.push(a.defaultView || a.parentWindow || t);
          }
          for (s = 0; (o = d[s++]) && !e.isPropagationStopped(); )
            (p = o),
              (e.type = s > 1 ? l : c.bindType || f),
              (h =
                (qt.get(o, "events") || {})[e.type] && qt.get(o, "handle")) &&
                h.apply(o, i),
              (h = u && o[u]) &&
                h.apply &&
                jt(o) &&
                ((e.result = h.apply(o, i)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = f),
            r ||
              e.isDefaultPrevented() ||
              (c._default && !1 !== c._default.apply(d.pop(), i)) ||
              !jt(n) ||
              (u &&
                vt(n[f]) &&
                !_t(n) &&
                ((a = n[u]) && (n[u] = null),
                (xt.event.triggered = f),
                e.isPropagationStopped() && p.addEventListener(f, Re),
                n[f](),
                e.isPropagationStopped() && p.removeEventListener(f, Re),
                (xt.event.triggered = undefined),
                a && (n[u] = a))),
            e.result
          );
        }
      },
      simulate: function(t, e, i) {
        var n = xt.extend(new xt.Event(), i, {type: t, isSimulated: !0});
        xt.event.trigger(n, null, e);
      }
    }),
      xt.fn.extend({
        trigger: function(t, e) {
          return this.each(function() {
            xt.event.trigger(t, e, this);
          });
        },
        triggerHandler: function(t, e) {
          var i = this[0];
          if (i) return xt.event.trigger(t, e, i, !0);
        }
      }),
      yt.focusin ||
        xt.each({focus: "focusin", blur: "focusout"}, function(t, e) {
          var i = function(t) {
            xt.event.simulate(e, t.target, xt.event.fix(t));
          };
          xt.event.special[e] = {
            setup: function() {
              var n = this.ownerDocument || this,
                r = qt.access(n, e);
              r || n.addEventListener(t, i, !0), qt.access(n, e, (r || 0) + 1);
            },
            teardown: function() {
              var n = this.ownerDocument || this,
                r = qt.access(n, e) - 1;
              r
                ? qt.access(n, e, r)
                : (n.removeEventListener(t, i, !0), qt.remove(n, e));
            }
          };
        });
    var Oe = t.location,
      De = Date.now(),
      $e = /\?/;
    xt.parseXML = function(e) {
      var i;
      if (!e || "string" != typeof e) return null;
      try {
        i = new t.DOMParser().parseFromString(e, "text/xml");
      } catch (n) {
        i = undefined;
      }
      return (
        (i && !i.getElementsByTagName("parsererror").length) ||
          xt.error("Invalid XML: " + e),
        i
      );
    };
    var Le = /\[\]$/,
      Me = /\r?\n/g,
      Ne = /^(?:submit|button|image|reset|file)$/i,
      Fe = /^(?:input|select|textarea|keygen)/i;
    (xt.param = function(t, e) {
      var i,
        n = [],
        r = function(t, e) {
          var i = vt(e) ? e() : e;
          n[n.length] =
            encodeURIComponent(t) +
            "=" +
            encodeURIComponent(null == i ? "" : i);
        };
      if (Array.isArray(t) || (t.jquery && !xt.isPlainObject(t)))
        xt.each(t, function() {
          r(this.name, this.value);
        });
      else for (i in t) K(i, t[i], e, r);
      return n.join("&");
    }),
      xt.fn.extend({
        serialize: function() {
          return xt.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var t = xt.prop(this, "elements");
            return t ? xt.makeArray(t) : this;
          })
            .filter(function() {
              var t = this.type;
              return (
                this.name &&
                !xt(this).is(":disabled") &&
                Fe.test(this.nodeName) &&
                !Ne.test(t) &&
                (this.checked || !Qt.test(t))
              );
            })
            .map(function(t, e) {
              var i = xt(this).val();
              return null == i
                ? null
                : Array.isArray(i)
                ? xt.map(i, function(t) {
                    return {name: e.name, value: t.replace(Me, "\r\n")};
                  })
                : {name: e.name, value: i.replace(Me, "\r\n")};
            })
            .get();
        }
      });
    var Ie = /%20/g,
      je = /#.*$/,
      qe = /([?&])_=[^&]*/,
      ze = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      He = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Be = /^(?:GET|HEAD)$/,
      Ue = /^\/\//,
      We = {},
      Ve = {},
      Xe = "*/".concat("*"),
      Ye = ot.createElement("a");
    (Ye.href = Oe.href),
      xt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Oe.href,
          type: "GET",
          isLocal: He.test(Oe.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Xe,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": xt.parseXML
          },
          flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function(t, e) {
          return e ? it(it(t, xt.ajaxSettings), e) : it(xt.ajaxSettings, t);
        },
        ajaxPrefilter: tt(We),
        ajaxTransport: tt(Ve),
        ajax: function(e, i) {
          function n(e, i, n, a) {
            var u,
              p,
              d,
              b,
              w,
              x = i;
            h ||
              ((h = !0),
              l && t.clearTimeout(l),
              (r = undefined),
              (o = a || ""),
              (T.readyState = e > 0 ? 4 : 0),
              (u = (e >= 200 && e < 300) || 304 === e),
              n && (b = nt(f, T, n)),
              (b = rt(f, b, T, u)),
              u
                ? (f.ifModified &&
                    ((w = T.getResponseHeader("Last-Modified")) &&
                      (xt.lastModified[s] = w),
                    (w = T.getResponseHeader("etag")) && (xt.etag[s] = w)),
                  204 === e || "HEAD" === f.type
                    ? (x = "nocontent")
                    : 304 === e
                    ? (x = "notmodified")
                    : ((x = b.state), (p = b.data), (u = !(d = b.error))))
                : ((d = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (i || x) + ""),
              u ? y.resolveWith(m, [p, x, T]) : y.rejectWith(m, [T, x, d]),
              T.statusCode(_),
              (_ = undefined),
              c &&
                g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? p : d]),
              v.fireWith(m, [T, x]),
              c &&
                (g.trigger("ajaxComplete", [T, f]),
                --xt.active || xt.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((i = e), (e = undefined)), (i = i || {});
          var r,
            s,
            o,
            a,
            l,
            u,
            h,
            c,
            p,
            d,
            f = xt.ajaxSetup({}, i),
            m = f.context || f,
            g = f.context && (m.nodeType || m.jquery) ? xt(m) : xt.event,
            y = xt.Deferred(),
            v = xt.Callbacks("once memory"),
            _ = f.statusCode || {},
            b = {},
            w = {},
            x = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function(t) {
                var e;
                if (h) {
                  if (!a)
                    for (a = {}; (e = ze.exec(o)); )
                      a[e[1].toLowerCase()] = e[2];
                  e = a[t.toLowerCase()];
                }
                return null == e ? null : e;
              },
              getAllResponseHeaders: function() {
                return h ? o : null;
              },
              setRequestHeader: function(t, e) {
                return (
                  null == h &&
                    ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
                    (b[t] = e)),
                  this
                );
              },
              overrideMimeType: function(t) {
                return null == h && (f.mimeType = t), this;
              },
              statusCode: function(t) {
                var e;
                if (t)
                  if (h) T.always(t[T.status]);
                  else for (e in t) _[e] = [_[e], t[e]];
                return this;
              },
              abort: function(t) {
                var e = t || x;
                return r && r.abort(e), n(0, e), this;
              }
            };
          if (
            (y.promise(T),
            (f.url = ((e || f.url || Oe.href) + "").replace(
              Ue,
              Oe.protocol + "//"
            )),
            (f.type = i.method || i.type || f.method || f.type),
            (f.dataTypes = (f.dataType || "*").toLowerCase().match($t) || [""]),
            null == f.crossDomain)
          ) {
            u = ot.createElement("a");
            try {
              (u.href = f.url),
                (u.href = u.href),
                (f.crossDomain =
                  Ye.protocol + "//" + Ye.host != u.protocol + "//" + u.host);
            } catch (C) {
              f.crossDomain = !0;
            }
          }
          if (
            (f.data &&
              f.processData &&
              "string" != typeof f.data &&
              (f.data = xt.param(f.data, f.traditional)),
            et(We, f, i, T),
            h)
          )
            return T;
          for (p in ((c = xt.event && f.global) &&
            0 == xt.active++ &&
            xt.event.trigger("ajaxStart"),
          (f.type = f.type.toUpperCase()),
          (f.hasContent = !Be.test(f.type)),
          (s = f.url.replace(je, "")),
          f.hasContent
            ? f.data &&
              f.processData &&
              0 ===
                (f.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (f.data = f.data.replace(Ie, "+"))
            : ((d = f.url.slice(s.length)),
              f.data &&
                (f.processData || "string" == typeof f.data) &&
                ((s += ($e.test(s) ? "&" : "?") + f.data), delete f.data),
              !1 === f.cache &&
                ((s = s.replace(qe, "$1")),
                (d = ($e.test(s) ? "&" : "?") + "_=" + De++ + d)),
              (f.url = s + d)),
          f.ifModified &&
            (xt.lastModified[s] &&
              T.setRequestHeader("If-Modified-Since", xt.lastModified[s]),
            xt.etag[s] && T.setRequestHeader("If-None-Match", xt.etag[s])),
          ((f.data && f.hasContent && !1 !== f.contentType) || i.contentType) &&
            T.setRequestHeader("Content-Type", f.contentType),
          T.setRequestHeader(
            "Accept",
            f.dataTypes[0] && f.accepts[f.dataTypes[0]]
              ? f.accepts[f.dataTypes[0]] +
                  ("*" !== f.dataTypes[0] ? ", " + Xe + "; q=0.01" : "")
              : f.accepts["*"]
          ),
          f.headers))
            T.setRequestHeader(p, f.headers[p]);
          if (f.beforeSend && (!1 === f.beforeSend.call(m, T, f) || h))
            return T.abort();
          if (
            ((x = "abort"),
            v.add(f.complete),
            T.done(f.success),
            T.fail(f.error),
            (r = et(Ve, f, i, T)))
          ) {
            if (((T.readyState = 1), c && g.trigger("ajaxSend", [T, f]), h))
              return T;
            f.async &&
              f.timeout > 0 &&
              (l = t.setTimeout(function() {
                T.abort("timeout");
              }, f.timeout));
            try {
              (h = !1), r.send(b, n);
            } catch (C) {
              if (h) throw C;
              n(-1, C);
            }
          } else n(-1, "No Transport");
          return T;
        },
        getJSON: function(t, e, i) {
          return xt.get(t, e, i, "json");
        },
        getScript: function(t, e) {
          return xt.get(t, undefined, e, "script");
        }
      }),
      xt.each(["get", "post"], function(t, e) {
        xt[e] = function(t, i, n, r) {
          return (
            vt(i) && ((r = r || n), (n = i), (i = undefined)),
            xt.ajax(
              xt.extend(
                {url: t, type: e, dataType: r, data: i, success: n},
                xt.isPlainObject(t) && t
              )
            )
          );
        };
      }),
      (xt._evalUrl = function(t) {
        return xt.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0
        });
      }),
      xt.fn.extend({
        wrapAll: function(t) {
          var e;
          return (
            this[0] &&
              (vt(t) && (t = t.call(this[0])),
              (e = xt(t, this[0].ownerDocument)
                .eq(0)
                .clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function() {
                  for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                  return t;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function(t) {
          return vt(t)
            ? this.each(function(e) {
                xt(this).wrapInner(t.call(this, e));
              })
            : this.each(function() {
                var e = xt(this),
                  i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
              });
        },
        wrap: function(t) {
          var e = vt(t);
          return this.each(function(i) {
            xt(this).wrapAll(e ? t.call(this, i) : t);
          });
        },
        unwrap: function(t) {
          return (
            this.parent(t)
              .not("body")
              .each(function() {
                xt(this).replaceWith(this.childNodes);
              }),
            this
          );
        }
      }),
      (xt.expr.pseudos.hidden = function(t) {
        return !xt.expr.pseudos.visible(t);
      }),
      (xt.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
      }),
      (xt.ajaxSettings.xhr = function() {
        try {
          return new t.XMLHttpRequest();
        } catch (e) {}
      });
    var Ge = {0: 200, 1223: 204},
      Qe = xt.ajaxSettings.xhr();
    (yt.cors = !!Qe && "withCredentials" in Qe),
      (yt.ajax = Qe = !!Qe),
      xt.ajaxTransport(function(e) {
        var i, n;
        if (yt.cors || (Qe && !e.crossDomain))
          return {
            send: function(r, s) {
              var o,
                a = e.xhr();
              if (
                (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (o in e.xhrFields) a[o] = e.xhrFields[o];
              for (o in (e.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(e.mimeType),
              e.crossDomain ||
                r["X-Requested-With"] ||
                (r["X-Requested-With"] = "XMLHttpRequest"),
              r))
                a.setRequestHeader(o, r[o]);
              (i = function(t) {
                return function() {
                  i &&
                    ((i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                    "abort" === t
                      ? a.abort()
                      : "error" === t
                      ? "number" != typeof a.status
                        ? s(0, "error")
                        : s(a.status, a.statusText)
                      : s(
                          Ge[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? {binary: a.response}
                            : {text: a.responseText},
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = i()),
                (n = a.onerror = a.ontimeout = i("error")),
                a.onabort !== undefined
                  ? (a.onabort = n)
                  : (a.onreadystatechange = function() {
                      4 === a.readyState &&
                        t.setTimeout(function() {
                          i && n();
                        });
                    }),
                (i = i("abort"));
              try {
                a.send((e.hasContent && e.data) || null);
              } catch (l) {
                if (i) throw l;
              }
            },
            abort: function() {
              i && i();
            }
          };
      }),
      xt.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1);
      }),
      xt.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
          "text script": function(t) {
            return xt.globalEval(t), t;
          }
        }
      }),
      xt.ajaxPrefilter("script", function(t) {
        t.cache === undefined && (t.cache = !1),
          t.crossDomain && (t.type = "GET");
      }),
      xt.ajaxTransport("script", function(t) {
        var e, i;
        if (t.crossDomain)
          return {
            send: function(n, r) {
              (e = xt("<script>")
                .prop({charset: t.scriptCharset, src: t.url})
                .on(
                  "load error",
                  (i = function(t) {
                    e.remove(),
                      (i = null),
                      t && r("error" === t.type ? 404 : 200, t.type);
                  })
                )),
                ot.head.appendChild(e[0]);
            },
            abort: function() {
              i && i();
            }
          };
      });
    var Ze,
      Je = [],
      Ke = /(=)\?(?=&|$)|\?\?/;
    xt.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var t = Je.pop() || xt.expando + "_" + De++;
        return (this[t] = !0), t;
      }
    }),
      xt.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r,
          s,
          o,
          a =
            !1 !== e.jsonp &&
            (Ke.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Ke.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (r = e.jsonpCallback = vt(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Ke, "$1" + r))
              : !1 !== e.jsonp &&
                (e.url += ($e.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function() {
              return o || xt.error(r + " was not called"), o[0];
            }),
            (e.dataTypes[0] = "json"),
            (s = t[r]),
            (t[r] = function() {
              o = arguments;
            }),
            n.always(function() {
              s === undefined ? xt(t).removeProp(r) : (t[r] = s),
                e[r] && ((e.jsonpCallback = i.jsonpCallback), Je.push(r)),
                o && vt(s) && s(o[0]),
                (o = s = undefined);
            }),
            "script"
          );
      }),
      (yt.createHTMLDocument = (((Ze = ot.implementation.createHTMLDocument("")
        .body).innerHTML = "<form></form><form></form>"),
      2 === Ze.childNodes.length)),
      (xt.parseHTML = function(t, e, i) {
        return "string" != typeof t
          ? []
          : ("boolean" == typeof e && ((i = e), (e = !1)),
            e ||
              (yt.createHTMLDocument
                ? (((n = (e = ot.implementation.createHTMLDocument(
                    ""
                  )).createElement("base")).href = ot.location.href),
                  e.head.appendChild(n))
                : (e = ot)),
            (s = !i && []),
            (r = Pt.exec(t))
              ? [e.createElement(r[1])]
              : ((r = T([t], e, s)),
                s && s.length && xt(s).remove(),
                xt.merge([], r.childNodes)));
        var n, r, s;
      }),
      (xt.fn.load = function(t, e, i) {
        var n,
          r,
          s,
          o = this,
          a = t.indexOf(" ");
        return (
          a > -1 && ((n = Q(t.slice(a))), (t = t.slice(0, a))),
          vt(e)
            ? ((i = e), (e = undefined))
            : e && "object" == typeof e && (r = "POST"),
          o.length > 0 &&
            xt
              .ajax({url: t, type: r || "GET", dataType: "html", data: e})
              .done(function(t) {
                (s = arguments),
                  o.html(
                    n
                      ? xt("<div>")
                          .append(xt.parseHTML(t))
                          .find(n)
                      : t
                  );
              })
              .always(
                i &&
                  function(t, e) {
                    o.each(function() {
                      i.apply(this, s || [t.responseText, e, t]);
                    });
                  }
              ),
          this
        );
      }),
      xt.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ],
        function(t, e) {
          xt.fn[e] = function(t) {
            return this.on(e, t);
          };
        }
      ),
      (xt.expr.pseudos.animated = function(t) {
        return xt.grep(xt.timers, function(e) {
          return t === e.elem;
        }).length;
      }),
      (xt.offset = {
        setOffset: function(t, e, i) {
          var n,
            r,
            s,
            o,
            a,
            l,
            u = xt.css(t, "position"),
            h = xt(t),
            c = {};
          "static" === u && (t.style.position = "relative"),
            (a = h.offset()),
            (s = xt.css(t, "top")),
            (l = xt.css(t, "left")),
            ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1
              ? ((o = (n = h.position()).top), (r = n.left))
              : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
            vt(e) && (e = e.call(t, i, xt.extend({}, a))),
            null != e.top && (c.top = e.top - a.top + o),
            null != e.left && (c.left = e.left - a.left + r),
            "using" in e ? e.using.call(t, c) : h.css(c);
        }
      }),
      xt.fn.extend({
        offset: function(t) {
          if (arguments.length)
            return t === undefined
              ? this
              : this.each(function(e) {
                  xt.offset.setOffset(this, t, e);
                });
          var e,
            i,
            n = this[0];
          return n
            ? n.getClientRects().length
              ? ((e = n.getBoundingClientRect()),
                (i = n.ownerDocument.defaultView),
                {top: e.top + i.pageYOffset, left: e.left + i.pageXOffset})
              : {top: 0, left: 0}
            : void 0;
        },
        position: function() {
          if (this[0]) {
            var t,
              e,
              i,
              n = this[0],
              r = {top: 0, left: 0};
            if ("fixed" === xt.css(n, "position"))
              e = n.getBoundingClientRect();
            else {
              for (
                e = this.offset(),
                  i = n.ownerDocument,
                  t = n.offsetParent || i.documentElement;
                t &&
                (t === i.body || t === i.documentElement) &&
                "static" === xt.css(t, "position");

              )
                t = t.parentNode;
              t &&
                t !== n &&
                1 === t.nodeType &&
                (((r = xt(t).offset()).top += xt.css(t, "borderTopWidth", !0)),
                (r.left += xt.css(t, "borderLeftWidth", !0)));
            }
            return {
              top: e.top - r.top - xt.css(n, "marginTop", !0),
              left: e.left - r.left - xt.css(n, "marginLeft", !0)
            };
          }
        },
        offsetParent: function() {
          return this.map(function() {
            for (
              var t = this.offsetParent;
              t && "static" === xt.css(t, "position");

            )
              t = t.offsetParent;
            return t || ne;
          });
        }
      }),
      xt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(
        t,
        e
      ) {
        var i = "pageYOffset" === e;
        xt.fn[t] = function(n) {
          return Nt(
            this,
            function(t, n, r) {
              var s;
              if (
                (_t(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView),
                r === undefined)
              )
                return s ? s[e] : t[n];
              s
                ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset)
                : (t[n] = r);
            },
            t,
            n,
            arguments.length
          );
        };
      }),
      xt.each(["top", "left"], function(t, e) {
        xt.cssHooks[e] = N(yt.pixelPosition, function(t, i) {
          if (i)
            return (i = M(t, e)), ce.test(i) ? xt(t).position()[e] + "px" : i;
        });
      }),
      xt.each({Height: "height", Width: "width"}, function(t, e) {
        xt.each({padding: "inner" + t, content: e, "": "outer" + t}, function(
          i,
          n
        ) {
          xt.fn[n] = function(r, s) {
            var o = arguments.length && (i || "boolean" != typeof r),
              a = i || (!0 === r || !0 === s ? "margin" : "border");
            return Nt(
              this,
              function(e, i, r) {
                var s;
                return _t(e)
                  ? 0 === n.indexOf("outer")
                    ? e["inner" + t]
                    : e.document.documentElement["client" + t]
                  : 9 === e.nodeType
                  ? ((s = e.documentElement),
                    Math.max(
                      e.body["scroll" + t],
                      s["scroll" + t],
                      e.body["offset" + t],
                      s["offset" + t],
                      s["client" + t]
                    ))
                  : r === undefined
                  ? xt.css(e, i, a)
                  : xt.style(e, i, r, a);
              },
              e,
              o ? r : undefined,
              o
            );
          };
        });
      }),
      xt.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function(t, e) {
          xt.fn[e] = function(t, i) {
            return arguments.length > 0
              ? this.on(e, null, t, i)
              : this.trigger(e);
          };
        }
      ),
      xt.fn.extend({
        hover: function(t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        }
      }),
      xt.fn.extend({
        bind: function(t, e, i) {
          return this.on(t, null, e, i);
        },
        unbind: function(t, e) {
          return this.off(t, null, e);
        },
        delegate: function(t, e, i, n) {
          return this.on(e, t, i, n);
        },
        undelegate: function(t, e, i) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", i);
        }
      }),
      (xt.proxy = function(t, e) {
        var i, n, r;
        return (
          "string" == typeof e && ((i = t[e]), (e = t), (t = i)),
          vt(t)
            ? ((n = lt.call(arguments, 2)),
              ((r = function() {
                return t.apply(e || this, n.concat(lt.call(arguments)));
              }).guid = t.guid = t.guid || xt.guid++),
              r)
            : undefined
        );
      }),
      (xt.holdReady = function(t) {
        t ? xt.readyWait++ : xt.ready(!0);
      }),
      (xt.isArray = Array.isArray),
      (xt.parseJSON = JSON.parse),
      (xt.nodeName = s),
      (xt.isFunction = vt),
      (xt.isWindow = _t),
      (xt.camelCase = f),
      (xt.type = n),
      (xt.now = Date.now),
      (xt.isNumeric = function(t) {
        var e = xt.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function() {
          return xt;
        });
    var ti = t.jQuery,
      ei = t.$;
    return (
      (xt.noConflict = function(e) {
        return (
          t.$ === xt && (t.$ = ei), e && t.jQuery === xt && (t.jQuery = ti), xt
        );
      }),
      e || (t.jQuery = t.$ = xt),
      xt
    );
  }),
  (function(t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e((t.ActiveStorage = {}));
  })(this, function(t) {
    "use strict";
    function e(t, e) {
      return t((e = {exports: {}}), e.exports), e.exports;
    }
    function i(t) {
      var e = r(document.head, 'meta[name="' + t + '"]');
      if (e) return e.getAttribute("content");
    }
    function n(t, e) {
      return (
        "string" == typeof t && ((e = t), (t = document)),
        o(t.querySelectorAll(e))
      );
    }
    function r(t, e) {
      return (
        "string" == typeof t && ((e = t), (t = document)), t.querySelector(e)
      );
    }
    function s(t, e) {
      var i =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {},
        n = t.disabled,
        r = i.bubbles,
        s = i.cancelable,
        o = i.detail,
        a = document.createEvent("Event");
      a.initEvent(e, r || !0, s || !0), (a.detail = o || {});
      try {
        (t.disabled = !1), t.dispatchEvent(a);
      } finally {
        t.disabled = n;
      }
      return a;
    }
    function o(t) {
      return Array.isArray(t)
        ? t
        : Array.from
        ? Array.from(t)
        : [].slice.call(t);
    }
    function a(t, e) {
      if (t && "function" == typeof t[e]) {
        for (
          var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), r = 2;
          r < i;
          r++
        )
          n[r - 2] = arguments[r];
        return t[e].apply(t, n);
      }
    }
    function l() {
      O ||
        ((O = !0),
        document.addEventListener("click", u, !0),
        document.addEventListener("submit", h),
        document.addEventListener("ajax:before", c));
    }
    function u(t) {
      var e = t.target;
      ("INPUT" != e.tagName && "BUTTON" != e.tagName) ||
        "submit" != e.type ||
        !e.form ||
        R.set(e.form, e);
    }
    function h(t) {
      p(t);
    }
    function c(t) {
      "FORM" == t.target.tagName && p(t);
    }
    function p(t) {
      var e = t.target;
      if (e.hasAttribute(A)) t.preventDefault();
      else {
        var i = new P(e),
          n = i.inputs;
        n.length &&
          (t.preventDefault(),
          e.setAttribute(A, ""),
          n.forEach(f),
          i.start(function(t) {
            e.removeAttribute(A), t ? n.forEach(m) : d(e);
          }));
      }
    }
    function d(t) {
      var e = R.get(t) || r(t, "input[type=submit], button[type=submit]");
      if (e) {
        var i = e.disabled;
        (e.disabled = !1), e.focus(), e.click(), (e.disabled = i);
      } else ((e = document.createElement("input")).type = "submit"), (e.style.display = "none"), t.appendChild(e), e.click(), t.removeChild(e);
      R["delete"](t);
    }
    function f(t) {
      t.disabled = !0;
    }
    function m(t) {
      t.disabled = !1;
    }
    function g() {
      window.ActiveStorage && l();
    }
    var y = e(function(t) {
        var e;
        (e = function(t) {
          function e(t, e) {
            var i = t[0],
              n = t[1],
              r = t[2],
              s = t[3];
            (n =
              ((((n +=
                ((((r =
                  ((((r +=
                    ((((s =
                      ((((s +=
                        ((((i =
                          ((((i +=
                            (((n & r) | (~n & s)) + e[0] - 680876936) | 0) <<
                            7) |
                            (i >>> 25)) +
                            n) |
                          0) &
                          n) |
                          (~i & r)) +
                          e[1] -
                          389564586) |
                        0) <<
                        12) |
                        (s >>> 20)) +
                        i) |
                      0) &
                      i) |
                      (~s & n)) +
                      e[2] +
                      606105819) |
                    0) <<
                    17) |
                    (r >>> 15)) +
                    s) |
                  0) &
                  s) |
                  (~r & i)) +
                  e[3] -
                  1044525330) |
                0) <<
                22) |
                (n >>> 10)) +
                r) |
              0),
              (n =
                ((((n +=
                  ((((r =
                    ((((r +=
                      ((((s =
                        ((((s +=
                          ((((i =
                            ((((i +=
                              (((n & r) | (~n & s)) + e[4] - 176418897) | 0) <<
                              7) |
                              (i >>> 25)) +
                              n) |
                            0) &
                            n) |
                            (~i & r)) +
                            e[5] +
                            1200080426) |
                          0) <<
                          12) |
                          (s >>> 20)) +
                          i) |
                        0) &
                        i) |
                        (~s & n)) +
                        e[6] -
                        1473231341) |
                      0) <<
                      17) |
                      (r >>> 15)) +
                      s) |
                    0) &
                    s) |
                    (~r & i)) +
                    e[7] -
                    45705983) |
                  0) <<
                  22) |
                  (n >>> 10)) +
                  r) |
                0),
              (n =
                ((((n +=
                  ((((r =
                    ((((r +=
                      ((((s =
                        ((((s +=
                          ((((i =
                            ((((i +=
                              (((n & r) | (~n & s)) + e[8] + 1770035416) | 0) <<
                              7) |
                              (i >>> 25)) +
                              n) |
                            0) &
                            n) |
                            (~i & r)) +
                            e[9] -
                            1958414417) |
                          0) <<
                          12) |
                          (s >>> 20)) +
                          i) |
                        0) &
                        i) |
                        (~s & n)) +
                        e[10] -
                        42063) |
                      0) <<
                      17) |
                      (r >>> 15)) +
                      s) |
                    0) &
                    s) |
                    (~r & i)) +
                    e[11] -
                    1990404162) |
                  0) <<
                  22) |
                  (n >>> 10)) +
                  r) |
                0),
              (n =
                ((((n +=
                  ((((r =
                    ((((r +=
                      ((((s =
                        ((((s +=
                          ((((i =
                            ((((i +=
                              (((n & r) | (~n & s)) + e[12] + 1804603682) |
                              0) <<
                              7) |
                              (i >>> 25)) +
                              n) |
                            0) &
                            n) |
                            (~i & r)) +
                            e[13] -
                            40341101) |
                          0) <<
                          12) |
                          (s >>> 20)) +
                          i) |
                        0) &
                        i) |
                        (~s & n)) +
                        e[14] -
                        1502002290) |
                      0) <<
                      17) |
                      (r >>> 15)) +
                      s) |
                    0) &
                    s) |
                    (~r & i)) +
                    e[15] +
                    1236535329) |
                  0) <<
                  22) |
                  (n >>> 10)) +
                  r) |
                0),
              (n =
                ((((n +=
                  ((((r =
                    ((((r +=
                      ((((s =
                        ((((s +=
                          ((((i =
                            ((((i +=
                              (((n & s) | (r & ~s)) + e[1] - 165796510) | 0) <<
                              5) |
                              (i >>> 27)) +
                              n) |
                            0) &
                            r) |
                            (n & ~r)) +
                            e[6] -
                            1069501632) |
                          0) <<
                          9) |
                          (s >>> 23)) +
                          i) |
                        0) &
                        n) |
                        (i & ~n)) +
                        e[11] +
                        643717713) |
                      0) <<
                      14) |
                      (r >>> 18)) +
                      s) |
                    0) &
                    i) |
                    (s & ~i)) +
                    e[0] -
                    373897302) |
                  0) <<
                  20) |
                  (n >>> 12)) +
                  r) |
                0),
              (n =
                ((((n +=
                  ((((r =
                    ((((r +=
                      ((((s =
                        ((((s +=
                          ((((i =
                            ((((i +=
                              (((n & s) | (r & ~s)) + e[5] - 701558691) | 0) <<
                              5) |
                              (i >>> 27)) +
                              n) |
                            0) &
                            r) |
                            (n & ~r)) +
                            e[10] +
                            38016083) |
                          0) <<
                          9) |
                          (s >>> 23)) +
                          i) |
                        0) &
                        n) |
                        (i & ~n)) +
                        e[15] -
                        660478335) |
                      0) <<
                      14) |
                      (r >>> 18)) +
                      s) |
                    0) &
                    i) |
                    (s & ~i)) +
                    e[4] -
                    405537848) |
                  0) <<
                  20) |
                  (n >>> 12)) +
                  r) |
                0),
              (n =
                ((((n +=
                  ((((r =
                    ((((r +=
                      ((((s =
                        ((((s +=
                          ((((i =
                            ((((i +=
                              (((n & s) | (r & ~s)) + e[9] + 568446438) | 0) <<
                              5) |
                              (i >>> 27)) +
                              n) |
                            0) &
                            r) |
                            (n & ~r)) +
                            e[14] -
                            1019803690) |
                          0) <<
                          9) |
                          (s >>> 23)) +
                          i) |
                        0) &
                        n) |
                        (i & ~n)) +
                        e[3] -
                        187363961) |
                      0) <<
                      14) |
                      (r >>> 18)) +
                      s) |
                    0) &
                    i) |
                    (s & ~i)) +
                    e[8] +
                    1163531501) |
                  0) <<
                  20) |
                  (n >>> 12)) +
                  r) |
                0),
              (n =
                ((((n +=
                  ((((r =
                    ((((r +=
                      ((((s =
                        ((((s +=
                          ((((i =
                            ((((i +=
                              (((n & s) | (r & ~s)) + e[13] - 1444681467) |
                              0) <<
                              5) |
                              (i >>> 27)) +
                              n) |
                            0) &
                            r) |
                            (n & ~r)) +
                            e[2] -
                            51403784) |
                          0) <<
                          9) |
                          (s >>> 23)) +
                          i) |
                        0) &
                        n) |
                        (i & ~n)) +
                        e[7] +
                        1735328473) |
                      0) <<
                      14) |
                      (r >>> 18)) +
                      s) |
                    0) &
                    i) |
                    (s & ~i)) +
                    e[12] -
                    1926607734) |
                  0) <<
                  20) |
                  (n >>> 12)) +
                  r) |
                0),
              (n =
                ((((n +=
                  (((r =
                    ((((r +=
                      (((s =
                        ((((s +=
                          (((i =
                            ((((i += ((n ^ r ^ s) + e[5] - 378558) | 0) << 4) |
                              (i >>> 28)) +
                              n) |
                            0) ^
                            n ^
                            r) +
                            e[8] -
                            2022574463) |
                          0) <<
                          11) |
                          (s >>> 21)) +
                          i) |
                        0) ^
                        i ^
                        n) +
                        e[11] +
                        1839030562) |
                      0) <<
                      16) |
                      (r >>> 16)) +
                      s) |
                    0) ^
                    s ^
                    i) +
                    e[14] -
                    35309556) |
                  0) <<
                  23) |
                  (n >>> 9)) +
                  r) |
                0),
              (n =
                ((((n +=
                  (((r =
                    ((((r +=
                      (((s =
                        ((((s +=
                          (((i =
                            ((((i += ((n ^ r ^ s) + e[1] - 1530992060) | 0) <<
                              4) |
                              (i >>> 28)) +
                              n) |
                            0) ^
                            n ^
                            r) +
                            e[4] +
                            1272893353) |
                          0) <<
                          11) |
                          (s >>> 21)) +
                          i) |
                        0) ^
                        i ^
                        n) +
                        e[7] -
                        155497632) |
                      0) <<
                      16) |
                      (r >>> 16)) +
                      s) |
                    0) ^
                    s ^
                    i) +
                    e[10] -
                    1094730640) |
                  0) <<
                  23) |
                  (n >>> 9)) +
                  r) |
                0),
              (n =
                ((((n +=
                  (((r =
                    ((((r +=
                      (((s =
                        ((((s +=
                          (((i =
                            ((((i += ((n ^ r ^ s) + e[13] + 681279174) | 0) <<
                              4) |
                              (i >>> 28)) +
                              n) |
                            0) ^
                            n ^
                            r) +
                            e[0] -
                            358537222) |
                          0) <<
                          11) |
                          (s >>> 21)) +
                          i) |
                        0) ^
                        i ^
                        n) +
                        e[3] -
                        722521979) |
                      0) <<
                      16) |
                      (r >>> 16)) +
                      s) |
                    0) ^
                    s ^
                    i) +
                    e[6] +
                    76029189) |
                  0) <<
                  23) |
                  (n >>> 9)) +
                  r) |
                0),
              (n =
                ((((n +=
                  (((r =
                    ((((r +=
                      (((s =
                        ((((s +=
                          (((i =
                            ((((i += ((n ^ r ^ s) + e[9] - 640364487) | 0) <<
                              4) |
                              (i >>> 28)) +
                              n) |
                            0) ^
                            n ^
                            r) +
                            e[12] -
                            421815835) |
                          0) <<
                          11) |
                          (s >>> 21)) +
                          i) |
                        0) ^
                        i ^
                        n) +
                        e[15] +
                        530742520) |
                      0) <<
                      16) |
                      (r >>> 16)) +
                      s) |
                    0) ^
                    s ^
                    i) +
                    e[2] -
                    995338651) |
                  0) <<
                  23) |
                  (n >>> 9)) +
                  r) |
                0),
              (n =
                ((((n +=
                  (((s =
                    ((((s +=
                      ((n ^
                        ((i =
                          ((((i += ((r ^ (n | ~s)) + e[0] - 198630844) | 0) <<
                            6) |
                            (i >>> 26)) +
                            n) |
                          0) |
                          ~r)) +
                        e[7] +
                        1126891415) |
                      0) <<
                      10) |
                      (s >>> 22)) +
                      i) |
                    0) ^
                    ((r =
                      ((((r += ((i ^ (s | ~n)) + e[14] - 1416354905) | 0) <<
                        15) |
                        (r >>> 17)) +
                        s) |
                      0) |
                      ~i)) +
                    e[5] -
                    57434055) |
                  0) <<
                  21) |
                  (n >>> 11)) +
                  r) |
                0),
              (n =
                ((((n +=
                  (((s =
                    ((((s +=
                      ((n ^
                        ((i =
                          ((((i += ((r ^ (n | ~s)) + e[12] + 1700485571) | 0) <<
                            6) |
                            (i >>> 26)) +
                            n) |
                          0) |
                          ~r)) +
                        e[3] -
                        1894986606) |
                      0) <<
                      10) |
                      (s >>> 22)) +
                      i) |
                    0) ^
                    ((r =
                      ((((r += ((i ^ (s | ~n)) + e[10] - 1051523) | 0) << 15) |
                        (r >>> 17)) +
                        s) |
                      0) |
                      ~i)) +
                    e[1] -
                    2054922799) |
                  0) <<
                  21) |
                  (n >>> 11)) +
                  r) |
                0),
              (n =
                ((((n +=
                  (((s =
                    ((((s +=
                      ((n ^
                        ((i =
                          ((((i += ((r ^ (n | ~s)) + e[8] + 1873313359) | 0) <<
                            6) |
                            (i >>> 26)) +
                            n) |
                          0) |
                          ~r)) +
                        e[15] -
                        30611744) |
                      0) <<
                      10) |
                      (s >>> 22)) +
                      i) |
                    0) ^
                    ((r =
                      ((((r += ((i ^ (s | ~n)) + e[6] - 1560198380) | 0) <<
                        15) |
                        (r >>> 17)) +
                        s) |
                      0) |
                      ~i)) +
                    e[13] +
                    1309151649) |
                  0) <<
                  21) |
                  (n >>> 11)) +
                  r) |
                0),
              (n =
                ((((n +=
                  (((s =
                    ((((s +=
                      ((n ^
                        ((i =
                          ((((i += ((r ^ (n | ~s)) + e[4] - 145523070) | 0) <<
                            6) |
                            (i >>> 26)) +
                            n) |
                          0) |
                          ~r)) +
                        e[11] -
                        1120210379) |
                      0) <<
                      10) |
                      (s >>> 22)) +
                      i) |
                    0) ^
                    ((r =
                      ((((r += ((i ^ (s | ~n)) + e[2] + 718787259) | 0) << 15) |
                        (r >>> 17)) +
                        s) |
                      0) |
                      ~i)) +
                    e[9] -
                    343485551) |
                  0) <<
                  21) |
                  (n >>> 11)) +
                  r) |
                0),
              (t[0] = (i + t[0]) | 0),
              (t[1] = (n + t[1]) | 0),
              (t[2] = (r + t[2]) | 0),
              (t[3] = (s + t[3]) | 0);
          }
          function i(t) {
            var e,
              i = [];
            for (e = 0; e < 64; e += 4)
              i[e >> 2] =
                t.charCodeAt(e) +
                (t.charCodeAt(e + 1) << 8) +
                (t.charCodeAt(e + 2) << 16) +
                (t.charCodeAt(e + 3) << 24);
            return i;
          }
          function n(t) {
            var e,
              i = [];
            for (e = 0; e < 64; e += 4)
              i[e >> 2] =
                t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
            return i;
          }
          function r(t) {
            var n,
              r,
              s,
              o,
              a,
              l,
              u = t.length,
              h = [1732584193, -271733879, -1732584194, 271733878];
            for (n = 64; n <= u; n += 64) e(h, i(t.substring(n - 64, n)));
            for (
              r = (t = t.substring(n - 64)).length,
                s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                n = 0;
              n < r;
              n += 1
            )
              s[n >> 2] |= t.charCodeAt(n) << (n % 4 << 3);
            if (((s[n >> 2] |= 128 << (n % 4 << 3)), n > 55))
              for (e(h, s), n = 0; n < 16; n += 1) s[n] = 0;
            return (
              (o = (o = 8 * u).toString(16).match(/(.*?)(.{0,8})$/)),
              (a = parseInt(o[2], 16)),
              (l = parseInt(o[1], 16) || 0),
              (s[14] = a),
              (s[15] = l),
              e(h, s),
              h
            );
          }
          function s(t) {
            var i,
              r,
              s,
              o,
              a,
              l,
              u = t.length,
              h = [1732584193, -271733879, -1732584194, 271733878];
            for (i = 64; i <= u; i += 64) e(h, n(t.subarray(i - 64, i)));
            for (
              r = (t = i - 64 < u ? t.subarray(i - 64) : new Uint8Array(0))
                .length,
                s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                i = 0;
              i < r;
              i += 1
            )
              s[i >> 2] |= t[i] << (i % 4 << 3);
            if (((s[i >> 2] |= 128 << (i % 4 << 3)), i > 55))
              for (e(h, s), i = 0; i < 16; i += 1) s[i] = 0;
            return (
              (o = (o = 8 * u).toString(16).match(/(.*?)(.{0,8})$/)),
              (a = parseInt(o[2], 16)),
              (l = parseInt(o[1], 16) || 0),
              (s[14] = a),
              (s[15] = l),
              e(h, s),
              h
            );
          }
          function o(t) {
            var e,
              i = "";
            for (e = 0; e < 4; e += 1)
              i += f[(t >> (8 * e + 4)) & 15] + f[(t >> (8 * e)) & 15];
            return i;
          }
          function a(t) {
            var e;
            for (e = 0; e < t.length; e += 1) t[e] = o(t[e]);
            return t.join("");
          }
          function l(t) {
            return (
              /[\u0080-\uFFFF]/.test(t) &&
                (t = unescape(encodeURIComponent(t))),
              t
            );
          }
          function u(t, e) {
            var i,
              n = t.length,
              r = new ArrayBuffer(n),
              s = new Uint8Array(r);
            for (i = 0; i < n; i += 1) s[i] = t.charCodeAt(i);
            return e ? s : r;
          }
          function h(t) {
            return String.fromCharCode.apply(null, new Uint8Array(t));
          }
          function c(t, e, i) {
            var n = new Uint8Array(t.byteLength + e.byteLength);
            return (
              n.set(new Uint8Array(t)),
              n.set(new Uint8Array(e), t.byteLength),
              i ? n : n.buffer
            );
          }
          function p(t) {
            var e,
              i = [],
              n = t.length;
            for (e = 0; e < n - 1; e += 2) i.push(parseInt(t.substr(e, 2), 16));
            return String.fromCharCode.apply(String, i);
          }
          function d() {
            this.reset();
          }
          var f = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
          ];
          return (
            a(r("hello")),
            "undefined" == typeof ArrayBuffer ||
              ArrayBuffer.prototype.slice ||
              (function() {
                function e(t, e) {
                  return (t = 0 | t || 0) < 0
                    ? Math.max(t + e, 0)
                    : Math.min(t, e);
                }
                ArrayBuffer.prototype.slice = function(i, n) {
                  var r,
                    s,
                    o,
                    a,
                    l = this.byteLength,
                    u = e(i, l),
                    h = l;
                  return (
                    n !== t && (h = e(n, l)),
                    u > h
                      ? new ArrayBuffer(0)
                      : ((r = h - u),
                        (s = new ArrayBuffer(r)),
                        (o = new Uint8Array(s)),
                        (a = new Uint8Array(this, u, r)),
                        o.set(a),
                        s)
                  );
                };
              })(),
            (d.prototype.append = function(t) {
              return this.appendBinary(l(t)), this;
            }),
            (d.prototype.appendBinary = function(t) {
              (this._buff += t), (this._length += t.length);
              var n,
                r = this._buff.length;
              for (n = 64; n <= r; n += 64)
                e(this._hash, i(this._buff.substring(n - 64, n)));
              return (this._buff = this._buff.substring(n - 64)), this;
            }),
            (d.prototype.end = function(t) {
              var e,
                i,
                n = this._buff,
                r = n.length,
                s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (e = 0; e < r; e += 1)
                s[e >> 2] |= n.charCodeAt(e) << (e % 4 << 3);
              return (
                this._finish(s, r),
                (i = a(this._hash)),
                t && (i = p(i)),
                this.reset(),
                i
              );
            }),
            (d.prototype.reset = function() {
              return (
                (this._buff = ""),
                (this._length = 0),
                (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
                this
              );
            }),
            (d.prototype.getState = function() {
              return {buff: this._buff, length: this._length, hash: this._hash};
            }),
            (d.prototype.setState = function(t) {
              return (
                (this._buff = t.buff),
                (this._length = t.length),
                (this._hash = t.hash),
                this
              );
            }),
            (d.prototype.destroy = function() {
              delete this._hash, delete this._buff, delete this._length;
            }),
            (d.prototype._finish = function(t, i) {
              var n,
                r,
                s,
                o = i;
              if (((t[o >> 2] |= 128 << (o % 4 << 3)), o > 55))
                for (e(this._hash, t), o = 0; o < 16; o += 1) t[o] = 0;
              (n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/)),
                (r = parseInt(n[2], 16)),
                (s = parseInt(n[1], 16) || 0),
                (t[14] = r),
                (t[15] = s),
                e(this._hash, t);
            }),
            (d.hash = function(t, e) {
              return d.hashBinary(l(t), e);
            }),
            (d.hashBinary = function(t, e) {
              var i = a(r(t));
              return e ? p(i) : i;
            }),
            (d.ArrayBuffer = function() {
              this.reset();
            }),
            (d.ArrayBuffer.prototype.append = function(t) {
              var i,
                r = c(this._buff.buffer, t, !0),
                s = r.length;
              for (this._length += t.byteLength, i = 64; i <= s; i += 64)
                e(this._hash, n(r.subarray(i - 64, i)));
              return (
                (this._buff =
                  i - 64 < s
                    ? new Uint8Array(r.buffer.slice(i - 64))
                    : new Uint8Array(0)),
                this
              );
            }),
            (d.ArrayBuffer.prototype.end = function(t) {
              var e,
                i,
                n = this._buff,
                r = n.length,
                s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (e = 0; e < r; e += 1) s[e >> 2] |= n[e] << (e % 4 << 3);
              return (
                this._finish(s, r),
                (i = a(this._hash)),
                t && (i = p(i)),
                this.reset(),
                i
              );
            }),
            (d.ArrayBuffer.prototype.reset = function() {
              return (
                (this._buff = new Uint8Array(0)),
                (this._length = 0),
                (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
                this
              );
            }),
            (d.ArrayBuffer.prototype.getState = function() {
              var t = d.prototype.getState.call(this);
              return (t.buff = h(t.buff)), t;
            }),
            (d.ArrayBuffer.prototype.setState = function(t) {
              return (
                (t.buff = u(t.buff, !0)), d.prototype.setState.call(this, t)
              );
            }),
            (d.ArrayBuffer.prototype.destroy = d.prototype.destroy),
            (d.ArrayBuffer.prototype._finish = d.prototype._finish),
            (d.ArrayBuffer.hash = function(t, e) {
              var i = a(s(new Uint8Array(t)));
              return e ? p(i) : i;
            }),
            d
          );
        }),
          (t.exports = e());
      }),
      v = function(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      },
      _ = (function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      b =
        File.prototype.slice ||
        File.prototype.mozSlice ||
        File.prototype.webkitSlice,
      w = (function() {
        function t(e) {
          v(this, t),
            (this.file = e),
            (this.chunkSize = 2097152),
            (this.chunkCount = Math.ceil(this.file.size / this.chunkSize)),
            (this.chunkIndex = 0);
        }
        return (
          _(t, null, [
            {
              key: "create",
              value: function(e, i) {
                new t(e).create(i);
              }
            }
          ]),
          _(t, [
            {
              key: "create",
              value: function(t) {
                var e = this;
                (this.callback = t),
                  (this.md5Buffer = new y.ArrayBuffer()),
                  (this.fileReader = new FileReader()),
                  this.fileReader.addEventListener("load", function(t) {
                    return e.fileReaderDidLoad(t);
                  }),
                  this.fileReader.addEventListener("error", function(t) {
                    return e.fileReaderDidError(t);
                  }),
                  this.readNextChunk();
              }
            },
            {
              key: "fileReaderDidLoad",
              value: function(t) {
                if (
                  (this.md5Buffer.append(t.target.result),
                  !this.readNextChunk())
                ) {
                  var e = this.md5Buffer.end(!0),
                    i = btoa(e);
                  this.callback(null, i);
                }
              }
            },
            {
              key: "fileReaderDidError",
              value: function() {
                this.callback("Error reading " + this.file.name);
              }
            },
            {
              key: "readNextChunk",
              value: function() {
                if (
                  this.chunkIndex < this.chunkCount ||
                  (0 == this.chunkIndex && 0 == this.chunkCount)
                ) {
                  var t = this.chunkIndex * this.chunkSize,
                    e = Math.min(t + this.chunkSize, this.file.size),
                    i = b.call(this.file, t, e);
                  return (
                    this.fileReader.readAsArrayBuffer(i), this.chunkIndex++, !0
                  );
                }
                return !1;
              }
            }
          ]),
          t
        );
      })(),
      x = (function() {
        function t(e, n, r) {
          var s = this;
          v(this, t),
            (this.file = e),
            (this.attributes = {
              filename: e.name,
              content_type: e.type,
              byte_size: e.size,
              checksum: n
            }),
            (this.xhr = new XMLHttpRequest()),
            this.xhr.open("POST", r, !0),
            (this.xhr.responseType = "json"),
            this.xhr.setRequestHeader("Content-Type", "application/json"),
            this.xhr.setRequestHeader("Accept", "application/json"),
            this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            this.xhr.setRequestHeader("X-CSRF-Token", i("csrf-token")),
            this.xhr.addEventListener("load", function(t) {
              return s.requestDidLoad(t);
            }),
            this.xhr.addEventListener("error", function(t) {
              return s.requestDidError(t);
            });
        }
        return (
          _(t, [
            {
              key: "create",
              value: function(t) {
                (this.callback = t),
                  this.xhr.send(JSON.stringify({blob: this.attributes}));
              }
            },
            {
              key: "requestDidLoad",
              value: function(t) {
                if (this.status >= 200 && this.status < 300) {
                  var e = this.response,
                    i = e.direct_upload;
                  delete e.direct_upload,
                    (this.attributes = e),
                    (this.directUploadData = i),
                    this.callback(null, this.toJSON());
                } else this.requestDidError(t);
              }
            },
            {
              key: "requestDidError",
              value: function() {
                this.callback(
                  'Error creating Blob for "' +
                    this.file.name +
                    '". Status: ' +
                    this.status
                );
              }
            },
            {
              key: "toJSON",
              value: function() {
                var t = {};
                for (var e in this.attributes) t[e] = this.attributes[e];
                return t;
              }
            },
            {
              key: "status",
              get: function() {
                return this.xhr.status;
              }
            },
            {
              key: "response",
              get: function() {
                var t = this.xhr,
                  e = t.responseType,
                  i = t.response;
                return "json" == e ? i : JSON.parse(i);
              }
            }
          ]),
          t
        );
      })(),
      T = (function() {
        function t(e) {
          var i = this;
          v(this, t), (this.blob = e), (this.file = e.file);
          var n = e.directUploadData,
            r = n.url,
            s = n.headers;
          for (var o in ((this.xhr = new XMLHttpRequest()),
          this.xhr.open("PUT", r, !0),
          (this.xhr.responseType = "text"),
          s))
            this.xhr.setRequestHeader(o, s[o]);
          this.xhr.addEventListener("load", function(t) {
            return i.requestDidLoad(t);
          }),
            this.xhr.addEventListener("error", function(t) {
              return i.requestDidError(t);
            });
        }
        return (
          _(t, [
            {
              key: "create",
              value: function(t) {
                (this.callback = t), this.xhr.send(this.file.slice());
              }
            },
            {
              key: "requestDidLoad",
              value: function(t) {
                var e = this.xhr,
                  i = e.status,
                  n = e.response;
                i >= 200 && i < 300
                  ? this.callback(null, n)
                  : this.requestDidError(t);
              }
            },
            {
              key: "requestDidError",
              value: function() {
                this.callback(
                  'Error storing "' +
                    this.file.name +
                    '". Status: ' +
                    this.xhr.status
                );
              }
            }
          ]),
          t
        );
      })(),
      C = 0,
      S = (function() {
        function t(e, i, n) {
          v(this, t),
            (this.id = ++C),
            (this.file = e),
            (this.url = i),
            (this.delegate = n);
        }
        return (
          _(t, [
            {
              key: "create",
              value: function(t) {
                var e = this;
                w.create(this.file, function(i, n) {
                  if (i) t(i);
                  else {
                    var r = new x(e.file, n, e.url);
                    a(e.delegate, "directUploadWillCreateBlobWithXHR", r.xhr),
                      r.create(function(i) {
                        if (i) t(i);
                        else {
                          var n = new T(r);
                          a(
                            e.delegate,
                            "directUploadWillStoreFileWithXHR",
                            n.xhr
                          ),
                            n.create(function(e) {
                              e ? t(e) : t(null, r.toJSON());
                            });
                        }
                      });
                  }
                });
              }
            }
          ]),
          t
        );
      })(),
      E = (function() {
        function t(e, i) {
          v(this, t),
            (this.input = e),
            (this.file = i),
            (this.directUpload = new S(this.file, this.url, this)),
            this.dispatch("initialize");
        }
        return (
          _(t, [
            {
              key: "start",
              value: function(t) {
                var e = this,
                  i = document.createElement("input");
                (i.type = "hidden"),
                  (i.name = this.input.name),
                  this.input.insertAdjacentElement("beforebegin", i),
                  this.dispatch("start"),
                  this.directUpload.create(function(n, r) {
                    n
                      ? (i.parentNode.removeChild(i), e.dispatchError(n))
                      : (i.value = r.signed_id),
                      e.dispatch("end"),
                      t(n);
                  });
              }
            },
            {
              key: "uploadRequestDidProgress",
              value: function(t) {
                var e = (t.loaded / t.total) * 100;
                e && this.dispatch("progress", {progress: e});
              }
            },
            {
              key: "dispatch",
              value: function(t) {
                var e =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
                return (
                  (e.file = this.file),
                  (e.id = this.directUpload.id),
                  s(this.input, "direct-upload:" + t, {detail: e})
                );
              }
            },
            {
              key: "dispatchError",
              value: function(t) {
                this.dispatch("error", {error: t}).defaultPrevented || alert(t);
              }
            },
            {
              key: "directUploadWillCreateBlobWithXHR",
              value: function(t) {
                this.dispatch("before-blob-request", {xhr: t});
              }
            },
            {
              key: "directUploadWillStoreFileWithXHR",
              value: function(t) {
                var e = this;
                this.dispatch("before-storage-request", {xhr: t}),
                  t.upload.addEventListener("progress", function(t) {
                    return e.uploadRequestDidProgress(t);
                  });
              }
            },
            {
              key: "url",
              get: function() {
                return this.input.getAttribute("data-direct-upload-url");
              }
            }
          ]),
          t
        );
      })(),
      k = "input[type=file][data-direct-upload-url]:not([disabled])",
      P = (function() {
        function t(e) {
          v(this, t),
            (this.form = e),
            (this.inputs = n(e, k).filter(function(t) {
              return t.files.length;
            }));
        }
        return (
          _(t, [
            {
              key: "start",
              value: function(t) {
                var e = this,
                  i = this.createDirectUploadControllers(),
                  n = function r() {
                    var n = i.shift();
                    n
                      ? n.start(function(i) {
                          i ? (t(i), e.dispatch("end")) : r();
                        })
                      : (t(), e.dispatch("end"));
                  };
                this.dispatch("start"), n();
              }
            },
            {
              key: "createDirectUploadControllers",
              value: function() {
                var t = [];
                return (
                  this.inputs.forEach(function(e) {
                    o(e.files).forEach(function(i) {
                      var n = new E(e, i);
                      t.push(n);
                    });
                  }),
                  t
                );
              }
            },
            {
              key: "dispatch",
              value: function(t) {
                var e =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
                return s(this.form, "direct-uploads:" + t, {detail: e});
              }
            }
          ]),
          t
        );
      })(),
      A = "data-direct-uploads-processing",
      R = new WeakMap(),
      O = !1;
    setTimeout(g, 1),
      (t.start = l),
      (t.DirectUpload = S),
      Object.defineProperty(t, "__esModule", {value: !0});
  }),
  /*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
  function() {
    var t = this;
    (function() {
      (function() {
        this.Turbolinks = {
          supported:
            null != window.history.pushState &&
            null != window.requestAnimationFrame &&
            null != window.addEventListener,
          visit: function(t, i) {
            return e.controller.visit(t, i);
          },
          clearCache: function() {
            return e.controller.clearCache();
          },
          setProgressBarDelay: function(t) {
            return e.controller.setProgressBarDelay(t);
          }
        };
      }.call(this));
    }.call(t));
    var e = t.Turbolinks;
    (function() {
      (function() {
        var t,
          i,
          n,
          r = [].slice;
        (e.copyObject = function(t) {
          var e, i, n;
          for (e in ((i = {}), t)) (n = t[e]), (i[e] = n);
          return i;
        }),
          (e.closest = function(e, i) {
            return t.call(e, i);
          }),
          (t = (function() {
            var t;
            return null != (t = document.documentElement.closest)
              ? t
              : function(t) {
                  var e;
                  for (e = this; e; ) {
                    if (e.nodeType === Node.ELEMENT_NODE && i.call(e, t))
                      return e;
                    e = e.parentNode;
                  }
                };
          })()),
          (e.defer = function(t) {
            return setTimeout(t, 1);
          }),
          (e.throttle = function(t) {
            var e;
            return (
              (e = null),
              function() {
                var i, n;
                return (
                  (i = 1 <= arguments.length ? r.call(arguments, 0) : []),
                  null != e
                    ? e
                    : (e = requestAnimationFrame(
                        ((n = this),
                        function() {
                          return (e = null), t.apply(n, i);
                        })
                      ))
                );
              }
            );
          }),
          (e.dispatch = function(t, e) {
            var i, r, s, o, a, l;
            return (
              (l = (a = null != e ? e : {}).target),
              (i = a.cancelable),
              (r = a.data),
              (s = document.createEvent("Events")).initEvent(t, !0, !0 === i),
              (s.data = null != r ? r : {}),
              s.cancelable &&
                !n &&
                ((o = s.preventDefault),
                (s.preventDefault = function() {
                  return (
                    this.defaultPrevented ||
                      Object.defineProperty(this, "defaultPrevented", {
                        get: function() {
                          return !0;
                        }
                      }),
                    o.call(this)
                  );
                })),
              (null != l ? l : document).dispatchEvent(s),
              s
            );
          }),
          (n = (function() {
            var t;
            return (
              (t = document.createEvent("Events")).initEvent("test", !0, !0),
              t.preventDefault(),
              t.defaultPrevented
            );
          })()),
          (e.match = function(t, e) {
            return i.call(t, e);
          }),
          (i = (function() {
            var t, e, i, n;
            return null !=
              (e =
                null !=
                (i =
                  null != (n = (t = document.documentElement).matchesSelector)
                    ? n
                    : t.webkitMatchesSelector)
                  ? i
                  : t.msMatchesSelector)
              ? e
              : t.mozMatchesSelector;
          })()),
          (e.uuid = function() {
            var t, e, i;
            for (i = "", t = e = 1; 36 >= e; t = ++e)
              i +=
                9 === t || 14 === t || 19 === t || 24 === t
                  ? "-"
                  : 15 === t
                  ? "4"
                  : 20 === t
                  ? (Math.floor(4 * Math.random()) + 8).toString(16)
                  : Math.floor(15 * Math.random()).toString(16);
            return i;
          });
      }.call(this),
        function() {
          e.Location = (function() {
            function t(t) {
              var e, i;
              null == t && (t = ""),
                ((i = document.createElement("a")).href = t.toString()),
                (this.absoluteURL = i.href),
                2 > (e = i.hash.length)
                  ? (this.requestURL = this.absoluteURL)
                  : ((this.requestURL = this.absoluteURL.slice(0, -e)),
                    (this.anchor = i.hash.slice(1)));
            }
            var e, i, n, r;
            return (
              (t.wrap = function(t) {
                return t instanceof this ? t : new this(t);
              }),
              (t.prototype.getOrigin = function() {
                return this.absoluteURL.split("/", 3).join("/");
              }),
              (t.prototype.getPath = function() {
                var t, e;
                return null !=
                  (t =
                    null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))
                      ? e[1]
                      : void 0)
                  ? t
                  : "/";
              }),
              (t.prototype.getPathComponents = function() {
                return this.getPath()
                  .split("/")
                  .slice(1);
              }),
              (t.prototype.getLastPathComponent = function() {
                return this.getPathComponents().slice(-1)[0];
              }),
              (t.prototype.getExtension = function() {
                var t, e;
                return null !=
                  (t =
                    null != (e = this.getLastPathComponent().match(/\.[^.]*$/))
                      ? e[0]
                      : void 0)
                  ? t
                  : "";
              }),
              (t.prototype.isHTML = function() {
                return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
              }),
              (t.prototype.isPrefixedBy = function(t) {
                var e;
                return (e = i(t)), this.isEqualTo(t) || r(this.absoluteURL, e);
              }),
              (t.prototype.isEqualTo = function(t) {
                return (
                  this.absoluteURL === (null != t ? t.absoluteURL : void 0)
                );
              }),
              (t.prototype.toCacheKey = function() {
                return this.requestURL;
              }),
              (t.prototype.toJSON = function() {
                return this.absoluteURL;
              }),
              (t.prototype.toString = function() {
                return this.absoluteURL;
              }),
              (t.prototype.valueOf = function() {
                return this.absoluteURL;
              }),
              (i = function(t) {
                return e(t.getOrigin() + t.getPath());
              }),
              (e = function(t) {
                return n(t, "/") ? t : t + "/";
              }),
              (r = function(t, e) {
                return t.slice(0, e.length) === e;
              }),
              (n = function(t, e) {
                return t.slice(-e.length) === e;
              }),
              t
            );
          })();
        }.call(this),
        function() {
          var t = function(t, e) {
            return function() {
              return t.apply(e, arguments);
            };
          };
          e.HttpRequest = (function() {
            function i(i, n, r) {
              (this.delegate = i),
                (this.requestCanceled = t(this.requestCanceled, this)),
                (this.requestTimedOut = t(this.requestTimedOut, this)),
                (this.requestFailed = t(this.requestFailed, this)),
                (this.requestLoaded = t(this.requestLoaded, this)),
                (this.requestProgressed = t(this.requestProgressed, this)),
                (this.url = e.Location.wrap(n).requestURL),
                (this.referrer = e.Location.wrap(r).absoluteURL),
                this.createXHR();
            }
            return (
              (i.NETWORK_FAILURE = 0),
              (i.TIMEOUT_FAILURE = -1),
              (i.timeout = 60),
              (i.prototype.send = function() {
                var t;
                return this.xhr && !this.sent
                  ? (this.notifyApplicationBeforeRequestStart(),
                    this.setProgress(0),
                    this.xhr.send(),
                    (this.sent = !0),
                    "function" == typeof (t = this.delegate).requestStarted
                      ? t.requestStarted()
                      : void 0)
                  : void 0;
              }),
              (i.prototype.cancel = function() {
                return this.xhr && this.sent ? this.xhr.abort() : void 0;
              }),
              (i.prototype.requestProgressed = function(t) {
                return t.lengthComputable
                  ? this.setProgress(t.loaded / t.total)
                  : void 0;
              }),
              (i.prototype.requestLoaded = function() {
                return this.endRequest(
                  ((t = this),
                  function() {
                    var e;
                    return 200 <= (e = t.xhr.status) && 300 > e
                      ? t.delegate.requestCompletedWithResponse(
                          t.xhr.responseText,
                          t.xhr.getResponseHeader("Turbolinks-Location")
                        )
                      : ((t.failed = !0),
                        t.delegate.requestFailedWithStatusCode(
                          t.xhr.status,
                          t.xhr.responseText
                        ));
                  })
                );
                var t;
              }),
              (i.prototype.requestFailed = function() {
                return this.endRequest(
                  ((t = this),
                  function() {
                    return (
                      (t.failed = !0),
                      t.delegate.requestFailedWithStatusCode(
                        t.constructor.NETWORK_FAILURE
                      )
                    );
                  })
                );
                var t;
              }),
              (i.prototype.requestTimedOut = function() {
                return this.endRequest(
                  ((t = this),
                  function() {
                    return (
                      (t.failed = !0),
                      t.delegate.requestFailedWithStatusCode(
                        t.constructor.TIMEOUT_FAILURE
                      )
                    );
                  })
                );
                var t;
              }),
              (i.prototype.requestCanceled = function() {
                return this.endRequest();
              }),
              (i.prototype.notifyApplicationBeforeRequestStart = function() {
                return e.dispatch("turbolinks:request-start", {
                  data: {url: this.url, xhr: this.xhr}
                });
              }),
              (i.prototype.notifyApplicationAfterRequestEnd = function() {
                return e.dispatch("turbolinks:request-end", {
                  data: {url: this.url, xhr: this.xhr}
                });
              }),
              (i.prototype.createXHR = function() {
                return (
                  (this.xhr = new XMLHttpRequest()),
                  this.xhr.open("GET", this.url, !0),
                  (this.xhr.timeout = 1e3 * this.constructor.timeout),
                  this.xhr.setRequestHeader(
                    "Accept",
                    "text/html, application/xhtml+xml"
                  ),
                  this.xhr.setRequestHeader(
                    "Turbolinks-Referrer",
                    this.referrer
                  ),
                  (this.xhr.onprogress = this.requestProgressed),
                  (this.xhr.onload = this.requestLoaded),
                  (this.xhr.onerror = this.requestFailed),
                  (this.xhr.ontimeout = this.requestTimedOut),
                  (this.xhr.onabort = this.requestCanceled)
                );
              }),
              (i.prototype.endRequest = function(t) {
                return this.xhr
                  ? (this.notifyApplicationAfterRequestEnd(),
                    null != t && t.call(this),
                    this.destroy())
                  : void 0;
              }),
              (i.prototype.setProgress = function(t) {
                var e;
                return (
                  (this.progress = t),
                  "function" == typeof (e = this.delegate).requestProgressed
                    ? e.requestProgressed(this.progress)
                    : void 0
                );
              }),
              (i.prototype.destroy = function() {
                var t;
                return (
                  this.setProgress(1),
                  "function" == typeof (t = this.delegate).requestFinished &&
                    t.requestFinished(),
                  (this.delegate = null),
                  (this.xhr = null)
                );
              }),
              i
            );
          })();
        }.call(this),
        function() {
          var t = function(t, e) {
            return function() {
              return t.apply(e, arguments);
            };
          };
          e.ProgressBar = (function() {
            function e() {
              (this.trickle = t(this.trickle, this)),
                (this.stylesheetElement = this.createStylesheetElement()),
                (this.progressElement = this.createProgressElement());
            }
            var i;
            return (
              (i = 300),
              (e.defaultCSS =
                ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " +
                i +
                "ms ease-out, opacity " +
                i / 2 +
                "ms " +
                i / 2 +
                "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}"),
              (e.prototype.show = function() {
                return this.visible
                  ? void 0
                  : ((this.visible = !0),
                    this.installStylesheetElement(),
                    this.installProgressElement(),
                    this.startTrickling());
              }),
              (e.prototype.hide = function() {
                return this.visible && !this.hiding
                  ? ((this.hiding = !0),
                    this.fadeProgressElement(
                      ((t = this),
                      function() {
                        return (
                          t.uninstallProgressElement(),
                          t.stopTrickling(),
                          (t.visible = !1),
                          (t.hiding = !1)
                        );
                      })
                    ))
                  : void 0;
                var t;
              }),
              (e.prototype.setValue = function(t) {
                return (this.value = t), this.refresh();
              }),
              (e.prototype.installStylesheetElement = function() {
                return document.head.insertBefore(
                  this.stylesheetElement,
                  document.head.firstChild
                );
              }),
              (e.prototype.installProgressElement = function() {
                return (
                  (this.progressElement.style.width = 0),
                  (this.progressElement.style.opacity = 1),
                  document.documentElement.insertBefore(
                    this.progressElement,
                    document.body
                  ),
                  this.refresh()
                );
              }),
              (e.prototype.fadeProgressElement = function(t) {
                return (
                  (this.progressElement.style.opacity = 0),
                  setTimeout(t, 1.5 * i)
                );
              }),
              (e.prototype.uninstallProgressElement = function() {
                return this.progressElement.parentNode
                  ? document.documentElement.removeChild(this.progressElement)
                  : void 0;
              }),
              (e.prototype.startTrickling = function() {
                return null != this.trickleInterval
                  ? this.trickleInterval
                  : (this.trickleInterval = setInterval(this.trickle, i));
              }),
              (e.prototype.stopTrickling = function() {
                return (
                  clearInterval(this.trickleInterval),
                  (this.trickleInterval = null)
                );
              }),
              (e.prototype.trickle = function() {
                return this.setValue(this.value + Math.random() / 100);
              }),
              (e.prototype.refresh = function() {
                return requestAnimationFrame(
                  ((t = this),
                  function() {
                    return (t.progressElement.style.width =
                      10 + 90 * t.value + "%");
                  })
                );
                var t;
              }),
              (e.prototype.createStylesheetElement = function() {
                var t;
                return (
                  ((t = document.createElement("style")).type = "text/css"),
                  (t.textContent = this.constructor.defaultCSS),
                  t
                );
              }),
              (e.prototype.createProgressElement = function() {
                var t;
                return (
                  ((t = document.createElement("div")).className =
                    "turbolinks-progress-bar"),
                  t
                );
              }),
              e
            );
          })();
        }.call(this),
        function() {
          var t = function(t, e) {
            return function() {
              return t.apply(e, arguments);
            };
          };
          e.BrowserAdapter = (function() {
            function i(i) {
              (this.controller = i),
                (this.showProgressBar = t(this.showProgressBar, this)),
                (this.progressBar = new e.ProgressBar());
            }
            var n, r, s;
            return (
              (s = e.HttpRequest),
              (n = s.NETWORK_FAILURE),
              (r = s.TIMEOUT_FAILURE),
              (i.prototype.visitProposedToLocationWithAction = function(t, e) {
                return this.controller.startVisitToLocationWithAction(t, e);
              }),
              (i.prototype.visitStarted = function(t) {
                return (
                  t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
                );
              }),
              (i.prototype.visitRequestStarted = function(t) {
                return (
                  this.progressBar.setValue(0),
                  t.hasCachedSnapshot() || "restore" !== t.action
                    ? this.showProgressBarAfterDelay()
                    : this.showProgressBar()
                );
              }),
              (i.prototype.visitRequestProgressed = function(t) {
                return this.progressBar.setValue(t.progress);
              }),
              (i.prototype.visitRequestCompleted = function(t) {
                return t.loadResponse();
              }),
              (i.prototype.visitRequestFailedWithStatusCode = function(t, e) {
                switch (e) {
                  case n:
                  case r:
                    return this.reload();
                  default:
                    return t.loadResponse();
                }
              }),
              (i.prototype.visitRequestFinished = function() {
                return this.hideProgressBar();
              }),
              (i.prototype.visitCompleted = function(t) {
                return t.followRedirect();
              }),
              (i.prototype.pageInvalidated = function() {
                return this.reload();
              }),
              (i.prototype.showProgressBarAfterDelay = function() {
                return (this.progressBarTimeout = setTimeout(
                  this.showProgressBar,
                  this.controller.progressBarDelay
                ));
              }),
              (i.prototype.showProgressBar = function() {
                return this.progressBar.show();
              }),
              (i.prototype.hideProgressBar = function() {
                return (
                  this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                );
              }),
              (i.prototype.reload = function() {
                return window.location.reload();
              }),
              i
            );
          })();
        }.call(this),
        function() {
          var t = function(t, e) {
            return function() {
              return t.apply(e, arguments);
            };
          };
          e.History = (function() {
            function i(e) {
              (this.delegate = e),
                (this.onPageLoad = t(this.onPageLoad, this)),
                (this.onPopState = t(this.onPopState, this));
            }
            return (
              (i.prototype.start = function() {
                return this.started
                  ? void 0
                  : (addEventListener("popstate", this.onPopState, !1),
                    addEventListener("load", this.onPageLoad, !1),
                    (this.started = !0));
              }),
              (i.prototype.stop = function() {
                return this.started
                  ? (removeEventListener("popstate", this.onPopState, !1),
                    removeEventListener("load", this.onPageLoad, !1),
                    (this.started = !1))
                  : void 0;
              }),
              (i.prototype.push = function(t, i) {
                return (t = e.Location.wrap(t)), this.update("push", t, i);
              }),
              (i.prototype.replace = function(t, i) {
                return (t = e.Location.wrap(t)), this.update("replace", t, i);
              }),
              (i.prototype.onPopState = function(t) {
                var i, n, r, s;
                return this.shouldHandlePopState() &&
                  (s = null != (n = t.state) ? n.turbolinks : void 0)
                  ? ((i = e.Location.wrap(window.location)),
                    (r = s.restorationIdentifier),
                    this.delegate.historyPoppedToLocationWithRestorationIdentifier(
                      i,
                      r
                    ))
                  : void 0;
              }),
              (i.prototype.onPageLoad = function() {
                return e.defer(
                  (function(t) {
                    return function() {
                      return (t.pageLoaded = !0);
                    };
                  })(this)
                );
              }),
              (i.prototype.shouldHandlePopState = function() {
                return this.pageIsLoaded();
              }),
              (i.prototype.pageIsLoaded = function() {
                return this.pageLoaded || "complete" === document.readyState;
              }),
              (i.prototype.update = function(t, e, i) {
                var n;
                return (
                  (n = {turbolinks: {restorationIdentifier: i}}),
                  history[t + "State"](n, null, e)
                );
              }),
              i
            );
          })();
        }.call(this),
        function() {
          e.HeadDetails = (function() {
            function t(t) {
              var e, i, n, o, a;
              for (this.elements = {}, i = 0, o = t.length; o > i; i++)
                (a = t[i]).nodeType === Node.ELEMENT_NODE &&
                  ((n = a.outerHTML),
                  (null != (e = this.elements)[n]
                    ? e[n]
                    : (e[n] = {type: s(a), tracked: r(a), elements: []})
                  ).elements.push(a));
            }
            var e, i, n, r, s;
            return (
              (t.fromHeadElement = function(t) {
                var e;
                return new this(
                  null != (e = null != t ? t.childNodes : void 0) ? e : []
                );
              }),
              (t.prototype.hasElementWithKey = function(t) {
                return t in this.elements;
              }),
              (t.prototype.getTrackedElementSignature = function() {
                var t;
                return function() {
                  var e, i;
                  for (t in ((i = []), (e = this.elements)))
                    e[t].tracked && i.push(t);
                  return i;
                }
                  .call(this)
                  .join("");
              }),
              (t.prototype.getScriptElementsNotInDetails = function(t) {
                return this.getElementsMatchingTypeNotInDetails("script", t);
              }),
              (t.prototype.getStylesheetElementsNotInDetails = function(t) {
                return this.getElementsMatchingTypeNotInDetails(
                  "stylesheet",
                  t
                );
              }),
              (t.prototype.getElementsMatchingTypeNotInDetails = function(
                t,
                e
              ) {
                var i, n, r, s, o, a;
                for (n in ((o = []), (r = this.elements)))
                  (a = (s = r[n]).type),
                    (i = s.elements),
                    a !== t || e.hasElementWithKey(n) || o.push(i[0]);
                return o;
              }),
              (t.prototype.getProvisionalElements = function() {
                var t, e, i, n, r, s, o;
                for (e in ((i = []), (n = this.elements)))
                  (o = (r = n[e]).type),
                    (s = r.tracked),
                    (t = r.elements),
                    null != o || s
                      ? t.length > 1 && i.push.apply(i, t.slice(1))
                      : i.push.apply(i, t);
                return i;
              }),
              (t.prototype.getMetaValue = function(t) {
                var e;
                return null != (e = this.findMetaElementByName(t))
                  ? e.getAttribute("content")
                  : void 0;
              }),
              (t.prototype.findMetaElementByName = function(t) {
                var i, n, r, s;
                for (r in ((i = void 0), (s = this.elements)))
                  (n = s[r].elements), e(n[0], t) && (i = n[0]);
                return i;
              }),
              (s = function(t) {
                return i(t) ? "script" : n(t) ? "stylesheet" : void 0;
              }),
              (r = function(t) {
                return "reload" === t.getAttribute("data-turbolinks-track");
              }),
              (i = function(t) {
                return "script" === t.tagName.toLowerCase();
              }),
              (n = function(t) {
                var e;
                return (
                  "style" === (e = t.tagName.toLowerCase()) ||
                  ("link" === e && "stylesheet" === t.getAttribute("rel"))
                );
              }),
              (e = function(t, e) {
                return (
                  "meta" === t.tagName.toLowerCase() &&
                  t.getAttribute("name") === e
                );
              }),
              t
            );
          })();
        }.call(this),
        function() {
          e.Snapshot = (function() {
            function t(t, e) {
              (this.headDetails = t), (this.bodyElement = e);
            }
            return (
              (t.wrap = function(t) {
                return t instanceof this
                  ? t
                  : "string" == typeof t
                  ? this.fromHTMLString(t)
                  : this.fromHTMLElement(t);
              }),
              (t.fromHTMLString = function(t) {
                var e;
                return (
                  ((e = document.createElement("html")).innerHTML = t),
                  this.fromHTMLElement(e)
                );
              }),
              (t.fromHTMLElement = function(t) {
                var i, n, r;
                return (
                  (n = t.querySelector("head")),
                  (i =
                    null != (r = t.querySelector("body"))
                      ? r
                      : document.createElement("body")),
                  new this(e.HeadDetails.fromHeadElement(n), i)
                );
              }),
              (t.prototype.clone = function() {
                return new this.constructor(
                  this.headDetails,
                  this.bodyElement.cloneNode(!0)
                );
              }),
              (t.prototype.getRootLocation = function() {
                var t, i;
                return (
                  (i = null != (t = this.getSetting("root")) ? t : "/"),
                  new e.Location(i)
                );
              }),
              (t.prototype.getCacheControlValue = function() {
                return this.getSetting("cache-control");
              }),
              (t.prototype.getElementForAnchor = function(t) {
                try {
                  return this.bodyElement.querySelector(
                    "[id='" + t + "'], a[name='" + t + "']"
                  );
                } catch (e) {}
              }),
              (t.prototype.getPermanentElements = function() {
                return this.bodyElement.querySelectorAll(
                  "[id][data-turbolinks-permanent]"
                );
              }),
              (t.prototype.getPermanentElementById = function(t) {
                return this.bodyElement.querySelector(
                  "#" + t + "[data-turbolinks-permanent]"
                );
              }),
              (t.prototype.getPermanentElementsPresentInSnapshot = function(t) {
                var e, i, n, r, s;
                for (
                  s = [], i = 0, n = (r = this.getPermanentElements()).length;
                  n > i;
                  i++
                )
                  (e = r[i]), t.getPermanentElementById(e.id) && s.push(e);
                return s;
              }),
              (t.prototype.findFirstAutofocusableElement = function() {
                return this.bodyElement.querySelector("[autofocus]");
              }),
              (t.prototype.hasAnchor = function(t) {
                return null != this.getElementForAnchor(t);
              }),
              (t.prototype.isPreviewable = function() {
                return "no-preview" !== this.getCacheControlValue();
              }),
              (t.prototype.isCacheable = function() {
                return "no-cache" !== this.getCacheControlValue();
              }),
              (t.prototype.isVisitable = function() {
                return "reload" !== this.getSetting("visit-control");
              }),
              (t.prototype.getSetting = function(t) {
                return this.headDetails.getMetaValue("turbolinks-" + t);
              }),
              t
            );
          })();
        }.call(this),
        function() {
          var t = [].slice;
          e.Renderer = (function() {
            function e() {}
            var i;
            return (
              (e.render = function() {
                var e, i, n;
                return (
                  (i = arguments[0]),
                  (e = arguments[1]),
                  ((n = (function(t, e, i) {
                    i.prototype = t.prototype;
                    var n = new i(),
                      r = t.apply(n, e);
                    return Object(r) === r ? r : n;
                  })(
                    this,
                    3 <= arguments.length ? t.call(arguments, 2) : [],
                    function() {}
                  )).delegate = i),
                  n.render(e),
                  n
                );
              }),
              (e.prototype.renderView = function(t) {
                return (
                  this.delegate.viewWillRender(this.newBody),
                  t(),
                  this.delegate.viewRendered(this.newBody)
                );
              }),
              (e.prototype.invalidateView = function() {
                return this.delegate.viewInvalidated();
              }),
              (e.prototype.createScriptElement = function(t) {
                var e;
                return "false" === t.getAttribute("data-turbolinks-eval")
                  ? t
                  : (((e = document.createElement("script")).textContent =
                      t.textContent),
                    (e.async = !1),
                    i(e, t),
                    e);
              }),
              (i = function(t, e) {
                var i, n, r, s, o, a, l;
                for (a = [], i = 0, n = (s = e.attributes).length; n > i; i++)
                  (r = (o = s[i]).name),
                    (l = o.value),
                    a.push(t.setAttribute(r, l));
                return a;
              }),
              e
            );
          })();
        }.call(this),
        function() {
          var t,
            i,
            n = function(t, e) {
              function i() {
                this.constructor = t;
              }
              for (var n in e) r.call(e, n) && (t[n] = e[n]);
              return (
                (i.prototype = e.prototype),
                (t.prototype = new i()),
                (t.__super__ = e.prototype),
                t
              );
            },
            r = {}.hasOwnProperty;
          (e.SnapshotRenderer = (function(e) {
            function r(t, e, i) {
              (this.currentSnapshot = t),
                (this.newSnapshot = e),
                (this.isPreview = i),
                (this.currentHeadDetails = this.currentSnapshot.headDetails),
                (this.newHeadDetails = this.newSnapshot.headDetails),
                (this.currentBody = this.currentSnapshot.bodyElement),
                (this.newBody = this.newSnapshot.bodyElement);
            }
            return (
              n(r, e),
              (r.prototype.render = function(t) {
                return this.shouldRender()
                  ? (this.mergeHead(),
                    this.renderView(
                      ((e = this),
                      function() {
                        return (
                          e.replaceBody(),
                          e.isPreview || e.focusFirstAutofocusableElement(),
                          t()
                        );
                      })
                    ))
                  : this.invalidateView();
                var e;
              }),
              (r.prototype.mergeHead = function() {
                return (
                  this.copyNewHeadStylesheetElements(),
                  this.copyNewHeadScriptElements(),
                  this.removeCurrentHeadProvisionalElements(),
                  this.copyNewHeadProvisionalElements()
                );
              }),
              (r.prototype.replaceBody = function() {
                var t;
                return (
                  (t = this.relocateCurrentBodyPermanentElements()),
                  this.activateNewBodyScriptElements(),
                  this.assignNewBody(),
                  this.replacePlaceholderElementsWithClonedPermanentElements(t)
                );
              }),
              (r.prototype.shouldRender = function() {
                return (
                  this.newSnapshot.isVisitable() &&
                  this.trackedElementsAreIdentical()
                );
              }),
              (r.prototype.trackedElementsAreIdentical = function() {
                return (
                  this.currentHeadDetails.getTrackedElementSignature() ===
                  this.newHeadDetails.getTrackedElementSignature()
                );
              }),
              (r.prototype.copyNewHeadStylesheetElements = function() {
                var t, e, i, n, r;
                for (
                  r = [],
                    e = 0,
                    i = (n = this.getNewHeadStylesheetElements()).length;
                  i > e;
                  e++
                )
                  (t = n[e]), r.push(document.head.appendChild(t));
                return r;
              }),
              (r.prototype.copyNewHeadScriptElements = function() {
                var t, e, i, n, r;
                for (
                  r = [],
                    e = 0,
                    i = (n = this.getNewHeadScriptElements()).length;
                  i > e;
                  e++
                )
                  (t = n[e]),
                    r.push(
                      document.head.appendChild(this.createScriptElement(t))
                    );
                return r;
              }),
              (r.prototype.removeCurrentHeadProvisionalElements = function() {
                var t, e, i, n, r;
                for (
                  r = [],
                    e = 0,
                    i = (n = this.getCurrentHeadProvisionalElements()).length;
                  i > e;
                  e++
                )
                  (t = n[e]), r.push(document.head.removeChild(t));
                return r;
              }),
              (r.prototype.copyNewHeadProvisionalElements = function() {
                var t, e, i, n, r;
                for (
                  r = [],
                    e = 0,
                    i = (n = this.getNewHeadProvisionalElements()).length;
                  i > e;
                  e++
                )
                  (t = n[e]), r.push(document.head.appendChild(t));
                return r;
              }),
              (r.prototype.relocateCurrentBodyPermanentElements = function() {
                var e, n, r, s, o, a, l;
                for (
                  l = [],
                    e = 0,
                    n = (a = this.getCurrentBodyPermanentElements()).length;
                  n > e;
                  e++
                )
                  (s = a[e]),
                    (o = t(s)),
                    (r = this.newSnapshot.getPermanentElementById(s.id)),
                    i(s, o.element),
                    i(r, s),
                    l.push(o);
                return l;
              }),
              (r.prototype.replacePlaceholderElementsWithClonedPermanentElements = function(
                t
              ) {
                var e, n, r, s, o, a;
                for (a = [], r = 0, s = t.length; s > r; r++)
                  (n = (o = t[r]).element),
                    (e = o.permanentElement.cloneNode(!0)),
                    a.push(i(n, e));
                return a;
              }),
              (r.prototype.activateNewBodyScriptElements = function() {
                var t, e, n, r, s, o;
                for (
                  o = [],
                    e = 0,
                    r = (s = this.getNewBodyScriptElements()).length;
                  r > e;
                  e++
                )
                  (n = s[e]),
                    (t = this.createScriptElement(n)),
                    o.push(i(n, t));
                return o;
              }),
              (r.prototype.assignNewBody = function() {
                return (document.body = this.newBody);
              }),
              (r.prototype.focusFirstAutofocusableElement = function() {
                var t;
                return null !=
                  (t = this.newSnapshot.findFirstAutofocusableElement())
                  ? t.focus()
                  : void 0;
              }),
              (r.prototype.getNewHeadStylesheetElements = function() {
                return this.newHeadDetails.getStylesheetElementsNotInDetails(
                  this.currentHeadDetails
                );
              }),
              (r.prototype.getNewHeadScriptElements = function() {
                return this.newHeadDetails.getScriptElementsNotInDetails(
                  this.currentHeadDetails
                );
              }),
              (r.prototype.getCurrentHeadProvisionalElements = function() {
                return this.currentHeadDetails.getProvisionalElements();
              }),
              (r.prototype.getNewHeadProvisionalElements = function() {
                return this.newHeadDetails.getProvisionalElements();
              }),
              (r.prototype.getCurrentBodyPermanentElements = function() {
                return this.currentSnapshot.getPermanentElementsPresentInSnapshot(
                  this.newSnapshot
                );
              }),
              (r.prototype.getNewBodyScriptElements = function() {
                return this.newBody.querySelectorAll("script");
              }),
              r
            );
          })(e.Renderer)),
            (t = function(t) {
              var e;
              return (
                (e = document.createElement("meta")).setAttribute(
                  "name",
                  "turbolinks-permanent-placeholder"
                ),
                e.setAttribute("content", t.id),
                {element: e, permanentElement: t}
              );
            }),
            (i = function(t, e) {
              var i;
              return (i = t.parentNode) ? i.replaceChild(e, t) : void 0;
            });
        }.call(this),
        function() {
          var t = function(t, e) {
              function n() {
                this.constructor = t;
              }
              for (var r in e) i.call(e, r) && (t[r] = e[r]);
              return (
                (n.prototype = e.prototype),
                (t.prototype = new n()),
                (t.__super__ = e.prototype),
                t
              );
            },
            i = {}.hasOwnProperty;
          e.ErrorRenderer = (function(e) {
            function i(t) {
              var e;
              ((e = document.createElement("html")).innerHTML = t),
                (this.newHead = e.querySelector("head")),
                (this.newBody = e.querySelector("body"));
            }
            return (
              t(i, e),
              (i.prototype.render = function(t) {
                return this.renderView(
                  ((e = this),
                  function() {
                    return (
                      e.replaceHeadAndBody(),
                      e.activateBodyScriptElements(),
                      t()
                    );
                  })
                );
                var e;
              }),
              (i.prototype.replaceHeadAndBody = function() {
                var t, e;
                return (
                  (e = document.head),
                  (t = document.body),
                  e.parentNode.replaceChild(this.newHead, e),
                  t.parentNode.replaceChild(this.newBody, t)
                );
              }),
              (i.prototype.activateBodyScriptElements = function() {
                var t, e, i, n, r, s;
                for (
                  s = [], e = 0, i = (n = this.getScriptElements()).length;
                  i > e;
                  e++
                )
                  (r = n[e]),
                    (t = this.createScriptElement(r)),
                    s.push(r.parentNode.replaceChild(t, r));
                return s;
              }),
              (i.prototype.getScriptElements = function() {
                return document.documentElement.querySelectorAll("script");
              }),
              i
            );
          })(e.Renderer);
        }.call(this),
        function() {
          e.View = (function() {
            function t(t) {
              (this.delegate = t),
                (this.htmlElement = document.documentElement);
            }
            return (
              (t.prototype.getRootLocation = function() {
                return this.getSnapshot().getRootLocation();
              }),
              (t.prototype.getElementForAnchor = function(t) {
                return this.getSnapshot().getElementForAnchor(t);
              }),
              (t.prototype.getSnapshot = function() {
                return e.Snapshot.fromHTMLElement(this.htmlElement);
              }),
              (t.prototype.render = function(t, e) {
                var i, n, r;
                return (
                  (r = t.snapshot),
                  (i = t.error),
                  (n = t.isPreview),
                  this.markAsPreview(n),
                  null != r
                    ? this.renderSnapshot(r, n, e)
                    : this.renderError(i, e)
                );
              }),
              (t.prototype.markAsPreview = function(t) {
                return t
                  ? this.htmlElement.setAttribute("data-turbolinks-preview", "")
                  : this.htmlElement.removeAttribute("data-turbolinks-preview");
              }),
              (t.prototype.renderSnapshot = function(t, i, n) {
                return e.SnapshotRenderer.render(
                  this.delegate,
                  n,
                  this.getSnapshot(),
                  e.Snapshot.wrap(t),
                  i
                );
              }),
              (t.prototype.renderError = function(t, i) {
                return e.ErrorRenderer.render(this.delegate, i, t);
              }),
              t
            );
          })();
        }.call(this),
        function() {
          var t = function(t, e) {
            return function() {
              return t.apply(e, arguments);
            };
          };
          e.ScrollManager = (function() {
            function i(i) {
              (this.delegate = i),
                (this.onScroll = t(this.onScroll, this)),
                (this.onScroll = e.throttle(this.onScroll));
            }
            return (
              (i.prototype.start = function() {
                return this.started
                  ? void 0
                  : (addEventListener("scroll", this.onScroll, !1),
                    this.onScroll(),
                    (this.started = !0));
              }),
              (i.prototype.stop = function() {
                return this.started
                  ? (removeEventListener("scroll", this.onScroll, !1),
                    (this.started = !1))
                  : void 0;
              }),
              (i.prototype.scrollToElement = function(t) {
                return t.scrollIntoView();
              }),
              (i.prototype.scrollToPosition = function(t) {
                var e, i;
                return (e = t.x), (i = t.y), window.scrollTo(e, i);
              }),
              (i.prototype.onScroll = function() {
                return this.updatePosition({
                  x: window.pageXOffset,
                  y: window.pageYOffset
                });
              }),
              (i.prototype.updatePosition = function(t) {
                var e;
                return (
                  (this.position = t),
                  null != (e = this.delegate)
                    ? e.scrollPositionChanged(this.position)
                    : void 0
                );
              }),
              i
            );
          })();
        }.call(this),
        function() {
          e.SnapshotCache = (function() {
            function t(t) {
              (this.size = t), (this.keys = []), (this.snapshots = {});
            }
            var i;
            return (
              (t.prototype.has = function(t) {
                return i(t) in this.snapshots;
              }),
              (t.prototype.get = function(t) {
                var e;
                if (this.has(t)) return (e = this.read(t)), this.touch(t), e;
              }),
              (t.prototype.put = function(t, e) {
                return this.write(t, e), this.touch(t), e;
              }),
              (t.prototype.read = function(t) {
                var e;
                return (e = i(t)), this.snapshots[e];
              }),
              (t.prototype.write = function(t, e) {
                var n;
                return (n = i(t)), (this.snapshots[n] = e);
              }),
              (t.prototype.touch = function(t) {
                var e, n;
                return (
                  (n = i(t)),
                  (e = this.keys.indexOf(n)) > -1 && this.keys.splice(e, 1),
                  this.keys.unshift(n),
                  this.trim()
                );
              }),
              (t.prototype.trim = function() {
                var t, e, i, n, r;
                for (
                  r = [], t = 0, i = (n = this.keys.splice(this.size)).length;
                  i > t;
                  t++
                )
                  (e = n[t]), r.push(delete this.snapshots[e]);
                return r;
              }),
              (i = function(t) {
                return e.Location.wrap(t).toCacheKey();
              }),
              t
            );
          })();
        }.call(this),
        function() {
          var t = function(t, e) {
            return function() {
              return t.apply(e, arguments);
            };
          };
          e.Visit = (function() {
            function i(i, n, r) {
              (this.controller = i),
                (this.action = r),
                (this.performScroll = t(this.performScroll, this)),
                (this.identifier = e.uuid()),
                (this.location = e.Location.wrap(n)),
                (this.adapter = this.controller.adapter),
                (this.state = "initialized"),
                (this.timingMetrics = {});
            }
            var n;
            return (
              (i.prototype.start = function() {
                return "initialized" === this.state
                  ? (this.recordTimingMetric("visitStart"),
                    (this.state = "started"),
                    this.adapter.visitStarted(this))
                  : void 0;
              }),
              (i.prototype.cancel = function() {
                var t;
                return "started" === this.state
                  ? (null != (t = this.request) && t.cancel(),
                    this.cancelRender(),
                    (this.state = "canceled"))
                  : void 0;
              }),
              (i.prototype.complete = function() {
                var t;
                return "started" === this.state
                  ? (this.recordTimingMetric("visitEnd"),
                    (this.state = "completed"),
                    "function" == typeof (t = this.adapter).visitCompleted &&
                      t.visitCompleted(this),
                    this.controller.visitCompleted(this))
                  : void 0;
              }),
              (i.prototype.fail = function() {
                var t;
                return "started" === this.state
                  ? ((this.state = "failed"),
                    "function" == typeof (t = this.adapter).visitFailed
                      ? t.visitFailed(this)
                      : void 0)
                  : void 0;
              }),
              (i.prototype.changeHistory = function() {
                var t, e;
                return this.historyChanged
                  ? void 0
                  : ((t = this.location.isEqualTo(this.referrer)
                      ? "replace"
                      : this.action),
                    (e = n(t)),
                    this.controller[e](
                      this.location,
                      this.restorationIdentifier
                    ),
                    (this.historyChanged = !0));
              }),
              (i.prototype.issueRequest = function() {
                return this.shouldIssueRequest() && null == this.request
                  ? ((this.progress = 0),
                    (this.request = new e.HttpRequest(
                      this,
                      this.location,
                      this.referrer
                    )),
                    this.request.send())
                  : void 0;
              }),
              (i.prototype.getCachedSnapshot = function() {
                var t;
                return !(t = this.controller.getCachedSnapshotForLocation(
                  this.location
                )) ||
                  (null != this.location.anchor &&
                    !t.hasAnchor(this.location.anchor)) ||
                  ("restore" !== this.action && !t.isPreviewable())
                  ? void 0
                  : t;
              }),
              (i.prototype.hasCachedSnapshot = function() {
                return null != this.getCachedSnapshot();
              }),
              (i.prototype.loadCachedSnapshot = function() {
                var t, e;
                return (e = this.getCachedSnapshot())
                  ? ((t = this.shouldIssueRequest()),
                    this.render(function() {
                      var i;
                      return (
                        this.cacheSnapshot(),
                        this.controller.render(
                          {snapshot: e, isPreview: t},
                          this.performScroll
                        ),
                        "function" == typeof (i = this.adapter).visitRendered &&
                          i.visitRendered(this),
                        t ? void 0 : this.complete()
                      );
                    }))
                  : void 0;
              }),
              (i.prototype.loadResponse = function() {
                return null != this.response
                  ? this.render(function() {
                      var t, e;
                      return (
                        this.cacheSnapshot(),
                        this.request.failed
                          ? (this.controller.render(
                              {error: this.response},
                              this.performScroll
                            ),
                            "function" ==
                              typeof (t = this.adapter).visitRendered &&
                              t.visitRendered(this),
                            this.fail())
                          : (this.controller.render(
                              {snapshot: this.response},
                              this.performScroll
                            ),
                            "function" ==
                              typeof (e = this.adapter).visitRendered &&
                              e.visitRendered(this),
                            this.complete())
                      );
                    })
                  : void 0;
              }),
              (i.prototype.followRedirect = function() {
                return this.redirectedToLocation && !this.followedRedirect
                  ? ((this.location = this.redirectedToLocation),
                    this.controller.replaceHistoryWithLocationAndRestorationIdentifier(
                      this.redirectedToLocation,
                      this.restorationIdentifier
                    ),
                    (this.followedRedirect = !0))
                  : void 0;
              }),
              (i.prototype.requestStarted = function() {
                var t;
                return (
                  this.recordTimingMetric("requestStart"),
                  "function" == typeof (t = this.adapter).visitRequestStarted
                    ? t.visitRequestStarted(this)
                    : void 0
                );
              }),
              (i.prototype.requestProgressed = function(t) {
                var e;
                return (
                  (this.progress = t),
                  "function" == typeof (e = this.adapter).visitRequestProgressed
                    ? e.visitRequestProgressed(this)
                    : void 0
                );
              }),
              (i.prototype.requestCompletedWithResponse = function(t, i) {
                return (
                  (this.response = t),
                  null != i && (this.redirectedToLocation = e.Location.wrap(i)),
                  this.adapter.visitRequestCompleted(this)
                );
              }),
              (i.prototype.requestFailedWithStatusCode = function(t, e) {
                return (
                  (this.response = e),
                  this.adapter.visitRequestFailedWithStatusCode(this, t)
                );
              }),
              (i.prototype.requestFinished = function() {
                var t;
                return (
                  this.recordTimingMetric("requestEnd"),
                  "function" == typeof (t = this.adapter).visitRequestFinished
                    ? t.visitRequestFinished(this)
                    : void 0
                );
              }),
              (i.prototype.performScroll = function() {
                return this.scrolled
                  ? void 0
                  : ("restore" === this.action
                      ? this.scrollToRestoredPosition() || this.scrollToTop()
                      : this.scrollToAnchor() || this.scrollToTop(),
                    (this.scrolled = !0));
              }),
              (i.prototype.scrollToRestoredPosition = function() {
                var t, e;
                return null !=
                  (t =
                    null != (e = this.restorationData)
                      ? e.scrollPosition
                      : void 0)
                  ? (this.controller.scrollToPosition(t), !0)
                  : void 0;
              }),
              (i.prototype.scrollToAnchor = function() {
                return null != this.location.anchor
                  ? (this.controller.scrollToAnchor(this.location.anchor), !0)
                  : void 0;
              }),
              (i.prototype.scrollToTop = function() {
                return this.controller.scrollToPosition({x: 0, y: 0});
              }),
              (i.prototype.recordTimingMetric = function(t) {
                var e;
                return null != (e = this.timingMetrics)[t]
                  ? e[t]
                  : (e[t] = new Date().getTime());
              }),
              (i.prototype.getTimingMetrics = function() {
                return e.copyObject(this.timingMetrics);
              }),
              (n = function(t) {
                switch (t) {
                  case "replace":
                    return "replaceHistoryWithLocationAndRestorationIdentifier";
                  case "advance":
                  case "restore":
                    return "pushHistoryWithLocationAndRestorationIdentifier";
                }
              }),
              (i.prototype.shouldIssueRequest = function() {
                return "restore" !== this.action || !this.hasCachedSnapshot();
              }),
              (i.prototype.cacheSnapshot = function() {
                return this.snapshotCached
                  ? void 0
                  : (this.controller.cacheSnapshot(),
                    (this.snapshotCached = !0));
              }),
              (i.prototype.render = function(t) {
                return (
                  this.cancelRender(),
                  (this.frame = requestAnimationFrame(
                    ((e = this),
                    function() {
                      return (e.frame = null), t.call(e);
                    })
                  ))
                );
                var e;
              }),
              (i.prototype.cancelRender = function() {
                return this.frame ? cancelAnimationFrame(this.frame) : void 0;
              }),
              i
            );
          })();
        }.call(this),
        function() {
          var t = function(t, e) {
            return function() {
              return t.apply(e, arguments);
            };
          };
          e.Controller = (function() {
            function i() {
              (this.clickBubbled = t(this.clickBubbled, this)),
                (this.clickCaptured = t(this.clickCaptured, this)),
                (this.pageLoaded = t(this.pageLoaded, this)),
                (this.history = new e.History(this)),
                (this.view = new e.View(this)),
                (this.scrollManager = new e.ScrollManager(this)),
                (this.restorationData = {}),
                this.clearCache(),
                this.setProgressBarDelay(500);
            }
            return (
              (i.prototype.start = function() {
                return e.supported && !this.started
                  ? (addEventListener("click", this.clickCaptured, !0),
                    addEventListener("DOMContentLoaded", this.pageLoaded, !1),
                    this.scrollManager.start(),
                    this.startHistory(),
                    (this.started = !0),
                    (this.enabled = !0))
                  : void 0;
              }),
              (i.prototype.disable = function() {
                return (this.enabled = !1);
              }),
              (i.prototype.stop = function() {
                return this.started
                  ? (removeEventListener("click", this.clickCaptured, !0),
                    removeEventListener(
                      "DOMContentLoaded",
                      this.pageLoaded,
                      !1
                    ),
                    this.scrollManager.stop(),
                    this.stopHistory(),
                    (this.started = !1))
                  : void 0;
              }),
              (i.prototype.clearCache = function() {
                return (this.cache = new e.SnapshotCache(10));
              }),
              (i.prototype.visit = function(t, i) {
                var n, r;
                return (
                  null == i && (i = {}),
                  (t = e.Location.wrap(t)),
                  this.applicationAllowsVisitingLocation(t)
                    ? this.locationIsVisitable(t)
                      ? ((n = null != (r = i.action) ? r : "advance"),
                        this.adapter.visitProposedToLocationWithAction(t, n))
                      : (window.location = t)
                    : void 0
                );
              }),
              (i.prototype.startVisitToLocationWithAction = function(t, i, n) {
                var r;
                return e.supported
                  ? ((r = this.getRestorationDataForIdentifier(n)),
                    this.startVisit(t, i, {restorationData: r}))
                  : (window.location = t);
              }),
              (i.prototype.setProgressBarDelay = function(t) {
                return (this.progressBarDelay = t);
              }),
              (i.prototype.startHistory = function() {
                return (
                  (this.location = e.Location.wrap(window.location)),
                  (this.restorationIdentifier = e.uuid()),
                  this.history.start(),
                  this.history.replace(
                    this.location,
                    this.restorationIdentifier
                  )
                );
              }),
              (i.prototype.stopHistory = function() {
                return this.history.stop();
              }),
              (i.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(
                t,
                i
              ) {
                return (
                  (this.restorationIdentifier = i),
                  (this.location = e.Location.wrap(t)),
                  this.history.push(this.location, this.restorationIdentifier)
                );
              }),
              (i.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(
                t,
                i
              ) {
                return (
                  (this.restorationIdentifier = i),
                  (this.location = e.Location.wrap(t)),
                  this.history.replace(
                    this.location,
                    this.restorationIdentifier
                  )
                );
              }),
              (i.prototype.historyPoppedToLocationWithRestorationIdentifier = function(
                t,
                i
              ) {
                var n;
                return (
                  (this.restorationIdentifier = i),
                  this.enabled
                    ? ((n = this.getRestorationDataForIdentifier(
                        this.restorationIdentifier
                      )),
                      this.startVisit(t, "restore", {
                        restorationIdentifier: this.restorationIdentifier,
                        restorationData: n,
                        historyChanged: !0
                      }),
                      (this.location = e.Location.wrap(t)))
                    : this.adapter.pageInvalidated()
                );
              }),
              (i.prototype.getCachedSnapshotForLocation = function(t) {
                var e;
                return null != (e = this.cache.get(t)) ? e.clone() : void 0;
              }),
              (i.prototype.shouldCacheSnapshot = function() {
                return this.view.getSnapshot().isCacheable();
              }),
              (i.prototype.cacheSnapshot = function() {
                var t, i;
                return this.shouldCacheSnapshot()
                  ? (this.notifyApplicationBeforeCachingSnapshot(),
                    (i = this.view.getSnapshot()),
                    (t = this.lastRenderedLocation),
                    e.defer(
                      (function(e) {
                        return function() {
                          return e.cache.put(t, i.clone());
                        };
                      })(this)
                    ))
                  : void 0;
              }),
              (i.prototype.scrollToAnchor = function(t) {
                var e;
                return (e = this.view.getElementForAnchor(t))
                  ? this.scrollToElement(e)
                  : this.scrollToPosition({x: 0, y: 0});
              }),
              (i.prototype.scrollToElement = function(t) {
                return this.scrollManager.scrollToElement(t);
              }),
              (i.prototype.scrollToPosition = function(t) {
                return this.scrollManager.scrollToPosition(t);
              }),
              (i.prototype.scrollPositionChanged = function(t) {
                return (this.getCurrentRestorationData().scrollPosition = t);
              }),
              (i.prototype.render = function(t, e) {
                return this.view.render(t, e);
              }),
              (i.prototype.viewInvalidated = function() {
                return this.adapter.pageInvalidated();
              }),
              (i.prototype.viewWillRender = function(t) {
                return this.notifyApplicationBeforeRender(t);
              }),
              (i.prototype.viewRendered = function() {
                return (
                  (this.lastRenderedLocation = this.currentVisit.location),
                  this.notifyApplicationAfterRender()
                );
              }),
              (i.prototype.pageLoaded = function() {
                return (
                  (this.lastRenderedLocation = this.location),
                  this.notifyApplicationAfterPageLoad()
                );
              }),
              (i.prototype.clickCaptured = function() {
                return (
                  removeEventListener("click", this.clickBubbled, !1),
                  addEventListener("click", this.clickBubbled, !1)
                );
              }),
              (i.prototype.clickBubbled = function(t) {
                var e, i, n;
                return this.enabled &&
                  this.clickEventIsSignificant(t) &&
                  (i = this.getVisitableLinkForNode(t.target)) &&
                  (n = this.getVisitableLocationForLink(i)) &&
                  this.applicationAllowsFollowingLinkToLocation(i, n)
                  ? (t.preventDefault(),
                    (e = this.getActionForLink(i)),
                    this.visit(n, {action: e}))
                  : void 0;
              }),
              (i.prototype.applicationAllowsFollowingLinkToLocation = function(
                t,
                e
              ) {
                return !this.notifyApplicationAfterClickingLinkToLocation(t, e)
                  .defaultPrevented;
              }),
              (i.prototype.applicationAllowsVisitingLocation = function(t) {
                return !this.notifyApplicationBeforeVisitingLocation(t)
                  .defaultPrevented;
              }),
              (i.prototype.notifyApplicationAfterClickingLinkToLocation = function(
                t,
                i
              ) {
                return e.dispatch("turbolinks:click", {
                  target: t,
                  data: {url: i.absoluteURL},
                  cancelable: !0
                });
              }),
              (i.prototype.notifyApplicationBeforeVisitingLocation = function(
                t
              ) {
                return e.dispatch("turbolinks:before-visit", {
                  data: {url: t.absoluteURL},
                  cancelable: !0
                });
              }),
              (i.prototype.notifyApplicationAfterVisitingLocation = function(
                t
              ) {
                return e.dispatch("turbolinks:visit", {
                  data: {url: t.absoluteURL}
                });
              }),
              (i.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                return e.dispatch("turbolinks:before-cache");
              }),
              (i.prototype.notifyApplicationBeforeRender = function(t) {
                return e.dispatch("turbolinks:before-render", {
                  data: {newBody: t}
                });
              }),
              (i.prototype.notifyApplicationAfterRender = function() {
                return e.dispatch("turbolinks:render");
              }),
              (i.prototype.notifyApplicationAfterPageLoad = function(t) {
                return (
                  null == t && (t = {}),
                  e.dispatch("turbolinks:load", {
                    data: {url: this.location.absoluteURL, timing: t}
                  })
                );
              }),
              (i.prototype.startVisit = function(t, e, i) {
                var n;
                return (
                  null != (n = this.currentVisit) && n.cancel(),
                  (this.currentVisit = this.createVisit(t, e, i)),
                  this.currentVisit.start(),
                  this.notifyApplicationAfterVisitingLocation(t)
                );
              }),
              (i.prototype.createVisit = function(t, i, n) {
                var r, s, o, a, l;
                return (
                  (a = (s = null != n ? n : {}).restorationIdentifier),
                  (o = s.restorationData),
                  (r = s.historyChanged),
                  ((l = new e.Visit(this, t, i)).restorationIdentifier =
                    null != a ? a : e.uuid()),
                  (l.restorationData = e.copyObject(o)),
                  (l.historyChanged = r),
                  (l.referrer = this.location),
                  l
                );
              }),
              (i.prototype.visitCompleted = function(t) {
                return this.notifyApplicationAfterPageLoad(
                  t.getTimingMetrics()
                );
              }),
              (i.prototype.clickEventIsSignificant = function(t) {
                return !(
                  t.defaultPrevented ||
                  t.target.isContentEditable ||
                  t.which > 1 ||
                  t.altKey ||
                  t.ctrlKey ||
                  t.metaKey ||
                  t.shiftKey
                );
              }),
              (i.prototype.getVisitableLinkForNode = function(t) {
                return this.nodeIsVisitable(t)
                  ? e.closest(t, "a[href]:not([target]):not([download])")
                  : void 0;
              }),
              (i.prototype.getVisitableLocationForLink = function(t) {
                var i;
                return (
                  (i = new e.Location(t.getAttribute("href"))),
                  this.locationIsVisitable(i) ? i : void 0
                );
              }),
              (i.prototype.getActionForLink = function(t) {
                var e;
                return null != (e = t.getAttribute("data-turbolinks-action"))
                  ? e
                  : "advance";
              }),
              (i.prototype.nodeIsVisitable = function(t) {
                var i;
                return (
                  !(i = e.closest(t, "[data-turbolinks]")) ||
                  "false" !== i.getAttribute("data-turbolinks")
                );
              }),
              (i.prototype.locationIsVisitable = function(t) {
                return (
                  t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
                );
              }),
              (i.prototype.getCurrentRestorationData = function() {
                return this.getRestorationDataForIdentifier(
                  this.restorationIdentifier
                );
              }),
              (i.prototype.getRestorationDataForIdentifier = function(t) {
                var e;
                return null != (e = this.restorationData)[t]
                  ? e[t]
                  : (e[t] = {});
              }),
              i
            );
          })();
        }.call(this),
        function() {
          !(function() {
            var t, e;
            if (
              (t = e = document.currentScript) &&
              !e.hasAttribute("data-turbolinks-suppress-warning")
            )
              for (; (t = t.parentNode); )
                if (t === document.body)
                  return console.warn(
                    "You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",
                    e.outerHTML
                  );
          })();
        }.call(this),
        function() {
          var t, i, n;
          (e.start = function() {
            return i()
              ? (null == e.controller && (e.controller = t()),
                e.controller.start())
              : void 0;
          }),
            (i = function() {
              return null == window.Turbolinks && (window.Turbolinks = e), n();
            }),
            (t = function() {
              var t;
              return (
                ((t = new e.Controller()).adapter = new e.BrowserAdapter(t)), t
              );
            }),
            (n = function() {
              return window.Turbolinks === e;
            })() && e.start();
        }.call(this));
    }.call(this),
      "object" == typeof module && module.exports
        ? (module.exports = e)
        : "function" == typeof define && define.amd && define(e));
  }.call(this),
  (function(t) {
    "use strict";
    function e(e) {
      return this.each(function() {
        var n = t(this),
          r = n.data("bs.affix"),
          s = "object" == typeof e && e;
        r || n.data("bs.affix", (r = new i(this, s))),
          "string" == typeof e && r[e]();
      });
    }
    var i = function(e, n) {
      this.options = t.extend({}, i.DEFAULTS, n);
      var r =
        this.options.target === i.DEFAULTS.target
          ? t(this.options.target)
          : t(document).find(this.options.target);
      (this.$target = r
        .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
        .on(
          "click.bs.affix.data-api",
          t.proxy(this.checkPositionWithEventLoop, this)
        )),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (i.VERSION = "3.4.0"),
      (i.RESET = "affix affix-top affix-bottom"),
      (i.DEFAULTS = {offset: 0, target: window}),
      (i.prototype.getState = function(t, e, i, n) {
        var r = this.$target.scrollTop(),
          s = this.$element.offset(),
          o = this.$target.height();
        if (null != i && "top" == this.affixed) return r < i && "top";
        if ("bottom" == this.affixed)
          return null != i
            ? !(r + this.unpin <= s.top) && "bottom"
            : !(r + o <= t - n) && "bottom";
        var a = null == this.affixed,
          l = a ? r : s.top;
        return null != i && r <= i
          ? "top"
          : null != n && l + (a ? o : e) >= t - n && "bottom";
      }),
      (i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            n = this.options.offset,
            r = n.top,
            s = n.bottom,
            o = Math.max(t(document).height(), t(document.body).height());
          "object" != typeof n && (s = r = n),
            "function" == typeof r && (r = n.top(this.$element)),
            "function" == typeof s && (s = n.bottom(this.$element));
          var a = this.getState(o, e, r, s);
          if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
              u = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(u), u.isDefaultPrevented())) return;
            (this.affixed = a),
              (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(i.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == a && this.$element.offset({top: o - e - s});
        }
      });
    var n = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = i),
      (t.fn.affix.noConflict = function() {
        return (t.fn.affix = n), this;
      }),
      t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
          var i = t(this),
            n = i.data();
          (n.offset = n.offset || {}),
            null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            null != n.offsetTop && (n.offset.top = n.offsetTop),
            e.call(i, n);
        });
      });
  })(jQuery),
  (function(t) {
    "use strict";
    function e(e) {
      return this.each(function() {
        var i = t(this),
          r = i.data("bs.alert");
        r || i.data("bs.alert", (r = new n(this))),
          "string" == typeof e && r[e].call(i);
      });
    }
    var i = '[data-dismiss="alert"]',
      n = function(e) {
        t(e).on("click", i, this.close);
      };
    (n.VERSION = "3.4.0"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.close = function(e) {
        function i() {
          o.detach()
            .trigger("closed.bs.alert")
            .remove();
        }
        var r = t(this),
          s = r.attr("data-target");
        s || (s = (s = r.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")),
          (s = "#" === s ? [] : s);
        var o = t(document).find(s);
        e && e.preventDefault(),
          o.length || (o = r.closest(".alert")),
          o.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (o.removeClass("in"),
            t.support.transition && o.hasClass("fade")
              ? o
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : i());
      });
    var r = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = n),
      (t.fn.alert.noConflict = function() {
        return (t.fn.alert = r), this;
      }),
      t(document).on("click.bs.alert.data-api", i, n.prototype.close);
  })(jQuery),
  (function(t) {
    "use strict";
    function e(e) {
      return this.each(function() {
        var n = t(this),
          r = n.data("bs.button"),
          s = "object" == typeof e && e;
        r || n.data("bs.button", (r = new i(this, s))),
          "toggle" == e ? r.toggle() : e && r.setState(e);
      });
    }
    var i = function(e, n) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, n)),
        (this.isLoading = !1);
    };
    (i.VERSION = "3.4.0"),
      (i.DEFAULTS = {loadingText: "loading..."}),
      (i.prototype.setState = function(e) {
        var i = "disabled",
          n = this.$element,
          r = n.is("input") ? "val" : "html",
          s = n.data();
        (e += "Text"),
          null == s.resetText && n.data("resetText", n[r]()),
          setTimeout(
            t.proxy(function() {
              n[r](null == s[e] ? this.options[e] : s[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0),
                    n
                      .addClass(i)
                      .attr(i, i)
                      .prop(i, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    n
                      .removeClass(i)
                      .removeAttr(i)
                      .prop(i, !1));
            }, this),
            0
          );
      }),
      (i.prototype.toggle = function() {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var i = this.$element.find("input");
          "radio" == i.prop("type")
            ? (i.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == i.prop("type") &&
              (i.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            i.prop("checked", this.$element.hasClass("active")),
            t && i.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var n = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = i),
      (t.fn.button.noConflict = function() {
        return (t.fn.button = n), this;
      }),
      t(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
          var n = t(i.target).closest(".btn");
          e.call(n, "toggle"),
            t(i.target).is('input[type="radio"], input[type="checkbox"]') ||
              (i.preventDefault(),
              n.is("input,button")
                ? n.trigger("focus")
                : n
                    .find("input:visible,button:visible")
                    .first()
                    .trigger("focus"));
        })
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function(e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  (function(t) {
    "use strict";
    function e(e) {
      return this.each(function() {
        var n = t(this),
          r = n.data("bs.carousel"),
          s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
          o = "string" == typeof e ? e : s.slide;
        r || n.data("bs.carousel", (r = new i(this, s))),
          "number" == typeof e
            ? r.to(e)
            : o
            ? r[o]()
            : s.interval && r.pause().cycle();
      });
    }
    var i = function(e, i) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = i),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (i.VERSION = "3.4.0"),
      (i.TRANSITION_DURATION = 600),
      (i.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0, keyboard: !0}),
      (i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (i.prototype.cycle = function(e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (i.prototype.getItemIndex = function(t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (
          (("prev" == t && 0 === i) ||
            ("next" == t && i == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return e;
        var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(n);
      }),
      (i.prototype.to = function(t) {
        var e = this,
          i = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(t > this.$items.length - 1 || t < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function() {
                e.to(t);
              })
            : i == t
            ? this.pause().cycle()
            : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
      }),
      (i.prototype.pause = function(e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (i.prototype.next = function() {
        if (!this.sliding) return this.slide("next");
      }),
      (i.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev");
      }),
      (i.prototype.slide = function(e, n) {
        var r = this.$element.find(".item.active"),
          s = n || this.getItemForDirection(e, r),
          o = this.interval,
          a = "next" == e ? "left" : "right",
          l = this;
        if (s.hasClass("active")) return (this.sliding = !1);
        var u = s[0],
          h = t.Event("slide.bs.carousel", {relatedTarget: u, direction: a});
        if ((this.$element.trigger(h), !h.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), o && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var c = t(this.$indicators.children()[this.getItemIndex(s)]);
            c && c.addClass("active");
          }
          var p = t.Event("slid.bs.carousel", {relatedTarget: u, direction: a});
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (s.addClass(e),
                "object" == typeof s && s.length && s[0].offsetWidth,
                r.addClass(a),
                s.addClass(a),
                r
                  .one("bsTransitionEnd", function() {
                    s.removeClass([e, a].join(" ")).addClass("active"),
                      r.removeClass(["active", a].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function() {
                        l.$element.trigger(p);
                      }, 0);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION))
              : (r.removeClass("active"),
                s.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(p)),
            o && this.cycle(),
            this
          );
        }
      });
    var n = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = i),
      (t.fn.carousel.noConflict = function() {
        return (t.fn.carousel = n), this;
      });
    var r = function(i) {
      var n = t(this),
        r = n.attr("href");
      r && (r = r.replace(/.*(?=#[^\s]+$)/, ""));
      var s = n.attr("data-target") || r,
        o = t(document).find(s);
      if (o.hasClass("carousel")) {
        var a = t.extend({}, o.data(), n.data()),
          l = n.attr("data-slide-to");
        l && (a.interval = !1),
          e.call(o, a),
          l && o.data("bs.carousel").to(l),
          i.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", r)
      .on("click.bs.carousel.data-api", "[data-slide-to]", r),
      t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
          var i = t(this);
          e.call(i, i.data());
        });
      });
  })(jQuery),
  (function(t) {
    "use strict";
    function e(e) {
      var i,
        n =
          e.attr("data-target") ||
          ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      return t(document).find(n);
    }
    function i(e) {
      return this.each(function() {
        var i = t(this),
          r = i.data("bs.collapse"),
          s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
        !r && s.toggle && /show|hide/.test(e) && (s.toggle = !1),
          r || i.data("bs.collapse", (r = new n(this, s))),
          "string" == typeof e && r[e]();
      });
    }
    var n = function(e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, n.DEFAULTS, i)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (n.VERSION = "3.4.0"),
      (n.TRANSITION_DURATION = 350),
      (n.DEFAULTS = {toggle: !0}),
      (n.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            r =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(r && r.length && (e = r.data("bs.collapse")) && e.transitioning)
          ) {
            var s = t.Event("show.bs.collapse");
            if ((this.$element.trigger(s), !s.isDefaultPrevented())) {
              r &&
                r.length &&
                (i.call(r, "hide"), e || r.data("bs.collapse", null));
              var o = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [o](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function() {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [o](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return a.call(this);
              var l = t.camelCase(["scroll", o].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(a, this))
                .emulateTransitionEnd(n.TRANSITION_DURATION)
                [o](this.$element[0][l]);
            }
          }
        }
      }),
      (n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var r = function() {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            if (!t.support.transition) return r.call(this);
            this.$element[i](0)
              .one("bsTransitionEnd", t.proxy(r, this))
              .emulateTransitionEnd(n.TRANSITION_DURATION);
          }
        }
      }),
      (n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (n.prototype.getParent = function() {
        return t(document)
          .find(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function(i, n) {
              var r = t(n);
              this.addAriaAndCollapsedClass(e(r), r);
            }, this)
          )
          .end();
      }),
      (n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
          e.toggleClass("collapsed", !i).attr("aria-expanded", i);
      });
    var r = t.fn.collapse;
    (t.fn.collapse = i),
      (t.fn.collapse.Constructor = n),
      (t.fn.collapse.noConflict = function() {
        return (t.fn.collapse = r), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function(n) {
          var r = t(this);
          r.attr("data-target") || n.preventDefault();
          var s = e(r),
            o = s.data("bs.collapse") ? "toggle" : r.data();
          i.call(s, o);
        }
      );
  })(jQuery),
  (function(t) {
    "use strict";
    function e(e) {
      var i = e.attr("data-target");
      i ||
        (i =
          (i = e.attr("href")) &&
          /#[A-Za-z]/.test(i) &&
          i.replace(/.*(?=#[^\s]*$)/, ""));
      var n = i && t(document).find(i);
      return n && n.length ? n : e.parent();
    }
    function i(i) {
      (i && 3 === i.which) ||
        (t(r).remove(),
        t(s).each(function() {
          var n = t(this),
            r = e(n),
            s = {relatedTarget: this};
          r.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              t.contains(r[0], i.target)) ||
              (r.trigger((i = t.Event("hide.bs.dropdown", s))),
              i.isDefaultPrevented() ||
                (n.attr("aria-expanded", "false"),
                r
                  .removeClass("open")
                  .trigger(t.Event("hidden.bs.dropdown", s)))));
        }));
    }
    function n(e) {
      return this.each(function() {
        var i = t(this),
          n = i.data("bs.dropdown");
        n || i.data("bs.dropdown", (n = new o(this))),
          "string" == typeof e && n[e].call(i);
      });
    }
    var r = ".dropdown-backdrop",
      s = '[data-toggle="dropdown"]',
      o = function(e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (o.VERSION = "3.4.0"),
      (o.prototype.toggle = function(n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
          var s = e(r),
            o = s.hasClass("open");
          if ((i(), !o)) {
            "ontouchstart" in document.documentElement &&
              !s.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", i);
            var a = {relatedTarget: this};
            if (
              (s.trigger((n = t.Event("show.bs.dropdown", a))),
              n.isDefaultPrevented())
            )
              return;
            r.trigger("focus").attr("aria-expanded", "true"),
              s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a));
          }
          return !1;
        }
      }),
      (o.prototype.keydown = function(i) {
        if (
          /(38|40|27|32)/.test(i.which) &&
          !/input|textarea/i.test(i.target.tagName)
        ) {
          var n = t(this);
          if (
            (i.preventDefault(),
            i.stopPropagation(),
            !n.is(".disabled, :disabled"))
          ) {
            var r = e(n),
              o = r.hasClass("open");
            if ((!o && 27 != i.which) || (o && 27 == i.which))
              return (
                27 == i.which && r.find(s).trigger("focus"), n.trigger("click")
              );
            var a = " li:not(.disabled):visible a",
              l = r.find(".dropdown-menu" + a);
            if (l.length) {
              var u = l.index(i.target);
              38 == i.which && u > 0 && u--,
                40 == i.which && u < l.length - 1 && u++,
                ~u || (u = 0),
                l.eq(u).trigger("focus");
            }
          }
        }
      });
    var a = t.fn.dropdown;
    (t.fn.dropdown = n),
      (t.fn.dropdown.Constructor = o),
      (t.fn.dropdown.noConflict = function() {
        return (t.fn.dropdown = a), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", i)
        .on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", s, o.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", s, o.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          o.prototype.keydown
        );
  })(jQuery),
  (function(t) {
    "use strict";
    function e(e, n) {
      return this.each(function() {
        var r = t(this),
          s = r.data("bs.modal"),
          o = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
        s || r.data("bs.modal", (s = new i(this, o))),
          "string" == typeof e ? s[e](n) : o.show && s.show(n);
      });
    }
    var i = function(e, i) {
      (this.options = i),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        (this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom"),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function() {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (i.VERSION = "3.4.0"),
      (i.TRANSITION_DURATION = 300),
      (i.BACKDROP_TRANSITION_DURATION = 150),
      (i.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}),
      (i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (i.prototype.show = function(e) {
        var n = this,
          r = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(r),
          this.isShown ||
            r.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
              n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function() {
              var r = t.support.transition && n.$element.hasClass("fade");
              n.$element.parent().length || n.$element.appendTo(n.$body),
                n.$element.show().scrollTop(0),
                n.adjustDialog(),
                r && n.$element[0].offsetWidth,
                n.$element.addClass("in"),
                n.enforceFocus();
              var s = t.Event("shown.bs.modal", {relatedTarget: e});
              r
                ? n.$dialog
                    .one("bsTransitionEnd", function() {
                      n.$element.trigger("focus").trigger(s);
                    })
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : n.$element.trigger("focus").trigger(s);
            }));
      }),
      (i.prototype.hide = function(e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (i.prototype.enforceFocus = function() {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function(t) {
              document === t.target ||
                this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (i.prototype.escape = function() {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function(t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (i.prototype.resize = function() {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
          this.backdrop(function() {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (i.prototype.backdrop = function(e) {
        var n = this,
          r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var s = t.support.transition && r;
          if (
            ((this.$backdrop = t(document.createElement("div"))
              .addClass("modal-backdrop " + r)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              t.proxy(function(t) {
                this.ignoreBackdropClick
                  ? (this.ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus()
                      : this.hide());
              }, this)
            ),
            s && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          s
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var o = function() {
            n.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", o)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : o();
        } else e && e();
      }),
      (i.prototype.handleUpdate = function() {
        this.adjustDialog();
      }),
      (i.prototype.adjustDialog = function() {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        });
      }),
      (i.prototype.resetAdjustments = function() {
        this.$element.css({paddingLeft: "", paddingRight: ""});
      }),
      (i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (i.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var i = this.scrollbarWidth;
        this.bodyIsOverflowing &&
          (this.$body.css("padding-right", e + i),
          t(this.fixedContent).each(function(e, n) {
            var r = n.style.paddingRight,
              s = t(n).css("padding-right");
            t(n)
              .data("padding-right", r)
              .css("padding-right", parseFloat(s) + i + "px");
          }));
      }),
      (i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad),
          t(this.fixedContent).each(function(e, i) {
            var n = t(i).data("padding-right");
            t(i).removeData("padding-right"), (i.style.paddingRight = n || "");
          });
      }),
      (i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var n = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = i),
      (t.fn.modal.noConflict = function() {
        return (t.fn.modal = n), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function(i) {
          var n = t(this),
            r = n.attr("href"),
            s = n.attr("data-target") || (r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = t(document).find(s),
            a = o.data("bs.modal")
              ? "toggle"
              : t.extend({remote: !/#/.test(r) && r}, o.data(), n.data());
          n.is("a") && i.preventDefault(),
            o.one("show.bs.modal", function(t) {
              t.isDefaultPrevented() ||
                o.one("hidden.bs.modal", function() {
                  n.is(":visible") && n.trigger("focus");
                });
            }),
            e.call(o, a, this);
        }
      );
  })(jQuery),
  (function(t) {
    "use strict";
    function e(i, n) {
      (this.$body = t(document.body)),
        (this.$scrollElement = t(i).is(document.body) ? t(window) : t(i)),
        (this.options = t.extend({}, e.DEFAULTS, n)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          t.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function i(i) {
      return this.each(function() {
        var n = t(this),
          r = n.data("bs.scrollspy"),
          s = "object" == typeof i && i;
        r || n.data("bs.scrollspy", (r = new e(this, s))),
          "string" == typeof i && r[i]();
      });
    }
    (e.VERSION = "3.4.0"),
      (e.DEFAULTS = {offset: 10}),
      (e.prototype.getScrollHeight = function() {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function() {
        var e = this,
          i = "offset",
          n = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          t.isWindow(this.$scrollElement[0]) ||
            ((i = "position"), (n = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function() {
              var e = t(this),
                r = e.data("target") || e.attr("href"),
                s = /^#./.test(r) && t(r);
              return (
                (s && s.length && s.is(":visible") && [[s[i]().top + n, r]]) ||
                null
              );
            })
            .sort(function(t, e) {
              return t[0] - e[0];
            })
            .each(function() {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
      }),
      (e.prototype.process = function() {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          n = this.options.offset + i - this.$scrollElement.height(),
          r = this.offsets,
          s = this.targets,
          o = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), e >= n))
          return o != (t = s[s.length - 1]) && this.activate(t);
        if (o && e < r[0]) return (this.activeTarget = null), this.clear();
        for (t = r.length; t--; )
          o != s[t] &&
            e >= r[t] &&
            (r[t + 1] === undefined || e < r[t + 1]) &&
            this.activate(s[t]);
      }),
      (e.prototype.activate = function(e) {
        (this.activeTarget = e), this.clear();
        var i =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          n = t(i)
            .parents("li")
            .addClass("active");
        n.parent(".dropdown-menu").length &&
          (n = n.closest("li.dropdown").addClass("active")),
          n.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function() {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var n = t.fn.scrollspy;
    (t.fn.scrollspy = i),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function() {
        return (t.fn.scrollspy = n), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
          var e = t(this);
          i.call(e, e.data());
        });
      });
  })(jQuery),
  (function(t) {
    "use strict";
    function e(e) {
      return this.each(function() {
        var n = t(this),
          r = n.data("bs.tab");
        r || n.data("bs.tab", (r = new i(this))),
          "string" == typeof e && r[e]();
      });
    }
    var i = function(e) {
      this.element = t(e);
    };
    (i.VERSION = "3.4.0"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.show = function() {
        var e = this.element,
          i = e.closest("ul:not(.dropdown-menu)"),
          n = e.data("target");
        if (
          (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")),
          !e.parent("li").hasClass("active"))
        ) {
          var r = i.find(".active:last a"),
            s = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
            o = t.Event("show.bs.tab", {relatedTarget: r[0]});
          if (
            (r.trigger(s),
            e.trigger(o),
            !o.isDefaultPrevented() && !s.isDefaultPrevented())
          ) {
            var a = t(document).find(n);
            this.activate(e.closest("li"), i),
              this.activate(a, a.parent(), function() {
                r.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}),
                  e.trigger({type: "shown.bs.tab", relatedTarget: r[0]});
              });
          }
        }
      }),
      (i.prototype.activate = function(e, n, r) {
        function s() {
          o
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            r && r();
        }
        var o = n.find("> .active"),
          a =
            r &&
            t.support.transition &&
            ((o.length && o.hasClass("fade")) || !!n.find("> .fade").length);
        o.length && a
          ? o
              .one("bsTransitionEnd", s)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : s(),
          o.removeClass("in");
      });
    var n = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = i),
      (t.fn.tab.noConflict = function() {
        return (t.fn.tab = n), this;
      });
    var r = function(i) {
      i.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', r)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', r);
  })(jQuery),
  (function(t) {
    "use strict";
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var i in e) if (t.style[i] !== undefined) return {end: e[i]};
      return !1;
    }
    (t.fn.emulateTransitionEnd = function(e) {
      var i = !1,
        n = this;
      return (
        t(this).one("bsTransitionEnd", function() {
          i = !0;
        }),
        setTimeout(function() {
          i || t(n).trigger(t.support.transition.end);
        }, e),
        this
      );
    }),
      t(function() {
        (t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function(e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              }
            });
      });
  })(jQuery),
  (function(t) {
    "use strict";
    function e(e) {
      return this.each(function() {
        var n = t(this),
          r = n.data("bs.tooltip"),
          s = "object" == typeof e && e;
        (!r && /destroy|hide/.test(e)) ||
          (r || n.data("bs.tooltip", (r = new i(this, s))),
          "string" == typeof e && r[e]());
      });
    }
    var i = function(t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    };
    (i.VERSION = "3.4.0"),
      (i.TRANSITION_DURATION = 150),
      (i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
          selector: "body",
          padding: 0
        }
      }),
      (i.prototype.init = function(e, i, n) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(i)),
          (this.options = this.getOptions(n)),
          (this.$viewport =
            this.options.viewport &&
            t(document).find(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = {click: !1, hover: !1, focus: !1}),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var r = this.options.trigger.split(" "), s = r.length; s--; ) {
          var o = r[s];
          if ("click" == o)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != o) {
            var a = "hover" == o ? "mouseenter" : "focusin",
              l = "hover" == o ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: ""
            }))
          : this.fixTitle();
      }),
      (i.prototype.getDefaults = function() {
        return i.DEFAULTS;
      }),
      (i.prototype.getOptions = function(e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e))
            .delay &&
            "number" == typeof e.delay &&
            (e.delay = {show: e.delay, hide: e.delay}),
          e
        );
      }),
      (i.prototype.getDelegateOptions = function() {
        var e = {},
          i = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function(t, n) {
              i[t] != n && (e[t] = n);
            }),
          e
        );
      }),
      (i.prototype.enter = function(e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        if (
          (i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          i.tip().hasClass("in") || "in" == i.hoverState)
        )
          i.hoverState = "in";
        else {
          if (
            (clearTimeout(i.timeout),
            (i.hoverState = "in"),
            !i.options.delay || !i.options.delay.show)
          )
            return i.show();
          i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show();
          }, i.options.delay.show);
        }
      }),
      (i.prototype.isInStateTrue = function() {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (i.prototype.leave = function(e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        if (
          (i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          !i.isInStateTrue())
        ) {
          if (
            (clearTimeout(i.timeout),
            (i.hoverState = "out"),
            !i.options.delay || !i.options.delay.hide)
          )
            return i.hide();
          i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide();
          }, i.options.delay.hide);
        }
      }),
      (i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var n = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !n) return;
          var r = this,
            s = this.tip(),
            o = this.getUID(this.type);
          this.setContent(),
            s.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && s.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, s[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            u = l.test(a);
          u && (a = a.replace(l, "") || "top"),
            s
              .detach()
              .css({top: 0, left: 0, display: "block"})
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? s.appendTo(t(document).find(this.options.container))
              : s.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var h = this.getPosition(),
            c = s[0].offsetWidth,
            p = s[0].offsetHeight;
          if (u) {
            var d = a,
              f = this.getPosition(this.$viewport);
            (a =
              "bottom" == a && h.bottom + p > f.bottom
                ? "top"
                : "top" == a && h.top - p < f.top
                ? "bottom"
                : "right" == a && h.right + c > f.width
                ? "left"
                : "left" == a && h.left - c < f.left
                ? "right"
                : a),
              s.removeClass(d).addClass(a);
          }
          var m = this.getCalculatedOffset(a, h, c, p);
          this.applyPlacement(m, a);
          var g = function() {
            var t = r.hoverState;
            r.$element.trigger("shown.bs." + r.type),
              (r.hoverState = null),
              "out" == t && r.leave(r);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? s
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(i.TRANSITION_DURATION)
            : g();
        }
      }),
      (i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
          r = n[0].offsetWidth,
          s = n[0].offsetHeight,
          o = parseInt(n.css("margin-top"), 10),
          a = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0),
          isNaN(a) && (a = 0),
          (e.top += o),
          (e.left += a),
          t.offset.setOffset(
            n[0],
            t.extend(
              {
                using: function(t) {
                  n.css({top: Math.round(t.top), left: Math.round(t.left)});
                }
              },
              e
            ),
            0
          ),
          n.addClass("in");
        var l = n[0].offsetWidth,
          u = n[0].offsetHeight;
        "top" == i && u != s && (e.top = e.top + s - u);
        var h = this.getViewportAdjustedDelta(i, e, l, u);
        h.left ? (e.left += h.left) : (e.top += h.top);
        var c = /top|bottom/.test(i),
          p = c ? 2 * h.left - r + l : 2 * h.top - s + u,
          d = c ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][d], c);
      }),
      (i.prototype.replaceArrow = function(t, e, i) {
        this.arrow()
          .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(i ? "top" : "left", "");
      }),
      (i.prototype.setContent = function() {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (i.prototype.hide = function(e) {
        function n() {
          "in" != r.hoverState && s.detach(),
            r.$element &&
              r.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + r.type),
            e && e();
        }
        var r = this,
          s = t(this.$tip),
          o = t.Event("hide.bs." + this.type);
        if ((this.$element.trigger(o), !o.isDefaultPrevented()))
          return (
            s.removeClass("in"),
            t.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", n)
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : n(),
            (this.hoverState = null),
            this
          );
      }),
      (i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (i.prototype.hasContent = function() {
        return this.getTitle();
      }),
      (i.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
          n = "BODY" == i.tagName,
          r = i.getBoundingClientRect();
        null == r.width &&
          (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
          }));
        var s = window.SVGElement && i instanceof window.SVGElement,
          o = n ? {top: 0, left: 0} : s ? null : e.offset(),
          a = {
            scroll: n
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop()
          },
          l = n ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, r, a, l, o);
      }),
      (i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t
          ? {top: e.top + e.height, left: e.left + e.width / 2 - i / 2}
          : "top" == t
          ? {top: e.top - n, left: e.left + e.width / 2 - i / 2}
          : "left" == t
          ? {top: e.top + e.height / 2 - n / 2, left: e.left - i}
          : {top: e.top + e.height / 2 - n / 2, left: e.left + e.width};
      }),
      (i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var r = {top: 0, left: 0};
        if (!this.$viewport) return r;
        var s = (this.options.viewport && this.options.viewport.padding) || 0,
          o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var a = e.top - s - o.scroll,
            l = e.top + s - o.scroll + n;
          a < o.top
            ? (r.top = o.top - a)
            : l > o.top + o.height && (r.top = o.top + o.height - l);
        } else {
          var u = e.left - s,
            h = e.left + s + i;
          u < o.left
            ? (r.left = o.left - u)
            : h > o.right && (r.left = o.left + o.width - h);
        }
        return r;
      }),
      (i.prototype.getTitle = function() {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-original-title") ||
          ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        );
      }),
      (i.prototype.getUID = function(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      }),
      (i.prototype.tip = function() {
        if (
          !this.$tip &&
          ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (i.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (i.prototype.enable = function() {
        this.enabled = !0;
      }),
      (i.prototype.disable = function() {
        this.enabled = !1;
      }),
      (i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
      }),
      (i.prototype.toggle = function(e) {
        var i = this;
        e &&
          ((i = t(e.currentTarget).data("bs." + this.type)) ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i))),
          e
            ? ((i.inState.click = !i.inState.click),
              i.isInStateTrue() ? i.enter(i) : i.leave(i))
            : i.tip().hasClass("in")
            ? i.leave(i)
            : i.enter(i);
      }),
      (i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null),
              (t.$element = null);
          });
      });
    var n = t.fn.tooltip;
    (t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = i),
      (t.fn.tooltip.noConflict = function() {
        return (t.fn.tooltip = n), this;
      });
  })(jQuery),
  (function(t) {
    "use strict";
    function e(e) {
      return this.each(function() {
        var n = t(this),
          r = n.data("bs.popover"),
          s = "object" == typeof e && e;
        (!r && /destroy|hide/.test(e)) ||
          (r || n.data("bs.popover", (r = new i(this, s))),
          "string" == typeof e && r[e]());
      });
    }
    var i = function(t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (i.VERSION = "3.4.0"),
      (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      })),
      (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (i.prototype.constructor = i),
      (i.prototype.getDefaults = function() {
        return i.DEFAULTS;
      }),
      (i.prototype.setContent = function() {
        var t = this.tip(),
          e = this.getTitle(),
          i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof i
                  ? "html"
                  : "append"
                : "text"
            ](i),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
      }),
      (i.prototype.getContent = function() {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (i.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var n = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = i),
      (t.fn.popover.noConflict = function() {
        return (t.fn.popover = n), this;
      });
  })(jQuery),
  (function(t, e, i, n) {
    function r(e, i) {
      (this.settings = null),
        (this.options = t.extend({}, r.Defaults, i)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {start: null, current: null},
          direction: null
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"]
          }
        }),
        t.each(
          ["onResize", "onThrottledResize"],
          t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this);
          }, this)
        ),
        t.each(
          r.Plugins,
          t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          r.Workers,
          t.proxy(function(e, i) {
            this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)});
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (r.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab"
    }),
      (r.Width = {Default: "default", Inner: "inner", Outer: "outer"}),
      (r.Type = {Event: "event", State: "state"}),
      (r.Plugins = {}),
      (r.Workers = [
        {
          filter: ["width", "settings"],
          run: function() {
            this._width = this.$element.width();
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            t.current =
              this._items && this._items[this.relative(this._current)];
          }
        },
        {
          filter: ["items", "settings"],
          run: function() {
            this.$stage.children(".cloned").remove();
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            var e = this.settings.margin || "",
              i = !this.settings.autoWidth,
              n = this.settings.rtl,
              r = {
                width: "auto",
                "margin-left": n ? e : "",
                "margin-right": n ? "" : e
              };
            !i && this.$stage.children().css(r), (t.css = r);
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            var e =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              i = null,
              n = this._items.length,
              r = !this.settings.autoWidth,
              s = [];
            for (t.items = {merge: !1, width: e}; n--; )
              (i = this._mergers[n]),
                (i =
                  (this.settings.mergeFit &&
                    Math.min(i, this.settings.items)) ||
                  i),
                (t.items.merge = i > 1 || t.items.merge),
                (s[n] = r ? e * i : this._items[n].width());
            this._widths = s;
          }
        },
        {
          filter: ["items", "settings"],
          run: function() {
            var e = [],
              i = this._items,
              n = this.settings,
              r = Math.max(2 * n.items, 4),
              s = 2 * Math.ceil(i.length / 2),
              o = n.loop && i.length ? (n.rewind ? r : Math.max(r, s)) : 0,
              a = "",
              l = "";
            for (o /= 2; o > 0; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += i[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                (l = i[e[e.length - 1]][0].outerHTML + l),
                (o -= 1);
            (this._clones = e),
              t(a)
                .addClass("cloned")
                .appendTo(this.$stage),
              t(l)
                .addClass("cloned")
                .prependTo(this.$stage);
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function() {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                i = -1,
                n = 0,
                r = 0,
                s = [];
              ++i < e;

            )
              (n = s[i - 1] || 0),
                (r = this._widths[this.relative(i)] + this.settings.margin),
                s.push(n + r * t);
            this._coordinates = s;
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function() {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
              };
            this.$stage.css(i);
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            var e = this._coordinates.length,
              i = !this.settings.autoWidth,
              n = this.$stage.children();
            if (i && t.items.merge)
              for (; e--; )
                (t.css.width = this._widths[this.relative(e)]),
                  n.eq(e).css(t.css);
            else i && ((t.css.width = t.items.width), n.css(t.css));
          }
        },
        {
          filter: ["items"],
          run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          }
        },
        {
          filter: ["width", "items", "settings"],
          run: function(t) {
            (t.current = t.current
              ? this.$stage.children().index(t.current)
              : 0),
              (t.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), t.current)
              )),
              this.reset(t.current);
          }
        },
        {
          filter: ["position"],
          run: function() {
            this.animate(this.coordinates(this._current));
          }
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function() {
            var t,
              e,
              i,
              n,
              r = this.settings.rtl ? 1 : -1,
              s = 2 * this.settings.stagePadding,
              o = this.coordinates(this.current()) + s,
              a = o + this.width() * r,
              l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++)
              (t = this._coordinates[i - 1] || 0),
                (e = Math.abs(this._coordinates[i]) + s * r),
                ((this.op(t, "<=", o) && this.op(t, ">", a)) ||
                  (this.op(e, "<", o) && this.op(e, ">", a))) &&
                  l.push(i);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass("active"),
              this.$stage.children(".center").removeClass("center"),
              this.settings.center &&
                this.$stage
                  .children()
                  .eq(this.current())
                  .addClass("center");
          }
        }
      ]),
      (r.prototype.initializeStage = function() {
        (this.$stage = this.$element.find("." + this.settings.stageClass)),
          this.$stage.length ||
            (this.$element.addClass(this.options.loadingClass),
            (this.$stage = t("<" + this.settings.stageElement + ">", {
              class: this.settings.stageClass
            }).wrap(t("<div/>", {class: this.settings.stageOuterClass}))),
            this.$element.append(this.$stage.parent()));
      }),
      (r.prototype.initializeItems = function() {
        var e = this.$element.find(".owl-item");
        if (e.length)
          return (
            (this._items = e.get().map(function(e) {
              return t(e);
            })),
            (this._mergers = this._items.map(function() {
              return 1;
            })),
            void this.refresh()
          );
        this.replace(this.$element.children().not(this.$stage.parent())),
          this.isVisible() ? this.refresh() : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
      }),
      (r.prototype.initialize = function() {
        var t, e, i;
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) &&
          ((t = this.$element.find("img")),
          (e = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : n),
          (i = this.$element.children(e).width()),
          t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(),
          this.initializeItems(),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (r.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible");
      }),
      (r.prototype.setup = function() {
        var e = this.viewport(),
          i = this.options.responsive,
          n = -1,
          r = null;
        i
          ? (t.each(i, function(t) {
              t <= e && t > n && (n = Number(t));
            }),
            "function" ==
              typeof (r = t.extend({}, this.options, i[n])).stagePadding &&
              (r.stagePadding = r.stagePadding()),
            delete r.responsive,
            r.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + n
                  )
              ))
          : (r = t.extend({}, this.options)),
          this.trigger("change", {property: {name: "settings", value: r}}),
          (this._breakpoint = n),
          (this.settings = r),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: {name: "settings", value: this.settings}
          });
      }),
      (r.prototype.optionsLogic = function() {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (r.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {content: e});
        return (
          i.data ||
            (i.data = t("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger("prepared", {content: i.data}),
          i.data
        );
      }),
      (r.prototype.update = function() {
        for (
          var e = 0,
            i = this._pipe.length,
            n = t.proxy(function(t) {
              return this[t];
            }, this._invalidated),
            r = {};
          e < i;

        )
          (this._invalidated.all ||
            t.grep(this._pipe[e].filter, n).length > 0) &&
            this._pipe[e].run(r),
            e++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (r.prototype.width = function(t) {
        switch ((t = t || r.Width.Default)) {
          case r.Width.Inner:
          case r.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (r.prototype.refresh = function() {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (r.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (r.prototype.onResize = function() {
        return (
          !!this._items.length &&
          (this._width !== this.$element.width() &&
            (!!this.isVisible() &&
              (this.enter("resizing"),
              this.trigger("resize").isDefaultPrevented()
                ? (this.leave("resizing"), !1)
                : (this.invalidate("width"),
                  this.refresh(),
                  this.leave("resizing"),
                  void this.trigger("resized")))))
        );
      }),
      (r.prototype.registerEventHandlers = function() {
        t.support.transition &&
          this.$stage.on(
            t.support.transition.end + ".owl.core",
            t.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function() {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              t.proxy(this.onDragEnd, this)
            ));
      }),
      (r.prototype.onDragStart = function(e) {
        var n = null;
        3 !== e.which &&
          (t.support.transform
            ? (n = {
                x: (n = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(","))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
              })
            : ((n = this.$stage.position()),
              (n = {
                x: this.settings.rtl
                  ? n.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : n.left,
                y: n.top
              })),
          this.is("animating") &&
            (t.support.transform ? this.animate(n.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = n),
          (this._drag.stage.current = n),
          (this._drag.pointer = this.pointer(e)),
          t(i).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(i).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function(e) {
              var n = this.difference(this._drag.pointer, this.pointer(e));
              t(i).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) ||
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (r.prototype.onDragMove = function(t) {
        var e = null,
          i = null,
          n = null,
          r = this.difference(this._drag.pointer, this.pointer(t)),
          s = this.difference(this._drag.stage.start, r);
        this.is("dragging") &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (i = this.coordinates(this.maximum() + 1) - e),
              (s.x = ((((s.x - e) % i) + i) % i) + e))
            : ((e = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (i = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (n = this.settings.pullDrag ? (-1 * r.x) / 5 : 0),
              (s.x = Math.max(Math.min(s.x, e + n), i + n))),
          (this._drag.stage.current = s),
          this.animate(s.x));
      }),
      (r.prototype.onDragEnd = function(e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
          r = this._drag.stage.current,
          s = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(r.x, 0 !== n.x ? s : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = s),
            (Math.abs(n.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function() {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (r.prototype.closest = function(e, i) {
        var r = -1,
          s = 30,
          o = this.width(),
          a = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              a,
              t.proxy(function(t, l) {
                return (
                  "left" === i && e > l - s && e < l + s
                    ? (r = t)
                    : "right" === i && e > l - o - s && e < l - o + s
                    ? (r = t + 1)
                    : this.op(e, "<", l) &&
                      this.op(e, ">", a[t + 1] !== n ? a[t + 1] : l - o) &&
                      (r = "left" === i ? t + 1 : t),
                  -1 === r
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, ">", a[this.minimum()])
              ? (r = e = this.minimum())
              : this.op(e, "<", a[this.maximum()]) && (r = e = this.maximum())),
          r
        );
      }),
      (r.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          i && (this.enter("animating"), this.trigger("translate")),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition:
                  this.speed() / 1e3 +
                  "s" +
                  (this.settings.slideTransition
                    ? " " + this.settings.slideTransition
                    : "")
              })
            : i
            ? this.$stage.animate(
                {left: e + "px"},
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({left: e + "px"});
      }),
      (r.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (r.prototype.current = function(t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (((t = this.normalize(t)), this._current !== t)) {
          var e = this.trigger("change", {
            property: {name: "position", value: t}
          });
          e.data !== n && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate("position"),
            this.trigger("changed", {
              property: {name: "position", value: this._current}
            });
        }
        return this._current;
      }),
      (r.prototype.invalidate = function(e) {
        return (
          "string" === t.type(e) &&
            ((this._invalidated[e] = !0),
            this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function(t, e) {
            return e;
          })
        );
      }),
      (r.prototype.reset = function(t) {
        (t = this.normalize(t)) !== n &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
      }),
      (r.prototype.normalize = function(t, e) {
        var i = this._items.length,
          r = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || i < 1
            ? (t = n)
            : (t < 0 || t >= i + r) &&
              (t = ((((t - r / 2) % i) + i) % i) + r / 2),
          t
        );
      }),
      (r.prototype.relative = function(t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0);
      }),
      (r.prototype.maximum = function(t) {
        var e,
          i,
          n,
          r = this.settings,
          s = this._coordinates.length;
        if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (r.autoWidth || r.merge) {
          if ((e = this._items.length))
            for (
              i = this._items[--e].width(), n = this.$element.width();
              e-- &&
              !((i += this._items[e].width() + this.settings.margin) > n);

            );
          s = e + 1;
        } else
          s = r.center ? this._items.length - 1 : this._items.length - r.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0);
      }),
      (r.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (r.prototype.items = function(t) {
        return t === n
          ? this._items.slice()
          : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (r.prototype.mergers = function(t) {
        return t === n
          ? this._mergers.slice()
          : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (r.prototype.clones = function(e) {
        var i = this._clones.length / 2,
          r = i + this._items.length,
          s = function(t) {
            return t % 2 == 0 ? r + t / 2 : i - (t + 1) / 2;
          };
        return e === n
          ? t.map(this._clones, function(t, e) {
              return s(e);
            })
          : t.map(this._clones, function(t, i) {
              return t === e ? s(i) : null;
            });
      }),
      (r.prototype.speed = function(t) {
        return t !== n && (this._speed = t), this._speed;
      }),
      (r.prototype.coordinates = function(e) {
        var i,
          r = 1,
          s = e - 1;
        return e === n
          ? t.map(
              this._coordinates,
              t.proxy(function(t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((r = -1), (s = e + 1)),
                (i = this._coordinates[e]),
                (i +=
                  ((this.width() - i + (this._coordinates[s] || 0)) / 2) * r))
              : (i = this._coordinates[s] || 0),
            (i = Math.ceil(i)));
      }),
      (r.prototype.duration = function(t, e, i) {
        return 0 === i
          ? 0
          : Math.min(Math.max(Math.abs(e - t), 1), 6) *
              Math.abs(i || this.settings.smartSpeed);
      }),
      (r.prototype.to = function(t, e) {
        var i = this.current(),
          n = null,
          r = t - this.relative(i),
          s = (r > 0) - (r < 0),
          o = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o),
            (n = (((((t = i + r) - a) % o) + o) % o) + a) !== t &&
              n - r <= l &&
              n - r > 0 &&
              ((i = n - r), (t = n), this.reset(i)))
          : (t = this.settings.rewind
              ? ((t % (l += 1)) + l) % l
              : Math.max(a, Math.min(l, t))),
          this.speed(this.duration(i, t, e)),
          this.current(t),
          this.isVisible() && this.update();
      }),
      (r.prototype.next = function(t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (r.prototype.prev = function(t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (r.prototype.onTransitionEnd = function(t) {
        if (
          t !== n &&
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (r.prototype.viewport = function() {
        var n;
        return (
          this.options.responsiveBaseElement !== e
            ? (n = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (n = e.innerWidth)
            : i.documentElement && i.documentElement.clientWidth
            ? (n = i.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          n
        );
      }),
      (r.prototype.replace = function(e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function() {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function(t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (r.prototype.add = function(e, i) {
        var r = this.relative(this._current);
        (i = i === n ? this._items.length : this.normalize(i, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger("add", {content: e, position: i}),
          (e = this.prepare(e)),
          0 === this._items.length || i === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[i - 1].after(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[i].before(e),
              this._items.splice(i, 0, e),
              this._mergers.splice(
                i,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[r] && this.reset(this._items[r].index()),
          this.invalidate("items"),
          this.trigger("added", {content: e, position: i});
      }),
      (r.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== n &&
          (this.trigger("remove", {content: this._items[t], position: t}),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", {content: null, position: t}));
      }),
      (r.prototype.preloadAutoWidthImages = function(e) {
        e.each(
          t.proxy(function(e, i) {
            this.enter("pre-loading"),
              (i = t(i)),
              t(new Image())
                .one(
                  "load",
                  t.proxy(function(t) {
                    i.attr("src", t.target.src),
                      i.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  i.attr("src") ||
                    i.attr("data-src") ||
                    i.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (r.prototype.destroy = function() {
        for (var n in (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(i).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage
            .children()
            .contents()
            .unwrap(),
          this.$stage.children().unwrap(),
          this.$stage.remove(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (r.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
          case "<":
            return n ? t > i : t < i;
          case ">":
            return n ? t < i : t > i;
          case ">=":
            return n ? t <= i : t >= i;
          case "<=":
            return n ? t >= i : t <= i;
        }
      }),
      (r.prototype.on = function(t, e, i, n) {
        t.addEventListener
          ? t.addEventListener(e, i, n)
          : t.attachEvent && t.attachEvent("on" + e, i);
      }),
      (r.prototype.off = function(t, e, i, n) {
        t.removeEventListener
          ? t.removeEventListener(e, i, n)
          : t.detachEvent && t.detachEvent("on" + e, i);
      }),
      (r.prototype.trigger = function(e, i, n) {
        var s = {item: {count: this._items.length, index: this.current()}},
          o = t.camelCase(
            t
              .grep(["on", e, n], function(t) {
                return t;
              })
              .join("-")
              .toLowerCase()
          ),
          a = t.Event(
            [e, "owl", n || "carousel"].join(".").toLowerCase(),
            t.extend({relatedTarget: this}, s, i)
          );
        return (
          this._supress[e] ||
            (t.each(this._plugins, function(t, e) {
              e.onTrigger && e.onTrigger(a);
            }),
            this.register({type: r.Type.Event, name: e}),
            this.$element.trigger(a),
            this.settings &&
              "function" == typeof this.settings[o] &&
              this.settings[o].call(this, a)),
          a
        );
      }),
      (r.prototype.enter = function(e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function(t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (r.prototype.leave = function(e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function(t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (r.prototype.register = function(e) {
        if (e.type === r.Type.Event) {
          if (
            (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
          ) {
            var i = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function(t) {
              return !i ||
                !i.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && t.namespace.indexOf("owl") > -1
                : i.apply(this, arguments);
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === r.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                  e.tags
                ))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function(i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n;
              }, this)
            )));
      }),
      (r.prototype.suppress = function(e) {
        t.each(
          e,
          t.proxy(function(t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (r.prototype.release = function(e) {
        t.each(
          e,
          t.proxy(function(t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (r.prototype.pointer = function(t) {
        var i = {x: null, y: null};
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((i.x = t.pageX), (i.y = t.pageY))
            : ((i.x = t.clientX), (i.y = t.clientY)),
          i
        );
      }),
      (r.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t));
      }),
      (r.prototype.difference = function(t, e) {
        return {x: t.x - e.x, y: t.y - e.y};
      }),
      (t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
          var n = t(this),
            s = n.data("owl.carousel");
          s ||
            ((s = new r(this, "object" == typeof e && e)),
            n.data("owl.carousel", s),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove"
              ],
              function(e, i) {
                s.register({type: r.Type.Event, name: i}),
                  s.$element.on(
                    i + ".owl.carousel.core",
                    t.proxy(function(t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([i]),
                        s[i].apply(this, [].slice.call(arguments, 1)),
                        this.release([i]));
                    }, s)
                  );
              }
            )),
            "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i);
        });
      }),
      (t.fn.owlCarousel.Constructor = r);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e) {
    var i = function(e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function(t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this)
        }),
        (this._core.options = t.extend({}, i.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (i.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}),
      (i.prototype.watch = function() {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (i.prototype.refresh = function() {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (i.prototype.destroy = function() {
        var t, i;
        for (t in (e.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, i, n) {
    var r = function(e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(
            function(e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              ) {
                var i = this._core.settings,
                  r = (i.center && Math.ceil(i.items / 2)) || i.items,
                  s = (i.center && -1 * r) || 0,
                  o =
                    (e.property && e.property.value !== n
                      ? e.property.value
                      : this._core.current()) + s,
                  a = this._core.clones().length,
                  l = t.proxy(function(t, e) {
                    this.load(e);
                  }, this);
                for (
                  i.lazyLoadEager > 0 &&
                  ((r += i.lazyLoadEager),
                  i.loop && ((o -= i.lazyLoadEager), r++));
                  s++ < r;

                )
                  this.load(a / 2 + this._core.relative(o)),
                    a && t.each(this._core.clones(this._core.relative(o)), l),
                    o++;
              }
            },
            this
          )
        }),
        (this._core.options = t.extend({}, r.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (r.Defaults = {lazyLoad: !1, lazyLoadEager: 0}),
      (r.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i),
          r = n && n.find(".owl-lazy");
        !r ||
          t.inArray(n.get(0), this._loaded) > -1 ||
          (r.each(
            t.proxy(function(i, n) {
              var r,
                s = t(n),
                o =
                  (e.devicePixelRatio > 1 && s.attr("data-src-retina")) ||
                  s.attr("data-src") ||
                  s.attr("data-srcset");
              this._core.trigger("load", {element: s, url: o}, "lazy"),
                s.is("img")
                  ? s
                      .one(
                        "load.owl.lazy",
                        t.proxy(function() {
                          s.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              {element: s, url: o},
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", o)
                  : s.is("source")
                  ? s
                      .one(
                        "load.owl.lazy",
                        t.proxy(function() {
                          this._core.trigger(
                            "loaded",
                            {element: s, url: o},
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", o)
                  : (((r = new Image()).onload = t.proxy(function() {
                      s.css({
                        "background-image": 'url("' + o + '")',
                        opacity: "1"
                      }),
                        this._core.trigger(
                          "loaded",
                          {element: s, url: o},
                          "lazy"
                        );
                    }, this)),
                    (r.src = o));
            }, this)
          ),
          this._loaded.push(n.get(0)));
      }),
      (r.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = r);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e) {
    var i = function(n) {
      (this._core = n),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" === t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this)
        }),
        (this._core.options = t.extend({}, i.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var r = this;
      t(e).on("load", function() {
        r._core.settings.autoHeight && r.update();
      }),
        t(e).resize(function() {
          r._core.settings.autoHeight &&
            (null != r._intervalId && clearTimeout(r._intervalId),
            (r._intervalId = setTimeout(function() {
              r.update();
            }, 250)));
        });
    };
    (i.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}),
      (i.prototype.update = function() {
        var e = this._core._current,
          i = e + this._core.settings.items,
          n = this._core.settings.lazyLoad,
          r = this._core.$stage
            .children()
            .toArray()
            .slice(e, i),
          s = [],
          o = 0;
        t.each(r, function(e, i) {
          s.push(t(i).height());
        }),
          (o = Math.max.apply(null, s)) <= 1 &&
            n &&
            this._previousHeight &&
            (o = this._previousHeight),
          (this._previousHeight = o),
          this._core.$stage
            .parent()
            .height(o)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (i.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = i);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, i) {
    var n = function(e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"]
              });
          }, this),
          "resize.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function(e) {
            if (e.namespace) {
              var i = t(e.content).find(".owl-video");
              i.length &&
                (i.css("display", "none"), this.fetch(i, t(e.content)));
            }
          }, this)
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function(t) {
            this.play(t);
          }, this)
        );
    };
    (n.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}),
      (n.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          n =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          r = t.attr("data-width") || this._core.settings.videoWidth,
          s = t.attr("data-height") || this._core.settings.videoHeight,
          o = t.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if (
          (n = o.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu") > -1
        )
          i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
          if (!(n[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (n = n[6]),
          (this._videos[o] = {type: i, id: n, width: r, height: s}),
          e.attr("data-video", o),
          this.thumbnail(t, this._videos[o]);
      }),
      (n.prototype.thumbnail = function(e, i) {
        var n,
          r,
          s,
          o =
            i.width && i.height
              ? "width:" + i.width + "px;height:" + i.height + "px;"
              : "",
          a = e.find("img"),
          l = "src",
          u = "",
          h = this._core.settings,
          c = function(i) {
            (r = '<div class="owl-video-play-icon"></div>'),
              (n = h.lazyLoad
                ? t("<div/>", {class: "owl-video-tn " + u, srcType: i})
                : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")"
                  })),
              e.after(n),
              e.after(r);
          };
        if (
          (e.wrap(t("<div/>", {class: "owl-video-wrapper", style: o})),
          this._core.settings.lazyLoad && ((l = "data-src"), (u = "owl-lazy")),
          a.length)
        )
          return c(a.attr(l)), a.remove(), !1;
        "youtube" === i.type
          ? ((s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), c(s))
          : "vimeo" === i.type
          ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(t) {
                (s = t[0].thumbnail_large), c(s);
              }
            })
          : "vzaar" === i.type &&
            t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(t) {
                (s = t.framegrab_url), c(s);
              }
            });
      }),
      (n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (n.prototype.play = function(e) {
        var i,
          n = t(e.target).closest("." + this._core.settings.itemClass),
          r = this._videos[n.attr("data-video")],
          s = r.width || "100%",
          o = r.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (n = this._core.items(this._core.relative(n.index()))),
          this._core.reset(n.index()),
          (i = t(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )).attr("height", o),
          i.attr("width", s),
          "youtube" === r.type
            ? i.attr(
                "src",
                "//www.youtube.com/embed/" +
                  r.id +
                  "?autoplay=1&rel=0&v=" +
                  r.id
              )
            : "vimeo" === r.type
            ? i.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1")
            : "vzaar" === r.type &&
              i.attr(
                "src",
                "//view.vzaar.com/" + r.id + "/player?autoplay=true"
              ),
          t(i)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(n.find(".owl-video")),
          (this._playing = n.addClass("owl-video-playing")));
      }),
      (n.prototype.isInFullScreen = function() {
        var e =
          i.fullscreenElement ||
          i.mozFullScreenElement ||
          i.webkitFullscreenElement;
        return (
          e &&
          t(e)
            .parent()
            .hasClass("owl-video-frame")
        );
      }),
      (n.prototype.destroy = function() {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = n);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, i, n) {
    var r = function(e) {
      (this.core = e),
        (this.core.options = t.extend({}, r.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = n),
        (this.next = n),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(
            function(t) {
              t.namespace && (this.swapping = "translated" == t.type);
            },
            this
          ),
          "translate.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this)
        }),
        this.core.$element.on(this.handlers);
    };
    (r.Defaults = {animateOut: !1, animateIn: !1}),
      (r.prototype.swap = function() {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            i = t.proxy(this.clear, this),
            n = this.core.$stage.children().eq(this.previous),
            r = this.core.$stage.children().eq(this.next),
            s = this.core.settings.animateIn,
            o = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (o &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              n
                .one(t.support.animation.end, i)
                .css({left: e + "px"})
                .addClass("animated owl-animated-out")
                .addClass(o)),
            s &&
              r
                .one(t.support.animation.end, i)
                .addClass("animated owl-animated-in")
                .addClass(s));
        }
      }),
      (r.prototype.clear = function(e) {
        t(e.target)
          .css({left: ""})
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (r.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = r);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, i) {
    var n = function(e) {
      (this._core = e),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function(t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": t.proxy(function(t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function(t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": t.proxy(function(t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function() {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function() {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function() {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function() {
            this._core.settings.autoplayHoverPause && this.play();
          }, this)
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, n.Defaults, this._core.options));
    };
    (n.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }),
      (n.prototype._next = function(n) {
        (this._call = e.setTimeout(
          t.proxy(this._next, this, n),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            i.hidden ||
            this._core.next(n || this._core.settings.autoplaySpeed);
      }),
      (n.prototype.read = function() {
        return new Date().getTime() - this._time;
      }),
      (n.prototype.play = function(i, n) {
        var r;
        this._core.is("rotating") || this._core.enter("rotating"),
          (i = i || this._core.settings.autoplayTimeout),
          (r = Math.min(this._time % (this._timeout || i), i)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : e.clearTimeout(this._call),
          (this._time += (this.read() % i) - r),
          (this._timeout = i),
          (this._call = e.setTimeout(t.proxy(this._next, this, n), i - r));
      }),
      (n.prototype.stop = function() {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          e.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (n.prototype.pause = function() {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          e.clearTimeout(this._call));
      }),
      (n.prototype.destroy = function() {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = n);
  })(window.Zepto || window.jQuery, window, document),
  (function(t) {
    "use strict";
    var e = function(i) {
      (this._core = i),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function(e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function(t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function(t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this)
        }),
        (this._core.options = t.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>'
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
    }),
      (e.prototype.initialize = function() {
        var e,
          i = this._core.settings;
        for (e in ((this._controls.$relative = (i.navContainer
          ? t(i.navContainer)
          : t("<div>")
              .addClass(i.navContainerClass)
              .appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = t("<" + i.navElement + ">")
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function() {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = t("<" + i.navElement + ">")
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function() {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            t('<button role="button">')
              .addClass(i.dotClass)
              .append(t("<span>"))
              .prop("outerHTML")
          ]),
        (this._controls.$absolute = (i.dotsContainer
          ? t(i.dotsContainer)
          : t("<div>")
              .addClass(i.dotsClass)
              .appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "button",
          t.proxy(function(e) {
            var n = t(e.target)
              .parent()
              .is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target)
                  .parent()
                  .index();
            e.preventDefault(), this.to(n, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this);
      }),
      (e.prototype.destroy = function() {
        var t, e, i, n, r;
        for (t in ((r = this._core.settings), this._handlers))
          this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
          "$relative" === e && r.navContainer
            ? this._controls[e].html("")
            : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (e.prototype.update = function() {
        var t,
          e,
          i = this._core.clones().length / 2,
          n = i + this._core.items().length,
          r = this._core.maximum(!0),
          s = this._core.settings,
          o = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if (
          ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)),
          s.dots || "page" == s.slideBy)
        )
          for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
            if (e >= o || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(r, t - i),
                  end: t - i + o - 1
                }),
                Math.min(r, t - i) === r)
              )
                break;
              (e = 0), 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (e.prototype.draw = function() {
        var e,
          i = this._core.settings,
          n = this._core.items().length <= i.items,
          r = this._core.relative(this._core.current()),
          s = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n),
          i.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !s && r <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !s && r >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !i.dots || n),
          i.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
              : e < 0 &&
                this._controls.$absolute
                  .children()
                  .slice(e)
                  .remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            i &&
            (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        };
      }),
      (e.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function(t) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function(e) {
        var i,
          n,
          r = this._core.settings;
        return (
          "page" == r.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              (n = this._pages.length),
              e ? ++i : --i,
              (i = this._pages[((i % n) + n) % n].start))
            : ((i = this._core.relative(this._core.current())),
              (n = this._core.items().length),
              e ? (i += r.slideBy) : (i -= r.slideBy)),
          i
        );
      }),
      (e.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (e.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (e.prototype.to = function(e, i, n) {
        var r;
        !n && this._pages.length
          ? ((r = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % r) + r) % r].start,
              i
            ))
          : t.proxy(this._overrides.to, this._core)(e, i);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, i, n) {
    "use strict";
    var r = function(i) {
      (this._core = i),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function(i) {
            i.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function(e) {
            if (e.namespace) {
              var i = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!i) return;
              this._hashes[i] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function(i) {
            if (i.namespace && "position" === i.property.name) {
              var n = this._core.items(
                  this._core.relative(this._core.current())
                ),
                r = t
                  .map(this._hashes, function(t, e) {
                    return t === n ? e : null;
                  })
                  .join();
              if (!r || e.location.hash.slice(1) === r) return;
              e.location.hash = r;
            }
          }, this)
        }),
        (this._core.options = t.extend({}, r.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function() {
            var t = e.location.hash.substring(1),
              i = this._core.$stage.children(),
              r = this._hashes[t] && i.index(this._hashes[t]);
            r !== n &&
              r !== this._core.current() &&
              this._core.to(this._core.relative(r), !1, !0);
          }, this)
        );
    };
    (r.Defaults = {URLhashListener: !1}),
      (r.prototype.destroy = function() {
        var i, n;
        for (i in (t(e).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = r);
  })(window.Zepto || window.jQuery, window, document),
  (function(t, e, i, n) {
    function r(e, i) {
      var r = !1,
        s = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + a.join(s + " ") + s).split(" "), function(t, e) {
          if (o[e] !== n) return (r = !i || e), !1;
        }),
        r
      );
    }
    function s(t) {
      return r(t, !0);
    }
    var o = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      l = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
          }
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend"
          }
        }
      },
      u = {
        csstransforms: function() {
          return !!r("transform");
        },
        csstransforms3d: function() {
          return !!r("perspective");
        },
        csstransitions: function() {
          return !!r("transition");
        },
        cssanimations: function() {
          return !!r("animation");
        }
      };
    u.csstransitions() &&
      ((t.support.transition = new String(s("transition"))),
      (t.support.transition.end = l.transition.end[t.support.transition])),
      u.cssanimations() &&
        ((t.support.animation = new String(s("animation"))),
        (t.support.animation.end = l.animation.end[t.support.animation])),
      u.csstransforms() &&
        ((t.support.transform = new String(s("transform"))),
        (t.support.transform3d = u.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document));
/*!
 * VERSION: 1.20.5
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
  "use strict";
  var t, e, i, n, r, s, o, a, l, u, h, c, p, d, f, m, g;
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function(t, e, i) {
      var n = function(t) {
          var e,
            i = [],
            n = t.length;
          for (e = 0; e !== n; i.push(t[e++]));
          return i;
        },
        r = function(t, e, i) {
          var n,
            r,
            s = t.cycle;
          for (n in s)
            (r = s[n]),
              (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
          delete t.cycle;
        },
        s = function(t, e, n) {
          i.call(this, t, e, n),
            (this._cycle = 0),
            (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._repeat && this._uncache(!0),
            (this.render = s.prototype.render);
        },
        o = 1e-10,
        a = i._internals,
        l = a.isSelector,
        u = a.isArray,
        h = (s.prototype = i.to({}, 0.1, {})),
        c = [];
      (s.version = "1.20.5"),
        (h.constructor = s),
        (h.kill()._gc = !1),
        (s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf),
        (s.getTweensOf = i.getTweensOf),
        (s.lagSmoothing = i.lagSmoothing),
        (s.ticker = i.ticker),
        (s.render = i.render),
        (h.invalidate = function() {
          return (
            (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._yoyoEase = null),
            this._uncache(!0),
            i.prototype.invalidate.call(this)
          );
        }),
        (h.updateTo = function(t, e) {
          var n,
            r = this.ratio,
            s = this.vars.immediateRender || t.immediateRender;
          for (n in (e &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay)),
          t))
            this.vars[n] = t[n];
          if (this._initted || s)
            if (e) (this._initted = !1), s && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                i._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var o = this._totalTime;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(o, !0, !1);
            } else if (
              ((this._initted = !1), this._init(), this._time > 0 || s)
            )
              for (var a, l = 1 / (1 - r), u = this._firstPT; u; )
                (a = u.s + u.c), (u.c *= l), (u.s = a - u.c), (u = u._next);
          return this;
        }),
        (h.render = function(t, e, n) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var r,
            s,
            l,
            u,
            h,
            c,
            p,
            d,
            f,
            m = this._dirty ? this.totalDuration() : this._totalDuration,
            g = this._time,
            y = this._totalTime,
            v = this._cycle,
            _ = this._duration,
            b = this._rawPrevTime;
          if (
            (t >= m - 1e-7 && t >= 0
              ? ((this._totalTime = m),
                (this._cycle = this._repeat),
                this._yoyo && 0 != (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = _),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((r = !0),
                  (s = "onComplete"),
                  (n = n || this._timeline.autoRemoveChildren)),
                0 === _ &&
                  (this._initted || !this.vars.lazy || n) &&
                  (this._startTime === this._timeline._duration && (t = 0),
                  (b < 0 ||
                    (t <= 0 && t >= -1e-7) ||
                    (b === o && "isPause" !== this.data)) &&
                    b !== t &&
                    ((n = !0), b > o && (s = "onReverseComplete")),
                  (this._rawPrevTime = d = !e || t || b === t ? t : o)))
              : t < 1e-7
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== y || (0 === _ && b > 0)) &&
                  ((s = "onReverseComplete"), (r = this._reversed)),
                t < 0 &&
                  ((this._active = !1),
                  0 === _ &&
                    (this._initted || !this.vars.lazy || n) &&
                    (b >= 0 && (n = !0),
                    (this._rawPrevTime = d = !e || t || b === t ? t : o))),
                this._initted || (n = !0))
              : ((this._totalTime = this._time = t),
                0 !== this._repeat &&
                  ((u = _ + this._repeatDelay),
                  (this._cycle = (this._totalTime / u) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / u &&
                    y <= t &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * u),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    ((this._time = _ - this._time),
                    (f = this._yoyoEase || this.vars.yoyoEase) &&
                      (this._yoyoEase ||
                        (!0 !== f || this._initted
                          ? (this._yoyoEase = f =
                              !0 === f
                                ? this._ease
                                : f instanceof Ease
                                ? f
                                : Ease.map[f])
                          : ((f = this.vars.ease),
                            (this._yoyoEase = f = f
                              ? f instanceof Ease
                                ? f
                                : "function" == typeof f
                                ? new Ease(f, this.vars.easeParams)
                                : Ease.map[f] || i.defaultEase
                              : i.defaultEase))),
                      (this.ratio = f
                        ? 1 - f.getRatio((_ - this._time) / _)
                        : 0))),
                  this._time > _
                    ? (this._time = _)
                    : this._time < 0 && (this._time = 0)),
                this._easeType && !f
                  ? ((h = this._time / _),
                    (1 === (c = this._easeType) || (3 === c && h >= 0.5)) &&
                      (h = 1 - h),
                    3 === c && (h *= 2),
                    1 === (p = this._easePower)
                      ? (h *= h)
                      : 2 === p
                      ? (h *= h * h)
                      : 3 === p
                      ? (h *= h * h * h)
                      : 4 === p && (h *= h * h * h * h),
                    1 === c
                      ? (this.ratio = 1 - h)
                      : 2 === c
                      ? (this.ratio = h)
                      : this._time / _ < 0.5
                      ? (this.ratio = h / 2)
                      : (this.ratio = 1 - h / 2))
                  : f || (this.ratio = this._ease.getRatio(this._time / _))),
            g !== this._time || n || v !== this._cycle)
          ) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !n &&
                this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = g),
                  (this._totalTime = y),
                  (this._rawPrevTime = b),
                  (this._cycle = v),
                  a.lazyTweens.push(this),
                  void (this._lazy = [t, e])
                );
              !this._time || r || f
                ? r &&
                  this._ease._calcEnd &&
                  !f &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                : (this.ratio = this._ease.getRatio(this._time / _));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== g &&
                    t >= 0 &&
                    (this._active = !0)),
                0 === y &&
                  (2 === this._initted && t > 0 && this._init(),
                  this._startAt &&
                    (t >= 0
                      ? this._startAt.render(t, !0, n)
                      : s || (s = "_dummyGS")),
                  this.vars.onStart &&
                    ((0 === this._totalTime && 0 !== _) ||
                      e ||
                      this._callback("onStart"))),
                l = this._firstPT;
              l;

            )
              l.f
                ? l.t[l.p](l.c * this.ratio + l.s)
                : (l.t[l.p] = l.c * this.ratio + l.s),
                (l = l._next);
            this._onUpdate &&
              (t < 0 &&
                this._startAt &&
                this._startTime &&
                this._startAt.render(t, !0, n),
              e ||
                ((this._totalTime !== y || s) && this._callback("onUpdate"))),
              this._cycle !== v &&
                (e ||
                  this._gc ||
                  (this.vars.onRepeat && this._callback("onRepeat"))),
              s &&
                ((this._gc && !n) ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startTime &&
                    this._startAt.render(t, !0, n),
                  r &&
                    (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    (this._active = !1)),
                  !e && this.vars[s] && this._callback(s),
                  0 === _ &&
                    this._rawPrevTime === o &&
                    d !== o &&
                    (this._rawPrevTime = 0)));
          } else
            y !== this._totalTime &&
              this._onUpdate &&
              (e || this._callback("onUpdate"));
        }),
        (s.to = function(t, e, i) {
          return new s(t, e, i);
        }),
        (s.from = function(t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new s(t, e, i)
          );
        }),
        (s.fromTo = function(t, e, i, n) {
          return (
            (n.startAt = i),
            (n.immediateRender =
              0 != n.immediateRender && 0 != i.immediateRender),
            new s(t, e, n)
          );
        }),
        (s.staggerTo = s.allTo = function(t, e, o, a, h, p, d) {
          a = a || 0;
          var f,
            m,
            g,
            y,
            v = 0,
            _ = [],
            b = function() {
              o.onComplete &&
                o.onComplete.apply(o.onCompleteScope || this, arguments),
                h.apply(d || o.callbackScope || this, p || c);
            },
            w = o.cycle,
            x = o.startAt && o.startAt.cycle;
          for (
            u(t) ||
              ("string" == typeof t && (t = i.selector(t) || t),
              l(t) && (t = n(t))),
              t = t || [],
              a < 0 && ((t = n(t)).reverse(), (a *= -1)),
              f = t.length - 1,
              g = 0;
            g <= f;
            g++
          ) {
            for (y in ((m = {}), o)) m[y] = o[y];
            if (
              (w &&
                (r(m, t, g),
                null != m.duration && ((e = m.duration), delete m.duration)),
              x)
            ) {
              for (y in ((x = m.startAt = {}), o.startAt)) x[y] = o.startAt[y];
              r(m.startAt, t, g);
            }
            (m.delay = v + (m.delay || 0)),
              g === f && h && (m.onComplete = b),
              (_[g] = new s(t[g], e, m)),
              (v += a);
          }
          return _;
        }),
        (s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            s.staggerTo(t, e, i, n, r, o, a)
          );
        }),
        (s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
          return (
            (n.startAt = i),
            (n.immediateRender =
              0 != n.immediateRender && 0 != i.immediateRender),
            s.staggerTo(t, e, n, r, o, a, l)
          );
        }),
        (s.delayedCall = function(t, e, i, n, r) {
          return new s(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: n,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0
          });
        }),
        (s.set = function(t, e) {
          return new s(t, 0, e);
        }),
        (s.isTweening = function(t) {
          return i.getTweensOf(t, !0).length > 0;
        });
      var p = function(t, e) {
          for (var n = [], r = 0, s = t._first; s; )
            s instanceof i
              ? (n[r++] = s)
              : (e && (n[r++] = s), (r = (n = n.concat(p(s, e))).length)),
              (s = s._next);
          return n;
        },
        d = (s.getAllTweens = function(e) {
          return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e));
        });
      (s.killAll = function(t, i, n, r) {
        null == i && (i = !0), null == n && (n = !0);
        var s,
          o,
          a,
          l = d(0 != r),
          u = l.length,
          h = i && n && r;
        for (a = 0; a < u; a++)
          (o = l[a]),
            (h ||
              o instanceof e ||
              ((s = o.target === o.vars.onComplete) && n) ||
              (i && !s)) &&
              (t
                ? o.totalTime(o._reversed ? 0 : o.totalDuration())
                : o._enabled(!1, !1));
      }),
        (s.killChildTweensOf = function(t, e) {
          if (null != t) {
            var r,
              o,
              h,
              c,
              p,
              d = a.tweenLookup;
            if (
              ("string" == typeof t && (t = i.selector(t) || t),
              l(t) && (t = n(t)),
              u(t))
            )
              for (c = t.length; --c > -1; ) s.killChildTweensOf(t[c], e);
            else {
              for (h in ((r = []), d))
                for (o = d[h].target.parentNode; o; )
                  o === t && (r = r.concat(d[h].tweens)), (o = o.parentNode);
              for (p = r.length, c = 0; c < p; c++)
                e && r[c].totalTime(r[c].totalDuration()),
                  r[c]._enabled(!1, !1);
            }
          }
        });
      var f = function(t, i, n, r) {
        (i = !1 !== i), (n = !1 !== n);
        for (
          var s, o, a = d((r = !1 !== r)), l = i && n && r, u = a.length;
          --u > -1;

        )
          (o = a[u]),
            (l ||
              o instanceof e ||
              ((s = o.target === o.vars.onComplete) && n) ||
              (i && !s)) &&
              o.paused(t);
      };
      return (
        (s.pauseAll = function(t, e, i) {
          f(!0, t, e, i);
        }),
        (s.resumeAll = function(t, e, i) {
          f(!1, t, e, i);
        }),
        (s.globalTimeScale = function(e) {
          var n = t._rootTimeline,
            r = i.ticker.time;
          return arguments.length
            ? ((e = e || o),
              (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
              (n = t._rootFramesTimeline),
              (r = i.ticker.frame),
              (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
              (n._timeScale = t._rootTimeline._timeScale = e),
              e)
            : n._timeScale;
        }),
        (h.progress = function(t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                  this._cycle * (this._duration + this._repeatDelay),
                e
              )
            : this._time / this.duration();
        }),
        (h.totalProgress = function(t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this._totalTime / this.totalDuration();
        }),
        (h.time = function(t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              t > this._duration && (t = this._duration),
              this._yoyo && 0 != (1 & this._cycle)
                ? (t =
                    this._duration -
                    t +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (t += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(t, e))
            : this._time;
        }),
        (h.duration = function(e) {
          return arguments.length
            ? t.prototype.duration.call(this, e)
            : this._duration;
        }),
        (h.totalDuration = function(t) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (h.repeat = function(t) {
          return arguments.length
            ? ((this._repeat = t), this._uncache(!0))
            : this._repeat;
        }),
        (h.repeatDelay = function(t) {
          return arguments.length
            ? ((this._repeatDelay = t), this._uncache(!0))
            : this._repeatDelay;
        }),
        (h.yoyo = function(t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        s
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function(t, e, i) {
        var n = function(t) {
            e.call(this, t),
              (this._labels = {}),
              (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
              (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var i,
              n,
              r = this.vars;
            for (n in r)
              (i = r[n]),
                l(i) &&
                  -1 !== i.join("").indexOf("{self}") &&
                  (r[n] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
          },
          r = 1e-10,
          s = i._internals,
          o = (n._internals = {}),
          a = s.isSelector,
          l = s.isArray,
          u = s.lazyTweens,
          h = s.lazyRender,
          c = _gsScope._gsDefine.globals,
          p = function(t) {
            var e,
              i = {};
            for (e in t) i[e] = t[e];
            return i;
          },
          d = function(t, e, i) {
            var n,
              r,
              s = t.cycle;
            for (n in s)
              (r = s[n]),
                (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
            delete t.cycle;
          },
          f = (o.pauseCallback = function() {}),
          m = function(t) {
            var e,
              i = [],
              n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i;
          },
          g = (n.prototype = new e());
        return (
          (n.version = "1.20.4"),
          (g.constructor = n),
          (g.kill()._gc = g._forcingPlayhead = g._hasPause = !1),
          (g.to = function(t, e, n, r) {
            var s = (n.repeat && c.TweenMax) || i;
            return e ? this.add(new s(t, e, n), r) : this.set(t, n, r);
          }),
          (g.from = function(t, e, n, r) {
            return this.add(((n.repeat && c.TweenMax) || i).from(t, e, n), r);
          }),
          (g.fromTo = function(t, e, n, r, s) {
            var o = (r.repeat && c.TweenMax) || i;
            return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s);
          }),
          (g.staggerTo = function(t, e, r, s, o, l, u, h) {
            var c,
              f,
              g = new n({
                onComplete: l,
                onCompleteParams: u,
                callbackScope: h,
                smoothChildTiming: this.smoothChildTiming
              }),
              y = r.cycle;
            for (
              "string" == typeof t && (t = i.selector(t) || t),
                a((t = t || [])) && (t = m(t)),
                (s = s || 0) < 0 && ((t = m(t)).reverse(), (s *= -1)),
                f = 0;
              f < t.length;
              f++
            )
              (c = p(r)).startAt &&
                ((c.startAt = p(c.startAt)),
                c.startAt.cycle && d(c.startAt, t, f)),
                y &&
                  (d(c, t, f),
                  null != c.duration && ((e = c.duration), delete c.duration)),
                g.to(t[f], e, c, f * s);
            return this.add(g, o);
          }),
          (g.staggerFrom = function(t, e, i, n, r, s, o, a) {
            return (
              (i.immediateRender = 0 != i.immediateRender),
              (i.runBackwards = !0),
              this.staggerTo(t, e, i, n, r, s, o, a)
            );
          }),
          (g.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              this.staggerTo(t, e, n, r, s, o, a, l)
            );
          }),
          (g.call = function(t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r);
          }),
          (g.set = function(t, e, n) {
            return (
              (n = this._parseTimeOrLabel(n, 0, !0)),
              null == e.immediateRender &&
                (e.immediateRender = n === this._time && !this._paused),
              this.add(new i(t, 0, e), n)
            );
          }),
          (n.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming &&
              (t.smoothChildTiming = !0);
            var r,
              s,
              o,
              a,
              l = new n(t),
              u = l._timeline;
            for (
              null == e && (e = !0),
                u._remove(l, !0),
                l._startTime = 0,
                l._rawPrevTime = l._time = l._totalTime = u._time,
                o = u._first;
              o;

            )
              (a = o._next),
                (e && o instanceof i && o.target === o.vars.onComplete) ||
                  ((s = o._startTime - o._delay) < 0 && (r = 1), l.add(o, s)),
                (o = a);
            return u.add(l, 0), r && l.totalDuration(), l;
          }),
          (g.add = function(r, s, o, a) {
            var u, h, c, p, d, f;
            if (
              ("number" != typeof s &&
                (s = this._parseTimeOrLabel(s, 0, !0, r)),
              !(r instanceof t))
            ) {
              if (r instanceof Array || (r && r.push && l(r))) {
                for (
                  o = o || "normal", a = a || 0, u = s, h = r.length, c = 0;
                  c < h;
                  c++
                )
                  l((p = r[c])) && (p = new n({tweens: p})),
                    this.add(p, u),
                    "string" != typeof p &&
                      "function" != typeof p &&
                      ("sequence" === o
                        ? (u = p._startTime + p.totalDuration() / p._timeScale)
                        : "start" === o && (p._startTime -= p.delay())),
                    (u += a);
                return this._uncache(!0);
              }
              if ("string" == typeof r) return this.addLabel(r, s);
              if ("function" != typeof r)
                throw "Cannot add " +
                  r +
                  " into the timeline; it is not a tween, timeline, function, or string.";
              r = i.delayedCall(0, r);
            }
            if (
              (e.prototype.add.call(this, r, s),
              r._time &&
                r.render(
                  (this.rawTime() - r._startTime) * r._timeScale,
                  !1,
                  !1
                ),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (f = (d = this).rawTime() > r._startTime; d._timeline; )
                f && d._timeline.smoothChildTiming
                  ? d.totalTime(d._totalTime, !0)
                  : d._gc && d._enabled(!0, !1),
                  (d = d._timeline);
            return this;
          }),
          (g.remove = function(e) {
            if (e instanceof t) {
              this._remove(e, !1);
              var i = (e._timeline = e.vars.useFrames
                ? t._rootFramesTimeline
                : t._rootTimeline);
              return (
                (e._startTime =
                  (e._paused ? e._pauseTime : i._time) -
                  (e._reversed
                    ? e.totalDuration() - e._totalTime
                    : e._totalTime) /
                    e._timeScale),
                this
              );
            }
            if (e instanceof Array || (e && e.push && l(e))) {
              for (var n = e.length; --n > -1; ) this.remove(e[n]);
              return this;
            }
            return "string" == typeof e
              ? this.removeLabel(e)
              : this.kill(null, e);
          }),
          (g._remove = function(t, i) {
            return (
              e.prototype._remove.call(this, t, i),
              this._last
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
              this
            );
          }),
          (g.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (g.insert = g.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n);
          }),
          (g.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
          }),
          (g.addLabel = function(t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (g.addPause = function(t, e, n, r) {
            var s = i.delayedCall(0, f, n, r || this);
            return (
              (s.vars.onComplete = s.vars.onReverseComplete = e),
              (s.data = "isPause"),
              (this._hasPause = !0),
              this.add(s, t)
            );
          }),
          (g.removeLabel = function(t) {
            return delete this._labels[t], this;
          }),
          (g.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (g._parseTimeOrLabel = function(e, i, n, r) {
            var s, o;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || (r.push && l(r))))
              for (o = r.length; --o > -1; )
                r[o] instanceof t &&
                  r[o].timeline === this &&
                  this.remove(r[o]);
            if (
              ((s =
                "number" != typeof e || i
                  ? this.duration() > 99999999999
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              "string" == typeof i)
            )
              return this._parseTimeOrLabel(
                i,
                n && "number" == typeof e && null == this._labels[i]
                  ? e - s
                  : 0,
                n
              );
            if (
              ((i = i || 0),
              "string" != typeof e || (!isNaN(e) && null == this._labels[e]))
            )
              null == e && (e = s);
            else {
              if (-1 === (o = e.indexOf("=")))
                return null == this._labels[e]
                  ? n
                    ? (this._labels[e] = s + i)
                    : i
                  : this._labels[e] + i;
              (i =
                parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1))),
                (e =
                  o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s);
            }
            return Number(e) + i;
          }),
          (g.seek = function(t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              !1 !== e
            );
          }),
          (g.stop = function() {
            return this.paused(!0);
          }),
          (g.gotoAndPlay = function(t, e) {
            return this.play(t, e);
          }),
          (g.gotoAndStop = function(t, e) {
            return this.pause(t, e);
          }),
          (g.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              s,
              o,
              a,
              l,
              c,
              p,
              d = this._time,
              f = this._dirty ? this.totalDuration() : this._totalDuration,
              m = this._startTime,
              g = this._timeScale,
              y = this._paused;
            if (
              (d !== this._time && (t += this._time - d),
              t >= f - 1e-7 && t >= 0)
            )
              (this._totalTime = this._time = f),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((s = !0),
                  (a = "onComplete"),
                  (l = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && t >= -1e-7) ||
                      this._rawPrevTime < 0 ||
                      this._rawPrevTime === r) &&
                    this._rawPrevTime !== t &&
                    this._first &&
                    ((l = !0),
                    this._rawPrevTime > r && (a = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : r),
                (t = f + 1e-4);
            else if (t < 1e-7)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== d ||
                  (0 === this._duration &&
                    this._rawPrevTime !== r &&
                    (this._rawPrevTime > 0 ||
                      (t < 0 && this._rawPrevTime >= 0)))) &&
                  ((a = "onReverseComplete"), (s = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((l = s = !0), (a = "onReverseComplete"))
                    : this._rawPrevTime >= 0 && this._first && (l = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : r),
                  0 === t && s)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (s = !1), (n = n._next);
                (t = 0), this._initted || (l = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !e) {
                if (t >= d)
                  for (n = this._first; n && n._startTime <= t && !c; )
                    n._duration ||
                      "isPause" !== n.data ||
                      n.ratio ||
                      (0 === n._startTime && 0 === this._rawPrevTime) ||
                      (c = n),
                      (n = n._next);
                else
                  for (n = this._last; n && n._startTime >= t && !c; )
                    n._duration ||
                      ("isPause" === n.data && n._rawPrevTime > 0 && (c = n)),
                      (n = n._prev);
                c &&
                  ((this._time = t = c._startTime),
                  (this._totalTime =
                    t +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = t;
            }
            if ((this._time !== d && this._first) || i || l || c) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== d &&
                    t > 0 &&
                    (this._active = !0)),
                0 === d &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    e ||
                    this._callback("onStart")),
                (p = this._time) >= d)
              )
                for (
                  n = this._first;
                  n &&
                  ((o = n._next), p === this._time && (!this._paused || y));

                )
                  (n._active || (n._startTime <= p && !n._paused && !n._gc)) &&
                    (c === n && this.pause(),
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = o);
              else
                for (
                  n = this._last;
                  n &&
                  ((o = n._prev), p === this._time && (!this._paused || y));

                ) {
                  if (
                    n._active ||
                    (n._startTime <= d && !n._paused && !n._gc)
                  ) {
                    if (c === n) {
                      for (c = n._prev; c && c.endTime() > this._time; )
                        c.render(
                          c._reversed
                            ? c.totalDuration() -
                                (t - c._startTime) * c._timeScale
                            : (t - c._startTime) * c._timeScale,
                          e,
                          i
                        ),
                          (c = c._prev);
                      (c = null), this.pause();
                    }
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i);
                  }
                  n = o;
                }
              this._onUpdate &&
                (e || (u.length && h(), this._callback("onUpdate"))),
                a &&
                  (this._gc ||
                    (m !== this._startTime && g === this._timeScale) ||
                    ((0 === this._time || f >= this.totalDuration()) &&
                      (s &&
                        (u.length && h(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[a] && this._callback(a))));
            }
          }),
          (g._hasPausedChild = function() {
            for (var t = this._first; t; ) {
              if (t._paused || (t instanceof n && t._hasPausedChild()))
                return !0;
              t = t._next;
            }
            return !1;
          }),
          (g.getChildren = function(t, e, n, r) {
            r = r || -9999999999;
            for (var s = [], o = this._first, a = 0; o; )
              o._startTime < r ||
                (o instanceof i
                  ? !1 !== e && (s[a++] = o)
                  : (!1 !== n && (s[a++] = o),
                    !1 !== t &&
                      (a = (s = s.concat(o.getChildren(!0, e, n))).length))),
                (o = o._next);
            return s;
          }),
          (g.getTweensOf = function(t, e) {
            var n,
              r,
              s = this._gc,
              o = [],
              a = 0;
            for (
              s && this._enabled(!0, !0), r = (n = i.getTweensOf(t)).length;
              --r > -1;

            )
              (n[r].timeline === this || (e && this._contains(n[r]))) &&
                (o[a++] = n[r]);
            return s && this._enabled(!1, !0), o;
          }),
          (g.recent = function() {
            return this._recent;
          }),
          (g._contains = function(t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (g.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r; )
              r._startTime >= i && (r._startTime += t), (r = r._next);
            if (e) for (n in s) s[n] >= i && (s[n] += t);
            return this._uncache(!0);
          }),
          (g._kill = function(t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                n = i.length,
                r = !1;
              --n > -1;

            )
              i[n]._kill(t, e) && (r = !0);
            return r;
          }),
          (g.clear = function(t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
              e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0);
          }),
          (g.invalidate = function() {
            for (var e = this._first; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (g._enabled = function(t, i) {
            if (t === this._gc)
              for (var n = this._first; n; ) n._enabled(t, !0), (n = n._next);
            return e.prototype._enabled.call(this, t, i);
          }),
          (g.totalTime = function() {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (g.duration = function(t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (g.totalDuration = function(t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > s &&
                    this._sortChildren &&
                    !r._paused &&
                    !this._calculatingDuration
                      ? ((this._calculatingDuration = 1),
                        this.add(r, r._startTime - r._delay),
                        (this._calculatingDuration = 0))
                      : (s = r._startTime),
                    r._startTime < 0 &&
                      !r._paused &&
                      ((n -= r._startTime),
                      this._timeline.smoothChildTiming &&
                        ((this._startTime += r._startTime / this._timeScale),
                        (this._time -= r._startTime),
                        (this._totalTime -= r._startTime),
                        (this._rawPrevTime -= r._startTime)),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (s = 0)),
                    (i = r._startTime + r._totalDuration / r._timeScale) > n &&
                      (n = i),
                    (r = e);
                (this._duration = this._totalDuration = n), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return t && this.totalDuration()
              ? this.timeScale(this._totalDuration / t)
              : this;
          }),
          (g.paused = function(e) {
            if (!e)
              for (var i = this._first, n = this._time; i; )
                i._startTime === n &&
                  "isPause" === i.data &&
                  (i._rawPrevTime = 0),
                  (i = i._next);
            return t.prototype.paused.apply(this, arguments);
          }),
          (g.usesFrames = function() {
            for (var e = this._timeline; e._timeline; ) e = e._timeline;
            return e === t._rootFramesTimeline;
          }),
          (g.rawTime = function(t) {
            return t &&
              (this._paused ||
                (this._repeat && this.time() > 0 && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(t) - this._startTime) * this._timeScale;
          }),
          n
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function(t, e, i) {
        var n = function(e) {
            t.call(this, e),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._dirty = !0);
          },
          r = 1e-10,
          s = e._internals,
          o = s.lazyTweens,
          a = s.lazyRender,
          l = _gsScope._gsDefine.globals,
          u = new i(null, null, 1, 0),
          h = (n.prototype = new t());
        return (
          (h.constructor = n),
          (h.kill()._gc = !1),
          (n.version = "1.20.4"),
          (h.invalidate = function() {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              t.prototype.invalidate.call(this)
            );
          }),
          (h.addCallback = function(t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i);
          }),
          (h.removeCallback = function(t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    n = i.length,
                    r = this._parseTimeOrLabel(e);
                  --n > -1;

                )
                  i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this;
          }),
          (h.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e);
          }),
          (h.tweenTo = function(t, i) {
            i = i || {};
            var n,
              r,
              s,
              o = {
                ease: u,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
              },
              a = (i.repeat && l.TweenMax) || e;
            for (r in i) o[r] = i[r];
            return (
              (o.time = this._parseTimeOrLabel(t)),
              (n =
                Math.abs(Number(o.time) - this._time) / this._timeScale ||
                0.001),
              (s = new a(this, n, o)),
              (o.onStart = function() {
                s.target.paused(!0),
                  s.vars.time === s.target.time() ||
                    n !== s.duration() ||
                    s.isFromTo ||
                    s
                      .duration(
                        Math.abs(s.vars.time - s.target.time()) /
                          s.target._timeScale
                      )
                      .render(s.time(), !0, !0),
                  i.onStart &&
                    i.onStart.apply(
                      i.onStartScope || i.callbackScope || s,
                      i.onStartParams || []
                    );
              }),
              s
            );
          }),
          (h.tweenFromTo = function(t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
              }),
              (i.immediateRender = !1 !== i.immediateRender);
            var n = this.tweenTo(e, i);
            return (
              (n.isFromTo = 1),
              n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001)
            );
          }),
          (h.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              s,
              l,
              u,
              h,
              c,
              p,
              d,
              f = this._time,
              m = this._dirty ? this.totalDuration() : this._totalDuration,
              g = this._duration,
              y = this._totalTime,
              v = this._startTime,
              _ = this._timeScale,
              b = this._rawPrevTime,
              w = this._paused,
              x = this._cycle;
            if (
              (f !== this._time && (t += this._time - f),
              t >= m - 1e-7 && t >= 0)
            )
              this._locked ||
                ((this._totalTime = m), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((s = !0),
                  (u = "onComplete"),
                  (h = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && t >= -1e-7) || b < 0 || b === r) &&
                    b !== t &&
                    this._first &&
                    ((h = !0), b > r && (u = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : r),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (this._time = t = 0)
                  : ((this._time = g), (t = g + 1e-4));
            else if (t < 1e-7)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== f ||
                  (0 === g &&
                    b !== r &&
                    (b > 0 || (t < 0 && b >= 0)) &&
                    !this._locked)) &&
                  ((u = "onReverseComplete"), (s = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((h = s = !0), (u = "onReverseComplete"))
                    : b >= 0 && this._first && (h = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    g || !e || t || this._rawPrevTime === t ? t : r),
                  0 === t && s)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (s = !1), (n = n._next);
                (t = 0), this._initted || (h = !0);
              }
            else if (
              (0 === g && b < 0 && (h = !0),
              (this._time = this._rawPrevTime = t),
              this._locked ||
                ((this._totalTime = t),
                0 !== this._repeat &&
                  ((c = g + this._repeatDelay),
                  (this._cycle = (this._totalTime / c) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / c &&
                    y <= t &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * c),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    (this._time = g - this._time),
                  this._time > g
                    ? ((this._time = g), (t = g + 1e-4))
                    : this._time < 0
                    ? (this._time = t = 0)
                    : (t = this._time))),
              this._hasPause && !this._forcingPlayhead && !e)
            ) {
              if ((t = this._time) >= f || (this._repeat && x !== this._cycle))
                for (n = this._first; n && n._startTime <= t && !p; )
                  n._duration ||
                    "isPause" !== n.data ||
                    n.ratio ||
                    (0 === n._startTime && 0 === this._rawPrevTime) ||
                    (p = n),
                    (n = n._next);
              else
                for (n = this._last; n && n._startTime >= t && !p; )
                  n._duration ||
                    ("isPause" === n.data && n._rawPrevTime > 0 && (p = n)),
                    (n = n._prev);
              p &&
                p._startTime < g &&
                ((this._time = t = p._startTime),
                (this._totalTime =
                  t + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== x && !this._locked) {
              var T = this._yoyo && 0 != (1 & x),
                C = T === (this._yoyo && 0 != (1 & this._cycle)),
                S = this._totalTime,
                E = this._cycle,
                k = this._rawPrevTime,
                P = this._time;
              if (
                ((this._totalTime = x * g),
                this._cycle < x ? (T = !T) : (this._totalTime += g),
                (this._time = f),
                (this._rawPrevTime = 0 === g ? b - 1e-4 : b),
                (this._cycle = x),
                (this._locked = !0),
                (f = T ? 0 : g),
                this.render(f, e, 0 === g),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = E),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                f !== this._time)
              )
                return;
              if (
                (C &&
                  ((this._cycle = x),
                  (this._locked = !0),
                  (f = T ? g + 1e-4 : -1e-4),
                  this.render(f, !0, !1)),
                (this._locked = !1),
                this._paused && !w)
              )
                return;
              (this._time = P),
                (this._totalTime = S),
                (this._cycle = E),
                (this._rawPrevTime = k);
            }
            if ((this._time !== f && this._first) || i || h || p) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== y &&
                    t > 0 &&
                    (this._active = !0)),
                0 === y &&
                  this.vars.onStart &&
                  ((0 === this._totalTime && this._totalDuration) ||
                    e ||
                    this._callback("onStart")),
                (d = this._time) >= f)
              )
                for (
                  n = this._first;
                  n &&
                  ((l = n._next), d === this._time && (!this._paused || w));

                )
                  (n._active ||
                    (n._startTime <= this._time && !n._paused && !n._gc)) &&
                    (p === n && this.pause(),
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = l);
              else
                for (
                  n = this._last;
                  n &&
                  ((l = n._prev), d === this._time && (!this._paused || w));

                ) {
                  if (
                    n._active ||
                    (n._startTime <= f && !n._paused && !n._gc)
                  ) {
                    if (p === n) {
                      for (p = n._prev; p && p.endTime() > this._time; )
                        p.render(
                          p._reversed
                            ? p.totalDuration() -
                                (t - p._startTime) * p._timeScale
                            : (t - p._startTime) * p._timeScale,
                          e,
                          i
                        ),
                          (p = p._prev);
                      (p = null), this.pause();
                    }
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i);
                  }
                  n = l;
                }
              this._onUpdate &&
                (e || (o.length && a(), this._callback("onUpdate"))),
                u &&
                  (this._locked ||
                    this._gc ||
                    (v !== this._startTime && _ === this._timeScale) ||
                    ((0 === this._time || m >= this.totalDuration()) &&
                      (s &&
                        (o.length && a(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[u] && this._callback(u))));
            } else
              y !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (h.getActive = function(t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n,
              r,
              s = [],
              o = this.getChildren(t, e, i),
              a = 0,
              l = o.length;
            for (n = 0; n < l; n++) (r = o[n]).isActive() && (s[a++] = r);
            return s;
          }),
          (h.getLabelAfter = function(t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              n = i.length;
            for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (h.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (h.getLabelsArray = function() {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = {time: this._labels[t], name: t};
            return (
              e.sort(function(t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (h.invalidate = function() {
            return (this._locked = !1), t.prototype.invalidate.call(this);
          }),
          (h.progress = function(t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration() || 0;
          }),
          (h.totalProgress = function(t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (h.totalDuration = function(e) {
            return arguments.length
              ? -1 !== this._repeat && e
                ? this.timeScale(this.totalDuration() / e)
                : this
              : (this._dirty &&
                  (t.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (h.time = function(t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (h.repeat = function(t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (h.repeatDelay = function(t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (h.yoyo = function(t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (h.currentLabel = function(t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          n
        );
      },
      !0
    ),
    (t = 180 / Math.PI),
    (e = []),
    (i = []),
    (n = []),
    (r = {}),
    (s = _gsScope._gsDefine.globals),
    (o = function(t, e, i, n) {
      i === n && (i = n - (n - e) / 1e6),
        t === e && (e = t + (i - t) / 1e6),
        (this.a = t),
        (this.b = e),
        (this.c = i),
        (this.d = n),
        (this.da = n - t),
        (this.ca = i - t),
        (this.ba = e - t);
    }),
    (a =
      ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
    (l = function(t, e, i, n) {
      var r = {a: t},
        s = {},
        o = {},
        a = {c: n},
        l = (t + e) / 2,
        u = (e + i) / 2,
        h = (i + n) / 2,
        c = (l + u) / 2,
        p = (u + h) / 2,
        d = (p - c) / 8;
      return (
        (r.b = l + (t - l) / 4),
        (s.b = c + d),
        (r.c = s.a = (r.b + s.b) / 2),
        (s.c = o.a = (c + p) / 2),
        (o.b = p - d),
        (a.b = h + (n - h) / 4),
        (o.c = a.a = (o.b + a.b) / 2),
        [r, s, o, a]
      );
    }),
    (u = function(t, r, s, o, a) {
      var u,
        h,
        c,
        p,
        d,
        f,
        m,
        g,
        y,
        v,
        _,
        b,
        w,
        x = t.length - 1,
        T = 0,
        C = t[0].a;
      for (u = 0; u < x; u++)
        (h = (d = t[T]).a),
          (c = d.d),
          (p = t[T + 1].d),
          a
            ? ((_ = e[u]),
              (w = (((b = i[u]) + _) * r * 0.25) / (o ? 0.5 : n[u] || 0.5)),
              (g =
                c -
                ((f = c - (c - h) * (o ? 0.5 * r : 0 !== _ ? w / _ : 0)) +
                  ((((m = c + (p - c) * (o ? 0.5 * r : 0 !== b ? w / b : 0)) -
                    f) *
                    ((3 * _) / (_ + b) + 0.5)) /
                    4 || 0))))
            : (g =
                c -
                ((f = c - (c - h) * r * 0.5) + (m = c + (p - c) * r * 0.5)) /
                  2),
          (f += g),
          (m += g),
          (d.c = y = f),
          (d.b = 0 !== u ? C : (C = d.a + 0.6 * (d.c - d.a))),
          (d.da = c - h),
          (d.ca = y - h),
          (d.ba = C - h),
          s
            ? ((v = l(h, C, y, c)),
              t.splice(T, 1, v[0], v[1], v[2], v[3]),
              (T += 4))
            : T++,
          (C = m);
      ((d = t[T]).b = C),
        (d.c = C + 0.4 * (d.d - C)),
        (d.da = d.d - d.a),
        (d.ca = d.c - d.a),
        (d.ba = C - d.a),
        s &&
          ((v = l(d.a, C, d.c, d.d)), t.splice(T, 1, v[0], v[1], v[2], v[3]));
    }),
    (h = function(t, n, r, s) {
      var a,
        l,
        u,
        h,
        c,
        p,
        d = [];
      if (s)
        for (l = (t = [s].concat(t)).length; --l > -1; )
          "string" == typeof (p = t[l][n]) &&
            "=" === p.charAt(1) &&
            (t[l][n] = s[n] + Number(p.charAt(0) + p.substr(2)));
      if ((a = t.length - 2) < 0)
        return (d[0] = new o(t[0][n], 0, 0, t[0][n])), d;
      for (l = 0; l < a; l++)
        (u = t[l][n]),
          (h = t[l + 1][n]),
          (d[l] = new o(u, 0, 0, h)),
          r &&
            ((c = t[l + 2][n]),
            (e[l] = (e[l] || 0) + (h - u) * (h - u)),
            (i[l] = (i[l] || 0) + (c - h) * (c - h)));
      return (d[l] = new o(t[l][n], 0, 0, t[l + 1][n])), d;
    }),
    (c = function(t, s, o, l, c, p) {
      var d,
        f,
        m,
        g,
        y,
        v,
        _,
        b,
        w = {},
        x = [],
        T = p || t[0];
      for (f in ((c = "string" == typeof c ? "," + c + "," : a),
      null == s && (s = 1),
      t[0]))
        x.push(f);
      if (t.length > 1) {
        for (b = t[t.length - 1], _ = !0, d = x.length; --d > -1; )
          if (((f = x[d]), Math.abs(T[f] - b[f]) > 0.05)) {
            _ = !1;
            break;
          }
        _ &&
          ((t = t.concat()),
          p && t.unshift(p),
          t.push(t[1]),
          (p = t[t.length - 3]));
      }
      for (e.length = i.length = n.length = 0, d = x.length; --d > -1; )
        (f = x[d]),
          (r[f] = -1 !== c.indexOf("," + f + ",")),
          (w[f] = h(t, f, r[f], p));
      for (d = e.length; --d > -1; )
        (e[d] = Math.sqrt(e[d])), (i[d] = Math.sqrt(i[d]));
      if (!l) {
        for (d = x.length; --d > -1; )
          if (r[f])
            for (v = (m = w[x[d]]).length - 1, g = 0; g < v; g++)
              (y = m[g + 1].da / i[g] + m[g].da / e[g] || 0),
                (n[g] = (n[g] || 0) + y * y);
        for (d = n.length; --d > -1; ) n[d] = Math.sqrt(n[d]);
      }
      for (d = x.length, g = o ? 4 : 1; --d > -1; )
        (m = w[(f = x[d])]),
          u(m, s, o, l, r[f]),
          _ && (m.splice(0, g), m.splice(m.length - g, g));
      return w;
    }),
    (p = function(t, e, i) {
      var n,
        r,
        s,
        a,
        l,
        u,
        h,
        c,
        p,
        d,
        f,
        m = {},
        g = "cubic" === (e = e || "soft") ? 3 : 2,
        y = "soft" === e,
        v = [];
      if ((y && i && (t = [i].concat(t)), null == t || t.length < g + 1))
        throw "invalid Bezier data";
      for (p in t[0]) v.push(p);
      for (u = v.length; --u > -1; ) {
        for (m[(p = v[u])] = l = [], d = 0, c = t.length, h = 0; h < c; h++)
          (n =
            null == i
              ? t[h][p]
              : "string" == typeof (f = t[h][p]) && "=" === f.charAt(1)
              ? i[p] + Number(f.charAt(0) + f.substr(2))
              : Number(f)),
            y && h > 1 && h < c - 1 && (l[d++] = (n + l[d - 2]) / 2),
            (l[d++] = n);
        for (c = d - g + 1, d = 0, h = 0; h < c; h += g)
          (n = l[h]),
            (r = l[h + 1]),
            (s = l[h + 2]),
            (a = 2 === g ? 0 : l[h + 3]),
            (l[d++] = f =
              3 === g
                ? new o(n, r, s, a)
                : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s));
        l.length = d;
      }
      return m;
    }),
    (d = function(t, e, i) {
      for (
        var n, r, s, o, a, l, u, h, c, p, d, f = 1 / i, m = t.length;
        --m > -1;

      )
        for (
          s = (p = t[m]).a,
            o = p.d - s,
            a = p.c - s,
            l = p.b - s,
            n = r = 0,
            h = 1;
          h <= i;
          h++
        )
          (n =
            r -
            (r =
              ((u = f * h) * u * o + 3 * (c = 1 - u) * (u * a + c * l)) * u)),
            (e[(d = m * i + h - 1)] = (e[d] || 0) + n * n);
    }),
    (f = function(t, e) {
      var i,
        n,
        r,
        s,
        o = [],
        a = [],
        l = 0,
        u = 0,
        h = (e = e >> 0 || 6) - 1,
        c = [],
        p = [];
      for (i in t) d(t[i], o, e);
      for (r = o.length, n = 0; n < r; n++)
        (l += Math.sqrt(o[n])),
          (p[(s = n % e)] = l),
          s === h &&
            ((u += l),
            (c[(s = (n / e) >> 0)] = p),
            (a[s] = u),
            (l = 0),
            (p = []));
      return {length: u, lengths: a, segments: c};
    }),
    (m = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.8",
      API: 2,
      global: !0,
      init: function(t, e, i) {
        (this._target = t),
          e instanceof Array && (e = {values: e}),
          (this._func = {}),
          (this._mod = {}),
          (this._props = []),
          (this._timeRes =
            null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
        var n,
          r,
          s,
          o,
          a,
          l = e.values || [],
          u = {},
          h = l[0],
          d = e.autoRotate || i.vars.orientToBezier;
        for (n in ((this._autoRotate = d
          ? d instanceof Array
            ? d
            : [["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]]
          : null),
        h))
          this._props.push(n);
        for (s = this._props.length; --s > -1; )
          (n = this._props[s]),
            this._overwriteProps.push(n),
            (r = this._func[n] = "function" == typeof t[n]),
            (u[n] = r
              ? t[
                  n.indexOf("set") ||
                  "function" != typeof t["get" + n.substr(3)]
                    ? n
                    : "get" + n.substr(3)
                ]()
              : parseFloat(t[n])),
            a || (u[n] !== l[0][n] && (a = u));
        if (
          ((this._beziers =
            "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
              ? c(
                  l,
                  isNaN(e.curviness) ? 1 : e.curviness,
                  !1,
                  "thruBasic" === e.type,
                  e.correlate,
                  a
                )
              : p(l, e.type, u)),
          (this._segCount = this._beziers[n].length),
          this._timeRes)
        ) {
          var m = f(this._beziers, this._timeRes);
          (this._length = m.length),
            (this._lengths = m.lengths),
            (this._segments = m.segments),
            (this._l1 = this._li = this._s1 = this._si = 0),
            (this._l2 = this._lengths[0]),
            (this._curSeg = this._segments[0]),
            (this._s2 = this._curSeg[0]),
            (this._prec = 1 / this._curSeg.length);
        }
        if ((d = this._autoRotate))
          for (
            this._initialRotations = [],
              d[0] instanceof Array || (this._autoRotate = d = [d]),
              s = d.length;
            --s > -1;

          ) {
            for (o = 0; o < 3; o++)
              (n = d[s][o]),
                (this._func[n] =
                  "function" == typeof t[n] &&
                  t[
                    n.indexOf("set") ||
                    "function" != typeof t["get" + n.substr(3)]
                      ? n
                      : "get" + n.substr(3)
                  ]);
            (n = d[s][2]),
              (this._initialRotations[s] =
                (this._func[n]
                  ? this._func[n].call(this._target)
                  : this._target[n]) || 0),
              this._overwriteProps.push(n);
          }
        return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
      },
      set: function(e) {
        var i,
          n,
          r,
          s,
          o,
          a,
          l,
          u,
          h,
          c,
          p = this._segCount,
          d = this._func,
          f = this._target,
          m = e !== this._startRatio;
        if (this._timeRes) {
          if (
            ((h = this._lengths),
            (c = this._curSeg),
            (e *= this._length),
            (r = this._li),
            e > this._l2 && r < p - 1)
          ) {
            for (u = p - 1; r < u && (this._l2 = h[++r]) <= e; );
            (this._l1 = h[r - 1]),
              (this._li = r),
              (this._curSeg = c = this._segments[r]),
              (this._s2 = c[(this._s1 = this._si = 0)]);
          } else if (e < this._l1 && r > 0) {
            for (; r > 0 && (this._l1 = h[--r]) >= e; );
            0 === r && e < this._l1 ? (this._l1 = 0) : r++,
              (this._l2 = h[r]),
              (this._li = r),
              (this._curSeg = c = this._segments[r]),
              (this._s1 = c[(this._si = c.length - 1) - 1] || 0),
              (this._s2 = c[this._si]);
          }
          if (
            ((i = r),
            (e -= this._l1),
            (r = this._si),
            e > this._s2 && r < c.length - 1)
          ) {
            for (u = c.length - 1; r < u && (this._s2 = c[++r]) <= e; );
            (this._s1 = c[r - 1]), (this._si = r);
          } else if (e < this._s1 && r > 0) {
            for (; r > 0 && (this._s1 = c[--r]) >= e; );
            0 === r && e < this._s1 ? (this._s1 = 0) : r++,
              (this._s2 = c[r]),
              (this._si = r);
          }
          a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        } else
          a =
            (e - (i = e < 0 ? 0 : e >= 1 ? p - 1 : (p * e) >> 0) * (1 / p)) * p;
        for (n = 1 - a, r = this._props.length; --r > -1; )
          (s = this._props[r]),
            (l =
              (a * a * (o = this._beziers[s][i]).da +
                3 * n * (a * o.ca + n * o.ba)) *
                a +
              o.a),
            this._mod[s] && (l = this._mod[s](l, f)),
            d[s] ? f[s](l) : (f[s] = l);
        if (this._autoRotate) {
          var g,
            y,
            v,
            _,
            b,
            w,
            x,
            T = this._autoRotate;
          for (r = T.length; --r > -1; )
            (s = T[r][2]),
              (w = T[r][3] || 0),
              (x = !0 === T[r][4] ? 1 : t),
              (o = this._beziers[T[r][0]]),
              (g = this._beziers[T[r][1]]),
              o &&
                g &&
                ((o = o[i]),
                (g = g[i]),
                (y = o.a + (o.b - o.a) * a),
                (y += ((_ = o.b + (o.c - o.b) * a) - y) * a),
                (_ += (o.c + (o.d - o.c) * a - _) * a),
                (v = g.a + (g.b - g.a) * a),
                (v += ((b = g.b + (g.c - g.b) * a) - v) * a),
                (b += (g.c + (g.d - g.c) * a - b) * a),
                (l = m
                  ? Math.atan2(b - v, _ - y) * x + w
                  : this._initialRotations[r]),
                this._mod[s] && (l = this._mod[s](l, f)),
                d[s] ? f[s](l) : (f[s] = l));
        }
      }
    })),
    (g = m.prototype),
    (m.bezierThrough = c),
    (m.cubicToQuadratic = l),
    (m._autoCSS = !0),
    (m.quadraticToCubic = function(t, e, i) {
      return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }),
    (m._cssRegister = function() {
      var t = s.CSSPlugin;
      if (t) {
        var e = t._internals,
          i = e._parseToProxy,
          n = e._setPluginRatio,
          r = e.CSSPropTween;
        e._registerComplexSpecialProp("bezier", {
          parser: function(t, e, s, o, a, l) {
            e instanceof Array && (e = {values: e}), (l = new m());
            var u,
              h,
              c,
              p = e.values,
              d = p.length - 1,
              f = [],
              g = {};
            if (d < 0) return a;
            for (u = 0; u <= d; u++)
              (c = i(t, p[u], o, a, l, d !== u)), (f[u] = c.end);
            for (h in e) g[h] = e[h];
            return (
              (g.values = f),
              ((a = new r(t, "bezier", 0, 0, c.pt, 2)).data = c),
              (a.plugin = l),
              (a.setRatio = n),
              0 === g.autoRotate && (g.autoRotate = !0),
              !g.autoRotate ||
                g.autoRotate instanceof Array ||
                ((u = !0 === g.autoRotate ? 0 : Number(g.autoRotate)),
                (g.autoRotate =
                  null != c.end.left
                    ? [["left", "top", "rotation", u, !1]]
                    : null != c.end.x && [["x", "y", "rotation", u, !1]])),
              g.autoRotate &&
                (o._transform || o._enableTransforms(!1),
                (c.autoRotate = o._target._gsTransform),
                (c.proxy.rotation = c.autoRotate.rotation || 0),
                o._overwriteProps.push("rotation")),
              l._onInitTween(c.proxy, g, o._tween),
              a
            );
          }
        });
      }
    }),
    (g._mod = function(t) {
      for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
        (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e);
    }),
    (g._kill = function(t) {
      var e,
        i,
        n = this._props;
      for (e in this._beziers)
        if (e in t)
          for (
            delete this._beziers[e], delete this._func[e], i = n.length;
            --i > -1;

          )
            n[i] === e && n.splice(i, 1);
      if ((n = this._autoRotate))
        for (i = n.length; --i > -1; ) t[n[i][2]] && n.splice(i, 1);
      return this._super._kill.call(this, t);
    }),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function(t, e) {
        var i,
          n,
          r,
          s,
          o = function() {
            t.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = o.prototype.setRatio);
          },
          a = _gsScope._gsDefine.globals,
          l = {},
          u = (o.prototype = new t("css"));
        (u.constructor = o),
          (o.version = "1.20.5"),
          (o.API = 2),
          (o.defaultTransformPerspective = 0),
          (o.defaultSkewType = "compensated"),
          (o.defaultSmoothOrigin = !0),
          (u = "px"),
          (o.suffixMap = {
            top: u,
            right: u,
            bottom: u,
            left: u,
            width: u,
            height: u,
            fontSize: u,
            padding: u,
            margin: u,
            perspective: u,
            lineHeight: ""
          });
        var h,
          c,
          p,
          d,
          f,
          m,
          g,
          y,
          v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          x = /(?:\d|\-|\+|=|#|\.)*/g,
          T = /opacity *= *([^)]*)/i,
          C = /opacity:([^;]*)/i,
          S = /alpha\(opacity *=.+?\)/i,
          E = /^(rgb|hsl)/,
          k = /([A-Z])/g,
          P = /-([a-z])/gi,
          A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          R = function(t, e) {
            return e.toUpperCase();
          },
          O = /(?:Left|Right|Width)/i,
          D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          $ = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          L = /,(?=[^\)]*(?:\(|$))/gi,
          M = /[\s,\(]/i,
          N = Math.PI / 180,
          F = 180 / Math.PI,
          I = {},
          j = {style: {}},
          q = _gsScope.document || {
            createElement: function() {
              return j;
            }
          },
          z = function(t, e) {
            return q.createElementNS
              ? q.createElementNS(e || "http://www.w3.org/1999/xhtml", t)
              : q.createElement(t);
          },
          H = z("div"),
          B = z("img"),
          U = (o._internals = {_specialProps: l}),
          W = (_gsScope.navigator || {}).userAgent || "",
          V = (function() {
            var t = W.indexOf("Android"),
              e = z("a");
            return (
              (p =
                -1 !== W.indexOf("Safari") &&
                -1 === W.indexOf("Chrome") &&
                (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3)),
              (f = p && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6),
              (d = -1 !== W.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) &&
                (m = parseFloat(RegExp.$1)),
              !!e &&
                ((e.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(e.style.opacity))
            );
          })(),
          X = function(t) {
            return T.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          Y = function(t) {
            _gsScope.console && console.log(t);
          },
          G = "",
          Q = "",
          Z = function(t, e) {
            var i,
              n,
              r = (e = e || H).style;
            if (r[t] !== undefined) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                n = 5;
              --n > -1 && r[i[n] + t] === undefined;

            );
            return n >= 0
              ? ((Q = 3 === n ? "ms" : i[n]),
                (G = "-" + Q.toLowerCase() + "-"),
                Q + t)
              : null;
          },
          J = ("undefined" != typeof window
            ? window
            : q.defaultView || {getComputedStyle: function() {}}
          ).getComputedStyle,
          K = (o.getStyle = function(t, e, i, n, r) {
            var s;
            return V || "opacity" !== e
              ? (!n && t.style[e]
                  ? (s = t.style[e])
                  : (i = i || J(t))
                  ? (s =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(k, "-$1").toLowerCase()))
                  : t.currentStyle && (s = t.currentStyle[e]),
                null == r ||
                (s && "none" !== s && "auto" !== s && "auto auto" !== s)
                  ? s
                  : r)
              : X(t);
          }),
          tt = (U.convertToPixels = function(t, i, n, r, s) {
            if ("px" === r || (!r && "lineHeight" !== i)) return n;
            if ("auto" === r || !n) return 0;
            var a,
              l,
              u,
              h = O.test(i),
              c = t,
              p = H.style,
              d = n < 0,
              f = 1 === n;
            if ((d && (n = -n), f && (n *= 100), "lineHeight" !== i || r))
              if ("%" === r && -1 !== i.indexOf("border"))
                a = (n / 100) * (h ? t.clientWidth : t.clientHeight);
              else {
                if (
                  ((p.cssText =
                    "border:0 solid red;position:" +
                    K(t, "position") +
                    ";line-height:0;"),
                  "%" !== r &&
                    c.appendChild &&
                    "v" !== r.charAt(0) &&
                    "rem" !== r)
                )
                  p[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                else {
                  if (
                    ((c = t.parentNode || q.body),
                    -1 !== K(c, "display").indexOf("flex") &&
                      (p.position = "absolute"),
                    (l = c._gsCache),
                    (u = e.ticker.frame),
                    l && h && l.time === u)
                  )
                    return (l.width * n) / 100;
                  p[h ? "width" : "height"] = n + r;
                }
                c.appendChild(H),
                  (a = parseFloat(H[h ? "offsetWidth" : "offsetHeight"])),
                  c.removeChild(H),
                  h &&
                    "%" === r &&
                    !1 !== o.cacheWidths &&
                    (((l = c._gsCache = c._gsCache || {}).time = u),
                    (l.width = (a / n) * 100)),
                  0 !== a || s || (a = tt(t, i, n, r, !0));
              }
            else
              (l = J(t).lineHeight),
                (t.style.lineHeight = n),
                (a = parseFloat(J(t).lineHeight)),
                (t.style.lineHeight = l);
            return f && (a /= 100), d ? -a : a;
          }),
          et = (U.calculateOffset = function(t, e, i) {
            if ("absolute" !== K(t, "position", i)) return 0;
            var n = "left" === e ? "Left" : "Top",
              r = K(t, "margin" + n, i);
            return (
              t["offset" + n] - (tt(t, e, parseFloat(r), r.replace(x, "")) || 0)
            );
          }),
          it = function(t, e) {
            var i,
              n,
              r,
              s = {};
            if ((e = e || J(t, null)))
              if ((i = e.length))
                for (; --i > -1; )
                  (-1 !== (r = e[i]).indexOf("-transform") && $t !== r) ||
                    (s[r.replace(P, R)] = e.getPropertyValue(r));
              else
                for (i in e)
                  (-1 !== i.indexOf("Transform") && Dt !== i) || (s[i] = e[i]);
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  s[i] === undefined &&
                  (s[i.replace(P, R)] = e[i]);
            return (
              V || (s.opacity = X(t)),
              (n = Xt(t, e, !1)),
              (s.rotation = n.rotation),
              (s.skewX = n.skewX),
              (s.scaleX = n.scaleX),
              (s.scaleY = n.scaleY),
              (s.x = n.x),
              (s.y = n.y),
              Mt &&
                ((s.z = n.z),
                (s.rotationX = n.rotationX),
                (s.rotationY = n.rotationY),
                (s.scaleZ = n.scaleZ)),
              s.filters && delete s.filters,
              s
            );
          },
          nt = function(t, e, i, n, r) {
            var s,
              o,
              a,
              l = {},
              u = t.style;
            for (o in i)
              "cssText" !== o &&
                "length" !== o &&
                isNaN(o) &&
                (e[o] !== (s = i[o]) || (r && r[o])) &&
                -1 === o.indexOf("Origin") &&
                (("number" != typeof s && "string" != typeof s) ||
                  ((l[o] =
                    "auto" !== s || ("left" !== o && "top" !== o)
                      ? ("" !== s && "auto" !== s && "none" !== s) ||
                        "string" != typeof e[o] ||
                        "" === e[o].replace(w, "")
                        ? s
                        : 0
                      : et(t, o)),
                  u[o] !== undefined && (a = new vt(u, o, u[o], a))));
            if (n) for (o in n) "className" !== o && (l[o] = n[o]);
            return {difs: l, firstMPT: a};
          },
          rt = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
          st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ot = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
              return (i || J(t))[e] || 0;
            if (t.getCTM && Ut(t)) return t.getBBox()[e] || 0;
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = rt[e],
              s = r.length;
            for (i = i || J(t, null); --s > -1; )
              (n -= parseFloat(K(t, "padding" + r[s], i, !0)) || 0),
                (n -= parseFloat(K(t, "border" + r[s] + "Width", i, !0)) || 0);
            return n;
          },
          at = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            (null != t && "" !== t) || (t = "0 0");
            var i,
              n = t.split(" "),
              r =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : n[0],
              s =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : n[1];
            if (n.length > 3 && !e) {
              for (
                n = t
                  .split(", ")
                  .join(",")
                  .split(","),
                  t = [],
                  i = 0;
                i < n.length;
                i++
              )
                t.push(at(n[i]));
              return t.join(",");
            }
            return (
              null == s
                ? (s = "center" === r ? "50%" : "0")
                : "center" === s && (s = "50%"),
              ("center" === r ||
                (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) &&
                (r = "50%"),
              (t = r + " " + s + (n.length > 2 ? " " + n[2] : "")),
              e &&
                ((e.oxp = -1 !== r.indexOf("%")),
                (e.oyp = -1 !== s.indexOf("%")),
                (e.oxr = "=" === r.charAt(1)),
                (e.oyr = "=" === s.charAt(1)),
                (e.ox = parseFloat(r.replace(w, ""))),
                (e.oy = parseFloat(s.replace(w, ""))),
                (e.v = t)),
              e || t
            );
          },
          lt = function(t, e) {
            return (
              "function" == typeof t && (t = t(y, g)),
              "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                : parseFloat(t) - parseFloat(e) || 0
            );
          },
          ut = function(t, e) {
            return (
              "function" == typeof t && (t = t(y, g)),
              null == t
                ? e
                : "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
                : parseFloat(t) || 0
            );
          },
          ht = function(t, e, i, n) {
            var r,
              s,
              o,
              a,
              l,
              u = 1e-6;
            return (
              "function" == typeof t && (t = t(y, g)),
              null == t
                ? (a = e)
                : "number" == typeof t
                ? (a = t)
                : ((r = 360),
                  (s = t.split("_")),
                  (o =
                    ((l = "=" === t.charAt(1))
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(s[0].substr(2))
                      : parseFloat(s[0])) *
                      (-1 === t.indexOf("rad") ? 1 : F) -
                    (l ? 0 : e)),
                  s.length &&
                    (n && (n[i] = e + o),
                    -1 !== t.indexOf("short") &&
                      (o %= r) !== o % (r / 2) &&
                      (o = o < 0 ? o + r : o - r),
                    -1 !== t.indexOf("_cw") && o < 0
                      ? (o = ((o + 9999999999 * r) % r) - ((o / r) | 0) * r)
                      : -1 !== t.indexOf("ccw") &&
                        o > 0 &&
                        (o = ((o - 9999999999 * r) % r) - ((o / r) | 0) * r)),
                  (a = e + o)),
              a < u && a > -u && (a = 0),
              a
            );
          },
          ct = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
          },
          pt = function(t, e, i) {
            return (
              (255 *
                (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                  ? e + (i - e) * t * 6
                  : t < 0.5
                  ? i
                  : 3 * t < 2
                  ? e + (i - e) * (2 / 3 - t) * 6
                  : e) +
                0.5) |
              0
            );
          },
          dt = (o.parseColor = function(t, e) {
            var i, n, r, s, o, a, l, u, h, c, p;
            if (t)
              if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  ct[t])
                )
                  i = ct[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    (t =
                      "#" +
                      (n = t.charAt(1)) +
                      n +
                      (r = t.charAt(2)) +
                      r +
                      (s = t.charAt(3)) +
                      s),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      (t >> 8) & 255,
                      255 & t
                    ]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = p = t.match(v)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(_);
                  } else
                    (o = (Number(i[0]) % 360) / 360),
                      (a = Number(i[1]) / 100),
                      (n =
                        2 * (l = Number(i[2]) / 100) -
                        (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                      i.length > 3 && (i[3] = Number(i[3])),
                      (i[0] = pt(o + 1 / 3, n, r)),
                      (i[1] = pt(o, n, r)),
                      (i[2] = pt(o - 1 / 3, n, r));
                else i = t.match(v) || ct.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  i.length > 3 && (i[3] = Number(i[3]));
              }
            else i = ct.black;
            return (
              e &&
                !p &&
                ((n = i[0] / 255),
                (r = i[1] / 255),
                (s = i[2] / 255),
                (l = ((u = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2),
                u === h
                  ? (o = a = 0)
                  : ((c = u - h),
                    (a = l > 0.5 ? c / (2 - u - h) : c / (u + h)),
                    (o =
                      u === n
                        ? (r - s) / c + (r < s ? 6 : 0)
                        : u === r
                        ? (s - n) / c + 2
                        : (n - r) / c + 4),
                    (o *= 60)),
                (i[0] = (o + 0.5) | 0),
                (i[1] = (100 * a + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            );
          }),
          ft = function(t, e) {
            var i,
              n,
              r,
              s = t.match(mt) || [],
              o = 0,
              a = "";
            if (!s.length) return t;
            for (i = 0; i < s.length; i++)
              (n = s[i]),
                (o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length),
                3 === (n = dt(n, e)).length && n.push(1),
                (a +=
                  r +
                  (e
                    ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3]
                    : "rgba(" + n.join(",")) +
                  ")");
            return a + t.substr(o);
          },
          mt =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (u in ct) mt += "|" + u + "\\b";
        (mt = new RegExp(mt + ")", "gi")),
          (o.colorStringFilter = function(t) {
            var e,
              i = t[0] + " " + t[1];
            mt.test(i) &&
              ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")),
              (t[0] = ft(t[0], e)),
              (t[1] = ft(t[1], e))),
              (mt.lastIndex = 0);
          }),
          e.defaultStringFilter ||
            (e.defaultStringFilter = o.colorStringFilter);
        var gt = function(t, e, i, n) {
            if (null == t)
              return function(t) {
                return t;
              };
            var r,
              s = e ? (t.match(mt) || [""])[0] : "",
              o =
                t
                  .split(s)
                  .join("")
                  .match(b) || [],
              a = t.substr(0, t.indexOf(o[0])),
              l = ")" === t.charAt(t.length - 1) ? ")" : "",
              u = -1 !== t.indexOf(" ") ? " " : ",",
              h = o.length,
              c = h > 0 ? o[0].replace(v, "") : "";
            return h
              ? (r = e
                  ? function(t) {
                      var e, p, d, f;
                      if ("number" == typeof t) t += c;
                      else if (n && L.test(t)) {
                        for (
                          f = t.replace(L, "|").split("|"), d = 0;
                          d < f.length;
                          d++
                        )
                          f[d] = r(f[d]);
                        return f.join(",");
                      }
                      if (
                        ((e = (t.match(mt) || [s])[0]),
                        (d = (p =
                          t
                            .split(e)
                            .join("")
                            .match(b) || []).length),
                        h > d--)
                      )
                        for (; ++d < h; )
                          p[d] = i ? p[((d - 1) / 2) | 0] : o[d];
                      return (
                        a +
                        p.join(u) +
                        u +
                        e +
                        l +
                        (-1 !== t.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function(t) {
                      var e, s, p;
                      if ("number" == typeof t) t += c;
                      else if (n && L.test(t)) {
                        for (
                          s = t.replace(L, "|").split("|"), p = 0;
                          p < s.length;
                          p++
                        )
                          s[p] = r(s[p]);
                        return s.join(",");
                      }
                      if (((p = (e = t.match(b) || []).length), h > p--))
                        for (; ++p < h; )
                          e[p] = i ? e[((p - 1) / 2) | 0] : o[p];
                      return a + e.join(u) + l;
                    })
              : function(t) {
                  return t;
                };
          },
          yt = function(t) {
            return (
              (t = t.split(",")),
              function(e, i, n, r, s, o, a) {
                var l,
                  u = (i + "").split(" ");
                for (a = {}, l = 0; l < 4; l++)
                  a[t[l]] = u[l] = u[l] || u[((l - 1) / 2) >> 0];
                return r.parse(e, a, s, o);
              }
            );
          },
          vt = ((U._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (
              var e,
                i,
                n,
                r,
                s,
                o = this.data,
                a = o.proxy,
                l = o.firstMPT,
                u = 1e-6;
              l;

            )
              (e = a[l.v]),
                l.r ? (e = l.r(e)) : e < u && e > -u && (e = 0),
                (l.t[l.p] = e),
                (l = l._next);
            if (
              (o.autoRotate &&
                (o.autoRotate.rotation = o.mod
                  ? o.mod.call(this._tween, a.rotation, this.t, this._tween)
                  : a.rotation),
              1 === t || 0 === t)
            )
              for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l; ) {
                if ((i = l.t).type) {
                  if (1 === i.type) {
                    for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)
                      r += i["xn" + n] + i["xs" + (n + 1)];
                    i[s] = r;
                  }
                } else i[s] = i.s + i.xs0;
                l = l._next;
              }
          }),
          function(t, e, i, n, r) {
            (this.t = t),
              (this.p = e),
              (this.v = i),
              (this.r = r),
              n && ((n._prev = this), (this._next = n));
          }),
          _t = ((U._parseToProxy = function(t, e, i, n, r, s) {
            var o,
              a,
              l,
              u,
              h,
              c = n,
              p = {},
              d = {},
              f = i._transform,
              m = I;
            for (
              i._transform = null,
                I = e,
                n = h = i.parse(t, e, n, r),
                I = m,
                s &&
                  ((i._transform = f),
                  c && ((c._prev = null), c._prev && (c._prev._next = null)));
              n && n !== c;

            ) {
              if (
                n.type <= 1 &&
                ((d[(a = n.p)] = n.s + n.c),
                (p[a] = n.s),
                s || ((u = new vt(n, "s", a, u, n.r)), (n.c = 0)),
                1 === n.type)
              )
                for (o = n.l; --o > 0; )
                  (l = "xn" + o),
                    (d[(a = n.p + "_" + l)] = n.data[l]),
                    (p[a] = n[l]),
                    s || (u = new vt(n, l, a, u, n.rxp[l]));
              n = n._next;
            }
            return {proxy: p, end: d, firstMPT: u, pt: h};
          }),
          (U.CSSPropTween = function(t, e, n, r, o, a, l, u, h, c, p) {
            (this.t = t),
              (this.p = e),
              (this.s = n),
              (this.c = r),
              (this.n = l || e),
              t instanceof _t || s.push(this.n),
              (this.r = u ? ("function" == typeof u ? u : Math.round) : u),
              (this.type = a || 0),
              h && ((this.pr = h), (i = !0)),
              (this.b = c === undefined ? n : c),
              (this.e = p === undefined ? n + r : p),
              o && ((this._next = o), (o._prev = this));
          })),
          bt = function(t, e, i, n, r, s) {
            var o = new _t(t, e, i, n - i, r, -1, s);
            return (o.b = i), (o.e = o.xs0 = n), o;
          },
          wt = (o.parseComplex = function(t, e, i, n, r, s, a, l, u, c) {
            (i = i || s || ""),
              "function" == typeof n && (n = n(y, g)),
              (a = new _t(t, e, 0, 0, a, c ? 2 : 1, null, !1, l, i, n)),
              (n += ""),
              r &&
                mt.test(n + i) &&
                ((n = [i, n]), o.colorStringFilter(n), (i = n[0]), (n = n[1]));
            var p,
              d,
              f,
              m,
              b,
              w,
              x,
              T,
              C,
              S,
              E,
              k,
              P,
              A = i
                .split(", ")
                .join(",")
                .split(" "),
              R = n
                .split(", ")
                .join(",")
                .split(" "),
              O = A.length,
              D = !1 !== h;
            for (
              (-1 === n.indexOf(",") && -1 === i.indexOf(",")) ||
                (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl")
                  ? ((A = A.join(" ")
                      .replace(L, ", ")
                      .split(" ")),
                    (R = R.join(" ")
                      .replace(L, ", ")
                      .split(" ")))
                  : ((A = A.join(" ")
                      .split(",")
                      .join(", ")
                      .split(" ")),
                    (R = R.join(" ")
                      .split(",")
                      .join(", ")
                      .split(" "))),
                (O = A.length)),
                O !== R.length && (O = (A = (s || "").split(" ")).length),
                a.plugin = u,
                a.setRatio = c,
                mt.lastIndex = 0,
                p = 0;
              p < O;
              p++
            )
              if (((m = A[p]), (b = R[p] + ""), (T = parseFloat(m)) || 0 === T))
                a.appendXtra(
                  "",
                  T,
                  lt(b, T),
                  b.replace(_, ""),
                  !(!D || -1 === b.indexOf("px")) && Math.round,
                  !0
                );
              else if (r && mt.test(m))
                (k = ")" + ((k = b.indexOf(")") + 1) ? b.substr(k) : "")),
                  (P = -1 !== b.indexOf("hsl") && V),
                  (S = b),
                  (m = dt(m, P)),
                  (b = dt(b, P)),
                  (C = m.length + b.length > 6) && !V && 0 === b[3]
                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
                      (a.e = a.e.split(R[p]).join("transparent")))
                    : (V || (C = !1),
                      P
                        ? a
                            .appendXtra(
                              S.substr(0, S.indexOf("hsl")) +
                                (C ? "hsla(" : "hsl("),
                              m[0],
                              lt(b[0], m[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", m[1], lt(b[1], m[1]), "%,", !1)
                            .appendXtra(
                              "",
                              m[2],
                              lt(b[2], m[2]),
                              C ? "%," : "%" + k,
                              !1
                            )
                        : a
                            .appendXtra(
                              S.substr(0, S.indexOf("rgb")) +
                                (C ? "rgba(" : "rgb("),
                              m[0],
                              b[0] - m[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", m[1], b[1] - m[1], ",", Math.round)
                            .appendXtra(
                              "",
                              m[2],
                              b[2] - m[2],
                              C ? "," : k,
                              Math.round
                            ),
                      C &&
                        ((m = m.length < 4 ? 1 : m[3]),
                        a.appendXtra(
                          "",
                          m,
                          (b.length < 4 ? 1 : b[3]) - m,
                          k,
                          !1
                        ))),
                  (mt.lastIndex = 0);
              else if ((w = m.match(v))) {
                if (!(x = b.match(_)) || x.length !== w.length) return a;
                for (f = 0, d = 0; d < w.length; d++)
                  (E = w[d]),
                    (S = m.indexOf(E, f)),
                    a.appendXtra(
                      m.substr(f, S - f),
                      Number(E),
                      lt(x[d], E),
                      "",
                      !(!D || "px" !== m.substr(S + E.length, 2)) && Math.round,
                      0 === d
                    ),
                    (f = S + E.length);
                a["xs" + a.l] += m.substr(f);
              } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
            if (-1 !== n.indexOf("=") && a.data) {
              for (k = a.xs0 + a.data.s, p = 1; p < a.l; p++)
                k += a["xs" + p] + a.data["xn" + p];
              a.e = k + a["xs" + p];
            }
            return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
          }),
          xt = 9;
        for ((u = _t.prototype).l = u.pr = 0; --xt > 0; )
          (u["xn" + xt] = 0), (u["xs" + xt] = "");
        (u.xs0 = ""),
          (u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null),
          (u.appendXtra = function(t, e, i, n, r, s) {
            var o = this,
              a = o.l;
            return (
              (o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || ""),
              i || 0 === a || o.plugin
                ? (o.l++,
                  (o.type = o.setRatio ? 2 : 1),
                  (o["xs" + o.l] = n || ""),
                  a > 0
                    ? ((o.data["xn" + a] = e + i),
                      (o.rxp["xn" + a] = r),
                      (o["xn" + a] = e),
                      o.plugin ||
                        ((o.xfirst = new _t(
                          o,
                          "xn" + a,
                          e,
                          i,
                          o.xfirst || o,
                          0,
                          o.n,
                          r,
                          o.pr
                        )),
                        (o.xfirst.xs0 = 0)),
                      o)
                    : ((o.data = {s: e + i}),
                      (o.rxp = {}),
                      (o.s = e),
                      (o.c = i),
                      (o.r = r),
                      o))
                : ((o["xs" + a] += e + (n || "")), o)
            );
          });
        var Tt = function(t, e) {
            (e = e || {}),
              (this.p = (e.prefix && Z(t)) || t),
              (l[t] = l[this.p] = this),
              (this.format =
                e.formatter ||
                gt(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.pr = e.priority || 0);
          },
          Ct = (U._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var n,
              r = t.split(","),
              s = e.defaultValue;
            for (i = i || [s], n = 0; n < r.length; n++)
              (e.prefix = 0 === n && e.prefix),
                (e.defaultValue = i[n] || s),
                new Tt(r[n], e);
          }),
          St = (U._registerPluginProp = function(t) {
            if (!l[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              Ct(t, {
                parser: function(t, i, n, r, s, o, u) {
                  var h = a.com.greensock.plugins[e];
                  return h
                    ? (h._cssRegister(), l[n].parse(t, i, n, r, s, o, u))
                    : (Y("Error: " + e + " js file not loaded."), s);
                }
              });
            }
          });
        ((u = Tt.prototype).parseComplex = function(t, e, i, n, r, s) {
          var o,
            a,
            l,
            u,
            h,
            c,
            p = this.keyword;
          if (
            (this.multi &&
              (L.test(i) || L.test(e)
                ? ((a = e.replace(L, "|").split("|")),
                  (l = i.replace(L, "|").split("|")))
                : p && ((a = [e]), (l = [i]))),
            l)
          ) {
            for (
              u = l.length > a.length ? l.length : a.length, o = 0;
              o < u;
              o++
            )
              (e = a[o] = a[o] || this.dflt),
                (i = l[o] = l[o] || this.dflt),
                p &&
                  (h = e.indexOf(p)) !== (c = i.indexOf(p)) &&
                  (-1 === c
                    ? (a[o] = a[o].split(p).join(""))
                    : -1 === h && (a[o] += " " + p));
            (e = a.join(", ")), (i = l.join(", "));
          }
          return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s);
        }),
          (u.parse = function(t, e, i, n, s, o) {
            return this.parseComplex(
              t.style,
              this.format(K(t, this.p, r, !1, this.dflt)),
              this.format(e),
              s,
              o
            );
          }),
          (o.registerSpecialProp = function(t, e, i) {
            Ct(t, {
              parser: function(t, n, r, s, o, a) {
                var l = new _t(t, r, 0, 0, o, 2, r, !1, i);
                return (l.plugin = a), (l.setRatio = e(t, n, s._tween, r)), l;
              },
              priority: i
            });
          }),
          (o.useSVGTransformAttr = !0);
        var Et,
          kt,
          Pt,
          At,
          Rt,
          Ot = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
            ","
          ),
          Dt = Z("transform"),
          $t = G + "transform",
          Lt = Z("transformOrigin"),
          Mt = null !== Z("perspective"),
          Nt = (U.Transform = function() {
            (this.perspective = parseFloat(o.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === o.defaultForce3D || !Mt) &&
                (o.defaultForce3D || "auto"));
          }),
          Ft = _gsScope.SVGElement,
          It = function(t, e, i) {
            var n,
              r = q.createElementNS("http://www.w3.org/2000/svg", t),
              s = /([a-z])([A-Z])/g;
            for (n in i)
              r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(r), r;
          },
          jt = q.documentElement || {},
          qt = ((Rt = m || (/Android/i.test(W) && !_gsScope.chrome)),
          q.createElementNS &&
            !Rt &&
            ((kt = It("svg", jt)),
            (At = (Pt = It("rect", kt, {
              width: 100,
              height: 50,
              x: 100
            })).getBoundingClientRect().width),
            (Pt.style[Lt] = "50% 50%"),
            (Pt.style[Dt] = "scaleX(0.5)"),
            (Rt = At === Pt.getBoundingClientRect().width && !(d && Mt)),
            jt.removeChild(kt)),
          Rt),
          zt = function(t, e, i, n, r, s) {
            var a,
              l,
              u,
              h,
              c,
              p,
              d,
              f,
              m,
              g,
              y,
              v,
              _,
              b,
              w = t._gsTransform,
              x = Vt(t, !0);
            w && ((_ = w.xOrigin), (b = w.yOrigin)),
              (!n || (a = n.split(" ")).length < 2) &&
                (0 === (d = t.getBBox()).x &&
                  0 === d.y &&
                  d.width + d.height === 0 &&
                  (d = {
                    x:
                      parseFloat(
                        t.hasAttribute("x")
                          ? t.getAttribute("x")
                          : t.hasAttribute("cx")
                          ? t.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        t.hasAttribute("y")
                          ? t.getAttribute("y")
                          : t.hasAttribute("cy")
                          ? t.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0
                  }),
                (a = [
                  (-1 !== (e = at(e).split(" "))[0].indexOf("%")
                    ? (parseFloat(e[0]) / 100) * d.width
                    : parseFloat(e[0])) + d.x,
                  (-1 !== e[1].indexOf("%")
                    ? (parseFloat(e[1]) / 100) * d.height
                    : parseFloat(e[1])) + d.y
                ])),
              (i.xOrigin = h = parseFloat(a[0])),
              (i.yOrigin = c = parseFloat(a[1])),
              n &&
                x !== Wt &&
                ((p = x[0]),
                (d = x[1]),
                (f = x[2]),
                (m = x[3]),
                (g = x[4]),
                (y = x[5]),
                (v = p * m - d * f) &&
                  ((l = h * (m / v) + c * (-f / v) + (f * y - m * g) / v),
                  (u = h * (-d / v) + c * (p / v) - (p * y - d * g) / v),
                  (h = i.xOrigin = a[0] = l),
                  (c = i.yOrigin = a[1] = u))),
              w &&
                (s &&
                  ((i.xOffset = w.xOffset), (i.yOffset = w.yOffset), (w = i)),
                r || (!1 !== r && !1 !== o.defaultSmoothOrigin)
                  ? ((l = h - _),
                    (u = c - b),
                    (w.xOffset += l * x[0] + u * x[2] - l),
                    (w.yOffset += l * x[1] + u * x[3] - u))
                  : (w.xOffset = w.yOffset = 0)),
              s || t.setAttribute("data-svg-origin", a.join(" "));
          },
          Ht = function(t) {
            var e,
              i = z(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              n = this.parentNode,
              r = this.nextSibling,
              s = this.style.cssText;
            if (
              (jt.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (e = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Ht);
              } catch (o) {}
            else this._originalGetBBox && (e = this._originalGetBBox());
            return (
              r ? n.insertBefore(this, r) : n.appendChild(this),
              jt.removeChild(i),
              (this.style.cssText = s),
              e
            );
          },
          Bt = function(t) {
            try {
              return t.getBBox();
            } catch (e) {
              return Ht.call(t, !0);
            }
          },
          Ut = function(t) {
            return !(
              !Ft ||
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !Bt(t)
            );
          },
          Wt = [1, 0, 0, 1, 0, 0],
          Vt = function(t, e) {
            var i,
              n,
              r,
              s,
              o,
              a,
              l = t._gsTransform || new Nt(),
              u = 1e5,
              h = t.style;
            if (
              (Dt
                ? (n = K(t, $t, null, !0))
                : t.currentStyle &&
                  (n =
                    (n = t.currentStyle.filter.match(D)) && 4 === n.length
                      ? [
                          n[0].substr(4),
                          Number(n[2].substr(4)),
                          Number(n[1].substr(4)),
                          n[3].substr(4),
                          l.x || 0,
                          l.y || 0
                        ].join(",")
                      : ""),
              (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
              !Dt ||
                (!(a = !J(t) || "none" === J(t).display) && t.parentNode) ||
                (a && ((s = h.display), (h.display = "block")),
                t.parentNode || ((o = 1), jt.appendChild(t)),
                (i =
                  !(n = K(t, $t, null, !0)) ||
                  "none" === n ||
                  "matrix(1, 0, 0, 1, 0, 0)" === n),
                s ? (h.display = s) : a && Zt(h, "display"),
                o && jt.removeChild(t)),
              (l.svg || (t.getCTM && Ut(t))) &&
                (i &&
                  -1 !== (h[Dt] + "").indexOf("matrix") &&
                  ((n = h[Dt]), (i = 0)),
                (r = t.getAttribute("transform")),
                i &&
                  r &&
                  ((n =
                    "matrix(" +
                    (r = t.transform.baseVal.consolidate().matrix).a +
                    "," +
                    r.b +
                    "," +
                    r.c +
                    "," +
                    r.d +
                    "," +
                    r.e +
                    "," +
                    r.f +
                    ")"),
                  (i = 0))),
              i)
            )
              return Wt;
            for (r = (n || "").match(v) || [], xt = r.length; --xt > -1; )
              (s = Number(r[xt])),
                (r[xt] = (o = s - (s |= 0))
                  ? ((o * u + (o < 0 ? -0.5 : 0.5)) | 0) / u + s
                  : s);
            return e && r.length > 6
              ? [r[0], r[1], r[4], r[5], r[12], r[13]]
              : r;
          },
          Xt = (U.getTransform = function(t, i, n, r) {
            if (t._gsTransform && n && !r) return t._gsTransform;
            var s,
              a,
              l,
              u,
              h,
              c,
              p = (n && t._gsTransform) || new Nt(),
              d = p.scaleX < 0,
              f = 2e-5,
              m = 1e5,
              g =
                (Mt &&
                  (parseFloat(K(t, Lt, i, !1, "0 0 0").split(" ")[2]) ||
                    p.zOrigin)) ||
                0,
              y = parseFloat(o.defaultTransformPerspective) || 0;
            if (
              ((p.svg = !(!t.getCTM || !Ut(t))),
              p.svg &&
                (zt(
                  t,
                  K(t, Lt, i, !1, "50% 50%") + "",
                  p,
                  t.getAttribute("data-svg-origin")
                ),
                (Et = o.useSVGTransformAttr || qt)),
              (s = Vt(t)) !== Wt)
            ) {
              if (16 === s.length) {
                var v,
                  _,
                  b,
                  w,
                  x,
                  T = s[0],
                  C = s[1],
                  S = s[2],
                  E = s[3],
                  k = s[4],
                  P = s[5],
                  A = s[6],
                  R = s[7],
                  O = s[8],
                  D = s[9],
                  $ = s[10],
                  L = s[12],
                  M = s[13],
                  N = s[14],
                  I = s[11],
                  j = Math.atan2(A, $);
                p.zOrigin &&
                  ((L = O * (N = -p.zOrigin) - s[12]),
                  (M = D * N - s[13]),
                  (N = $ * N + p.zOrigin - s[14])),
                  (p.rotationX = j * F),
                  j &&
                    ((v = k * (w = Math.cos(-j)) + O * (x = Math.sin(-j))),
                    (_ = P * w + D * x),
                    (b = A * w + $ * x),
                    (O = k * -x + O * w),
                    (D = P * -x + D * w),
                    ($ = A * -x + $ * w),
                    (I = R * -x + I * w),
                    (k = v),
                    (P = _),
                    (A = b)),
                  (j = Math.atan2(-S, $)),
                  (p.rotationY = j * F),
                  j &&
                    ((_ = C * (w = Math.cos(-j)) - D * (x = Math.sin(-j))),
                    (b = S * w - $ * x),
                    (D = C * x + D * w),
                    ($ = S * x + $ * w),
                    (I = E * x + I * w),
                    (T = v = T * w - O * x),
                    (C = _),
                    (S = b)),
                  (j = Math.atan2(C, T)),
                  (p.rotation = j * F),
                  j &&
                    ((v = T * (w = Math.cos(j)) + C * (x = Math.sin(j))),
                    (_ = k * w + P * x),
                    (b = O * w + D * x),
                    (C = C * w - T * x),
                    (P = P * w - k * x),
                    (D = D * w - O * x),
                    (T = v),
                    (k = _),
                    (O = b)),
                  p.rotationX &&
                    Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 &&
                    ((p.rotationX = p.rotation = 0),
                    (p.rotationY = 180 - p.rotationY)),
                  (j = Math.atan2(k, P)),
                  (p.scaleX =
                    ((Math.sqrt(T * T + C * C + S * S) * m + 0.5) | 0) / m),
                  (p.scaleY = ((Math.sqrt(P * P + A * A) * m + 0.5) | 0) / m),
                  (p.scaleZ =
                    ((Math.sqrt(O * O + D * D + $ * $) * m + 0.5) | 0) / m),
                  (T /= p.scaleX),
                  (k /= p.scaleY),
                  (C /= p.scaleX),
                  (P /= p.scaleY),
                  Math.abs(j) > f
                    ? ((p.skewX = j * F),
                      (k = 0),
                      "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(j)))
                    : (p.skewX = 0),
                  (p.perspective = I ? 1 / (I < 0 ? -I : I) : 0),
                  (p.x = L),
                  (p.y = M),
                  (p.z = N),
                  p.svg &&
                    ((p.x -= p.xOrigin - (p.xOrigin * T - p.yOrigin * k)),
                    (p.y -= p.yOrigin - (p.yOrigin * C - p.xOrigin * P)));
              } else if (
                !Mt ||
                r ||
                !s.length ||
                p.x !== s[4] ||
                p.y !== s[5] ||
                (!p.rotationX && !p.rotationY)
              ) {
                var q = s.length >= 6,
                  z = q ? s[0] : 1,
                  H = s[1] || 0,
                  B = s[2] || 0,
                  U = q ? s[3] : 1;
                (p.x = s[4] || 0),
                  (p.y = s[5] || 0),
                  (l = Math.sqrt(z * z + H * H)),
                  (u = Math.sqrt(U * U + B * B)),
                  (h = z || H ? Math.atan2(H, z) * F : p.rotation || 0),
                  (c = B || U ? Math.atan2(B, U) * F + h : p.skewX || 0),
                  (p.scaleX = l),
                  (p.scaleY = u),
                  (p.rotation = h),
                  (p.skewX = c),
                  Mt &&
                    ((p.rotationX = p.rotationY = p.z = 0),
                    (p.perspective = y),
                    (p.scaleZ = 1)),
                  p.svg &&
                    ((p.x -= p.xOrigin - (p.xOrigin * z + p.yOrigin * B)),
                    (p.y -= p.yOrigin - (p.xOrigin * H + p.yOrigin * U)));
              }
              for (a in (Math.abs(p.skewX) > 90 &&
                Math.abs(p.skewX) < 270 &&
                (d
                  ? ((p.scaleX *= -1),
                    (p.skewX += p.rotation <= 0 ? 180 : -180),
                    (p.rotation += p.rotation <= 0 ? 180 : -180))
                  : ((p.scaleY *= -1), (p.skewX += p.skewX <= 0 ? 180 : -180))),
              (p.zOrigin = g),
              p))
                p[a] < f && p[a] > -f && (p[a] = 0);
            }
            return (
              n &&
                ((t._gsTransform = p),
                p.svg &&
                  (Et && t.style[Dt]
                    ? e.delayedCall(0.001, function() {
                        Zt(t.style, Dt);
                      })
                    : !Et &&
                      t.getAttribute("transform") &&
                      e.delayedCall(0.001, function() {
                        t.removeAttribute("transform");
                      }))),
              p
            );
          }),
          Yt = function(t) {
            var e,
              i,
              n = this.data,
              r = -n.rotation * N,
              s = r + n.skewX * N,
              o = 1e5,
              a = ((Math.cos(r) * n.scaleX * o) | 0) / o,
              l = ((Math.sin(r) * n.scaleX * o) | 0) / o,
              u = ((Math.sin(s) * -n.scaleY * o) | 0) / o,
              h = ((Math.cos(s) * n.scaleY * o) | 0) / o,
              c = this.t.style,
              p = this.t.currentStyle;
            if (p) {
              (i = l), (l = -u), (u = -i), (e = p.filter), (c.filter = "");
              var d,
                f,
                g = this.t.offsetWidth,
                y = this.t.offsetHeight,
                v = "absolute" !== p.position,
                _ =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  a +
                  ", M12=" +
                  l +
                  ", M21=" +
                  u +
                  ", M22=" +
                  h,
                b = n.x + (g * n.xPercent) / 100,
                w = n.y + (y * n.yPercent) / 100;
              if (
                (null != n.ox &&
                  ((b +=
                    (d = (n.oxp ? g * n.ox * 0.01 : n.ox) - g / 2) -
                    (d * a +
                      (f = (n.oyp ? y * n.oy * 0.01 : n.oy) - y / 2) * l)),
                  (w += f - (d * u + f * h))),
                (_ += v
                  ? ", Dx=" +
                    ((d = g / 2) - (d * a + (f = y / 2) * l) + b) +
                    ", Dy=" +
                    (f - (d * u + f * h) + w) +
                    ")"
                  : ", sizingMethod='auto expand')"),
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (c.filter = e.replace($, _))
                  : (c.filter = _ + " " + e),
                (0 !== t && 1 !== t) ||
                  (1 === a &&
                    0 === l &&
                    0 === u &&
                    1 === h &&
                    ((v && -1 === _.indexOf("Dx=0, Dy=0")) ||
                      (T.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                      (-1 === e.indexOf(e.indexOf("Alpha")) &&
                        c.removeAttribute("filter")))),
                !v)
              ) {
                var C,
                  S,
                  E,
                  k = m < 8 ? 1 : -1;
                for (
                  d = n.ieOffsetX || 0,
                    f = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round(
                      (g - ((a < 0 ? -a : a) * g + (l < 0 ? -l : l) * y)) / 2 +
                        b
                    ),
                    n.ieOffsetY = Math.round(
                      (y - ((h < 0 ? -h : h) * y + (u < 0 ? -u : u) * g)) / 2 +
                        w
                    ),
                    xt = 0;
                  xt < 4;
                  xt++
                )
                  (E =
                    (i =
                      -1 !== (C = p[(S = st[xt])]).indexOf("px")
                        ? parseFloat(C)
                        : tt(this.t, S, parseFloat(C), C.replace(x, "")) ||
                          0) !== n[S]
                      ? xt < 2
                        ? -n.ieOffsetX
                        : -n.ieOffsetY
                      : xt < 2
                      ? d - n.ieOffsetX
                      : f - n.ieOffsetY),
                    (c[S] =
                      (n[S] = Math.round(
                        i - E * (0 === xt || 2 === xt ? 1 : k)
                      )) + "px");
              }
            }
          },
          Gt = (U.set3DTransformRatio = U.setTransformRatio = function(t) {
            var e,
              i,
              n,
              r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              p,
              f,
              m,
              g,
              y,
              v,
              _,
              b,
              w,
              x,
              T,
              C,
              S = this.data,
              E = this.t.style,
              k = S.rotation,
              P = S.rotationX,
              A = S.rotationY,
              R = S.scaleX,
              O = S.scaleY,
              D = S.scaleZ,
              $ = S.x,
              L = S.y,
              M = S.z,
              F = S.svg,
              I = S.perspective,
              j = S.force3D,
              q = S.skewY,
              z = S.skewX;
            if (
              (q && ((z += q), (k += q)),
              !(
                (((1 !== t && 0 !== t) ||
                  "auto" !== j ||
                  (this.tween._totalTime !== this.tween._totalDuration &&
                    this.tween._totalTime)) &&
                  j) ||
                M ||
                I ||
                A ||
                P ||
                1 !== D
              ) ||
                (Et && F) ||
                !Mt)
            )
              k || z || F
                ? ((k *= N),
                  (T = z * N),
                  (C = 1e5),
                  (i = Math.cos(k) * R),
                  (s = Math.sin(k) * R),
                  (n = Math.sin(k - T) * -O),
                  (o = Math.cos(k - T) * O),
                  T &&
                    "simple" === S.skewType &&
                    ((e = Math.tan(T - q * N)),
                    (n *= e = Math.sqrt(1 + e * e)),
                    (o *= e),
                    q &&
                      ((e = Math.tan(q * N)),
                      (i *= e = Math.sqrt(1 + e * e)),
                      (s *= e))),
                  F &&
                    (($ +=
                      S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset),
                    (L +=
                      S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset),
                    Et &&
                      (S.xPercent || S.yPercent) &&
                      ((g = this.t.getBBox()),
                      ($ += 0.01 * S.xPercent * g.width),
                      (L += 0.01 * S.yPercent * g.height)),
                    $ < (g = 1e-6) && $ > -g && ($ = 0),
                    L < g && L > -g && (L = 0)),
                  (b =
                    ((i * C) | 0) / C +
                    "," +
                    ((s * C) | 0) / C +
                    "," +
                    ((n * C) | 0) / C +
                    "," +
                    ((o * C) | 0) / C +
                    "," +
                    $ +
                    "," +
                    L +
                    ")"),
                  F && Et
                    ? this.t.setAttribute("transform", "matrix(" + b)
                    : (E[Dt] =
                        (S.xPercent || S.yPercent
                          ? "translate(" +
                            S.xPercent +
                            "%," +
                            S.yPercent +
                            "%) matrix("
                          : "matrix(") + b))
                : (E[Dt] =
                    (S.xPercent || S.yPercent
                      ? "translate(" +
                        S.xPercent +
                        "%," +
                        S.yPercent +
                        "%) matrix("
                      : "matrix(") +
                    R +
                    ",0,0," +
                    O +
                    "," +
                    $ +
                    "," +
                    L +
                    ")");
            else {
              if (
                (d &&
                  (R < (g = 1e-4) && R > -g && (R = D = 2e-5),
                  O < g && O > -g && (O = D = 2e-5),
                  !I || S.z || S.rotationX || S.rotationY || (I = 0)),
                k || z)
              )
                (k *= N),
                  (y = i = Math.cos(k)),
                  (v = s = Math.sin(k)),
                  z &&
                    ((k -= z * N),
                    (y = Math.cos(k)),
                    (v = Math.sin(k)),
                    "simple" === S.skewType &&
                      ((e = Math.tan((z - q) * N)),
                      (y *= e = Math.sqrt(1 + e * e)),
                      (v *= e),
                      S.skewY &&
                        ((e = Math.tan(q * N)),
                        (i *= e = Math.sqrt(1 + e * e)),
                        (s *= e)))),
                  (n = -v),
                  (o = y);
              else {
                if (!(A || P || 1 !== D || I || F))
                  return void (E[Dt] =
                    (S.xPercent || S.yPercent
                      ? "translate(" +
                        S.xPercent +
                        "%," +
                        S.yPercent +
                        "%) translate3d("
                      : "translate3d(") +
                    $ +
                    "px," +
                    L +
                    "px," +
                    M +
                    "px)" +
                    (1 !== R || 1 !== O ? " scale(" + R + "," + O + ")" : ""));
                (i = o = 1), (n = s = 0);
              }
              (h = 1),
                (r = a = l = u = c = p = 0),
                (f = I ? -1 / I : 0),
                (m = S.zOrigin),
                (g = 1e-6),
                (w = ","),
                (x = "0"),
                (k = A * N) &&
                  ((y = Math.cos(k)),
                  (l = -(v = Math.sin(k))),
                  (c = f * -v),
                  (r = i * v),
                  (a = s * v),
                  (h = y),
                  (f *= y),
                  (i *= y),
                  (s *= y)),
                (k = P * N) &&
                  ((e = n * (y = Math.cos(k)) + r * (v = Math.sin(k))),
                  (_ = o * y + a * v),
                  (u = h * v),
                  (p = f * v),
                  (r = n * -v + r * y),
                  (a = o * -v + a * y),
                  (h *= y),
                  (f *= y),
                  (n = e),
                  (o = _)),
                1 !== D && ((r *= D), (a *= D), (h *= D), (f *= D)),
                1 !== O && ((n *= O), (o *= O), (u *= O), (p *= O)),
                1 !== R && ((i *= R), (s *= R), (l *= R), (c *= R)),
                (m || F) &&
                  (m && (($ += r * -m), (L += a * -m), (M += h * -m + m)),
                  F &&
                    (($ +=
                      S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset),
                    (L +=
                      S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset)),
                  $ < g && $ > -g && ($ = x),
                  L < g && L > -g && (L = x),
                  M < g && M > -g && (M = 0)),
                (b =
                  S.xPercent || S.yPercent
                    ? "translate(" +
                      S.xPercent +
                      "%," +
                      S.yPercent +
                      "%) matrix3d("
                    : "matrix3d("),
                (b +=
                  (i < g && i > -g ? x : i) +
                  w +
                  (s < g && s > -g ? x : s) +
                  w +
                  (l < g && l > -g ? x : l)),
                (b +=
                  w +
                  (c < g && c > -g ? x : c) +
                  w +
                  (n < g && n > -g ? x : n) +
                  w +
                  (o < g && o > -g ? x : o)),
                P || A || 1 !== D
                  ? ((b +=
                      w +
                      (u < g && u > -g ? x : u) +
                      w +
                      (p < g && p > -g ? x : p) +
                      w +
                      (r < g && r > -g ? x : r)),
                    (b +=
                      w +
                      (a < g && a > -g ? x : a) +
                      w +
                      (h < g && h > -g ? x : h) +
                      w +
                      (f < g && f > -g ? x : f) +
                      w))
                  : (b += ",0,0,0,0,1,0,"),
                (b += $ + w + L + w + M + w + (I ? 1 + -M / I : 1) + ")"),
                (E[Dt] = b);
            }
          });
        ((u =
          Nt.prototype).x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0),
          (u.scaleX = u.scaleY = u.scaleZ = 1),
          Ct(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function(t, e, i, n, s, a, l) {
                if (n._lastParsedTransform === l) return s;
                n._lastParsedTransform = l;
                var u,
                  h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                "function" == typeof l[i] && ((u = l[i]), (l[i] = e)),
                  h && (l.scale = h(y, t));
                var c,
                  p,
                  d,
                  f,
                  m,
                  v,
                  _,
                  b,
                  w,
                  x = t._gsTransform,
                  T = t.style,
                  C = 1e-6,
                  S = Ot.length,
                  E = l,
                  k = {},
                  P = "transformOrigin",
                  A = Xt(t, r, !0, E.parseTransform),
                  R =
                    E.transform &&
                    ("function" == typeof E.transform
                      ? E.transform(y, g)
                      : E.transform);
                if (
                  ((A.skewType = E.skewType || A.skewType || o.defaultSkewType),
                  (n._transform = A),
                  R && "string" == typeof R && Dt)
                )
                  ((p = H.style)[Dt] = R),
                    (p.display = "block"),
                    (p.position = "absolute"),
                    -1 !== R.indexOf("%") &&
                      ((p.width = K(t, "width")), (p.height = K(t, "height"))),
                    q.body.appendChild(H),
                    (c = Xt(H, null, !1)),
                    "simple" === A.skewType &&
                      (c.scaleY *= Math.cos(c.skewX * N)),
                    A.svg &&
                      ((v = A.xOrigin),
                      (_ = A.yOrigin),
                      (c.x -= A.xOffset),
                      (c.y -= A.yOffset),
                      (E.transformOrigin || E.svgOrigin) &&
                        ((R = {}),
                        zt(
                          t,
                          at(E.transformOrigin),
                          R,
                          E.svgOrigin,
                          E.smoothOrigin,
                          !0
                        ),
                        (v = R.xOrigin),
                        (_ = R.yOrigin),
                        (c.x -= R.xOffset - A.xOffset),
                        (c.y -= R.yOffset - A.yOffset)),
                      (v || _) &&
                        ((b = Vt(H, !0)),
                        (c.x -= v - (v * b[0] + _ * b[2])),
                        (c.y -= _ - (v * b[1] + _ * b[3])))),
                    q.body.removeChild(H),
                    c.perspective || (c.perspective = A.perspective),
                    null != E.xPercent &&
                      (c.xPercent = ut(E.xPercent, A.xPercent)),
                    null != E.yPercent &&
                      (c.yPercent = ut(E.yPercent, A.yPercent));
                else if ("object" == typeof E) {
                  if (
                    ((c = {
                      scaleX: ut(
                        null != E.scaleX ? E.scaleX : E.scale,
                        A.scaleX
                      ),
                      scaleY: ut(
                        null != E.scaleY ? E.scaleY : E.scale,
                        A.scaleY
                      ),
                      scaleZ: ut(E.scaleZ, A.scaleZ),
                      x: ut(E.x, A.x),
                      y: ut(E.y, A.y),
                      z: ut(E.z, A.z),
                      xPercent: ut(E.xPercent, A.xPercent),
                      yPercent: ut(E.yPercent, A.yPercent),
                      perspective: ut(E.transformPerspective, A.perspective)
                    }),
                    null != (m = E.directionalRotation))
                  )
                    if ("object" == typeof m) for (p in m) E[p] = m[p];
                    else E.rotation = m;
                  "string" == typeof E.x &&
                    -1 !== E.x.indexOf("%") &&
                    ((c.x = 0), (c.xPercent = ut(E.x, A.xPercent))),
                    "string" == typeof E.y &&
                      -1 !== E.y.indexOf("%") &&
                      ((c.y = 0), (c.yPercent = ut(E.y, A.yPercent))),
                    (c.rotation = ht(
                      "rotation" in E
                        ? E.rotation
                        : "shortRotation" in E
                        ? E.shortRotation + "_short"
                        : "rotationZ" in E
                        ? E.rotationZ
                        : A.rotation,
                      A.rotation,
                      "rotation",
                      k
                    )),
                    Mt &&
                      ((c.rotationX = ht(
                        "rotationX" in E
                          ? E.rotationX
                          : "shortRotationX" in E
                          ? E.shortRotationX + "_short"
                          : A.rotationX || 0,
                        A.rotationX,
                        "rotationX",
                        k
                      )),
                      (c.rotationY = ht(
                        "rotationY" in E
                          ? E.rotationY
                          : "shortRotationY" in E
                          ? E.shortRotationY + "_short"
                          : A.rotationY || 0,
                        A.rotationY,
                        "rotationY",
                        k
                      ))),
                    (c.skewX = ht(E.skewX, A.skewX)),
                    (c.skewY = ht(E.skewY, A.skewY));
                }
                for (
                  Mt &&
                    null != E.force3D &&
                    ((A.force3D = E.force3D), (f = !0)),
                    (d =
                      A.force3D ||
                      A.z ||
                      A.rotationX ||
                      A.rotationY ||
                      c.z ||
                      c.rotationX ||
                      c.rotationY ||
                      c.perspective) ||
                      null == E.scale ||
                      (c.scaleZ = 1);
                  --S > -1;

                )
                  ((R = c[(w = Ot[S])] - A[w]) > C ||
                    R < -C ||
                    null != E[w] ||
                    null != I[w]) &&
                    ((f = !0),
                    (s = new _t(A, w, A[w], R, s)),
                    w in k && (s.e = k[w]),
                    (s.xs0 = 0),
                    (s.plugin = a),
                    n._overwriteProps.push(s.n));
                return (
                  (R = E.transformOrigin),
                  A.svg &&
                    (R || E.svgOrigin) &&
                    ((v = A.xOffset),
                    (_ = A.yOffset),
                    zt(t, at(R), c, E.svgOrigin, E.smoothOrigin),
                    (s = bt(
                      A,
                      "xOrigin",
                      (x ? A : c).xOrigin,
                      c.xOrigin,
                      s,
                      P
                    )),
                    (s = bt(
                      A,
                      "yOrigin",
                      (x ? A : c).yOrigin,
                      c.yOrigin,
                      s,
                      P
                    )),
                    (v === A.xOffset && _ === A.yOffset) ||
                      ((s = bt(
                        A,
                        "xOffset",
                        x ? v : A.xOffset,
                        A.xOffset,
                        s,
                        P
                      )),
                      (s = bt(
                        A,
                        "yOffset",
                        x ? _ : A.yOffset,
                        A.yOffset,
                        s,
                        P
                      ))),
                    (R = "0px 0px")),
                  (R || (Mt && d && A.zOrigin)) &&
                    (Dt
                      ? ((f = !0),
                        (w = Lt),
                        (R = (R || K(t, w, r, !1, "50% 50%")) + ""),
                        ((s = new _t(T, w, 0, 0, s, -1, P)).b = T[w]),
                        (s.plugin = a),
                        Mt
                          ? ((p = A.zOrigin),
                            (R = R.split(" ")),
                            (A.zOrigin =
                              (R.length > 2 && (0 === p || "0px" !== R[2])
                                ? parseFloat(R[2])
                                : p) || 0),
                            (s.xs0 = s.e =
                              R[0] + " " + (R[1] || "50%") + " 0px"),
                            ((s = new _t(
                              A,
                              "zOrigin",
                              0,
                              0,
                              s,
                              -1,
                              s.n
                            )).b = p),
                            (s.xs0 = s.e = A.zOrigin))
                          : (s.xs0 = s.e = R))
                      : at(R + "", A)),
                  f &&
                    (n._transformType =
                      (A.svg && Et) || (!d && 3 !== this._transformType)
                        ? 2
                        : 3),
                  u && (l[i] = u),
                  h && (l.scale = h),
                  s
                );
              },
              prefix: !0
            }
          ),
          Ct("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
          }),
          Ct("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, s, o) {
              e = this.format(e);
              var a,
                l,
                u,
                h,
                c,
                p,
                d,
                f,
                m,
                g,
                y,
                v,
                _,
                b,
                w,
                x,
                T = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius"
                ],
                C = t.style;
              for (
                m = parseFloat(t.offsetWidth),
                  g = parseFloat(t.offsetHeight),
                  a = e.split(" "),
                  l = 0;
                l < T.length;
                l++
              )
                this.p.indexOf("border") && (T[l] = Z(T[l])),
                  -1 !== (c = h = K(t, T[l], r, !1, "0px")).indexOf(" ") &&
                    ((c = (h = c.split(" "))[0]), (h = h[1])),
                  (p = u = a[l]),
                  (d = parseFloat(c)),
                  (v = c.substr((d + "").length)),
                  (_ = "=" === p.charAt(1))
                    ? ((f = parseInt(p.charAt(0) + "1", 10)),
                      (p = p.substr(2)),
                      (f *= parseFloat(p)),
                      (y = p.substr((f + "").length - (f < 0 ? 1 : 0)) || ""))
                    : ((f = parseFloat(p)), (y = p.substr((f + "").length))),
                  "" === y && (y = n[i] || v),
                  y !== v &&
                    ((b = tt(t, "borderLeft", d, v)),
                    (w = tt(t, "borderTop", d, v)),
                    "%" === y
                      ? ((c = (b / m) * 100 + "%"), (h = (w / g) * 100 + "%"))
                      : "em" === y
                      ? ((c = b / (x = tt(t, "borderLeft", 1, "em")) + "em"),
                        (h = w / x + "em"))
                      : ((c = b + "px"), (h = w + "px")),
                    _ &&
                      ((p = parseFloat(c) + f + y),
                      (u = parseFloat(h) + f + y))),
                  (o = wt(C, T[l], c + " " + h, p + " " + u, !1, "0px", o));
              return o;
            },
            prefix: !0,
            formatter: gt("0px 0px 0px 0px", !1, !0)
          }),
          Ct(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function(t, e, i, n, s) {
                return wt(
                  t.style,
                  i,
                  this.format(K(t, i, r, !1, "0px 0px")),
                  this.format(e),
                  !1,
                  "0px",
                  s
                );
              },
              prefix: !0,
              formatter: gt("0px 0px", !1, !0)
            }
          ),
          Ct("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, s, o) {
              var a,
                l,
                u,
                h,
                c,
                p,
                d = "background-position",
                f = r || J(t, null),
                g = this.format(
                  (f
                    ? m
                      ? f.getPropertyValue(d + "-x") +
                        " " +
                        f.getPropertyValue(d + "-y")
                      : f.getPropertyValue(d)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                y = this.format(e);
              if (
                (-1 !== g.indexOf("%")) != (-1 !== y.indexOf("%")) &&
                y.split(",").length < 2 &&
                (p = K(t, "backgroundImage").replace(A, "")) &&
                "none" !== p
              ) {
                for (
                  a = g.split(" "),
                    l = y.split(" "),
                    B.setAttribute("src", p),
                    u = 2;
                  --u > -1;

                )
                  (h = -1 !== (g = a[u]).indexOf("%")) !==
                    (-1 !== l[u].indexOf("%")) &&
                    ((c =
                      0 === u
                        ? t.offsetWidth - B.width
                        : t.offsetHeight - B.height),
                    (a[u] = h
                      ? (parseFloat(g) / 100) * c + "px"
                      : (parseFloat(g) / c) * 100 + "%"));
                g = a.join(" ");
              }
              return this.parseComplex(t.style, g, y, s, o);
            },
            formatter: at
          }),
          Ct("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
              return "co" === (t += "").substr(0, 2)
                ? t
                : at(-1 === t.indexOf(" ") ? t + " " + t : t);
            }
          }),
          Ct("perspective", {defaultValue: "0px", prefix: !0}),
          Ct("perspectiveOrigin", {defaultValue: "50% 50%", prefix: !0}),
          Ct("transformStyle", {prefix: !0}),
          Ct("backfaceVisibility", {prefix: !0}),
          Ct("userSelect", {prefix: !0}),
          Ct("margin", {
            parser: yt("marginTop,marginRight,marginBottom,marginLeft")
          }),
          Ct("padding", {
            parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
          }),
          Ct("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, s, o) {
              var a, l, u;
              return (
                m < 9
                  ? ((l = t.currentStyle),
                    (u = m < 8 ? " " : ","),
                    (a =
                      "rect(" +
                      l.clipTop +
                      u +
                      l.clipRight +
                      u +
                      l.clipBottom +
                      u +
                      l.clipLeft +
                      ")"),
                    (e = this.format(e)
                      .split(",")
                      .join(u)))
                  : ((a = this.format(K(t, this.p, r, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, a, e, s, o)
              );
            }
          }),
          Ct("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
          }),
          Ct("autoRound,strictUnits", {
            parser: function(t, e, i, n, r) {
              return r;
            }
          }),
          Ct("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, s, o) {
              var a = K(t, "borderTopWidth", r, !1, "0px"),
                l = this.format(e).split(" "),
                u = l[0].replace(x, "");
              return (
                "px" !== u &&
                  (a = parseFloat(a) / tt(t, "borderTopWidth", 1, u) + u),
                this.parseComplex(
                  t.style,
                  this.format(
                    a +
                      " " +
                      K(t, "borderTopStyle", r, !1, "solid") +
                      " " +
                      K(t, "borderTopColor", r, !1, "#000")
                  ),
                  l.join(" "),
                  s,
                  o
                )
              );
            },
            color: !0,
            formatter: function(t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(mt) || ["#000"])[0]
              );
            }
          }),
          Ct("borderWidth", {
            parser: yt(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            )
          }),
          Ct("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, r) {
              var s = t.style,
                o = "cssFloat" in s ? "cssFloat" : "styleFloat";
              return new _t(s, o, 0, 0, r, -1, i, !1, 0, s[o], e);
            }
          });
        var Qt = function(t) {
          var e,
            i = this.t,
            n = i.filter || K(this.data, "filter") || "",
            r = (this.s + this.c * t) | 0;
          100 === r &&
            (-1 === n.indexOf("atrix(") &&
            -1 === n.indexOf("radient(") &&
            -1 === n.indexOf("oader(")
              ? (i.removeAttribute("filter"), (e = !K(this.data, "filter")))
              : ((i.filter = n.replace(S, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
              -1 === n.indexOf("pacity")
                ? (0 === r && this.xn1) ||
                  (i.filter = n + " alpha(opacity=" + r + ")")
                : (i.filter = n.replace(T, "opacity=" + r)));
        };
        Ct("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function(t, e, i, n, s, o) {
            var a = parseFloat(K(t, "opacity", r, !1, "1")),
              l = t.style,
              u = "autoAlpha" === i;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
              u &&
                1 === a &&
                "hidden" === K(t, "visibility", r) &&
                0 !== e &&
                (a = 0),
              V
                ? (s = new _t(l, "opacity", a, e - a, s))
                : (((s = new _t(
                    l,
                    "opacity",
                    100 * a,
                    100 * (e - a),
                    s
                  )).xn1 = u ? 1 : 0),
                  (l.zoom = 1),
                  (s.type = 2),
                  (s.b = "alpha(opacity=" + s.s + ")"),
                  (s.e = "alpha(opacity=" + (s.s + s.c) + ")"),
                  (s.data = t),
                  (s.plugin = o),
                  (s.setRatio = Qt)),
              u &&
                (((s = new _t(
                  l,
                  "visibility",
                  0,
                  0,
                  s,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== a ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )).xs0 = "inherit"),
                n._overwriteProps.push(s.n),
                n._overwriteProps.push(i)),
              s
            );
          }
        });
        var Zt = function(t, e) {
            e &&
              (t.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  t.removeProperty(e.replace(k, "-$1").toLowerCase()))
                : t.removeAttribute(e));
          },
          Jt = function(t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : Zt(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        Ct("className", {
          parser: function(t, e, n, s, o, a, l) {
            var u,
              h,
              c,
              p,
              d,
              f = t.getAttribute("class") || "",
              m = t.style.cssText;
            if (
              (((o = s._classNamePT = new _t(t, n, 0, 0, o, 2)).setRatio = Jt),
              (o.pr = -11),
              (i = !0),
              (o.b = f),
              (h = it(t, r)),
              (c = t._gsClassPT))
            ) {
              for (p = {}, d = c.data; d; ) (p[d.p] = 1), (d = d._next);
              c.setRatio(1);
            }
            return (
              (t._gsClassPT = o),
              (o.e =
                "=" !== e.charAt(1)
                  ? e
                  : f.replace(
                      new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
              t.setAttribute("class", o.e),
              (u = nt(t, h, it(t), l, p)),
              t.setAttribute("class", f),
              (o.data = u.firstMPT),
              (t.style.cssText = m),
              (o = o.xfirst = s.parse(t, u.difs, o, a))
            );
          }
        });
        var Kt = function(t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              n,
              r,
              s,
              o = this.t.style,
              a = l.transform.parse;
            if ("all" === this.e) (o.cssText = ""), (r = !0);
            else
              for (
                n = (e = this.e
                  .split(" ")
                  .join("")
                  .split(",")).length;
                --n > -1;

              )
                (i = e[n]),
                  l[i] &&
                    (l[i].parse === a
                      ? (r = !0)
                      : (i = "transformOrigin" === i ? Lt : l[i].p)),
                  Zt(o, i);
            r &&
              (Zt(o, Dt),
              (s = this.t._gsTransform) &&
                (s.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          Ct("clearProps", {
            parser: function(t, e, n, r, s) {
              return (
                ((s = new _t(t, n, 0, 0, s, 2)).setRatio = Kt),
                (s.e = e),
                (s.pr = -10),
                (s.data = r._tween),
                (i = !0),
                s
              );
            }
          }),
            u = "bezier,throwProps,physicsProps,physics2D".split(","),
            xt = u.length;
          xt--;

        )
          St(u[xt]);
        ((u =
          o.prototype)._firstPT = u._lastParsedTransform = u._transform = null),
          (u._onInitTween = function(t, e, a, u) {
            if (!t.nodeType) return !1;
            (this._target = g = t),
              (this._tween = a),
              (this._vars = e),
              (y = u),
              (h = e.autoRound),
              (i = !1),
              (n = e.suffixMap || o.suffixMap),
              (r = J(t, "")),
              (s = this._overwriteProps);
            var d,
              m,
              v,
              _,
              b,
              w,
              x,
              T,
              S,
              E = t.style;
            if (
              (c &&
                "" === E.zIndex &&
                (("auto" !== (d = K(t, "zIndex", r)) && "" !== d) ||
                  this._addLazySet(E, "zIndex", 0)),
              "string" == typeof e &&
                ((_ = E.cssText),
                (d = it(t, r)),
                (E.cssText = _ + ";" + e),
                (d = nt(t, d, it(t)).difs),
                !V && C.test(e) && (d.opacity = parseFloat(RegExp.$1)),
                (e = d),
                (E.cssText = _)),
              e.className
                ? (this._firstPT = m = l.className.parse(
                    t,
                    e.className,
                    "className",
                    this,
                    null,
                    null,
                    e
                  ))
                : (this._firstPT = m = this.parse(t, e, null)),
              this._transformType)
            ) {
              for (
                S = 3 === this._transformType,
                  Dt
                    ? p &&
                      ((c = !0),
                      "" === E.zIndex &&
                        (("auto" !== (x = K(t, "zIndex", r)) && "" !== x) ||
                          this._addLazySet(E, "zIndex", 0)),
                      f &&
                        this._addLazySet(
                          E,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (S ? "visible" : "hidden")
                        ))
                    : (E.zoom = 1),
                  v = m;
                v && v._next;

              )
                v = v._next;
              (T = new _t(t, "transform", 0, 0, null, 2)),
                this._linkCSSP(T, null, v),
                (T.setRatio = Dt ? Gt : Yt),
                (T.data = this._transform || Xt(t, r, !0)),
                (T.tween = a),
                (T.pr = -1),
                s.pop();
            }
            if (i) {
              for (; m; ) {
                for (w = m._next, v = _; v && v.pr > m.pr; ) v = v._next;
                (m._prev = v ? v._prev : b) ? (m._prev._next = m) : (_ = m),
                  (m._next = v) ? (v._prev = m) : (b = m),
                  (m = w);
              }
              this._firstPT = _;
            }
            return !0;
          }),
          (u.parse = function(t, e, i, s) {
            var o,
              a,
              u,
              c,
              p,
              d,
              f,
              m,
              v,
              _,
              b = t.style;
            for (o in e) {
              if (
                ("function" == typeof (d = e[o]) && (d = d(y, g)), (a = l[o]))
              )
                i = a.parse(t, d, o, this, i, s, e);
              else {
                if ("--" === o.substr(0, 2)) {
                  this._tween._propLookup[o] = this._addTween.call(
                    this._tween,
                    t.style,
                    "setProperty",
                    J(t).getPropertyValue(o) + "",
                    d + "",
                    o,
                    !1,
                    o
                  );
                  continue;
                }
                (p = K(t, o, r) + ""),
                  (v = "string" == typeof d),
                  "color" === o ||
                  "fill" === o ||
                  "stroke" === o ||
                  -1 !== o.indexOf("Color") ||
                  (v && E.test(d))
                    ? (v ||
                        (d =
                          ((d = dt(d)).length > 3 ? "rgba(" : "rgb(") +
                          d.join(",") +
                          ")"),
                      (i = wt(b, o, p, d, !0, "transparent", i, 0, s)))
                    : v && M.test(d)
                    ? (i = wt(b, o, p, d, !0, null, i, 0, s))
                    : ((f =
                        (u = parseFloat(p)) || 0 === u
                          ? p.substr((u + "").length)
                          : ""),
                      ("" !== p && "auto" !== p) ||
                        ("width" === o || "height" === o
                          ? ((u = ot(t, o, r)), (f = "px"))
                          : "left" === o || "top" === o
                          ? ((u = et(t, o, r)), (f = "px"))
                          : ((u = "opacity" !== o ? 0 : 1), (f = ""))),
                      (_ = v && "=" === d.charAt(1))
                        ? ((c = parseInt(d.charAt(0) + "1", 10)),
                          (d = d.substr(2)),
                          (c *= parseFloat(d)),
                          (m = d.replace(x, "")))
                        : ((c = parseFloat(d)),
                          (m = v ? d.replace(x, "") : "")),
                      "" === m && (m = o in n ? n[o] : f),
                      (d = c || 0 === c ? (_ ? c + u : c) + m : e[o]),
                      f !== m &&
                        (("" === m && "lineHeight" !== o) ||
                          ((c || 0 === c) &&
                            u &&
                            ((u = tt(t, o, u, f)),
                            "%" === m
                              ? ((u /= tt(t, o, 100, "%") / 100),
                                !0 !== e.strictUnits && (p = u + "%"))
                              : "em" === m ||
                                "rem" === m ||
                                "vw" === m ||
                                "vh" === m
                              ? (u /= tt(t, o, 1, m))
                              : "px" !== m &&
                                ((c = tt(t, o, c, m)), (m = "px")),
                            _ && (c || 0 === c) && (d = c + u + m)))),
                      _ && (c += u),
                      (!u && 0 !== u) || (!c && 0 !== c)
                        ? b[o] !== undefined &&
                          (d || (d + "" != "NaN" && null != d))
                          ? ((i = new _t(
                              b,
                              o,
                              c || u || 0,
                              0,
                              i,
                              -1,
                              o,
                              !1,
                              0,
                              p,
                              d
                            )).xs0 =
                              "none" !== d ||
                              ("display" !== o && -1 === o.indexOf("Style"))
                                ? d
                                : p)
                          : Y("invalid " + o + " tween value: " + e[o])
                        : ((i = new _t(
                            b,
                            o,
                            u,
                            c - u,
                            i,
                            0,
                            o,
                            !1 !== h && ("px" === m || "zIndex" === o),
                            0,
                            p,
                            d
                          )).xs0 = m));
              }
              s && i && !i.plugin && (i.plugin = s);
            }
            return i;
          }),
          (u.setRatio = function(t) {
            var e,
              i,
              n,
              r = this._firstPT,
              s = 1e-6;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; r; ) {
                  if (
                    ((e = r.c * t + r.s),
                    r.r ? (e = r.r(e)) : e < s && e > -s && (e = 0),
                    r.type)
                  )
                    if (1 === r.type)
                      if (2 === (n = r.l))
                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === n)
                        r.t[r.p] =
                          r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === n)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4;
                      else if (5 === n)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4 +
                          r.xn4 +
                          r.xs5;
                      else {
                        for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)
                          i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i;
                      }
                    else
                      -1 === r.type
                        ? (r.t[r.p] = r.xs0)
                        : r.setRatio && r.setRatio(t);
                  else r.t[r.p] = e + r.xs0;
                  r = r._next;
                }
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                    (r = r._next);
            else
              for (; r; ) {
                if (2 !== r.type)
                  if (r.r && -1 !== r.type)
                    if (((e = r.r(r.s + r.c)), r.type)) {
                      if (1 === r.type) {
                        for (
                          n = r.l, i = r.xs0 + e + r.xs1, n = 1;
                          n < r.l;
                          n++
                        )
                          i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i;
                      }
                    } else r.t[r.p] = e + r.xs0;
                  else r.t[r.p] = r.e;
                else r.setRatio(t);
                r = r._next;
              }
          }),
          (u._enableTransforms = function(t) {
            (this._transform = this._transform || Xt(this._target, r, !0)),
              (this._transformType =
                (this._transform.svg && Et) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var te = function() {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (u._addLazySet = function(t, e, i) {
          var n = (this._firstPT = new _t(t, e, 0, 0, this._firstPT, 2));
          (n.e = i), (n.setRatio = te), (n.data = this);
        }),
          (u._linkCSSP = function(t, e, i, n) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (n = !0)),
                i
                  ? (i._next = t)
                  : n || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (u._mod = function(t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
          }),
          (u._kill = function(e) {
            var i,
              n,
              r,
              s = e;
            if (e.autoAlpha || e.alpha) {
              for (n in ((s = {}), e)) s[n] = e[n];
              (s.opacity = 1), s.autoAlpha && (s.visibility = 1);
            }
            for (
              e.className &&
                (i = this._classNamePT) &&
                ((r = i.xfirst) && r._prev
                  ? this._linkCSSP(r._prev, i._next, r._prev._prev)
                  : r === this._firstPT && (this._firstPT = i._next),
                i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                (this._classNamePT = null)),
                i = this._firstPT;
              i;

            )
              i.plugin &&
                i.plugin !== n &&
                i.plugin._kill &&
                (i.plugin._kill(e), (n = i.plugin)),
                (i = i._next);
            return t.prototype._kill.call(this, s);
          });
        var ee = function(t, e, i) {
          var n, r, s, o;
          if (t.slice) for (r = t.length; --r > -1; ) ee(t[r], e, i);
          else
            for (r = (n = t.childNodes).length; --r > -1; )
              (o = (s = n[r]).type),
                s.style && (e.push(it(s)), i && i.push(s)),
                (1 !== o && 9 !== o && 11 !== o) ||
                  !s.childNodes.length ||
                  ee(s, e, i);
        };
        return (
          (o.cascadeTo = function(t, i, n) {
            var r,
              s,
              o,
              a,
              l = e.to(t, i, n),
              u = [l],
              h = [],
              c = [],
              p = [],
              d = e._internals.reservedProps;
            for (
              t = l._targets || l.target,
                ee(t, h, p),
                l.render(i, !0, !0),
                ee(t, c),
                l.render(0, !0, !0),
                l._enabled(!0),
                r = p.length;
              --r > -1;

            )
              if ((s = nt(p[r], h[r], c[r])).firstMPT) {
                for (o in ((s = s.difs), n)) d[o] && (s[o] = n[o]);
                for (o in ((a = {}), s)) a[o] = h[r][o];
                u.push(e.fromTo(p[r], i, a, s));
              }
            return u;
          }),
          t.activate([o]),
          o
        );
      },
      !0
    ),
    (function() {
      var t = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.7.0",
          priority: -1,
          API: 2,
          init: function(t, e, i) {
            return (this._tween = i), !0;
          }
        }),
        e = function(t) {
          var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
          return function(i) {
            return ((Math.round(i / t) * t * e) | 0) / e;
          };
        },
        i = function(t, e) {
          for (; t; ) t.f || t.blob || (t.m = e || Math.round), (t = t._next);
        },
        n = t.prototype;
      (n._onInitAllProps = function() {
        var t,
          n,
          r,
          s,
          o = this._tween,
          a = o.vars.roundProps,
          l = {},
          u = o._propLookup.roundProps;
        if ("object" != typeof a || a.push)
          for (
            "string" == typeof a && (a = a.split(",")), r = a.length;
            --r > -1;

          )
            l[a[r]] = Math.round;
        else for (s in a) l[s] = e(a[s]);
        for (s in l)
          for (t = o._firstPT; t; )
            (n = t._next),
              t.pg
                ? t.t._mod(l)
                : t.n === s &&
                  (2 === t.f && t.t
                    ? i(t.t._firstPT, l[s])
                    : (this._add(t.t, s, t.s, t.c, l[s]),
                      n && (n._prev = t._prev),
                      t._prev
                        ? (t._prev._next = n)
                        : o._firstPT === t && (o._firstPT = n),
                      (t._next = t._prev = null),
                      (o._propLookup[s] = u))),
              (t = n);
        return !1;
      }),
        (n._add = function(t, e, i, n, r) {
          this._addTween(t, e, i, i + n, e, r || Math.round),
            this._overwriteProps.push(e);
        });
    })(),
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      init: function(t, e, i, n) {
        var r, s;
        if ("function" != typeof t.setAttribute) return !1;
        for (r in e)
          "function" == typeof (s = e[r]) && (s = s(n, t)),
            this._addTween(
              t,
              "setAttribute",
              t.getAttribute(r) + "",
              s + "",
              r,
              !1,
              r
            ),
            this._overwriteProps.push(r);
        return !0;
      }
    }),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function(t, e, i, n) {
        "object" != typeof e && (e = {rotation: e}), (this.finals = {});
        var r,
          s,
          o,
          a,
          l,
          u,
          h = !0 === e.useRadians ? 2 * Math.PI : 360,
          c = 1e-6;
        for (r in e)
          "useRadians" !== r &&
            ("function" == typeof (a = e[r]) && (a = a(n, t)),
            (s = (u = (a + "").split("_"))[0]),
            (o = parseFloat(
              "function" != typeof t[r]
                ? t[r]
                : t[
                    r.indexOf("set") ||
                    "function" != typeof t["get" + r.substr(3)]
                      ? r
                      : "get" + r.substr(3)
                  ]()
            )),
            (l =
              (a = this.finals[r] =
                "string" == typeof s && "=" === s.charAt(1)
                  ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))
                  : Number(s) || 0) - o),
            u.length &&
              (-1 !== (s = u.join("_")).indexOf("short") &&
                (l %= h) !== l % (h / 2) &&
                (l = l < 0 ? l + h : l - h),
              -1 !== s.indexOf("_cw") && l < 0
                ? (l = ((l + 9999999999 * h) % h) - ((l / h) | 0) * h)
                : -1 !== s.indexOf("ccw") &&
                  l > 0 &&
                  (l = ((l - 9999999999 * h) % h) - ((l / h) | 0) * h)),
            (l > c || l < -c) &&
              (this._addTween(t, r, o, o + l, r),
              this._overwriteProps.push(r)));
        return !0;
      },
      set: function(t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      }
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function(t) {
        var e,
          i,
          n,
          r,
          s = _gsScope.GreenSockGlobals || _gsScope,
          o = s.com.greensock,
          a = 2 * Math.PI,
          l = Math.PI / 2,
          u = o._class,
          h = function(e, i) {
            var n = u("easing." + e, function() {}, !0),
              r = (n.prototype = new t());
            return (r.constructor = n), (r.getRatio = i), n;
          },
          c = t.register || function() {},
          p = function(t, e, i, n) {
            var r = u(
              "easing." + t,
              {easeOut: new e(), easeIn: new i(), easeInOut: new n()},
              !0
            );
            return c(r, t), r;
          },
          d = function(t, e, i) {
            (this.t = t),
              (this.v = e),
              i &&
                ((this.next = i),
                (i.prev = this),
                (this.c = i.v - e),
                (this.gap = i.t - t));
          },
          f = function(e, i) {
            var n = u(
                "easing." + e,
                function(t) {
                  (this._p1 = t || 0 === t ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              r = (n.prototype = new t());
            return (
              (r.constructor = n),
              (r.getRatio = i),
              (r.config = function(t) {
                return new n(t);
              }),
              n
            );
          },
          m = p(
            "Back",
            f("BackOut", function(t) {
              return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
            }),
            f("BackIn", function(t) {
              return t * t * ((this._p1 + 1) * t - this._p1);
            }),
            f("BackInOut", function(t) {
              return (t *= 2) < 1
                ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
            })
          ),
          g = u(
            "easing.SlowMo",
            function(t, e, i) {
              (e = e || 0 === e ? e : 0.7),
                null == t ? (t = 0.7) : t > 1 && (t = 1),
                (this._p = 1 !== t ? e : 0),
                (this._p1 = (1 - t) / 2),
                (this._p2 = t),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = !0 === i);
            },
            !0
          ),
          y = (g.prototype = new t());
        return (
          (y.constructor = g),
          (y.getRatio = function(t) {
            var e = t + (0.5 - t) * this._p;
            return t < this._p1
              ? this._calcEnd
                ? 1 - (t = 1 - t / this._p1) * t
                : e - (t = 1 - t / this._p1) * t * t * t * e
              : t > this._p3
              ? this._calcEnd
                ? 1 === t
                  ? 0
                  : 1 - (t = (t - this._p3) / this._p1) * t
                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
              : this._calcEnd
              ? 1
              : e;
          }),
          (g.ease = new g(0.7, 0.7)),
          (y.config = g.config = function(t, e, i) {
            return new g(t, e, i);
          }),
          ((y = (e = u(
            "easing.SteppedEase",
            function(t, e) {
              (t = t || 1),
                (this._p1 = 1 / t),
                (this._p2 = t + (e ? 0 : 1)),
                (this._p3 = e ? 1 : 0);
            },
            !0
          )).prototype = new t()).constructor = e),
          (y.getRatio = function(t) {
            return (
              t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999),
              (((this._p2 * t) | 0) + this._p3) * this._p1
            );
          }),
          (y.config = e.config = function(t, i) {
            return new e(t, i);
          }),
          ((y = (i = u(
            "easing.ExpoScaleEase",
            function(t, e, i) {
              (this._p1 = Math.log(e / t)),
                (this._p2 = e - t),
                (this._p3 = t),
                (this._ease = i);
            },
            !0
          )).prototype = new t()).constructor = i),
          (y.getRatio = function(t) {
            return (
              this._ease && (t = this._ease.getRatio(t)),
              (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            );
          }),
          (y.config = i.config = function(t, e, n) {
            return new i(t, e, n);
          }),
          ((y = (n = u(
            "easing.RoughEase",
            function(e) {
              for (
                var i,
                  n,
                  r,
                  s,
                  o,
                  a,
                  l = (e = e || {}).taper || "none",
                  u = [],
                  h = 0,
                  c = 0 | (e.points || 20),
                  p = c,
                  f = !1 !== e.randomize,
                  m = !0 === e.clamp,
                  g = e.template instanceof t ? e.template : null,
                  y = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                --p > -1;

              )
                (i = f ? Math.random() : (1 / c) * p),
                  (n = g ? g.getRatio(i) : i),
                  (r =
                    "none" === l
                      ? y
                      : "out" === l
                      ? (s = 1 - i) * s * y
                      : "in" === l
                      ? i * i * y
                      : i < 0.5
                      ? (s = 2 * i) * s * 0.5 * y
                      : (s = 2 * (1 - i)) * s * 0.5 * y),
                  f
                    ? (n += Math.random() * r - 0.5 * r)
                    : p % 2
                    ? (n += 0.5 * r)
                    : (n -= 0.5 * r),
                  m && (n > 1 ? (n = 1) : n < 0 && (n = 0)),
                  (u[h++] = {x: i, y: n});
              for (
                u.sort(function(t, e) {
                  return t.x - e.x;
                }),
                  a = new d(1, 1, null),
                  p = c;
                --p > -1;

              )
                (o = u[p]), (a = new d(o.x, o.y, a));
              this._prev = new d(0, 0, 0 !== a.t ? a : a.next);
            },
            !0
          )).prototype = new t()).constructor = n),
          (y.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t; ) e = e.next;
              e = e.prev;
            } else for (; e.prev && t <= e.t; ) e = e.prev;
            return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
          }),
          (y.config = function(t) {
            return new n(t);
          }),
          (n.ease = new n()),
          p(
            "Bounce",
            h("BounceOut", function(t) {
              return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            h("BounceIn", function(t) {
              return (t = 1 - t) < 1 / 2.75
                ? 1 - 7.5625 * t * t
                : t < 2 / 2.75
                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : t < 2.5 / 2.75
                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            h("BounceInOut", function(t) {
              var e = t < 0.5;
              return (
                (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                  ? (t *= 7.5625 * t)
                  : (t =
                      t < 2 / 2.75
                        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                        : t < 2.5 / 2.75
                        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
              );
            })
          ),
          p(
            "Circ",
            h("CircOut", function(t) {
              return Math.sqrt(1 - (t -= 1) * t);
            }),
            h("CircIn", function(t) {
              return -(Math.sqrt(1 - t * t) - 1);
            }),
            h("CircInOut", function(t) {
              return (t *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            })
          ),
          p(
            "Elastic",
            (r = function(e, i, n) {
              var r = u(
                  "easing." + e,
                  function(t, e) {
                    (this._p1 = t >= 1 ? t : 1),
                      (this._p2 = (e || n) / (t < 1 ? t : 1)),
                      (this._p3 =
                        (this._p2 / a) * (Math.asin(1 / this._p1) || 0)),
                      (this._p2 = a / this._p2);
                  },
                  !0
                ),
                s = (r.prototype = new t());
              return (
                (s.constructor = r),
                (s.getRatio = i),
                (s.config = function(t, e) {
                  return new r(t, e);
                }),
                r
              );
            })(
              "ElasticOut",
              function(t) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * t) *
                    Math.sin((t - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            r(
              "ElasticIn",
              function(t) {
                return (
                  -this._p1 *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin((t - this._p3) * this._p2)
                );
              },
              0.3
            ),
            r(
              "ElasticInOut",
              function(t) {
                return (t *= 2) < 1
                  ? this._p1 *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin((t - this._p3) * this._p2) *
                      -0.5
                  : this._p1 *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin((t - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          p(
            "Expo",
            h("ExpoOut", function(t) {
              return 1 - Math.pow(2, -10 * t);
            }),
            h("ExpoIn", function(t) {
              return Math.pow(2, 10 * (t - 1)) - 0.001;
            }),
            h("ExpoInOut", function(t) {
              return (t *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
            })
          ),
          p(
            "Sine",
            h("SineOut", function(t) {
              return Math.sin(t * l);
            }),
            h("SineIn", function(t) {
              return 1 - Math.cos(t * l);
            }),
            h("SineInOut", function(t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            })
          ),
          u(
            "easing.EaseLookup",
            {
              find: function(e) {
                return t.map[e];
              }
            },
            !0
          ),
          c(s.SlowMo, "SlowMo", "ease,"),
          c(n, "RoughEase", "ease,"),
          c(e, "SteppedEase", "ease,"),
          m
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function(t, e) {
    "use strict";
    var i = {},
      n = t.document,
      r = (t.GreenSockGlobals = t.GreenSockGlobals || t);
    if (r.TweenLite) return r.TweenLite;
    var s,
      o,
      a,
      l,
      u,
      h,
      c,
      p = function(t) {
        var e,
          i = t.split("."),
          n = r;
        for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
        return n;
      },
      d = p("com.greensock"),
      f = 1e-10,
      m = function(t) {
        var e,
          i = [],
          n = t.length;
        for (e = 0; e !== n; i.push(t[e++]));
        return i;
      },
      g = function() {},
      y = ((h = Object.prototype.toString),
      (c = h.call([])),
      function(t) {
        return (
          null != t &&
          (t instanceof Array ||
            ("object" == typeof t && !!t.push && h.call(t) === c))
        );
      }),
      v = {},
      _ = function(n, s, o, a) {
        (this.sc = v[n] ? v[n].sc : []),
          (v[n] = this),
          (this.gsClass = null),
          (this.func = o);
        var l = [];
        (this.check = function(u) {
          for (var h, c, d, f, m = s.length, g = m; --m > -1; )
            (h = v[s[m]] || new _(s[m], [])).gsClass
              ? ((l[m] = h.gsClass), g--)
              : u && h.sc.push(this);
          if (0 === g && o) {
            if (
              ((d = (c = ("com.greensock." + n).split(".")).pop()),
              (f = p(c.join("."))[d] = this.gsClass = o.apply(o, l)),
              a)
            )
              if (
                ((r[d] = i[d] = f),
                "undefined" != typeof module && module.exports)
              )
                if (n === e)
                  for (m in ((module.exports = i[e] = f), i)) f[m] = i[m];
                else i[e] && (i[e][d] = f);
              else
                "function" == typeof define &&
                  define.amd &&
                  define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") +
                    n.split(".").pop(), [], function() {
                    return f;
                  });
            for (m = 0; m < this.sc.length; m++) this.sc[m].check();
          }
        }),
          this.check(!0);
      },
      b = (t._gsDefine = function(t, e, i, n) {
        return new _(t, e, i, n);
      }),
      w = (d._class = function(t, e, i) {
        return (
          (e = e || function() {}),
          b(
            t,
            [],
            function() {
              return e;
            },
            i
          ),
          e
        );
      });
    b.globals = r;
    var x = [0, 0, 1, 1],
      T = w(
        "easing.Ease",
        function(t, e, i, n) {
          (this._func = t),
            (this._type = i || 0),
            (this._power = n || 0),
            (this._params = e ? x.concat(e) : x);
        },
        !0
      ),
      C = (T.map = {}),
      S = (T.register = function(t, e, i, n) {
        for (
          var r,
            s,
            o,
            a,
            l = e.split(","),
            u = l.length,
            h = (i || "easeIn,easeOut,easeInOut").split(",");
          --u > -1;

        )
          for (
            s = l[u],
              r = n ? w("easing." + s, null, !0) : d.easing[s] || {},
              o = h.length;
            --o > -1;

          )
            (a = h[o]),
              (C[s + "." + a] = C[a + s] = r[a] = t.getRatio
                ? t
                : t[a] || new t());
      });
    for (
      (a = T.prototype)._calcEnd = !1,
        a.getRatio = function(t) {
          if (this._func)
            return (this._params[0] = t), this._func.apply(null, this._params);
          var e = this._type,
            i = this._power,
            n = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
          return (
            1 === i
              ? (n *= n)
              : 2 === i
              ? (n *= n * n)
              : 3 === i
              ? (n *= n * n * n)
              : 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2
          );
        },
        o = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
      --o > -1;

    )
      (a = s[o] + ",Power" + o),
        S(new T(null, null, 1, o), a, "easeOut", !0),
        S(new T(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")),
        S(new T(null, null, 3, o), a, "easeInOut");
    (C.linear = d.easing.Linear.easeIn), (C.swing = d.easing.Quad.easeInOut);
    var E = w("events.EventDispatcher", function(t) {
      (this._listeners = {}), (this._eventTarget = t || this);
    });
    ((a = E.prototype).addEventListener = function(t, e, i, n, r) {
      r = r || 0;
      var s,
        o,
        a = this._listeners[t],
        h = 0;
      for (
        this !== l || u || l.wake(),
          null == a && (this._listeners[t] = a = []),
          o = a.length;
        --o > -1;

      )
        (s = a[o]).c === e && s.s === i
          ? a.splice(o, 1)
          : 0 === h && s.pr < r && (h = o + 1);
      a.splice(h, 0, {c: e, s: i, up: n, pr: r});
    }),
      (a.removeEventListener = function(t, e) {
        var i,
          n = this._listeners[t];
        if (n)
          for (i = n.length; --i > -1; )
            if (n[i].c === e) return void n.splice(i, 1);
      }),
      (a.dispatchEvent = function(t) {
        var e,
          i,
          n,
          r = this._listeners[t];
        if (r)
          for (
            (e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget;
            --e > -1;

          )
            (n = r[e]) &&
              (n.up
                ? n.c.call(n.s || i, {type: t, target: i})
                : n.c.call(n.s || i));
      });
    var k = t.requestAnimationFrame,
      P = t.cancelAnimationFrame,
      A =
        Date.now ||
        function() {
          return new Date().getTime();
        },
      R = A();
    for (o = (s = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !k; )
      (k = t[s[o] + "RequestAnimationFrame"]),
        (P =
          t[s[o] + "CancelAnimationFrame"] ||
          t[s[o] + "CancelRequestAnimationFrame"]);
    w("Ticker", function(t, e) {
      var i,
        r,
        s,
        o,
        a,
        h = this,
        c = A(),
        p = !(!1 === e || !k) && "auto",
        d = 500,
        m = 33,
        y = "tick",
        v = function(t) {
          var e,
            n,
            l = A() - R;
          l > d && (c += l - m),
            (R += l),
            (h.time = (R - c) / 1e3),
            (e = h.time - a),
            (!i || e > 0 || !0 === t) &&
              (h.frame++, (a += e + (e >= o ? 0.004 : o - e)), (n = !0)),
            !0 !== t && (s = r(v)),
            n && h.dispatchEvent(y);
        };
      E.call(h),
        (h.time = h.frame = 0),
        (h.tick = function() {
          v(!0);
        }),
        (h.lagSmoothing = function(t, e) {
          if (!arguments.length) return d < 1 / f;
          (d = t || 1 / f), (m = Math.min(e, d, 0));
        }),
        (h.sleep = function() {
          null != s &&
            (p && P ? P(s) : clearTimeout(s),
            (r = g),
            (s = null),
            h === l && (u = !1));
        }),
        (h.wake = function(t) {
          null !== s
            ? h.sleep()
            : t
            ? (c += -R + (R = A()))
            : h.frame > 10 && (R = A() - d + 5),
            (r =
              0 === i
                ? g
                : p && k
                ? k
                : function(t) {
                    return setTimeout(t, (1e3 * (a - h.time) + 1) | 0);
                  }),
            h === l && (u = !0),
            v(2);
        }),
        (h.fps = function(t) {
          if (!arguments.length) return i;
          (o = 1 / ((i = t) || 60)), (a = this.time + o), h.wake();
        }),
        (h.useRAF = function(t) {
          if (!arguments.length) return p;
          h.sleep(), (p = t), h.fps(i);
        }),
        h.fps(t),
        setTimeout(function() {
          "auto" === p &&
            h.frame < 5 &&
            "hidden" !== (n || {}).visibilityState &&
            h.useRAF(!1);
        }, 1500);
    }),
      ((a = d.Ticker.prototype = new d.events.EventDispatcher()).constructor =
        d.Ticker);
    var O = w("core.Animation", function(t, e) {
      if (
        ((this.vars = e = e || {}),
        (this._duration = this._totalDuration = t || 0),
        (this._delay = Number(e.delay) || 0),
        (this._timeScale = 1),
        (this._active = !0 === e.immediateRender),
        (this.data = e.data),
        (this._reversed = !0 === e.reversed),
        Z)
      ) {
        u || l.wake();
        var i = this.vars.useFrames ? Q : Z;
        i.add(this, i._time), this.vars.paused && this.paused(!0);
      }
    });
    (l = O.ticker = new d.Ticker()),
      ((a = O.prototype)._dirty = a._gc = a._initted = a._paused = !1),
      (a._totalTime = a._time = 0),
      (a._rawPrevTime = -1),
      (a._next = a._last = a._onUpdate = a._timeline = a.timeline = null),
      (a._paused = !1);
    var D = function() {
      u &&
        A() - R > 2e3 &&
        ("hidden" !== (n || {}).visibilityState || !l.lagSmoothing()) &&
        l.wake();
      var t = setTimeout(D, 2e3);
      t.unref && t.unref();
    };
    D(),
      (a.play = function(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (a.pause = function(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (a.resume = function(t, e) {
        return null != t && this.seek(t, e), this.paused(!1);
      }),
      (a.seek = function(t, e) {
        return this.totalTime(Number(t), !1 !== e);
      }),
      (a.restart = function(t, e) {
        return this.reversed(!1)
          .paused(!1)
          .totalTime(t ? -this._delay : 0, !1 !== e, !0);
      }),
      (a.reverse = function(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (a.render = function() {}),
      (a.invalidate = function() {
        return (
          (this._time = this._totalTime = 0),
          (this._initted = this._gc = !1),
          (this._rawPrevTime = -1),
          (!this._gc && this.timeline) || this._enabled(!0),
          this
        );
      }),
      (a.isActive = function() {
        var t,
          e = this._timeline,
          i = this._startTime;
        return (
          !e ||
          (!this._gc &&
            !this._paused &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= i &&
            t < i + this.totalDuration() / this._timeScale - 1e-7)
        );
      }),
      (a._enabled = function(t, e) {
        return (
          u || l.wake(),
          (this._gc = !t),
          (this._active = this.isActive()),
          !0 !== e &&
            (t && !this.timeline
              ? this._timeline.add(this, this._startTime - this._delay)
              : !t && this.timeline && this._timeline._remove(this, !0)),
          !1
        );
      }),
      (a._kill = function() {
        return this._enabled(!1, !1);
      }),
      (a.kill = function(t, e) {
        return this._kill(t, e), this;
      }),
      (a._uncache = function(t) {
        for (var e = t ? this : this.timeline; e; )
          (e._dirty = !0), (e = e.timeline);
        return this;
      }),
      (a._swapSelfInParams = function(t) {
        for (var e = t.length, i = t.concat(); --e > -1; )
          "{self}" === t[e] && (i[e] = this);
        return i;
      }),
      (a._callback = function(t) {
        var e = this.vars,
          i = e[t],
          n = e[t + "Params"],
          r = e[t + "Scope"] || e.callbackScope || this;
        switch (n ? n.length : 0) {
          case 0:
            i.call(r);
            break;
          case 1:
            i.call(r, n[0]);
            break;
          case 2:
            i.call(r, n[0], n[1]);
            break;
          default:
            i.apply(r, n);
        }
      }),
      (a.eventCallback = function(t, e, i, n) {
        if ("on" === (t || "").substr(0, 2)) {
          var r = this.vars;
          if (1 === arguments.length) return r[t];
          null == e
            ? delete r[t]
            : ((r[t] = e),
              (r[t + "Params"] =
                y(i) && -1 !== i.join("").indexOf("{self}")
                  ? this._swapSelfInParams(i)
                  : i),
              (r[t + "Scope"] = n)),
            "onUpdate" === t && (this._onUpdate = e);
        }
        return this;
      }),
      (a.delay = function(t) {
        return arguments.length
          ? (this._timeline.smoothChildTiming &&
              this.startTime(this._startTime + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (a.duration = function(t) {
        return arguments.length
          ? ((this._duration = this._totalDuration = t),
            this._uncache(!0),
            this._timeline.smoothChildTiming &&
              this._time > 0 &&
              this._time < this._duration &&
              0 !== t &&
              this.totalTime(this._totalTime * (t / this._duration), !0),
            this)
          : ((this._dirty = !1), this._duration);
      }),
      (a.totalDuration = function(t) {
        return (
          (this._dirty = !1),
          arguments.length ? this.duration(t) : this._totalDuration
        );
      }),
      (a.time = function(t, e) {
        return arguments.length
          ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e))
          : this._time;
      }),
      (a.totalTime = function(t, e, i) {
        if ((u || l.wake(), !arguments.length)) return this._totalTime;
        if (this._timeline) {
          if (
            (t < 0 && !i && (t += this.totalDuration()),
            this._timeline.smoothChildTiming)
          ) {
            this._dirty && this.totalDuration();
            var n = this._totalDuration,
              r = this._timeline;
            if (
              (t > n && !i && (t = n),
              (this._startTime =
                (this._paused ? this._pauseTime : r._time) -
                (this._reversed ? n - t : t) / this._timeScale),
              r._dirty || this._uncache(!1),
              r._timeline)
            )
              for (; r._timeline; )
                r._timeline._time !==
                  (r._startTime + r._totalTime) / r._timeScale &&
                  r.totalTime(r._totalTime, !0),
                  (r = r._timeline);
          }
          this._gc && this._enabled(!0, !1),
            (this._totalTime === t && 0 !== this._duration) ||
              (F.length && K(), this.render(t, e, !1), F.length && K());
        }
        return this;
      }),
      (a.progress = a.totalProgress = function(t, e) {
        var i = this.duration();
        return arguments.length
          ? this.totalTime(i * t, e)
          : i
          ? this._time / i
          : this.ratio;
      }),
      (a.startTime = function(t) {
        return arguments.length
          ? (t !== this._startTime &&
              ((this._startTime = t),
              this.timeline &&
                this.timeline._sortChildren &&
                this.timeline.add(this, t - this._delay)),
            this)
          : this._startTime;
      }),
      (a.endTime = function(t) {
        return (
          this._startTime +
          (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        );
      }),
      (a.timeScale = function(t) {
        if (!arguments.length) return this._timeScale;
        var e, i;
        for (
          t = t || f,
            this._timeline &&
              this._timeline.smoothChildTiming &&
              ((i =
                (e = this._pauseTime) || 0 === e
                  ? e
                  : this._timeline.totalTime()),
              (this._startTime =
                i - ((i - this._startTime) * this._timeScale) / t)),
            this._timeScale = t,
            i = this.timeline;
          i && i.timeline;

        )
          (i._dirty = !0), i.totalDuration(), (i = i.timeline);
        return this;
      }),
      (a.reversed = function(t) {
        return arguments.length
          ? (t != this._reversed &&
              ((this._reversed = t),
              this.totalTime(
                this._timeline && !this._timeline.smoothChildTiming
                  ? this.totalDuration() - this._totalTime
                  : this._totalTime,
                !0
              )),
            this)
          : this._reversed;
      }),
      (a.paused = function(t) {
        if (!arguments.length) return this._paused;
        var e,
          i,
          n = this._timeline;
        return (
          t != this._paused &&
            n &&
            (u || t || l.wake(),
            (i = (e = n.rawTime()) - this._pauseTime),
            !t &&
              n.smoothChildTiming &&
              ((this._startTime += i), this._uncache(!1)),
            (this._pauseTime = t ? e : null),
            (this._paused = t),
            (this._active = this.isActive()),
            !t &&
              0 !== i &&
              this._initted &&
              this.duration() &&
              ((e = n.smoothChildTiming
                ? this._totalTime
                : (e - this._startTime) / this._timeScale),
              this.render(e, e === this._totalTime, !0))),
          this._gc && !t && this._enabled(!0, !1),
          this
        );
      });
    var $ = w("core.SimpleTimeline", function(t) {
      O.call(this, 0, t),
        (this.autoRemoveChildren = this.smoothChildTiming = !0);
    });
    ((a = $.prototype = new O()).constructor = $),
      (a.kill()._gc = !1),
      (a._first = a._last = a._recent = null),
      (a._sortChildren = !1),
      (a.add = a.insert = function(t, e) {
        var i, n;
        if (
          ((t._startTime = Number(e || 0) + t._delay),
          t._paused &&
            this !== t._timeline &&
            (t._pauseTime =
              this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
          t.timeline && t.timeline._remove(t, !0),
          (t.timeline = t._timeline = this),
          t._gc && t._enabled(!0, !0),
          (i = this._last),
          this._sortChildren)
        )
          for (n = t._startTime; i && i._startTime > n; ) i = i._prev;
        return (
          i
            ? ((t._next = i._next), (i._next = t))
            : ((t._next = this._first), (this._first = t)),
          t._next ? (t._next._prev = t) : (this._last = t),
          (t._prev = i),
          (this._recent = t),
          this._timeline && this._uncache(!0),
          this
        );
      }),
      (a._remove = function(t, e) {
        return (
          t.timeline === this &&
            (e || t._enabled(!1, !0),
            t._prev
              ? (t._prev._next = t._next)
              : this._first === t && (this._first = t._next),
            t._next
              ? (t._next._prev = t._prev)
              : this._last === t && (this._last = t._prev),
            (t._next = t._prev = t.timeline = null),
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
          this
        );
      }),
      (a.render = function(t, e, i) {
        var n,
          r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r; )
          (n = r._next),
            (r._active || (t >= r._startTime && !r._paused && !r._gc)) &&
              (r._reversed
                ? r.render(
                    (r._dirty ? r.totalDuration() : r._totalDuration) -
                      (t - r._startTime) * r._timeScale,
                    e,
                    i
                  )
                : r.render((t - r._startTime) * r._timeScale, e, i)),
            (r = n);
      }),
      (a.rawTime = function() {
        return u || l.wake(), this._totalTime;
      });
    var L = w(
        "TweenLite",
        function(e, i, n) {
          if (
            (O.call(this, i, n), (this.render = L.prototype.render), null == e)
          )
            throw "Cannot tween a null target.";
          this.target = e = "string" != typeof e ? e : L.selector(e) || e;
          var r,
            s,
            o,
            a =
              e.jquery ||
              (e.length &&
                e !== t &&
                e[0] &&
                (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
            l = this.vars.overwrite;
          if (
            ((this._overwrite = l =
              null == l
                ? G[L.defaultOverwrite]
                : "number" == typeof l
                ? l >> 0
                : G[l]),
            (a || e instanceof Array || (e.push && y(e))) &&
              "number" != typeof e[0])
          )
            for (
              this._targets = o = m(e),
                this._propLookup = [],
                this._siblings = [],
                r = 0;
              r < o.length;
              r++
            )
              (s = o[r])
                ? "string" != typeof s
                  ? s.length &&
                    s !== t &&
                    s[0] &&
                    (s[0] === t || (s[0].nodeType && s[0].style && !s.nodeType))
                    ? (o.splice(r--, 1), (this._targets = o = o.concat(m(s))))
                    : ((this._siblings[r] = tt(s, this, !1)),
                      1 === l &&
                        this._siblings[r].length > 1 &&
                        it(s, this, null, 1, this._siblings[r]))
                  : "string" == typeof (s = o[r--] = L.selector(s)) &&
                    o.splice(r + 1, 1)
                : o.splice(r--, 1);
          else
            (this._propLookup = {}),
              (this._siblings = tt(e, this, !1)),
              1 === l &&
                this._siblings.length > 1 &&
                it(e, this, null, 1, this._siblings);
          (this.vars.immediateRender ||
            (0 === i &&
              0 === this._delay &&
              !1 !== this.vars.immediateRender)) &&
            ((this._time = -f), this.render(Math.min(0, -this._delay)));
        },
        !0
      ),
      M = function(e) {
        return (
          e &&
          e.length &&
          e !== t &&
          e[0] &&
          (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
        );
      },
      N = function(t, e) {
        var i,
          n = {};
        for (i in t)
          Y[i] ||
            (i in e &&
              "transform" !== i &&
              "x" !== i &&
              "y" !== i &&
              "width" !== i &&
              "height" !== i &&
              "className" !== i &&
              "border" !== i) ||
            !(!W[i] || (W[i] && W[i]._autoCSS)) ||
            ((n[i] = t[i]), delete t[i]);
        t.css = n;
      };
    ((a = L.prototype = new O()).constructor = L),
      (a.kill()._gc = !1),
      (a.ratio = 0),
      (a._firstPT = a._targets = a._overwrittenProps = a._startAt = null),
      (a._notifyPluginsOfEnabled = a._lazy = !1),
      (L.version = "1.20.5"),
      (L.defaultEase = a._ease = new T(null, null, 1, 1)),
      (L.defaultOverwrite = "auto"),
      (L.ticker = l),
      (L.autoSleep = 120),
      (L.lagSmoothing = function(t, e) {
        l.lagSmoothing(t, e);
      }),
      (L.selector =
        t.$ ||
        t.jQuery ||
        function(e) {
          var i = t.$ || t.jQuery;
          return i
            ? ((L.selector = i), i(e))
            : (n || (n = t.document),
              n
                ? n.querySelectorAll
                  ? n.querySelectorAll(e)
                  : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                : e);
        });
    var F = [],
      I = {},
      j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      q = /[\+-]=-?[\.\d]/,
      z = function(t) {
        for (var e, i = this._firstPT, n = 1e-6; i; )
          (e = i.blob
            ? 1 === t && null != this.end
              ? this.end
              : t
              ? this.join("")
              : this.start
            : i.c * t + i.s),
            i.m
              ? (e = i.m.call(this._tween, e, this._target || i.t, this._tween))
              : e < n && e > -n && !i.blob && (e = 0),
            i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
            (i = i._next);
      },
      H = function(t, e, i, n) {
        var r,
          s,
          o,
          a,
          l,
          u,
          h,
          c = [],
          p = 0,
          d = "",
          f = 0;
        for (
          c.start = t,
            c.end = e,
            t = c[0] = t + "",
            e = c[1] = e + "",
            i && (i(c), (t = c[0]), (e = c[1])),
            c.length = 0,
            r = t.match(j) || [],
            s = e.match(j) || [],
            n &&
              ((n._next = null), (n.blob = 1), (c._firstPT = c._applyPT = n)),
            l = s.length,
            a = 0;
          a < l;
          a++
        )
          (h = s[a]),
            (d += (u = e.substr(p, e.indexOf(h, p) - p)) || !a ? u : ","),
            (p += u.length),
            f ? (f = (f + 1) % 5) : "rgba(" === u.substr(-5) && (f = 1),
            h === r[a] || r.length <= a
              ? (d += h)
              : (d && (c.push(d), (d = "")),
                (o = parseFloat(r[a])),
                c.push(o),
                (c._firstPT = {
                  _next: c._firstPT,
                  t: c,
                  p: c.length - 1,
                  s: o,
                  c:
                    ("=" === h.charAt(1)
                      ? parseInt(h.charAt(0) + "1", 10) *
                        parseFloat(h.substr(2))
                      : parseFloat(h) - o) || 0,
                  f: 0,
                  m: f && f < 4 ? Math.round : 0
                })),
            (p += h.length);
        return (
          (d += e.substr(p)) && c.push(d),
          (c.setRatio = z),
          q.test(e) && (c.end = null),
          c
        );
      },
      B = function(t, e, i, n, r, s, o, a, l) {
        "function" == typeof n && (n = n(l || 0, t));
        var u = typeof t[e],
          h =
            "function" !== u
              ? ""
              : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)]
              ? e
              : "get" + e.substr(3),
          c = "get" !== i ? i : h ? (o ? t[h](o) : t[h]()) : t[e],
          p = "string" == typeof n && "=" === n.charAt(1),
          d = {
            t: t,
            p: e,
            s: c,
            f: "function" === u,
            pg: 0,
            n: r || e,
            m: s ? ("function" == typeof s ? s : Math.round) : 0,
            pr: 0,
            c: p
              ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2))
              : parseFloat(n) - c || 0
          };
        if (
          (("number" != typeof c || ("number" != typeof n && !p)) &&
            (o ||
            isNaN(c) ||
            (!p && isNaN(n)) ||
            "boolean" == typeof c ||
            "boolean" == typeof n
              ? ((d.fp = o),
                (d = {
                  t: H(
                    c,
                    p
                      ? parseFloat(d.s) +
                          d.c +
                          (d.s + "").replace(/[0-9\-\.]/g, "")
                      : n,
                    a || L.defaultStringFilter,
                    d
                  ),
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: r || e,
                  pr: 0,
                  m: 0
                }))
              : ((d.s = parseFloat(c)), p || (d.c = parseFloat(n) - d.s || 0))),
          d.c)
        )
          return (
            (d._next = this._firstPT) && (d._next._prev = d),
            (this._firstPT = d),
            d
          );
      },
      U = (L._internals = {
        isArray: y,
        isSelector: M,
        lazyTweens: F,
        blobDif: H
      }),
      W = (L._plugins = {}),
      V = (U.tweenLookup = {}),
      X = 0,
      Y = (U.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1
      }),
      G = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0
      },
      Q = (O._rootFramesTimeline = new $()),
      Z = (O._rootTimeline = new $()),
      J = 30,
      K = (U.lazyRender = function() {
        var t,
          e = F.length;
        for (I = {}; --e > -1; )
          (t = F[e]) &&
            !1 !== t._lazy &&
            (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
        F.length = 0;
      });
    (Z._startTime = l.time),
      (Q._startTime = l.frame),
      (Z._active = Q._active = !0),
      setTimeout(K, 1),
      (O._updateRoot = L.render = function() {
        var t, e, i;
        if (
          (F.length && K(),
          Z.render((l.time - Z._startTime) * Z._timeScale, !1, !1),
          Q.render((l.frame - Q._startTime) * Q._timeScale, !1, !1),
          F.length && K(),
          l.frame >= J)
        ) {
          for (i in ((J = l.frame + (parseInt(L.autoSleep, 10) || 120)), V)) {
            for (t = (e = V[i].tweens).length; --t > -1; )
              e[t]._gc && e.splice(t, 1);
            0 === e.length && delete V[i];
          }
          if (
            (!(i = Z._first) || i._paused) &&
            L.autoSleep &&
            !Q._first &&
            1 === l._listeners.tick.length
          ) {
            for (; i && i._paused; ) i = i._next;
            i || l.sleep();
          }
        }
      }),
      l.addEventListener("tick", O._updateRoot);
    var tt = function(t, e, i) {
        var n,
          r,
          s = t._gsTweenID;
        if (
          (V[s || (t._gsTweenID = s = "t" + X++)] ||
            (V[s] = {target: t, tweens: []}),
          e && (((n = V[s].tweens)[(r = n.length)] = e), i))
        )
          for (; --r > -1; ) n[r] === e && n.splice(r, 1);
        return V[s].tweens;
      },
      et = function(t, e, i, n) {
        var r,
          s,
          o = t.vars.onOverwrite;
        return (
          o && (r = o(t, e, i, n)),
          (o = L.onOverwrite) && (s = o(t, e, i, n)),
          !1 !== r && !1 !== s
        );
      },
      it = function(t, e, i, n, r) {
        var s, o, a, l;
        if (1 === n || n >= 4) {
          for (l = r.length, s = 0; s < l; s++)
            if ((a = r[s]) !== e) a._gc || (a._kill(null, t, e) && (o = !0));
            else if (5 === n) break;
          return o;
        }
        var u,
          h = e._startTime + f,
          c = [],
          p = 0,
          d = 0 === e._duration;
        for (s = r.length; --s > -1; )
          (a = r[s]) === e ||
            a._gc ||
            a._paused ||
            (a._timeline !== e._timeline
              ? ((u = u || nt(e, 0, d)), 0 === nt(a, u, d) && (c[p++] = a))
              : a._startTime <= h &&
                a._startTime + a.totalDuration() / a._timeScale > h &&
                (((d || !a._initted) && h - a._startTime <= 2e-10) ||
                  (c[p++] = a)));
        for (s = p; --s > -1; )
          if (
            ((a = c[s]),
            2 === n && a._kill(i, t, e) && (o = !0),
            2 !== n || (!a._firstPT && a._initted))
          ) {
            if (2 !== n && !et(a, e)) continue;
            a._enabled(!1, !1) && (o = !0);
          }
        return o;
      },
      nt = function(t, e, i) {
        for (
          var n = t._timeline, r = n._timeScale, s = t._startTime;
          n._timeline;

        ) {
          if (((s += n._startTime), (r *= n._timeScale), n._paused))
            return -100;
          n = n._timeline;
        }
        return (s /= r) > e
          ? s - e
          : (i && s === e) || (!t._initted && s - e < 2 * f)
          ? f
          : (s += t.totalDuration() / t._timeScale / r) > e + f
          ? 0
          : s - e - f;
      };
    (a._init = function() {
      var t,
        e,
        i,
        n,
        r,
        s,
        o = this.vars,
        a = this._overwrittenProps,
        l = this._duration,
        u = !!o.immediateRender,
        h = o.ease;
      if (o.startAt) {
        for (n in (this._startAt &&
          (this._startAt.render(-1, !0), this._startAt.kill()),
        (r = {}),
        o.startAt))
          r[n] = o.startAt[n];
        if (
          ((r.data = "isStart"),
          (r.overwrite = !1),
          (r.immediateRender = !0),
          (r.lazy = u && !1 !== o.lazy),
          (r.startAt = r.delay = null),
          (r.onUpdate = o.onUpdate),
          (r.onUpdateParams = o.onUpdateParams),
          (r.onUpdateScope = o.onUpdateScope || o.callbackScope || this),
          (this._startAt = L.to(this.target || {}, 0, r)),
          u)
        )
          if (this._time > 0) this._startAt = null;
          else if (0 !== l) return;
      } else if (o.runBackwards && 0 !== l)
        if (this._startAt)
          this._startAt.render(-1, !0),
            this._startAt.kill(),
            (this._startAt = null);
        else {
          for (n in (0 !== this._time && (u = !1), (i = {}), o))
            (Y[n] && "autoCSS" !== n) || (i[n] = o[n]);
          if (
            ((i.overwrite = 0),
            (i.data = "isFromStart"),
            (i.lazy = u && !1 !== o.lazy),
            (i.immediateRender = u),
            (this._startAt = L.to(this.target, 0, i)),
            u)
          ) {
            if (0 === this._time) return;
          } else
            this._startAt._init(),
              this._startAt._enabled(!1),
              this.vars.immediateRender && (this._startAt = null);
        }
      if (
        ((this._ease = h = h
          ? h instanceof T
            ? h
            : "function" == typeof h
            ? new T(h, o.easeParams)
            : C[h] || L.defaultEase
          : L.defaultEase),
        o.easeParams instanceof Array &&
          h.config &&
          (this._ease = h.config.apply(h, o.easeParams)),
        (this._easeType = this._ease._type),
        (this._easePower = this._ease._power),
        (this._firstPT = null),
        this._targets)
      )
        for (s = this._targets.length, t = 0; t < s; t++)
          this._initProps(
            this._targets[t],
            (this._propLookup[t] = {}),
            this._siblings[t],
            a ? a[t] : null,
            t
          ) && (e = !0);
      else
        e = this._initProps(
          this.target,
          this._propLookup,
          this._siblings,
          a,
          0
        );
      if (
        (e && L._onPluginEvent("_onInitAllProps", this),
        a &&
          (this._firstPT ||
            ("function" != typeof this.target && this._enabled(!1, !1))),
        o.runBackwards)
      )
        for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
      (this._onUpdate = o.onUpdate), (this._initted = !0);
    }),
      (a._initProps = function(e, i, n, r, s) {
        var o, a, l, u, h, c;
        if (null == e) return !1;
        for (o in (I[e._gsTweenID] && K(),
        this.vars.css ||
          (e.style &&
            e !== t &&
            e.nodeType &&
            W.css &&
            !1 !== this.vars.autoCSS &&
            N(this.vars, e)),
        this.vars))
          if (((c = this.vars[o]), Y[o]))
            c &&
              (c instanceof Array || (c.push && y(c))) &&
              -1 !== c.join("").indexOf("{self}") &&
              (this.vars[o] = c = this._swapSelfInParams(c, this));
          else if (
            W[o] &&
            (u = new W[o]())._onInitTween(e, this.vars[o], this, s)
          ) {
            for (
              this._firstPT = h = {
                _next: this._firstPT,
                t: u,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 1,
                n: o,
                pg: 1,
                pr: u._priority,
                m: 0
              },
                a = u._overwriteProps.length;
              --a > -1;

            )
              i[u._overwriteProps[a]] = this._firstPT;
            (u._priority || u._onInitAllProps) && (l = !0),
              (u._onDisable || u._onEnable) &&
                (this._notifyPluginsOfEnabled = !0),
              h._next && (h._next._prev = h);
          } else
            i[o] = B.call(
              this,
              e,
              o,
              "get",
              c,
              o,
              0,
              null,
              this.vars.stringFilter,
              s
            );
        return r && this._kill(r, e)
          ? this._initProps(e, i, n, r, s)
          : this._overwrite > 1 &&
            this._firstPT &&
            n.length > 1 &&
            it(e, this, i, this._overwrite, n)
          ? (this._kill(i, e), this._initProps(e, i, n, r, s))
          : (this._firstPT &&
              ((!1 !== this.vars.lazy && this._duration) ||
                (this.vars.lazy && !this._duration)) &&
              (I[e._gsTweenID] = !0),
            l);
      }),
      (a.render = function(t, e, i) {
        var n,
          r,
          s,
          o,
          a = this._time,
          l = this._duration,
          u = this._rawPrevTime;
        if (t >= l - 1e-7 && t >= 0)
          (this._totalTime = this._time = l),
            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed ||
              ((n = !0),
              (r = "onComplete"),
              (i = i || this._timeline.autoRemoveChildren)),
            0 === l &&
              (this._initted || !this.vars.lazy || i) &&
              (this._startTime === this._timeline._duration && (t = 0),
              (u < 0 ||
                (t <= 0 && t >= -1e-7) ||
                (u === f && "isPause" !== this.data)) &&
                u !== t &&
                ((i = !0), u > f && (r = "onReverseComplete")),
              (this._rawPrevTime = o = !e || t || u === t ? t : f));
        else if (t < 1e-7)
          (this._totalTime = this._time = 0),
            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
            (0 !== a || (0 === l && u > 0)) &&
              ((r = "onReverseComplete"), (n = this._reversed)),
            t < 0 &&
              ((this._active = !1),
              0 === l &&
                (this._initted || !this.vars.lazy || i) &&
                (u >= 0 && (u !== f || "isPause" !== this.data) && (i = !0),
                (this._rawPrevTime = o = !e || t || u === t ? t : f))),
            (!this._initted || (this._startAt && this._startAt.progress())) &&
              (i = !0);
        else if (((this._totalTime = this._time = t), this._easeType)) {
          var h = t / l,
            c = this._easeType,
            p = this._easePower;
          (1 === c || (3 === c && h >= 0.5)) && (h = 1 - h),
            3 === c && (h *= 2),
            1 === p
              ? (h *= h)
              : 2 === p
              ? (h *= h * h)
              : 3 === p
              ? (h *= h * h * h)
              : 4 === p && (h *= h * h * h * h),
            (this.ratio =
              1 === c ? 1 - h : 2 === c ? h : t / l < 0.5 ? h / 2 : 1 - h / 2);
        } else this.ratio = this._ease.getRatio(t / l);
        if (this._time !== a || i) {
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !i &&
              this._firstPT &&
              ((!1 !== this.vars.lazy && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = this._totalTime = a),
                (this._rawPrevTime = u),
                F.push(this),
                void (this._lazy = [t, e])
              );
            this._time && !n
              ? (this.ratio = this._ease.getRatio(this._time / l))
              : n &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            !1 !== this._lazy && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== a &&
                  t >= 0 &&
                  (this._active = !0)),
              0 === a &&
                (this._startAt &&
                  (t >= 0
                    ? this._startAt.render(t, !0, i)
                    : r || (r = "_dummyGS")),
                this.vars.onStart &&
                  ((0 === this._time && 0 !== l) ||
                    e ||
                    this._callback("onStart"))),
              s = this._firstPT;
            s;

          )
            s.f
              ? s.t[s.p](s.c * this.ratio + s.s)
              : (s.t[s.p] = s.c * this.ratio + s.s),
              (s = s._next);
          this._onUpdate &&
            (t < 0 &&
              this._startAt &&
              -1e-4 !== t &&
              this._startAt.render(t, !0, i),
            e || ((this._time !== a || n || i) && this._callback("onUpdate"))),
            r &&
              ((this._gc && !i) ||
                (t < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  -1e-4 !== t &&
                  this._startAt.render(t, !0, i),
                n &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e && this.vars[r] && this._callback(r),
                0 === l &&
                  this._rawPrevTime === f &&
                  o !== f &&
                  (this._rawPrevTime = 0)));
        }
      }),
      (a._kill = function(t, e, i) {
        if (
          ("all" === t && (t = null),
          null == t && (null == e || e === this.target))
        )
          return (this._lazy = !1), this._enabled(!1, !1);
        e =
          "string" != typeof e
            ? e || this._targets || this.target
            : L.selector(e) || e;
        var n,
          r,
          s,
          o,
          a,
          l,
          u,
          h,
          c,
          p =
            i &&
            this._time &&
            i._startTime === this._startTime &&
            this._timeline === i._timeline;
        if ((y(e) || M(e)) && "number" != typeof e[0])
          for (n = e.length; --n > -1; ) this._kill(t, e[n], i) && (l = !0);
        else {
          if (this._targets) {
            for (n = this._targets.length; --n > -1; )
              if (e === this._targets[n]) {
                (a = this._propLookup[n] || {}),
                  (this._overwrittenProps = this._overwrittenProps || []),
                  (r = this._overwrittenProps[n] = t
                    ? this._overwrittenProps[n] || {}
                    : "all");
                break;
              }
          } else {
            if (e !== this.target) return !1;
            (a = this._propLookup),
              (r = this._overwrittenProps = t
                ? this._overwrittenProps || {}
                : "all");
          }
          if (a) {
            if (
              ((u = t || a),
              (h =
                t !== r &&
                "all" !== r &&
                t !== a &&
                ("object" != typeof t || !t._tempKill)),
              i && (L.onOverwrite || this.vars.onOverwrite))
            ) {
              for (s in u) a[s] && (c || (c = []), c.push(s));
              if ((c || !t) && !et(this, i, e, c)) return !1;
            }
            for (s in u)
              (o = a[s]) &&
                (p && (o.f ? o.t[o.p](o.s) : (o.t[o.p] = o.s), (l = !0)),
                o.pg && o.t._kill(u) && (l = !0),
                (o.pg && 0 !== o.t._overwriteProps.length) ||
                  (o._prev
                    ? (o._prev._next = o._next)
                    : o === this._firstPT && (this._firstPT = o._next),
                  o._next && (o._next._prev = o._prev),
                  (o._next = o._prev = null)),
                delete a[s]),
                h && (r[s] = 1);
            !this._firstPT && this._initted && this._enabled(!1, !1);
          }
        }
        return l;
      }),
      (a.invalidate = function() {
        return (
          this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this),
          (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
          (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
          (this._propLookup = this._targets ? {} : []),
          O.prototype.invalidate.call(this),
          this.vars.immediateRender &&
            ((this._time = -f), this.render(Math.min(0, -this._delay))),
          this
        );
      }),
      (a._enabled = function(t, e) {
        if ((u || l.wake(), t && this._gc)) {
          var i,
            n = this._targets;
          if (n)
            for (i = n.length; --i > -1; )
              this._siblings[i] = tt(n[i], this, !0);
          else this._siblings = tt(this.target, this, !0);
        }
        return (
          O.prototype._enabled.call(this, t, e),
          !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
            L._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        );
      }),
      (L.to = function(t, e, i) {
        return new L(t, e, i);
      }),
      (L.from = function(t, e, i) {
        return (
          (i.runBackwards = !0),
          (i.immediateRender = 0 != i.immediateRender),
          new L(t, e, i)
        );
      }),
      (L.fromTo = function(t, e, i, n) {
        return (
          (n.startAt = i),
          (n.immediateRender =
            0 != n.immediateRender && 0 != i.immediateRender),
          new L(t, e, n)
        );
      }),
      (L.delayedCall = function(t, e, i, n, r) {
        return new L(e, 0, {
          delay: t,
          onComplete: e,
          onCompleteParams: i,
          callbackScope: n,
          onReverseComplete: e,
          onReverseCompleteParams: i,
          immediateRender: !1,
          lazy: !1,
          useFrames: r,
          overwrite: 0
        });
      }),
      (L.set = function(t, e) {
        return new L(t, 0, e);
      }),
      (L.getTweensOf = function(t, e) {
        if (null == t) return [];
        var i, n, r, s;
        if (
          ((t = "string" != typeof t ? t : L.selector(t) || t),
          (y(t) || M(t)) && "number" != typeof t[0])
        ) {
          for (i = t.length, n = []; --i > -1; )
            n = n.concat(L.getTweensOf(t[i], e));
          for (i = n.length; --i > -1; )
            for (s = n[i], r = i; --r > -1; ) s === n[r] && n.splice(i, 1);
        } else if (t._gsTweenID)
          for (i = (n = tt(t).concat()).length; --i > -1; )
            (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
        return n || [];
      }),
      (L.killTweensOf = L.killDelayedCallsTo = function(t, e, i) {
        "object" == typeof e && ((i = e), (e = !1));
        for (var n = L.getTweensOf(t, e), r = n.length; --r > -1; )
          n[r]._kill(i, t);
      });
    var rt = w(
      "plugins.TweenPlugin",
      function(t, e) {
        (this._overwriteProps = (t || "").split(",")),
          (this._propName = this._overwriteProps[0]),
          (this._priority = e || 0),
          (this._super = rt.prototype);
      },
      !0
    );
    if (
      ((a = rt.prototype),
      (rt.version = "1.19.0"),
      (rt.API = 2),
      (a._firstPT = null),
      (a._addTween = B),
      (a.setRatio = z),
      (a._kill = function(t) {
        var e,
          i = this._overwriteProps,
          n = this._firstPT;
        if (null != t[this._propName]) this._overwriteProps = [];
        else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
        for (; n; )
          null != t[n.n] &&
            (n._next && (n._next._prev = n._prev),
            n._prev
              ? ((n._prev._next = n._next), (n._prev = null))
              : this._firstPT === n && (this._firstPT = n._next)),
            (n = n._next);
        return !1;
      }),
      (a._mod = a._roundProps = function(t) {
        for (var e, i = this._firstPT; i; )
          (e =
            t[this._propName] ||
            (null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
            "function" == typeof e &&
            (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
            (i = i._next);
      }),
      (L._onPluginEvent = function(t, e) {
        var i,
          n,
          r,
          s,
          o,
          a = e._firstPT;
        if ("_onInitAllProps" === t) {
          for (; a; ) {
            for (o = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
            (a._prev = n ? n._prev : s) ? (a._prev._next = a) : (r = a),
              (a._next = n) ? (n._prev = a) : (s = a),
              (a = o);
          }
          a = e._firstPT = r;
        }
        for (; a; )
          a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
            (a = a._next);
        return i;
      }),
      (rt.activate = function(t) {
        for (var e = t.length; --e > -1; )
          t[e].API === rt.API && (W[new t[e]()._propName] = t[e]);
        return !0;
      }),
      (b.plugin = function(t) {
        if (!(t && t.propName && t.init && t.API))
          throw "illegal plugin definition.";
        var e,
          i = t.propName,
          n = t.priority || 0,
          r = t.overwriteProps,
          s = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps"
          },
          o = w(
            "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function() {
              rt.call(this, i, n), (this._overwriteProps = r || []);
            },
            !0 === t.global
          ),
          a = (o.prototype = new rt(i));
        for (e in ((a.constructor = o), (o.API = t.API), s))
          "function" == typeof t[e] && (a[s[e]] = t[e]);
        return (o.version = t.version), rt.activate([o]), o;
      }),
      (s = t._gsQueue))
    ) {
      for (o = 0; o < s.length; o++) s[o]();
      for (a in v)
        v[a].func || t.console.log("GSAP encountered missing dependency: " + a);
    }
    u = !1;
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  ),
  /*!
   * ScrollMagic v2.0.6 (2018-10-08)
   * The javascript library for magical scroll interactions.
   * (c) 2018 Jan Paepke (@janpaepke)
   * Project Website: http://scrollmagic.io
   *
   * @version 2.0.6
   * @license Dual licensed under MIT license and GPL.
   * @author Jan Paepke - e-mail@janpaepke.de
   *
   * @file ScrollMagic main library.
   */
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define(e)
      : "object" == typeof exports
      ? (module.exports = e())
      : (t.ScrollMagic = e());
  })(this, function() {
    "use strict";
    var t = function() {
      r.log(
        2,
        "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene."
      );
    };
    (t.version = "2.0.6"), window.addEventListener("mousewheel", function() {});
    var e = "data-scrollmagic-pin-spacer";
    t.Controller = function(n) {
      var s,
        o,
        a = "ScrollMagic.Controller",
        l = "FORWARD",
        u = "REVERSE",
        h = "PAUSED",
        c = i.defaults,
        p = this,
        d = r.extend({}, c, n),
        f = [],
        m = !1,
        g = 0,
        y = h,
        v = !0,
        _ = 0,
        b = !0,
        w = function() {
          for (var e in d)
            c.hasOwnProperty(e) ||
              (R(2, 'WARNING: Unknown option "' + e + '"'), delete d[e]);
          if (((d.container = r.get.elements(d.container)[0]), !d.container))
            throw (R(
              1,
              "ERROR creating object " +
                a +
                ": No valid scroll container supplied"
            ),
            a + " init failed.");
          (v =
            d.container === window ||
            d.container === document.body ||
            !document.body.contains(d.container)) && (d.container = window),
            (_ = C()),
            d.container.addEventListener("resize", P),
            d.container.addEventListener("scroll", P);
          var i = parseInt(d.refreshInterval, 10);
          (d.refreshInterval = r.type.Number(i) ? i : c.refreshInterval),
            x(),
            R(3, "added new " + a + " controller (v" + t.version + ")");
        },
        x = function() {
          d.refreshInterval > 0 &&
            (o = window.setTimeout(A, d.refreshInterval));
        },
        T = function() {
          return d.vertical
            ? r.get.scrollTop(d.container)
            : r.get.scrollLeft(d.container);
        },
        C = function() {
          return d.vertical
            ? r.get.height(d.container)
            : r.get.width(d.container);
        },
        S = (this._setScrollPos = function(t) {
          d.vertical
            ? v
              ? window.scrollTo(r.get.scrollLeft(), t)
              : (d.container.scrollTop = t)
            : v
            ? window.scrollTo(t, r.get.scrollTop())
            : (d.container.scrollLeft = t);
        }),
        E = function() {
          if (b && m) {
            var t = r.type.Array(m) ? m : f.slice(0);
            m = !1;
            var e = g,
              i = (g = p.scrollPos()) - e;
            0 !== i && (y = i > 0 ? l : u),
              y === u && t.reverse(),
              t.forEach(function(e, i) {
                R(
                  3,
                  "updating Scene " +
                    (i + 1) +
                    "/" +
                    t.length +
                    " (" +
                    f.length +
                    " total)"
                ),
                  e.update(!0);
              }),
              0 === t.length &&
                d.loglevel >= 3 &&
                R(3, "updating 0 Scenes (nothing added to controller)");
          }
        },
        k = function() {
          s = r.rAF(E);
        },
        P = function(t) {
          R(3, "event fired causing an update:", t.type),
            "resize" == t.type && ((_ = C()), (y = h)),
            !0 !== m && ((m = !0), k());
        },
        A = function() {
          if (!v && _ != C()) {
            var t;
            try {
              t = new Event("resize", {bubbles: !1, cancelable: !1});
            } catch (e) {
              (t = document.createEvent("Event")).initEvent("resize", !1, !1);
            }
            d.container.dispatchEvent(t);
          }
          f.forEach(function(t) {
            t.refresh();
          }),
            x();
        },
        R = (this._log = function(t) {
          d.loglevel >= t &&
            (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
            r.log.apply(window, arguments));
        });
      this._options = d;
      var O = function(t) {
        if (t.length <= 1) return t;
        var e = t.slice(0);
        return (
          e.sort(function(t, e) {
            return t.scrollOffset() > e.scrollOffset() ? 1 : -1;
          }),
          e
        );
      };
      return (
        (this.addScene = function(e) {
          if (r.type.Array(e))
            e.forEach(function(t) {
              p.addScene(t);
            });
          else if (e instanceof t.Scene) {
            if (e.controller() !== p) e.addTo(p);
            else if (f.indexOf(e) < 0) {
              for (var i in (f.push(e),
              (f = O(f)),
              e.on("shift.controller_sort", function() {
                f = O(f);
              }),
              d.globalSceneOptions))
                e[i] && e[i].call(e, d.globalSceneOptions[i]);
              R(3, "adding Scene (now " + f.length + " total)");
            }
          } else R(1, "ERROR: invalid argument supplied for '.addScene()'");
          return p;
        }),
        (this.removeScene = function(t) {
          if (r.type.Array(t))
            t.forEach(function(t) {
              p.removeScene(t);
            });
          else {
            var e = f.indexOf(t);
            e > -1 &&
              (t.off("shift.controller_sort"),
              f.splice(e, 1),
              R(3, "removing Scene (now " + f.length + " left)"),
              t.remove());
          }
          return p;
        }),
        (this.updateScene = function(e, i) {
          return (
            r.type.Array(e)
              ? e.forEach(function(t) {
                  p.updateScene(t, i);
                })
              : i
              ? e.update(!0)
              : !0 !== m &&
                e instanceof t.Scene &&
                (-1 == (m = m || []).indexOf(e) && m.push(e), (m = O(m)), k()),
            p
          );
        }),
        (this.update = function(t) {
          return P({type: "resize"}), t && E(), p;
        }),
        (this.scrollTo = function(i, n) {
          if (r.type.Number(i)) S.call(d.container, i, n);
          else if (i instanceof t.Scene)
            i.controller() === p
              ? p.scrollTo(i.scrollOffset(), n)
              : R(
                  2,
                  "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",
                  i
                );
          else if (r.type.Function(i)) S = i;
          else {
            var s = r.get.elements(i)[0];
            if (s) {
              for (; s.parentNode.hasAttribute(e); ) s = s.parentNode;
              var o = d.vertical ? "top" : "left",
                a = r.get.offset(d.container),
                l = r.get.offset(s);
              v || (a[o] -= p.scrollPos()), p.scrollTo(l[o] - a[o], n);
            } else
              R(
                2,
                "scrollTo(): The supplied argument is invalid. Scroll cancelled.",
                i
              );
          }
          return p;
        }),
        (this.scrollPos = function(t) {
          return arguments.length
            ? (r.type.Function(t)
                ? (T = t)
                : R(
                    2,
                    "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."
                  ),
              p)
            : T.call(p);
        }),
        (this.info = function(t) {
          var e = {
            size: _,
            vertical: d.vertical,
            scrollPos: g,
            scrollDirection: y,
            container: d.container,
            isDocument: v
          };
          return arguments.length
            ? e[t] !== undefined
              ? e[t]
              : void R(1, 'ERROR: option "' + t + '" is not available')
            : e;
        }),
        (this.loglevel = function(t) {
          return arguments.length
            ? (d.loglevel != t && (d.loglevel = t), p)
            : d.loglevel;
        }),
        (this.enabled = function(t) {
          return arguments.length
            ? (b != t && ((b = !!t), p.updateScene(f, !0)), p)
            : b;
        }),
        (this.destroy = function(t) {
          window.clearTimeout(o);
          for (var e = f.length; e--; ) f[e].destroy(t);
          return (
            d.container.removeEventListener("resize", P),
            d.container.removeEventListener("scroll", P),
            r.cAF(s),
            R(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"),
            null
          );
        }),
        w(),
        p
      );
    };
    var i = {
      defaults: {
        container: window,
        vertical: !0,
        globalSceneOptions: {},
        loglevel: 2,
        refreshInterval: 100
      }
    };
    (t.Controller.addOption = function(t, e) {
      i.defaults[t] = e;
    }),
      (t.Controller.extend = function(e) {
        var i = this;
        (t.Controller = function() {
          return (
            i.apply(this, arguments),
            (this.$super = r.extend({}, this)),
            e.apply(this, arguments) || this
          );
        }),
          r.extend(t.Controller, i),
          (t.Controller.prototype = i.prototype),
          (t.Controller.prototype.constructor = t.Controller);
      }),
      (t.Scene = function(i) {
        var s,
          o,
          a = "ScrollMagic.Scene",
          l = "BEFORE",
          u = "DURING",
          h = "AFTER",
          c = n.defaults,
          p = this,
          d = r.extend({}, c, i),
          f = l,
          m = 0,
          g = {start: 0, end: 0},
          y = 0,
          v = !0,
          _ = function() {
            for (var t in d)
              c.hasOwnProperty(t) ||
                (w(2, 'WARNING: Unknown option "' + t + '"'), delete d[t]);
            for (var e in c) O(e);
            A();
          },
          b = {};
        (this.on = function(t, e) {
          return (
            r.type.Function(e)
              ? (t = t.trim().split(" ")).forEach(function(t) {
                  var i = t.split("."),
                    n = i[0],
                    r = i[1];
                  "*" != n &&
                    (b[n] || (b[n] = []),
                    b[n].push({namespace: r || "", callback: e}));
                })
              : w(
                  1,
                  "ERROR when calling '.on()': Supplied callback for '" +
                    t +
                    "' is not a valid function!"
                ),
            p
          );
        }),
          (this.off = function(t, e) {
            return t
              ? ((t = t.trim().split(" ")).forEach(function(t) {
                  var i = t.split("."),
                    n = i[0],
                    r = i[1] || "";
                  ("*" === n ? Object.keys(b) : [n]).forEach(function(t) {
                    for (var i = b[t] || [], n = i.length; n--; ) {
                      var s = i[n];
                      !s ||
                        (r !== s.namespace && "*" !== r) ||
                        (e && e != s.callback) ||
                        i.splice(n, 1);
                    }
                    i.length || delete b[t];
                  });
                }),
                p)
              : (w(1, "ERROR: Invalid event name supplied."), p);
          }),
          (this.trigger = function(e, i) {
            if (e) {
              var n = e.trim().split("."),
                r = n[0],
                s = n[1],
                o = b[r];
              w(3, "event fired:", r, i ? "->" : "", i || ""),
                o &&
                  o.forEach(function(e) {
                    (s && s !== e.namespace) ||
                      e.callback.call(p, new t.Event(r, e.namespace, p, i));
                  });
            } else w(1, "ERROR: Invalid event name supplied.");
            return p;
          }),
          p
            .on("change.internal", function(t) {
              "loglevel" !== t.what &&
                "tweenChanges" !== t.what &&
                ("triggerElement" === t.what
                  ? E()
                  : "reverse" === t.what && p.update());
            })
            .on("shift.internal", function() {
              C(), p.update();
            });
        var w = (this._log = function(t) {
          d.loglevel >= t &&
            (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
            r.log.apply(window, arguments));
        });
        (this.addTo = function(e) {
          return (
            e instanceof t.Controller
              ? o != e &&
                (o && o.removeScene(p),
                (o = e),
                A(),
                S(!0),
                E(!0),
                C(),
                o.info("container").addEventListener("resize", k),
                e.addScene(p),
                p.trigger("add", {controller: o}),
                w(3, "added " + a + " to controller"),
                p.update())
              : w(
                  1,
                  "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"
                ),
            p
          );
        }),
          (this.enabled = function(t) {
            return arguments.length
              ? (v != t && ((v = !!t), p.update(!0)), p)
              : v;
          }),
          (this.remove = function() {
            if (o) {
              o.info("container").removeEventListener("resize", k);
              var t = o;
              (o = undefined),
                t.removeScene(p),
                p.trigger("remove"),
                w(3, "removed " + a + " from controller");
            }
            return p;
          }),
          (this.destroy = function(t) {
            return (
              p.trigger("destroy", {reset: t}),
              p.remove(),
              p.off("*.*"),
              w(
                3,
                "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"
              ),
              null
            );
          }),
          (this.update = function(t) {
            if (o)
              if (t)
                if (o.enabled() && v) {
                  var e,
                    i = o.info("scrollPos");
                  (e =
                    d.duration > 0
                      ? (i - g.start) / (g.end - g.start)
                      : i >= g.start
                      ? 1
                      : 0),
                    p.trigger("update", {
                      startPos: g.start,
                      endPos: g.end,
                      scrollPos: i
                    }),
                    p.progress(e);
                } else x && f === u && D(!0);
              else o.updateScene(p, !1);
            return p;
          }),
          (this.refresh = function() {
            return S(), E(), p;
          }),
          (this.progress = function(t) {
            if (arguments.length) {
              var e = !1,
                i = f,
                n = o ? o.info("scrollDirection") : "PAUSED",
                r = d.reverse || t >= m;
              if (
                (0 === d.duration
                  ? ((e = m != t), (f = 0 === (m = t < 1 && r ? 0 : 1) ? l : u))
                  : t < 0 && f !== l && r
                  ? ((m = 0), (f = l), (e = !0))
                  : t >= 0 && t < 1 && r
                  ? ((m = t), (f = u), (e = !0))
                  : t >= 1 && f !== h
                  ? ((m = 1), (f = h), (e = !0))
                  : f !== u || r || D(),
                e)
              ) {
                var s = {progress: m, state: f, scrollDirection: n},
                  a = f != i,
                  c = function(t) {
                    p.trigger(t, s);
                  };
                a && i !== u && (c("enter"), c(i === l ? "start" : "end")),
                  c("progress"),
                  a && f !== u && (c(f === l ? "start" : "end"), c("leave"));
              }
              return p;
            }
            return m;
          });
        var x,
          T,
          C = function() {
            (g = {start: y + d.offset}),
              o &&
                d.triggerElement &&
                (g.start -= o.info("size") * d.triggerHook),
              (g.end = g.start + d.duration);
          },
          S = function(t) {
            if (s) {
              var e = "duration";
              R(e, s.call(p)) &&
                !t &&
                (p.trigger("change", {what: e, newval: d[e]}),
                p.trigger("shift", {reason: e}));
            }
          },
          E = function(t) {
            var i = 0,
              n = d.triggerElement;
            if (o && (n || y > 0)) {
              if (n)
                if (n.parentNode) {
                  for (
                    var s = o.info(),
                      a = r.get.offset(s.container),
                      l = s.vertical ? "top" : "left";
                    n.parentNode.hasAttribute(e);

                  )
                    n = n.parentNode;
                  var u = r.get.offset(n);
                  s.isDocument || (a[l] -= o.scrollPos()), (i = u[l] - a[l]);
                } else
                  w(
                    2,
                    "WARNING: triggerElement was removed from DOM and will be reset to",
                    undefined
                  ),
                    p.triggerElement(undefined);
              var h = i != y;
              (y = i),
                h &&
                  !t &&
                  p.trigger("shift", {reason: "triggerElementPosition"});
            }
          },
          k = function() {
            d.triggerHook > 0 &&
              p.trigger("shift", {reason: "containerResize"});
          },
          P = r.extend(n.validate, {
            duration: function(t) {
              if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                var e = parseFloat(t) / 100;
                t = function() {
                  return o ? o.info("size") * e : 0;
                };
              }
              if (r.type.Function(t)) {
                s = t;
                try {
                  t = parseFloat(s());
                } catch (i) {
                  t = -1;
                }
              }
              if (((t = parseFloat(t)), !r.type.Number(t) || t < 0))
                throw s
                  ? ((s = undefined),
                    [
                      'Invalid return value of supplied function for option "duration":',
                      t
                    ])
                  : ['Invalid value for option "duration":', t];
              return t;
            }
          }),
          A = function(t) {
            (t = arguments.length ? [t] : Object.keys(P)).forEach(function(t) {
              var e;
              if (P[t])
                try {
                  e = P[t](d[t]);
                } catch (n) {
                  e = c[t];
                  var i = r.type.String(n) ? [n] : n;
                  r.type.Array(i)
                    ? ((i[0] = "ERROR: " + i[0]),
                      i.unshift(1),
                      w.apply(this, i))
                    : w(
                        1,
                        "ERROR: Problem executing validation callback for option '" +
                          t +
                          "':",
                        n.message
                      );
                } finally {
                  d[t] = e;
                }
            });
          },
          R = function(t, e) {
            var i = !1,
              n = d[t];
            return d[t] != e && ((d[t] = e), A(t), (i = n != d[t])), i;
          },
          O = function(t) {
            p[t] ||
              (p[t] = function(e) {
                return arguments.length
                  ? ("duration" === t && (s = undefined),
                    R(t, e) &&
                      (p.trigger("change", {what: t, newval: d[t]}),
                      n.shifts.indexOf(t) > -1 &&
                        p.trigger("shift", {reason: t})),
                    p)
                  : d[t];
              });
          };
        (this.controller = function() {
          return o;
        }),
          (this.state = function() {
            return f;
          }),
          (this.scrollOffset = function() {
            return g.start;
          }),
          (this.triggerPosition = function() {
            var t = d.offset;
            return (
              o &&
                (d.triggerElement
                  ? (t += y)
                  : (t += o.info("size") * p.triggerHook())),
              t
            );
          }),
          p
            .on("shift.internal", function(t) {
              var e = "duration" === t.reason;
              ((f === h && e) || (f === u && 0 === d.duration)) && D(),
                e && $();
            })
            .on("progress.internal", function() {
              D();
            })
            .on("add.internal", function() {
              $();
            })
            .on("destroy.internal", function(t) {
              p.removePin(t.reset);
            });
        var D = function(t) {
            if (x && o) {
              var e = o.info(),
                i = T.spacer.firstChild;
              if (t || f !== u) {
                var n = {
                    position: T.inFlow ? "relative" : "absolute",
                    top: 0,
                    left: 0
                  },
                  s = r.css(i, "position") != n.position;
                T.pushFollowers
                  ? d.duration > 0 &&
                    (f === h && 0 === parseFloat(r.css(T.spacer, "padding-top"))
                      ? (s = !0)
                      : f === l &&
                        0 === parseFloat(r.css(T.spacer, "padding-bottom")) &&
                        (s = !0))
                  : (n[e.vertical ? "top" : "left"] = d.duration * m),
                  r.css(i, n),
                  s && $();
              } else {
                "fixed" != r.css(i, "position") &&
                  (r.css(i, {position: "fixed"}), $());
                var a = r.get.offset(T.spacer, !0),
                  c =
                    d.reverse || 0 === d.duration
                      ? e.scrollPos - g.start
                      : Math.round(m * d.duration * 10) / 10;
                (a[e.vertical ? "top" : "left"] += c),
                  r.css(T.spacer.firstChild, {top: a.top, left: a.left});
              }
            }
          },
          $ = function() {
            if (x && o && T.inFlow) {
              var t = f === u,
                e = o.info("vertical"),
                i = T.spacer.firstChild,
                n = r.isMarginCollapseType(r.css(T.spacer, "display")),
                s = {};
              T.relSize.width || T.relSize.autoFullWidth
                ? t
                  ? r.css(x, {width: r.get.width(T.spacer)})
                  : r.css(x, {width: "100%"})
                : ((s["min-width"] = r.get.width(e ? x : i, !0, !0)),
                  (s.width = t ? s["min-width"] : "auto")),
                T.relSize.height
                  ? t
                    ? r.css(x, {
                        height:
                          r.get.height(T.spacer) -
                          (T.pushFollowers ? d.duration : 0)
                      })
                    : r.css(x, {height: "100%"})
                  : ((s["min-height"] = r.get.height(e ? i : x, !0, !n)),
                    (s.height = t ? s["min-height"] : "auto")),
                T.pushFollowers &&
                  ((s["padding" + (e ? "Top" : "Left")] = d.duration * m),
                  (s["padding" + (e ? "Bottom" : "Right")] =
                    d.duration * (1 - m))),
                r.css(T.spacer, s);
            }
          },
          L = function() {
            o && x && f === u && !o.info("isDocument") && D();
          },
          M = function() {
            o &&
              x &&
              f === u &&
              (((T.relSize.width || T.relSize.autoFullWidth) &&
                r.get.width(window) != r.get.width(T.spacer.parentNode)) ||
                (T.relSize.height &&
                  r.get.height(window) != r.get.height(T.spacer.parentNode))) &&
              $();
          },
          N = function(t) {
            o &&
              x &&
              f === u &&
              !o.info("isDocument") &&
              (t.preventDefault(),
              o._setScrollPos(
                o.info("scrollPos") -
                  ((t.wheelDelta ||
                    t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) /
                    3 || 30 * -t.detail)
              ));
          };
        (this.setPin = function(t, i) {
          var n = {pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer"};
          if (((i = r.extend({}, n, i)), !(t = r.get.elements(t)[0])))
            return (
              w(
                1,
                "ERROR calling method 'setPin()': Invalid pin element supplied."
              ),
              p
            );
          if ("fixed" === r.css(t, "position"))
            return (
              w(
                1,
                "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."
              ),
              p
            );
          if (x) {
            if (x === t) return p;
            p.removePin();
          }
          var s = (x = t).parentNode.style.display,
            o = [
              "top",
              "left",
              "bottom",
              "right",
              "margin",
              "marginLeft",
              "marginRight",
              "marginTop",
              "marginBottom"
            ];
          x.parentNode.style.display = "none";
          var a = "absolute" != r.css(x, "position"),
            l = r.css(x, o.concat(["display"])),
            u = r.css(x, ["width", "height"]);
          (x.parentNode.style.display = s),
            !a &&
              i.pushFollowers &&
              (w(
                2,
                "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."
              ),
              (i.pushFollowers = !1)),
            window.setTimeout(function() {
              x &&
                0 === d.duration &&
                i.pushFollowers &&
                w(
                  2,
                  "WARNING: pushFollowers =",
                  !0,
                  "has no effect, when scene duration is 0."
                );
            }, 0);
          var h = x.parentNode.insertBefore(document.createElement("div"), x),
            c = r.extend(l, {
              position: a ? "relative" : "absolute",
              boxSizing: "content-box",
              mozBoxSizing: "content-box",
              webkitBoxSizing: "content-box"
            });
          if (
            (a || r.extend(c, r.css(x, ["width", "height"])),
            r.css(h, c),
            h.setAttribute(e, ""),
            r.addClass(h, i.spacerClass),
            (T = {
              spacer: h,
              relSize: {
                width: "%" === u.width.slice(-1),
                height: "%" === u.height.slice(-1),
                autoFullWidth:
                  "auto" === u.width && a && r.isMarginCollapseType(l.display)
              },
              pushFollowers: i.pushFollowers,
              inFlow: a
            }),
            !x.___origStyle)
          ) {
            x.___origStyle = {};
            var f = x.style;
            o.concat([
              "width",
              "height",
              "position",
              "boxSizing",
              "mozBoxSizing",
              "webkitBoxSizing"
            ]).forEach(function(t) {
              x.___origStyle[t] = f[t] || "";
            });
          }
          return (
            T.relSize.width && r.css(h, {width: u.width}),
            T.relSize.height && r.css(h, {height: u.height}),
            h.appendChild(x),
            r.css(x, {
              position: a ? "relative" : "absolute",
              margin: "auto",
              top: "auto",
              left: "auto",
              bottom: "auto",
              right: "auto"
            }),
            (T.relSize.width || T.relSize.autoFullWidth) &&
              r.css(x, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
              }),
            window.addEventListener("scroll", L),
            window.addEventListener("resize", L),
            window.addEventListener("resize", M),
            x.addEventListener("mousewheel", N),
            x.addEventListener("DOMMouseScroll", N),
            w(3, "added pin"),
            D(),
            p
          );
        }),
          (this.removePin = function(t) {
            if (x) {
              if ((f === u && D(!0), t || !o)) {
                var i = T.spacer.firstChild;
                if (i.hasAttribute(e)) {
                  var n = T.spacer.style,
                    s = {};
                  [
                    "margin",
                    "marginLeft",
                    "marginRight",
                    "marginTop",
                    "marginBottom"
                  ].forEach(function(t) {
                    s[t] = n[t] || "";
                  }),
                    r.css(i, s);
                }
                T.spacer.parentNode.insertBefore(i, T.spacer),
                  T.spacer.parentNode.removeChild(T.spacer),
                  x.parentNode.hasAttribute(e) ||
                    (r.css(x, x.___origStyle), delete x.___origStyle);
              }
              window.removeEventListener("scroll", L),
                window.removeEventListener("resize", L),
                window.removeEventListener("resize", M),
                x.removeEventListener("mousewheel", N),
                x.removeEventListener("DOMMouseScroll", N),
                (x = undefined),
                w(3, "removed pin (reset: " + (t ? "true" : "false") + ")");
            }
            return p;
          });
        var F,
          I = [];
        return (
          p.on("destroy.internal", function(t) {
            p.removeClassToggle(t.reset);
          }),
          (this.setClassToggle = function(t, e) {
            var i = r.get.elements(t);
            return 0 !== i.length && r.type.String(e)
              ? (I.length > 0 && p.removeClassToggle(),
                (F = e),
                (I = i),
                p.on("enter.internal_class leave.internal_class", function(t) {
                  var e = "enter" === t.type ? r.addClass : r.removeClass;
                  I.forEach(function(t) {
                    e(t, F);
                  });
                }),
                p)
              : (w(
                  1,
                  "ERROR calling method 'setClassToggle()': Invalid " +
                    (0 === i.length ? "element" : "classes") +
                    " supplied."
                ),
                p);
          }),
          (this.removeClassToggle = function(t) {
            return (
              t &&
                I.forEach(function(t) {
                  r.removeClass(t, F);
                }),
              p.off("start.internal_class end.internal_class"),
              (F = undefined),
              (I = []),
              p
            );
          }),
          _(),
          p
        );
      });
    var n = {
      defaults: {
        duration: 0,
        offset: 0,
        triggerElement: undefined,
        triggerHook: 0.5,
        reverse: !0,
        loglevel: 2
      },
      validate: {
        offset: function(t) {
          if (((t = parseFloat(t)), !r.type.Number(t)))
            throw ['Invalid value for option "offset":', t];
          return t;
        },
        triggerElement: function(t) {
          if ((t = t || undefined)) {
            var e = r.get.elements(t)[0];
            if (!e || !e.parentNode)
              throw [
                'Element defined in option "triggerElement" was not found:',
                t
              ];
            t = e;
          }
          return t;
        },
        triggerHook: function(t) {
          var e = {onCenter: 0.5, onEnter: 1, onLeave: 0};
          if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
          else {
            if (!(t in e))
              throw ['Invalid value for option "triggerHook": ', t];
            t = e[t];
          }
          return t;
        },
        reverse: function(t) {
          return !!t;
        },
        loglevel: function(t) {
          if (((t = parseInt(t)), !r.type.Number(t) || t < 0 || t > 3))
            throw ['Invalid value for option "loglevel":', t];
          return t;
        }
      },
      shifts: ["duration", "offset", "triggerHook"]
    };
    (t.Scene.addOption = function(e, i, r, s) {
      e in n.defaults
        ? t._util.log(
            1,
            "[static] ScrollMagic.Scene -> Cannot add Scene option '" +
              e +
              "', because it already exists."
          )
        : ((n.defaults[e] = i), (n.validate[e] = r), s && n.shifts.push(e));
    }),
      (t.Scene.extend = function(e) {
        var i = this;
        (t.Scene = function() {
          return (
            i.apply(this, arguments),
            (this.$super = r.extend({}, this)),
            e.apply(this, arguments) || this
          );
        }),
          r.extend(t.Scene, i),
          (t.Scene.prototype = i.prototype),
          (t.Scene.prototype.constructor = t.Scene);
      }),
      (t.Event = function(t, e, i, n) {
        for (var r in (n = n || {})) this[r] = n[r];
        return (
          (this.type = t),
          (this.target = this.currentTarget = i),
          (this.namespace = e || ""),
          (this.timeStamp = this.timestamp = Date.now()),
          this
        );
      });
    var r = (t._util = (function(t) {
      var e,
        i = {},
        n = function(t) {
          return parseFloat(t) || 0;
        },
        r = function(e) {
          return e.currentStyle ? e.currentStyle : t.getComputedStyle(e);
        },
        s = function(e, i, s, o) {
          if ((i = i === document ? t : i) === t) o = !1;
          else if (!f.DomElement(i)) return 0;
          e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
          var a =
            (s
              ? i["offset" + e] || i["outer" + e]
              : i["client" + e] || i["inner" + e]) || 0;
          if (s && o) {
            var l = r(i);
            a +=
              "Height" === e
                ? n(l.marginTop) + n(l.marginBottom)
                : n(l.marginLeft) + n(l.marginRight);
          }
          return a;
        },
        o = function(t) {
          return t
            .replace(/^[^a-z]+([a-z])/g, "$1")
            .replace(/-([a-z])/g, function(t) {
              return t[1].toUpperCase();
            });
        };
      (i.extend = function(t) {
        for (t = t || {}, e = 1; e < arguments.length; e++)
          if (arguments[e])
            for (var i in arguments[e])
              arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
        return t;
      }),
        (i.isMarginCollapseType = function(t) {
          return (
            ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) >
            -1
          );
        });
      var a = 0,
        l = ["ms", "moz", "webkit", "o"],
        u = t.requestAnimationFrame,
        h = t.cancelAnimationFrame;
      for (e = 0; !u && e < l.length; ++e)
        (u = t[l[e] + "RequestAnimationFrame"]),
          (h =
            t[l[e] + "CancelAnimationFrame"] ||
            t[l[e] + "CancelRequestAnimationFrame"]);
      u ||
        (u = function(e) {
          var i = new Date().getTime(),
            n = Math.max(0, 16 - (i - a)),
            r = t.setTimeout(function() {
              e(i + n);
            }, n);
          return (a = i + n), r;
        }),
        h ||
          (h = function(e) {
            t.clearTimeout(e);
          }),
        (i.rAF = u.bind(t)),
        (i.cAF = h.bind(t));
      var c = ["error", "warn", "log"],
        p = t.console || {};
      for (p.log = p.log || function() {}, e = 0; e < c.length; e++) {
        var d = c[e];
        p[d] || (p[d] = p.log);
      }
      i.log = function(t) {
        (t > c.length || t <= 0) && (t = c.length);
        var e = new Date(),
          i =
            ("0" + e.getHours()).slice(-2) +
            ":" +
            ("0" + e.getMinutes()).slice(-2) +
            ":" +
            ("0" + e.getSeconds()).slice(-2) +
            ":" +
            ("00" + e.getMilliseconds()).slice(-3),
          n = c[t - 1],
          r = Array.prototype.splice.call(arguments, 1),
          s = Function.prototype.bind.call(p[n], p);
        r.unshift(i), s.apply(p, r);
      };
      var f = (i.type = function(t) {
        return Object.prototype.toString
          .call(t)
          .replace(/^\[object (.+)\]$/, "$1")
          .toLowerCase();
      });
      (f.String = function(t) {
        return "string" === f(t);
      }),
        (f.Function = function(t) {
          return "function" === f(t);
        }),
        (f.Array = function(t) {
          return Array.isArray(t);
        }),
        (f.Number = function(t) {
          return !f.Array(t) && t - parseFloat(t) + 1 >= 0;
        }),
        (f.DomElement = function(t) {
          return "object" == typeof HTMLElement
            ? t instanceof HTMLElement
            : t &&
                "object" == typeof t &&
                null !== t &&
                1 === t.nodeType &&
                "string" == typeof t.nodeName;
        });
      var m = (i.get = {});
      return (
        (m.elements = function(e) {
          var i = [];
          if (f.String(e))
            try {
              e = document.querySelectorAll(e);
            } catch (o) {
              return i;
            }
          if ("nodelist" === f(e) || f.Array(e))
            for (var n = 0, r = (i.length = e.length); n < r; n++) {
              var s = e[n];
              i[n] = f.DomElement(s) ? s : m.elements(s);
            }
          else (f.DomElement(e) || e === document || e === t) && (i = [e]);
          return i;
        }),
        (m.scrollTop = function(e) {
          return e && "number" == typeof e.scrollTop
            ? e.scrollTop
            : t.pageYOffset || 0;
        }),
        (m.scrollLeft = function(e) {
          return e && "number" == typeof e.scrollLeft
            ? e.scrollLeft
            : t.pageXOffset || 0;
        }),
        (m.width = function(t, e, i) {
          return s("width", t, e, i);
        }),
        (m.height = function(t, e, i) {
          return s("height", t, e, i);
        }),
        (m.offset = function(t, e) {
          var i = {top: 0, left: 0};
          if (t && t.getBoundingClientRect) {
            var n = t.getBoundingClientRect();
            (i.top = n.top),
              (i.left = n.left),
              e || ((i.top += m.scrollTop()), (i.left += m.scrollLeft()));
          }
          return i;
        }),
        (i.addClass = function(t, e) {
          e && (t.classList ? t.classList.add(e) : (t.className += " " + e));
        }),
        (i.removeClass = function(t, e) {
          e &&
            (t.classList
              ? t.classList.remove(e)
              : (t.className = t.className.replace(
                  new RegExp(
                    "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                )));
        }),
        (i.css = function(t, e) {
          if (f.String(e)) return r(t)[o(e)];
          if (f.Array(e)) {
            var i = {},
              n = r(t);
            return (
              e.forEach(function(t) {
                i[t] = n[o(t)];
              }),
              i
            );
          }
          for (var s in e) {
            var a = e[s];
            a == parseFloat(a) && (a += "px"), (t.style[o(s)] = a);
          }
        }),
        i
      );
    })(window || {}));
    return (
      (t.Scene.prototype.addIndicators = function() {
        return (
          t._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"
          ),
          this
        );
      }),
      (t.Scene.prototype.removeIndicators = function() {
        return (
          t._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"
          ),
          this
        );
      }),
      (t.Scene.prototype.setTween = function() {
        return (
          t._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"
          ),
          this
        );
      }),
      (t.Scene.prototype.removeTween = function() {
        return (
          t._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"
          ),
          this
        );
      }),
      (t.Scene.prototype.setVelocity = function() {
        return (
          t._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"
          ),
          this
        );
      }),
      (t.Scene.prototype.removeVelocity = function() {
        return (
          t._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"
          ),
          this
        );
      }),
      t
    );
  }),
  /*!
   * ScrollMagic v2.0.6 (2018-10-08)
   * The javascript library for magical scroll interactions.
   * (c) 2018 Jan Paepke (@janpaepke)
   * Project Website: http://scrollmagic.io
   *
   * @version 2.0.6
   * @license Dual licensed under MIT license and GPL.
   * @author Jan Paepke - e-mail@janpaepke.de
   *
   * @file ScrollMagic GSAP Animation Plugin.
   *
   * requires: GSAP ~1.14
   * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
   * Greensock License info at http://www.greensock.com/licensing/
   */
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e)
      : "object" == typeof exports
      ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax))
      : e(
          t.ScrollMagic || (t.jQuery && t.jQuery.ScrollMagic),
          t.TweenMax || t.TweenLite,
          t.TimelineMax || t.TimelineLite
        );
  })(this, function(t, e, i) {
    "use strict";
    var n = "animation.gsap",
      r = window.console || {},
      s = Function.prototype.bind.call(r.error || r.log || function() {}, r);
    t ||
      s(
        "(" +
          n +
          ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."
      ),
      e ||
        s(
          "(" +
            n +
            ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."
        ),
      t.Scene.addOption("tweenChanges", !1, function(t) {
        return !!t;
      }),
      t.Scene.extend(function() {
        var t,
          r = this,
          s = function() {
            r._log &&
              (Array.prototype.splice.call(
                arguments,
                1,
                0,
                "(" + n + ")",
                "->"
              ),
              r._log.apply(this, arguments));
          };
        r.on("progress.plugin_gsap", function() {
          o();
        }),
          r.on("destroy.plugin_gsap", function(t) {
            r.removeTween(t.reset);
          });
        var o = function() {
          if (t) {
            var e = r.progress(),
              i = r.state();
            t.repeat && -1 === t.repeat()
              ? "DURING" === i && t.paused()
                ? t.play()
                : "DURING" === i || t.paused() || t.pause()
              : e != t.progress() &&
                (0 === r.duration()
                  ? e > 0
                    ? t.play()
                    : t.reverse()
                  : r.tweenChanges() && t.tweenTo
                  ? t.tweenTo(e * t.duration())
                  : t.progress(e).pause());
          }
        };
        (r.setTween = function(n, a, l) {
          var u;
          arguments.length > 1 &&
            (arguments.length < 3 && ((l = a), (a = 1)), (n = e.to(n, a, l)));
          try {
            (u = i ? new i({smoothChildTiming: !0}).add(n) : n).pause();
          } catch (y) {
            return (
              s(
                1,
                "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"
              ),
              r
            );
          }
          if (
            (t && r.removeTween(),
            (t = u),
            n.repeat && -1 === n.repeat() && (t.repeat(-1), t.yoyo(n.yoyo())),
            r.tweenChanges() &&
              !t.tweenTo &&
              s(
                2,
                "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."
              ),
            t && r.controller() && r.triggerElement() && r.loglevel() >= 2)
          ) {
            var h = e.getTweensOf(r.triggerElement()),
              c = r.controller().info("vertical");
            h.forEach(function(t) {
              var e = t.vars.css || t.vars;
              if (
                c
                  ? e.top !== undefined || e.bottom !== undefined
                  : e.left !== undefined || e.right !== undefined
              )
                return (
                  s(
                    2,
                    "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"
                  ),
                  !1
                );
            });
          }
          if (parseFloat(TweenLite.version) >= 1.14)
            for (
              var p,
                d,
                f = t.getChildren ? t.getChildren(!0, !0, !1) : [t],
                m = function() {
                  s(
                    2,
                    "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another"
                  );
                },
                g = 0;
              g < f.length;
              g++
            )
              (p = f[g]),
                d !== m &&
                  ((d = p.vars.onOverwrite),
                  (p.vars.onOverwrite = function() {
                    d && d.apply(this, arguments), m.apply(this, arguments);
                  }));
          return s(3, "added tween"), o(), r;
        }),
          (r.removeTween = function(e) {
            return (
              t &&
                (e && t.progress(0).pause(),
                t.kill(),
                (t = undefined),
                s(3, "removed tween (reset: " + (e ? "true" : "false") + ")")),
              r
            );
          });
      });
  }),
  $(document).on("turbolinks:load", function() {
    $(".technologies-carousel").owlCarousel({
      loop: !0,
      items: 5,
      autoplay: !0,
      dots: !1,
      autoWidth: !0,
      autoplayTimeout: 2e3
    }),
      $(".case-studies-carousel").owlCarousel({
        margin: 30,
        dots: !0,
        autoWidth: !1,
        responsive: {0: {items: 1}, 768: {items: 2}, 1200: {items: 3}}
      }),
      $(".testimonials-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: !0,
        autoWidth: !1,
        autoplay: !1,
        loop: !1,
        responsive: {0: {items: 1}, 768: {items: 2}, 1200: {items: 3}}
      }),
      $(".workation-carousel").owlCarousel({
        nav: !0,
        navText: ["", ""],
        loop: !0,
        items: 8,
        dots: !1,
        autoWidth: !0,
        autoplay: !0
      }),
      $(".office-carousel").owlCarousel({
        nav: !0,
        navText: ["", ""],
        loop: !0,
        items: 8,
        dots: !1,
        autoWidth: !0,
        autoplay: !0
      });
  }),
  $(document).on("turbolinks:load", function() {
    function t(t) {
      for (var e = 1; e <= t; e++)
        $(".results-section #step" + e).addClass("active");
      $(".results-section #stepDesc" + t).addClass("active");
    }
    function e() {
      $(".results-section .step").removeClass("active"),
        $(".results-section .step-desc").removeClass("active");
    }
    $(".results-section .step .circle").hover(function() {
      e(
        $(this)
          .parent()
          .attr("id")
          .slice(-1)
      ),
        t(
          $(this)
            .parent()
            .attr("id")
            .slice(-1)
        );
    });
  }),
  $(document).on("turbolinks:load", function() {
    var t = function(t, e) {
      var i = $(`${e}-form`).serializeArray(),
        n = new FormData();
      $(i).each(function(t, e) {
        n.append(e.name, e.value);
      }),
        $(`${e}-form input[type='file']`)[0] &&
          $(`${e}-form input[type='file']`)[0].files[0] &&
          n.append(
            $(`${e}-form input[type='file']`)[0].name,
            $(`${e}-form input[type='file']`)[0].files[0]
          ),
        $.ajax({
          url: t,
          type: "POST",
          data: n,
          processData: !1,
          contentType: !1,
          success: function() {
            return (
              $(`${e}-form`)[0].reset(),
              reset_errors(`${e}-form`),
              $("label[for='file']").html(
                "<i class='fa fa-paperclip'/> Browse"
              ),
              reset_errors(`${e}-form`),
              "#careers-contact" === e
                ? ($(`${e}-modal`).modal("toggle"), $(".success-modal").modal())
                : $(`${e}-modal`).modal()
            );
          },
          error: function(t) {
            reset_errors(`${e}-form`);
            var i = t.responseJSON.message;
            Object.keys(i).forEach(function(t) {
              trigger_errors(t, i[t][0]);
            });
          }
        });
    };
    $("#contact-form button").click(function() {
      return (
        $("#contact-form")
          .parsley()
          .validate() && t("/user_inquiries", "#contact"),
        !1
      );
    }),
      $("#careers-contact-form button").click(function() {
        return (
          $("#careers-contact-form")
            .parsley()
            .validate() && t("/user_inquiries", "#careers-contact"),
          !1
        );
      }),
      $(".contact-small-section button").click(function() {
        $("#contact-modal").modal();
      });
  });
var trigger_errors = function(t, e) {
    var i = get_input_selector(t),
      n = `.error-message[data-input='${t}']`;
    $(i).addClass("invalid"), $(n).addClass("active"), $(n).text(e);
  },
  reset_errors = function(t) {
    var e = ".error-message";
    $(`${t} input, ${t} label`).each(function(t, e) {
      $(e).removeClass("invalid");
    }),
      $(`${t} ${e}`).each(function(t, e) {
        $(e).removeClass("active");
      });
  },
  get_input_selector = function(t) {
    var e = "";
    switch (t) {
      case "file":
        e = "label[for='file']";
        break;
      default:
        e = `input[name*='[${t}]']`;
    }
    return e;
  };
$(document).on("turbolinks:load", function() {
  $(".technology-radio").on("change", function(t) {
    return "radio11" === t.target.id
      ? $("#input11").css("display", "inline-block")
      : $("#input11").css("display", "none");
  }),
    $(".referral-radio").on("change", function(t) {
      return "radio17" === t.target.id
        ? $("#input17").css("display", "inline-block")
        : $("#input17").css("display", "none");
    });
});
var disqus_config = function() {
  var t = $("#disqus_thread").data("disqus-id");
  this.page.identifier = t;
};
$(document).on("turbolinks:load", function() {
  if ($("#blog-post").length) {
    var t = document,
      e = t.createElement("script");
    (e.src = "https://themasters.disqus.com/embed.js"),
      e.setAttribute("data-timestamp", +new Date()),
      (t.head || t.body).appendChild(e);
  }
});
const icon = "<i class='fa fa-paperclip'/>";
$(document).on("turbolinks:load", function() {
  $("input:file").change(function() {
    var t = prepare_file_name(this),
      e = prepare_label(t);
    $("label[for='file']").html(e);
  }),
    $("#clear-btn").on("click", function() {
      var t = $("input:file"),
        e = $("label[for='file']").data("label"),
        i = prepare_label(e);
      t.replaceWith(t.val("").clone(!0)),
        $("label[for='file']").html(i),
        $("#clear-btn").addClass("hidden");
    }),
    $("input:file").on("change", function() {
      $("#clear-btn").removeClass("hidden");
    });
});
var prepare_file_name = function(t) {
    var e = extract_name(t);
    return $(window).width() >= 1200 ? trim_name(e, 30) : trim_name(e, 15);
  },
  prepare_label = function(t) {
    return `${icon}${t}`;
  },
  extract_name = function(t) {
    return $(
      $(t)
        .val()
        .split("\\")
    ).last()[0];
  },
  trim_name = function(t, e) {
    return t.length > e ? `${t.substr(0, e)}...` : t;
  };
$(document).on("turbolinks:load", function() {
  var t = new ScrollMagic.Controller(),
    e = TweenMax.to(".stripes-top .desktop .stripe", 10, {
      top: "-=400",
      right: "-=235"
    });
  new ScrollMagic.Scene({
    triggerElement: ".stripes-top .desktop .trigger",
    duration: "100%"
  })
    .setTween(e)
    .addTo(t);
  var i = new ScrollMagic.Controller(),
    n = TweenMax.to(".stripes-bottom .desktop .stripe", 10, {
      bottom: "+=400",
      left: "+=235"
    });
  new ScrollMagic.Scene({
    triggerElement: ".stripes-bottom .desktop .trigger",
    duration: "100%"
  })
    .setTween(n)
    .addTo(i);
  var r = new ScrollMagic.Controller();
  if ($(".intro-image img").length) {
    var s = TweenMax.to(".intro-image img", 10, {top: "+=100"});
    new ScrollMagic.Scene({
      triggerElement: ".intro-image img",
      duration: "100%"
    })
      .setTween(s)
      .addTo(r);
  }
  var o = new ScrollMagic.Controller(),
    a = TweenMax.to(".stripes-top .mobile .stripe", 1, {
      top: "-=600",
      right: "-=335"
    });
  new ScrollMagic.Scene({
    triggerElement: ".stripes-top .mobile .trigger",
    duration: "100%"
  })
    .setTween(a)
    .addTo(o);
}),
  $(document).on("turbolinks:load", function() {
    $("a.offer-link").on("click", function() {
      var t = $(this).attr("href");
      window.location = t;
    });
  }),
  (function(t, e) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.ClipboardJS = e())
      : (t.ClipboardJS = e());
  })(this, function() {
    return (function(t) {
      function e(n) {
        if (i[n]) return i[n].exports;
        var r = (i[n] = {i: n, l: !1, exports: {}});
        return t[n].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
      }
      var i = {};
      return (
        (e.m = t),
        (e.c = i),
        (e.d = function(t, i, n) {
          e.o(t, i) || Object.defineProperty(t, i, {enumerable: !0, get: n});
        }),
        (e.r = function(t) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}),
            Object.defineProperty(t, "__esModule", {value: !0});
        }),
        (e.t = function(t, i) {
          if ((1 & i && (t = e(t)), 8 & i)) return t;
          if (4 & i && "object" == typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if (
            (e.r(n),
            Object.defineProperty(n, "default", {enumerable: !0, value: t}),
            2 & i && "string" != typeof t)
          )
            for (var r in t)
              e.d(
                n,
                r,
                function(e) {
                  return t[e];
                }.bind(null, r)
              );
          return n;
        }),
        (e.n = function(t) {
          var i =
            t && t.__esModule
              ? function() {
                  return t["default"];
                }
              : function() {
                  return t;
                };
          return e.d(i, "a", i), i;
        }),
        (e.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (e.p = ""),
        e((e.s = 0))
      );
    })([
      function(t, e, i) {
        "use strict";
        function n(t) {
          return t && t.__esModule ? t : {default: t};
        }
        function r(t, e) {
          var i = "data-clipboard-" + t;
          if (e.hasAttribute(i)) return e.getAttribute(i);
        }
        var s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          o = (function() {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function(e, i, n) {
              return i && t(e.prototype, i), n && t(e, n), e;
            };
          })(),
          a = n(i(1)),
          l = n(i(3)),
          u = n(i(4)),
          h = (function() {
            function t(e, i) {
              !(function(e) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this);
              var n = (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
              return n.resolveOptions(i), n.listenClick(e), n;
            }
            return (
              (function(t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof e
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, e)
                      : (t.__proto__ = e));
              })(t, l["default"]),
              o(
                t,
                [
                  {
                    key: "resolveOptions",
                    value: function() {
                      var t =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      (this.action =
                        "function" == typeof t.action
                          ? t.action
                          : this.defaultAction),
                        (this.target =
                          "function" == typeof t.target
                            ? t.target
                            : this.defaultTarget),
                        (this.text =
                          "function" == typeof t.text
                            ? t.text
                            : this.defaultText),
                        (this.container =
                          "object" === s(t.container)
                            ? t.container
                            : document.body);
                    }
                  },
                  {
                    key: "listenClick",
                    value: function(t) {
                      var e = this;
                      this.listener = (0, u["default"])(t, "click", function(
                        t
                      ) {
                        return e.onClick(t);
                      });
                    }
                  },
                  {
                    key: "onClick",
                    value: function(t) {
                      var e = t.delegateTarget || t.currentTarget;
                      this.clipboardAction && (this.clipboardAction = null),
                        (this.clipboardAction = new a["default"]({
                          action: this.action(e),
                          target: this.target(e),
                          text: this.text(e),
                          container: this.container,
                          trigger: e,
                          emitter: this
                        }));
                    }
                  },
                  {
                    key: "defaultAction",
                    value: function(t) {
                      return r("action", t);
                    }
                  },
                  {
                    key: "defaultTarget",
                    value: function(t) {
                      var e = r("target", t);
                      if (e) return document.querySelector(e);
                    }
                  },
                  {
                    key: "defaultText",
                    value: function(t) {
                      return r("text", t);
                    }
                  },
                  {
                    key: "destroy",
                    value: function() {
                      this.listener.destroy(),
                        this.clipboardAction &&
                          (this.clipboardAction.destroy(),
                          (this.clipboardAction = null));
                    }
                  }
                ],
                [
                  {
                    key: "isSupported",
                    value: function() {
                      var t =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : ["copy", "cut"],
                        e = "string" == typeof t ? [t] : t,
                        i = !!document.queryCommandSupported;
                      return (
                        e.forEach(function(t) {
                          i = i && !!document.queryCommandSupported(t);
                        }),
                        i
                      );
                    }
                  }
                ]
              ),
              t
            );
          })();
        t.exports = h;
      },
      function(t, e, i) {
        "use strict";
        var n,
          r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          s = (function() {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function(e, i, n) {
              return i && t(e.prototype, i), n && t(e, n), e;
            };
          })(),
          o = (n = i(2)) && n.__esModule ? n : {default: n},
          a = (function() {
            function e(t) {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                this.resolveOptions(t),
                this.initSelection();
            }
            return (
              s(e, [
                {
                  key: "resolveOptions",
                  value: function() {
                    var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.action = t.action),
                      (this.container = t.container),
                      (this.emitter = t.emitter),
                      (this.target = t.target),
                      (this.text = t.text),
                      (this.trigger = t.trigger),
                      (this.selectedText = "");
                  }
                },
                {
                  key: "initSelection",
                  value: function() {
                    this.text
                      ? this.selectFake()
                      : this.target && this.selectTarget();
                  }
                },
                {
                  key: "selectFake",
                  value: function() {
                    var t = this,
                      e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(),
                      (this.fakeHandlerCallback = function() {
                        return t.removeFake();
                      }),
                      (this.fakeHandler =
                        this.container.addEventListener(
                          "click",
                          this.fakeHandlerCallback
                        ) || !0),
                      (this.fakeElem = document.createElement("textarea")),
                      (this.fakeElem.style.fontSize = "12pt"),
                      (this.fakeElem.style.border = "0"),
                      (this.fakeElem.style.padding = "0"),
                      (this.fakeElem.style.margin = "0"),
                      (this.fakeElem.style.position = "absolute"),
                      (this.fakeElem.style[e ? "right" : "left"] = "-9999px");
                    var i =
                      window.pageYOffset || document.documentElement.scrollTop;
                    (this.fakeElem.style.top = i + "px"),
                      this.fakeElem.setAttribute("readonly", ""),
                      (this.fakeElem.value = this.text),
                      this.container.appendChild(this.fakeElem),
                      (this.selectedText = (0, o["default"])(this.fakeElem)),
                      this.copyText();
                  }
                },
                {
                  key: "removeFake",
                  value: function() {
                    this.fakeHandler &&
                      (this.container.removeEventListener(
                        "click",
                        this.fakeHandlerCallback
                      ),
                      (this.fakeHandler = null),
                      (this.fakeHandlerCallback = null)),
                      this.fakeElem &&
                        (this.container.removeChild(this.fakeElem),
                        (this.fakeElem = null));
                  }
                },
                {
                  key: "selectTarget",
                  value: function() {
                    (this.selectedText = (0, o["default"])(this.target)),
                      this.copyText();
                  }
                },
                {
                  key: "copyText",
                  value: function() {
                    var e = void 0;
                    try {
                      e = document.execCommand(this.action);
                    } catch (t) {
                      e = !1;
                    }
                    this.handleResult(e);
                  }
                },
                {
                  key: "handleResult",
                  value: function(t) {
                    this.emitter.emit(t ? "success" : "error", {
                      action: this.action,
                      text: this.selectedText,
                      trigger: this.trigger,
                      clearSelection: this.clearSelection.bind(this)
                    });
                  }
                },
                {
                  key: "clearSelection",
                  value: function() {
                    this.trigger && this.trigger.focus(),
                      window.getSelection().removeAllRanges();
                  }
                },
                {
                  key: "destroy",
                  value: function() {
                    this.removeFake();
                  }
                },
                {
                  key: "action",
                  set: function() {
                    var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : "copy";
                    if (
                      ((this._action = t),
                      "copy" !== this._action && "cut" !== this._action)
                    )
                      throw new Error(
                        'Invalid "action" value, use either "copy" or "cut"'
                      );
                  },
                  get: function() {
                    return this._action;
                  }
                },
                {
                  key: "target",
                  set: function(t) {
                    if (void 0 !== t) {
                      if (
                        !t ||
                        "object" !== (void 0 === t ? "undefined" : r(t)) ||
                        1 !== t.nodeType
                      )
                        throw new Error(
                          'Invalid "target" value, use a valid Element'
                        );
                      if ("copy" === this.action && t.hasAttribute("disabled"))
                        throw new Error(
                          'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                        );
                      if (
                        "cut" === this.action &&
                        (t.hasAttribute("readonly") ||
                          t.hasAttribute("disabled"))
                      )
                        throw new Error(
                          'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                        );
                      this._target = t;
                    }
                  },
                  get: function() {
                    return this._target;
                  }
                }
              ]),
              e
            );
          })();
        t.exports = a;
      },
      function(t) {
        t.exports = function(t) {
          var e;
          if ("SELECT" === t.nodeName) t.focus(), (e = t.value);
          else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
            var i = t.hasAttribute("readonly");
            i || t.setAttribute("readonly", ""),
              t.select(),
              t.setSelectionRange(0, t.value.length),
              i || t.removeAttribute("readonly"),
              (e = t.value);
          } else {
            t.hasAttribute("contenteditable") && t.focus();
            var n = window.getSelection(),
              r = document.createRange();
            r.selectNodeContents(t),
              n.removeAllRanges(),
              n.addRange(r),
              (e = n.toString());
          }
          return e;
        };
      },
      function(t) {
        function e() {}
        (e.prototype = {
          on: function(t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({fn: e, ctx: i}), this;
          },
          once: function(t, e, i) {
            function n() {
              r.off(t, n), e.apply(i, arguments);
            }
            var r = this;
            return (n._ = e), this.on(t, n, i);
          },
          emit: function(t) {
            for (
              var e = [].slice.call(arguments, 1),
                i = ((this.e || (this.e = {}))[t] || []).slice(),
                n = 0,
                r = i.length;
              n < r;
              n++
            )
              i[n].fn.apply(i[n].ctx, e);
            return this;
          },
          off: function(t, e) {
            var i = this.e || (this.e = {}),
              n = i[t],
              r = [];
            if (n && e)
              for (var s = 0, o = n.length; s < o; s++)
                n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
            return r.length ? (i[t] = r) : delete i[t], this;
          }
        }),
          (t.exports = e);
      },
      function(t, e, i) {
        var n = i(5),
          r = i(6);
        t.exports = function(t, e, i) {
          if (!t && !e && !i) throw new Error("Missing required arguments");
          if (!n.string(e))
            throw new TypeError("Second argument must be a String");
          if (!n.fn(i))
            throw new TypeError("Third argument must be a Function");
          if (n.node(t))
            return (
              (p = e),
              (d = i),
              (c = t).addEventListener(p, d),
              {
                destroy: function() {
                  c.removeEventListener(p, d);
                }
              }
            );
          if (n.nodeList(t))
            return (
              (l = t),
              (u = e),
              (h = i),
              Array.prototype.forEach.call(l, function(t) {
                t.addEventListener(u, h);
              }),
              {
                destroy: function() {
                  Array.prototype.forEach.call(l, function(t) {
                    t.removeEventListener(u, h);
                  });
                }
              }
            );
          if (n.string(t))
            return (s = t), (o = e), (a = i), r(document.body, s, o, a);
          throw new TypeError(
            "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
          );
          var s, o, a, l, u, h, c, p, d;
        };
      },
      function(t, e) {
        (e.node = function(t) {
          return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
        }),
          (e.nodeList = function(t) {
            var i = Object.prototype.toString.call(t);
            return (
              void 0 !== t &&
              ("[object NodeList]" === i || "[object HTMLCollection]" === i) &&
              "length" in t &&
              (0 === t.length || e.node(t[0]))
            );
          }),
          (e.string = function(t) {
            return "string" == typeof t || t instanceof String;
          }),
          (e.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t);
          });
      },
      function(t, e, i) {
        function n(t, e, i, n, s) {
          var o = function(t, e, i, n) {
            return function(i) {
              (i.delegateTarget = r(i.target, e)),
                i.delegateTarget && n.call(t, i);
            };
          }.apply(this, arguments);
          return (
            t.addEventListener(i, o, s),
            {
              destroy: function() {
                t.removeEventListener(i, o, s);
              }
            }
          );
        }
        var r = i(7);
        t.exports = function(t, e, i, r, s) {
          return "function" == typeof t.addEventListener
            ? n.apply(null, arguments)
            : "function" == typeof i
            ? n.bind(null, document).apply(null, arguments)
            : ("string" == typeof t && (t = document.querySelectorAll(t)),
              Array.prototype.map.call(t, function(t) {
                return n(t, e, i, r, s);
              }));
        };
      },
      function(t) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
          var e = Element.prototype;
          e.matches =
            e.matchesSelector ||
            e.mozMatchesSelector ||
            e.msMatchesSelector ||
            e.oMatchesSelector ||
            e.webkitMatchesSelector;
        }
        t.exports = function(t, e) {
          for (; t && 9 !== t.nodeType; ) {
            if ("function" == typeof t.matches && t.matches(e)) return t;
            t = t.parentNode;
          }
        };
      }
    ]);
  }),
  $(document).on("turbolinks:load", function() {
    new ClipboardJS(".copy-button");
  }),
  /*!
   *
   *   typed.js - A JavaScript Typing Animation Library
   *   Author: Matt Boldt <me@mattboldt.com>
   *   Version: v2.0.9
   *   Url: https://github.com/mattboldt/typed.js
   *   License(s): MIT
   *
   */
  (function(t, e) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.Typed = e())
      : (t.Typed = e());
  })(this, function() {
    return (function(t) {
      function e(n) {
        if (i[n]) return i[n].exports;
        var r = (i[n] = {exports: {}, id: n, loaded: !1});
        return (
          t[n].call(r.exports, r, r.exports, e), (r.loaded = !0), r.exports
        );
      }
      var i = {};
      return (e.m = t), (e.c = i), (e.p = ""), e(0);
    })([
      function(t, e, i) {
        "use strict";
        function n(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = (function() {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function(e, i, n) {
              return i && t(e.prototype, i), n && t(e, n), e;
            };
          })(),
          s = i(1),
          o = i(3),
          a = (function() {
            function t(e, i) {
              n(this, t), s.initializer.load(this, i, e), this.begin();
            }
            return (
              r(t, [
                {
                  key: "toggle",
                  value: function() {
                    this.pause.status ? this.start() : this.stop();
                  }
                },
                {
                  key: "stop",
                  value: function() {
                    this.typingComplete ||
                      this.pause.status ||
                      (this.toggleBlinking(!0),
                      (this.pause.status = !0),
                      this.options.onStop(this.arrayPos, this));
                  }
                },
                {
                  key: "start",
                  value: function() {
                    this.typingComplete ||
                      (this.pause.status &&
                        ((this.pause.status = !1),
                        this.pause.typewrite
                          ? this.typewrite(
                              this.pause.curString,
                              this.pause.curStrPos
                            )
                          : this.backspace(
                              this.pause.curString,
                              this.pause.curStrPos
                            ),
                        this.options.onStart(this.arrayPos, this)));
                  }
                },
                {
                  key: "destroy",
                  value: function() {
                    this.reset(!1), this.options.onDestroy(this);
                  }
                },
                {
                  key: "reset",
                  value: function() {
                    var t =
                      arguments.length <= 0 ||
                      arguments[0] === undefined ||
                      arguments[0];
                    clearInterval(this.timeout),
                      this.replaceText(""),
                      this.cursor &&
                        this.cursor.parentNode &&
                        (this.cursor.parentNode.removeChild(this.cursor),
                        (this.cursor = null)),
                      (this.strPos = 0),
                      (this.arrayPos = 0),
                      (this.curLoop = 0),
                      t &&
                        (this.insertCursor(),
                        this.options.onReset(this),
                        this.begin());
                  }
                },
                {
                  key: "begin",
                  value: function() {
                    var t = this;
                    (this.typingComplete = !1),
                      this.shuffleStringsIfNeeded(this),
                      this.insertCursor(),
                      this.bindInputFocusEvents && this.bindFocusEvents(),
                      (this.timeout = setTimeout(function() {
                        t.currentElContent && 0 !== t.currentElContent.length
                          ? t.backspace(
                              t.currentElContent,
                              t.currentElContent.length
                            )
                          : t.typewrite(
                              t.strings[t.sequence[t.arrayPos]],
                              t.strPos
                            );
                      }, this.startDelay));
                  }
                },
                {
                  key: "typewrite",
                  value: function(t, e) {
                    var i = this;
                    this.fadeOut &&
                      this.el.classList.contains(this.fadeOutClass) &&
                      (this.el.classList.remove(this.fadeOutClass),
                      this.cursor &&
                        this.cursor.classList.remove(this.fadeOutClass));
                    var n = this.humanizer(this.typeSpeed),
                      r = 1;
                    !0 !== this.pause.status
                      ? (this.timeout = setTimeout(function() {
                          e = o.htmlParser.typeHtmlChars(t, e, i);
                          var n = 0,
                            s = t.substr(e);
                          if ("^" === s.charAt(0) && /^\^\d+/.test(s)) {
                            var a = 1;
                            (a += (s = /\d+/.exec(s)[0]).length),
                              (n = parseInt(s)),
                              (i.temporaryPause = !0),
                              i.options.onTypingPaused(i.arrayPos, i),
                              (t = t.substring(0, e) + t.substring(e + a)),
                              i.toggleBlinking(!0);
                          }
                          if ("`" === s.charAt(0)) {
                            for (
                              ;
                              "`" !== t.substr(e + r).charAt(0) &&
                              !(e + ++r > t.length);

                            );
                            var l = t.substring(0, e),
                              u = t.substring(l.length + 1, e + r),
                              h = t.substring(e + r + 1);
                            (t = l + u + h), r--;
                          }
                          i.timeout = setTimeout(function() {
                            i.toggleBlinking(!1),
                              e >= t.length
                                ? i.doneTyping(t, e)
                                : i.keepTyping(t, e, r),
                              i.temporaryPause &&
                                ((i.temporaryPause = !1),
                                i.options.onTypingResumed(i.arrayPos, i));
                          }, n);
                        }, n))
                      : this.setPauseStatus(t, e, !0);
                  }
                },
                {
                  key: "keepTyping",
                  value: function(t, e, i) {
                    0 === e &&
                      (this.toggleBlinking(!1),
                      this.options.preStringTyped(this.arrayPos, this)),
                      (e += i);
                    var n = t.substr(0, e);
                    this.replaceText(n), this.typewrite(t, e);
                  }
                },
                {
                  key: "doneTyping",
                  value: function(t, e) {
                    var i = this;
                    this.options.onStringTyped(this.arrayPos, this),
                      this.toggleBlinking(!0),
                      (this.arrayPos === this.strings.length - 1 &&
                        (this.complete(),
                        !1 === this.loop || this.curLoop === this.loopCount)) ||
                        (this.timeout = setTimeout(function() {
                          i.backspace(t, e);
                        }, this.backDelay));
                  }
                },
                {
                  key: "backspace",
                  value: function(t, e) {
                    var i = this;
                    if (!0 !== this.pause.status) {
                      if (this.fadeOut) return this.initFadeOut();
                      this.toggleBlinking(!1);
                      var n = this.humanizer(this.backSpeed);
                      this.timeout = setTimeout(function() {
                        e = o.htmlParser.backSpaceHtmlChars(t, e, i);
                        var n = t.substr(0, e);
                        if ((i.replaceText(n), i.smartBackspace)) {
                          var r = i.strings[i.arrayPos + 1];
                          r && n === r.substr(0, e)
                            ? (i.stopNum = e)
                            : (i.stopNum = 0);
                        }
                        e > i.stopNum
                          ? (e--, i.backspace(t, e))
                          : e <= i.stopNum &&
                            (i.arrayPos++,
                            i.arrayPos === i.strings.length
                              ? ((i.arrayPos = 0),
                                i.options.onLastStringBackspaced(),
                                i.shuffleStringsIfNeeded(),
                                i.begin())
                              : i.typewrite(
                                  i.strings[i.sequence[i.arrayPos]],
                                  e
                                ));
                      }, n);
                    } else this.setPauseStatus(t, e, !0);
                  }
                },
                {
                  key: "complete",
                  value: function() {
                    this.options.onComplete(this),
                      this.loop ? this.curLoop++ : (this.typingComplete = !0);
                  }
                },
                {
                  key: "setPauseStatus",
                  value: function(t, e, i) {
                    (this.pause.typewrite = i),
                      (this.pause.curString = t),
                      (this.pause.curStrPos = e);
                  }
                },
                {
                  key: "toggleBlinking",
                  value: function(t) {
                    this.cursor &&
                      (this.pause.status ||
                        (this.cursorBlinking !== t &&
                          ((this.cursorBlinking = t),
                          t
                            ? this.cursor.classList.add("typed-cursor--blink")
                            : this.cursor.classList.remove(
                                "typed-cursor--blink"
                              ))));
                  }
                },
                {
                  key: "humanizer",
                  value: function(t) {
                    return Math.round((Math.random() * t) / 2) + t;
                  }
                },
                {
                  key: "shuffleStringsIfNeeded",
                  value: function() {
                    this.shuffle &&
                      (this.sequence = this.sequence.sort(function() {
                        return Math.random() - 0.5;
                      }));
                  }
                },
                {
                  key: "initFadeOut",
                  value: function() {
                    var t = this;
                    return (
                      (this.el.className += " " + this.fadeOutClass),
                      this.cursor &&
                        (this.cursor.className += " " + this.fadeOutClass),
                      setTimeout(function() {
                        t.arrayPos++,
                          t.replaceText(""),
                          t.strings.length > t.arrayPos
                            ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                            : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
                      }, this.fadeOutDelay)
                    );
                  }
                },
                {
                  key: "replaceText",
                  value: function(t) {
                    this.attr
                      ? this.el.setAttribute(this.attr, t)
                      : this.isInput
                      ? (this.el.value = t)
                      : "html" === this.contentType
                      ? (this.el.innerHTML = t)
                      : (this.el.textContent = t);
                  }
                },
                {
                  key: "bindFocusEvents",
                  value: function() {
                    var t = this;
                    this.isInput &&
                      (this.el.addEventListener("focus", function() {
                        t.stop();
                      }),
                      this.el.addEventListener("blur", function() {
                        (t.el.value && 0 !== t.el.value.length) || t.start();
                      }));
                  }
                },
                {
                  key: "insertCursor",
                  value: function() {
                    this.showCursor &&
                      (this.cursor ||
                        ((this.cursor = document.createElement("span")),
                        (this.cursor.className = "typed-cursor"),
                        (this.cursor.innerHTML = this.cursorChar),
                        this.el.parentNode &&
                          this.el.parentNode.insertBefore(
                            this.cursor,
                            this.el.nextSibling
                          )));
                  }
                }
              ]),
              t
            );
          })();
        (e["default"] = a), (t.exports = e["default"]);
      },
      function(t, e, i) {
        "use strict";
        function n(t) {
          return t && t.__esModule ? t : {default: t};
        }
        function r(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {value: !0});
        var s =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
              return t;
            },
          o = (function() {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function(e, i, n) {
              return i && t(e.prototype, i), n && t(e, n), e;
            };
          })(),
          a = n(i(2)),
          l = (function() {
            function t() {
              r(this, t);
            }
            return (
              o(t, [
                {
                  key: "load",
                  value: function(t, e, i) {
                    if (
                      ((t.el =
                        "string" == typeof i ? document.querySelector(i) : i),
                      (t.options = s({}, a["default"], e)),
                      (t.isInput = "input" === t.el.tagName.toLowerCase()),
                      (t.attr = t.options.attr),
                      (t.bindInputFocusEvents = t.options.bindInputFocusEvents),
                      (t.showCursor = !t.isInput && t.options.showCursor),
                      (t.cursorChar = t.options.cursorChar),
                      (t.cursorBlinking = !0),
                      (t.elContent = t.attr
                        ? t.el.getAttribute(t.attr)
                        : t.el.textContent),
                      (t.contentType = t.options.contentType),
                      (t.typeSpeed = t.options.typeSpeed),
                      (t.startDelay = t.options.startDelay),
                      (t.backSpeed = t.options.backSpeed),
                      (t.smartBackspace = t.options.smartBackspace),
                      (t.backDelay = t.options.backDelay),
                      (t.fadeOut = t.options.fadeOut),
                      (t.fadeOutClass = t.options.fadeOutClass),
                      (t.fadeOutDelay = t.options.fadeOutDelay),
                      (t.isPaused = !1),
                      (t.strings = t.options.strings.map(function(t) {
                        return t.trim();
                      })),
                      "string" == typeof t.options.stringsElement
                        ? (t.stringsElement = document.querySelector(
                            t.options.stringsElement
                          ))
                        : (t.stringsElement = t.options.stringsElement),
                      t.stringsElement)
                    ) {
                      (t.strings = []),
                        (t.stringsElement.style.display = "none");
                      var n = Array.prototype.slice.apply(
                          t.stringsElement.children
                        ),
                        r = n.length;
                      if (r)
                        for (var o = 0; o < r; o += 1) {
                          var l = n[o];
                          t.strings.push(l.innerHTML.trim());
                        }
                    }
                    for (var o in ((t.strPos = 0),
                    (t.arrayPos = 0),
                    (t.stopNum = 0),
                    (t.loop = t.options.loop),
                    (t.loopCount = t.options.loopCount),
                    (t.curLoop = 0),
                    (t.shuffle = t.options.shuffle),
                    (t.sequence = []),
                    (t.pause = {
                      status: !1,
                      typewrite: !0,
                      curString: "",
                      curStrPos: 0
                    }),
                    (t.typingComplete = !1),
                    t.strings))
                      t.sequence[o] = o;
                    (t.currentElContent = this.getCurrentElContent(t)),
                      (t.autoInsertCss = t.options.autoInsertCss),
                      this.appendAnimationCss(t);
                  }
                },
                {
                  key: "getCurrentElContent",
                  value: function(t) {
                    return t.attr
                      ? t.el.getAttribute(t.attr)
                      : t.isInput
                      ? t.el.value
                      : "html" === t.contentType
                      ? t.el.innerHTML
                      : t.el.textContent;
                  }
                },
                {
                  key: "appendAnimationCss",
                  value: function(t) {
                    var e = "data-typed-js-css";
                    if (
                      t.autoInsertCss &&
                      (t.showCursor || t.fadeOut) &&
                      !document.querySelector("[" + e + "]")
                    ) {
                      var i = document.createElement("style");
                      (i.type = "text/css"), i.setAttribute(e, !0);
                      var n = "";
                      t.showCursor &&
                        (n +=
                          "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                        t.fadeOut &&
                          (n +=
                            "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                        0 !== i.length &&
                          ((i.innerHTML = n), document.body.appendChild(i));
                    }
                  }
                }
              ]),
              t
            );
          })();
        e["default"] = l;
        var u = new l();
        e.initializer = u;
      },
      function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = {
          strings: [
            "These are the default values...",
            "You know what you should do?",
            "Use your own!",
            "Have a great day!"
          ],
          stringsElement: null,
          typeSpeed: 0,
          startDelay: 0,
          backSpeed: 0,
          smartBackspace: !0,
          shuffle: !1,
          backDelay: 700,
          fadeOut: !1,
          fadeOutClass: "typed-fade-out",
          fadeOutDelay: 500,
          loop: !1,
          loopCount: Infinity,
          showCursor: !0,
          cursorChar: "|",
          autoInsertCss: !0,
          attr: null,
          bindInputFocusEvents: !1,
          contentType: "html",
          onComplete: function() {},
          preStringTyped: function() {},
          onStringTyped: function() {},
          onLastStringBackspaced: function() {},
          onTypingPaused: function() {},
          onTypingResumed: function() {},
          onReset: function() {},
          onStop: function() {},
          onStart: function() {},
          onDestroy: function() {}
        };
        (e["default"] = i), (t.exports = e["default"]);
      },
      function(t, e) {
        "use strict";
        function i(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = (function() {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function(e, i, n) {
              return i && t(e.prototype, i), n && t(e, n), e;
            };
          })(),
          r = (function() {
            function t() {
              i(this, t);
            }
            return (
              n(t, [
                {
                  key: "typeHtmlChars",
                  value: function(t, e, i) {
                    if ("html" !== i.contentType) return e;
                    var n = t.substr(e).charAt(0);
                    if ("<" === n || "&" === n) {
                      var r = "";
                      for (
                        r = "<" === n ? ">" : ";";
                        t.substr(e + 1).charAt(0) !== r &&
                        !(++e + 1 > t.length);

                      );
                      e++;
                    }
                    return e;
                  }
                },
                {
                  key: "backSpaceHtmlChars",
                  value: function(t, e, i) {
                    if ("html" !== i.contentType) return e;
                    var n = t.substr(e).charAt(0);
                    if (">" === n || ";" === n) {
                      var r = "";
                      for (
                        r = ">" === n ? "<" : "&";
                        t.substr(e - 1).charAt(0) !== r && !(--e < 0);

                      );
                      e--;
                    }
                    return e;
                  }
                }
              ]),
              t
            );
          })();
        e["default"] = r;
        var s = new r();
        e.htmlParser = s;
      }
    ]);
  }),
  $(document).on("turbolinks:load", function() {
    var t = {
      strings: [
        "React",
        "Node.JS",
        "Angular",
        "JavaScript",
        "Python",
        "Laravel"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: !0,
      backDelay: 2e3,
      smartBackspace: !1
    };
    $(".typed").length && new Typed(".typed", t);
  });
/*!
 * Parsley.js
 * Version 2.8.1 - built Sat, Feb 3rd 2018, 2:27 pm
 * http://parsleyjs.org
 * Guillaume Potier - <guillaume@wisembly.com>
 * Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
 * MIT Licensed
 */
var _slice = Array.prototype.slice,
  _slicedToArray = (function() {
    function t(t, e) {
      var i = [],
        n = !0,
        r = !1,
        s = undefined;
      try {
        for (
          var o, a = t[Symbol.iterator]();
          !(n = (o = a.next()).done) && (i.push(o.value), !e || i.length !== e);
          n = !0
        );
      } catch (l) {
        (r = !0), (s = l);
      } finally {
        try {
          !n && a["return"] && a["return"]();
        } finally {
          if (r) throw s;
        }
      }
      return i;
    }
    return function(e, i) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, i);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  })(),
  _extends =
    Object.assign ||
    function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i)
          Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
      }
      return t;
    };
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : (t.parsley = e(t.jQuery));
})(this, function(t) {
  "use strict";
  function e(t, e) {
    return (
      t.parsleyAdaptedCallback ||
        (t.parsleyAdaptedCallback = function() {
          var i = Array.prototype.slice.call(arguments, 0);
          i.unshift(this), t.apply(e || D, i);
        }),
      t.parsleyAdaptedCallback
    );
  }
  function i(t) {
    return 0 === t.lastIndexOf(L, 0) ? t.substr(L.length) : t;
  }
  function n() {
    var e = this,
      i = window || global;
    _extends(this, {
      isNativeEvent: function(t) {
        return t.originalEvent && !1 !== t.originalEvent.isTrusted;
      },
      fakeInputEvent: function(i) {
        e.isNativeEvent(i) && t(i.target).trigger("input");
      },
      misbehaves: function(i) {
        e.isNativeEvent(i) &&
          (e.behavesOk(i),
          t(document).on(
            "change.inputevent",
            i.data.selector,
            e.fakeInputEvent
          ),
          e.fakeInputEvent(i));
      },
      behavesOk: function(i) {
        e.isNativeEvent(i) &&
          t(document)
            .off("input.inputevent", i.data.selector, e.behavesOk)
            .off("change.inputevent", i.data.selector, e.misbehaves);
      },
      install: function() {
        if (!i.inputEventPatched) {
          i.inputEventPatched = "0.0.3";
          for (
            var n = [
                "select",
                'input[type="checkbox"]',
                'input[type="radio"]',
                'input[type="file"]'
              ],
              r = 0;
            r < n.length;
            r++
          ) {
            var s = n[r];
            t(document)
              .on("input.inputevent", s, {selector: s}, e.behavesOk)
              .on("change.inputevent", s, {selector: s}, e.misbehaves);
          }
        }
      },
      uninstall: function() {
        delete i.inputEventPatched, t(document).off(".inputevent");
      }
    });
  }
  var r = 1,
    s = {},
    o = {
      attr: function(t, e, i) {
        var n,
          r,
          s,
          o = new RegExp("^" + e, "i");
        if (void 0 === i) i = {};
        else for (n in i) i.hasOwnProperty(n) && delete i[n];
        if (!t) return i;
        for (n = (s = t.attributes).length; n--; )
          (r = s[n]) &&
            r.specified &&
            o.test(r.name) &&
            (i[this.camelize(r.name.slice(e.length))] = this.deserializeValue(
              r.value
            ));
        return i;
      },
      checkAttr: function(t, e, i) {
        return t.hasAttribute(e + i);
      },
      setAttr: function(t, e, i, n) {
        t.setAttribute(this.dasherize(e + i), String(n));
      },
      getType: function(t) {
        return t.getAttribute("type") || "text";
      },
      generateID: function() {
        return "" + r++;
      },
      deserializeValue: function(t) {
        var e;
        try {
          return t
            ? "true" == t ||
                ("false" != t &&
                  ("null" == t
                    ? null
                    : isNaN((e = Number(t)))
                    ? /^[\[\{]/.test(t)
                      ? JSON.parse(t)
                      : t
                    : e))
            : t;
        } catch (i) {
          return t;
        }
      },
      camelize: function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
          return e ? e.toUpperCase() : "";
        });
      },
      dasherize: function(t) {
        return t
          .replace(/::/g, "/")
          .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
          .replace(/([a-z\d])([A-Z])/g, "$1_$2")
          .replace(/_/g, "-")
          .toLowerCase();
      },
      warn: function() {
        var t;
        window.console &&
          "function" == typeof window.console.warn &&
          (t = window.console).warn.apply(t, arguments);
      },
      warnOnce: function(t) {
        s[t] || ((s[t] = !0), this.warn.apply(this, arguments));
      },
      _resetWarnings: function() {
        s = {};
      },
      trimString: function(t) {
        return t.replace(/^\s+|\s+$/g, "");
      },
      parse: {
        date: function(t) {
          var e = t.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
          if (!e) return null;
          var i = e.map(function(t) {
              return parseInt(t, 10);
            }),
            n = _slicedToArray(i, 4),
            r = (n[0], n[1]),
            s = n[2],
            o = n[3],
            a = new Date(r, s - 1, o);
          return a.getFullYear() !== r ||
            a.getMonth() + 1 !== s ||
            a.getDate() !== o
            ? null
            : a;
        },
        string: function(t) {
          return t;
        },
        integer: function(t) {
          return isNaN(t) ? null : parseInt(t, 10);
        },
        number: function(t) {
          if (isNaN(t)) throw null;
          return parseFloat(t);
        },
        boolean: function(t) {
          return !/^\s*false\s*$/i.test(t);
        },
        object: function(t) {
          return o.deserializeValue(t);
        },
        regexp: function(t) {
          var e = "";
          return (
            /^\/.*\/(?:[gimy]*)$/.test(t)
              ? ((e = t.replace(/.*\/([gimy]*)$/, "$1")),
                (t = t.replace(new RegExp("^/(.*?)/" + e + "$"), "$1")))
              : (t = "^" + t + "$"),
            new RegExp(t, e)
          );
        }
      },
      parseRequirement: function(t, e) {
        var i = this.parse[t || "string"];
        if (!i) throw 'Unknown requirement specification: "' + t + '"';
        var n = i(e);
        if (null === n) throw "Requirement is not a " + t + ': "' + e + '"';
        return n;
      },
      namespaceEvents: function(e, i) {
        return (e = this.trimString(e || "").split(/\s+/))[0]
          ? t
              .map(e, function(t) {
                return t + "." + i;
              })
              .join(" ")
          : "";
      },
      difference: function(e, i) {
        var n = [];
        return (
          t.each(e, function(t, e) {
            -1 == i.indexOf(e) && n.push(e);
          }),
          n
        );
      },
      all: function(e) {
        return t.when.apply(t, _toConsumableArray(e).concat([42, 42]));
      },
      objectCreate:
        Object.create ||
        (function() {
          var t = function() {};
          return function(e) {
            if (arguments.length > 1)
              throw Error("Second argument not supported");
            if ("object" != typeof e)
              throw TypeError("Argument must be an object");
            t.prototype = e;
            var i = new t();
            return (t.prototype = null), i;
          };
        })(),
      _SubmitSelector: 'input[type="submit"], button:submit'
    },
    a = {
      namespace: "data-parsley-",
      inputs: "input, textarea, select",
      excluded:
        "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
      priorityEnabled: !0,
      multiple: null,
      group: null,
      uiEnabled: !0,
      validationThreshold: 3,
      focus: "first",
      trigger: !1,
      triggerAfterFailure: "input",
      errorClass: "parsley-error",
      successClass: "parsley-success",
      classHandler: function() {},
      errorsContainer: function() {},
      errorsWrapper: '<ul class="parsley-errors-list"></ul>',
      errorTemplate: "<li></li>"
    },
    l = function() {
      this.__id__ = o.generateID();
    };
  l.prototype = {
    asyncSupport: !0,
    _pipeAccordingToValidationResult: function() {
      var e = this,
        i = function() {
          var i = t.Deferred();
          return !0 !== e.validationResult && i.reject(), i.resolve().promise();
        };
      return [i, i];
    },
    actualizeOptions: function() {
      return (
        o.attr(this.element, this.options.namespace, this.domOptions),
        this.parent &&
          this.parent.actualizeOptions &&
          this.parent.actualizeOptions(),
        this
      );
    },
    _resetOptions: function(t) {
      for (var e in ((this.domOptions = o.objectCreate(this.parent.options)),
      (this.options = o.objectCreate(this.domOptions)),
      t))
        t.hasOwnProperty(e) && (this.options[e] = t[e]);
      this.actualizeOptions();
    },
    _listeners: null,
    on: function(t, e) {
      return (
        (this._listeners = this._listeners || {}),
        (this._listeners[t] = this._listeners[t] || []).push(e),
        this
      );
    },
    subscribe: function(e, i) {
      t.listenTo(this, e.toLowerCase(), i);
    },
    off: function(t, e) {
      var i = this._listeners && this._listeners[t];
      if (i)
        if (e) for (var n = i.length; n--; ) i[n] === e && i.splice(n, 1);
        else delete this._listeners[t];
      return this;
    },
    unsubscribe: function(e) {
      t.unsubscribeTo(this, e.toLowerCase());
    },
    trigger: function(t, e, i) {
      e = e || this;
      var n,
        r = this._listeners && this._listeners[t];
      if (r)
        for (var s = r.length; s--; )
          if (!1 === (n = r[s].call(e, e, i))) return n;
      return !this.parent || this.parent.trigger(t, e, i);
    },
    asyncIsValid: function(t, e) {
      return (
        o.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),
        this.whenValid({group: t, force: e})
      );
    },
    _findRelated: function() {
      return this.options.multiple
        ? t(
            this.parent.element.querySelectorAll(
              "[" +
                this.options.namespace +
                'multiple="' +
                this.options.multiple +
                '"]'
            )
          )
        : this.$element;
    }
  };
  var u = function(t, e) {
      var i = t.match(/^\s*\[(.*)\]\s*$/);
      if (!i) throw 'Requirement is not an array: "' + t + '"';
      var n = i[1].split(",").map(o.trimString);
      if (n.length !== e)
        throw "Requirement has " +
          n.length +
          " values when " +
          e +
          " are needed";
      return n;
    },
    h = function(t, e, i) {
      var n = null,
        r = {};
      for (var s in t)
        if (s) {
          var a = i(s);
          "string" == typeof a && (a = o.parseRequirement(t[s], a)), (r[s] = a);
        } else n = o.parseRequirement(t[s], e);
      return [n, r];
    },
    c = function(e) {
      t.extend(!0, this, e);
    };
  c.prototype = {
    validate: function(t, e) {
      if (this.fn)
        return (
          arguments.length > 3 && (e = [].slice.call(arguments, 1, -1)),
          this.fn(t, e)
        );
      if (Array.isArray(t)) {
        if (!this.validateMultiple)
          throw "Validator `" + this.name + "` does not handle multiple values";
        return this.validateMultiple.apply(this, arguments);
      }
      var i = arguments[arguments.length - 1];
      if (this.validateDate && i._isDateInput())
        return (
          (arguments[0] = o.parse.date(arguments[0])),
          null !== arguments[0] && this.validateDate.apply(this, arguments)
        );
      if (this.validateNumber)
        return (
          !isNaN(t) &&
          ((arguments[0] = parseFloat(arguments[0])),
          this.validateNumber.apply(this, arguments))
        );
      if (this.validateString)
        return this.validateString.apply(this, arguments);
      throw "Validator `" + this.name + "` only handles multiple values";
    },
    parseRequirements: function(e, i) {
      if ("string" != typeof e) return Array.isArray(e) ? e : [e];
      var n = this.requirementType;
      if (Array.isArray(n)) {
        for (var r = u(e, n.length), s = 0; s < r.length; s++)
          r[s] = o.parseRequirement(n[s], r[s]);
        return r;
      }
      return t.isPlainObject(n) ? h(n, e, i) : [o.parseRequirement(n, e)];
    },
    requirementType: "string",
    priority: 2
  };
  var p = function(t, e) {
      (this.__class__ = "ValidatorRegistry"),
        (this.locale = "en"),
        this.init(t || {}, e || {});
    },
    d = {
      email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,
      number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
      integer: /^-?\d+$/,
      digits: /^\d+$/,
      alphanum: /^\w+$/i,
      date: {
        test: function(t) {
          return null !== o.parse.date(t);
        }
      },
      url: new RegExp(
        "^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$"
      )
    };
  d.range = d.number;
  var f = function(t) {
      var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0;
    },
    m = function(t, e) {
      return e.map(o.parse[t]);
    },
    g = function(t, e) {
      return function(i) {
        for (
          var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1;
          s < n;
          s++
        )
          r[s - 1] = arguments[s];
        return (
          r.pop(), e.apply(undefined, [i].concat(_toConsumableArray(m(t, r))))
        );
      };
    },
    y = function(t) {
      return {
        validateDate: g("date", t),
        validateNumber: g("number", t),
        requirementType: t.length <= 2 ? "string" : ["string", "string"],
        priority: 30
      };
    };
  p.prototype = {
    init: function(t, e) {
      for (var i in ((this.catalog = e),
      (this.validators = _extends({}, this.validators)),
      t))
        this.addValidator(i, t[i].fn, t[i].priority);
      window.Parsley.trigger("parsley:validator:init");
    },
    setLocale: function(t) {
      if ("undefined" == typeof this.catalog[t])
        throw new Error(t + " is not available in the catalog");
      return (this.locale = t), this;
    },
    addCatalog: function(t, e, i) {
      return (
        "object" == typeof e && (this.catalog[t] = e),
        !0 === i ? this.setLocale(t) : this
      );
    },
    addMessage: function(t, e, i) {
      return (
        "undefined" == typeof this.catalog[t] && (this.catalog[t] = {}),
        (this.catalog[t][e] = i),
        this
      );
    },
    addMessages: function(t, e) {
      for (var i in e) this.addMessage(t, i, e[i]);
      return this;
    },
    addValidator: function(t) {
      if (this.validators[t])
        o.warn('Validator "' + t + '" is already defined.');
      else if (a.hasOwnProperty(t))
        return void o.warn(
          '"' +
            t +
            '" is a restricted keyword and is not a valid validator name.'
        );
      return this._setValidator.apply(this, arguments);
    },
    hasValidator: function(t) {
      return !!this.validators[t];
    },
    updateValidator: function(t) {
      return this.validators[t]
        ? this._setValidator.apply(this, arguments)
        : (o.warn('Validator "' + t + '" is not already defined.'),
          this.addValidator.apply(this, arguments));
    },
    removeValidator: function(t) {
      return (
        this.validators[t] || o.warn('Validator "' + t + '" is not defined.'),
        delete this.validators[t],
        this
      );
    },
    _setValidator: function(t, e, i) {
      for (var n in ("object" != typeof e && (e = {fn: e, priority: i}),
      e.validate || (e = new c(e)),
      (this.validators[t] = e),
      e.messages || {}))
        this.addMessage(n, t, e.messages[n]);
      return this;
    },
    getErrorMessage: function(t) {
      var e;
      "type" === t.name
        ? (e = (this.catalog[this.locale][t.name] || {})[t.requirements])
        : (e = this.formatMessage(
            this.catalog[this.locale][t.name],
            t.requirements
          ));
      return (
        e ||
        this.catalog[this.locale].defaultMessage ||
        this.catalog.en.defaultMessage
      );
    },
    formatMessage: function(t, e) {
      if ("object" == typeof e) {
        for (var i in e) t = this.formatMessage(t, e[i]);
        return t;
      }
      return "string" == typeof t ? t.replace(/%s/i, e) : "";
    },
    validators: {
      notblank: {
        validateString: function(t) {
          return /\S/.test(t);
        },
        priority: 2
      },
      required: {
        validateMultiple: function(t) {
          return t.length > 0;
        },
        validateString: function(t) {
          return /\S/.test(t);
        },
        priority: 512
      },
      type: {
        validateString: function(t, e) {
          var i =
              arguments.length <= 2 || arguments[2] === undefined
                ? {}
                : arguments[2],
            n = i.step,
            r = n === undefined ? "any" : n,
            s = i.base,
            o = s === undefined ? 0 : s,
            a = d[e];
          if (!a)
            throw new Error("validator type `" + e + "` is not supported");
          if (!a.test(t)) return !1;
          if ("number" === e && !/^any$/i.test(r || "")) {
            var l = Number(t),
              u = Math.max(f(r), f(o));
            if (f(l) > u) return !1;
            var h = function(t) {
              return Math.round(t * Math.pow(10, u));
            };
            if ((h(l) - h(o)) % h(r) != 0) return !1;
          }
          return !0;
        },
        requirementType: {"": "string", step: "string", base: "number"},
        priority: 256
      },
      pattern: {
        validateString: function(t, e) {
          return e.test(t);
        },
        requirementType: "regexp",
        priority: 64
      },
      minlength: {
        validateString: function(t, e) {
          return t.length >= e;
        },
        requirementType: "integer",
        priority: 30
      },
      maxlength: {
        validateString: function(t, e) {
          return t.length <= e;
        },
        requirementType: "integer",
        priority: 30
      },
      length: {
        validateString: function(t, e, i) {
          return t.length >= e && t.length <= i;
        },
        requirementType: ["integer", "integer"],
        priority: 30
      },
      mincheck: {
        validateMultiple: function(t, e) {
          return t.length >= e;
        },
        requirementType: "integer",
        priority: 30
      },
      maxcheck: {
        validateMultiple: function(t, e) {
          return t.length <= e;
        },
        requirementType: "integer",
        priority: 30
      },
      check: {
        validateMultiple: function(t, e, i) {
          return t.length >= e && t.length <= i;
        },
        requirementType: ["integer", "integer"],
        priority: 30
      },
      min: y(function(t, e) {
        return t >= e;
      }),
      max: y(function(t, e) {
        return t <= e;
      }),
      range: y(function(t, e, i) {
        return t >= e && t <= i;
      }),
      equalto: {
        validateString: function(e, i) {
          var n = t(i);
          return n.length ? e === n.val() : e === i;
        },
        priority: 256
      }
    }
  };
  var v = {},
    _ = function M(t, e, i) {
      for (var n = [], r = [], s = 0; s < t.length; s++) {
        for (var o = !1, a = 0; a < e.length; a++)
          if (t[s].assert.name === e[a].assert.name) {
            o = !0;
            break;
          }
        o ? r.push(t[s]) : n.push(t[s]);
      }
      return {kept: r, added: n, removed: i ? [] : M(e, t, !0).added};
    };
  (v.Form = {
    _actualizeTriggers: function() {
      var t = this;
      this.$element.on("submit.Parsley", function(e) {
        t.onSubmitValidate(e);
      }),
        this.$element.on("click.Parsley", o._SubmitSelector, function(e) {
          t.onSubmitButton(e);
        }),
        !1 !== this.options.uiEnabled &&
          this.element.setAttribute("novalidate", "");
    },
    focus: function() {
      if (
        ((this._focusedField = null),
        !0 === this.validationResult || "none" === this.options.focus)
      )
        return null;
      for (var t = 0; t < this.fields.length; t++) {
        var e = this.fields[t];
        if (
          !0 !== e.validationResult &&
          e.validationResult.length > 0 &&
          "undefined" == typeof e.options.noFocus &&
          ((this._focusedField = e.$element), "first" === this.options.focus)
        )
          break;
      }
      return null === this._focusedField ? null : this._focusedField.focus();
    },
    _destroyUI: function() {
      this.$element.off(".Parsley");
    }
  }),
    (v.Field = {
      _reflowUI: function() {
        if ((this._buildUI(), this._ui)) {
          var t = _(this.validationResult, this._ui.lastValidationResult);
          (this._ui.lastValidationResult = this.validationResult),
            this._manageStatusClass(),
            this._manageErrorsMessages(t),
            this._actualizeTriggers(),
            (!t.kept.length && !t.added.length) ||
              this._failedOnce ||
              ((this._failedOnce = !0), this._actualizeTriggers());
        }
      },
      getErrorsMessages: function() {
        if (!0 === this.validationResult) return [];
        for (var t = [], e = 0; e < this.validationResult.length; e++)
          t.push(
            this.validationResult[e].errorMessage ||
              this._getErrorMessage(this.validationResult[e].assert)
          );
        return t;
      },
      addError: function(t) {
        var e =
            arguments.length <= 1 || arguments[1] === undefined
              ? {}
              : arguments[1],
          i = e.message,
          n = e.assert,
          r = e.updateClass,
          s = r === undefined || r;
        this._buildUI(),
          this._addError(t, {message: i, assert: n}),
          s && this._errorClass();
      },
      updateError: function(t) {
        var e =
            arguments.length <= 1 || arguments[1] === undefined
              ? {}
              : arguments[1],
          i = e.message,
          n = e.assert,
          r = e.updateClass,
          s = r === undefined || r;
        this._buildUI(),
          this._updateError(t, {message: i, assert: n}),
          s && this._errorClass();
      },
      removeError: function(t) {
        var e = (arguments.length <= 1 || arguments[1] === undefined
            ? {}
            : arguments[1]
          ).updateClass,
          i = e === undefined || e;
        this._buildUI(), this._removeError(t), i && this._manageStatusClass();
      },
      _manageStatusClass: function() {
        this.hasConstraints() &&
        this.needsValidation() &&
        !0 === this.validationResult
          ? this._successClass()
          : this.validationResult.length > 0
          ? this._errorClass()
          : this._resetClass();
      },
      _manageErrorsMessages: function(e) {
        if ("undefined" == typeof this.options.errorsMessagesDisabled) {
          if ("undefined" != typeof this.options.errorMessage)
            return e.added.length || e.kept.length
              ? (this._insertErrorWrapper(),
                0 ===
                  this._ui.$errorsWrapper.find(".parsley-custom-error-message")
                    .length &&
                  this._ui.$errorsWrapper.append(
                    t(this.options.errorTemplate).addClass(
                      "parsley-custom-error-message"
                    )
                  ),
                this._ui.$errorsWrapper
                  .addClass("filled")
                  .find(".parsley-custom-error-message")
                  .html(this.options.errorMessage))
              : this._ui.$errorsWrapper
                  .removeClass("filled")
                  .find(".parsley-custom-error-message")
                  .remove();
          for (var i = 0; i < e.removed.length; i++)
            this._removeError(e.removed[i].assert.name);
          for (i = 0; i < e.added.length; i++)
            this._addError(e.added[i].assert.name, {
              message: e.added[i].errorMessage,
              assert: e.added[i].assert
            });
          for (i = 0; i < e.kept.length; i++)
            this._updateError(e.kept[i].assert.name, {
              message: e.kept[i].errorMessage,
              assert: e.kept[i].assert
            });
        }
      },
      _addError: function(e, i) {
        var n = i.message,
          r = i.assert;
        this._insertErrorWrapper(),
          this._ui.$errorClassHandler.attr(
            "aria-describedby",
            this._ui.errorsWrapperId
          ),
          this._ui.$errorsWrapper.addClass("filled").append(
            t(this.options.errorTemplate)
              .addClass("parsley-" + e)
              .html(n || this._getErrorMessage(r))
          );
      },
      _updateError: function(t, e) {
        var i = e.message,
          n = e.assert;
        this._ui.$errorsWrapper
          .addClass("filled")
          .find(".parsley-" + t)
          .html(i || this._getErrorMessage(n));
      },
      _removeError: function(t) {
        this._ui.$errorClassHandler.removeAttr("aria-describedby"),
          this._ui.$errorsWrapper
            .removeClass("filled")
            .find(".parsley-" + t)
            .remove();
      },
      _getErrorMessage: function(t) {
        var e = t.name + "Message";
        return "undefined" != typeof this.options[e]
          ? window.Parsley.formatMessage(this.options[e], t.requirements)
          : window.Parsley.getErrorMessage(t);
      },
      _buildUI: function() {
        if (!this._ui && !1 !== this.options.uiEnabled) {
          var e = {};
          this.element.setAttribute(this.options.namespace + "id", this.__id__),
            (e.$errorClassHandler = this._manageClassHandler()),
            (e.errorsWrapperId =
              "parsley-id-" +
              (this.options.multiple
                ? "multiple-" + this.options.multiple
                : this.__id__)),
            (e.$errorsWrapper = t(this.options.errorsWrapper).attr(
              "id",
              e.errorsWrapperId
            )),
            (e.lastValidationResult = []),
            (e.validationInformationVisible = !1),
            (this._ui = e);
        }
      },
      _manageClassHandler: function() {
        if (
          "string" == typeof this.options.classHandler &&
          t(this.options.classHandler).length
        )
          return t(this.options.classHandler);
        var e = this.options.classHandler;
        if (
          ("string" == typeof this.options.classHandler &&
            "function" == typeof window[this.options.classHandler] &&
            (e = window[this.options.classHandler]),
          "function" == typeof e)
        ) {
          var i = e.call(this, this);
          if (void 0 !== i && i.length) return i;
        } else {
          if ("object" == typeof e && e instanceof jQuery && e.length) return e;
          e &&
            o.warn(
              "The class handler `" +
                e +
                "` does not exist in DOM nor as a global JS function"
            );
        }
        return this._inputHolder();
      },
      _inputHolder: function() {
        return this.options.multiple && "SELECT" !== this.element.nodeName
          ? this.$element.parent()
          : this.$element;
      },
      _insertErrorWrapper: function() {
        var e = this.options.errorsContainer;
        if (0 !== this._ui.$errorsWrapper.parent().length)
          return this._ui.$errorsWrapper.parent();
        if ("string" == typeof e) {
          if (t(e).length) return t(e).append(this._ui.$errorsWrapper);
          "function" == typeof window[e]
            ? (e = window[e])
            : o.warn(
                "The errors container `" +
                  e +
                  "` does not exist in DOM nor as a global JS function"
              );
        }
        return (
          "function" == typeof e && (e = e.call(this, this)),
          "object" == typeof e && e.length
            ? e.append(this._ui.$errorsWrapper)
            : this._inputHolder().after(this._ui.$errorsWrapper)
        );
      },
      _actualizeTriggers: function() {
        var t,
          e = this,
          i = this._findRelated();
        i.off(".Parsley"),
          this._failedOnce
            ? i.on(
                o.namespaceEvents(this.options.triggerAfterFailure, "Parsley"),
                function() {
                  e._validateIfNeeded();
                }
              )
            : (t = o.namespaceEvents(this.options.trigger, "Parsley")) &&
              i.on(t, function(t) {
                e._validateIfNeeded(t);
              });
      },
      _validateIfNeeded: function(t) {
        var e = this;
        (t &&
          /key|input/.test(t.type) &&
          (!this._ui || !this._ui.validationInformationVisible) &&
          this.getValue().length <= this.options.validationThreshold) ||
          (this.options.debounce
            ? (window.clearTimeout(this._debounced),
              (this._debounced = window.setTimeout(function() {
                return e.validate();
              }, this.options.debounce)))
            : this.validate());
      },
      _resetUI: function() {
        (this._failedOnce = !1),
          this._actualizeTriggers(),
          "undefined" != typeof this._ui &&
            (this._ui.$errorsWrapper
              .removeClass("filled")
              .children()
              .remove(),
            this._resetClass(),
            (this._ui.lastValidationResult = []),
            (this._ui.validationInformationVisible = !1));
      },
      _destroyUI: function() {
        this._resetUI(),
          "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(),
          delete this._ui;
      },
      _successClass: function() {
        (this._ui.validationInformationVisible = !0),
          this._ui.$errorClassHandler
            .removeClass(this.options.errorClass)
            .addClass(this.options.successClass);
      },
      _errorClass: function() {
        (this._ui.validationInformationVisible = !0),
          this._ui.$errorClassHandler
            .removeClass(this.options.successClass)
            .addClass(this.options.errorClass);
      },
      _resetClass: function() {
        this._ui.$errorClassHandler
          .removeClass(this.options.successClass)
          .removeClass(this.options.errorClass);
      }
    });
  var b = function(e, i, n) {
      (this.__class__ = "Form"),
        (this.element = e),
        (this.$element = t(e)),
        (this.domOptions = i),
        (this.options = n),
        (this.parent = window.Parsley),
        (this.fields = []),
        (this.validationResult = null);
    },
    w = {pending: null, resolved: !0, rejected: !1};
  b.prototype = {
    onSubmitValidate: function(t) {
      var e = this;
      if (!0 !== t.parsley) {
        var i = this._submitSource || this.$element.find(o._SubmitSelector)[0];
        if (
          ((this._submitSource = null),
          this.$element
            .find(".parsley-synthetic-submit-button")
            .prop("disabled", !0),
          !i || null === i.getAttribute("formnovalidate"))
        ) {
          window.Parsley._remoteCache = {};
          var n = this.whenValidate({event: t});
          ("resolved" === n.state() && !1 !== this._trigger("submit")) ||
            (t.stopImmediatePropagation(),
            t.preventDefault(),
            "pending" === n.state() &&
              n.done(function() {
                e._submit(i);
              }));
        }
      }
    },
    onSubmitButton: function(t) {
      this._submitSource = t.currentTarget;
    },
    _submit: function(e) {
      if (!1 !== this._trigger("submit")) {
        if (e) {
          var i = this.$element
            .find(".parsley-synthetic-submit-button")
            .prop("disabled", !1);
          0 === i.length &&
            (i = t(
              '<input class="parsley-synthetic-submit-button" type="hidden">'
            ).appendTo(this.$element)),
            i.attr({
              name: e.getAttribute("name"),
              value: e.getAttribute("value")
            });
        }
        this.$element.trigger(_extends(t.Event("submit"), {parsley: !0}));
      }
    },
    validate: function(e) {
      if (arguments.length >= 1 && !t.isPlainObject(e)) {
        o.warnOnce(
          "Calling validate on a parsley form without passing arguments as an object is deprecated."
        );
        var i = _slice.call(arguments);
        e = {group: i[0], force: i[1], event: i[2]};
      }
      return w[this.whenValidate(e).state()];
    },
    whenValidate: function() {
      var e,
        i = this,
        n =
          arguments.length <= 0 || arguments[0] === undefined
            ? {}
            : arguments[0],
        r = n.group,
        s = n.force,
        a = n.event;
      (this.submitEvent = a),
        a &&
          (this.submitEvent = _extends({}, a, {
            preventDefault: function() {
              o.warnOnce(
                "Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"
              ),
                (i.validationResult = !1);
            }
          })),
        (this.validationResult = !0),
        this._trigger("validate"),
        this._refreshFields();
      var l = this._withoutReactualizingFormOptions(function() {
        return t.map(i.fields, function(t) {
          return t.whenValidate({force: s, group: r});
        });
      });
      return (e = o
        .all(l)
        .done(function() {
          i._trigger("success");
        })
        .fail(function() {
          (i.validationResult = !1), i.focus(), i._trigger("error");
        })
        .always(function() {
          i._trigger("validated");
        })).pipe.apply(
        e,
        _toConsumableArray(this._pipeAccordingToValidationResult())
      );
    },
    isValid: function(e) {
      if (arguments.length >= 1 && !t.isPlainObject(e)) {
        o.warnOnce(
          "Calling isValid on a parsley form without passing arguments as an object is deprecated."
        );
        var i = _slice.call(arguments);
        e = {group: i[0], force: i[1]};
      }
      return w[this.whenValid(e).state()];
    },
    whenValid: function() {
      var e = this,
        i =
          arguments.length <= 0 || arguments[0] === undefined
            ? {}
            : arguments[0],
        n = i.group,
        r = i.force;
      this._refreshFields();
      var s = this._withoutReactualizingFormOptions(function() {
        return t.map(e.fields, function(t) {
          return t.whenValid({group: n, force: r});
        });
      });
      return o.all(s);
    },
    refresh: function() {
      return this._refreshFields(), this;
    },
    reset: function() {
      for (var t = 0; t < this.fields.length; t++) this.fields[t].reset();
      this._trigger("reset");
    },
    destroy: function() {
      this._destroyUI();
      for (var t = 0; t < this.fields.length; t++) this.fields[t].destroy();
      this.$element.removeData("Parsley"), this._trigger("destroy");
    },
    _refreshFields: function() {
      return this.actualizeOptions()._bindFields();
    },
    _bindFields: function() {
      var e = this,
        i = this.fields;
      return (
        (this.fields = []),
        (this.fieldsMappedById = {}),
        this._withoutReactualizingFormOptions(function() {
          e.$element
            .find(e.options.inputs)
            .not(e.options.excluded)
            .each(function(t, i) {
              var n = new window.Parsley.Factory(i, {}, e);
              if (
                ("Field" === n.__class__ || "FieldMultiple" === n.__class__) &&
                !0 !== n.options.excluded
              ) {
                var r = n.__class__ + "-" + n.__id__;
                "undefined" == typeof e.fieldsMappedById[r] &&
                  ((e.fieldsMappedById[r] = n), e.fields.push(n));
              }
            }),
            t.each(o.difference(i, e.fields), function(t, e) {
              e.reset();
            });
        }),
        this
      );
    },
    _withoutReactualizingFormOptions: function(t) {
      var e = this.actualizeOptions;
      this.actualizeOptions = function() {
        return this;
      };
      var i = t();
      return (this.actualizeOptions = e), i;
    },
    _trigger: function(t) {
      return this.trigger("form:" + t);
    }
  };
  var x = function(t, e, i, n, r) {
      var s = window.Parsley._validatorRegistry.validators[e],
        o = new c(s);
      (n = n || t.options[e + "Priority"] || o.priority),
        _extends(this, {
          validator: o,
          name: e,
          requirements: i,
          priority: n,
          isDomConstraint: (r = !0 === r)
        }),
        this._parseRequirements(t.options);
    },
    T = function(t) {
      return t[0].toUpperCase() + t.slice(1);
    };
  x.prototype = {
    validate: function(t, e) {
      var i;
      return (i = this.validator).validate.apply(
        i,
        [t].concat(_toConsumableArray(this.requirementList), [e])
      );
    },
    _parseRequirements: function(t) {
      var e = this;
      this.requirementList = this.validator.parseRequirements(
        this.requirements,
        function(i) {
          return t[e.name + T(i)];
        }
      );
    }
  };
  var C = function(e, i, n, r) {
      (this.__class__ = "Field"),
        (this.element = e),
        (this.$element = t(e)),
        void 0 !== r && (this.parent = r),
        (this.options = n),
        (this.domOptions = i),
        (this.constraints = []),
        (this.constraintsByName = {}),
        (this.validationResult = !0),
        this._bindConstraints();
    },
    S = {pending: null, resolved: !0, rejected: !1};
  C.prototype = {
    validate: function(e) {
      arguments.length >= 1 &&
        !t.isPlainObject(e) &&
        (o.warnOnce(
          "Calling validate on a parsley field without passing arguments as an object is deprecated."
        ),
        (e = {options: e}));
      var i = this.whenValidate(e);
      if (!i) return !0;
      switch (i.state()) {
        case "pending":
          return null;
        case "resolved":
          return !0;
        case "rejected":
          return this.validationResult;
      }
    },
    whenValidate: function() {
      var t,
        e = this,
        i =
          arguments.length <= 0 || arguments[0] === undefined
            ? {}
            : arguments[0],
        n = i.force,
        r = i.group;
      if ((this.refresh(), !r || this._isInGroup(r)))
        return (
          (this.value = this.getValue()),
          this._trigger("validate"),
          (t = this.whenValid({force: n, value: this.value, _refreshed: !0})
            .always(function() {
              e._reflowUI();
            })
            .done(function() {
              e._trigger("success");
            })
            .fail(function() {
              e._trigger("error");
            })
            .always(function() {
              e._trigger("validated");
            })).pipe.apply(
            t,
            _toConsumableArray(this._pipeAccordingToValidationResult())
          )
        );
    },
    hasConstraints: function() {
      return 0 !== this.constraints.length;
    },
    needsValidation: function(t) {
      return (
        void 0 === t && (t = this.getValue()),
        !(
          !t.length &&
          !this._isRequired() &&
          "undefined" == typeof this.options.validateIfEmpty
        )
      );
    },
    _isInGroup: function(e) {
      return Array.isArray(this.options.group)
        ? -1 !== t.inArray(e, this.options.group)
        : this.options.group === e;
    },
    isValid: function(e) {
      if (arguments.length >= 1 && !t.isPlainObject(e)) {
        o.warnOnce(
          "Calling isValid on a parsley field without passing arguments as an object is deprecated."
        );
        var i = _slice.call(arguments);
        e = {force: i[0], value: i[1]};
      }
      var n = this.whenValid(e);
      return !n || S[n.state()];
    },
    whenValid: function() {
      var e = this,
        i =
          arguments.length <= 0 || arguments[0] === undefined
            ? {}
            : arguments[0],
        n = i.force,
        r = n !== undefined && n,
        s = i.value,
        a = i.group;
      if ((i._refreshed || this.refresh(), !a || this._isInGroup(a))) {
        if (((this.validationResult = !0), !this.hasConstraints()))
          return t.when();
        if (
          (null == s && (s = this.getValue()),
          !this.needsValidation(s) && !0 !== r)
        )
          return t.when();
        var l = this._getGroupedConstraints(),
          u = [];
        return (
          t.each(l, function(i, n) {
            var r = o.all(
              t.map(n, function(t) {
                return e._validateConstraint(s, t);
              })
            );
            if ((u.push(r), "rejected" === r.state())) return !1;
          }),
          o.all(u)
        );
      }
    },
    _validateConstraint: function(e, i) {
      var n = this,
        r = i.validate(e, this);
      return (
        !1 === r && (r = t.Deferred().reject()),
        o.all([r]).fail(function(t) {
          n.validationResult instanceof Array || (n.validationResult = []),
            n.validationResult.push({
              assert: i,
              errorMessage: "string" == typeof t && t
            });
        })
      );
    },
    getValue: function() {
      var t;
      return null ==
        (t =
          "function" == typeof this.options.value
            ? this.options.value(this)
            : "undefined" != typeof this.options.value
            ? this.options.value
            : this.$element.val())
        ? ""
        : this._handleWhitespace(t);
    },
    reset: function() {
      return this._resetUI(), this._trigger("reset");
    },
    destroy: function() {
      this._destroyUI(),
        this.$element.removeData("Parsley"),
        this.$element.removeData("FieldMultiple"),
        this._trigger("destroy");
    },
    refresh: function() {
      return this._refreshConstraints(), this;
    },
    _refreshConstraints: function() {
      return this.actualizeOptions()._bindConstraints();
    },
    refreshConstraints: function() {
      return (
        o.warnOnce(
          "Parsley's refreshConstraints is deprecated. Please use refresh"
        ),
        this.refresh()
      );
    },
    addConstraint: function(t, e, i, n) {
      if (window.Parsley._validatorRegistry.validators[t]) {
        var r = new x(this, t, e, i, n);
        "undefined" !== this.constraintsByName[r.name] &&
          this.removeConstraint(r.name),
          this.constraints.push(r),
          (this.constraintsByName[r.name] = r);
      }
      return this;
    },
    removeConstraint: function(t) {
      for (var e = 0; e < this.constraints.length; e++)
        if (t === this.constraints[e].name) {
          this.constraints.splice(e, 1);
          break;
        }
      return delete this.constraintsByName[t], this;
    },
    updateConstraint: function(t, e, i) {
      return this.removeConstraint(t).addConstraint(t, e, i);
    },
    _bindConstraints: function() {
      for (var t = [], e = {}, i = 0; i < this.constraints.length; i++)
        !1 === this.constraints[i].isDomConstraint &&
          (t.push(this.constraints[i]),
          (e[this.constraints[i].name] = this.constraints[i]));
      for (var n in ((this.constraints = t),
      (this.constraintsByName = e),
      this.options))
        this.addConstraint(n, this.options[n], undefined, !0);
      return this._bindHtml5Constraints();
    },
    _bindHtml5Constraints: function() {
      null !== this.element.getAttribute("required") &&
        this.addConstraint("required", !0, undefined, !0),
        null !== this.element.getAttribute("pattern") &&
          this.addConstraint(
            "pattern",
            this.element.getAttribute("pattern"),
            undefined,
            !0
          );
      var t = this.element.getAttribute("min"),
        e = this.element.getAttribute("max");
      null !== t && null !== e
        ? this.addConstraint("range", [t, e], undefined, !0)
        : null !== t
        ? this.addConstraint("min", t, undefined, !0)
        : null !== e && this.addConstraint("max", e, undefined, !0),
        null !== this.element.getAttribute("minlength") &&
        null !== this.element.getAttribute("maxlength")
          ? this.addConstraint(
              "length",
              [
                this.element.getAttribute("minlength"),
                this.element.getAttribute("maxlength")
              ],
              undefined,
              !0
            )
          : null !== this.element.getAttribute("minlength")
          ? this.addConstraint(
              "minlength",
              this.element.getAttribute("minlength"),
              undefined,
              !0
            )
          : null !== this.element.getAttribute("maxlength") &&
            this.addConstraint(
              "maxlength",
              this.element.getAttribute("maxlength"),
              undefined,
              !0
            );
      var i = o.getType(this.element);
      return "number" === i
        ? this.addConstraint(
            "type",
            [
              "number",
              {
                step: this.element.getAttribute("step") || "1",
                base: t || this.element.getAttribute("value")
              }
            ],
            undefined,
            !0
          )
        : /^(email|url|range|date)$/i.test(i)
        ? this.addConstraint("type", i, undefined, !0)
        : this;
    },
    _isRequired: function() {
      return (
        "undefined" != typeof this.constraintsByName.required &&
        !1 !== this.constraintsByName.required.requirements
      );
    },
    _trigger: function(t) {
      return this.trigger("field:" + t);
    },
    _handleWhitespace: function(t) {
      return (
        !0 === this.options.trimValue &&
          o.warnOnce(
            'data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'
          ),
        "squish" === this.options.whitespace && (t = t.replace(/\s{2,}/g, " ")),
        ("trim" !== this.options.whitespace &&
          "squish" !== this.options.whitespace &&
          !0 !== this.options.trimValue) ||
          (t = o.trimString(t)),
        t
      );
    },
    _isDateInput: function() {
      var t = this.constraintsByName.type;
      return t && "date" === t.requirements;
    },
    _getGroupedConstraints: function() {
      if (!1 === this.options.priorityEnabled) return [this.constraints];
      for (var t = [], e = {}, i = 0; i < this.constraints.length; i++) {
        var n = this.constraints[i].priority;
        e[n] || t.push((e[n] = [])), e[n].push(this.constraints[i]);
      }
      return (
        t.sort(function(t, e) {
          return e[0].priority - t[0].priority;
        }),
        t
      );
    }
  };
  var E = C,
    k = function() {
      this.__class__ = "FieldMultiple";
    };
  k.prototype = {
    addElement: function(t) {
      return this.$elements.push(t), this;
    },
    _refreshConstraints: function() {
      var e;
      if (((this.constraints = []), "SELECT" === this.element.nodeName))
        return this.actualizeOptions()._bindConstraints(), this;
      for (var i = 0; i < this.$elements.length; i++)
        if (t("html").has(this.$elements[i]).length) {
          e = this.$elements[i].data("FieldMultiple")._refreshConstraints()
            .constraints;
          for (var n = 0; n < e.length; n++)
            this.addConstraint(
              e[n].name,
              e[n].requirements,
              e[n].priority,
              e[n].isDomConstraint
            );
        } else this.$elements.splice(i, 1);
      return this;
    },
    getValue: function() {
      if ("function" == typeof this.options.value)
        return this.options.value(this);
      if ("undefined" != typeof this.options.value) return this.options.value;
      if ("INPUT" === this.element.nodeName) {
        var e = o.getType(this.element);
        if ("radio" === e)
          return (
            this._findRelated()
              .filter(":checked")
              .val() || ""
          );
        if ("checkbox" === e) {
          var i = [];
          return (
            this._findRelated()
              .filter(":checked")
              .each(function() {
                i.push(t(this).val());
              }),
            i
          );
        }
      }
      return "SELECT" === this.element.nodeName && null === this.$element.val()
        ? []
        : this.$element.val();
    },
    _init: function() {
      return (this.$elements = [this.$element]), this;
    }
  };
  var P = function(e, i, n) {
    (this.element = e), (this.$element = t(e));
    var r = this.$element.data("Parsley");
    if (r)
      return (
        void 0 !== n &&
          r.parent === window.Parsley &&
          ((r.parent = n), r._resetOptions(r.options)),
        "object" == typeof i && _extends(r.options, i),
        r
      );
    if (!this.$element.length)
      throw new Error("You must bind Parsley on an existing element.");
    if (void 0 !== n && "Form" !== n.__class__)
      throw new Error("Parent instance must be a Form instance");
    return (this.parent = n || window.Parsley), this.init(i);
  };
  P.prototype = {
    init: function(t) {
      return (
        (this.__class__ = "Parsley"),
        (this.__version__ = "2.8.1"),
        (this.__id__ = o.generateID()),
        this._resetOptions(t),
        "FORM" === this.element.nodeName ||
        (o.checkAttr(this.element, this.options.namespace, "validate") &&
          !this.$element.is(this.options.inputs))
          ? this.bind("parsleyForm")
          : this.isMultiple()
          ? this.handleMultiple()
          : this.bind("parsleyField")
      );
    },
    isMultiple: function() {
      var t = o.getType(this.element);
      return (
        "radio" === t ||
        "checkbox" === t ||
        ("SELECT" === this.element.nodeName &&
          null !== this.element.getAttribute("multiple"))
      );
    },
    handleMultiple: function() {
      var e,
        i,
        n = this;
      if (
        ((this.options.multiple =
          this.options.multiple ||
          (e = this.element.getAttribute("name")) ||
          this.element.getAttribute("id")),
        "SELECT" === this.element.nodeName &&
          null !== this.element.getAttribute("multiple"))
      )
        return (
          (this.options.multiple = this.options.multiple || this.__id__),
          this.bind("parsleyFieldMultiple")
        );
      if (!this.options.multiple)
        return (
          o.warn(
            "To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",
            this.$element
          ),
          this
        );
      (this.options.multiple = this.options.multiple.replace(
        /(:|\.|\[|\]|\{|\}|\$)/g,
        ""
      )),
        e &&
          t('input[name="' + e + '"]').each(function(t, e) {
            var i = o.getType(e);
            ("radio" !== i && "checkbox" !== i) ||
              e.setAttribute(
                n.options.namespace + "multiple",
                n.options.multiple
              );
          });
      for (var r = this._findRelated(), s = 0; s < r.length; s++)
        if (void 0 !== (i = t(r.get(s)).data("Parsley"))) {
          this.$element.data("FieldMultiple") || i.addElement(this.$element);
          break;
        }
      return (
        this.bind("parsleyField", !0), i || this.bind("parsleyFieldMultiple")
      );
    },
    bind: function(e, i) {
      var n;
      switch (e) {
        case "parsleyForm":
          n = t
            .extend(
              new b(this.element, this.domOptions, this.options),
              new l(),
              window.ParsleyExtend
            )
            ._bindFields();
          break;
        case "parsleyField":
          n = t.extend(
            new E(this.element, this.domOptions, this.options, this.parent),
            new l(),
            window.ParsleyExtend
          );
          break;
        case "parsleyFieldMultiple":
          n = t
            .extend(
              new E(this.element, this.domOptions, this.options, this.parent),
              new k(),
              new l(),
              window.ParsleyExtend
            )
            ._init();
          break;
        default:
          throw new Error(e + "is not a supported Parsley type");
      }
      return (
        this.options.multiple &&
          o.setAttr(
            this.element,
            this.options.namespace,
            "multiple",
            this.options.multiple
          ),
        void 0 !== i
          ? (this.$element.data("FieldMultiple", n), n)
          : (this.$element.data("Parsley", n),
            n._actualizeTriggers(),
            n._trigger("init"),
            n)
      );
    }
  };
  var A = t.fn.jquery.split(".");
  if (parseInt(A[0]) <= 1 && parseInt(A[1]) < 8)
    throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
  A.forEach ||
    o.warn(
      "Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim"
    );
  var R = _extends(new l(), {
    element: document,
    $element: t(document),
    actualizeOptions: null,
    _resetOptions: null,
    Factory: P,
    version: "2.8.1"
  });
  _extends(E.prototype, v.Field, l.prototype),
    _extends(b.prototype, v.Form, l.prototype),
    _extends(P.prototype, l.prototype),
    (t.fn.parsley = t.fn.psly = function(e) {
      if (this.length > 1) {
        var i = [];
        return (
          this.each(function() {
            i.push(t(this).parsley(e));
          }),
          i
        );
      }
      if (0 != this.length) return new P(this[0], e);
    }),
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
    (R.options = _extends(o.objectCreate(a), window.ParsleyConfig)),
    (window.ParsleyConfig = R.options),
    (window.Parsley = window.psly = R),
    (R.Utils = o),
    (window.ParsleyUtils = {}),
    t.each(o, function(t, e) {
      "function" == typeof e &&
        (window.ParsleyUtils[t] = function() {
          return (
            o.warnOnce(
              "Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."
            ),
            o[t].apply(o, arguments)
          );
        });
    });
  var O = (window.Parsley._validatorRegistry = new p(
    window.ParsleyConfig.validators,
    window.ParsleyConfig.i18n
  ));
  (window.ParsleyValidator = {}),
    t.each(
      "setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(
        " "
      ),
      function(t, e) {
        (window.Parsley[e] = function() {
          return O[e].apply(O, arguments);
        }),
          (window.ParsleyValidator[e] = function() {
            var t;
            return (
              o.warnOnce(
                "Accessing the method '" +
                  e +
                  "' through Validator is deprecated. Simply call 'window.Parsley." +
                  e +
                  "(...)'"
              ),
              (t = window.Parsley)[e].apply(t, arguments)
            );
          });
      }
    ),
    (window.Parsley.UI = v),
    (window.ParsleyUI = {
      removeError: function(t, e, i) {
        var n = !0 !== i;
        return (
          o.warnOnce(
            "Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."
          ),
          t.removeError(e, {updateClass: n})
        );
      },
      getErrorsMessages: function(t) {
        return (
          o.warnOnce(
            "Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."
          ),
          t.getErrorsMessages()
        );
      }
    }),
    t.each("addError updateError".split(" "), function(t, e) {
      window.ParsleyUI[e] = function(t, i, n, r, s) {
        var a = !0 !== s;
        return (
          o.warnOnce(
            "Accessing UI is deprecated. Call '" +
              e +
              "' on the instance directly. Please comment in issue 1073 as to your need to call this method."
          ),
          t[e](i, {message: n, assert: r, updateClass: a})
        );
      };
    }),
    !1 !== window.ParsleyConfig.autoBind &&
      t(function() {
        t("[data-parsley-validate]").length &&
          t("[data-parsley-validate]").parsley();
      });
  var D = t({}),
    $ = function() {
      o.warnOnce(
        "Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley"
      );
    },
    L = "parsley:";
  (t.listen = function(t, n) {
    var r;
    if (
      ($(),
      "object" == typeof arguments[1] &&
        "function" == typeof arguments[2] &&
        ((r = arguments[1]), (n = arguments[2])),
      "function" != typeof n)
    )
      throw new Error("Wrong parameters");
    window.Parsley.on(i(t), e(n, r));
  }),
    (t.listenTo = function(t, n, r) {
      if (($(), !(t instanceof E || t instanceof b)))
        throw new Error("Must give Parsley instance");
      if ("string" != typeof n || "function" != typeof r)
        throw new Error("Wrong parameters");
      t.on(i(n), e(r));
    }),
    (t.unsubscribe = function(t, e) {
      if (($(), "string" != typeof t || "function" != typeof e))
        throw new Error("Wrong arguments");
      window.Parsley.off(i(t), e.parsleyAdaptedCallback);
    }),
    (t.unsubscribeTo = function(t, e) {
      if (($(), !(t instanceof E || t instanceof b)))
        throw new Error("Must give Parsley instance");
      t.off(i(e));
    }),
    (t.unsubscribeAll = function(e) {
      $(),
        window.Parsley.off(i(e)),
        t("form,input,textarea,select").each(function() {
          var n = t(this).data("Parsley");
          n && n.off(i(e));
        });
    }),
    (t.emit = function(t, e) {
      var n;
      $();
      var r = e instanceof E || e instanceof b,
        s = Array.prototype.slice.call(arguments, r ? 2 : 1);
      s.unshift(i(t)),
        r || (e = window.Parsley),
        (n = e).trigger.apply(n, _toConsumableArray(s));
    });
  return (
    t.extend(!0, R, {
      asyncValidators: {
        default: {
          fn: function(t) {
            return t.status >= 200 && t.status < 300;
          },
          url: !1
        },
        reverse: {
          fn: function(t) {
            return t.status < 200 || t.status >= 300;
          },
          url: !1
        }
      },
      addAsyncValidator: function(t, e, i, n) {
        return (
          (R.asyncValidators[t] = {fn: e, url: i || !1, options: n || {}}), this
        );
      }
    }),
    R.addValidator("remote", {
      requirementType: {
        "": "string",
        validator: "string",
        reverse: "boolean",
        options: "object"
      },
      validateString: function(e, i, n, r) {
        var s,
          o,
          a = {},
          l = n.validator || (!0 === n.reverse ? "reverse" : "default");
        if ("undefined" == typeof R.asyncValidators[l])
          throw new Error("Calling an undefined async validator: `" + l + "`");
        (i = R.asyncValidators[l].url || i).indexOf("{value}") > -1
          ? (i = i.replace("{value}", encodeURIComponent(e)))
          : (a[
              r.element.getAttribute("name") || r.element.getAttribute("id")
            ] = e);
        var u = t.extend(!0, n.options || {}, R.asyncValidators[l].options);
        (s = t.extend(!0, {}, {url: i, data: a, type: "GET"}, u)),
          r.trigger("field:ajaxoptions", r, s),
          (o = t.param(s)),
          "undefined" == typeof R._remoteCache && (R._remoteCache = {});
        var h = (R._remoteCache[o] = R._remoteCache[o] || t.ajax(s)),
          c = function() {
            var e = R.asyncValidators[l].fn.call(r, h, i, n);
            return e || (e = t.Deferred().reject()), t.when(e);
          };
        return h.then(c, c);
      },
      priority: -1
    }),
    R.on("form:submit", function() {
      R._remoteCache = {};
    }),
    (l.prototype.addAsyncValidator = function() {
      return (
        o.warnOnce(
          "Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"
        ),
        R.addAsyncValidator.apply(R, arguments)
      );
    }),
    R.addMessages("en", {
      defaultMessage: "This value seems to be invalid.",
      type: {
        email: "This value should be a valid email.",
        url: "This value should be a valid url.",
        number: "This value should be a valid number.",
        integer: "This value should be a valid integer.",
        digits: "This value should be digits.",
        alphanum: "This value should be alphanumeric."
      },
      notblank: "This value should not be blank.",
      required: "This value is required.",
      pattern: "This value seems to be invalid.",
      min: "This value should be greater than or equal to %s.",
      max: "This value should be lower than or equal to %s.",
      range: "This value should be between %s and %s.",
      minlength:
        "This value is too short. It should have %s characters or more.",
      maxlength:
        "This value is too long. It should have %s characters or fewer.",
      length:
        "This value length is invalid. It should be between %s and %s characters long.",
      mincheck: "You must select at least %s choices.",
      maxcheck: "You must select %s choices or fewer.",
      check: "You must select between %s and %s choices.",
      equalto: "This value should be the same."
    }),
    R.setLocale("en"),
    new n().install(),
    R
  );
}),
  $(document).on("turbolinks:load", function() {
    $("#accordion button[data-toggle='collapse']").click(function(t) {
      "true" == $(this).attr("aria-expanded") &&
        (t.preventDefault(), t.stopPropagation());
    }),
      (function() {
        return window.innerWidth <= 770;
      })() &&
        $("#accordion .tiles-menu .tile-link").on("click", function() {
          const t = $("#accordion .panel").offset().top - 100;
          $([document.documentElement, document.body]).animate(
            {scrollTop: t},
            800
          );
        });
  });
