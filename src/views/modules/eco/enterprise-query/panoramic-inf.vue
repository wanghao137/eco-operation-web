<!--操作日志明细-->
<template>
  <div class="mod-config">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="dataForm.key" placeholder="填写名称搜索" size="small" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()" size="small">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table size="small"
              :data="dataList"
              border
              v-loading="dataListLoading"
              @selection-change="selectionChangeHandle"
              style="width: 100%;">
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column
        prop="sCode"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="流水号">
      </el-table-column>
      <el-table-column
        prop="tabName"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="操作表名">
      </el-table-column>
      <el-table-column
        prop="method"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="调用方法">
      </el-table-column>
      <el-table-column
        prop="operatorType"
        header-align="left"
        align="left"
        width="80"
        label="操作类型">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.operatorType == '0'" size="small">其他</el-tag>
          <el-tag v-if="scope.row.operatorType == '1'" size="small">新增</el-tag>
          <el-tag v-if="scope.row.operatorType == '2'" size="small">删除</el-tag>
          <el-tag v-if="scope.row.operatorType == '3'" size="small">修改</el-tag>
          <el-tag v-if="scope.row.operatorType == '4'" size="small">查询</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="operatorSql"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="操作SQL">
      </el-table-column>
      <el-table-column
        prop="beforeData"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="操作前数据">
      </el-table-column>
      <el-table-column
        prop="afterData"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="操作后数据">
      </el-table-column>
      <el-table-column
        prop="operatorCond"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="SQL条件">
      </el-table-column>
      <el-table-column
        prop="operParam"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="操作参数">
      </el-table-column>
      <el-table-column
        prop="status"
        header-align="left"
        align="left"
        width="80"
        label="执行状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status == '0'" size="small">成功</el-tag>
          <el-tag v-if="scope.row.status == '1'" size="small" type="danger">失败</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="errorMsg"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="错误信息">
      </el-table-column>
      <el-table-column
        prop="operTime"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="操作时间">
      </el-table-column>
      <el-table-column
        prop="jsonResult"
        header-align="left"
        align="left"
        show-overflow-tooltip
        label="执行结果">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userEntity: '',
        dataForm: {
          key: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        addOrUpdateVisible: false
      }
    },
    components: {
    },
    activated () {
      this.getDataList()
      var tabSession = sessionStorage.getItem('tabSession')
      this.userEntity = JSON.parse(tabSession)
      console.log(this.userEntity)
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/operlogdetails/list'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'limit': this.pageSize,
            'key': this.dataForm.key
          })
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
      }
    }
  }
</script>
