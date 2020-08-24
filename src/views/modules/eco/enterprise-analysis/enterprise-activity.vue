<template>
<!--企业活跃度分析-->
  <div class="wrap">
     <div class="title">
        <span class="content">企业基本情况分析</span>
     </div>
     <div class="bntWrap">
          <el-button @click="cun">存量</el-button>
          <el-button style="margin-left:10px" @click="dong">动态</el-button>
     </div>
     <div class="cunWrap" v-show="show">
        <div class="cunTop">
          <div class="cunleft">
            <div id="myChartcunlls"> </div>
          </div>
          <div class="cunCenter">
            <div id="myCharts"> </div>
          </div>
          <div class="cunright">
            <div id="myChartTh"> </div>
          </div>
        </div>
        <div class="cunTop">
          <div class="cunleft">
            <div id="myChartfth"> </div>
          </div>
          <div class="cunCenter">
            <div id="myChartCom"> </div>
          </div>
          <div class="cunright">
            <div id="myChartcomAge"> </div>
          </div>
        </div>
        <div class="wran">
          <span>页面说明：企业存量数据截至2020年8月</span>
        </div>
     </div>
     <div class="cunWrap" v-show="shows">
        <div class="cunTop">
          <div class="cunleft">
            <div id="myChartwrap"> </div>
          </div>
          <div class="cunCenter">
            <div id="myChartages"> </div>
          </div>
          <div class="cunright">
            <div id="myChartThs"> </div>
          </div>
        </div>
        <div class="cunTop">
          <div class="cunleft">
            <div id="myChartfths"> </div>
          </div>
          <div class="cunCenter">
            <div id="myChartComs"> </div>
          </div>
          <div class="cunright">
            <div id="myChartcomAges"> </div>
          </div>
        </div>
        <div class="wran">
          <span>页面说明：企业动态数据为近半年内的动态特征</span>
        </div>
     </div>
  </div>
</template>


<script>
  export default {
    name: 'enterprise-activity',
    data () {
      return {
        show: true,
        shows: false
      }
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      cun () {
        this.show = true
        this.shows = false
      },
      dong () {
        this.show = false
        this.shows = true
      },
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartcunlls'))
        myChart.setOption({
           // 绘制图表
          // color: ['steelblue'],
          title: {
            text: '存量企业趋势',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: 'steelblue'
              }
            }
          },
          legend: {
            data: ['增幅', '存量企业']
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: {
            show: false,
            start: 0,
            end: 100
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var now = new Date()
                var res = []
                var len = 10
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''))
                  now = new Date(now - 2000)
                }
                return res
              })()
            },
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var res = []
                var len = 10
                while (len--) {
                  res.push(10 - len - 1)
                }
                return res
              })()
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              max: 30,
              min: 0,
              boundaryGap: [0.2, 0.2]
            },
            {
              type: 'value',
              scale: true,
              max: 1200,
              min: 0,
              boundaryGap: [0.2, 0.2]
            }
          ],
          series: [
            {
              name: '存量企业',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: (function () {
                var res = []
                var len = 10
                while (len--) {
                  res.push(Math.round(Math.random() * 1000))
                }
                return res
              })()
            },
            {
              name: '增幅',
              type: 'line',
              data: (function () {
                var res = []
                var len = 0
                while (len < 10) {
                  res.push((Math.random() * 10 + 5).toFixed(1) - 0)
                  len++
                }
                return res
              })()
            }
          ]
        })
        let myCharts = this.$echarts.init(document.getElementById('myCharts'))
        myCharts.setOption({
          color: ['steelblue'],
          title: {
            text: '存量企业区域分布',
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
            data: ['地市6', '地市5', '地市4', '地市3', '地市2', '地市1']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              barWidth: '40%',
              data: [200, 400, 500, 700, 800, 900]
            }
          ]
        })
        let myChartTh = this.$echarts.init(document.getElementById('myChartTh'))
        myChartTh.setOption({
          title: {
            text: '存量企业产业分布',
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
              name: '产业分布',
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
        let myChartfth = this.$echarts.init(document.getElementById('myChartfth'))
        myChartfth.setOption({
          title: {
            text: '存量企业类型分布',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
            // legend: {
            //     orient: 'vertical',
            //     left: 10,
            //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            // },
          series: [
            {
              name: '类型分布',
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
                {value: 335, name: '内资(非私营)'},
                {value: 310, name: '私营'},
                {value: 234, name: '外商投资'}
              ]
            }
          ]
        })
        let myChartCom = this.$echarts.init(document.getElementById('myChartCom'))
        myChartCom.setOption({
          color: ['#3398DB'],
          title: {
            text: '存量企业注册规模分布',
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
              data: ['0-500', '500-2000', '2000-5000', '5000-1亿', '1亿-10亿', '10亿以上'],
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
              name: '规模分布',
              type: 'bar',
              barWidth: '40%',
              data: [10, 52, 200, 334, 390, 330]
            }
          ]
        })
        let myChartcomAge = this.$echarts.init(document.getElementById('myChartcomAge'))
        myChartcomAge.setOption({
          color: ['#3398DB'],
          title: {
            text: '存量企业年龄分布',
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
              data: ['3年以下', '3-5年', '5-7年', '7-10年', '10年及以上'],
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
              name: '年龄分布',
              type: 'bar',
              barWidth: '40%',
              data: [10, 52, 200, 334, 390]
            }
          ]
        })

        let myChartwrap = this.$echarts.init(document.getElementById('myChartwrap'))
        myChartwrap.setOption({
          title: {
            text: '新增,注吊销企业数量',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
            // legend: {
            //     data: ['邮件营销', '联盟广告']
            // },
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '新增企业',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230]
            },
            {
              name: '注吊销企业',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330]
            }
          ]
        })
        let myChartages = this.$echarts.init(document.getElementById('myChartages'))
        myChartages.setOption({
          color: ['steelblue'],
          title: {
            text: '新增企业区域分布',
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
            data: ['地市6', '地市5', '地市4', '地市3', '地市2', '地市1']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              barWidth: '40%',
              data: [200, 400, 500, 700, 800, 900]
            }
          ]
        })
        let myChartThs = this.$echarts.init(document.getElementById('myChartThs'))
        myChartThs.setOption({
          title: {
            text: '新增企业产业分布',
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
              name: '产业分布',
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
        let myChartfths = this.$echarts.init(document.getElementById('myChartfths'))
        myChartfths.setOption({
          title: {
            text: '新增企业类型分布',
            left: 'center',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
            // legend: {
            //     orient: 'vertical',
            //     left: 10,
            //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            // },
          series: [
            {
              name: '类型分布',
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
                {value: 335, name: '内资(非私营)'},
                {value: 310, name: '私营'},
                {value: 234, name: '外商投资'}
              ]
            }
          ]
        })
        let myChartComs = this.$echarts.init(document.getElementById('myChartComs'))
        myChartComs.setOption({
          color: ['#3398DB'],
          title: {
            text: '新增企业规模分布',
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
              data: ['0-500', '500-2000', '2000-5000', '5000-1亿', '1亿-10亿', '10亿以上'],
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
              name: '规模分布',
              type: 'bar',
              barWidth: '40%',
              data: [10, 52, 200, 334, 390, 330]
            }
          ]
        })
        let myChartcomAges = this.$echarts.init(document.getElementById('myChartcomAges'))
        myChartcomAges.setOption({
          color: ['#3398DB'],
          title: {
            text: '新增企业年龄分布',
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
              data: ['3年以下', '3-5年', '5-7年', '7-10年', '10年及以上'],
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
              name: '年龄分布',
              type: 'bar',
              barWidth: '40%',
              data: [10, 52, 200, 334, 390]
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
  .bntWrap{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .cunWrap{
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
  }
  .dongWrap{
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
  }
  .cunTop{
    width: 100%;
    display: flex;
  }
  .cunleft{
    flex: 1;
    padding: 20px;
    display: flex;
    box-sizing: border-box;
  }
  .cunCenter{
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }
  .cunright{
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }
   #myChartcunlls{
    width: 100%;
    height: 300px;
  }
  #myCharts{
    width: 100%;
    height: 300px;
  }
  #myChartTh{
    width: 100%;
    height: 300px;
  }
  #myChartfth{
    width: 100%;
    height: 300px;
  }
  #myChartCom{
    width: 100%;
    height: 300px;
  }
  #myChartcomAge{
    width: 100%;
    height: 300px;
  }
  .wran{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .dongTop{
    width: 100%;
    background: slateblue;
    display: flex;
  }
  .dongleft{
    flex: 1;
  }
  .dongcenter{
    flex: 1;
  }
  .dongright{
    flex: 1;
  }
  #myChartwrap{
    width: 350px;
    height: 300px;
  }
  #myChartages{
    width: 350px;
    height: 300px;
  }
  #myChartThs{
    width: 350px;
    height: 300px;
  }
  #myChartfths{
    width: 350px;
    height: 300px;
  }
  #myChartComs{
    width: 350px;
    height: 300px;
  }
  #myChartcomAges{
    width: 350px;
    height: 300px;
  }
</style>
