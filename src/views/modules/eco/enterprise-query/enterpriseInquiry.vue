<template>
  <div class="wrap">
    <el-dialog title="高级搜索" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <AdvancedSearch ref="child" @confirmVal='confirmVal'/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </span>
    </el-dialog>
    <div class="main">
      <div class="main-box">
        <div class="lis">
          <p
            v-for="(item,index) in lis"
            :key="index"
            :class="liIndex == index ? 'active' : ''"
            @click="liFn(index)"
          >{{item}}</p>
        </div>
        <div class="box">
          <div class="inp" v-if="liIndex == 0">
            <div>
              <el-input v-model="input" placeholder="请输入企业名称等关键字"></el-input>
            </div>
            <div>
              <el-button type="warning" @click="search">查询</el-button>
            </div>
            <div>
              <el-button @click="dialogVisible = true" style="margin-left:20px">高级搜索</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdvancedSearch from './components/advancedSearch'
export default {
  name: 'enterpriseInquiry',
  data () {
    return {
      dialogVisible: false,
      input: '',
      lis: ['企业名称', '统一社会信用代码', '注册地址'],
      liIndex: 0,
      info: []
    }
  },
  components: {
    AdvancedSearch
  },
  methods: {
    search () {
      localStorage.setItem('inpVal', this.input)
      localStorage.setItem('info', JSON.stringify(this.info))
      this.$router.push('searchDetails')
    },
    liFn (index) {
      this.liIndex = index
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    confirm () {
      this.$refs.child.confirm()
    },
    confirmVal (val) {
      this.dialogVisible = false
      this.info = val
    },
    reset () {
      this.$refs.child.reset()
    }
  }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 500px;
  background: url(../../../../assets/img/banner.png);
  background-size: 100%;
  position: relative;
}
.main {
  width: 100%;
  position: absolute;
  top: 130px;
  display: flex;
  justify-content: center;
}
.lis {
  display: flex;
  color: white;
}
.lis p {
  margin-right: 40px;
  padding: 4px 8px;
  cursor: pointer;
}
.main-box {
  width: 60%;
}
.active {
  background: white;
  color: #0046bf;
  padding: 4px 8px;
  border-radius: 3px;
}
.inpVal {
  height: 40px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 0;
  outline: 0;
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
}
.inp {
  display: flex;
  margin-top: 20px;
}
.inp div:nth-child(1) {
  flex: 1;
}
</style>
