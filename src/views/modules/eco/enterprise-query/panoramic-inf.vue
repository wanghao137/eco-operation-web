<template>
  <div class="main-container">
    <el-row :gutter="20">
      <el-col :span="3" :xs="24">
        <el-tabs :tab-position="tabPosition" v-model="currentView">
          <el-tab-pane
            :label="item.name"
            :name="item.path"
            v-for="(item,index) in menu"
            :key="index"
          ></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="21" :xs="24">
        <div class="head">
          <div class="head-box">
            <div class="head-left">小米科技有限责任公司</div>
            <div class="head-right">
              <dl>
                <dd>健康描述</dd>
                <dt>
                  <p>619</p><span>比较健康</span>
                </dt>
              </dl>
              <dl>
                <dd>收入规模</dd>
                <dt>
                  <p>500亿-700亿</p>
                </dt>
              </dl>
              <dl>
                <dd>行业领域</dd>
                <dt>
                  <p>科学与技术研究</p>
                </dt>
              </dl>
            </div>
          </div>
        </div>
        <!--:is 的作用：会将div标签转换成 currentView 变量绑定的这个组件-->
        <div :is="currentView" keep-alive></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import menu from '../menu.json'
export default {
  components: {
    // 以下方式引入路由是路由的懒加载，有利于页面优化
    businessCard: resolve => {
      require(['./businessCard.vue'], resolve)
    },
    info: resolve => {
      require(['./info.vue'], resolve)
    },
    enterpriseInvestment: resolve => {
      require(['./enterpriseInvestment.vue'], resolve)
    },
    executiveInvestment: resolve => {
      require(['./executiveInvestment.vue'], resolve)
    },
    annualReports: resolve => {
      require(['./annualReports.vue'], resolve)
    },
    nationalTaxData: resolve => {
      require(['./nationalTaxData.vue'], resolve)
    },
    developmentHistory: resolve => {
      require(['./developmentHistory.vue'], resolve)
    },
    qualificationsAndHonors: resolve => {
      require(['./qualificationsAndHonors.vue'], resolve)
    },
    intellectualPropertyRight: resolve => {
      require(['./intellectualPropertyRight.vue'], resolve)
    },
    talentDemand: resolve => {
      require(['./talentDemand.vue'], resolve)
    },
    networkManagement: resolve => {
      require(['./networkManagement.vue'], resolve)
    },
    illegalWarning: resolve => {
      require(['./illegalWarning.vue'], resolve)
    }
  },
  data () {
    return {
      menu: [], // 菜单
      tabPosition: 'left',
      currentView: 'businessCard' // 当前组件
    }
  },
  methods: {},
  created () {
    this.menu = menu
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.head{
  margin-bottom: 20px;
}
.head-box {
  background: rgb(223, 237, 243);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
}
.head-box div{
  flex: 1;
}
.head-right{
  display: flex;
  padding-left: 20px;
  padding-top: 0;
  height: 100%;
  box-sizing: border-box;
}
.head-left{
  font-size: 24px;
  border-right: 1px #97c2e8 solid;
}
.head-right dl{
  flex: 1;
  height: 100%;
  margin: 0;
}
.head-right dl dd{
  font-size: 16px;
  color: #888;
  display: flex;
  align-items: center;
  justify-content:center;
}
.head-right dl dt{
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: 10px;
}
.head-right dl dt p{
  background: #b2d8f6;
  color: #64a7e3;
  display: inline;
  padding: 3px 7px;
  box-sizing: border-box;
  font-size: 12px;
}
.head-right dl dt span{
  color: white;
  background: #85d266;
  padding: 3px 7px;
  box-sizing: border-box;
  font-size: 12px;
}
</style>
