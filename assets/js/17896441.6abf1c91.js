"use strict";(self.webpackChunkdocusaurus_tde=self.webpackChunkdocusaurus_tde||[]).push([[7918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,v=m["".concat(i,".").concat(p)]||m[p]||u[p]||l;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4581:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Be});var a=n(7294),r=n(6010),l=n(7462),o=n(5999),c=n(9960);function i(e){var t=e.permalink,n=e.title,r=e.subLabel;return a.createElement(c.Z,{className:"pagination-nav__link",to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function s(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(i,(0,l.Z)({},t,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(i,(0,l.Z)({},n,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=n(2263),m=n(5551),u=n(2666);var p={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=p[e.versionMetadata.banner];return a.createElement(t,e)}function g(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(c.Z,{to:n,onClick:r},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.className,l=e.versionMetadata,o=(0,d.Z)().siteConfig.title,c=(0,m.gA)({failfast:!0}).pluginId,i=(0,u.J)(c).savePreferredVersionName,s=(0,m.Jo)(c),p=s.latestDocSuggestion,h=s.latestVersionSuggestion,f=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:o,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(g,{versionLabel:h.label,to:f.path,onClick:function(){return i(h.name)}})))}function f(e){var t=e.className,n=(0,u.E6)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}function b(e){var t=e.className,n=(0,u.E6)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function y(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:u.kM.common.lastUpdated},a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=n(3366);const C={iconEdit:"iconEdit_dcUD"};var _=["className"];function Z(e){var t=e.className,n=(0,N.Z)(e,_);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(C.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function L(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},a.createElement(Z,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const T={tag:"tag_hD8n",tagRegular:"tagRegular_D6E_",tagWithCount:"tagWithCount_i0QQ"};function B(e){var t=e.permalink,n=e.name,l=e.count;return a.createElement(c.Z,{href:t,className:(0,r.Z)(T.tag,l?T.tagWithCount:T.tagRegular)},n,l&&a.createElement("span",null,l))}const O={tags:"tags_XVD_",tag:"tag_JSN8"};function w(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(O.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:O.tag},a.createElement(B,{name:t,permalink:n}))}))))}const x={lastUpdated:"lastUpdated_foO9"};function A(e){return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(w,e)))}function U(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(L,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",x.lastUpdated)},(n||l)&&a.createElement(k,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function S(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,i=t.tags,s=i.length>0,d=!!(n||l||c);return s||d?a.createElement("footer",{className:(0,r.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(A,{tags:i}),d&&a.createElement(U,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:c,formattedLastUpdatedAt:o})):null}var I=n(5002);const M={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"};var P=["className"],j="table-of-contents__link toc-highlight",H="table-of-contents__link--active";function D(e){var t=e.className,n=(0,N.Z)(e,P);return a.createElement("div",{className:(0,r.Z)(M.tableOfContents,"thin-scrollbar",t)},a.createElement(I.Z,(0,l.Z)({},n,{linkClassName:j,linkActiveClassName:H})))}const V={tocCollapsible:"tocCollapsible_jdIR",tocCollapsibleButton:"tocCollapsibleButton_Fzxq",tocCollapsibleContent:"tocCollapsibleContent_MpvI",tocCollapsibleExpanded:"tocCollapsibleExpanded_laf4"};function R(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,c=e.maxHeadingLevel,i=(0,u.uR)({initialState:!0}),s=i.collapsed,d=i.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(V.tocCollapsible,!s&&V.tocCollapsibleExpanded,n)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",V.tocCollapsibleButton),onClick:d},a.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:V.tocCollapsibleContent,collapsed:s},a.createElement(I.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:c})))}const F={anchorWithStickyNavbar:"anchorWithStickyNavbar_mojV",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_R0VQ"};var W=["as","id"],z=["as"];function X(e){var t=e.as,n=e.id,c=(0,N.Z)(e,W),i=(0,u.LU)().navbar.hideOnScroll;return n?a.createElement(t,(0,l.Z)({},c,{className:(0,r.Z)("anchor",i?F.anchorWithHideOnScrollNavbar:F.anchorWithStickyNavbar),id:n}),c.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,c)}function J(e){var t=e.as,n=(0,N.Z)(e,z);return"h1"===t?a.createElement("h1",(0,l.Z)({},n,{id:void 0}),n.children):a.createElement(X,(0,l.Z)({as:t},n))}const Q={docItemContainer:"docItemContainer_vinB",docItemCol:"docItemCol_DM6M",tocMobile:"tocMobile_TmEX"},q={breadcrumbsContainer:"breadcrumbsContainer_Xlws"};var G=n(4996);function Y(e){var t=e.children,n=e.href,r="breadcrumbs__link";return n?a.createElement(c.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r,itemProp:"item name"},t)}function K(e){var t=e.children,n=e.active,l=e.index;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function $(){var e=(0,G.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(c.Z,{className:(0,r.Z)("breadcrumbs__link",q.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function ee(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(u.kM.docs.docBreadcrumbs,q.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement($,null),e.map((function(t,n){return a.createElement(K,{key:n,active:n===e.length-1,index:n},a.createElement(Y,{href:n<e.length-1?t.href:void 0},t.label))})))):null}var te=n(3905),ne=n(5742),ae=["mdxType","originalType"];const re={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var le={Prism:n(7410).default,theme:re};function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ce.apply(this,arguments)}var ie=/\r\n|\r|\n/,se=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},de=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},me=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=ce({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=ce({},n,{backgroundColor:null}),r};function ue(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const pe=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),oe(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?me(e.theme,e.language):void 0;return t.themeDict=n})),oe(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=ce({},ue(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?ce({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),oe(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),oe(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=ce({},ue(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?ce({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),oe(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,c=[],i=[c];o>-1;){for(;(l=a[o]++)<r[o];){var s=void 0,d=t[o],m=n[o][l];if("string"==typeof m?(d=o>0?d:["plain"],s=m):(d=de(d,m.type),m.alias&&(d=de(d,m.alias)),s=m.content),"string"==typeof s){var u=s.split(ie),p=u.length;c.push({types:d,content:u[0]});for(var v=1;v<p;v++)se(c),i.push(c=[]),c.push({types:d,content:u[v]})}else o++,t.push(d),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return se(c),i}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const ve={copyButton:"copyButton_eDfN",copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function ge(e){var t=e.code,n=(0,a.useState)(!1),l=n[0],c=n[1],i=(0,a.useRef)(void 0),s=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var o=document.getSelection(),c=!1;o.rangeCount>0&&(c=o.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}r.remove(),c&&(o.removeAllRanges(),o.addRange(c)),l&&l.focus()}(t),c(!0),i.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),a.createElement("button",{type:"button","aria-label":l?(0,o.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)(ve.copyButton,"clean-btn",l&&ve.copyButtonCopied),onClick:s},a.createElement("span",{className:ve.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:ve.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:ve.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const he={codeBlockContainer:"codeBlockContainer_I0IT",codeBlockContent:"codeBlockContent_wNvx",codeBlockTitle:"codeBlockTitle_BvAR",codeBlock:"codeBlock_jd64",codeBlockStandalone:"codeBlockStandalone_csWH",codeBlockLines:"codeBlockLines_mRuA"};function fe(e){var t,n=e.children,o=e.className,c=void 0===o?"":o,i=e.metastring,s=e.title,d=e.language,m=(0,u.LU)().prism,p=(0,a.useState)(!1),v=p[0],g=p[1];(0,a.useEffect)((function(){g(!0)}),[]);var h=(0,u.bc)(i)||s,f=(0,u.pJ)();if(a.Children.toArray(n).some((function(e){return(0,a.isValidElement)(e)})))return a.createElement(pe,(0,l.Z)({},le,{key:String(v),theme:f,code:"",language:"text"}),(function(e){var t=e.className,l=e.style;return a.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,he.codeBlockStandalone,"thin-scrollbar",he.codeBlockContainer,c,u.kM.common.codeBlock),style:l},a.createElement("code",{className:he.codeBlockLines},n))}));var b=Array.isArray(n)?n.join(""):n,y=null!=(t=null!=d?d:(0,u.Vo)(c))?t:m.defaultLanguage,E=(0,u.nZ)(b,i,y),k=E.highlightLines,N=E.code;return a.createElement(pe,(0,l.Z)({},le,{key:String(v),theme:f,code:N,language:null!=y?y:"text"}),(function(e){var t,n=e.className,o=e.style,i=e.tokens,s=e.getLineProps,d=e.getTokenProps;return a.createElement("div",{className:(0,r.Z)(he.codeBlockContainer,c,(t={},t["language-"+y]=y&&!c.includes("language-"+y),t),u.kM.common.codeBlock)},h&&a.createElement("div",{style:o,className:he.codeBlockTitle},h),a.createElement("div",{className:he.codeBlockContent,style:o},a.createElement("pre",{tabIndex:0,className:(0,r.Z)(n,he.codeBlock,"thin-scrollbar")},a.createElement("code",{className:he.codeBlockLines},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return k.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,l.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,l.Z)({key:t},d({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement(ge,{code:N})))}))}const be={details:"details_BAp3"};var ye="alert alert--info";function Ee(e){var t=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return a.createElement(u.PO,(0,l.Z)({},t,{className:(0,r.Z)(ye,be.details,t.className)}))}function ke(e){return a.createElement(J,e)}var Ne="contains-task-list_tsSF";const Ce={img:"img_E7b_"};const _e={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,N.Z)(r,ae));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(ne.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(fe,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var t;return a.createElement(fe,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(Ee,(0,l.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Ne))}));var t},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,Ce.img))}));var t},h1:function(e){return a.createElement(ke,(0,l.Z)({as:"h1"},e))},h2:function(e){return a.createElement(ke,(0,l.Z)({as:"h2"},e))},h3:function(e){return a.createElement(ke,(0,l.Z)({as:"h3"},e))},h4:function(e){return a.createElement(ke,(0,l.Z)({as:"h4"},e))},h5:function(e){return a.createElement(ke,(0,l.Z)({as:"h5"},e))},h6:function(e){return a.createElement(ke,(0,l.Z)({as:"h6"},e))}};function Ze(e){var t=e.children;return a.createElement(te.Zo,{components:_e},t)}function Le(e){var t,n=e.content,r=n.metadata,l=n.frontMatter,o=n.assets,c=l.keywords,i=r.description,s=r.title,d=null!=(t=o.image)?t:l.image;return a.createElement(u.d,{title:s,description:i,keywords:c,image:d})}function Te(e){var t=e.content,n=t.metadata,l=t.frontMatter,o=l.hide_title,c=l.hide_table_of_contents,i=l.toc_min_heading_level,d=l.toc_max_heading_level,m=n.title,p=!o&&void 0===t.contentTitle,v=(0,u.iP)(),g=!c&&t.toc&&t.toc.length>0,h=g&&("desktop"===v||"ssr"===v);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!c&&Q.docItemCol)},a.createElement(f,null),a.createElement("div",{className:Q.docItemContainer},a.createElement("article",null,a.createElement(ee,null),a.createElement(b,null),g&&a.createElement(R,{toc:t.toc,minHeadingLevel:i,maxHeadingLevel:d,className:(0,r.Z)(u.kM.docs.docTocMobile,Q.tocMobile)}),a.createElement("div",{className:(0,r.Z)(u.kM.docs.docMarkdown,"markdown")},p&&a.createElement("header",null,a.createElement(J,{as:"h1"},m)),a.createElement(Ze,null,a.createElement(t,null))),a.createElement(S,e)),a.createElement(s,{previous:n.previous,next:n.next}))),h&&a.createElement("div",{className:"col col--3"},a.createElement(D,{toc:t.toc,minHeadingLevel:i,maxHeadingLevel:d,className:u.kM.docs.docTocDesktop})))}function Be(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(u.FG,{className:t},a.createElement(Le,e),a.createElement(Te,e))}},5002:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(3366),l=n(7294),o=n(2666),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function i(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function s(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,p=void 0===u?void 0:u,v=e.minHeadingLevel,g=e.maxHeadingLevel,h=(0,r.Z)(e,c),f=(0,o.LU)(),b=null!=v?v:f.tableOfContents.minHeadingLevel,y=null!=g?g:f.tableOfContents.maxHeadingLevel,E=(0,o.b9)({toc:t,minHeadingLevel:b,maxHeadingLevel:y}),k=(0,l.useMemo)((function(){if(m&&p)return{linkClassName:m,linkActiveClassName:p,minHeadingLevel:b,maxHeadingLevel:y}}),[m,p,b,y]);return(0,o.Si)(k),l.createElement(i,(0,a.Z)({toc:E,className:s,linkClassName:m},h))}}}]);