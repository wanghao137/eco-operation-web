<template>
  <div>
    <div class="talent-title">
      <span>法人代表对外投资</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        47
      </el-button>
    </div>
    <el-table
      :data="tableData"
      stripe
      border
      size="small"
      :height="tableH">
      <el-table-column
        prop="name"
        label="被投企业名称"
        header-align="center"
        align="left"
        width="">
      </el-table-column>
      <el-table-column
        prop="zhuce"
        label="注册资本(万元)"
        header-align="center"
        align="center"
        width="150">
      </el-table-column>
      <el-table-column
        prop="chuzi"
        header-align="center"
        align="center"
        label="出资资本(万元)"
        width="150">
      </el-table-column>
      <el-table-column
        prop="bili"
        header-align="center"
        align="center"
        label="出资比例"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        header-align="center"
        align="center"
        label="登记状态"
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        header-align="center"
        align="center"
        label="成立日期"
        width="120">
      </el-table-column>
    </el-table>
    <div class="table-more" v-show="!tableOpen" @click="open()"><i class="el-icon-caret-bottom"></i>点击获取更多</div>
    <div class="table-more" v-show="tableOpen" @click="close()"><i class="el-icon-caret-top"></i>收起</div>
    <div style="margin-top: 20px" class="talent-title">
      <span>法人代表外部任职</span>
      <el-button
        style="font-size: 10px;
        padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        82
      </el-button>
    </div>
    <el-table
      :data="markData"
      stripe
      border
      size="small"
      :height="tablemarkH">
      <el-table-column
        prop="name"
        label="任职企业名称"
        header-align="center"
        align="left"
        width="">
      </el-table-column>
      <el-table-column
        prop="zhiwu"
        label="职务"
        header-align="center"
        align="center"
        width="150">
      </el-table-column>
      <el-table-column
        prop="faren"
        label="法定代表人"
        header-align="center"
        align="center"
        width="150">
      </el-table-column>
      <el-table-column
        prop="status"
        header-align="center"
        align="center"
        label="登记状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        header-align="center"
        align="center"
        label="成立日期"
        width="120">
      </el-table-column>
    </el-table>
    <div class="table-more" v-show="!tablemarkOpen" @click="markopen()"><i class="el-icon-caret-bottom"></i>点击获取更多</div>
    <div class="table-more" v-show="tablemarkOpen" @click="markclose()"><i class="el-icon-caret-top"></i>收起</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableH: 235,
        tablemarkH: 235,
        tablemarkOpen: false,
        tableOpen: false,
        tableData: [{
          name: '小米影业有限责任公司',
          zhuce: '5000',
          chuzi: '3890',
          bili: '77.8%',
          status: '在营(开业)企业',
          date: '2020-08-20'
        }, {
          name: '嘉兴顺创投资合伙企业(有限合伙)',
          zhuce: '1000',
          chuzi: '990',
          bili: '99%',
          status: '在营(开业)企业',
          date: '2020-08-20'
        }, {
          name: '嘉兴顺科投资咨询有限公司',
          zhuce: '3',
          chuzi: '1.53',
          bili: '51%',
          status: '在营(开业)企业',
          date: '2020-08-20'
        }, {
          name: '北京琪奥科技有限责任公司',
          zhuce: '5',
          chuzi: '3.4',
          bili: '68%',
          status: '注销企业',
          date: '2013-11-05'
        }, {
          name: '拉萨经济技术开发区顺创资本管理有限公司',
          zhuce: '3',
          chuzi: '2.25',
          bili: '75%',
          status: '在营(开业)企业',
          date: '2013-05-24'
        }, {
          name: '小米信用管理有限公司',
          zhuce: '5000',
          chuzi: '5000',
          bili: '100%',
          status: '在营(开业)企业',
          date: '2020-08-20'
        }, {
          name: '北京小米支付技术有限公司',
          zhuce: '10000',
          chuzi: '5000',
          bili: '50%',
          status: '在营(开业)企业',
          date: '2020-08-20'
        }, {
          name: '天津金星投资有限公司',
          zhuce: '120000',
          chuzi: '120000',
          bili: '100%',
          status: '在营(开业)企业',
          date: '2020-08-20'
        }, {
          name: '英鹏互娱科技(北京)有限公司',
          zhuce: '1000',
          chuzi: '0',
          bili: '1.58%',
          status: '注销企业',
          date: '2013-11-05'
        }, {
          name: '北京创派力量科技有限公司',
          zhuce: '200',
          chuzi: '0',
          bili: '0%',
          status: '在营(开业)企业',
          date: '2013-05-24'
        }],
        markData: [{
          name: '小米之家科技有限公司',
          zhiwu: '执行董事',
          faren: '雷军',
          date: '2017-11-20',
          status: '在营(开业)企业'
        }, {
          name: '广州小米信息服务有限公司',
          zhiwu: '执行董事',
          faren: '雷军',
          date: '2016-11-07',
          status: '在营(开业)企业'
        }, {
          name: '四川新网银行股份有限公司',
          zhiwu: '董事',
          faren: '雷军',
          date: '2016-12-28',
          status: '在营(开业)企业'
        }, {
          name: '广州小米通讯技术有限公司',
          zhiwu: '董事长',
          faren: '雷军',
          date: '2016-09-22',
          status: '在营(开业)企业'
        }, {
          name: '小米影业有限责任公司',
          zhiwu: '董事长',
          faren: '雷军',
          date: '2016-06-07',
          status: '在营(开业)企业'
        }, {
          name: '小米之家科技有限公司',
          zhiwu: '执行董事',
          faren: '雷军',
          date: '2017-11-20',
          status: '在营(开业)企业'
        }, {
          name: '广州小米信息服务有限公司',
          zhiwu: '执行董事',
          faren: '雷军',
          date: '2016-11-07',
          status: '在营(开业)企业'
        }, {
          name: '四川新网银行股份有限公司',
          zhiwu: '董事',
          faren: '雷军',
          date: '2016-12-28',
          status: '在营(开业)企业'
        }, {
          name: '广州小米通讯技术有限公司',
          zhiwu: '董事长',
          faren: '雷军',
          date: '2016-09-22',
          status: '在营(开业)企业'
        }, {
          name: '小米影业有限责任公司',
          zhiwu: '董事长',
          faren: '雷军',
          date: '2016-06-07',
          status: '在营(开业)企业'
        }]
      }
    },
    methods: {
      close () {
        this.tableH = 235
        this.tableOpen = !this.tableOpen
      },
      open () {
        this.tableOpen = !this.tableOpen
        this.tableH = 433
      },
      markclose () {
        this.tablemarkH = 235
        this.tablemarkOpen = !this.tablemarkOpen
      },
      markopen () {
        this.tablemarkOpen = !this.tablemarkOpen
        this.tablemarkH = 433
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
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
  }
  .table-more{
    border: 1px solid #ebeef5;
    border-top: none;
    text-align: center;
    font-size: 12px;
    height: 25px;
    line-height: 25px;
    color: #3E8EF7;
    cursor: pointer;
  }
</style>
