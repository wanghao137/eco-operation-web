<template>
  <div class="wrap">
    <div class="titles">
      <div class="left">
        <span class="content">企业登记信息</span>
      </div>
    </div>
    <div class="information">
      <div class="infor-title">
        <span style="font-size:17px;color:steelblue"></span>
      </div>
      <div class="infor-table">
        <table border="0" background="white" bgcolor="white">
          <tbody>
          <tr>
            <td width="300px" class="th">
              <b>历史名称</b>
            </td>
            <td colspan="3">
              <span>北京小米科技有限责任公司</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>企业名称</b>
            </td>
            <td>
              <span>小米科技有限责任公司</span>
            </td>
            <td class="th">
              <b>法定代表人</b>
            </td>
            <td>
              <span>雷军</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>统一社会信用代码</b>
            </td>
            <td>
              <span>91110108551385082Q</span>
            </td>
            <td class="th">
              <b>注册资本</b>
            </td>
            <td>
              <span>185000万人民币</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>企业类型</b>
            </td>
            <td>
              <span>有限责任公司(自然人投资或控股)</span>
            </td>
            <td class="th">
              <b>登记状态</b>
            </td>
            <td>
              <span>在营(开业)企业</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>行业门类</b>
            </td>
            <td>
              <span>科学研究和技术服务业</span>
            </td>
            <td class="th">
              <b>行业细类</b>
            </td>
            <td>
              <span>其他应用推广和应用服务业</span>
            </td>
          </tr>

          <tr>
            <td class="th">
              <b>成立日期</b>
            </td>
            <td>
              <span>2010-03-03</span>
            </td>
            <td class="th">
              <b>核准日期</b>
            </td>
            <td>
              <span>2016-06-07</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>住址</b>
            </td>
            <td colspan="3">
              <span>北京市海淀区河清街68号华润五彩购物中心二期13层</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>经营范围</b>
            </td>
            <td colspan="3">
              <span>手机技术开发；手机生产，手机服务；销售通讯设备；维修仪器仪表；维修办公设备；筹备，策划，组织大型庆典；设计，制作，代理，发布广告。</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>登记机关</b>
            </td>
            <td colspan="3">
              <span>北京市工商行政管理局海淀分局</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="margin-top: 10px" class="titles">
      <div class="left">
        <span class="content">股东及出资信息</span>
        <span class="infospan">4</span>
      </div>
    </div>
    <div class="information">
      <div class="infor-title">
        <span style="font-size:17px;color:steelblue"></span>
      </div>
      <div class="infor-table">
        <el-table :data="tableDatas" stripe border style="width: 100%">
          <el-table-column prop="gudong" label="股东" > </el-table-column>
          <el-table-column prop="renmoney" label="认缴出资额(万元)" > </el-table-column>
          <el-table-column prop="rentime" label="认缴出费时间" > </el-table-column>
          <el-table-column prop="renway" label="认缴出费方式" > </el-table-column>
          <el-table-column prop="shimoney" label="实缴出资额(万元)" > </el-table-column>
          <el-table-column prop="shitime" label="实缴出资时间" > </el-table-column>
          <el-table-column prop="shiway" label="实缴出资方式" > </el-table-column>
        </el-table>
      </div>
    </div>
    <div style="margin-top: 10px" class="titles">
      <div class="left">
        <span class="content">主要管理人员</span>
        <span class="infospan">6</span>
      </div>
    </div>
    <div style="margin-top: 15px;display: inline-block" class="information">
      <div style="width: 20%;float: left;">
        <div style="text-align: center;background-color: #f9f9f9" class="managerinfo">
          <span style="color: #3E8EF7">董事会成员</span>
        </div>
        <div class="managerinfo">
          <span class="manleft">雷军</span>
          <span class="manright">董事长</span>
        </div>
        <div class="managerinfo">
          <span class="manleft">许达来</span>
          <span class="manright">董事</span>
        </div>
        <div class="managerinfo">
          <span class="manleft">刘芹</span>
          <span class="manright">董事</span>
        </div>
        <div style="border-bottom: 1px solid #e8e8e8" class="managerinfo">
          <span class="manleft">林斌</span>
          <span class="manright">董事</span>
        </div>
      </div>
      <div style="width: 20%;float: left;margin-left: 25px">
        <div style="text-align: center;background-color: #f9f9f9" class="managerinfo">
          <span style="color: #3E8EF7">监事会成员</span>
        </div>
        <div style="border-bottom: 1px solid #e8e8e8" class="managerinfo">
          <span class="manleft">黎万强</span>
          <span class="manright">监事</span>
        </div>
      </div>
      <div style="width: 20%;float: left;margin-left: 25px">
        <div style="text-align: center;background-color: #f9f9f9" class="managerinfo">
          <span style="color: #3E8EF7">高管人员</span>
        </div>
        <div style="border-bottom: 1px solid #e8e8e8" class="managerinfo">
          <span class="manleft">雷军</span>
          <span class="manright">经理</span>
        </div>
      </div>
      <div style="width: 20%;float: left;margin-left: 25px">
        <div style="text-align: center;background-color: #f9f9f9" class="managerinfo">
          <span style="color: #3E8EF7">其他人员</span>
        </div>
        <div style="border-bottom: 1px solid #e8e8e8;text-align: center" class="managerinfo">
          <span>无</span>
        </div>
      </div>
    </div>
    <div style="margin-top: 10px" class="titles">
      <div class="left">
        <span class="content">变更信息</span>
        <span class="infospan">23</span>
      </div>
    </div>
    <div class="information">
      <div class="infor-title">
        <span style="font-size:17px;color:steelblue"></span>
      </div>
      <div class="infor-table">
        <el-table :data="changeInfo" stripe border style="width: 100%">
          <el-table-column prop="info" label="变更事项" > </el-table-column>
          <el-table-column prop="beforeinfo" label="变更前内容" > </el-table-column>
          <el-table-column prop="afterinfo" label="变更后内容" > </el-table-column>
          <el-table-column prop="data" label="变更日期" > </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'corReports',
    data () {
      return {
        tableData: [{
          type: '网站',
          name: '小米科技',
          address: 'www.xiaomi.com'
        }],
        tableDatas: [{
          gudong: '黎万强',
          renmoney: '18725.357',
          rentime: '2015-10-30',
          renway: '货币',
          shimoney: '18725.357',
          shitime: '2015-10-30',
          shiway: '货币'
        }, {
          gudong: '刘德',
          renmoney: '3718.4963',
          rentime: '2015-10-30',
          renway: '货币',
          shimoney: '3718.4963',
          shitime: '2015-10-30',
          shiway: '货币'
        }, {
          gudong: '雷军',
          renmoney: '143934.05',
          rentime: '2015-10-30',
          renway: '货币',
          shimoney: '3718.4963',
          shitime: '143934.05',
          shiway: '货币'
        }, {
          gudong: '洪峰',
          renmoney: '18623.1',
          rentime: '2015-10-30',
          renway: '货币',
          shimoney: '3718.4963',
          shitime: '18623.1',
          shiway: '货币'
        }],
        changeInfo: [{
          info: '经营范围',
          beforeinfo: '手机技术开发;手机生产;手机服务.(限海淀区永捷北路2号二层经营)技术开发;货物进出口,技术进出口;销售通讯设备',
          afterinfo: '手机技术开发;手机生产;手机服务.(限海淀区永捷北路2号二层经营)技术开发;货物进出口,技术进出口;销售通讯设备;代理进出口',
          data: '2016-06-07'
        }, {
          info: '注册资本',
          beforeinfo: '5000',
          afterinfo: '18500',
          data: '2016-03-24'
        }, {
          info: '董事(理事),经理,监事',
          beforeinfo: '雷军,董事长;许达来,懂事;刘芹,董事;林斌,董事;雷军,经理;黎万强,监事;',
          afterinfo: '雷军,董事长;许达来,懂事;刘芹,董事;林斌,董事;雷军,经理;黎万强,监事;',
          data: '2014-10-30'
        }, {
          info: '董事(理事),经理,监事',
          beforeinfo: '雷军,董事长;许达来,懂事;刘芹,董事;林斌,董事;雷军,经理;黎万强,监事;',
          afterinfo: '雷军,董事长;许达来,懂事;刘芹,董事;林斌,董事;雷军,经理;黎万强,监事;',
          data: '2013-11-30'
        }, {
          info: '住所',
          beforeinfo: '北京市海淀区永捷北路2号二层',
          afterinfo: '北京市海淀区河清街68号华润五彩购物中心二期13层',
          data: '2013-07-30'
        }]
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
  .rights{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content{
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
  }
  .information{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .infor-title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
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
  .title {
    display: inline-block;
    margin-right: 5px;
    border-collapse:collapse;
  }
  p {
    margin: 0;
    line-height: 25px;
  }
  td,
  th {
    border: 1px #e8e8e8 solid;
    padding: 10px 15px;
    box-sizing: border-box;
    color: #4b5d6c;
    width: 272px;
  }
  .infospan{
    color: white;
    background: #f89406;
    border-radius: 5px;
    padding: 2px 5px;
    box-sizing: border-box;
    color: 14px;
    font-weight: normal;
    font-size: 12px;
    margin-right: 5px;
    display: inline-block;
  }
  .managerinfo{
    border: 1px solid #e8e8e8;
    border-bottom: none;
  }
  .managerinfo span{
    height: 40px;
    line-height: 40px;
  }
  .managerinfo .manleft{
    margin-left: 15px;
  }
  .managerinfo .manright{
    float: right;
    margin-right: 20px
  }
</style>
