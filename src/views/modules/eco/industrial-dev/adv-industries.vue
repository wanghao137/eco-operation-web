<template>
  <!--挖掘优势产业-->
  <div class="wrap">
    <div class="title">
      <span class="content">挖掘优势产业</span>
    </div>
    <div class="adv-selected">
      <el-form :inline="true" label-width="68px">
        <el-date-picker
          style="width: 150px;margin-right: 10px"
          v-model="year"
          type="year"
          placeholder="选择年">
        </el-date-picker>
        <el-form-item label="X轴指标">
          <el-select
            v-model="xvalue"
            placeholder="X轴指标"
            clearable
          >
            <el-option
              v-for="dict in xOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Y轴指标">
          <el-select
            v-model="yvalue"
            placeholder="Y轴指标"
            clearable
          >
            <el-option
              v-for="dict in yOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <el-row>
      <el-col :span="12" :xs="24">
        <div style="font-weight: bold">行业矩阵——规模与增长速度</div>
        <div id="matrixChart"> </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <div style="font-weight: bold">行业成长曲线对比</div>
        <div id="myChartcunl"> </div>
        <div style="font-weight: bold;margin-bottom: 10px">工业制造业 TOP10企业列表</div>
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
          name: '云天化国际化肥有限公司',
          diqu: '西宁',
          date: '2007-09-18',
          hangye: '制造业',
          ziben: '113642'
        }, {
          code: '2',
          name: '青海桂鲁化工有限公司',
          diqu: '西宁',
          date: '2009-09-18',
          hangye: '制造业',
          ziben: '80636'
        }, {
          code: '3',
          name: '青海比亚迪锂电池有限公司',
          diqu: '西宁',
          date: '2016-07-19',
          hangye: '制造业',
          ziben: '125000'
        }, {
          code: '4',
          name: '青海时代新能源科技有限公司',
          diqu: '西宁',
          date: '2012-11-05',
          hangye: '制造业',
          ziben: '48000'
        }, {
          code: '5',
          name: '青海盐湖海纳化工有限公司',
          diqu: '西宁',
          date: '2009-04-08',
          hangye: '制造业',
          ziben: '258215'
        }, {
          code: '6',
          name: '西部矿业股份有限公司',
          diqu: '西宁',
          date: '2000-12-28',
          hangye: '采矿业',
          ziben: '238300'
        }, {
          code: '7',
          name: '青海陆丰新型材料有限公司',
          diqu: '西宁',
          date: '2011-03-17',
          hangye: '制造业',
          ziben: '79800'
        }, {
          code: '8',
          name: '青海省格拉丹药业有限公司',
          diqu: '西宁',
          date: '2004-04-13',
          hangye: '制造业',
          ziben: '12000'
        }]
      }
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      drawLine () {
        let myChart = this.$echarts.init(document.getElementById('myChartcunl'))
        myChart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['新材料产业', '有色金属产业', '油气化工', '煤化工', '装备制造业', '钢铁产业', '轻工纺织业', '生物产业', '盐湖化工产业', '新能源产业'],
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
              name: '新材料产业',
              type: 'line',
              data: [[0, 300], [10, 500], [30, 1000], [35, 1300], [40, 2000], [50, 2800], [60, 3800], [70, 4600], [80, 5000], [100, 5200]]
            },
            {
              name: '有色金属产业',
              type: 'line',
              data: [[0, 0], [10, 300], [50, 800], [55, 850], [70, 1500], [100, 2000], [120, 2800], [130, 3300], [180, 4000], [200, 5200]]
            },
            {
              name: '油气化工',
              type: 'line',
              data: [[50, 500], [120, 700], [180, 800], [220, 900], [280, 1300], [330, 1800], [380, 2000], [400, 2200], [450, 2800], [500, 3000]]
            },
            {
              name: '煤化工',
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
              name: '生物产业',
              type: 'line',
              data: [[100, 300], [200, 500], [300, 1000], [400, 1500], [500, 2000], [600, 2800], [700, 3500], [800, 4000], [900, 4500], [1000, 5000]]
            },
            {
              name: '盐湖化工产业',
              type: 'line',
              data: [[80, 10], [120, 80], [200, 120], [250, 150], [280, 1000], [380, 1300], [430, 1500], [500, 2000], [630, 2300], [700, 2800]]
            },
            {
              name: '新能源产业',
              type: 'line',
              data: [[210, 50], [250, 100], [350, 130], [400, 200], [450, 230], [500, 260], [550, 350], [600, 400], [650, 430], [680, 500]]
            }
          ]
        })
        let matrixChart = this.$echarts.init(document.getElementById('matrixChart'))
        // 散点数据
        let marksData = [
          {
            name: '其他采矿业',
            value: [20, 68]
          },
          {
            name: '木材加工和木，竹，藤，棕，草制造业',
            value: [22, 55]
          },
          {
            name: '非金属矿物制造业',
            value: [22, 50]
          },
          {
            name: '有色金属制造业',
            value: [10, 45]
          },
          {
            name: '铁路，船舶，航空航天制造业',
            value: [25, 45]
          },
          {
            name: '汽车制造业',
            value: [20, 40]
          },
          {
            name: '酒，饮品制造业',
            value: [20, 45]
          },
          {
            name: '仪表仪器制造业',
            value: [10, 30]
          },
          {
            name: '黑色金属采矿制造业',
            value: [68, 50]
          },
          {
            name: '通用设备制造业',
            value: [55, 68]
          },
          {
            name: '化学纤维制造业',
            value: [65, 65]
          },
          {
            name: '食品制造业',
            value: [50, 65]
          },
          {
            name: '皮革，毛皮，羽毛等制造业',
            value: [45, 55]
          },
          {
            name: '石油和天然气开采业',
            value: [50, 50]
          },
          {
            name: '金属制造业',
            value: [45, 45]
          },
          {
            name: '开采辅助活动',
            value: [38, 44]
          },
          {
            name: '电力，热力生产和供应业',
            value: [60, 40]
          },
          {
            name: '纺织业',
            value: [45, 33]
          },
          {
            name: '计算机，通讯和其他电子设备制造业',
            value: [55, 28]
          },
          {
            name: '农副产品加工业',
            value: [50, 10]
          },
          {
            name: '水的生产和供应业',
            value: [45, 5]
          },
          {
            name: '家具制造业',
            value: [60, 3]
          },
          {
            name: '橡胶和塑料制造业',
            value: [30, 30]
          },
          {
            name: '其他制造业',
            value: [30, 25]
          },
          {
            name: '燃气生产和供应业',
            value: [25, 20]
          },
          {
            name: '废弃资源综合利用业',
            value: [35, 15]
          }
        ]
        matrixChart.setOption({
          tooltip: {
            axisPointer: {
              show: true,
              type: 'cross',
              lineStyle: {
                type: 'dashed',
                width: 1
              },
              label: {
                backgroundColor: '#555'
              }
            }
          },
          grid: {
            left: 30,
            right: 20,
            bottom: '5%',
            top: '5%',
            containLabel: true
          },
          xAxis: {
            name: 'X轴：企业数量占比',
            nameLocation: 'middle',
            nameTextStyle: {
              lineHeight: 30
            }
          },
          yAxis: {
            name: 'Y轴：企业数量增幅'
          },
          series: [{
            type: 'scatter',
            data: marksData,
            label: {
              show: true,
              position: 'bottom',
              formatter: '{b}'
            },
            itemStyle: {
              shadowBlur: 2,
              shadowColor: 'rgba(120, 36, 50, 0.5)',
              shadowOffsetY: 1,
              color: function (e) {
                let randomColor = 'rgba(' + Math.floor(Math.random() * 240) + ',' + Math.floor(Math.random() * 240) + ',' + Math.floor(Math.random() * 240) + ',' + '.8' + ')'
                return randomColor.substring()
              }
            },
            // 各象限区域
            markArea: {
              silent: true,
              data: [
                [{
                  name: '潜力产业',
                  xAxis: 35, // x 轴开始位置
                  yAxis: 70, // y 轴结束位置(直接取最大值)
                  itemStyle: {
                    color: 'none'
                  },
                  label: {
                    position: 'insideTopLeft',
                    color: '#2195FF',
                    fontSize: 22
                  }
                }, {
                  yAxis: 35 // y轴开始位置
                }],
                [{
                  name: '支柱产业',
                  yAxis: 70, // y 轴结束位置(直接取最大值)
                  itemStyle: {
                    color: 'none'
                  },
                  label: {
                    position: 'insideTopLeft ',
                    color: '#2195FF',
                    fontSize: 22
                  }
                }, {
                  xAxis: 35, // x 轴结束位置
                  yAxis: 35 // y轴开始位置
                }],
                [{
                  name: '弱势产业',
                  yAxis: 35, // y 轴结束位置
                  itemStyle: {
                    color: 'none'
                  },
                  label: {
                    position: 'insideTopLeft ',
                    color: '#2195FF',
                    fontSize: 22
                  }
                }, {
                  xAxis: 35, // x 轴结束位置
                  yAxis: 0 // y轴开始位置
                }],
                [{
                  name: '优势产业',
                  xAxis: 35, // x 轴开始位置
                  yAxis: 35, // y 轴结束位置
                  itemStyle: {
                    color: 'none'
                  },
                  label: {
                    position: 'insideTopLeft ',
                    color: '#2195FF',
                    fontSize: 22
                  }
                }, {
                  yAxis: 0 // y轴开始位置
                }]
              ]
            }
          }]
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
  #myChartcunl{
    width: 100%;
    height: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  #matrixChart{
    width: 100%;
    height: 600px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
