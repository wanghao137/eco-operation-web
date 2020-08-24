<template>
<!--企业生存路径-->
  <div class="wrap">
      <div class="title">
        <span class="content">企业活跃度分析</span>
      </div>
      <div class="echartWrap">
         <div class="echartsTop">
           <div class="topleft">
             <div id="myChartone"> </div>
           </div>
           <div class="topcenter">
             <div id="myChartwo"> </div>
           </div>
           <div class="topright">
             <div id="myCharth"> </div>
           </div>
         </div>
         <div class="echartsTop">
           <div class="topleft">
             <div id="myChartthree"> </div>
           </div>
           <div class="topcenter">
             <div id="myCharfour"> </div>
           </div>
           <div class="topright">
             <div id="myCharfive"> </div>
           </div>
         </div>
      </div>
      <div class="moneyWrap">
        <div class="wrapTop">
          <span class="content">企业活跃度与经济增长分析</span>
        </div>
        <div class="wrapbottom">
          <div class="botLeft">
             <div id="myChartsix"></div>
          </div>
          <div class="botRight">
            <div class="botTop">
                <p>区域企业活跃指数EAI和GDP增长指数存在协整关系</p>
                <p>具有时差相关性</p>
                <p>相关系数：0.82</p>
                <p>近期EAI：同比增长-5%，环比增长2%持续走低，预示经济放缓。</p>
            </div>
            <div class="botBottom">
              <div class="botTitle">
                 <span>选择时间段</span>
              </div>
              <div class="botChoose">
                <el-slider v-model="value1"></el-slider>
              </div>
            </div>
          </div>
        </div>
        <div class="zhexianWrap">
          <div class="zhexianLeft">
            <div id="myChartSeven"></div>
          </div>
          <div class="zhexianCenter">
            <div id="myChartEight"></div>
          </div>
          <div class="zhexianRight">
            <div id="myChartNine"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'enterprise-survival',
    data () {
      return {
        value1: 2019
      }
    },
    mounted () {
      this.drawLine()
  },
    methods: {
      formatTooltip (val) {
        return val / 100
      },
      drawLine () {
       // 基于准备好的dom，初始化echarts实例
        let myChartone = this.$echarts.init(document.getElementById('myChartone'))
        myChartone.setOption({
          title: {
            text: '活跃企业占比',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['一般活跃', '非常活跃', '僵尸企业']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                              {value: 335, name: '一般活跃'},
                              {value: 310, name: '非常活跃'},
                              {value: 135, name: '僵尸企业'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
        let myChartwo = this.$echarts.init(document.getElementById('myChartwo'))
        myChartwo.setOption({
          color: ['steelblue'],
          title: {
            text: '非常活跃企业区域分布',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
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
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['地市1', '地市2', '地市3', '地市4', '地市5', '地市6']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              barWidth: '40%',
              data: [18203, 23489, 29034, 104970, 131744, 630230]
            }
          ]
        })
        let myCharth = this.$echarts.init(document.getElementById('myCharth'))
        myCharth.setOption({
          title: {
            text: '产业行业',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
                // legend: {
                //     orient: 'vertical',
                //     left: 'left',
                //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                // },
          series: [
            {
              name: '产业行业',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                            {value: 335, name: '一产'},
                            {value: 310, name: '二产'},
                            {value: 234, name: '三产'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
        let myChartthree = this.$echarts.init(document.getElementById('myChartthree'))
        myChartthree.setOption({
          title: {
            text: '企业类型',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 10,
            data: ['私营', '外商投资', '内资(非私营)']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '16',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                            {value: 335, name: '私营'},
                            {value: 310, name: '外商投资'},
                            {value: 234, name: '内资(非私营)'}
              ]
            }
          ]
        })
        let myCharfour = this.$echarts.init(document.getElementById('myCharfour'))
        myCharfour.setOption({

          color: ['#3398DB'],
          title: {
            text: '企业规模',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
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
              data: ['0-500万', '500-2000万', '2000-5000万', '5000万-1亿', '1亿-10亿', '10亿以上'],
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
              name: '企业规模',
              type: 'bar',
              barWidth: '40%',
              data: [10, 52, 200, 334, 390, 330]
            }
          ]
        })
        let myCharfive = this.$echarts.init(document.getElementById('myCharfive'))
        myCharfive.setOption({
          color: ['steelblue'],
          title: {
            text: '企业年龄',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
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
              data: ['3年以下', '3-5年', '5-7年', '7-10年', '10年以上'],
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
              name: '企业年龄',
              type: 'bar',
              barWidth: '40%',
              data: [10, 52, 200, 334, 390]
            }
          ]
        })

        var colors = ['#5793f3', '#d14a61', '#675bba']
        let myChartsix = this.$echarts.init(document.getElementById('myChartsix'))
        myChartsix.setOption({
          color: colors,
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          title: {
            text: '区域企业活跃指数EAI和GDP增长指数',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          legend: {
            data: ['财政收入增长率', '资本活跃度(CRI)']
          },
          grid: {
            top: 70,
            bottom: 50
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[1]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return '财政收入增长率  ' + params.value +
                                            (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  }
                }
              },
              data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
            },
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[0]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return '资本活跃度  ' + params.value +
                                            (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  }
                }
              },
              data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '财政收入增长率',
              type: 'line',
              xAxisIndex: 1,
              smooth: true,
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name: '资本活跃度(CRI)',
              type: 'line',
              smooth: true,
              data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            }
          ]
        })

        let myChartSeven = this.$echarts.init(document.getElementById('myChartSeven'))
        myChartSeven.setOption({
          title: {
            text: 'EAI与投资增长速度',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2015', '2016', '2017', '2018', '2019', '2020']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        })

        let myChartEight = this.$echarts.init(document.getElementById('myChartEight'))
        myChartEight.setOption({
          title: {
            text: 'EAI与消费增长速度',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2015', '2016', '2017', '2018', '2019', '2020']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        })

        let myChartNine = this.$echarts.init(document.getElementById('myChartNine'))
        myChartNine.setOption({
          title: {
            text: 'EAI与进出口增长速度',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2015', '2016', '2017', '2018', '2019', '2020']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
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
  .title{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .content{
    font-weight: bold;
    font-size: 18px;
    color: steelblue;
  }
  .echartWrap{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .echartsTop{
    width: 100%;
    display: flex;
  }
  .topleft{
     flex: 1;
     padding: 20px;
     box-sizing: border-box;
  }
  .topcenter{
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }
  .topright{
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }
  #myChartone{
    width: 100%;
    height: 300px;
  }
  #myChartwo{
    width: 100%;
    height: 300px;
  }
  #myCharth{
    width: 100%;
    height: 300px;
  }
  #myChartthree{
    width: 100%;
    height: 300px;
  }
  #myCharfour{
    width: 100%;
    height: 300px;
  }
  #myCharfive{
    width: 100%;
    height: 300px;
  }
  .moneyWrap{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .wrapTop{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .wrapbottom{
    width: 100%;
    display: flex;
  }
  .botLeft{
    flex: 1;
  }
  .botRight{
    width: 30%;
    display: flex;
    flex-direction: column;
  }
  #myChartsix{
    width: 100%;
    height: 300px;
  }
  .botTop{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  .botBottom{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .botTitle{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
  .botChoose{
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
  }
  .zhexianWrap{
    width: 100%;
    display: flex;
  }
  .zhexianLeft{
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
  }
  .zhexianCenter{
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
  }
  .zhexianRight{
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
  }
  #myChartSeven{
    width: 100%;
    height: 300px;
  }
  #myChartEight{
    width: 100%;
    height: 300px;
  }
  #myChartNine{
    width: 100%;
    height: 300px;
  }
</style>
