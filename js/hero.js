"use strict";

function PageLoader(args) {
    this.o = $.extend(!1, args, {
        defaultColor: $("body").css("background-color"),
        startTime: Date.now()
    }), this.init()
}

function socialOverlay() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) jQuery.noop();
    else {
        if ($(window).width() >= 1600) {
            var heroHeight = $("#hero").outerHeight() + 600;
            $("#hero .overlay").height(heroHeight),
                $("#heroWrapper .overlay > span").css("top", heroHeight / 2 - 300)
        } else {
            var heroHeight = $("#hero").outerHeight();
            $("#hero .overlay").height(heroHeight)
        }
        $("#hero .social, #hero .social > a").off("mouseenter mouseleave"),
            $("#hero .social").on("mouseenter", function() {
                $(".overlays-wrapper").css({
                    opacity: 1,
                    "z-index": 9999
                })
            }),
            $("#hero .social > a").on("mouseenter", function() {
                $(this).fadeTo(100, 1), $(this).siblings().fadeTo(100, .5)
            }),
            $("#hero .social").on("mouseleave", function() {
                $("#hero .social > a").fadeTo(100, 1)
            }),
            $("#hero .social > a.twitter").on("mouseenter", function() {
                $(".overlay.twitter").addClass("animate"), $(".overlay.twitter span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#55acee")
            }).on("mouseleave", function() {
                $(".overlay.twitter").removeClass("animate"), $(".overlay.twitter span").removeClass("animate-scale"),
                    $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            }),
            $("#hero .social > a.facebook").on("mouseenter", function() {
                $(".overlay.facebook").addClass("animate"), $(".overlay.facebook span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#3b5998")
            }).on("mouseleave", function() {
                $(".overlay.facebook").removeClass("animate"), $(".overlay.facebook span").removeClass("animate-scale"), $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            }),
            $("#hero .social > a.dribbble").on("mouseenter", function() {
                $(".overlay.dribbble").addClass("animate"), $(".overlay.dribbble span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#ea4c89")
            }).on("mouseleave", function() {
                $(".overlay.dribbble").removeClass("animate"), $(".overlay.dribbble span").removeClass("animate-scale"), $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            }),
            $("#hero .social > a.instagram").on("mouseenter", function() {
                $(".overlay.instagram").addClass("animate"), $(".overlay.instagram span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#8d6851")
            }).on("mouseleave", function() {
                $(".overlay.instagram").removeClass("animate"), $(".overlay.instagram span").removeClass("animate-scale"), $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            }),
            $("#hero .social > a.github").on("mouseenter", function() {
                $(".overlay.github").addClass("animate"), $(".overlay.github span").addClass("animate-scale"), $(".overlays-wrapper, #heroBackground").css("background-color", "#162221")
            }).on("mouseleave", function() {
                $(".overlay.github").removeClass("animate"), $(".overlay.github span").removeClass("animate-scale"), $(".overlays-wrapper").css("background-color", "transparent"), $("#heroBackground").css("background-color", "#00b5ec")
            })
    }
}

function verticallyCenterTweets() {
    $(".grid .twitter span.tweet").each(function() {
        var tweetNegativeMargin = -$(this).outerHeight() / 2;
        $(this).css("margin-top", tweetNegativeMargin)
    })
}

function centerTagsBlock() {
    var tagsBlock = $(".grid #case-study-block-tag .wrapper"),
        tagsBlockNegativeMarginV = -tagsBlock.outerHeight() / 2,
        tagsBlockNegativeMarginH = -tagsBlock.outerWidth() / 2;
    tagsBlock.css({
        "margin-top": tagsBlockNegativeMarginV - 10 + "px",
        "margin-left": tagsBlockNegativeMarginH + "px"
    })
}
/*!

 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=89b84319e8f2e10a5015)
 * Config saved to config.json and https://gist.github.com/89b84319e8f2e10a5015
 */

if (function(global, factory) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) {
            if (!w.document) throw new Error("jQuery requires a window with a document");
            return factory(w)
        } : factory(global)
    }("undefined" != typeof window ? window : this, function(window, noGlobal) {
        function isArraylike(obj) {
            var length = obj.length,
                type = jQuery.type(obj);
            return "function" === type || jQuery.isWindow(obj) ? !1 : 1 === obj.nodeType && length ? !0 : "array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj
        }

        function winnow(elements, qualifier, not) {
            if (jQuery.isFunction(qualifier))
                return jQuery.grep(elements, function(elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not
                });
            if (qualifier.nodeType) return jQuery.grep(elements,
                function(elem) {
                    return elem === qualifier !== not
                });
            if ("string" == typeof qualifier) {
                if (risSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
                qualifier = jQuery.filter(qualifier, elements)
            }
            return jQuery.grep(elements, function(elem) {
                return jQuery.inArray(elem, qualifier) >= 0 !== not
            })
        }

        function sibling(cur, dir) {
            do cur = cur[dir]; while (cur && 1 !== cur.nodeType);
            return cur
        }

        function createOptions(options) {
            var object = optionsCache[options] = {};
            return jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
                object[flag] = !0
            }), object
        }

        function detach() {
            document.addEventListener ? (document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1)) : (document.detachEvent("onreadystatechange", completed), window.detachEvent("onload", completed))
        }

        function completed() {
            (document.addEventListener || "load" === event.type || "complete" === document.readyState) && (detach(), jQuery.ready())
        }

        function dataAttr(elem, key, data) {
            if (void 0 === data && 1 === elem.nodeType) {
                var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
                if (data = elem.getAttribute(name), "string" == typeof data) {
                    try {
                        data = "true" === data ? !0 : "false" === data ? !1 : "null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
                    } catch (e) {}
                    jQuery.data(elem, key, data)
                } else data = void 0
            }
            return data
        }

        function isEmptyDataObject(obj) {
            var name;
            for (name in obj)
                if (("data" !== name || !jQuery.isEmptyObject(obj[name])) && "toJSON" !== name) return !1;
            return !0
        }

        function internalData(elem, name, data, pvt) {
            if (jQuery.acceptData(elem)) {
                var ret, thisCache, internalKey = jQuery.expando,
                    isNode = elem.nodeType,
                    cache = isNode ? jQuery.cache : elem,
                    id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
                if (id && cache[id] && (pvt || cache[id].data) || void 0 !== data || "string" != typeof name) return id || (id = isNode ? elem[internalKey] = deletedIds.pop() || jQuery.guid++ : internalKey), cache[id] || (cache[id] = isNode ? {} : {
                    toJSON: jQuery.noop
                }), ("object" == typeof name || "function" == typeof name) && (pvt ? cache[id] = jQuery.extend(cache[id], name) : cache[id].data = jQuery.extend(cache[id].data, name)), thisCache = cache[id], pvt || (thisCache.data || (thisCache.data = {}), thisCache = thisCache.data), void 0 !== data && (thisCache[jQuery.camelCase(name)] = data), "string" == typeof name ? (ret = thisCache[name], null == ret && (ret = thisCache[jQuery.camelCase(name)])) : ret = thisCache, ret
            }
        }

        function internalRemoveData(elem, name, pvt) {
            if (jQuery.acceptData(elem)) {
                var thisCache, i, isNode = elem.nodeType,
                    cache = isNode ? jQuery.cache : elem,
                    id = isNode ? elem[jQuery.expando] : jQuery.expando;
                if (cache[id]) {
                    if (name && (thisCache = pvt ? cache[id] : cache[id].data)) {
                        jQuery.isArray(name) ? name = name.concat(jQuery.map(name, jQuery.camelCase)) : name in thisCache ? name = [name] : (name = jQuery.camelCase(name), name = name in thisCache ? [name] : name.split(" ")), i = name.length;
                        for (; i--;) delete thisCache[name[i]];
                        if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) return
                    }(pvt || (delete cache[id].data, isEmptyDataObject(cache[id]))) && (isNode ? jQuery.cleanData([elem], !0) : support.deleteExpando || cache != cache.window ? delete cache[id] : cache[id] = null)
                }
            }
        }

        function returnTrue() {
            return !0
        }

        function returnFalse() {
            return !1
        }

        function safeActiveElement() {
            try {
                return document.activeElement
            } catch (err) {}
        }

        function createSafeFragment(document) {
            var list = nodeNames.split("|"),
                safeFrag = document.createDocumentFragment();
            if (safeFrag.createElement)
                for (; list.length;) safeFrag.createElement(list.pop());
            return safeFrag
        }

        function getAll(context, tag) {
            var elems, elem, i = 0,
                found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== strundefined ? context.querySelectorAll(tag || "*") : void 0;
            if (!found)
                for (found = [], elems = context.childNodes || context; null != (elem = elems[i]); i++) !tag || jQuery.nodeName(elem, tag) ? found.push(elem) : jQuery.merge(found, getAll(elem, tag));
            return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found
        }

        function fixDefaultChecked(elem) {
            rcheckableType.test(elem.type) && (elem.defaultChecked = elem.checked)
        }

        function manipulationTarget(elem, content) {
            return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
        }

        function disableScript(elem) {
            return elem.type = (null !== jQuery.find.attr(elem, "type")) + "/" + elem.type, elem
        }

        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            return match ? elem.type = match[1] : elem.removeAttribute("type"), elem
        }

        function setGlobalEval(elems, refElements) {
            for (var elem, i = 0; null != (elem = elems[i]); i++) jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"))
        }

        function cloneCopyEvent(src, dest) {
            if (1 === dest.nodeType && jQuery.hasData(src)) {
                var type, i, l, oldData = jQuery._data(src),
                    curData = jQuery._data(dest, oldData),
                    events = oldData.events;
                if (events) {
                    delete curData.handle, curData.events = {};
                    for (type in events)
                        for (i = 0, l = events[type].length; l > i; i++) jQuery.event.add(dest, type, events[type][i])
                }
                curData.data && (curData.data = jQuery.extend({}, curData.data))
            }
        }

        function fixCloneNodeIssues(src, dest) {
            var nodeName, e, data;
            if (1 === dest.nodeType) {
                if (nodeName = dest.nodeName.toLowerCase(), !support.noCloneEvent && dest[jQuery.expando]) {
                    data = jQuery._data(dest);
                    for (e in data.events) jQuery.removeEvent(dest, e, data.handle);
                    dest.removeAttribute(jQuery.expando)
                }
                "script" === nodeName && dest.text !== src.text ? (disableScript(dest).text = src.text, restoreScript(dest)) : "object" === nodeName ? (dest.parentNode && (dest.outerHTML = src.outerHTML), support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML) && (dest.innerHTML = src.innerHTML)) : "input" === nodeName && rcheckableType.test(src.type) ? (dest.defaultChecked = dest.checked = src.checked, dest.value !== src.value && (dest.value = src.value)) : "option" === nodeName ? dest.defaultSelected = dest.selected = src.defaultSelected : ("input" === nodeName || "textarea" === nodeName) && (dest.defaultValue = src.defaultValue)
            }
        }

        function actualDisplay(name, doc) {
            var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body),
                display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
            return elem.detach(), display
        }

        function defaultDisplay(nodeName) {
            var doc = document,
                display = elemdisplay[nodeName];
            return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = (iframe[0].contentWindow || iframe[0].contentDocument).document, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display
        }

        function addGetHookIf(conditionFn, hookFn) {
            return {
                get: function() {
                    var condition = conditionFn();
                    if (null != condition) return condition ? void delete this.get : (this.get = hookFn).apply(this, arguments)
                }
            }
        }

        function vendorPropName(style, name) {
            if (name in style) return name;
            for (var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length; i--;)
                if (name = cssPrefixes[i] + capName, name in style) return name;
            return origName
        }

        function showHide(elements, show) {
            for (var display, elem, hidden, values = [], index = 0, length = elements.length; length > index; index++) elem = elements[index], elem.style && (values[index] = jQuery._data(elem, "olddisplay"), display = elem.style.display, show ? (values[index] || "none" !== display || (elem.style.display = ""), "" === elem.style.display && isHidden(elem) && (values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), (display && "none" !== display || !hidden) && jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))));
            for (index = 0; length > index; index++) elem = elements[index], elem.style && (show && "none" !== elem.style.display && "" !== elem.style.display || (elem.style.display = show ? values[index] || "" : "none"));
            return elements
        }

        function setPositiveNumber(elem, value, subtract) {
            var matches = rnumsplit.exec(value);
            return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value
        }

        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0, val = 0; 4 > i; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
            return val
        }

        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox = !0,
                val = "width" === name ? elem.offsetWidth : elem.offsetHeight,
                styles = getStyles(elem),
                isBorderBox = support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
            if (0 >= val || null == val) {
                if (val = curCSS(elem, name, styles), (0 > val || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) return val;
                valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), val = parseFloat(val) || 0
            }
            return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
        }

        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing)
        }

        function createFxNow() {
            return setTimeout(function() {
                fxNow = void 0
            }), fxNow = jQuery.now()
        }

        function genFx(type, includeWidth) {
            var which, attrs = {
                    height: type
                },
                i = 0;
            for (includeWidth = includeWidth ? 1 : 0; 4 > i; i += 2 - includeWidth) which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
            return includeWidth && (attrs.opacity = attrs.width = type), attrs
        }

        function createTween(value, prop, animation) {
            for (var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length; length > index; index++)
                if (tween = collection[index].call(animation, prop, value)) return tween
        }

        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
                orig = {},
                style = elem.style,
                hidden = elem.nodeType && isHidden(elem),
                dataShow = jQuery._data(elem, "fxshow");
            opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
                hooks.unqueued || oldfire()
            }), hooks.unqueued++, anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire()
                })
            })), 1 === elem.nodeType && ("height" in props || "width" in props) && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], display = jQuery.css(elem, "display"), checkDisplay = "none" === display ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display, "inline" === checkDisplay && "none" === jQuery.css(elem, "float") && (support.inlineBlockNeedsLayout && "inline" !== defaultDisplay(elem.nodeName) ? style.zoom = 1 : style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", support.shrinkWrapBlocks() || anim.always(function() {
                style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2]
            }));
            for (prop in props)
                if (value = props[prop], rfxtypes.exec(value)) {
                    if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
                        if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                        hidden = !0
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
                } else display = void 0;
            if (jQuery.isEmptyObject(orig)) "inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display) && (style.display = display);
            else {
                dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = jQuery._data(elem, "fxshow", {}), toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function() {
                    jQuery(elem).hide()
                }), anim.done(function() {
                    var prop;
                    jQuery._removeData(elem, "fxshow");
                    for (prop in orig) jQuery.style(elem, prop, orig[prop])
                });
                for (prop in orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = "width" === prop || "height" === prop ? 1 : 0))
            }
        }

        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props)
                if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
                    value = hooks.expand(value), delete props[name];
                    for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing)
                } else specialEasing[name] = easing
        }

        function Animation(elem, properties, options) {
            var result, stopped, index = 0,
                length = animationPrefilters.length,
                deferred = jQuery.Deferred().always(function() {
                    delete tick.elem
                }),
                tick = function() {
                    if (stopped) return !1;
                    for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; length > index; index++) animation.tweens[index].run(percent);
                    return deferred.notifyWith(elem, [animation, percent, remaining]), 1 > percent && length ? remaining : (deferred.resolveWith(elem, [animation]), !1)
                },
                animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(!0, {
                        specialEasing: {}
                    }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function(prop, end) {
                        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                        return animation.tweens.push(tween), tween
                    },
                    stop: function(gotoEnd) {
                        var index = 0,
                            length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) return this;
                        for (stopped = !0; length > index; index++) animation.tweens[index].run(1);
                        return gotoEnd ? deferred.resolveWith(elem, [animation, gotoEnd]) : deferred.rejectWith(elem, [animation, gotoEnd]), this
                    }
                }),
                props = animation.props;
            for (propFilter(props, animation.opts.specialEasing); length > index; index++)
                if (result = animationPrefilters[index].call(animation, elem, props, animation.opts)) return result;
            return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
        }

        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
                var dataType, i = 0,
                    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
                if (jQuery.isFunction(func))
                    for (; dataType = dataTypes[i++];) "+" === dataType.charAt(0) ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func)
            }
        }

        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            function inspect(dataType) {
                var selected;
                return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1)
                }), selected
            }
            var inspected = {},
                seekingTransport = structure === transports;
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
        }

        function ajaxExtend(target, src) {
            var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
            return deep && jQuery.extend(!0, target, deep), target
        }

        function ajaxHandleResponses(s, jqXHR, responses) {
            for (var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
                 "*" === dataTypes[0];) dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
            if (ct)
                for (type in contents)
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break
                    }
            if (dataTypes[0] in responses) finalDataType = dataTypes[0];
            else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break
                    }
                    firstDataType || (firstDataType = type)
                }
                finalDataType = finalDataType || firstDataType
            }
            return finalDataType ? (finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]) : void 0
        }

        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {},
                dataTypes = s.dataTypes.slice();
            if (dataTypes[1])
                for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
            for (current = dataTypes.shift(); current;)
                if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift())
                    if ("*" === current) current = prev;
                    else if ("*" !== prev && prev !== current) {
                        if (conv = converters[prev + " " + current] || converters["* " + current], !conv)
                            for (conv2 in converters)
                                if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                                    conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1]));
                                    break
                                }
                        if (conv !== !0)
                            if (conv && s["throws"]) response = conv(response);
                            else try {
                                response = conv(response)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                }
                            }
                    }
            return {
                state: "success",
                data: response
            }
        }

        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (jQuery.isArray(obj)) jQuery.each(obj, function(i, v) {
                traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v ? i : "") + "]", v, traditional, add)
            });
            else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj);
            else
                for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
        }

        function createStandardXHR() {
            try {
                return new window.XMLHttpRequest
            } catch (e) {}
        }

        function createActiveXHR() {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function getWindow(elem) {
            return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType ? elem.defaultView || elem.parentWindow : !1
        }
        var deletedIds = [],
            slice = deletedIds.slice,
            concat = deletedIds.concat,
            push = deletedIds.push,
            indexOf = deletedIds.indexOf,
            class2type = {},
            toString = class2type.toString,
            hasOwn = class2type.hasOwnProperty,
            support = {},
            version = "1.11.2",
            jQuery = function(selector, context) {
                return new jQuery.fn.init(selector, context)
            },
            rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rmsPrefix = /^-ms-/,
            rdashAlpha = /-([\da-z])/gi,
            fcamelCase = function(all, letter) {
                return letter.toUpperCase()
            };
        jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            selector: "",
            length: 0,
            toArray: function() {
                return slice.call(this)
            },
            get: function(num) {
                return null != num ? 0 > num ? this[num + this.length] : this[num] : slice.call(this)
            },
            pushStack: function(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                return ret.prevObject = this, ret.context = this.context, ret
            },
            each: function(callback, args) {
                return jQuery.each(this, callback, args)
            },
            map: function(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem)
                }))
            },
            slice: function() {
                return this.pushStack(slice.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(i) {
                var len = this.length,
                    j = +i + (0 > i ? len : 0);
                return this.pushStack(j >= 0 && len > j ? [this[j]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: push,
            sort: deletedIds.sort,
            splice: deletedIds.splice
        }, jQuery.extend = jQuery.fn.extend = function() {
            var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = !1;
            for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, i--); length > i; i++)
                if (null != (options = arguments[i]))
                    for (name in options) src = target[name], copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
            return target
        }, jQuery.extend({
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(msg) {
                throw new Error(msg)
            },
            noop: function() {},
            isFunction: function(obj) {
                return "function" === jQuery.type(obj)
            },
            isArray: Array.isArray || function(obj) {
                return "array" === jQuery.type(obj)
            },
            isWindow: function(obj) {
                return null != obj && obj == obj.window
            },
            isNumeric: function(obj) {
                return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0
            },
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) return !1;
                return !0
            },
            isPlainObject: function(obj) {
                var key;
                if (!obj || "object" !== jQuery.type(obj) || obj.nodeType || jQuery.isWindow(obj)) return !1;
                try {
                    if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (support.ownLast)
                    for (key in obj) return hasOwn.call(obj, key);
                for (key in obj);
                return void 0 === key || hasOwn.call(obj, key)
            },
            type: function(obj) {
                return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj
            },
            globalEval: function(data) {
                data && jQuery.trim(data) && (window.execScript || function(data) {
                    window.eval.call(window, data)
                })(data)
            },
            camelCase: function(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
            },
            nodeName: function(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
            },
            each: function(obj, callback, args) {
                var value, i = 0,
                    length = obj.length,
                    isArray = isArraylike(obj);
                if (args) {
                    if (isArray)
                        for (; length > i && (value = callback.apply(obj[i], args), value !== !1); i++);
                    else
                        for (i in obj)
                            if (value = callback.apply(obj[i], args), value === !1) break
                } else if (isArray)
                    for (; length > i && (value = callback.call(obj[i], i, obj[i]), value !== !1); i++);
                else
                    for (i in obj)
                        if (value = callback.call(obj[i], i, obj[i]), value === !1) break; return obj
            },
            trim: function(text) {
                return null == text ? "" : (text + "").replace(rtrim, "")
            },
            makeArray: function(arr, results) {
                var ret = results || [];
                return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret
            },
            inArray: function(elem, arr, i) {
                var len;
                if (arr) {
                    if (indexOf) return indexOf.call(arr, elem, i);
                    for (len = arr.length, i = i ? 0 > i ? Math.max(0, len + i) : i : 0; len > i; i++)
                        if (i in arr && arr[i] === elem) return i
                }
                return -1
            },
            merge: function(first, second) {
                for (var len = +second.length, j = 0, i = first.length; len > j;) first[i++] = second[j++];
                if (len !== len)
                    for (; void 0 !== second[j];) first[i++] = second[j++];
                return first.length = i, first
            },
            grep: function(elems, callback, invert) {
                for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; length > i; i++) callbackInverse = !callback(elems[i], i), callbackInverse !== callbackExpect && matches.push(elems[i]);
                return matches
            },
            map: function(elems, callback, arg) {
                var value, i = 0,
                    length = elems.length,
                    isArray = isArraylike(elems),
                    ret = [];
                if (isArray)
                    for (; length > i; i++) value = callback(elems[i], i, arg), null != value && ret.push(value);
                else
                    for (i in elems) value = callback(elems[i], i, arg), null != value && ret.push(value);
                return concat.apply([], ret)
            },
            guid: 1,
            proxy: function(fn, context) {
                var args, proxy, tmp;
                return "string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn) ? (args = slice.call(arguments, 2), proxy = function() {
                    return fn.apply(context || this, args.concat(slice.call(arguments)))
                }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy) : void 0
            },
            now: function() {
                return +new Date
            },
            support: support
        }), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase()
        });
        var Sizzle =
            /*!
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
            function(window) {
                function Sizzle(selector, context, results, seed) {
                    var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, results = results || [], nodeType = context.nodeType, "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
                    if (!seed && documentIsHTML) {
                        if (11 !== nodeType && (match = rquickExpr.exec(selector)))
                            if (m = match[1]) {
                                if (9 === nodeType) {
                                    if (elem = context.getElementById(m), !elem || !elem.parentNode) return results;
                                    if (elem.id === m) return results.push(elem), results
                                } else if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results
                            } else {
                                if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;
                                if ((m = match[3]) && support.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results
                            }
                        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (nid = old = expando, newContext = context, newSelector = 1 !== nodeType && selector, 1 === nodeType && "object" !== context.nodeName.toLowerCase()) {
                                for (groups = tokenize(selector), (old = context.getAttribute("id")) ? nid = old.replace(rescape, "\\$&") : context.setAttribute("id", nid), nid = "[id='" + nid + "'] ", i = groups.length; i--;) groups[i] = nid + toSelector(groups[i]);
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context, newSelector = groups.join(",")
                            }
                            if (newSelector) try {
                                return push.apply(results, newContext.querySelectorAll(newSelector)), results
                            } catch (qsaError) {} finally {
                                old || context.removeAttribute("id")
                            }
                        }
                    }
                    return select(selector.replace(rtrim, "$1"), context, results, seed)
                }

                function createCache() {
                    function cache(key, value) {
                        return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value
                    }
                    var keys = [];
                    return cache
                }

                function markFunction(fn) {
                    return fn[expando] = !0, fn
                }

                function assert(fn) {
                    var div = document.createElement("div");
                    try {
                        return !!fn(div)
                    } catch (e) {
                        return !1
                    } finally {
                        div.parentNode && div.parentNode.removeChild(div), div = null
                    }
                }

                function addHandle(attrs, handler) {
                    for (var arr = attrs.split("|"), i = attrs.length; i--;) Expr.attrHandle[arr[i]] = handler
                }

                function siblingCheck(a, b) {
                    var cur = b && a,
                        diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
                    if (diff) return diff;
                    if (cur)
                        for (; cur = cur.nextSibling;)
                            if (cur === b) return -1;
                    return a ? 1 : -1
                }

                function createInputPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return "input" === name && elem.type === type
                    }
                }

                function createButtonPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return ("input" === name || "button" === name) && elem.type === type
                    }
                }

                function createPositionalPseudo(fn) {
                    return markFunction(function(argument) {
                        return argument = +argument, markFunction(function(seed, matches) {
                            for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--;) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]))
                        })
                    })
                }

                function testContext(context) {
                    return context && "undefined" != typeof context.getElementsByTagName && context
                }

                function setFilters() {}

                function toSelector(tokens) {
                    for (var i = 0, len = tokens.length, selector = ""; len > i; i++) selector += tokens[i].value;
                    return selector
                }

                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir,
                        checkNonElements = base && "parentNode" === dir,
                        doneName = done++;
                    return combinator.first ? function(elem, context, xml) {
                        for (; elem = elem[dir];)
                            if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml)
                    } : function(elem, context, xml) {
                        var oldCache, outerCache, newCache = [dirruns, doneName];
                        if (xml) {
                            for (; elem = elem[dir];)
                                if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0
                        } else
                            for (; elem = elem[dir];)
                                if (1 === elem.nodeType || checkNonElements) {
                                    if (outerCache = elem[expando] || (elem[expando] = {}), (oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                                    if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) return !0
                                }
                    }
                }

                function elementMatcher(matchers) {
                    return matchers.length > 1 ? function(elem, context, xml) {
                        for (var i = matchers.length; i--;)
                            if (!matchers[i](elem, context, xml)) return !1;
                        return !0
                    } : matchers[0]
                }

                function multipleContexts(selector, contexts, results) {
                    for (var i = 0, len = contexts.length; len > i; i++) Sizzle(selector, contexts[i], results);
                    return results
                }

                function condense(unmatched, map, filter, context, xml) {
                    for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; len > i; i++)(elem = unmatched[i]) && (!filter || filter(elem, context, xml)) && (newUnmatched.push(elem), mapped && map.push(i));
                    return newUnmatched
                }

                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
                        var temp, i, elem, preMap = [],
                            postMap = [],
                            preexisting = results.length,
                            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                            matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml),
                            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                        if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
                            for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;)(elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                        if (seed) {
                            if (postFinder || preFilter) {
                                if (postFinder) {
                                    for (temp = [], i = matcherOut.length; i--;)(elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                                    postFinder(null, matcherOut = [], temp, xml)
                                }
                                for (i = matcherOut.length; i--;)(elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem))
                            }
                        } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut)
                    })
                }

                function matcherFromTokens(tokens) {
                    for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                        return elem === checkContext
                    }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                        return indexOf(checkContext, elem) > -1
                    }, implicitRelative, !0), matchers = [function(elem, context, xml) {
                        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                        return checkContext = null, ret
                    }]; len > i; i++)
                        if (matcher = Expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];
                        else {
                            if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                                for (j = ++i; len > j && !Expr.relative[tokens[j].type]; j++);
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                        value: " " === tokens[i - 2].type ? "*" : ""
                                    })).replace(rtrim, "$1"), matcher, j > i && matcherFromTokens(tokens.slice(i, j)), len > j && matcherFromTokens(tokens = tokens.slice(j)), len > j && toSelector(tokens))
                            }
                            matchers.push(matcher)
                        }
                    return elementMatcher(matchers)
                }

                function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                    var bySet = setMatchers.length > 0,
                        byElement = elementMatchers.length > 0,
                        superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0,
                                i = "0",
                                unmatched = seed && [],
                                setMatched = [],
                                contextBackup = outermostContext,
                                elems = seed || byElement && Expr.find.TAG("*", outermost),
                                dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1,
                                len = elems.length;
                            for (outermost && (outermostContext = context !== document && context); i !== len && null != (elem = elems[i]); i++) {
                                if (byElement && elem) {
                                    for (j = 0; matcher = elementMatchers[j++];)
                                        if (matcher(elem, context, xml)) {
                                            results.push(elem);
                                            break
                                        }
                                    outermost && (dirruns = dirrunsUnique)
                                }
                                bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem))
                            }
                            if (matchedCount += i, bySet && i !== matchedCount) {
                                for (j = 0; matcher = setMatchers[j++];) matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    if (matchedCount > 0)
                                        for (; i--;) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                                    setMatched = condense(setMatched)
                                }
                                push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results)
                            }
                            return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched
                        };
                    return bySet ? markFunction(superMatcher) : superMatcher
                }
                var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date,
                    preferredDoc = window.document,
                    dirruns = 0,
                    done = 0,
                    classCache = createCache(),
                    tokenCache = createCache(),
                    compilerCache = createCache(),
                    sortOrder = function(a, b) {
                        return a === b && (hasDuplicate = !0), 0
                    },
                    MAX_NEGATIVE = 1 << 31,
                    hasOwn = {}.hasOwnProperty,
                    arr = [],
                    pop = arr.pop,
                    push_native = arr.push,
                    push = arr.push,
                    slice = arr.slice,
                    indexOf = function(list, elem) {
                        for (var i = 0, len = list.length; len > i; i++)
                            if (list[i] === elem) return i;
                        return -1
                    },
                    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    whitespace = "[\\x20\\t\\r\\n\\f]",
                    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    identifier = characterEncoding.replace("w", "w#"),
                    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                    pseudos = ":(" + characterEncoding + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)",
                    rwhitespace = new RegExp(whitespace + "+", "g"),
                    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                    rpseudo = new RegExp(pseudos),
                    ridentifier = new RegExp("^" + identifier + "$"),
                    matchExpr = {
                        ID: new RegExp("^#(" + characterEncoding + ")"),
                        CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
                        TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    },
                    rinputs = /^(?:input|select|textarea|button)$/i,
                    rheader = /^h\d$/i,
                    rnative = /^[^{]+\{\s*\[native \w/,
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    rsibling = /[+~]/,
                    rescape = /'|\\/g,
                    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                    funescape = function(_, escaped, escapedWhitespace) {
                        var high = "0x" + escaped - 65536;
                        return high !== high || escapedWhitespace ? escaped : 0 > high ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320)
                    },
                    unloadHandler = function() {
                        setDocument()
                    };
                try {
                    push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType
                } catch (e) {
                    push = {
                        apply: arr.length ? function(target, els) {
                            push_native.apply(target, slice.call(els))
                        } : function(target, els) {
                            for (var j = target.length, i = 0; target[j++] = els[i++];);
                            target.length = j - 1
                        }
                    }
                }
                support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
                    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                    return documentElement ? "HTML" !== documentElement.nodeName : !1
                }, setDocument = Sizzle.setDocument = function(node) {
                    var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
                    return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = doc.documentElement, parent = doc.defaultView, parent && parent !== parent.top && (parent.addEventListener ? parent.addEventListener("unload", unloadHandler, !1) : parent.attachEvent && parent.attachEvent("onunload", unloadHandler)), documentIsHTML = !isXML(doc), support.attributes = assert(function(div) {
                        return div.className = "i", !div.getAttribute("className")
                    }), support.getElementsByTagName = assert(function(div) {
                        return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length
                    }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName), support.getById = assert(function(div) {
                        return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length
                    }), support.getById ? (Expr.find.ID = function(id, context) {
                        if ("undefined" != typeof context.getElementById && documentIsHTML) {
                            var m = context.getElementById(id);
                            return m && m.parentNode ? [m] : []
                        }
                    }, Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId
                        }
                    }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
                            return node && node.value === attrId
                        }
                    }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                        return "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0
                    } : function(tag, context) {
                        var elem, tmp = [],
                            i = 0,
                            results = context.getElementsByTagName(tag);
                        if ("*" === tag) {
                            for (; elem = results[i++];) 1 === elem.nodeType && tmp.push(elem);
                            return tmp
                        }
                        return results
                    }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                            return documentIsHTML ? context.getElementsByClassName(className) : void 0
                        }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(div) {
                        docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\f]' msallowcapture=''><option selected=''></option></select>", div.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), div.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), div.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]")
                    }), assert(function(div) {
                        var input = doc.createElement("input");
                        input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("name", "D"), div.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:")
                    })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(div) {
                        support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), rbuggyMatches.push("!=", pseudos)
                    }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                        var adown = 9 === a.nodeType ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, sortOrder = hasCompare ? function(a, b) {
                        if (a === b) return hasDuplicate = !0, 0;
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1)
                    } : function(a, b) {
                        if (a === b) return hasDuplicate = !0, 0;
                        var cur, i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [a],
                            bp = [b];
                        if (!aup || !bup) return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                        if (aup === bup) return siblingCheck(a, b);
                        for (cur = a; cur = cur.parentNode;) ap.unshift(cur);
                        for (cur = b; cur = cur.parentNode;) bp.unshift(cur);
                        for (; ap[i] === bp[i];) i++;
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                    }, doc) : document
                }, Sizzle.matches = function(expr, elements) {
                    return Sizzle(expr, null, null, elements)
                }, Sizzle.matchesSelector = function(elem, expr) {
                    if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), !(!support.matchesSelector || !documentIsHTML || rbuggyMatches && rbuggyMatches.test(expr) || rbuggyQSA && rbuggyQSA.test(expr))) try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret
                    } catch (e) {}
                    return Sizzle(expr, document, null, [elem]).length > 0
                }, Sizzle.contains = function(context, elem) {
                    return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem)
                }, Sizzle.attr = function(elem, name) {
                    (elem.ownerDocument || elem) !== document && setDocument(elem);
                    var fn = Expr.attrHandle[name.toLowerCase()],
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                    return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                }, Sizzle.error = function(msg) {
                    throw new Error("Syntax error, unrecognized expression: " + msg)
                }, Sizzle.uniqueSort = function(results) {
                    var elem, duplicates = [],
                        j = 0,
                        i = 0;
                    if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
                        for (; elem = results[i++];) elem === results[i] && (j = duplicates.push(i));
                        for (; j--;) results.splice(duplicates[j], 1)
                    }
                    return sortInput = null, results
                }, getText = Sizzle.getText = function(elem) {
                    var node, ret = "",
                        i = 0,
                        nodeType = elem.nodeType;
                    if (nodeType) {
                        if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                            if ("string" == typeof elem.textContent) return elem.textContent;
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem)
                        } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue
                    } else
                        for (; node = elem[i++];) ret += getText(node);
                    return ret
                }, Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(match) {
                            return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4)
                        },
                        CHILD: function(match) {
                            return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match
                        },
                        PSEUDO: function(match) {
                            var excess, unquoted = !match[6] && match[2];
                            return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(nodeNameSelector) {
                            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                            return "*" === nodeNameSelector ? function() {
                                return !0
                            } : function(elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                            }
                        },
                        CLASS: function(className) {
                            var pattern = classCache[className + " "];
                            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                                    return pattern.test("string" == typeof elem.className && elem.className || "undefined" != typeof elem.getAttribute && elem.getAttribute("class") || "")
                                })
                        },
                        ATTR: function(name, operator, check) {
                            return function(elem) {
                                var result = Sizzle.attr(elem, name);
                                return null == result ? "!=" === operator : operator ? (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator ? result === check || result.slice(0, check.length + 1) === check + "-" : !1) : !0
                            }
                        },
                        CHILD: function(type, what, argument, first, last) {
                            var simple = "nth" !== type.slice(0, 3),
                                forward = "last" !== type.slice(-4),
                                ofType = "of-type" === what;
                            return 1 === first && 0 === last ? function(elem) {
                                return !!elem.parentNode
                            } : function(elem, context, xml) {
                                var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType;
                                if (parent) {
                                    if (simple) {
                                        for (; dir;) {
                                            for (node = elem; node = node[dir];)
                                                if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                            start = dir = "only" === type && !start && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                                        for (outerCache = parent[expando] || (parent[expando] = {}), cache = outerCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = cache[0] === dirruns && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();)
                                            if (1 === node.nodeType && ++diff && node === elem) {
                                                outerCache[type] = [dirruns, nodeIndex, diff];
                                                break
                                            }
                                    } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) diff = cache[1];
                                    else
                                        for (;
                                            (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && ((node[expando] || (node[expando] = {}))[type] = [dirruns, diff]), node !== elem)););
                                    return diff -= last, diff === first || diff % first === 0 && diff / first >= 0
                                }
                            }
                        },
                        PSEUDO: function(pseudo, argument) {
                            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                            return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                for (var idx, matched = fn(seed, argument), i = matched.length; i--;) idx = indexOf(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i])
                            }) : function(elem) {
                                return fn(elem, 0, args)
                            }) : fn
                        }
                    },
                    pseudos: {
                        not: markFunction(function(selector) {
                            var input = [],
                                results = [],
                                matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                                for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--;)(elem = unmatched[i]) && (seed[i] = !(matches[i] = elem))
                            }) : function(elem, context, xml) {
                                return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop()
                            }
                        }),
                        has: markFunction(function(selector) {
                            return function(elem) {
                                return Sizzle(selector, elem).length > 0
                            }
                        }),
                        contains: markFunction(function(text) {
                            return text = text.replace(runescape, funescape),
                                function(elem) {
                                    return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                                }
                        }),
                        lang: markFunction(function(lang) {
                            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(),
                                function(elem) {
                                    var elemLang;
                                    do
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                                    while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                    return !1
                                }
                        }),
                        target: function(elem) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice(1) === elem.id
                        },
                        root: function(elem) {
                            return elem === docElem
                        },
                        focus: function(elem) {
                            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                        },
                        enabled: function(elem) {
                            return elem.disabled === !1
                        },
                        disabled: function(elem) {
                            return elem.disabled === !0
                        },
                        checked: function(elem) {
                            var nodeName = elem.nodeName.toLowerCase();
                            return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected
                        },
                        selected: function(elem) {
                            return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0
                        },
                        empty: function(elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                                if (elem.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(elem) {
                            return !Expr.pseudos.empty(elem)
                        },
                        header: function(elem) {
                            return rheader.test(elem.nodeName)
                        },
                        input: function(elem) {
                            return rinputs.test(elem.nodeName)
                        },
                        button: function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return "input" === name && "button" === elem.type || "button" === name
                        },
                        text: function(elem) {
                            var attr;
                            return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase())
                        },
                        first: createPositionalPseudo(function() {
                            return [0]
                        }),
                        last: createPositionalPseudo(function(matchIndexes, length) {
                            return [length - 1]
                        }),
                        eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                            return [0 > argument ? argument + length : argument]
                        }),
                        even: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 0; length > i; i += 2) matchIndexes.push(i);
                            return matchIndexes
                        }),
                        odd: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 1; length > i; i += 2) matchIndexes.push(i);
                            return matchIndexes
                        }),
                        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = 0 > argument ? argument + length : argument; --i >= 0;) matchIndexes.push(i);
                            return matchIndexes
                        }),
                        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = 0 > argument ? argument + length : argument; ++i < length;) matchIndexes.push(i);
                            return matchIndexes
                        })
                    }
                }, Expr.pseudos.nth = Expr.pseudos.eq;
                for (i in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) Expr.pseudos[i] = createInputPseudo(i);
                for (i in {
                    submit: !0,
                    reset: !0
                }) Expr.pseudos[i] = createButtonPseudo(i);
                return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                    if (cached) return parseOnly ? 0 : cached.slice(0);
                    for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) {
                        (!matched || (match = rcomma.exec(soFar))) && (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        }), soFar = soFar.slice(matched.length));
                        for (type in Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        }), soFar = soFar.slice(matched.length));
                        if (!matched) break
                    }
                    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
                }, compile = Sizzle.compile = function(selector, match) {
                    var i, setMatchers = [],
                        elementMatchers = [],
                        cached = compilerCache[selector + " "];
                    if (!cached) {
                        for (match || (match = tokenize(selector)), i = match.length; i--;) cached = matcherFromTokens(match[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector
                    }
                    return cached
                }, select = Sizzle.select = function(selector, context, results, seed) {
                    var i, tokens, token, type, find, compiled = "function" == typeof selector && selector,
                        match = !seed && tokenize(selector = compiled.selector || selector);
                    if (results = results || [], 1 === match.length) {
                        if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                            if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], !context) return results;
                            compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length)
                        }
                        for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);)
                            if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                                if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) return push.apply(results, seed), results;
                                break
                            }
                    }
                    return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context), results
                }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(div1) {
                    return 1 & div1.compareDocumentPosition(document.createElement("div"))
                }), assert(function(div) {
                    return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href")
                }) || addHandle("type|href|height|width", function(elem, name, isXML) {
                    return isXML ? void 0 : elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2)
                }), support.attributes && assert(function(div) {
                    return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value")
                }) || addHandle("value", function(elem, name, isXML) {
                    return isXML || "input" !== elem.nodeName.toLowerCase() ? void 0 : elem.defaultValue
                }), assert(function(div) {
                    return null == div.getAttribute("disabled")
                }) || addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    return isXML ? void 0 : elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                }), Sizzle
            }(window);
        jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
        var rneedsContext = jQuery.expr.match.needsContext,
            rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            risSimple = /^.[^:#\[\.,]*$/;
        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return 1 === elem.nodeType
            }))
        }, jQuery.fn.extend({
            find: function(selector) {
                var i, ret = [],
                    self = this,
                    len = self.length;
                if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; len > i; i++)
                        if (jQuery.contains(self[i], this)) return !0
                }));
                for (i = 0; len > i; i++) jQuery.find(selector, self[i], ret);
                return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret
            },
            filter: function(selector) {
                return this.pushStack(winnow(this, selector || [], !1))
            },
            not: function(selector) {
                return this.pushStack(winnow(this, selector || [], !0))
            },
            is: function(selector) {
                return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
            }
        });
        var rootjQuery, document = window.document,
            rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            init = jQuery.fn.init = function(selector, context) {
                var match, elem;
                if (!selector) return this;
                if ("string" == typeof selector) {
                    if (match = "<" === selector.charAt(0) && ">" === selector.charAt(selector.length - 1) && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector), !match || !match[1] && context) return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
                    if (match[1]) {
                        if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                            for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                        return this
                    }
                    if (elem = document.getElementById(match[2]), elem && elem.parentNode) {
                        if (elem.id !== match[2]) return rootjQuery.find(selector);
                        this.length = 1, this[0] = elem
                    }
                    return this.context = document, this.selector = selector, this
                }
                return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? "undefined" != typeof rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this))
            };
        init.prototype = jQuery.fn, rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/,
            guaranteedUnique = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        jQuery.extend({
            dir: function(elem, dir, until) {
                for (var matched = [], cur = elem[dir]; cur && 9 !== cur.nodeType && (void 0 === until || 1 !== cur.nodeType || !jQuery(cur).is(until));) 1 === cur.nodeType && matched.push(cur), cur = cur[dir];
                return matched
            },
            sibling: function(n, elem) {
                for (var r = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && r.push(n);
                return r
            }
        }), jQuery.fn.extend({
            has: function(target) {
                var i, targets = jQuery(target, this),
                    len = targets.length;
                return this.filter(function() {
                    for (i = 0; len > i; i++)
                        if (jQuery.contains(this, targets[i])) return !0
                })
            },
            closest: function(selectors, context) {
                for (var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || "string" != typeof selectors ? jQuery(selectors, context || this.context) : 0; l > i; i++)
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
                        if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break
                        }
                return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched)
            },
            index: function(elem) {
                return elem ? "string" == typeof elem ? jQuery.inArray(this[0], jQuery(elem)) : jQuery.inArray(elem.jquery ? elem[0] : elem, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(selector, context) {
                return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))))
            },
            addBack: function(selector) {
                return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
            }
        }), jQuery.each({
            parent: function(elem) {
                var parent = elem.parentNode;
                return parent && 11 !== parent.nodeType ? parent : null
            },
            parents: function(elem) {
                return jQuery.dir(elem, "parentNode")
            },
            parentsUntil: function(elem, i, until) {
                return jQuery.dir(elem, "parentNode", until)
            },
            next: function(elem) {
                return sibling(elem, "nextSibling")
            },
            prev: function(elem) {
                return sibling(elem, "previousSibling")
            },
            nextAll: function(elem) {
                return jQuery.dir(elem, "nextSibling")
            },
            prevAll: function(elem) {
                return jQuery.dir(elem, "previousSibling")
            },
            nextUntil: function(elem, i, until) {
                return jQuery.dir(elem, "nextSibling", until)
            },
            prevUntil: function(elem, i, until) {
                return jQuery.dir(elem, "previousSibling", until)
            },
            siblings: function(elem) {
                return jQuery.sibling((elem.parentNode || {}).firstChild, elem)
            },
            children: function(elem) {
                return jQuery.sibling(elem.firstChild)
            },
            contents: function(elem) {
                return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes)
            }
        }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var ret = jQuery.map(this, fn, until);
                return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (ret = jQuery.filter(selector, ret)), this.length > 1 && (guaranteedUnique[name] || (ret = jQuery.unique(ret)), rparentsprev.test(name) && (ret = ret.reverse())), this.pushStack(ret)
            }
        });
        var rnotwhite = /\S+/g,
            optionsCache = {};
        jQuery.Callbacks = function(options) {
            options = "string" == typeof options ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
            var firing, memory, fired, firingLength, firingIndex, firingStart, list = [],
                stack = !options.once && [],
                fire = function(data) {
                    for (memory = options.memory && data, fired = !0, firingIndex = firingStart || 0, firingStart = 0, firingLength = list.length, firing = !0; list && firingLength > firingIndex; firingIndex++)
                        if (list[firingIndex].apply(data[0], data[1]) === !1 && options.stopOnFalse) {
                            memory = !1;
                            break
                        }
                    firing = !1, list && (stack ? stack.length && fire(stack.shift()) : memory ? list = [] : self.disable())
                },
                self = {
                    add: function() {
                        if (list) {
                            var start = list.length;
                            ! function add(args) {
                                jQuery.each(args, function(_, arg) {
                                    var type = jQuery.type(arg);
                                    "function" === type ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== type && add(arg)
                                })
                            }(arguments), firing ? firingLength = list.length : memory && (firingStart = start, fire(memory))
                        }
                        return this
                    },
                    remove: function() {
                        return list && jQuery.each(arguments, function(_, arg) {
                            for (var index;
                                 (index = jQuery.inArray(arg, list, index)) > -1;) list.splice(index, 1), firing && (firingLength >= index && firingLength--, firingIndex >= index && firingIndex--)
                        }), this
                    },
                    has: function(fn) {
                        return fn ? jQuery.inArray(fn, list) > -1 : !(!list || !list.length)
                    },
                    empty: function() {
                        return list = [], firingLength = 0, this
                    },
                    disable: function() {
                        return list = stack = memory = void 0, this
                    },
                    disabled: function() {
                        return !list
                    },
                    lock: function() {
                        return stack = void 0, memory || self.disable(), this
                    },
                    locked: function() {
                        return !stack
                    },
                    fireWith: function(context, args) {
                        return !list || fired && !stack || (args = args || [], args = [context, args.slice ? args.slice() : args], firing ? stack.push(args) : fire(args)), this
                    },
                    fire: function() {
                        return self.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!fired
                    }
                };
            return self
        }, jQuery.extend({
            Deferred: function(func) {
                var tuples = [
                        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", jQuery.Callbacks("memory")]
                    ],
                    state = "pending",
                    promise = {
                        state: function() {
                            return state
                        },
                        always: function() {
                            return deferred.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var fns = arguments;
                            return jQuery.Deferred(function(newDefer) {
                                jQuery.each(tuples, function(i, tuple) {
                                    var fn = jQuery.isFunction(fns[i]) && fns[i];
                                    deferred[tuple[1]](function() {
                                        var returned = fn && fn.apply(this, arguments);
                                        returned && jQuery.isFunction(returned.promise) ? returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify) : newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                    })
                                }), fns = null
                            }).promise()
                        },
                        promise: function(obj) {
                            return null != obj ? jQuery.extend(obj, promise) : promise
                        }
                    },
                    deferred = {};
                return promise.pipe = promise.then, jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2],
                        stateString = tuple[3];
                    promise[tuple[1]] = list.add, stateString && list.add(function() {
                        state = stateString
                    }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function() {
                        return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this
                    }, deferred[tuple[0] + "With"] = list.fireWith
                }), promise.promise(deferred), func && func.call(deferred, deferred), deferred
            },
            when: function(subordinate) {
                var progressValues, progressContexts, resolveContexts, i = 0,
                    resolveValues = slice.call(arguments),
                    length = resolveValues.length,
                    remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
                    deferred = 1 === remaining ? subordinate : jQuery.Deferred(),
                    updateFunc = function(i, contexts, values) {
                        return function(value) {
                            contexts[i] = this, values[i] = arguments.length > 1 ? slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values)
                        }
                    };
                if (length > 1)
                    for (progressValues = new Array(length), progressContexts = new Array(length), resolveContexts = new Array(length); length > i; i++) resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues)) : --remaining;
                return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise()
            }
        });
        var readyList;
        jQuery.fn.ready = function(fn) {
            return jQuery.ready.promise().done(fn), this
        }, jQuery.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(hold) {
                hold ? jQuery.readyWait++ : jQuery.ready(!0)
            },
            ready: function(wait) {
                if (wait === !0 ? !--jQuery.readyWait : !jQuery.isReady) {
                    if (!document.body) return setTimeout(jQuery.ready);
                    jQuery.isReady = !0, wait !== !0 && --jQuery.readyWait > 0 || (readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready")))
                }
            }
        }), jQuery.ready.promise = function(obj) {
            if (!readyList)
                if (readyList = jQuery.Deferred(), "complete" === document.readyState) setTimeout(jQuery.ready);
                else if (document.addEventListener) document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1);
                else {
                    document.attachEvent("onreadystatechange", completed), window.attachEvent("onload", completed);
                    var top = !1;
                    try {
                        top = null == window.frameElement && document.documentElement
                    } catch (e) {}
                    top && top.doScroll && ! function doScrollCheck() {
                        if (!jQuery.isReady) {
                            try {
                                top.doScroll("left")
                            } catch (e) {
                                return setTimeout(doScrollCheck, 50)
                            }
                            detach(), jQuery.ready()
                        }
                    }()
                }
            return readyList.promise(obj)
        };
        var i, strundefined = "undefined";
        for (i in jQuery(support)) break;
        support.ownLast = "0" !== i, support.inlineBlockNeedsLayout = !1, jQuery(function() {
            var val, div, body, container;
            body = document.getElementsByTagName("body")[0], body && body.style && (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), typeof div.style.zoom !== strundefined && (div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", support.inlineBlockNeedsLayout = val = 3 === div.offsetWidth, val && (body.style.zoom = 1)), body.removeChild(container))
        }),
            function() {
                var div = document.createElement("div");
                if (null == support.deleteExpando) {
                    support.deleteExpando = !0;
                    try {
                        delete div.test
                    } catch (e) {
                        support.deleteExpando = !1
                    }
                }
                div = null
            }(), jQuery.acceptData = function(elem) {
            var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
                nodeType = +elem.nodeType || 1;
            return 1 !== nodeType && 9 !== nodeType ? !1 : !noData || noData !== !0 && elem.getAttribute("classid") === noData
        };
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /([A-Z])/g;
        jQuery.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(elem) {
                return elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando], !!elem && !isEmptyDataObject(elem)
            },
            data: function(elem, name, data) {
                return internalData(elem, name, data)
            },
            removeData: function(elem, name) {
                return internalRemoveData(elem, name)
            },
            _data: function(elem, name, data) {
                return internalData(elem, name, data, !0)
            },
            _removeData: function(elem, name) {
                return internalRemoveData(elem, name, !0)
            }
        }), jQuery.fn.extend({
            data: function(key, value) {
                var i, name, data, elem = this[0],
                    attrs = elem && elem.attributes;
                if (void 0 === key) {
                    if (this.length && (data = jQuery.data(elem), 1 === elem.nodeType && !jQuery._data(elem, "parsedAttrs"))) {
                        for (i = attrs.length; i--;) attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
                        jQuery._data(elem, "parsedAttrs", !0)
                    }
                    return data
                }
                return "object" == typeof key ? this.each(function() {
                    jQuery.data(this, key)
                }) : arguments.length > 1 ? this.each(function() {
                    jQuery.data(this, key, value)
                }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : void 0
            },
            removeData: function(key) {
                return this.each(function() {
                    jQuery.removeData(this, key)
                })
            }
        }), jQuery.extend({
            queue: function(elem, type, data) {
                var queue;
                return elem ? (type = (type || "fx") + "queue", queue = jQuery._data(elem, type), data && (!queue || jQuery.isArray(data) ? queue = jQuery._data(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || []) : void 0
            },
            dequeue: function(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type),
                    startLength = queue.length,
                    fn = queue.shift(),
                    hooks = jQuery._queueHooks(elem, type),
                    next = function() {
                        jQuery.dequeue(elem, type)
                    };
                "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire()
            },
            _queueHooks: function(elem, type) {
                var key = type + "queueHooks";
                return jQuery._data(elem, key) || jQuery._data(elem, key, {
                        empty: jQuery.Callbacks("once memory").add(function() {
                            jQuery._removeData(elem, type + "queue"), jQuery._removeData(elem, key)
                        })
                    })
            }
        }), jQuery.fn.extend({
            queue: function(type, data) {
                var setter = 2;
                return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type)
                })
            },
            dequeue: function(type) {
                return this.each(function() {
                    jQuery.dequeue(this, type)
                })
            },
            clearQueue: function(type) {
                return this.queue(type || "fx", [])
            },
            promise: function(type, obj) {
                var tmp, count = 1,
                    defer = jQuery.Deferred(),
                    elements = this,
                    i = this.length,
                    resolve = function() {
                        --count || defer.resolveWith(elements, [elements])
                    };
                for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--;) tmp = jQuery._data(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
                return resolve(), defer.promise(obj)
            }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            cssExpand = ["Top", "Right", "Bottom", "Left"],
            isHidden = function(elem, el) {
                return elem = el || elem, "none" === jQuery.css(elem, "display") || !jQuery.contains(elem.ownerDocument, elem)
            },
            access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0,
                    length = elems.length,
                    bulk = null == key;
                if ("object" === jQuery.type(key)) {
                    chainable = !0;
                    for (i in key) jQuery.access(elems, fn, i, key[i], !0, emptyGet, raw)
                } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key, value) {
                        return bulk.call(jQuery(elem), value)
                    })), fn))
                    for (; length > i; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet
            },
            rcheckableType = /^(?:checkbox|radio)$/i;
        ! function() {
            var input = document.createElement("input"),
                div = document.createElement("div"),
                fragment = document.createDocumentFragment();
            if (div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", support.leadingWhitespace = 3 === div.firstChild.nodeType, support.tbody = !div.getElementsByTagName("tbody").length, support.htmlSerialize = !!div.getElementsByTagName("link").length, support.html5Clone = "<:nav></:nav>" !== document.createElement("nav").cloneNode(!0).outerHTML, input.type = "checkbox", input.checked = !0, fragment.appendChild(input), support.appendChecked = input.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue, fragment.appendChild(div), div.innerHTML = "<input type='radio' checked='checked' name='t'/>", support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, support.noCloneEvent = !0, div.attachEvent && (div.attachEvent("onclick", function() {
                    support.noCloneEvent = !1
                }), div.cloneNode(!0).click()), null == support.deleteExpando) {
                support.deleteExpando = !0;
                try {
                    delete div.test
                } catch (e) {
                    support.deleteExpando = !1
                }
            }
        }(),
            function() {
                var i, eventName, div = document.createElement("div");
                for (i in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) eventName = "on" + i, (support[i + "Bubbles"] = eventName in window) || (div.setAttribute(eventName, "t"), support[i + "Bubbles"] = div.attributes[eventName].expando === !1);
                div = null
            }();
        var rformElems = /^(?:input|select|textarea)$/i,
            rkeyEvent = /^key/,
            rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
            rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
            rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
        jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
                var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
                if (elemData) {
                    for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                        return typeof jQuery === strundefined || e && jQuery.event.triggered === e.type ? void 0 : jQuery.event.dispatch.apply(eventHandle.elem, arguments)
                    }, eventHandle.elem = elem), types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join(".")
                    }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, special.setup && special.setup.call(elem, data, namespaces, eventHandle) !== !1 || (elem.addEventListener ? elem.addEventListener(type, eventHandle, !1) : elem.attachEvent && elem.attachEvent("on" + type, eventHandle))), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0);
                    elem = null
                }
            },
            remove: function(elem, types, handler, selector, mappedTypes) {
                var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
                if (elemData && (events = elemData.events)) {
                    for (types = (types || "").match(rnotwhite) || [""], t = types.length; t--;)
                        if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                            for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                            origCount && !handlers.length && (special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== !1 || jQuery.removeEvent(elem, type, elemData.handle), delete events[type])
                        } else
                            for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                    jQuery.isEmptyObject(events) && (delete elemData.handle, jQuery._removeData(elem, "events"))
                }
            },
            trigger: function(event, data, elem, onlyHandlers) {
                var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
                    type = hasOwn.call(event, "type") ? event.type : event,
                    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") >= 0 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, data) !== !1)) {
                    if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                        for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
                        tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                    }
                    for (i = 0;
                         (cur = eventPath[i++]) && !event.isPropagationStopped();) event.type = i > 1 ? bubbleType : special.bindType || type, handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle"), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && jQuery.acceptData(cur) && (event.result = handle.apply(cur, data), event.result === !1 && event.preventDefault());
                    if (event.type = type, !onlyHandlers && !event.isDefaultPrevented() && (!special._default || special._default.apply(eventPath.pop(), data) === !1) && jQuery.acceptData(elem) && ontype && elem[type] && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type;
                        try {
                            elem[type]()
                        } catch (e) {}
                        jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)
                    }
                    return event.result
                }
            },
            dispatch: function(event) {
                event = jQuery.event.fix(event);
                var i, ret, handleObj, matched, j, handlerQueue = [],
                    args = slice.call(arguments),
                    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
                    special = jQuery.event.special[event.type] || {};
                if (args[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== !1) {
                    for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0;
                         (matched = handlerQueue[i++]) && !event.isPropagationStopped();)
                        for (event.currentTarget = matched.elem, j = 0;
                             (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();)(!event.namespace_re || event.namespace_re.test(handleObj.namespace)) && (event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), void 0 !== ret && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
                    return special.postDispatch && special.postDispatch.call(this, event), event.result
                }
            },
            handlers: function(event, handlers) {
                var sel, handleObj, matches, i, handlerQueue = [],
                    delegateCount = handlers.delegateCount,
                    cur = event.target;
                if (delegateCount && cur.nodeType && (!event.button || "click" !== event.type))
                    for (; cur != this; cur = cur.parentNode || this)
                        if (1 === cur.nodeType && (cur.disabled !== !0 || "click" !== event.type)) {
                            for (matches = [], i = 0; delegateCount > i; i++) handleObj = handlers[i], sel = handleObj.selector + " ", void 0 === matches[sel] && (matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length), matches[sel] && matches.push(handleObj);
                            matches.length && handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            })
                        }
                return delegateCount < handlers.length && handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                }), handlerQueue
            },
            fix: function(event) {
                if (event[jQuery.expando]) return event;
                var i, prop, copy, type = event.type,
                    originalEvent = event,
                    fixHook = this.fixHooks[type];
                for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), i = copy.length; i--;) prop = copy[i], event[prop] = originalEvent[prop];
                return event.target || (event.target = originalEvent.srcElement || document), 3 === event.target.nodeType && (event.target = event.target.parentNode), event.metaKey = !!event.metaKey, fixHook.filter ? fixHook.filter(event, originalEvent) : event
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(event, original) {
                    return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), event
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(event, original) {
                    var body, eventDoc, doc, button = original.button,
                        fromElement = original.fromElement;
                    return null == event.pageX && null != original.clientX && (eventDoc = event.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), !event.relatedTarget && fromElement && (event.relatedTarget = fromElement === event.target ? original.toElement : fromElement), event.which || void 0 === button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), event
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== safeActiveElement() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === safeActiveElement() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return jQuery.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(event) {
                        return jQuery.nodeName(event.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(event) {
                        void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result)
                    }
                }
            },
            simulate: function(type, elem, event, bubble) {
                var e = jQuery.extend(new jQuery.Event, event, {
                    type: type,
                    isSimulated: !0,
                    originalEvent: {}
                });
                bubble ? jQuery.event.trigger(e, null, elem) : jQuery.event.dispatch.call(elem, e), e.isDefaultPrevented() && event.preventDefault()
            }
        }, jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
            elem.removeEventListener && elem.removeEventListener(type, handle, !1)
        } : function(elem, type, handle) {
            var name = "on" + type;
            elem.detachEvent && (typeof elem[name] === strundefined && (elem[name] = null), elem.detachEvent(name, handle))
        }, jQuery.Event = function(src, props) {
            return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === !1 ? returnTrue : returnFalse) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), void(this[jQuery.expando] = !0)) : new jQuery.Event(src, props)
        }, jQuery.Event.prototype = {
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function(event) {
                    var ret, target = this,
                        related = event.relatedTarget,
                        handleObj = event.handleObj;
                    return (!related || related !== target && !jQuery.contains(target, related)) && (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret
                }
            }
        }), support.submitBubbles || (jQuery.event.special.submit = {
            setup: function() {
                return jQuery.nodeName(this, "form") ? !1 : void jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    var elem = e.target,
                        form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : void 0;
                    form && !jQuery._data(form, "submitBubbles") && (jQuery.event.add(form, "submit._submit", function(event) {
                        event._submit_bubble = !0
                    }), jQuery._data(form, "submitBubbles", !0))
                })
            },
            postDispatch: function(event) {
                event._submit_bubble && (delete event._submit_bubble, this.parentNode && !event.isTrigger && jQuery.event.simulate("submit", this.parentNode, event, !0))
            },
            teardown: function() {
                return jQuery.nodeName(this, "form") ? !1 : void jQuery.event.remove(this, "._submit")
            }
        }), support.changeBubbles || (jQuery.event.special.change = {
            setup: function() {
                return rformElems.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (jQuery.event.add(this, "propertychange._change", function(event) {
                    "checked" === event.originalEvent.propertyName && (this._just_changed = !0)
                }), jQuery.event.add(this, "click._change", function(event) {
                    this._just_changed && !event.isTrigger && (this._just_changed = !1), jQuery.event.simulate("change", this, event, !0)
                })), !1) : void jQuery.event.add(this, "beforeactivate._change", function(e) {
                    var elem = e.target;
                    rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles") && (jQuery.event.add(elem, "change._change", function(event) {
                        !this.parentNode || event.isSimulated || event.isTrigger || jQuery.event.simulate("change", this.parentNode, event, !0)
                    }), jQuery._data(elem, "changeBubbles", !0))
                })
            },
            handle: function(event) {
                var elem = event.target;
                return this !== elem || event.isSimulated || event.isTrigger || "radio" !== elem.type && "checkbox" !== elem.type ? event.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return jQuery.event.remove(this, "._change"), !rformElems.test(this.nodeName)
            }
        }), support.focusinBubbles || jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), !0)
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data(doc, fix);
                    attaches || doc.addEventListener(orig, handler, !0), jQuery._data(doc, fix, (attaches || 0) + 1)
                },
                teardown: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data(doc, fix) - 1;
                    attaches ? jQuery._data(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), jQuery._removeData(doc, fix))
                }
            }
        }), jQuery.fn.extend({
            on: function(types, selector, data, fn, one) {
                var type, origFn;
                if ("object" == typeof types) {
                    "string" != typeof selector && (data = data || selector, selector = void 0);
                    for (type in types) this.on(type, selector, data, types[type], one);
                    return this
                }
                if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1) fn = returnFalse;
                else if (!fn) return this;
                return 1 === one && (origFn = fn, fn = function(event) {
                    return jQuery().off(event), origFn.apply(this, arguments)
                }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), this.each(function() {
                    jQuery.event.add(this, types, fn, data, selector)
                })
            },
            one: function(types, selector, data, fn) {
                return this.on(types, selector, data, fn, 1)
            },
            off: function(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
                if ("object" == typeof types) {
                    for (type in types) this.off(type, selector, types[type]);
                    return this
                }
                return (selector === !1 || "function" == typeof selector) && (fn = selector, selector = void 0), fn === !1 && (fn = returnFalse), this.each(function() {
                    jQuery.event.remove(this, types, fn, selector)
                })
            },
            trigger: function(type, data) {
                return this.each(function() {
                    jQuery.event.trigger(type, data, this)
                })
            },
            triggerHandler: function(type, data) {
                var elem = this[0];
                return elem ? jQuery.event.trigger(type, data, elem, !0) : void 0
            }
        });
        var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
            rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
            rleadingWhitespace = /^\s+/,
            rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            rtagName = /<([\w:]+)/,
            rtbody = /<tbody/i,
            rhtml = /<|&#?\w+;/,
            rnoInnerhtml = /<(?:script|style|link)/i,
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rscriptType = /^$|\/(?:java|ecma)script/i,
            rscriptTypeMasked = /^true\/(.*)/,
            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            wrapMap = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            safeFragment = createSafeFragment(document),
            fragmentDiv = safeFragment.appendChild(document.createElement("div"));
        wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.extend({
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
                var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
                if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">") ? clone = elem.cloneNode(!0) : (fragmentDiv.innerHTML = elem.outerHTML, fragmentDiv.removeChild(clone = fragmentDiv.firstChild)), !(support.noCloneEvent && support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))
                    for (destElements = getAll(clone), srcElements = getAll(elem), i = 0; null != (node = srcElements[i]); ++i) destElements[i] && fixCloneNodeIssues(node, destElements[i]);
                if (dataAndEvents)
                    if (deepDataAndEvents)
                        for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0; null != (node = srcElements[i]); i++) cloneCopyEvent(node, destElements[i]);
                    else cloneCopyEvent(elem, clone);
                return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), destElements = srcElements = node = null, clone
            },
            buildFragment: function(elems, context, scripts, selection) {
                for (var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0; l > i; i++)
                    if (elem = elems[i], elem || 0 === elem)
                        if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                        else if (rhtml.test(elem)) {
                            for (tmp = tmp || safe.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], j = wrap[0]; j--;) tmp = tmp.lastChild;
                            if (!support.leadingWhitespace && rleadingWhitespace.test(elem) && nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0])), !support.tbody)
                                for (elem = "table" !== tag || rtbody.test(elem) ? "<table>" !== wrap[1] || rtbody.test(elem) ? 0 : tmp : tmp.firstChild, j = elem && elem.childNodes.length; j--;) jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length && elem.removeChild(tbody);
                            for (jQuery.merge(nodes, tmp.childNodes), tmp.textContent = ""; tmp.firstChild;) tmp.removeChild(tmp.firstChild);
                            tmp = safe.lastChild
                        } else nodes.push(context.createTextNode(elem));
                for (tmp && safe.removeChild(tmp), support.appendChecked || jQuery.grep(getAll(nodes, "input"), fixDefaultChecked), i = 0; elem = nodes[i++];)
                    if ((!selection || -1 === jQuery.inArray(elem, selection)) && (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(safe.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts))
                        for (j = 0; elem = tmp[j++];) rscriptType.test(elem.type || "") && scripts.push(elem);
                return tmp = null, safe
            },
            cleanData: function(elems, acceptData) {
                for (var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = support.deleteExpando, special = jQuery.event.special; null != (elem = elems[i]); i++)
                    if ((acceptData || jQuery.acceptData(elem)) && (id = elem[internalKey], data = id && cache[id])) {
                        if (data.events)
                            for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                        cache[id] && (delete cache[id], deleteExpando ? delete elem[internalKey] : typeof elem.removeAttribute !== strundefined ? elem.removeAttribute(internalKey) : elem[internalKey] = null, deletedIds.push(id))
                    }
            }
        }), jQuery.fn.extend({
            text: function(value) {
                return access(this, function(value) {
                    return void 0 === value ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value))
                }, null, value, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(elem) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(elem) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(elem) {
                    this.parentNode && this.parentNode.insertBefore(elem, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(elem) {
                    this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling)
                })
            },
            remove: function(selector, keepData) {
                for (var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0; null != (elem = elems[i]); i++) keepData || 1 !== elem.nodeType || jQuery.cleanData(getAll(elem)), elem.parentNode && (keepData && jQuery.contains(elem.ownerDocument, elem) && setGlobalEval(getAll(elem, "script")), elem.parentNode.removeChild(elem));
                return this
            },
            empty: function() {
                for (var elem, i = 0; null != (elem = this[i]); i++) {
                    for (1 === elem.nodeType && jQuery.cleanData(getAll(elem, !1)); elem.firstChild;) elem.removeChild(elem.firstChild);
                    elem.options && jQuery.nodeName(elem, "select") && (elem.options.length = 0)
                }
                return this
            },
            clone: function(dataAndEvents, deepDataAndEvents) {
                return dataAndEvents = null == dataAndEvents ? !1 : dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function() {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
                })
            },
            html: function(value) {
                return access(this, function(value) {
                    var elem = this[0] || {},
                        i = 0,
                        l = this.length;
                    if (void 0 === value) return 1 === elem.nodeType ? elem.innerHTML.replace(rinlinejQuery, "") : void 0;
                    if (!("string" != typeof value || rnoInnerhtml.test(value) || !support.htmlSerialize && rnoshimcache.test(value) || !support.leadingWhitespace && rleadingWhitespace.test(value) || wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()])) {
                        value = value.replace(rxhtmlTag, "<$1></$2>");
                        try {
                            for (; l > i; i++) elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
                            elem = 0
                        } catch (e) {}
                    }
                    elem && this.empty().append(value)
                }, null, value, arguments.length)
            },
            replaceWith: function() {
                var arg = arguments[0];
                return this.domManip(arguments, function(elem) {
                    arg = this.parentNode, jQuery.cleanData(getAll(this)), arg && arg.replaceChild(elem, this)
                }), arg && (arg.length || arg.nodeType) ? this : this.remove()
            },
            detach: function(selector) {
                return this.remove(selector, !0)
            },
            domManip: function(args, callback) {
                args = concat.apply([], args);
                var first, node, hasScripts, scripts, doc, fragment, i = 0,
                    l = this.length,
                    set = this,
                    iNoClone = l - 1,
                    value = args[0],
                    isFunction = jQuery.isFunction(value);
                if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return this.each(function(index) {
                    var self = set.eq(index);
                    isFunction && (args[0] = value.call(this, index, self.html())), self.domManip(args, callback)
                });
                if (l && (fragment = jQuery.buildFragment(args, this[0].ownerDocument, !1, this), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first)) {
                    for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; l > i; i++) node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(this[i], node, i);
                    if (hasScripts)
                        for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; hasScripts > i; i++) node = scripts[i], rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, "")));
                    fragment = first = null
                }
                return this
            }
        }), jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(name, original) {
            jQuery.fn[name] = function(selector) {
                for (var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1; last >= i; i++) elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
                return this.pushStack(ret)
            }
        });
        var iframe, elemdisplay = {};
        ! function() {
            var shrinkWrapBlocksVal;
            support.shrinkWrapBlocks = function() {
                if (null != shrinkWrapBlocksVal) return shrinkWrapBlocksVal;
                shrinkWrapBlocksVal = !1;
                var div, body, container;
                return body = document.getElementsByTagName("body")[0], body && body.style ? (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), typeof div.style.zoom !== strundefined && (div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", div.appendChild(document.createElement("div")).style.width = "5px", shrinkWrapBlocksVal = 3 !== div.offsetWidth), body.removeChild(container), shrinkWrapBlocksVal) : void 0
            }
        }();
        var getStyles, curCSS, rmargin = /^margin/,
            rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
            rposition = /^(top|right|bottom|left)$/;
        window.getComputedStyle ? (getStyles = function(elem) {
            return elem.ownerDocument.defaultView.opener ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : window.getComputedStyle(elem, null)
        }, curCSS = function(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            return computed = computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0, computed && ("" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), void 0 === ret ? ret : ret + ""
        }) : document.documentElement.currentStyle && (getStyles = function(elem) {
            return elem.currentStyle
        }, curCSS = function(elem, name, computed) {
            var left, rs, rsLeft, ret, style = elem.style;
            return computed = computed || getStyles(elem), ret = computed ? computed[name] : void 0, null == ret && style && style[name] && (ret = style[name]), rnumnonpx.test(ret) && !rposition.test(name) && (left = style.left, rs = elem.runtimeStyle, rsLeft = rs && rs.left, rsLeft && (rs.left = elem.currentStyle.left), style.left = "fontSize" === name ? "1em" : ret, ret = style.pixelLeft + "px", style.left = left, rsLeft && (rs.left = rsLeft)), void 0 === ret ? ret : ret + "" || "auto"
        }),
            function() {
                function computeStyleTests() {
                    var div, body, container, contents;
                    body = document.getElementsByTagName("body")[0], body && body.style && (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", pixelPositionVal = boxSizingReliableVal = !1, reliableMarginRightVal = !0, window.getComputedStyle && (pixelPositionVal = "1%" !== (window.getComputedStyle(div, null) || {}).top, boxSizingReliableVal = "4px" === (window.getComputedStyle(div, null) || {
                            width: "4px"
                        }).width, contents = div.appendChild(document.createElement("div")), contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", contents.style.marginRight = contents.style.width = "0", div.style.width = "1px", reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight), div.removeChild(contents)), div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", contents = div.getElementsByTagName("td"), contents[0].style.cssText = "margin:0;border:0;padding:0;display:none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight, reliableHiddenOffsetsVal && (contents[0].style.display = "", contents[1].style.display = "none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight), body.removeChild(container))
                }
                var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;
                div = document.createElement("div"), div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = div.getElementsByTagName("a")[0], style = a && a.style, style && (style.cssText = "float:left;opacity:.5", support.opacity = "0.5" === style.opacity, support.cssFloat = !!style.cssFloat, div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === div.style.backgroundClip, support.boxSizing = "" === style.boxSizing || "" === style.MozBoxSizing || "" === style.WebkitBoxSizing, jQuery.extend(support, {
                    reliableHiddenOffsets: function() {
                        return null == reliableHiddenOffsetsVal && computeStyleTests(), reliableHiddenOffsetsVal
                    },
                    boxSizingReliable: function() {
                        return null == boxSizingReliableVal && computeStyleTests(), boxSizingReliableVal
                    },
                    pixelPosition: function() {
                        return null == pixelPositionVal && computeStyleTests(), pixelPositionVal
                    },
                    reliableMarginRight: function() {
                        return null == reliableMarginRightVal && computeStyleTests(), reliableMarginRightVal
                    }
                }))
            }(), jQuery.swap = function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
            ret = callback.apply(elem, args || []);
            for (name in options) elem.style[name] = old[name];
            return ret
        };
        var ralpha = /alpha\([^)]*\)/i,
            ropacity = /opacity\s*=\s*([^)]*)/,
            rdisplayswap = /^(none|table(?!-c[ea]).+)/,
            rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
            rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
            cssShow = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            cssNormalTransform = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            cssPrefixes = ["Webkit", "O", "Moz", "ms"];
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function(elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return "" === ret ? "1" : ret
                        }
                    }
                }
            },
            cssNumber: {
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
            cssProps: {
                "float": support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(elem, name, value, extra) {
                if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                    var ret, type, hooks, origName = jQuery.camelCase(name),
                        style = elem.style;
                    if (name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value) return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
                    if (type = typeof value, "string" === type && (ret = rrelNum.exec(value)) && (value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), type = "number"), null != value && value === value && ("number" !== type || jQuery.cssNumber[origName] || (value += "px"), support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), !(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra))))) try {
                        style[name] = value
                    } catch (e) {}
                }
            },
            css: function(elem, name, extra, styles) {
                var num, val, hooks, origName = jQuery.camelCase(name);
                return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (num = parseFloat(val), extra === !0 || jQuery.isNumeric(num) ? num || 0 : val) : val
            }
        }), jQuery.each(["height", "width"], function(i, name) {
            jQuery.cssHooks[name] = {
                get: function(elem, computed, extra) {
                    return computed ? rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? jQuery.swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra)
                    }) : getWidthOrHeight(elem, name, extra) : void 0
                },
                set: function(elem, value, extra) {
                    var styles = extra && getStyles(elem);
                    return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles) : 0)
                }
            }
        }), support.opacity || (jQuery.cssHooks.opacity = {
            get: function(elem, computed) {
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : ""
            },
            set: function(elem, value) {
                var style = elem.style,
                    currentStyle = elem.currentStyle,
                    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + 100 * value + ")" : "",
                    filter = currentStyle && currentStyle.filter || style.filter || "";
                style.zoom = 1, (value >= 1 || "" === value) && "" === jQuery.trim(filter.replace(ralpha, "")) && style.removeAttribute && (style.removeAttribute("filter"), "" === value || currentStyle && !currentStyle.filter) || (style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity)
            }
        }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
            return computed ? jQuery.swap(elem, {
                display: "inline-block"
            }, curCSS, [elem, "marginRight"]) : void 0
        }), jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function(value) {
                    for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; 4 > i; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                    return expanded
                }
            }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber)
        }), jQuery.fn.extend({
            css: function(name, value) {
                return access(this, function(elem, name, value) {
                    var styles, len, map = {},
                        i = 0;
                    if (jQuery.isArray(name)) {
                        for (styles = getStyles(elem), len = name.length; len > i; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                        return map
                    }
                    return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
                }, name, value, arguments.length > 1)
            },
            show: function() {
                return showHide(this, !0)
            },
            hide: function() {
                return showHide(this)
            },
            toggle: function(state) {
                return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                    isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
                })
            }
        }), jQuery.Tween = Tween, Tween.prototype = {
            constructor: Tween,
            init: function(elem, options, prop, end, easing, unit) {
                this.elem = elem, this.prop = prop, this.easing = easing || "swing", this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
            },
            cur: function() {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
            },
            run: function(percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                return this.pos = eased = this.options.duration ? jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this
            }
        }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
            _default: {
                get: function(tween) {
                    var result;
                    return null == tween.elem[tween.prop] || tween.elem.style && null != tween.elem.style[tween.prop] ? (result = jQuery.css(tween.elem, tween.prop, ""), result && "auto" !== result ? result : 0) : tween.elem[tween.prop]
                },
                set: function(tween) {
                    jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : tween.elem.style && (null != tween.elem.style[jQuery.cssProps[tween.prop]] || jQuery.cssHooks[tween.prop]) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now
                }
            }
        }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(tween) {
                tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now)
            }
        }, jQuery.easing = {
            linear: function(p) {
                return p
            },
            swing: function(p) {
                return .5 - Math.cos(p * Math.PI) / 2
            }
        }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
        var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
            rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
            rrun = /queueHooks$/,
            animationPrefilters = [defaultPrefilter],
            tweeners = {
                "*": [function(prop, value) {
                    var tween = this.createTween(prop, value),
                        target = tween.cur(),
                        parts = rfxnum.exec(value),
                        unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
                        start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
                        scale = 1,
                        maxIterations = 20;
                    if (start && start[3] !== unit) {
                        unit = unit || start[3], parts = parts || [], start = +target || 1;
                        do scale = scale || ".5", start /= scale, jQuery.style(tween.elem, prop, start + unit); while (scale !== (scale = tween.cur() / target) && 1 !== scale && --maxIterations)
                    }
                    return parts && (start = tween.start = +start || +target || 0, tween.unit = unit, tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween
                }]
            };
        jQuery.Animation = jQuery.extend(Animation, {
            tweener: function(props, callback) {
                jQuery.isFunction(props) ? (callback = props, props = ["*"]) : props = props.split(" ");
                for (var prop, index = 0, length = props.length; length > index; index++) prop = props[index], tweeners[prop] = tweeners[prop] || [], tweeners[prop].unshift(callback)
            },
            prefilter: function(callback, prepend) {
                prepend ? animationPrefilters.unshift(callback) : animationPrefilters.push(callback)
            }
        }), jQuery.speed = function(speed, easing, fn) {
            var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };
            return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, (null == opt.queue || opt.queue === !0) && (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
                jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue)
            }, opt
        }, jQuery.fn.extend({
            fadeTo: function(speed, to, easing, callback) {
                return this.filter(isHidden).css("opacity", 0).show().end().animate({
                    opacity: to
                }, speed, easing, callback)
            },
            animate: function(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop),
                    optall = jQuery.speed(speed, easing, callback),
                    doAnimation = function() {
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
                        (empty || jQuery._data(this, "finish")) && anim.stop(!0)
                    };
                return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
            },
            stop: function(type, clearQueue, gotoEnd) {
                var stopQueue = function(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop, stop(gotoEnd)
                };
                return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function() {
                    var dequeue = !0,
                        index = null != type && type + "queueHooks",
                        timers = jQuery.timers,
                        data = jQuery._data(this);
                    if (index) data[index] && data[index].stop && stopQueue(data[index]);
                    else
                        for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                    for (index = timers.length; index--;) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
                    (dequeue || !gotoEnd) && jQuery.dequeue(this, type)
                })
            },
            finish: function(type) {
                return type !== !1 && (type = type || "fx"), this.each(function() {
                    var index, data = jQuery._data(this),
                        queue = data[type + "queue"],
                        hooks = data[type + "queueHooks"],
                        timers = jQuery.timers,
                        length = queue ? queue.length : 0;
                    for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
                    for (index = 0; length > index; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                    delete data.finish
                })
            }
        }), jQuery.each(["toggle", "show", "hide"], function(i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) {
                return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
            }
        }), jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(name, props) {
            jQuery.fn[name] = function(speed, easing, callback) {
                return this.animate(props, speed, easing, callback)
            }
        }), jQuery.timers = [], jQuery.fx.tick = function() {
            var timer, timers = jQuery.timers,
                i = 0;
            for (fxNow = jQuery.now(); i < timers.length; i++) timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1);
            timers.length || jQuery.fx.stop(), fxNow = void 0
        }, jQuery.fx.timer = function(timer) {
            jQuery.timers.push(timer), timer() ? jQuery.fx.start() : jQuery.timers.pop()
        }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
            timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
        }, jQuery.fx.stop = function() {
            clearInterval(timerId), timerId = null
        }, jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, jQuery.fn.delay = function(time, type) {
            return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, hooks) {
                var timeout = setTimeout(next, time);
                hooks.stop = function() {
                    clearTimeout(timeout)
                }
            })
        },
            function() {
                var input, div, select, a, opt;
                div = document.createElement("div"), div.setAttribute("className", "t"), div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = div.getElementsByTagName("a")[0], select = document.createElement("select"), opt = select.appendChild(document.createElement("option")), input = div.getElementsByTagName("input")[0], a.style.cssText = "top:1px", support.getSetAttribute = "t" !== div.className, support.style = /top/.test(a.getAttribute("style")), support.hrefNormalized = "/a" === a.getAttribute("href"), support.checkOn = !!input.value, support.optSelected = opt.selected, support.enctype = !!document.createElement("form").enctype, select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement("input"), input.setAttribute("value", ""), support.input = "" === input.getAttribute("value"), input.value = "t", input.setAttribute("type", "radio"), support.radioValue = "t" === input.value
            }();
        var rreturn = /\r/g;
        jQuery.fn.extend({
            val: function(value) {
                var hooks, ret, isFunction, elem = this[0]; {
                    if (arguments.length) return isFunction = jQuery.isFunction(value), this.each(function(i) {
                        var val;
                        1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, null == val ? val = "" : "number" == typeof val ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function(value) {
                            return null == value ? "" : value + ""
                        })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], hooks && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val))
                    });
                    if (elem) return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret)
                }
            }
        }), jQuery.extend({
            valHooks: {
                option: {
                    get: function(elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return null != val ? val : jQuery.trim(jQuery.text(elem))
                    }
                },
                select: {
                    get: function(elem) {
                        for (var value, option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type || 0 > index, values = one ? null : [], max = one ? index + 1 : options.length, i = 0 > index ? max : one ? index : 0; max > i; i++)
                            if (option = options[i], !(!option.selected && i !== index || (support.optDisabled ? option.disabled : null !== option.getAttribute("disabled")) || option.parentNode.disabled && jQuery.nodeName(option.parentNode, "optgroup"))) {
                                if (value = jQuery(option).val(), one) return value;
                                values.push(value)
                            }
                        return values
                    },
                    set: function(elem, value) {
                        for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--;)
                            if (option = options[i], jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) try {
                                option.selected = optionSet = !0
                            } catch (_) {
                                option.scrollHeight
                            } else option.selected = !1;
                        return optionSet || (elem.selectedIndex = -1), options
                    }
                }
            }
        }), jQuery.each(["radio", "checkbox"], function() {
            jQuery.valHooks[this] = {
                set: function(elem, value) {
                    return jQuery.isArray(value) ? elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0 : void 0
                }
            }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
                return null === elem.getAttribute("value") ? "on" : elem.value
            })
        });
        var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle,
            ruseDefault = /^(?:checked|selected)$/i,
            getSetAttribute = support.getSetAttribute,
            getSetInput = support.input;
        jQuery.fn.extend({
            attr: function(name, value) {
                return access(this, jQuery.attr, name, value, arguments.length > 1)
            },
            removeAttr: function(name) {
                return this.each(function() {
                    jQuery.removeAttr(this, name)
                })
            }
        }), jQuery.extend({
            attr: function(elem, name, value) {
                var hooks, ret, nType = elem.nodeType;
                if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return typeof elem.getAttribute === strundefined ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)), void 0 === value ? hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret) : null !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : void jQuery.removeAttr(elem, name))
            },
            removeAttr: function(elem, value) {
                var name, propName, i = 0,
                    attrNames = value && value.match(rnotwhite);
                if (attrNames && 1 === elem.nodeType)
                    for (; name = attrNames[i++];) propName = jQuery.propFix[name] || name, jQuery.expr.match.bool.test(name) ? getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem[propName] = !1 : elem[jQuery.camelCase("default-" + name)] = elem[propName] = !1 : jQuery.attr(elem, name, ""), elem.removeAttribute(getSetAttribute ? name : propName)
            },
            attrHooks: {
                type: {
                    set: function(elem, value) {
                        if (!support.radioValue && "radio" === value && jQuery.nodeName(elem, "input")) {
                            var val = elem.value;
                            return elem.setAttribute("type", value), val && (elem.value = val), value
                        }
                    }
                }
            }
        }), boolHook = {
            set: function(elem, value, name) {
                return value === !1 ? jQuery.removeAttr(elem, name) : getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name) : elem[jQuery.camelCase("default-" + name)] = elem[name] = !0, name
            }
        }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) {
                var ret, handle;
                return isXML || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != getter(elem, name, isXML) ? name.toLowerCase() : null, attrHandle[name] = handle), ret
            } : function(elem, name, isXML) {
                return isXML ? void 0 : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null
            }
        }), getSetInput && getSetAttribute || (jQuery.attrHooks.value = {
            set: function(elem, value, name) {
                return jQuery.nodeName(elem, "input") ? void(elem.defaultValue = value) : nodeHook && nodeHook.set(elem, value, name)
            }
        }), getSetAttribute || (nodeHook = {
            set: function(elem, value, name) {
                var ret = elem.getAttributeNode(name);
                return ret || elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name)), ret.value = value += "", "value" === name || value === elem.getAttribute(name) ? value : void 0
            }
        }, attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML) {
            var ret;
            return isXML ? void 0 : (ret = elem.getAttributeNode(name)) && "" !== ret.value ? ret.value : null
        }, jQuery.valHooks.button = {
            get: function(elem, name) {
                var ret = elem.getAttributeNode(name);
                return ret && ret.specified ? ret.value : void 0
            },
            set: nodeHook.set
        }, jQuery.attrHooks.contenteditable = {
            set: function(elem, value, name) {
                nodeHook.set(elem, "" === value ? !1 : value, name)
            }
        }, jQuery.each(["width", "height"], function(i, name) {
            jQuery.attrHooks[name] = {
                set: function(elem, value) {
                    return "" === value ? (elem.setAttribute(name, "auto"), value) : void 0
                }
            }
        })), support.style || (jQuery.attrHooks.style = {
            get: function(elem) {
                return elem.style.cssText || void 0
            },
            set: function(elem, value) {
                return elem.style.cssText = value + ""
            }
        });
        var rfocusable = /^(?:input|select|textarea|button|object)$/i,
            rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
            prop: function(name, value) {
                return access(this, jQuery.prop, name, value, arguments.length > 1)
            },
            removeProp: function(name) {
                return name = jQuery.propFix[name] || name, this.each(function() {
                    try {
                        this[name] = void 0, delete this[name]
                    } catch (e) {}
                })
            }
        }), jQuery.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(elem, name, value) {
                var ret, hooks, notxml, nType = elem.nodeType;
                if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return notxml = 1 !== nType || !jQuery.isXMLDoc(elem), notxml && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name]
            },
            propHooks: {
                tabIndex: {
                    get: function(elem) {
                        var tabindex = jQuery.find.attr(elem, "tabindex");
                        return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                    }
                }
            }
        }), support.hrefNormalized || jQuery.each(["href", "src"], function(i, name) {
            jQuery.propHooks[name] = {
                get: function(elem) {
                    return elem.getAttribute(name, 4)
                }
            }
        }), support.optSelected || (jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                return parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex), null
            }
        }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            jQuery.propFix[this.toLowerCase()] = this
        }), support.enctype || (jQuery.propFix.enctype = "encoding");
        var rclass = /[\t\r\n\f]/g;
        jQuery.fn.extend({
            addClass: function(value) {
                var classes, elem, cur, clazz, j, finalValue, i = 0,
                    len = this.length,
                    proceed = "string" == typeof value && value;
                if (jQuery.isFunction(value)) return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, this.className))
                });
                if (proceed)
                    for (classes = (value || "").match(rnotwhite) || []; len > i; i++)
                        if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ")) {
                            for (j = 0; clazz = classes[j++];) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                            finalValue = jQuery.trim(cur), elem.className !== finalValue && (elem.className = finalValue)
                        }
                return this
            },
            removeClass: function(value) {
                var classes, elem, cur, clazz, j, finalValue, i = 0,
                    len = this.length,
                    proceed = 0 === arguments.length || "string" == typeof value && value;
                if (jQuery.isFunction(value)) return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className))
                });
                if (proceed)
                    for (classes = (value || "").match(rnotwhite) || []; len > i; i++)
                        if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "")) {
                            for (j = 0; clazz = classes[j++];)
                                for (; cur.indexOf(" " + clazz + " ") >= 0;) cur = cur.replace(" " + clazz + " ", " ");
                            finalValue = value ? jQuery.trim(cur) : "", elem.className !== finalValue && (elem.className = finalValue)
                        }
                return this
            },
            toggleClass: function(value, stateVal) {
                var type = typeof value;
                return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : this.each(jQuery.isFunction(value) ? function(i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal)
                } : function() {
                    if ("string" === type)
                        for (var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || []; className = classNames[i++];) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
                    else(type === strundefined || "boolean" === type) && (this.className && jQuery._data(this, "__className__", this.className), this.className = this.className || value === !1 ? "" : jQuery._data(this, "__className__") || "")
                })
            },
            hasClass: function(selector) {
                for (var className = " " + selector + " ", i = 0, l = this.length; l > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) return !0;
                return !1
            }
        }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(i, name) {
            jQuery.fn[name] = function(data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
            }
        }), jQuery.fn.extend({
            hover: function(fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
            },
            bind: function(types, data, fn) {
                return this.on(types, null, data, fn)
            },
            unbind: function(types, fn) {
                return this.off(types, null, fn)
            },
            delegate: function(selector, types, data, fn) {
                return this.on(types, selector, data, fn)
            },
            undelegate: function(selector, types, fn) {
                return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn)
            }
        });
        var nonce = jQuery.now(),
            rquery = /\?/,
            rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        jQuery.parseJSON = function(data) {
            if (window.JSON && window.JSON.parse) return window.JSON.parse(data + "");
            var requireNonComma, depth = null,
                str = jQuery.trim(data + "");
            return str && !jQuery.trim(str.replace(rvalidtokens, function(token, comma, open, close) {
                return requireNonComma && comma && (depth = 0), 0 === depth ? token : (requireNonComma = open || comma, depth += !close - !open, "")
            })) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data)
        }, jQuery.parseXML = function(data) {
            var xml, tmp;
            if (!data || "string" != typeof data) return null;
            try {
                window.DOMParser ? (tmp = new DOMParser, xml = tmp.parseFromString(data, "text/xml")) : (xml = new ActiveXObject("Microsoft.XMLDOM"), xml.async = "false", xml.loadXML(data))
            } catch (e) {
                xml = void 0
            }
            return xml && xml.documentElement && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml
        };
        var ajaxLocParts, ajaxLocation, rhash = /#.*$/,
            rts = /([?&])_=[^&]*/,
            rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//,
            rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            prefilters = {},
            transports = {},
            allTypes = "*/".concat("*");
        try {
            ajaxLocation = location.href
        } catch (e) {
            ajaxLocation = document.createElement("a"), ajaxLocation.href = "", ajaxLocation = ajaxLocation.href
        }
        ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [], jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ajaxLocation,
                type: "GET",
                isLocal: rlocalProtocol.test(ajaxLocParts[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": jQuery.parseJSON,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function(url, options) {
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    2 !== state && (state = 2, timeoutTimer && clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && 300 > status || 304 === status, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), modified && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, (status || !statusText) && (statusText = "error", 0 > status && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
                }
                "object" == typeof url && (options = url, url = void 0), options = options || {};
                var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
                    callbackContext = s.context || s,
                    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                    deferred = jQuery.Deferred(),
                    completeDeferred = jQuery.Callbacks("once memory"),
                    statusCode = s.statusCode || {},
                    requestHeaders = {},
                    requestHeadersNames = {},
                    state = 0,
                    strAbort = "canceled",
                    jqXHR = {
                        readyState: 0,
                        getResponseHeader: function(key) {
                            var match;
                            if (2 === state) {
                                if (!responseHeaders)
                                    for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) responseHeaders[match[1].toLowerCase()] = match[2];
                                match = responseHeaders[key.toLowerCase()]
                            }
                            return null == match ? null : match
                        },
                        getAllResponseHeaders: function() {
                            return 2 === state ? responseHeadersString : null
                        },
                        setRequestHeader: function(name, value) {
                            var lname = name.toLowerCase();
                            return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this
                        },
                        overrideMimeType: function(type) {
                            return state || (s.mimeType = type), this
                        },
                        statusCode: function(map) {
                            var code;
                            if (map)
                                if (2 > state)
                                    for (code in map) statusCode[code] = [statusCode[code], map[code]];
                                else jqXHR.always(map[jqXHR.status]);
                            return this
                        },
                        abort: function(statusText) {
                            var finalText = statusText || strAbort;
                            return transport && transport.abort(finalText), done(0, finalText), this
                        }
                    };
                if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !(!parts || parts[1] === ajaxLocParts[1] && parts[2] === ajaxLocParts[2] && (parts[3] || ("http:" === parts[1] ? "80" : "443")) === (ajaxLocParts[3] || ("http:" === ajaxLocParts[1] ? "80" : "443")))), s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === state) return jqXHR;
                fireGlobals = jQuery.event && s.global, fireGlobals && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++)), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || 2 === state)) return jqXHR.abort();
                strAbort = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) jqXHR[i](s[i]);
                if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                    jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), s.async && s.timeout > 0 && (timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout")
                    }, s.timeout));
                    try {
                        state = 1, transport.send(requestHeaders, done)
                    } catch (e) {
                        if (!(2 > state)) throw e;
                        done(-1, e)
                    }
                } else done(-1, "No Transport");
                return jqXHR
            },
            getJSON: function(url, data, callback) {
                return jQuery.get(url, data, callback, "json")
            },
            getScript: function(url, callback) {
                return jQuery.get(url, void 0, callback, "script")
            }
        }), jQuery.each(["get", "post"], function(i, method) {
            jQuery[method] = function(url, data, callback, type) {
                return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                })
            }
        }), jQuery._evalUrl = function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, jQuery.fn.extend({
            wrapAll: function(html) {
                if (jQuery.isFunction(html)) return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i))
                });
                if (this[0]) {
                    var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
                        for (var elem = this; elem.firstChild && 1 === elem.firstChild.nodeType;) elem = elem.firstChild;
                        return elem
                    }).append(this)
                }
                return this
            },
            wrapInner: function(html) {
                return this.each(jQuery.isFunction(html) ? function(i) {
                    jQuery(this).wrapInner(html.call(this, i))
                } : function() {
                    var self = jQuery(this),
                        contents = self.contents();
                    contents.length ? contents.wrapAll(html) : self.append(html)
                })
            },
            wrap: function(html) {
                var isFunction = jQuery.isFunction(html);
                return this.each(function(i) {
                    jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
                }).end()
            }
        }), jQuery.expr.filters.hidden = function(elem) {
            return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && "none" === (elem.style && elem.style.display || jQuery.css(elem, "display"))
        }, jQuery.expr.filters.visible = function(elem) {
            return !jQuery.expr.filters.hidden(elem)
        };
        var r20 = /%20/g,
            rbracket = /\[\]$/,
            rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;
        jQuery.param = function(a, traditional) {
            var prefix, s = [],
                add = function(key, value) {
                    value = jQuery.isFunction(value) ? value() : null == value ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
                };
            if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
                add(this.name, this.value)
            });
            else
                for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
            return s.join("&").replace(r20, "+")
        }, jQuery.fn.extend({
            serialize: function() {
                return jQuery.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this
                }).filter(function() {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
                }).map(function(i, elem) {
                    var val = jQuery(this).val();
                    return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                        return {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        }
                    }) : {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    }
                }).get()
            }
        }), jQuery.ajaxSettings.xhr = void 0 !== window.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR()
        } : createStandardXHR;
        var xhrId = 0,
            xhrCallbacks = {},
            xhrSupported = jQuery.ajaxSettings.xhr();
        window.attachEvent && window.attachEvent("onunload", function() {
            for (var key in xhrCallbacks) xhrCallbacks[key](void 0, !0)
        }), support.cors = !!xhrSupported && "withCredentials" in xhrSupported, xhrSupported = support.ajax = !!xhrSupported, xhrSupported && jQuery.ajaxTransport(function(options) {
            if (!options.crossDomain || support.cors) {
                var callback;
                return {
                    send: function(headers, complete) {
                        var i, xhr = options.xhr(),
                            id = ++xhrId;
                        if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields)
                            for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                        options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
                        for (i in headers) void 0 !== headers[i] && xhr.setRequestHeader(i, headers[i] + "");
                        xhr.send(options.hasContent && options.data || null), callback = function(_, isAbort) {
                            var status, statusText, responses;
                            if (callback && (isAbort || 4 === xhr.readyState))
                                if (delete xhrCallbacks[id], callback = void 0, xhr.onreadystatechange = jQuery.noop, isAbort) 4 !== xhr.readyState && xhr.abort();
                                else {
                                    responses = {}, status = xhr.status, "string" == typeof xhr.responseText && (responses.text = xhr.responseText);
                                    try {
                                        statusText = xhr.statusText
                                    } catch (e) {
                                        statusText = ""
                                    }
                                    status || !options.isLocal || options.crossDomain ? 1223 === status && (status = 204) : status = responses.text ? 200 : 404
                                }
                            responses && complete(status, statusText, responses, xhr.getAllResponseHeaders())
                        }, options.async ? 4 === xhr.readyState ? setTimeout(callback) : xhr.onreadystatechange = xhrCallbacks[id] = callback : callback()
                    },
                    abort: function() {
                        callback && callback(void 0, !0)
                    }
                }
            }
        }), jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(text) {
                    return jQuery.globalEval(text), text
                }
            }
        }), jQuery.ajaxPrefilter("script", function(s) {
            void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET", s.global = !1)
        }), jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain) {
                var script, head = document.head || jQuery("head")[0] || document.documentElement;
                return {
                    send: function(_, callback) {
                        script = document.createElement("script"), script.async = !0, s.scriptCharset && (script.charset = s.scriptCharset), script.src = s.url, script.onload = script.onreadystatechange = function(_, isAbort) {
                            (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) && (script.onload = script.onreadystatechange = null, script.parentNode && script.parentNode.removeChild(script), script = null, isAbort || callback(200, "success"))
                        }, head.insertBefore(script, head.firstChild)
                    },
                    abort: function() {
                        script && script.onload(void 0, !0)
                    }
                }
            }
        });
        var oldCallbacks = [],
            rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                return this[callback] = !0, callback
            }
        }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
            return jsonProp || "jsonp" === s.dataTypes[0] ? (callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
                return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0]
            }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
                responseContainer = arguments
            }, jqXHR.always(function() {
                window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0
            }), "script") : void 0
        }), jQuery.parseHTML = function(data, context, keepScripts) {
            if (!data || "string" != typeof data) return null;
            "boolean" == typeof context && (keepScripts = context, context = !1), context = context || document;
            var parsed = rsingleTag.exec(data),
                scripts = !keepScripts && [];
            return parsed ? [context.createElement(parsed[1])] : (parsed = jQuery.buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes))
        };
        var _load = jQuery.fn.load;
        jQuery.fn.load = function(url, params, callback) {
            if ("string" != typeof url && _load) return _load.apply(this, arguments);
            var selector, response, type, self = this,
                off = url.indexOf(" ");
            return off >= 0 && (selector = jQuery.trim(url.slice(off, url.length)), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), self.length > 0 && jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
            }).complete(callback && function(jqXHR, status) {
                    self.each(callback, response || [jqXHR.responseText, status, jqXHR])
                }), this
        }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
            jQuery.fn[type] = function(fn) {
                return this.on(type, fn)
            }
        }), jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem
            }).length
        };
        var docElem = window.document.documentElement;
        jQuery.offset = {
            setOffset: function(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                    curElem = jQuery(elem),
                    props = {};
                "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, curOffset)), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props)
            }
        }, jQuery.fn.extend({
            offset: function(options) {
                if (arguments.length) return void 0 === options ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i)
                });
                var docElem, win, box = {
                        top: 0,
                        left: 0
                    },
                    elem = this[0],
                    doc = elem && elem.ownerDocument;
                if (doc) return docElem = doc.documentElement, jQuery.contains(docElem, elem) ? (typeof elem.getBoundingClientRect !== strundefined && (box = elem.getBoundingClientRect()), win = getWindow(doc), {
                    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
                    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
                }) : box
            },
            position: function() {
                if (this[0]) {
                    var offsetParent, offset, parentOffset = {
                            top: 0,
                            left: 0
                        },
                        elem = this[0];
                    return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), {
                        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var offsetParent = this.offsetParent || docElem; offsetParent && !jQuery.nodeName(offsetParent, "html") && "static" === jQuery.css(offsetParent, "position");) offsetParent = offsetParent.offsetParent;
                    return offsetParent || docElem
                })
            }
        }), jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(method, prop) {
            var top = /Y/.test(prop);
            jQuery.fn[method] = function(val) {
                return access(this, function(elem, method, val) {
                    var win = getWindow(elem);
                    return void 0 === val ? win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method] : void(win ? win.scrollTo(top ? jQuery(win).scrollLeft() : val, top ? val : jQuery(win).scrollTop()) : elem[method] = val)
                }, method, val, arguments.length, null)
            }
        }), jQuery.each(["top", "left"], function(i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                return computed ? (computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed) : void 0
            })
        }), jQuery.each({
            Height: "height",
            Width: "width"
        }, function(name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
                        extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                    return access(this, function(elem, type, value) {
                        var doc;
                        return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                    }, type, chainable ? margin : void 0, chainable, null)
                }
            })
        }), jQuery.fn.size = function() {
            return this.length
        }, jQuery.fn.andSelf = jQuery.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return jQuery
        });
        var _jQuery = window.jQuery,
            _$ = window.$;
        return jQuery.noConflict = function(deep) {
            return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
        }, typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery), jQuery
    }),
        /*! jQuery UI - v1.11.4 - 2015-10-01
         * http://jqueryui.com
         * Includes: effect.js
         * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

        function(e) {
            "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
        }(function(e) {
            var t = "ui-effects-",
                i = e;
            e.effects = {
                effect: {}
            },
                function(e, t) {
                    function i(e, t, i) {
                        var s = d[t.type] || {};
                        return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
                    }

                    function s(i) {
                        var s = l(),
                            n = s._rgba = [];
                        return i = i.toLowerCase(), f(h, function(e, a) {
                            var o, r = a.re.exec(i),
                                h = r && a.parse(r),
                                l = a.space || "rgba";
                            return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
                        }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
                    }

                    function n(e, t, i) {
                        return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
                    }
                    var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                        r = /^([\-+])=\s*(\d+\.?\d*)/,
                        h = [{
                            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function(e) {
                                return [e[1], e[2], e[3], e[4]]
                            }
                        }, {
                            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function(e) {
                                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                            }
                        }, {
                            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                            parse: function(e) {
                                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                            }
                        }, {
                            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                            parse: function(e) {
                                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                            }
                        }, {
                            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            space: "hsla",
                            parse: function(e) {
                                return [e[1], e[2] / 100, e[3] / 100, e[4]]
                            }
                        }],
                        l = e.Color = function(t, i, s, n) {
                            return new e.Color.fn.parse(t, i, s, n)
                        },
                        u = {
                            rgba: {
                                props: {
                                    red: {
                                        idx: 0,
                                        type: "byte"
                                    },
                                    green: {
                                        idx: 1,
                                        type: "byte"
                                    },
                                    blue: {
                                        idx: 2,
                                        type: "byte"
                                    }
                                }
                            },
                            hsla: {
                                props: {
                                    hue: {
                                        idx: 0,
                                        type: "degrees"
                                    },
                                    saturation: {
                                        idx: 1,
                                        type: "percent"
                                    },
                                    lightness: {
                                        idx: 2,
                                        type: "percent"
                                    }
                                }
                            }
                        },
                        d = {
                            "byte": {
                                floor: !0,
                                max: 255
                            },
                            percent: {
                                max: 1
                            },
                            degrees: {
                                mod: 360,
                                floor: !0
                            }
                        },
                        c = l.support = {},
                        p = e("<p>")[0],
                        f = e.each;
                    p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(e, t) {
                        t.cache = "_" + e, t.props.alpha = {
                            idx: 3,
                            type: "percent",
                            def: 1
                        }
                    }), l.fn = e.extend(l.prototype, {
                        parse: function(n, o, r, h) {
                            if (n === t) return this._rgba = [null, null, null, null], this;
                            (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                            var d = this,
                                c = e.type(n),
                                p = this._rgba = [];
                            return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function(e, t) {
                                p[t.idx] = i(n[t.idx], t)
                            }), this) : "object" === c ? (n instanceof l ? f(u, function(e, t) {
                                n[t.cache] && (d[t.cache] = n[t.cache].slice())
                            }) : f(u, function(t, s) {
                                var a = s.cache;
                                f(s.props, function(e, t) {
                                    if (!d[a] && s.to) {
                                        if ("alpha" === e || null == n[e]) return;
                                        d[a] = s.to(d._rgba)
                                    }
                                    d[a][t.idx] = i(n[e], t, !0)
                                }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                            }), this) : t
                        },
                        is: function(e) {
                            var i = l(e),
                                s = !0,
                                n = this;
                            return f(u, function(e, a) {
                                var o, r = i[a.cache];
                                return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(e, i) {
                                    return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                                })), s
                            }), s
                        },
                        _space: function() {
                            var e = [],
                                t = this;
                            return f(u, function(i, s) {
                                t[s.cache] && e.push(i)
                            }), e.pop()
                        },
                        transition: function(e, t) {
                            var s = l(e),
                                n = s._space(),
                                a = u[n],
                                o = 0 === this.alpha() ? l("transparent") : this,
                                r = o[a.cache] || a.to(o._rgba),
                                h = r.slice();
                            return s = s[a.cache], f(a.props, function(e, n) {
                                var a = n.idx,
                                    o = r[a],
                                    l = s[a],
                                    u = d[n.type] || {};
                                null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
                            }), this[n](h)
                        },
                        blend: function(t) {
                            if (1 === this._rgba[3]) return this;
                            var i = this._rgba.slice(),
                                s = i.pop(),
                                n = l(t)._rgba;
                            return l(e.map(i, function(e, t) {
                                return (1 - s) * n[t] + s * e
                            }))
                        },
                        toRgbaString: function() {
                            var t = "rgba(",
                                i = e.map(this._rgba, function(e, t) {
                                    return null == e ? t > 2 ? 1 : 0 : e
                                });
                            return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                        },
                        toHslaString: function() {
                            var t = "hsla(",
                                i = e.map(this.hsla(), function(e, t) {
                                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                                });
                            return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                        },
                        toHexString: function(t) {
                            var i = this._rgba.slice(),
                                s = i.pop();
                            return t && i.push(~~(255 * s)), "#" + e.map(i, function(e) {
                                return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                            }).join("")
                        },
                        toString: function() {
                            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                        }
                    }), l.fn.parse.prototype = l.fn, u.hsla.to = function(e) {
                        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                        var t, i, s = e[0] / 255,
                            n = e[1] / 255,
                            a = e[2] / 255,
                            o = e[3],
                            r = Math.max(s, n, a),
                            h = Math.min(s, n, a),
                            l = r - h,
                            u = r + h,
                            d = .5 * u;
                        return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
                    }, u.hsla.from = function(e) {
                        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                        var t = e[0] / 360,
                            i = e[1],
                            s = e[2],
                            a = e[3],
                            o = .5 >= s ? s * (1 + i) : s + i - s * i,
                            r = 2 * s - o;
                        return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
                    }, f(u, function(s, n) {
                        var a = n.props,
                            o = n.cache,
                            h = n.to,
                            u = n.from;
                        l.fn[s] = function(s) {
                            if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
                            var n, r = e.type(s),
                                d = "array" === r || "object" === r ? s : arguments,
                                c = this[o].slice();
                            return f(a, function(e, t) {
                                var s = d["object" === r ? e : t.idx];
                                null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                            }), u ? (n = l(u(c)), n[o] = c, n) : l(c)
                        }, f(a, function(t, i) {
                            l.fn[t] || (l.fn[t] = function(n) {
                                var a, o = e.type(n),
                                    h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
                                    l = this[h](),
                                    u = l[i.idx];
                                return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                            })
                        })
                    }), l.hook = function(t) {
                        var i = t.split(" ");
                        f(i, function(t, i) {
                            e.cssHooks[i] = {
                                set: function(t, n) {
                                    var a, o, r = "";
                                    if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                                        if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
                                            for (o = "backgroundColor" === i ? t.parentNode : t;
                                                 ("" === r || "transparent" === r) && o && o.style;) try {
                                                r = e.css(o, "backgroundColor"), o = o.parentNode
                                            } catch (h) {}
                                            n = n.blend(r && "transparent" !== r ? r : "_default")
                                        }
                                        n = n.toRgbaString()
                                    }
                                    try {
                                        t.style[i] = n
                                    } catch (h) {}
                                }
                            }, e.fx.step[i] = function(t) {
                                t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                            }
                        })
                    }, l.hook(o), e.cssHooks.borderColor = {
                        expand: function(e) {
                            var t = {};
                            return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                                t["border" + s + "Color"] = e
                            }), t
                        }
                    }, a = e.Color.names = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff"
                    }
                }(i),
                function() {
                    function t(t) {
                        var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                            a = {};
                        if (n && n.length && n[0] && n[n[0]])
                            for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
                        else
                            for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                        return a
                    }

                    function s(t, i) {
                        var s, n, o = {};
                        for (s in i) n = i[s], t[s] !== n && (a[s] || (e.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
                        return o
                    }
                    var n = ["add", "remove", "toggle"],
                        a = {
                            border: 1,
                            borderBottom: 1,
                            borderColor: 1,
                            borderLeft: 1,
                            borderRight: 1,
                            borderTop: 1,
                            borderWidth: 1,
                            margin: 1,
                            padding: 1
                        };
                    e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, s) {
                        e.fx.step[s] = function(e) {
                            ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (i.style(e.elem, s, e.end), e.setAttr = !0)
                        }
                    }), e.fn.addBack || (e.fn.addBack = function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }), e.effects.animateClass = function(i, a, o, r) {
                        var h = e.speed(a, o, r);
                        return this.queue(function() {
                            var a, o = e(this),
                                r = o.attr("class") || "",
                                l = h.children ? o.find("*").addBack() : o;
                            l = l.map(function() {
                                var i = e(this);
                                return {
                                    el: i,
                                    start: t(this)
                                }
                            }), a = function() {
                                e.each(n, function(e, t) {
                                    i[t] && o[t + "Class"](i[t])
                                })
                            }, a(), l = l.map(function() {
                                return this.end = t(this.el[0]), this.diff = s(this.start, this.end), this
                            }), o.attr("class", r), l = l.map(function() {
                                var t = this,
                                    i = e.Deferred(),
                                    s = e.extend({}, h, {
                                        queue: !1,
                                        complete: function() {
                                            i.resolve(t)
                                        }
                                    });
                                return this.el.animate(this.diff, s), i.promise()
                            }), e.when.apply(e, l.get()).done(function() {
                                a(), e.each(arguments, function() {
                                    var t = this.el;
                                    e.each(this.diff, function(e) {
                                        t.css(e, "")
                                    })
                                }), h.complete.call(o[0])
                            })
                        })
                    }, e.fn.extend({
                        addClass: function(t) {
                            return function(i, s, n, a) {
                                return s ? e.effects.animateClass.call(this, {
                                    add: i
                                }, s, n, a) : t.apply(this, arguments)
                            }
                        }(e.fn.addClass),
                        removeClass: function(t) {
                            return function(i, s, n, a) {
                                return arguments.length > 1 ? e.effects.animateClass.call(this, {
                                    remove: i
                                }, s, n, a) : t.apply(this, arguments)
                            }
                        }(e.fn.removeClass),
                        toggleClass: function(t) {
                            return function(i, s, n, a, o) {
                                return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {
                                    add: i
                                } : {
                                    remove: i
                                }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                                    toggle: i
                                }, s, n, a)
                            }
                        }(e.fn.toggleClass),
                        switchClass: function(t, i, s, n, a) {
                            return e.effects.animateClass.call(this, {
                                add: i,
                                remove: t
                            }, s, n, a)
                        }
                    })
                }(),
                function() {
                    function i(t, i, s, n) {
                        return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                            effect: t
                        }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t
                    }

                    function s(t) {
                        return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
                    }
                    e.extend(e.effects, {
                        version: "1.11.4",
                        save: function(e, i) {
                            for (var s = 0; i.length > s; s++) null !== i[s] && e.data(t + i[s], e[0].style[i[s]])
                        },
                        restore: function(e, i) {
                            var s, n;
                            for (n = 0; i.length > n; n++) null !== i[n] && (s = e.data(t + i[n]), void 0 === s && (s = ""), e.css(i[n], s))
                        },
                        setMode: function(e, t) {
                            return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                        },
                        getBaseline: function(e, t) {
                            var i, s;
                            switch (e[0]) {
                                case "top":
                                    i = 0;
                                    break;
                                case "middle":
                                    i = .5;
                                    break;
                                case "bottom":
                                    i = 1;
                                    break;
                                default:
                                    i = e[0] / t.height
                            }
                            switch (e[1]) {
                                case "left":
                                    s = 0;
                                    break;
                                case "center":
                                    s = .5;
                                    break;
                                case "right":
                                    s = 1;
                                    break;
                                default:
                                    s = e[1] / t.width
                            }
                            return {
                                x: s,
                                y: i
                            }
                        },
                        createWrapper: function(t) {
                            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                            var i = {
                                    width: t.outerWidth(!0),
                                    height: t.outerHeight(!0),
                                    "float": t.css("float")
                                },
                                s = e("<div></div>").addClass("ui-effects-wrapper").css({
                                    fontSize: "100%",
                                    background: "transparent",
                                    border: "none",
                                    margin: 0,
                                    padding: 0
                                }),
                                n = {
                                    width: t.width(),
                                    height: t.height()
                                },
                                a = document.activeElement;
                            try {
                                a.id
                            } catch (o) {
                                a = document.body
                            }
                            return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({
                                position: "relative"
                            }), t.css({
                                position: "relative"
                            })) : (e.extend(i, {
                                position: t.css("position"),
                                zIndex: t.css("z-index")
                            }), e.each(["top", "left", "bottom", "right"], function(e, s) {
                                i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                            }), t.css({
                                position: "relative",
                                top: 0,
                                left: 0,
                                right: "auto",
                                bottom: "auto"
                            })), t.css(n), s.css(i).show()
                        },
                        removeWrapper: function(t) {
                            var i = document.activeElement;
                            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                        },
                        setTransition: function(t, i, s, n) {
                            return n = n || {}, e.each(i, function(e, i) {
                                var a = t.cssUnit(i);
                                a[0] > 0 && (n[i] = a[0] * s + a[1])
                            }), n
                        }
                    }), e.fn.extend({
                        effect: function() {
                            function t(t) {
                                function i() {
                                    e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t()
                                }
                                var n = e(this),
                                    a = s.complete,
                                    r = s.mode;
                                (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
                            }
                            var s = i.apply(this, arguments),
                                n = s.mode,
                                a = s.queue,
                                o = e.effects.effect[s.effect];
                            return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function() {
                                s.complete && s.complete.call(this)
                            }) : a === !1 ? this.each(t) : this.queue(a || "fx", t)
                        },
                        show: function(e) {
                            return function(t) {
                                if (s(t)) return e.apply(this, arguments);
                                var n = i.apply(this, arguments);
                                return n.mode = "show", this.effect.call(this, n)
                            }
                        }(e.fn.show),
                        hide: function(e) {
                            return function(t) {
                                if (s(t)) return e.apply(this, arguments);
                                var n = i.apply(this, arguments);
                                return n.mode = "hide", this.effect.call(this, n)
                            }
                        }(e.fn.hide),
                        toggle: function(e) {
                            return function(t) {
                                if (s(t) || "boolean" == typeof t) return e.apply(this, arguments);
                                var n = i.apply(this, arguments);
                                return n.mode = "toggle", this.effect.call(this, n)
                            }
                        }(e.fn.toggle),
                        cssUnit: function(t) {
                            var i = this.css(t),
                                s = [];
                            return e.each(["em", "px", "%", "pt"], function(e, t) {
                                i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                            }), s
                        }
                    })
                }(),
                function() {
                    var t = {};
                    e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                        t[i] = function(t) {
                            return Math.pow(t, e + 2)
                        }
                    }), e.extend(t, {
                        Sine: function(e) {
                            return 1 - Math.cos(e * Math.PI / 2)
                        },
                        Circ: function(e) {
                            return 1 - Math.sqrt(1 - e * e)
                        },
                        Elastic: function(e) {
                            return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                        },
                        Back: function(e) {
                            return e * e * (3 * e - 2)
                        },
                        Bounce: function(e) {
                            for (var t, i = 4;
                                 ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                        }
                    }), e.each(t, function(t, i) {
                        e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) {
                            return 1 - i(1 - e)
                        }, e.easing["easeInOut" + t] = function(e) {
                            return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                        }
                    })
                }(), e.effects
        }),
        function($, undefined) {
            $.rails !== undefined && $.error("jquery-ujs has already been loaded!");
            var rails, $document = $(document);
            $.rails = rails = {
                linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
                buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
                inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                formSubmitSelector: "form",
                formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
                fileInputSelector: "input[type=file]",
                linkDisableSelector: "a[data-disable-with], a[data-disable]",
                buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
                CSRFProtection: function(xhr) {
                    var token = $('meta[name="csrf-token"]').attr("content");
                    token && xhr.setRequestHeader("X-CSRF-Token", token)
                },
                refreshCSRFTokens: function() {
                    var csrfToken = $("meta[name=csrf-token]").attr("content"),
                        csrfParam = $("meta[name=csrf-param]").attr("content");
                    $('form input[name="' + csrfParam + '"]').val(csrfToken)
                },
                fire: function(obj, name, data) {
                    var event = $.Event(name);
                    return obj.trigger(event, data), event.result !== !1
                },
                confirm: function(message) {
                    return confirm(message)
                },
                ajax: function(options) {
                    return $.ajax(options)
                },
                href: function(element) {
                    return element.attr("href")
                },
                handleRemote: function(element) {
                    var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;
                    if (rails.fire(element, "ajax:before")) {
                        if (elCrossDomain = element.data("cross-domain"), crossDomain = elCrossDomain === undefined ? null : elCrossDomain, withCredentials = element.data("with-credentials") || null, dataType = element.data("type") || $.ajaxSettings && $.ajaxSettings.dataType, element.is("form")) {
                            method = element.attr("method"), url = element.attr("action"), data = element.serializeArray();
                            var button = element.data("ujs:submit-button");
                            button && (data.push(button), element.data("ujs:submit-button", null))
                        } else element.is(rails.inputChangeSelector) ? (method = element.data("method"), url = element.data("url"), data = element.serialize(), element.data("params") && (data = data + "&" + element.data("params"))) : element.is(rails.buttonClickSelector) ? (method = element.data("method") || "get", url = element.data("url"), data = element.serialize(), element.data("params") && (data = data + "&" + element.data("params"))) : (method = element.data("method"), url = rails.href(element), data = element.data("params") || null);
                        return options = {
                            type: method || "GET",
                            data: data,
                            dataType: dataType,
                            beforeSend: function(xhr, settings) {
                                return settings.dataType === undefined && xhr.setRequestHeader("accept", "*/*;q=0.5, " + settings.accepts.script), rails.fire(element, "ajax:beforeSend", [xhr, settings]) ? void element.trigger("ajax:send", xhr) : !1
                            },
                            success: function(data, status, xhr) {
                                element.trigger("ajax:success", [data, status, xhr])
                            },
                            complete: function(xhr, status) {
                                element.trigger("ajax:complete", [xhr, status])
                            },
                            error: function(xhr, status, error) {
                                element.trigger("ajax:error", [xhr, status, error])
                            },
                            crossDomain: crossDomain
                        }, withCredentials && (options.xhrFields = {
                            withCredentials: withCredentials
                        }), url && (options.url = url), rails.ajax(options)
                    }
                    return !1
                },
                handleMethod: function(link) {
                    var href = rails.href(link),
                        method = link.data("method"),
                        target = link.attr("target"),
                        csrfToken = $("meta[name=csrf-token]").attr("content"),
                        csrfParam = $("meta[name=csrf-param]").attr("content"),
                        form = $('<form method="post" action="' + href + '"></form>'),
                        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';
                    csrfParam !== undefined && csrfToken !== undefined && (metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />'), target && form.attr("target", target), form.hide().append(metadataInput).appendTo("body"), form.submit()
                },
                formElements: function(form, selector) {
                    return form.is("form") ? $(form[0].elements).filter(selector) : form.find(selector)
                },
                disableFormElements: function(form) {
                    rails.formElements(form, rails.disableSelector).each(function() {
                        rails.disableFormElement($(this))
                    })
                },
                disableFormElement: function(element) {
                    var method, replacement;
                    method = element.is("button") ? "html" : "val", replacement = element.data("disable-with"), element.data("ujs:enable-with", element[method]()), replacement !== undefined && element[method](replacement), element.prop("disabled", !0)
                },
                enableFormElements: function(form) {
                    rails.formElements(form, rails.enableSelector).each(function() {
                        rails.enableFormElement($(this))
                    })
                },
                enableFormElement: function(element) {
                    var method = element.is("button") ? "html" : "val";
                    element.data("ujs:enable-with") && element[method](element.data("ujs:enable-with")), element.prop("disabled", !1)
                },
                allowAction: function(element) {
                    var callback, message = element.data("confirm"),
                        answer = !1;
                    return message ? (rails.fire(element, "confirm") && (answer = rails.confirm(message), callback = rails.fire(element, "confirm:complete", [answer])), answer && callback) : !0
                },
                blankInputs: function(form, specifiedSelector, nonBlank) {
                    var input, valueToCheck, inputs = $(),
                        selector = specifiedSelector || "input,textarea",
                        allInputs = form.find(selector);
                    return allInputs.each(function() {
                        if (input = $(this), valueToCheck = input.is("input[type=checkbox],input[type=radio]") ? input.is(":checked") : input.val(), !valueToCheck == !nonBlank) {
                            if (input.is("input[type=radio]") && allInputs.filter('input[type=radio]:checked[name="' + input.attr("name") + '"]').length) return !0;
                            inputs = inputs.add(input)
                        }
                    }), inputs.length ? inputs : !1
                },
                nonBlankInputs: function(form, specifiedSelector) {
                    return rails.blankInputs(form, specifiedSelector, !0)
                },
                stopEverything: function(e) {
                    return $(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
                },
                disableElement: function(element) {
                    var replacement = element.data("disable-with");
                    element.data("ujs:enable-with", element.html()), replacement !== undefined && element.html(replacement), element.bind("click.railsDisable", function(e) {
                        return rails.stopEverything(e)
                    })
                },
                enableElement: function(element) {
                    element.data("ujs:enable-with") !== undefined && (element.html(element.data("ujs:enable-with")), element.removeData("ujs:enable-with")), element.unbind("click.railsDisable")
                }
            }, rails.fire($document, "rails:attachBindings") && ($.ajaxPrefilter(function(options, originalOptions, xhr) {
                options.crossDomain || rails.CSRFProtection(xhr)
            }), $(window).on("pageshow.rails", function() {
                $($.rails.enableSelector).each(function() {
                    var element = $(this);
                    element.data("ujs:enable-with") && $.rails.enableFormElement(element)
                }), $($.rails.linkDisableSelector).each(function() {
                    var element = $(this);
                    element.data("ujs:enable-with") && $.rails.enableElement(element)
                })
            }), $document.delegate(rails.linkDisableSelector, "ajax:complete", function() {
                rails.enableElement($(this))
            }), $document.delegate(rails.buttonDisableSelector, "ajax:complete", function() {
                rails.enableFormElement($(this))
            }), $document.delegate(rails.linkClickSelector, "click.rails", function(e) {
                var link = $(this),
                    method = link.data("method"),
                    data = link.data("params"),
                    metaClick = e.metaKey || e.ctrlKey;
                if (!rails.allowAction(link)) return rails.stopEverything(e);
                if (!metaClick && link.is(rails.linkDisableSelector) && rails.disableElement(link), link.data("remote") !== undefined) {
                    if (metaClick && (!method || "GET" === method) && !data) return !0;
                    var handleRemote = rails.handleRemote(link);
                    return handleRemote === !1 ? rails.enableElement(link) : handleRemote.fail(function() {
                        rails.enableElement(link)
                    }), !1
                }
                return method ? (rails.handleMethod(link), !1) : void 0
            }), $document.delegate(rails.buttonClickSelector, "click.rails", function(e) {
                var button = $(this);
                if (!rails.allowAction(button)) return rails.stopEverything(e);
                button.is(rails.buttonDisableSelector) && rails.disableFormElement(button);
                var handleRemote = rails.handleRemote(button);
                return handleRemote === !1 ? rails.enableFormElement(button) : handleRemote.fail(function() {
                    rails.enableFormElement(button)
                }), !1
            }), $document.delegate(rails.inputChangeSelector, "change.rails", function(e) {
                var link = $(this);
                return rails.allowAction(link) ? (rails.handleRemote(link), !1) : rails.stopEverything(e)
            }), $document.delegate(rails.formSubmitSelector, "submit.rails", function(e) {
                var blankRequiredInputs, nonBlankFileInputs, form = $(this),
                    remote = form.data("remote") !== undefined;
                if (!rails.allowAction(form)) return rails.stopEverything(e);
                if (form.attr("novalidate") == undefined && (blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector), blankRequiredInputs && rails.fire(form, "ajax:aborted:required", [blankRequiredInputs]))) return rails.stopEverything(e);
                if (remote) {
                    if (nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector)) {
                        setTimeout(function() {
                            rails.disableFormElements(form)
                        }, 13);
                        var aborted = rails.fire(form, "ajax:aborted:file", [nonBlankFileInputs]);
                        return aborted || setTimeout(function() {
                            rails.enableFormElements(form)
                        }, 13), aborted
                    }
                    return rails.handleRemote(form), !1
                }
                setTimeout(function() {
                    rails.disableFormElements(form)
                }, 13)
            }), $document.delegate(rails.formInputClickSelector, "click.rails", function(event) {
                var button = $(this);
                if (!rails.allowAction(button)) return rails.stopEverything(event);
                var name = button.attr("name"),
                    data = name ? {
                        name: name,
                        value: button.val()
                    } : null;
                button.closest("form").data("ujs:submit-button", data)
            }), $document.delegate(rails.formSubmitSelector, "ajax:send.rails", function(event) {
                this == event.target && rails.disableFormElements($(this))
            }), $document.delegate(rails.formSubmitSelector, "ajax:complete.rails", function(event) {
                this == event.target && rails.enableFormElements($(this))
            }), $(function() {
                rails.refreshCSRFTokens()
            }))
        }(jQuery), "object" != typeof JSON && (JSON = {}),
        function() {
            "use strict";

            function f(e) {
                return 10 > e ? "0" + e : e
            }

            function quote(e) {
                return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                    var t = meta[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }

            function str(e, t) {
                var n, r, i, s, u, o = gap,
                    a = t[e];
                switch (a && "object" == typeof a && "function" == typeof a.toJSON && (a = a.toJSON(e)), "function" == typeof rep && (a = rep.call(t, e, a)), typeof a) {
                    case "string":
                        return quote(a);
                    case "number":
                        return isFinite(a) ? String(a) : "null";
                    case "boolean":
                    case "null":
                        return String(a);
                    case "object":
                        if (!a) return "null";
                        if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(a)) {
                            for (s = a.length, n = 0; s > n; n += 1) u[n] = str(n, a) || "null";
                            return i = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                        }
                        if (rep && "object" == typeof rep)
                            for (s = rep.length, n = 0; s > n; n += 1) "string" == typeof rep[n] && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                        else
                            for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                        return i = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            });
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                rep;
            "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
                var r;
                if (gap = "", indent = "", "number" == typeof n)
                    for (r = 0; n > r; r += 1) indent += " ";
                else "string" == typeof n && (indent = n);
                if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
                    "": e
                });
                throw new Error("JSON.stringify")
            }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(e, t) {
                    var n, r, i = e[t];
                    if (i && "object" == typeof i)
                        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
                    return reviver.call(e, t, i)
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }(),

        function(e, t) {
            "use strict";
            var n = e.History = e.History || {},
                r = e.jQuery;
            if ("undefined" != typeof n.Adapter) throw new Error("History.js Adapter has already been loaded...");
            n.Adapter = {
                bind: function(e, t, n) {
                    r(e).bind(t, n)
                },
                trigger: function(e, t, n) {
                    r(e).trigger(t, n)
                },
                extractEventData: function(e, n, r) {
                    var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
                    return i
                },
                onDomLoad: function(e) {
                    r(e)
                }
            }, "undefined" != typeof n.init && n.init()
        }(window),
        function(e) {
            "use strict";
            var n = e.document,
                r = e.setTimeout || r,
                i = e.clearTimeout || i,
                s = e.setInterval || s,
                o = e.History = e.History || {};
            if ("undefined" != typeof o.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
            o.initHtml4 = function() {
                return "undefined" != typeof o.initHtml4.initialized ? !1 : (o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function(e) {
                    var n, t = o.getHashByIndex();
                    return n = e === t
                }, o.isHashEqual = function(e, t) {
                    return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
                }, o.saveHash = function(e) {
                    return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
                }, o.getHashByIndex = function(e) {
                    var t = null;
                    return t = "undefined" == typeof e ? o.savedHashes[o.savedHashes.length - 1] : 0 > e ? o.savedHashes[o.savedHashes.length + e] : o.savedHashes[e]
                }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function(e, t, n) {
                    var i, r = o.getHashByState(e);
                    return i = {
                        discardedState: e,
                        backState: n,
                        forwardState: t
                    }, o.discardedStates[r] = i, !0
                }, o.discardHash = function(e, t, n) {
                    var r = {
                        discardedHash: e,
                        backState: n,
                        forwardState: t
                    };
                    return o.discardedHashes[e] = r, !0
                }, o.discardedState = function(e) {
                    var n, t = o.getHashByState(e);
                    return n = o.discardedStates[t] || !1
                }, o.discardedHash = function(e) {
                    var t = o.discardedHashes[e] || !1;
                    return t
                }, o.recycleState = function(e) {
                    var t = o.getHashByState(e);
                    return o.discardedState(e) && delete o.discardedStates[t], !0
                }, o.emulated.hashChange && (o.hashChangeInit = function() {
                    o.checkerFunction = null;
                    var r, i, u, a, t = "",
                        f = Boolean(o.getHash());
                    return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function() {
                        if (a) return !1;
                        a = !0;
                        var n = o.getHash(),
                            r = o.getHash(i.contentWindow.document);
                        return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && "" === r ? o.back() : o.setHash(r, !1)), a = !1, !0
                    }) : o.checkerFunction = function() {
                        var n = o.getHash() || "";
                        return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
                    }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
                }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function(t) {
                    var a, n = t && t.newURL || o.getLocationHref(),
                        r = o.getHashByUrl(n),
                        i = null,
                        s = null;
                    return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
                }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function(t, n, r, i) {
                    if (r = encodeURI(r).replace(/%25/g, "%"), o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                    if (i !== !1 && o.busy()) return o.pushQueue({
                        scope: o,
                        callback: o.pushState,
                        args: arguments,
                        queue: i
                    }), !1;
                    o.busy(!0);
                    var s = o.createStateObject(t, n, r),
                        u = o.getHashByState(s),
                        a = o.getState(!1),
                        f = o.getHashByState(a),
                        l = o.getHash(),
                        c = o.expectedStateId == s.id;
                    return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
                }, o.replaceState = function(t, n, r, i) {
                    if (r = encodeURI(r).replace(/%25/g, "%"), o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                    if (i !== !1 && o.busy()) return o.pushQueue({
                        scope: o,
                        callback: o.replaceState,
                        args: arguments,
                        queue: i
                    }), !1;
                    o.busy(!0);
                    var s = o.createStateObject(t, n, r),
                        u = o.getHashByState(s),
                        a = o.getState(!1),
                        f = o.getHashByState(a),
                        l = o.getStateByIndex(-2);
                    return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
                }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() {
                    o.Adapter.trigger(e, "hashchange")
                }), void 0)
            }, "undefined" != typeof o.init && o.init()
        }(window),
        function(e, t) {
            "use strict";
            var n = e.console || t,
                r = e.document,
                i = e.navigator,
                s = !1,
                o = e.setTimeout,
                u = e.clearTimeout,
                a = e.setInterval,
                f = e.clearInterval,
                l = e.JSON,
                c = e.alert,
                h = e.History = e.History || {},
                p = e.history;
            try {
                s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
            } catch (d) {
                s = !1
            }
            if (l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode, "undefined" != typeof h.init) throw new Error("History.js Core has already been loaded...");
            h.init = function() {
                return "undefined" == typeof h.Adapter ? !1 : ("undefined" != typeof h.initCore && h.initCore(), "undefined" != typeof h.initHtml4 && h.initHtml4(), !0)
            }, h.initCore = function() {
                if ("undefined" != typeof h.initCore.initialized) return !1;
                if (h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                        var e, t = h.intervalList;
                        if ("undefined" != typeof t && null !== t) {
                            for (e = 0; e < t.length; e++) f(t[e]);
                            h.intervalList = null
                        }
                    }, h.debug = function() {
                        (h.options.debug || !1) && h.log.apply(h, arguments)
                    }, h.log = function() {
                        var i, s, o, u, a, e = "undefined" != typeof n && "undefined" != typeof n.log && "undefined" != typeof n.log.apply,
                            t = r.getElementById("log");
                        for (e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), "undefined" != typeof n.debug ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n", s = 1, o = arguments.length; o > s; ++s) {
                            if (a = arguments[s], "object" == typeof a && "undefined" != typeof l) try {
                                a = l.stringify(a)
                            } catch (f) {}
                            i += "\n" + a + "\n"
                        }
                        return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
                    }, h.getInternetExplorerMajorVersion = function() {
                        var e = h.getInternetExplorerMajorVersion.cached = "undefined" != typeof h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function() {
                            for (var e = 3, t = r.createElement("div"), n = t.getElementsByTagName("i");
                                 (t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0];);
                            return e > 4 ? e : !1
                        }();
                        return e
                    }, h.isInternetExplorer = function() {
                        var e = h.isInternetExplorer.cached = "undefined" != typeof h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
                        return e
                    }, h.emulated = h.options.html4Mode ? {
                        pushState: !0,
                        hashChange: !0
                    } : {
                        pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
                        hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
                    }, h.enabled = !h.emulated.pushState, h.bugs = {
                        setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                        safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                        ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                        hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
                    }, h.isEmptyObject = function(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t)) return !1;
                        return !0
                    }, h.cloneObject = function(e) {
                        var t, n;
                        return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
                    }, h.getRootUrl = function() {
                        var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                        return r.location.port && (e += ":" + r.location.port), e += "/"
                    }, h.getBaseHref = function() {
                        var e = r.getElementsByTagName("base"),
                            t = null,
                            n = "";
                        return 1 === e.length && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
                    }, h.getBaseUrl = function() {
                        var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                        return e
                    }, h.getPageUrl = function() {
                        var n, e = h.getState(!1, !1),
                            t = (e || {}).url || h.getLocationHref();
                        return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function(e) {
                            return /\./.test(e) ? e : e + "/"
                        })
                    }, h.getBasePageUrl = function() {
                        var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e) {
                                return /[^\/]$/.test(e) ? "" : e
                            }).replace(/\/+$/, "") + "/";
                        return e
                    }, h.getFullUrl = function(e, t) {
                        var n = e,
                            r = e.substring(0, 1);
                        return t = "undefined" == typeof t ? !0 : t, /[a-z]+\:\/\//.test(e) || (n = "/" === r ? h.getRootUrl() + e.replace(/^\/+/, "") : "#" === r ? h.getPageUrl().replace(/#.*/, "") + e : "?" === r ? h.getPageUrl().replace(/[\?#].*/, "") + e : t ? h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                    }, h.getShortUrl = function(e) {
                        var t = e,
                            n = h.getBaseUrl(),
                            r = h.getRootUrl();
                        return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                    }, h.getLocationHref = function(e) {
                        return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : -1 == e.URL.indexOf("#") && -1 != e.location.href.indexOf("#") ? e.location.href : e.URL || e.location.href
                    }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                        h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                    }, h.getState = function(e, t) {
                        "undefined" == typeof e && (e = !0), "undefined" == typeof t && (t = !0);
                        var n = h.getLastSavedState();
                        return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
                    }, h.getIdByState = function(e) {
                        var n, t = h.extractId(e.url);
                        if (!t)
                            if (n = h.getStateString(e), "undefined" != typeof h.stateToId[n]) t = h.stateToId[n];
                            else if ("undefined" != typeof h.store.stateToId[n]) t = h.store.stateToId[n];
                            else {
                                for (; t = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof h.idToState[t] || "undefined" != typeof h.store.idToState[t];);
                                h.stateToId[n] = t, h.idToState[t] = e
                            }
                        return t
                    }, h.normalizeState = function(e) {
                        var t, n;
                        return e && "object" == typeof e || (e = {}), "undefined" != typeof e.normalized ? e : (e.data && "object" == typeof e.data || (e.data = {}), t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t)
                    }, h.createStateObject = function(e, t, n) {
                        var r = {
                            data: e,
                            title: t,
                            url: n
                        };
                        return r = h.normalizeState(r)
                    }, h.getStateById = function(e) {
                        e = String(e);
                        var n = h.idToState[e] || h.store.idToState[e] || t;
                        return n
                    }, h.getStateString = function(e) {
                        var t, n, r;
                        return t = h.normalizeState(e), n = {
                            data: t.data,
                            title: e.title,
                            url: e.url
                        }, r = l.stringify(n)
                    }, h.getStateId = function(e) {
                        var t, n;
                        return t = h.normalizeState(e), n = t.id
                    }, h.getHashByState = function(e) {
                        var t, n;
                        return t = h.normalizeState(e), n = t.hash
                    }, h.extractId = function(e) {
                        var t, n, r, i;
                        return i = -1 != e.indexOf("#") ? e.split("#")[0] : e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
                    }, h.isTraditionalAnchor = function(e) {
                        var t = !/[\/\?\.]/.test(e);
                        return t
                    }, h.extractState = function(e, t) {
                        var r, i, n = null;
                        return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
                    }, h.getIdByUrl = function(e) {
                        var n = h.urlToId[e] || h.store.urlToId[e] || t;
                        return n
                    }, h.getLastSavedState = function() {
                        return h.savedStates[h.savedStates.length - 1] || t
                    }, h.getLastStoredState = function() {
                        return h.storedStates[h.storedStates.length - 1] || t
                    }, h.hasUrlDuplicate = function(e) {
                        var n, t = !1;
                        return n = h.extractState(e.url), t = n && n.id !== e.id
                    }, h.storeState = function(e) {
                        return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
                    }, h.isLastSavedState = function(e) {
                        var n, r, i, t = !1;
                        return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
                    }, h.saveState = function(e) {
                        return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
                    }, h.getStateByIndex = function(e) {
                        var t = null;
                        return t = "undefined" == typeof e ? h.savedStates[h.savedStates.length - 1] : 0 > e ? h.savedStates[h.savedStates.length + e] : h.savedStates[e]
                    }, h.getCurrentIndex = function() {
                        var e = null;
                        return e = h.savedStates.length < 1 ? 0 : h.savedStates.length - 1
                    }, h.getHash = function(e) {
                        var n, t = h.getLocationHref(e);
                        return n = h.getHashByUrl(t)
                    }, h.unescapeHash = function(e) {
                        var t = h.normalizeHash(e);
                        return t = decodeURIComponent(t)
                    }, h.normalizeHash = function(e) {
                        var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                        return t
                    }, h.setHash = function(e, t) {
                        var n, i;
                        return t !== !1 && h.busy() ? (h.pushQueue({
                            scope: h,
                            callback: h.setHash,
                            args: arguments,
                            queue: t
                        }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
                    }, h.escapeHash = function(t) {
                        var n = h.normalizeHash(t);
                        return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
                    }, h.getHashByUrl = function(e) {
                        var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                        return t = h.unescapeHash(t)
                    }, h.setTitle = function(e) {
                        var n, t = e.title;
                        t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
                        try {
                            r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                        } catch (i) {}
                        return r.title = t, h
                    }, h.queues = [], h.busy = function(e) {
                        if ("undefined" != typeof e ? h.busy.flag = e : "undefined" == typeof h.busy.flag && (h.busy.flag = !1), !h.busy.flag) {
                            u(h.busy.timeout);
                            var t = function() {
                                var e, n, r;
                                if (!h.busy.flag)
                                    for (e = h.queues.length - 1; e >= 0; --e) n = h.queues[e], 0 !== n.length && (r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay))
                            };
                            h.busy.timeout = o(t, h.options.busyDelay)
                        }
                        return h.busy.flag
                    }, h.busy.flag = !1, h.fireQueueItem = function(e) {
                        return e.callback.apply(e.scope || h, e.args || [])
                    }, h.pushQueue = function(e) {
                        return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
                    }, h.queue = function(e, t) {
                        return "function" == typeof e && (e = {
                            callback: e
                        }), "undefined" != typeof t && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
                    }, h.clearQueue = function() {
                        return h.busy.flag = !1, h.queues = [], h
                    }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                        return h.stateChanged = !0, h.doubleCheckClear(), h
                    }, h.doubleCheckClear = function() {
                        return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
                    }, h.doubleCheck = function(e) {
                        return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                            return h.doubleCheckClear(), h.stateChanged || e(), !0
                        }, h.options.doubleCheckInterval)), h
                    }, h.safariStatePoll = function() {
                        var n, t = h.extractState(h.getLocationHref());
                        return h.isLastSavedState(t) ? void 0 : (n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h)
                    }, h.back = function(e) {
                        return e !== !1 && h.busy() ? (h.pushQueue({
                            scope: h,
                            callback: h.back,
                            args: arguments,
                            queue: e
                        }), !1) : (h.busy(!0), h.doubleCheck(function() {
                            h.back(!1)
                        }), p.go(-1), !0)
                    }, h.forward = function(e) {
                        return e !== !1 && h.busy() ? (h.pushQueue({
                            scope: h,
                            callback: h.forward,
                            args: arguments,
                            queue: e
                        }), !1) : (h.busy(!0), h.doubleCheck(function() {
                            h.forward(!1)
                        }), p.go(1), !0)
                    }, h.go = function(e, t) {
                        var n;
                        if (e > 0)
                            for (n = 1; e >= n; ++n) h.forward(t);
                        else {
                            if (!(0 > e)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                            for (n = -1; n >= e; --n) h.back(t)
                        }
                        return h
                    }, h.emulated.pushState) {
                    var v = function() {};
                    h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
                } else h.onPopState = function(t, n) {
                    var s, o, r = !1,
                        i = !1;
                    return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, i = r ? h.getStateById(r) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
                }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function(t, n, r, i) {
                    if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (i !== !1 && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.pushState,
                        args: arguments,
                        queue: i
                    }), !1;
                    h.busy(!0);
                    var s = h.createStateObject(t, n, r);
                    return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
                }, h.replaceState = function(t, n, r, i) {
                    if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                    if (i !== !1 && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.replaceState,
                        args: arguments,
                        queue: i
                    }), !1;
                    h.busy(!0);
                    var s = h.createStateObject(t, n, r);
                    return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
                };
                if (s) {
                    try {
                        h.store = l.parse(s.getItem("History.store")) || {}
                    } catch (m) {
                        h.store = {}
                    }
                    h.normalizeStore()
                } else h.store = {}, h.normalizeStore();
                h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function() {
                    var e, t, n;
                    try {
                        e = l.parse(s.getItem("History.store")) || {}
                    } catch (r) {
                        e = {}
                    }
                    e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
                    for (t in h.idToState) h.idToState.hasOwnProperty(t) && (e.idToState[t] = h.idToState[t]);
                    for (t in h.urlToId) h.urlToId.hasOwnProperty(t) && (e.urlToId[t] = h.urlToId[t]);
                    for (t in h.stateToId) h.stateToId.hasOwnProperty(t) && (e.stateToId[t] = h.stateToId[t]);
                    h.store = e, h.normalizeStore(), n = l.stringify(e);
                    try {
                        s.setItem("History.store", n)
                    } catch (i) {
                        if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                        s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
                    }
                }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload)), h.emulated.pushState || (h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval)), ("Apple Computer, Inc." === i.vendor || "Mozilla" === (i.appCodeName || "")) && (h.Adapter.bind(e, "hashchange", function() {
                    h.Adapter.trigger(e, "popstate")
                }), h.getHash() && h.Adapter.onDomLoad(function() {
                    h.Adapter.trigger(e, "hashchange")
                })))
            }, (!h.options || !h.options.delayInit) && h.init()
        }(window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e(e, o) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.modal"),
                r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            n || s.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](o) : r.show && n.show(o)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.2", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var o = this,
            s = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var s = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.options.backdrop && o.adjustBackdrop(), o.adjustDialog(), s && o.$element[0].offsetWidth, o.$element.addClass("in").attr("aria-hidden", !1), o.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            s ? o.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(n)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var o = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && s;
            if (this.$backdrop = t('<div class="modal-backdrop ' + s + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, i.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this),
            s = o.attr("href"),
            n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            r = n.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, n.data(), o.data());
        o.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(n, r, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var s = function() {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(s, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
    /*! WOW - v1.0.3 - 2015-01-14
     * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
    function() {
        var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX, __bind = function(fn, me) {
                return function() {
                    return fn.apply(me, arguments)
                }
            },
            __indexOf = [].indexOf || function(item) {
                    for (var i = 0, l = this.length; l > i; i++)
                        if (i in this && this[i] === item) return i;
                    return -1
                };
        Util = function() {
            function Util() {}
            return Util.prototype.extend = function(custom, defaults) {
                var key, value;
                for (key in defaults) value = defaults[key], null == custom[key] && (custom[key] = value);
                return custom
            }, Util.prototype.isMobile = function(agent) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
            }, Util.prototype.addEvent = function(elem, event, fn) {
                return null != elem.addEventListener ? elem.addEventListener(event, fn, !1) : null != elem.attachEvent ? elem.attachEvent("on" + event, fn) : elem[event] = fn
            }, Util.prototype.removeEvent = function(elem, event, fn) {
                return null != elem.removeEventListener ? elem.removeEventListener(event, fn, !1) : null != elem.detachEvent ? elem.detachEvent("on" + event, fn) : delete elem[event]
            }, Util.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, Util
        }(), WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = function() {
                function WeakMap() {
                    this.keys = [], this.values = []
                }
                return WeakMap.prototype.get = function(key) {
                    var i, item, _i, _len, _ref;
                    for (_ref = this.keys, i = _i = 0, _len = _ref.length; _len > _i; i = ++_i)
                        if (item = _ref[i], item === key) return this.values[i]
                }, WeakMap.prototype.set = function(key, value) {
                    var i, item, _i, _len, _ref;
                    for (_ref = this.keys, i = _i = 0, _len = _ref.length; _len > _i; i = ++_i)
                        if (item = _ref[i], item === key) return void(this.values[i] = value);
                    return this.keys.push(key), this.values.push(value)
                }, WeakMap
            }()), MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = function() {
                function MutationObserver() {
                    "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                }
                return MutationObserver.notSupported = !0, MutationObserver.prototype.observe = function() {}, MutationObserver
            }()), getComputedStyle = this.getComputedStyle || function(el) {
                return this.getPropertyValue = function(prop) {
                    var _ref;
                    return "float" === prop && (prop = "styleFloat"), getComputedStyleRX.test(prop) && prop.replace(getComputedStyleRX, function(_, _char) {
                        return _char.toUpperCase()
                    }), (null != (_ref = el.currentStyle) ? _ref[prop] : void 0) || null
                }, this
            }, getComputedStyleRX = /(\-([a-z]){1})/g, this.WOW = function() {
            function WOW(options) {
                null == options && (options = {}), this.scrollCallback = __bind(this.scrollCallback, this), this.scrollHandler = __bind(this.scrollHandler, this), this.start = __bind(this.start, this), this.scrolled = !0, this.config = this.util().extend(options, this.defaults), this.animationNameCache = new WeakMap
            }
            return WOW.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null
            }, WOW.prototype.init = function() {
                var _ref;
                return this.element = window.document.documentElement, "interactive" === (_ref = document.readyState) || "complete" === _ref ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, WOW.prototype.start = function() {
                var box, _i, _len, _ref;
                if (this.stopped = !1, this.boxes = function() {
                        var _i, _len, _ref, _results;
                        for (_ref = this.element.querySelectorAll("." + this.config.boxClass), _results = [], _i = 0, _len = _ref.length; _len > _i; _i++) box = _ref[_i], _results.push(box);
                        return _results
                    }.call(this), this.all = function() {
                        var _i, _len, _ref, _results;
                        for (_ref = this.boxes, _results = [], _i = 0, _len = _ref.length; _len > _i; _i++) box = _ref[_i], _results.push(box);
                        return _results
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (_ref = this.boxes, _i = 0, _len = _ref.length; _len > _i; _i++) box = _ref[_i], this.applyStyle(box, !0);
                return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new MutationObserver(function(_this) {
                    return function(records) {
                        var node, record, _j, _len1, _results;
                        for (_results = [], _j = 0, _len1 = records.length; _len1 > _j; _j++) record = records[_j], _results.push(function() {
                            var _k, _len2, _ref1, _results1;
                            for (_ref1 = record.addedNodes || [], _results1 = [], _k = 0, _len2 = _ref1.length; _len2 > _k; _k++) node = _ref1[_k], _results1.push(this.doSync(node));
                            return _results1
                        }.call(_this));
                        return _results
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, WOW.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, WOW.prototype.sync = function() {
                return MutationObserver.notSupported ? this.doSync(this.element) : void 0
            }, WOW.prototype.doSync = function(element) {
                var box, _i, _len, _ref, _results;
                if (null == element && (element = this.element), 1 === element.nodeType) {
                    for (element = element.parentNode || element, _ref = element.querySelectorAll("." + this.config.boxClass), _results = [], _i = 0, _len = _ref.length; _len > _i; _i++) box = _ref[_i], __indexOf.call(this.all, box) < 0 ? (this.boxes.push(box), this.all.push(box), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(box, !0), _results.push(this.scrolled = !0)) : _results.push(void 0);
                    return _results
                }
            }, WOW.prototype.show = function(box) {
                return this.applyStyle(box), -1 === box.className.indexOf(this.config.animateClass) && (box.className = "" + box.className + " " + this.config.animateClass), null != this.config.callback ? this.config.callback(box) : void 0
            }, WOW.prototype.applyStyle = function(box, hidden) {
                var delay, duration, iteration;
                return duration = box.getAttribute("data-wow-duration"), delay = box.getAttribute("data-wow-delay"), iteration = box.getAttribute("data-wow-iteration"), this.animate(function(_this) {
                    return function() {
                        return _this.customStyle(box, hidden, duration, delay, iteration)
                    }
                }(this))
            }, WOW.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(callback) {
                    return window.requestAnimationFrame(callback)
                } : function(callback) {
                    return callback()
                }
            }(), WOW.prototype.resetStyle = function() {
                var box, _i, _len, _ref, _results;
                for (_ref = this.boxes, _results = [], _i = 0, _len = _ref.length; _len > _i; _i++) box = _ref[_i], _results.push(box.style.visibility = "visible");
                return _results
            }, WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
                return hidden && this.cacheAnimationName(box), box.style.visibility = hidden ? "hidden" : "visible", duration && this.vendorSet(box.style, {
                    animationDuration: duration
                }), delay && this.vendorSet(box.style, {
                    animationDelay: delay
                }), iteration && this.vendorSet(box.style, {
                    animationIterationCount: iteration
                }), this.vendorSet(box.style, {
                    animationName: hidden ? "none" : this.cachedAnimationName(box)
                }), box
            }, WOW.prototype.vendors = ["moz", "webkit"], WOW.prototype.vendorSet = function(elem, properties) {
                var name, value, vendor, _results;
                _results = [];
                for (name in properties) value = properties[name], elem["" + name] = value, _results.push(function() {
                    var _i, _len, _ref, _results1;
                    for (_ref = this.vendors, _results1 = [], _i = 0, _len = _ref.length; _len > _i; _i++) vendor = _ref[_i], _results1.push(elem["" + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value);
                    return _results1
                }.call(this));
                return _results
            }, WOW.prototype.vendorCSS = function(elem, property) {
                var result, style, vendor, _i, _len, _ref;
                for (style = getComputedStyle(elem), result = style.getPropertyCSSValue(property), _ref = this.vendors, _i = 0, _len = _ref.length; _len > _i; _i++) vendor = _ref[_i], result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
                return result
            }, WOW.prototype.animationName = function(box) {
                var animationName;
                try {
                    animationName = this.vendorCSS(box, "animation-name").cssText
                } catch (_error) {
                    animationName = getComputedStyle(box).getPropertyValue("animation-name")
                }
                return "none" === animationName ? "" : animationName
            }, WOW.prototype.cacheAnimationName = function(box) {
                return this.animationNameCache.set(box, this.animationName(box))
            }, WOW.prototype.cachedAnimationName = function(box) {
                return this.animationNameCache.get(box)
            }, WOW.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, WOW.prototype.scrollCallback = function() {
                var box;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var _i, _len, _ref, _results;
                    for (_ref = this.boxes, _results = [], _i = 0, _len = _ref.length; _len > _i; _i++) box = _ref[_i], box && (this.isVisible(box) ? this.show(box) : _results.push(box));
                    return _results
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, WOW.prototype.offsetTop = function(element) {
                for (var top; void 0 === element.offsetTop;) element = element.parentNode;
                for (top = element.offsetTop; element = element.offsetParent;) top += element.offsetTop;
                return top
            }, WOW.prototype.isVisible = function(box) {
                var bottom, offset, top, viewBottom, viewTop;
                return offset = box.getAttribute("data-wow-offset") || this.config.offset, viewTop = window.pageYOffset, viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset, top = this.offsetTop(box), bottom = top + box.clientHeight, viewBottom >= top && bottom >= viewTop
            }, WOW.prototype.util = function() {
                return null != this._util ? this._util : this._util = new Util
            }, WOW.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, WOW
        }()
    }.call(this), //! moment.js
    //! version : 2.9.0
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    function(a) {
        function b(a, b, c) {
            switch (arguments.length) {
                case 2:
                    return null != a ? a : b;
                case 3:
                    return null != a ? a : null != b ? b : c;
                default:
                    throw new Error("Implement me")
            }
        }

        function c(a, b) {
            return Bb.call(a, b)
        }

        function d() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function e(a) {
            vb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
        }

        function f(a, b) {
            var c = !0;
            return o(function() {
                return c && (e(a), c = !1), b.apply(this, arguments)
            }, b)
        }

        function g(a, b) {
            sc[a] || (e(b), sc[a] = !0)
        }

        function h(a, b) {
            return function(c) {
                return r(a.call(this, c), b)
            }
        }

        function i(a, b) {
            return function(c) {
                return this.localeData().ordinal(a.call(this, c), b)
            }
        }

        function j(a, b) {
            var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                f = a.clone().add(e, "months");
            return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
        }

        function k(a, b, c) {
            var d;
            return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
        }

        function l() {}

        function m(a, b) {
            b !== !1 && H(a), p(this, a), this._d = new Date(+a._d), uc === !1 && (uc = !0, vb.updateOffset(this), uc = !1)
        }

        function n(a) {
            var b = A(a),
                c = b.year || 0,
                d = b.quarter || 0,
                e = b.month || 0,
                f = b.week || 0,
                g = b.day || 0,
                h = b.hour || 0,
                i = b.minute || 0,
                j = b.second || 0,
                k = b.millisecond || 0;
            this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = vb.localeData(), this._bubble()
        }

        function o(a, b) {
            for (var d in b) c(b, d) && (a[d] = b[d]);
            return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a
        }

        function p(a, b) {
            var c, d, e;
            if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Kb.length > 0)
                for (c in Kb) d = Kb[c], e = b[d], "undefined" != typeof e && (a[d] = e);
            return a
        }

        function q(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }

        function r(a, b, c) {
            for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
            return (e ? c ? "+" : "" : "-") + d
        }

        function s(a, b) {
            var c = {
                milliseconds: 0,
                months: 0
            };
            return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
        }

        function t(a, b) {
            var c;
            return b = M(b, a), a.isBefore(b) ? c = s(a, b) : (c = s(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
        }

        function u(a, b) {
            return function(c, d) {
                var e, f;
                return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = vb.duration(c, d), v(this, e, a), this
            }
        }

        function v(a, b, c, d) {
            var e = b._milliseconds,
                f = b._days,
                g = b._months;
            d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && pb(a, "Date", ob(a, "Date") + f * c), g && nb(a, ob(a, "Month") + g * c), d && vb.updateOffset(a, f || g)
        }

        function w(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }

        function x(a) {
            return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
        }

        function y(a, b, c) {
            var d, e = Math.min(a.length, b.length),
                f = Math.abs(a.length - b.length),
                g = 0;
            for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && C(a[d]) !== C(b[d])) && g++;
            return g + f
        }

        function z(a) {
            if (a) {
                var b = a.toLowerCase().replace(/(.)s$/, "$1");
                a = lc[a] || mc[b] || b
            }
            return a
        }

        function A(a) {
            var b, d, e = {};
            for (d in a) c(a, d) && (b = z(d), b && (e[b] = a[d]));
            return e
        }

        function B(b) {
            var c, d;
            if (0 === b.indexOf("week")) c = 7, d = "day";
            else {
                if (0 !== b.indexOf("month")) return;
                c = 12, d = "month"
            }
            vb[b] = function(e, f) {
                var g, h, i = vb._locale[b],
                    j = [];
                if ("number" == typeof e && (f = e, e = a), h = function(a) {
                        var b = vb().utc().set(d, a);
                        return i.call(vb._locale, b, e || "")
                    }, null != f) return h(f);
                for (g = 0; c > g; g++) j.push(h(g));
                return j
            }
        }

        function C(a) {
            var b = +a,
                c = 0;
            return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
        }

        function D(a, b) {
            return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
        }

        function E(a, b, c) {
            return jb(vb([a, 11, 31 + b - c]), b, c).week
        }

        function F(a) {
            return G(a) ? 366 : 365
        }

        function G(a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        }

        function H(a) {
            var b;
            a._a && -2 === a._pf.overflow && (b = a._a[Db] < 0 || a._a[Db] > 11 ? Db : a._a[Eb] < 1 || a._a[Eb] > D(a._a[Cb], a._a[Db]) ? Eb : a._a[Fb] < 0 || a._a[Fb] > 24 || 24 === a._a[Fb] && (0 !== a._a[Gb] || 0 !== a._a[Hb] || 0 !== a._a[Ib]) ? Fb : a._a[Gb] < 0 || a._a[Gb] > 59 ? Gb : a._a[Hb] < 0 || a._a[Hb] > 59 ? Hb : a._a[Ib] < 0 || a._a[Ib] > 999 ? Ib : -1, a._pf._overflowDayOfYear && (Cb > b || b > Eb) && (b = Eb), a._pf.overflow = b)
        }

        function I(b) {
            return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)), b._isValid
        }

        function J(a) {
            return a ? a.toLowerCase().replace("_", "-") : a
        }

        function K(a) {
            for (var b, c, d, e, f = 0; f < a.length;) {
                for (e = J(a[f]).split("-"), b = e.length, c = J(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                    if (d = L(e.slice(0, b).join("-"))) return d;
                    if (c && c.length >= b && y(e, c, !0) >= b - 1) break;
                    b--
                }
                f++
            }
            return null
        }

        function L(a) {
            var b = null;
            if (!Jb[a] && Lb) try {
                b = vb.locale(), require("./locale/" + a), vb.locale(b)
            } catch (c) {}
            return Jb[a]
        }

        function M(a, b) {
            var c, d;
            return b._isUTC ? (c = b.clone(), d = (vb.isMoment(a) || x(a) ? +a : +vb(a)) - +c, c._d.setTime(+c._d + d), vb.updateOffset(c, !1), c) : vb(a).local()
        }

        function N(a) {
            return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
        }

        function O(a) {
            var b, c, d = a.match(Pb);
            for (b = 0, c = d.length; c > b; b++) d[b] = rc[d[b]] ? rc[d[b]] : N(d[b]);
            return function(e) {
                var f = "";
                for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                return f
            }
        }

        function P(a, b) {
            return a.isValid() ? (b = Q(b, a.localeData()), nc[b] || (nc[b] = O(b)), nc[b](a)) : a.localeData().invalidDate()
        }

        function Q(a, b) {
            function c(a) {
                return b.longDateFormat(a) || a
            }
            var d = 5;
            for (Qb.lastIndex = 0; d >= 0 && Qb.test(a);) a = a.replace(Qb, c), Qb.lastIndex = 0, d -= 1;
            return a
        }

        function R(a, b) {
            var c, d = b._strict;
            switch (a) {
                case "Q":
                    return _b;
                case "DDDD":
                    return bc;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return d ? cc : Tb;
                case "Y":
                case "G":
                case "g":
                    return ec;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return d ? dc : Ub;
                case "S":
                    if (d) return _b;
                case "SS":
                    if (d) return ac;
                case "SSS":
                    if (d) return bc;
                case "DDD":
                    return Sb;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Wb;
                case "a":
                case "A":
                    return b._locale._meridiemParse;
                case "x":
                    return Zb;
                case "X":
                    return $b;
                case "Z":
                case "ZZ":
                    return Xb;
                case "T":
                    return Yb;
                case "SSSS":
                    return Vb;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return d ? ac : Rb;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return Rb;
                case "Do":
                    return d ? b._locale._ordinalParse : b._locale._ordinalParseLenient;
                default:
                    return c = new RegExp($(Z(a.replace("\\", "")), "i"))
            }
        }

        function S(a) {
            a = a || "";
            var b = a.match(Xb) || [],
                c = b[b.length - 1] || [],
                d = (c + "").match(jc) || ["-", 0, 0],
                e = +(60 * d[1]) + C(d[2]);
            return "+" === d[0] ? e : -e
        }

        function T(a, b, c) {
            var d, e = c._a;
            switch (a) {
                case "Q":
                    null != b && (e[Db] = 3 * (C(b) - 1));
                    break;
                case "M":
                case "MM":
                    null != b && (e[Db] = C(b) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    d = c._locale.monthsParse(b, a, c._strict), null != d ? e[Db] = d : c._pf.invalidMonth = b;
                    break;
                case "D":
                case "DD":
                    null != b && (e[Eb] = C(b));
                    break;
                case "Do":
                    null != b && (e[Eb] = C(parseInt(b.match(/\d{1,2}/)[0], 10)));
                    break;
                case "DDD":
                case "DDDD":
                    null != b && (c._dayOfYear = C(b));
                    break;
                case "YY":
                    e[Cb] = vb.parseTwoDigitYear(b);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    e[Cb] = C(b);
                    break;
                case "a":
                case "A":
                    c._meridiem = b;
                    break;
                case "h":
                case "hh":
                    c._pf.bigHour = !0;
                case "H":
                case "HH":
                    e[Fb] = C(b);
                    break;
                case "m":
                case "mm":
                    e[Gb] = C(b);
                    break;
                case "s":
                case "ss":
                    e[Hb] = C(b);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    e[Ib] = C(1e3 * ("0." + b));
                    break;
                case "x":
                    c._d = new Date(C(b));
                    break;
                case "X":
                    c._d = new Date(1e3 * parseFloat(b));
                    break;
                case "Z":
                case "ZZ":
                    c._useUTC = !0, c._tzm = S(b);
                    break;
                case "dd":
                case "ddd":
                case "dddd":
                    d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "e":
                case "E":
                    a = a.substr(0, 1);
                case "gggg":
                case "GGGG":
                case "GGGGG":
                    a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = C(b));
                    break;
                case "gg":
                case "GG":
                    c._w = c._w || {}, c._w[a] = vb.parseTwoDigitYear(b)
            }
        }

        function U(a) {
            var c, d, e, f, g, h, i;
            c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Cb], jb(vb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Cb], jb(vb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = kb(d, e, f, h, g), a._a[Cb] = i.year, a._dayOfYear = i.dayOfYear
        }

        function V(a) {
            var c, d, e, f, g = [];
            if (!a._d) {
                for (e = X(a), a._w && null == a._a[Eb] && null == a._a[Db] && U(a), a._dayOfYear && (f = b(a._a[Cb], e[Cb]), a._dayOfYear > F(f) && (a._pf._overflowDayOfYear = !0), d = fb(f, 0, a._dayOfYear), a._a[Db] = d.getUTCMonth(), a._a[Eb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) a._a[c] = g[c] = e[c];
                for (; 7 > c; c++) a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
                24 === a._a[Fb] && 0 === a._a[Gb] && 0 === a._a[Hb] && 0 === a._a[Ib] && (a._nextDay = !0, a._a[Fb] = 0), a._d = (a._useUTC ? fb : eb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Fb] = 24)
            }
        }

        function W(a) {
            var b;
            a._d || (b = A(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], V(a))
        }

        function X(a) {
            var b = new Date;
            return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
        }

        function Y(b) {
            if (b._f === vb.ISO_8601) return void ab(b);
            b._a = [], b._pf.empty = !0;
            var c, d, e, f, g, h = "" + b._i,
                i = h.length,
                j = 0;
            for (e = Q(b._f, b._locale).match(Pb) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(R(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), rc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), T(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f);
            b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[Fb] <= 12 && (b._pf.bigHour = a), b._a[Fb] = k(b._locale, b._a[Fb], b._meridiem), V(b), H(b)
        }

        function Z(a) {
            return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
                return b || c || d || e
            })
        }

        function $(a) {
            return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function _(a) {
            var b, c, e, f, g;
            if (0 === a._f.length) return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0));
            for (f = 0; f < a._f.length; f++) g = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], Y(b), I(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b));
            o(a, c || b)
        }

        function ab(a) {
            var b, c, d = a._i,
                e = fc.exec(d);
            if (e) {
                for (a._pf.iso = !0, b = 0, c = hc.length; c > b; b++)
                    if (hc[b][1].exec(d)) {
                        a._f = hc[b][0] + (e[6] || " ");
                        break
                    }
                for (b = 0, c = ic.length; c > b; b++)
                    if (ic[b][1].exec(d)) {
                        a._f += ic[b][0];
                        break
                    }
                d.match(Xb) && (a._f += "Z"), Y(a)
            } else a._isValid = !1
        }

        function bb(a) {
            ab(a), a._isValid === !1 && (delete a._isValid, vb.createFromInputFallback(a))
        }

        function cb(a, b) {
            var c, d = [];
            for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
            return d
        }

        function db(b) {
            var c, d = b._i;
            d === a ? b._d = new Date : x(d) ? b._d = new Date(+d) : null !== (c = Mb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? bb(b) : w(d) ? (b._a = cb(d.slice(0), function(a) {
                return parseInt(a, 10)
            }), V(b)) : "object" == typeof d ? W(b) : "number" == typeof d ? b._d = new Date(d) : vb.createFromInputFallback(b)
        }

        function eb(a, b, c, d, e, f, g) {
            var h = new Date(a, b, c, d, e, f, g);
            return 1970 > a && h.setFullYear(a), h
        }

        function fb(a) {
            var b = new Date(Date.UTC.apply(null, arguments));
            return 1970 > a && b.setUTCFullYear(a), b
        }

        function gb(a, b) {
            if ("string" == typeof a)
                if (isNaN(a)) {
                    if (a = b.weekdaysParse(a), "number" != typeof a) return null
                } else a = parseInt(a, 10);
            return a
        }

        function hb(a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d)
        }

        function ib(a, b, c) {
            var d = vb.duration(a).abs(),
                e = Ab(d.as("s")),
                f = Ab(d.as("m")),
                g = Ab(d.as("h")),
                h = Ab(d.as("d")),
                i = Ab(d.as("M")),
                j = Ab(d.as("y")),
                k = e < oc.s && ["s", e] || 1 === f && ["m"] || f < oc.m && ["mm", f] || 1 === g && ["h"] || g < oc.h && ["hh", g] || 1 === h && ["d"] || h < oc.d && ["dd", h] || 1 === i && ["M"] || i < oc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
            return k[2] = b, k[3] = +a > 0, k[4] = c, hb.apply({}, k)
        }

        function jb(a, b, c) {
            var d, e = c - b,
                f = c - a.day();
            return f > e && (f -= 7), e - 7 > f && (f += 7), d = vb(a).add(f, "d"), {
                week: Math.ceil(d.dayOfYear() / 7),
                year: d.year()
            }
        }

        function kb(a, b, c, d, e) {
            var f, g, h = fb(a, 0, 1).getUTCDay();
            return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
                year: g > 0 ? a : a - 1,
                dayOfYear: g > 0 ? g : F(a - 1) + g
            }
        }

        function lb(b) {
            var c, d = b._i,
                e = b._f;
            return b._locale = b._locale || vb.localeData(b._l), null === d || e === a && "" === d ? vb.invalid({
                nullInput: !0
            }) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), vb.isMoment(d) ? new m(d, !0) : (e ? w(e) ? _(b) : Y(b) : db(b), c = new m(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c))
        }

        function mb(a, b) {
            var c, d;
            if (1 === b.length && w(b[0]) && (b = b[0]), !b.length) return vb();
            for (c = b[0], d = 1; d < b.length; ++d) b[d][a](c) && (c = b[d]);
            return c
        }

        function nb(a, b) {
            var c;
            return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), D(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
        }

        function ob(a, b) {
            return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
        }

        function pb(a, b, c) {
            return "Month" === b ? nb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
        }

        function qb(a, b) {
            return function(c) {
                return null != c ? (pb(this, a, c), vb.updateOffset(this, b), this) : ob(this, a)
            }
        }

        function rb(a) {
            return 400 * a / 146097
        }

        function sb(a) {
            return 146097 * a / 400
        }

        function tb(a) {
            vb.duration.fn[a] = function() {
                return this._data[a]
            }
        }

        function ub(a) {
            "undefined" == typeof ender && (wb = zb.moment, zb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", vb) : vb)
        }
        for (var vb, wb, xb, yb = "2.9.0", zb = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, Ab = Math.round, Bb = Object.prototype.hasOwnProperty, Cb = 0, Db = 1, Eb = 2, Fb = 3, Gb = 4, Hb = 5, Ib = 6, Jb = {}, Kb = [], Lb = "undefined" != typeof module && module && module.exports, Mb = /^\/?Date\((\-?\d+)/i, Nb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ob = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Pb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Qb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rb = /\d\d?/, Sb = /\d{1,3}/, Tb = /\d{1,4}/, Ub = /[+\-]?\d{1,6}/, Vb = /\d+/, Wb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Xb = /Z|[\+\-]\d\d:?\d\d/gi, Yb = /T/i, Zb = /[\+\-]?\d+/, $b = /[\+\-]?\d+(\.\d{1,3})?/, _b = /\d/, ac = /\d\d/, bc = /\d{3}/, cc = /\d{4}/, dc = /[+-]?\d{6}/, ec = /[+-]?\d+/, fc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gc = "YYYY-MM-DDTHH:mm:ssZ", hc = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], ic = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], jc = /([\+\-]|\d\d)/gi, kc = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), lc = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, mc = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, nc = {}, oc = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, pc = "DDD w W M D d".split(" "), qc = "M D H h m s w W".split(" "), rc = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(a) {
                return this.localeData().monthsShort(this, a)
            },
            MMMM: function(a) {
                return this.localeData().months(this, a)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(a) {
                return this.localeData().weekdaysMin(this, a)
            },
            ddd: function(a) {
                return this.localeData().weekdaysShort(this, a)
            },
            dddd: function(a) {
                return this.localeData().weekdays(this, a)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return r(this.year() % 100, 2)
            },
            YYYY: function() {
                return r(this.year(), 4)
            },
            YYYYY: function() {
                return r(this.year(), 5)
            },
            YYYYYY: function() {
                var a = this.year(),
                    b = a >= 0 ? "+" : "-";
                return b + r(Math.abs(a), 6)
            },
            gg: function() {
                return r(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return r(this.weekYear(), 4)
            },
            ggggg: function() {
                return r(this.weekYear(), 5)
            },
            GG: function() {
                return r(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return r(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return r(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return C(this.milliseconds() / 100)
            },
            SS: function() {
                return r(C(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return r(this.milliseconds(), 3)
            },
            SSSS: function() {
                return r(this.milliseconds(), 3)
            },
            Z: function() {
                var a = this.utcOffset(),
                    b = "+";
                return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + ":" + r(C(a) % 60, 2)
            },
            ZZ: function() {
                var a = this.utcOffset(),
                    b = "+";
                return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + r(C(a) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            x: function() {
                return this.valueOf()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        }, sc = {}, tc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], uc = !1; pc.length;) xb = pc.pop(), rc[xb + "o"] = i(rc[xb], xb);
        for (; qc.length;) xb = qc.pop(), rc[xb + xb] = h(rc[xb], 2);
        rc.DDDD = h(rc.DDD, 3), o(l.prototype, {
            set: function(a) {
                var b, c;
                for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(a) {
                return this._months[a.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(a) {
                return this._monthsShort[a.month()]
            },
            monthsParse: function(a, b, c) {
                var d, e, f;
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
                    if (e = vb.utc([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
                    if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                    if (!c && this._monthsParse[d].test(a)) return d
                }
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(a) {
                return this._weekdays[a.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(a) {
                return this._weekdaysShort[a.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(a) {
                return this._weekdaysMin[a.day()]
            },
            weekdaysParse: function(a) {
                var b, c, d;
                for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
                    if (this._weekdaysParse[b] || (c = vb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
            },
            _longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            longDateFormat: function(a) {
                var b = this._longDateFormat[a];
                return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                    return a.slice(1)
                }), this._longDateFormat[a] = b), b
            },
            isPM: function(a) {
                return "p" === (a + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(a, b, c) {
                return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(a, b, c) {
                var d = this._calendar[a];
                return "function" == typeof d ? d.apply(b, [c]) : d
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(a, b, c, d) {
                var e = this._relativeTime[c];
                return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
            },
            pastFuture: function(a, b) {
                var c = this._relativeTime[a > 0 ? "future" : "past"];
                return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
            },
            ordinal: function(a) {
                return this._ordinal.replace("%d", a)
            },
            _ordinal: "%d",
            _ordinalParse: /\d{1,2}/,
            preparse: function(a) {
                return a
            },
            postformat: function(a) {
                return a
            },
            week: function(a) {
                return jb(a, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            firstDayOfWeek: function() {
                return this._week.dow
            },
            firstDayOfYear: function() {
                return this._week.doy
            },
            _invalidDate: "Invalid date",
            invalidDate: function() {
                return this._invalidDate
            }
        }), vb = function(b, c, e, f) {
            var g;
            return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), lb(g)
        }, vb.suppressDeprecationWarnings = !1, vb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
        }), vb.min = function() {
            var a = [].slice.call(arguments, 0);
            return mb("isBefore", a)
        }, vb.max = function() {
            var a = [].slice.call(arguments, 0);
            return mb("isAfter", a)
        }, vb.utc = function(b, c, e, f) {
            var g;
            return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), lb(g).utc()
        }, vb.unix = function(a) {
            return vb(1e3 * a)
        }, vb.duration = function(a, b) {
            var d, e, f, g, h = a,
                i = null;
            return vb.isDuration(a) ? h = {
                ms: a._milliseconds,
                d: a._days,
                M: a._months
            } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Nb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = {
                y: 0,
                d: C(i[Eb]) * d,
                h: C(i[Fb]) * d,
                m: C(i[Gb]) * d,
                s: C(i[Hb]) * d,
                ms: C(i[Ib]) * d
            }) : (i = Ob.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function(a) {
                var b = a && parseFloat(a.replace(",", "."));
                return (isNaN(b) ? 0 : b) * d
            }, h = {
                y: f(i[2]),
                M: f(i[3]),
                d: f(i[4]),
                h: f(i[5]),
                m: f(i[6]),
                s: f(i[7]),
                w: f(i[8])
            }) : null == h ? h = {} : "object" == typeof h && ("from" in h || "to" in h) && (g = t(vb(h.from), vb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new n(h), vb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e
        }, vb.version = yb, vb.defaultFormat = gc, vb.ISO_8601 = function() {}, vb.momentProperties = Kb, vb.updateOffset = function() {}, vb.relativeTimeThreshold = function(b, c) {
            return oc[b] === a ? !1 : c === a ? oc[b] : (oc[b] = c, !0)
        }, vb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function(a, b) {
            return vb.locale(a, b)
        }), vb.locale = function(a, b) {
            var c;
            return a && (c = "undefined" != typeof b ? vb.defineLocale(a, b) : vb.localeData(a), c && (vb.duration._locale = vb._locale = c)), vb._locale._abbr
        }, vb.defineLocale = function(a, b) {
            return null !== b ? (b.abbr = a, Jb[a] || (Jb[a] = new l), Jb[a].set(b), vb.locale(a), Jb[a]) : (delete Jb[a], null)
        }, vb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function(a) {
            return vb.localeData(a)
        }), vb.localeData = function(a) {
            var b;
            if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return vb._locale;
            if (!w(a)) {
                if (b = L(a)) return b;
                a = [a]
            }
            return K(a)
        }, vb.isMoment = function(a) {
            return a instanceof m || null != a && c(a, "_isAMomentObject")
        }, vb.isDuration = function(a) {
            return a instanceof n
        };
        for (xb = tc.length - 1; xb >= 0; --xb) B(tc[xb]);
        vb.normalizeUnits = function(a) {
            return z(a)
        }, vb.invalid = function(a) {
            var b = vb.utc(0 / 0);
            return null != a ? o(b._pf, a) : b._pf.userInvalidated = !0, b
        }, vb.parseZone = function() {
            return vb.apply(null, arguments).parseZone()
        }, vb.parseTwoDigitYear = function(a) {
            return C(a) + (C(a) > 68 ? 1900 : 2e3)
        }, vb.isDate = x, o(vb.fn = m.prototype, {
            clone: function() {
                return vb(this)
            },
            valueOf: function() {
                return +this._d - 6e4 * (this._offset || 0)
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function() {
                var a = vb(this).utc();
                return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : P(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : P(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var a = this;
                return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
            },
            isValid: function() {
                return I(this)
            },
            isDSTShifted: function() {
                return this._a ? this.isValid() && y(this._a, (this._isUTC ? vb.utc(this._a) : vb(this._a)).toArray()) > 0 : !1
            },
            parsingFlags: function() {
                return o({}, this._pf)
            },
            invalidAt: function() {
                return this._pf.overflow
            },
            utc: function(a) {
                return this.utcOffset(0, a)
            },
            local: function(a) {
                return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(this._dateUtcOffset(), "m")), this
            },
            format: function(a) {
                var b = P(this, a || vb.defaultFormat);
                return this.localeData().postformat(b)
            },
            add: u(1, "add"),
            subtract: u(-1, "subtract"),
            diff: function(a, b, c) {
                var d, e, f = M(a, this),
                    g = 6e4 * (f.utcOffset() - this.utcOffset());
                return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = j(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : q(e)
            },
            from: function(a, b) {
                return vb.duration({
                    to: this,
                    from: a
                }).locale(this.locale()).humanize(!b)
            },
            fromNow: function(a) {
                return this.from(vb(), a)
            },
            calendar: function(a) {
                var b = a || vb(),
                    c = M(b, this).startOf("day"),
                    d = this.diff(c, "days", !0),
                    e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(e, this, vb(b)))
            },
            isLeapYear: function() {
                return G(this.year())
            },
            isDST: function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            },
            day: function(a) {
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != a ? (a = gb(a, this.localeData()), this.add(a - b, "d")) : b
            },
            month: qb("Month", !0),
            startOf: function(a) {
                switch (a = z(a)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
            },
            endOf: function(b) {
                return b = z(b), b === a || "millisecond" === b ? this : this.startOf(b).add(1, "isoWeek" === b ? "week" : b).subtract(1, "ms")
            },
            isAfter: function(a, b) {
                var c;
                return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this > +a) : (c = vb.isMoment(a) ? +a : +vb(a), c < +this.clone().startOf(b))
            },
            isBefore: function(a, b) {
                var c;
                return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +a > +this) : (c = vb.isMoment(a) ? +a : +vb(a), +this.clone().endOf(b) < c)
            },
            isBetween: function(a, b, c) {
                return this.isAfter(a, c) && this.isBefore(b, c)
            },
            isSame: function(a, b) {
                var c;
                return b = z(b || "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this === +a) : (c = +vb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
            },
            min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(a) {
                return a = vb.apply(null, arguments), this > a ? this : a
            }),
            max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(a) {
                return a = vb.apply(null, arguments), a > this ? this : a
            }),
            zone: f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(a, b) {
                return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
            }),
            utcOffset: function(a, b) {
                var c, d = this._offset || 0;
                return null != a ? ("string" == typeof a && (a = S(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateUtcOffset()), this._offset = a, this._isUTC = !0, null != c && this.add(c, "m"), d !== a && (!b || this._changeInProgress ? v(this, vb.duration(a - d, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, vb.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? d : this._dateUtcOffset()
            },
            isLocal: function() {
                return !this._isUTC
            },
            isUtcOffset: function() {
                return this._isUTC
            },
            isUtc: function() {
                return this._isUTC && 0 === this._offset
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(S(this._i)), this
            },
            hasAlignedHourOffset: function(a) {
                return a = a ? vb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
            },
            daysInMonth: function() {
                return D(this.year(), this.month())
            },
            dayOfYear: function(a) {
                var b = Ab((vb(this).startOf("day") - vb(this).startOf("year")) / 864e5) + 1;
                return null == a ? b : this.add(a - b, "d")
            },
            quarter: function(a) {
                return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
            },
            weekYear: function(a) {
                var b = jb(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == a ? b : this.add(a - b, "y")
            },
            isoWeekYear: function(a) {
                var b = jb(this, 1, 4).year;
                return null == a ? b : this.add(a - b, "y")
            },
            week: function(a) {
                var b = this.localeData().week(this);
                return null == a ? b : this.add(7 * (a - b), "d")
            },
            isoWeek: function(a) {
                var b = jb(this, 1, 4).week;
                return null == a ? b : this.add(7 * (a - b), "d")
            },
            weekday: function(a) {
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == a ? b : this.add(a - b, "d")
            },
            isoWeekday: function(a) {
                return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
            },
            isoWeeksInYear: function() {
                return E(this.year(), 1, 4)
            },
            weeksInYear: function() {
                var a = this.localeData()._week;
                return E(this.year(), a.dow, a.doy)
            },
            get: function(a) {
                return a = z(a), this[a]()
            },
            set: function(a, b) {
                var c;
                if ("object" == typeof a)
                    for (c in a) this.set(c, a[c]);
                else a = z(a), "function" == typeof this[a] && this[a](b);
                return this
            },
            locale: function(b) {
                var c;
                return b === a ? this._locale._abbr : (c = vb.localeData(b), null != c && (this._locale = c), this)
            },
            lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(b) {
                return b === a ? this.localeData() : this.locale(b)
            }),
            localeData: function() {
                return this._locale
            },
            _dateUtcOffset: function() {
                return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
            }
        }), vb.fn.millisecond = vb.fn.milliseconds = qb("Milliseconds", !1), vb.fn.second = vb.fn.seconds = qb("Seconds", !1), vb.fn.minute = vb.fn.minutes = qb("Minutes", !1), vb.fn.hour = vb.fn.hours = qb("Hours", !0), vb.fn.date = qb("Date", !0), vb.fn.dates = f("dates accessor is deprecated. Use date instead.", qb("Date", !0)), vb.fn.year = qb("FullYear", !0), vb.fn.years = f("years accessor is deprecated. Use year instead.", qb("FullYear", !0)), vb.fn.days = vb.fn.day, vb.fn.months = vb.fn.month, vb.fn.weeks = vb.fn.week, vb.fn.isoWeeks = vb.fn.isoWeek, vb.fn.quarters = vb.fn.quarter, vb.fn.toJSON = vb.fn.toISOString, vb.fn.isUTC = vb.fn.isUtc, o(vb.duration.fn = n.prototype, {
            _bubble: function() {
                var a, b, c, d = this._milliseconds,
                    e = this._days,
                    f = this._months,
                    g = this._data,
                    h = 0;
                g.milliseconds = d % 1e3, a = q(d / 1e3), g.seconds = a % 60, b = q(a / 60), g.minutes = b % 60, c = q(b / 60), g.hours = c % 24, e += q(c / 24), h = q(rb(e)), e -= q(sb(h)), f += q(e / 30), e %= 30, h += q(f / 12), f %= 12, g.days = e, g.months = f, g.years = h
            },
            abs: function() {
                return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
            },
            weeks: function() {
                return q(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
            },
            humanize: function(a) {
                var b = ib(this, !a, this.localeData());
                return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b)
            },
            add: function(a, b) {
                var c = vb.duration(a, b);
                return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
            },
            subtract: function(a, b) {
                var c = vb.duration(a, b);
                return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
            },
            get: function(a) {
                return a = z(a), this[a.toLowerCase() + "s"]()
            },
            as: function(a) {
                var b, c;
                if (a = z(a), "month" === a || "year" === a) return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * rb(b), "month" === a ? c : c / 12;
                switch (b = this._days + Math.round(sb(this._months / 12)), a) {
                    case "week":
                        return b / 7 + this._milliseconds / 6048e5;
                    case "day":
                        return b + this._milliseconds / 864e5;
                    case "hour":
                        return 24 * b + this._milliseconds / 36e5;
                    case "minute":
                        return 24 * b * 60 + this._milliseconds / 6e4;
                    case "second":
                        return 24 * b * 60 * 60 + this._milliseconds / 1e3;
                    case "millisecond":
                        return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
                    default:
                        throw new Error("Unknown unit " + a)
                }
            },
            lang: vb.fn.lang,
            locale: vb.fn.locale,
            toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                return this.toISOString()
            }),
            toISOString: function() {
                var a = Math.abs(this.years()),
                    b = Math.abs(this.months()),
                    c = Math.abs(this.days()),
                    d = Math.abs(this.hours()),
                    e = Math.abs(this.minutes()),
                    f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
            },
            localeData: function() {
                return this._locale
            },
            toJSON: function() {
                return this.toISOString()
            }
        }), vb.duration.fn.toString = vb.duration.fn.toISOString;
        for (xb in kc) c(kc, xb) && tb(xb.toLowerCase());
        vb.duration.fn.asMilliseconds = function() {
            return this.as("ms")
        }, vb.duration.fn.asSeconds = function() {
            return this.as("s")
        }, vb.duration.fn.asMinutes = function() {
            return this.as("m")
        }, vb.duration.fn.asHours = function() {
            return this.as("h")
        }, vb.duration.fn.asDays = function() {
            return this.as("d")
        }, vb.duration.fn.asWeeks = function() {
            return this.as("weeks")
        }, vb.duration.fn.asMonths = function() {
            return this.as("M")
        }, vb.duration.fn.asYears = function() {
            return this.as("y")
        }, vb.locale("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(a) {
                var b = a % 10,
                    c = 1 === C(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }), Lb ? module.exports = vb : "function" == typeof define && define.amd ? (define(function(a, b, c) {
            return c.config && c.config() && c.config().noGlobal === !0 && (zb.moment = wb), vb
        }), ub(!0)) : ub()
    }.call(this),
    function(d, g) {
        var h = 1e3,
            i = !1,
            e = d([]),
            j = function(b, a) {
                var c = b.data("livestampdata");
                "number" == typeof a && (a *= 1e3), b.removeAttr("data-livestamp").removeData("livestamp"), a = g(a), g.isMoment(a) && !isNaN(+a) && (c = d.extend({}, {
                    original: b.contents()
                }, c), c.moment = g(a), b.data("livestampdata", c).empty(), e.push(b[0]))
            },
            k = function() {
                i || (f.update(), setTimeout(k, h))
            },
            f = {
                update: function() {
                    d("[data-livestamp]").each(function() {
                        var a = d(this);
                        j(a, a.data("livestamp"))
                    });
                    var b = [];
                    e.each(function() {
                        var a = d(this),
                            c = a.data("livestampdata");
                        if (void 0 === c) b.push(this);
                        else if (g.isMoment(c.moment)) {
                            var e = a.html(),
                                c = c.moment.fromNow();
                            if (e != c) {
                                var f = d.Event("change.livestamp");
                                a.trigger(f, [e, c]), f.isDefaultPrevented() || a.html(c)
                            }
                        }
                    }), e = e.not(b)
                },
                pause: function() {
                    i = !0
                },
                resume: function() {
                    i = !1, k()
                },
                interval: function(b) {
                    return void 0 === b ? h : void(h = b)
                }
            },
            l = {
                add: function(b, a) {
                    return "number" == typeof a && (a *= 1e3), a = g(a), g.isMoment(a) && !isNaN(+a) && (b.each(function() {
                        j(d(this), a)
                    }), f.update()), b
                },
                destroy: function(b) {
                    return e = e.not(b), b.each(function() {
                        var a = d(this),
                            c = a.data("livestampdata");
                        return void 0 === c ? b : void a.html(c.original ? c.original : "").removeData("livestampdata")
                    }), b
                },
                isLivestamp: function(b) {
                    return void 0 !== b.data("livestampdata")
                }
            };
        d.livestamp = f, d(function() {
            f.resume()
        }), d.fn.livestamp = function(b, a) {
            return l[b] || (a = b, b = "add"), l[b](this, a)
        }
    }(jQuery, moment),
    /*!
     * Packery PACKAGED v1.4.1
     * bin-packing layout library
     *
     * Licensed GPLv3 for open source use
     * or Flickity Commercial License for commercial use
     *
     * http://packery.metafizzy.co
     * Copyright 2015 Metafizzy
     */
    function(t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function o(e, i) {
                t.fn[e] = function(o) {
                    if ("string" == typeof o) {
                        for (var s = n.call(arguments, 1), a = 0, h = this.length; h > a; a++) {
                            var p = this[a],
                                u = t.data(p, e);
                            if (u)
                                if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                    var c = u[o].apply(u, s);
                                    if (void 0 !== c) return c
                                } else r("no such method '" + o + "' for " + e + " instance");
                            else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var r = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), o(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;

        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function(t) {
        function e(t) {
            return RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }

        function i(t, e) {
            var i = n(t, e) ? r : o;
            i(t, e)
        }
        var n, o, r;
        "classList" in document.documentElement ? (n = function(t, e) {
            return t.classList.contains(e)
        }, o = function(t, e) {
            t.classList.add(e)
        }, r = function(t, e) {
            t.classList.remove(e)
        }) : (n = function(t, i) {
            return e(i).test(t.className)
        }, o = function(t, e) {
            n(t, e) || (t.className = t.className + " " + e)
        }, r = function(t, i) {
            t.className = t.className.replace(e(i), " ")
        });
        var s = {
            hasClass: n,
            addClass: o,
            removeClass: r,
            toggleClass: i,
            has: n,
            add: o,
            remove: r,
            toggle: i
        };
        "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : t.classie = s
    }(window),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = i.length; r > o; o++)
                    if (e = i[o] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {}

        function n() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, i = s.length; i > e; e++) {
                var n = s[e];
                t[n] = 0
            }
            return t
        }

        function o(i) {
            function o() {
                if (!d) {
                    d = !0;
                    var n = t.getComputedStyle;
                    if (p = function() {
                            var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), u = i("boxSizing")) {
                        var o = document.createElement("div");
                        o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(o);
                        var a = p(o);
                        c = 200 === e(a.width), s.removeChild(o)
                    }
                }
            }

            function a(t) {
                if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var i = p(t);
                    if ("none" === i.display) return n();
                    var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight;
                    for (var a = r.isBorderBox = !(!u || !i[u] || "border-box" !== i[u]), d = 0, l = s.length; l > d; d++) {
                        var f = s[d],
                            y = i[f];
                        y = h(t, y);
                        var m = parseFloat(y);
                        r[f] = isNaN(m) ? 0 : m
                    }
                    var g = r.paddingLeft + r.paddingRight,
                        v = r.paddingTop + r.paddingBottom,
                        x = r.marginLeft + r.marginRight,
                        E = r.marginTop + r.marginBottom,
                        b = r.borderLeftWidth + r.borderRightWidth,
                        w = r.borderTopWidth + r.borderBottomWidth,
                        _ = a && c,
                        T = e(i.width);
                    T !== !1 && (r.width = T + (_ ? 0 : g + b));
                    var z = e(i.height);
                    return z !== !1 && (r.height = z + (_ ? 0 : v + w)), r.innerWidth = r.width - (g + b), r.innerHeight = r.height - (v + w), r.outerWidth = r.width + x, r.outerHeight = r.height + E, r
                }
            }

            function h(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    o = n.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
            }
            var p, u, c, d = !1;
            return a
        }
        var r = "undefined" == typeof console ? i : function(t) {
                console.error(t)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var o = function() {};
        i.removeEventListener ? o = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(window),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            o = this,
            r = o.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, o = this.getListenersAsObject(t),
                r = "object" == typeof i;
            for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, o, r = this.getListenersAsObject(t);
            for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, o, r = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) r.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, o, r, s = this.getListenersAsObject(t);
            for (o in s)
                if (s.hasOwnProperty(o))
                    for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return o.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                var n = s[t];
                n()
            }
        }

        function o(o) {
            return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
        }
        var r = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
    }(window),
    function(t) {
        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
                if (n[o] === t) return !0;
            return !1
        }

        function o(t, n) {
            return i(t), e(t, n)
        }
        var r, s = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var o = e[i],
                    r = o + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                h = e(a, "div");
            r = h ? e : o
        } else r = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var n = {};
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var o = Object.prototype.toString;
        n.isArray = function(t) {
            return "[object Array]" == o.call(t)
        }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            t = n.makeArray(t);
            for (var o = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && o.push(a);
                        for (var h = a.querySelectorAll(e), p = 0, u = h.length; u > p; p++) o.push(h[p])
                    } else o.push(a)
            }
            return o
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[o] = setTimeout(function() {
                    n.apply(r, e), delete r[o]
                }, i || 100)
            }
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var r = t.console;
        return n.htmlInit = function(i, o) {
            e(function() {
                for (var e = n.toDashed(o), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", h = 0, p = s.length; p > h; h++) {
                    var u, c = s[h],
                        d = c.getAttribute(a);
                    try {
                        u = d && JSON.parse(d)
                    } catch (l) {
                        r && r.error("Error parsing " + a + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                        continue
                    }
                    var f = new i(c, u),
                        y = t.jQuery;
                    y && y.data(c, o, f)
                }
            })
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i, n, o) {
        function r(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function s(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var a = t.getComputedStyle,
            h = a ? function(t) {
                return a(t, null)
            } : function(t) {
                return t.currentStyle
            },
            p = n("transition"),
            u = n("transform"),
            c = p && u,
            d = !!n("perspective"),
            l = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[p],
            f = ["transform", "transition", "transitionDuration", "transitionProperty"],
            y = function() {
                for (var t = {}, e = 0, i = f.length; i > e; e++) {
                    var o = f[e],
                        r = n(o);
                    r && r !== o && (t[o] = r)
                }
                return t
            }();
        o.extend(s.prototype, e.prototype), s.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.getSize = function() {
            this.size = i(this.element)
        }, s.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = y[i] || i;
                e[n] = t[i]
            }
        }, s.prototype.getPosition = function() {
            var t = h(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                n = e.isOriginTop,
                o = parseInt(t[i ? "left" : "right"], 10),
                r = parseInt(t[n ? "top" : "bottom"], 10);
            o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
            var s = this.layout.size;
            o -= i ? s.paddingLeft : s.paddingRight, r -= n ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = r
        }, s.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                o = e.isOriginLeft ? "left" : "right",
                r = e.isOriginLeft ? "right" : "left",
                s = this.position.x + t[n];
            s = e.percentPosition && !e.isHorizontal ? 100 * (s / t.width) + "%" : s + "px", i[o] = s, i[r] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                h = e.isOriginTop ? "top" : "bottom",
                p = e.isOriginTop ? "bottom" : "top",
                u = this.position.y + t[a];
            u = e.percentPosition && e.isHorizontal ? 100 * (u / t.height) + "%" : u + "px", i[h] = u, i[p] = "", this.css(i), this.emitEvent("layout", [this])
        };
        var m = d ? function(t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function(t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        s.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                r = parseInt(e, 10),
                s = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                h = e - n,
                p = {},
                u = this.layout.options;
            a = u.isOriginLeft ? a : -a, h = u.isOriginTop ? h : -h, p.transform = m(a, h), this.transition({
                to: p,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, s.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, s.prototype.moveTo = c ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, s.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, s.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var g = u && o.toDashed(u) + ",opacity";
        s.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: g,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(l, this, !1))
        }, s.prototype.transition = s.prototype[p ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, s.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var v = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        s.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = v[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], r(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var n = e.onEnd[i];
                    n.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, s.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, s.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var x = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return s.prototype.removeTransitionStyles = function() {
            this.css(x)
        }, s.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, s.prototype.remove = function() {
            if (!p || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, s.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, s.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, s.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, s.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r, s) {
            return e(t, i, n, o, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, o, r) {
        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
            var n = ++u;
            this.element.outlayerGUID = n, c[n] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = t.console,
            h = t.jQuery,
            p = function() {},
            u = 0,
            c = {};
        return s.namespace = "outlayer", s.Item = r, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, o.extend(s.prototype, i.prototype), s.prototype.option = function(t) {
            o.extend(this.options, t)
        }, s.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, s.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, s.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
                var s = e[o],
                    a = new i(s, this);
                n.push(a)
            }
            return n
        }, s.prototype._filterFindItemElements = function(t) {
            return o.filterFindElements(t, this.options.itemSelector)
        }, s.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, s.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function() {
            this.getSize()
        }, s.prototype.getSize = function() {
            this.size = n(this.element)
        }, s.prototype._getMeasurement = function(t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : o.isElement(r) && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
        }, s.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, s.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var o = t[i];
                o.isIgnored || e.push(o)
            }
            return e
        }, s.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], n = 0, o = t.length; o > n; n++) {
                    var r = t[n],
                        s = this._getItemLayoutPosition(r);
                    s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s)
                }
                this._processLayoutQueue(i)
            }
        }, s.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, s.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, s.prototype._positionItem = function(t, e, i, n) {
            n ? t.goTo(e, i) : t.moveTo(e, i)
        }, s.prototype._postLayout = function() {
            this.resizeContainer()
        }, s.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, s.prototype._getContainerSize = p, s.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, s.prototype._emitCompleteOnItems = function(t, e) {
            function i() {
                o.emitEvent(t + "Complete", [e])
            }

            function n() {
                s++, s === r && i()
            }
            var o = this,
                r = e.length;
            if (!e || !r) return void i();
            for (var s = 0, a = 0, h = e.length; h > a; a++) {
                var p = e[a];
                p.once(t, n)
            }
        }, s.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, s.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, s.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, s.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    o.removeFrom(this.stamps, n), this.unignore(n)
                }
        }, s.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
        }, s.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, s.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, s.prototype._manageStamp = p, s.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                o = n(t),
                r = {
                    left: e.left - i.left - o.marginLeft,
                    top: e.top - i.top - o.marginTop,
                    right: i.right - e.right - o.marginRight,
                    bottom: i.bottom - e.bottom - o.marginBottom
                };
            return r
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, s.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, s.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, s.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, s.prototype.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, s.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, s.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, s.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, s.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.reveal()
            }
        }, s.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.hide()
            }
        }, s.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, s.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, s.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                if (n.element === t) return n
            }
        }, s.prototype.getItems = function(t) {
            t = o.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var r = t[i],
                    s = this.getItem(r);
                s && e.push(s)
            }
            return e
        }, s.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, n = e.length; n > i; i++) {
                    var r = e[i];
                    r.remove(), o.removeFrom(this.items, r)
                }
        }, s.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                n.destroy()
            }
            this.unbindResize();
            var o = this.element.outlayerGUID;
            delete c[o], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
        }, s.data = function(t) {
            t = o.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && c[e]
        }, s.create = function(t, e) {
            function i() {
                s.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(s.prototype) : o.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function() {
                r.apply(this, arguments)
            }, i.Item.prototype = new r, o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
        }, s.Item = r, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
    }(window, function() {
        function t(e) {
            for (var i in t.defaults) this[i] = t.defaults[i];
            for (i in e) this[i] = e[i]
        }
        var e = window.Packery = function() {};
        return e.Rect = t, t.defaults = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, t.prototype.contains = function(t) {
            var e = t.width || 0,
                i = t.height || 0;
            return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
        }, t.prototype.overlaps = function(t) {
            var e = this.x + this.width,
                i = this.y + this.height,
                n = t.x + t.width,
                o = t.y + t.height;
            return n > this.x && e > t.x && o > this.y && i > t.y
        }, t.prototype.getMaximalFreeRects = function(e) {
            if (!this.overlaps(e)) return !1;
            var i, n = [],
                o = this.x + this.width,
                r = this.y + this.height,
                s = e.x + e.width,
                a = e.y + e.height;
            return this.y < e.y && (i = new t({
                x: this.x,
                y: this.y,
                width: this.width,
                height: e.y - this.y
            }), n.push(i)), o > s && (i = new t({
                x: s,
                y: this.y,
                width: o - s,
                height: this.height
            }), n.push(i)), r > a && (i = new t({
                x: this.x,
                y: a,
                width: this.width,
                height: r - a
            }), n.push(i)), this.x < e.x && (i = new t({
                x: this.x,
                y: this.y,
                width: e.x - this.x,
                height: this.height
            }), n.push(i)), n
        }, t.prototype.canFit = function(t) {
            return this.width >= t.width && this.height >= t.height
        }, t
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof exports) module.exports = e(require("./rect"));
        else {
            var i = t.Packery = t.Packery || {};
            i.Packer = e(i.Rect)
        }
    }(window, function(t) {
        function e(t, e, i) {
            this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
        }
        e.prototype.reset = function() {
            this.spaces = [], this.newSpaces = [];
            var e = new t({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            });
            this.spaces.push(e), this.sorter = i[this.sortDirection] || i.downwardLeftToRight
        }, e.prototype.pack = function(t) {
            for (var e = 0, i = this.spaces.length; i > e; e++) {
                var n = this.spaces[e];
                if (n.canFit(t)) {
                    this.placeInSpace(t, n);
                    break
                }
            }
        }, e.prototype.placeInSpace = function(t, e) {
            t.x = e.x, t.y = e.y, this.placed(t)
        }, e.prototype.placed = function(t) {
            for (var e = [], i = 0, n = this.spaces.length; n > i; i++) {
                var o = this.spaces[i],
                    r = o.getMaximalFreeRects(t);
                r ? e.push.apply(e, r) : e.push(o)
            }
            this.spaces = e, this.mergeSortSpaces()
        }, e.prototype.mergeSortSpaces = function() {
            e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, e.prototype.addSpace = function(t) {
            this.spaces.push(t), this.mergeSortSpaces()
        }, e.mergeRects = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                if (n) {
                    var o = t.slice(0);
                    o.splice(e, 1);
                    for (var r = 0, s = 0, a = o.length; a > s; s++) {
                        var h = o[s],
                            p = e > s ? 0 : 1;
                        n.contains(h) && (t.splice(s + p - r, 1), r++)
                    }
                }
            }
            return t
        };
        var i = {
            downwardLeftToRight: function(t, e) {
                return t.y - e.y || t.x - e.x
            },
            rightwardTopToBottom: function(t, e) {
                return t.x - e.x || t.y - e.y
            }
        };
        return e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect)
    }(window, function(t, e, i) {
        var n = t("transform"),
            o = function() {
                e.Item.apply(this, arguments)
            };
        o.prototype = new e.Item;
        var r = o.prototype._create;
        return o.prototype._create = function() {
            r.call(this), this.rect = new i, this.placeRect = new i
        }, o.prototype.dragStart = function() {
            this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
        }, o.prototype.dragMove = function(t, e) {
            this.didDrag = !0;
            var i = this.layout.size;
            t -= i.paddingLeft, e -= i.paddingTop, this.positionPlaceRect(t, e)
        }, o.prototype.dragStop = function() {
            this.getPosition();
            var t = this.position.x != this.placeRect.x,
                e = this.position.y != this.placeRect.y;
            this.needsPositioning = t || e, this.didDrag = !1
        }, o.prototype.positionPlaceRect = function(t, e, i) {
            this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, i)
        }, o.prototype.getPlaceRectCoord = function(t, e, i) {
            var n = e ? "Width" : "Height",
                o = this.size["outer" + n],
                r = this.layout[e ? "columnWidth" : "rowHeight"],
                s = this.layout.size["inner" + n];
            e || (s = Math.max(s, this.layout.maxY), this.layout.rowHeight || (s -= this.layout.gutter));
            var a;
            if (r) {
                r += this.layout.gutter, s += e ? this.layout.gutter : 0, t = Math.round(t / r);
                var h;
                h = this.layout.options.isHorizontal ? e ? "ceil" : "floor" : e ? "floor" : "ceil";
                var p = Math[h](s / r);
                p -= Math.ceil(o / r), a = p
            } else a = s - o;
            return t = i ? t : Math.min(t, a), t *= r || 1, Math.max(0, t)
        }, o.prototype.copyPlaceRectPosition = function() {
            this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
        }, o.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof exports ? module.exports = e(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.classie, t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
    }(window, function(t, e, i, n, o, r) {
        function s(t, e) {
            return t.position.y - e.position.y || t.position.x - e.position.x
        }

        function a(t, e) {
            return t.position.x - e.position.x || t.position.y - e.position.y
        }
        n.prototype.canFit = function(t) {
            return this.width >= t.width - 1 && this.height >= t.height - 1
        };
        var h = i.create("packery");
        return h.Item = r, h.prototype._create = function() {
            i.prototype._create.call(this), this.packer = new o, this.stamp(this.options.stamped);
            var t = this;
            this.handleDraggabilly = {
                dragStart: function() {
                    t.itemDragStart(this.element)
                },
                dragMove: function() {
                    t.itemDragMove(this.element, this.position.x, this.position.y)
                },
                dragEnd: function() {
                    t.itemDragEnd(this.element)
                }
            }, this.handleUIDraggable = {
                start: function(e) {
                    t.itemDragStart(e.currentTarget)
                },
                drag: function(e, i) {
                    t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
                },
                stop: function(e) {
                    t.itemDragEnd(e.currentTarget)
                }
            }
        }, h.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurements();
            var t = this.packer;
            this.options.isHorizontal ? (t.width = Number.POSITIVE_INFINITY, t.height = this.size.innerHeight + this.gutter, t.sortDirection = "rightwardTopToBottom") : (t.width = this.size.innerWidth + this.gutter, t.height = Number.POSITIVE_INFINITY, t.sortDirection = "downwardLeftToRight"), t.reset(), this.maxY = 0, this.maxX = 0
        }, h.prototype._getMeasurements = function() {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, h.prototype._getItemLayoutPosition = function(t) {
            return this._packItem(t), t.rect
        }, h.prototype._packItem = function(t) {
            this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxXY(t.rect)
        }, h.prototype._setMaxXY = function(t) {
            this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
        }, h.prototype._setRectSize = function(t, i) {
            var n = e(t),
                o = n.outerWidth,
                r = n.outerHeight;
            (o || r) && (o = this._applyGridGutter(o, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), i.width = Math.min(o, this.packer.width), i.height = Math.min(r, this.packer.height)
        }, h.prototype._applyGridGutter = function(t, e) {
            if (!e) return t + this.gutter;
            e += this.gutter;
            var i = t % e,
                n = i && 1 > i ? "round" : "ceil";
            return t = Math[n](t / e) * e
        }, h.prototype._getContainerSize = function() {
            return this.options.isHorizontal ? {
                width: this.maxX - this.gutter
            } : {
                height: this.maxY - this.gutter
            }
        }, h.prototype._manageStamp = function(t) {
            var e, i = this.getItem(t);
            if (i && i.isPlacing) e = i.placeRect;
            else {
                var o = this._getElementOffset(t);
                e = new n({
                    x: this.options.isOriginLeft ? o.left : o.right,
                    y: this.options.isOriginTop ? o.top : o.bottom
                })
            }
            this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
        }, h.prototype.sortItemsByPosition = function() {
            var t = this.options.isHorizontal ? a : s;
            this.items.sort(t)
        }, h.prototype.fit = function(t, e, i) {
            var n = this.getItem(t);
            n && (this._getMeasurements(), this.stamp(n.element), n.getSize(), n.isPlacing = !0, e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, n.positionPlaceRect(e, i, !0), this._bindFitEvents(n), n.moveTo(n.placeRect.x, n.placeRect.y), this.layout(), this.unstamp(n.element), this.sortItemsByPosition(), n.isPlacing = !1, n.copyPlaceRectPosition())
        }, h.prototype._bindFitEvents = function(t) {
            function e() {
                n++, 2 == n && i.emitEvent("fitComplete", [t])
            }
            var i = this,
                n = 0;
            t.on("layout", function() {
                return e(), !0
            }), this.on("layoutComplete", function() {
                return e(), !0
            })
        }, h.prototype.resize = function() {
            var t = e(this.element),
                i = this.size && t,
                n = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            i && t[n] == this.size[n] || this.layout()
        }, h.prototype.itemDragStart = function(t) {
            this.stamp(t);
            var e = this.getItem(t);
            e && e.dragStart()
        }, h.prototype.itemDragMove = function(t, e, i) {
            function n() {
                r.layout(), delete r.dragTimeout
            }
            var o = this.getItem(t);
            o && o.dragMove(e, i);
            var r = this;
            this.clearDragTimeout(), this.dragTimeout = setTimeout(n, 40)
        }, h.prototype.clearDragTimeout = function() {
            this.dragTimeout && clearTimeout(this.dragTimeout)
        }, h.prototype.itemDragEnd = function(e) {
            var i, n = this.getItem(e);
            if (n && (i = n.didDrag, n.dragStop()), !n || !i && !n.needsPositioning) return void this.unstamp(e);
            t.add(n.element, "is-positioning-post-drag");
            var o = this._getDragEndLayoutComplete(e, n);
            n.needsPositioning ? (n.on("layout", o), n.moveTo(n.placeRect.x, n.placeRect.y)) : n && n.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", o), this.layout()
        }, h.prototype._getDragEndLayoutComplete = function(e, i) {
            var n = i && i.needsPositioning,
                o = 0,
                r = n ? 2 : 1,
                s = this;
            return function() {
                return o++, o != r ? !0 : (i && (t.remove(i.element, "is-positioning-post-drag"), i.isPlacing = !1, i.copyPlaceRectPosition()), s.unstamp(e), s.sortItemsByPosition(), n && s.emitEvent("dragItemPositioned", [i]), !0)
            }
        }, h.prototype.bindDraggabillyEvents = function(t) {
            t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
        }, h.prototype.bindUIDraggableEvents = function(t) {
            t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
        }, h.Rect = n, h.Packer = o, h
    }), PageLoader.prototype.init = function() {
    this.setupTransition(), this.loadPage()
}, PageLoader.prototype.setupTransition = function() {
    $("#transition-color").css("background", this.o.state.data.color || this.o.defaultColor), $("body").addClass("transitioning")
}, PageLoader.prototype.loadPage = function() {
    var self = this;
    $.ajax({
        url: this.o.state.url,
        beforeSend: function() {}
    }).fail(function() {
        console.log("Failed to load!")
    }).done(function(data) {
        self.setupPage(data)
    })
}, PageLoader.prototype.setupPage = function(data) {
    var self = this;
    if (content = self.grabContent(data)) {
        var title = self.grabTitle(data),
            id = self.grabBodyId(data);
        setTimeout(function() {
            $("#page").html(content), $("title").text(title), setTimeout(function() {
                id && $("body").attr("id", id), $(document).trigger("pageLoaded"), setTimeout(function() {
                    $("#transition-color").css("background", "")
                }, 100)
            }, -1)
        }, self.o.animationTotalTime - (Date.now() - self.o.startTime))
    }
}, PageLoader.prototype.grabContent = function(data) {
    var el = $(data).filter("#page");
    return el.size() ? el.html() : null
}, PageLoader.prototype.grabBodyId = function(data) {
    var matches = data.match(/<body (?:id="([^"]+)").*>/i);
    return matches && matches[1] ? matches[1] : null
}, PageLoader.prototype.grabBodyClasses = function(data) {
    var matches = data.match(/<body.*(?:class="([^"]+)").*>/i);
    return matches && matches[1] ? matches[1] : null
}, PageLoader.prototype.grabTitle = function(data) {
    var matches = data.match(/<title>([^<]+)<\/title>/i);
    return matches && matches[1] ? matches[1] : ""
}, $.loadImage = function(url) {
    var loadImage = function(deferred) {
        function loaded() {
            unbindEvents(), deferred.resolve(image)
        }

        function errored() {
            unbindEvents(), deferred.reject(image)
        }

        function unbindEvents() {
            image.onload = null, image.onerror = null, image.onabort = null
        }
        var image = new Image;
        image.onload = loaded, image.onerror = errored, image.onabort = errored, image.src = url
    };
    return $.Deferred(loadImage).promise()
}, $.loadAsyncImages = function(options) {
    var settings = $.extend({
        onBefore: function() {},
        onDone: function() {},
        onFail: function(image) {
            console.error("Failed to load: ", image)
        }
    }, options || {});
    $("img[data-src]").each(function(index, initial) {
        settings.onBefore.call(this, initial), $.loadImage($(initial).attr("data-src")).done(function(loaded) {
            $(initial).replaceWith(loaded), settings.onDone.call(this, loaded)
        }).fail(function(loaded) {
            settings.onFail.call(this, loaded)
        })
    })
};
var formTextSizing = function() {
    var $formText = $("#footer .about"),
        $form = $("#footer .contact");
    $formText.css($(window).width() > 991 ? {
        "min-height": $form.height() + "px"
    } : {
        "min-height": "1px"
    })
};
window.resetLoading = function() {
    $(".preloader, .preloader .bar, .preloader .bar:after").attr("style", "")
}, window.displayLoading = function(callback) {
    callback = callback || function() {}, $(".preloader .bar").css("width", "100%"), setTimeout(function() {
        $(".preloader").fadeOut(300, callback)
    }, 1200)
};
var $gridElement, $grid;
$(document).ready(function() {
    $gridElement = $("#theGrid"), $grid = $gridElement.packery({
        isInitLayout: !1,
        columnWidth: ".grid-sizer",
        itemSelector: ".grid-item",
        percentPosition: !0,
        transitionDuration: 0,
        gutter: 0
    }), $grid.packery(), $("#load-more").on("click", function(e) {
        var $link = $(this);
        if (!$link.hasClass("working") && !$("#load-more-row").hasClass("done")) {
            $link.addClass("working");
            var start = $(".grid-item", $gridElement).size() + $(".grid-item.case-study", $gridElement).size();
            $.get("/", {
                start: start
            }, "script").done(function() {
                prepareNewItems(), $link.removeClass("working"), verticallyCenterTweets(), centerTagsBlock()
            }).fail(function() {
                console.error("Grid fetch failed!")
            }).always(function() {}), e.preventDefault()
        }
    }), $(window).on("load", function() {
        verticallyCenterTweets(), centerTagsBlock()
    });
    var resizeTimeout = null;
    $(window).on("resize", function() {
        clearTimeout(resizeTimeout), resizeTimeout = setTimeout(function() {
            verticallyCenterTweets(), centerTagsBlock()
        }, 100)
    })
}), window.ga_send_event = function(category, action, label, value) {
    window.ga && ga("send", "event", category, action, label, value)
}, $(document).on("page:change", function() {
    window.ga && (ga("set", "location", location.href.split("#")[0]), ga("send", "pageview", {
        title: document.title
    }))
}),
    function($, window) {
        var emptyValidation = function(value) {
                return null != value.match(/\S+/g)
            },
            emailValidation = function(value) {
                return null != value.match(/\S+@\S+(?:\..+)+/g)
            };
        window.initializePage = function() {
            setTimeout(function() {
                $("html, body").scrollTop(0)
            }, 0), new WOW({
                mobile: !1
            }).init(), displayLoading()
        }, window.prepareNewItems = function() {
            $.loadAsyncImages()
        }, History.Adapter.bind(window, "statechange", function() {
            $(document).trigger("history:changed")
        }), $(window).on("load", function() {
            var hash = window.location.hash;
            "#theGrid" === hash && setTimeout(function() {
                $("html,body").animate({
                    scrollTop: $("#theGrid").offset().top
                }, 1e3, "easeInOutQuart")
            }, 1200)
        }), $(window).on("scroll", function() {
            $(window).scrollTop() > 600 ? $("a.go-top").addClass("show") : $("a.go-top").removeClass("show")
        }), $(document).ready(function() {
            $(document).on("click", 'a[href*="#"]:not([href="#"])', function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    if (target = target.length ? target : $("[name=" + this.hash.slice(1) + "]"), target.length) return $("html,body").animate({
                        scrollTop: target.offset().top
                    }, 2e3, "easeInOutQuart"), !1
                }
            }).on("pageResized", function() {
                socialOverlay(), formTextSizing()
            }).on("pageLoaded", function() {
                initializePage(), prepareNewItems(), formTextSizing(), $(document).trigger("pageResized");
                var resizeTimeout = null;
                $(window).off("resize").on("resize", function() {
                    clearTimeout(resizeTimeout), resizeTimeout = setTimeout(function() {
                        $(document).trigger("pageResized")
                    }, 200)
                })
            }).trigger("pageLoaded").on("mouseover", "[data-animated-version]", function() {
                var $target = $(this);
                $.loadImage($target.attr("data-animated-version")).done(function(loaded) {
                    $target.append($(loaded).addClass("animated-version"))
                }).fail(function() {}).always(function() {
                    $target.addClass("loaded")
                })
            }).on("mouseout", "[data-animated-version]", function() {
                $(this).find(".animated-version").remove()
            }).on("blur focus keyup", "#contact_form :input", function(e) {
                var id = $(this).attr("id"),
                    $field = $(this).closest(".field"),
                    validation = "contact_address" == id ? emailValidation : emptyValidation;
                validation.call(this, $(this).val()) ? $field.removeClass("error").addClass("dirty") : $field.removeClass("dirty").addClass("error"), $field.toggleClass("focus", "focusout" === e.type ? !1 : !0)
            }).on("ajax:before", "#contact_form", function() {
                var $form = $("#contact_form");
                $form.addClass("loading")
            }).on("ajax:success", "#contact_form", function(e, data) {
                var $form = $("#contact_form");
                $(".field", $form).removeClass("error"), $form.removeClass("loading"), data.success ? ($form.addClass("sent"), window.ga_send_event("Lead", "Contact Us", "Footer"), $(".field :input", $form).val(""), $(".field", $form).removeClass("dirty", "error", "focus")) : $.each(data.errors, function(i, field) {
                    $("#contact_" + field).closest(".field").addClass("error")
                })
            })
        })
    }(jQuery, window);