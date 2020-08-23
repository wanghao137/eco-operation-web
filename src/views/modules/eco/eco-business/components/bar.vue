<template>
  <div id="myChart-bar" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
export default {
  name: 'hello',
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
      const _this = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart-bar'))
      // 绘制图表
      myChart.setOption({
        color: this.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          show: false,
          type: 'value',
          boundaryGap: [0, 0.01],
          axisTick: { show: false },
          splitLine: { show: false }
        },
        yAxis: {
          type: 'category',
          data: this.yAxis,
          axisTick: { show: false },
          splitLine: { show: false }
        },
        series: [
          {
            type: 'bar',
            data: this.series,
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  position: 'right', // 在上方显示
                  textStyle: {
                    // 数值样式
                    color: 'black',
                    fontSize: 16
                  }
                }
              }
            }
          }
        ]
      },
        myChart.on('click', function (params) {
          _this.$emit('code', params.name)
        }))
    }
  }
}
</script>
