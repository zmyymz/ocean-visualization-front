"use strict";(self["webpackChunkocean_vis"]=self["webpackChunkocean_vis"]||[]).push([[888],{8646:function(){},1738:function(n,t,r){r(1703);var e=r(567),o=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),u=function(n){function t(t){var r=this,o="latest"===e.q4?e.q4:"v"+e.q4.split("-")[0],u="Assertion failed. See https://openlayers.org/en/"+o+"/doc/errors/#"+t+" for details.";return r=n.call(this,u)||this,r.code=t,r.name="AssertionError",r.message=u,r}return o(t,n),t}(Error);t["Z"]=u},876:function(n,t,r){r.d(t,{h:function(){return o}});var e=r(1738);function o(n,t){if(!n)throw new e.Z(t)}},3773:function(n,t,r){r.d(t,{Cf:function(){return a},IH:function(){return o},U1:function(){return c},WU:function(){return u},bA:function(){return f},fS:function(){return i}});var e=r(5270);function o(n,t){return n[0]+=+t[0],n[1]+=+t[1],n}function u(n,t,r){return n?t.replace("{x}",n[0].toFixed(r)).replace("{y}",n[1].toFixed(r)):""}function i(n,t){for(var r=!0,e=n.length-1;e>=0;--e)if(n[e]!=t[e]){r=!1;break}return r}function c(n,t){var r=Math.cos(t),e=Math.sin(t),o=n[0]*r-n[1]*e,u=n[1]*r+n[0]*e;return n[0]=o,n[1]=u,n}function f(n,t){return n[0]*=t,n[1]*=t,n}function a(n,t){if(t.canWrapX()){var r=(0,e.dz)(t.getExtent()),o=s(n,t,r);o&&(n[0]-=o*r)}return n}function s(n,t,r){var o=t.getExtent(),u=0;if(t.canWrapX()&&(n[0]<o[0]||n[0]>o[2])){var i=r||(0,e.dz)(o);u=Math.floor((n[0]-o[0])/i)}return u}},5270:function(n,t,r){r.d(t,{Cf:function(){return B},Cr:function(){return Z},EO:function(){return L},Ed:function(){return C},GN:function(){return M},H6:function(){return x},HK:function(){return _},I7:function(){return D},Ne:function(){return j},T9:function(){return g},Wj:function(){return T},Xv:function(){return U},YN:function(){return d},b8:function(){return l},bg:function(){return S},d9:function(){return a},dz:function(){return N},f3:function(){return f},fS:function(){return w},g0:function(){return I},hC:function(){return G},hI:function(){return i},jE:function(){return p},kK:function(){return F},l7:function(){return P},lJ:function(){return E},p8:function(){return b},pX:function(){return v},qP:function(){return y},qf:function(){return s},qg:function(){return R},r4:function(){return h},rL:function(){return W},w$:function(){return m},xb:function(){return A}});var e=r(6597),o=r(8997),u=r(876);function i(n){for(var t=E(),r=0,e=n.length;r<e;++r)T(t,n[r]);return t}function c(n,t,r){var e=Math.min.apply(null,n),o=Math.min.apply(null,t),u=Math.max.apply(null,n),i=Math.max.apply(null,t);return g(e,o,u,i,r)}function f(n,t,r){return r?(r[0]=n[0]-t,r[1]=n[1]-t,r[2]=n[2]+t,r[3]=n[3]+t,r):[n[0]-t,n[1]-t,n[2]+t,n[3]+t]}function a(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n.slice()}function s(n,t,r){var e,o;return e=t<n[0]?n[0]-t:n[2]<t?t-n[2]:0,o=r<n[1]?n[1]-r:n[3]<r?r-n[3]:0,e*e+o*o}function l(n,t){return p(n,t[0],t[1])}function h(n,t){return n[0]<=t[0]&&t[2]<=n[2]&&n[1]<=t[1]&&t[3]<=n[3]}function p(n,t,r){return n[0]<=t&&t<=n[2]&&n[1]<=r&&r<=n[3]}function v(n,t){var r=n[0],e=n[1],u=n[2],i=n[3],c=t[0],f=t[1],a=o.Z.UNKNOWN;return c<r?a|=o.Z.LEFT:c>u&&(a|=o.Z.RIGHT),f<e?a|=o.Z.BELOW:f>i&&(a|=o.Z.ABOVE),a===o.Z.UNKNOWN&&(a=o.Z.INTERSECTING),a}function E(){return[1/0,1/0,-1/0,-1/0]}function g(n,t,r,e,o){return o?(o[0]=n,o[1]=t,o[2]=r,o[3]=e,o):[n,t,r,e]}function d(n){return g(1/0,1/0,-1/0,-1/0,n)}function _(n,t){var r=n[0],e=n[1];return g(r,e,r,e,t)}function M(n,t,r,e,o){var u=d(o);return y(u,n,t,r,e)}function w(n,t){return n[0]==t[0]&&n[2]==t[2]&&n[1]==t[1]&&n[3]==t[3]}function P(n,t){return t[0]<n[0]&&(n[0]=t[0]),t[2]>n[2]&&(n[2]=t[2]),t[1]<n[1]&&(n[1]=t[1]),t[3]>n[3]&&(n[3]=t[3]),n}function T(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function y(n,t,r,e,o){for(;r<e;r+=o)O(n,t[r],t[r+1]);return n}function O(n,t,r){n[0]=Math.min(n[0],t),n[1]=Math.min(n[1],r),n[2]=Math.max(n[2],t),n[3]=Math.max(n[3],r)}function x(n,t){var r;return r=t(G(n)),r||(r=t(m(n)),r||(r=t(U(n)),r||(r=t(W(n)),r||!1)))}function S(n){var t=0;return A(n)||(t=N(n)*Z(n)),t}function G(n){return[n[0],n[1]]}function m(n){return[n[2],n[1]]}function R(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function I(n,t){var r;return t===e.Z.BOTTOM_LEFT?r=G(n):t===e.Z.BOTTOM_RIGHT?r=m(n):t===e.Z.TOP_LEFT?r=W(n):t===e.Z.TOP_RIGHT?r=U(n):(0,u.h)(!1,13),r}function b(n,t,r,e,o){var u=t*e[0]/2,i=t*e[1]/2,c=Math.cos(r),f=Math.sin(r),a=u*c,s=u*f,l=i*c,h=i*f,p=n[0],v=n[1],E=p-a+h,d=p-a-h,_=p+a-h,M=p+a+h,w=v-s-l,P=v-s+l,T=v+s+l,y=v+s-l;return g(Math.min(E,d,_,M),Math.min(w,P,T,y),Math.max(E,d,_,M),Math.max(w,P,T,y),o)}function Z(n){return n[3]-n[1]}function C(n,t,r){var e=r||E();return F(n,t)?(n[0]>t[0]?e[0]=n[0]:e[0]=t[0],n[1]>t[1]?e[1]=n[1]:e[1]=t[1],n[2]<t[2]?e[2]=n[2]:e[2]=t[2],n[3]<t[3]?e[3]=n[3]:e[3]=t[3]):d(e),e}function W(n){return[n[0],n[3]]}function U(n){return[n[2],n[3]]}function N(n){return n[2]-n[0]}function F(n,t){return n[0]<=t[2]&&n[2]>=t[0]&&n[1]<=t[3]&&n[3]>=t[1]}function A(n){return n[2]<n[0]||n[3]<n[1]}function L(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n}function D(n,t,r){var e=!1,u=v(n,t),i=v(n,r);if(u===o.Z.INTERSECTING||i===o.Z.INTERSECTING)e=!0;else{var c=n[0],f=n[1],a=n[2],s=n[3],l=t[0],h=t[1],p=r[0],E=r[1],g=(E-h)/(p-l),d=void 0,_=void 0;i&o.Z.ABOVE&&!(u&o.Z.ABOVE)&&(d=p-(E-s)/g,e=d>=c&&d<=a),e||!(i&o.Z.RIGHT)||u&o.Z.RIGHT||(_=E-(p-a)*g,e=_>=f&&_<=s),e||!(i&o.Z.BELOW)||u&o.Z.BELOW||(d=p-(E-f)/g,e=d>=c&&d<=a),e||!(i&o.Z.LEFT)||u&o.Z.LEFT||(_=E-(p-c)*g,e=_>=f&&_<=s)}return e}function j(n,t,r,e){var o=[];if(e>1)for(var u=n[2]-n[0],i=n[3]-n[1],f=0;f<e;++f)o.push(n[0]+u*f/e,n[1],n[2],n[1]+i*f/e,n[2]-u*f/e,n[3],n[0],n[3]-i*f/e);else o=[n[0],n[1],n[2],n[1],n[2],n[3],n[0],n[3]];t(o,o,2);for(var a=[],s=[],l=(f=0,o.length);f<l;f+=2)a.push(o[f]),s.push(o[f+1]);return c(a,s,r)}function B(n,t){var r=t.getExtent(),e=R(n);if(t.canWrapX()&&(e[0]<r[0]||e[0]>=r[2])){var o=N(r),u=Math.floor((e[0]-r[0])/o),i=u*o;n[0]-=i,n[2]-=i}return n}},6597:function(n,t){t["Z"]={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"}},8997:function(n,t){t["Z"]={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16}},4407:function(n,t,r){function e(n,t,r){return Math.min(Math.max(n,t),r)}r.d(t,{$W:function(){return s},GW:function(){return v},NM:function(){return p},SV:function(){return f},Yr:function(){return a},bI:function(){return c},f9:function(){return o},k3:function(){return u},mD:function(){return E},rU:function(){return i},t7:function(){return l},uZ:function(){return e}});var o=function(){var n;return n="cosh"in Math?Math.cosh:function(n){var t=Math.exp(n);return(t+1/t)/2},n}(),u=function(){var n;return n="log2"in Math?Math.log2:function(n){return Math.log(n)*Math.LOG2E},n}();function i(n,t,r,e,o,u){var i=o-r,f=u-e;if(0!==i||0!==f){var a=((n-r)*i+(t-e)*f)/(i*i+f*f);a>1?(r=o,e=u):a>0&&(r+=i*a,e+=f*a)}return c(n,t,r,e)}function c(n,t,r,e){var o=r-n,u=e-t;return o*o+u*u}function f(n){for(var t=n.length,r=0;r<t;r++){for(var e=r,o=Math.abs(n[r][r]),u=r+1;u<t;u++){var i=Math.abs(n[u][r]);i>o&&(o=i,e=u)}if(0===o)return null;var c=n[e];n[e]=n[r],n[r]=c;for(var f=r+1;f<t;f++)for(var a=-n[f][r]/n[r][r],s=r;s<t+1;s++)r==s?n[f][s]=0:n[f][s]+=a*n[r][s]}for(var l=new Array(t),h=t-1;h>=0;h--){l[h]=n[h][t]/n[h][h];for(var p=h-1;p>=0;p--)n[p][t]-=n[p][h]*l[h]}return l}function a(n){return n*Math.PI/180}function s(n,t){var r=n%t;return r*t<0?r+t:r}function l(n,t,r){return n+r*(t-n)}function h(n,t){var r=Math.pow(10,t);return Math.round(n*r)/r}function p(n,t){return Math.round(h(n,t))}function v(n,t){return Math.floor(h(n,t))}function E(n,t){return Math.ceil(h(n,t))}},4156:function(n,t,r){r.d(t,{Wm:function(){return e.Wm},UQ:function(){return X},h_:function(){return W},OP:function(){return q},mi:function(){return H},Vs:function(){return J},dY:function(){return tn},U2:function(){return L},_Q:function(){return D},Ck:function(){return V},WO:function(){return k},Cs:function(){return z},gD:function(){return N},lO:function(){return Q},Fj:function(){return nn},on:function(){return rn},vs:function(){return Y},$A:function(){return K}});var e=r(5856),o=(r(1703),function(){function n(n){this.code_=n.code,this.units_=n.units,this.extent_=void 0!==n.extent?n.extent:null,this.worldExtent_=void 0!==n.worldExtent?n.worldExtent:null,this.axisOrientation_=void 0!==n.axisOrientation?n.axisOrientation:"enu",this.global_=void 0!==n.global&&n.global,this.canWrapX_=!(!this.global_||!this.extent_),this.getPointResolutionFunc_=n.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=n.metersPerUnit}return n.prototype.canWrapX=function(){return this.canWrapX_},n.prototype.getCode=function(){return this.code_},n.prototype.getExtent=function(){return this.extent_},n.prototype.getUnits=function(){return this.units_},n.prototype.getMetersPerUnit=function(){return this.metersPerUnit_||e.Wm[this.units_]},n.prototype.getWorldExtent=function(){return this.worldExtent_},n.prototype.getAxisOrientation=function(){return this.axisOrientation_},n.prototype.isGlobal=function(){return this.global_},n.prototype.setGlobal=function(n){this.global_=n,this.canWrapX_=!(!n||!this.extent_)},n.prototype.getDefaultTileGrid=function(){return this.defaultTileGrid_},n.prototype.setDefaultTileGrid=function(n){this.defaultTileGrid_=n},n.prototype.setExtent=function(n){this.extent_=n,this.canWrapX_=!(!this.global_||!n)},n.prototype.setWorldExtent=function(n){this.worldExtent_=n},n.prototype.setGetPointResolution=function(n){this.getPointResolutionFunc_=n},n.prototype.getPointResolutionFunc=function(){return this.getPointResolutionFunc_},n}()),u=o,i=r(4407),c=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),f=6378137,a=Math.PI*f,s=[-a,-a,a,a],l=[-180,-85,180,85],h=f*Math.log(Math.tan(Math.PI/2)),p=function(n){function t(t){return n.call(this,{code:t,units:e.ZP.METERS,extent:s,global:!0,worldExtent:l,getPointResolution:function(n,t){return n/(0,i.f9)(t[1]/f)}})||this}return c(t,n),t}(u),v=[new p("EPSG:3857"),new p("EPSG:102100"),new p("EPSG:102113"),new p("EPSG:900913"),new p("http://www.opengis.net/def/crs/EPSG/0/3857"),new p("http://www.opengis.net/gml/srs/epsg.xml#3857")];function E(n,t,r){var e=n.length,o=r>1?r:2,u=t;void 0===u&&(u=o>2?n.slice():new Array(e));for(var i=0;i<e;i+=o){u[i]=a*n[i]/180;var c=f*Math.log(Math.tan(Math.PI*(+n[i+1]+90)/360));c>h?c=h:c<-h&&(c=-h),u[i+1]=c}return u}function g(n,t,r){var e=n.length,o=r>1?r:2,u=t;void 0===u&&(u=o>2?n.slice():new Array(e));for(var i=0;i<e;i+=o)u[i]=180*n[i]/a,u[i+1]=360*Math.atan(Math.exp(n[i+1]/f))/Math.PI-90;return u}var d=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),_=6378137,M=[-180,-90,180,90],w=Math.PI*_/180,P=function(n){function t(t,r){return n.call(this,{code:t,units:e.ZP.DEGREES,extent:M,axisOrientation:r,global:!0,metersPerUnit:w,worldExtent:M})||this}return d(t,n),t}(u),T=[new P("CRS:84"),new P("EPSG:4326","neu"),new P("urn:ogc:def:crs:OGC:1.3:CRS84"),new P("urn:ogc:def:crs:OGC:2:84"),new P("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new P("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new P("http://www.opengis.net/def/crs/EPSG/0/4326","neu")],y={};function O(n){return y[n]||y[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function x(n,t){y[n]=t}var S={};function G(n,t,r){var e=n.getCode(),o=t.getCode();e in S||(S[e]={}),S[e][o]=r}function m(n,t){var r;return n in S&&t in S[n]&&(r=S[n][t]),r}var R=r(5270),I=r(3773),b=6371008.8;function Z(n,t,r){var e=r||b,o=(0,i.Yr)(n[1]),u=(0,i.Yr)(t[1]),c=(u-o)/2,f=(0,i.Yr)(t[0]-n[0])/2,a=Math.sin(c)*Math.sin(c)+Math.sin(f)*Math.sin(f)*Math.cos(o)*Math.cos(u);return 2*e*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}var C=!0;function W(n){var t=void 0===n||n;C=!t}function U(n,t,r){var e;if(void 0!==t){for(var o=0,u=n.length;o<u;++o)t[o]=n[o];e=t}else e=n.slice();return e}function N(n,t,r){if(void 0!==t&&n!==t){for(var e=0,o=n.length;e<o;++e)t[e]=n[e];n=t}return n}function F(n){x(n.getCode(),n),G(n,n,U)}function A(n){n.forEach(F)}function L(n){return"string"===typeof n?O(n):n||null}function D(n,t,r,o){var u;n=L(n);var i=n.getPointResolutionFunc();if(i){if(u=i(t,r),o&&o!==n.getUnits()){var c=n.getMetersPerUnit();c&&(u=u*c/e.Wm[o])}}else{var f=n.getUnits();if(f==e.ZP.DEGREES&&!o||o==e.ZP.DEGREES)u=t;else{var a=k(n,L("EPSG:4326"));if(a===N&&f!==e.ZP.DEGREES)u=t*n.getMetersPerUnit();else{var s=[r[0]-t/2,r[1],r[0]+t/2,r[1],r[0],r[1]-t/2,r[0],r[1]+t/2];s=a(s,s,2);var l=Z(s.slice(0,2),s.slice(2,4)),h=Z(s.slice(4,6),s.slice(6,8));u=(l+h)/2}c=o?e.Wm[o]:n.getMetersPerUnit();void 0!==c&&(u/=c)}}return u}function j(n){A(n),n.forEach((function(t){n.forEach((function(n){t!==n&&G(t,n,U)}))}))}function B(n,t,r,e){n.forEach((function(n){t.forEach((function(t){G(n,t,r),G(t,n,e)}))}))}function X(n,t){return n?"string"===typeof n?L(n):n:L(t)}function H(n,t){return W(),Y(n,"EPSG:4326",void 0!==t?t:"EPSG:3857")}function q(n,t){if(n===t)return!0;var r=n.getUnits()===t.getUnits();if(n.getCode()===t.getCode())return r;var e=k(n,t);return e===U&&r}function k(n,t){var r=n.getCode(),e=t.getCode(),o=m(r,e);return o||(o=N),o}function V(n,t){var r=L(n),e=L(t);return k(r,e)}function Y(n,t,r){var e=V(t,r);return e(n,void 0,n.length)}function K(n,t,r,e){var o=V(t,r);return(0,R.Ne)(n,o,void 0,e)}var $=null;function z(){return $}function Q(n,t){return $?Y(n,t,$):n}function J(n,t){return $?Y(n,$,t):(C&&!(0,I.fS)(n,[0,0])&&n[0]>=-180&&n[0]<=180&&n[1]>=-90&&n[1]<=90&&(C=!1,console.warn("Call useGeographic() ol/proj once to work with [longitude, latitude] coordinates.")),n)}function nn(n,t){return $?K(n,t,$):n}function tn(n,t){return $?K(n,$,t):n}function rn(n,t){if(!$)return n;var r=L(t).getUnits(),o=$.getUnits();return r&&o?n*e.Wm[r]/e.Wm[o]:n}function en(){j(v),j(T),B(T,v,E,g)}en()},5856:function(n,t,r){r.d(t,{Wm:function(){return o}});var e={RADIANS:"radians",DEGREES:"degrees",FEET:"ft",METERS:"m",PIXELS:"pixels",TILE_PIXELS:"tile-pixels",USFEET:"us-ft"};e.METERS,e.FEET,e.USFEET,e.RADIANS,e.DEGREES;var o={};o[e.RADIANS]=6370997/(2*Math.PI),o[e.DEGREES]=2*Math.PI*6370997/360,o[e.FEET]=.3048,o[e.METERS]=1,o[e.USFEET]=1200/3937,t["ZP"]=e},567:function(n,t,r){r.d(t,{O3:function(){return e},q4:function(){return i},sq:function(){return u}});r(1703);function e(){return function(){throw new Error("Unimplemented abstract method.")}()}var o=0;function u(n){return n.ol_uid||(n.ol_uid=String(++o))}var i="6.13.0"}}]);
//# sourceMappingURL=888.f0bdf135.js.map