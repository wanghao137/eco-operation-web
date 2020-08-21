<template>
  <div class="wrap">
    <div class="title">
      <span class="content">区域产业结构差异</span>
    </div>
    <div class="adv-selected">
      <el-form :inline="true" label-width="68px">
        <el-date-picker
          style="width: 150px;margin-right: 10px"
          v-model="year"
          type="year"
          placeholder="选择年">
        </el-date-picker>
        <el-form-item label="产业">
          <el-select
            v-model="xvalue"
            placeholder="产业"
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
      </el-form>
    </div>
    <el-row>
      <el-col :span="12" :xs="24">
        <div style="font-weight: bold">河北各地市产业差异</div>
        <div id="matrixCharts"> </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <div style="font-weight: bold">地市之间产业结构差异</div>
        <div id="legalChart"></div>
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
        xOptions: [
          {
            dictValue: 'zhanbi',
            dictLabel: '制造业'
          }
        ],
        color: ['#0090ff', '#06d3c4', '#ffbc32', '#2ccc44', '#ff3976', '#6173d6', '#914ce5', '#42b1cc', '#ff55ac']
      }
    },
    mounted () {
      this.draw()
    },
    methods: {
      draw () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('legalChart'))
        myChart.setOption({
          'tooltip': {
            'show': true,
            'trigger': 'item'
          },
          legend: {
            orient: 'vertical',
            right: 0,
            'icon': 'roundRect',
            top: '25%',
            itemWidth: 15,
            itemHeight: 15,
            data: ['石家庄', '唐山', '衡水', '沧州', '邯郸', '张家口', '秦皇岛', '保定', '廊坊', '承德']
          },
          'radar': {
            'center': ['45%', '50%'],
            'radius': '70%',
            'startAngle': 90,
            'splitNumber': 6,
            // "shape": "circle",
            name: {
              textStyle: {
                color: '#555',
                fontSize: '12',
                borderRadius: 3,
                padding: [1, 1]
              }
            },
            'axisLabel': {
              'show': false
            },
            'axisLine': {
              'show': true,
              'lineStyle': {
                'color': '#ccc'
              }
            },
            'splitLine': {
              'show': true,
              'lineStyle': {
                'color': '#ccc'
              }
            },
            'indicator': [{ text: '卫生和社会工业', max: 100},
              { text: '教育', max: 100},
              { text: '国民服务', max: 100},
              { text: '水利、环境', max: 100},
              { text: '科学研修和科技', max: 100},
              { text: '租赁和商务服务', max: 100},
              { text: '房地产业', max: 100},
              { text: '金融业', max: 100},
              { text: '信息传输和软件开发', max: 100},
              { text: '住宿和餐饮业', max: 100},
              { text: '交通运输、仓储', max: 100},
              { text: '批发和零售业', max: 100},
              { text: '建筑业', max: 100},
              { text: '电力和热力', max: 100},
              { text: '制造业', max: 100},
              { text: '采矿业', max: 100},
              { text: '农、林、牧', max: 100},
              { text: '公共管理和社会卫生', max: 100},
              { text: '文化体育', max: 100}]
          },
          'series': [{
            'name': '石家庄',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            itemStyle: {
              color: this.color[1]
            },
            'lineStyle': {
              'normal': {
                'color': this.color[1],
                'width': 2
              }
            },
            'data': [
              [80, 50, 55, 80, 50, 80, 48, 43, 60, 7, 60, 40, 48, 43, 60, 78, 60]
            ]
          }, {
            'name': '唐山',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: this.color[2]
              }
            },
            'lineStyle': {
              'normal': {
                'color': this.color[2],
                'width': 2
              }
            },
            'data': [
              [60, 60, 65, 60, 70, 40, 80, 6, 68, 60, 77, 60, 80, 63, 68, 60, 77, 60]
            ]
          }, {
            'name': '衡水',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: this.color[3]
              }
            },
            'lineStyle': {
              'normal': {
                'color': this.color[3],
                'width': 2
              }
            },
            'data': [
              [50, 20, 35, 40, 30, 20, 4, 33, 28, 50, 27, 30, 40, 33, 28, 50, 27, 30]
            ]
          },
          {
            'name': '沧州',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: this.color[4]
              }
            },
            'lineStyle': {
              'normal': {
                'color': this.color[4],
                'width': 2
              }
            },
            'data': [
                [50, 20, 35, 4, 30, 2, 40, 33, 28, 5, 27, 30, 40, 33, 28, 50, 27, 30]
            ]
          }, {
            'name': '邯郸',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: this.color[5]
              }
            },
            'lineStyle': {
              'normal': {
                'color': this.color[5],
                'width': 2
              }
            },
            'data': [
                [50, 20, 35, 4, 3, 20, 40, 33, 28, 5, 27, 30, 40, 33, 28, 50, 27, 30]
            ]
          }, {
            'name': '张家口',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: this.color[6]
              }
            },
            'lineStyle': {
              'normal': {
                'color': this.color[6],
                'width': 2
              }
            },
            'data': [
                [50, 20, 35, 4, 30, 20, 40, 33, 28, 5, 27, 30, 40, 33, 28, 50, 27, 30]
            ]
          }, {
            'name': '秦皇岛',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: this.color[7]
              }
            },
            'lineStyle': {
              'normal': {
                'color': this.color[7],
                'width': 2
              }
            },
            'data': [
                [50, 20, 3, 4, 30, 20, 40, 33, 28, 5, 27, 30, 40, 33, 28, 50, 27, 30]
            ]
          }, {
            'name': '保定',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: this.color[8]
              }
            },
            'lineStyle': {
              'normal': {
                'color': this.color[8],
                'width': 2
              }
            },
            'data': [
                [50, 2, 35, 4, 30, 20, 40, 33, 28, 5, 27, 30, 40, 33, 28, 50, 27, 30]
            ]
          }, {
            'name': '保定',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: this.color[9]
              }
            },
            'lineStyle': {
              'normal': {
                'color': this.color[9],
                'width': 2
              }
            },
            'data': [
                [5, 20, 35, 4, 30, 20, 40, 33, 28, 5, 27, 30, 40, 33, 28, 50, 27, 30]
            ]
          }, {
            'name': '廊坊',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: 'red'
              }
            },
            'lineStyle': {
              'normal': {
                'color': 'red',
                'width': 2
              }
            },
            'data': [
                [50, 20, 35, 4, 30, 20, 40, 33, 28, 5, 27, 30, 40, 33, 28, 50, 27, 30]
            ]
          }, {
            'name': '承德',
            'type': 'radar',
            'symbol': 'circle',
            'symbolSize': 2,
            'itemStyle': {
              'normal': {
                color: 'blue'
              }
            },
            'lineStyle': {
              'normal': {
                'color': 'blue',
                'width': 2
              }
            },
            'data': [
                [50, 2, 35, 4, 30, 20, 40, 33, 28, 5, 27, 30, 4, 33, 28, 50, 27, 30]
            ]
          }]}
        )
        let matrixChart = this.$echarts.init(document.getElementById('matrixCharts'))
        // 散点数据
        let marksDatas = [
          {
            name: '保定市',
            value: [20, 68]
          },
          {
            name: '衡水市',
            value: [22, 55]
          },
          {
            name: '廊坊市',
            value: [22, 50]
          },
          {
            name: '石家庄市',
            value: [55, 68]
          },
          {
            name: '邯郸市',
            value: [65, 65]
          },
          {
            name: '唐山市',
            value: [50, 65]
          },
          {
            name: '邢台市',
            value: [45, 55]
          },
          {
            name: '沧州市',
            value: [50, 50]
          },
          {
            name: '沧州市',
            value: [45, 33]
          },
          {
            name: '廊坊市',
            value: [55, 28]
          },
          {
            name: '秦皇岛市',
            value: [30, 30]
          },
          {
            name: '张家口市',
            value: [30, 25]
          },
          {
            name: '唐山市',
            value: [25, 20]
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
          },
          yAxis: {
          },
          series: [{
            type: 'scatter',
            data: marksDatas,
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
                  name: '',
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
                  name: '',
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
                  name: '',
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
                  name: '',
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
  #legalChart{
    width: 100%;
    height: 430px;
  }
  #matrixCharts{
    width: 100%;
    height: 430px;
  }
</style>
