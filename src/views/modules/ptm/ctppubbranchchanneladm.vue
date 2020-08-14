<template>
  <div class="mod-config">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="dataForm.branch" placeholder="机构代码" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="dataForm.channelcode" placeholder="渠道代码" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button @click="reset(),getDataList()">重置</el-button>
        <el-button v-if="isAuth('ptm:ctppubbranchchanneladm:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button v-if="isAuth('ptm:ctppubbranchchanneladm:delete')" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
      </el-form-item>
    </el-form>
    <el-table
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
        prop="branch"
        header-align="center"
        align="center"
        label="机构代码">
      </el-table-column>
      <el-table-column
        prop="channelcode"
        header-align="center"
        align="center"
        label="渠道代码">
      </el-table-column>
      <el-table-column
        prop="channelname"
        header-align="center"
        align="center"
        :formatter = "channelnameFormat"
        label="渠道名称">
      </el-table-column>
      <el-table-column
        prop="branchchlstatus"
        header-align="center"
        align="center"
        label="机构渠道状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.branchchlstatus === '0'" size="small" type="danger">未开通</el-tag>
          <el-tag v-else-if="scope.row.branchchlstatus === '1'" size="small">已开通</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="branchchleffectdate"
        header-align="center"
        align="center"
        label="机构渠道生效日期">
      </el-table-column>
      <el-table-column
        prop="branchchlinvaliddate"
        header-align="center"
        align="center"
        label="机构渠道失效日期">
      </el-table-column>
      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="150"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.branch,scope.row.channelcode)">修改</el-button>
          <el-button type="text" size="small" @click="deleteHandle(scope.row.branch,scope.row.channelcode)">删除</el-button>
        </template>
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
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
  </div>
</template>

<script>
  import AddOrUpdate from './ctppubbranchchanneladm-add-or-update'
  export default {
    data () {
      return {
        channelinfoList: '',
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
      AddOrUpdate
    },
    activated () {
      this.getChannelInfo()
      this.getDataList()
    },
    methods: {
      reset () {
        this.dataForm.channelcode = ''
        this.dataForm.branch = ''
      },
      channelnameFormat (row, col) {
        let channelcode = row.channelcode
        for (let i = 0; i < this.channelinfoList.length; i++) {
          if (channelcode === this.channelinfoList[i].channelcode) {
            return this.channelinfoList[i].channelname
          }
        }
      },

      getChannelInfo () {
        this.$http({
          url: this.$http.adornUrl(`/ptm/ctppubchanneladm/list`),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.channelinfoList = data.page.list
          } else {
            this.channelinfoList = []
          }
        })
        return this.channelinfoList
      },
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/ptm/ctppubbranchchanneladm/list'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'limit': this.pageSize,
            'channelcode': this.dataForm.channelcode,
            'branch': this.dataForm.branch
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
      },
      // 新增 / 修改
      addOrUpdateHandle (id, code) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id, code)
          this.$refs.addOrUpdate.doGetDicts()
        })
      },
      // 删除
      deleteHandle (id, code) {
        var isBatch = false
        var arrayPara = []
        var mapPara = {}
        if (id) {
          mapPara['branch'] = id
          mapPara['channelcode'] = code
          arrayPara.push(mapPara)
        } else {
          isBatch = true
          this.dataListSelections.map(item => {
            mapPara = {}
            mapPara['channelcode'] = item.channelcode
            mapPara['branch'] = item.branch
            arrayPara.push(mapPara)
          })
        }
        this.$confirm(`确定对[id=${JSON.stringify(arrayPara)}]进行[${JSON.stringify(arrayPara) ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
            url: this.$http.adornUrl('/ptm/ctppubbranchchanneladm/delete'),
            method: 'post',
            params: this.$http.adornParams({
              'isBatch': isBatch,
              'arrayPara': encodeURIComponent(encodeURIComponent(JSON.stringify(arrayPara)))
            })
          }).then(({data}) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                }
              })
            } else {
              this.$message.error(data.msg)
            }
          })
        })
      }
    }
  }
</script>
