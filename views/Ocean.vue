<template>
  <div style="width:100%;height:100%;background-color: #F3F2F3;">
    <div class="box">
      <div id="dashboard">
        <div id="data_upload" class="part">
          <div class="title">
            <h4>
              数据上传
            </h4>
          </div>
          <div class="center">
            <input type="button" value="上传海洋数据" id="data_btn" @click="fileSubmit">
          </div>
        </div>
        <div class="part">
          <div class="title">
            <h4>
              选择日期
            </h4>
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
          </div>
        </div>

        <!-- <hr class="split"> -->
        <el-divider></el-divider>
        <div style="margin-bottom: 0%;" class="part">  <!--海洋-->
          <div class="title">
            <h4>
              选择海洋要素数值
            </h4>
          </div>

          <div style="margin-left:5%;">
            <el-radio-group class="group" clearable=true v-model="radio" @change="getRadio">
              <div class="type">
                <el-radio :label='"SSH"'>ssh</el-radio>
                <div class="choose">
                  <table>
                    <el-checkbox-group v-model="sshList">
                      <tr>
                        <td>
                          <el-checkbox label="v1">Real</el-checkbox>
                        </td>
                        <td>
                          <el-checkbox label="v2">Pred</el-checkbox>
                        </td>
                        <td>
                          <el-checkbox label="v3">Corr</el-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <el-checkbox label="v4">Error_Before</el-checkbox>
                        </td>
                        <td style="width: 40%;">
                          <el-checkbox label="v5">Error_After</el-checkbox>
                        </td>
                      </tr>
                    </el-checkbox-group>
                  </table>
                </div>
              </div>
              <div class="type">
                <el-radio :label='"temp"'>temperature</el-radio>
                <div class="choose">
                  <table>
                    <el-checkbox-group v-model="tempList">
                      <tr>
                        <td>
                          <el-checkbox label="v1">Real</el-checkbox>
                        </td>
                        <td>
                          <el-checkbox label="v2">Pred</el-checkbox>
                        </td>
                        <td>
                          <el-checkbox label="v3">Corr</el-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <el-checkbox label="v4">Error_Before</el-checkbox>
                        </td>
                        <td style="width: 40%;">
                          <el-checkbox label="v5">Error_After</el-checkbox>
                        </td>
                      </tr>
                    </el-checkbox-group>
                  </table>
                </div>
              </div>
              <div class="type">
                <el-radio :label='"SWH"'>swh</el-radio>
                <div class="choose">
                  <table>
                    <el-checkbox-group v-model="swhList">
                      <tr>
                        <td>
                          <el-checkbox label="v1">Real</el-checkbox>
                        </td>
                        <td>
                          <el-checkbox label="v2">Pred</el-checkbox>
                        </td>
                        <td>
                          <el-checkbox label="v3">Corr</el-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <el-checkbox label="v4">Error_Before</el-checkbox>
                        </td>
                        <td style="width: 40%;">
                          <el-checkbox label="v5">Error_After</el-checkbox>
                        </td>
                      </tr>
                    </el-checkbox-group>
                  </table>
                </div>
              </div>
              <div class="type">
                <el-radio :label='"wave_direction"'>wave_direction</el-radio>
                <div class="choose">
                  <table>
                    <el-checkbox-group v-model="waveList">
                      <tr>
                        <td>
                          <el-checkbox label="v1">Fore</el-checkbox>
                        </td>
                        <td>
                          <el-checkbox label="v2">Pred</el-checkbox>
                        </td>
                        <td>
                          <el-checkbox label="v3">Re</el-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <el-checkbox label="v4">Re-fore</el-checkbox>
                        </td>
                        <td style="width: 40%;">
                          <el-checkbox label="v5">Re-pred</el-checkbox>
                        </td>
                      </tr>
                    </el-checkbox-group>
                  </table>
                </div>
              </div>
            </el-radio-group>
          </div>
        </div>

        <div>
          <div class="center">
            <input type="button" value="渲染" id="draw_btn" @click="draw">
          </div>
        </div>

      </div>
      <div class="vis-content">   <!--可视化区域-->
        <div class="vis">
          <OceanMap ref="map1"/>
        </div>
        <div class="vis">
          <OceanMap ref="map2"/>
        </div>
        <div class="vis">
          <OceanMap ref="map3"/>
        </div>
        <div class="vis">
          <OceanMap ref="map4"/>
        </div>
        <div class="vis">
          <OceanMap ref="map5"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import OceanMap from "../src/components/Map";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import ScaleLine from "ol/control/ScaleLine";
import MousePosition from "ol/control/MousePosition"
import {fromLonLat} from "ol/proj";
import {Loading} from "element-ui"
import TileWMS from "ol/source/TileWMS";
import {OverviewMap, defaults as defaultControls} from "ol/control";
import {format} from "ol/coordinate";

export default {
  data() {
    return {
      value1: '',   //日期
      value2: '',   //时刻
      radio: "",  //选择的属性
      sshList: [],
      tempList: [],
      swhList: [],
      waveList: [],
      mylayer: ``,
      // radios:['SSH','temp','SWH','wave_direction'],
      select1: ["Real", "pred", "Corr", "Error_Before", "Error_After"],
      select2: ["forecast", "predict", "reanalysis", "reanalysis-forecast", "reanalysis-predict"],
      listDic: ['v1', 'v2', 'v3', 'v4', 'v5'],
      middle_names: [],
      maps: [],
      wmsLayers: [],
    };
  },
  components: {
    OceanMap,
  },
  methods: {
    getLocalTime(nS) {
      return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    },
    fileSubmit() {
      let _this = this
      this.$MessageBox.alert('请将nc文件放置到/home/user_ocean_data,然后点击确定', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          if (action === 'confirm') {
            const loadOption = Loading.service({
              fullscreen: true,
              lock: true,
              text: '正在处理中',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            this.$http.get("api/ocean/processOceanData")
                .then(function (response) {
                  // console.log(response)
                  let state = response.data.success;
                  if (state === true) {
                    loadOption.close()
                    _this.$Message('上传成功');
                  } else if (state === false) {
                    loadOption.close();
                    console.log(response)
                    _this.$Message('发生异常 ' + response.data.message);
                  }
                })

          }
        }
      });
    },

    initMap(id) {
      //   console.log("hello")
      var tdtLayer = new TileLayer({
        title: "谷歌矢量地图服务",
        source: new XYZ({
          // arcgis server
          url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}'
        })
      });
      let map = new Map({
        target: document.getElementsByClassName('map')[id],                          // 关联到对应的div容器
        layers: [
          tdtLayer
        ],
        view: new View({                     // 地图视图
          projection: 'EPSG:4326',
          center: [113, 12],
          zoom: 4
        }),
        controls: defaultControls().extend([
          new ScaleLine({
            //设置度量单位为米
            units: 'metric',
            target: 'scalebar',
            className: 'ol-scale-line1'
          }),
          new MousePosition({
            coordinateFormat: function (coordinate) {
              return format(coordinate, '经度:{x} 纬度:{y}', 2);
            },
            projection: 'EPSG:4326',
            className: 'custom-mouse-position',
            target: document.getElementsByClassName('lnglat')[id],
            undefinedHTML: '&nbsp;'
          })
        ])
      })
      this.maps.push(map);
      this.showInfo(id);
    },

    showInfo(id) {
      let _this = this;
      _this.maps[id].on("moveend", function (e) {
        let value = "Scale 1 : " + document.getElementsByClassName("ol-scale-line1-inner")[id].innerHTML;
        document.getElementsByClassName("scale")[id].innerHTML = value;
        let extent = _this.maps[id].getView().calculateExtent()
        let geLng = (extent[2] - extent[0]) / 5
        let geLat = (extent[3] - extent[1]) / 5
        let su = ``, heng = ``;
        for (let i = 0; i < 5; i++) {
          su += `<div class="kedu1"><span>${(geLat * i + extent[1]).toFixed(1)}</span></div>`
          heng += `<div class="kedu2"><span>${(geLng * i + extent[0]).toFixed(1)}</span></div>`
        }
        document.getElementsByClassName("left")[id].innerHTML = su;
        // $("#mapPanel1 .left").html(su);
        document.getElementsByClassName("top1")[id].innerHTML = heng;
        // $(".top1").html(heng)
      })

      this.maps[id].on('singleclick', async (e) => {
        let coor = e.coordinate;
        let bbox = (coor[0] - 2) + "," + (coor[1] - 2) + "," + (coor[0] + 2) + "," + (coor[1] + 2)
        let viewResolution = _this.maps[id].getView().getResolution();
        let url = _this.wmsLayers[id]
            .getSource()
            .getFeatureInfoUrl(coor, viewResolution, "EPSG:4326", {
              INFO_FORMAT: "application/json", //输出为json字符串
              VERSION: '1.1.1',
              FORMAT: 'image/png'
            });
        if (url) {
          let data = await fetch(url).then(function (res) {
            return res.text(); //返回Promise
          });
          data = JSON.parse(data)
          let result = data.features[0].properties.GRAY_INDEX.toFixed(4)
          document.getElementsByClassName("mapval")[id].innerHTML = result;
        }
      });
    },
    getMiddle(arr, select) {
      let flags = [false, false, false, false, false]
      for (let i = 0; i < arr.length; i++) {
        let index = this.listDic.indexOf(arr[i]);
        flags[index] = true;
        this.middle_names.push(select[index]);
      }
      for (let i = 0; i < flags.length; i++) {
        if (!flags[i]) {
          this.middle_names.push(select[i])
        }
      }
    },

    draw() {
      this.middle_names = []
      if (this.value1 === '' || this.value2 === '') {
        alert("请选择日期，时间");
        return;
      } else if (this.radio === '') {
        alert("请勾选海洋要素数值！")
      } else {
        let type = this.radio;
        let isEmpty = false;
        let list = null;
        if (type == 'SSH') {
          if (this.sshList.length === 0) {
            isEmpty = true;
          } else {
            list = this.sshList;
            this.getMiddle(list, this.select1);

          }
        } else if (type == 'temp') {
          if (this.tempList.length === 0) {
            isEmpty = true;
          } else {
            list = this.tempList;
            this.getMiddle(list, this.select1);
          }
        } else if (type == 'SWH') {
          if (this.swhList.length === 0) {
            isEmpty = true;
          } else {
            list = this.swhList;
            this.getMiddle(list, this.select1);
          }
        } else if (type == 'wave_direction') {
          if (this.waveList.length === 0) {
            isEmpty = true;
          } else {
            list = this.waveList;
            this.getMiddle(list, this.select2);
          }
        }

        if (isEmpty) {
          alert("请勾选有单选框的复选框选项");
          return;
        } else {
          let riqi = this.value1 + " " + this.value2;
          let shijianchuo = (new Date(riqi)).getTime(); //时间戳
          for (let i = 0; i < this.wmsLayers.length; i++) { //清空所有图层
            this.maps[i] && this.maps[i].removeLayer(this.wmsLayers[i])
          }

          this.wmsLayers = [];
          for (let i = 0; i < 5; i++) {
            let map = this.maps[i];
            let middle_name = this.middle_names[i]
            let first_name = this.radio

            document.getElementsByClassName("maptitle")[i].innerHTML = first_name + "_" + middle_name;
            if (first_name === 'temp') {
              if (middle_name === 'pred') {
                middle_name = 'fore'
              } else if (middle_name === 'Corr') {
                middle_name = 'corr'
              } else if (middle_name === 'Real') {
                middle_name = 'real'
              }
            }

            let name = first_name + "_" + middle_name + "_" + shijianchuo
            this.mylayer = 'cite:' + name

            this.init(map, i)
          }
        }
      }
    },


    getRadio() {
      this.sshList = []
      this.tempList = []
      this.swhList = []
      this.waveList = []
    },
    //  渲染图层
    init(map, index) {
      let tileWMS = new TileWMS({
        url: "vector/geoserver/cite/wms",
        // Layers需要指定要显示的图层名
        params: {
          LAYERS: this.mylayer,
          TILED: true,
          VERSION: '1.1.1',
          FORMAT: 'image/png'
        },
        // serverType明显为geoserver
        serverType: "geoserver",
        // Countries have transparency, so do not fade tiles:
        transition: 0
      });
      var layers =
          new TileLayer({
            source: tileWMS
          });
      this.wmsLayers.push(layers)
      map.addLayer(layers)

      let graphicUrl = tileWMS.getLegendUrl(map.getView().getResolution())

      let img = document.getElementsByClassName("legend1")[index];
      console.log(tileWMS)
      img.src = graphicUrl;
    }
  },
  mounted() {
    for (let i = 0; i < 5; i++) {
      this.initMap(i);
    }
  }
}
</script>

<style>
body, html {
  height: 100%;
  background-color: #F3F2F3;
  margin: 0;
  /* text-align: center; */
}

.box {
  /* display: inline-block; */
  width: 94%;
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

#dashboard {
  float: left;
  height: calc(100% - 10px);
  width: 30%;
  /* border: 1px solid #D2D2D2; */
  margin-top: 10px;
  background-color: white;
}

.box .vis-content {
  float: left;
  height: calc(100% - 10px);
  width: 70%;
  margin-top: 10px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
}

.box .vis-content .vis {
  width: 33%;
  height: 50%;
}

#dashboard #sub_btn {
  width: 131px;
  height: 33px;
  color: white;
  cursor: pointer;
  background: #4472C4;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 5px;
}

#dashboard .squ-checkbox {
  margin-right: 3%;
}

#dashboard .type {
  display: block;
  width: 100%;
}

.el-radio-group {
  width: 100%;
}

#dashboard .choose {
  padding-left: 8%;
  margin-bottom: 4%;
  margin-top: 1%;
}

#dashboard .choose table {
  width: 84%;
  border: 0;
}

#dashboard .choose table tr {
  width: 100%;
}

#dashboard .choose table td {
  height: 25px;
  width: 37%;
  margin-left: 5px;
  /* display: inline-block; */
}

#dashboard .center {
  /* margin-left: -15%; */
  margin-top: 3%;
  text-align: center
}

#dashboard #draw_btn, #dashboard #data_btn {
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

#dashboard .split {
  width: 90%;
  margin: 0 auto;
  /* border-color: #EEEEEE; */
  background-color: #EEEEEE;
  height: 0.1px;
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
  width: 180px;
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

title1 {
  left: 200px;
  bottom: 200px;
}
</style>