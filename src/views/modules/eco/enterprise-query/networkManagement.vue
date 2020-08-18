<template>
  <div>
    <div class="talent-title">
      <span>ICP备案信息</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        10
      </el-button>
    </div>
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in collapseList" :key="index" :name="index">
        <template slot="title">
          <el-col :span="7">
            <el-row class="row-title">{{item.title}}</el-row>
            <el-row class="row-num">
              <el-col>网站域名:{{item.yuming}}</el-col>
            </el-row>
          </el-col>
          <el-col style="text-align: center" :span="8">网站许可证号:{{item.code}}</el-col>
          <el-col style="text-align: center" :span="8">网站负责人:{{item.peple}}</el-col>
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
            title: '小米推送',
            yuming: 'mipush.com',
            code: '京ICP备10046444号-10',
            peple: '李永斌'
          },
          {
            title: '小米科技',
            yuming: 'mi.cn',
            code: '京ICP备10046444号-9',
            peple: '李永斌'
          },
          {
            title: '小米TV',
            yuming: 'mitvos.com;mitvos.net',
            code: '京ICP备10046444号-5',
            peple: '李永斌'
          },
          {
            title: '小米科技有限责任公司',
            yuming: 'mi.com',
            code: '京ICP备10046444号-7',
            peple: '李永斌'
          },
          {
            title: '米聊',
            yuming: 'mitalk.com;liaoapp.com',
            code: '京ICP备10046444号-3',
            peple: '李永斌'
          },
          {
            title: '小米推送',
            yuming: 'mipush.com',
            code: '京ICP备10046444号-10',
            peple: '李永斌'
          },
          {
            title: '小米科技',
            yuming: 'mi.cn',
            code: '京ICP备10046444号-9',
            peple: '李永斌'
          },
          {
            title: '小米TV',
            yuming: 'mitvos.com;mitvos.net',
            code: '京ICP备10046444号-5',
            peple: '李永斌'
          },
          {
            title: '小米科技有限责任公司',
            yuming: 'mi.com',
            code: '京ICP备10046444号-7',
            peple: '李永斌'
          },
          {
            title: '米聊',
            yuming: 'mitalk.com;liaoapp.com',
            code: '京ICP备10046444号-3',
            peple: '李永斌'
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
    line-height: 30px;
    color: #3E8EF7;
  }
  .row-num{
    line-height: 20px;
    font-size: 12px;
  }
</style>
