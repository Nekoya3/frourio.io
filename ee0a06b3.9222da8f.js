(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(121)),o=r(125),s=r(126),i={id:"cors-helmet",title:"CORS / Helmet"},l={unversionedId:"advanced/cors-helmet",id:"advanced/cors-helmet",isDocsHomePage:!1,title:"CORS / Helmet",description:"<Tabs",source:"@site/docs/advanced/cors-helmet.mdx",slug:"/advanced/cors-helmet",permalink:"/docs/advanced/cors-helmet",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/advanced/cors-helmet.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Error handling",permalink:"/docs/advanced/error-handling"},next:{title:"Performance",permalink:"/docs/advanced/performance"}},u=[],f={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("br",null),Object(c.b)(o.a,{defaultValue:"fastify",values:[{label:"fastify",value:"fastify"},{label:"express",value:"express"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"fastify",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cd server\nnpm install fastify-cors fastify-helmet\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/index.ts"',title:'"server/index.ts"'}),"import Fastify from 'fastify'\nimport helmet from 'fastify-helmet'\nimport cors from 'fastify-cors'\nimport server from './$server'\n\nconst fastify = Fastify()\nfastify.register(helmet)\nfastify.register(cors)\n\nserver(fastify, { basePath: '/api/v1' })\nfastify.listen(3000)\n")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/fastify/fastify-cors"}),"fastify-cors"),Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/fastify/fastify-helmet"}),"fastify-helmet"))),Object(c.b)(s.a,{value:"express",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cd server\nnpm install cors helmet\nnpm install --dev @types/cors\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/index.ts"',title:'"server/index.ts"'}),"import express from 'express'\nimport helmet from 'helmet'\nimport cors from 'cors'\nimport server from './$server'\n\nconst app = express()\napp.use(helmet())\napp.use(cors())\n\nserver(app, { basePath: '/api/v1' })\napp.listen(3000)\n")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/expressjs/cors"}),"cors"),Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://helmetjs.github.io/"}),"helmet")))))}p.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=n,b=f["".concat(o,".").concat(m)]||f[m]||p[m]||c;return r?a.a.createElement(b,s(s({ref:t},l),{},{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},122:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},123:function(e,t,r){"use strict";var n=r(0),a=r(124);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},124:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},125:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(123),o=r(122),s=r(54),i=r.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,s=e.children,f=e.defaultValue,p=e.values,m=e.groupId,b=e.className,d=Object(c.a)(),v=d.tabGroupChoices,y=d.setTabGroupChoices,O=Object(n.useState)(f),h=O[0],j=O[1];if(null!=m){var g=v[m];null!=g&&g!==h&&p.some((function(e){return e.value===g}))&&j(g)}var x=function(e){j(e),null!=m&&y(m,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},b)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},r)}))),t?Object(n.cloneElement)(s.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},s.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},126:function(e,t,r){"use strict";var n=r(3),a=r(0),c=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:a}),t)}}}]);