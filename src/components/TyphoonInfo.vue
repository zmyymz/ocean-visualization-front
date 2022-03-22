<template>
    <div class="typhoon-box" id="info-box">
          <div class="info">
            <span>实况台风信息</span>
            <!-- <i class="el-icon-close"></i> -->
          </div>
          <!-- <hr class="split"> -->
          <div class="second">
            <div class="left">
              <span class="leftSpan">编号:</span>
              <span class="rightSpan">{{typhoonData.id}}</span>
            </div>
          </div>
          <div class="third odd">
            <div class="left">
              <span class="leftSpan">时间:</span>
              <span class="rightSpan">{{typhoonData.properties.date}}/{{typhoonData.properties.time.split(':')[0]}}时</span>
            </div>
          </div>
          <div class="third">
            <div class="left">
              <span class="leftSpan">位置:</span>
              <span class="rightSpan">{{typhoonData.properties.longitude}}°/{{typhoonData.properties.latitude}}°</span>
            </div>
          </div>
          <div class="third odd">
            <div class="left">
              <span class="leftSpan">中心最大风速:</span>
              <span class="rightSpan">{{typhoonData.properties['max wind speed(intensity)']}}</span>
            </div>
          </div>
          <div class="second">
            <div class="left">
              <span class="leftSpan">中心最小气压:</span>
              <span class="rightSpan">{{typhoonData.properties['min pressure']}}</span>
            </div>
           
          </div>
          
    </div>
</template>

<script>
export default {
     name: "TyphoonInfo",
  data() {
    return {

    };
  },
  props: {
    typhoonData: Object,
  },
  methods: {
     
  }
}
</script>

<style>
.typhoon-box {
    width: 190px;
    height: 220px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    bottom: 200px;
    right: 200px;
    z-index: 1001;
    color: black;
    }

.typhoon-box .split{
    width: 90%;
    margin: 0 auto;
    /* border-color: #EEEEEE; */
    background-color: #F5F5F5;
    height: 0.1px;
}

.second,.third {
    margin-left: 2%;
      display: flex;
      height: 32px;
      line-height: 32px;
    }
.typhoon-box .info {
      display: flex;
      border-radius: 12px 12px 0 0;
      background-color: #F5F5F5;
      height: 50px;
      line-height: 50px;
      /* color: #0fdaff; */
      border-bottom: #EFEFEF solid;
      margin-bottom: 10px;
    }

/* .typhoon-box .el-icon-close {
        display: block;
        font-size: 30px;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
      } */
.typhoon-box span{
        text-align: center;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.5px;
      }
    
.left .leftSpan ,.left .rightSpan{
      width: 100px;
      text-align: right;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: normal;
    }
.left .leftSpan{
    padding-right: 0px;
}

</style>