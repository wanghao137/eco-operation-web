<template>
<div class="wrap">
   <div class="titles">
      <div class="left">
          <span class="content">税费总额</span>
      </div>
   </div>
   <div class="echartsWrap">
     <div id="myChart"> </div>
   </div>
   <div class="titles" style="margin-top:10px;box-sizing:border-box">
      <div class="left">
          <span class="content">分税总缴费</span>
      </div>
      <div class="right">
        <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
      </div>
   </div>
   <div class="tablewrap">
     <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="type" label="税种" > </el-table-column>
            <el-table-column prop="time" label="税款所属时间" > </el-table-column>
            <el-table-column prop="num" label="税款总额" > </el-table-column>
        </el-table>
   </div>
</div>
</template>

<script>
  export default {
    name: 'corReports',
    data () {
      return {
        options: [{
          value: '选项1',
          label: '2015年'
        }, {
          value: '选项2',
          label: '2016年'
        }, {
          value: '选项3',
          label: '2017年'
        }, {
          value: '选项4',
          label: '2018年'
        }, {
          value: '选项5',
          label: '2019年'
        }],
        value: '2019年',
        tableData: [{
          type: '增值税',
          time: '2018年',
          num: '18725.357'
        }, {
          type: '企业所得税',
          time: '2019年',
          num: '3718.4963'
        }, {
          type: '契税',
          time: '2020年',
          num: '143934.05'
        }, {
          type: '个人所得税',
          time: '2021年',
          num: '18623.1'
        }]
      }
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({ // 绘制图表
          color: ['steelblue'],
          title: {text: '年度缴税(费)总额',
            left: 'center',
            textStyle: {
                  // 文字颜色
              color: '#666',
                  // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
              fontWeight: 'normal',
                  // 字体大小
              fontSize: 17
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
              data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
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
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330]
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
    display: flex;
    flex-direction: column;
  }
  .titles{
    width: 100%;
    display: flex;
    border-left: 3px solid #3E8EF7;
  }
  .left{
     flex: 1;
     display: flex;
     align-items: center;
  }
  .content{
    font-size: 20px;
    padding-left: 10px;
  }
  .echartsWrap{
    width: 100%;
    display: flex;
    padding-top: 10px;
    box-sizing: border-box;
  }
  #myChart{
    width: 100%;
    height: 300px;
  }
  .right{
    width: 85%;
    display: flex;
    align-items: center;
  }
  .tablewrap{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
