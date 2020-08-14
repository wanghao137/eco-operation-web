<template>
  <el-dialog
    :title="isNew ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="120px">
 <el-row :gutter="20">
 <el-col :span="11">
    <el-form-item label="机构代码" prop="upbranch">
        <el-popover
          ref="menuListPopover"
          placement="bottom-start"
          trigger="click">
          <el-tree
            :data="menuList"
            :props="menuListTreeProps"
            node-key="branch"
            ref="menuListTree"
            @current-change="menuListTreeCurrentChangeHandle"
            :default-expand-all="true"
            :highlight-current="true"
            :expand-on-click-node="false">
          </el-tree>
        </el-popover>
        <el-input v-model="dataForm.parentName" v-popover:menuListPopover :readonly="true" placeholder="点击选择上级菜单" class="menu-list__input"></el-input>
      </el-form-item>
      </el-col>
      </el-row>
    <!-- <el-form-item label="机构代码" prop="branchs">
     <el-select :disabled="isNew ? false:true" v-model="dataForm.branch" placeholder="请选择机构代码">
        <el-option  v-for="item in dictList" :key="item.branch" :label="item.branch"
                    :value="item.channelcode">
        </el-option>
      </el-select>
    </el-form-item> -->
    <el-form-item label="渠道代码" prop="channelcode">
      <el-select :disabled="isNew ? false:true" v-model="dataForm.channelcode" placeholder="请选择渠道代码">
        <el-option  v-for="item in dictList" :key="item.channelcode" :label="item.channelcode+'-'+item.channelname"
                    :value="item.channelcode">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="机构渠道状态" prop="branchchlstatus">
      <el-radio-group v-model="dataForm.branchchlstatus">
        <el-radio :label="0">未开通</el-radio>
        <el-radio :label="1">已开通</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="生效日期" prop="beginenddate">
      <el-date-picker
        v-model="dataForm.beginenddate"
        type="daterange"
        range-separator="至"
        start-placeholder="开始生效日期"
        end-placeholder="结束生效日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item v-show="false" label="服务生效日期" prop="branchchleffectdate">
      <el-date-picker
        v-model="dataForm.branchchleffectdate"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="服务生效日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item  v-show="false" label="服务失效日期" prop="branchchlinvaliddate">
      <el-date-picker
        v-model="dataForm.branchchlinvaliddate"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="服务失效日期">
      </el-date-picker>
    </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { treeDataTranslate } from '@/utils'
import {convertDateFromString, dateFormat} from '../../../utils'
  export default {
    data () {
      return {
        dictList: [],
        isNew: false,
        visible: false,
        dataForm: {
          branch: 0,
          branchname: '',
          branchsname: '',
          upbranch: '',
          beginenddate: '',
          branchs: '',
          channelcode: '',
          branchchlstatus: '',
          branchchleffectdate: '',
          branchchlinvaliddate: '',
          parentName:""
        },
         treeDataSelect:[
          {
              "id":"527AF5EB3A6A463294181DBE13E36CD7",
              "parentId":"-1",
              "dirType":0,
              "dirName":"test",
              "children":[
                  {
                      "id":"434051D4A7F5459FADCEC3A3BE79F83F",
                      "parentId":"527AF5EB3A6A463294181DBE13E36CD7",
                      "dirType":0,
                      "dirName":"testChild",
                      "children":null,
                      "label":null,
                      "name":"testChild"
                  }
              ],
              "label":null,
              "name":"test"
          }
      ],
        menuList: [],
          menuListTreeProps: {
          label: 'branchsname',
          children: 'children'
        },

        dataRule: {
          branch: [
            { required: true, message: '渠道代码不能为空', trigger: 'blur' }
          ],
          channelcode: [
            { required: true, message: '渠道代码不能为空', trigger: 'blur' }
          ],
          branchchlstatus: [
            { required: false, message: '机构渠道状态 0-机构渠道未开通 1-机构渠道已开通不能为空', trigger: 'blur' }
          ],
          branchchleffectdate: [
            { required: false, message: '机构渠道生效日期不能为空', trigger: 'blur' }
          ],
          branchchlinvaliddate: [
            { required: false, message: '机构渠道失效日期不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      doGetDicts () {
        this.$http({
          url: this.$http.adornUrl(`/ptm/ctppubchanneladm/list`),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.dictList = data.page.list
          }
        })
      },
      init (id, code) {
        this.dataForm.branch = id || ''
        if (this.dataForm.branch === '') {
          this.isNew = true
        } else {
          this.isNew = false
        }
        let datearray = []
        this.visible = true
        this.$http({
          url: this.$http.adornUrl('/ptm/ctppubbranchinfo/list'),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({data}) => {
          this.menuList = treeDataTranslate(data.list, 'branch', 'upbranch')
        }).then(() => {
          this.visible = true
          this.$nextTick(() => {
            this.$refs['dataForm'].resetFields()
          })
        }).then(() => {
          if (!this.dataForm.id) {
            // 新增
            this.menuListTreeSetCurrentNode()
          }
        })
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
            this.$http({
              url: this.$http.adornUrl(`/ptm/ctppubbranchchanneladm/list`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              // if (data && data.code === 0) {
              //   this.dataForm.branch = data.ctpPubbranchchanneladm.branch
              //   this.dataForm.channelcode = data.ctpPubbranchchanneladm.channelcode
              //   this.dataForm.branchchlstatus = parseInt(data.ctpPubbranchchanneladm.branchchlstatus)
              //   this.dataForm.branchchleffectdate = data.ctpPubbranchchanneladm.branchchleffectdate
              //   this.dataForm.branchchlinvaliddate = data.ctpPubbranchchanneladm.branchchlinvaliddate
              //   datearray.push(new Date(convertDateFromString('2', this.dataForm.branchchleffectdate)))
              //   datearray.push(new Date(convertDateFromString('2', this.dataForm.branchchlinvaliddate)))
              //   this.dataForm.beginenddate = datearray
              //   this.menuListTreeSetCurrentNode()
              // }
            })
        })
      },
       // 菜单树选中
      menuListTreeCurrentChangeHandle (data, node) {
        this.dataForm.branch = data.branch
        this.dataForm.parentName = data.branchsname
      },
      // 菜单树设置当前选中节点
      menuListTreeSetCurrentNode () {
        this.$refs.menuListTree.setCurrentKey(this.dataForm.branch)
        this.dataForm.parentName = (this.$refs.menuListTree.getCurrentNode() || {})['branchsname']
      },
      // 表单提交
      dataFormSubmit () {
        let datadate = this.dataForm.beginenddate
        this.dataForm.branchchleffectdate = dateFormat('YY-mm-dd', datadate[0])
        this.dataForm.branchchlinvaliddate = dateFormat('YY-mm-dd', datadate[1])
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/ptm/ctppubbranchchanneladm/${this.isNew ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'branch': this.dataForm.branch || undefined,
                'channelcode': this.dataForm.channelcode,
                'branchchlstatus': this.dataForm.branchchlstatus,
                'branchs': this.dataForm.branchs,
                'branchchleffectdate': this.dataForm.branchchleffectdate,
                'branchchlinvaliddate': this.dataForm.branchchlinvaliddate
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
