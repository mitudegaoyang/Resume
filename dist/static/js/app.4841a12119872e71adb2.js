webpackJsonp([1],{"+skl":function(t,e){},"1PZg":function(t,e){},IzJu:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("IzJu")},null,null).exports,i=n("/ocq"),s={name:"NavBar",components:{},data:function(){return{showLunarCalendar:!0,throttleType:!1,festival:[],throttleName:"",src:""}},props:{activeName:{type:String,required:!0}},methods:{},created:function(){this.src=Object({NODE_ENV:"production"}).BASE_API}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{staticStyle:{"z-index":"1000"}},[n("Menu",{attrs:{mode:"horizontal","active-name":t.activeName}},[n("div",{staticClass:"layout-logo"}),t._v(" "),n("div",{staticClass:"layout-nav"},[n("MenuItem",{attrs:{name:"home",to:"/home"}},[n("Icon",{attrs:{type:"ios-home",size:"24"}}),t._v("\n          首页\n        ")],1),t._v(" "),n("MenuItem",{attrs:{name:"finance",to:"/finance"}},[n("Icon",{attrs:{type:"ios-stats",size:"24"}}),t._v("\n          我要出借\n        ")],1),t._v(" "),n("MenuItem",{attrs:{name:"riskEducation",to:"/riskEducation"}},[n("Icon",{attrs:{type:"ios-school",size:"24"}}),t._v("\n          网站课堂\n        ")],1),t._v(" "),n("Submenu",{attrs:{name:"information"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-information-circle",size:"24"}}),t._v("\n            信息披露\n          ")],1),t._v(" "),n("MenuItem",{attrs:{name:"organizationInfo",to:"/information/baseInfo/organizationInfo"}},[t._v("组织信息")]),t._v(" "),n("MenuItem",{attrs:{name:"complianceProgress",to:"/information/complianceProgress"}},[t._v("合规进度")]),t._v(" "),n("MenuItem",{attrs:{name:"external",to:"/information/notice"}},[t._v("对外公告")]),t._v(" "),n("MenuItem",{attrs:{name:"auditReport",to:"/information/auditReport"}},[t._v("审计报告")]),t._v(" "),n("MenuItem",{attrs:{name:"operationsReport",to:"/information/baseInfo/operationsReport"}},[t._v("运营报告")]),t._v(" "),n("MenuItem",{attrs:{name:"filingInfo",to:"/information/baseInfo/filingInfo"}},[t._v("备案信息")]),t._v(" "),n("MenuItem",{attrs:{name:"contactUs",to:"/information/contactUs"}},[t._v("联系我们")])],2),t._v(" "),n("MenuItem",{attrs:{name:"safe",to:"/safe"}},[n("Icon",{attrs:{type:"ios-lock",size:"24"}}),t._v("\n          安全保障\n        ")],1),t._v(" "),n("MenuItem",{attrs:{name:"center",to:"/center"}},[n("Icon",{attrs:{type:"ios-person",size:"24"}}),t._v("\n          个人中心\n        ")],1)],1)])],1),t._v(" "),n("div",{staticClass:"headerBox"})],1)},staticRenderFns:[]};var m={name:"Home",components:{NavBar:n("VU/8")(s,c,!1,function(t){n("vEjB")},"data-v-a48945ee",null).exports},data:function(){return{msg:"Home"}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("Row",[e("Col",[e("NavBar",{attrs:{activeName:"home"}})],1)],1)],1)},staticRenderFns:[]};var v=n("VU/8")(m,u,!1,function(t){n("1PZg")},"data-v-d6216b3a",null).exports;a.default.use(i.a);var l=new i.a({routes:[{path:"/",name:"home",component:v}]}),f=n("BTaQ"),p=n.n(f);n("+skl");a.default.use(p.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:l,components:{App:r},template:"<App/>"})},vEjB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4841a12119872e71adb2.js.map