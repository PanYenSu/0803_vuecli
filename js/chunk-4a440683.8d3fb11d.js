(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a440683"],{3185:function(t,s,a){},"99af":function(t,s,a){"use strict";var e=a("23e7"),r=a("d039"),i=a("e8b5"),o=a("861d"),c=a("7b0b"),d=a("50c4"),n=a("8418"),l=a("65f0"),p=a("1dde"),u=a("b622"),h=a("2d00"),b=u("isConcatSpreadable"),v=9007199254740991,f="Maximum allowed index exceeded",m=h>=51||!r((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),C=p("concat"),g=function(t){if(!o(t))return!1;var s=t[b];return void 0!==s?!!s:i(t)},_=!m||!C;e({target:"Array",proto:!0,forced:_},{concat:function(t){var s,a,e,r,i,o=c(this),p=l(o,0),u=0;for(s=-1,e=arguments.length;s<e;s++)if(i=-1===s?o:arguments[s],g(i)){if(r=d(i.length),u+r>v)throw TypeError(f);for(a=0;a<r;a++,u++)a in i&&n(p,u,i[a])}else{if(u>=v)throw TypeError(f);n(p,u++,i)}return p.length=u,p}})},a925:function(t,s,a){"use strict";var e=a("3185"),r=a.n(e);r.a},c566:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container py-3"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"progress"},[!1===t.isPaid?a("div",{staticClass:"progress-bar bg-warm3 progress-bar-striped progress-bar-animated",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}},[a("span",{staticClass:"sr-only"},[t._v("80% 完成")])]):a("div",{staticClass:"progress-bar bg-warm3 progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}},[a("span",{staticClass:"sr-only"},[t._v("100% 完成")])])]),a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"border p-3 mx-2 mb-4 order-card"},[a("div",{staticClass:"card rounded-0 py-4 mb-2"},[t.order.paid?a("div",[a("div",[a("img",{staticClass:"mr-2",staticStyle:{width:"400px",opacity:"0.7","object-fit":"cover"},attrs:{src:"https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",alt:""}}),a("div",{staticClass:"carousel-item active"},[a("div",{staticClass:"row justify-content-center py-7 ",staticStyle:{opacity:"1"}},[a("div",{staticClass:"col-md-6 text-center text-light"},[a("h3",{staticClass:"py-1"},[t._v("~ 感謝訂購 ~")]),a("p",{attrs:{id:"logo"}},[a("small",[a("router-link",{staticClass:"text-light",attrs:{to:"/"}},[t._v(" - ChaChaBo -")])],1)])])])])])]):a("div",[a("hr"),a("div",[a("p",{staticClass:"text-left px-4"},[t._v("付款前請再次確認您的購買明細及配送資訊，訂單成立後無法異動訂單內容 ")]),a("div",{staticClass:"form-group form-check text-left px-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.enabled,expression:"enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"Check"},domProps:{checked:Array.isArray(t.enabled)?t._i(t.enabled,null)>-1:t.enabled},on:{change:function(s){var a=t.enabled,e=s.target,r=!!e.checked;if(Array.isArray(a)){var i=null,o=t._i(a,i);e.checked?o<0&&(t.enabled=a.concat([i])):o>-1&&(t.enabled=a.slice(0,o).concat(a.slice(o+1)))}else t.enabled=r}}}),t._m(1)])])])]),a("div",{staticClass:"card rounded-0 py-4 mb-2"},[t._m(2),a("div",{staticClass:"card-body px-4 py-0"},[a("ul",{staticClass:"list-group list-group-flush"},t._l(t.order.products,(function(s,e){return a("li",{key:e,staticClass:"list-group-item px-0"},[a("div",{staticClass:"d-flex mt-1"},[a("img",{staticClass:"mr-2",staticStyle:{width:"60px",height:"60px","object-fit":"cover"},attrs:{src:s.product.imageUrl[0],alt:""}}),a("div",{staticClass:"w-100 d-flex flex-column"},[a("div",{staticClass:"d-flex justify-content-between font-weight-bold"},[a("h6",[t._v(t._s(s.product.title))]),a("p",{staticClass:"mb-0"},[t._v("x"+t._s(s.quantity))])]),a("div",{staticClass:"text-right"},[a("p",{staticClass:"mb-0"},[t._v(" "+t._s(t._f("currency")(s.product.price))+"/"+t._s(s.product.unit)+" ")])])])])])})),0),a("hr"),a("div",{staticClass:"d-flex justify-content-between"},[a("p",{staticClass:"mb-0 h5 font-weight-bold"},[t._v("應付金額")]),a("p",{staticClass:"mb-0 h5 font-weight-bold"},[t._v(" "+t._s(t._f("currency")(t.order.amount))+" ")])])])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"border p-3 mx-2 mb-4 order-card"},[a("div",{staticClass:"card rounded-0 py-4 mb-2"},[t._m(3),a("div",{staticClass:"card-body px-4 py-0"},[a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item px-0 pb-0"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("Email")]),a("td",{staticClass:"text-right border-0 px-0"},[t._v(" "+t._s(t.order.user.email)+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收貨人姓名")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.user.name)+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收貨人電話")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.user.tel)+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收貨人地址")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.user.address)+" ")])])])])]),a("li",{staticClass:"list-group-item px-0 pb-0"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v(" 付款金額 ")]),a("td",{staticClass:"text-right border-0 px-0"},[t._v(" "+t._s(t._f("currency")(t.payable))+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款方式")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.payment)+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款狀態 ")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t.order.paid?a("strong",{staticClass:"text-success"},[t._v("付款完成 ")]):a("span",[t._v("尚未付款")])])])])]),a("strong",{directives:[{name:"show",rawName:"v-show",value:t.isPaid,expression:"isPaid"}],staticClass:"my-1 text-dark"},[t._v("訂單付款完成預計1~2天出貨")])])])])]),a("div",{staticClass:"modal-footer d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!1===t.order.paid,expression:"order.paid === false"}],staticClass:"w-100 badge-secondary btn btn-primary rounded-0",attrs:{type:"submit",disabled:!0===!t.enabled},on:{click:t.payOrder}},[t._v(" 確認付款 "),t.isPaid?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("button",{staticClass:"w-100 btn btn-outline-dark mr-2 rounded-0 mt-4",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.backHome(s)}}},[a("i",{staticClass:"returnIcon fas fa-angle-left"}),t._v("繼續購物")])])])])])])],1)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("h4",{staticClass:"py-3"},[t._v("確認購買與付款方式")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{staticClass:"form-check-label",attrs:{for:"Check"}},[a("p",[t._v("我同意接受服務條款和隱私權政策")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-header border-bottom-0 bg-white px-4 py-0"},[a("h4",{staticClass:"font-weight-bold mb-2"},[t._v(" 訂單明細 ")]),a("hr")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-header border-bottom-0 bg-white px-4 py-0"},[a("h4",{staticClass:"font-weight-bold mb-2"},[t._v(" 付款資訊確認 ")]),a("hr")])}],i=(a("99af"),a("3d20")),o=a.n(i),c=a("130b"),d={data:function(){return{order:{user:{}},uuid:"7f1638b3-f468-4c9d-a7b1-49b0ae75cd3d",path:"https://course-ec-api.hexschool.io/api/",orderId:"",enabled:!1,isLoading:!1,isPaid:!1,payable:0,test:[]}},created:function(){this.orderId=this.$route.params.id,this.getOrder()},methods:{getOrder:function(){var t=this;this.$bus.$on("get-pay",(function(s){t.test.push(s),console.log(t.test)})),console.log(this.test);var s="".concat(this.path).concat(this.uuid,"/ec/orders/").concat(this.orderId);this.isLoading=!0,this.isPaid=!1,this.$http.get(s).then((function(s){t.order=s.data.data,!0===t.order.paid&&(t.isPaid=!0),t.isLoading=!1})).catch((function(){c["a"].fire({title:"無法取得資料！",icon:"error"}),t.isLoading=!1}))},payOrder:function(){var t=this,s="".concat(this.path).concat(this.uuid,"/ec/orders/").concat(this.orderId,"/paying");this.isPaid=!1,this.$http.post(s).then((function(s){s.data.data.paid&&(t.isPaid=!0,t.getOrder(),c["a"].fire({title:"感謝您完成付款！",icon:"success"})),t.enabled=!1})).catch((function(){c["a"].fire({title:"唉呀 付款失敗!",icon:"error"}),t.isPaid=!1,t.enabled=!1}))},backHome:function(){!1===this.isPaid?o.a.fire({icon:"warning",title:"您尚未完成付款！"}):(this.$router.push("/products"),c["a"].fire({title:"Hi~ 歡迎繼續選購！",icon:"success"}))}}},n=d,l=(a("a925"),a("2877")),p=Object(l["a"])(n,e,r,!1,null,"708ab4bc",null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-4a440683.8d3fb11d.js.map