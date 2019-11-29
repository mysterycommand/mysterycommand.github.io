(this.webpackJsonpmysterycommand=this.webpackJsonpmysterycommand||[]).push([[0],[,function(e){e.exports=JSON.parse('{"g":"mysterycommand","h":"1.6.2","f":"(MIT OR Apache-2.0)","a":{"url":"https://github.com/mysterycommand/mysterycommand/issues"},"e":"https://mysterycommand.com","d":{"node":"12.13.1","npm":"6.13.1"},"b":{"lodash":"4.17.15","react":"16.12.0","react-dom":"16.12.0","react-helmet":"5.2.1","react-icons":"3.8.0","react-spring":"8.0.27","react-three-fiber":"3.0.15","three":"0.111.0"},"c":{"@semantic-release/changelog":"3.0.6","@semantic-release/commit-analyzer":"6.3.3","@semantic-release/git":"7.0.18","@semantic-release/github":"5.5.5","@semantic-release/npm":"5.3.4","@semantic-release/release-notes-generator":"7.3.5","@types/jest":"24.0.23","@types/lodash":"4.14.149","@types/node":"12.12.14","@types/react":"16.9.13","@types/react-dom":"16.9.4","@types/react-helmet":"5.0.14","commitizen":"4.0.3","cz-conventional-changelog":"3.0.2","prettier":"1.19.1","react-scripts":"3.2.0","react-snap":"1.23.0","semantic-release":"15.13.31","semantic-release-github-pr":"git+https://github.com/mysterycommand/semantic-release-github-pr.git#fix/34-and-35","typescript":"3.7.2"}}')},,,,,,,,,,,,function(e,t,r){e.exports=r(32)},,,,,function(e,t,r){},,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(7),o=(r(18),r(2)),i=r(5),l=r(3);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m,u=["computer programmer","creative technologist","game maker","software engineer","solutions architect","web developer"],p=["analyst","dabbler","dilettante","generalist","philosopher","tinkerer"];!function(e){e[e.Change=0]="Change"}(m||(m={}));var h=window.__STATE__;delete window.__STATE__;var f=h||{meta:{author:"Matt Hayes",handle:"@mysterycommand"},titles:u,currentTitle:Object(l.sample)(u),descriptors:p,currentDescriptor:Object(l.sample)(p)};function d(e,t){for(var r=Object(l.sample)(t);r===e;)r=Object(l.sample)(t);return r}function y(e,t){switch(t.type){case m.Change:return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{currentTitle:d(e.currentTitle,u),currentDescriptor:d(e.currentDescriptor,p)});default:return e}}window.snapSaveState=function(){return{__STATE__:f}};var g=r(12),b=r(1);var E=window.location,w=E.pathname,O=(E.href,new URL(b.e).origin);function v(e){return"".concat(O,"/screenshots/").concat(e,"/").concat("/"===w?"index.png":w.replace("html","png"))}var j=function(e){var t=e.author,r=e.handle,n=e.titles,c=e.descriptors,o="".concat(t," is ").concat(r),i=["artist"].concat(n,c),l=i.join(", "),s=function(e){for(var t,r=e;(t=r.concat("etc\u2026").join(", ")).length>200;)r.pop();return t}(i),m="a screenshot of ".concat(t,"'").concat(t.endsWith("s")?"":"s"," website");return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.Helmet,null,a.a.createElement("title",null,o),a.a.createElement("meta",{name:"author",content:t}),a.a.createElement("meta",{name:"description",content:l}),a.a.createElement("link",{rel:"canonical",href:b.e}),a.a.createElement("meta",{property:"og:url",content:b.e}),a.a.createElement("meta",{property:"og:title",content:o}),a.a.createElement("meta",{property:"og:description",content:s}),a.a.createElement("meta",{property:"fb:admins",content:"163000679"}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:site_name",content:o}),a.a.createElement("meta",{property:"og:image",content:v("facebook")}),a.a.createElement("meta",{property:"og:image:alt",content:m}),a.a.createElement("meta",{property:"og:locale",content:"en_US"}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:site",content:r}),a.a.createElement("meta",{name:"twitter:creator",content:r}),a.a.createElement("meta",{name:"twitter:image",content:v("twitter")}),a.a.createElement("meta",{name:"twitter:image:alt",content:m})))},k=(r(27),r(28),r(29),function(e){var t=e.children,r=e.className;return a.a.createElement("ul",{className:["hlist",r].join(" ")},n.Children.map(t,(function(e,t){return a.a.createElement("li",{key:t},e)})))}),D=function(e){var t=e.currentTitle,r=e.currentDescriptor;return a.a.createElement(k,{className:"descs"},"artist",t,r)},T=r(4),P=[{props:{href:"https://github.com/mysterycommand/",title:"GitHub",rel:"external"},Icon:T.b},{props:{href:"https://twitter.com/mysterycommand/",title:"Twitter",rel:"external"},Icon:T.d},{props:{href:"https://www.linkedin.com/in/mysterycommand/",title:"Linkedin",rel:"external"},Icon:T.c},{props:{href:"".concat("","/resume.pdf"),title:"My resume (PDF)",download:"Matt-Hayes-Resume.pdf",type:"application/pdf",rel:"author"},Icon:T.a}],_=function(){return a.a.createElement(k,null,P.map((function(e){var t=e.props,r=e.Icon,n=t.title,c=t.href;return a.a.createElement("a",Object.assign({key:"".concat(n,": ").concat(c)},t),a.a.createElement(r,null))})))},x=(r(30),function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){"ReactSnap"!==navigator.userAgent&&Promise.all([r.e(2),r.e(4)]).then(r.bind(null,60)).then((function(e){var t=e.default;i(t)}))}),[]),a.a.createElement("div",{className:"splash"},c)}),S=function(e){var t=e.author,r=e.handle,n=e.currentTitle,c=e.currentDescriptor;return a.a.createElement("header",{className:"hero"},a.a.createElement(x,null),a.a.createElement("div",{className:"hero-text"},a.a.createElement("h1",null,t," is"),a.a.createElement("h1",null,a.a.createElement("a",{href:""},r)),a.a.createElement(D,{currentTitle:n,currentDescriptor:c}),a.a.createElement(_,null)))};r(31);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var I=Object.entries(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},b.d,{},b.b,{},b.c)).map((function(e){var t=Object(o.a)(e,2),r=t[0],n=t[1];return{props:{href:"node"===r?"https://nodejs.org/en/":"https://www.npmjs.com/package/".concat(r),title:"".concat(r,"@").concat(n),rel:"external"},text:r}})),C=function(e){var t=e.author,r=e.handle;return a.a.createElement("footer",{className:"colophon"},a.a.createElement("h2",null,"colophon"),a.a.createElement("p",null,"this site has been lovingly crafted by"," ",a.a.createElement("a",{href:"https://github.com/".concat(r.substring(1))},t)," (",a.a.createElement("a",{href:"https://twitter.com/".concat(r.substring(1))},r),") you may"," ",a.a.createElement("a",{href:"https://github.com/mysterycommand/".concat(b.g,"/tree/v").concat(b.h),title:"mysterycommand/".concat(b.g,"@").concat(b.h),rel:"external"},"view the source")," ","at your leisure, and if you see a bug or a typo please be so kind as to"," ",a.a.createElement("a",{href:b.a.url,title:"see a bug? create an issue!",rel:"external"},"create an issue")," ","\u2026 and thanks for visiting"),a.a.createElement("div",null,"this project would not be possible without the work of these fine open source projects:"," ",a.a.createElement(k,null,I.map((function(e){var t=e.props,r=e.text;return a.a.createElement("a",Object.assign({key:t.title},t),r)})))),a.a.createElement("div",null,"copyright \xa9 ",(new Date).getFullYear()," ",t,", licensed:"," ",a.a.createElement(k,{className:"licenses"},b.f.substring(1,b.f.length-1).split(" OR ").map((function(e){return a.a.createElement("a",{key:e,href:"https://github.com/mysterycommand/".concat(b.g,"/blob/v").concat(b.h,"/LICENSE-").concat(e),title:e,rel:"external"},e)})))))},R=function(){var e=function(){var e=Object(n.useReducer)(y,f),t=Object(o.a)(e,2),r=t[0],a=t[1],c=r.currentTitle,i=r.currentDescriptor;return Object(n.useEffect)((function(){var e=setTimeout((function(){a({type:m.Change})}),2500);return function(){clearTimeout(e)}}),[c,i]),r}(),t=e.meta,r=t.author,c=t.handle,i=e.titles,l=e.currentTitle,s=e.descriptors,u=e.currentDescriptor;return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{author:r,handle:c,titles:i,descriptors:s}),a.a.createElement(S,{author:r,handle:c,currentTitle:l,currentDescriptor:u}),a.a.createElement(C,{author:r,handle:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=document.getElementById("root");(A&&A.hasChildNodes()?c.hydrate:c.render)(a.a.createElement(R,null),A),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,3]]]);
//# sourceMappingURL=main.c5530c34.chunk.js.map