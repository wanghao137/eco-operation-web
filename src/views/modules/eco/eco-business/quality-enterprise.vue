<template>
  <div class="wrap">
    <div class="title">
      <span class="content">挖掘优势产业</span>
      <p>共监控<b>160</b>家目标企业<b>近三个月</b>变动信息</p>
    </div>
    <div class="monitoring current">
      <p>当前监控</p>
      <p style="font-weight: bold">160家</p>
      <span class="span-left">+5%</span>
      <span class="span-border"></span>
      <span class="span-right">11家</span>
    </div>
    <div class="monitoring good">
      <p>优秀企业</p>
      <p style="font-weight: bold">12家</p>
      <span class="span-left">+5%</span>
      <span class="span-border"></span>
      <span class="span-right">11家</span>
    </div>
    <div class="monitoring fine">
      <p>良好企业</p>
      <p style="font-weight: bold">22家</p>
      <span class="span-left">+5%</span>
      <span class="span-border"></span>
      <span class="span-right">11家</span>
    </div>
    <div class="monitoring medium">
      <p>中等企业</p>
      <p style="font-weight: bold">120家</p>
      <span class="span-left">+5%</span>
      <span class="span-border"></span>
      <span class="span-right">11家</span>
    </div>
    <div class="monitoring general">
      <p>一般企业</p>
      <p style="font-weight: bold">31家</p>
      <span class="span-left">+5%</span>
      <span class="span-border"></span>
      <span class="span-right">11家</span>
    </div>
    <div class="monitoring poor">
      <p>较差企业</p>
      <p style="font-weight: bold">25家</p>
      <span class="span-left">+5%</span>
      <span class="span-border"></span>
      <span class="span-right">11家</span>
    </div>
    <div class="clear"></div>
    <div class="talent-title">
      <span>优秀企业综合能力评估</span>
    </div>
    <el-row>
      <el-col :span="8" :xs="24">
        <div id="excChart" style="width:100%;height:230px;"></div>
      </el-col>
      <el-col :span="16" :xs="24">
        <div style="font-weight: bold;margin-bottom: 10px">自身特征优秀企业名单</div>
        <el-table
          :data="tableData"
          stripe
          border
          size="small"
          height="230"
        >
          <el-table-column
            prop="code"
            label="序号"
            header-align="center"
            align="center"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            label="企业名称"
            header-align="center"
            align="left"
            width="">
          </el-table-column>
          <el-table-column
            prop="diqu"
            header-align="center"
            align="center"
            label="单项得分"
            width="100">
          </el-table-column>
          <el-table-column
            prop="date"
            header-align="center"
            align="center"
            label="排名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="hangye"
            header-align="center"
            align="center"
            label="综合能力"
            width="100">
          </el-table-column>
          <el-table-column
            prop="ziben"
            header-align="center"
            align="center"
            label="排名"
            width="100">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <div class="talent-title">
      <span>综合能力榜单</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          code: '1',
          name: '云天化国际化肥有限公司',
          diqu: '92',
          date: '1',
          hangye: '520',
          ziben: '2'
        }, {
          code: '2',
          name: '青海桂鲁化工有限公司',
          diqu: '89',
          date: '2',
          hangye: '480',
          ziben: '3'
        }, {
          code: '3',
          name: '青海比亚迪锂电池有限公司',
          diqu: '88',
          date: '3',
          hangye: '410',
          ziben: '5'
        }, {
          code: '4',
          name: '青海时代新能源科技有限公司',
          diqu: '86',
          date: '4',
          hangye: '380',
          ziben: '7'
        }, {
          code: '5',
          name: '青海盐湖海纳化工有限公司',
          diqu: '85',
          date: '5',
          hangye: '370',
          ziben: '11'
        }, {
          code: '6',
          name: '西部矿业股份有限公司',
          diqu: '82',
          date: '6',
          hangye: '320',
          ziben: '16'
        }, {
          code: '7',
          name: '青海陆丰新型材料有限公司',
          diqu: '80',
          date: '7',
          hangye: '290',
          ziben: '26'
        }, {
          code: '8',
          name: '青海省格拉丹药业有限公司',
          diqu: '75',
          date: '8',
          hangye: '280',
          ziben: '27'
        }]
      }
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('excChart'))
        // 绘制图表
        myChart.setOption({
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#666'
              }
            },
            indicator: [
              { name: '身份特征', max: 6500 },
              { name: '守法守规', max: 16000 },
              { name: '发展潜力', max: 30000 },
              { name: '经营状态', max: 38000 },
              { name: '行为偏好', max: 52000 },
              { name: '创新资质', max: 25000 }
            ]
          },
          series: [
            {
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              // areaStyle: {normal: {}},
              data: [
                {
                  value: [4300, 10000, 28000, 35000, 50000, 19000],
                  lineStyle: {
                    color: 'rgba(81, 141, 213, 0.7)'
                  },
                  areaStyle: {
                    normal: {
                      color: 'rgba(81, 141, 213, 0.7)' // 选择区域颜色
                    }
                  }
                }
              ]
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 100%;
  }
  .title{
    width: 100%;
  }
  .content{
    font-weight: bold;
    font-size: 18px;
    color: steelblue;
  }
  .title p{
    font-size: 12px;
  }
  .title b{
    color: #63A2D8;
  }
  .monitoring{
    width: 16%;
    height: 100px;
    background: #E7E6E6;
    float: left;
    margin-right: 8px;
  }
  .monitoring:last-child{
    margin-right: 0px;
  }
  .monitoring p{
    text-align: center;
    height: 15px;
    line-height: 15px;
    color: #ffffff;
  }
  .monitoring span{
    color: #ffffff;
  }
  .current p{
    color: #000000;
  }
  .current span{
    color: #000000;
  }
  .span-left{
    margin-left: 40px;
  }
  .span-border{
    margin-left: 20px;
    border-right: 1px solid;
  }
  .span-right{
    margin-left: 25px;
  }
  .good{
    background: #548235;
  }
  .fine{
    background: #92D050;
  }
  .medium{
    background: #A9D18E;
  }
  .general{
    background: #FFC000;
  }
  .poor{
    background: #FF0000;
  }
  .talent-title{
    margin-bottom: 15px;
    border-left: 3px solid #3E8EF7;
    margin-top: 10px;
  }
  .talent-title span {
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
  }
  .clear{
    clear: both;
  }
</style>
