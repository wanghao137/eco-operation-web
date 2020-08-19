<template>
  <div class="wrap">
    <h1>基本信息</h1>
    <div class="main1">
      <div class="main-box">
        <p>
          <span>历史名称：</span>北京小米科技有限责任公司
        </p>
      </div>
      <div class="main-box">
        <p>
          <span>统一社会信用代码：</span>91110108551385082Q
        </p>
        <p>
          <span>登记状态：</span>在营（开业）企业
        </p>
      </div>
      <div class="main-box">
        <p>
          <span>法定代表人：</span>雷军
        </p>
        <p>
          <span>注册资本：</span>185000万人民币
        </p>
      </div>
      <div class="main-box">
        <p>
          <span>成立日期：</span>2010-03-03
        </p>
        <p>
          <span>企业类型：</span>有限责任公司(自然人投资或控股)
        </p>
      </div>
      <div class="main-box">
        <p>
          <span>所属行业：</span>科学研究和技术服务业
        </p>
        <p>
          <span>注册地址：</span>北京市海淀区清河中街68号华润五彩城购物中心二期13层
        </p>
      </div>
      <div class="main-box1 main-box">
        <dl>
          <dd>服务领域：</dd>
          <dt>手机技术开发；手机生产手机服务；(限海淀区永捷北路2号二层经营)从事互联网文化活动。技术开发；货物进出口、技术进出口、代理进出口；销售通讯设备；维修仪器仪表；维修办公设备；承办展览展示活动；会议服务；筹备、策划、组织大型庆典；设计、制作、代理、发布广告。</dt>
        </dl>
      </div>
      <div class="main-box">
        <p>
          <span>联系方式：</span>010-5634888
        </p>
      </div>
    </div>
    <h1>实际控制人</h1>
    <div class="main mainBox">
      <div class="box">
        <i class="el-icon-edit"></i>
        <p>小米科技有限责任公司</p>
      </div>
      <div class="line-box">
        <div class="line-text">77.78%</div>
        <div class="line"></div>
      </div>
      <div class="box1 box">
        <i class="el-icon-edit"></i>
        <p>雷军</p>
      </div>
    </div>
    <h1>
      企业基因
      <span>{{data.length}}</span>
    </h1>
    <div class="main">
      <span class="spn" v-for="(item,index) in data" :key="index">{{item}}</span>
      <span class="spn1">
        共
        <font>{{data.length}}</font>个标签
      </span>
    </div>
    <h1>
      企业评价
      <font style="font-weight:normal;font-size:12px;">(2016/12/31)</font>
    </h1>
    <div class="main mainMid">
      <div class="left">
        <dl>
          <i class="el-icon-s-data"></i>
          <dd>综合信用等级</dd>
          <dt>BBB</dt>
        </dl>
        <dl>
          <i class="el-icon-data-line"></i>
          <dd>信用评价</dd>
          <dt>低于平均风险</dt>
        </dl>
        <dl>
          <i class="el-icon-star-off"></i>
          <dd>综合信用评分</dd>
          <dt>619</dt>
        </dl>
      </div>
      <div class="right">
        <div id="myChart" style="width:350px;height:220px;"></div>
      </div>
    </div>
    <h1>企业地址</h1>
    <div class="main">
      <div class="main1" style="margin-bottom:20px;">
        <div class="main-box">
          <p>
            <span>街道方向：</span>西
          </p>
          <p>
            <span>街道：</span>清河中街
          </p>
        </div>
        <div class="main-box">
          <p>
            <span>街道距离：</span>63.78米
          </p>
          <p>
            <span>商圈：</span>清河
          </p>
        </div>
      </div>
      <baidu-map
        :center="center"
        :zoom="zoom"
        @ready="handler"
        style="height:300px"
        @click="getClickInfo"
        :scroll-wheel-zoom="true"
      ></baidu-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'businessCard',
  data () {
    return {
      data: [
        '存储管理',
        '云服务',
        '基础架构',
        '创新型',
        '注重商标保护',
        'JAVA',
        '被执行人',
        '大型企业',
        '注重作品保护',
        '12315举报',
        '域名备案企业',
        '进出口企业',
        '现代服务业',
        '京津冀',
        '生产性服务业',
        '环渤海',
        '创业经历丰富',
        '成立5年以上',
        '60后创始人',
        '科技服务业',
        '祖籍北京',
        '东部地区'
      ],
      center: { lng: 116.343225, lat: 40.035383 },
      zoom: 13
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    handler ({ BMap, map }) {
      var point = new BMap.Point(109.49926175379778, 36.60449676862417)
      map.centerAndZoom(point, 13)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, {
        strokeColor: 'Red',
        strokeWeight: 6,
        strokeOpacity: 1,
        Color: 'Red',
        fillColor: '#f03'
      })
      map.addOverlay(circle)
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#666'
            }
          },
          indicator: [
            { name: '身份特征', max: 6500 },
            { name: '守法守规', max: 16000 },
            { name: '发展潜力', max: 30000 },
            { name: '经营状态', max: 38000 },
            { name: '行为偏好', max: 52000 },
            { name: '创新资质', max: 25000 }
          ]
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                lineStyle: {
                  color: 'rgba(81, 141, 213, 0.7)'
                },
                areaStyle: {
                  normal: {
                    color: 'rgba(81, 141, 213, 0.7)' // 选择区域颜色
                  }
                }
              }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
h1 {
  font-size: 18px;
  border-left: 3px rgb(46, 132, 213) solid;
  padding-left: 5px;
  margin: 30px 0;
  display: flex;
  align-items: center;
}
h1 span {
  color: white;
  background: #f89406;
  border-radius: 5px;
  padding: 2px 5px;
  box-sizing: border-box;
  color: 14px;
  font-weight: normal;
  font-size: 12px;
  margin-right: 5px;
  display: inline-block;
}
.main1 {
  border-bottom: 0.5px #ccc solid;
  line-height: 20px;
}
.main-box {
  padding: 10px 0;
  box-sizing: border-box;
  border-top: 0.5px #ccc solid;
  display: flex;
}
.main-box p {
  flex: 1;
}
.main-box1 dl dd,
.main-box span {
  color: #666;
}
.main-box1 dl {
  display: flex;
}
.main-box1 dl dt {
  flex: 1;
}
.box {
  background: #78b0e4;
  color: white;
  border-radius: 5px;
  border: 1px #5c9fde solid;
  width: 180px;
  font-size: 12px;
  padding: 20px 10px;
  box-sizing: border-box;
  display: flex;
}
.box p {
  flex: 1;
  border-left: 0.5px #5c9fde solid;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
}
.mainBox {
  display: flex;
}
.line {
  width: 80px;
  height: 1px;
  border-top: 1px #ff9f0f dashed;
}
.line-box {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.line-box div {
  flex: 1;
}
.line-text {
  color: #ff9f0f;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box1 {
  background: #ffa659;
  border: 1px #ff861c solid;
}
.box1 p {
  border-left: 0.5px #ff861c solid;
}
.spn {
  border: 0.5px #ccc solid;
  border-radius: 2px;
  padding: 2px 5px;
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 12px;
}
.spn1 {
  font-size: 12px;
}
.spn1 font {
  color: #f89406;
}
.left {
  flex: 1;
  display: flex;
  align-items: center;
}
.left dl {
  flex: 1;
  text-align: center;
}
.left dl dt {
  color: #60ac3a;
  margin-top: 10px;
}
.left dl dd {
  margin-top: 10px;
}
.left i{
  font-size: 30px;
  color: #BBBBBB;
}
.right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mainMid {
  display: flex;
}
</style>
