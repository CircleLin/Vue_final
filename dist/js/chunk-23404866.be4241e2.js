(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23404866"],{"0a54":function(e,t,a){"use strict";a("2f00")},"2f00":function(e,t,a){},b0c0:function(e,t,a){var c=a("83ab"),o=a("9bf2").f,r=Function.prototype,l=r.toString,n=/^\s*function ([^ (]*)/,s="name";c&&!(s in r)&&o(r,s,{configurable:!0,get:function(){try{return l.call(this).match(n)[1]}catch(e){return""}}})},cf09:function(e,t,a){e.exports=a.p+"img/arrow-left-short.36456acd.svg"},cf2a:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),o=a("cf09"),r=a.n(o),l=Object(c["withScopeId"])("data-v-774deb4c");Object(c["pushScopeId"])("data-v-774deb4c");var n={class:"container py-5"},s={class:"row"},d=Object(c["createVNode"])("h5",{class:"fw-bold"},"確認訂單 Check Out",-1),i=Object(c["createVNode"])("img",{src:r.a,width:"20",alt:""},null,-1),u=Object(c["createTextVNode"])(" 回到購物車"),b={class:"col-md-5 bg-secondary px-4 py-3"},m=Object(c["createStaticVNode"])('<div class="row mb-1 justify-content-between" data-v-774deb4c><div class="col-2" data-v-774deb4c><h6 class="fw-bold" data-v-774deb4c>商品</h6></div><div class="col-2 text-end" data-v-774deb4c><h6 class="fw-bold" data-v-774deb4c>小計</h6></div></div>',1),f={class:"col-6"},p={class:"row py-3 h-100 d-flex flex-column justify-content-between"},j={class:"img-container mb-2"},h={class:"mb-2"},O={class:"mb-2"},V={class:"col-6 py-3"},g={class:"row h-100 d-flex flex-column justify-content-between"},v={class:"text-end"},N={class:"text-end"},y={class:"text-end mt-3"},x={key:0,class:"text-danger text-end"},k={class:"text-end"},w={class:"col-md-7 px-4 py-3"},S=Object(c["createVNode"])("h6",{class:"fw-bold"},"填寫收件人資訊",-1),D=Object(c["createVNode"])("label",{for:"name",class:"form-label mt-3"},[Object(c["createVNode"])("span",{class:"text-danger"},"* "),Object(c["createTextVNode"])("姓名")],-1),L=Object(c["createVNode"])("label",{for:"email",class:"form-label mt-3"},[Object(c["createVNode"])("span",{class:"text-danger"},"* "),Object(c["createTextVNode"])("Email")],-1),C=Object(c["createVNode"])("label",{for:"tel",class:"form-label mt-3"},[Object(c["createVNode"])("span",{class:"text-danger"},"* "),Object(c["createTextVNode"])("收件人電話")],-1),T=Object(c["createVNode"])("label",{for:"addr",class:"form-label mt-3"},[Object(c["createVNode"])("span",{class:"text-danger"},"* "),Object(c["createTextVNode"])("收件人地址")],-1),$=Object(c["createVNode"])("label",{for:"msg",class:"form-label mt-3"},"訂單備註 (選填)",-1),_={class:"form-check-label mt-3"},B=Object(c["createVNode"])("span",{class:"text-danger"}," * ",-1),U=Object(c["createTextVNode"])("我已閱讀並同意網站的 條款與條件 "),q=Object(c["createVNode"])("button",{class:"btn btn-primary btn-lg mt-3 d-block w-100",type:"submit"},"送出訂單",-1);Object(c["popScopeId"])();var F=l((function(e,t,a,o,r,F){var I=Object(c["resolveComponent"])("router-link"),A=Object(c["resolveComponent"])("Field"),E=Object(c["resolveComponent"])("error-message"),J=Object(c["resolveComponent"])("Form");return Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[Object(c["createVNode"])("div",s,[d,Object(c["createVNode"])(I,{to:"/cart",class:"h6 mb-5 text-primary",style:{"text-decoration":"none"}},{default:l((function(){return[i,u]})),_:1}),Object(c["createVNode"])("div",b,[m,(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.carts,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"row border-top border-bottom",key:t.id},[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("div",j,[Object(c["createVNode"])("img",{src:t.product.imageUrl,alt:t.product.title},null,8,["src","alt"])]),Object(c["createVNode"])("div",h,Object(c["toDisplayString"])(t.product.title),1),Object(c["createVNode"])("div",O,Object(c["toDisplayString"])(t.product.roast),1),Object(c["createVNode"])("div",null,Object(c["toDisplayString"])(t.product.unit)+" / TWD "+Object(c["toDisplayString"])(e.$filters.currency(t.product.price)),1)])]),Object(c["createVNode"])("div",V,[Object(c["createVNode"])("div",g,[Object(c["createVNode"])("div",v,"數量："+Object(c["toDisplayString"])(t.qty),1),Object(c["createVNode"])("div",N," TWD "+Object(c["toDisplayString"])(e.$filters.currency(t.qty*t.product.price))+" 元 ",1)])])])})),128)),Object(c["createVNode"])("h5",y,"小計："+Object(c["toDisplayString"])(e.$filters.currency(r.total))+" 元",1),r.final_total!==r.total?(Object(c["openBlock"])(),Object(c["createBlock"])("h6",x,"已使用優惠券")):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("h5",k,"總計："+Object(c["toDisplayString"])(e.$filters.currency(r.final_total))+" 元",1)]),Object(c["createVNode"])("div",w,[S,Object(c["createVNode"])(J,{onSubmit:F.onSubmit,ref:"form"},{default:l((function(e){var a=e.errors;return[D,Object(c["createVNode"])(A,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:r.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.user.name=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(E,{name:"姓名",class:"invalid-feedback"}),L,Object(c["createVNode"])(A,{id:"email",name:"信箱",type:"email",class:["form-control",{"is-invalid":a["信箱"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:r.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.user.email=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(E,{name:"信箱",class:"invalid-feedback"}),C,Object(c["createVNode"])(A,{id:"tel",name:"電話",type:"tel",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入電話",rules:F.isPhone,modelValue:r.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.user.tel=e})},null,8,["class","rules","modelValue"]),Object(c["createVNode"])(E,{name:"電話",class:"invalid-feedback"}),T,Object(c["createVNode"])(A,{id:"addr",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:r.user.addr,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.user.addr=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(E,{name:"地址",class:"invalid-feedback"}),$,Object(c["createVNode"])(A,{id:"msg",name:"備註",placeholder:"字數不可超過"+r.msgLengthLimit+"字元",cols:"10",rows:"3",class:["form-control",{"is-invalid":a["備註"]}],rules:F.msgTooLong,modelValue:r.msg,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.msg=e}),as:"textarea"},null,8,["placeholder","class","rules","modelValue"]),Object(c["createVNode"])(E,{name:"備註",class:"invalid-feedback"}),Object(c["createVNode"])(A,{name:"agree",type:"checkbox",rules:F.checkAgree,modelValue:r.user.agree,"onUpdate:modelValue":t[7]||(t[7]=function(e){return r.user.agree=e})},{default:l((function(){return[Object(c["createVNode"])("label",_,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"checkbox",name:"agree",class:"form-check-input","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.user.agree=e})},null,512),[[c["vModelCheckbox"],r.user.agree]]),B,U])]})),_:1},8,["rules","modelValue"]),Object(c["createVNode"])(E,{name:"agree",class:"invalid-feedback"}),q]})),_:1},8,["onSubmit"])])])])})),I=(a("d3b7"),a("99af"),{data:function(){return{carts:[],final_total:0,total:0,user:{email:"",name:"",tel:"",addr:"",agree:!1},msg:"",msgLengthLimit:250}},methods:{getCart:function(){var e=this,t=this.$loading.show();this.$http.get("".concat("https://vue3-course-api.hexschool.io","/api/").concat("myhex1-api","/cart")).then((function(t){e.carts=t.data.data.carts,e.total=t.data.data.total,e.final_total=t.data.data.final_total})).catch((function(e){console.log(e.message)})).finally((function(){t.hide()}))},isPhone:function(e){return void 0===e||(""!==e&&e.length>=8&&e.length<=10||"電話為必填，且長度需介於8~10碼")},msgTooLong:function(e){return void 0===e||(e.length<this.msgLengthLimit||"留言字數不可超過".concat(this.msgLengthLimit,"個字元"))},checkAgree:function(e){return!!e||"請閱讀並同意網站購物條款"},onSubmit:function(){var e=this,t=this.$loading.show(),a={data:{user:{name:this.user.name,email:this.user.email,tel:this.user.tel,address:this.user.addr},message:this.msg}};this.$http.post("".concat("https://vue3-course-api.hexschool.io","/api/").concat("myhex1-api","/order"),a).then((function(t){var a=t.data,c=a.success,o=a.orderId;c&&(e.$refs.form.resetForm(),e.emitter.emit("updateCart"),e.$router.push({path:"/pay/".concat(o)}))})).catch((function(e){console.log(e.message)})).finally((function(){t.hide()}))}},mounted:function(){this.getCart()}});a("0a54");I.render=F,I.__scopeId="data-v-774deb4c";t["default"]=I}}]);
//# sourceMappingURL=chunk-23404866.be4241e2.js.map