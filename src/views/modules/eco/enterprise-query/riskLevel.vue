<template>
  <div>
    <div class="main-box" v-for="(item,index) in data[1].child" :key="index">
      <div class="left">{{item.name}}：</div>
      <div class="right">
        <p v-for="(val,num) in item.child" :key="num">
          <span v-if="val.name=='更多' || val.name=='自定义'">{{val.name}}</span>
          <el-checkbox v-model="val.check" v-else-if="item.name == '风险级别' || item.name=='信用级别'">
            <span>{{val.name}}</span>
          </el-checkbox>
          <el-checkbox v-model="val.check" v-else>{{val.name}}</el-checkbox>
        </p>
      </div>
    </div>
    <div style="position: absolute;left: 570px;top: 320px">
      <el-date-picker
        v-model="value1"
        type="daterange"
        size="small"
        range-separator="——"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>
    <span>共 <b style="color: red">5679</b> 条符合条件的自身风险信息</span>
    <div class="talent-title">
      <span>经营异常</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="danger"
        plain>
        高风险信息
      </el-button>
    </div>
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in collapseList" :key="index" :name="index">
        <template slot="title">
          <el-col>
            <el-row class="row-title">{{item.title}}</el-row>
          </el-col>
        </template>
        <el-table
          :data="tableData"
          stripe
          border
          size="small"
          >
          <el-table-column
            prop="code"
            label="序号"
            header-align="center"
            align="center"
            width="100">
          </el-table-column>
          <el-table-column
            prop="date"
            label="列入日期"
            header-align="center"
            align="center"
            width="150">
          </el-table-column>
          <el-table-column
            prop="yuanyin"
            header-align="center"
            align="left"
            label="列入经营异常名录原因"
            width="">
          </el-table-column>
          <el-table-column
            prop="jiguan"
            header-align="center"
            align="left"
            label="作出决定机关"
            width="">
          </el-table-column>
          <el-table-column
            prop="yichudate"
            header-align="center"
            align="center"
            label="移出日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="yichuyuanyin"
            header-align="center"
            align="left"
            label="移出经营异常名录原因"
            width="">
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
    <div class="talent-title">
      <span>法律诉讼</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        plain>
        警示信息
      </el-button>
    </div>
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in warnList" :key="index" :name="index">
        <template slot="title">
          <el-col>
            <el-row class="row-title">{{item.title}}</el-row>
          </el-col>
        </template>
        <el-table
          :data="warnData"
          stripe
          border
          size="small"
        >
          <el-table-column
            prop="code"
            label="序号"
            header-align="center"
            align="center"
            width="100">
          </el-table-column>
          <el-table-column
            prop="date"
            label="发布日期"
            header-align="center"
            align="center"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            header-align="center"
            align="left"
            label="案件名称"
            width="">
          </el-table-column>
          <el-table-column
            prop="liyou"
            header-align="center"
            align="left"
            label="案由"
            width="">
          </el-table-column>
          <el-table-column
            prop="shenfen"
            header-align="center"
            align="center"
            label="案件身份"
            width="150">
          </el-table-column>
          <el-table-column
            prop="anhao"
            header-align="center"
            align="left"
            label="案号"
            width="">
          </el-table-column>
          <el-table-column
            prop="pred"
            header-align="center"
            align="center"
            label="操作"
            width="100">
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import json from './components/data.json'
  export default {
    data () {
      return {
        value1: '',
        data: [],
        collapseList: [
          {
            title: '该公司 曾因登记的住所或经营场所无法联系而被列入企业经营异常名录(1)'
          }
        ],
        warnList: [
          {
            title: '该公司 曾因著作权权属，侵权纠纷而被他人或公司起诉(1666)'
          }, {
            title: '该公司 曾因网络购物合同纠纷而被他人或公司起诉(1092)'
          }, {
            title: '该公司 曾因买卖合同纠纷而被他人或公司起诉(329)'
          }

        ],
        tableData: [{
          code: '1',
          date: '2015-07-01',
          yuanyin: '通过登记的住所或者经营场所无法联系的',
          jiguan: '北京市工商行政管理局北京经济技术开发区分局',
          yichudate: '2015-07-14',
          yichuyuanyin: '列入经营异常名录3年内且依照《经营异常名录管理办法》第九条规定被列入经营异常名录的企业，依法办理登记后，申请移出'
        }],
        warnData: [{
          code: '1',
          date: '2020-07-31',
          name: '汕头市澄海区丰源玩具实业有限公司等与大元传媒著作权权属，侵权纠纷二审民事判决书',
          liyou: '著作权权属，侵权纠纷',
          shenfen: '上诉人-汕头市澄海区丰源玩具实业有限公司，被告-北京市京东三百六十度电子商务有限公司，大元传媒',
          anhao: '(2019)京73民终1024号',
          pred: '详细'
        }, {
          code: '2',
          date: '2020-07-31',
          name: '华强方特(深圳)动漫有限公司与苏州奇璐服饰有限公司，北京京东三百六十度电子商务有限公司著作权权属，侵权纠纷一审民事判决书',
          liyou: '著作权权属，侵权纠纷',
          shenfen: '原告-华强方特(深圳)动漫有限公司，被告-北京市京东三百六十度电子商务有限公司，苏州奇璐服饰有限公司',
          anhao: '(2020)苏0581民初1908号',
          pred: '详细'
        }, {
          code: '3',
          date: '2020-07-31',
          name: '华强方特(深圳)动漫有限公司与苏州奇璐服饰有限公司，北京京东三百六十度电子商务有限公司著作权权属，侵权纠纷一审民事判决书',
          liyou: '著作权权属，侵权纠纷',
          shenfen: '原告-华强方特(深圳)动漫有限公司，被告-北京市京东三百六十度电子商务有限公司，苏州奇璐服饰有限公司',
          anhao: '(2020)苏0581民初1908号',
          pred: '详细'
        }]
      }
    },
    created () {
      var data = json
      data.forEach((info) => {
        info.child.forEach((item) => {
          if (typeof item.child[0] !== 'object') {
            const arr = []
            item.child.forEach((val) => {
              const obj = {
                name: val,
                check: false
              }
              arr.push(obj)
            })
            item.child = arr
          }
        })
      })
      console.log(data)
      this.data = data
    },
    methods: {
      handleChange (val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>
  p{
    margin: 0;
  }
  .talent-title{
    margin-top: 20px;
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
    line-height: 60px;
    color: #3E8EF7;
  }
  .row-num{
    line-height: 20px;
    font-size: 12px;
  }
  .main-box {
    display: flex;
    margin-bottom: 15px;
  }
  .left {
    color: #999999;
    line-height: 30px;
  }
  .right {
    flex: 1;
    margin-left: 10px;
  }
  .right p {
    display: inline-block;
    margin-right: 18px;
    line-height: 30px;
  }
</style>
