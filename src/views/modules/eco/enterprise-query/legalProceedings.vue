<template>
	<div class="legalProceedings">
		<h3 class="title">法律诉讼</h3>
		<div class="content">
			<div class="first-content">
				<div class="card">
					<h4>法律诉讼身份分布</h4>
					<div class="item">
						<div id="myChart"></div>
					</div>
				</div>
				<div class="year">
					<h4>法律诉讼年份分布</h4>
					<div class="item">
						<div id="myChart2"></div>
					</div>
				</div>
			</div>
			<div class="">
        <h3 class="title">被执行人信息</h3>
				<template>
					<el-table :data="tableData" size="small" stripe border style="width: 100%">
						<el-table-column prop="number" label="序号" align="center" width="100"></el-table-column>
						<el-table-column prop="code" label="案号" align="center"></el-table-column>
						<el-table-column prop="date" label="立案日期" align="center"></el-table-column>
						<el-table-column prop="fayuan" label="执行法院" align="center"></el-table-column>
						<el-table-column prop="biaodi" label="执行标的" align="center"></el-table-column>
					</el-table>
				</template>
			</div>
			<div class="">
        <h3 class="title">裁判文书</h3>
				<template>
					<el-table :data="tableData2" size="small" stripe border style="width: 100%">
						<el-table-column prop="number" label="序号" align="center" width="100"></el-table-column>
						<el-table-column prop="name" label="案件名称" header-align="center" align="left"></el-table-column>
						<el-table-column prop="liyou" label="案由" align="center"></el-table-column>
						<el-table-column prop="money" label="案件金额" align="center" width="100"></el-table-column>
						<el-table-column prop="date" label="发布日期" align="center" width="100"></el-table-column>
						<el-table-column prop="code" label="案号" align="center"></el-table-column>
						<el-table-column prop="shenfen" label="案件身份" header-align="center" align="left"></el-table-column>
						<el-table-column prop="fayuan" label="执行法院" align="center"></el-table-column>
					</el-table>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import china from 'echarts/map/js/china.js'
export default {
  name: 'legalProceedings',
  data () {
    return {
      tableData: [{
        number: '1',
        code: '(2019)苏0681执2206号',
        date: '2019-06-05',
        fayuan: '启东市人民法院',
        biaodi: '4092000'
      }],
      tableData2: [{
        number: '1',
        name: '西宁特殊钢股份有限公司等与北京沃投资中心(有限合伙)合同纠纷二审民事判决书',
        liyou: '合同纠纷',
        money: '——',
        date: '2019-08-22',
        code: '(2019)京02民终8666号',
        shenfen: '上诉人(原审被告)-西宁特殊钢股份有限公司，原审第三人-江阴东辰机械制造股份有限公司，代理律师事务所-江苏东恒律师事务所',
        fayuan: '北京市第二中级人民法院'
      },{
        number: '2',
        name: '启动环球机电设备股份有限公司',
        liyou: '合同纠纷',
        money: '——',
        date: '2019-12-02',
        code: '(2019)京02民终9999号',
        shenfen: '启动环球机电设备股份有限公司',
        fayuan: '北京市第二中级人民法院'
      }],
      data: [
        {
          name: '青海',
          value: 66
        },
        {
          name: '黑龙江',
          value: 20
        },
        {
          name: '四川',
          value: 5
        },
        {
          name: '宁夏',
          value: 5
        },
        {
          name: '甘肃',
          value: 5
        },
        {
          name: '北京',
          value: 5
        },
        {
          name: '河北',
          value: 5
        }
      ]
    }
  },
  mounted () {
    this.draw()
    this.draw2()
  },
  methods: {
    draw () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        tooltip: {
          formatter: function (params) {
            if (params.data) {
              return `${params.name} ${params.value}`
            }
          }
        },
        visualMap: {
          min: 0,
          max: 66,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],
          calculable: true,
          inRange: {
            color: ['#76c8ff', '#0087f1']
          },
          show: true
        },
        series: [
          {
            type: 'map',
            mapType: 'china',
            zoom: 1,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              borderColor: '#fff',
              emphasis: {
                areaColor: '#4499d0'
              }
            },
            layoutCenter: ['50%', '50%'],
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            layoutSize: 340,
            data: this.data
          }
        ]
      })
    },

    draw2 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      myChart.setOption({
        animation: true,
        color: [
          'rgb(88, 151, 246)',
          'rgb(72, 199, 199)',
          'rgb(80,181,84)',
          'rgb(240,196,57)'
        ],
        grid: {
          top: '40',
          left: '32',
          bottom: '40',
          right: '39',
          containLabel: true
        },
        legend: {
          show: true,
          bottom: 10,
          itemGap: 10,
          itemWidth: 10,
          itemHeight: 10,
          data: ['被执行人信息', '裁判文书', '法院公告', '开庭公告'],
          textStyle: {
            color: 'RGB(193,223,255)'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['2016', '2017', '2018', '2019', '2020'],
            axisTick: {
              alignWithLabel: true
            },
            nameTextStyle: {
              color: '#333'
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#333'
              },
              margin: 10
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#333'
              },
              formatter: '{value}'
            },
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: '#ccc'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'RGB(255,255,255)'
              }
            }
          }
        ],
        series: [
          {
            name: '被执行人信息',
            type: 'bar',
            // silent: true,
            barWidth: '12',
            // barGap: '-100%', // Make series be overlap
            data: [
              {
                value: 0
              },
              {
                value: 20
              },
              {
                value: 10
              },
              {
                value: 5
              },
              {
                value: 72
              }
            ]
          },
          {
            name: '裁判文书',
            type: 'bar',
            // silent: true,
            barWidth: '12',
            // barGap: '-100%', // Make series be overlap
            data: [
              {
                value: 97
              },
              {
                value: 91
              },
              {
                value: 86
              },
              {
                value: 83
              },
              {
                value: 82
              }
            ]
          },
          {
            name: '法院公告',
            type: 'bar',
            // silent: true,
            barWidth: '12',
            // barGap: '-100%', // Make series be overlap
            data: [
              {
                value: 72
              },
              {
                value: 78
              },
              {
                value: 68
              },
              {
                value: 74
              },
              {
                value: 77
              }
            ]
          },
          {
            name: '开庭公告',
            type: 'bar',
            // silent: true,
            barWidth: '12',
            // barGap: '-100%', // Make series be overlap
            data: [
              {
                value: 72
              },
              {
                value: 78
              },
              {
                value: 68
              },
              {
                value: 74
              },
              {
                value: 77
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
.title {
  font-size: 18px;
  border-left: 3px rgb(46, 132, 213) solid;
  padding-left: 5px;
  margin: 30px 0;
  display: flex;
  align-items: center;
}

.content {
  padding: 0 15px 30px;
}

.first-content {
  display: flex;
  justify-content: space-between;
}

h4 {
  color: #555;
  height: 35px;
  line-height: 35px;
}

.first-content .year {
  flex: 1;
}

.first-content .card {
  flex: 1;
  margin-right: 30px;
}

.item {
  background-color: white;
}

#myChart {
  width: 100%;
  height: 300px;
}

#myChart2 {
  width: 100%;
  height: 300px;
}
</style>
