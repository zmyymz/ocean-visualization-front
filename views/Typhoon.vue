<template>
  <div style="width:100%;height:100%;background-color: #F3F2F3;">
    <div class="box" ref="vis">
      <div id="dashboard">
        <div id="data_upload" class="part">
          <div class="title">
            <h4>
              台风强度智能预报结果可视化
            </h4>
          </div>
          <div class="center">
            <input type="button" value="导入台风数据" id="data_btn" @click="fileSubmit">
          </div>
        </div>
        <!-- <div class="part">
            <div class="title" >
                <h4>
                    选择日期
                </h4>
            </div>
            <div class="container">
                <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd">
                </el-date-picker>
                <el-time-select
                        v-model="value2"
                        :picker-options="{
                            start: '00:00',
                            step: '01:00',
                            end: '23:00'
                        }"
                        placeholder="选择时间">
                </el-time-select>
            </div>

        </div> -->
        <el-divider></el-divider>
        <div style="margin-bottom: 5%;" class="part">  <!--台风-->
          <div class="title">
            <h4>
              请选择对应海域
            </h4>
          </div>
          <div style="margin-left:8%;">
            <el-radio-group clearable=true v-model="radio" @change="initSelect">
              <div class="type">
                <el-radio :label='"wp"'>WP</el-radio>
                <div class="select">
                  <el-select v-model="wp_value" placeholder="请选择" @change="getData">
                    <el-option
                        v-for="item in options1"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="type">
                <el-radio :label='"ep"'>EP</el-radio>
                <div class="select">
                  <el-select v-model="ep_value" placeholder="请选择" @change="getData">
                    <el-option
                        v-for="item in options2"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="type">
                <el-radio :label='"na"'>NA</el-radio>
                <div class="select">
                  <el-select v-model="na_value" placeholder="请选择" @change="getData">
                    <el-option
                        v-for="item in options3"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </el-radio-group>
          </div>
        </div>
        <!-- <div style="margin-top: 8%;">
            <div class="center">
                <input type="button" value="渲染" id="draw_btn" @click="drawTyphoon">
            </div>
        </div> -->

      </div>
      <div id="vis">
        <div id="route">

        </div>
        <div id="vector">

        </div>
        <div id="pressure">
          <div class="title">
            <h4>
              请选择压强
            </h4>
          </div>
          <div id="slider">
            <el-slider
                v-model="pressure"
                :min="100"
                :max="1000"
                show-input>
            </el-slider>
          </div>
          <div id="draw">

            <input type="button" value="渲染" id="draw_btn" @click="drawVector">

          </div>

        </div>
      </div>
    </div>
    <TyphoonInfo ref="typhoonInfo" :typhoonData="this.finalData"/>
  </div>

</template>

<style>
body, html {
  height: 100%;
  background-color: #F3F2F3;
  margin: 0;
  /* text-align: center; */
}

.box {
  /* display: inline-block; */
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.box .title {
  margin-left: 3%;
}

.box .container {
  width: 100%;
  text-align: center;
  margin-left: -2%;

}

.box #dashboard {
  float: left;
  height: calc(100% - 10px);
  width: 30%;
  /* border: 1px solid #D2D2D2; */
  margin-top: 10px;
  background-color: white;
}


.box #vis {
  width: 65%;
  height: calc(100% - 10px);
  background-color: white;
  margin-top: 10px;
  float: left;
  padding-right: 2%;
  padding-left: 2%;
}

.box #vis #route, .box #vis #vector {
  width: 100%;
  height: 40%;
}

/* .box #vis #vector{
    border:black 1px solid;
    width: 99%;
} */

.box #vis #route {
  margin-top: 3%;
  margin-bottom: 3%;
}

.box #vis #pressure {
  width: 100%;
  height: 10%;
}

#pressure #slider {
  padding-left: 5%;
  width: 70%;
  float: left;
}

#pressure #draw {
  width: 10%;
  float: left;
  margin-left: 10%
}

/* #dashboard #sub_btn{
    width: 131px;
    height: 33px;
    color: white;
    cursor: pointer;
    background: #4472C4;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 5px;
} */

#dashboard .squ-checkbox {
  margin-right: 3%;
}

#dashboard .type {
  display: block;
  margin-bottom: 10%;
}

#dashboard .select {
  padding-left: 15%;
  /* margin-bottom: 5%; */
  margin: 4%;
}

#dashboard .center {
  /* margin-left: -15%; */
  margin-top: 3%;
  text-align: center
}

#pressure #draw #draw_btn, #dashboard #data_btn {
  width: 80%;
  height: 33px;
  color: white;
  cursor: pointer;
  background: #4472C4;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 5px;
}

.container #date {
  float: left;
  margin-left: 2%;
  height: 30px;
  line-height: 30px;
  margin-right: 1%;
}

.container .form-horizontal {
  float: left;
}

.el-input__inner {
  height: 33px;
  line-height: 33px;
}

.el-input__icon {
  line-height: 33px;
}

.el-date-editor.el-input {
  width: 150px;
  margin: 0 3px;
}

.el-radio {
  font-weight: 700;
}

.el-radio__label, .el-checkbox__label {
  font-size: 15px;
}

.el-divider--horizontal {
  width: 90%;
  margin: 24px auto
}
</style>

<script>
// import func from 'vue-editor-bridge';
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import Feature from "ol/Feature";
import {OSM, ImageWMS, Vector as VectorSource, XYZ} from "ol/source";
import {Vector as VectorLayer, Image, Tile as TileLayer} from "ol/layer";
import {fromLonLat, get as getProjection} from "ol/proj";
import {Point, MultiLineString, LineString, Polygon, Circle} from "ol/geom";
import {Fill, Circle as CircleStyle, Style, Stroke, Icon} from "ol/style";
import {defaults as defaultControls, ScaleLine, OverviewMap} from "ol/control";
import {WMSGetFeatureInfo as WMSFeature} from "ol/format"

import Overlay from "ol/Overlay";
import {Loading} from "element-ui"
import TyphoonInfo from "../src/components/TyphoonInfo";

export default {
  data() {
    return {
      // value1:'',   //日期
      // value2:'',   //时刻
      radio: "", //海域
      wp_value: '',
      na_value: '',
      ep_value: '',
      options1: null,
      options2: null,
      options3: null,
      map: null,
      vectorMap: null,
      layer: null,
      imageLayer: null,
      routeData: null,
      lastZoomPoint: null,
      overlay: null,
      sequence: null,
      id: null,
      pressure: 100, //气压
      finalData: {
        "id": "0",
        "type": "Feature",
        "properties": {
          "date": "1979-01-02",
          "latitude": 5.2,
          "longitude": 168.7,
          "max wind speed(intensity)": 50,
          "min pressure": 990,
          "time": "00:00:00"
        },
        "geometry": {"type": "Point", "coordinates": [168.7, 5.2]}
      },
      tfOverlay: null,
      imgUrl: require("../src/assets/typhoon2.png"),
    };
  },
  components: {
    TyphoonInfo,
  },
  methods: {
    fileSubmit() {
      let _this = this;
      this.$MessageBox.alert('请将数据放置/home/user_typhoon_data/, 格式如下:<ul id="myUL">  <li><span class="caret">WP_solo/</span>   <ul class="nested"> <li><span class="caret">data_seq1/</span> <ul class="nested"> <li>tp_1_pl.nc</li><li>tp_2_pl.nc</li></ul></li><li>tp_seq1.txt</li></ul></li></ul>', '提示', {
        confirmButtonText: '确定',
        dangerouslyUseHTMLString: true,
        callback: action => {
          // this.$message({
          //   type: 'info',
          //   message: `action: ${ action }`
          // });
          if (action === 'confirm') {
            const loadOption = Loading.service({
              fullscreen: true,
              lock: true,
              text: '正在处理中',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            this.$http.get("api/ocean/processTyphoonData")
                .then(function (response) {
                  // console.log(response)
                  let state = response.data.success;
                  if (state === true) {
                    loadOption.close()
                    _this.$Message('上传成功');
                  } else if (state === false) {
                    loadOption.close();
                    _this.$Message('发生异常 ' + response.data.message);
                  }
                })

          }
        }
      });
    },


    initSelect() {  //初始化选项
      let _this = this;
      let ocean = this.radio;
      this.map.removeLayer(_this.layer);
      this.vectorMap.removeLayer(_this.imageLayer);
      this.$http.get("api/typhoon/getMetaInfo/" + ocean)
          .then(function (response) {
            _this.options1 = null;
            _this.options2 = null;
            _this.options3 = null;
            let data = response.data.data;
            let typhoonData = data.typhoonMetaData;
            console.log(typhoonData)
            if (ocean === 'wp') {
              _this.options1 = typhoonData;
            } else if (ocean === 'ep') {
              _this.options2 = typhoonData;
            } else {
              _this.options3 = typhoonData;
            }

          })

      //     let _this=this
      //     this.map.removeLayer(_this.layer);
      //     this.vectorMap.removeLayer(_this.imageLayer);
      //     if(this.radio==='wp'){
      //             this.ep_value=""
      //             this.$http.get("https://run.mocky.io/v3/4aa69cf2-f813-4525-9640-788c16cfcd10")
      //             .then(function(response){
      //                 _this.options2=null;
      //                 _this.options3=null;

      //                 let data=response.data.data;
      //                 let typhoonData=data.typhoonMetaData;
      //                 _this.options1=typhoonData;

      //         })
      //     }else if(this.radio==='ep'){
      //          this.wp_value=""
      //          this.$http.get("https://run.mocky.io/v3/6d9add90-c929-4eb1-bf0c-882433706fbb")
      //             .then(function(response){
      //                 _this.options1=null;
      //                 _this.options3=null;
      //                 let data=response.data.data;
      //                 let typhoonData=data.typhoonMetaData;
      //                 _this.options2=typhoonData;
      //     })
      // }
    },
    getTyphoonData(http_url) {
      let url = http_url
      // let url="https://run.mocky.io/v3/754bdbca-d693-4738-85a8-db67a468915c";
      return fetch(url, {
        method: 'GET',
      }).then(function (response) {
        response.status     //=> number 100–599
        response.statusText //=> String
        response.headers    //=> Headers
        response.url        //=> String

        return response.json()
      }).then(data => {
        return data;
      })
      //  this.$http.get("http://localhost:8080/typhoon/getGeojsonData/"+this.radio+"/"+seq)
      //         .then(function(response){
      // // })
      // let _this=this
      // this.$http.get("https://run.mocky.io/v3/754bdbca-d693-4738-85a8-db67a468915c")
      //         .then((response)=>{

      //             this.routeData=response.data.data.geoJsonData;
      //             this.routeData = JSON.parse(this.routeData)
      //             this.routeData=this.routeData.featureList
      //             // _this.routeData=response.data.geoJsonData;
      //             this.addPointInterval(this.routeData,_this);
      //             this.showInfo(this.routeData,_this);
      // })

    },
    getData: async function (seq) {
      this.sequence = seq;
      let url = "api/typhoon/getGeojsonData/" + this.radio + "/" + seq
      let response = await this.getTyphoonData(url);
      // console.log(response)
      this.routeData = response.data.geoJsonData;
      this.routeData = JSON.parse(this.routeData)
      this.routeData = this.routeData.featureList;
      // let data=this.routeData;
      this.addPointInterval(this.routeData);
      this.showInfo(this.routeData);
    },


    addPointInterval(data) {
      // let _this=this;
      let points = data;
      let index = 0;
      let layer = new VectorLayer();
      let source = new VectorSource();
      let lastPoint = null
      let lastSpeed;
      layer.setSource(source);
      let intervalLogo = setInterval(() => {
        if (index == points.length) {
          lastPoint.set("endPoint", true);  //给最后一点添加标记
          clearInterval(intervalLogo);
          return;
        }
        let curPointData = points[index].properties
        let position = [curPointData.longitude, curPointData.latitude];
        if (lastPoint != null) {
          lastPoint.setStyle(new Style({
            image: new CircleStyle({
              radius: 3,
              fill: new Fill({
                color: this.getColor(lastSpeed)
              }),
              stroke: new Stroke({color: this.getColor(lastSpeed), width: 1}),
            })
          }))
        }
        if (index == 0) {
          this.map.getView().setCenter(fromLonLat(position, 'EPSG:4326'));
          this.vectorMap.getView().setCenter(fromLonLat(position, 'EPSG:4326'));
          this.map.getView().setZoom(3);
        }

        let speed = curPointData['max wind speed(intensity)']

        var anchor = new Feature({
          geometry: new Point(fromLonLat(position, 'EPSG:4326'))
        });
        // 设置样式，在样式中就可以设置图标
        anchor.setStyle(new Style({
          image: new Icon({
            src: this.imgUrl,
            scale: 0.5,
            rotation: -360 / points.length * index
          })
        }));
        // 添加到之前的创建的layer中去
        layer.getSource().addFeature(anchor);
        anchor.set("typhoonPoint", true);
        anchor.set("id", index);

        lastPoint = anchor;
        lastSpeed = speed;
        if (index > 0) {
          let lastPoint = data[index - 1].properties
          let lastPosition = [lastPoint.longitude, lastPoint.latitude];
          let featureLine = new Feature({
            geometry: new LineString([
              fromLonLat(position, 'EPSG:4326'),
              fromLonLat(lastPosition, 'EPSG:4326'),
            ]),
          });
          source.addFeature(featureLine);
        }
        // 需要一个出口
        index++;
      }, 80)
      this.map.addLayer(layer);
      this.layer = layer;
    },

    showInfo(data) {
      let _this = this

      this.map.on('pointermove', function (ev) {
        let feature = _this.map.forEachFeatureAtPixel(ev.pixel, function (feature) {
          return feature;
        })
        if (feature) {

          if (feature.get('typhoonPoint')) {
            _this.map.getTargetElement().style.cursor = 'pointer';
            if (_this.lastZoomPoint != null && !_this.lastZoomPoint.get('endPoint')) {
              _this.lastZoomPoint.getStyle().getImage().setRadius(3);
              _this.lastZoomPoint.changed();
            }
            if (!feature.get('endPoint')) {
              feature.getStyle().getImage().setRadius(5);
              feature.changed();
            }
            _this.lastZoomPoint = feature;
            var id = feature.get('id');
            _this.id = id + 1;
            _this.finalData = data[id];
            //showDetails(ev,id,data);
            const coordinate = ev.coordinate;//求得坐标
            _this.tfOverlay.setPosition(coordinate);
            _this.showVector()
          }
        } else {
          if (_this.lastZoomPoint != null) {
            if (!_this.lastZoomPoint.get('endPoint')) {
              _this.lastZoomPoint.getStyle().getImage().setRadius(3);
              _this.lastZoomPoint.changed();
              _this.lastZoomPoint = null;
            }

          }
          _this.map.getTargetElement().style.cursor = '';
          _this.tfOverlay.setPosition(undefined);
        }

      })
    },
    popUp: function () {
      const overlay = new Overlay({
        element: this.$refs.typhoonInfo.$el,
        autoPan: {
          animation: {
            duration: 250,
          },
        },
      });
      this.tfOverlay = overlay
      this.map.addOverlay(this.tfOverlay);
    },
    initMap() {
      let tdtLayer = new TileLayer({
        title: "谷歌矢量地图服务",
        source: new XYZ({
          // arcgis server
          // url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}'
          // url: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
          // url: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
          //url:'http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=cbd3ea0a8f745a3699f7cd8bc68ae9b7'
          //url:'http://t4.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=cbd3ea0a8f745a3699f7cd8bc68ae9b7'
          url:'http://t4.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=cbd3ea0a8f745a3699f7cd8bc68ae9b7'
        })
      });
      let map = new Map({
        target: 'route',                          // 关联到对应的div容器
        layers: [
          tdtLayer
        ],
        view: new View({                     // 地图视图
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 0
        }),
        controls: defaultControls().extend([
          //     new OverviewMap({        // 实例化一个OverviewMap类的对象，并加入到地图中
          //         layers:[
          //     new TileLayer({                 // 瓦片图层
          //         source: new XYZ({
          //     // arcgis server
          //     // url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}'
          //     url: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
          // })
          //     })
          // ],
          //         view: new View({                     // 地图视图
          //             projection: 'EPSG:4326',

          // }),
          //     })
        ])

      });
      this.map = map;
      let tdtLayer2 = new TileLayer({
        title: "谷歌矢量地图服务",
        source: new XYZ({
          // arcgis server
          // url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}'
          // url: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
          //url:'http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=cbd3ea0a8f745a3699f7cd8bc68ae9b7'
          //url:'http://t4.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=cbd3ea0a8f745a3699f7cd8bc68ae9b7'
          url:'http://t4.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=cbd3ea0a8f745a3699f7cd8bc68ae9b7'
        })
      });
      let map2 = new Map({
        target: 'vector',                          // 关联到对应的div容器
        layers: [
          tdtLayer2
        ],
        view: new View({                     // 地图视图
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 0
        }),
        controls: defaultControls().extend([
          // new ScaleLine()
        ])

      });
      this.vectorMap = map2;
    },
    getColor(speed) {
      let color;
      if (speed >= 10.8 && speed <= 17.1) {
        color = 'rgb(233,218,122)'
      } else if (speed >= 17.2 && speed <= 24.4) {
        color = 'rgb(16,29,199)'
      } else if (speed >= 24.5 && speed <= 32.6) {
        color = 'green'
      } else if (speed >= 32.7 && speed <= 41.4) {
        color = 'rgb(239,171,118)'
      } else if (speed >= 41.5 && speed <= 50.9) {
        color = 'rgb(193,89,196)'
      } else {
        color = 'red'
      }
      return color
    },

    showVector() {
      let _this = this;
      this.vectorMap.removeLayer(_this.imageLayer);
      let seq = this.sequence.split('_')[1];
      let layer = "cite:" + this.radio.toUpperCase() + "_data_" + seq + "_tp_" + this.id + "_pl";
      let imageLayer = new Image({
        source: new ImageWMS({
          ratio: 1,
          url: "vector/geoserver/cite/wms",
          crossOrigin: 'anonynous',
          params: {
            'FORMAT': 'image/png',
            'VERSION': '1.1.1',
            "exceptions": "application/vnd.ogc.se_inimage",
            "LAYERS": layer,
          }
        })

      });

      let oaPicker = new WMSFeature({
        url: "vector/geoserver/cite/wms",
      })
      console.log(oaPicker)
      this.vectorMap.addLayer(imageLayer);
      // this.vectorMap.getView().setCenter(fromLonLat(position,'EPSG:4326'));
      this.imageLayer = imageLayer;

    },
    drawVector() {
      let _this = this;
      this.vectorMap.removeLayer(_this.imageLayer);
      let seq = this.sequence.split('_')[1];
      let layer = "cite:" + this.radio.toUpperCase() + "_data_" + seq + "_tp_1_pl";
      let imageLayer = new Image({
        source: new ImageWMS({
          ratio: 1,
          url: "vector/geoserver/cite/wms",
          crossOrigin: 'anonynous',
          params: {
            'FORMAT': 'image/png',
            'VERSION': '1.1.1',
            "exceptions": "application/vnd.ogc.se_inimage",
            "LAYERS": layer,
            'CQL_FILTER': 'level == ' + this.pressure
          }
        })

      });
      this.vectorMap.addLayer(imageLayer);

      this.imageLayer = imageLayer;
    }
  },
  mounted() {
    this.initMap();
    this.popUp();
    // this.showVector();
  },
}
</script>