var __defProp=Object.defineProperty,__defNormalProp=(t,e,i)=>e in t?__defProp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,__publicField=(t,e,i)=>(__defNormalProp(t,"symbol"!=typeof e?e+"":e,i),i);!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Boutique={})}(this,(function(t){"use strict";function e(t){Object.entries(t).forEach((([e,i])=>{const s=!e.startsWith("__"),n=t[e]instanceof Function;Object.defineProperty(t,e,{value:i,enumerable:s,configurable:s,writable:!n})}))}function i(t,e){for(;t.length>0;)e(t[0]),t.splice(0,1)}class s{constructor(){__publicField(this,"__updateQueue",[]),__publicField(this,"__callbackQueue",[]),__publicField(this,"__requestId"),__publicField(this,"__executeDomUpdates",(()=>{i(this.__updateQueue,(t=>t())),i(this.__callbackQueue,(t=>t()))})),e(this)}__queueDomUpdate(t,e){this.__requestId&&cancelAnimationFrame(this.__requestId),e&&this.__callbackQueue.push(e),this.__updateQueue.push(t),this.__requestId=requestAnimationFrame(this.__executeDomUpdates)}}const n=class extends s{constructor(t,i){super(),__publicField(this,"children",[]),__publicField(this,"__parent"),__publicField(this,"__childSource"),__publicField(this,"__shouldUpdateIndices",[]),__publicField(this,"__shouldAppendIndices",[]),__publicField(this,"__shouldRemoveIndices",[]),this.__parent=t,this.__childSource=i,n.currentNode=this,this.children=this.__isDynamic(this.__childSource)?this.__childSource().map(this.__createChild.bind(this)):this.__childSource.map(this.__createChild.bind(this)),n.currentNode=void 0,e(this)}renderDom(){var t;void 0!==this.__parent.element&&(null==(t=this.__parent.element)||t.append(...this.children.reduce(((t,e)=>{var i,s,n;const _=null==(n=null==(s=(i=e.attributes).$if)?void 0:s.call(i))||n,r=e.renderDom(_);return _?t.concat(r):t}),[])))}updateDom(){const t=this.__parent.element;t&&this.__queueDomUpdate((()=>{try{const e=[];i(this.__shouldRemoveIndices,(i=>{e.push(t.children[i])})),e.forEach((t=>t.remove())),i(this.__shouldUpdateIndices,(e=>t.replaceChild(this.children[e].renderDom(),t.children[e]))),i(this.__shouldAppendIndices,(e=>t.appendChild(this.children[e].renderDom())))}catch(e){}}))}onStateChange(t){if(!this.__isDynamic(this.__childSource))return;const e=this.children.slice(),i=this.__childSource().map((t=>t())),s=Math.max(i.length,e.length),n=[];let _,r,l;for(let a=0;a<s;a++)_=e[a],r=i[a],(null==_?void 0:_.attributes.$key)!==(null==r?void 0:r.attributes.$key)?void 0!==r||void 0===_?void 0!==_||void 0===r?void 0!==_&&void 0!==r&&(l=e.find((t=>!!t.attributes.$key&&t.attributes.$key===r.attributes.$key)),l?n[a]=l:(n[a]=r,this.__shouldUpdateIndices.push(a))):(n[a]=r,this.__shouldAppendIndices.push(a)):this.__shouldRemoveIndices.push(a):n[a]=_;this.children=n,this.updateDom()}__createChild(t){const e=t();return e.parent=this.__parent,e}__isDynamic(t){return"function"==typeof t}};let _=n;__publicField(_,"currentNode");const r=[],l=class extends s{constructor(t,i,s,n=[]){super(),__publicField(this,"parent"),__publicField(this,"element"),__publicField(this,"isFirstRender",!0),__publicField(this,"__attributeState",{$if:!0}),__publicField(this,"__changedStates",[]),__publicField(this,"__boundEffects"),__publicField(this,"__changedAttributes",[]),__publicField(this,"__childNodeList"),__publicField(this,"__doSetStaticAttributes",!0),__publicField(this,"__dynamicAttributes",[]),__publicField(this,"__doRenderDom",!1),__publicField(this,"__mountingElement"),this.tag=t,this.attributes=i,this.__boundEffects=n,s&&(this.__childNodeList=new _(this,s)),this.__setAttributeState(),e(this)}static create(t,e={},i){const s=r.slice();return r.splice(0,r.length),()=>new l(t,e,i,s)}get html(){var t,e,i;return[`<${this.tag}`,Object.entries(this.__attributeState).reduce(((t,[e,i])=>[e.startsWith("$"),e.startsWith("on")].includes(!0)?t:t+` ${this.__getHtmlAttributeName(e)}="${i}"`),""),">",null!=(i=null!=(e=this.__attributeState.$text)?e:null==(t=this.__childNodeList)?void 0:t.children.map((t=>t.html)).join(""))?i:"",`</${this.tag}>`].join("")}get __parentElement(){var t,e;return null!=(e=null==(t=this.parent)?void 0:t.element)?e:this.__mountingElement}get __shouldRemove(){return this.__changedAttributes.includes("$if")&&!1===this.__attributeState.$if}get __shouldAppend(){return this.__changedAttributes.includes("$if")&&!0===this.__attributeState.$if}mount(t){this.__mountingElement=t,t.innerHTML="",t.appendChild(this.renderDom(!0))}renderDom(t=!1){var e;if(!this.isFirstRender)throw new Error("Use update method instead.");return this.__doRenderDom=!0,this.__setAttributeState(),this.element=document.createElement(this.tag),this.__setElementAttributes(),null==(e=this.__childNodeList)||e.renderDom(),this.isFirstRender=!1,t&&this.__queueDomUpdate(this.__dispatchEffects.bind(this)),this.element}updateDom(){this.__doRenderDom&&(this.__queueDomUpdate(this.__setElementAttributes.bind(this),(()=>{i(this.__changedStates,this.__dispatchEffects.bind(this))})),this.__shouldAppend!=this.__shouldRemove&&this.__queueDomUpdate((()=>{var t,e;this.element&&(this.__shouldAppend&&(null==(t=this.__parentElement)||t.appendChild(this.element)),this.__shouldRemove&&(null==(e=this.__parentElement)||e.removeChild(this.element)))}),this.__shouldAppend?()=>this.__dispatchEffects():()=>this.__cleanUpEffects()))}onStateChange(t){this.__changedStates.push(t),this.__setAttributeState(),this.updateDom()}__setElementAttributes(){if(!this.element)return;(this.isFirstRender?Object.keys(this.__attributeState):this.__changedAttributes).forEach((t=>{const e=this.__attributeState[t];"$html"!==t?"$text"!==t?"on"!==t.substr(0,2)?"$"!==t[0]&&this.element.setAttribute(this.__getHtmlAttributeName(t),e):this.element[t]=e:this.element.innerText=null!=e?String(e):"":this.element.innerHTML=null!=e?String(e):""}))}__setAttributeState(){let t,e;l.currentNode=this,this.__changedAttributes.splice(0,this.__changedAttributes.length),this.__doSetStaticAttributes?Object.entries(this.attributes).forEach((([i,s])=>{e=this.__isDynamicAttribute(i,s),t=e?s():s,this.__handleNewAttributeValue(i,t)})):this.__dynamicAttributes.forEach((e=>{t=this.attributes[e](),this.__handleNewAttributeValue(e,t)})),l.currentNode=void 0,this.__doSetStaticAttributes=!1}__handleNewAttributeValue(t,e){e!==this.__attributeState[t]&&(this.__changedAttributes.push(t),this.__attributeState[t]=e)}__dispatchEffects(t){this.__boundEffects.forEach((e=>e.dispatch(t)))}__cleanUpEffects(){this.__boundEffects.forEach((t=>t.cleanup()))}__isDynamicAttribute(t,e){return("$if"===t||"on"!==t.substr(0,2)&&"function"==typeof e)&&(this.__dynamicAttributes.push(t),!0)}__getHtmlAttributeName(t){switch(t){case"className":return"class"}return t.split(/(?=[A-Z])/).map((t=>t.toLowerCase())).join("-")}};let a=l;__publicField(a,"currentNode");const h=t=>a.create.bind(void 0,t),d=h("a"),u=h("abbr"),c=h("acronym"),o=h("address"),p=h("area"),b=h("article"),m=h("aside"),f=h("audio"),g=h("b"),v=h("base"),S=h("bdi"),y=h("bdo"),A=h("big"),F=h("blink"),E=h("blockquote"),k=h("body"),D=h("br"),N=h("button"),$=h("canvas"),w=h("caption"),q=h("center"),x=h("cite"),j=h("code"),I=h("col"),R=h("colgroup"),U=h("content"),C=h("data"),L=h("datalist"),O=h("dd"),P=h("del"),Q=h("details"),T=h("dfn"),H=h("div"),M=h("dl"),V=h("dt"),W=h("element"),B=h("em"),Z=h("embed"),z=h("fieldset"),G=h("figcaption"),J=h("figure"),K=h("footer"),X=h("form"),Y=h("h1"),tt=h("h2"),et=h("h3"),it=h("h4"),st=h("h5"),nt=h("h6"),_t=h("head"),rt=h("header"),lt=h("hr"),at=h("html"),ht=h("i"),dt=h("iframe"),ut=h("img"),ct=h("input"),ot=h("ins"),pt=h("kbd"),bt=h("label"),mt=h("legend"),ft=h("li"),gt=h("link"),vt=h("main"),St=h("map"),yt=h("mark"),At=h("menu"),Ft=h("meta"),Et=h("meter"),kt=h("nav"),Dt=h("noscript"),Nt=h("object"),$t=h("ol"),wt=h("optgroup"),qt=h("option"),xt=h("output"),jt=h("p"),It=h("param"),Rt=h("plaintext"),Ut=h("pre"),Ct=h("progress"),Lt=h("q"),Ot=h("rp"),Pt=h("rt"),Qt=h("ruby"),Tt=h("s"),Ht=h("samp"),Mt=h("script"),Vt=h("section"),Wt=h("select"),Bt=h("small"),Zt=h("source"),zt=h("span"),Gt=h("strike"),Jt=h("strong"),Kt=h("style"),Xt=h("sub"),Yt=h("summary"),te=h("sup"),ee=h("table"),ie=h("tbody"),se=h("td"),ne=h("template"),_e=h("textarea"),re=h("tfoot"),le=h("th"),ae=h("thead"),he=h("time"),de=h("title"),ue=h("tr"),ce=h("track"),oe=h("tt"),pe=h("u"),be=h("ul"),me=h("var"),fe=h("video"),ge=h("wbr");class ve{constructor(t){__publicField(this,"__boundNodes",[]),__publicField(this,"__internalState"),__publicField(this,"__listeners",[]),this.__internalState=t,e(this)}get state(){const t=this.__boundNodes,e=a.currentNode,i=_.currentNode;return e&&!t.includes(e)&&t.push(e),i&&!t.includes(i)&&t.push(i),this.__internalState}set state(t){t!==this.__internalState&&(this.__internalState=t,this.__listeners.forEach((t=>t(this))),this.__boundNodes.forEach((t=>t.onStateChange(this))))}set(t){this.state=t(this.__internalState)}addListener(t){return this.__listeners.push(t),this}}class Se{constructor(t,i){__publicField(this,"__callback"),__publicField(this,"__cleanup"),__publicField(this,"__watch"),this.__callback=t,this.__watch=i,e(this)}static isEffect(t){var e;return"Effect"===(null==(e=t.constructor)?void 0:e.name)}dispatch(t){t&&this.__watch&&!this.__watch.includes(t)||(this.__cleanup=this.__callback())}cleanup(){var t;null==(t=this.__cleanup)||t.call(this)}}t.Effect=Se,t.State=ve,t.a=d,t.abbr=u,t.acronym=c,t.address=o,t.area=p,t.article=b,t.aside=m,t.audio=f,t.b=g,t.base=v,t.bdi=S,t.bdo=y,t.big=A,t.blink=F,t.blockquote=E,t.body=k,t.br=D,t.button=N,t.canvas=$,t.caption=w,t.center=q,t.cite=x,t.code=j,t.col=I,t.colgroup=R,t.content=U,t.data=C,t.datalist=L,t.dd=O,t.del=P,t.details=Q,t.dfn=T,t.div=H,t.dl=M,t.dt=V,t.effect=function(t,e){"function"==typeof t?r.push(new Se(t)):e&&r.push(new Se(e,t))},t.element=W,t.em=B,t.embed=Z,t.fieldset=z,t.figcaption=G,t.figure=J,t.footer=K,t.form=X,t.h1=Y,t.h2=tt,t.h3=et,t.h4=it,t.h5=st,t.h6=nt,t.head=_t,t.header=rt,t.hr=lt,t.html=at,t.htmlVar=me,t.i=ht,t.iframe=dt,t.img=ut,t.input=ct,t.ins=ot,t.kbd=pt,t.label=bt,t.legend=mt,t.li=ft,t.link=gt,t.main=vt,t.map=St,t.mark=yt,t.menu=At,t.meta=Ft,t.meter=Et,t.nav=kt,t.noscript=Dt,t.object=Nt,t.ol=$t,t.optgroup=wt,t.option=qt,t.output=xt,t.p=jt,t.param=It,t.plaintext=Rt,t.pre=Ut,t.progress=Ct,t.q=Lt,t.rp=Ot,t.rt=Pt,t.ruby=Qt,t.s=Tt,t.samp=Ht,t.script=Mt,t.section=Vt,t.select=Wt,t.small=Bt,t.source=Zt,t.span=zt,t.state=function(t){return new ve(t instanceof Function?t():t)},t.strike=Gt,t.strong=Jt,t.style=Kt,t.sub=Xt,t.summary=Yt,t.sup=te,t.table=ee,t.tbody=ie,t.td=se,t.template=ne,t.textarea=_e,t.tfoot=re,t.th=le,t.thead=ae,t.time=he,t.title=de,t.tr=ue,t.track=ce,t.tt=oe,t.u=pe,t.ul=be,t.video=fe,t.wbr=ge,Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"}));
