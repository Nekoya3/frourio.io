/*! For license information please see 62a111b3.f89942c8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(h,l(l({ref:t},s),{},{components:a})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},140:function(e,t,a){"use strict";var n=a(0),r=a.n(n);class o extends n.PureComponent{constructor(e){super(e),this.$=r.a.createRef(),this._=r.a.createRef()}render(){return r.a.createElement("span",{ref:this.$},r.a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(a.bind(null,141)).then((({render:t})=>{t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}t.a=o},141:function(e,t,a){"use strict";a.r(t),a.d(t,"render",(function(){return z}));var n=window.document,r=window.Math,o=window.HTMLElement,i=window.XMLHttpRequest,l=function(e){return function(t,a,n){var r=e.createElement(t);if(null!=a)for(var o in a){var i=a[o];null!=i&&(null!=r[o]?r[o]=i:r.setAttribute(o,i))}if(null!=n)for(var l=0,c=n.length;l<c;l++){var s=n[l];r.appendChild("string"==typeof s?e.createTextNode(s):s)}return r}},c=l(n),s=function(e,t){return{}.hasOwnProperty.call(e,t)},p=function(e){return(""+e).toLowerCase()},d="github.com",u=i&&"prototype"in i&&"withCredentials"in i.prototype,b=u&&o&&"attachShadow"in o.prototype&&!("prototype"in o.prototype.attachShadow),h=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent("on"+t,a)},f=function(e,t,a){e.removeEventListener?e.removeEventListener(t,a,!1):e.detachEvent("on"+t,a)},g={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},m=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+g[s(g,t)?t:e]+"}"},v=function(e){if(null==e)return g.light;if(s(g,e))return g[e];var t=function(e,t,a,n){null==t&&(t="&"),null==a&&(a="="),null==n&&(n=window.decodeURIComponent);for(var r={},o=e.split(t),i=0,l=o.length;i<l;i++){var c=o[i];if(""!==c){var s=c.split(a);r[n(s[0])]=null!=s[1]?n(s.slice(1).join(a)):void 0}}return r}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return g[s(g,t["no-preference"])?t["no-preference"]:"light"]+m("light",t.light)+m("dark",t.dark)},j={"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}}},w=function(e,t){e=p(e).replace(/^octicon-/,""),s(j,e)||(e="mark-github");var a=t>=24&&24 in j[e].heights?24:16,n=j[e].heights[a];return'<svg viewBox="0 0 '+n.width+" "+a+'" width="'+t*n.width/a+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+n.path+"</svg>"},x={},y=function(e,t){var a=x[e]||(x[e]=[]);if(!(a.push(t)>1)){var n=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete x[e];t=a.shift();)t.apply(null,arguments)}));if(u){var r=new i;h(r,"abort",n),h(r,"error",n),h(r,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void n(t)}n(200!==this.status,e)})),r.open("GET",e),r.send()}else{var o=this||window;o._=function(e){o._=null,n(200!==e.meta.status,e.data)};var c=l(o.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){o._&&o._({meta:{}})};h(c,"load",s),h(c,"error",s),c.readyState&&function(e,t,a){var n="readystatechange",r=function(){if(t.test(e.readyState))return f(e,n,r),a.apply(this,arguments)};h(e,n,r)}(c,/de|m/,s),o.document.getElementsByTagName("head")[0].appendChild(c)}}},O=function(e,t,a){var n=l(e.ownerDocument),r=e.appendChild(n("style",{type:"text/css"})),o="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+v(t["data-color-scheme"]);r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.ownerDocument.createTextNode(o));var i="large"===p(t["data-size"]),c=n("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:w(t["data-icon"],i?16:14)},[" ",n("span",{},[t["data-text"]||""])]),s=e.appendChild(n("div",{className:"widget"+(i?" widget-lg":"")},[c])),u=c.hostname.replace(/\.$/,"");if(u.length<d.length||("."+u).substring(u.length-d.length)!=="."+d)return c.removeAttribute("href"),void a(s);var b=(" /"+c.pathname).split(/\/+/);if(((u===d||u==="gist."+d)&&"archive"===b[3]||u===d&&"releases"===b[3]&&("download"===b[4]||"latest"===b[4]&&"download"===b[5])||u==="codeload."+d)&&(c.target="_top"),"true"===p(t["data-show-count"])&&u===d){var h,f;if(!b[2]&&b[1])f="followers",h="?tab=followers";else if(!b[3]&&b[2])f="stargazers_count",h="/stargazers";else if(b[4]||"subscription"!==b[3])if(b[4]||"fork"!==b[3]){if("issues"!==b[3])return void a(s);f="open_issues_count",h="/issues"}else f="forks_count",h="/network/members";else f="subscribers_count",h="/watchers";var g=b[2]?"/repos/"+b[1]+"/"+b[2]:"/users/"+b[1];y.call(this,"https://api.github.com"+g,(function(e,t){if(!e){var r=t[f];s.appendChild(n("a",{className:"social-count",href:t.html_url+h,rel:"noopener",target:"_blank","aria-label":r+" "+f.replace(/_count$/,"").replace("_"," ").slice(0,r<2?-1:void 0)+" on GitHub"},[(""+r).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}a(s)}))}else a(s)},k=window.devicePixelRatio||1,N=function(e){return(k>1?r.ceil(r.round(e*k)/k*2)/2:r.ceil(e))||0},C=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},z=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},a=["icon","color-scheme","text","size","show-count"],n=0,r=a.length;n<r;n++){var o="data-"+a[n];t[o]=e.getAttribute(o)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),b){var a=c("span");O(a.attachShadow({mode:"closed"}),e,(function(){t(a)}))}else{var o=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});C(o,[0,0]),o.style.border="none";var i=function(){var a,l=o.contentWindow;try{a=l.document.body}catch(c){return void n.body.appendChild(o.parentNode.removeChild(o))}f(o,"load",i),O.call(l,a,e,(function(a){var n=function(e){var t=e.offsetWidth,a=e.offsetHeight;if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t=r.max(t,N(n.width)),a=r.max(a,N(n.height))}return[t,a]}(a);o.parentNode.removeChild(o),function(e,t,a){var n=function(){return f(e,t,n),a.apply(this,arguments)};h(e,t,n)}(o,"load",(function(){C(o,n)})),o.src="https://unpkg.com/github-buttons@2.14.0/dist/buttons.html#"+(o.name=function(e,t,a,n){null==t&&(t="&"),null==a&&(a="="),null==n&&(n=window.encodeURIComponent);var r=[];for(var o in e){var i=e[o];null!=i&&r.push(n(o)+a+n(i))}return r.join(t)}(e)),t(o)}))};h(o,"load",i),n.body.appendChild(o)}}},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(123)),i=a(140),l={id:"with-nextjs",title:"Pathpida with Next.js"},c={unversionedId:"pathpida/with-nextjs",id:"pathpida/with-nextjs",isDocsHomePage:!1,title:"Pathpida with Next.js",description:"TypeScript friendly internal link client for Next.js.",source:"@site/docs/pathpida/with-nextjs.mdx",slug:"/pathpida/with-nextjs",permalink:"/docs/pathpida/with-nextjs",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/pathpida/with-nextjs.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Performance",permalink:"/docs/advanced/performance"},next:{title:"Pathpida with Nuxt.js",permalink:"/docs/pathpida/with-nuxtjs"}},s=[{value:"Features",id:"features",children:[]},{value:"Install",id:"install",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Define query",id:"define-query",children:[]},{value:"Generate static files path",id:"generate-static-files-path",children:[]}],p={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("img",{src:"https://aspida.github.io/pathpida/logos/png/logo.png",alt:"pathpida",title:"pathpida"}),Object(o.b)("p",{align:"center"},"TypeScript friendly internal link client for Next.js."),Object(o.b)("div",{align:"center"},Object(o.b)(i.a,{href:"https://github.com/aspida/pathpida","data-icon":"octicon-star","data-size":"large","data-show-count":!0,"aria-label":"Star aspida/pathpida on GitHub",mdxType:"GitHubButton"},"Star")),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Type safety"),". Automatically generate type definition files for manipulating internal links in Next.js."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Zero configration"),". No configuration required, can be used immediately after installation."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Zero runtime"),". Lightweight because runtime code is not included in the bundle.")),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install pathpida --save-dev\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://yarnpkg.com/"}),"Yarn"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ yarn add pathpida --dev\n")))),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "dev:pathpida": "pathpida --watch",\n    "build:client": "pathpida && aspida && next build",\n    "build:types": "pathpida && aspida && npm run build:frourio --prefix server"\n  }\n}\n')),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"pages/index.tsx\npages/post/create.tsx\npages/post/[pid].tsx\npages/post/[...slug].tsx\n\nutils/$path.ts // Generated automatically by pathpida\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pages/index.tsx")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import Link from 'next/link'\nimport { pagesPath } from '~/utils/$path'\n\nconsole.log(pagesPath.post.create.$url()) // { pathname: '/post/create' }\nconsole.log(pagesPath.post._pid(1).$url()) // { pathname: '/post/[pid]', query: { pid: 1 }}\nconsole.log(pagesPath.post._slug(['a', 'b', 'c']).$url()) // { pathname: '/post//[...slug]', query: { slug: ['a', 'b', 'c'] }}\n\nexport default () => {\n  const onclick = useCallback(() => {\n    router.push(pagesPath.post._pid(1).$url())\n  }, [])\n\n  return <>\n    <Link href={pagesPath.post._slug(['a', 'b', 'c']).$url()} />\n    <div onclick={onclick} />\n  </>\n}\n")),Object(o.b)("h2",{id:"define-query"},"Define query"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pages/post/create.tsx")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"export type Query = {\n  userId: number\n  name?: string\n}\n\nexport default () => <div />\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pages/post/[pid].tsx")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"export type OptionalQuery = {\n  limit: number\n  label?: string\n}\n\nexport default () => <div />\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pages/index.tsx")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import Link from 'next/link'\nimport { pagesPath } from '~/utils/$path'\n\nconsole.log(pagesPath.post.create.$url({ query: { userId: 1 }})) // { pathname: '/post/create', query: { userId: 1 }}\nconsole.log(pagesPath.post.create.$url()) // type error\nconsole.log(pagesPath.post._pid(1).$url()) // { pathname: '/post/[pid]', query: { pid: 1 }}\nconsole.log(pagesPath.post._pid(1).$url({ query: { limit: 10 }, hash: 'sample' })) // { pathname: '/post/[pid]', query: { pid: 1, limit: 10 }, hash: 'sample' }\n\nexport default () => {\n  const onclick = useCallback(() => {\n    router.push(pagesPath.post._pid(1).$url())\n  }, [])\n\n  return <>\n    <Link href={pagesPath.post._slug(['a', 'b', 'c']).$url()} />\n    <div onclick={onclick} />\n  </>\n}\n")),Object(o.b)("h2",{id:"generate-static-files-path"},"Generate static files path"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "dev:pathpida": "pathpida --enableStatic --watch",\n    "build:client": "pathpida --enableStatic && aspida && next build",\n    "build:types": "pathpida --enableStatic && aspida && npm run build:frourio --prefix server"\n  }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"pages/index.tsx\npages/post/create.tsx\npages/post/[pid].tsx\npages/post/[...slug].tsx\n\npublic/aa.json\npublic/bb/cc.png\n\nutils/$path.ts // Generated automatically by pathpida\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pages/index.tsx")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import Link from 'next/link'\nimport { pagesPath, staticPath } from '~/utils/$path'\n\nconsole.log(staticPath.aa_json) // /aa.json\n\nexport default () => {\n  return <>\n    <Link href={pagesPath.post._slug(['a', 'b', 'c']).$url()} />\n    <img src={staticPath.bb.cc_png} />\n  </>\n}\n")))}d.isMDXComponent=!0}}]);