<template>
<div class="wrap">
   <div class="titles">
      <div class="left">
          <span class="content">2015企业年报</span>
      </div>
      <div class="rights">
          <span style="color:#666">填报日期:2016-5-30</span>
      </div>
   </div>
   <div class="information">
     <div class="infor-title">
       <span style="font-size:17px;color:steelblue">企业基本信息</span>
     </div>
     <div class="infor-table">
       <table border="0" background="white" bgcolor="white">
        <tbody>
          <tr>
            <td width="300px" class="th">
              <b>统一社会信用代码</b>
            </td>
            <td>
                <span>91110108551385082Q</span>
            </td>
            <td class="th">
              <b>企业名称</b>
            </td>
            <td>
                <span>小米科技有限责任公司</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>企业联系电话</b>
            </td>
            <td>
              <span>60606666-1234</span>
            </td>
            <td class="th">
              <b>邮政编码</b>
            </td>
            <td>
              <span>100085</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>电子邮箱</b>
            </td>
            <td>
               <span>chenchongwei@xiaomi.com</span>
            </td>
            <td class="th">
              <b>是否转让股东股权</b>
            </td>
            <td>
              <span>否</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>登记状态</b>
            </td>
            <td>
              <span>在营(开业)企业</span>
            </td>
            <td class="th">
              <b>是否有网站或网店</b>
            </td>
            <td>
              <span>是</span>
            </td>
          </tr>

          <tr>
            <td class="th">
              <b>是否投资或购买其他公司股权</b>
            </td>
            <td>
               <span>否</span>
            </td>
            <td class="th">
              <b>从业人数</b>
            </td>
            <td>
              <span>企业选择不公示</span>
            </td>
          </tr>
          <tr>
            <td width="300px" class="th">
              <b>企业通讯地址</b>
            </td>
            <td colspan="3">
              <span>北京市海淀区清河中街68号华润五彩城写字楼12号</span>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
   </div>
   <div class="information">
     <div class="infor-title">
       <span style="font-size:17px;color:steelblue">网店或网站信息</span>
     </div>
     <div class="infor-table">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="type" label="类型" > </el-table-column>
            <el-table-column prop="name" label="名称" > </el-table-column>
            <el-table-column prop="address" label="网址" > </el-table-column>
        </el-table>
     </div>
   </div>
   <div class="information">
     <div class="infor-title">
       <span style="font-size:17px;color:steelblue">股东及出资信息</span>
     </div>
     <div class="infor-table">
        <el-table :data="tableDatas" border style="width: 100%">
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
</div>
</template>

<script>
  export default {
    name: 'corReports',
    data() {
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
        },{
          gudong: '刘德',
          renmoney: '3718.4963',
          rentime: '2015-10-30',
          renway: '货币',
          shimoney: '3718.4963',
          shitime: '2015-10-30',
          shiway: '货币'
        },{
          gudong: '雷军',
          renmoney: '143934.05',
          rentime: '2015-10-30',
          renway: '货币',
          shimoney: '3718.4963',
          shitime: '143934.05',
          shiway: '货币'
        },{
          gudong: '洪峰',
          renmoney: '18623.1',
          rentime: '2015-10-30',
          renway: '货币',
          shimoney: '3718.4963',
          shitime: '18623.1',
          shiway: '货币'
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
    border-left: 3px solid steelblue;
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
    font-size: 20px;
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
     padding: 15px;
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
</style>
