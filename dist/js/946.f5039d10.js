"use strict";(self["webpackChunkocean_vis"]=self["webpackChunkocean_vis"]||[]).push([[946],{3571:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("el-container",{staticStyle:{height:"100%"}},[n("el-header",{staticClass:"menu"},[n("ul",[n("li",{staticStyle:{"margin-right":"8%"}},[n("div",{attrs:{id:"title"}},[t._v("可视化系统")])]),n("li",[n("div",[n("el-link",{attrs:{target:"_blank",href:"./Ocean"}},[t._v("海洋数值预报偏差订正结果可视化")])],1)]),n("li",[n("div",[n("el-link",{attrs:{target:"_blank",href:"./Typhoon"}},[t._v("台风强度智能预报结果可视化")])],1)])])]),n("el-main",[n("div",{attrs:{id:"map"}})])],1)],1)},i=[],l=(n(8646),n(9141)),r=n(4010),s=n(7654),c=n(4699),u=n(4156),o={data(){return{map:null}},mounted(){var t=new s.Z({title:"谷歌矢量地图服务",source:new c.Z({url:"http://ocean-vis-http-server:8081/World/{z}/{x}/{y}.png"})});this.map=new l.Z({target:"map",layers:[t],view:new r.ZP({projection:"EPSG:4326",center:(0,u.mi)([113,10]),zoom:5})})}},h=o,v=n(1001),d=(0,v.Z)(h,a,i,!1,null,null,null),p=d.exports}}]);
//# sourceMappingURL=946.f5039d10.js.map