<template>
  <div>
    <div class="talent-title">
      <span>企业对外投资</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        10
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
      <span>分支机构</span>
      <el-button
        style="font-size: 10px;
        padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        31
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
        label="分支机构名称"
        header-align="center"
        align="left"
        width="">
      </el-table-column>
      <el-table-column
        prop="shengfen"
        label="所属省份"
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
          name: '小米科技有限责任公司仙桃分公司',
          shengfen: '湖北省',
          date: '2014-11-07',
          status: '在营(开业)企业'
        }, {
          name: '小米科技有限责任公司天津分公司',
          shengfen: '天津市',
          date: '2013-11-07',
          status: '在营(开业)企业'
        }, {
          name: '小米科技有限责任公司上海分公司',
          shengfen: '上海市',
          date: '2012-11-07',
          status: '在营(开业)企业'
        }, {
          name: '小米科技有限责任公司东莞分公司',
          shengfen: '广东省',
          date: '2013-11-07',
          status: '在营(开业)企业'
        }, {
          name: '小米科技有限责任公司珠海分公司',
          shengfen: '广东省',
          date: '2016-11-07',
          status: '在营(开业)企业'
        }, {
          name: '小米科技有限责任公司仙桃分公司',
          shengfen: '湖北省',
          date: '2014-11-07',
          status: '在营(开业)企业'
        }, {
          name: '小米科技有限责任公司天津分公司',
          shengfen: '天津市',
          date: '2014-11-07',
          status: '在营(开业)企业'
        }, {
          name: '小米科技有限责任公司上海分公司',
          shengfen: '上海市',
          date: '2014-11-07',
          status: '在营(开业)企业'
        }, {
          name: '小米科技有限责任公司东莞分公司',
          shengfen: '广东省',
          date: '2014-11-07',
          status: '在营(开业)企业'
        }, {
          name: '小米科技有限责任公司珠海分公司',
          shengfen: '广东省',
          date: '2014-11-07',
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
