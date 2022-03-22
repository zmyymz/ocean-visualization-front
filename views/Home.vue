<template>
<div style="height:100%">
    <el-container style="height:100%">
        <el-header class="menu">
        <ul>
            <li style="margin-right: 8%;">
                <div id="title">可视化系统</div>
            </li>
            <li>
                <div>
                    <el-link target="_blank" href="./Ocean">海洋数值预报偏差订正结果可视化</el-link>
                    <!-- <a class="link">海洋可视化</a> -->
                </div>
            </li>
            <li>
                <div>
                    <el-link target="_blank" href="./Typhoon">台风强度智能预报结果可视化</el-link>
                    <!-- <a class="link">台风可视化</a> -->
                </div>
            </li>
           
        </ul>
        </el-header>
        <el-main >
            <div id="map"> 

            </div>
        </el-main>
    </el-container>

</div>
     
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import OSM from "ol/source/OSM";
import {fromLonLat} from "ol/proj";
export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    // var mapcontainer = this.$refs.rootmap;
    var tdtLayer = new TileLayer({
            title: "谷歌矢量地图服务",
            source: new XYZ({
            url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
            })
            });

    this.map = new Map({
      target: "map",
      layers: [
        tdtLayer
      ],
      view: new View({
        projection: "EPSG:3857",    //使用这个坐标系
        center: fromLonLat([113, 10]),  //深圳
        zoom: 5
      })
    });
  }
};
</script>

<style>
html,body{
    height: 100%;
}
.menu{
    margin:1% auto 0;
    width: 98%;
    height: 5%;
    background-color: #F2F2F2;
    border: 1px solid #D2D2D2;
    border-radius: 10px;
    padding-bottom: 1%;
}

.el-link{
    /* text-decoration: none;
    color: black; */
    font: 17px;
    color: black;
}

.link:visited{
    color: black;
}

#title{
    font-weight: 700;
    font-size:large;
}

ul{
    list-style: none;
}

li{
    float: left;
    margin-right: 3%;
 
}
.el-main{
    padding: 0;
    width: 98%;
    margin: 1% auto;
    height:80%;
}
#map{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    border: black;
}

</style>


