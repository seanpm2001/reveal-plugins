(()=>{var e,t={7443:(e,t,n)=>{var a=n(2118);e.exports=function(e,t){return!(null==e||!e.length)&&a(e,t,0)>-1}},1196:e=>{e.exports=function(e,t,n){for(var a=-1,r=null==e?0:e.length;++a<r;)if(n(t,e[a]))return!0;return!1}},2118:(e,t,n)=>{var a=n(1848),r=n(2722),l=n(2351);e.exports=function(e,t,n){return t==t?l(e,t,n):a(e,r,n)}},7556:(e,t,n)=>{var a=n(8668),r=n(7443),l=n(1196),s=n(9932),c=n(1717),i=n(4757),o=Math.min;e.exports=function(e,t,n){for(var p=n?l:r,u=e[0].length,d=e.length,m=d,g=Array(d),h=1/0,w=[];m--;){var k=e[m];m&&t&&(k=s(k,c(t))),h=o(k.length,h),g[m]=!n&&(t||u>=120&&k.length>=120)?new a(m&&k):void 0}k=e[0];var b=-1,v=g[0];e:for(;++b<u&&w.length<h;){var f=k[b],_=t?t(f):f;if(f=n||0!==f?f:0,!(v?i(v,_):p(w,_,n))){for(m=d;--m;){var E=g[m];if(!(E?i(E,_):p(e[m],_,n)))continue e}v&&v.push(_),w.push(f)}}return w}},2722:e=>{e.exports=function(e){return e!=e}},4387:(e,t,n)=>{var a=n(9246);e.exports=function(e){return a(e)?e:[]}},2351:e=>{e.exports=function(e,t,n){for(var a=n-1,r=e.length;++a<r;)if(e[a]===t)return a;return-1}},5325:(e,t,n)=>{var a=n(9932),r=n(7556),l=n(5976),s=n(4387),c=l((function(e){var t=a(e,s);return t.length&&t[0]===e[0]?r(t):[]}));e.exports=c},930:(e,t,n)=>{"use strict";n.r(t),n.d(t,{blocks:()=>f});var a={};n.r(a),n.d(a,{icon:()=>k,metadata:()=>w,name:()=>b,settings:()=>v});const r=window.wp.blocks;var l=n(9307);const s=window.wp.blockEditor;var c=n(5609),i=n(5325),o=n.n(i),p=n(6989),u=n.n(p),d=n(5736);const m=d.__,g=e=>"newspack-reader-registration-list-checkbox-"+e,h=[{label:m("Initial","newspack"),value:"initial"},{label:m("Registration Success","newspack"),value:"registration"},{label:m("Login Success","newspack"),value:"login"}],w=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"newspack/reader-registration","title":"Reader Registration","category":"newspack","description":"Register a reader with their email.","textdomain":"newspack","attributes":{"title":{"type":"string"},"description":{"type":"string"},"placeholder":{"type":"string","default":"Email Address"},"label":{"type":"string","default":"Sign up","required":true},"privacyLabel":{"type":"string","default":""},"newsletterSubscription":{"type":"boolean","default":true},"displayListDescription":{"type":"boolean","default":true},"hideSubscriptionInput":{"type":"boolean","default":false},"newsletterTitle":{"type":"string","default":"Newsletters"},"newsletterLabel":{"type":"string","default":"Subscribe to our newsletter"},"lists":{"type":"array","default":[],"items":{"type":"string"}},"listsCheckboxes":{"type":"object","default":{}},"haveAccountLabel":{"type":"string","default":"Already have an account?"},"signInLabel":{"type":"string","default":"Sign in"},"signedInLabel":{"type":"string","default":"An account was already registered with this email. Please check your inbox for an authentication link."}},"supports":{"html":false,"align":true,"multiple":false}}'),k=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M18.5 8V5.5H16V4h2.5V1.5H20V4h2.5v1.5H20V8h-1.5ZM16.75 17v-2A2.75 2.75 0 0 0 14 12.25h-4A2.75 2.75 0 0 0 7.25 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5Z"}),(0,l.createElement)(c.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M14.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"})),{name:b}=w,v={icon:{src:k,foreground:"#36f"},edit:function({setAttributes:e,attributes:{title:t,description:n,placeholder:a,label:r,privacyLabel:i,newsletterSubscription:p,displayListDescription:w,hideSubscriptionInput:k,newsletterTitle:b,newsletterLabel:v,haveAccountLabel:f,signInLabel:_,signedInLabel:E,lists:y,listsCheckboxes:x,className:N}}){const C=(0,s.useBlockProps)(),[S,T]=(0,l.useState)(h[0].value);let{reader_activation_terms:O,reader_activation_url:A}=window.newspack_blocks;A&&(O=`<a href="${A}">`+O+"</a>");const L=(0,s.useInnerBlocksProps)({},{renderAppender:s.InnerBlocks.ButtonBlockAppender,template:[["core/paragraph",{align:"center",content:m("Thank you for registering!","newspack")}]]}),[P,j]=(0,l.useState)(!1),[I,B]=(0,l.useState)({}),R=()=>{newspack_blocks.has_newsletters&&p&&(j(!0),u()({path:"/newspack-newsletters/v1/lists_config"}).then(B).finally((()=>j(!1))))};(0,l.useEffect)(R,[]),(0,l.useEffect)(R,[p]),(0,l.useEffect)((()=>{const t=Object.keys(I);!t.length||y.length&&o()(y,t).length||e({lists:[Object.keys(I)[0]]})}),[I]);const M=e=>!x.hasOwnProperty(e)||x[e],F=t=>()=>{const n={...x};n[t]=!M(t),e({listsCheckboxes:n})};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.InspectorControls,null,(0,l.createElement)(c.PanelBody,{title:m("Form settings","newspack")},(0,l.createElement)(c.TextControl,{label:m("Input placeholder","newspack"),value:a,disabled:P,onChange:t=>e({placeholder:t})})),newspack_blocks.has_newsletters&&(0,l.createElement)(c.PanelBody,{title:m("Newsletter Subscription","newspack")},(0,l.createElement)(c.ToggleControl,{label:m("Enable newsletter subscription","newspack"),checked:!!p,disabled:P,onChange:()=>e({newsletterSubscription:!p})}),p&&(0,l.createElement)(l.Fragment,null,P&&(0,l.createElement)(c.Spinner,null),!P&&!Object.keys(I).length&&(0,l.createElement)("div",{style:{marginBottom:"1.5rem"}},m("To enable newsletter subscription, you must configure subscription lists on Newspack Newsletters.","newspack-newsletters")),Object.keys(I).length>0&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.ToggleControl,{label:m("Display list description","newspack-newsletters"),checked:w,disabled:P,onChange:()=>e({displayListDescription:!w})}),(0,l.createElement)(c.ToggleControl,{label:m("Hide newsletter selection and always subscribe","newspack"),checked:k,disabled:P||1!==y.length,onChange:()=>e({hideSubscriptionInput:!k})}),y.length<1&&(0,l.createElement)("div",{style:{marginBottom:"1.5rem"}},(0,l.createElement)(c.Notice,{isDismissible:!1,status:"error"},m("You must select at least one list.","newspack-newsletters"))),Object.keys(I).length>0&&(0,l.createElement)("p",null,m("Lists","newspack"),":"),Object.keys(I).map((t=>(0,l.createElement)(c.ToggleControl,{key:t,label:I[t].title,checked:y.includes(t),disabled:P,onChange:()=>{y.includes(t)?e({lists:y.filter((e=>e!==t))}):e({lists:y.concat(t)})}})))),(0,l.createElement)("p",null,(0,l.createElement)("a",{href:newspack_blocks.newsletters_url},m("Configure your subscription lists","newspack-newsletters")),"."))),(0,l.createElement)(c.PanelBody,{title:m("Spam protection","newspack")},(0,l.createElement)("p",null,(0,d.sprintf)(m("reCAPTCHA v3 is currently %s.","newspack"),newspack_blocks.has_recaptcha?m("enabled","newspack"):m("disabled","newspack"))),!newspack_blocks.has_recaptcha&&(0,l.createElement)("p",null,m("It's highly recommended that you enable reCAPTCHA v3 protection to prevent spambots from using this form!","newspack")),(0,l.createElement)("p",null,(0,l.createElement)("a",{href:newspack_blocks.recaptcha_url},m("Configure your reCAPTCHA settings.","newspack"))))),(0,l.createElement)("div",C,(0,l.createElement)("div",{className:"newspack-registration__state-bar"},(0,l.createElement)("span",null,m("Edited State","newspack")),(0,l.createElement)("div",null,h.map((e=>(0,l.createElement)(c.Button,{key:e.value,"data-is-active":S===e.value,onClick:()=>T(e.value)},e.label))))),"initial"===S&&(0,l.createElement)("div",{className:`newspack-registration ${N}`},(0,l.createElement)("form",{onSubmit:e=>e.preventDefault()},(0,l.createElement)("div",{className:"newspack-registration__have-account"},(0,l.createElement)(s.RichText,{onChange:t=>e({haveAccountLabel:t}),placeholder:m("Already have an account?","newspack"),value:f,tagName:"span"})," ",(0,l.createElement)("a",{href:"/my-account",onClick:e=>e.preventDefault()},(0,l.createElement)(s.RichText,{onChange:t=>e({signInLabel:t}),placeholder:m("Sign In","newspack"),value:_,tagName:"span"}))),(0,l.createElement)("div",{className:"newspack-registration__header"},(0,l.createElement)(s.RichText,{onChange:t=>e({title:t}),placeholder:m("Add title","newspack"),value:t,tagName:"h2"})),(0,l.createElement)(s.RichText,{onChange:t=>e({description:t}),placeholder:m("Add description","newspack"),value:n,tagName:"p"}),(0,l.createElement)("div",{className:"newspack-registration__form-content"},1===y.length&&k||!p||!y.length?null:(0,l.createElement)("div",{className:"newspack-reader__lists"},y?.length>1&&(0,l.createElement)(s.RichText,{onChange:t=>e({newsletterTitle:t}),placeholder:m("Newsletters title…","newspack"),value:b,tagName:"h3"}),(0,l.createElement)("ul",null,y.map((t=>(0,l.createElement)("li",{key:t},(0,l.createElement)("span",{className:"newspack-reader__lists__checkbox"},(0,l.createElement)("input",{id:g(t),type:"checkbox",checked:M(t),onChange:F(t)})),(0,l.createElement)("span",{className:"newspack-reader__lists__details"},(0,l.createElement)("label",{htmlFor:g(t),className:"newspack-reader__lists__label"},(0,l.createElement)("span",{className:"newspack-reader__lists__title"},1===y.length?(0,l.createElement)(s.RichText,{onChange:t=>e({newsletterLabel:t}),placeholder:m("Subscribe to our newsletter","newspack"),value:v,tagName:"span"}):I[t]?.title),w&&(0,l.createElement)("span",{className:"newspack-reader__lists__description"},I[t]?.description)))))))),(0,l.createElement)("div",{className:"newspack-registration__main"},(0,l.createElement)("div",null,(0,l.createElement)("div",{className:"newspack-registration__inputs"},(0,l.createElement)("input",{type:"email",placeholder:a}),(0,l.createElement)("button",{type:"submit"},(0,l.createElement)(s.RichText,{onChange:t=>e({label:t}),placeholder:m("Sign up","newspack"),value:r,tagName:"span"}))),newspack_blocks.has_google_oauth&&(0,l.createElement)("div",{className:"newspack-reader__logins"},(0,l.createElement)("div",{className:"newspack-reader__logins__separator"},(0,l.createElement)("div",null),(0,l.createElement)("div",null,m("OR","newspack")),(0,l.createElement)("div",null)),(0,l.createElement)("button",{className:"newspack-reader__logins__google"},(0,l.createElement)("span",{dangerouslySetInnerHTML:{__html:newspack_blocks.google_logo_svg}}),(0,l.createElement)("span",null,m("Sign in with Google","newspack")))),(0,l.createElement)("div",{className:"newspack-registration__response"})),(0,l.createElement)("div",{className:"newspack-registration__help-text"},(0,l.createElement)(s.RichText,{onChange:t=>e({privacyLabel:t}),placeholder:m("Terms & Conditions statement…","newspack"),value:i||O,tagName:"p"})))))),"registration"===S&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"newspack-registration__icon"}),(0,l.createElement)("div",L)),"login"===S&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"newspack-registration__icon"}),(0,l.createElement)(s.RichText,{align:"center",onChange:t=>e({signedInLabel:t}),placeholder:m("Logged in message…","newspack"),value:E,tagName:"p"}))))},save:()=>(0,l.createElement)("div",s.useInnerBlocksProps.save(s.useBlockProps.save()))},f=[a],_=["newspack/reader-registration"],E=e=>{if(!e)return;const{metadata:t,settings:n,name:a}=e;_.includes(a)&&!newspack_blocks.has_reader_activation||(0,r.registerBlockType)({name:a,...t},n)};for(const e of f)E(e)},6989:e=>{"use strict";e.exports=window.wp.apiFetch},5609:e=>{"use strict";e.exports=window.wp.components},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=t,e=[],a.O=(t,n,r,l)=>{if(!n){var s=1/0;for(p=0;p<e.length;p++){for(var[n,r,l]=e[p],c=!0,i=0;i<n.length;i++)(!1&l||s>=l)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(c=!1,l<s&&(s=l));if(c){e.splice(p--,1);var o=r();void 0!==o&&(t=o)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[n,r,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=346,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={346:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[s,c,i]=n,o=0;if(s.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(i)var p=i(a)}for(t&&t(n);o<s.length;o++)l=s[o],a.o(e,l)&&e[l]&&e[l][0](),e[s[o]]=0;return a.O(p)},n=globalThis.webpackChunkwebpack=globalThis.webpackChunkwebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[351],(()=>a(930)));r=a.O(r);var l=window;for(var s in r)l[s]=r[s];r.__esModule&&Object.defineProperty(l,"__esModule",{value:!0})})();