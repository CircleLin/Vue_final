(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f5dddf3"],{"4aa2":function(e,t,a){e.exports=a.p+"img/cart-check.6efd118e.svg"},"9a79":function(e,t,a){},b898:function(e,t,a){},de8a:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o={class:"wrapper"},r=Object(c["createVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",fill:"currentColor",class:"bi bi-arrow-up-circle-fill text-primary",viewBox:"0 0 16 16"},[Object(c["createVNode"])("path",{d:"M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354\n  7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"})],-1);function n(e,t,a,n,s,l){var i=Object(c["resolveComponent"])("Nav"),d=Object(c["resolveComponent"])("router-view"),b=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",o,[Object(c["createVNode"])(i),Object(c["createVNode"])(d)]),Object(c["createVNode"])(b),Object(c["withDirectives"])(Object(c["createVNode"])("a",{class:"gotop",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(){return l.goTop&&l.goTop.apply(l,arguments)}),["prevent"]))},[r],512),[[c["vShow"],s.scY>500]])],64)}var s={class:"bg-light py-4"},l=Object(c["createVNode"])("p",{class:"text-center mb-0"},"© 2021 | Circle's Coffee",-1);function i(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("footer",s,[l])}const d={};d.render=i;var b=d,u=a("4aa2"),p=a.n(u),v=Object(c["withScopeId"])("data-v-345e97fa");Object(c["pushScopeId"])("data-v-345e97fa");var f=Object(c["createVNode"])("div",{class:"py-1 bg-primary"},null,-1),g={class:"navbar navbar-expand-lg navbar-light\n  bg-light shadow-sm py-1"},j={class:"container"},O=Object(c["createVNode"])("button",{class:"navbar-toggler order-1",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),h=Object(c["createTextVNode"])("Circle's Coffee"),m={class:"collapse navbar-collapse order-lg-2 justify-content-end order-4",id:"navbarNavAltMarkup"},N={class:"navbar-nav"},w={class:"nav-item"},V=Object(c["createTextVNode"])("關於我們"),x={class:"nav-item"},k=Object(c["createTextVNode"])("買咖啡"),C={class:"nav-"},T=Object(c["createTextVNode"])("後台管理"),y={class:"d-flex position-relative px-4 py-2 order-lg-3 order-3"},B=Object(c["createVNode"])("img",{width:"32",height:"32",src:p.a,alt:"cart"},null,-1),_={class:"fw-bold cartItem position-absolute bg-danger px-2\n            rounded-pill text-white"};Object(c["popScopeId"])();var I=v((function(e,t,a,o,r,n){var s=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[f,Object(c["createVNode"])("nav",g,[Object(c["createVNode"])("div",j,[O,Object(c["createVNode"])(s,{class:"navbar-brand logo order-2 order-lg-1 me-0",to:"/home"},{default:v((function(){return[h]})),_:1}),Object(c["createVNode"])("div",m,[Object(c["createVNode"])("ul",N,[Object(c["createVNode"])("li",w,[Object(c["createVNode"])(s,{to:"/about",class:"nav-link px-lg-4  py-3 fw-bold"},{default:v((function(){return[V]})),_:1})]),Object(c["createVNode"])("li",x,[Object(c["createVNode"])(s,{to:"/products",class:"nav-link px-lg-4  py-3 fw-bold"},{default:v((function(){return[k]})),_:1})]),Object(c["createVNode"])("li",C,[Object(c["createVNode"])(s,{to:"/admin",class:"nav-link px-lg-4  py-3 fw-bold"},{default:v((function(){return[T]})),_:1})])])]),Object(c["createVNode"])("div",y,[Object(c["createVNode"])(s,{calss:"nav-link",to:"/cart"},{default:v((function(){return[B]})),_:1}),Object(c["createVNode"])("div",_,Object(c["toDisplayString"])(r.cartCount),1)])])])],64)})),M=(a("99af"),{data:function(){return{cartCount:0,cartProducts:[]}},methods:{getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("myhex1-api","/cart")).then((function(t){e.carts=t.data.data.carts,e.cartCount=t.data.data.carts.length})).catch((function(e){console.log(e.message)}))}},created:function(){var e=this;this.emitter.on("updateCart",(function(){e.getCart()})),this.getCart()}});a("e724");M.render=I,M.__scopeId="data-v-345e97fa";var S=M,A={data:function(){return{scTimer:0,scY:0,showGoTop:!1}},components:{Footer:b,Nav:S},methods:{goTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){e.scTimer||(e.scTimer=setTimeout((function(){e.scY=window.scrollY,clearTimeout(e.scTimer),e.scTimer=0}),100))}))}};a("f07b");A.render=n;t["default"]=A},e724:function(e,t,a){"use strict";a("b898")},f07b:function(e,t,a){"use strict";a("9a79")}}]);
//# sourceMappingURL=chunk-4f5dddf3.a0b94818.js.map