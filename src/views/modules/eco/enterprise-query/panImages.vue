<template>
  <el-row>
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
      <!--:is 的作用：会将div标签转换成 currentView 变量绑定的这个组件-->
      <div :is="currentView" keep-alive></div>
    </el-col>
  </el-row>
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
      customsTrade: resolve => {
        require(['./customsTrade.vue'], resolve)
      },
      relationshipContext: resolve => {
        require(['./relationshipContext.vue'], resolve)
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
      legalProceedings: resolve => {
        require(['./legalProceedings.vue'], resolve)
      },
      illegalWarning: resolve => {
        require(['./illegalWarning.vue'], resolve)
      },
      newsAndPublicOpinion: resolve => {
        require(['./newsAndPublicOpinion.vue'], resolve)
      }
    },
    data () {
      return {
        menu: [], // 菜单
        tabPosition: 'left',
        currentView: 'businessCard' // 当前组件
      }
    },
    props: ['activeChild'],
    methods: {},
    created () {
      this.menu = menu
      if (this.activeChild === 'touzi') {
        this.currentView = 'enterpriseInvestment'
      } else if (this.activeChild === 'zhaopin') {
        this.currentView = 'talentDemand'
      } else if (this.activeChild === 'rongzi') {
        this.currentView = 'info'
      }
    }
  }
</script>

<style scoped>

</style>
