(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69a4e674"],{"04d1":function(t,e,r){var c=r("342f"),o=c.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},"159b":function(t,e,r){var c=r("da84"),o=r("fdbc"),n=r("17c2"),a=r("9112");for(var i in o){var s=c[i],u=s&&s.prototype;if(u&&u.forEach!==n)try{a(u,"forEach",n)}catch(l){u.forEach=n}}},"17c2":function(t,e,r){"use strict";var c=r("b727").forEach,o=r("a640"),n=o("forEach");t.exports=n?[].forEach:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,r){"use strict";var c=r("23e7"),o=r("5a34"),n=r("1d80"),a=r("ab13");c({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(n(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var c=r("861d"),o=r("c6b6"),n=r("b622"),a=n("match");t.exports=function(t){var e;return c(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"466d":function(t,e,r){"use strict";var c=r("d784"),o=r("825a"),n=r("50c4"),a=r("1d80"),i=r("8aa5"),s=r("14c3");c("match",1,(function(t,e,r){return[function(e){var r=a(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,r):new RegExp(e)[t](String(r))},function(t){var c=r(e,t,this);if(c.done)return c.value;var a=o(t),u=String(this);if(!a.global)return s(a,u);var l=a.unicode;a.lastIndex=0;var d,f=[],h=0;while(null!==(d=s(a,u))){var v=String(d[0]);f[h]=v,""===v&&(a.lastIndex=i(u,n(a.lastIndex),l)),h++}return 0===h?null:f}]}))},"4de4":function(t,e,r){"use strict";var c=r("23e7"),o=r("b727").filter,n=r("1dde"),a=n("filter");c({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,r){"use strict";var c=r("23e7"),o=r("1c0b"),n=r("7b0b"),a=r("50c4"),i=r("d039"),s=r("addb"),u=r("a640"),l=r("04d1"),d=r("d998"),f=r("2d00"),h=r("512c"),v=[],b=v.sort,p=i((function(){v.sort(void 0)})),g=i((function(){v.sort(null)})),j=u("sort"),O=!i((function(){if(f)return f<70;if(!(l&&l>3)){if(d)return!0;if(h)return h<603;var t,e,r,c,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(c=0;c<47;c++)v.push({k:e+c,v:r})}for(v.sort((function(t,e){return e.v-t.v})),c=0;c<v.length;c++)e=v[c].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}})),y=p||!g||!j||!O,m=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:String(e)>String(r)?1:-1}};c({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&o(t);var e=n(this);if(O)return void 0===t?b.call(e):b.call(e,t);var r,c,i=[],u=a(e.length);for(c=0;c<u;c++)c in e&&i.push(e[c]);i=s(i,m(t)),r=i.length,c=0;while(c<r)e[c]=i[c++];while(c<u)delete e[c++];return e}})},"512c":function(t,e,r){var c=r("342f"),o=c.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},"5a34":function(t,e,r){var c=r("44e7");t.exports=function(t){if(c(t))throw TypeError("The method doesn't accept regular expressions");return t}},7815:function(t,e,r){"use strict";r("8942")},8942:function(t,e,r){},a640:function(t,e,r){"use strict";var c=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&c((function(){r.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,r){var c=r("b622"),o=c("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(c){}}return!1}},addb:function(t,e){var r=Math.floor,c=function(t,e){var a=t.length,i=r(a/2);return a<8?o(t,e):n(c(t.slice(0,i),e),c(t.slice(i),e),e)},o=function(t,e){var r,c,o=t.length,n=1;while(n<o){c=n,r=t[n];while(c&&e(t[c-1],r)>0)t[c]=t[--c];c!==n++&&(t[c]=r)}return t},n=function(t,e,r){var c=t.length,o=e.length,n=0,a=0,i=[];while(n<c||a<o)n<c&&a<o?i.push(r(t[n],e[a])<=0?t[n++]:e[a++]):i.push(n<c?t[n++]:e[a++]);return i};t.exports=c},b727:function(t,e,r){var c=r("0366"),o=r("44ad"),n=r("7b0b"),a=r("50c4"),i=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,d=6==t,f=7==t,h=5==t||d;return function(v,b,p,g){for(var j,O,y=n(v),m=o(y),w=c(b,p,3),x=a(m.length),V=0,N=g||i,k=e?N(v,x):r||f?N(v,0):void 0;x>V;V++)if((h||V in m)&&(j=m[V],O=w(j,V,y),t))if(e)k[V]=O;else if(O)switch(t){case 3:return!0;case 5:return j;case 6:return V;case 2:s.call(k,j)}else switch(t){case 4:return!1;case 7:s.call(k,j)}return d?-1:u||l?l:k}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},caad:function(t,e,r){"use strict";var c=r("23e7"),o=r("4d64").includes,n=r("44d2");c({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},d998:function(t,e,r){var c=r("342f");t.exports=/MSIE|Trident/.test(c)},e6dc:function(t,e,r){"use strict";r.r(e);var c=r("7a23"),o=Object(c["withScopeId"])("data-v-43160c6e");Object(c["pushScopeId"])("data-v-43160c6e");var n=Object(c["createVNode"])("section",{class:"product-banner"},[Object(c["createVNode"])("h3",{class:"text-white fw-bold"},"所有商品"),Object(c["createVNode"])("h2",{class:"text-white fw-bold"},"All Products")],-1),a={class:"container py-5"},i={class:"row mb-3"},s={"aria-label":"breadcrumb"},u={class:"breadcrumb"},l={class:"breadcrumb-item"},d=Object(c["createTextVNode"])("首頁"),f=Object(c["createVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"},"買咖啡",-1),h={class:"d-flex justify-content-center category ps-0 flex-wrap"},v={class:"row mb-3 justify-content-between"},b={class:"col-6"},p={class:"pb-0"},g={class:"col-lg-3 col-6"},j=Object(c["createVNode"])("option",{value:"0"},"Sort by",-1),O=Object(c["createVNode"])("option",{value:"1"},"價格：高 -> 低",-1),y=Object(c["createVNode"])("option",{value:"2"},"價格：低 -> 高",-1),m={class:"row"};Object(c["popScopeId"])();var w=o((function(t,e,r,w,x,V){var N=Object(c["resolveComponent"])("router-link"),k=Object(c["resolveComponent"])("card");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[n,Object(c["createVNode"])("div",a,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("nav",s,[Object(c["createVNode"])("ol",u,[Object(c["createVNode"])("li",l,[Object(c["createVNode"])(N,{to:"/home"},{default:o((function(){return[d]})),_:1})]),f])])]),Object(c["createVNode"])("ul",h,[Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#",class:["category-item",[""===x.activeCategory?"active":""]],onClick:e[1]||(e[1]=Object(c["withModifiers"])((function(t){return x.activeCategory=""}),["prevent"]))},"全部商品",2)]),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(x.categories,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:t},[Object(c["createVNode"])("a",{href:"#",class:["category-item",[x.activeCategory===t?"active":""]],onClick:Object(c["withModifiers"])((function(e){return x.activeCategory=t}),["prevent"])},Object(c["toDisplayString"])(t),11,["onClick"])])})),128))]),Object(c["createVNode"])("div",v,[Object(c["createVNode"])("div",b,[Object(c["createVNode"])("p",p,"共 "+Object(c["toDisplayString"])(V.filterProducts.length)+" 樣商品",1)]),Object(c["createVNode"])("div",g,[Object(c["withDirectives"])(Object(c["createVNode"])("select",{name:"filter",id:"filter",class:"form-select text-muted","onUpdate:modelValue":e[2]||(e[2]=function(t){return x.sortBy=t})},[j,O,y],512),[[c["vModelSelect"],x.sortBy]])])]),Object(c["createVNode"])("div",m,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(V.filterProducts,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-md-6 col-lg-4 col-xl-3 mb-4",key:t.id},[Object(c["createVNode"])(k,{product:t},null,8,["product"])])})),128))])])],64)})),x=(r("d3b7"),r("99af"),r("159b"),r("caad"),r("2532"),r("4e82"),r("4de4"),r("ac1f"),r("466d"),{data:function(){return{products:[],categories:[],activeCategory:"",sortBy:0}},methods:{getProducts:function(){var t=this,e=this.$loading.show();this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("myhex1-api","/products/all")).then((function(e){var r=e.data.products;t.products=r,t.getCategory()})).catch((function(t){console.log(t.message)})).finally((function(){e.hide()}))},getCategory:function(){var t=this;this.products.forEach((function(e){t.categories.includes(e.category)||t.categories.push(e.category)}))}},watch:{sortBy:function(){"1"===this.sortBy?this.filterProducts=this.filterProducts.sort((function(t,e){return e.price-t.price})):"2"===this.sortBy&&(this.filterProducts=this.filterProducts.sort((function(t,e){return t.price-e.price})))}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return e.category.match(t.activeCategory)}))}},mounted:function(){this.getProducts()}});r("7815");x.render=w,x.__scopeId="data-v-43160c6e";e["default"]=x}}]);
//# sourceMappingURL=chunk-69a4e674.7e79342f.js.map