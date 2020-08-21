<template>
  <div id="myChart2" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
export default {
  name: "bar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine();
  },
  created() {
    console.log(this.yAxis);
  },
  props: ["yAxis", "series", "color"],
  watch: {
    yAxis(val) {
      this.drawLine();
    },
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart.setOption({
        color: this.color,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.yAxis,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: "60%",
            data: this.series,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
#myChart2 {
  margin-top: -30px;
}
</style>