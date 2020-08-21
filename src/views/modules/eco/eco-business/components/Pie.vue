<template>
  <div id="myChart5" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
export default {
  name: "barY",
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
      let myChart = this.$echarts.init(document.getElementById("myChart5"));
      // 绘制图表
      myChart.setOption({
        color:this.color,
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: this.yAxis,
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.series,
          },
        ],
      });
    },
  },
};
</script>