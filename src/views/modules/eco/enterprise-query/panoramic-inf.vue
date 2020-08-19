<template>
  <div class="main-container">
        <div class="head">
          <div class="head-box">
            <div style="margin-top: 10px" class="head-left">小米科技有限责任公司</div>
            <div class="head-right">
              <el-tabs v-model="activeName">
                <el-tab-pane
                  :label="item.name"
                  :name="item.path"
                  v-for="(item,index) in menu"
                  :key="index"
                ></el-tab-pane>
                <div class="inf-left inf-high">高新技术企业</div>
                <div class="inf-left inf-down">低风险</div>
                <div class="inf-left inf-ent">一般企业400</div>
              </el-tabs>
            </div>
          </div>
        </div>
        <div :is="activeName" keep-alive></div>
  </div>
</template>
<script>
export default {
  components: {
    // 以下方式引入路由是路由的懒加载，有利于页面优化
    panImages: resolve => {
      require(['./panImages.vue'], resolve)
    },
    riskLevel: resolve => {
      require(['./riskLevel.vue'], resolve)
    },
    creditEva: resolve => {
      require(['./creditEva.vue'], resolve)
    }
  },
  data () {
    return {
      menu: [
        {
          'name': '全景画像',
          'path': 'panImages'
        },
        {
          'name': '风险等级',
          'path': 'riskLevel'
        },
        {
          'name': '综合能力',
          'path': 'creditEva'
        }
      ], // 菜单
      activeName: 'panImages' // 当前组件
    }
  },
  methods: {},
  created () {
    // this.menu = menu
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
  .inf-left{
    float: left;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    width: 80px;
    text-align: center;
    color: #6D6F70;
  }
.inf-high{
  background-color: #BDD7EE;
  margin-right: 10px;
}
.inf-down{
  background-color: #FFFF00;
  margin-right: 10px;
}
.inf-ent{
  background-color: #C5E0B4;
}
</style>
