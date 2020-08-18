<template>
  <div>
    <div class="talent-title">
      <span>发展历程</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        308
      </el-button>
    </div>
    <div>
      <el-button icon="el-icon-edit" class="button" type="primary">企业变更(1)</el-button>
      <el-button icon="el-icon-money" class="button" type="primary">对外投资(18)</el-button>
      <el-button icon="el-icon-star-off" class="button" type="primary">专利注册(118)</el-button>
      <el-button icon="el-icon-goods" class="button" type="primary">商标注册(82)</el-button>
      <el-button icon="el-icon-menu" class="button" type="primary">软件产品(18)</el-button>
      <el-button icon="el-icon-circle-plus-outline" class="button" type="primary">资质认证(1)</el-button>
      <el-button icon="el-icon-location" class="button" type="primary">网站信息(3)</el-button>
      <el-button icon="el-icon-question" class="button" type="primary">违法违规(66)</el-button>
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item type="primary" size="large" icon="el-icon-time" timestamp="2017年" placement="top">
          <el-button icon="el-icon-star-off" class="button" type="primary">2</el-button>
          <el-button icon="el-icon-goods" class="button" type="primary">1</el-button>
        </el-timeline-item>
        <el-timeline-item class="mouth" size="normal" icon="el-icon-time" timestamp="2月" placement="top">
          <div class="timeline-content">
            <p>
              授权专利52件，名称：贴合控制系统，方法及装置；一种具有二维码扫描功能的拍照方法及系统；网页预取方法，装置及终端设备；
              一种显示应用程序背景图像的方法和装置；一种消息传输方法和装置；一种信息共享方法及装置；一种提供密码的方法......
            </p>
          </div>
        </el-timeline-item>
        <el-timeline-item class="mouth" size="normal" icon="el-icon-time" timestamp="1月" placement="top">
          <div class="timeline-content">
            <p>
              授权专利52件，名称：贴合控制系统，方法及装置；一种具有二维码扫描功能的拍照方法及系统；网页预取方法，装置及终端设备；
              一种显示应用程序背景图像的方法和装置；一种消息传输方法和装置；一种信息共享方法及装置；一种提供密码的方法......
            </p>
            <p style="border-bottom: 1px dashed #ebeef5"></p>
            <p>
              注册商标3个，名称：米家；MIJIA；小米公交
            </p>
          </div>
        </el-timeline-item>
        <el-timeline-item type="primary" size="large" icon="el-icon-time" timestamp="2016年" placement="top">
          <el-button icon="el-icon-money" class="button" type="primary">1</el-button>
          <el-button icon="el-icon-star-off" class="button" type="primary">17</el-button>
          <el-button icon="el-icon-goods" class="button" type="primary">21</el-button>
          <el-button icon="el-icon-menu" class="button" type="primary">2</el-button>
          <el-button icon="el-icon-question" class="button" type="primary">10</el-button>
        </el-timeline-item>
        <el-timeline-item class="mouth" size="normal" icon="el-icon-time" timestamp="12月" placement="top">
          <div class="timeline-content">
            <p>
              投资公司1家，公司名称：小米信用管理有限公司
            </p>
            <p style="border-bottom: 1px dashed #ebeef5"></p>
            <p>
              授权专利26件，名称：移动终端连接网络的方法，移动终端与终端设备；一种进行系统复制和还原的方法和装置；清洁机器人；一种基于眼球跟踪的翻译方法及系统；
              一种成像方法和装置；浏览器导航页的显示方法及移动终端；触摸屏及移动终端......
            </p>
            <p style="border-bottom: 1px dashed #ebeef5"></p>
            <p>注册商标2个，名称：ZHIMI；米支付</p>
          </div>
        </el-timeline-item>
        <el-timeline-item class="mouth" size="normal" icon="el-icon-time" timestamp="11月" placement="top">
          <div class="timeline-content">
            <p>
              授权专利11件，名称：自动清洁设备，封面匹配方法；带显示界面的净水器；清洁机器人；一种基于眼球跟踪的翻译方法及系统；
              一种成像方法和装置；浏览器导航页的显示方法及移动终端；触摸屏及移动终端......
            </p>
            <p style="border-bottom: 1px dashed #ebeef5"></p>
            <p>
              注册商标5个，名称：小米口袋音响；随意行；咱们家；咱家；神股
            </p>
            <p style="border-bottom: 1px dashed #ebeef5"></p>
            <p>申请商标4个，名称：围观；AD TAG；TAG；米家</p>
            <p style="border-bottom: 1px dashed #ebeef5"></p>
            <p>登记软件著作权2件，名称：小米移动网上营业厅软件(IOS版)V1.0；小米移动网上营业厅软件(Android版)V1.0</p>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

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
  .button{
    font-size: 12px;
    padding: 6px 6px;
  }
  .block{
    margin-top: 20px;
    margin-left: 15px;
  }
  .timeline-content{
    border: 1px solid #ebeef5;
    border-radius: 3px;
  }
  .timeline-content p{
    font-size: 12px;
    line-height: 20px;
    margin: 5px;
  }
</style>
