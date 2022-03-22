<template>
<div style="height:100%">
  <div class="maptitle">标题</div>
    <div id="mapPanel1">
    <div class="titlelng"
      style="text-align: center;font-size: 12px;font-weight: bold;writing-mode: tb;transform: rotate(180deg);">
      Latitude(°)</div>
    <div class="left" ref="left"></div>
    <div class="map"></div>
    <div class="right">
      <img class="legend1" src="" style="height: 100%;" />
    </div>

  </div>

  <div class="top1"></div>
  <div class="titlelng" style="text-align: center;font-size: 12px;font-weight: bold;">Longitude(°)</div>
  <div id="mapfooter1">
    <div class="scale" ref='scale'></div>
    <div class="mapval" ref='mapval'>无</div>
    <div class="lnglat" id="lnglat1" ref='lnglat1'></div>
  </div>

</div>


    
</template>

<style>
.maptitle{
    height: 32px;
    line-height: 32px;
    font-weight: bold;
    font-size: 12px;
    padding-left:15%;
}

#mapfooter,#mapfooter1,#mapfooter2,#mapfooter3,#mapfooter4,#mapfooter5{
    height: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
}
.top,.top1,.top2,.top3,.top4,.top5{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 10%;
    height: 25px;
    font-size: 12px;
}
.top .kedu2,.top1 .kedu2,.top2 .kedu2,.top3 .kedu2,.top4 .kedu2,.top5 .kedu2{
    width: 20%;
    border-left: 1px solid #333;
    height: 4px;
}

.top .kedu2 span,.top1 .kedu2 span,.top2 .kedu2 span,.top3 .kedu2 span,.top4 .kedu2 span,.top5 .kedu2 span{
    position: relative;
    line-height: 30px;
    margin-left: -10px;
}

#mapPanel,#mapPanel1,#mapPanel2,#mapPanel3,#mapPanel4,#mapPanel5{
    height: calc(100% - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
}

#mapPanel .left,#mapPanel1 .left,#mapPanel2 .left,#mapPanel3 .left,#mapPanel4 .left,#mapPanel5 .left{
    width: 10%;
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-end;
    font-size: 12px;
}

#mapPanel .left .kedu1,#mapPanel1 .left .kedu1,#mapPanel2 .left .kedu1,#mapPanel3 .left .kedu1,#mapPanel4 .left .kedu1,#mapPanel5 .left .kedu1{
    width: 10%;
    height: 20%;
    border-bottom: 1px solid #333;
}

#mapPanel .left .kedu1 span,#mapPanel1 .left .kedu1 span,#mapPanel2 .left .kedu1 span,#mapPanel3 .left .kedu1 span,#mapPanel4 .left .kedu1 span,#mapPanel5 .left .kedu1 span{
    position: relative;
    margin-left: -25px;
    top: 100%;
}

#mapPanel .right,#mapPanel1 .right,#mapPanel2 .right,#mapPanel3 .right,#mapPanel4 .right,#mapPanel5 .right{
    width: 25%;
    height: 60%;
}

/* #map,#map1,#map2,#map3,#map4,#map5{
    height: 100%;
    width: 80%;
    border-left: solid 1px black;
    border-bottom: solid 1px black;
} */
.map{
      height: 100%;
    width: 80%;
    border-left: solid 1px black;
    border-bottom: solid 1px black;
}
.ol-scale-line,.ol-scale-line1,.ol-scale-line2,.ol-scale-line3,.ol-scale-line4,.ol-scale-line5{
    display: none !important;
}
</style>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import ScaleLine from "ol/control/ScaleLine";
import MousePosition from "ol/control/MousePosition"
import { fromLonLat } from "ol/proj";
// import Control from 'ol/control';
// import {Control, defaults as defaultControls} from 'ol/control';
import {OverviewMap, defaults as defaultControls } from "ol/control";
import {format} from "ol/coordinate";
export default {
    name:'Map',
    data(){
    return{
      map:null,
    };
  },
    mounted() {
    // var tdtLayer = new TileLayer({
    //       title: "谷歌矢量地图服务",
    //       source: new XYZ({
    //         // arcgis server
    //         url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}'
    //       })
    //     });
    // this.map = new Map({
    //     // target: 'map1',                          // 关联到对应的div容器
    //     layers: [
    //       tdtLayer
    //     ],
    //     view: new View({                     // 地图视图
    //       projection: 'EPSG:4326',
    //       center: [113, 12],
    //       zoom: 4
    //     }),
    //     controls:  defaultControls().extend([
    //       new ScaleLine({
    //         //设置度量单位为米
    //         units: 'metric',
    //         target: 'scalebar',
    //         className: 'ol-scale-line1'
    //       }), 
    //       new MousePosition({
    //         coordinateFormat: function (coordinate) {
    //           return format(coordinate, '经度:{x} 纬度:{y}', 2);
    //         },
    //         projection: 'EPSG:4326',
    //         className: 'custom-mouse-position',
    //         target: document.getElementById('lnglat1'),
    //         undefinedHTML: '&nbsp;'
    //       })
    //     ])
    //   })
    //   this.initMap();
  },
  methods:{
      initMap: function(){
       let _this=this;
      this.map.on("moveend", function (e) {
       let value="Scale 1 : "+document.getElementsByClassName("ol-scale-line1-inner")[0].innerHTML;
       document.getElementById("mapfooter1").getElementsByClassName("scale")[0].innerHTML=value;
      let extent = _this.map.getView().calculateExtent()
      let geLng = (extent[2] - extent[0]) / 5
      let geLat = (extent[3] - extent[1]) / 5
      let su = ``, heng = ``;
      for (let i = 0; i < 5; i++) {
        su += `<div class="kedu1"><span>${(geLat * i + extent[1]).toFixed(1)}</span></div>`
        heng += `<div class="kedu2"><span>${(geLng * i + extent[0]).toFixed(1)}</span></div>`
      }
      document.getElementById("mapPanel1").getElementsByClassName("left")[0].innerHTML=su;
      // $("#mapPanel1 .left").html(su);
      document.getElementsByClassName("top1")[0].innerHTML=heng;
      // $(".top1").html(heng)
    })
    this.map.on('singleclick', function (evt) {
      if (addedLayer === '') {
        alert('请先加载影像！')
        return;
      }
      let coor = evt.coordinate;
      let bbox = (coor[0] - 2) + "," + (coor[1] - 2) + "," + (coor[0] + 2) + "," + (coor[1] + 2)
      $.get(`/mygeoserver/geoserver/cite/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image%2Fjpeg
              &TRANSPARENT=true&QUERY_LAYERS=${addedLayer}&LAYERS=${addedLayer}&exceptions=application%2Fvnd.ogc.se_inimage&INFO_FORMAT=application%2Fjson
              &FEATURE_COUNT=50&X=50&Y=50&SRS=EPSG%3A404000&STYLES=&WIDTH=101&HEIGHT=101&BBOX=${bbox}`, (e) => {
      let result = "无"
        if (e.features.length !== 0) {
          result = e.features[0].properties.GRAY_INDEX.toFixed(4)
        }
        document.getElementById("mapfooter1").getElementsByClassName("mapval")[0].innerHTML=result;
        // $("#mapfooter1 .mapval").html(result)
      })
    });
        },
    
 
    }
}
</script>