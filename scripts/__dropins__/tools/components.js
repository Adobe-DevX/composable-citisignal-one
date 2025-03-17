/*! Copyright 2024 Adobe
All Rights Reserved. */
import {jsx as e} from "./preact-jsx-runtime.js";
import {a as oe, c as o, d as Z, g as fe, i as ve, R as be, V as y} from "./chunks/is-number.js";
import {
    _ as we,
    A as le,
    E as ke,
    F as g,
    G as ge,
    h as B,
    k as R,
    L as Ne,
    N as se,
    q as C,
    S as K,
    T as q,
    x as ye,
    y as W
} from "./chunks/icons/Add.js";
import {IntlProvider as xe, Localizer as Q, Text as z, useText as I} from "./i18n.js";
import U from "./chunks/icons/Minus.js";
import De from "./chunks/icons/CheckWithCircle.js";
import Ie from "./chunks/icons/WarningWithCircle.js";
import Ee from "./chunks/icons/Date.js";
import $e from "./chunks/icons/Locker.js";
import Se from "./chunks/icons/Eye.js";
import Te from "./chunks/icons/EyeClose.js";
import de from "./chunks/icons/Check.js";
import j from "./chunks/icons/Close.js";
import J from "./chunks/icons/ChevronDown.js";
import Le from "./chunks/icons/Trash.js";
import "./chunks/image-params-keymap.js";
import "./signals.js";

const Pe = {
    ExampleComponentName: {item: {label: "string"}},
    Pagination: {backwardButton: {ariaLabel: "Go to previous page"}, forwardButton: {ariaLabel: "Go to next page"}},
    Incrementer: {
        decreaseLabel: "Decrease Quantity",
        increaseLabel: "Increase Quantity",
        label: "Quantity",
        errorMessage: "Enter a valid quantity",
        minQuantityMessage: "Enter at least {{minQuantity}}",
        maxQuantityMessage: "Maximum quantity is {{maxQuantity}}"
    },
    Modal: {Close: {label: "Close"}},
    InputPassword: {
        placeholder: "Password",
        floatingLabel: "Password",
        buttonShowTitle: "Click to show password",
        buttonHideTitle: "Click to hide password"
    },
    PasswordStatusIndicator: {
        chartTwoSymbols: "Use characters and numbers or symbols",
        chartThreeSymbols: "Use characters, numbers and symbols",
        chartFourSymbols: "Use uppercase characters, lowercase characters, numbers and symbols",
        messageLengthPassword: "At least {minLength} characters long"
    },
    InlineAlert: {dismissLabel: "Dismiss Alert"},
    PriceSummary: {
        subTotal: {label: "Subtotal", withTaxes: "Including taxes", withoutTaxes: "excluding taxes"},
        shipping: {
            label: "Shipping",
            editZipAction: "Apply",
            estimated: "Estimated Shipping",
            estimatedDestination: "Estimated Shipping to ",
            destinationLinkAriaLabel: "Change destination",
            zipPlaceholder: "Zip Code",
            withTaxes: "Including taxes",
            withoutTaxes: "excluding taxes",
            alternateField: {zip: "Estimate using country/zip", state: "Estimate using country/state"}
        },
        taxes: {
            total: "Tax Total",
            totalOnly: "Tax",
            breakdown: "Taxes",
            showBreakdown: "Show Tax Breakdown",
            hideBreakdown: "Hide Tax Breakdown",
            estimated: "Estimated Tax"
        },
        total: {estimated: "Estimated Total", label: "Total", withoutTax: "Total excluding taxes"}
    },
    ProgressSpinner: {updating: {label: "Item is updating"}, updatingChildren: {label: "Items are updating"}},
    PriceRange: {from: {label: "From"}, to: {label: "to"}, asLowAs: {label: "As low as"}},
    Swatches: {
        outOfStock: {label: "out of stock swatch"},
        selected: {label: "swatch selected"},
        swatch: {label: "swatch"}
    },
    Accordion: {open: {label: "Open"}, close: {label: "Close"}},
    CartItem: {
        each: {label: "each"},
        pricePerItem: {label: "price per item"},
        quantity: {label: "Quantity"},
        remove: {label: "Remove {product} from the cart"},
        removeDefault: {label: "Remove item from the cart"},
        taxIncluded: {label: "incl. VAT"},
        taxExcluded: {label: "excl. tax"},
        updating: {label: "{product} is updating"}
    },
    InputDate: {picker: "Select a date"}
}, ee = {Dropin: Pe}, te = {default: ee, en_US: ee}, Oe = a => Z(te.default, te[a] || {}), re = 1, H = ({
                                                                                                            className: a,
                                                                                                            fullWidth: r = !1,
                                                                                                            lines: n = re,
                                                                                                            size: t = "small",
                                                                                                            variant: s = "row",
                                                                                                            children: i = null,
                                                                                                            multilineGap: l = "medium",
                                                                                                            ...d
                                                                                                        }) => {
    const _ = [[`dropin-skeleton-row__${s}`, s], [`dropin-skeleton-row__${s}-${t}`, s && t]];
    if (!i && s === "empty") return e("div", {className: o(["dropin-skeleton-row dropin-skeleton-row__empty", a])});
    if (i) {
        const h = i.trim();
        return e("div", {
            ...d,
            class: o(["dropin-skeleton-row", ["dropin-skeleton-row--full", r], a]),
            dangerouslySetInnerHTML: {__html: h}
        })
    }
    return n > re === !1 ? e("div", {
        ...d,
        class: o(["dropin-skeleton-row", ["dropin-skeleton-row--full", r], "dropin-skeleton--row__content", ..._, a])
    }) : e("div", {
        ...d,
        style: {"--multiline-gap-spacing": `var(--spacing-${l})`},
        class: o(["dropin-skeleton-row--multiline", ["dropin-skeleton-row--full", r], a]),
        children: Array.from({length: n}).map((h, p) => e("div", {class: o(["dropin-skeleton-row", ["dropin-skeleton-row--full", r], "dropin-skeleton--row__content", ..._])}, p))
    })
}, Ce = ({
             className: a,
             children: r,
             rowGap: n = "medium",
             ...t
         }) => e("div", {
    style: {"--row-gap-spacing": `var(--spacing-${n})`}, ...t,
    className: o(["dropin-skeleton", a]),
    role: "status",
    "aria-label": "Loading...",
    children: r
}), ce = ge({locale: "en-US"}), Ae = ({lang: a = "en_US", langDefinitions: r = {}, children: n}) => {
    const t = q(() => {
        const i = Z(r.default, r[a] ?? {});
        return Z(Oe(a), i)
    }, [a, r]), s = a.replace("_", "-");
    return e(ce.Provider, {value: {locale: s}, children: e(xe, {definition: t, children: e(R, {children: n})})})
}, ut = new be(e(Ae, {})), Ve = function () {
    const r = typeof document < "u" && document.createElement("link").relList;
    return r && r.supports && r.supports("modulepreload") ? "modulepreload" : "preload"
}(), Re = function (a) {
    return "/" + a
}, ne = {}, N = function (r, n, t) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const i = document.querySelector("meta[property=csp-nonce]"),
            l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
        s = Promise.all(n.map(d => {
            if (d = Re(d), d in ne) return;
            ne[d] = !0;
            const _ = d.endsWith(".css"), m = _ ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${d}"]${m}`)) return;
            const h = document.createElement("link");
            if (h.rel = _ ? "stylesheet" : Ve, _ || (h.as = "script", h.crossOrigin = ""), h.href = d, l && h.setAttribute("nonce", l), document.head.appendChild(h), _) return new Promise((p, c) => {
                h.addEventListener("load", p), h.addEventListener("error", () => c(new Error(`Unable to preload CSS for ${d}`)))
            })
        }))
    }
    return s.then(() => r()).catch(i => {
        const l = new Event("vite:preloadError", {cancelable: !0});
        if (l.payload = i, window.dispatchEvent(l), !l.defaultPrevented) throw i
    })
}, Be = {
    Add: g(() => N(() => import("./chunks/icons/Add.js").then(a => a.$), [])),
    Bulk: g(() => N(() => import("./chunks/icons/Bulk.js"), [])),
    Burger: g(() => N(() => import("./chunks/icons/Burger.js"), [])),
    Cart: g(() => N(() => import("./chunks/icons/Cart.js"), [])),
    Check: g(() => N(() => import("./chunks/icons/Check.js"), [])),
    ChevronDown: g(() => N(() => import("./chunks/icons/ChevronDown.js"), [])),
    ChevronUp: g(() => N(() => import("./chunks/icons/ChevronUp.js"), [])),
    ChevronRight: g(() => N(() => import("./chunks/icons/ChevronRight.js"), [])),
    Close: g(() => N(() => import("./chunks/icons/Close.js"), [])),
    Heart: g(() => N(() => import("./chunks/icons/Heart.js"), [])),
    Minus: g(() => N(() => import("./chunks/icons/Minus.js"), [])),
    Placeholder: g(() => N(() => import("./chunks/icons/Placeholder.js"), [])),
    PlaceholderFilled: g(() => N(() => import("./chunks/icons/PlaceholderFilled.js"), [])),
    Search: g(() => N(() => import("./chunks/icons/Search.js"), [])),
    SearchFilled: g(() => N(() => import("./chunks/icons/SearchFilled.js"), [])),
    Sort: g(() => N(() => import("./chunks/icons/Sort.js"), [])),
    Star: g(() => N(() => import("./chunks/icons/Star.js"), [])),
    View: g(() => N(() => import("./chunks/icons/View.js"), [])),
    User: g(() => N(() => import("./chunks/icons/User.js"), [])),
    Warning: g(() => N(() => import("./chunks/icons/Warning.js"), [])),
    Locker: g(() => N(() => import("./chunks/icons/Locker.js"), [])),
    Wallet: g(() => N(() => import("./chunks/icons/Wallet.js"), [])),
    Card: g(() => N(() => import("./chunks/icons/Card.js"), [])),
    Order: g(() => N(() => import("./chunks/icons/Order.js"), [])),
    Delivery: g(() => N(() => import("./chunks/icons/Delivery.js"), [])),
    OrderError: g(() => N(() => import("./chunks/icons/OrderError.js"), [])),
    OrderSuccess: g(() => N(() => import("./chunks/icons/OrderSuccess.js"), [])),
    PaymentError: g(() => N(() => import("./chunks/icons/PaymentError.js"), [])),
    CheckWithCircle: g(() => N(() => import("./chunks/icons/CheckWithCircle.js"), [])),
    WarningWithCircle: g(() => N(() => import("./chunks/icons/WarningWithCircle.js"), [])),
    WarningFilled: g(() => N(() => import("./chunks/icons/WarningFilled.js"), [])),
    InfoFilled: g(() => N(() => import("./chunks/icons/InfoFilled.js"), [])),
    HeartFilled: g(() => N(() => import("./chunks/icons/HeartFilled.js"), [])),
    Trash: g(() => N(() => import("./chunks/icons/Trash.js"), [])),
    Eye: g(() => N(() => import("./chunks/icons/Eye.js"), [])),
    EyeClose: g(() => N(() => import("./chunks/icons/EyeClose.js"), [])),
    Date: g(() => N(() => import("./chunks/icons/Date.js"), [])),
    AddressBook: g(() => N(() => import("./chunks/icons/AddressBook.js"), [])),
    EmptyBox: g(() => N(() => import("./chunks/icons/EmptyBox.js"), [])),
    Coupon: g(() => N(() => import("./chunks/icons/Coupon.js"), []))
};

function T({source: a, size: r = "24", stroke: n = "2", viewBox: t = "0 0 24 24", className: s, ...i}) {
    const l = typeof a == "string" ? Be[a] : null,
        d = {className: o(["dropin-icon", `dropin-icon--shape-stroke-${n}`, s]), width: r, height: r, viewBox: t};
    return e(Ne, {fallback: e("svg", {...i, ...d}), children: l ? e(l, {...i, ...d}) : e(a, {...i, ...d})})
}

const Fe = ({
                name: a,
                value: r = "1",
                className: n,
                disabled: t,
                error: s,
                success: i,
                min: l,
                max: d,
                onValue: _,
                onUpdateError: m,
                size: h = "medium",
                ...p
            }) => {
    const [c, u] = B(Number(r)), b = Number(l), f = Number(d), v = s || c < b || c > f,
        k = c < b ? "Dropin.Incrementer.minQuantityMessage" : c > f ? "Dropin.Incrementer.maxQuantityMessage" : "Dropin.Incrementer.errorMessage",
        x = C(oe(async $ => {
            if (_) try {
                _($)
            } catch (w) {
                m && m(w)
            }
        }, 200), [_, m]), E = $ => {
            let w = $;
            x(w), u(w)
        };
    return e("div", {
        className: o(["dropin-incrementer", `dropin-incrementer--${h}`, n]), children: [e("div", {
            className: o(["dropin-incrementer__content", `dropin-incrementer__content--${h}`, ["dropin-incrementer__content--error", v], ["dropin-incrementer__content--success", i], ["dropin-incrementer__content--disabled", t]]),
            children: [e("div", {
                className: o(["dropin-incrementer__button-container", ["dropin-incrementer__button-container--disabled", t]]),
                children: e(Q, {
                    children: e("button", {
                        type: "button",
                        className: o(["dropin-incrementer__decrease-button", ["dropin-incrementer__decrease-button--disabled", t]]),
                        onClick: () => E(c - 1),
                        disabled: t || c < b + 1,
                        "aria-label": e(z, {id: "Dropin.Incrementer.decreaseLabel"}),
                        children: e(T, {
                            source: U,
                            size: "16",
                            stroke: "1",
                            viewBox: "4 2 20 20",
                            className: "dropin-incrementer__down"
                        })
                    })
                })
            }), e("input", {
                className: "dropin-incrementer__input",
                max: d,
                min: l,
                step: 1,
                type: "number",
                name: a,
                value: c,
                disabled: t,
                onBlur: () => {
                    E(Number(c))
                },
                onChange: $ => {
                    const w = $.currentTarget.value;
                    w !== "" && E(Number(w))
                }, ...p
            }), e("div", {
                className: o(["dropin-incrementer__button-container", ["dropin-incrementer__button-container--disabled", t]]),
                children: e(Q, {
                    children: e("button", {
                        type: "button",
                        className: o(["dropin-incrementer__increase-button", ["dropin-incrementer__increase-button--disabled", t]]),
                        onClick: () => E(c + 1),
                        disabled: t || c > f - 1,
                        "aria-label": e(z, {id: "Dropin.Incrementer.increaseLabel"}),
                        children: e(T, {
                            source: K,
                            size: "16",
                            stroke: "1",
                            viewBox: "4 2 20 20",
                            className: "dropin-incrementer__add"
                        })
                    })
                })
            })]
        }), v && e("p", {
            className: "dropin-incrementer__content--error-message",
            children: e(z, {id: k, fields: {minQuantity: l, maxQuantity: d}})
        })]
    })
}, pe = ({
             name: a,
             value: r,
             variant: n = "primary",
             className: t,
             disabled: s,
             error: i,
             floatingLabel: l,
             onValue: d,
             onUpdateError: _,
             size: m = "medium",
             icon: h,
             maxLength: p,
             success: c,
             ...u
         }) => {
    const b = (u == null ? void 0 : u.id) || a || `dropin-input-${Math.random().toString(36)}`, f = C(oe(async k => {
        if (d) try {
            await d(k)
        } catch (x) {
            _ && _(x)
        }
    }, 200), [d, _]), v = k => {
        const x = k.target;
        f(x.value.trim())
    };
    return e("div", {
        className: o(["dropin-input-container", `dropin-input-container--${n}`, ["dropin-input-container--floating", !!l], ["dropin-input-container--disabled", s]]),
        children: [h && e(y, {
            node: h,
            className: o(["dropin-input__field-icon--left", h.props.className])
        }), e("div", {
            className: "dropin-input-label-container",
            children: [e("input", {
                id: b,
                onChange: v,
                type: "text",
                maxLength: p,
                name: a,
                value: r, ...u,
                className: o(["dropin-input", `dropin-input--${m}`, `dropin-input--${n}`, ["dropin-input--error", !!i], ["dropin-input--success", !!c], ["dropin-input--disabled", s], ["dropin-input--floating", !!l], ["dropin-input--icon-left", !!h], t]),
                disabled: s
            }), l && e("label", {
                htmlFor: b,
                className: o([["dropin-input__label--floating", !!l], ["dropin-input__label--floating--icon-left", !!h], ["dropin-input__label--floating--error", !!i]]),
                children: l
            })]
        }), i && e("div", {
            className: o(["dropin-input__field-icon--right", "dropin-input__field-icon--error"]),
            children: e(T, {
                source: Ie,
                size: "16",
                stroke: "2",
                className: "dropin-input--warning-icon",
                viewBox: "-1 -1 26 26"
            })
        }), c && e("div", {
            className: o(["dropin-input__field-icon--right", "dropin-input__field-icon--success"]),
            children: e(T, {
                source: De,
                size: "16",
                stroke: "2",
                className: "dropin-input--success-icon",
                viewBox: "-1 -1 26 26"
            })
        })]
    })
}, ht = ({name: a = "", error: r, value: n, label: t, onChange: s, onBlur: i, ...l}) => {
    const d = I({picker: "Dropin.InputDate.picker"}), _ = p => {
        p.currentTarget.setAttribute("type", "date")
    }, m = p => {
        var u;
        const c = (u = p.currentTarget.parentElement) == null ? void 0 : u.querySelector("input");
        c == null || c.focus(), c == null || c.showPicker()
    }, h = p => {
        p.currentTarget.setAttribute("type", "text"), i == null || i(p)
    };
    return e("div", {
        className: o(["dropin-input-date"]),
        children: [e(me, {
            error: r,
            children: e(pe, {
                error: !!r,
                name: a,
                value: n == null ? void 0 : n.toString(),
                placeholder: t,
                floatingLabel: t,
                onFocus: _,
                onBlur: h,
                onChange: s,
                "aria-labelledby": t,
                className: "dropin-input-date__input", ...l
            })
        }), e("button", {
            className: "dropin-input-date__icon",
            "aria-label": d.picker,
            onClick: m,
            children: e(T, {source: Ee, size: "24"})
        })]
    })
}, ie = {pending: e(U, {}), success: e(de, {}), error: e(j, {style: {fill: "red"}})}, He = ({
                                                                                                minLength: a = 0,
                                                                                                requiredCharacterClasses: r = 0,
                                                                                                uniqueSymbolsStatus: n = "pending",
                                                                                                validateLengthConfig: t = {
                                                                                                    status: "",
                                                                                                    icon: "",
                                                                                                    message: ""
                                                                                                }
                                                                                            }) => {
    const s = I({
        chartTwoSymbols: "Dropin.PasswordStatusIndicator.chartTwoSymbols",
        chartThreeSymbols: "Dropin.PasswordStatusIndicator.chartThreeSymbols",
        chartFourSymbols: "Dropin.PasswordStatusIndicator.chartFourSymbols"
    }), i = l => {
        switch (l) {
            case 2:
                return s.chartTwoSymbols;
            case 3:
                return s.chartThreeSymbols;
            case 4:
                return s.chartFourSymbols;
            default:
                return ""
        }
    };
    return e("div", {
        className: o(["dropin-password-status-indicator"]),
        children: [a > 0 ? e("div", {
            className: `dropin-password-status-indicator__item dropin-password-status-indicator__item--${t.status}`,
            "data-testid": `dropin-password-status-indicator__item--${t.icon}`,
            children: [ie[t.icon], e("span", {className: `${t.status}`, children: t.message})]
        }) : null, r >= 2 ? e("div", {
            className: `dropin-password-status-indicator__item dropin-password-status-indicator__item--${n}`,
            "data-testid": `dropin-password-status-indicator__item--${n}`,
            children: [ie[n], e("span", {className: "pending", children: i(r)})]
        }) : null]
    })
}, bt = ({
             placeholder: a,
             floatingLabel: r,
             children: n,
             name: t,
             required: s,
             className: i,
             minLength: l,
             autoComplete: d,
             defaultValue: _ = "",
             hideStatusIndicator: m = !1,
             uniqueSymbolsStatus: h,
             validateLengthConfig: p,
             requiredCharacterClasses: c,
             errorMessage: u,
             onValue: b,
             onBlur: f,
             ...v
         }) => {
    const k = I({
        placeholder: "Dropin.InputPassword.placeholder",
        floatingLabel: "Dropin.InputPassword.floatingLabel",
        buttonShowTitle: "Dropin.InputPassword.buttonShowTitle",
        buttonHideTitle: "Dropin.InputPassword.buttonHideTitle"
    }), [x, E] = B(!1), $ = C(() => {
        E(L => !L)
    }, []), w = x ? k.buttonHideTitle : k.buttonShowTitle;
    return e("div", {
        "data-testid": "passwordFieldInput",
        className: o(["dropin-input-password", ["dropin-input-password--error", u], i]), ...v,
        children: [e(me, {
            error: u,
            children: e(pe, {
                autoComplete: d,
                name: t ?? "password",
                type: x ? "text" : "password",
                placeholder: a || k.placeholder,
                floatingLabel: r || k.floatingLabel,
                "aria-label": k.placeholder,
                "aria-required": s || !0,
                "aria-invalid": !!u,
                "aria-describedby": "password-feedback",
                required: s || !1,
                value: _,
                onValue: b,
                icon: e($e, {}),
                onBlur: f,
                "data-testid": "passwordInput"
            })
        }), e(V, {
            "aria-label": w,
            title: w,
            type: "button",
            "data-testid": "toggle-password-icon",
            variant: "tertiary",
            className: o(["dropin-input-password__eye-icon", `dropin-input-password__eye-icon--${x ? "show" : "hide"}`, i]),
            onClick: $,
            children: e(T, {focusable: !1, "aria-hidden": x, source: x ? Se : Te})
        }), m ? null : e(He, {
            minLength: l,
            requiredCharacterClasses: c,
            validateLengthConfig: p,
            uniqueSymbolsStatus: h
        }), n]
    })
}, ft = ({
             disabled: a,
             name: r = "",
             errorMessage: n,
             value: t,
             label: s,
             className: i,
             onChange: l,
             onBlur: d,
             ..._
         }) => {
    const m = (_ == null ? void 0 : _.id) || r || `dropin-textarea-${Math.random().toString(36)}`,
        h = !!(n != null && n.length), p = C(c => {
            const u = c.target;
            u.style.height = "auto", u.style.height = `${u.scrollHeight}px`, l == null || l(c)
        }, [l]);
    return e("div", {
        className: o(["dropin-textarea-container", i]),
        "data-testid": "dropin-textarea-container",
        children: [e("textarea", {
            "data-testid": "dropin-textarea-field",
            className: o(["dropin-textarea", ["dropin-textarea--error", h], ["dropin-textarea--disabled", !!a]]),
            id: m,
            placeholder: s,
            name: r,
            value: t,
            disabled: a,
            onBlur: d,
            onChange: p, ..._
        }), e("label", {
            htmlFor: m,
            className: o(["dropin-textarea__label--floating", ["dropin-textarea__label--floating--error", h]]),
            children: s
        }), h ? e("div", {
            className: o(["dropin-textarea__label--floating--text", ["dropin-textarea__label--floating--error", h]]),
            children: n
        }) : null]
    })
}, qe = ({className: a, src: r, params: n, loading: t = "lazy", srcSet: s, onLoad: i, ...l}) => {
    const [d, _] = B(!1), m = q(() => {
        if (s) return s;
        if (!(!r || !n)) return fe(r, {...n})
    }, [n, r, s]), h = p => {
        _(!0), i == null || i(p)
    };
    return e("img", {
        ...l,
        className: o(["dropin-image", ["dropin-image--loaded", d], a]),
        loading: t,
        onLoad: h,
        src: r,
        srcSet: r
    })
}, _e = ({variant: a = "primary", className: r}) => e("hr", {
    role: "separator",
    className: o(["dropin-divider", `dropin-divider--${a}`, r])
}), A = ({
             amount: a = 0,
             currency: r,
             locale: n = void 0,
             variant: t = "default",
             weight: s = "bold",
             className: i,
             children: l,
             sale: d = !1,
             formatOptions: _ = {},
             size: m = "small",
             ...h
         }) => {
    const p = q(() => new Intl.NumberFormat(n, {
        style: "currency",
        currency: r || "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2, ..._
    }), [n, r, _]), c = q(() => p.format(a), [a, p]);
    return e("span", {
        ...h,
        className: o(["dropin-price", `dropin-price--${t}`, `dropin-price--${m}`, `dropin-price--${s}`, ["dropin-price--sale", d], i]),
        children: c
    })
}, Me = ({
             name: a,
             label: r,
             value: n,
             size: t = "medium",
             checked: s = !1,
             disabled: i = !1,
             error: l = !1,
             description: d = "",
             busy: _ = !1,
             className: m,
             children: h,
             ...p
         }) => e("label", {
    className: o([m, "dropin-radio-button", ["dropin-radio-button--error", l], ["dropin-radio-button--disabled", i]]),
    children: [e("input", {
        name: a,
        value: n,
        checked: s,
        disabled: i,
        type: "radio",
        className: o(["dropin-radio-button__input", ["dropin-radio-button__input--error", l], ["dropin-radio-button__input--disabled", i]]),
        "aria-busy": _, ...p
    }), e("span", {
        className: o(["dropin-radio-button__label", `dropin-radio-button__label--${t}`, ["dropin-radio-button__label--error", l], ["dropin-radio-button__label--disabled", i]]),
        children: r
    }), e("span", {
        className: o(["dropin-radio-button__description", `dropin-radio-button__description--${t}`, ["dropin-radio-button__description--disabled", i]]),
        children: d
    })]
}), V = ({
             value: a,
             variant: r = "primary",
             size: n = "medium",
             icon: t,
             className: s,
             children: i,
             disabled: l = !1,
             active: d = !1,
             activeChildren: _,
             activeIcon: m,
             href: h,
             ...p
         }) => {
    let c = "dropin-button";
    (t && !i || t && d && !_ || !t && d && m) && (c = "dropin-iconButton"), d && _ && (c = "dropin-button"), s = o([c, `${c}--${n}`, `${c}--${r}`, [`${c}--${r}--disabled`, l], i && t && `${c}--with-icon`, !i && _ && t && `${c}--with-icon`, d && m && `${c}--with-icon`, s]);
    const u = o(["dropin-button-icon", `dropin-button-icon--${r}`, [`dropin-button-icon--${r}--disabled`, l], t == null ? void 0 : t.props.className]),
        b = h ? {
            node: e("a", {}), role: "link", href: h, ...p, disabled: l, active: d, onKeyDown: f => {
                l && f.preventDefault()
            }, tabIndex: l ? -1 : 0
        } : {node: e("button", {}), role: "button", ...p, value: a, disabled: l, active: d};
    return e(y, {
        ...b,
        className: s,
        children: [t && !d && e(y, {node: t, className: u}), m && d && e(y, {
            node: m,
            className: u
        }), i && !d && (typeof i == "string" ? e("span", {children: i}) : i), d && _ && (typeof _ == "string" ? e("span", {children: _}) : _)]
    })
};

function ae(a, r, n, t, s) {
    return a || (r ? r.value : n || t ? "" : s ? s.value : null)
}

const We = ({
                name: a,
                value: r = null,
                options: n,
                variant: t = "primary",
                floatingLabel: s,
                size: i = "medium",
                handleSelect: l = () => {
                },
                disabled: d = !1,
                error: _ = !1,
                placeholder: m,
                defaultOption: h,
                icon: p,
                className: c,
                ...u
            }) => {
    const b = (u == null ? void 0 : u.id) || a || `dropin-picker-${Math.random().toString(36)}`,
        f = !!(u != null && u.required),
        v = n == null ? void 0 : n.find(P => !P.disabled), [k, x] = B(() => ae(r, h, m, s, v));
    W(() => {
        x(ae(r, h, m, s, v))
    }, [r, h, m, s, v]);
    const E = P => {
        const {options: D, value: S} = P.target;
        for (const M of D) M.selected && (x(S), l(P))
    }, $ = n == null ? void 0 : n.map(P => {
        const {value: D, text: S, disabled: M} = P;
        return e("option", {
            value: D,
            selected: D === k,
            disabled: M,
            className: o(["dropin-picker__option"]),
            children: S
        }, D)
    }), w = !!k, L = () => (!f || !w) && (s || m);
    return e("div", {
        className: o([c, "dropin-picker", `dropin-picker__${i}`, ["dropin-picker__floating", !!s], ["dropin-picker__selected", w], ["dropin-picker__error", _], ["dropin-picker__disabled", d], ["dropin-picker__icon", p]]),
        children: [p && e(p.type, {...p.props, className: "dropin-picker__icon--placeholder"}), e("select", {
            id: b,
            className: o(["dropin-picker__select", `dropin-picker__select--${t}`, `dropin-picker__select--${i}`, ["dropin-picker__select--floating", !!s]]),
            name: a,
            "aria-label": a,
            disabled: d,
            onChange: E, ...u,
            children: [L() && e("option", {
                selected: !w,
                value: "",
                className: o(["dropin-picker__option dropin-picker__placeholder"]),
                children: s ?? m
            }, r), $]
        }), e(T, {
            source: J,
            size: "24",
            stroke: "2",
            className: "dropin-picker__chevronDown"
        }), s && w && e("label", {htmlFor: b, className: o(["dropin-picker__floatingLabel", !!s]), children: s})]
    })
}, me = ({
             className: a,
             label: r,
             error: n,
             hint: t,
             success: s,
             size: i = "medium",
             disabled: l = !1,
             children: d,
             ..._
         }) => {
    var p;
    const m = ((p = d == null ? void 0 : d.props) == null ? void 0 : p.id) ?? `dropin-field-${Math.random().toString(36)}`,
        h = d && typeof d.type != "string" ? d.type : null;
    return e("div", {
        ..._,
        className: o(["dropin-field", a]),
        children: [r && e("label", {
            className: o(["dropin-field__label", ["dropin-field__label--disabled", l], `dropin-field__label--${i}`]),
            htmlFor: m,
            children: r
        }), e("div", {
            className: o(["dropin-field__content"]),
            children: h && d && we(h, {
                ...d.props,
                id: m,
                key: d.key,
                disabled: l,
                size: i,
                error: !!n,
                success: !!s && !n
            })
        }), e("div", {
            className: o(["dropin-field__hint", [`dropin-field__hint--${i}`, i], ["dropin-field__hint--error", !!n], ["dropin-field__hint--success", !!s && !n], ["dropin-field__hint--disabled", !!l]]),
            children: n || s || t
        })]
    })
}, vt = ({icon: a, className: r, children: n, active: t = !1, disabled: s = !1, ...i}) => e("button", {
    role: "button",
    disabled: s, ...i,
    className: o(["dropin-action-button", ["dropin-action-button--active", t], ["dropin-action-button--disabled", s], r]),
    children: [a && e(y, {
        node: a,
        className: o(["dropin-action-button-icon"])
    }), n && (typeof n == "string" ? e("span", {children: n}) : n)]
}), gt = ({
              className: a,
              variant: r = "primary",
              activeOption: n,
              disabled: t = !1,
              dividers: s = !0,
              children: i,
              handleSelect: l,
              ...d
          }) => {
    const [_, m] = B(n), h = C(c => {
        t || c.props.disabled || (m(c.props.value), l && l(c.props.value))
    }, [l, m, t]), p = se.map(i, c => {
        const u = t || c.props.disabled, b = c.props.value === _;
        return ke(c, {
            disabled: u,
            active: b,
            onClick: () => h(c),
            className: o(["dropin-action-button-group__option", `dropin-action-button-group__option--${r}`, ["dropin-action-button-group__option--active", b], ["dropin-action-button-group__option--with-dividers", s]])
        })
    });
    return e("div", {
        role: "group", ...d,
        className: o(["dropin-action-button-group", `dropin-action-button-group--${r}`, a]),
        children: p
    })
}, Ge = ({variant: a = "primary", className: r, children: n, ...t}) => e("div", {
    ...t,
    className: o(["dropin-card", `dropin-card--${a}`, r]),
    children: e("div", {class: "dropin-card__content", children: n})
}), Nt = ({
              name: a,
              value: r,
              size: n = "medium",
              disabled: t = !1,
              error: s = !1,
              label: i = "",
              description: l = "",
              className: d,
              checked: _,
              ...m
          }) => {
    const [h, p] = B(_ === void 0 ? !1 : _), c = le(null), u = f => {
        var v;
        (v = m.onChange) == null || v.call(m, f), p(f.currentTarget.checked)
    }, b = f => {
        var v;
        f.key === " " && (f.preventDefault(), (v = c == null ? void 0 : c.current) == null || v.click())
    };
    return e("label", {
        className: o(["dropin-checkbox", ["dropin-checkbox--disabled", t]]),
        children: [e("input", {
            ref: c,
            name: a,
            value: r,
            type: "checkbox",
            disabled: t,
            className: o(["dropin-checkbox__checkbox", ["dropin-checkbox__checkbox--error", s], d]), ...m,
            onChange: u,
            checked: h
        }), e("span", {
            "aria-checked": h ? "true" : "false",
            "aria-labelledby": `${a}-label`,
            "aria-describedby": `${a}-description`,
            className: o(["dropin-checkbox__box", ["dropin-checkbox__box--error", s], ["dropin-checkbox__box--disabled", t]]),
            role: "checkbox",
            tabIndex: t ? -1 : 0,
            onKeyDown: b,
            children: e(T, {className: o(["dropin-checkbox__checkmark"]), source: de, size: "16", stroke: "3"})
        }), e("div", {
            id: `${a}-label`,
            className: o(["dropin-checkbox__label", `dropin-checkbox__label--${n}`, ["dropin-checkbox__label--disabled", t]]),
            children: i
        }), e("div", {}), e("div", {
            id: `${a}-description`,
            role: "note",
            className: o(["dropin-checkbox__description", `dropin-checkbox__description--${n}`, ["dropin-checkbox__description--disabled", t]]),
            children: l
        })]
    })
}, wt = ({
             className: a,
             name: r,
             value: n,
             id: t,
             label: s,
             groupAriaLabel: i,
             size: l = "medium",
             color: d,
             disabled: _ = !1,
             selected: m = !1,
             outOfStock: h = !1,
             multi: p = !1,
             onValue: c,
             onUpdateError: u,
             ...b
         }) => {
    const f = I("Dropin.Swatches.outOfStock.label").label, v = I("Dropin.Swatches.selected.label").label,
        k = I("Dropin.Swatches.swatch.label").label, x = C(async D => {
            if (c) try {
                await c(D)
            } catch (S) {
                u && u(S)
            }
        }, [c, u]), E = D => {
            const S = D.target;
            x(S.value)
        }, L = d && (D => {
            const S = new Option().style;
            return S.color = D, S.color !== ""
        })(d) ? d : "var(--color-gray-300);", P = () => h ? `${i}: ${s} ${f}` : m ? `${i}: ${s} ${v}` : `${i}: ${s} ${k}`;
    return e("label", {
        className: o(["dropin-color-swatch__container", `dropin-color-swatch__container--${l}`, a]),
        children: [e("input", {
            type: p ? "checkbox" : "radio",
            name: r,
            id: t,
            value: n,
            "aria-label": P(),
            checked: m,
            disabled: _,
            onChange: E, ...b,
            className: o(["dropin-color-swatch", ["dropin-color-swatch--selected", m], ["dropin-color-swatch--disabled", _], a])
        }), e("span", {
            style: {"--bg-color": L},
            className: o(["dropin-color-swatch__span", ["dropin-color-swatch__span--out-of-stock", h], a])
        })]
    })
}, kt = ({
             className: a,
             name: r,
             value: n,
             label: t,
             groupAriaLabel: s,
             id: i,
             disabled: l = !1,
             selected: d = !1,
             outOfStock: _ = !1,
             multi: m = !1,
             onValue: h,
             onUpdateError: p,
             ...c
         }) => {
    const u = I("Dropin.Swatches.outOfStock.label").label, b = I("Dropin.Swatches.selected.label").label,
        f = I("Dropin.Swatches.swatch.label").label, [v, k] = B(!1), x = le(null), E = C(async L => {
            if (h) try {
                await h(L)
            } catch (P) {
                p && p(P)
            }
        }, [h, p]), $ = L => {
            const P = L.target;
            E(P.value)
        }, w = () => _ ? `${s}: ${t} ${u}` : d ? `${s}: ${t} ${b}` : `${s}: ${t} ${f}`;
    return W(() => {
        x.current && x.current.scrollWidth > x.current.clientWidth && k(!0)
    }, [t]), e("div", {
        className: "dropin-text-swatch__container", ...v ? {"data-tooltip": t} : {},
        children: [e("input", {
            type: m ? "checkbox" : "radio",
            name: r,
            id: i,
            value: n,
            "aria-label": w(),
            checked: d,
            disabled: l,
            onChange: $, ...c,
            className: o(["dropin-text-swatch", ["dropin-text-swatch--selected", d], ["dropin-text-swatch--disabled", l], a])
        }), e("label", {
            htmlFor: i,
            ref: x,
            className: o(["dropin-text-swatch__label", ["dropin-text-swatch__label--out-of-stock", _], a]),
            children: t
        })]
    })
}, Ke = ({ariaLabel: a, size: r = "small", stroke: n = "4", children: t, className: s, style: i, ...l}) => {
    const d = ["dropin-progress-spinner", `dropin-progress-spinner--shape-size-${r}`, `dropin-progress-spinner--shape-stroke-${n}`],
        _ = I({
            updating: "Dropin.ProgressSpinner.updating.label",
            updatingChildren: "Dropin.ProgressSpinner.updatingChildren.label"
        }), m = () => a || (t ? _.updatingChildren : _.updating);
    return t ? e("div", {
        ...l,
        className: o(["dropin-progress-spinner-provider"]),
        "aria-live": "polite",
        role: "status",
        children: [e("div", {"aria-hidden": !0, children: t}), e("div", {
            "aria-label": m(),
            role: "status",
            className: o(["dropin-progress-spinner-background", s]),
            style: i
        }), e("div", {className: o(["dropin-progress-spinner-with-provider", ...d]), "aria-hidden": !0})]
    }) : e("div", {...l, className: o([s, ...d]), "aria-live": "polite", role: "status", "aria-label": m()})
}, yt = ({
             className: a,
             name: r,
             value: n,
             id: t,
             label: s,
             groupAriaLabel: i,
             src: l,
             alt: d,
             disabled: _ = !1,
             selected: m = !1,
             outOfStock: h = !1,
             multi: p = !1,
             onValue: c,
             onUpdateError: u,
             ...b
         }) => {
    const f = I("Dropin.Swatches.outOfStock.label").label, v = I("Dropin.Swatches.selected.label").label,
        k = I("Dropin.Swatches.swatch.label").label, x = C(async w => {
            if (c) try {
                await c(w)
            } catch (L) {
                u && u(L)
            }
        }, [c, u]), E = w => {
            const L = w.target;
            x(L.value)
        }, $ = () => h ? `${i}: ${s} ${f}` : m ? `${i}: ${s} ${v}` : `${i}: ${s} ${k}`;
    return e("label", {
        className: o(["dropin-image-swatch__container", a]),
        children: [e("input", {
            type: p ? "checkbox" : "radio",
            name: r,
            id: t,
            value: n,
            "aria-label": $(),
            checked: m,
            disabled: _,
            onChange: E, ...b,
            className: o(["dropin-image-swatch", ["dropin-image-swatch--selected", m], ["dropin-image-swatch--disabled", _], a])
        }), e("span", {
            className: o(["dropin-image-swatch__span", ["dropin-image-swatch__span--out-of-stock", h], a]),
            children: e(qe, {
                src: l,
                className: o(["dropin-image-swatch__content"]),
                params: {width: 100, fit: "bounds", crop: !0},
                alt: d,
                loading: "lazy",
                onError: w => w.target.style.display = "none"
            })
        })]
    })
}, Ue = ({
             className: a,
             children: r,
             title: n,
             secondaryText: t,
             actionIconPosition: s = "left",
             iconOpen: i = K,
             iconClose: l = U,
             iconLeft: d = K,
             showIconLeft: _ = !1,
             renderContentWhenClosed: m = !0,
             defaultOpen: h = !1,
             onStateChange: p,
             ...c
         }) => {
    const [u, b] = B(h), f = $ => {
            $.stopImmediatePropagation();
            const w = !u;
            b(w), p == null || p(w)
        }, v = I(`Dropin.Accordion.${u ? "close" : "open"}.label`).label,
        k = e(T, {source: i, size: "24", onClick: f, onKeyPress: f, className: "dropin-accordion-section__open-icon"}),
        x = e(T, {source: l, size: "24", onClick: f, onKeyPress: f, className: "dropin-accordion-section__close-icon"}),
        E = e(T, {source: d, size: "24"});
    return e("div", {
        ...c,
        className: o(["dropin-accordion-section", a]),
        children: [e("div", {
            className: "dropin-accordion-section__heading",
            children: [e("div", {
                className: "dropin-accordion-section__flex",
                onClick: f,
                onKeyPress: f,
                role: "button",
                "aria-label": `${v} ${n}`,
                tabIndex: 0,
                children: e("div", {
                    className: "dropin-accordion-section__title-container",
                    children: [s === "left" && (u ? x : k), _ && E, e("h3", {
                        className: "dropin-accordion-section__title",
                        children: n
                    })]
                })
            }), e("div", {
                className: "dropin-accordion-section__secondary-text-container",
                children: [t && e("h4", {
                    className: "dropin-accordion-section__secondary-text",
                    children: t
                }), s === "right" && (u ? x : k)]
            })]
        }), e("div", {
            className: "dropin-accordion-section__content-container",
            style: {display: u ? "grid" : "none"},
            children: (u || m && !u) && r
        })]
    })
}, xt = ({className: a, children: r, actionIconPosition: n = "left", iconOpen: t = K, iconClose: s = U, ...i}) => {
    const l = e(_e, {variant: "secondary"}),
        d = _ => e(R, {children: [e(Ue, {..._.props, actionIconPosition: n, iconOpen: t, iconClose: s}), l]});
    return e("div", {
        ...i,
        className: o(["dropin-accordion", a]),
        children: [l, ...(Array.isArray(r) ? r : [r]).map(d)]
    })
}, Dt = ({
             variant: a = "primary",
             className: r,
             type: n = "warning",
             additionalActions: t,
             onDismiss: s,
             heading: i,
             description: l,
             icon: d,
             itemList: _,
             actionButtonPosition: m,
             ...h
         }) => {
    var c, u, b;
    const p = I({dismiss: "Dropin.InlineAlert.dismissLabel"});
    return e("div", {
        ...h,
        className: o(["dropin-in-line-alert", `dropin-in-line-alert--${n}`, `dropin-in-line-alert--${a}`, r]),
        children: [e("div", {
            className: "dropin-in-line-alert__heading",
            children: [e("div", {
                className: "dropin-in-line-alert__title-container",
                children: [d && e(y, {
                    node: d,
                    className: "dropin-in-line-alert__icon"
                }), e("span", {className: "dropin-in-line-alert__title", children: i})]
            }), e("div", {
                className: "dropin-in-line-alert__actions-container",
                children: [t && (m === "top" || !m && t.length <= 1) && e(V, {
                    variant: "tertiary",
                    className: "dropin-in-line-alert__additional-action",
                    onClick: t.length > 0 ? (c = t[0]) == null ? void 0 : c.onClick : void 0,
                    "aria-label": (u = t[0]) == null ? void 0 : u.label,
                    children: (b = t[0]) == null ? void 0 : b.label
                }), s && e(V, {
                    icon: e(T, {source: j, size: "24", stroke: "2"}),
                    className: "dropin-in-line-alert__dismiss-button",
                    variant: "tertiary",
                    onClick: s,
                    "aria-label": p.dismiss
                })]
            })]
        }), l && e("p", {
            className: "dropin-in-line-alert__description",
            children: l
        }), e("div", {
            className: "dropin-in-line-alert__item-list-container",
            children: _ && e(y, {node: _, className: o(["dropin-in-line-alert__item-list"])})
        }), t && (m === "bottom" || !m && t.length > 1) && e("div", {
            className: "dropin-in-line-alert__additional-actions-container",
            children: t.map(f => e(V, {
                variant: "tertiary",
                className: "dropin-in-line-alert__additional-action",
                onClick: f.onClick,
                children: f.label
            }, f.label))
        })]
    })
}, It = ({
             size: a = "small",
             title: r = null,
             centered: n = !1,
             backgroundDim: t = !0,
             clickToDismiss: s = !0,
             escapeToDismiss: i = !0,
             onClose: l,
             showCloseButton: d = !0,
             className: _,
             children: m = null,
             ...h
         }) => {
    const p = C(() => {
        l == null || l()
    }, [l]), c = I({modalCloseLabel: "Dropin.Modal.Close.label"});
    return W(() => {
        const u = b => {
            const f = document.querySelector(".dropin-modal"), v = document.querySelector(".dropin-modal__body");
            s && f && v && !v.contains(b.target) && p()
        };
        return document.addEventListener("mousedown", u), () => {
            document.removeEventListener("mousedown", u)
        }
    }, [p, s]), W(() => {
        const u = b => {
            b.key === "Escape" && i && p()
        };
        return document.addEventListener("keydown", u), () => {
            document.removeEventListener("keydown", u)
        }
    }, [p, i]), W(() => {
        const u = document.scrollingElement, b = u.style.overflow;
        return u.style.overflow = "hidden", () => {
            u.style.overflow = b
        }
    }, []), e("div", {
        className: o(["dropin-modal", ["dropin-modal--dim", t]]),
        children: e("div", {
            ...h,
            className: o(["dropin-modal__body", [`dropin-modal__body--${a}`, a], _]),
            children: [e("div", {
                className: o(["dropin-modal__header", ["dropin-modal__header-title", !!r]]),
                children: [r && e("div", {
                    className: o(["dropin-modal__header-title-content"]),
                    children: r
                }), d && e(V, {
                    "aria-label": c.modalCloseLabel,
                    variant: "tertiary",
                    className: "dropin-modal__header-close-button",
                    onClick: p,
                    icon: e(j, {})
                })]
            }), e("div", {className: o(["dropin-modal__content", ["dropin-modal__body--centered", n]]), children: m})]
        })
    })
}, Et = ({
             className: a,
             children: r,
             ariaLabel: n,
             image: t,
             title: s,
             price: i,
             taxIncluded: l = !1,
             taxExcluded: d = !1,
             total: _,
             totalExcludingTax: m,
             sku: h,
             configurations: p,
             warning: c,
             alert: u,
             discount: b,
             savings: f,
             quantity: v,
             description: k,
             attributes: x,
             footer: E,
             loading: $ = !1,
             updating: w = !1,
             quantityType: L,
             dropdownOptions: P,
             onQuantity: D,
             onRemove: S,
             ...M
         }) => {
    var X, Y;
    const {locale: G} = ye(ce), O = I({
        each: "Dropin.CartItem.each.label",
        pricePerItem: "Dropin.CartItem.pricePerItem.label",
        quantity: "Dropin.CartItem.quantity.label",
        remove: "Dropin.CartItem.remove.label",
        removeDefault: "Dropin.CartItem.removeDefault.label",
        taxIncluded: "Dropin.CartItem.taxIncluded.label",
        taxExcluded: "Dropin.CartItem.taxExcluded.label",
        updating: "Dropin.CartItem.updating.label",
        updatingDefault: "Dropin.ProgressSpinner.updating.label"
    });
    if ($) return e(je, {});
    const ue = L === "dropdown" ? e(We, {
        className: o(["dropin-cart-item__quantity__picker"]),
        value: String(v),
        name: "quantity",
        "aria-label": O.quantity,
        disabled: w,
        variant: "primary",
        options: P,
        handleSelect: F => D == null ? void 0 : D(Number(F.target.value))
    }) : e(Fe, {
        className: o(["dropin-cart-item__quantity__incrementer"]),
        value: v,
        min: 1,
        onValue: F => D == null ? void 0 : D(Number(F)),
        name: "quantity",
        "aria-label": O.quantity,
        disabled: w
    });
    return e("div", {
        ...M,
        className: o(["dropin-cart-item", ["dropin-cart-item--updating", w], a]),
        children: [w && e(Ke, {
            className: o(["dropin-cart-item__spinner"]),
            ariaLabel: n ? (X = O.updating) == null ? void 0 : X.replace("{product}", n) : O.updatingDefault
        }), e("div", {
            className: "dropin-cart-item__wrapper",
            children: [t && e(y, {node: t, className: o(["dropin-cart-item__image"])}), s && e(y, {
                node: s,
                className: o(["dropin-cart-item__title", ["dropin-cart-item__title--edit", !!D || !!S]])
            }), k && e(y, {node: k, className: o(["dropin-cart-item__description"])}), h && e(y, {
                node: h,
                className: o(["dropin-cart-item__sku"])
            }), e("div", {
                className: o(["dropin-cart-item__savings__wrapper"]),
                children: [b && e(y, {
                    node: b,
                    className: o(["dropin-cart-item__discount", "dropin-cart-item__discount__large-screen"])
                }), f && e(y, {
                    node: f,
                    className: o(["dropin-cart-item__savings", "dropin-cart-item__savings__large-screen"])
                })]
            }), x && e("div", {
                className: o(["dropin-cart-item__attributes"]),
                children: e(y, {node: x})
            }), p && e("ul", {
                className: o(["dropin-cart-item__configurations"]),
                children: Object.entries(p).map(([F, he]) => e("li", {
                    className: o(["dropin-cart-item__configurations__item"]),
                    children: [F, ":", " ", e("strong", {
                        className: o(["dropin-cart-item__configurations__item__value"]),
                        children: he
                    })]
                }, F))
            }), i && e("span", {
                className: o(["dropin-cart-item__price"]),
                "aria-label": O.pricePerItem,
                children: [v && !D && e(R, {
                    children: [e("span", {
                        className: "dropin-cart-item__price__quantity",
                        "aria-hidden": !0,
                        children: [v.toLocaleString(G), " x", " "]
                    }), e("div", {
                        className: "dropin-cart-item__sr-only",
                        children: [O.quantity, ": ", v == null ? void 0 : v.toLocaleString(G), ";"]
                    })]
                }), e(y, {
                    node: i,
                    role: "text"
                }), v && v > 1 && e(R, {children: [" ", O.each]}), l && e("span", {
                    "data-testid": "tax-message",
                    className: "dropin-cart-item__price-tax-message",
                    children: [" ", O.taxIncluded]
                }), d && e("span", {
                    "data-testid": "tax-message",
                    className: "dropin-cart-item__price-tax-message",
                    children: [" ", O.taxExcluded]
                })]
            }), e("div", {
                className: o(["dropin-cart-item__quantity", ["dropin-cart-item__quantity--edit", !!D]]),
                children: [D ? ue : v && e("span", {
                    className: o(["dropin-cart-item__quantity__value"]),
                    children: [O.quantity, ":", " ", e("strong", {
                        className: "dropin-cart-item__quantity__number",
                        children: Number(v).toLocaleString(G)
                    })]
                }), c && e(y, {
                    node: c,
                    className: o(["dropin-cart-item__warning", "dropin-cart-item__warning--quantity"])
                }), u && e(y, {
                    node: u,
                    className: o(["dropin-cart-item__alert", "dropin-cart-item__alert--quantity"])
                })]
            }), c && e(y, {node: c, className: o(["dropin-cart-item__warning"])}), u && e(y, {
                node: u,
                className: o(["dropin-cart-item__alert"])
            }), e("div", {
                className: o(["dropin-cart-item__total", ["dropin-cart-item__total--edit", !!S]]),
                children: [e("div", {
                    className: "dropin-cart-item__row-total__wrapper",
                    children: [_ && e("div", {
                        className: "dropin-cart-item__row-total",
                        children: e(y, {node: _, role: "text"})
                    }), l && e("div", {
                        className: "dropin-cart-item__total-tax-included",
                        children: e("span", {
                            "data-testid": "tax-message",
                            className: o(["dropin-cart-item__total-tax-message"]),
                            children: O.taxIncluded
                        })
                    })]
                }), d && e("div", {
                    className: "dropin-cart-item__total-tax-excluded",
                    children: e("span", {
                        "data-testid": "tax-message",
                        className: o(["dropin-cart-item__total-tax-excluded-message"]),
                        children: [m && e(y, {node: m, role: "text"}), " ", O.taxExcluded]
                    })
                }), b && e(y, {node: b, className: o(["dropin-cart-item__discount"])}), f && e(y, {
                    node: f,
                    className: o(["dropin-cart-item__savings"])
                })]
            }), E && e("div", {className: o(["dropin-cart-item__footer"]), children: e(y, {node: E})})]
        }), S && e(V, {
            "data-testid": "cart-item-remove-button",
            className: o(["dropin-cart-item__remove"]),
            variant: "tertiary",
            onClick: () => S == null ? void 0 : S(),
            icon: e(T, {
                "data-testid": "cart-item-remove-icon",
                source: Le,
                size: "24",
                stroke: "2",
                viewBox: "0 0 24 24",
                "aria-label": n ? (Y = O.remove) == null ? void 0 : Y.replace("{product}", n) : O.removeDefault
            }),
            disabled: w
        })]
    })
}, je = () => e("div", {
    className: "dropin-cart-item dropin-cart-item-skeleton",
    children: e(Ce, {
        className: "dropin-cart-item__skeleton dropin-cart-item__wrapper",
        children: [e("div", {
            className: "dropin-cart-item__image",
            children: e(H, {className: "dropin-cart-item__skeleton__item"})
        }), e("div", {
            className: "dropin-cart-item__title",
            children: e(H, {className: "dropin-cart-item__skeleton__item"})
        }), e("div", {
            className: "dropin-cart-item__sku",
            children: e(H, {className: "dropin-cart-item__skeleton__item"})
        }), e("div", {
            className: "dropin-cart-item__price",
            children: e(H, {className: "dropin-cart-item__skeleton__item"})
        }), e("div", {
            className: "dropin-cart-item__quantity",
            children: e(H, {className: "dropin-cart-item__skeleton__item"})
        }), e("div", {
            className: "dropin-cart-item__total",
            children: e(H, {className: "dropin-cart-item__skeleton__item"})
        })]
    })
}), $t = ({className: a, children: r, ...n}) => e("div", {
    ...n,
    className: o(["dropin-cart-list", a]),
    children: e("div", {
        className: "dropin-cart-list__wrapper",
        "aria-live": "assertive",
        "aria-relevant": "all",
        children: se.map(r, (t, s) => e("div", {className: "dropin-cart-list__item", children: t}, s))
    })
}), St = ({
              className: a,
              children: r,
              locale: n,
              currency: t,
              amount: s,
              variant: i = "default",
              minimumAmount: l,
              maximumAmount: d,
              size: _ = "small",
              display: m = "dash",
              specialPrice: h,
              sale: p = !1,
              ...c
          }) => {
    const u = q(() => s || l === d || l && !d || d && !l, [s, d, l]);
    return e("div", {
        children: u ? e("div", {
            ...c,
            className: o(["dropin-price-range", a]),
            children: e(A, {amount: s ?? l ?? d, currency: t, locale: n, size: _, variant: i, sale: p})
        }) : e("div", {
            ...c,
            className: o(["dropin-price-range", a]),
            children: [m === "dash" ? e(ze, {
                specialPrice: h,
                minimumAmount: l,
                maximumAmount: d,
                currency: t,
                locale: n,
                size: _,
                sale: p
            }) : null, m === "from to" ? e(Ze, {
                specialPrice: h,
                minimumAmount: l,
                maximumAmount: d,
                currency: t,
                locale: n,
                size: _,
                sale: p
            }) : null, m === "as low as" ? e(Je, {
                specialPrice: h,
                minimumAmount: l,
                maximumAmount: d,
                currency: t,
                locale: n,
                size: _,
                sale: p
            }) : null]
        })
    })
};

function ze({specialPrice: a, minimumAmount: r, maximumAmount: n, currency: t, locale: s, size: i, sale: l}) {
    return e(R, {
        children: [e(A, {
            amount: a ?? r,
            currency: t,
            locale: s,
            size: i,
            sale: !!a && l
        }), e("span", {className: "dropin-price-range__separator", children: "-"}), e(A, {
            amount: n,
            currency: t,
            locale: s,
            size: i
        })]
    })
}

function Ze({specialPrice: a, minimumAmount: r, maximumAmount: n, currency: t, locale: s, size: i, sale: l}) {
    const d = I({
        from: "Dropin.PriceRange.from.label",
        to: "Dropin.PriceRange.to.label",
        asLowAs: "Dropin.PriceRange.asLowAs.label"
    });
    return e(R, {
        children: [e("span", {
            className: o(["dropin-price-range__from", `dropin-price-range__from--${i}`]),
            children: d.from
        }), e(A, {
            amount: a ?? r,
            currency: t,
            locale: s,
            size: i,
            sale: !!a && l
        }), e("span", {
            className: o(["dropin-price-range__to", `dropin-price-range__to--${i}`]),
            children: d.to
        }), e(A, {amount: n, currency: t, locale: s, size: i})]
    })
}

function Je({specialPrice: a, minimumAmount: r, maximumAmount: n, currency: t, locale: s, size: i, sale: l}) {
    const d = I({
        from: "Dropin.PriceRange.from.label",
        to: "Dropin.PriceRange.to.label",
        asLowAs: "Dropin.PriceRange.asLowAs.label"
    });
    return e(R, {
        children: [e("span", {
            className: o(["dropin-price-range__as-low-as", `dropin-price-range__as-low-as--${i}`]),
            children: d.asLowAs
        }), a ? e("div", {
            children: [e(A, {
                amount: n,
                currency: t,
                locale: s,
                size: i,
                variant: "strikethrough"
            }), e(A, {
                amount: a,
                currency: t,
                locale: s,
                size: i,
                className: "dropin-price-range__special",
                sale: !!a && l
            })]
        }) : e(A, {amount: r, currency: t, locale: s, size: i})]
    })
}

const Tt = ({
                className: a,
                categories: r,
                separator: n,
                ...t
            }) => e(R, {
    children: (r == null ? void 0 : r.length) > 1 && e("nav", {
        role: "navigation", ...t,
        className: o(["dropin-breadcrumbs__container", a]),
        children: e("ul", {
            className: "dropin-breadcrumbs__items",
            children: r == null ? void 0 : r.map((s, i) => e("li", {
                className: o(["dropin-breadcrumbs__item", ["dropin-breadcrumbs__item--last", i === r.length - 1]]),
                children: [e(y, {
                    node: s,
                    className: "dropin-breadcrumbs__link"
                }), !n && i !== r.length - 1 && e("span", {
                    className: "dropin-breadcrumbs__separator--default",
                    children: [" ", "/", " "]
                }), n && i !== r.length - 1 && e(y, {node: n, className: "dropin-breadcrumbs__separator--icon"})]
            }, i))
        })
    })
}), Lt = ({className: a, variant: r, icon: n, message: t, onDismiss: s, action: i, ...l}) => {
    const d = I({dismiss: "Dropin.InlineAlert.dismissLabel"});
    return e("div", {
        ...l,
        className: o([a, "dropin-alert-banner", `dropin-alert-banner--${r}`]),
        children: [e("div", {
            className: "dropin-alert-banner__content",
            children: [n && e(y, {
                node: n,
                "aria-hidden": "true",
                className: "dropin-alert-banner__icon"
            }), e(y, {node: t, className: o(["dropin-alert-banner__message"])})]
        }), e("div", {
            className: "dropin-alert-banner__actions",
            children: [i && e(V, {
                variant: "tertiary",
                className: "dropin-alert-banner__action",
                onClick: i.onClick,
                "aria-label": i.label,
                children: i.label
            }), e(V, {
                icon: e(T, {source: j, size: "24", stroke: "2"}),
                className: "dropin-alert-banner__dismiss-button",
                variant: "primary",
                onClick: s,
                "aria-label": d.dismiss
            })]
        })]
    })
}, Pt = ({
             className: a,
             icon: r,
             heading: n,
             headingLevel: t = 2,
             message: s,
             action: i,
             variant: l = "secondary",
             ...d
         }) => {
    const _ = t >= 1 && t <= 6 ? `h${t}` : "h2";
    return e("div", {
        ...d,
        className: o(["dropin-illustrated-message", a]),
        children: e(Ge, {
            variant: l,
            children: [r && e(y, {
                node: r,
                "aria-hidden": "true",
                size: "80",
                className: "dropin-illustrated-message__icon"
            }), n && e(_, {className: "dropin-illustrated-message__heading", children: n}), s && e(y, {
                node: s,
                className: "dropin-illustrated-message__message"
            }), i && e(y, {node: i, className: "dropin-illustrated-message__action"})]
        })
    })
}, Ot = ({
             className: a,
             label: r,
             name: n,
             value: t,
             selected: s = !0,
             onChange: i,
             icon: l,
             busy: d = !1,
             children: _,
             ...m
         }) => e("div", {
    ...m,
    className: o(["dropin-toggle-button", a, ["dropin-toggle-button__selected", s]]),
    children: e("label", {
        className: "dropin-toggle-button__actionButton",
        children: [e(Me, {
            label: "",
            name: n,
            value: t,
            checked: s,
            onChange: () => i && i(t),
            "aria-label": r,
            busy: d,
            className: o([a, "dropin-toggle-button__radioButton"])
        }), e("span", {
            className: "dropin-toggle-button__content",
            children: [l && e(l.type, {...l == null ? void 0 : l.props, className: "dropin-toggle-button__icon"}), r]
        })]
    })
}), Ct = ({title: a = null, size: r = "medium", cta: n, divider: t = !0, className: s, ...i}) => a ? e("div", {
    ...i,
    className: o(["dropin-header-container", s]),
    "data-testid": "dropin-header-container",
    children: [e("span", {
        className: o(["dropin-header-container__title", ["dropin-header-container__title--medium", r === "medium"], ["dropin-header-container__title--large", r === "large"]]),
        children: a
    }), n ? e(y, {
        node: n,
        className: "dropin-header-container__actions"
    }) : null, t ? e(_e, {className: o(["dropin-header-container__divider", ["dropin-header-container__divider--medium", r === "medium"], ["dropin-header-container__divider--large", r === "large"]])}) : null]
}) : null, At = ({label: a, className: r, ...n}) => a ? e("div", {
    ...n,
    className: o(["dropin-tag-container", r]),
    "data-testid": "dropin-tag-container",
    children: e("span", {className: "dropin-tag-container__label", children: a})
}) : null, Vt = ({className: a, children: r, maxColumns: n, emptyGridContent: t, ...s}) => {
    const i = !!r && (Array.isArray(r) ? r.length > 0 : !0),
        l = i ? {gridTemplateColumns: `repeat(${n}, 1fr)`} : void 0;
    return e("div", {
        ...s,
        className: o(["dropin-content-grid", a]),
        tabindex: 0,
        children: e("div", {
            "data-testid": "content-grid-content",
            className: o(["dropin-content-grid__content", ["dropin-content-grid__dynamic-columns-content", !n], ["dropin-content-grid__content--empty", !i]]),
            style: l,
            children: i ? r : t
        })
    })
}, Rt = ({totalPages: a = 10, currentPage: r = 1, onChange: n, className: t, ...s}) => {
    const i = I({
        backwardButton: "Dropin.Pagination.backwardButton.ariaLabel",
        forwardButton: "Dropin.Pagination.forwardButton.ariaLabel"
    }), l = C(() => {
        const p = Math.min(r + 1, a);
        n == null || n(p)
    }, [r, n, a]), d = C(() => {
        const p = Math.max(r - 1, 1);
        n == null || n(p)
    }, [r, n]), _ = C(p => {
        ve(p) && (n == null || n(p))
    }, [n]), m = C((p, c) => {
        let u = [];
        const b = (f, v) => {
            for (let k = f; k <= v; k++) u.push({page: k, isActive: k === p, label: k})
        };
        return c <= 5 ? b(1, c) : p <= 2 ? (b(1, 2), u.push({
            page: "ellipsis",
            isActive: !1,
            label: "..."
        }), b(c - 1, c)) : p >= c - 3 ? b(c - 4, c) : (b(p - 1, p), u.push({
            page: "ellipsis",
            isActive: !1,
            label: "..."
        }), b(c - 1, c)), u
    }, []), h = q(() => m(r, a), [m, r, a]);
    return e("div", {
        ...s,
        className: o(["dropin-pagination", t]),
        children: [e("button", {
            type: "button",
            "data-testid": "prev-button",
            "aria-label": i.backwardButton,
            disabled: r === 1,
            onClick: d,
            className: o(["dropin-pagination-arrow", "dropin-pagination-arrow--backward"]),
            children: e(T, {size: "24", source: J})
        }), e("ul", {
            className: "dropin-pagination_list",
            children: h.map((p, c) => e("li", {
                "data-testid": `dropin-pagination_list-item--${p.page}`,
                className: o(["dropin-pagination_list-item", `dropin-pagination_list-item--${p.page}`, ["dropin-pagination_list-item--active", p.isActive]]),
                children: e("button", {
                    type: "button",
                    "data-testid": `set-page-button-${p.page}`,
                    onClick: () => _(p.page),
                    children: p.label
                })
            }, `${p.page}_${c}`))
        }), e("button", {
            type: "button",
            "data-testid": "next-button",
            "aria-label": i.forwardButton,
            disabled: r === a,
            onClick: l,
            className: o(["dropin-pagination-arrow", "dropin-pagination-arrow--forward"]),
            children: e(T, {size: "24", source: J})
        })]
    })
};
export {
    xt as Accordion,
    Ue as AccordionSection,
    vt as ActionButton,
    gt as ActionButtonGroup,
    Lt as AlertBanner,
    Tt as Breadcrumbs,
    V as Button,
    Ge as Card,
    Et as CartItem,
    je as CartItemSkeleton,
    $t as CartList,
    Nt as Checkbox,
    wt as ColorSwatch,
    Vt as ContentGrid,
    _e as Divider,
    me as Field,
    Ct as Header,
    T as Icon,
    Pt as IllustratedMessage,
    qe as Image,
    yt as ImageSwatch,
    Dt as InLineAlert,
    Fe as Incrementer,
    pe as Input,
    ht as InputDate,
    bt as InputPassword,
    It as Modal,
    Rt as Pagination,
    We as Picker,
    A as Price,
    St as PriceRange,
    Ke as ProgressSpinner,
    Me as RadioButton,
    Ce as Skeleton,
    H as SkeletonRow,
    At as Tag,
    ft as TextArea,
    kt as TextSwatch,
    Ot as ToggleButton,
    ce as UIContext,
    Ae as UIProvider,
    ut as provider
};
