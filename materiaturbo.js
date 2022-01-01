var materiaConfig = {
    themeInfo: {
        version: "2.7",
        config: {
            featuresCustomjQueryScript: "<data:skin.vars.featuresCustomjQueryScript/>",
            featuresNativeShare: "<data:skin.vars.featuresNativeShare/>",
            featuresSubMenu: "<data:skin.vars.featuresSubMenu/>",
            featuresPostScroll: "<data:skin.vars.featuresPostScroll/>",
            featuresRippleEffect: "<data:skin.vars.featuresRippleEffect/>",
            featuresTurbo: "<data:skin.vars.featuresTurbo/>",

            navigationDrawerMenu: `<b:eval cond='data:widgets any (w => w.id == "LinkList999")'>`
        }
    },
    elements: {
        elementHead: document.getElementsByTagName("head")[0],
        elementScript: document.getElementsByTagName("script")[0],
        elementSnackbar: ".snackbar",
        elementButtonColorMode: "#button_color_mode",
        elementButtonShare: ".button_toggle_share",
        elementButtonMenu: "#button_menu",
        elementButtonSearch: ".button_toggle_search",
        elementButtonSearchClose: ".button_close_search",
        elementLogo: ".Header img",
        elementFAB: ".fab_container",
        elementSearchInput: ".search_input",
        elementBackdrop: ".backdrop",
        elementScrollTop: ".scroll_top",
        elementPostBody: ".elcreative_section .post_container_end .post_body",
        elementScrolIndicator: ".scroll_indicator",
        elementDrawerMenu: ".elcreative_navigation .navigation_drawer_menu",

        pager: {
            pagerContainer: ".blog_pager",
            pagerPostContainter: ".blog_posts",
            pagerPostItem: ".blog_posts .post_outer_container",
            pagerOlderLink: ".blog_pager_older_link",
        }
    },

    scripts: {
        scriptGoogleCSE: "https://cse.google.com/cse.js?cx=",
        scriptHighlightJS: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js",
        scriptJquery: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
        scriptGoogleTranslate: "https://translate.google.com/translate_a/element.js?cb=elcreativeGoogleTranslate",
    },

    icons: {
        iconLoader: `<b:include data='{iconId: "loader"}' name='defaultIcons'/>`,
        iconCheck: `<b:if cond='data:skin.vars.defaultCustomIcon == "2px"'><use xlink:href='#icon_check'/><b:else/><b:include data='{iconId: "icon_check"}' name='defaultIcons'/></b:if>`,
        iconCopy: `<b:if cond='data:skin.vars.defaultCustomIcon == "2px"'><use xlink:href='#icon_copy'/><b:else/><b:include data='{iconId: "icon_copy"}' name='defaultIcons'/></b:if>`,
        iconDocument: `<b:if cond='data:skin.vars.defaultCustomIcon == "2px"'><use xlink:href='#icon_document'/><b:else/><b:include data='{iconId: "icon_document"}' name='defaultIcons'/></b:if>`,
        iconReload: `<b:if cond='data:skin.vars.defaultCustomIcon == "2px"'><use xlink:href='#icon_reload'/><b:else/><b:include data='{iconId: "icon_reload"}' name='defaultIcons'/></b:if>`,
    }
};

// Create Element
function functionCreateElement(type, config) {
    var element = document.createElement(type);
    var attributes;
    for (attributes in config) {
        if (attributes == "class") {
            element.classList.add.apply(element.classList, config[attributes]);
        } else {
            if (attributes == "content") {
                element.innerHTML = config[attributes];
            } else {
                element[attributes] = config[attributes];
            }
        }
    };
    return element
};

// Promise
function functionLoadScriptAsync(url) {
    return new Promise(function (resolve, reject) {
        var element = functionCreateElement("script", {
            "src": url,
            "async": true
        });
        element.onload = function () {
            resolve();
        };
        element.onerror = function () {
            reject(url);
        };
        materiaConfig.elements.elementScript.parentNode.insertBefore(element, materiaConfig.elements.elementScript);
    });
};

// Snackbar
function functionSnackbar(content, duration) {
    var element = functionCreateElement("div", {
        "class": [
            "snackbar",
        ],
        "content": `<span class='snackbar_text'>${content}</span>`
    });
    document.body.appendChild(element);

    document.querySelectorAll(materiaConfig.elements.elementSnackbar).forEach(function (element, index) {
        setTimeout(function () {
            element.classList.add("active");

            setTimeout(function () {
                element.classList.remove("active");
            }, index + duration + 100);

            setTimeout(function () {
                element.remove();
            }, index + duration + 200);
        }, index * 50);
    })
};

// Copy
async function functionCopy(text) {
    try {
        await navigator.clipboard.writeText(text);
        functionSnackbar("Copied!", 2000)
    } catch (error) {
        functionSnackbar("Failed to copy: " + error, 2000)
    }
};

// Toggle Share
function functionToggleShare(selector) {
    var button = [].slice.call(document.querySelectorAll(selector));

    if (materiaConfig.themeInfo.config.featuresNativeShare === "2px") {
        // If Native Share Feature is Enabled
        if (typeof navigator.share === "undefined") {
            document.querySelectorAll(selector).forEach(function (element) {
                element.remove();
            });

            console.warn("The browser does not support the Share API. Please disable this feature on Materia X2 Theme.");
        };
    };

    if (button) {
        button.forEach(function (element, index) {
            element.addEventListener("click", function () {
                var attrPostURL = element.getAttribute("data-post-url");
                var attrPostTitle = element.getAttribute("data-post-title");

                if (materiaConfig.themeInfo.config.featuresNativeShare === "2px") {
                    if (typeof navigator.share !== 'undefined') {
                        navigator.share({
                            title: attrPostTitle,
                            url: attrPostURL,
                            text: `${attrPostTitle}\n\n<data:messages.readMore/>:`
                        }).then(function () {
                            console.log("Share API is Enabled")
                        }).catch(function (error) {
                            console.log(error)
                        })
                    };
                } else {
                    // If Native Share Feature is Disabled
                    var dialogShareBox = document.querySelector(".dialog_share_box");
                    var dialogShareBoxButton = dialogShareBox.querySelectorAll("button");

                    if (dialogShareBox) {
                        dialogShareBoxButton.forEach(function (element) {
                            element.setAttribute("data-url", attrPostURL);
                            element.setAttribute("data-title", `${attrPostTitle}\n\n<data:messages.readMore/>:`);

                            dialogShareBox.querySelector(".dialog_header span").innerHTML = "<data:messages.share.escaped/>: " + attrPostTitle;
                        });
                    };
                }
            });
        });
    }
};
functionToggleShare(materiaConfig.elements.elementButtonShare);

// Google Translate
Defer(function () {
    functionLoadScriptAsync(materiaConfig.scripts.scriptGoogleTranslate).then(function () {
        var loader = document.querySelector("#google_translate_element .loader");
        loader.parentNode.removeChild(loader)
    })
});
function elcreativeGoogleTranslate() {
    new google.translate.TranslateElement({
        pageLanguage: "<b:eval expr='data:blog.locale.language ?: &quot;auto&quot;'/>", // auto
        autoDisplay: true
    }, "google_translate_element")
};

// jQuery Script
if (materiaConfig.themeInfo.config.featuresCustomjQueryScript === "2px") {
    Defer(function () {
        functionLoadScriptAsync(materiaConfig.scripts.scriptJquery)
    });
};

// Navigation Drawer and Sub Menu
if (materiaConfig.themeInfo.config.navigationDrawerMenu === "true") {
    if (document.querySelector(materiaConfig.elements.elementButtonMenu)) {
        document.querySelector(materiaConfig.elements.elementButtonMenu).addEventListener("click", function () {
            document.body.classList.toggle("drawer_menu_active");
            document.body.classList.remove("search_active", "comments_active");
        });

        if (materiaConfig.themeInfo.config.featuresSubMenu === "2px") {
            // Submenu
            function functionDrawerSubmenu(selector) {
                var drawerResult = "";
                drawerBoolean = false;
                document.querySelector(selector).querySelectorAll("li").forEach(function (element, index) {
                    var drawerText = element.innerText;
                    if (drawerText.startsWith("_")) {
                        element = element.outerHTML.replace(">_", ">");
                        drawerText = "";
                        if (!drawerBoolean) {
                            drawerResult = drawerResult.replace(/<\/li>$/, "");
                            drawerText = '<ul class="drawer_sub">';
                        };
                        drawerResult = drawerResult + (drawerText + element);
                        drawerBoolean = true;
                    } else {
                        if (drawerBoolean) {
                            drawerResult = drawerResult + "</ul>";
                        };
                        drawerResult = drawerResult + element.outerHTML;
                        drawerBoolean = false;
                    }
                    if (drawerBoolean & index == document.querySelector(selector).querySelectorAll("li").length - 1) {
                        drawerResult = drawerResult + "</ul></li>";
                    }
                });
                document.querySelector(selector).querySelectorAll("ul")[0].innerHTML = drawerResult;
                document.querySelector(selector).querySelector("ul").classList.remove("visibility_hidden");
                document.querySelector(selector).querySelectorAll(".drawer_sub").forEach((element) => {
                    element.parentNode.classList.add("toggle");
                });
                document.querySelector(selector).querySelectorAll(".toggle > a").forEach((element) => {
                    element.setAttribute("href", "javascript:");
                    element.addEventListener("click", () => {
                        element.classList.toggle("visible");
                    });
                });
            };
            if (document.querySelector(materiaConfig.elements.elementDrawerMenu)) {
                functionDrawerSubmenu(materiaConfig.elements.elementDrawerMenu);
            }
        }
    };
};

// Ripple Effects
if (materiaConfig.themeInfo.config.featuresRippleEffect === "2px") {
    Defer(function () {
        var elcreativeRipple;
        document.onpointerdown = function (event) {
            var rippleTarget = event.target;
            var rippleElement;

            if (elcreativeRipple) {
                var rippleContent = elcreativeRipple;
                elcreativeRipple = null;

                setTimeout(function () {
                    if (rippleContent.parentNode) {
                        rippleContent.parentNode.removeChild(rippleContent)
                    }
                }, 400)
            };

            for (; rippleTarget && rippleTarget.classList && !rippleTarget.classList.contains("elcreative_ripple");) {
                rippleTarget = rippleTarget.parentNode;
            };

            if (rippleTarget && rippleTarget.classList && rippleTarget.classList.contains("elcreative_ripple")) {
                var rippleAxisX = event.x - rippleTarget.getBoundingClientRect().left;
                var rippleAxisY = event.y - rippleTarget.getBoundingClientRect().top;
                var rippleWidth = Math.max(rippleAxisX, rippleTarget.offsetWidth - rippleAxisX);
                var rippleHeight = Math.max(rippleAxisY, rippleTarget.offsetHeight - rippleAxisY);

                rippleWidth = Math.sqrt(rippleWidth * rippleWidth + rippleHeight * rippleHeight);
                (rippleHeight = document.createElement("i")).classList.add("ripple_container");
                rippleTarget.appendChild(rippleHeight);

                (rippleElement = document.createElement("i")).style.top = rippleAxisY - rippleWidth + "px";
                rippleElement.style.left = rippleAxisX - rippleWidth + "px";
                rippleElement.style.height = 2 * rippleWidth + "px";
                rippleElement.style.width = 2 * rippleWidth + "px";
                rippleElement.style.transform = "scale(0)";
                rippleHeight.appendChild(rippleElement);

                elcreativeRipple = rippleHeight;
                var rippleTimeOut = setTimeout(function () {
                    rippleElement.style.transform = "scale(1)";
                }, 24);

                document.onpointerup = document.onpointercancel = function () {
                    document.onpointerup = document.onpointercancel = document.onpointermove = null;
                    elcreativeRipple.firstChild.style.opacity = "0";
                };

                document.onpointermove = function (render) {
                    if (4 < event.rippleWidth - render.rippleWidth || -4 > event.rippleWidth - render.rippleWidth || 4 < event.y - render.y || -4 > event.y - render.y) {
                        clearTimeout(rippleTimeOut), document.onpointercancel();
                    }
                }
            }
        };
    });
};

// Turboload
if (materiaConfig.themeInfo.config.featuresTurbo === "2px") {
    document.addEventListener("turbo:load", function () {
        window.easyToggleState();
        window.Sharer.init();
        functionToggleShare(materiaConfig.elements.elementButtonShare);
    });
};

// Toggle Dark/Light Mode
if (document.querySelector(materiaConfig.elements.elementButtonColorMode)) {
    document.querySelector(materiaConfig.elements.elementButtonColorMode).addEventListener("click", function () {
        var logo = document.querySelector(materiaConfig.elements.elementLogo);

        document.body.classList.toggle("darkmode");
        localStorage.setItem("color_mode", "dark" === localStorage.getItem("color_mode") ? "light" : "dark");

        if (localStorage.getItem("color_mode") === "dark") {
            document.body.classList.add("darkmode");
            if (typeof logo !== "undefined" && logo !== null && typeof logoDark !== "undefined") {
                logo.setAttribute("src", logoDark)
            }
        } else {
            document.body.classList.remove("darkmode");
            if (typeof logo !== "undefined" && logo !== null && typeof logoLight !== "undefined") {
                logo.setAttribute("src", logoLight)
            }
        }
    });

    if (localStorage.getItem("color_mode") === "dark") {
        if (typeof logo !== "undefined" && logo !== null && typeof logoDark !== "undefined") {
            logo.setAttribute("src", logoDark)
        }
    } else {
        if (typeof logo !== "undefined" && logo !== null && typeof logoLight !== "undefined") {
            logo.setAttribute("src", logoLight)
        }
    };
};

// Toggle Search
if (document.querySelector(materiaConfig.elements.elementButtonSearch)) {
    document.querySelector(materiaConfig.elements.elementButtonSearch).addEventListener("click", function () {
        document.body.classList.toggle("search_active");
        document.body.classList.remove("drawer_menu_active")
        document.querySelector(materiaConfig.elements.elementSearchInput).focus();
    });
};

// Close Search Button
if (document.querySelector(materiaConfig.elements.elementButtonSearchClose)) {
    document.querySelector(materiaConfig.elements.elementButtonSearchClose).addEventListener("click", function () {
        document.body.classList.remove("search_active");
        document.querySelector(materiaConfig.elements.elementSearchInput).blur()
    })
};

// Backdrop
if (document.querySelector(materiaConfig.elements.elementBackdrop)) {
    document.querySelector(materiaConfig.elements.elementBackdrop).addEventListener("click", function () {
        document.body.classList.remove("search_active", "drawer_menu_active", "comments_active");
        document.querySelector(materiaConfig.elements.elementSearchInput).blur()
    })
};

// Scroll Top
if (document.querySelector(materiaConfig.elements.elementScrollTop)) {
    document.querySelector(materiaConfig.elements.elementScrollTop).addEventListener("click", function () {
        document.documentElement.scrollTop = 0
    })
};

// Floating Action Button and Scroll Indicator
window.addEventListener("scroll", function () {
    if (document.querySelector(materiaConfig.elements.elementFAB) && window.pageYOffset > 150) {
        document.querySelector(materiaConfig.elements.elementFAB).classList.add("visible")
    } else {
        document.querySelector(materiaConfig.elements.elementFAB).classList.remove("visible")
    };

    if (materiaConfig.themeInfo.config.featuresPostScroll === "2px") {
        // Scroll Indicator
        function functionScrollIndicator(selector) {
            var scrollWindow = document.body.scrollTop || document.documentElement.scrollTop;
            var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (scrollWindow / scrollHeight) * 100;

            document.querySelector(selector).style.width = scrolled + "%"
        };

        functionScrollIndicator(materiaConfig.elements.elementScrolIndicator);
    }
});
