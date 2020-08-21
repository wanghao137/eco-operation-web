<template>
  <div class="wrap">
    <div class="title">风险监控</div>
    <div class="txt">
      共监控
      <span>160</span> 家目标企业
      <span>近三个月</span> 变动信息
    </div>
    <div class="tabs">
      <div class="tab-box" v-for="(item,index) in tabs" :key="index" @click="indexFn(index)">
        <div>{{item.name}}</div>
        <div>{{item.num}}家</div>
        <div>
          <p>+5%</p>
          <p>11家</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main-box">
        <div class="txt" style="color:black;">
          <span>{{tabs[liIndex].name}}</span> 风险类别分布
        </div>
        <div class="mid">
          <div class="mid-left">
            <Bar :yAxis="yAxis" :series="series" :color="color" ref="bar" />
          </div>
          <div class="mid-right">
            <div class="txt" style="color:black;margin:0;text-align:center;margin-top:-10px">
              <span>{{tabs[liIndex].name}}</span> 风险事项
            </div>
            <el-table :data="tabs[liIndex].data" stripe style="width: 100%">
              <el-table-column prop="name" label="企业名称" width="190"></el-table-column>
              <el-table-column prop="txt" label="风险事项"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="txt" style="color:black;">风险榜单</div>
      <el-carousel :autoplay="false" height="250px">
        <el-carousel-item v-for="item in 2" :key="item">
          <div v-if="item == 1" class="swipers">
            <div class="swiper" v-for="(val,index) in swiperData" :key="index" v-if="index != 3">
              <div class="title1">
                <span :class="val.class"></span>
                {{val.name}}
              </div>
              <div class="swiper-main">
                <div style="font-size:16px;margin-top:5px">
                  <p>企业名称</p>
                  <p>风险事项</p>
                </div>
                <div v-for="(value,num) in val.child" :key="num">
                  <p>{{value.name}}</p>
                  <p>{{value.num}}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="swiper" v-for="(val,index) in swiperData" :key="index" v-if="index == 3">
              <div class="title1">
                <span :class="val.class"></span>
                {{val.name}}
              </div>
              <div class="swiper-main">
                <div style="font-size:16px;margin-top:5px">
                  <p>企业名称</p>
                  <p>风险事项</p>
                </div>
                <div v-for="(value,num) in val.child" :key="num">
                  <p>{{value.name}}</p>
                  <p>{{value.num}}</p>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <div class="txt" style="color:black;">风险企业特征</div>
      <div class="echarts">
        <div class="row">
          <div>
            <p class="echartsTitle">区域特征</p>
            <Bar1 :yAxis="yAxis1" :series="series1" :color="color1" />
          </div>
          <div>
            <p class="echartsTitle">行业特征</p>
            <BarY :yAxis="yAxis2" :series="series2" :color="color2" />
          </div>
          <div>
            <p class="echartsTitle">规模特征</p>
            <BarY1 :yAxis="yAxis3" :series="series3" :color="color3" />
          </div>
        </div>
        <div class="row">
          <div>
            <p class="echartsTitle">企业年龄特征</p>
            <BarY2 :yAxis="yAxis4" :series="series4" :color="color4" />
          </div>
          <div>
            <p class="echartsTitle">年龄特征</p>
            <Pie :yAxis="yAxis5" :series="series5" :color="color5" />
          </div>
          <div>
            <p class="echartsTitle">涉及关键词特征</p>
            <word-cloud-chart id="echarts05" :title="123" :height='200' :data="echarts05Data" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "./components/bar";
import Bar1 from "./components/bar1";
import BarY from "./components/barY";
import BarY1 from "./components/barY1";
import BarY2 from "./components/barY2";
import Pie from "./components/Pie";
import wordCloudChart from "../enterprise-query/WordCloudChart";
export default {
  name: "risk-enterprise",
  data() {
    return {
      echarts05Data: [
        {
          name: "西宁特钢",
          value: 2.64,
        },
        {
          name: "西宁",
          value: 4.03,
        },
        {
          name: "持续上涨",
          value: 24.95,
        },
        {
          name: "补助",
          value: 4.04,
        },
        {
          name: "季报",
          value: 5.27,
        },
        {
          name: "青海省",
          value: 5.8,
        },
        {
          name: "铁矿石",
          value: 3.09,
        },
        {
          name: "诊股",
          value: 24.71,
        },
        {
          name: "特殊钢",
          value: 6.33,
        },
        {
          name: "有望",
          value: 2.55,
        },
        {
          name: "兑付",
          value: 3.88,
        },
        {
          name: "H股",
          value: 8.04,
        },
        {
          name: "增资",
          value: 5.87,
        },
        {
          name: "债务",
          value: 6.97,
        },
        {
          name: "A股",
          value: 2.53,
        },
        {
          name: "西部开发",
          value: 2.49,
        },
        {
          name: "半季报",
          value: 3.91,
        },
        {
          name: "补助",
          value: 3.25,
        },
        {
          name: "钢铁行业",
          value: 9.93,
        },
        {
          name: "中国",
          value: 3.65,
        },
      ],
      yAxis: [],
      series: [],
      color: [],
      yAxis1: ["地市1", "地市2", "地市3", "地市4", "地市5", "地市6", "地市7"],
      series1: [900, 800, 700, 600, 500, 400, 300],
      color1: "rgb(169,197,149)",
      yAxis2: ["化工", "冶金", "新能源", "制造", "建筑", "金融"],
      series2: [900, 500, 700, 600, 800, 400],
      color2: "rgb(60,144,247)",
      yAxis3: [
        "0-500万",
        "500-1000万",
        "1000万-1500万",
        "3000万-1亿",
        "1亿-10亿",
        "10亿及以上",
      ],
      series3: ["70", "72", "69", "80", "82", "88"],
      color3: "rgb(79,129,189)",
      yAxis4: ["3年以下", "3-5年", "5-7年", "7-10年", "10年及以上"],
      series4: ["82", "88", "70", "72", "80"],
      color4: "rgb(79,129,189)",
      yAxis5: ["消极", "积极", "中立"],
      series5: [
        { value: 32, name: "消极" },
        { value: 23, name: "积极" },
        { value: 43, name: "中立" },
      ],
      color5: ["rgb(60,144,247)", "rgb(85,191,192)", "rgb(94,190,103)"],
      tabs: [
        {
          name: "当前监控",
          num: 160,
        },
        {
          name: "高危企业",
          num: 12,
          yAxis: [
            "破产风险",
            "股权变动风险",
            "异动风险",
            "法院诉讼预警",
            "12315投诉预警",
            "行政处罚记录",
            "欠税名单",
            "异常经营名录",
            "失信人名单",
            "严重违法记录",
          ],
          series: [6, 3, 5, 2, 1, 1, 1, 2, 1, 2],
          color: "rgb(255, 0, 0)",
          data: [
            {
              name: "北京鱼乐世界教育有限公司",
              txt:
                "近三个月发生12次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京德宝科贸有限公司",
              txt:
                "近三个月发生7次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京灵数科技软件公司",
              txt:
                "近三个月发生5次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京新风智能环境科技有限公司",
              txt:
                "近三个月发生3次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "小窝空间有限公司",
              txt:
                "近三个月发生1次变更，变更事项：投资人、法人、行业、经营范围",
            },
          ],
        },
        {
          name: "高风险企业",
          num: 14,
          yAxis: [
            "破产风险",
            "股权变动风险",
            "异动风险",
            "法院诉讼预警",
            "12315投诉预警",
            "行政处罚记录",
            "欠税名单",
            "异常经营名录",
            "失信人名单",
            "严重违法记录",
          ],
          series: [2, 6, 3, 5, 2, 1, 2, 1, 1, 1],
          color: "rgb(237, 125, 49)",
          data: [
            {
              name: "北京鱼乐世界教育有限公司",
              txt:
                "近三个月发生7次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京德宝科贸有限公司",
              txt:
                "近三个月发生8次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京灵数科技软件公司",
              txt:
                "近三个月发生3次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京新风智能环境科技有限公司",
              txt:
                "近三个月发生3次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "小窝空间有限公司",
              txt:
                "近三个月发生2次变更，变更事项：投资人、法人、行业、经营范围",
            },
          ],
        },
        {
          name: "低风险企业",
          num: 16,
          yAxis: [
            "破产风险",
            "股权变动风险",
            "异动风险",
            "法院诉讼预警",
            "12315投诉预警",
            "行政处罚记录",
            "欠税名单",
            "异常经营名录",
            "失信人名单",
            "严重违法记录",
          ],
          series: [0, 2, 0, 6, 3, 2, 0, 3, 1, 1],
          color: "rgb(255, 192, 0)",
          data: [
            {
              name: "北京鱼乐世界教育有限公司",
              txt:
                "近三个月发生7次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京德宝科贸有限公司",
              txt:
                "近三个月发生7次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京灵数科技软件公司",
              txt:
                "近三个月发生9次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京新风智能环境科技有限公司",
              txt:
                "近三个月发生3次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "小窝空间有限公司",
              txt:
                "近三个月发生4次变更，变更事项：投资人、法人、行业、经营范围",
            },
          ],
        },
        {
          name: "正常企业",
          num: 118,
          yAxis: [
            "破产风险",
            "股权变动风险",
            "异动风险",
            "法院诉讼预警",
            "12315投诉预警",
            "行政处罚记录",
            "欠税名单",
            "异常经营名录",
            "失信人名单",
            "严重违法记录",
          ],
          series: [5, 6, 3, 0, 0, 3, 1, 1, 1, 2],
          color: "rgb(0, 176, 80)",
          data: [
            {
              name: "北京鱼乐世界教育有限公司",
              txt:
                "近三个月发生0次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京德宝科贸有限公司",
              txt:
                "近三个月发生7次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京灵数科技软件公司",
              txt:
                "近三个月发生6次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "北京新风智能环境科技有限公司",
              txt:
                "近三个月发生3次变更，变更事项：投资人、法人、行业、经营范围",
            },
            {
              name: "小窝空间有限公司",
              txt:
                "近三个月发生4次变更，变更事项：投资人、法人、行业、经营范围",
            },
          ],
        },
      ],
      swiperData: [
        {
          name: "高危企业",
          class: "red",
          child: [
            {
              name: "动力信息技术有限公司",
              num: 36,
            },
            {
              name: "瑞宝实业有限公司 ",
              num: 22,
            },
            {
              name: "北京云海工程技术有限公司",
              num: 18,
            },
            {
              name: "北京互联创业投资合伙企业 ",
              num: 15,
            },
            {
              name: "北京市万力佳创有限公司",
              num: 14,
            },
          ],
        },
        {
          name: "高风险企业",
          class: "orange",
          child: [
            {
              name: "信息技术有限公司",
              num: 30,
            },
            {
              name: "瑞宝有限公司 ",
              num: 26,
            },
            {
              name: "北京工程技术有限公司 ",
              num: 14,
            },
            {
              name: "北京互联创业投资合伙企业  ",
              num: 6,
            },
            {
              name: "北京市万力佳创网络技术有限公司 ",
              num: 4,
            },
          ],
        },
        {
          name: "低风险企业",
          class: "yellow",
          child: [
            {
              name: "信息技术有限公司 ",
              num: 17,
            },
            {
              name: "瑞宝有限公司 ",
              num: 13,
            },
            {
              name: "北京工程技术有限公司 ",
              num: 8,
            },
            {
              name: "北京互联创业投资合伙企业  ",
              num: 6,
            },
            {
              name: "北京市万力佳创网络技术有限公司 ",
              num: 4,
            },
          ],
        },
        {
          name: "正常企业",
          class: "green",
          child: [
            {
              name: "动力信息技术有限公司",
              num: 0,
            },
            {
              name: "瑞宝实业有限公司 ",
              num: 1,
            },
            {
              name: "北京云海工程技术有限公司",
              num: 5,
            },
            {
              name: "北京互联创业投资合伙企业 ",
              num: 7,
            },
            {
              name: "北京市万力佳创有限公司",
              num: 8,
            },
          ],
        },
      ],
      liIndex: 1,
    };
  },
  components: {
    Bar,
    Bar1,
    BarY,
    BarY1,
    BarY2,
    Pie,
    wordCloudChart
  },
  created() {
    this.yAxis = this.tabs[this.liIndex].yAxis;
    this.series = this.tabs[this.liIndex].series;
    this.color = this.tabs[this.liIndex].color;
  },
  methods: {
    indexFn(val) {
      if (val != 0) {
        this.liIndex = val;
        this.yAxis = this.tabs[this.liIndex].yAxis;
        this.series = this.tabs[this.liIndex].series;
        this.color = this.tabs[this.liIndex].color;
        this.$refs.bar.drawLine();
      }
    },
  },
};
</script>

<style scoped>
.echartsTitle {
  font-size: 16px;
  color: rgb(47, 85, 151);
  text-align: center;
}
.row {
  display: flex;
}
.row div {
  flex: 1;
  height: 220px;
}
.swiper-main div {
  display: flex;
}
.swiper-main div p:nth-child(1) {
  flex: 1;
}
.swiper-main div p {
  line-height: 30px;
}
.swiper-main div p:nth-child(2) {
  text-align: right;
}
.title1 {
  display: flex;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 0.5px #ccc solid;
}
.title1 span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
}
.red {
  background: red;
}
.yellow {
  background: yellow;
}
.green {
  background: green;
}
.orange {
  background: orange;
}
.swipers {
  display: flex;
}
.swiper {
  flex: none;
  border: 0.5px #ccc solid;
  width: 31%;
  margin-right: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
}
.mid-right {
  flex: 1;
}
.mid-left {
  margin-top: -40px;
}
.mid {
  display: flex;
  width: 100%;
}
.mid-left {
  height: 350px;
  width: 35%;
}
.main {
  padding: 10px 0;
  box-sizing: border-box;
}
p {
  margin: 0;
  padding: 0;
}
.title {
  color: rgb(31, 78, 121);
  font-size: 22px;
  /* font-weight: bold; */
}
.txt {
  color: #888;
  font-size: 16px;
  margin: 30px 0;
}
.txt span {
  color: rgb(143, 170, 220);
}
.tabs {
  display: flex;
}
.tab-box {
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: white;
  margin-right: 20px;
  width: 140px;
  cursor: pointer;
}
.tab-box div:nth-child(1) {
  text-align: center;
}
.tab-box div:nth-child(2) {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 6px 0;
}
.tab-box div:nth-child(3) {
  display: flex;
  width: 100%;
}
.tab-box div:nth-child(3) p {
  flex: 1;
  text-align: center;
  line-height: 14px;
}
.tab-box div:nth-child(3) p:nth-child(1) {
  border-right: 0.5px white solid;
}
.tab-box:nth-child(1) {
  background: rgb(0, 176, 240);
}
.tab-box:nth-child(2) {
  background: rgb(255, 0, 0);
}
.tab-box:nth-child(3) {
  background: rgb(237, 125, 49);
}
.tab-box:nth-child(4) {
  background: rgb(255, 192, 0);
}
.tab-box:nth-child(5) {
  background: rgb(0, 176, 80);
}
</style>
