<template>
  <div>
    <div class="talent-title">
      <span>企业资质</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        40
      </el-button>
    </div>
    <ul class="talent-ul">
      <li v-for="item in dataList">
        <el-col style="margin-left: 10px" :span="6">
          <el-row class="row-title">{{item.title}}</el-row>
          <el-row class="row-num">证书编号:{{item.code}}</el-row>
        </el-col>
        <el-col style="text-align: center" :span="5">发证时间:{{item.date}}</el-col>
        <el-col style="text-align: center" :span="5">有效期至:{{item.enddate}}</el-col>
        <el-col style="text-align: center" :span="5">认证机构:{{item.auth}}</el-col>
      </li>
      <li v-for="item in collapseList">
        <el-col style="margin-left: 10px" :span="6">
          <el-row class="row-title">{{item.title}}</el-row>
          <el-row class="row-num">证书编号:{{item.code}}</el-row>
          <el-row class="row-num">认证内容:{{item.content}}</el-row>
        </el-col>
        <el-col style="text-align: center" :span="5">发证时间:{{item.date}}</el-col>
        <el-col style="text-align: center" :span="5">有效期至:{{item.enddate}}</el-col>
        <el-col style="text-align: center" :span="5">认证机构:{{item.auth}}</el-col>
      </li>
      <li v-for="(item, index) in collapseList" :key="index" v-show="isOpen">
        <el-col style="margin-left: 10px" :span="6">
          <el-row class="row-title">{{item.title}}</el-row>
          <el-row class="row-num">证书编号:{{item.code}}</el-row>
          <el-row class="row-num">认证内容:{{item.content}}</el-row>
        </el-col>
        <el-col style="text-align: center" :span="5">发证时间:{{item.date}}</el-col>
        <el-col style="text-align: center" :span="5">有效期至:{{item.enddate}}</el-col>
        <el-col style="text-align: center" :span="5">认证机构:{{item.auth}}</el-col>
      </li>
    </ul>
    <div class="table-more" v-show="!isOpen" @click="isOpen = !isOpen"><i class="el-icon-caret-bottom"></i>点击获取更多</div>
    <div class="table-more" v-show="isOpen" @click="isOpen = !isOpen"><i class="el-icon-caret-top"></i>收起</div>
    <div style="margin-top: 20px" class="talent-title">
      <span>企业荣誉</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        5
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
        label="荣誉名称"
        header-align="center"
        align="left"
        width="">
      </el-table-column>
      <el-table-column
        prop="rate"
        label="评价机构"
        header-align="center"
        align="left"
        width="">
      </el-table-column>
      <el-table-column
        prop="date"
        header-align="center"
        align="center"
        label="评选时间"
        width="150">
      </el-table-column>
    </el-table>
    <div class="table-more" v-show="!tableOpen" @click="open()"><i class="el-icon-caret-bottom"></i>点击获取更多</div>
    <div class="table-more" v-show="tableOpen" @click="close()"><i class="el-icon-caret-top"></i>收起</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableH: 235,
        isOpen: false,
        tableOpen: false,
        collapseList: [
          {
            title: '强制性认证',
            code: '2015011606803999',
            enddate: '2030-08-20',
            date: '2020-08-20',
            content: 'TD-LTE数字移动电话机',
            auth: '中国质量认证中心'
          },
          {
            title: '强制性认证',
            code: '2015011606803999',
            enddate: '2030-08-20',
            date: '2020-08-20',
            content: 'TD-LTE数字移动电话机',
            auth: '中国质量认证中心'
          },
          {
            title: '强制性认证',
            code: '2015011606803999',
            enddate: '2030-08-20',
            date: '2020-08-20',
            content: 'TD-LTE数字移动电话机',
            auth: '中国质量认证中心'
          },
          {
            title: '强制性认证',
            code: '2015011606803999',
            enddate: '2030-08-20',
            date: '2020-08-20',
            content: 'TD-LTE数字移动电话机',
            auth: '中国质量认证中心'
          }
        ],
        dataList: [{
          title: '中关村高新企业',
          code: '暂无',
          enddate: '2030-08-20',
          date: '2020-08-20',
          auth: '中国质量认证中心'
        }],
        tableData: [{
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
        }, {
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
        }, {
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
        }, {
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
        }, {
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
        }, {
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
        }, {
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
        }, {
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
        }, {
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
        }, {
          name: '中国大数据产业龙头企业',
          rate: 'DT大数据产业创新研究院',
          date: '2020-08-20'
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
  .talent-ul{
    list-style-type:none;
    border: 1px solid #ebeef5;
    padding-left: 0px;
    margin-bottom: 0px;
  }
  .talent-ul li{
    height: 90px;
    line-height: 90px;
    border-bottom: 1px dashed #ebeef5;
    font-size: 12px;
  }
  .talent-ul li:first-child{
    height: 60px;
    line-height: 60px;
  }
  .talent-ul li:last-child{
    border-bottom: none;
  }
  .row-title{
    line-height: 30px;
    color: #3E8EF7;
  }
  .row-num{
    line-height: 30px;
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
