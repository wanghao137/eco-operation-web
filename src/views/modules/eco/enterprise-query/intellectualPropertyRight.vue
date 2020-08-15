<template>
  <div>
    <div class="talent-title">
      <span>专利申请</span>
      <el-button
        style="font-size: 10px;padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        6273
      </el-button>
    </div>
    <el-table
      :data="tableData"
      stripe
      border
      size="small"
      style="width: 100%">
      <el-table-column
        prop="patent"
        label="专利类型"
        header-align="center"
        align="center"
        width="150">
      </el-table-column>
      <el-table-column
        prop="patentname"
        label="专利名称"
        header-align="center"
        align="left"
        width="">
      </el-table-column>
      <el-table-column
        prop="status"
        header-align="center"
        align="center"
        label="当前状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        header-align="center"
        align="center"
        label="申请日期"
        width="120">
      </el-table-column>
    </el-table>
    <div class="table-more"><i class="el-icon-caret-bottom"></i>点击获取更多</div>
    <div style="margin-top: 20px" class="talent-title">
      <span>商标注册</span>
      <el-button
        style="font-size: 10px;
        padding: 2px 4px"
        size="mini"
        type="warning"
        round>
        1857
      </el-button>
    </div>
    <el-table
      :data="markData"
      stripe
      border
      size="small"
      style="width: 100%">
      <el-table-column
        prop="regnum"
        label="注册号"
        header-align="center"
        align="center"
        width="150">
      </el-table-column>
      <el-table-column
        prop="brandname"
        label="商标名称"
        header-align="center"
        align="left"
        width="">
      </el-table-column>
      <el-table-column
        prop="field"
        header-align="center"
        align="left"
        label="注册领域"
        width="">
      </el-table-column>
      <el-table-column
        prop="date"
        header-align="center"
        align="center"
        label="申请日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        header-align="center"
        align="center"
        label="商标状态"
        width="120">
      </el-table-column>
    </el-table>
    <div class="table-more"><i class="el-icon-caret-bottom"></i>点击获取更多</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          patent: '发明专利',
          patentname: '充电方法及装置',
          status: '公开',
          date: '2020-08-20'
        }, {
          patent: '发明专利',
          patentname: '终端触控识别方法及装置',
          status: '公开',
          date: '2020-08-20'
        }, {
          patent: '发明专利',
          patentname: '配置电子设备场景的方法及装置',
          status: '公开',
          date: '2020-08-20'
        }, {
          patent: '发明专利',
          patentname: '充电方法及装置',
          status: '公开',
          date: '2020-08-20'
        }, {
          patent: '发明专利',
          patentname: '图书推荐方法及装置',
          status: '公开',
          date: '2020-08-20'
        }],
        markData: [{
          regnum: '22075629',
          brandname: 'AD TAG',
          field: '[35]广告销售',
          date: '2020-08-20',
          status: '有效'
        }, {
          regnum: '22075586',
          brandname: 'TAG',
          field: '[35]广告销售',
          date: '2020-08-20',
          status: '有效'
        }, {
          regnum: '22075345',
          brandname: 'AD TAG',
          field: '[9]科学仪器',
          date: '2020-08-20',
          status: '有效'
        }, {
          regnum: '22075513',
          brandname: 'TAG',
          field: '[9]科学仪器',
          date: '2020-08-20',
          status: '有效'
        }, {
          regnum: '22044294',
          brandname: '米家',
          field: '[16]办公用品',
          date: '2020-08-20',
          status: '有效'
        }]
      }
    },
    methods: {}
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
