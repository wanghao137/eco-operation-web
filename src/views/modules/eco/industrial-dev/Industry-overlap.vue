<template>
  <!--挖掘优势产业-->
  <div class="wrap">
    <div class="title">
      <span class="content">企业成长性分析</span>
    </div>
    <el-row>
      <el-col :span="11" :xs="24">
        <div style="font-weight: bold;margin-bottom: 10px">行业成长类型分类</div>
        <el-table
          :data="tableDatas"
          stripe
          border
          size="small"
          height="615"
          style="width: 100%">
          <el-table-column
            prop="class"
            header-align="center"
            align="left"
            label="行业分类"
            width="100">
          </el-table-column>
          <el-table-column header-align="center" label="企业数量">
            <el-table-column
              prop="num20"
              header-align="center"
              align="center"
              label="2020年"
              width="70">
            </el-table-column>
            <el-table-column
              prop="num10"
              header-align="center"
              align="center"
              label="2010年"
              width="70">
            </el-table-column>
            <el-table-column
              prop="numbase"
              header-align="center"
              align="center"
              label="定基比"
              width="70">
            </el-table-column>
          </el-table-column>
          <el-table-column header-align="center" label="注册资本">
            <el-table-column
              prop="cap20"
              header-align="center"
              align="center"
              label="2020年"
              width="70">
            </el-table-column>
            <el-table-column
              prop="cap10"
              header-align="center"
              align="center"
              label="2010年"
              width="70">
            </el-table-column>
            <el-table-column
              prop="capbase"
              header-align="center"
              align="center"
              label="定基比"
              width="70">
            </el-table-column>
          </el-table-column>
          <el-table-column header-align="center" label="主营业务收入">
            <el-table-column
              prop="in20"
              header-align="center"
              align="center"
              label="2020年"
              width="70">
            </el-table-column>
            <el-table-column
              prop="in10"
              header-align="center"
              align="center"
              label="2010年"
              width="70">
            </el-table-column>
            <el-table-column
              prop="inbase"
              header-align="center"
              align="center"
              label="定基比"
              width="70">
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <el-col :span="12" :xs="24">
        <div style="font-weight: bold">行业成长曲线对比</div>
        <div id="myChartcunls"> </div>
        <div style="font-weight: bold;margin-bottom: 10px">互联网 TOP10企业列表</div>
        <el-table
          :data="tableData"
          stripe
          border
          size="small"
          height="230"
        >
          <el-table-column
            prop="code"
            label="序号"
            header-align="center"
            align="center"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            label="企业名称"
            header-align="center"
            align="left"
            width="">
          </el-table-column>
          <el-table-column
            prop="diqu"
            header-align="center"
            align="center"
            label="地区"
            width="80">
          </el-table-column>
          <el-table-column
            prop="date"
            header-align="center"
            align="center"
            label="成立时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="hangye"
            header-align="center"
            align="center"
            label="行业"
            width="80">
          </el-table-column>
          <el-table-column
            prop="ziben"
            header-align="center"
            align="left"
            label="注册资本"
            width="80">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        year: '2019',
        xvalue: 'zhanbi',
        yvalue: 'zengfu',
        xOptions: [
          {
            dictValue: 'zhanbi',
            dictLabel: '企业数量占比'
          }
        ],
        yOptions: [
          {
            dictValue: 'zengfu',
            dictLabel: '企业数量增幅'
          }
        ],
        tableData: [{
          code: '1',
          name: '阿里巴巴（中国）有限公司',
          diqu: '杭州',
          date: '2007-09-18',
          hangye: '互联网',
          ziben: '113642'
        }, {
          code: '2',
          name: '腾讯计算机系统有限责任公司',
          diqu: '深圳',
          date: '2009-09-18',
          hangye: '互联网',
          ziben: '80636'
        }, {
          code: '3',
          name: '百度公司',
          diqu: '北京',
          date: '2016-07-19',
          hangye: '互联网',
          ziben: '125000'
        }, {
          code: '4',
          name: '京东集团',
          diqu: '北京',
          date: '2012-11-05',
          hangye: '互联网',
          ziben: '48000'
        }, {
          code: '5',
          name: '网易集团',
          diqu: '北京',
          date: '2009-04-08',
          hangye: '互联网',
          ziben: '258215'
        }, {
          code: '6',
          name: '美团点评',
          diqu: '北京',
          date: '2000-12-28',
          hangye: '互联网',
          ziben: '238300'
        }, {
          code: '7',
          name: '北京字节跳动科技有限公司',
          diqu: '北京',
          date: '2011-03-17',
          hangye: '互联网',
          ziben: '79800'
        }, {
          code: '8',
          name: '三六零安全科技股份有限公司',
          diqu: '北京',
          date: '2004-04-13',
          hangye: '互联网',
          ziben: '12000'
        }, {
          code: '9',
          name: '上海寻梦信息技术有限公司',
          diqu: '上海',
          date: '2004-04-13',
          hangye: '互联网',
          ziben: '12000'
        }, {
          code: '10',
          name: '北京五八信息技术有限公司',
          diqu: '北京',
          date: '2004-04-13',
          hangye: '互联网',
          ziben: '12000'
        }],
        tableDatas: [{
          class: '初创行业',
          num20: '',
          num10: '',
          numbase: '',
          cap20: '',
          cap10: '',
          capbase: '',
          in20: '',
          in10: '',
          inbase: ''
        }, {
          class: '互联网',
          num20: '15000',
          num10: '2500',
          numbase: '50%',
          cap20: '9800000',
          cap10: '50000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '新能源',
          num20: '3500',
          num10: '1300',
          numbase: '50%',
          cap20: '6600000',
          cap10: '30000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '新材料',
          num20: '15000',
          num10: '3500',
          numbase: '50%',
          cap20: '5350000',
          cap10: '25000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '物联网',
          num20: '36000',
          num10: '1500',
          numbase: '50%',
          cap20: '1800000',
          cap10: '10000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '大数据',
          num20: '5300',
          num10: '300',
          numbase: '50%',
          cap20: '6200000',
          cap10: '30000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '高成长行业',
          num20: '',
          num10: '',
          numbase: '',
          cap20: '',
          cap10: '',
          capbase: '',
          in20: '',
          in10: '',
          inbase: ''
        }, {
          class: '旅游业',
          num20: '15000',
          num10: '2500',
          numbase: '50%',
          cap20: '3100000',
          cap10: '3000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '计算机，通讯和其他电子设备制造业',
          num20: '15000',
          num10: '2500',
          numbase: '50%',
          cap20: '4500000',
          cap10: '25000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '医药制造业',
          num20: '15000',
          num10: '2500',
          numbase: '50%',
          cap20: '100000',
          cap10: '20000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '金属制品业',
          num20: '15000',
          num10: '2500',
          numbase: '50%',
          cap20: '3300000',
          cap10: '10000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '传媒服务业',
          num20: '15000',
          num10: '2500',
          numbase: '50%',
          cap20: '900000',
          cap10: '3400',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '房屋中介',
          num20: '15000',
          num10: '2500',
          numbase: '50%',
          cap20: '1200000',
          cap10: '1300',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '成熟行业',
          num20: '',
          num10: '',
          numbase: '',
          cap20: '',
          cap10: '',
          capbase: '',
          in20: '',
          in10: '',
          inbase: ''
        }, {
          class: '石油和天然气开采',
          num20: '15000',
          num10: '2500',
          numbase: '50%',
          cap20: '6600000',
          cap10: '34000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '农副食品加工',
          num20: '53500',
          num10: '15300',
          numbase: '50%',
          cap20: '9400000',
          cap10: '50000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '黑色金属冶炼',
          num20: '26000',
          num10: '5800',
          numbase: '50%',
          cap20: '1300000',
          cap10: '30000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '电器机械和器材制造业',
          num20: '18900',
          num10: '3300',
          numbase: '50%',
          cap20: '1200000',
          cap10: '10000',
          capbase: '50%',
          in20: '5000000',
          in10: '35000',
          inbase: '25%'
        }, {
          class: '高衰退行业',
          num20: '',
          num10: '',
          numbase: '',
          cap20: '',
          cap10: '',
          capbase: '',
          in20: '',
          in10: '',
          inbase: ''
        }, {
          class: '煤炭采矿和洗煤业',
          num20: '2000',
          num10: '13200',
          numbase: '50%',
          cap20: '786000',
          cap10: '1283000',
          capbase: '50%',
          in20: '786000',
          in10: '1283000',
          inbase: '25%'
        }, {
          class: '黑色金属矿采业',
          num20: '1500',
          num10: '5500',
          numbase: '50%',
          cap20: '33000',
          cap10: '650000',
          capbase: '50%',
          in20: '33000',
          in10: '650000',
          inbase: '25%'
        }]
      }
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      drawLine () {
        let myChart = this.$echarts.init(document.getElementById('myChartcunls'))
        myChart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['初创行业', '高成长行业', '成熟行业', '高衰退行业', '装备制造业', '钢铁产业', '轻工纺织业', '新能源产业'],
            width: 500,
            padding: [0, 0, 10, 0]
          },
          grid: {
            left: '0%',
            right: '12%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            name: '企业数量',
            type: 'value',
            boundaryGap: false,
            data: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
          },
          yAxis: {
            name: '注册资本',
            type: 'value',
            data: [0, 1000, 2000, 3000, 4000, 5000, 6000]
          },
          series: [
            {
              name: '初创行业',
              type: 'line',
              data: [[0, 300], [10, 500], [30, 1000], [35, 1300], [40, 2000], [50, 2800], [60, 3800], [70, 4600], [80, 5000], [100, 5200]]
            },
            {
              name: '高成长行业',
              type: 'line',
              data: [[0, 0], [10, 300], [50, 800], [55, 850], [70, 1500], [100, 2000], [120, 2800], [130, 3300], [180, 4000], [200, 5200]]
            },
            {
              name: '成熟行业',
              type: 'line',
              data: [[50, 500], [120, 700], [180, 800], [220, 900], [280, 1300], [330, 1800], [380, 2000], [400, 2200], [450, 2800], [500, 3000]]
            },
            {
              name: '高衰退行业',
              type: 'line',
              data: [[150, 1500], [180, 2000], [200, 2500], [230, 2800], [280, 3300], [300, 4000], [330, 4100], [350, 4100], [400, 4200], [420, 4200]]
            },
            {
              name: '装备制造业',
              type: 'line',
              data: [[0, 300], [80, 800], [180, 1000], [260, 1500], [330, 2300], [400, 3800], [450, 4000], [550, 4100], [610, 4500], [700, 5000]]
            },
            {
              name: '钢铁产业',
              type: 'line',
              data: [[100, 1300], [120, 1400], [130, 1800], [140, 2500], [150, 2500], [160, 2700], [170, 2700], [180, 2800], [190, 2900], [200, 3000]]
            },
            {
              name: '轻工纺织业',
              type: 'line',
              data: [[400, 1300], [410, 1500], [420, 1600], [430, 1600], [440, 1700], [450, 1800], [460, 1900], [470, 1900], [475, 2000], [480, 2100]]
            },
            {
              name: '新能源产业',
              type: 'line',
              data: [[210, 50], [250, 100], [350, 130], [400, 200], [450, 230], [500, 260], [550, 350], [600, 400], [650, 430], [680, 500]]
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 100%;
  }
  .title{
    width: 100%;
    padding: 10px 10px 10px 0;
  }
  .content{
    font-weight: bold;
    font-size: 18px;
    color: steelblue;
  }
  #myChartcunls{
    width: 100%;
    height: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
