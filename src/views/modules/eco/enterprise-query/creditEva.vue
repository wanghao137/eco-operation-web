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
              <td style="width: 300px" class="th">
                <b>专利</b>
              </td>
              <td colspan="3">
                <span>一种接入小区的方法及装置，菜单显示方法及装置，来电响应方法及装置，人脸图像验证方法和装置，
                  异常信息获取方法及装置，确定用户设备控制权限的方法、装置及终端设备，处理图像的方法及装置，电路设计方法和装置，一种升级方法、装置及设备，图像识别处理方法和装置
                </span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>软件,作品著作权</b>
              </td>
              <td colspan="3">
                <span>全民省钱购软件，航路起源游戏软件，黄金航线游戏软件，无尽之海游戏软件，POCO桌面软件，小米幸运万年历软件，小米FM」互联网音频播放软件，
                  小米视频极速版」互联网视频播放软件，小米移动网上营业厅软件（Android版），小米蓝牙耳机AirDots 系列包装设计，小米智能遥控车，米家自动泡沫洗洁精套装
                </span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>资质证书</b>
              </td>
              <td>
                <span>质量管理体系认证（ISO9000），互联网药品信息，其他自愿性工业产品认证，食品经营许可证，无线电，CCC强制性产品查询，进网许可证，核发进网许可证书
                </span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>政府评级</b>
              </td>
              <td>
                <span>一般企业</span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>产品技术</b>
              </td>
              <td colspan="3">
                <span>手机技术开发；手机生产，手机服务；销售通讯设备；维修仪器仪表；维修办公设备；筹备，策划，组织大型庆典；设计，制作，代理，发布广告。</span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>人力资源</b>
              </td>
              <td colspan="3">
                <span>招聘经理，人工智能小爱-短视频策划运营，小爱产品经理，小爱产品经理，米家店铺员工，招聘经理，武汉HRBP，linux嵌入式软件工程师，财务BP，网格主管</span>
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
              <td style="width: 300px" class="th">
                <b>招投标</b>
              </td>
              <td colspan="3">
                <span>林芝市公安局林芝市人民警察训练基地维修改造项目监控及门禁系统采购项目（一标段、二标段）中标公告，
                  九江市人众招投标咨询有限公司关于九江学院外录实验室设备更新项目（招标编号：JJRZ2020JT-104）竞争性谈判结果公示，
                  泾源县大湾乡教育委员会泾源县大湾乡学区中心校专用设备政府采购项目公开方式招标中标公示，
                  宁乡市数据资源中心宁乡智慧教育新高考综合服务平台建设合同公告
                </span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>购地信息</b>
              </td>
              <td colspan="3">
                <span>海淀区安宁庄(科教用地)
                </span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>进出口</b>
              </td>
              <td>
                <span>京中关村(进出口收发货人)
                </span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>产品</b>
              </td>
              <td>
                <span>手机技术开发；手机生产，手机服务；销售通讯设备；维修仪器仪表；维修办公设备；筹备，策划，组织大型庆典；设计，制作，代理，发布广告。</span>
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
              <td style="width: 300px" class="th">
                <b>享受政府扶持补贴</b>
              </td>
              <td colspan="3">
                <span>林芝市公安局林芝市人民警察训练基地维修改造项目监控及门禁系统采购项目（一标段、二标段）中标公告，
                  九江市人众招投标咨询有限公司关于九江学院外录实验室设备更新项目（招标编号：JJRZ2020JT-104）竞争性谈判结果公示，
                  泾源县大湾乡教育委员会泾源县大湾乡学区中心校专用设备政府采购项目公开方式招标中标公示，
                  宁乡市数据资源中心宁乡智慧教育新高考综合服务平台建设合同公告
                </span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>融资能力</b>
              </td>
              <td colspan="3">
                <span>A轮——最后支付代价日期2011年5月17日，融得资金1025万美元，投资方：创始团队、晨兴资本、启明创投，
                  B轮——最后支付代价日期2010年12月24日，融得资金2750万美元，B轮投资方分别为：晨兴资本、启明创投、IDG，
                  C轮——最后支付代价日期2011年9月30日，融得资金8800万美元，投资方未公布，
                  D轮——最后支付代价日期2012年6月22日，融得资金2.16亿美元，投资方未公布
                </span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>投资情况</b>
              </td>
              <td>
                <span>天津金星创业投资有限公司，重庆小米创业投资有限公司，重庆小米商业保理有限公司，北京聚爱聊网络科技有限公司，深圳英鹏信息技术股份有限公司，
                  湖北小米长江产业基金合伙企业（有限合伙），北京创派力量科技有限公司
                </span>
              </td>
            </tr>
            <tr>
              <td style="width: 300px" class="th">
                <b>招聘情况</b>
              </td>
              <td>
                <span>招聘经理，人工智能小爱-短视频策划运营，小爱产品经理，小爱产品经理，米家店铺员工，招聘经理，武汉HRBP，linux嵌入式软件工程师，财务BP，网格主管</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="财务能力(82)">
<!--        <div id="myChart" style="width:350px;height:220px;"></div>-->
      </el-tab-pane>
      <el-tab-pane label="守法合规(70)">
        <div class="talent-title">
          <span>经营异常</span>
          <el-button
            style="font-size: 10px;padding: 2px 4px"
            size="mini"
            type="danger"
            plain>
            高风险信息
          </el-button>
        </div>
        <el-collapse accordion>
          <el-collapse-item v-for="(item, index) in collapseList" :key="index" :name="index">
            <template slot="title">
              <el-col>
                <el-row class="row-title">{{item.title}}</el-row>
              </el-col>
            </template>
            <el-table
              :data="tableData"
              stripe
              border
              size="small"
            >
              <el-table-column
                prop="code"
                label="序号"
                header-align="center"
                align="center"
                width="100">
              </el-table-column>
              <el-table-column
                prop="date"
                label="列入日期"
                header-align="center"
                align="center"
                width="150">
              </el-table-column>
              <el-table-column
                prop="yuanyin"
                header-align="center"
                align="left"
                label="列入经营异常名录原因"
                width="">
              </el-table-column>
              <el-table-column
                prop="jiguan"
                header-align="center"
                align="left"
                label="作出决定机关"
                width="">
              </el-table-column>
              <el-table-column
                prop="yichudate"
                header-align="center"
                align="center"
                label="移出日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="yichuyuanyin"
                header-align="center"
                align="left"
                label="移出经营异常名录原因"
                width="">
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
        <div style="margin-top: 10px" class="talent-title">
          <span>法律诉讼</span>
          <el-button
            style="font-size: 10px;padding: 2px 4px"
            size="mini"
            type="warning"
            plain>
            警示信息
          </el-button>
        </div>
        <el-collapse accordion>
          <el-collapse-item v-for="(item, index) in warnList" :key="index" :name="index">
            <template slot="title">
              <el-col>
                <el-row class="row-title">{{item.title}}</el-row>
              </el-col>
            </template>
            <el-table
              :data="warnData"
              stripe
              border
              size="small"
            >
              <el-table-column
                prop="code"
                label="序号"
                header-align="center"
                align="center"
                width="100">
              </el-table-column>
              <el-table-column
                prop="date"
                label="发布日期"
                header-align="center"
                align="center"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                header-align="center"
                align="left"
                label="案件名称"
                width="">
              </el-table-column>
              <el-table-column
                prop="liyou"
                header-align="center"
                align="left"
                label="案由"
                width="">
              </el-table-column>
              <el-table-column
                prop="shenfen"
                header-align="center"
                align="center"
                label="案件身份"
                width="150">
              </el-table-column>
              <el-table-column
                prop="anhao"
                header-align="center"
                align="left"
                label="案号"
                width="">
              </el-table-column>
              <el-table-column
                prop="pred"
                header-align="center"
                align="center"
                label="操作"
                width="100">
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        collapseList: [
          {
            title: '该公司 曾因登记的住所或经营场所无法联系而被列入企业经营异常名录(1)'
          }
        ],
        warnList: [
          {
            title: '该公司 曾因著作权权属，侵权纠纷而被他人或公司起诉(1666)'
          }
        ],
        tableData: [{
          code: '1',
          date: '2015-07-01',
          yuanyin: '通过登记的住所或者经营场所无法联系的',
          jiguan: '北京市工商行政管理局北京经济技术开发区分局',
          yichudate: '2015-07-14',
          yichuyuanyin: '列入经营异常名录3年内且依照《经营异常名录管理办法》第九条规定被列入经营异常名录的企业，依法办理登记后，申请移出'
        }],
        warnData: [{
          code: '1',
          date: '2020-07-31',
          name: '汕头市澄海区丰源玩具实业有限公司等与大元传媒著作权权属，侵权纠纷二审民事判决书',
          liyou: '著作权权属，侵权纠纷',
          shenfen: '上诉人-汕头市澄海区丰源玩具实业有限公司，被告-北京市京东三百六十度电子商务有限公司，大元传媒',
          anhao: '(2019)京73民终1024号',
          pred: '详细'
        }, {
          code: '2',
          date: '2020-07-31',
          name: '华强方特(深圳)动漫有限公司与苏州奇璐服饰有限公司，北京京东三百六十度电子商务有限公司著作权权属，侵权纠纷一审民事判决书',
          liyou: '著作权权属，侵权纠纷',
          shenfen: '原告-华强方特(深圳)动漫有限公司，被告-北京市京东三百六十度电子商务有限公司，苏州奇璐服饰有限公司',
          anhao: '(2020)苏0581民初1908号',
          pred: '详细'
        }, {
          code: '3',
          date: '2020-07-31',
          name: '华强方特(深圳)动漫有限公司与苏州奇璐服饰有限公司，北京京东三百六十度电子商务有限公司著作权权属，侵权纠纷一审民事判决书',
          liyou: '著作权权属，侵权纠纷',
          shenfen: '原告-华强方特(深圳)动漫有限公司，被告-北京市京东三百六十度电子商务有限公司，苏州奇璐服饰有限公司',
          anhao: '(2020)苏0581民初1908号',
          pred: '详细'
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
