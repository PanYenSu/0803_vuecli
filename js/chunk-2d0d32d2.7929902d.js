(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d32d2"],{"5c3a":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("nav",{staticClass:"navbar sticky-top navbar-expand-lg navbar-light bg-light"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/admin"}},[t._v("後台管理頁面")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[t._v("產品列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupons"}},[t._v("優惠券列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/storages"}},[t._v("圖片列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[t._v("訂單列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/customer_order"}},[t._v("模擬下單系統")])],1)]),s("span",{staticClass:"navbar-text"},[s("router-link",{staticClass:"nav-link text-info ",attrs:{to:"/"}},[t._v("登入前台")])],1),s("span",{staticClass:"navbar-text"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signOut(a)}}},[t._v("登出")])])])],1),t.checkSuccess?s("router-view",{attrs:{token:t.token}}):t._e()],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],e=(s("ac1f"),s("5319"),{data:function(){return{token:"",uuid:"7f1638b3-f468-4c9d-a7b1-49b0ae75cd3d",api:"https://course-ec-api.hexschool.io/api/",checkSuccess:!1,isLoading:!1}},methods:{signOut:function(){var t=this;this.isLoading=!0;var a="".concat(this.api,"auth/logout");this.$http.post(a,{api_token:this.token}).then((function(){t.token="",document.cookie="hexToken=;expires=;",t.$bus.$emit("message:push","成功登出 ".concat(t.token,"!!"),"success"),t.isLoading=!1,t.$router.push("/login")})).catch((function(a){t.isLoading=!1,t.$bus.$emit("message:push","出失敗惹，".concat(a),"danger")}))},check:function(){var t=this,a="".concat(this.api,"auth/check");this.$http.post(a,{api_token:this.token}).then((function(a){a.data.success||t.$router.push({path:"login"}),t.checkSuccess=!0}))}},created:function(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.check()}}),o=e,c=s("2877"),r=Object(c["a"])(o,n,i,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d32d2.7929902d.js.map