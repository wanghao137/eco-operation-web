<template>
  <div>
    <div class="talent-title">
      <span>违法违规</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        1
      </el-button>
    </div>
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in collapseList" :key="index" :name="index">
        <template slot="title">
          <el-col :span="7">
            <el-row class="row-title">{{item.title}}</el-row>
          </el-col>
        </template>
      </el-collapse-item>
    </el-collapse>
    <el-collapse style="border: none" accordion>
      <el-collapse-item v-for="(item, index) in collapseLists" :key="index" :name="index">
        <template slot="title">
          <el-col :span="7">
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
            prop="namecode"
            label="处罚决定书号"
            header-align="center"
            align="left"
            width="">
          </el-table-column>
          <el-table-column
            prop="time"
            header-align="center"
            align="center"
            label="处罚时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="leixing"
            header-align="center"
            align="left"
            show-overflow-tooltip
            label="处罚类型"
            width="150">
          </el-table-column>
          <el-table-column
            prop="yiju"
            header-align="center"
            align="center"
            label="处罚依据"
            width="100">
          </el-table-column>
          <el-table-column
            prop="jieguo"
            header-align="center"
            align="left"
            label="处罚结果"
            width="100">
          </el-table-column>
          <el-table-column
            prop="jiguan"
            header-align="center"
            align="left"
            label="处罚机关"
            width="">
          </el-table-column>
        </el-table>
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
            title: '税务部门的欠税或未报税信息(无)'
          },
          {
            title: '人社的欠社保信息(无)'
          },
          {
            title: '未办理住房公积金缴存登记或欠缴信息(无)'
          },
          {
            title: '12315投诉预警信息(无)'
          }
        ],
        collapseLists: [
          {
            title: '行政处罚(4)'
          }
        ],
        tableData: [{
          code: '1',
          namecode: '京海市监工罚(2019) 960号',
          time: '2019-11-26',
          leixing: '[070612]经营者与消费者采用格式条款订立合同，经营者在格式条款中排除消费者解释格式条款的权利',
          yiju: '-',
          jieguo: '罚款100000元',
          jiguan: '北京市海淀区市场监督管理局'
        }, {
          code: '2',
          namecode: '京海市监工罚(2019) 963号',
          time: '2019-11-26',
          leixing: '[010101]经营者与消费者采用格式条款订立合同，经营者在格式条款中排除消费者解释格式条款的权利',
          yiju: '-',
          jieguo: '罚款100000元',
          jiguan: '北京市海淀区市场监督管理局'
        }, {
          code: '3',
          namecode: '京工商海处字(2018)第2329号',
          time: '2018-12-20',
          leixing: '[010101]经营者与消费者采用格式条款订立合同，经营者在格式条款中排除消费者解释格式条款的权利',
          yiju: '-',
          jieguo: '罚款100000元',
          jiguan: '北京市工商行政管理局海淀分局'
        }, {
          code: '4',
          namecode: '京工商海处字(2018)第2309号',
          time: '2019-11-26',
          leixing: '[070612]经营者与消费者采用格式条款订立合同，经营者在格式条款中排除消费者解释格式条款的权利',
          yiju: '-',
          jieguo: '罚款100000元',
          jiguan: '北京市工商行政管理局海淀分局'
        }]
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
    line-height: 60px;
    color: #3E8EF7;
  }
  .row-num{
    line-height: 20px;
    font-size: 12px;
  }
</style>
