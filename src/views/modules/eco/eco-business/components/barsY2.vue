<template>
  <div id="myCharts4" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
export default {
  name: 'barY',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  created () {
    console.log(this.yAxis)
  },
  props: ['yAxis', 'series', 'color'],
  watch: {
    yAxis (val) {
      this.drawLine()
    }
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myCharts4'))
      // 绘制图表
      myChart.setOption({
        color: this.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.yAxis,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: '60%',
            data: this.series,
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  position: 'top', // 在上方显示
                  textStyle: {
                    // 数值样式
                    color: 'black',
                    fontSize: 12
                  }
                }
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
#myCharts4 {
  margin-top: -30px;
}
</style>
