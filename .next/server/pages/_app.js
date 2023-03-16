(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
;// CONCATENATED MODULE: ./components/footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-gray-100",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container max-w-[1372px] mx-auto py-4",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap items-top justify-center text-xs md:justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full md:w-1/4 px-4 justify-items-center text-center md:text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "text-black font-medium mb-3",
                                children: "Links"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "inline-flex flew-wrap mb-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "",
                                        className: "hover:underline text-gray-600 p-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoMdMail, {
                                            className: "h-5 w-5 text-gray-900"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "",
                                        className: "hover:underline text-gray-600 p-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoLogoInstagram, {
                                            className: "h-5 w-5 text-gray-900"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "",
                                        className: "hover:underline text-gray-600 p-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoLogoLinkedin, {
                                            className: "h-5 w-5 text-gray-900"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "inline-flex flex-wrap justify-items-center text-center md:text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-1/3 px-4 mb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "text-black font-medium mb-3",
                                    children: "Some text"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-1/3 px-4 mb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "text-black font-medium mb-3",
                                    children: "Some text"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-1/3 px-4 mb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "text-black font-medium mb-3",
                                    children: "Some text"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/logo.webp
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.3b391a02.webp","height":60,"width":170,"blurDataURL":"data:image/webp;base64,UklGRlwAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAABACAAAAAAAAIT5UYGIAAAAAAAQjAAAAAFZQOCAcAAAAMAEAnQEqCAADAAJAOCWkAANwAP76xasJ0Y4AAA==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/navbar.tsx






const Navbar = ({ active , handleClick , sideClick , showSearch , searchClick , searchText , clearSearch  })=>{
    const genericHamburgerLine = `h-0.5 w-4 my-[1.5px] rounded-full bg-black transition ease transform duration-300`;
    const activeClass = active ? "block" : "hidden";
    return(//   Main Navigation Bar
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sticky z-50 w-full top-0 items-center mb-0 p-0 md:px-1 flex flex-wrap bg-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "inline-flex flex-auto sticky top-0 z-50 items-center bg-white p-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "inline-flex sticky top-0 z-50 items-center mr-auto px-0 md:px-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "md:hidden flex flex-col h-6 w-6 px-1 justify-center items-center group hover:scale-95",
                                onClick: handleClick,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `${genericHamburgerLine} ${active ? "rotate-45 translate-y-[4.9px] opacity-100 group-hover:bg-gray-600" : "opacity-100 group-hover:bg-gray-600"}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `${genericHamburgerLine} ${active ? "opacity-0" : "opacity-100 group-hover:bg-gray-600"}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `${genericHamburgerLine} ${active ? "-rotate-45 -translate-y-[4.9px] opacity-100 group-hover:bg-gray-600" : "opacity-100 group-hover:bg-gray-600"}`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-[80px] mr-auto md:w-[120px] pl-1 md:pl-0 hover:scale-95",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "py-1.5",
                                    onClick: sideClick,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logo,
                                        alt: "Le Book Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden w-full md:inline-flex md:flex-grow md:w-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page1",
                                            className: "md:inline-flex md:w-auto w-full px-2 py-2 rounded font-inter text-xs text-gray-500 font-regular items-center justify-cente hover:text-black ",
                                            children: "page 1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page2",
                                            className: "md:inline-flex md:w-auto w-full px-2 py-2 rounded font-inter text-xs text-gray-500 font-regular items-center justify-cente hover:text-black ",
                                            children: "page 2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page3",
                                            className: "md:inline-flex md:w-auto w-full px-2 py-2 rounded font-inter text-xs text-gray-500 font-regular items-center justify-cente hover:text-black ",
                                            children: "page 3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/page4",
                                            className: "md:inline-flex md:w-auto w-full px-2 py-2 rounded font-inter text-xs text-gray-500 font-regular items-center justify-cente hover:text-black ",
                                            children: "page 4"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "p-1 focus:outline-none focus:shadow-outline",
                            onClick: searchClick,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                className: "w-4 h-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden md:inline-flex items-center px-2 pt-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "px-4 py-2 mx-1 text-xs hover:bg-gray-800 font-inter font-medium bg-black text-white border border-black rounded-full ",
                        children: "Log In"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "px-4 py-2 mx-1 text-xs hover:bg-gray-200 font-inter font-medium bg-white text-black border border-black rounded-full",
                        children: "Sign Up"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `md:hidden overflow-none top-0 flex justify-center z-10 w-full bg-white shadow-md transform ${showSearch ? "" : "-translate-y-full hidden"} transition-transform ease-in-out duration-100 py-2 px-4`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inline-flex items-center w-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "flex w-full p-1 px-3 text-gray-900 bg-gray-50 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "Search",
                                    value: searchText,
                                    onChange: clearSearch
                                }),
                                searchText && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none",
                                    onClick: clearSearch,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoMdClose, {
                                        className: "h-5 w-5 text-gray-400"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                    className: "block appearance-none w-auto p-1.5 px-2 pr-8 rounded-r-full border border-gray-300 bg-white text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "option1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "option2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "option3"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "fill-current h-4 w-4",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `fixed md:hidden inset-y-0 z-30 left-0 w-full max-w-[80vw] bg-white shadow-lg transform ${active ? "translate-x-0" : "-translate-x-full"} transition-transform ease-in-out duration-300 py-10`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col h-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col mb-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    onClick: sideClick,
                                    className: "px-4 py-2 hover:bg-gray-100",
                                    children: "HOME"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page1",
                                    onClick: sideClick,
                                    className: "px-4 py-2 hover:bg-gray-100",
                                    children: "Page 1"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page2",
                                    onClick: sideClick,
                                    className: "px-4 py-2 hover:bg-gray-100",
                                    children: "Page 2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page3",
                                    onClick: sideClick,
                                    className: "px-4 py-2 hover:bg-gray-100",
                                    children: "Page 3"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/page4",
                                    onClick: sideClick,
                                    className: "px-4 py-2 hover:bg-gray-100",
                                    children: "Page 4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col px-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "px-4 py-2 my-2 mx-5 text-xs hover:bg-gray-800 font-inter font-medium bg-black text-white border border-black rounded-full ",
                                        children: "Log In"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "px-4 py-2 my-2 mx-5 text-xs hover:bg-gray-200 font-inter font-medium bg-white text-black border border-black rounded-full",
                                        children: "Sign Up"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: `fixed md:hidden inset-0 z-20 bg-black bg-opacity-50 ${active ? "visible" : "invisible"} transition-opacity ease-in-out duration-500`,
                onClick: handleClick
            })
        ]
    }));
};
/* harmony default export */ const navbar = (Navbar);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.tsx






function App({ Component , pageProps  }) {
    const [active, setActive] = (0,external_react_.useState)(false);
    const [showSearch, setShowSearch] = (0,external_react_.useState)(false);
    const [searchText, setSearchText] = (0,external_react_.useState)("");
    const handleClick = ()=>{
        setActive(!active);
    };
    const sideClick = ()=>{
        setActive(false);
    };
    const searchClick = ()=>{
        setShowSearch(!showSearch);
    };
    const clearSearch = ()=>{
        setSearchText("");
    };
    return(// ${ active ? 'overflow-hidden' : 'block' }
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex flex-col h-screen`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed top-0 z-50 w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                    active: active,
                    handleClick: handleClick,
                    sideClick: sideClick,
                    showSearch: showSearch,
                    searchClick: searchClick,
                    searchText: searchText,
                    clearSearch: clearSearch
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-[1372px] mt-[42px] w-full text-center md:mt-[48px] grow mx-auto justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
            })
        ]
    }));
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [443,61], () => (__webpack_exec__(2863)));
module.exports = __webpack_exports__;

})();