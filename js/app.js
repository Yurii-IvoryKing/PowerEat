/*! For license information please see app.min.js.LICENSE.txt */
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
        s = t.dataset.da.trim().split(","),
        i = {};
      (i.element = t),
        (i.parent = t.parentNode),
        (i.destination = document.querySelector(s[0].trim())),
        (i.breakpoint = s[1] ? s[1].trim() : "767"),
        (i.place = s[2] ? s[2].trim() : "last"),
        (i.index = this.indexInParent(i.parent, i.element)),
        this.оbjects.push(i);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, s) {
          return Array.prototype.indexOf.call(s, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const s = this.mediaQueries[t],
        i = String.prototype.split.call(s, ","),
        n = window.matchMedia(i[0]),
        r = i[1],
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
          const s = t[e];
          (s.index = this.indexInParent(s.parent, s.element)),
            this.moveTo(s.place, s.element, s.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const s = t[e];
          s.element.classList.contains(this.daClassname) &&
            this.moveBack(s.parent, s.element, s.index);
        }
    }),
    (e.prototype.moveTo = function (e, t, s) {
      t.classList.add(this.daClassname),
        "last" === e || e >= s.children.length
          ? s.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? s.children[e].insertAdjacentElement("beforebegin", t)
          : s.insertAdjacentElement("afterbegin", t);
    }),
    (e.prototype.moveBack = function (e, t, s) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[s]
          ? e.children[s].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (e.prototype.indexInParent = function (e, t) {
      const s = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(s, t);
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
          const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
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
          return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
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
        this._reopen || (this.previousActiveElement = document.activeElement),
        (this.targetOpen.element = document.querySelector(
          this.targetOpen.selector
        )),
        this.targetOpen.element)
      ) {
        if (
          this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
        ) {
          const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
              this.options.youtubeAttribute
            )}?rel=0&showinfo=0&autoplay=1`,
            t = document.createElement("iframe");
          t.setAttribute("allowfullscreen", "");
          const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
          t.setAttribute("allow", `${s}; encrypted-media`),
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
          this._reopen ? (this._reopen = !1) : o(),
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
          r &&
          (this.options.on.beforeClose(this),
          this.targetOpen.element.hasAttribute(this.options.youtubeAttribute) &&
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
            (document.body.classList.remove(this.options.classes.bodyActive),
            o(),
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
      document.querySelector(`[${this.options.attributeOpenButton}="${e}"]`) &&
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
        s = Array.prototype.slice.call(t),
        i = s.indexOf(document.activeElement);
      e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
        e.shiftKey || i !== s.length - 1 || (s[0].focus(), e.preventDefault());
    }
    _focusTrap() {
      const e = this.previousOpen.element.querySelectorAll(this._focusEl);
      !this.isOpen && this.lastFocusEl
        ? this.lastFocusEl.focus()
        : e[0].focus();
    }
    popupLogging(e) {
      this.options.logging && c(`[Попапос]: ${e}`);
    }
  }
  let s = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    i = (e, t = 500, s = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          s && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
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
    n = (e, t = 500) => (e.hidden ? i(e, t) : s(e, t)),
    r = !0,
    o = (e = 500) => {
      document.documentElement.classList.contains("lock") ? a(e) : l(e);
    },
    a = (e = 500) => {
      let t = document.querySelector("body");
      if (r) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (r = !1),
          setTimeout(function () {
            r = !0;
          }, e);
      }
    },
    l = (e = 500) => {
      let t = document.querySelector("body");
      if (r) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (r = !1),
          setTimeout(function () {
            r = !0;
          }, e);
      }
    };
  function c(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function d(e, t) {
    const s = Array.from(e).filter(function (e, s, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (s.length) {
      const e = [];
      s.forEach((s) => {
        const i = {},
          n = s.dataset[t].split(",");
        (i.value = n[0]),
          (i.type = n[1] ? n[1].trim() : "max"),
          (i.item = s),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = (function (e) {
        return e.filter(function (e, t, s) {
          return s.indexOf(e) === t;
        });
      })(i);
      const n = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const s = t.split(","),
              i = s[1],
              r = s[2],
              o = window.matchMedia(s[0]),
              a = e.filter(function (e) {
                if (e.value === i && e.type === r) return !0;
              });
            n.push({ itemsArray: a, matchMedia: o });
          }),
          n
        );
    }
  }
  let u = (e, t = !1, s = 500, i = 0) => {
    const n = document.querySelector(e);
    if (n) {
      let r = "",
        o = 0;
      t &&
        ((r = "header.header"), (o = document.querySelector(r).offsetHeight));
      let l = {
        speedAsDuration: !0,
        speed: s,
        header: r,
        offset: i,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (a(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(n, "", l);
      else {
        let e = n.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: o ? e - o : e, behavior: "smooth" });
      }
      c(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else c(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  class p {
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
      const s = this;
      let i = document.createElement("div");
      if (
        (i.classList.add(this.selectClasses.classSelect),
        e.parentNode.insertBefore(i, e),
        i.appendChild(e),
        (e.hidden = !0),
        t && (e.dataset.id = t),
        i.insertAdjacentHTML(
          "beforeend",
          `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
        ),
        this.selectBuild(e),
        this.getSelectPlaceholder(e) &&
          ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
          this.getSelectPlaceholder(e).label.show))
      ) {
        this.getSelectElement(
          i,
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
          s.selectChange(e);
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
        s = e.type;
      if (
        t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
        t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
      ) {
        const i = t.closest(".select")
            ? t.closest(".select")
            : document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ).dataset.selectId
                }"]`
              ),
          n = this.getSelectElement(i).originalSelect;
        if ("click" === s) {
          if (!n.disabled)
            if (
              t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
            ) {
              const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                ),
                s = document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                );
              this.optionAction(i, n, s);
            } else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectTitle)
              )
            )
              this.selectAction(i);
            else if (
              t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
            ) {
              const e = t.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              );
              this.optionAction(i, n, e);
            }
        } else
          "focusin" === s || "focusout" === s
            ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) &&
              ("focusin" === s
                ? i.classList.add(this.selectClasses.classSelectFocus)
                : i.classList.remove(this.selectClasses.classSelectFocus))
            : "keydown" === s && "Escape" === e.code && this.selectsСlose();
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
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement;
      s.classList.contains("_slide") ||
        (e.classList.toggle(this.selectClasses.classSelectOpen),
        n(s, t.dataset.speed));
    }
    setSelectTitleValue(e, t) {
      const s = this.getSelectElement(
          e,
          this.selectClasses.classSelectBody
        ).selectElement,
        i = this.getSelectElement(
          e,
          this.selectClasses.classSelectTitle
        ).selectElement;
      i && i.remove(),
        s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
    }
    getSelectTitleValue(e, t) {
      let s = this.getSelectedOptionsData(t, 2).html;
      if (
        (t.multiple &&
          t.hasAttribute("data-tags") &&
          ((s = this.getSelectedOptionsData(t)
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
            ((document.querySelector(t.dataset.tags).innerHTML = s),
            t.hasAttribute("data-search") && (s = !1))),
        (s = s.length ? s : t.dataset.placeholder),
        this.getSelectedOptionsData(t).values.length
          ? e.classList.add(this.selectClasses.classSelectActive)
          : e.classList.remove(this.selectClasses.classSelectActive),
        t.hasAttribute("data-search"))
      )
        return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
      {
        const e =
          this.getSelectedOptionsData(t).elements.length &&
          this.getSelectedOptionsData(t).elements[0].dataset.class
            ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
            : "";
        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
      }
    }
    getSelectElementContent(e) {
      const t = e.dataset.asset ? `${e.dataset.asset}` : "",
        s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
      let i = "";
      return (
        (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectData}">` : ""),
        (i += t ? s : ""),
        (i += t ? "</span>" : ""),
        (i += t ? `<span class="${this.selectClasses.classSelectText}">` : ""),
        (i += e.textContent),
        (i += t ? "</span>" : ""),
        (i += t ? "</span>" : ""),
        i
      );
    }
    getSelectPlaceholder(e) {
      const t = Array.from(e.options).find((e) => !e.value);
      if (t)
        return {
          value: t.textContent,
          show: t.hasAttribute("data-show"),
          label: { show: t.hasAttribute("data-label"), text: t.dataset.label },
        };
    }
    getSelectedOptionsData(e, t) {
      let s = [];
      return (
        e.multiple
          ? (s = Array.from(e.options)
              .filter((e) => e.value)
              .filter((e) => e.selected))
          : s.push(e.options[e.selectedIndex]),
        {
          elements: s.map((e) => e),
          values: s.filter((e) => e.value).map((e) => e.value),
          html: s.map((e) => this.getSelectElementContent(e)),
        }
      );
    }
    getOptions(e) {
      let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
        s = e.dataset.scroll ? `style="max-height:${e.dataset.scroll}px"` : "",
        i = Array.from(e.options);
      if (i.length > 0) {
        let n = "";
        return (
          ((this.getSelectPlaceholder(e) &&
            !this.getSelectPlaceholder(e).show) ||
            e.multiple) &&
            (i = i.filter((e) => e.value)),
          (n += t
            ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
            : ""),
          i.forEach((t) => {
            n += this.getOption(t, e);
          }),
          (n += t ? "</div>" : ""),
          n
        );
      }
    }
    getOption(e, t) {
      const s =
          e.selected && t.multiple
            ? ` ${this.selectClasses.classSelectOptionSelected}`
            : "",
        i = e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
        n = e.dataset.class ? ` ${e.dataset.class}` : "",
        r = !!e.dataset.href && e.dataset.href,
        o = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
      let a = "";
      return (
        (a += r
          ? `<a ${o} ${i} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
          : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
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
    optionAction(e, t, s) {
      if (t.multiple) {
        s.classList.toggle(this.selectClasses.classSelectOptionSelected);
        this.getSelectedOptionsData(t).elements.forEach((e) => {
          e.removeAttribute("selected");
        });
        e.querySelectorAll(
          this.getSelectClass(this.selectClasses.classSelectOptionSelected)
        ).forEach((e) => {
          t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
            "selected",
            "selected"
          );
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
          (s.hidden = !0)),
          (t.value = s.hasAttribute("data-value")
            ? s.dataset.value
            : s.textContent),
          this.selectAction(e);
      this.setSelectTitleValue(e, t), this.setSelectChange(t);
    }
    selectChange(e) {
      const t = e.target;
      this.selectBuild(t), this.setSelectChange(t);
    }
    setSelectChange(e) {
      if (
        (e.hasAttribute("data-validate") && f.validateInput(e),
        e.hasAttribute("data-submit") && e.value)
      ) {
        let t = document.createElement("button");
        (t.type = "submit"), e.closest("form").append(t), t.click(), t.remove();
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
        s = this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement,
        i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
        n = this;
      t.addEventListener("input", function () {
        i.forEach((e) => {
          e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
            ? (e.hidden = !1)
            : (e.hidden = !0);
        }),
          !0 === s.hidden && n.selectAction(e);
      });
    }
    selectCallback(e, t) {
      document.dispatchEvent(
        new CustomEvent("selectCallback", { detail: { select: t } })
      );
    }
    setLogging(e) {
      this.config.logging && c(`[select]: ${e}`);
    }
  }
  const h = { inputMaskModule: null, selectModule: null };
  let f = {
    getErrors(e) {
      let t = 0,
        s = e.querySelectorAll("*[data-required]");
      return (
        s.length &&
          s.forEach((e) => {
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
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
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
            const s = t[e];
            s.parentElement.classList.remove("_form-focus"),
              s.classList.remove("_form-focus"),
              f.removeError(s),
              (s.value = s.dataset.placeholder);
          }
          let s = e.querySelectorAll(".checkbox__input");
          if (s.length > 0)
            for (let e = 0; e < s.length; e++) {
              s[e].checked = !1;
            }
          if (h.selectModule) {
            let t = e.querySelectorAll(".select");
            if (t.length)
              for (let e = 0; e < t.length; e++) {
                const s = t[e].querySelector("select");
                h.selectModule.selectBuild(s);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  function g(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function m(e) {
    return e instanceof g(e).Element || e instanceof Element;
  }
  function v(e) {
    return e instanceof g(e).HTMLElement || e instanceof HTMLElement;
  }
  function b(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof g(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var y = Math.max,
    w = Math.min,
    C = Math.round;
  function S(e, t) {
    void 0 === t && (t = !1);
    var s = e.getBoundingClientRect(),
      i = 1,
      n = 1;
    if (v(e) && t) {
      var r = e.offsetHeight,
        o = e.offsetWidth;
      o > 0 && (i = C(s.width) / o || 1), r > 0 && (n = C(s.height) / r || 1);
    }
    return {
      width: s.width / i,
      height: s.height / n,
      top: s.top / n,
      right: s.right / i,
      bottom: s.bottom / n,
      left: s.left / i,
      x: s.left / i,
      y: s.top / n,
    };
  }
  function T(e) {
    var t = g(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
  }
  function x(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function E(e) {
    return ((m(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function O(e) {
    return S(E(e)).left + T(e).scrollLeft;
  }
  function L(e) {
    return g(e).getComputedStyle(e);
  }
  function A(e) {
    var t = L(e),
      s = t.overflow,
      i = t.overflowX,
      n = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(s + n + i);
  }
  function k(e, t, s) {
    void 0 === s && (s = !1);
    var i,
      n,
      r = v(t),
      o =
        v(t) &&
        (function (e) {
          var t = e.getBoundingClientRect(),
            s = C(t.width) / e.offsetWidth || 1,
            i = C(t.height) / e.offsetHeight || 1;
          return 1 !== s || 1 !== i;
        })(t),
      a = E(t),
      l = S(e, o),
      c = { scrollLeft: 0, scrollTop: 0 },
      d = { x: 0, y: 0 };
    return (
      (r || (!r && !s)) &&
        (("body" !== x(t) || A(a)) &&
          (c =
            (i = t) !== g(i) && v(i)
              ? { scrollLeft: (n = i).scrollLeft, scrollTop: n.scrollTop }
              : T(i)),
        v(t)
          ? (((d = S(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
          : a && (d.x = O(a))),
      {
        x: l.left + c.scrollLeft - d.x,
        y: l.top + c.scrollTop - d.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function I(e) {
    var t = S(e),
      s = e.offsetWidth,
      i = e.offsetHeight;
    return (
      Math.abs(t.width - s) <= 1 && (s = t.width),
      Math.abs(t.height - i) <= 1 && (i = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: s, height: i }
    );
  }
  function M(e) {
    return "html" === x(e)
      ? e
      : e.assignedSlot || e.parentNode || (b(e) ? e.host : null) || E(e);
  }
  function $(e) {
    return ["html", "body", "#document"].indexOf(x(e)) >= 0
      ? e.ownerDocument.body
      : v(e) && A(e)
      ? e
      : $(M(e));
  }
  function P(e, t) {
    var s;
    void 0 === t && (t = []);
    var i = $(e),
      n = i === (null == (s = e.ownerDocument) ? void 0 : s.body),
      r = g(i),
      o = n ? [r].concat(r.visualViewport || [], A(i) ? i : []) : i,
      a = t.concat(o);
    return n ? a : a.concat(P(M(o)));
  }
  function _(e) {
    return ["table", "td", "th"].indexOf(x(e)) >= 0;
  }
  function D(e) {
    return v(e) && "fixed" !== L(e).position ? e.offsetParent : null;
  }
  function z(e) {
    for (var t = g(e), s = D(e); s && _(s) && "static" === L(s).position; )
      s = D(s);
    return s &&
      ("html" === x(s) || ("body" === x(s) && "static" === L(s).position))
      ? t
      : s ||
          (function (e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              v(e) &&
              "fixed" === L(e).position
            )
              return null;
            for (var s = M(e); v(s) && ["html", "body"].indexOf(x(s)) < 0; ) {
              var i = L(s);
              if (
                "none" !== i.transform ||
                "none" !== i.perspective ||
                "paint" === i.contain ||
                -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                (t && "filter" === i.willChange) ||
                (t && i.filter && "none" !== i.filter)
              )
                return s;
              s = s.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  var B = "top",
    H = "bottom",
    G = "right",
    j = "left",
    q = "auto",
    N = [B, H, G, j],
    W = "start",
    V = "end",
    F = "viewport",
    X = "popper",
    R = N.reduce(function (e, t) {
      return e.concat([t + "-" + W, t + "-" + V]);
    }, []),
    Y = [].concat(N, [q]).reduce(function (e, t) {
      return e.concat([t, t + "-" + W, t + "-" + V]);
    }, []),
    U = [
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
  function K(e) {
    var t = new Map(),
      s = new Set(),
      i = [];
    function n(e) {
      s.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            if (!s.has(e)) {
              var i = t.get(e);
              i && n(i);
            }
          }),
        i.push(e);
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e);
      }),
      e.forEach(function (e) {
        s.has(e.name) || n(e);
      }),
      i
    );
  }
  var Z = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Q() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function J(e) {
    void 0 === e && (e = {});
    var t = e,
      s = t.defaultModifiers,
      i = void 0 === s ? [] : s,
      n = t.defaultOptions,
      r = void 0 === n ? Z : n;
    return function (e, t, s) {
      void 0 === s && (s = r);
      var n,
        o,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Z, r),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        d = {
          state: a,
          setOptions: function (s) {
            var n = "function" == typeof s ? s(a.options) : s;
            u(),
              (a.options = Object.assign({}, r, a.options, n)),
              (a.scrollParents = {
                reference: m(e)
                  ? P(e)
                  : e.contextElement
                  ? P(e.contextElement)
                  : [],
                popper: P(t),
              });
            var o = (function (e) {
              var t = K(e);
              return U.reduce(function (e, s) {
                return e.concat(
                  t.filter(function (e) {
                    return e.phase === s;
                  })
                );
              }, []);
            })(
              (function (e) {
                var t = e.reduce(function (e, t) {
                  var s = e[t.name];
                  return (
                    (e[t.name] = s
                      ? Object.assign({}, s, t, {
                          options: Object.assign({}, s.options, t.options),
                          data: Object.assign({}, s.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {});
                return Object.keys(t).map(function (e) {
                  return t[e];
                });
              })([].concat(i, a.options.modifiers))
            );
            return (
              (a.orderedModifiers = o.filter(function (e) {
                return e.enabled;
              })),
              a.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  s = e.options,
                  i = void 0 === s ? {} : s,
                  n = e.effect;
                if ("function" == typeof n) {
                  var r = n({ state: a, name: t, instance: d, options: i }),
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
                s = e.popper;
              if (Q(t, s)) {
                (a.rects = {
                  reference: k(t, z(s), "fixed" === a.options.strategy),
                  popper: I(s),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (e) {
                    return (a.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var i = 0; i < a.orderedModifiers.length; i++)
                  if (!0 !== a.reset) {
                    var n = a.orderedModifiers[i],
                      r = n.fn,
                      o = n.options,
                      l = void 0 === o ? {} : o,
                      u = n.name;
                    "function" == typeof r &&
                      (a =
                        r({ state: a, options: l, name: u, instance: d }) || a);
                  } else (a.reset = !1), (i = -1);
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
      if (!Q(e, t)) return d;
      function u() {
        l.forEach(function (e) {
          return e();
        }),
          (l = []);
      }
      return (
        d.setOptions(s).then(function (e) {
          !c && s.onFirstUpdate && s.onFirstUpdate(e);
        }),
        d
      );
    };
  }
  var ee = { passive: !0 };
  const te = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var t = e.state,
        s = e.instance,
        i = e.options,
        n = i.scroll,
        r = void 0 === n || n,
        o = i.resize,
        a = void 0 === o || o,
        l = g(t.elements.popper),
        c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return (
        r &&
          c.forEach(function (e) {
            e.addEventListener("scroll", s.update, ee);
          }),
        a && l.addEventListener("resize", s.update, ee),
        function () {
          r &&
            c.forEach(function (e) {
              e.removeEventListener("scroll", s.update, ee);
            }),
            a && l.removeEventListener("resize", s.update, ee);
        }
      );
    },
    data: {},
  };
  function se(e) {
    return e.split("-")[0];
  }
  function ie(e) {
    return e.split("-")[1];
  }
  function ne(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function re(e) {
    var t,
      s = e.reference,
      i = e.element,
      n = e.placement,
      r = n ? se(n) : null,
      o = n ? ie(n) : null,
      a = s.x + s.width / 2 - i.width / 2,
      l = s.y + s.height / 2 - i.height / 2;
    switch (r) {
      case B:
        t = { x: a, y: s.y - i.height };
        break;
      case H:
        t = { x: a, y: s.y + s.height };
        break;
      case G:
        t = { x: s.x + s.width, y: l };
        break;
      case j:
        t = { x: s.x - i.width, y: l };
        break;
      default:
        t = { x: s.x, y: s.y };
    }
    var c = r ? ne(r) : null;
    if (null != c) {
      var d = "y" === c ? "height" : "width";
      switch (o) {
        case W:
          t[c] = t[c] - (s[d] / 2 - i[d] / 2);
          break;
        case V:
          t[c] = t[c] + (s[d] / 2 - i[d] / 2);
      }
    }
    return t;
  }
  var oe = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function ae(e) {
    var t,
      s = e.popper,
      i = e.popperRect,
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
                s = e.y,
                i = window.devicePixelRatio || 1;
              return { x: C(t * i) / i || 0, y: C(s * i) / i || 0 };
            })(o)
          : "function" == typeof d
          ? d(o)
          : o,
      h = p.x,
      f = void 0 === h ? 0 : h,
      m = p.y,
      v = void 0 === m ? 0 : m,
      b = o.hasOwnProperty("x"),
      y = o.hasOwnProperty("y"),
      w = j,
      S = B,
      T = window;
    if (c) {
      var x = z(s),
        O = "clientHeight",
        A = "clientWidth";
      if (
        (x === g(s) &&
          "static" !== L((x = E(s))).position &&
          "absolute" === a &&
          ((O = "scrollHeight"), (A = "scrollWidth")),
        (x = x),
        n === B || ((n === j || n === G) && r === V))
      )
        (S = H),
          (v -=
            (u && T.visualViewport ? T.visualViewport.height : x[O]) -
            i.height),
          (v *= l ? 1 : -1);
      if (n === j || ((n === B || n === H) && r === V))
        (w = G),
          (f -=
            (u && T.visualViewport ? T.visualViewport.width : x[A]) - i.width),
          (f *= l ? 1 : -1);
    }
    var k,
      I = Object.assign({ position: a }, c && oe);
    return l
      ? Object.assign(
          {},
          I,
          (((k = {})[S] = y ? "0" : ""),
          (k[w] = b ? "0" : ""),
          (k.transform =
            (T.devicePixelRatio || 1) <= 1
              ? "translate(" + f + "px, " + v + "px)"
              : "translate3d(" + f + "px, " + v + "px, 0)"),
          k)
        )
      : Object.assign(
          {},
          I,
          (((t = {})[S] = y ? v + "px" : ""),
          (t[w] = b ? f + "px" : ""),
          (t.transform = ""),
          t)
        );
  }
  const le = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var s = t.styles[e] || {},
          i = t.attributes[e] || {},
          n = t.elements[e];
        v(n) &&
          x(n) &&
          (Object.assign(n.style, s),
          Object.keys(i).forEach(function (e) {
            var t = i[e];
            !1 === t
              ? n.removeAttribute(e)
              : n.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var t = e.state,
        s = {
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
        Object.assign(t.elements.popper.style, s.popper),
        (t.styles = s),
        t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            var i = t.elements[e],
              n = t.attributes[e] || {},
              r = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : s[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            v(i) &&
              x(i) &&
              (Object.assign(i.style, r),
              Object.keys(n).forEach(function (e) {
                i.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  const ce = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var t = e.state,
        s = e.options,
        i = e.name,
        n = s.offset,
        r = void 0 === n ? [0, 0] : n,
        o = Y.reduce(function (e, s) {
          return (
            (e[s] = (function (e, t, s) {
              var i = se(e),
                n = [j, B].indexOf(i) >= 0 ? -1 : 1,
                r =
                  "function" == typeof s
                    ? s(Object.assign({}, t, { placement: e }))
                    : s,
                o = r[0],
                a = r[1];
              return (
                (o = o || 0),
                (a = (a || 0) * n),
                [j, G].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
              );
            })(s, t.rects, r)),
            e
          );
        }, {}),
        a = o[t.placement],
        l = a.x,
        c = a.y;
      null != t.modifiersData.popperOffsets &&
        ((t.modifiersData.popperOffsets.x += l),
        (t.modifiersData.popperOffsets.y += c)),
        (t.modifiersData[i] = o);
    },
  };
  var de = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ue(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return de[e];
    });
  }
  var pe = { start: "end", end: "start" };
  function he(e) {
    return e.replace(/start|end/g, function (e) {
      return pe[e];
    });
  }
  function fe(e, t) {
    var s = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (s && b(s)) {
      var i = t;
      do {
        if (i && e.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function ge(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function me(e, t) {
    return t === F
      ? ge(
          (function (e) {
            var t = g(e),
              s = E(e),
              i = t.visualViewport,
              n = s.clientWidth,
              r = s.clientHeight,
              o = 0,
              a = 0;
            return (
              i &&
                ((n = i.width),
                (r = i.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((o = i.offsetLeft), (a = i.offsetTop))),
              { width: n, height: r, x: o + O(e), y: a }
            );
          })(e)
        )
      : m(t)
      ? (function (e) {
          var t = S(e);
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
      : ge(
          (function (e) {
            var t,
              s = E(e),
              i = T(e),
              n = null == (t = e.ownerDocument) ? void 0 : t.body,
              r = y(
                s.scrollWidth,
                s.clientWidth,
                n ? n.scrollWidth : 0,
                n ? n.clientWidth : 0
              ),
              o = y(
                s.scrollHeight,
                s.clientHeight,
                n ? n.scrollHeight : 0,
                n ? n.clientHeight : 0
              ),
              a = -i.scrollLeft + O(e),
              l = -i.scrollTop;
            return (
              "rtl" === L(n || s).direction &&
                (a += y(s.clientWidth, n ? n.clientWidth : 0) - r),
              { width: r, height: o, x: a, y: l }
            );
          })(E(e))
        );
  }
  function ve(e, t, s) {
    var i =
        "clippingParents" === t
          ? (function (e) {
              var t = P(M(e)),
                s = ["absolute", "fixed"].indexOf(L(e).position) >= 0,
                i = s && v(e) ? z(e) : e;
              return m(i)
                ? t.filter(function (e) {
                    return (
                      m(e) &&
                      fe(e, i) &&
                      "body" !== x(e) &&
                      (!s || "static" !== L(e).position)
                    );
                  })
                : [];
            })(e)
          : [].concat(t),
      n = [].concat(i, [s]),
      r = n[0],
      o = n.reduce(function (t, s) {
        var i = me(e, s);
        return (
          (t.top = y(i.top, t.top)),
          (t.right = w(i.right, t.right)),
          (t.bottom = w(i.bottom, t.bottom)),
          (t.left = y(i.left, t.left)),
          t
        );
      }, me(e, r));
    return (
      (o.width = o.right - o.left),
      (o.height = o.bottom - o.top),
      (o.x = o.left),
      (o.y = o.top),
      o
    );
  }
  function be(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function ye(e, t) {
    return t.reduce(function (t, s) {
      return (t[s] = e), t;
    }, {});
  }
  function we(e, t) {
    void 0 === t && (t = {});
    var s = t,
      i = s.placement,
      n = void 0 === i ? e.placement : i,
      r = s.boundary,
      o = void 0 === r ? "clippingParents" : r,
      a = s.rootBoundary,
      l = void 0 === a ? F : a,
      c = s.elementContext,
      d = void 0 === c ? X : c,
      u = s.altBoundary,
      p = void 0 !== u && u,
      h = s.padding,
      f = void 0 === h ? 0 : h,
      g = be("number" != typeof f ? f : ye(f, N)),
      v = d === X ? "reference" : X,
      b = e.rects.popper,
      y = e.elements[p ? v : d],
      w = ve(m(y) ? y : y.contextElement || E(e.elements.popper), o, l),
      C = S(e.elements.reference),
      T = re({ reference: C, element: b, strategy: "absolute", placement: n }),
      x = ge(Object.assign({}, b, T)),
      O = d === X ? x : C,
      L = {
        top: w.top - O.top + g.top,
        bottom: O.bottom - w.bottom + g.bottom,
        left: w.left - O.left + g.left,
        right: O.right - w.right + g.right,
      },
      A = e.modifiersData.offset;
    if (d === X && A) {
      var k = A[n];
      Object.keys(L).forEach(function (e) {
        var t = [G, H].indexOf(e) >= 0 ? 1 : -1,
          s = [B, H].indexOf(e) >= 0 ? "y" : "x";
        L[e] += k[s] * t;
      });
    }
    return L;
  }
  function Ce(e, t, s) {
    return y(e, w(t, s));
  }
  const Se = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        s = e.options,
        i = e.name,
        n = s.mainAxis,
        r = void 0 === n || n,
        o = s.altAxis,
        a = void 0 !== o && o,
        l = s.boundary,
        c = s.rootBoundary,
        d = s.altBoundary,
        u = s.padding,
        p = s.tether,
        h = void 0 === p || p,
        f = s.tetherOffset,
        g = void 0 === f ? 0 : f,
        m = we(t, { boundary: l, rootBoundary: c, padding: u, altBoundary: d }),
        v = se(t.placement),
        b = ie(t.placement),
        C = !b,
        S = ne(v),
        T = "x" === S ? "y" : "x",
        x = t.modifiersData.popperOffsets,
        E = t.rects.reference,
        O = t.rects.popper,
        L =
          "function" == typeof g
            ? g(Object.assign({}, t.rects, { placement: t.placement }))
            : g,
        A =
          "number" == typeof L
            ? { mainAxis: L, altAxis: L }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
        k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        M = { x: 0, y: 0 };
      if (x) {
        if (r) {
          var $,
            P = "y" === S ? B : j,
            _ = "y" === S ? H : G,
            D = "y" === S ? "height" : "width",
            q = x[S],
            N = q + m[P],
            V = q - m[_],
            F = h ? -O[D] / 2 : 0,
            X = b === W ? E[D] : O[D],
            R = b === W ? -O[D] : -E[D],
            Y = t.elements.arrow,
            U = h && Y ? I(Y) : { width: 0, height: 0 },
            K = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            Z = K[P],
            Q = K[_],
            J = Ce(0, E[D], U[D]),
            ee = C ? E[D] / 2 - F - J - Z - A.mainAxis : X - J - Z - A.mainAxis,
            te = C
              ? -E[D] / 2 + F + J + Q + A.mainAxis
              : R + J + Q + A.mainAxis,
            re = t.elements.arrow && z(t.elements.arrow),
            oe = re ? ("y" === S ? re.clientTop || 0 : re.clientLeft || 0) : 0,
            ae = null != ($ = null == k ? void 0 : k[S]) ? $ : 0,
            le = q + te - ae,
            ce = Ce(h ? w(N, q + ee - ae - oe) : N, q, h ? y(V, le) : V);
          (x[S] = ce), (M[S] = ce - q);
        }
        if (a) {
          var de,
            ue = "x" === S ? B : j,
            pe = "x" === S ? H : G,
            he = x[T],
            fe = "y" === T ? "height" : "width",
            ge = he + m[ue],
            me = he - m[pe],
            ve = -1 !== [B, j].indexOf(v),
            be = null != (de = null == k ? void 0 : k[T]) ? de : 0,
            ye = ve ? ge : he - E[fe] - O[fe] - be + A.altAxis,
            Se = ve ? he + E[fe] + O[fe] - be - A.altAxis : me,
            Te =
              h && ve
                ? (function (e, t, s) {
                    var i = Ce(e, t, s);
                    return i > s ? s : i;
                  })(ye, he, Se)
                : Ce(h ? ye : ge, he, h ? Se : me);
          (x[T] = Te), (M[T] = Te - he);
        }
        t.modifiersData[i] = M;
      }
    },
    requiresIfExists: ["offset"],
  };
  const Te = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        s = e.state,
        i = e.name,
        n = e.options,
        r = s.elements.arrow,
        o = s.modifiersData.popperOffsets,
        a = se(s.placement),
        l = ne(a),
        c = [j, G].indexOf(a) >= 0 ? "height" : "width";
      if (r && o) {
        var d = (function (e, t) {
            return be(
              "number" !=
                typeof (e =
                  "function" == typeof e
                    ? e(Object.assign({}, t.rects, { placement: t.placement }))
                    : e)
                ? e
                : ye(e, N)
            );
          })(n.padding, s),
          u = I(r),
          p = "y" === l ? B : j,
          h = "y" === l ? H : G,
          f =
            s.rects.reference[c] +
            s.rects.reference[l] -
            o[l] -
            s.rects.popper[c],
          g = o[l] - s.rects.reference[l],
          m = z(r),
          v = m ? ("y" === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
          b = f / 2 - g / 2,
          y = d[p],
          w = v - u[c] - d[h],
          C = v / 2 - u[c] / 2 + b,
          S = Ce(y, C, w),
          T = l;
        s.modifiersData[i] = (((t = {})[T] = S), (t.centerOffset = S - C), t);
      }
    },
    effect: function (e) {
      var t = e.state,
        s = e.options.element,
        i = void 0 === s ? "[data-popper-arrow]" : s;
      null != i &&
        ("string" != typeof i || (i = t.elements.popper.querySelector(i))) &&
        fe(t.elements.popper, i) &&
        (t.elements.arrow = i);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function xe(e, t, s) {
    return (
      void 0 === s && (s = { x: 0, y: 0 }),
      {
        top: e.top - t.height - s.y,
        right: e.right - t.width + s.x,
        bottom: e.bottom - t.height + s.y,
        left: e.left - t.width - s.x,
      }
    );
  }
  function Ee(e) {
    return [B, G, H, j].some(function (t) {
      return e[t] >= 0;
    });
  }
  var Oe = J({
      defaultModifiers: [
        te,
        {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              s = e.name;
            t.modifiersData[s] = re({
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
              s = e.options,
              i = s.gpuAcceleration,
              n = void 0 === i || i,
              r = s.adaptive,
              o = void 0 === r || r,
              a = s.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: se(t.placement),
                variation: ie(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: n,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                ae(
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
                  ae(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        },
        le,
        ce,
        {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              s = e.options,
              i = e.name;
            if (!t.modifiersData[i]._skip) {
              for (
                var n = s.mainAxis,
                  r = void 0 === n || n,
                  o = s.altAxis,
                  a = void 0 === o || o,
                  l = s.fallbackPlacements,
                  c = s.padding,
                  d = s.boundary,
                  u = s.rootBoundary,
                  p = s.altBoundary,
                  h = s.flipVariations,
                  f = void 0 === h || h,
                  g = s.allowedAutoPlacements,
                  m = t.options.placement,
                  v = se(m),
                  b =
                    l ||
                    (v === m || !f
                      ? [ue(m)]
                      : (function (e) {
                          if (se(e) === q) return [];
                          var t = ue(e);
                          return [he(e), t, he(t)];
                        })(m)),
                  y = [m].concat(b).reduce(function (e, s) {
                    return e.concat(
                      se(s) === q
                        ? (function (e, t) {
                            void 0 === t && (t = {});
                            var s = t,
                              i = s.placement,
                              n = s.boundary,
                              r = s.rootBoundary,
                              o = s.padding,
                              a = s.flipVariations,
                              l = s.allowedAutoPlacements,
                              c = void 0 === l ? Y : l,
                              d = ie(i),
                              u = d
                                ? a
                                  ? R
                                  : R.filter(function (e) {
                                      return ie(e) === d;
                                    })
                                : N,
                              p = u.filter(function (e) {
                                return c.indexOf(e) >= 0;
                              });
                            0 === p.length && (p = u);
                            var h = p.reduce(function (t, s) {
                              return (
                                (t[s] = we(e, {
                                  placement: s,
                                  boundary: n,
                                  rootBoundary: r,
                                  padding: o,
                                })[se(s)]),
                                t
                              );
                            }, {});
                            return Object.keys(h).sort(function (e, t) {
                              return h[e] - h[t];
                            });
                          })(t, {
                            placement: s,
                            boundary: d,
                            rootBoundary: u,
                            padding: c,
                            flipVariations: f,
                            allowedAutoPlacements: g,
                          })
                        : s
                    );
                  }, []),
                  w = t.rects.reference,
                  C = t.rects.popper,
                  S = new Map(),
                  T = !0,
                  x = y[0],
                  E = 0;
                E < y.length;
                E++
              ) {
                var O = y[E],
                  L = se(O),
                  A = ie(O) === W,
                  k = [B, H].indexOf(L) >= 0,
                  I = k ? "width" : "height",
                  M = we(t, {
                    placement: O,
                    boundary: d,
                    rootBoundary: u,
                    altBoundary: p,
                    padding: c,
                  }),
                  $ = k ? (A ? G : j) : A ? H : B;
                w[I] > C[I] && ($ = ue($));
                var P = ue($),
                  _ = [];
                if (
                  (r && _.push(M[L] <= 0),
                  a && _.push(M[$] <= 0, M[P] <= 0),
                  _.every(function (e) {
                    return e;
                  }))
                ) {
                  (x = O), (T = !1);
                  break;
                }
                S.set(O, _);
              }
              if (T)
                for (
                  var D = function (e) {
                      var t = y.find(function (t) {
                        var s = S.get(t);
                        if (s)
                          return s.slice(0, e).every(function (e) {
                            return e;
                          });
                      });
                      if (t) return (x = t), "break";
                    },
                    z = f ? 3 : 1;
                  z > 0;
                  z--
                ) {
                  if ("break" === D(z)) break;
                }
              t.placement !== x &&
                ((t.modifiersData[i]._skip = !0),
                (t.placement = x),
                (t.reset = !0));
            }
          },
          requiresIfExists: ["offset"],
          data: { _skip: !1 },
        },
        Se,
        Te,
        {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (e) {
            var t = e.state,
              s = e.name,
              i = t.rects.reference,
              n = t.rects.popper,
              r = t.modifiersData.preventOverflow,
              o = we(t, { elementContext: "reference" }),
              a = we(t, { altBoundary: !0 }),
              l = xe(o, i),
              c = xe(a, n, r),
              d = Ee(l),
              u = Ee(c);
            (t.modifiersData[s] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: c,
              isReferenceHidden: d,
              hasPopperEscaped: u,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": d,
                "data-popper-escaped": u,
              }));
          },
        },
      ],
    }),
    Le = "tippy-content",
    Ae = "tippy-backdrop",
    ke = "tippy-arrow",
    Ie = "tippy-svg-arrow",
    Me = { passive: !0, capture: !0 },
    $e = function () {
      return document.body;
    };
  function Pe(e, t, s) {
    if (Array.isArray(e)) {
      var i = e[t];
      return null == i ? (Array.isArray(s) ? s[t] : s) : i;
    }
    return e;
  }
  function _e(e, t) {
    var s = {}.toString.call(e);
    return 0 === s.indexOf("[object") && s.indexOf(t + "]") > -1;
  }
  function De(e, t) {
    return "function" == typeof e ? e.apply(void 0, t) : e;
  }
  function ze(e, t) {
    return 0 === t
      ? e
      : function (i) {
          clearTimeout(s),
            (s = setTimeout(function () {
              e(i);
            }, t));
        };
    var s;
  }
  function Be(e) {
    return [].concat(e);
  }
  function He(e, t) {
    -1 === e.indexOf(t) && e.push(t);
  }
  function Ge(e) {
    return e.split("-")[0];
  }
  function je(e) {
    return [].slice.call(e);
  }
  function qe(e) {
    return Object.keys(e).reduce(function (t, s) {
      return void 0 !== e[s] && (t[s] = e[s]), t;
    }, {});
  }
  function Ne() {
    return document.createElement("div");
  }
  function We(e) {
    return ["Element", "Fragment"].some(function (t) {
      return _e(e, t);
    });
  }
  function Ve(e) {
    return _e(e, "MouseEvent");
  }
  function Fe(e) {
    return !(!e || !e._tippy || e._tippy.reference !== e);
  }
  function Xe(e) {
    return We(e)
      ? [e]
      : (function (e) {
          return _e(e, "NodeList");
        })(e)
      ? je(e)
      : Array.isArray(e)
      ? e
      : je(document.querySelectorAll(e));
  }
  function Re(e, t) {
    e.forEach(function (e) {
      e && (e.style.transitionDuration = t + "ms");
    });
  }
  function Ye(e, t) {
    e.forEach(function (e) {
      e && e.setAttribute("data-state", t);
    });
  }
  function Ue(e) {
    var t,
      s = Be(e)[0];
    return null != s && null != (t = s.ownerDocument) && t.body
      ? s.ownerDocument
      : document;
  }
  function Ke(e, t, s) {
    var i = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
      e[i](t, s);
    });
  }
  function Ze(e, t) {
    for (var s = t; s; ) {
      var i;
      if (e.contains(s)) return !0;
      s =
        null == s.getRootNode || null == (i = s.getRootNode())
          ? void 0
          : i.host;
    }
    return !1;
  }
  var Qe = { isTouch: !1 },
    Je = 0;
  function et() {
    Qe.isTouch ||
      ((Qe.isTouch = !0),
      window.performance && document.addEventListener("mousemove", tt));
  }
  function tt() {
    var e = performance.now();
    e - Je < 20 &&
      ((Qe.isTouch = !1), document.removeEventListener("mousemove", tt)),
      (Je = e);
  }
  function st() {
    var e = document.activeElement;
    if (Fe(e)) {
      var t = e._tippy;
      e.blur && !t.state.isVisible && e.blur();
    }
  }
  var it =
    !!("undefined" != typeof window && "undefined" != typeof document) &&
    !!window.msCrypto;
  var nt = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    rt = Object.assign(
      {
        appendTo: $e,
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
      nt,
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
    ot = Object.keys(rt);
  function at(e) {
    var t = (e.plugins || []).reduce(function (t, s) {
      var i,
        n = s.name,
        r = s.defaultValue;
      n && (t[n] = void 0 !== e[n] ? e[n] : null != (i = rt[n]) ? i : r);
      return t;
    }, {});
    return Object.assign({}, e, t);
  }
  function lt(e, t) {
    var s = Object.assign(
      {},
      t,
      { content: De(t.content, [e]) },
      t.ignoreAttributes
        ? {}
        : (function (e, t) {
            return (
              t ? Object.keys(at(Object.assign({}, rt, { plugins: t }))) : ot
            ).reduce(function (t, s) {
              var i = (e.getAttribute("data-tippy-" + s) || "").trim();
              if (!i) return t;
              if ("content" === s) t[s] = i;
              else
                try {
                  t[s] = JSON.parse(i);
                } catch (e) {
                  t[s] = i;
                }
              return t;
            }, {});
          })(e, t.plugins)
    );
    return (
      (s.aria = Object.assign({}, rt.aria, s.aria)),
      (s.aria = {
        expanded: "auto" === s.aria.expanded ? t.interactive : s.aria.expanded,
        content:
          "auto" === s.aria.content
            ? t.interactive
              ? null
              : "describedby"
            : s.aria.content,
      }),
      s
    );
  }
  function ct(e, t) {
    e.innerHTML = t;
  }
  function dt(e) {
    var t = Ne();
    return (
      !0 === e
        ? (t.className = ke)
        : ((t.className = Ie), We(e) ? t.appendChild(e) : ct(t, e)),
      t
    );
  }
  function ut(e, t) {
    We(t.content)
      ? (ct(e, ""), e.appendChild(t.content))
      : "function" != typeof t.content &&
        (t.allowHTML ? ct(e, t.content) : (e.textContent = t.content));
  }
  function pt(e) {
    var t = e.firstElementChild,
      s = je(t.children);
    return {
      box: t,
      content: s.find(function (e) {
        return e.classList.contains(Le);
      }),
      arrow: s.find(function (e) {
        return e.classList.contains(ke) || e.classList.contains(Ie);
      }),
      backdrop: s.find(function (e) {
        return e.classList.contains(Ae);
      }),
    };
  }
  function ht(e) {
    var t = Ne(),
      s = Ne();
    (s.className = "tippy-box"),
      s.setAttribute("data-state", "hidden"),
      s.setAttribute("tabindex", "-1");
    var i = Ne();
    function n(s, i) {
      var n = pt(t),
        r = n.box,
        o = n.content,
        a = n.arrow;
      i.theme
        ? r.setAttribute("data-theme", i.theme)
        : r.removeAttribute("data-theme"),
        "string" == typeof i.animation
          ? r.setAttribute("data-animation", i.animation)
          : r.removeAttribute("data-animation"),
        i.inertia
          ? r.setAttribute("data-inertia", "")
          : r.removeAttribute("data-inertia"),
        (r.style.maxWidth =
          "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
        i.role ? r.setAttribute("role", i.role) : r.removeAttribute("role"),
        (s.content === i.content && s.allowHTML === i.allowHTML) ||
          ut(o, e.props),
        i.arrow
          ? a
            ? s.arrow !== i.arrow &&
              (r.removeChild(a), r.appendChild(dt(i.arrow)))
            : r.appendChild(dt(i.arrow))
          : a && r.removeChild(a);
    }
    return (
      (i.className = Le),
      i.setAttribute("data-state", "hidden"),
      ut(i, e.props),
      t.appendChild(s),
      s.appendChild(i),
      n(e.props, e.props),
      { popper: t, onUpdate: n }
    );
  }
  ht.$$tippy = !0;
  var ft = 1,
    gt = [],
    mt = [];
  function vt(e, t) {
    var s,
      i,
      n,
      r,
      o,
      a,
      l,
      c,
      d = lt(e, Object.assign({}, rt, at(qe(t)))),
      u = !1,
      p = !1,
      h = !1,
      f = !1,
      g = [],
      m = ze(R, d.interactiveDebounce),
      v = ft++,
      b = (c = d.plugins).filter(function (e, t) {
        return c.indexOf(e) === t;
      }),
      y = {
        id: v,
        reference: e,
        popper: Ne(),
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
          clearTimeout(s), clearTimeout(i), cancelAnimationFrame(n);
        },
        setProps: function (t) {
          0;
          if (y.state.isDestroyed) return;
          P("onBeforeUpdate", [y, t]), F();
          var s = y.props,
            i = lt(e, Object.assign({}, s, qe(t), { ignoreAttributes: !0 }));
          (y.props = i),
            V(),
            s.interactiveDebounce !== i.interactiveDebounce &&
              (z(), (m = ze(R, i.interactiveDebounce)));
          s.triggerTarget && !i.triggerTarget
            ? Be(s.triggerTarget).forEach(function (e) {
                e.removeAttribute("aria-expanded");
              })
            : i.triggerTarget && e.removeAttribute("aria-expanded");
          D(), $(), S && S(s, i);
          y.popperInstance &&
            (Z(),
            J().forEach(function (e) {
              requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
            }));
          P("onAfterUpdate", [y, t]);
        },
        setContent: function (e) {
          y.setProps({ content: e });
        },
        show: function () {
          0;
          var e = y.state.isVisible,
            t = y.state.isDestroyed,
            s = !y.state.isEnabled,
            i = Qe.isTouch && !y.props.touch,
            n = Pe(y.props.duration, 0, rt.duration);
          if (e || t || s || i) return;
          if (A().hasAttribute("disabled")) return;
          if ((P("onShow", [y], !1), !1 === y.props.onShow(y))) return;
          (y.state.isVisible = !0), L() && (C.style.visibility = "visible");
          $(), j(), y.state.isMounted || (C.style.transition = "none");
          if (L()) {
            var r = I(),
              o = r.box,
              l = r.content;
            Re([o, l], 0);
          }
          (a = function () {
            var e;
            if (y.state.isVisible && !f) {
              if (
                ((f = !0),
                C.offsetHeight,
                (C.style.transition = y.props.moveTransition),
                L() && y.props.animation)
              ) {
                var t = I(),
                  s = t.box,
                  i = t.content;
                Re([s, i], n), Ye([s, i], "visible");
              }
              _(),
                D(),
                He(mt, y),
                null == (e = y.popperInstance) || e.forceUpdate(),
                P("onMount", [y]),
                y.props.animation &&
                  L() &&
                  (function (e, t) {
                    N(e, t);
                  })(n, function () {
                    (y.state.isShown = !0), P("onShown", [y]);
                  });
            }
          }),
            (function () {
              var e,
                t = y.props.appendTo,
                s = A();
              e =
                (y.props.interactive && t === $e) || "parent" === t
                  ? s.parentNode
                  : De(t, [s]);
              e.contains(C) || e.appendChild(C);
              (y.state.isMounted = !0), Z(), !1;
            })();
        },
        hide: function () {
          0;
          var e = !y.state.isVisible,
            t = y.state.isDestroyed,
            s = !y.state.isEnabled,
            i = Pe(y.props.duration, 1, rt.duration);
          if (e || t || s) return;
          if ((P("onHide", [y], !1), !1 === y.props.onHide(y))) return;
          (y.state.isVisible = !1),
            (y.state.isShown = !1),
            (f = !1),
            (u = !1),
            L() && (C.style.visibility = "hidden");
          if ((z(), q(), $(!0), L())) {
            var n = I(),
              r = n.box,
              o = n.content;
            y.props.animation && (Re([r, o], i), Ye([r, o], "hidden"));
          }
          _(),
            D(),
            y.props.animation
              ? L() &&
                (function (e, t) {
                  N(e, function () {
                    !y.state.isVisible &&
                      C.parentNode &&
                      C.parentNode.contains(C) &&
                      t();
                  });
                })(i, y.unmount)
              : y.unmount();
        },
        hideWithInteractivity: function (e) {
          0;
          k().addEventListener("mousemove", m), He(gt, m), m(e);
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
            C.parentNode && C.parentNode.removeChild(C);
          (mt = mt.filter(function (e) {
            return e !== y;
          })),
            (y.state.isMounted = !1),
            P("onHidden", [y]);
        },
        destroy: function () {
          0;
          if (y.state.isDestroyed) return;
          y.clearDelayTimeouts(),
            y.unmount(),
            F(),
            delete e._tippy,
            (y.state.isDestroyed = !0),
            P("onDestroy", [y]);
        },
      };
    if (!d.render) return y;
    var w = d.render(y),
      C = w.popper,
      S = w.onUpdate;
    C.setAttribute("data-tippy-root", ""),
      (C.id = "tippy-" + y.id),
      (y.popper = C),
      (e._tippy = y),
      (C._tippy = y);
    var T = b.map(function (e) {
        return e.fn(y);
      }),
      x = e.hasAttribute("aria-expanded");
    return (
      V(),
      D(),
      $(),
      P("onCreate", [y]),
      d.showOnCreate && ee(),
      C.addEventListener("mouseenter", function () {
        y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
      }),
      C.addEventListener("mouseleave", function () {
        y.props.interactive &&
          y.props.trigger.indexOf("mouseenter") >= 0 &&
          k().addEventListener("mousemove", m);
      }),
      y
    );
    function E() {
      var e = y.props.touch;
      return Array.isArray(e) ? e : [e, 0];
    }
    function O() {
      return "hold" === E()[0];
    }
    function L() {
      var e;
      return !(null == (e = y.props.render) || !e.$$tippy);
    }
    function A() {
      return l || e;
    }
    function k() {
      var e = A().parentNode;
      return e ? Ue(e) : document;
    }
    function I() {
      return pt(C);
    }
    function M(e) {
      return (y.state.isMounted && !y.state.isVisible) ||
        Qe.isTouch ||
        (r && "focus" === r.type)
        ? 0
        : Pe(y.props.delay, e ? 0 : 1, rt.delay);
    }
    function $(e) {
      void 0 === e && (e = !1),
        (C.style.pointerEvents = y.props.interactive && !e ? "" : "none"),
        (C.style.zIndex = "" + y.props.zIndex);
    }
    function P(e, t, s) {
      var i;
      (void 0 === s && (s = !0),
      T.forEach(function (s) {
        s[e] && s[e].apply(s, t);
      }),
      s) && (i = y.props)[e].apply(i, t);
    }
    function _() {
      var t = y.props.aria;
      if (t.content) {
        var s = "aria-" + t.content,
          i = C.id;
        Be(y.props.triggerTarget || e).forEach(function (e) {
          var t = e.getAttribute(s);
          if (y.state.isVisible) e.setAttribute(s, t ? t + " " + i : i);
          else {
            var n = t && t.replace(i, "").trim();
            n ? e.setAttribute(s, n) : e.removeAttribute(s);
          }
        });
      }
    }
    function D() {
      !x &&
        y.props.aria.expanded &&
        Be(y.props.triggerTarget || e).forEach(function (e) {
          y.props.interactive
            ? e.setAttribute(
                "aria-expanded",
                y.state.isVisible && e === A() ? "true" : "false"
              )
            : e.removeAttribute("aria-expanded");
        });
    }
    function z() {
      k().removeEventListener("mousemove", m),
        (gt = gt.filter(function (e) {
          return e !== m;
        }));
    }
    function B(t) {
      if (!Qe.isTouch || (!h && "mousedown" !== t.type)) {
        var s = (t.composedPath && t.composedPath()[0]) || t.target;
        if (!y.props.interactive || !Ze(C, s)) {
          if (
            Be(y.props.triggerTarget || e).some(function (e) {
              return Ze(e, s);
            })
          ) {
            if (Qe.isTouch) return;
            if (y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
              return;
          } else P("onClickOutside", [y, t]);
          !0 === y.props.hideOnClick &&
            (y.clearDelayTimeouts(),
            y.hide(),
            (p = !0),
            setTimeout(function () {
              p = !1;
            }),
            y.state.isMounted || q());
        }
      }
    }
    function H() {
      h = !0;
    }
    function G() {
      h = !1;
    }
    function j() {
      var e = k();
      e.addEventListener("mousedown", B, !0),
        e.addEventListener("touchend", B, Me),
        e.addEventListener("touchstart", G, Me),
        e.addEventListener("touchmove", H, Me);
    }
    function q() {
      var e = k();
      e.removeEventListener("mousedown", B, !0),
        e.removeEventListener("touchend", B, Me),
        e.removeEventListener("touchstart", G, Me),
        e.removeEventListener("touchmove", H, Me);
    }
    function N(e, t) {
      var s = I().box;
      function i(e) {
        e.target === s && (Ke(s, "remove", i), t());
      }
      if (0 === e) return t();
      Ke(s, "remove", o), Ke(s, "add", i), (o = i);
    }
    function W(t, s, i) {
      void 0 === i && (i = !1),
        Be(y.props.triggerTarget || e).forEach(function (e) {
          e.addEventListener(t, s, i),
            g.push({ node: e, eventType: t, handler: s, options: i });
        });
    }
    function V() {
      O() &&
        (W("touchstart", X, { passive: !0 }),
        W("touchend", Y, { passive: !0 })),
        (function (e) {
          return e.split(/\s+/).filter(Boolean);
        })(y.props.trigger).forEach(function (e) {
          if ("manual" !== e)
            switch ((W(e, X), e)) {
              case "mouseenter":
                W("mouseleave", Y);
                break;
              case "focus":
                W(it ? "focusout" : "blur", U);
                break;
              case "focusin":
                W("focusout", U);
            }
        });
    }
    function F() {
      g.forEach(function (e) {
        var t = e.node,
          s = e.eventType,
          i = e.handler,
          n = e.options;
        t.removeEventListener(s, i, n);
      }),
        (g = []);
    }
    function X(e) {
      var t,
        s = !1;
      if (y.state.isEnabled && !K(e) && !p) {
        var i = "focus" === (null == (t = r) ? void 0 : t.type);
        (r = e),
          (l = e.currentTarget),
          D(),
          !y.state.isVisible &&
            Ve(e) &&
            gt.forEach(function (t) {
              return t(e);
            }),
          "click" === e.type &&
          (y.props.trigger.indexOf("mouseenter") < 0 || u) &&
          !1 !== y.props.hideOnClick &&
          y.state.isVisible
            ? (s = !0)
            : ee(e),
          "click" === e.type && (u = !s),
          s && !i && te(e);
      }
    }
    function R(e) {
      var t = e.target,
        s = A().contains(t) || C.contains(t);
      if ("mousemove" !== e.type || !s) {
        var i = J()
          .concat(C)
          .map(function (e) {
            var t,
              s = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
            return s
              ? {
                  popperRect: e.getBoundingClientRect(),
                  popperState: s,
                  props: d,
                }
              : null;
          })
          .filter(Boolean);
        (function (e, t) {
          var s = t.clientX,
            i = t.clientY;
          return e.every(function (e) {
            var t = e.popperRect,
              n = e.popperState,
              r = e.props.interactiveBorder,
              o = Ge(n.placement),
              a = n.modifiersData.offset;
            if (!a) return !0;
            var l = "bottom" === o ? a.top.y : 0,
              c = "top" === o ? a.bottom.y : 0,
              d = "right" === o ? a.left.x : 0,
              u = "left" === o ? a.right.x : 0,
              p = t.top - i + l > r,
              h = i - t.bottom - c > r,
              f = t.left - s + d > r,
              g = s - t.right - u > r;
            return p || h || f || g;
          });
        })(i, e) && (z(), te(e));
      }
    }
    function Y(e) {
      K(e) ||
        (y.props.trigger.indexOf("click") >= 0 && u) ||
        (y.props.interactive ? y.hideWithInteractivity(e) : te(e));
    }
    function U(e) {
      (y.props.trigger.indexOf("focusin") < 0 && e.target !== A()) ||
        (y.props.interactive &&
          e.relatedTarget &&
          C.contains(e.relatedTarget)) ||
        te(e);
    }
    function K(e) {
      return !!Qe.isTouch && O() !== e.type.indexOf("touch") >= 0;
    }
    function Z() {
      Q();
      var t = y.props,
        s = t.popperOptions,
        i = t.placement,
        n = t.offset,
        r = t.getReferenceClientRect,
        o = t.moveTransition,
        l = L() ? pt(C).arrow : null,
        c = r
          ? {
              getBoundingClientRect: r,
              contextElement: r.contextElement || A(),
            }
          : e,
        d = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (e) {
            var t = e.state;
            if (L()) {
              var s = I().box;
              ["placement", "reference-hidden", "escaped"].forEach(function (
                e
              ) {
                "placement" === e
                  ? s.setAttribute("data-placement", t.placement)
                  : t.attributes.popper["data-popper-" + e]
                  ? s.setAttribute("data-" + e, "")
                  : s.removeAttribute("data-" + e);
              }),
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
      L() &&
        l &&
        u.push({ name: "arrow", options: { element: l, padding: 3 } }),
        u.push.apply(u, (null == s ? void 0 : s.modifiers) || []),
        (y.popperInstance = Oe(
          c,
          C,
          Object.assign({}, s, { placement: i, onFirstUpdate: a, modifiers: u })
        ));
    }
    function Q() {
      y.popperInstance &&
        (y.popperInstance.destroy(), (y.popperInstance = null));
    }
    function J() {
      return je(C.querySelectorAll("[data-tippy-root]"));
    }
    function ee(e) {
      y.clearDelayTimeouts(), e && P("onTrigger", [y, e]), j();
      var t = M(!0),
        i = E(),
        n = i[0],
        r = i[1];
      Qe.isTouch && "hold" === n && r && (t = r),
        t
          ? (s = setTimeout(function () {
              y.show();
            }, t))
          : y.show();
    }
    function te(e) {
      if (
        (y.clearDelayTimeouts(), P("onUntrigger", [y, e]), y.state.isVisible)
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
            ? (i = setTimeout(function () {
                y.state.isVisible && y.hide();
              }, t))
            : (n = requestAnimationFrame(function () {
                y.hide();
              }));
        }
      } else q();
    }
  }
  function bt(e, t) {
    void 0 === t && (t = {});
    var s = rt.plugins.concat(t.plugins || []);
    document.addEventListener("touchstart", et, Me),
      window.addEventListener("blur", st);
    var i = Object.assign({}, t, { plugins: s }),
      n = Xe(e).reduce(function (e, t) {
        var s = t && vt(t, i);
        return s && e.push(s), e;
      }, []);
    return We(e) ? n[0] : n;
  }
  (bt.defaultProps = rt),
    (bt.setDefaultProps = function (e) {
      Object.keys(e).forEach(function (t) {
        rt[t] = e[t];
      });
    }),
    (bt.currentInput = Qe);
  Object.assign({}, le, {
    effect: function (e) {
      var t = e.state,
        s = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      Object.assign(t.elements.popper.style, s.popper),
        (t.styles = s),
        t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow);
    },
  });
  bt.setDefaultProps({ render: ht });
  function yt(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function wt(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : yt(t[s]) &&
          yt(e[s]) &&
          Object.keys(t[s]).length > 0 &&
          wt(e[s], t[s]);
    });
  }
  bt("[data-tippy-content]", {});
  const Ct = {
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
  function St() {
    const e = "undefined" != typeof document ? document : {};
    return wt(e, Ct), e;
  }
  const Tt = {
    document: Ct,
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
  function xt() {
    const e = "undefined" != typeof window ? window : {};
    return wt(e, Tt), e;
  }
  class Et extends Array {
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
  function Ot(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...Ot(e)) : t.push(e);
      }),
      t
    );
  }
  function Lt(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function At(e, t) {
    const s = xt(),
      i = St();
    let n = [];
    if (!t && e instanceof Et) return e;
    if (!e) return new Et(n);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            i = t.querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) s.push(i[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof Et) return e;
      n = e;
    }
    return new Et(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(n)
    );
  }
  At.fn = Et.prototype;
  const kt = "resize scroll".split(" ");
  function It(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          kt.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : At(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  It("click"),
    It("blur"),
    It("focus"),
    It("focusin"),
    It("focusout"),
    It("keyup"),
    It("keydown"),
    It("keypress"),
    It("submit"),
    It("change"),
    It("mousedown"),
    It("mousemove"),
    It("mouseup"),
    It("mouseenter"),
    It("mouseleave"),
    It("mouseout"),
    It("mouseover"),
    It("touchstart"),
    It("touchend"),
    It("touchmove"),
    It("resize"),
    It("scroll");
  const Mt = {
    addClass: function (...e) {
      const t = Ot(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = Ot(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = Ot(e.map((e) => e.split(" ")));
      return (
        Lt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = Ot(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
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
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, i, n] = e;
      function r(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), At(t).is(s))) i.apply(t, n);
        else {
          const e = At(t).parents();
          for (let t = 0; t < e.length; t += 1)
            At(e[t]).is(s) && i.apply(e[t], n);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const a = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (s)
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
              t.addEventListener(e, r, n);
          }
        else
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
              t.addEventListener(e, o, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, i, n] = e;
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const r = t.split(" ");
      for (let e = 0; e < r.length; e += 1) {
        const t = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const r = this[e];
          let o;
          if (
            (!s && r.dom7Listeners
              ? (o = r.dom7Listeners[t])
              : s && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
            o && o.length)
          )
            for (let e = o.length - 1; e >= 0; e -= 1) {
              const s = o[e];
              (i && s.listener === i) ||
              (i &&
                s.listener &&
                s.listener.dom7proxy &&
                s.listener.dom7proxy === i)
                ? (r.removeEventListener(t, s.proxyListener, n), o.splice(e, 1))
                : i ||
                  (r.removeEventListener(t, s.proxyListener, n),
                  o.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = xt(),
        s = e[0].split(" "),
        i = e[1];
      for (let n = 0; n < s.length; n += 1) {
        const r = s[n];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(r, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(s),
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
          t.on("transitionend", function s(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", s));
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
      const e = xt();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = xt(),
          t = St(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          r = s.clientTop || n.clientTop || 0,
          o = s.clientLeft || n.clientLeft || 0,
          a = s === e ? e.scrollY : s.scrollTop,
          l = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + a - r, left: i.left + l - o };
      }
      return null;
    },
    css: function (e, t) {
      const s = xt();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (const t in e) this[i].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
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
      const t = xt(),
        s = St(),
        i = this[0];
      let n, r;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = At(e), r = 0; r < n.length; r += 1) if (n[r] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof Et) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
          if (n[r] === i) return !0;
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
      if (e > t - 1) return At([]);
      if (e < 0) {
        const s = t + e;
        return At(s < 0 ? [] : [this[s]]);
      }
      return At([this[e]]);
    },
    append: function (...e) {
      let t;
      const s = St();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = s.createElement("div");
            for (i.innerHTML = t; i.firstChild; )
              this[e].appendChild(i.firstChild);
          } else if (t instanceof Et)
            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = St();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof Et)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && At(this[0].nextElementSibling).is(e)
            ? At([this[0].nextElementSibling])
            : At([])
          : this[0].nextElementSibling
          ? At([this[0].nextElementSibling])
          : At([])
        : At([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return At([]);
      for (; s.nextElementSibling; ) {
        const i = s.nextElementSibling;
        e ? At(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return At(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && At(t.previousElementSibling).is(e)
            ? At([t.previousElementSibling])
            : At([])
          : t.previousElementSibling
          ? At([t.previousElementSibling])
          : At([]);
      }
      return At([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return At([]);
      for (; s.previousElementSibling; ) {
        const i = s.previousElementSibling;
        e ? At(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return At(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? At(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return At(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i; )
          e ? At(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      }
      return At(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? At([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
      }
      return At(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let s = 0; s < i.length; s += 1)
          (e && !At(i[s]).is(e)) || t.push(i[s]);
      }
      return At(t);
    },
    filter: function (e) {
      return At(Lt(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(Mt).forEach((e) => {
    Object.defineProperty(At.fn, e, { value: Mt[e], writable: !0 });
  });
  const $t = At;
  function Pt(e, t = 0) {
    return setTimeout(e, t);
  }
  function _t() {
    return Date.now();
  }
  function Dt(e, t = "x") {
    const s = xt();
    let i, n, r;
    const o = (function (e) {
      const t = xt();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((n = o.transform || o.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((r =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = r.toString().split(","))),
      "x" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      n || 0
    );
  }
  function zt(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function Bt(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const r = e[n];
      if (
        null != r &&
        ((i = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, i = e.length; s < i; s += 1) {
          const i = e[s],
            n = Object.getOwnPropertyDescriptor(r, i);
          void 0 !== n &&
            n.enumerable &&
            (zt(t[i]) && zt(r[i])
              ? r[i].__swiper__
                ? (t[i] = r[i])
                : Bt(t[i], r[i])
              : !zt(t[i]) && zt(r[i])
              ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : Bt(t[i], r[i]))
              : (t[i] = r[i]));
        }
      }
    }
    var i;
    return t;
  }
  function Ht(e, t, s) {
    e.style.setProperty(t, s);
  }
  function Gt({ swiper: e, targetPosition: t, side: s }) {
    const i = xt(),
      n = -e.translate;
    let r,
      o = null;
    const a = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > n ? "next" : "prev",
      c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
      d = () => {
        (r = new Date().getTime()), null === o && (o = r);
        const l = Math.max(Math.min((r - o) / a, 1), 0),
          u = 0.5 - Math.cos(l * Math.PI) / 2;
        let p = n + u * (t - n);
        if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), c(p, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: p });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(d);
      };
    d();
  }
  let jt, qt, Nt;
  function Wt() {
    return (
      jt ||
        (jt = (function () {
          const e = xt(),
            t = St();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      jt
    );
  }
  function Vt(e = {}) {
    return (
      qt ||
        (qt = (function ({ userAgent: e } = {}) {
          const t = Wt(),
            s = xt(),
            i = s.navigator.platform,
            n = e || s.navigator.userAgent,
            r = { ios: !1, android: !1 },
            o = s.screen.width,
            a = s.screen.height,
            l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = n.match(/(iPad).*OS\s([\d_]+)/);
          const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            p = "Win32" === i;
          let h = "MacIntel" === i;
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
      qt
    );
  }
  function Ft() {
    return (
      Nt ||
        (Nt = (function () {
          const e = xt();
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
      Nt
    );
  }
  const Xt = {
    on(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      const n = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][n](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      function n(...s) {
        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, s);
      }
      return (n.__emitterProxy = t), i.on(e, n, s);
    },
    onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, n) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(n, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners) return t;
      let s, i, n;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
        : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
        i.unshift(n);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(n, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(n, i);
              });
        }),
        t
      );
    },
  };
  const Rt = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left") || 0, 10) -
            parseInt(i.css("padding-right") || 0, 10)),
          (s =
            s -
            parseInt(i.css("padding-top") || 0, 10) -
            parseInt(i.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
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
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: a } = e,
        l = e.virtual && i.virtual.enabled,
        c = l ? e.virtual.slides.length : e.slides.length,
        d = n.children(`.${e.params.slideClass}`),
        u = l ? e.virtual.slides.length : d.length;
      let p = [];
      const h = [],
        f = [];
      let g = i.slidesOffsetBefore;
      "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
      let m = i.slidesOffsetAfter;
      "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        b = e.slidesGrid.length;
      let y = i.spaceBetween,
        w = -g,
        C = 0,
        S = 0;
      if (void 0 === r) return;
      "string" == typeof y &&
        y.indexOf("%") >= 0 &&
        (y = (parseFloat(y.replace("%", "")) / 100) * r),
        (e.virtualSize = -y),
        o
          ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        i.centeredSlides &&
          i.cssMode &&
          (Ht(e.wrapperEl, "--swiper-centered-offset-before", ""),
          Ht(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const T = i.grid && i.grid.rows > 1 && e.grid;
      let x;
      T && e.grid.initSlides(u);
      const E =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < u; n += 1) {
        x = 0;
        const o = d.eq(n);
        if (
          (T && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display"))
        ) {
          if ("auto" === i.slidesPerView) {
            E && (d[n].style[t("width")] = "");
            const r = getComputedStyle(o[0]),
              a = o[0].style.transform,
              l = o[0].style.webkitTransform;
            if (
              (a && (o[0].style.transform = "none"),
              l && (o[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              x = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
            else {
              const e = s(r, "width"),
                t = s(r, "padding-left"),
                i = s(r, "padding-right"),
                n = s(r, "margin-left"),
                a = s(r, "margin-right"),
                l = r.getPropertyValue("box-sizing");
              if (l && "border-box" === l) x = e + n + a;
              else {
                const { clientWidth: s, offsetWidth: r } = o[0];
                x = e + t + i + n + a + (r - s);
              }
            }
            a && (o[0].style.transform = a),
              l && (o[0].style.webkitTransform = l),
              i.roundLengths && (x = Math.floor(x));
          } else
            (x = (r - (i.slidesPerView - 1) * y) / i.slidesPerView),
              i.roundLengths && (x = Math.floor(x)),
              d[n] && (d[n].style[t("width")] = `${x}px`);
          d[n] && (d[n].swiperSlideSize = x),
            f.push(x),
            i.centeredSlides
              ? ((w = w + x / 2 + C / 2 + y),
                0 === C && 0 !== n && (w = w - r / 2 - y),
                0 === n && (w = w - r / 2 - y),
                Math.abs(w) < 0.001 && (w = 0),
                i.roundLengths && (w = Math.floor(w)),
                S % i.slidesPerGroup == 0 && p.push(w),
                h.push(w))
              : (i.roundLengths && (w = Math.floor(w)),
                (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                  e.params.slidesPerGroup ==
                  0 && p.push(w),
                h.push(w),
                (w = w + x + y)),
            (e.virtualSize += x + y),
            (C = x),
            (S += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + m),
        o &&
          a &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
        i.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
        T && e.grid.updateWrapperSize(x, p, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < p.length; s += 1) {
          let n = p[s];
          i.roundLengths && (n = Math.floor(n)),
            p[s] <= e.virtualSize - r && t.push(n);
        }
        (p = t),
          Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
            p.push(e.virtualSize - r);
      }
      if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
        const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
          [s]: `${y}px`,
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        f.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - r;
        p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          p.forEach((e, s) => {
            p[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
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
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        Ht(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
          Ht(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - f[f.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      u !== c && e.emit("slidesLengthChange"),
        p.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== b && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset();
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let n,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const o = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            s.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !i) break;
            s.push(o(e));
          }
      else s.push(o(t.activeIndex));
      for (n = 0; n < s.length; n += 1)
        if (void 0 !== s[n]) {
          const e = s[n].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: n, snapGrid: r } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let o = -e;
      n && (o = e),
        i.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const a = i[e];
        let l = a.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
        const c =
            (o + (s.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + s.spaceBetween),
          d =
            (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + s.spaceBetween),
          u = -(o - l),
          p = u + t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) ||
          (p > 1 && p <= t.size) ||
          (u <= 0 && p >= t.size)) &&
          (t.visibleSlides.push(a),
          t.visibleSlidesIndexes.push(e),
          i.eq(e).addClass(s.slideVisibleClass)),
          (a.progress = n ? -c : c),
          (a.originalProgress = n ? -d : d);
      }
      t.visibleSlides = $t(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: r, isEnd: o } = t;
      const a = r,
        l = o;
      0 === i
        ? ((n = 0), (r = !0), (o = !0))
        : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (o = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
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
          params: s,
          $wrapperEl: i,
          activeIndex: n,
          realIndex: r,
        } = e,
        o = e.virtual && s.virtual.enabled;
      let a;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (a = o
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        a.addClass(s.slideActiveClass),
        s.loop &&
          (a.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : i
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let l = a.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(s.slideNextClass));
      let c = a.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === c.length &&
        ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          c.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: i,
          snapGrid: n,
          params: r,
          activeIndex: o,
          realIndex: a,
          snapIndex: l,
        } = t;
      let c,
        d = e;
      if (void 0 === d) {
        for (let e = 0; e < i.length; e += 1)
          void 0 !== i[e + 1]
            ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
              ? (d = e)
              : s >= i[e] && s < i[e + 1] && (d = e + 1)
            : s >= i[e] && (d = e);
        r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
      }
      if (n.indexOf(s) >= 0) c = n.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, d);
        c = e + Math.floor((d - e) / r.slidesPerGroup);
      }
      if ((c >= n.length && (c = n.length - 1), d === o))
        return void (c !== l && ((t.snapIndex = c), t.emit("snapIndexChange")));
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
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = $t(e).closest(`.${s.slideClass}`)[0];
      let n,
        r = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (r = !0), (n = e);
            break;
          }
      if (!i || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              $t(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const Yt = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: s, translate: i, $wrapperEl: n } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let r = Dt(n[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: i,
          params: n,
          $wrapperEl: r,
          wrapperEl: o,
          progress: a,
        } = s;
      let l,
        c = 0,
        d = 0;
      s.isHorizontal() ? (c = i ? -e : e) : (d = e),
        n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
        n.cssMode
          ? (o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -c
              : -d)
          : n.virtualTranslate ||
            r.transform(`translate3d(${c}px, ${d}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? c : d);
      const u = s.maxTranslate() - s.minTranslate();
      (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
        l !== a && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
      const r = this,
        { params: o, wrapperEl: a } = r;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      const l = r.minTranslate(),
        c = r.maxTranslate();
      let d;
      if (
        ((d = i && e > l ? l : i && e < c ? c : e),
        r.updateProgress(d),
        o.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!r.support.smoothScroll)
            return (
              Gt({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
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
            s &&
              (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(d),
            s &&
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
                    s && r.emit("transitionEnd"));
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
  function Ut({ swiper: e, runCallbacks: t, direction: s, step: i }) {
    const { activeIndex: n, previousIndex: r } = e;
    let o = s;
    if (
      (o || (o = n > r ? "next" : n < r ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && n !== r)
    ) {
      if ("reset" === o) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === o
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const Kt = {
    slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
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
      if ((r.animating && a.preventInteractionOnTransition) || (!f && !i && !n))
        return !1;
      const g = Math.min(r.params.slidesPerGroupSkip, o);
      let m = g + Math.floor((o - g) / r.params.slidesPerGroup);
      m >= l.length && (m = l.length - 1),
        (u || a.initialSlide || 0) === (d || 0) &&
          s &&
          r.emit("beforeSlideChangeStart");
      const v = -l[m];
      if ((r.updateProgress(v), a.normalizeSlideIndex))
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * c[e]),
            i = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (o = e)
              : t >= s && t < i && (o = e + 1)
            : t >= s && (o = e);
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
          "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (a.cssMode) {
        const e = r.isHorizontal(),
          s = p ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              Gt({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(o),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, i),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
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
                  r.transitionEnd(s, b));
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
    slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
      const n = this;
      let r = e;
      return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
    },
    slideNext: function (e = this.params.speed, t = !0, s) {
      const i = this,
        { animating: n, enabled: r, params: o } = i;
      if (!r) return i;
      let a = o.slidesPerGroup;
      "auto" === o.slidesPerView &&
        1 === o.slidesPerGroup &&
        o.slidesPerGroupAuto &&
        (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
      if (o.loop) {
        if (n && o.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      return o.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + l, e, t, s);
    },
    slidePrev: function (e = this.params.speed, t = !0, s) {
      const i = this,
        {
          params: n,
          animating: r,
          snapGrid: o,
          slidesGrid: a,
          rtlTranslate: l,
          enabled: c,
        } = i;
      if (!c) return i;
      if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = d(l ? i.translate : -i.translate),
        p = o.map((e) => d(e));
      let h = o[p.indexOf(u) - 1];
      if (void 0 === h && n.cssMode) {
        let e;
        o.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      return (
        void 0 !== h &&
          ((f = a.indexOf(h)),
          f < 0 && (f = i.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        n.rewind && i.isBeginning
          ? i.slideTo(i.slides.length - 1, e, t, s)
          : i.slideTo(f, e, t, s)
      );
    },
    slideReset: function (e = this.params.speed, t = !0, s) {
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
      const n = this;
      let r = n.activeIndex;
      const o = Math.min(n.params.slidesPerGroupSkip, r),
        a = o + Math.floor((r - o) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[a]) {
        const e = n.snapGrid[a];
        l - e > (n.snapGrid[a + 1] - e) * i && (r += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[a - 1];
        l - e <= (n.snapGrid[a] - e) * i && (r -= n.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, n.slidesGrid.length - 1)),
        n.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt($t(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - i / 2 ||
              r > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                Pt(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - i
            ? (e.loopFix(),
              (r = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Pt(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const Zt = {
    loopCreate: function () {
      const e = this,
        t = St(),
        { params: s, $wrapperEl: i } = e,
        n = i.children().length > 0 ? $t(i.children()[0].parentNode) : i;
      n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let r = n.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let i = 0; i < e; i += 1) {
            const e = $t(t.createElement("div")).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            n.append(e);
          }
          r = n.children(`.${s.slideClass}`);
        }
      }
      "auto" !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = r.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > r.length && (e.loopedSlides = r.length);
      const o = [],
        a = [];
      r.each((t, s) => {
        const i = $t(t);
        s < e.loopedSlides && a.push(t),
          s < r.length && s >= r.length - e.loopedSlides && o.push(t),
          i.attr("data-swiper-slide-index", s);
      });
      for (let e = 0; e < a.length; e += 1)
        n.append($t(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = o.length - 1; e >= 0; e -= 1)
        n.prepend($t(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: r,
        snapGrid: o,
        rtlTranslate: a,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const c = -o[t] - e.getTranslate();
      if (t < i) {
        (l = s.length - 3 * i + t), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((a ? -e.translate : e.translate) - c);
      } else if (t >= s.length - i) {
        (l = -s.length + t + i), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((a ? -e.translate : e.translate) - c);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr("data-swiper-slide-index");
    },
  };
  function Qt(e) {
    const t = this,
      s = St(),
      i = xt(),
      n = t.touchEventsData,
      { params: r, touches: o, enabled: a } = t;
    if (!a) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let c = $t(l.target);
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
      (c = $t(e.path[0]));
    const d = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      u = !(!l.target || !l.target.shadowRoot);
    if (
      r.noSwiping &&
      (u
        ? (function (e, t = this) {
            return (function t(s) {
              return s && s !== St() && s !== xt()
                ? (s.assignedSlot && (s = s.assignedSlot),
                  s.closest(e) || t(s.getRootNode().host))
                : null;
            })(t);
          })(d, l.target)
        : c.closest(d)[0])
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
    (o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
      (o.currentY =
        "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
    const p = o.currentX,
      h = o.currentY,
      f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      g = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (f && (p <= g || p >= i.innerWidth - g)) {
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
      (n.touchStartTime = _t()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== l.type)
    ) {
      let e = !0;
      c.is(n.focusableElements) && (e = !1),
        s.activeElement &&
          $t(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== c[0] &&
          s.activeElement.blur();
      const i = e && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !i) ||
        c[0].isContentEditable ||
        l.preventDefault();
    }
    t.emit("touchStart", l);
  }
  function Jt(e) {
    const t = St(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: r, rtlTranslate: o, enabled: a } = s;
    if (!a) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", l)
      );
    if (i.isTouchEvent && "touchmove" !== l.type) return;
    const c =
        "touchmove" === l.type &&
        l.targetTouches &&
        (l.targetTouches[0] || l.changedTouches[0]),
      d = "touchmove" === l.type ? c.pageX : l.pageX,
      u = "touchmove" === l.type ? c.pageY : l.pageY;
    if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
    if (!s.allowTouchMove)
      return (
        (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(r, { startX: d, startY: u, currentX: d, currentY: u }),
          (i.touchStartTime = _t()))
        )
      );
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (
          (u < r.startY && s.translate <= s.maxTranslate()) ||
          (u > r.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (d < r.startX && s.translate <= s.maxTranslate()) ||
        (d > r.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      l.target === t.activeElement &&
      $t(l.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (r.currentX = d), (r.currentY = u);
    const p = r.currentX - r.startX,
      h = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(p ** 2 + h ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && r.currentY === r.startY) ||
      (s.isVertical() && r.currentX === r.startX)
        ? (i.isScrolling = !1)
        : p * p + h * h >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", l),
      void 0 === i.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !n.cssMode && l.cancelable && l.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
      i.isMoved ||
        (n.loop && !n.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", l)),
      s.emit("sliderMove", l),
      (i.isMoved = !0);
    let f = s.isHorizontal() ? p : h;
    (r.diff = f),
      (f *= n.touchRatio),
      o && (f = -f),
      (s.swipeDirection = f > 0 ? "prev" : "next"),
      (i.currentTranslate = f + i.startTranslate);
    let g = !0,
      m = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (m = 0),
      f > 0 && i.currentTranslate > s.minTranslate()
        ? ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + f) ** m))
        : f < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - f) ** m)),
      g && (l.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(f) > n.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          void (r.diff = s.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
        n.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        n.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function es(e) {
    const t = this,
      s = t.touchEventsData,
      { params: i, touches: n, rtlTranslate: r, slidesGrid: o, enabled: a } = t;
    if (!a) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", l),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    i.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = _t(),
      d = c - s.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        d < 300 &&
          c - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((s.lastClickTime = _t()),
      Pt(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let u;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (u = i.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: u });
    let p = 0,
      h = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== o[e + t]
        ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
        : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
    }
    const f = (u - o[p]) / h,
      g = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (d > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (f >= i.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p)),
        "prev" === t.swipeDirection &&
          (f > 1 - i.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(p + g)
          : t.slideTo(p)
        : ("next" === t.swipeDirection && t.slideTo(p + g),
          "prev" === t.swipeDirection && t.slideTo(p));
    }
  }
  function ts() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
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
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function ss(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function is() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
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
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let ns = !1;
  function rs() {}
  const os = (e, t) => {
    const s = St(),
      {
        params: i,
        touchEvents: n,
        el: r,
        wrapperEl: o,
        device: a,
        support: l,
      } = e,
      c = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    if (l.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !l.passiveListener ||
        !i.passiveListeners
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
        s[d](n.move, e.onTouchMove, c),
        s[d](n.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      r[d]("click", e.onClick, !0),
      i.cssMode && o[d]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[u](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            ts,
            !0
          )
        : e[u]("observerUpdate", ts, !0);
  };
  const as = {
      attachEvents: function () {
        const e = this,
          t = St(),
          { params: s, support: i } = e;
        (e.onTouchStart = Qt.bind(e)),
          (e.onTouchMove = Jt.bind(e)),
          (e.onTouchEnd = es.bind(e)),
          s.cssMode && (e.onScroll = is.bind(e)),
          (e.onClick = ss.bind(e)),
          i.touch && !ns && (t.addEventListener("touchstart", rs), (ns = !0)),
          os(e, "on");
      },
      detachEvents: function () {
        os(this, "off");
      },
    },
    ls = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const cs = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: s,
          loopedSlides: i = 0,
          params: n,
          $el: r,
        } = e,
        o = n.breakpoints;
      if (!o || (o && 0 === Object.keys(o).length)) return;
      const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
      if (!a || e.currentBreakpoint === a) return;
      const l = (a in o ? o[a] : void 0) || e.originalParams,
        c = ls(e, n),
        d = ls(e, l),
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
      p && s && e.changeDirection(), Bt(e.params, l);
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
          s &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t = "window", s) {
      if (!e || ("container" === t && !s)) return;
      let i = !1;
      const n = xt(),
        r = "window" === t ? n.innerHeight : s.clientHeight,
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
          ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = r)
          : a <= s.clientWidth && (i = r);
      }
      return i || "max";
    },
  };
  const ds = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: i, $el: n, device: r, support: o } = e,
        a = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && s.push(t + i);
                  })
                : "string" == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            "initialized",
            s.direction,
            { "pointer-events": !o.touch },
            { "free-mode": e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: i },
            { grid: s.grid && s.grid.rows > 1 },
            {
              "grid-column":
                s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
            },
            { android: r.android },
            { ios: r.ios },
            { "css-mode": s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
          ],
          s.containerModifierClass
        );
      t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const us = {
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
    focusableElements: "input, select, option, textarea, button, video, label",
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
  function ps(e, t) {
    return function (s = {}) {
      const i = Object.keys(s)[0],
        n = s[i];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in n
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              Bt(t, s))
            : Bt(t, s))
        : Bt(t, s);
    };
  }
  const hs = {
      eventsEmitter: Xt,
      update: Rt,
      translate: Yt,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            Ut({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              Ut({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: Kt,
      loop: Zt,
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
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"),
            (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: as,
      breakpoints: cs,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: ds,
      images: {
        loadImage: function (e, t, s, i, n, r) {
          const o = xt();
          let a;
          function l() {
            r && r();
          }
          $t(e).parent("picture")[0] || (e.complete && n)
            ? l()
            : t
            ? ((a = new o.Image()),
              (a.onload = l),
              (a.onerror = l),
              i && (a.sizes = i),
              s && (a.srcset = s),
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
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const i = e.imagesToLoad[s];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    fs = {};
  class gs {
    constructor(...e) {
      let t, s;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
        s || (s = {}),
        (s = Bt({}, s)),
        t && !s.el && (s.el = t),
        s.el && $t(s.el).length > 1)
      ) {
        const e = [];
        return (
          $t(s.el).each((t) => {
            const i = Bt({}, s, { el: t });
            e.push(new gs(i));
          }),
          e
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = Wt()),
        (i.device = Vt({ userAgent: s.userAgent })),
        (i.browser = Ft()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
      const n = {};
      i.modules.forEach((e) => {
        e({
          swiper: i,
          extendParams: ps(s, n),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const r = Bt({}, us, n);
      return (
        (i.params = Bt({}, r, fs, s)),
        (i.originalParams = Bt({}, i.params)),
        (i.passedParams = Bt({}, s)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((e) => {
            i.on(e, i.params.on[e]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        (i.$ = $t),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: t,
          classNames: [],
          slides: $t(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === i.params.direction,
          isVertical: () => "vertical" === i.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (i.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              i.support.touch || !i.params.simulateTouch
                ? i.touchEventsTouch
                : i.touchEventsDesktop
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
            focusableElements: i.params.focusableElements,
            lastClickTime: _t(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        i.emit("_swiper"),
        i.params.init && i.init(),
        i
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
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        n = (s.maxTranslate() - i) * e + i;
      s.translateTo(n, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
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
      e.slides.each((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: i,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: o,
        activeIndex: a,
      } = this;
      let l = 1;
      if (s.centeredSlides) {
        let e,
          t = i[a].swiperSlideSize;
        for (let s = a + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
        for (let s = a - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
      } else if ("current" === e)
        for (let e = a + 1; e < i.length; e += 1) {
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
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || i()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${i}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = $t(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = $t(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(i());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = St().createElement("div");
        (n = $t(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
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
      const s = this,
        { params: i, $el: n, $wrapperEl: r, slides: o } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            n.removeAttr("style"),
            r.removeAttr("style"),
            o &&
              o.length &&
              o
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
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
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Bt(fs, e);
    }
    static get extendedDefaults() {
      return fs;
    }
    static get defaults() {
      return us;
    }
    static installModule(e) {
      gs.prototype.__modules__ || (gs.prototype.__modules__ = []);
      const t = gs.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => gs.installModule(e)), gs)
        : (gs.installModule(e), gs);
    }
  }
  Object.keys(hs).forEach((e) => {
    Object.keys(hs[e]).forEach((t) => {
      gs.prototype[t] = hs[e][t];
    });
  }),
    gs.use([
      function ({ swiper: e, on: t, emit: s }) {
        const i = xt();
        let n = null;
        const r = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          o = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((n = new ResizeObserver((t) => {
                const { width: s, height: i } = e;
                let n = s,
                  o = i;
                t.forEach(
                  ({ contentBoxSize: t, contentRect: s, target: i }) => {
                    (i && i !== e.el) ||
                      ((n = s ? s.width : (t[0] || t).inlineSize),
                      (o = s ? s.height : (t[0] || t).blockSize));
                  }
                ),
                  (n === s && o === i) || r();
              })),
              n.observe(e.el))
            : (i.addEventListener("resize", r),
              i.addEventListener("orientationchange", o));
        }),
          t("destroy", () => {
            n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
              i.removeEventListener("resize", r),
              i.removeEventListener("orientationchange", o);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const n = [],
          r = xt(),
          o = (e, t = {}) => {
            const s = new (r.MutationObserver || r.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                  i("observerUpdate", e[0]);
                };
                r.requestAnimationFrame
                  ? r.requestAnimationFrame(t)
                  : r.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(s);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) o(t[e]);
              }
              o(e.$el[0], { childList: e.params.observeSlideChildren }),
                o(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const ms = gs;
  function vs({ swiper: e, extendParams: t, on: s, emit: i }) {
    const n = St(),
      r = xt();
    function o(t) {
      if (!e.enabled) return;
      const { rtlTranslate: s } = e;
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
        if (e.params.keyboard.onlyInViewport && (c || d || u || p || h || f)) {
          let t = !1;
          if (
            e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
            0 === e.$el.parents(`.${e.params.slideActiveClass}`).length
          )
            return;
          const i = e.$el,
            n = i[0].clientWidth,
            o = i[0].clientHeight,
            a = r.innerWidth,
            l = r.innerHeight,
            c = e.$el.offset();
          s && (c.left -= e.$el[0].scrollLeft);
          const d = [
            [c.left, c.top],
            [c.left + n, c.top],
            [c.left, c.top + o],
            [c.left + n, c.top + o],
          ];
          for (let e = 0; e < d.length; e += 1) {
            const s = d[e];
            if (s[0] >= 0 && s[0] <= a && s[1] >= 0 && s[1] <= l) {
              if (0 === s[0] && 0 === s[1]) continue;
              t = !0;
            }
          }
          if (!t) return;
        }
        e.isHorizontal()
          ? ((c || d || u || p) &&
              (o.preventDefault ? o.preventDefault() : (o.returnValue = !1)),
            (((d || p) && !s) || ((c || u) && s)) && e.slideNext(),
            (((c || u) && !s) || ((d || p) && s)) && e.slidePrev())
          : ((c || d || h || f) &&
              (o.preventDefault ? o.preventDefault() : (o.returnValue = !1)),
            (d || f) && e.slideNext(),
            (c || h) && e.slidePrev()),
          i("keyPress", a);
      }
    }
    function a() {
      e.keyboard.enabled || ($t(n).on("keydown", o), (e.keyboard.enabled = !0));
    }
    function l() {
      e.keyboard.enabled &&
        ($t(n).off("keydown", o), (e.keyboard.enabled = !1));
    }
    (e.keyboard = { enabled: !1 }),
      t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
      s("init", () => {
        e.params.keyboard.enabled && a();
      }),
      s("destroy", () => {
        e.keyboard.enabled && l();
      }),
      Object.assign(e.keyboard, { enable: a, disable: l });
  }
  function bs(e, t, s, i) {
    const n = St();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!s[r] && !0 === s.auto) {
            let o = e.$el.children(`.${i[r]}`)[0];
            o ||
              ((o = n.createElement("div")),
              (o.className = i[r]),
              e.$el.append(o)),
              (s[r] = o),
              (t[r] = o);
          }
        }),
      s
    );
  }
  function ys({ swiper: e, extendParams: t, on: s, emit: i }) {
    function n(t) {
      let s;
      return (
        t &&
          ((s = $t(t)),
          e.params.uniqueNavElements &&
            "string" == typeof t &&
            s.length > 1 &&
            1 === e.$el.find(t).length &&
            (s = e.$el.find(t))),
        s
      );
    }
    function r(t, s) {
      const i = e.params.navigation;
      t &&
        t.length > 0 &&
        (t[s ? "addClass" : "removeClass"](i.disabledClass),
        t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
        e.params.watchOverflow &&
          e.enabled &&
          t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
    }
    function o() {
      if (e.params.loop) return;
      const { $nextEl: t, $prevEl: s } = e.navigation;
      r(s, e.isBeginning && !e.params.rewind),
        r(t, e.isEnd && !e.params.rewind);
    }
    function a(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
    }
    function l(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
    }
    function c() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = bs(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !t.nextEl && !t.prevEl)
      )
        return;
      const s = n(t.nextEl),
        i = n(t.prevEl);
      s && s.length > 0 && s.on("click", l),
        i && i.length > 0 && i.on("click", a),
        Object.assign(e.navigation, {
          $nextEl: s,
          nextEl: s && s[0],
          $prevEl: i,
          prevEl: i && i[0],
        }),
        e.enabled ||
          (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
    }
    function d() {
      const { $nextEl: t, $prevEl: s } = e.navigation;
      t &&
        t.length &&
        (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
        s &&
          s.length &&
          (s.off("click", a), s.removeClass(e.params.navigation.disabledClass));
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
      s("init", () => {
        c(), o();
      }),
      s("toEdge fromEdge lock unlock", () => {
        o();
      }),
      s("destroy", () => {
        d();
      }),
      s("enable disable", () => {
        const { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          s &&
            s[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      s("click", (t, s) => {
        const { $nextEl: n, $prevEl: r } = e.navigation,
          o = s.target;
        if (e.params.navigation.hideOnClick && !$t(o).is(r) && !$t(o).is(n)) {
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
            i(!0 === t ? "navigationShow" : "navigationHide"),
            n && n.toggleClass(e.params.navigation.hiddenClass),
            r && r.toggleClass(e.params.navigation.hiddenClass);
        }
      }),
      Object.assign(e.navigation, { update: o, init: c, destroy: d });
  }
  function ws(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function Cs({ swiper: e, extendParams: t, on: s, emit: i }) {
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
    function l(t, s) {
      const { bulletActiveClass: i } = e.params.pagination;
      t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
    }
    function c() {
      const t = e.rtl,
        s = e.params.pagination;
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
        "bullets" === s.type &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const i = e.pagination.bullets;
        let n, a, u;
        if (
          (s.dynamicBullets &&
            ((r = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            c.css(
              e.isHorizontal() ? "width" : "height",
              r * (s.dynamicMainBullets + 4) + "px"
            ),
            s.dynamicMainBullets > 1 &&
              void 0 !== e.previousIndex &&
              ((o += d - (e.previousIndex - e.loopedSlides || 0)),
              o > s.dynamicMainBullets - 1
                ? (o = s.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (n = Math.max(d - o, 0)),
            (a = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
            (u = (a + n) / 2)),
          i.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((e) => `${s.bulletActiveClass}${e}`)
              .join(" ")
          ),
          c.length > 1)
        )
          i.each((e) => {
            const t = $t(e),
              i = t.index();
            i === d && t.addClass(s.bulletActiveClass),
              s.dynamicBullets &&
                (i >= n && i <= a && t.addClass(`${s.bulletActiveClass}-main`),
                i === n && l(t, "prev"),
                i === a && l(t, "next"));
          });
        else {
          const t = i.eq(d),
            r = t.index();
          if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
            const t = i.eq(n),
              o = i.eq(a);
            for (let e = n; e <= a; e += 1)
              i.eq(e).addClass(`${s.bulletActiveClass}-main`);
            if (e.params.loop)
              if (r >= i.length) {
                for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                  i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                  `${s.bulletActiveClass}-prev`
                );
              } else l(t, "prev"), l(o, "next");
            else l(t, "prev"), l(o, "next");
          }
        }
        if (s.dynamicBullets) {
          const n = Math.min(i.length, s.dynamicMainBullets + 4),
            o = (r * n - r) / 2 - u * r,
            a = t ? "right" : "left";
          i.css(e.isHorizontal() ? a : "top", `${o}px`);
        }
      }
      if (
        ("fraction" === s.type &&
          (c.find(ws(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
          c.find(ws(s.totalClass)).text(s.formatFractionTotal(u))),
        "progressbar" === s.type)
      ) {
        let t;
        t = s.progressbarOpposite
          ? e.isHorizontal()
            ? "vertical"
            : "horizontal"
          : e.isHorizontal()
          ? "horizontal"
          : "vertical";
        const i = (d + 1) / u;
        let n = 1,
          r = 1;
        "horizontal" === t ? (n = i) : (r = i),
          c
            .find(ws(s.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`)
            .transition(e.params.speed);
      }
      "custom" === s.type && s.renderCustom
        ? (c.html(s.renderCustom(e, d + 1, u)), i("paginationRender", c[0]))
        : i("paginationUpdate", c[0]),
        e.params.watchOverflow &&
          e.enabled &&
          c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }
    function d() {
      const t = e.params.pagination;
      if (a()) return;
      const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        n = e.pagination.$el;
      let r = "";
      if ("bullets" === t.type) {
        let i = e.params.loop
          ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          i > s &&
          (i = s);
        for (let s = 0; s < i; s += 1)
          t.renderBullet
            ? (r += t.renderBullet.call(e, s, t.bulletClass))
            : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        n.html(r), (e.pagination.bullets = n.find(ws(t.bulletClass)));
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
        "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
    }
    function u() {
      e.params.pagination = bs(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const t = e.params.pagination;
      if (!t.el) return;
      let s = $t(t.el);
      0 !== s.length &&
        (e.params.uniqueNavElements &&
          "string" == typeof t.el &&
          s.length > 1 &&
          ((s = e.$el.find(t.el)),
          s.length > 1 &&
            (s = s.filter((t) => $t(t).parents(".swiper")[0] === e.el))),
        "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
        s.addClass(t.modifierClass + t.type),
        s.addClass(t.modifierClass + e.params.direction),
        "bullets" === t.type &&
          t.dynamicBullets &&
          (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
          (o = 0),
          t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
        "progressbar" === t.type &&
          t.progressbarOpposite &&
          s.addClass(t.progressbarOppositeClass),
        t.clickable &&
          s.on("click", ws(t.bulletClass), function (t) {
            t.preventDefault();
            let s = $t(this).index() * e.params.slidesPerGroup;
            e.params.loop && (s += e.loopedSlides), e.slideTo(s);
          }),
        Object.assign(e.pagination, { $el: s, el: s[0] }),
        e.enabled || s.addClass(t.lockClass));
    }
    function p() {
      const t = e.params.pagination;
      if (a()) return;
      const s = e.pagination.$el;
      s.removeClass(t.hiddenClass),
        s.removeClass(t.modifierClass + t.type),
        s.removeClass(t.modifierClass + e.params.direction),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(t.bulletActiveClass),
        t.clickable && s.off("click", ws(t.bulletClass));
    }
    s("init", () => {
      u(), d(), c();
    }),
      s("activeIndexChange", () => {
        (e.params.loop || void 0 === e.snapIndex) && c();
      }),
      s("snapIndexChange", () => {
        e.params.loop || c();
      }),
      s("slidesLengthChange", () => {
        e.params.loop && (d(), c());
      }),
      s("snapGridLengthChange", () => {
        e.params.loop || (d(), c());
      }),
      s("destroy", () => {
        p();
      }),
      s("enable disable", () => {
        const { $el: t } = e.pagination;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.pagination.lockClass
          );
      }),
      s("lock unlock", () => {
        c();
      }),
      s("click", (t, s) => {
        const n = s.target,
          { $el: r } = e.pagination;
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          r.length > 0 &&
          !$t(n).hasClass(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && n === e.navigation.nextEl) ||
              (e.navigation.prevEl && n === e.navigation.prevEl))
          )
            return;
          const t = r.hasClass(e.params.pagination.hiddenClass);
          i(!0 === t ? "paginationShow" : "paginationHide"),
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
  function Ss() {
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
    Ss(),
      document.querySelector(".swiper") &&
        new ms(".swiper", {
          modules: [ys, Cs, vs],
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
  let Ts = !1;
  setTimeout(() => {
    if (Ts) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  var xs = function () {
    return (
      (xs =
        Object.assign ||
        function (e) {
          for (var t, s = 1, i = arguments.length; s < i; s++)
            for (var n in (t = arguments[s]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }),
      xs.apply(this, arguments)
    );
  };
  var Es = (function () {
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
      (e.prototype._setCssVendorPrefix = function (e, t, s) {
        var i = t.replace(/-([a-z])/gi, function (e, t) {
          return t.toUpperCase();
        });
        -1 !== this.cssVenderPrefixes.indexOf(i)
          ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = s),
            (e.style["webkit" + i] = s),
            (e.style["moz" + i] = s),
            (e.style["ms" + i] = s),
            (e.style["o" + i] = s))
          : (e.style[i] = s);
      }),
      (e.prototype._getFirstEl = function () {
        return this.selector && void 0 !== this.selector.length
          ? this.selector[0]
          : this.selector;
      }),
      (e.prototype.isEventMatched = function (e, t) {
        var s = t.split(".");
        return e
          .split(".")
          .filter(function (e) {
            return e;
          })
          .every(function (e) {
            return -1 !== s.indexOf(e);
          });
      }),
      (e.prototype.attr = function (e, t) {
        return void 0 === t
          ? this.firstElement
            ? this.firstElement.getAttribute(e)
            : ""
          : (this._each(function (s) {
              s.setAttribute(e, t);
            }),
            this);
      }),
      (e.prototype.find = function (e) {
        return Os(this._getSelector(e, this.selector));
      }),
      (e.prototype.first = function () {
        return this.selector && void 0 !== this.selector.length
          ? Os(this.selector[0])
          : Os(this.selector);
      }),
      (e.prototype.eq = function (e) {
        return Os(this.selector[e]);
      }),
      (e.prototype.parent = function () {
        return Os(this.selector.parentElement);
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
        return !!this.firstElement && this.firstElement.classList.contains(e);
      }),
      (e.prototype.hasAttribute = function (e) {
        return !!this.firstElement && this.firstElement.hasAttribute(e);
      }),
      (e.prototype.toggleClass = function (e) {
        return this.firstElement
          ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
          : this;
      }),
      (e.prototype.css = function (e, t) {
        var s = this;
        return (
          this._each(function (i) {
            s._setCssVendorPrefix(i, e, t);
          }),
          this
        );
      }),
      (e.prototype.on = function (t, s) {
        var i = this;
        return this.selector
          ? (t.split(" ").forEach(function (t) {
              Array.isArray(e.eventListeners[t]) || (e.eventListeners[t] = []),
                e.eventListeners[t].push(s),
                i.selector.addEventListener(t.split(".")[0], s);
            }),
            this)
          : this;
      }),
      (e.prototype.once = function (e, t) {
        var s = this;
        return (
          this.on(e, function () {
            s.off(e), t(e);
          }),
          this
        );
      }),
      (e.prototype.off = function (t) {
        var s = this;
        return this.selector
          ? (Object.keys(e.eventListeners).forEach(function (i) {
              s.isEventMatched(t, i) &&
                (e.eventListeners[i].forEach(function (e) {
                  s.selector.removeEventListener(i.split(".")[0], e);
                }),
                (e.eventListeners[i] = []));
            }),
            this)
          : this;
      }),
      (e.prototype.trigger = function (e, t) {
        if (!this.firstElement) return this;
        var s = new CustomEvent(e.split(".")[0], { detail: t || null });
        return this.firstElement.dispatchEvent(s), this;
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
          t = Os("body").style().marginLeft;
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
  function Os(e) {
    return (
      (function () {
        if ("function" == typeof window.CustomEvent) return !1;
        window.CustomEvent = function (e, t) {
          t = t || { bubbles: !1, cancelable: !1, detail: null };
          var s = document.createEvent("CustomEvent");
          return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
        };
      })(),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      new Es(e)
    );
  }
  var Ls = [
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
  function As(e) {
    return "href" === e
      ? "src"
      : (e = (e =
          (e = e.replace("data-", "")).charAt(0).toLowerCase() +
          e.slice(1)).replace(/-([a-z])/g, function (e) {
          return e[1].toUpperCase();
        }));
  }
  var ks = function (e, t, s, i) {
      void 0 === s && (s = 0);
      var n = Os(e).attr("data-lg-size") || i;
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
          h = t.height() - s,
          f = Math.min(p, d),
          g = Math.min(h, u),
          m = Math.min(f / d, g / u);
        return { width: d * m, height: u * m };
      }
    },
    Is = function (e, t, s, i, n) {
      if (n) {
        var r = Os(e).find("img").first();
        if (r.get()) {
          var o = t.get().getBoundingClientRect(),
            a = o.width,
            l = t.height() - (s + i),
            c = r.width(),
            d = r.height(),
            u = r.style(),
            p =
              (a - c) / 2 -
              r.offset().left +
              (parseFloat(u.paddingLeft) || 0) +
              (parseFloat(u.borderLeft) || 0) +
              Os(window).scrollLeft() +
              o.left,
            h =
              (l - d) / 2 -
              r.offset().top +
              (parseFloat(u.paddingTop) || 0) +
              (parseFloat(u.borderTop) || 0) +
              Os(window).scrollTop() +
              s;
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
    Ms = function (e, t, s, i, n, r) {
      return (
        '<div class="lg-video-cont lg-has-iframe" style="width:' +
        e +
        "; max-width:" +
        s +
        "; height: " +
        t +
        "; max-height:" +
        i +
        '">\n                    <iframe class="lg-object" frameborder="0" ' +
        (r ? 'title="' + r + '"' : "") +
        ' src="' +
        n +
        '"  allowfullscreen="true"></iframe>\n                </div>'
      );
    },
    $s = function (e, t, s, i, n, r) {
      var o =
          "<img " +
          s +
          " " +
          (i ? 'srcset="' + i + '"' : "") +
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
            Object.keys(e).forEach(function (s) {
              t += " " + s + '="' + e[s] + '"';
            }),
            "<source " + t + "></source>"
          );
        }));
      return "" + a + o;
    },
    Ps = function (e) {
      for (var t = [], s = [], i = "", n = 0; n < e.length; n++) {
        var r = e[n].split(" ");
        "" === r[0] && r.splice(0, 1), s.push(r[0]), t.push(r[1]);
      }
      for (var o = window.innerWidth, a = 0; a < t.length; a++)
        if (parseInt(t[a], 10) > o) {
          i = s[a];
          break;
        }
      return i;
    },
    _s = function (e) {
      return !!e && !!e.complete && 0 !== e.naturalWidth;
    },
    Ds = function (e, t, s, i) {
      return (
        '<div class="lg-video-cont ' +
        (i && i.youtube
          ? "lg-has-youtube"
          : i && i.vimeo
          ? "lg-has-vimeo"
          : "lg-has-html5") +
        '" style="' +
        s +
        '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="Play video"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>Play video</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
        (t || "") +
        '\n            <img class="lg-object lg-video-poster" src="' +
        e +
        '" />\n        </div>'
      );
    },
    zs = function (e, t, s, i) {
      var n = [],
        r = (function () {
          for (var e = 0, t = 0, s = arguments.length; t < s; t++)
            e += arguments[t].length;
          var i = Array(e),
            n = 0;
          for (t = 0; t < s; t++)
            for (var r = arguments[t], o = 0, a = r.length; o < a; o++, n++)
              i[n] = r[o];
          return i;
        })(Ls, t);
      return (
        [].forEach.call(e, function (e) {
          for (var t = {}, o = 0; o < e.attributes.length; o++) {
            var a = e.attributes[o];
            if (a.specified) {
              var l = As(a.name),
                c = "";
              r.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
            }
          }
          var d = Os(e),
            u = d.find("img").first().attr("alt"),
            p = d.attr("title"),
            h = i ? d.attr(i) : d.find("img").first().attr("src");
          (t.thumb = h),
            s && !t.subHtml && (t.subHtml = p || u || ""),
            (t.alt = u || p || ""),
            n.push(t);
        }),
        n
      );
    },
    Bs = function () {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    Hs = function (e, t, s) {
      if (!e)
        return t
          ? { html5: !0 }
          : void console.error(
              "lightGallery :- data-src is not provided on slide item " +
                (s + 1) +
                ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
            );
      var i = e.match(
          /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
        ),
        n = e.match(
          /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
        ),
        r = e.match(
          /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
        );
      return i ? { youtube: i } : n ? { vimeo: n } : r ? { wistia: r } : void 0;
    },
    Gs = {
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
    js = "lgAfterAppendSlide",
    qs = "lgInit",
    Ns = "lgHasVideo",
    Ws = "lgContainerResize",
    Vs = "lgUpdateSlides",
    Fs = "lgAfterAppendSubHtml",
    Xs = "lgBeforeOpen",
    Rs = "lgAfterOpen",
    Ys = "lgSlideItemLoad",
    Us = "lgBeforeSlide",
    Ks = "lgAfterSlide",
    Zs = "lgPosterClick",
    Qs = "lgDragStart",
    Js = "lgDragMove",
    ei = "lgDragEnd",
    ti = "lgBeforeNextSlide",
    si = "lgBeforePrevSlide",
    ii = "lgBeforeClose",
    ni = "lgAfterClose",
    ri = 0,
    oi = (function () {
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
          (ri++,
          (this.lgId = ri),
          (this.el = e),
          (this.LGel = Os(e)),
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
            ((this.settings = xs(xs({}, Gs), e)),
            this.settings.isMobile &&
            "function" == typeof this.settings.isMobile
              ? this.settings.isMobile()
              : Bs())
          ) {
            var t = xs(
              xs({}, this.settings.mobileSettings),
              this.settings.mobileSettings
            );
            this.settings = xs(xs({}, this.settings), t);
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
            this.LGel.trigger(qs, { instance: this }),
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
                var i = s.items[t],
                  n = Os(i),
                  r = Es.generateUUID();
                n.attr("data-lg-id", r).on(
                  "click.lgcustom-item-" + r,
                  function (s) {
                    s.preventDefault();
                    var n = e.settings.index || t;
                    e.openGallery(n, i);
                  }
                );
              },
              s = this,
              i = 0;
            i < this.items.length;
            i++
          )
            t(i);
        }),
        (e.prototype.buildModules = function () {
          var e = this;
          this.settings.plugins.forEach(function (t) {
            e.plugins.push(new t(e, Os));
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
          return Os(this.getSlideItemId(e));
        }),
        (e.prototype.getSlideItemId = function (e) {
          return "#lg-item-" + this.lgId + "-" + e;
        }),
        (e.prototype.getIdName = function (e) {
          return e + "-" + this.lgId;
        }),
        (e.prototype.getElementById = function (e) {
          return Os("#" + this.getIdName(e));
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
              s = "";
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
                (s =
                  '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
            var i = "";
            this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
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
                (document.body !== this.settings.container ? "lg-inline" : ""),
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
                i +
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
                (".lg-outer" === this.settings.appendSubHtmlTo ? s : "") +
                '\n                <div id="' +
                this.getIdName("lg-components") +
                '" class="lg-components">\n                    ' +
                (".lg-sub-html" === this.settings.appendSubHtmlTo ? s : "") +
                "\n                </div>\n            </div>\n        </div>\n        ";
            Os(this.settings.container).css("position", "relative").append(c),
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
              Os(window).on(
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
              s = t.top,
              i = t.bottom;
            if (
              ((this.currentImageSize = ks(
                this.items[this.index],
                this.outer,
                s + i,
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
            this.LGel.trigger(Ws);
          }
        }),
        (e.prototype.resizeVideoSlide = function (e, t) {
          var s = this.getVideoContStyle(t);
          this.getSlideItem(e).find(".lg-video-cont").attr("style", s);
        }),
        (e.prototype.updateSlides = function (e, t) {
          if (
            (this.index > e.length - 1 && (this.index = e.length - 1),
            1 === e.length && (this.index = 0),
            e.length)
          ) {
            var s = this.galleryItems[t].src;
            (this.galleryItems = e),
              this.updateControls(),
              this.$inner.empty(),
              (this.currentItemsInDom = []);
            var i = 0;
            this.galleryItems.some(function (e, t) {
              return e.src === s && ((i = t), !0);
            }),
              (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
              this.loadContent(i, !0),
              this.getSlideItem(i).addClass("lg-current"),
              (this.index = i),
              this.updateCurrentCounter(i),
              this.LGel.trigger(Vs);
          } else this.closeGallery();
        }),
        (e.prototype.getItems = function () {
          if (((this.items = []), this.settings.dynamic))
            return this.settings.dynamicEl || [];
          if ("this" === this.settings.selector) this.items.push(this.el);
          else if (this.settings.selector)
            if ("string" == typeof this.settings.selector)
              if (this.settings.selectWithin) {
                var e = Os(this.settings.selectWithin);
                this.items = e.find(this.settings.selector).get();
              } else
                this.items = this.el.querySelectorAll(this.settings.selector);
            else this.items = this.settings.selector;
          else this.items = this.el.children;
          return zs(
            this.items,
            this.settings.extraProps,
            this.settings.getCaptionFromTitleOrAlt,
            this.settings.exThumbImage
          );
        }),
        (e.prototype.openGallery = function (e, t) {
          var s = this;
          if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
            (this.lgOpened = !0),
              this.outer.get().focus(),
              this.outer.removeClass("lg-hide-items"),
              this.$container.addClass("lg-show");
            var i = this.getItemsToBeInsertedToDom(e, e);
            this.currentItemsInDom = i;
            var n = "";
            i.forEach(function (e) {
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
              ((this.currentImageSize = ks(
                t,
                this.outer,
                a + l,
                c && this.settings.videoMaxSize
              )),
              (r = Is(t, this.outer, a, l, this.currentImageSize))),
              (this.zoomFromOrigin && r) ||
                (this.outer.addClass(this.settings.startClass),
                this.getSlideItem(e).removeClass("lg-complete"));
            var d = this.settings.zoomFromOrigin
              ? 100
              : this.settings.backdropDuration;
            setTimeout(function () {
              s.outer.addClass("lg-components-open");
            }, d),
              (this.index = e),
              this.LGel.trigger(Xs),
              this.getSlideItem(e).addClass("lg-current"),
              (this.lGalleryOn = !1),
              (this.prevScrollTop = Os(window).scrollTop()),
              setTimeout(function () {
                if (s.zoomFromOrigin && r) {
                  var t = s.getSlideItem(e);
                  t.css("transform", r),
                    setTimeout(function () {
                      t
                        .addClass("lg-start-progress lg-start-end-progress")
                        .css(
                          "transition-duration",
                          s.settings.startAnimationDuration + "ms"
                        ),
                        s.outer.addClass("lg-zoom-from-image");
                    }),
                    setTimeout(function () {
                      t.css("transform", "translate3d(0, 0, 0)");
                    }, 100);
                }
                setTimeout(function () {
                  s.$backdrop.addClass("in"),
                    s.$container.addClass("lg-show-in");
                }, 10),
                  (s.zoomFromOrigin && r) ||
                    setTimeout(function () {
                      s.outer.addClass("lg-visible");
                    }, s.settings.backdropDuration),
                  s.slide(e, !1, !1, !1),
                  s.LGel.trigger(Rs);
              }),
              document.body === this.settings.container &&
                Os("html").addClass("lg-on");
          }
        }),
        (e.prototype.getMediaContainerPosition = function () {
          if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
          var e = this.$toolbar.get().clientHeight || 0,
            t = this.outer.find(".lg-components .lg-sub-html").get(),
            s =
              this.settings.defaultCaptionHeight || (t && t.clientHeight) || 0,
            i = this.outer.find(".lg-thumb-outer").get();
          return { top: e, bottom: (i ? i.clientHeight : 0) + s };
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
                (e.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                  e.outer.removeClass("lg-hide-items"),
                    clearTimeout(e.hideBarTimeout),
                    (e.hideBarTimeout = setTimeout(function () {
                      e.outer.addClass("lg-hide-items");
                    }, e.settings.hideBarsDelay));
                }),
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
          var t, s;
          if (
            (this.galleryItems[e].subHtmlUrl
              ? (s = this.galleryItems[e].subHtmlUrl)
              : (t = this.galleryItems[e].subHtml),
            !s)
          )
            if (t) {
              var i = t.substring(0, 1);
              ("." !== i && "#" !== i) ||
                (t =
                  this.settings.subHtmlSelectorRelative &&
                  !this.settings.dynamic
                    ? Os(this.items).eq(e).find(t).first().html()
                    : Os(t).first().html());
            } else t = "";
          if (".lg-item" !== this.settings.appendSubHtmlTo)
            s
              ? this.outer.find(".lg-sub-html").load(s)
              : this.outer.find(".lg-sub-html").html(t);
          else {
            var n = Os(this.getSlideItemId(e));
            s
              ? n.load(s)
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
            this.LGel.trigger(Fs, { index: e });
        }),
        (e.prototype.preload = function (e) {
          for (
            var t = 1;
            t <= this.settings.preload && !(t >= this.galleryItems.length - e);
            t++
          )
            this.loadContent(e + t, !1);
          for (var s = 1; s <= this.settings.preload && !(e - s < 0); s++)
            this.loadContent(e - s, !1);
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
        (e.prototype.getDummyImageContent = function (e, t, s) {
          var i;
          if ((this.settings.dynamic || (i = Os(this.items).eq(t)), i)) {
            var n = void 0;
            if (
              !(n = this.settings.exThumbImage
                ? i.attr(this.settings.exThumbImage)
                : i.find("img").first().attr("src"))
            )
              return "";
            var r =
              "<img " +
              s +
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
        (e.prototype.setImgMarkup = function (e, t, s) {
          var i = this.galleryItems[s],
            n = i.alt,
            r = i.srcset,
            o = i.sizes,
            a = i.sources,
            l = n ? 'alt="' + n + '"' : "",
            c =
              '<picture class="lg-img-wrap"> ' +
              (this.isFirstSlideWithZoomAnimation()
                ? this.getDummyImageContent(t, s, l)
                : $s(s, e, l, r, o, a)) +
              "</picture>";
          t.prepend(c);
        }),
        (e.prototype.onSlideObjectLoad = function (e, t, s, i) {
          var n = e.find(".lg-object").first();
          _s(n.get()) || t
            ? s()
            : (n.on("load.lg error.lg", function () {
                s && s();
              }),
              n.on("error.lg", function () {
                i && i();
              }));
        }),
        (e.prototype.onLgObjectLoad = function (e, t, s, i, n, r) {
          var o = this;
          this.onSlideObjectLoad(
            e,
            r,
            function () {
              o.triggerSlideItemLoad(e, t, s, i, n);
            },
            function () {
              e.addClass("lg-complete lg-complete_"),
                e.html(
                  '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                );
            }
          );
        }),
        (e.prototype.triggerSlideItemLoad = function (e, t, s, i, n) {
          var r = this,
            o = this.galleryItems[t],
            a = n && "video" === this.getSlideType(o) && !o.poster ? i : 0;
          setTimeout(function () {
            e.addClass("lg-complete lg-complete_"),
              r.LGel.trigger(Ys, { index: t, delay: s || 0, isFirstSlide: n });
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
          e.forEach(function (e, s) {
            (e.__slideVideoInfo = Hs(e.src, !!e.video, s)),
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
          var s = this,
            i = this.galleryItems[e],
            n = Os(this.getSlideItemId(e)),
            r = i.poster,
            o = i.srcset,
            a = i.sizes,
            l = i.sources,
            c = i.src,
            d = i.video,
            u = d && "string" == typeof d ? JSON.parse(d) : d;
          if (i.responsive) {
            var p = i.responsive.split(",");
            c = Ps(p) || c;
          }
          var h = i.__slideVideoInfo,
            f = "",
            g = !!i.iframe,
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
                w = b.bottom,
                C = ks(
                  this.items[e],
                  this.outer,
                  y + w,
                  h && this.settings.videoMaxSize
                );
              f = this.getVideoContStyle(C);
            }
            if (g) {
              var S = Ms(
                this.settings.iframeWidth,
                this.settings.iframeHeight,
                this.settings.iframeMaxWidth,
                this.settings.iframeMaxHeight,
                c,
                i.iframeTitle
              );
              n.prepend(S);
            } else if (r) {
              var T = "";
              m &&
                this.zoomFromOrigin &&
                this.currentImageSize &&
                (T = this.getDummyImageContent(n, e, ""));
              S = Ds(r, T || "", f, h);
              n.prepend(S);
            } else if (h) {
              S = '<div class="lg-video-cont " style="' + f + '"></div>';
              n.prepend(S);
            } else if ((this.setImgMarkup(c, n, e), o || l)) {
              var x = n.find(".lg-object");
              this.initPictureFill(x);
            }
            (r || h) &&
              this.LGel.trigger(Ns, {
                index: e,
                src: c,
                html5Video: u,
                hasPoster: !!r,
              }),
              this.LGel.trigger(js, { index: e }),
              this.lGalleryOn &&
                ".lg-item" === this.settings.appendSubHtmlTo &&
                this.addHtml(e);
          }
          var E = 0;
          v && !Os(document.body).hasClass("lg-from-hash") && (E = v),
            this.isFirstSlideWithZoomAnimation() &&
              (setTimeout(function () {
                n.removeClass(
                  "lg-start-end-progress lg-start-progress"
                ).removeAttr("style");
              }, this.settings.startAnimationDuration + 100),
              n.hasClass("lg-loaded") ||
                setTimeout(function () {
                  if (
                    "image" === s.getSlideType(i) &&
                    (n
                      .find(".lg-img-wrap")
                      .append($s(e, c, "", o, a, i.sources)),
                    o || l)
                  ) {
                    var t = n.find(".lg-object");
                    s.initPictureFill(t);
                  }
                  ("image" === s.getSlideType(i) ||
                    ("video" === s.getSlideType(i) && r)) &&
                    (s.onLgObjectLoad(n, e, v, E, !0, !1),
                    s.onSlideObjectLoad(
                      n,
                      !(!h || !h.html5 || r),
                      function () {
                        s.loadContentOnFirstSlideLoad(e, n, E);
                      },
                      function () {
                        s.loadContentOnFirstSlideLoad(e, n, E);
                      }
                    ));
                }, this.settings.startAnimationDuration + 100)),
            n.addClass("lg-loaded"),
            (this.isFirstSlideWithZoomAnimation() &&
              ("video" !== this.getSlideType(i) || r)) ||
              this.onLgObjectLoad(n, e, v, E, m, !(!h || !h.html5 || r)),
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
                      s.preload(e);
                    }));
        }),
        (e.prototype.loadContentOnFirstSlideLoad = function (e, t, s) {
          var i = this;
          setTimeout(function () {
            t.find(".lg-dummy-img").remove(),
              t.removeClass("lg-first-slide"),
              i.outer.removeClass("lg-first-slide-loading"),
              (i.isDummyImageRemoved = !0),
              i.preload(e);
          }, s + 300);
        }),
        (e.prototype.getItemsToBeInsertedToDom = function (e, t, s) {
          var i = this;
          void 0 === s && (s = 0);
          var n = [],
            r = Math.max(s, 3);
          r = Math.min(r, this.galleryItems.length);
          var o = "lg-item-" + this.lgId + "-" + t;
          if (this.galleryItems.length <= 3)
            return (
              this.galleryItems.forEach(function (e, t) {
                n.push("lg-item-" + i.lgId + "-" + t);
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
            for (a = e; a <= this.galleryItems.length - 1 && a < e + r / 2; a++)
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
          var s = this,
            i = this.getItemsToBeInsertedToDom(
              e,
              t,
              this.settings.numberOfSlideItemsInDom
            );
          return (
            i.forEach(function (e) {
              -1 === s.currentItemsInDom.indexOf(e) &&
                s.$inner.append('<div id="' + e + '" class="lg-item"></div>');
            }),
            this.currentItemsInDom.forEach(function (e) {
              -1 === i.indexOf(e) && Os("#" + e).remove();
            }),
            i
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
              var s = this.getElementById("lg-download");
              this.outer.removeClass("lg-hide-download"),
                s.attr("href", t.downloadUrl || t.src),
                t.download && s.attr("download", t.download);
            }
          }
        }),
        (e.prototype.makeSlideAnimation = function (e, t, s) {
          var i = this;
          this.lGalleryOn && s.addClass("lg-slide-progress"),
            setTimeout(
              function () {
                i.outer.addClass("lg-no-trans"),
                  i.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-next-slide"),
                  "prev" === e
                    ? (t.addClass("lg-prev-slide"), s.addClass("lg-next-slide"))
                    : (t.addClass("lg-next-slide"),
                      s.addClass("lg-prev-slide")),
                  setTimeout(function () {
                    i.outer.find(".lg-item").removeClass("lg-current"),
                      t.addClass("lg-current"),
                      i.outer.removeClass("lg-no-trans");
                  }, 50);
              },
              this.lGalleryOn ? this.settings.slideDelay : 0
            );
        }),
        (e.prototype.slide = function (e, t, s, i) {
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
                (this.outer.attr("data-lg-slide-type", this.getSlideType(c)),
                this.setDownloadValue(e),
                d)
              ) {
                var u = this.mediaContainerPosition,
                  p = u.top,
                  h = u.bottom,
                  f = ks(
                    this.items[e],
                    this.outer,
                    p + h,
                    d && this.settings.videoMaxSize
                  );
                this.resizeVideoSlide(e, f);
              }
              if (
                (this.LGel.trigger(Us, {
                  prevIndex: r,
                  index: e,
                  fromTouch: !!t,
                  fromThumb: !!s,
                }),
                (this.lgBusy = !0),
                clearTimeout(this.hideBarTimeout),
                this.arrowDisable(e),
                i || (e < r ? (i = "prev") : e > r && (i = "next")),
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
                    ((0 === e && r === o - 1) || (e === o - 1 && 0 === r)) &&
                      ((m = 0), (g = o - 1)))
                  : ((g = 0), (m = 1)),
                  "prev" === i
                    ? this.getSlideItem(m).addClass("lg-next-slide")
                    : this.getSlideItem(g).addClass("lg-prev-slide"),
                  a.addClass("lg-current");
              } else this.makeSlideAnimation(i, a, l);
              this.lGalleryOn
                ? setTimeout(function () {
                    n.loadContent(e, !0),
                      ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(e);
                  }, this.settings.speed +
                    50 +
                    (t ? 0 : this.settings.slideDelay))
                : this.loadContent(e, !0),
                setTimeout(function () {
                  (n.lgBusy = !1),
                    l.removeClass("lg-slide-progress"),
                    n.LGel.trigger(Ks, {
                      prevIndex: r,
                      index: e,
                      fromTouch: t,
                      fromThumb: s,
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
          return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
        }),
        (e.prototype.touchMove = function (e, t, s) {
          var i = t.pageX - e.pageX,
            n = t.pageY - e.pageY,
            r = !1;
          if (
            (this.swipeDirection
              ? (r = !0)
              : Math.abs(i) > 15
              ? ((this.swipeDirection = "horizontal"), (r = !0))
              : Math.abs(n) > 15 &&
                ((this.swipeDirection = "vertical"), (r = !0)),
            r)
          ) {
            var o = this.getSlideItem(this.index);
            if ("horizontal" === this.swipeDirection) {
              null == s || s.preventDefault(),
                this.outer.addClass("lg-dragging"),
                this.setTranslate(o, i, 0);
              var a = o.get().offsetWidth,
                l = (15 * a) / 100 - Math.abs((10 * i) / 100);
              this.setTranslate(
                this.outer.find(".lg-prev-slide").first(),
                -a + i - l,
                0
              ),
                this.setTranslate(
                  this.outer.find(".lg-next-slide").first(),
                  a + i + l,
                  0
                );
            } else if (
              "vertical" === this.swipeDirection &&
              this.settings.swipeToClose
            ) {
              null == s || s.preventDefault(),
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
        (e.prototype.touchEnd = function (e, t, s) {
          var i,
            n = this;
          "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
            setTimeout(function () {
              n.$container.removeClass("lg-dragging-vertical"),
                n.outer
                  .removeClass("lg-dragging lg-hide-items")
                  .addClass("lg-components-open");
              var r = !0;
              if ("horizontal" === n.swipeDirection) {
                i = e.pageX - t.pageX;
                var o = Math.abs(e.pageX - t.pageX);
                i < 0 && o > n.settings.swipeThreshold
                  ? (n.goToNextSlide(!0), (r = !1))
                  : i > 0 &&
                    o > n.settings.swipeThreshold &&
                    (n.goToPrevSlide(!0), (r = !1));
              } else if ("vertical" === n.swipeDirection) {
                if (
                  ((i = Math.abs(e.pageY - t.pageY)),
                  n.settings.closable && n.settings.swipeToClose && i > 100)
                )
                  return void n.closeGallery();
                n.$backdrop.css("opacity", 1);
              }
              if (
                (n.outer.find(".lg-item").removeAttr("style"),
                r && Math.abs(e.pageX - t.pageX) < 5)
              ) {
                var a = Os(s.target);
                n.isPosterElement(a) && n.LGel.trigger(Zs);
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
            s = {},
            i = !1,
            n = !1;
          this.settings.enableSwipe &&
            (this.$inner.on("touchstart.lg", function (s) {
              e.dragOrSwipeEnabled = !0;
              var i = e.getSlideItem(e.index);
              (!Os(s.target).hasClass("lg-item") &&
                !i.get().contains(s.target)) ||
                e.outer.hasClass("lg-zoomed") ||
                e.lgBusy ||
                1 !== s.targetTouches.length ||
                ((n = !0),
                (e.touchAction = "swipe"),
                e.manageSwipeClass(),
                (t = {
                  pageX: s.targetTouches[0].pageX,
                  pageY: s.targetTouches[0].pageY,
                }));
            }),
            this.$inner.on("touchmove.lg", function (r) {
              n &&
                "swipe" === e.touchAction &&
                1 === r.targetTouches.length &&
                ((s = {
                  pageX: r.targetTouches[0].pageX,
                  pageY: r.targetTouches[0].pageY,
                }),
                e.touchMove(t, s, r),
                (i = !0));
            }),
            this.$inner.on("touchend.lg", function (r) {
              if ("swipe" === e.touchAction) {
                if (i) (i = !1), e.touchEnd(s, t, r);
                else if (n) {
                  var o = Os(r.target);
                  e.isPosterElement(o) && e.LGel.trigger(Zs);
                }
                (e.touchAction = void 0), (n = !1);
              }
            }));
        }),
        (e.prototype.enableDrag = function () {
          var e = this,
            t = {},
            s = {},
            i = !1,
            n = !1;
          this.settings.enableDrag &&
            (this.outer.on("mousedown.lg", function (s) {
              e.dragOrSwipeEnabled = !0;
              var n = e.getSlideItem(e.index);
              (Os(s.target).hasClass("lg-item") ||
                n.get().contains(s.target)) &&
                (e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  (s.preventDefault(),
                  e.lgBusy ||
                    (e.manageSwipeClass(),
                    (t = { pageX: s.pageX, pageY: s.pageY }),
                    (i = !0),
                    (e.outer.get().scrollLeft += 1),
                    (e.outer.get().scrollLeft -= 1),
                    e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                    e.LGel.trigger(Qs))));
            }),
            Os(window).on("mousemove.lg.global" + this.lgId, function (r) {
              i &&
                e.lgOpened &&
                ((n = !0),
                (s = { pageX: r.pageX, pageY: r.pageY }),
                e.touchMove(t, s),
                e.LGel.trigger(Js));
            }),
            Os(window).on("mouseup.lg.global" + this.lgId, function (r) {
              if (e.lgOpened) {
                var o = Os(r.target);
                n
                  ? ((n = !1), e.touchEnd(s, t, r), e.LGel.trigger(ei))
                  : e.isPosterElement(o) && e.LGel.trigger(Zs),
                  i &&
                    ((i = !1),
                    e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
              }
            }));
        }),
        (e.prototype.triggerPosterClick = function () {
          var e = this;
          this.$inner.on("click.lg", function (t) {
            !e.dragOrSwipeEnabled &&
              e.isPosterElement(Os(t.target)) &&
              e.LGel.trigger(Zs);
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
            s = this.settings.loop;
          e && this.galleryItems.length < 3 && (s = !1),
            this.lgBusy ||
              (this.index + 1 < this.galleryItems.length
                ? (this.index++,
                  this.LGel.trigger(ti, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : s
                ? ((this.index = 0),
                  this.LGel.trigger(ti, { index: this.index }),
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
            s = this.settings.loop;
          e && this.galleryItems.length < 3 && (s = !1),
            this.lgBusy ||
              (this.index > 0
                ? (this.index--,
                  this.LGel.trigger(si, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : s
                ? ((this.index = this.galleryItems.length - 1),
                  this.LGel.trigger(si, { index: this.index, fromTouch: e }),
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
          Os(window).on("keydown.lg.global" + this.lgId, function (t) {
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
                (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
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
              s = this.getElementById("lg-next");
            e + 1 === this.galleryItems.length
              ? s.attr("disabled", "disabled").addClass("disabled")
              : s.removeAttr("disabled").removeClass("disabled"),
              0 === e
                ? t.attr("disabled", "disabled").addClass("disabled")
                : t.removeAttr("disabled").removeClass("disabled");
          }
        }),
        (e.prototype.setTranslate = function (e, t, s, i, n) {
          void 0 === i && (i = 1),
            void 0 === n && (n = 1),
            e.css(
              "transform",
              "translate3d(" +
                t +
                "px, " +
                s +
                "px, 0px) scale3d(" +
                i +
                ", " +
                n +
                ", 1)"
            );
        }),
        (e.prototype.mousewheel = function () {
          var e = this,
            t = 0;
          this.outer.on("wheel.lg", function (s) {
            if (s.deltaY && !(e.galleryItems.length < 2)) {
              s.preventDefault();
              var i = new Date().getTime();
              i - t < 1e3 ||
                ((t = i),
                s.deltaY > 0
                  ? e.goToNextSlide()
                  : s.deltaY < 0 && e.goToPrevSlide());
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
            var t = Os(this.items[e]);
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
                (this.outer.on("mousedown.lg", function (s) {
                  var i = Os(s.target);
                  t = !!e.isSlideElement(i);
                }),
                this.outer.on("mousemove.lg", function () {
                  t = !1;
                }),
                this.outer.on("mouseup.lg", function (s) {
                  var i = Os(s.target);
                  e.isSlideElement(i) &&
                    t &&
                    (e.outer.hasClass("lg-dragging") || e.closeGallery());
                }));
          }
        }),
        (e.prototype.closeGallery = function (e) {
          var t = this;
          if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
          this.LGel.trigger(ii), Os(window).scrollTop(this.prevScrollTop);
          var s,
            i = this.items[this.index];
          if (this.zoomFromOrigin && i) {
            var n = this.mediaContainerPosition,
              r = n.top,
              o = n.bottom,
              a = this.galleryItems[this.index],
              l = a.__slideVideoInfo,
              c = a.poster,
              d = ks(
                i,
                this.outer,
                r + o,
                l && c && this.settings.videoMaxSize
              );
            s = Is(i, this.outer, r, o, d);
          }
          this.zoomFromOrigin && s
            ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
              this.getSlideItem(this.index)
                .addClass("lg-start-end-progress")
                .css(
                  "transition-duration",
                  this.settings.startAnimationDuration + "ms"
                )
                .css("transform", s))
            : (this.outer.addClass("lg-hide-items"),
              this.outer.removeClass("lg-zoom-from-image")),
            this.destroyModules(),
            (this.lGalleryOn = !1),
            (this.isDummyImageRemoved = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            clearTimeout(this.hideBarTimeout),
            (this.hideBarTimeout = !1),
            Os("html").removeClass("lg-on"),
            this.outer.removeClass("lg-visible lg-components-open"),
            this.$backdrop.removeClass("in").css("opacity", 0);
          var u =
            this.zoomFromOrigin && s
              ? Math.max(
                  this.settings.startAnimationDuration,
                  this.settings.backdropDuration
                )
              : this.settings.backdropDuration;
          return (
            this.$container.removeClass("lg-show-in"),
            setTimeout(function () {
              t.zoomFromOrigin &&
                s &&
                t.outer.removeClass("lg-zoom-from-image"),
                t.$container.removeClass("lg-show"),
                t.$backdrop
                  .removeAttr("style")
                  .css(
                    "transition-duration",
                    t.settings.backdropDuration + "ms"
                  ),
                t.outer.removeClass("lg-closing " + t.settings.startClass),
                t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                t.$inner.empty(),
                t.lgOpened && t.LGel.trigger(ni, { instance: t }),
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
            this.LGel.trigger(Vs);
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
                Os(window).off(".lg.global" + e.lgId),
                e.LGel.off(".lg"),
                e.$container.remove();
            }, t),
            t
          );
        }),
        e
      );
    })();
  const ai = function (e, t) {
    return new oi(e, t);
  };
  var li = function () {
      return (
        (li =
          Object.assign ||
          function (e) {
            for (var t, s = 1, i = arguments.length; s < i; s++)
              for (var n in (t = arguments[s]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }),
        li.apply(this, arguments)
      );
    },
    ci = {
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
    di = "lgContainerResize",
    ui = "lgUpdateSlides",
    pi = "lgBeforeOpen",
    hi = "lgBeforeSlide",
    fi = (function () {
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
          (this.settings = li(li({}, ci), this.core.settings)),
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
              var s = e.$LG(t.target);
              s.hasAttribute("data-lg-item-id") &&
                setTimeout(function () {
                  if (e.thumbClickable && !e.core.lgBusy) {
                    var t = parseInt(s.attr("data-lg-item-id"));
                    e.core.slide(t, !1, !0, !1);
                  }
                }, 50);
            }),
            this.core.LGel.on(hi + ".thumb", function (t) {
              var s = t.detail.index;
              e.animateThumb(s);
            }),
            this.core.LGel.on(pi + ".thumb", function () {
              e.thumbOuterWidth = e.core.outer.get().offsetWidth;
            }),
            this.core.LGel.on(ui + ".thumb", function () {
              e.rebuildThumbnails();
            }),
            this.core.LGel.on(di + ".thumb", function () {
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
            s = !1;
          this.$thumbOuter.addClass("lg-grab"),
            this.core.outer
              .find(".lg-thumb")
              .first()
              .on("mousedown.lg.thumb", function (i) {
                e.thumbTotalWidth > e.thumbOuterWidth &&
                  (i.preventDefault(),
                  (t.cords.startX = i.pageX),
                  (t.startTime = new Date()),
                  (e.thumbClickable = !1),
                  (s = !0),
                  (e.core.outer.get().scrollLeft += 1),
                  (e.core.outer.get().scrollLeft -= 1),
                  e.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
              }),
            this.$LG(window).on(
              "mousemove.lg.thumb.global" + this.core.lgId,
              function (i) {
                e.core.lgOpened &&
                  s &&
                  ((t.cords.endX = i.pageX), (t = e.onThumbTouchMove(t)));
              }
            ),
            this.$LG(window).on(
              "mouseup.lg.thumb.global" + this.core.lgId,
              function () {
                e.core.lgOpened &&
                  (t.isMoved
                    ? (t = e.onThumbTouchEnd(t))
                    : (e.thumbClickable = !0),
                  s &&
                    ((s = !1),
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
          this.$lgThumb.on("touchstart.lg", function (s) {
            e.thumbTotalWidth > e.thumbOuterWidth &&
              (s.preventDefault(),
              (t.cords.startX = s.targetTouches[0].pageX),
              (e.thumbClickable = !1),
              (t.startTime = new Date()));
          }),
            this.$lgThumb.on("touchmove.lg", function (s) {
              e.thumbTotalWidth > e.thumbOuterWidth &&
                (s.preventDefault(),
                (t.cords.endX = s.targetTouches[0].pageX),
                (t = e.onThumbTouchMove(t)));
            }),
            this.$lgThumb.on("touchend.lg", function () {
              t.isMoved ? (t = e.onThumbTouchEnd(t)) : (e.thumbClickable = !0);
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
          this.$lgThumb.css("transform", "translate3d(-" + e + "px, 0px, 0px)");
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
              this.translateX > this.thumbTotalWidth - this.thumbOuterWidth &&
                (this.translateX = this.thumbTotalWidth - this.thumbOuterWidth),
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
            s = e.cords.endX - e.cords.startX,
            i = Math.abs(s) / t;
          return (
            i > 0.15 && e.endTime.valueOf() - e.touchMoveTime < 30
              ? ((i += 1) > 2 && (i += 1),
                (i += i * (Math.abs(s) / this.thumbOuterWidth)),
                this.$lgThumb.css(
                  "transition-duration",
                  Math.min(i - 1, 2) + "settings"
                ),
                (s *= i),
                (this.translateX = this.getPossibleTransformX(
                  this.translateX - s
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
          var s,
            i = this.core.galleryItems[t].__slideVideoInfo || {};
          return (
            (s =
              i.youtube && this.settings.loadYouTubeThumbnail
                ? "//img.youtube.com/vi/" +
                  i.youtube[1] +
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
              s +
              '" />\n        </div>'
          );
        }),
        (e.prototype.getThumbItemHtml = function (e) {
          for (var t = "", s = 0; s < e.length; s++)
            t += this.getThumbHtml(e[s].thumb, s);
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
          this.core.LGel.on(hi + ".thumb", function (t) {
            var s = e.core.outer.find(".lg-thumb-item"),
              i = t.detail.index;
            s.removeClass("active"), s.eq(i).addClass("active");
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
  const gi = fi,
    mi = document.querySelectorAll("[data-gallery]");
  mi.length &&
    mi.forEach((e) => {
      ai(e, {
        plugins: [gi],
        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
        speed: 500,
      });
    });
  const vi = document.querySelectorAll("[data-goal-relative]"),
    bi = document.querySelectorAll("[data-goal]"),
    yi =
      (document.querySelector("[data-tabs-titles]"),
      document.querySelectorAll("[data-goal-subject]"));
  for (let e = 0; e < vi.length; e++)
    Array.from(vi[e].children).forEach(function (e) {
      e.addEventListener("click", wi), e.addEventListener("click", Ci);
    });
  function wi() {
    if (1 != this.dataset.goal && 1 != this.dataset.goalSubject)
      if (2 != this.dataset.goal && 2 != this.dataset.goalSubject)
        if (3 != this.dataset.goal && 3 != this.dataset.goalSubject);
        else {
          for (let e = 0; e < bi.length; e++)
            bi[e].classList.remove("_filter-active");
          for (let e = 0; e < vi.length; e++)
            vi[e].children[2].classList.add("_filter-active");
        }
      else {
        for (let e = 0; e < bi.length; e++)
          bi[e].classList.remove("_filter-active");
        for (let e = 0; e < vi.length; e++)
          vi[e].children[1].classList.add("_filter-active");
      }
    else {
      for (let e = 0; e < bi.length; e++)
        bi[e].classList.remove("_filter-active");
      for (let e = 0; e < vi.length; e++)
        vi[e].children[0].classList.add("_filter-active");
    }
  }
  function Ci() {
    if (1 != this.dataset.goal && 1 != this.dataset.goalSubject)
      if (2 != this.dataset.goal && 2 != this.dataset.goalSubject)
        if (3 != this.dataset.goal && 3 != this.dataset.goalSubject);
        else {
          for (let e = 0; e < yi.length; e++)
            yi[e].classList.add("_tab-disabled");
          for (let e = 4; e < 6; e++) yi[e].classList.remove("_tab-disabled");
        }
      else {
        for (let e = 0; e < yi.length; e++)
          yi[e].classList.add("_tab-disabled");
        for (let e = 3; e < 4; e++) yi[e].classList.remove("_tab-disabled");
      }
    else {
      for (let e = 0; e < yi.length; e++) yi[e].classList.add("_tab-disabled");
      for (let e = 0; e < 3; e++) yi[e].classList.remove("_tab-disabled");
    }
  }
  Array.from(yi).forEach(function (e) {
    e.addEventListener("click", zi),
      e.addEventListener("click", Ci),
      e.addEventListener("click", wi),
      e.addEventListener("click", Li);
  });
  const Si = document.querySelectorAll("[data-short-name]"),
    Ti = {
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
    },
    xi = document.querySelectorAll(".total-foodcalc__order-option"),
    Ei = document.querySelector(".total-foodcalc__order-title"),
    Oi = [
      "База 600 ККАЛ",
      "Похудение 800 ККАЛ",
      "Похудение 1100 ККАЛ",
      "Поддержание 1500 ККАЛ",
      "Набор 2000 ККАЛ",
      "Набор 2500 ККАЛ",
    ];
  function Li() {
    for (let e = 0; e < yi.length; e++)
      this == yi[e] && ((Ei.innerHTML = Oi[e]), xi[e].click());
  }
  function Ai() {
    if (Si)
      for (let e = 0; e < Si.length; e++)
        window.innerWidth < 768
          ? (Si[e].innerHTML = Ti.mobile[e])
          : (Si[e].innerHTML = Ti.desctop[e]);
  }
  Ai(), window.addEventListener("resize", Ai, !1);
  const ki = document.querySelector(".schedule-foodcalc__items"),
    Ii = document.querySelector(".schedule-foodcalc__items").children,
    Mi = document.querySelectorAll("[data-filter-day]"),
    $i = document.querySelectorAll("[data-filter-type]"),
    Pi = document.querySelectorAll(
      ".goal-schedule__info>.info-schedule__subtitle>span"
    );
  let _i = [];
  function Di(e, t) {
    let s = (e = Math.abs(e) % 100) % 10;
    return e > 10 && e < 20
      ? t[2]
      : s > 1 && s < 5
      ? t[1]
      : 1 == s
      ? t[0]
      : t[2];
  }
  function zi() {
    ki.innerHTML = "";
    for (let e = 0; e < yi.length; e++) {
      if (yi[e].classList.contains("_tab-active"))
        for (let t = 0; t < Mi.length; t++)
          if (Mi[t].checked)
            for (let s = 0; s < $i.length; s++)
              if ($i[s].checked) {
                let i = [];
                for (let n = 0; n < _i.length; n++)
                  if (
                    _i[n].dataset.categoryPreset ==
                      yi[e].dataset.filterPreset &&
                    _i[n].dataset.categoryDay == Mi[t].dataset.filterDay &&
                    _i[n].dataset.categoryType == $i[s].dataset.filterType
                  ) {
                    (ki.innerHTML += _i[n].outerHTML), i.push(_i[n]);
                    let e = 0,
                      t = 0,
                      s = 0,
                      r = 0;
                    for (let n = 0; n < i.length; n++)
                      (e += parseInt(i[n].dataset.totalCalories)),
                        (t += parseInt(i[n].dataset.totalProteins)),
                        (s += parseInt(i[n].dataset.totalFats)),
                        (r += parseInt(i[n].dataset.totalCarbs)),
                        (Pi[1].innerHTML = e),
                        (Pi[2].innerHTML = t),
                        (Pi[3].innerHTML = s),
                        (Pi[4].innerHTML = r);
                    Pi[0].innerHTML =
                      i.length + " " + Di(i.length, ["БЛЮДО", "БЛЮДА", "БЛЮД"]);
                  }
              }
      this && this.click();
    }
  }
  Array.from(Mi).forEach(function (e) {
    e.addEventListener("click", zi);
  }),
    Array.from($i).forEach(function (e) {
      e.addEventListener("click", zi);
    }),
    (function () {
      for (let e = 0; e < Ii.length; e++) _i.push(Ii[e]);
      (ki.innerHTML = ""), zi();
    })(),
    (window.FLS = !1),
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
          r && (o(), document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const t = Array.from(e).filter(function (e, t, s) {
          return !e.dataset.spollers.split(",")[0];
        });
        t.length && r(t);
        let i = d(e, "spollers");
        function r(e, t = !1) {
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
          const s = e.querySelectorAll("[data-spoller]");
          s.length > 0 &&
            s.forEach((e) => {
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
            const s = t.closest("[data-spoller]"),
              i = s.closest("[data-spollers]"),
              r = !!i.hasAttribute("data-one-spoller");
            i.querySelectorAll("._slide").length ||
              (r && !s.classList.contains("_spoller-active") && l(i),
              s.classList.toggle("_spoller-active"),
              n(s.nextElementSibling, 500)),
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
              r(e.itemsArray, e.matchMedia);
            }),
              r(e.itemsArray, e.matchMedia);
          });
      }
    })(),
    (function () {
      const e = document.querySelectorAll("[data-tabs]");
      let t = [];
      if (e.length > 0) {
        const s = location.hash.replace("#", "");
        s.startsWith("tab-") && (t = s.replace("tab-", "").split("-")),
          e.forEach((e, s) => {
            e.classList.add("_tab-init"),
              e.setAttribute("data-tabs-index", s),
              e.addEventListener("click", r),
              (function (e) {
                const s = e.querySelectorAll("[data-tabs-titles]>*"),
                  i = e.querySelectorAll("[data-tabs-body]>*"),
                  n = e.dataset.tabsIndex,
                  r = t[0] == n;
                if (r) {
                  e.querySelector(
                    "[data-tabs-titles]>._tab-active"
                  ).classList.remove("_tab-active");
                }
                i.length > 0 &&
                  i.forEach((e, i) => {
                    s[i].setAttribute("data-tabs-title", ""),
                      e.setAttribute("data-tabs-item", ""),
                      r && i == t[1] && s[i].classList.add("_tab-active"),
                      (e.hidden = !s[i].classList.contains("_tab-active"));
                  });
              })(e);
          });
        let i = d(e, "tabs");
        i &&
          i.length &&
          i.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              n(e.itemsArray, e.matchMedia);
            }),
              n(e.itemsArray, e.matchMedia);
          });
      }
      function n(e, t) {
        e.forEach((e) => {
          const s = (e = e.item).querySelector("[data-tabs-titles]"),
            i = e.querySelectorAll("[data-tabs-title]"),
            n = e.querySelector("[data-tabs-body]");
          e.querySelectorAll("[data-tabs-item]").forEach((r, o) => {
            t.matches
              ? (n.append(i[o]), n.append(r), e.classList.add("_tab-spoller"))
              : (s.append(i[o]), e.classList.remove("_tab-spoller"));
          });
        });
      }
      function r(e) {
        const t = e.target;
        if (t.closest("[data-tabs-title]")) {
          const n = t.closest("[data-tabs-title]"),
            r = n.closest("[data-tabs]");
          if (
            !n.classList.contains("_tab-active") &&
            !r.querySelectorAll("._slide").length
          ) {
            const e = r.querySelector("[data-tabs-title]._tab-active");
            e && e.classList.remove("_tab-active"),
              n.classList.add("_tab-active"),
              (function (e) {
                const t = e.querySelectorAll("[data-tabs-title]"),
                  n = e.querySelectorAll("[data-tabs-item]"),
                  r = e.dataset.tabsIndex,
                  o = (function (e) {
                    if (e.hasAttribute("data-tabs-animate"))
                      return e.dataset.tabsAnimate > 0
                        ? e.dataset.tabsAnimate
                        : 500;
                  })(e);
                n.length > 0 &&
                  n.forEach((e, n) => {
                    t[n].classList.contains("_tab-active")
                      ? (o ? i(e, o) : (e.hidden = !1),
                        e.closest(".popup") ||
                          (location.hash = `tab-${r}-${n}`))
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
            s(e.target, e);
          }),
            e.addEventListener("reset", function (e) {
              const t = e.target;
              f.formClean(t);
            });
      async function s(t, s) {
        if (0 === (e ? f.getErrors(t) : 0)) {
          if (t.hasAttribute("data-ajax")) {
            s.preventDefault();
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
              t.classList.remove("_sending"), i(t);
            } else alert("Ошибка"), t.classList.remove("_sending");
          } else t.hasAttribute("data-dev") && (s.preventDefault(), i(t));
        } else {
          s.preventDefault();
          const e = t.querySelector("._form-error");
          e && t.hasAttribute("data-goto-error") && u(e, !0, 1e3);
        }
      }
      function i(e) {
        document.dispatchEvent(
          new CustomEvent("formSent", { detail: { form: e } })
        ),
          f.formClean(e),
          c(`[Формы]: ${"Форма отправлена!"}`);
      }
    })(!0),
    (h.selectModule = new p({})),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const s = t.closest("[data-goto]"),
              i = s.dataset.goto ? s.dataset.goto : "",
              n = !!s.hasAttribute("data-goto-header"),
              r = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
            u(i, n, r), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            s = t.target;
          if ("navigator" === s.dataset.watch) {
            const e = s.id,
              i =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? i && i.classList.add("_navigator-active")
              : i && i.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })();
})();
