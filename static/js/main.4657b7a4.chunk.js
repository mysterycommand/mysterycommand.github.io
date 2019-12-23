(this.webpackJsonpmysterycommand=this.webpackJsonpmysterycommand||[]).push([[0],[,function(e){e.exports=JSON.parse('{"g":"mysterycommand","h":"1.6.2","f":"(MIT OR Apache-2.0)","a":{"url":"https://github.com/mysterycommand/mysterycommand/issues"},"e":"https://mysterycommand.com","d":{"node":"12.13.1","npm":"6.13.1"},"b":{"lodash":"4.17.15","react":"16.12.0","react-dom":"16.12.0","react-helmet":"5.2.1","react-icons":"3.8.0","react-spring":"8.0.27","react-three-fiber":"3.0.17","three":"0.111.0"},"c":{"@semantic-release/changelog":"3.0.6","@semantic-release/commit-analyzer":"6.3.3","@semantic-release/git":"7.0.18","@semantic-release/github":"5.5.5","@semantic-release/npm":"5.3.4","@semantic-release/release-notes-generator":"7.3.5","@types/jest":"24.0.24","@types/lodash":"4.14.149","@types/node":"12.12.21","@types/react":"16.9.17","@types/react-dom":"16.9.4","@types/react-helmet":"5.0.14","commitizen":"4.0.3","cz-conventional-changelog":"3.0.2","prettier":"1.19.1","react-scripts":"3.3.0","react-snap":"1.23.0","semantic-release":"15.14.0","semantic-release-github-pr":"git+https://github.com/mysterycommand/semantic-release-github-pr.git#fix/34-and-35","typescript":"3.7.3"}}')},,,,,,,,,,,,,function(e,t,n){e.exports=n(33)},,,,,function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(7),l=(n(19),n(2)),i=n(5),s=n(3),m=["computer programmer","creative technologist","game maker","software engineer","solutions architect","web developer"],u=["analyst","dabbler","dilettante","generalist","philosopher","tinkerer"];!function(e){e[e.Change=0]="Change"}(a||(a={}));var p=window.__STATE__;delete window.__STATE__;var h=p||{meta:{author:"Matt Hayes",handle:"@mysterycommand"},titles:m,currentTitle:Object(s.sample)(m),descriptors:u,currentDescriptor:Object(s.sample)(u)};function d(e,t){for(var n=Object(s.sample)(t);n===e;)n=Object(s.sample)(t);return n}function f(e,t){switch(t.type){case a.Change:return Object(i.a)({},e,{currentTitle:d(e.currentTitle,m),currentDescriptor:d(e.currentDescriptor,u)});default:return e}}window.snapSaveState=function(){return{__STATE__:h}};var g=n(13),y=n(1);var E=window.location,b=E.pathname,w=(E.href,new URL(y.e).origin);function v(e){return"".concat(w,"/screenshots/").concat(e,"/").concat("/"===b?"index.png":b.replace("html","png"))}var j=function(e){var t=e.author,n=e.handle,a=e.titles,r=e.descriptors,o="".concat(t," is ").concat(n),l=["artist"].concat(a,r),i=l.join(", "),s=function(e){for(var t,n=e;(t=n.concat("etc\u2026").join(", ")).length>200;)n.pop();return t}(l),m="a screenshot of ".concat(t,"'").concat(t.endsWith("s")?"":"s"," website");return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,o),c.a.createElement("meta",{name:"author",content:t}),c.a.createElement("meta",{name:"description",content:i}),c.a.createElement("link",{rel:"canonical",href:y.e}),c.a.createElement("meta",{property:"og:url",content:y.e}),c.a.createElement("meta",{property:"og:title",content:o}),c.a.createElement("meta",{property:"og:description",content:s}),c.a.createElement("meta",{property:"fb:admins",content:"163000679"}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{property:"og:site_name",content:o}),c.a.createElement("meta",{property:"og:image",content:v("facebook")}),c.a.createElement("meta",{property:"og:image:alt",content:m}),c.a.createElement("meta",{property:"og:locale",content:"en_US"}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.a.createElement("meta",{name:"twitter:site",content:n}),c.a.createElement("meta",{name:"twitter:creator",content:n}),c.a.createElement("meta",{name:"twitter:image",content:v("twitter")}),c.a.createElement("meta",{name:"twitter:image:alt",content:m})))},O=(n(28),n(29),n(30),function(e){var t=e.children,n=e.className;return c.a.createElement("ul",{className:["hlist",n].join(" ")},r.Children.map(t,(function(e,t){return c.a.createElement("li",{key:t},e)})))}),T=function(e){var t=e.currentTitle,n=e.currentDescriptor;return c.a.createElement(O,{className:"descs"},"artist",t,n)},k=n(4),_=[{props:{href:"https://github.com/mysterycommand/",title:"GitHub",rel:"external"},Icon:k.b},{props:{href:"https://twitter.com/mysterycommand/",title:"Twitter",rel:"external"},Icon:k.d},{props:{href:"https://www.linkedin.com/in/mysterycommand/",title:"Linkedin",rel:"external"},Icon:k.c},{props:{href:"".concat("","/resume.pdf"),title:"My resume (PDF)",download:"Matt-Hayes-Resume.pdf",type:"application/pdf",rel:"author"},Icon:k.a}],x=function(){return c.a.createElement(O,null,_.map((function(e){var t=e.props,n=e.Icon,a=t.title,r=t.href;return c.a.createElement("a",Object.assign({key:"".concat(a,": ").concat(r)},t),c.a.createElement(n,null))})))},D=(n(31),function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),a=t[0],o=t[1];return Object(r.useEffect)((function(){"ReactSnap"!==navigator.userAgent&&Promise.all([n.e(2),n.e(4)]).then(n.bind(null,61)).then((function(e){var t=e.default;o(t)}))}),[]),c.a.createElement("div",{className:"splash"},a)}),N=function(e){var t=e.author,n=e.handle,a=e.currentTitle,r=e.currentDescriptor;return c.a.createElement("header",{className:"hero"},c.a.createElement(D,null),c.a.createElement("div",{className:"hero-text"},c.a.createElement("h1",null,t," is"),c.a.createElement("h1",null,c.a.createElement("a",{href:""},n)),c.a.createElement(T,{currentTitle:a,currentDescriptor:r}),c.a.createElement(x,null)))},S=(n(32),Object.entries(Object(i.a)({},y.d,{},y.b,{},y.c)).map((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return{props:{href:"node"===n?"https://nodejs.org/en/":"https://www.npmjs.com/package/".concat(n),title:"".concat(n,"@").concat(a),rel:"external"},text:n}}))),I=function(e){var t=e.author,n=e.handle;return c.a.createElement("footer",{className:"colophon"},c.a.createElement("h2",null,"colophon"),c.a.createElement("p",null,"this site has been lovingly crafted by"," ",c.a.createElement("a",{href:"https://github.com/".concat(n.substring(1))},t)," (",c.a.createElement("a",{href:"https://twitter.com/".concat(n.substring(1))},n),") you may"," ",c.a.createElement("a",{href:"https://github.com/mysterycommand/".concat(y.g,"/tree/v").concat(y.h),title:"mysterycommand/".concat(y.g,"@").concat(y.h),rel:"external"},"view the source")," ","at your leisure, and if you see a bug or a typo please be so kind as to"," ",c.a.createElement("a",{href:y.a.url,title:"see a bug? create an issue!",rel:"external"},"create an issue")," ","\u2026 and thanks for visiting"),c.a.createElement("div",null,"this project would not be possible without the work of these fine open source projects:"," ",c.a.createElement(O,null,S.map((function(e){var t=e.props,n=e.text;return c.a.createElement("a",Object.assign({key:t.title},t),n)})))),c.a.createElement("div",null,"copyright \xa9 ",(new Date).getFullYear()," ",t,", licensed:"," ",c.a.createElement(O,{className:"licenses"},y.f.substring(1,y.f.length-1).split(" OR ").map((function(e){return c.a.createElement("a",{key:e,href:"https://github.com/mysterycommand/".concat(y.g,"/blob/v").concat(y.h,"/LICENSE-").concat(e),title:e,rel:"external"},e)})))))},C=function(){var e=function(){var e=Object(r.useReducer)(f,h),t=Object(l.a)(e,2),n=t[0],c=t[1],o=n.currentTitle,i=n.currentDescriptor;return Object(r.useEffect)((function(){var e=setTimeout((function(){c({type:a.Change})}),2500);return function(){clearTimeout(e)}}),[o,i]),n}(),t=e.meta,n=t.author,o=t.handle,i=e.titles,s=e.currentTitle,m=e.descriptors,u=e.currentDescriptor;return c.a.createElement(c.a.Fragment,null,c.a.createElement(j,{author:n,handle:o,titles:i,descriptors:m}),c.a.createElement(N,{author:n,handle:o,currentTitle:s,currentDescriptor:u}),c.a.createElement(I,{author:n,handle:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=document.getElementById("root");(R&&R.hasChildNodes()?o.hydrate:o.render)(c.a.createElement(C,null),R),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,3]]]);
//# sourceMappingURL=main.4657b7a4.chunk.js.map