"use strict";(self["webpackChunkocean_vis"]=self["webpackChunkocean_vis"]||[]).push([[140,879],{6:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("div",{staticClass:"maptitle"},[t._v("标题")]),i("div",{attrs:{id:"mapPanel1"}},[i("div",{staticClass:"titlelng",staticStyle:{"text-align":"center","font-size":"12px","font-weight":"bold","writing-mode":"tb",transform:"rotate(180deg)"}},[t._v(" Latitude(°)")]),i("div",{ref:"left",staticClass:"left"}),i("div",{staticClass:"map"}),t._m(0)]),i("div",{staticClass:"top1"}),i("div",{staticClass:"titlelng",staticStyle:{"text-align":"center","font-size":"12px","font-weight":"bold"}},[t._v("Longitude(°)")]),i("div",{attrs:{id:"mapfooter1"}},[i("div",{ref:"scale",staticClass:"scale"}),i("div",{ref:"mapval",staticClass:"mapval"},[t._v("无")]),i("div",{ref:"lnglat1",staticClass:"lnglat",attrs:{id:"lnglat1"}})])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"right"},[i("img",{staticClass:"legend1",staticStyle:{height:"100%"},attrs:{src:""}})])}],r=(i(1249),i(6977),i(2222),i(8646),i(4156),{name:"Map",data:function(){return{map:null}},mounted:function(){},methods:{initMap:function(){var t=this;this.map.on("moveend",(function(e){var i="Scale 1 : "+document.getElementsByClassName("ol-scale-line1-inner")[0].innerHTML;document.getElementById("mapfooter1").getElementsByClassName("scale")[0].innerHTML=i;for(var n=t.map.getView().calculateExtent(),s=(n[2]-n[0])/5,r=(n[3]-n[1])/5,a="",o="",l=0;l<5;l++)a+='<div class="kedu1"><span>'.concat((r*l+n[1]).toFixed(1),"</span></div>"),o+='<div class="kedu2"><span>'.concat((s*l+n[0]).toFixed(1),"</span></div>");document.getElementById("mapPanel1").getElementsByClassName("left")[0].innerHTML=a,document.getElementsByClassName("top1")[0].innerHTML=o})),this.map.on("singleclick",(function(t){if(""!==addedLayer){var e=t.coordinate,i=e[0]-2+","+(e[1]-2)+","+(e[0]+2)+","+(e[1]+2);$.get("/mygeoserver/geoserver/cite/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image%2Fjpeg\n              &TRANSPARENT=true&QUERY_LAYERS=".concat(addedLayer,"&LAYERS=").concat(addedLayer,"&exceptions=application%2Fvnd.ogc.se_inimage&INFO_FORMAT=application%2Fjson\n              &FEATURE_COUNT=50&X=50&Y=50&SRS=EPSG%3A404000&STYLES=&WIDTH=101&HEIGHT=101&BBOX=").concat(i),(function(t){var e="无";0!==t.features.length&&(e=t.features[0].properties.GRAY_INDEX.toFixed(4)),document.getElementById("mapfooter1").getElementsByClassName("mapval")[0].innerHTML=e}))}else alert("请先加载影像！")}))}}}),a=r,o=i(1001),l=(0,o.Z)(a,n,s,!1,null,null,null),c=l.exports},6305:function(t,e,i){i.r(e),i.d(e,{default:function(){return Mt}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%","background-color":"#F3F2F3"}},[i("div",{staticClass:"box"},[i("div",{attrs:{id:"dashboard"}},[i("div",{staticClass:"part",attrs:{id:"data_upload"}},[t._m(0),i("div",{staticClass:"center"},[i("input",{attrs:{type:"button",value:"上传海洋数据",id:"data_btn"},on:{click:t.fileSubmit}})])]),i("div",{staticClass:"part"},[i("div",{staticClass:"title"},[i("h4",[t._v(" 选择日期 ")]),i("div",{staticClass:"container"},[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),i("el-time-select",{attrs:{"picker-options":{start:"00:00",step:"01:00",end:"23:00"},placeholder:"选择时间"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)])]),i("el-divider"),i("div",{staticClass:"part",staticStyle:{"margin-bottom":"0%"}},[t._m(1),i("div",{staticStyle:{"margin-left":"5%"}},[i("el-radio-group",{staticClass:"group",attrs:{clearable:"true"},on:{change:t.getRadio},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[i("div",{staticClass:"type"},[i("el-radio",{attrs:{label:"SSH"}},[t._v("有效波高(ssh)")]),i("div",{staticClass:"choose"},[i("table",[i("el-checkbox-group",{model:{value:t.sshList,callback:function(e){t.sshList=e},expression:"sshList"}},[i("tr",[i("td",[i("el-checkbox",{attrs:{label:"v1"}},[t._v("真实值")])],1),i("td",[i("el-checkbox",{attrs:{label:"v2"}},[t._v("预测值")])],1),i("td",[i("el-checkbox",{attrs:{label:"v3"}},[t._v("订正值")])],1)]),i("tr",[i("td",{attrs:{colspan:"2"}},[i("el-checkbox",{attrs:{label:"v4"}},[t._v("订正前")])],1),i("td",{staticStyle:{width:"40%"}},[i("el-checkbox",{attrs:{label:"v5"}},[t._v("订正后")])],1)])])],1)])],1),i("div",{staticClass:"type"},[i("el-radio",{attrs:{label:"temp"}},[t._v("海温(temperature)")]),i("div",{staticClass:"choose"},[i("table",[i("el-checkbox-group",{model:{value:t.tempList,callback:function(e){t.tempList=e},expression:"tempList"}},[i("tr",[i("td",[i("el-checkbox",{attrs:{label:"v1"}},[t._v("真实值")])],1),i("td",[i("el-checkbox",{attrs:{label:"v2"}},[t._v("预测值")])],1),i("td",[i("el-checkbox",{attrs:{label:"v3"}},[t._v("订正值")])],1)]),i("tr",[i("td",{attrs:{colspan:"2"}},[i("el-checkbox",{attrs:{label:"v4"}},[t._v("订正前")])],1),i("td",{staticStyle:{width:"40%"}},[i("el-checkbox",{attrs:{label:"v5"}},[t._v("订正后")])],1)])])],1)])],1),i("div",{staticClass:"type"},[i("el-radio",{attrs:{label:"SWH"}},[t._v("综合水位(swh)")]),i("div",{staticClass:"choose"},[i("table",[i("el-checkbox-group",{model:{value:t.swhList,callback:function(e){t.swhList=e},expression:"swhList"}},[i("tr",[i("td",[i("el-checkbox",{attrs:{label:"v1"}},[t._v("真实值")])],1),i("td",[i("el-checkbox",{attrs:{label:"v2"}},[t._v("预测值")])],1),i("td",[i("el-checkbox",{attrs:{label:"v3"}},[t._v("订正值")])],1)]),i("tr",[i("td",{attrs:{colspan:"2"}},[i("el-checkbox",{attrs:{label:"v4"}},[t._v("订正前")])],1),i("td",{staticStyle:{width:"40%"}},[i("el-checkbox",{attrs:{label:"v5"}},[t._v("订正后")])],1)])])],1)])],1),i("div",{staticClass:"type"},[i("el-radio",{attrs:{label:"wave_direction"}},[t._v("波向(wave_direction)")]),i("div",{staticClass:"choose"},[i("table",[i("el-checkbox-group",{model:{value:t.waveList,callback:function(e){t.waveList=e},expression:"waveList"}},[i("tr",[i("td",[i("el-checkbox",{attrs:{label:"v1"}},[t._v("预报值")])],1),i("td",[i("el-checkbox",{attrs:{label:"v2"}},[t._v("预测值")])],1),i("td",[i("el-checkbox",{attrs:{label:"v3"}},[t._v("再分析数据")])],1)]),i("tr",[i("td",{attrs:{colspan:"2"}},[i("el-checkbox",{attrs:{label:"v4"}},[t._v("再分析数据预报结果")])],1),i("td",{staticStyle:{width:"40%"}},[i("el-checkbox",{attrs:{label:"v5"}},[t._v("再分析数据预测结果")])],1)])])],1)])],1)])],1)]),i("div",[i("div",{staticClass:"center"},[i("input",{attrs:{type:"button",value:"渲染",id:"draw_btn"},on:{click:t.draw}})])])],1),i("div",{staticClass:"vis-content"},[i("div",{staticClass:"vis"},[i("OceanMap",{ref:"map1"})],1),i("div",{staticClass:"vis"},[i("OceanMap",{ref:"map2"})],1),i("div",{staticClass:"vis"},[i("OceanMap",{ref:"map3"})],1),i("div",{staticClass:"vis"},[i("OceanMap",{ref:"map4"})],1),i("div",{staticClass:"vis"},[i("OceanMap",{ref:"map5"})],1)])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h4",[t._v(" 数据上传 ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h4",[t._v(" 选择海洋要素数值 ")])])}],r=i(6198),a=i(8307),o=i.n(a),l=(i(8975),i(4916),i(5306),i(6977),i(1539),i(6)),c=(i(8646),i(9141)),u=i(4010),d=i(7654),p=i(1895),h=(i(1703),i(9600),i(9714),i(7730)),f=i(5856),v=i(7703),_=i(4156),g=i(876),m=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),y="units",E={DEGREES:"degrees",IMPERIAL:"imperial",NAUTICAL:"nautical",METRIC:"metric",US:"us"},b=[1,2,5],S=25.4/.28,w=function(t){function e(e){var i=this,n=e||{},s=void 0!==n.className?n.className:n.bar?"ol-scale-bar":"ol-scale-line";return i=t.call(this,{element:document.createElement("div"),render:n.render,target:n.target})||this,i.on,i.once,i.un,i.innerElement_=document.createElement("div"),i.innerElement_.className=s+"-inner",i.element.className=s+" "+v.XV,i.element.appendChild(i.innerElement_),i.viewState_=null,i.minWidth_=void 0!==n.minWidth?n.minWidth:64,i.renderedVisible_=!1,i.renderedWidth_=void 0,i.renderedHTML_="",i.addChangeListener(y,i.handleUnitsChanged_),i.setUnits(n.units||E.METRIC),i.scaleBar_=n.bar||!1,i.scaleBarSteps_=n.steps||4,i.scaleBarText_=n.text||!1,i.dpi_=n.dpi||void 0,i}return m(e,t),e.prototype.getUnits=function(){return this.get(y)},e.prototype.handleUnitsChanged_=function(){this.updateElement_()},e.prototype.setUnits=function(t){this.set(y,t)},e.prototype.setDpi=function(t){this.dpi_=t},e.prototype.updateElement_=function(){var t=this.viewState_;if(t){var e=t.center,i=t.projection,n=this.getUnits(),s=n==E.DEGREES?f.ZP.DEGREES:f.ZP.METERS,r=(0,_._Q)(i,t.resolution,e,s),a=this.minWidth_*(this.dpi_||S)/S,o=a*r,l="";if(n==E.DEGREES){var c=_.Wm[f.ZP.DEGREES];o*=c,o<c/60?(l="″",r*=3600):o<c?(l="′",r*=60):l="°"}else n==E.IMPERIAL?o<.9144?(l="in",r/=.0254):o<1609.344?(l="ft",r/=.3048):(l="mi",r/=1609.344):n==E.NAUTICAL?(r/=1852,l="nm"):n==E.METRIC?o<.001?(l="μm",r*=1e6):o<1?(l="mm",r*=1e3):o<1e3?l="m":(l="km",r/=1e3):n==E.US?o<.9144?(l="in",r*=39.37):o<1609.344?(l="ft",r/=.30480061):(l="mi",r/=1609.3472):(0,g.h)(!1,33);var u,d,p,h,v=3*Math.floor(Math.log(a*r)/Math.log(10));while(1){p=Math.floor(v/3);var m=Math.pow(10,p);if(u=b[(v%3+3)%3]*m,d=Math.round(u/r),isNaN(d))return this.element.style.display="none",void(this.renderedVisible_=!1);if(d>=a)break;++v}h=this.scaleBar_?this.createScaleBar(d,u,l):u.toFixed(p<0?-p:0)+" "+l,this.renderedHTML_!=h&&(this.innerElement_.innerHTML=h,this.renderedHTML_=h),this.renderedWidth_!=d&&(this.innerElement_.style.width=d+"px",this.renderedWidth_=d),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},e.prototype.createScaleBar=function(t,e,i){for(var n,s="1 : "+Math.round(this.getScaleForResolution()).toLocaleString(),r=[],a=t/this.scaleBarSteps_,o="#ffffff",l=0;l<this.scaleBarSteps_;l++)0===l&&r.push(this.createMarker("absolute",l)),r.push('<div><div class="ol-scale-singlebar" style="width: '+a+"px;background-color: "+o+';"></div>'+this.createMarker("relative",l)+(l%2===0||2===this.scaleBarSteps_?this.createStepText(l,t,!1,e,i):"")+"</div>"),l===this.scaleBarSteps_-1&&r.push(this.createStepText(l+1,t,!0,e,i)),o="#ffffff"===o?"#000000":"#ffffff";n=this.scaleBarText_?'<div class="ol-scale-text" style="width: '+t+'px;">'+s+"</div>":"";var c='<div style="display: flex;">'+n+r.join("")+"</div>";return c},e.prototype.createMarker=function(t,e){var i="absolute"===t?3:-10;return'<div class="ol-scale-step-marker" style="position: '+t+";top: "+i+'px;"></div>'},e.prototype.createStepText=function(t,e,i,n,s){var r=0===t?0:Math.round(n/this.scaleBarSteps_*t*100)/100,a=r+(0===t?"":" "+s),o=0===t?-3:e/this.scaleBarSteps_*-1,l=0===t?0:e/this.scaleBarSteps_*2;return'<div class="ol-scale-step-text" style="margin-left: '+o+"px;text-align: "+(0===t?"left":"center")+"; min-width: "+l+"px;left: "+(i?e+"px":"unset")+';">'+a+"</div>"},e.prototype.getScaleForResolution=function(){var t=(0,_._Q)(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,f.ZP.METERS),e=this.dpi_||S,i=1e3/25.4;return parseFloat(t.toString())*i*e},e.prototype.render=function(t){var e=t.frameState;this.viewState_=e?e.viewState:null,this.updateElement_()},e}(h.Z),x=w,T=i(3460),C=i(1262),L=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),M="projection",R="coordinateFormat",k=function(t){function e(e){var i=this,n=e||{},s=document.createElement("div");s.className=void 0!==n.className?n.className:"ol-mouse-position",i=t.call(this,{element:s,render:n.render,target:n.target})||this,i.on,i.once,i.un,i.addChangeListener(M,i.handleProjectionChanged_),n.coordinateFormat&&i.setCoordinateFormat(n.coordinateFormat),n.projection&&i.setProjection(n.projection);var r=!0,a="&#160;";return"undefinedHTML"in n?(void 0!==n.undefinedHTML&&(a=n.undefinedHTML),r=!!a):"placeholder"in n&&(!1===n.placeholder?r=!1:a=String(n.placeholder)),i.placeholder_=a,i.renderOnMouseOut_=r,i.renderedHTML_=s.innerHTML,i.mapProjection_=null,i.transform_=null,i}return L(e,t),e.prototype.handleProjectionChanged_=function(){this.transform_=null},e.prototype.getCoordinateFormat=function(){return this.get(R)},e.prototype.getProjection=function(){return this.get(M)},e.prototype.handleMouseMove=function(t){var e=this.getMap();this.updateHTML_(e.getEventPixel(t))},e.prototype.handleMouseOut=function(t){this.updateHTML_(null)},e.prototype.setMap=function(e){if(t.prototype.setMap.call(this,e),e){var i=e.getViewport();this.listenerKeys.push((0,C.oL)(i,T.Z.POINTERMOVE,this.handleMouseMove,this)),this.renderOnMouseOut_&&this.listenerKeys.push((0,C.oL)(i,T.Z.POINTEROUT,this.handleMouseOut,this)),this.updateHTML_(null)}},e.prototype.setCoordinateFormat=function(t){this.set(R,t)},e.prototype.setProjection=function(t){this.set(M,(0,_.U2)(t))},e.prototype.updateHTML_=function(t){var e=this.placeholder_;if(t&&this.mapProjection_){if(!this.transform_){var i=this.getProjection();this.transform_=i?(0,_.WO)(this.mapProjection_,i):_.gD}var n=this.getMap(),s=n.getCoordinateFromPixelInternal(t);if(s){var r=(0,_.Cs)();r&&(this.transform_=(0,_.WO)(this.mapProjection_,r)),this.transform_(s,s);var a=this.getCoordinateFormat();e=a?a(s):s.toString()}}this.renderedHTML_&&e===this.renderedHTML_||(this.element.innerHTML=e,this.renderedHTML_=e)},e.prototype.render=function(t){var e=t.frameState;e?this.mapProjection_!=e.viewState.projection&&(this.mapProjection_=e.viewState.projection,this.transform_=null):this.mapProjection_=null},e}(h.Z),F=k,A=i(186),O=i(7806),N=i(1953),P=i(187),I=i(7037),B=i(5270),j=i(5758),H=i(8735),V=i(7679),U=i(4407),Z=i(7861),D=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),G=function(t){function e(e){var i=this,n=e||{},s=void 0===n.imageSmoothing||n.imageSmoothing;void 0!==n.interpolate&&(s=n.interpolate);var r=n.params||{},a=!("TRANSPARENT"in r)||r["TRANSPARENT"];return i=t.call(this,{attributions:n.attributions,attributionsCollapsible:n.attributionsCollapsible,cacheSize:n.cacheSize,crossOrigin:n.crossOrigin,interpolate:s,opaque:!a,projection:n.projection,reprojectionErrorThreshold:n.reprojectionErrorThreshold,tileClass:n.tileClass,tileGrid:n.tileGrid,tileLoadFunction:n.tileLoadFunction,url:n.url,urls:n.urls,wrapX:void 0===n.wrapX||n.wrapX,transition:n.transition,zDirection:n.zDirection})||this,i.gutter_=void 0!==n.gutter?n.gutter:0,i.params_=r,i.v13_=!0,i.serverType_=n.serverType,i.hidpi_=void 0===n.hidpi||n.hidpi,i.tmpExtent_=(0,B.lJ)(),i.updateV13_(),i.setKey(i.getKeyForParams_()),i}return D(e,t),e.prototype.getFeatureInfoUrl=function(t,e,i,n){var s=(0,_.U2)(i),r=this.getProjection(),a=this.getTileGrid();a||(a=this.getTileGridForProjection(s));var o=a.getZForResolution(e,this.zDirection),l=a.getTileCoordForCoordAndZ(t,o);if(!(a.getResolutions().length<=l[0])){var c=a.getResolution(l[0]),u=a.getTileCoordExtent(l,this.tmpExtent_),d=(0,j.Pq)(a.getTileSize(l[0]),this.tmpSize),p=this.gutter_;0!==p&&(d=(0,j.f3)(d,p,this.tmpSize),u=(0,B.f3)(u,c*p,u)),r&&r!==s&&(c=(0,H.aA)(r,s,t,c),u=(0,_.$A)(u,s,r),t=(0,_.vs)(t,s,r));var h={SERVICE:"WMS",VERSION:A.E,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_["LAYERS"]};(0,I.f0)(h,this.params_,n);var f=Math.floor((t[0]-u[0])/c),v=Math.floor((u[3]-t[1])/c);return h[this.v13_?"I":"X"]=f,h[this.v13_?"J":"Y"]=v,this.getRequestUrl_(l,d,u,1,r||s,h)}},e.prototype.getLegendUrl=function(t,e){if(void 0!==this.urls[0]){var i={SERVICE:"WMS",VERSION:A.E,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(void 0===e||void 0===e["LAYER"]){var n=this.params_.LAYERS,s=!Array.isArray(n)||1===n.length;if(!s)return;i["LAYER"]=n}if(void 0!==t){var r=this.getProjection()?this.getProjection().getMetersPerUnit():1,a=28e-5;i["SCALE"]=t*r/a}return(0,I.f0)(i,e),(0,P.B)(this.urls[0],i)}},e.prototype.getGutter=function(){return this.gutter_},e.prototype.getParams=function(){return this.params_},e.prototype.getRequestUrl_=function(t,e,i,n,s,r){var a=this.urls;if(a){if(r["WIDTH"]=e[0],r["HEIGHT"]=e[1],r[this.v13_?"CRS":"SRS"]=s.getCode(),"STYLES"in this.params_||(r["STYLES"]=""),1!=n)switch(this.serverType_){case N.Z.GEOSERVER:var o=90*n+.5|0;"FORMAT_OPTIONS"in r?r["FORMAT_OPTIONS"]+=";dpi:"+o:r["FORMAT_OPTIONS"]="dpi:"+o;break;case N.Z.MAPSERVER:r["MAP_RESOLUTION"]=90*n;break;case N.Z.CARMENTA_SERVER:case N.Z.QGIS:r["DPI"]=90*n;break;default:(0,g.h)(!1,52);break}var l,c=s.getAxisOrientation(),u=i;if(this.v13_&&"ne"==c.substr(0,2)){var d=void 0;d=i[0],u[0]=i[1],u[1]=d,d=i[2],u[2]=i[3],u[3]=d}if(r["BBOX"]=u.join(","),1==a.length)l=a[0];else{var p=(0,U.$W)((0,Z.vp)(t),a.length);l=a[p]}return(0,P.B)(l,r)}},e.prototype.getTilePixelRatio=function(t){return this.hidpi_&&void 0!==this.serverType_?t:1},e.prototype.getKeyForParams_=function(){var t=0,e=[];for(var i in this.params_)e[t++]=i+"-"+this.params_[i];return e.join("/")},e.prototype.updateParams=function(t){(0,I.f0)(this.params_,t),this.updateV13_(),this.setKey(this.getKeyForParams_())},e.prototype.updateV13_=function(){var t=this.params_["VERSION"]||A.E;this.v13_=(0,V.n)(t,"1.3")>=0},e.prototype.tileUrlFunction=function(t,e,i){var n=this.getTileGrid();if(n||(n=this.getTileGridForProjection(i)),!(n.getResolutions().length<=t[0])){1==e||this.hidpi_&&void 0!==this.serverType_||(e=1);var s=n.getResolution(t[0]),r=n.getTileCoordExtent(t,this.tmpExtent_),a=(0,j.Pq)(n.getTileSize(t[0]),this.tmpSize),o=this.gutter_;0!==o&&(a=(0,j.f3)(a,o,this.tmpSize),r=(0,B.f3)(r,s*o,r)),1!=e&&(a=(0,j.bA)(a,e,this.tmpSize));var l={SERVICE:"WMS",VERSION:A.E,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};return(0,I.f0)(l,this.params_),this.getRequestUrl_(t,a,r,e,i,l)}},e}(O.Z),W=G,Y=i(4009),q=i(3773),X=(i(3123),i(2222),i(3948),i(2758)),z=i(102),$=i(6781),Q=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),K=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],J={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"},tt=function(t){function e(e){var i=this,n=e||{};i=t.call(this,{element:document.createElement("div"),target:n.target})||this,i.on,i.once,i.un,i.cssClassName_=void 0!==n.className?n.className:"ol-full-screen",i.documentListeners_=[],i.activeClassName_=void 0!==n.activeClassName?n.activeClassName.split(" "):[i.cssClassName_+"-true"],i.inactiveClassName_=void 0!==n.inactiveClassName?n.inactiveClassName.split(" "):[i.cssClassName_+"-false"];var s=void 0!==n.label?n.label:"⤢";i.labelNode_="string"===typeof s?document.createTextNode(s):s;var r=void 0!==n.labelActive?n.labelActive:"×";i.labelActiveNode_="string"===typeof r?document.createTextNode(r):r,i.button_=document.createElement("button");var a=n.tipLabel?n.tipLabel:"Toggle full-screen";return i.button_.setAttribute("type","button"),i.button_.title=a,i.button_.appendChild(i.labelNode_),i.button_.addEventListener(X.Z.CLICK,i.handleClick_.bind(i),!1),i.element.className="".concat(i.cssClassName_," ").concat(v.XV," ").concat(v.hg),i.element.appendChild(i.button_),i.keys_=void 0!==n.keys&&n.keys,i.source_=n.source,i.isInFullscreen_=!1,i.boundHandleMapTargetChange_=i.handleMapTargetChange_.bind(i),i}return Q(e,t),e.prototype.handleClick_=function(t){t.preventDefault(),this.handleFullScreen_()},e.prototype.handleFullScreen_=function(){var t=this.getMap();if(t){var e=t.getOwnerDocument();if(et(e))if(it(e))rt(e);else{var i=void 0;i=this.source_?"string"===typeof this.source_?e.getElementById(this.source_):this.source_:t.getTargetElement(),this.keys_?st(i):nt(i)}}},e.prototype.handleFullScreenChange_=function(){var t=this.getMap();if(t){var e=this.isInFullscreen_;this.isInFullscreen_=it(t.getOwnerDocument()),e!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?((0,$.$H)(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(J.ENTERFULLSCREEN)):((0,$.$H)(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(J.LEAVEFULLSCREEN)),t.updateSize())}},e.prototype.setClassName_=function(t,e){var i,n,s,r=this.activeClassName_,a=this.inactiveClassName_,o=e?r:a;(i=t.classList).remove.apply(i,r),(n=t.classList).remove.apply(n,a),(s=t.classList).add.apply(s,o)},e.prototype.setMap=function(e){var i=this.getMap();i&&i.removeChangeListener(z.Z.TARGET,this.boundHandleMapTargetChange_),t.prototype.setMap.call(this,e),this.handleMapTargetChange_(),e&&e.addChangeListener(z.Z.TARGET,this.boundHandleMapTargetChange_)},e.prototype.handleMapTargetChange_=function(){for(var t=this.documentListeners_,e=0,i=t.length;e<i;++e)(0,C.bN)(t[e]);t.length=0;var n=this.getMap();if(n){var s=n.getOwnerDocument();et(s)?this.element.classList.remove(v.Qi):this.element.classList.add(v.Qi);for(e=0,i=K.length;e<i;++e)t.push((0,C.oL)(s,K[e],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}},e}(h.Z);function et(t){var e=t.body;return!!(e["webkitRequestFullscreen"]||e["msRequestFullscreen"]&&t["msFullscreenEnabled"]||e.requestFullscreen&&t.fullscreenEnabled)}function it(t){return!!(t["webkitIsFullScreen"]||t["msFullscreenElement"]||t.fullscreenElement)}function nt(t){t.requestFullscreen?t.requestFullscreen():t["msRequestFullscreen"]?t["msRequestFullscreen"]():t["webkitRequestFullscreen"]&&t["webkitRequestFullscreen"]()}function st(t){t["webkitRequestFullscreen"]?t["webkitRequestFullscreen"]():nt(t)}function rt(t){t.exitFullscreen?t.exitFullscreen():t["msExitFullscreen"]?t["msExitFullscreen"]():t["webkitExitFullscreen"]&&t["webkitExitFullscreen"]()}var at=tt,ot=i(8055),lt=(i(1249),i(2031)),ct=i(1843),ut=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),dt=function(t){function e(e){var i=this,n=e||{};return i=t.call(this,n)||this,i.condition_=n.condition?n.condition:ct.vY,i.lastAngle_=void 0,i.lastMagnitude_=void 0,i.lastScaleDelta_=0,i.duration_=void 0!==n.duration?n.duration:400,i}return ut(e,t),e.prototype.handleDragEvent=function(t){if((0,ct.QL)(t)){var e=t.map,i=e.getSize(),n=t.pixel,s=n[0]-i[0]/2,r=i[1]/2-n[1],a=Math.atan2(r,s),o=Math.sqrt(s*s+r*r),l=e.getView();if(void 0!==this.lastAngle_){var c=this.lastAngle_-a;l.adjustRotationInternal(c)}this.lastAngle_=a,void 0!==this.lastMagnitude_&&l.adjustResolutionInternal(this.lastMagnitude_/o),void 0!==this.lastMagnitude_&&(this.lastScaleDelta_=this.lastMagnitude_/o),this.lastMagnitude_=o}},e.prototype.handleUpEvent=function(t){if(!(0,ct.QL)(t))return!0;var e=t.map,i=e.getView(),n=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,n),this.lastScaleDelta_=0,!1},e.prototype.handleDownEvent=function(t){return!!(0,ct.QL)(t)&&(!!this.condition_(t)&&(t.map.getView().beginInteraction(),this.lastAngle_=void 0,this.lastMagnitude_=void 0,!0))},e}(lt.Z),pt=dt,ht=i(5430),ft=i(4142),vt=i(1505),_t=i(8462),gt=i(6739),mt=i(8263),yt=(i(3290),i(7042),i(6386)),Et=i(1021),bt="#333",St=function(){function t(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=(0,j.Pq)(void 0!==e.scale?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new yt.Z({color:bt}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:Et.Z.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding}return t.prototype.clone=function(){var e=this.getScale();return new t({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0})},t.prototype.getOverflow=function(){return this.overflow_},t.prototype.getFont=function(){return this.font_},t.prototype.getMaxAngle=function(){return this.maxAngle_},t.prototype.getPlacement=function(){return this.placement_},t.prototype.getOffsetX=function(){return this.offsetX_},t.prototype.getOffsetY=function(){return this.offsetY_},t.prototype.getFill=function(){return this.fill_},t.prototype.getRotateWithView=function(){return this.rotateWithView_},t.prototype.getRotation=function(){return this.rotation_},t.prototype.getScale=function(){return this.scale_},t.prototype.getScaleArray=function(){return this.scaleArray_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.getText=function(){return this.text_},t.prototype.getTextAlign=function(){return this.textAlign_},t.prototype.getTextBaseline=function(){return this.textBaseline_},t.prototype.getBackgroundFill=function(){return this.backgroundFill_},t.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},t.prototype.getPadding=function(){return this.padding_},t.prototype.setOverflow=function(t){this.overflow_=t},t.prototype.setFont=function(t){this.font_=t},t.prototype.setMaxAngle=function(t){this.maxAngle_=t},t.prototype.setOffsetX=function(t){this.offsetX_=t},t.prototype.setOffsetY=function(t){this.offsetY_=t},t.prototype.setPlacement=function(t){this.placement_=t},t.prototype.setRotateWithView=function(t){this.rotateWithView_=t},t.prototype.setFill=function(t){this.fill_=t},t.prototype.setRotation=function(t){this.rotation_=t},t.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=(0,j.Pq)(void 0!==t?t:1)},t.prototype.setStroke=function(t){this.stroke_=t},t.prototype.setText=function(t){this.text_=t},t.prototype.setTextAlign=function(t){this.textAlign_=t},t.prototype.setTextBaseline=function(t){this.textBaseline_=t},t.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},t.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},t.prototype.setPadding=function(t){this.padding_=t},t}(),wt=St,xt={data:function(){return{value1:"",value2:"",radio:"",sshList:[],tempList:[],swhList:[],waveList:[],mylayer:"",select1:["Real","pred","Corr","Error_Before","Error_After"],select2:["forecast","predict","reanalysis","reanalysis-forecast","reanalysis-predict"],listDic:["v1","v2","v3","v4","v5"],middle_names:[],maps:[],wmsLayers:[],vectorLayers:[],coordinates:[160,6]}},components:{OceanMap:l["default"]},methods:{getLocalTime:function(t){return new Date(1e3*parseInt(t)).toLocaleString().replace(/:\d{1,2}$/," ")},fileSubmit:function(){var t=this,e=this;this.$MessageBox.alert("请将nc文件放置到/opt/temp/home/ocean/user_ocean_data/, 然后点击确定","提示",{confirmButtonText:"确定",callback:function(i){if("confirm"===i){var n=o().service({fullscreen:!0,lock:!0,text:"正在处理中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});t.$http.get("api/ocean/processOceanData").then((function(t){var i=t.data.success;!0===i?(n.close(),e.$Message("上传成功")):!1===i&&(n.close(),console.log(t),e.$Message("发生异常 "+t.data.message))}))}}})},initMap:function(t){var e=new d.Z({title:"谷歌矢量地图服务",source:new p.Z({url:"http://ocean-vis-http-server:8081/Ocean/{z}/{x}/{y}.png"})}),i=new c.Z({target:document.getElementsByClassName("map")[t],layers:[e],view:new u.ZP({projection:"EPSG:4326",center:[113,12],zoom:4}),interactions:(0,ot.ce)().extend([new pt]),controls:(0,Y.ce)().extend([])}),n="mouse-position",s=new F({coordinateFormat:function(t){return(0,q.WU)(t,"经度:{x} 纬度:{y}",2)},projection:"EPSG:4326",className:"custom-position",target:document.getElementById(n),undefinedHTML:"&#160;"});i.addControl(s),i.addControl(new at),i.addControl(new x),this.maps.push(i),this.showInfo(t)},showInfo:function(t){var e=this,i=this;i.maps[t].on("moveend",(function(e){for(var n=i.maps[t].getView().calculateExtent(),s=(n[2]-n[0])/5,r=(n[3]-n[1])/5,a="",o="",l=0;l<5;l++)a+='<div class="kedu1"><span>'.concat((r*l+n[1]).toFixed(1),"</span></div>"),o+='<div class="kedu2"><span>'.concat((s*l+n[0]).toFixed(1),"</span></div>");document.getElementsByClassName("left")[t].innerHTML=a,document.getElementsByClassName("top1")[t].innerHTML=o})),this.maps[t].on("singleclick",function(){var n=(0,r.Z)(regeneratorRuntime.mark((function n(s){var r,a,o,l,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=s.coordinate,e.coordinates[0]=s.coordinate[0],e.coordinates[1]=s.coordinate[1],r[0]-2+","+(r[1]-2)+","+(r[0]+2)+","+(r[1]+2),a=i.maps[t].getView().getResolution(),o=i.wmsLayers[t].getSource().getFeatureInfoUrl(r,a,"EPSG:4326",{INFO_FORMAT:"application/json",VERSION:"1.1.1",FORMAT:"image/png"}),!o){n.next=13;break}return n.next=9,fetch(o).then((function(t){return t.text()}));case 9:l=n.sent,l=JSON.parse(l),c=l.features[0].properties.GRAY_INDEX.toFixed(4),document.getElementsByClassName("mapval")[t].innerHTML=c;case 13:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())},getMiddle:function(t,e){for(var i=[!1,!1,!1,!1,!1],n=0;n<t.length;n++){var s=this.listDic.indexOf(t[n]);i[s]=!0,this.middle_names.push(e[s])}for(var r=0;r<i.length;r++)i[r]||this.middle_names.push(e[r])},draw:function(){if(this.middle_names=[],""!==this.value1&&""!==this.value2)if(""===this.radio)alert("请勾选海洋要素数值！");else{var t=this.radio,e=!1,i=null;if("SSH"===t?0===this.sshList.length?e=!0:(i=this.sshList,this.getMiddle(i,this.select1)):"temp"===t?0===this.tempList.length?e=!0:(i=this.tempList,this.getMiddle(i,this.select1)):"SWH"===t?0===this.swhList.length?e=!0:(i=this.swhList,this.getMiddle(i,this.select1)):"wave_direction"===t&&(0===this.waveList.length?e=!0:(i=this.waveList,this.getMiddle(i,this.select2))),e)return void alert("请勾选有单选框的复选框选项");for(var n=this.value1+" "+this.value2,s=new Date(n).getTime(),r=0;r<this.wmsLayers.length;r++)this.maps[r]&&this.maps[r].removeLayer(this.wmsLayers[r]);this.wmsLayers=[],this.vectorLayers=[];for(var a=0;a<5;a++){var o=this.maps[a],l=this.middle_names[a],c=this.radio,u="",d="";"SSH"===c?u="有效波高(ssh)":"temp"===c?u="海温(temperature)":"SWH"===c?u="综合水位(swh)":"wave_direction"===c&&(u="波向(wave_direction)"),"Real"===l?d="真实值":"pred"===l?d="预测值":"Corr"===l?d="订正值":"Error_Before"===l?d="订正前":"Error_After"===l?d="订正后":"forecast"===l?d="预报值":"predict"===l?d="预测值":"reanalysis"===l?d="再分析数据":("reanalysis-forecast"===l||"reanalysis-predict"===l)&&(d="再分析数据预报结果"),document.getElementsByClassName("maptitle")[a].innerHTML=u+"_"+d,"temp"===c&&("pred"===l?l="fore":"Corr"===l?l="corr":"Real"===l&&(l="real"));var p=c+"_"+l+"_"+s;this.mylayer="cite:"+p,this.init(o,a)}}else alert("请选择日期，时间")},getRadio:function(){this.sshList=[],this.tempList=[],this.swhList=[],this.waveList=[]},init:function(t,e){var i=new W({url:"vector/geoserver/cite/wms",params:{LAYERS:this.mylayer,TILED:!0,VERSION:"1.1.1",FORMAT:"image/png"},serverType:"geoserver",transition:0}),n=new d.Z({source:i});this.wmsLayers.push(n),t.addLayer(n);var s=i.getLegendUrl(t.getView().getResolution()),r=document.getElementsByClassName("legend1")[e];console.log(i),r.src=s;var a=new ht.Z({type:"icon",geometry:new ft.Z([this.coordinates[0]+5,this.coordinates[1]])}),o=new vt.Z({source:new _t.Z({features:[a]}),style:new gt.ZP({image:new mt.Z({anchor:[.5,1],src:s}),text:new wt({text:"图例",font:"14px font-size",fill:new yt.Z({color:"#000000"}),offsetY:10})})});this.vectorLayers.push(o),t.addLayer(o)}},mounted:function(){for(var t=0;t<5;t++)this.initMap(t)}},Tt=xt,Ct=i(1001),Lt=(0,Ct.Z)(Tt,n,s,!1,null,null,null),Mt=Lt.exports}}]);
//# sourceMappingURL=140-legacy.07aa3c3c.js.map