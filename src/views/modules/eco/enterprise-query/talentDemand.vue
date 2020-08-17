<template>
  <div>
    <div class="talent-title">
      <span>网络招聘</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        1456
      </el-button>
    </div>
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in collapseList" :key="index" :name="index">
        <template slot="title">
          <el-col :span="7">
            <el-row class="row-title">{{item.title}}</el-row>
            <el-row class="row-num">
              <el-col :span="8">招聘人数:{{item.number}}</el-col>
              <el-col :span="8">经验:{{item.experience}}年</el-col>
              <el-col :span="8">学历:{{item.education}}</el-col>
            </el-row>
          </el-col>
          <el-col style="text-align: center" :span="5">{{item.city}}</el-col>
          <el-col style="text-align: center" :span="5">{{item.money}}</el-col>
          <el-col style="text-align: center" :span="5">{{item.date}}</el-col>
        </template>
        <div style="padding-left: 10px">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div style="padding-left: 10px">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
            title: '专卖店省级客户经理(华中区)',
            city: '郑州市',
            money: '10001-15000',
            date: '2020-08-20',
            number: '1',
            experience: '5-10',
            education: '本科'
          },
          {
            title: '专卖店店长(四川)',
            city: '德阳市',
            money: '8001-10000',
            date: '2020-08-20',
            number: '1',
            experience: '不限',
            education: '本科'
          },
          {
            title: '专卖店省级客户经理(华南区)',
            city: '深圳市',
            money: '10001-15000',
            date: '2020-08-20',
            number: '1',
            experience: '5-10',
            education: '本科'
          },
          {
            title: '专卖店店长(四川)',
            city: '雅安市',
            money: '10001-15000',
            date: '2020-08-20',
            number: '1',
            experience: '5-10',
            education: '本科'
          },
          {
            title: '销售专员(东莞小米之家)',
            city: '东莞市',
            money: '4001-6000',
            date: '2020-08-20',
            number: '1',
            experience: '5-10',
            education: '大专'
          },
          {
            title: '门店经理(郑州)',
            city: '郑州市',
            money: '10001-15000',
            date: '2020-08-20',
            number: '1',
            experience: '5-10',
            education: '本科'
          },
          {
            title: '区域销售运营经理(粤桂区)',
            city: '深圳市',
            money: '10001-15000',
            date: '2020-08-20',
            number: '1',
            experience: '5-10',
            education: '本科'
          },
          {
            title: '专卖店省级客户经理(华南区)',
            city: '深圳市',
            money: '10001-15000',
            date: '2020-08-20',
            number: '1',
            experience: '5-10',
            education: '本科'
          },
          {
            title: '专卖店店长(四川)',
            city: '雅安市',
            money: '10001-15000',
            date: '2020-08-20',
            number: '1',
            experience: '5-10',
            education: '本科'
          },
          {
            title: '销售专员(东莞小米之家)',
            city: '东莞市',
            money: '4001-6000',
            date: '2020-08-20',
            number: '1',
            experience: '5-10',
            education: '大专'
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
    border-left: 2px solid #3E8EF7;
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
</style>
