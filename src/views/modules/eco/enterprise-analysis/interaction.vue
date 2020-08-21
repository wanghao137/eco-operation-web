<template>
	<div class="shengnei">
		<div style="padding-left: 7px;">
			<label>时间：</label>
			<el-date-picker v-model="smonth" type="month" placeholder="选择月" size="small" style="width: 150px;">
			</el-date-picker>
		</div>
		<div class="content">
			<div class="content-l">
				<p class="title">省内资本流动情况</p>
				<div class="chartOptions">
					<highcharts :options="chartOptions" style="height: 100%;"></highcharts>
				</div>
			</div>
			<div class="content-r">
				<div class="content-r-r">
					<div class="content-r-t">
						<p class="title">杭州市 流出：477.25亿元，流入：60.20亿元</p>
						<div style="width: 100%;height: 250px" id="zijinss"></div>
					</div>
					<div class="content-r-b">
						<p class="title">杭州市</p>
						<div style="width: 100%;height: 250px"  id="ziben"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  data () {
    return {
      smonth: '2019-12',
      chartOptions: {
        title: {
          text: null
        },
        chart: {
          style: {
            backgroundColor: '#fff'
          }
        },
        credits: {
          enabled: false // 禁用版权信息
        },
        series: [{
          keys: ['from', 'to', 'weight'],
          data: [
                    ['杭州', '宁波市', 25],
                    ['宁波市', '瑞安市', 1],
                    ['温州市', '嘉兴市', 1],
                    ['嘉兴市', '慈溪市', 1],
                    ['湖州市', '舟山市', 1],
                    ['绍兴市', '衢州市', 1],
                    ['金华市', '湖州市', 1],
                    ['衢州市', '嘉兴市', 1],
                    ['舟山市', '丽水市', 1],
                    ['台州市', '瑞安市', 1],
                    ['丽水市', '金华市', 1],
                    ['建德市', '舟山市', 1],
                    ['余姚市', '金华市', 1],
                    ['慈溪市', '丽水市', 1],
                    ['瑞安市', '台州市', 1]
          ],
	          type: 'dependencywheel',
	          name: '资本流动',
	          borderWidth: 0.2,
	          dataLabels: {
	            color: '#333',
	            textPath: {
	              enabled: true,
	              attributes: {
	                dy: 10
              }
            },
            distance: 20
          },
          size: '80%'
        }]
      }
    }
	  },
	  mounted () {
	    this.draw()
	    this.draw2()
	  },
	  methods: {
	    draw () {
	      let myChart = this.$echarts.init(document.getElementById('zijinss'))
	      myChart.setOption({
	        backgroundColor: '#fff',
	        tooltip: {
	          trigger: 'axis',
	          axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: false // 默认为直线，可选为：'line' | 'shadow'
	          },
	          formatter: function (params) {
	            var time = ''
	            var str = ''
	            for (var i of params) {
	              time = i.name.replace(/\n/g, '') + '<br/>'
	              if (i.data === 'null' || i.data === null) {
	                str += i.seriesName + '：无数据' + '<br/>'
	              } else {
	                str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
              }
	            }
	            return time + str
	          }
	        },
	        legend: {
	          top: 12,
	          itemGap: 10,
	          itemWidth: 10,
	          itemHeight: 10,
	          data: ['流入', '流出']
	        },
	        color: ['rgba(71,182,83,1)', 'rgba(55,113,216,1)'],
	        grid: {
	          x: 50,
	          x2: 30,
	          y2: 5,
	          containLabel: true
	        },
	        xAxis: {
	          show: false
	        },
	        yAxis: [{
	          type: 'category',
	          axisLine: {
	            show: false
	          },
	          axisTick: {
	            show: false
	          },
	          axisLabel: {
	            show: true,
	            interval: '0',
	            textStyle: {
	              fontSize: 12,
	              color: '#687284'
	            }
	          },
	          data: ['杭州市', '湖州市', '金华市', '嘉兴市', '台州市', '丽水市']
	        }],
	        series: [{
	          name: '流入',
	          type: 'bar',
	          barWidth: 7,
	          stack: '总量',
	          label: {
	            normal: {
	              show: true,
	              position: 'left',
	              color: '#687284',
	              fontSize: '10',
	              formatter: function (params) {
	                return params.data * -1
	              }
	            }
	          },
	          data: [-180, -150, -60, -95, -160, -80]
	        },
	        {
	          name: '流出',
	          type: 'bar',
	          barWidth: 7,
	          stack: '总量',
	          label: {
	            normal: {
	              show: true,
	              position: 'right',
	              color: '#687284',
	              fontSize: '10'
	            }
	          },
	          data: [150, 220, 165, 300, 180, 200]
	        }]
	      })
	    },
	    draw2 () {
	      let myChart2 = this.$echarts.init(document.getElementById('ziben'))
	      myChart2.setOption({
	        tooltip: {
	          trigger: 'axis',
	          axisPointer: {
	            type: 'shadow'
	          }
	        },
	        legend: {
	          data: ['资本流入', '资本流出'],
	          align: 'right',
	          right: 10,
	          itemWidth: 10,
	          itemHeight: 10,
	          itemGap: 35
	        },
	        grid: {
	          left: '3%',
	          right: '4%',
	          bottom: '3%',
	          containLabel: true
	        },
	        xAxis: [{
	          type: 'category',
	          data: ['喀什市',
	            '疏附县',
	            '疏勒县',
	            '英吉沙县',
	            '泽普县',
	            '岳普湖县',
	            '巴楚县',
	            '伽师县',
	            '叶城县',
	            '莎车县 '
	          ],
	          axisLine: {
	            show: false
	          },
	          axisTick: {
	            show: false
	          },
	          axisLabel: {
	            show: true,
	            textStyle: {
	              color: '#555'
	            }
	          }
	        }],
	        yAxis: [{
	          type: 'value',
	          axisLabel: {
	            formatter: '{value}'
	          },
	          axisTick: {
	            show: false
	          },
	          axisLine: {
	            show: false,
	            lineStyle: {
	              color: '#555',
	              width: 1,
	              type: 'solid'
	            }
	          },
	          splitLine: {
	            lineStyle: {
	              color: '#efefef'
	            }
	          }
	        }],
	        series: [{
	          name: '资本流入',
	          type: 'bar',
	          data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
	          barWidth: 10, // 柱子宽度
	          barGap: 1, // 柱子之间间距
	          itemStyle: {
	            normal: {
	              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                offset: 0,
	                color: '#008cff'
	              }, {
                offset: 1,
                color: '#005193'
	              }]),
	              opacity: 1
	            }
	          }
        }, {
          name: '资本流出',
          type: 'bar',
          data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46],
          barWidth: 10,
          barGap: 1,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00da9c'
              }, {
                offset: 1,
                color: '#007a55'
              }]),
              opacity: 1
            }
          }
        }]
      })
    }
  }
}
</script>

<style scoped>
	.content {
		display: flex;
    width: 100%;
		justify-content: space-between;
	}
	.content-l,
	.content-r {
		flex: 1;
		margin: 7px;
    width: 100%;
	}
	.title {
		padding-left: 10px;
		color: #333;
		font-size: 16px;
		font-weight: 400;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
	.content-r-r {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
    width: 100%;
	}
	.content-r-t {
		margin-bottom: 15px;
	}
	.content-r-t,
	.content-r-b {
		flex: 1;
		background-color: #fff;
    width: 100%;
	}
	.chartOptions{
		width: 100%;
		height: 580px;
	}
</style>
