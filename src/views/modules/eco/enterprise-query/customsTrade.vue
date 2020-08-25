<template>
<div class="wrap">
   <div class="titles">
      <div class="left">
          <span class="content">进出口总额</span>
      </div>
   </div>
   <div class="echartsWrap">
     <div id="myChart"> </div>
   </div>
   <div class="titles" style="margin-top:10px;box-sizing:border-box">
      <div class="left">
          <span class="content">进出口产品</span>
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
   <div class="goName">
     <span style="font-size:20px">出口产品</span>
   </div>
   <div class="tablewrap">
     <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="type" label="产品" > </el-table-column>
            <el-table-column prop="time" label="时间" > </el-table-column>
            <el-table-column prop="contry" label="出口国别" > </el-table-column>
            <el-table-column prop="num" label="出口数量" > </el-table-column>
            <el-table-column prop="money" label="出口总额" > </el-table-column>
        </el-table>
   </div>
   <div class="goNames">
     <span style="font-size:20px">进口产品</span>
   </div>
   <div class="tablewrap">
     <el-table :data="tableDatas" border style="width: 100%">
            <el-table-column prop="type" label="产品" > </el-table-column>
            <el-table-column prop="time" label="时间" > </el-table-column>
            <el-table-column prop="contry" label="进口国别" > </el-table-column>
            <el-table-column prop="num" label="进口数量" > </el-table-column>
            <el-table-column prop="money" label="进口总额" > </el-table-column>
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
          type: '手机',
          time: '2016年',
          contry: '韩国',
          num: '143934.05',
          money: '12143934.05'
        },
        {
          type: '智能电视',
          time: '2019年',
          contry: '印度',
          num: '143934.05',
          money: '12143934.05'
        },
        {
          type: '智能音箱',
          time: '2020年',
          contry: '巴西',
          num: '143934.05',
          money: '12143934.05'
        }],
        tableDatas: [{
          type: 'Axier摄像头',
          time: '2016年',
          contry: '日本',
          num: '143934.05',
          money: '12143934.05'
        },
        {
          type: '高清手机屏',
          time: '2019年',
          contry: '日本',
          num: '143934.05',
          money: '12143934.05'
        },
        {
          type: '高端传感器',
          time: '2020年',
          contry: '德国',
          num: '143934.05',
          money: '12143934.05'
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
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['出口额', '进口额']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
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
              boundaryGap: false,
              data: ['201602', '201604', '201606', '201608', '201610', '201612', '201702']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '出口额',
              type: 'line',
              stack: '总量',
              itemStyle: {
                normal: {
                  color: '#8cd5c2', // 改变折线点的颜色
                  lineStyle: {
                    color: '#8cd5c2' // 改变折线颜色
                  }
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '进口额',
              type: 'line',
              stack: '总量',
              itemStyle: {
                normal: {
                  color: 'steelblue', // 改变折线点的颜色
                  lineStyle: {
                    color: 'steelblue' // 改变折线颜色
                  }
                }
              },
              data: [220, 182, 191, 234, 290, 330, 310]
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
  .goName{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
  }
  .goNames{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px 20px 0 20px;
    box-sizing: border-box;
  }
</style>
