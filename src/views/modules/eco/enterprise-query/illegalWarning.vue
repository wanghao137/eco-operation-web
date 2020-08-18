<template>
  <div>
    <div class="talent-title">
      <span>违法违规</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        1
      </el-button>
    </div>
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in collapseList" :key="index" :name="index">
        <template slot="title">
          <el-col :span="7">
            <el-row class="row-title">{{item.title}}</el-row>
          </el-col>
        </template>
        <div style="padding-left: 10px">{{item.messagetitle}}</div>
        <div style="padding-left: 10px">{{item.messagecontent}}</div>
        <div style="padding-left: 10px">{{item.danwei}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        collapseList: [
          {
            title: '证照过去信息(无)'
          },
          {
            title: '产品召回和下架(无)'
          },
          {
            title: '银行的欠贷诉讼信息(无)'
          },
          {
            title: '税务部门的欠税或未报税信息(无)'
          },
          {
            title: '人社的欠社保信息(无)'
          },
          {
            title: '未办理住房公积金缴存登记或欠缴信息(无)'
          },
          {
            title: '12315投诉预警信息(无)'
          },
          {
            title: '环保处罚(1)',
            messagetitle: '决定书文号：青环罚字[2009]第02号',
            messagecontent: '违法类型：违反{建设项目环境管理条例}第十六条和第二十条的规定',
            danwei: '处罚单位：青海省环保局'
          }
        ]
      }
    },
    methods: {
      handleChange (val) {
        console.log(val)
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
    line-height: 60px;
    color: #3E8EF7;
  }
  .row-num{
    line-height: 20px;
    font-size: 12px;
  }
</style>
