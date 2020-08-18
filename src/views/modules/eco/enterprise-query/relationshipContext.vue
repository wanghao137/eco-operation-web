<template>
  <div>
    <div class="talent-title">
      <span>关系脉络</span>
    </div>
    <div class="echartsWrap">
      <div id="myChart"> </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [{
          name: '小米科技有限责任公司',
          draggable: true
        }, {
          name: '雷军',
          category: 1,
          draggable: true
        }, {
          name: '黎万强',
          category: 1,
          draggable: true
        }, {
          name: '刘芹',
          category: 1,
          draggable: true
        }, {
          name: '刘德',
          category: 1,
          draggable: true
        }, {
          name: '李斌',
          category: 1,
          draggable: true
        }, {
          name: '北京创派力量科技有限公司',
          category: 1,
          draggable: true
        }, {
          name: '江苏紫米电子科技有限公司',
          category: 1,
          draggable: true
        }, {
          name: '北京聚爱聊科技有限公司',
          category: 1,
          draggable: true
        }, {
          name: '湖北小米长江产业基金有限公司',
          category: 1,
          draggable: true
        }, {
          name: '重庆小米创业投资有限公司',
          category: 1,
          draggable: true
        }, {
          name: '天津金星创业投资有限公司',
          category: 1,
          draggable: true
        }, {
          name: '洪峰',
          category: 1,
          draggable: true
        }],
        links: [{
          source: 0,
          target: 1,
          category: 0,
          value: '董事'
        }, {
          source: 0,
          target: 2,
          value: '投资'
        }, {
          source: 0,
          target: 3,
          value: '投资'
        }, {
          source: 0,
          target: 4,
          value: '投资'
        }, {
          source: 1,
          target: 2,
          value: '投资'
        }, {
          source: 0,
          target: 5,
          value: '投资'
        }, {
          source: 4,
          target: 5,
          value: '投资'
        }, {
          source: 2,
          target: 8,
          value: '投资'
        }, {
          source: 0,
          target: 12,
          value: '投资'
        }, {
          source: 6,
          target: 11,
          value: '投资'
        }, {
          source: 6,
          target: 3,
          value: '投资'
        }, {
          source: 7,
          target: 5,
          value: '投资'
        }, {
          source: 9,
          target: 10,
          value: '投资'
        }, {
          source: 3,
          target: 10,
          value: '投资'
        }, {
          source: 2,
          target: 11,
          value: '投资'
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
// 指定图表的配置项和数据
        let option = {
          title: {
            text: ''
          },
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 12
              }
            }
          },
          legend: {
            x: 'center',
            show: false,
            data: ['包含', '包含', '包含']
          },
          series: [
            {
              type: 'graph',
              layout: 'force',
              symbolSize: 45,
              focusNodeAdjacency: true,
              roam: true,
              categories: [{
                name: 'per',
                itemStyle: {
                  normal: {
                    color: '#009800'
                  }
                }
              }, {
                name: 'loc',
                itemStyle: {
                  normal: {
                    color: '#4592FF'
                  }
                }
              }, {
                name: 'org',
                itemStyle: {
                  normal: {
                    color: '#ff232b'
                  }
                }
              }, {
                name: 'time',
                itemStyle: {
                  normal: {
                    color: '#e6dd1c'
                  }
                }
              }, {
                name: 'body',
                itemStyle: {
                  normal: {
                  color: '#c489e6'
                }
                }
              }, {
                name: 'sigos',
                itemStyle: {
                normal: {
                    color: '#a0e6a5'
                  }
              }
              }, {
              name: 'check',
              itemStyle: {
                  normal: {
                    color: '#e6bfac'
                  }
                }
            }, {
                name: 'disease',
                itemStyle: {
                  normal: {
                    color: '#859f89'
                  }
                }
              }, {
                name: 'treatmeot',
                itemStyle: {
                  normal: {
                    color: '#686767'
                  }
                }
              }],
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 12
                  }
                }
              },
              force: {
                repulsion: 1000
              },
              edgeSymbolSize: [4, 50],
              edgeLabel: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 10
                  },
                  formatter: '{c}'
                }
              },
              data: this.data,
              links: this.links,
              // links: [{
              //   source: 0,
              //   target: 1,
              //   category: 0,
              //   value: '包含'
              //  },
              // ],
              lineStyle: {
                normal: {
                  opacity: 0.9,
                  width: 1,
                  curveness: 0,
                  color: '#504a48'
                }
              }
            }
          ]
        }
      // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>
  .talent-title{
    margin-bottom: 15px;
    border-left: 3px solid #3E8EF7;
  }
  .talent-title span {
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
  }
  .el-collapse{
    border-top: 2px solid #3E8EF7;
  }
  .row-title{
    line-height: 30px;
    color: #3E8EF7;
  }
  .row-num{
    line-height: 20px;
    font-size: 12px;
  }
  #myChart{
    width: 100%;
    height: 500px;
  }
</style>
