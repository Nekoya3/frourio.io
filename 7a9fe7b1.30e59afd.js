(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,b=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},106:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},107:function(e,t,n){"use strict";var r=n(0),o=n(108);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},108:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},109:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(107),l=n(106),s=n(47),i=n.n(s),c=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,f=e.values,p=e.groupId,d=e.className,b=Object(a.a)(),y=b.tabGroupChoices,m=b.setTabGroupChoices,v=Object(r.useState)(s),k=v[0],h=v[1],g=Object(r.useState)(!1),O=g[0],j=g[1];if(null!=p){var w=y[p];null!=w&&w!==k&&f.some((function(e){return e.value===w}))&&h(w)}var x=function(e){h(e),null!=p&&m(p,e)},C=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},q=function(){j(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",q),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",q)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},d)},f.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":k===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":k===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),T(e)},onFocus:function(){return x(t)},onClick:function(){x(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===k}))[0]))}},110:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(105)),l=n(109),s=n(110),i={id:"controller-level-hooks",title:"Controller-level hooks"},c={unversionedId:"Hooks/controller-level-hooks",id:"Hooks/controller-level-hooks",isDocsHomePage:!1,title:"Controller-level hooks",description:"Controller-level hooks are called at the current endpoint after directory-level hooks.",source:"@site/docs/Hooks/controller-level-hooks.mdx",slug:"/Hooks/controller-level-hooks",permalink:"/docs/Hooks/controller-level-hooks",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/Hooks/controller-level-hooks.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Directory-level hooks",permalink:"/docs/Hooks/directory-level-hooks"},next:{title:"Additional request",permalink:"/docs/Hooks/additional-request"}},u=[],f={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Controller-level hooks are called at the current endpoint after directory-level hooks.",Object(a.b)("br",{parentName:"p"}),"\n","Hooks written in contoller.ts do not cascade and are only available to that controller."),Object(a.b)(l.a,{defaultValue:"fastify",values:[{label:"fastify",value:"fastify"},{label:"express",value:"express"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"fastify",mdxType:"TabItem"},Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.fastify.io/docs/latest/Hooks/"}),"Fastify hooks")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/tasks/controller.ts"',title:'"server/api/tasks/controller.ts"'}),"import { defineHooks, defineController } from './$relay' // '$relay.ts' is automatically generated by frourio\nimport { getTasks, createTask } from '$/service/tasks'\n\nexport const hooks = defineHooks(() => ({\n  onRequest: (req, reply, done) => {\n    console.log('Controller-level onRequest single hook:', req.url)\n    done()\n  },\n  preParsing: [\n    (req, reply, payload, done) => {\n      console.log('Controller-level preParsing first hook:', req.url)\n      done()\n    },\n    (req, reply, payload, done) => {\n      console.log('Controller-level preParsing second hook:', req.url)\n      done()\n    }\n  ]\n}))\n\nexport default defineController(() => ({\n  get: async ({ query }) => ({\n    status: 200,\n    body: (await getTasks()).slice(0, query.limit)\n  }),\n  post: async ({ body }) => {\n    const task = await createTask(body.label)\n\n    return { status: 201, body: task }\n  }\n}))\n"))),Object(a.b)(s.a,{value:"express",mdxType:"TabItem"},Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://expressjs.com/en/guide/using-middleware.html"}),"Express middleware")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/tasks/controller.ts"',title:'"server/api/tasks/controller.ts"'}),"import { defineHooks, defineController } from './$relay' // '$relay.ts' is automatically generated by frourio\nimport { getTasks, createTask } from '$/service/tasks'\n\nexport const hooks = defineHooks(() => ({\n  onRequest: (req, res, next) => {\n    console.log('Controller-level onRequest single hook:', req.path)\n    next()\n  },\n  preParsing: [\n    (req, res, next) => {\n      console.log('Controller-level preParsing first hook:', req.path)\n      next()\n    },\n    (req, res, next) => {\n      console.log('Controller-level preParsing second hook:', req.path)\n      next()\n    }\n  ]\n}))\n\nexport default defineController(() => ({\n  get: async ({ query }) => ({\n    status: 200,\n    body: (await getTasks()).slice(0, query.limit)\n  }),\n  post: async ({ body }) => {\n    const task = await createTask(body.label)\n\n    return { status: 201, body: task }\n  }\n}))\n")))))}p.isMDXComponent=!0}}]);