(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29770173"],{"057f":function(t,e,c){var r=c("fc6a"),o=c("241c").f,n={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==n.call(t)?i(t):o(r(t))}},2740:function(t,e,c){"use strict";c("a45e")},"4de4":function(t,e,c){"use strict";var r=c("23e7"),o=c("b727").filter,n=c("1dde"),a=n("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"746f":function(t,e,c){var r=c("428f"),o=c("5135"),n=c("e538"),a=c("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:n.f(t)})}},a45e:function(t,e,c){},a4d3:function(t,e,c){"use strict";var r=c("23e7"),o=c("da84"),n=c("d066"),a=c("c430"),i=c("83ab"),s=c("4930"),l=c("fdbf"),u=c("d039"),d=c("5135"),b=c("e8b5"),f=c("861d"),p=c("825a"),O=c("7b0b"),y=c("fc6a"),h=c("c04e"),m=c("5c6c"),v=c("7c73"),j=c("df75"),g=c("241c"),w=c("057f"),k=c("7418"),N=c("06cf"),V=c("9bf2"),S=c("d1e7"),B=c("9112"),x=c("6eeb"),P=c("5692"),C=c("f772"),D=c("d012"),$=c("90e3"),q=c("b622"),T=c("e538"),E=c("746f"),G=c("d44e"),I=c("69f3"),_=c("b727").forEach,A=C("hidden"),F="Symbol",M="prototype",J=q("toPrimitive"),L=I.set,W=I.getterFor(F),U=Object[M],H=o.Symbol,Q=n("JSON","stringify"),z=N.f,K=V.f,R=w.f,X=S.f,Y=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),ct=P("wks"),rt=o.QObject,ot=!rt||!rt[M]||!rt[M].findChild,nt=i&&u((function(){return 7!=v(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,c){var r=z(U,e);r&&delete U[e],K(t,e,c),r&&t!==U&&K(U,e,r)}:K,at=function(t,e){var c=Y[t]=v(H[M]);return L(c,{type:F,tag:t,description:e}),i||(c.description=e),c},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},st=function(t,e,c){t===U&&st(Z,e,c),p(t);var r=h(e,!0);return p(c),d(Y,r)?(c.enumerable?(d(t,A)&&t[A][r]&&(t[A][r]=!1),c=v(c,{enumerable:m(0,!1)})):(d(t,A)||K(t,A,m(1,{})),t[A][r]=!0),nt(t,r,c)):K(t,r,c)},lt=function(t,e){p(t);var c=y(e),r=j(c).concat(pt(c));return _(r,(function(e){i&&!dt.call(c,e)||st(t,e,c[e])})),t},ut=function(t,e){return void 0===e?v(t):lt(v(t),e)},dt=function(t){var e=h(t,!0),c=X.call(this,e);return!(this===U&&d(Y,e)&&!d(Z,e))&&(!(c||!d(this,e)||!d(Y,e)||d(this,A)&&this[A][e])||c)},bt=function(t,e){var c=y(t),r=h(e,!0);if(c!==U||!d(Y,r)||d(Z,r)){var o=z(c,r);return!o||!d(Y,r)||d(c,A)&&c[A][r]||(o.enumerable=!0),o}},ft=function(t){var e=R(y(t)),c=[];return _(e,(function(t){d(Y,t)||d(D,t)||c.push(t)})),c},pt=function(t){var e=t===U,c=R(e?Z:y(t)),r=[];return _(c,(function(t){!d(Y,t)||e&&!d(U,t)||r.push(Y[t])})),r};if(s||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),c=function(t){this===U&&c.call(Z,t),d(this,A)&&d(this[A],e)&&(this[A][e]=!1),nt(this,e,m(1,t))};return i&&ot&&nt(U,e,{configurable:!0,set:c}),at(e,t)},x(H[M],"toString",(function(){return W(this).tag})),x(H,"withoutSetter",(function(t){return at($(t),t)})),S.f=dt,V.f=st,N.f=bt,g.f=w.f=ft,k.f=pt,T.f=function(t){return at(q(t),t)},i&&(K(H[M],"description",{configurable:!0,get:function(){return W(this).description}}),a||x(U,"propertyIsEnumerable",dt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),_(j(ct),(function(t){E(t)})),r({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var c=H(e);return tt[e]=c,et[c]=e,c},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!i},{create:ut,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(O(t))}}),Q){var Ot=!s||u((function(){var t=H();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,e,c){var r,o=[t],n=1;while(arguments.length>n)o.push(arguments[n++]);if(r=e,(f(e)||void 0!==t)&&!it(t))return b(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,Q.apply(null,o)}})}H[M][J]||B(H[M],J,H[M].valueOf),G(H,F),D[A]=!0},b727:function(t,e,c){var r=c("0366"),o=c("44ad"),n=c("7b0b"),a=c("50c4"),i=c("65f0"),s=[].push,l=function(t){var e=1==t,c=2==t,l=3==t,u=4==t,d=6==t,b=7==t,f=5==t||d;return function(p,O,y,h){for(var m,v,j=n(p),g=o(j),w=r(O,y,3),k=a(g.length),N=0,V=h||i,S=e?V(p,k):c||b?V(p,0):void 0;k>N;N++)if((f||N in g)&&(m=g[N],v=w(m,N,j),t))if(e)S[N]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return N;case 2:s.call(S,m)}else switch(t){case 4:return!1;case 7:s.call(S,m)}return d?-1:l||u?u:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c84b:function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var r=c("7a23"),o=Object(r["withScopeId"])("data-v-1354c35f");Object(r["pushScopeId"])("data-v-1354c35f");var n={class:"container"},a={class:"row my-4"},i={"aria-label":"breadcrumb"},s={class:"breadcrumb mb-0"},l={class:"breadcrumb-item"},u=Object(r["createTextVNode"])("首頁"),d={class:"breadcrumb-item"},b=Object(r["createTextVNode"])("買咖啡"),f={class:"breadcrumb-item active","aria-current":"page"},p={class:"row"},O={class:"col-md-6 large-p-img p-3"},y={class:"col-md-6 p-3"},h={class:"fw-bold mb-4"},m=Object(r["createVNode"])("hr",null,null,-1),v={class:"mb-4 text-danger fw-bold"},j={key:0,class:"fw-bold"},g={class:"mb-4"},w={key:1,class:"fw-bold"},k={class:"mb-4"},N={key:2,class:"fw-bold"},V={key:4,class:"fw-bold"},S={key:5,class:"fw-bold"},B={class:"mb-4"},x={key:6,class:"fw-bold text-danger"},P={key:7,class:"row gx-1"},C={class:"col-4"},D={class:"input-group mb-3"},$={class:"col-8"},q={key:8,class:""},T=Object(r["createVNode"])("button",{class:"btn btn-primary w-100 d-block",disabled:""},"售完補貨中",-1),E=Object(r["createVNode"])("hr",null,null,-1),G={class:"float-end fw-bold h5"},I={class:"container my-4"},_=Object(r["createVNode"])("div",{class:"row"},[Object(r["createVNode"])("h5",{class:"fw-bold"},"你可能也會喜歡")],-1),A={class:"row"};Object(r["popScopeId"])();var F=o((function(t,e,c,F,M,J){var L=Object(r["resolveComponent"])("router-link"),W=Object(r["resolveComponent"])("card");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])("div",n,[Object(r["createVNode"])("div",a,[Object(r["createVNode"])("nav",i,[Object(r["createVNode"])("ol",s,[Object(r["createVNode"])("li",l,[Object(r["createVNode"])(L,{to:"/home"},{default:o((function(){return[u]})),_:1})]),Object(r["createVNode"])("li",d,[Object(r["createVNode"])(L,{to:"/products"},{default:o((function(){return[b]})),_:1})]),Object(r["createVNode"])("li",f,Object(r["toDisplayString"])(M.product.title),1)])])]),Object(r["createVNode"])("div",p,[Object(r["createVNode"])("div",O,[Object(r["createVNode"])("img",{src:M.product.imageUrl,alt:M.product.title},null,8,["src","alt"])]),Object(r["createVNode"])("div",y,[Object(r["createVNode"])("h4",h,Object(r["toDisplayString"])(M.product.title),1),m,Object(r["createVNode"])("p",v,Object(r["toDisplayString"])(M.product.unit)+" / TWD "+Object(r["toDisplayString"])(t.$filters.currency(M.product.price)),1),"咖啡豆"===M.product.category?(Object(r["openBlock"])(),Object(r["createBlock"])("h5",j,"風味描述：")):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("p",g,Object(r["toDisplayString"])(M.product.flavor_desc),1),"咖啡豆"===M.product.category?(Object(r["openBlock"])(),Object(r["createBlock"])("h5",w,"烘焙度：")):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("p",k,Object(r["toDisplayString"])(M.product.roast),1),"咖啡豆"===M.product.category?(Object(r["openBlock"])(),Object(r["createBlock"])("h5",N,"研磨方式")):Object(r["createCommentVNode"])("",!0),"咖啡豆"===M.product.category?Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createBlock"])("select",{key:3,class:"form-select mb-4","onUpdate:modelValue":e[1]||(e[1]=function(t){return M.selectedGrind=t})},[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(M.grindOption,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("option",{value:t.value,key:t.value},Object(r["toDisplayString"])(t.text),9,["value"])})),128))],512)),[[r["vModelSelect"],M.selectedGrind]]):Object(r["createCommentVNode"])("",!0),"咖啡豆"!==M.product.category?(Object(r["openBlock"])(),Object(r["createBlock"])("h5",V,"產品描述：")):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("p",{class:"mb-4",innerHTML:M.product.description},null,8,["innerHTML"]),"咖啡豆"!==M.product.category?(Object(r["openBlock"])(),Object(r["createBlock"])("h5",S,"說明內容：")):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("p",B,Object(r["toDisplayString"])(M.product.content),1),1==M.product.instock?(Object(r["openBlock"])(),Object(r["createBlock"])("p",x,"僅剩1組")):Object(r["createCommentVNode"])("",!0),0!==M.product.instock?(Object(r["openBlock"])(),Object(r["createBlock"])("div",P,[Object(r["createVNode"])("div",C,[Object(r["createVNode"])("div",D,[Object(r["createVNode"])("button",{class:"btn btn-outline-primary",type:"button",onClick:e[2]||(e[2]=function(t){return 0==M.qty?0:M.qty-=1})}," - "),Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"v-model.number",class:"form-control text-center",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":e[3]||(e[3]=function(t){return M.qty=t})},null,512),[[r["vModelText"],M.qty]]),Object(r["createVNode"])("button",{class:"btn btn-outline-primary",disabled:M.qty>=M.product.instock,type:"button",onClick:e[4]||(e[4]=function(t){return M.qty+=1})}," + ",8,["disabled"])])]),Object(r["createVNode"])("div",$,[Object(r["createVNode"])("button",{class:"btn btn-primary w-100 d-block",onClick:e[5]||(e[5]=function(){return J.addCart&&J.addCart.apply(J,arguments)})},"加入購物車")])])):(Object(r["openBlock"])(),Object(r["createBlock"])("div",q,[T])),E,Object(r["createVNode"])("div",G,"TWD "+Object(r["toDisplayString"])(t.$filters.currency(J.totalPrice))+" 元",1)])])]),Object(r["createVNode"])("div",I,[_,Object(r["createVNode"])("div",A,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(M.sameProducts,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"col-md-3 mb-4",key:t.id},[Object(r["createVNode"])(W,{product:t,onGetProduct:J.getProduct},null,8,["product","onGetProduct"])])})),128))])])],64)})),M=(c("99af"),c("d3b7"),c("fb6a"),c("4de4"),c("7e38")),J={data:function(){return{selectedGrind:0,grindOption:[{text:"不研磨 Whole Bean",value:0},{text:"手沖 Pour Over",value:1},{text:"虹吸式 Syphon",value:2},{text:"義式 espresso",value:3}],product:{},sameProducts:[],qty:0}},coponents:{card:M["a"]},methods:{getProduct:function(){var t=this,e=this.$loading.show();setTimeout((function(){var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("myhex1-api","/product/").concat(t.$route.params.id);t.$http.get(c).then((function(e){t.product=e.data.product,t.getSameProducts()})).catch((function(t){console.log(t.message)})).finally((function(){e.hide()}))}),500)},addCart:function(){var t=this;if(this.qty>0){var e=this.$loading.show(),c={product_id:this.product.id,qty:this.qty,grindType:"咖啡豆"===this.product.category?this.selectedGrind:""};this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("myhex1-api","/cart"),{data:c}).then((function(e){var c=e.data.success;c&&(t.emitter.emit("updateCart"),t.$swal("已加入購物車"))})).catch((function(e){t.$swal({icon:"error",title:"Oops...",text:"出了點問題.."}),console.log(e.message)})).finally((function(){e.hide()}))}else this.$swal("請選擇數量")},getSameProducts:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("myhex1-api","/products/all")).then((function(e){var c=e.data.products;t.sameProducts=c.filter((function(e){return e.category===t.product.category&&e.id!==t.product.id})).slice(0,4)})).catch((function(t){console.log(t.message)}))}},computed:{totalPrice:function(){return this.product.price*this.qty}},mounted:function(){this.getProduct()}};c("2740");J.render=F,J.__scopeId="data-v-1354c35f";e["default"]=J},e01a:function(t,e,c){"use strict";var r=c("23e7"),o=c("83ab"),n=c("da84"),a=c("5135"),i=c("861d"),s=c("9bf2").f,l=c("e893"),u=n.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(b,u);var f=b.prototype=u.prototype;f.constructor=b;var p=f.toString,O="Symbol(test)"==String(u("test")),y=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=p.call(t);if(a(d,t))return"";var c=O?e.slice(7,-1):e.replace(y,"$1");return""===c?void 0:c}}),r({global:!0,forced:!0},{Symbol:b})}},e538:function(t,e,c){var r=c("b622");e.f=r},fb6a:function(t,e,c){"use strict";var r=c("23e7"),o=c("861d"),n=c("e8b5"),a=c("23cb"),i=c("50c4"),s=c("fc6a"),l=c("8418"),u=c("b622"),d=c("1dde"),b=d("slice"),f=u("species"),p=[].slice,O=Math.max;r({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var c,r,u,d=s(this),b=i(d.length),y=a(t,b),h=a(void 0===e?b:e,b);if(n(d)&&(c=d.constructor,"function"!=typeof c||c!==Array&&!n(c.prototype)?o(c)&&(c=c[f],null===c&&(c=void 0)):c=void 0,c===Array||void 0===c))return p.call(d,y,h);for(r=new(void 0===c?Array:c)(O(h-y,0)),u=0;y<h;y++,u++)y in d&&l(r,u,d[y]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-29770173.d192e146.js.map