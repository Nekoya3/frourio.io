(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(d,i(i({ref:t},u),{},{components:n})):r.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},106:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},107:function(e,t,n){"use strict";var a=n(0),r=n(108);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},108:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},109:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(107),c=n(106),i=n(47),l=n.n(i),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,y=Object(a.useState)(i),O=y[0],g=y[1],j=Object(a.useState)(!1),w=j[0],h=j[1];if(null!=p){var x=f[p];null!=x&&x!==O&&b.some((function(e){return e.value===x}))&&g(x)}var E=function(e){g(e),null!=p&&v(p,e)},N=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},I=function(){h(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",I),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",I)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),T(e)},onFocus:function(){return E(t)},onClick:function(){E(t),h(!1)},onPointerDown:function(){return h(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},110:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},124:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(49),c=n.n(o);t.a=function(e){var t=e.children,n=e.minHeight,a=e.maxHeight,o=e.url;return r.a.createElement("div",{className:c.a.browserWindow,style:{minHeight:n}},r.a.createElement("div",{className:c.a.browserWindowHeader},r.a.createElement("div",{className:c.a.buttons},r.a.createElement("span",{className:c.a.dot,style:{background:"#f25f58"}}),r.a.createElement("span",{className:c.a.dot,style:{background:"#fbbe3c"}}),r.a.createElement("span",{className:c.a.dot,style:{background:"#58cb42"}})),r.a.createElement("div",{className:c.a.browserWindowAddressBar},o),r.a.createElement("div",{className:c.a.browserWindowMenuIcon},r.a.createElement("div",null,r.a.createElement("span",{className:c.a.bar}),r.a.createElement("span",{className:c.a.bar}),r.a.createElement("span",{className:c.a.bar})))),r.a.createElement("div",{className:c.a.browserWindowBody,style:{maxHeight:a}},t))}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),o=(n(0),n(105)),c=n(109),i=n(110),l=n(124),u={id:"gui",title:"Setup with GUI"},s={unversionedId:"Installation/gui",id:"Installation/gui",isDocsHomePage:!1,title:"Setup with GUI",description:"<Tabs",source:"@site/docs/Installation/gui.mdx",slug:"/Installation/gui",permalink:"/docs/Installation/gui",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/Installation/gui.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Setup with CUI",permalink:"/docs/Installation/cui"}},b=[],p={rightToc:b};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"npx",values:[{label:"npx",value:"npx"},{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"npx",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx create-frourio-app\n"))),Object(o.b)(i.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm init frourio-app\n"))),Object(o.b)(i.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn create frourio-app\n")))),Object(o.b)("br",null),Object(o.b)("p",null,"Once the above command is installed, the browser will automatically open at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")),Object(o.b)(l.a,{url:"http://localhost:3000",maxHeight:480,mdxType:"BrowserWindow"},Object(o.b)("img",{src:"/img/gui.png"})),Object(o.b)("br",null),Object(o.b)("p",null,"Fill in the blanks and press the Create button at the bottom to start installation again and change your browser to Next.js or Nuxt.js."),Object(o.b)(c.a,{defaultValue:"next",values:[{label:"Next.js",value:"next"},{label:"Nuxt.js",value:"nuxt"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"next",mdxType:"TabItem"},Object(o.b)(l.a,{url:"http://localhost:3000",mdxType:"BrowserWindow"},Object(o.b)("img",{src:"/img/nextjs.png"}))),Object(o.b)(i.a,{value:"nuxt",mdxType:"TabItem"},Object(o.b)(l.a,{url:"http://localhost:3000",mdxType:"BrowserWindow"},Object(o.b)("img",{src:"/img/nuxtjs.png"})))))}m.isMDXComponent=!0}}]);