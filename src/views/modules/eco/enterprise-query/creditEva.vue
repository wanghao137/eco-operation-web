<template>
  <div>
    <div class="talent-title">
      <span>综合评估</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        25
      </el-button>
    </div>
    <div class="main mainMid">
      <div class="left">
        <dl>
          <i class="el-icon-s-data"></i>
          <dd>综合信用等级</dd>
          <dt>BBB</dt>
        </dl>
        <dl>
          <i class="el-icon-data-line"></i>
          <dd>信用评价</dd>
          <dt>中等风险</dt>
        </dl>
        <dl>
          <i class="el-icon-star-off"></i>
          <dd>综合信用评分</dd>
          <dt>619</dt>
        </dl>
      </div>
      <div class="right">
        <div id="myChart" style="width:350px;height:220px;"></div>
      </div>
    </div>
    <div class="talent-title">
      <span>KPI评价</span>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="自身特征(80)">
        <div class="infor-table">
          <table border="0" background="white" bgcolor="white">
            <tbody>
            <tr>
              <td class="th">
                <b>成立日期</b>
              </td>
              <td style="width: 40%">
                <span>2010-03-03</span>
              </td>
              <td style="width: 40%">
                <span>成立五年，成熟企业</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>注册地址</b>
              </td>
              <td>
                <span>北京市海淀区河清街68号</span>
              </td>
              <td>
                <span>中关村软件园</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>注册资本</b>
              </td>
              <td>
                <span>185000万人民币</span>
              </td>
              <td>
                <span>规模较大</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>员工规模</b>
              </td>
              <td>
                <span>1000人以上</span>
              </td>
              <td>
                <span>规模较大</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>行业</b>
              </td>
              <td>
                <span>科学研究和技术服务业</span>
              </td>
              <td>
                <span>高新技术行业</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>企业类型</b>
              </td>
              <td>
                <span>有限责任公司</span>
              </td>
              <td>
                <span></span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>大股东</b>
              </td>
              <td>
                <span>雷军</span>
              </td>
              <td>
                <span>资本注资</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>经营范围</b>
              </td>
              <td>
                <span>手机技术开发；手机生产，手机服务；销售通讯设备；维修仪器仪表；维修办公设备；筹备，策划，组织大型庆典；设计，制作，代理，发布广告。</span>
              </td>
              <td>
                <span>互联网，人工智能，技术开发</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="创新资质(90)">
        <div class="infor-table">
          <table border="0" background="white" bgcolor="white">
            <tbody>
            <tr>
              <td class="th">
                <b>专利</b>
              </td>
              <td style="width: 20%">
                <span>9339</span>
              </td>
              <td style="width: 60%">
                <span>图像处理，生物识别，移动终端</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>软件著作权</b>
              </td>
              <td style="width: 20%">
                <span>22</span>
              </td>
              <td style="width: 60%">
                <span></span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>作品著作权</b>
              </td>
              <td style="width: 20%">
                <span>44</span>
              </td>
              <td style="width: 60%">
                <span></span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>资质证书</b>
              </td>
              <td>
                <span>237</span>
              </td>
              <td>
                <span></span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>政府评级</b>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span></span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>产品技术</b>
              </td>
              <td>
                <span>567</span>
              </td>
              <td>
                <span>高科技产品，中国制造，先进技术</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>人才需求</b>
              </td>
              <td>
                <span>132</span>
              </td>
              <td>
                <span>本科，5年以上，研发，技术开发</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="经营状态(60)">
        <div class="infor-table">
          <table border="0" background="white" bgcolor="white">
            <tbody>
            <tr>
              <td class="th">
                <b>招投标</b>
              </td>
              <td style="width: 20%">
                <span>186</span>

              </td>
              <td style="width: 60%">
                <span></span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>购地信息</b>
              </td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span></span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>进出口</b>
              </td>
              <td>
                <span>
                </span>
              </td>
              <td>
                <span>
                </span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>产品</b>
              </td>
              <td>
                <span></span>
              </td>
              <td>
                <span></span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="发展潜力(85)">
        <div class="infor-table">
          <table border="0" background="white" bgcolor="white">
            <tbody>
            <tr>
              <td class="th">
                <b>享受政府扶持补贴</b>
              </td>
              <td style="width: 20%">
                <span>3</span>
              </td>
              <td style="width: 60%">
                <span>高新技术产业补贴</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>融资能力</b>
              </td>
              <td>
                <a style="cursor: pointer" @click="rongziClick()">9</a>
              </td>
              <td>
                <span>融资轮次，估值，投资方</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>投资情况</b>
              </td>
              <td>
                <a style="cursor: pointer" @click="handleClick()">56</a>
              </td>
              <td>
                <span>投资行业，投资次数，投资总额，投资比例
                </span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>招聘情况</b>
              </td>
              <td>
                <span>23</span>
              </td>
              <td>
                <span>近期招聘频次和人数</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="财务能力(82)">
        <div id="financeChart" style="width:500px;height:350px;"></div>
      </el-tab-pane>
      <el-tab-pane label="守法合规(70)">
        <div class="infor-table">
          <table border="0" background="white" bgcolor="white">
            <tbody>
            <tr>
              <td class="th">
                <b>严重违法记录</b>
              </td>
              <td style="width: 20%">
                <span></span>
              </td>
              <td style="width: 60%">
                <span>正常</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>失信人名单</b>
              </td>
              <td>
                <span></span>
              </td>
              <td>
                <span>正常</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>异常经营名录</b>
              </td>
              <td>
                <span></span>
              </td>
              <td>
                <span>正常</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>欠税名单</b>
              </td>
              <td>
                <span></span>
              </td>
              <td>
                <span>正常</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>行政处罚记录</b>
              </td>
              <td>
                <span>6</span>
              </td>
              <td>
                <span>低风险</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>12315投诉预警</b>
              </td>
              <td>
                <span>13</span>
              </td>
              <td>
                <span>低风险</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>法院诉讼预警</b>
              </td>
              <td>
                <span>25</span>
              </td>
              <td>
                <span>低风险</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>异动风险</b>
              </td>
              <td>
                <span>56</span>
              </td>
              <td>
                <span>低风险</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>股权变动风险</b>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>低风险</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>破产风险</b>
              </td>
              <td>
                <span></span>
              </td>
              <td>
                <span>正常</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>非法集资风险</b>
              </td>
              <td>
                <span></span>
              </td>
              <td>
                <span>正常</span>
              </td>
            </tr>
            <tr>
              <td class="th">
                <b>负面舆情风险</b>
              </td>
              <td>
                <span></span>
              </td>
              <td>
                <span>正常</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {
      this.drawLine()
      this.financeLine()
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#666'
              }
            },
            indicator: [
              { name: '身份特征', max: 6500 },
              { name: '守法守规', max: 16000 },
              { name: '发展潜力', max: 30000 },
              { name: '经营状态', max: 38000 },
              { name: '行为偏好', max: 52000 },
              { name: '创新资质', max: 25000 }
            ]
          },
          series: [
            {
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              // areaStyle: {normal: {}},
              data: [
                {
                  value: [4300, 10000, 28000, 35000, 50000, 19000],
                  lineStyle: {
                    color: 'rgba(81, 141, 213, 0.7)'
                  },
                  areaStyle: {
                    normal: {
                      color: 'rgba(81, 141, 213, 0.7)' // 选择区域颜色
                    }
                  }
                }
              ]
            }
          ]
        })
      },
      financeLine () {
        var totalCost = [100, 100, 100, 100, 100, 100] // 背景色比例
        var visits = [27.00, 92.00, 10.00, 3.00, 67.00, 86.00] // 数值
        var barcolor = ['#F0A936', '#24AD97', '#C85544', '#C85544', '#F0A936', '#24AD97']
        var grade = ['资产负债率', '资产总额', '利润增长率', '利润', '收入增长率', '收入']
        var data = {
          grade: grade,
          totalCost: totalCost,
          visits: visits
        }
        let myChart = this.$echarts.init(document.getElementById('financeChart'))
        myChart.setOption({
          grid: {
            top: '5%',
            left: '30%',
            right: '20%',
            bottom: '5%'
          },
          tooltip: {
            show: true
          },
          xAxis: {
            show: false
          },
          yAxis: [{
            type: 'category',

            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                align: 'right',
                fontSize: 14
              }
            },
            data: data.grade
          }, {
            type: 'category',

            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                fontSize: 14,
                color: 'black'
              },
              formatter: function (data, index) {
                return data + '.00'
              }
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: data.visits
          } ],
          series: [{
            type: 'bar',
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                show: true,
                color: '#F9F9F9',
                borderWidth: 0,
                borderColor: '#F9F9F9'
              }
            },
            barWidth: '35%',
            silent: true,
            data: data.totalCost
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: function (params) {
                  var num = barcolor.length
                  return barcolor[params.dataIndex % num]
                },
                borderWidth: 0,
                borderColor: '#F9F9F9'
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            barWidth: '35%',
            data: data.visits
          }
          ]
        })
      },
      handleClick () {
        this.$router.push(
        {path: '/enterprise-query/panoramic-inf?activeName=panImages'}
        )
      },
      rongziClick () {
        this.$router.push(
          {path: '/enterprise-query/panoramic-inf?activeName=riskLevel'}
        )
      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .talent-title{
    margin-bottom: 15px;
    border-left: 3px solid #3E8EF7;
  }
  .talent-title span {
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
  }
  .left {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .left dl {
    flex: 1;
    text-align: center;
  }
  .left dl dt {
    color: #60ac3a;
    margin-top: 10px;
  }
  .left dl dd {
    margin-top: 10px;
  }
  .left i{
    font-size: 30px;
    color: #BBBBBB;
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mainMid {
    display: flex;
  }
  .infor-table{
    width: 100%;
    display: flex;
  }
  .th {
    text-align: center;
  }
  table {
    width: 100%;
  }
  td,
  th {
    border: 1px #e8e8e8 solid;
    padding: 10px 15px;
    box-sizing: border-box;
    color: #4b5d6c;
    /*width: 300px;*/
  }
  .el-collapse{
    border-top: 2px solid #3E8EF7;
  }
  .row-title{
    line-height: 60px;
    color: #3E8EF7;
  }
</style>
