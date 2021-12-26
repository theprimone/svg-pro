import{r as o,d as z,R as k}from"./react-venders.fd1d2b80.js";import{j as ie,i as oe,l as se,c as ce,b as f,v as A,g as Oe,h as Ie,y as Re,Y as ze,q as Ae,r as Le,O as le,B as ue,Z as fe,G as Be,z as L,X as $e,f as de,m as ve,S as me,o as We}from"./index.034b5350.js";var je=ie(function n(r){oe(this,n),this.error=new Error("unreachable case: ".concat(JSON.stringify(r)))}),Ue=globalThis&&globalThis.__rest||function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},De=function(r){return o.exports.createElement(se,null,function(i){var e,t=i.getPrefixCls,a=i.direction,c=r.prefixCls,s=r.size,l=r.className,p=Ue(r,["prefixCls","size","className"]),m=t("btn-group",c),g="";switch(s){case"large":g="lg";break;case"small":g="sm";break;case"middle":case void 0:break;default:console.warn(new je(s).error)}var h=ce(m,(e={},f(e,"".concat(m,"-").concat(g),g),f(e,"".concat(m,"-rtl"),a==="rtl"),e),l);return o.exports.createElement("div",z({},p,{className:h}))})},Fe=De,Ge=0,C={};function _(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,i=Ge++,e=r;function t(){e-=1,e<=0?(n(),delete C[i]):C[i]=A(t)}return C[i]=A(t),i}_.cancel=function(r){r!==void 0&&(A.cancel(C[r]),delete C[r])};_.ids=C;var B;function pe(n){return!n||n.offsetParent===null||n.hidden}function Me(n){var r=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return r&&r[1]&&r[2]&&r[3]?!(r[1]===r[2]&&r[2]===r[3]):!0}var ge=function(n){Oe(i,n);var r=Ie(i);function i(){var e;return oe(this,i),e=r.apply(this,arguments),e.containerRef=o.exports.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,a){var c,s,l=e.props,p=l.insertExtraNode,m=l.disabled;if(!(m||!t||pe(t)||t.className.indexOf("-leave")>=0)){e.extraNode=document.createElement("div");var g=Re(e),h=g.extraNode,d=e.context.getPrefixCls;h.className="".concat(d(""),"-click-animating-node");var v=e.getAttributeName();if(t.setAttribute(v,"true"),a&&a!=="#ffffff"&&a!=="rgb(255, 255, 255)"&&Me(a)&&!/rgba\((?:\d*, ){3}0\)/.test(a)&&a!=="transparent"){h.style.borderColor=a;var x=((c=t.getRootNode)===null||c===void 0?void 0:c.call(t))||t.ownerDocument,T=x instanceof Document?x.body:(s=x.firstChild)!==null&&s!==void 0?s:x;B=ze(`
      [`.concat(d(""),"-click-animating-without-extra-node='true']::after, .").concat(d(""),`-click-animating-node {
        --antd-wave-shadow-color: `).concat(a,`;
      }`),"antd-wave",{csp:e.csp,attachTo:T})}p&&t.appendChild(h),["transition","animation"].forEach(function(N){t.addEventListener("".concat(N,"start"),e.onTransitionStart),t.addEventListener("".concat(N,"end"),e.onTransitionEnd)})}},e.onTransitionStart=function(t){if(!e.destroyed){var a=e.containerRef.current;!t||t.target!==a||e.animationStart||e.resetEffect(a)}},e.onTransitionEnd=function(t){!t||t.animationName!=="fadeEffect"||e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(!(!t||!t.getAttribute||t.getAttribute("disabled")||t.className.indexOf("disabled")>=0)){var a=function(s){if(!(s.target.tagName==="INPUT"||pe(s.target))){e.resetEffect(t);var l=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout(function(){return e.onClick(t,l)},0),_.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=_(function(){e.animationStart=!1},10)}};return t.addEventListener("click",a,!0),{cancel:function(){t.removeEventListener("click",a,!0)}}}},e.renderWave=function(t){var a=t.csp,c=e.props.children;if(e.csp=a,!o.exports.isValidElement(c))return c;var s=e.containerRef;return Ae(c)&&(s=Le(c.ref,e.containerRef)),le(c,{ref:s})},e}return ie(i,[{key:"componentDidMount",value:function(){var t=this.containerRef.current;!t||t.nodeType!==1||(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,a=this.props.insertExtraNode;return a?"".concat(t(""),"-click-animating"):"".concat(t(""),"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){var a=this;if(!(!t||t===this.extraNode||!(t instanceof Element))){var c=this.props.insertExtraNode,s=this.getAttributeName();t.setAttribute(s,"false"),B&&(B.innerHTML=""),c&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),["transition","animation"].forEach(function(l){t.removeEventListener("".concat(l,"start"),a.onTransitionStart),t.removeEventListener("".concat(l,"end"),a.onTransitionEnd)})}}},{key:"render",value:function(){return o.exports.createElement(se,null,this.renderWave)}}]),i}(o.exports.Component);ge.contextType=ue;var $=function(){return{width:0,opacity:0,transform:"scale(0)"}},W=function(r){return{width:r.scrollWidth,opacity:1,transform:"scale(1)"}},Ve=function(r){var i=r.prefixCls,e=r.loading,t=r.existIcon,a=!!e;return t?k.createElement("span",{className:"".concat(i,"-loading-icon")},k.createElement(fe,null)):k.createElement(Be,{visible:a,motionName:"".concat(i,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:$,onAppearActive:W,onEnterStart:$,onEnterActive:W,onLeaveStart:W,onLeaveActive:$},function(c,s){var l=c.className,p=c.style;return k.createElement("span",{className:"".concat(i,"-loading-icon"),style:p,ref:s},k.createElement(fe,{className:l}))})},He=Ve,qe=globalThis&&globalThis.__rest||function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},he=/^[\u4e00-\u9fa5]{2}$/,j=he.test.bind(he);function Je(n){return typeof n=="string"}function P(n){return n==="text"||n==="link"}function Xe(n){return o.exports.isValidElement(n)&&n.type===o.exports.Fragment}function Ye(n,r){if(n!=null){var i=r?" ":"";return typeof n!="string"&&typeof n!="number"&&Je(n.type)&&j(n.props.children)?le(n,{children:n.props.children.split("").join(i)}):typeof n=="string"?j(n)?o.exports.createElement("span",null,n.split("").join(i)):o.exports.createElement("span",null,n):Xe(n)?o.exports.createElement("span",null,n):n}}function Ze(n,r){var i=!1,e=[];return o.exports.Children.forEach(n,function(t){var a=ve(t),c=a==="string"||a==="number";if(i&&c){var s=e.length-1,l=e[s];e[s]="".concat(l).concat(t)}else e.push(t);i=c}),o.exports.Children.map(e,function(t){return Ye(t,r)})}L("default","primary","ghost","dashed","link","text");L("default","circle","round");L("submit","button","reset");var Ke=function(r,i){var e,t=r.loading,a=t===void 0?!1:t,c=r.prefixCls,s=r.type,l=r.danger,p=r.shape,m=p===void 0?"default":p,g=r.size,h=r.className,d=r.children,v=r.icon,x=r.ghost,T=x===void 0?!1:x,N=r.block,xe=N===void 0?!1:N,U=r.htmlType,be=U===void 0?"button":U,D=qe(r,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),ye=o.exports.useContext($e),Ce=o.exports.useState(!!a),F=de(Ce,2),b=F[0],G=F[1],Ne=o.exports.useState(!1),M=de(Ne,2),O=M[0],V=M[1],I=o.exports.useContext(ue),Ee=I.getPrefixCls,H=I.autoInsertSpaceInButton,ke=I.direction,y=i||o.exports.createRef(),q=o.exports.useRef(),J=function(){return o.exports.Children.count(d)===1&&!v&&!P(s)},Te=function(){if(!(!y||!y.current||H===!1)){var S=y.current.textContent;J()&&j(S)?O||V(!0):O&&V(!1)}},E=ve(a)==="object"&&a.delay?a.delay||!0:!!a;o.exports.useEffect(function(){clearTimeout(q.current),typeof E=="number"?q.current=window.setTimeout(function(){G(E)},E):G(E)},[E]),o.exports.useEffect(Te,[y]);var X=function(S){var R,Pe=r.onClick,we=r.disabled;if(b||we){S.preventDefault();return}(R=Pe)===null||R===void 0||R(S)};me(!(typeof v=="string"&&v.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(v,"` at https://ant.design/components/icon")),me(!(T&&P(s)),"Button","`link` or `text` button can't be a `ghost` button.");var u=Ee("btn",c),Y=H!==!1,Se={large:"lg",small:"sm",middle:void 0},Z=g||ye,K=Z&&Se[Z]||"",_e=b?"loading":v,Q=ce(u,(e={},f(e,"".concat(u,"-").concat(s),s),f(e,"".concat(u,"-").concat(m),m!=="default"&&m),f(e,"".concat(u,"-").concat(K),K),f(e,"".concat(u,"-icon-only"),!d&&d!==0&&!!_e),f(e,"".concat(u,"-background-ghost"),T&&!P(s)),f(e,"".concat(u,"-loading"),b),f(e,"".concat(u,"-two-chinese-chars"),O&&Y),f(e,"".concat(u,"-block"),xe),f(e,"".concat(u,"-dangerous"),!!l),f(e,"".concat(u,"-rtl"),ke==="rtl"),e),h),ee=v&&!b?v:o.exports.createElement(He,{existIcon:!!v,prefixCls:u,loading:!!b}),te=d||d===0?Ze(d,J()&&Y):null,ne=We(D,["navigate"]);if(ne.href!==void 0)return o.exports.createElement("a",z({},ne,{className:Q,onClick:X,ref:y}),ee,te);var re=o.exports.createElement("button",z({},D,{type:be,className:Q,onClick:X,ref:y}),ee,te);return P(s)?re:o.exports.createElement(ge,{disabled:!!b},re)},w=o.exports.forwardRef(Ke);w.displayName="Button";w.Group=Fe;w.__ANT_BUTTON=!0;var tt=w;export{tt as B};
