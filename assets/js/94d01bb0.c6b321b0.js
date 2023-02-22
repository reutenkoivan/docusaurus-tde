"use strict";(self.webpackChunkdocusaurus_tde=self.webpackChunkdocusaurus_tde||[]).push([[8371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),o=n(2389),i=n(2666),l=n(6010);const u={tabItem:"tabItem_LplD"};function s(e){var t,n,o,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,r.useState)(g),O=N[0],E=N[1],T=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=k[m];null!=x&&x!==O&&h.some((function(e){return e.value===x}))&&E(x)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==O&&(C(t),E(a),null!=m&&w(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",u.tabItem,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),u=["components"],s={title:"Deploy",sidebar_position:3},c=void 0,d={unversionedId:"integration/deploy",id:"integration/deploy",title:"Deploy",description:"Route generation in the application is performed in a separate environment from the distribution of static files!",source:"@site/../../../../docs/content/integration/deploy.md",sourceDirName:"integration",slug:"/integration/deploy",permalink:"/docusaurus-tde/integration/deploy",tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1677055805,formattedLastUpdatedAt:"2/22/2023",sidebarPosition:3,frontMatter:{title:"Deploy",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Configuration",permalink:"/docusaurus-tde/integration/configuration"},next:{title:"Cheat Sheet",permalink:"/docusaurus-tde/cookbook/cheat-sheet"}},p={},m=[{value:"So what to do?",id:"so-what-to-do",level:3},{value:"1. Configure the baseUrl in the docusaurus-tde config",id:"1-configure-the-baseurl-in-the-docusaurus-tde-config",level:4},{value:"2. Modify the CI configuration:",id:"2-modify-the-ci-configuration",level:4}],f={toc:m},v="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)(v,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Route generation in the application is performed in a separate environment from the distribution of static files!",(0,o.kt)("br",null),"\nThis why ",(0,o.kt)("strong",{parentName:"p"},"if")," during the static deployment there is a base pathname - then all generated routes will be wrong!"))),(0,o.kt)("h3",{id:"so-what-to-do"},"So what to do?"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use the configurable environment parameter for the base pathname!"))),(0,o.kt)("p",null,"For local development, nothing needs to be configured,\nbut for CI you need to configure a dynamic configuration for pathname."),(0,o.kt)("h4",{id:"1-configure-the-baseurl-in-the-docusaurus-tde-config"},"1. Configure the baseUrl in the docusaurus-tde config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  baseUrl: process.env.BASE_URL,\n}\n")),(0,o.kt)("h4",{id:"2-modify-the-ci-configuration"},"2. Modify the CI configuration:"),(0,o.kt)(i.Z,{groupId:"ci",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"GitHub",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'jobs:\n  build-documentation:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v2\n        with:\n          node-version: \'16\'\n\n      - name: Install dependencies.\n        run: npm install # or "yarn install", or load from cache\n\n      - name: Build documentation.\n        env:\n          BASE_URL: "/${{ github.repository }}/"\n        run: npm run docusaurus-tde build # or yarn docusaurus-tde build\n'))),(0,o.kt)(l.Z,{value:"GitLab",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'build:documentation:\n  image: $NODE_IMAGE\n  variables:\n    # set the base url for the current project\n    BASE_URL: "/${CI_PROJECT_NAME}/"\n  script:\n    - npm install # or "yarn install", or load from cache\n    - npm run docusaurus-tde build # or yarn docusaurus-tde build\n')))))}h.isMDXComponent=!0}}]);