<template>
  <div class="wrap">
    <el-dialog title="高级搜索" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <AdvancedSearch ref="child" @confirmVal="confirmVal" />
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
              <el-button type="primary" @click="search" style="margin-left:-2px">查询</el-button>
            </div>
            <div>
              <el-button @click="dialogVisible = true" style="margin-left:20px">高级搜索</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="info-box">
        <div class="search">
          <p class="title">高级查询条件</p>
          <div class="seach-box">
            <div class="dl" v-for="(item,index) in info" :key="index">
              <dl>
                <dd>{{item.name}}：</dd>
                <dt>
                  <p v-for="(val,num) in item.child" :key="num">{{val}}</p>
                </dt>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <p class="txt">
        根据检索内容，共检索到
        <span>{{searchData.length}}</span> 家企业，共用时
        <span>0.3</span> 秒，若未检索到你需要的企业，请优化查询条件
      </p>
      <div class="infos">
        <div class="infos-box" v-for="(item,index) in searchData" :key="index">
          <div class="box name" @click="goTo">{{item.name}}</div>
          <div class="box">历史名称：{{item.oldName}}</div>
          <div class="box">
            <p>
              <img src="../../../../assets/img/wode.png" alt />
              <span>{{item.man}}</span>
            </p>
            <p>
              <img src="../../../../assets/img/电话.png" alt />
              <span>{{item.phone}}</span>
            </p>
          </div>
          <div class="box">
            <p>
              <img src="../../../../assets/img/zuobiao.png" alt />
              <span>{{item.address}}</span>
            </p>
            <p>
              <img src="../../../../assets/img/邮箱.png" alt />
              <span>{{item.email}}</span>
            </p>
          </div>
          <div class="box">
            <p>
              <img src="../../../../assets/img/shijian1.png" alt />
              <span>{{item.time}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdvancedSearch from "./components/advancedSearch";
export default {
  name: "searcjDetails",
  data() {
    return {
      searchData: [],
      lis: ["企业名称", "统一社会信用代码", "注册地址"],
      liIndex: 0,
      input: "",
      dialogVisible: false,
      info: [],
      data: [
        {
          name: "小米科技有限责任公司",
          oldName: "北京小米科技有限责任公司",
          man: "雷军",
          address: "北京市海淀区清河中街68号华润五彩城购物中心二期13层",
          time: "2010-03-03",
          phone: "6060666-1234",
          email: "chenchongwei@xiaomi.com",
          www: "www.xiaomi.com",
        },
      ],
    };
  },
  components: {
    AdvancedSearch,
  },
  methods: {
    goTo(){
      this.$router.push('panoramic-inf')
    },
    liFn(index) {
      this.liIndex = index;
    },
    reset(){
      this.$refs.child.reset();
    },
    confirm() {
      this.$refs.child.confirm();
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    confirmVal(val) {
      this.dialogVisible = false;
      this.info = val;
      var arr = [];
      for (let key in this.info) {
        const obj = {
          name: key,
          child: this.info[key],
        };
        arr.push(obj);
      }
      this.info = arr;
    },
    search() {
      var arr = [];
      this.data.forEach((item) => {
        if (item.name.includes(this.input)) {
          arr.push(item);
        }
      });
      this.searchData = arr;
    },
  },
  created() {
    this.input = localStorage.getItem("inpVal");
    this.info = JSON.parse(localStorage.getItem("info"));
    var arr = [];
    for (let key in this.info) {
      const obj = {
        name: key,
        child: this.info[key],
      };
      arr.push(obj);
    }
    this.info = arr;
    this.search();
  },
};
</script>

<style scoped>
.name{
  cursor: pointer;
}
.txt {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  box-sizing: border-box;
}
.txt span {
  color: red;
}
.wrap .el-button,
.wrap .el-input__inner {
  border-radius: 0;
}
.wrap {
  width: 100%;
}
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #eaf3fc;
}
.lis {
  display: flex;
  color: #666666;
}
.lis p {
  padding: 6px 8px;
  cursor: pointer;
  margin: 0;
  margin-right: 40px;
}
.main-box {
  width: 60%;
  padding: 20px 0;
  box-sizing: border-box;
}
.active {
  background: #0384ff;
  color: white;
  padding: 4px 8px;
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
}
.inp div:nth-child(1) {
  flex: 1;
}
.dl {
  display: inline-block;
  width: 50%;
  border-bottom: 0.5px #e4e4e4 solid;
}
.info {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.info-box {
  width: 80%;
  margin: 0 auto;
}
.search {
  box-shadow: 1px 2px 5px rgba(52, 153, 250, 0.2);
  padding: 10px 20px;
  box-sizing: border-box;
}
.title {
  border-left: 3px #0384ff solid;
  padding-left: 10px;
}
.seach-box {
  /* display: flex; */
  border-bottom: 0.5px #e4e4e4 solid;
}

.seach-box dl dd,
.seach-box dl dt {
  margin: 0;
}
.seach-box dl {
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  color: #999999;
  text-align: left;
  padding: 10px 0;
}
.seach-box:nth-last-child(1) {
  border: 0 !important;
}
.seach-box dl dt {
  display: flex;
  margin-left: 8px;
  color: #666666;
}
.seach-box dl dt p {
  margin: 0;
  padding: 0;
}
.infos-box .box {
  display: flex;
}
.box:nth-child(1) {
  color: #22619c;
  font-size: 18px;
}
.box:nth-child(2) {
  margin: 5px 0;
}
.infos-box {
  margin: 0 auto;
  width: 80%;
  color: #666666;
  border-bottom: 0.5px #dbdbdb dotted;
}
.infos-box:nth-last-child(1) {
  border: 0;
}
.infos-box .box p {
  flex: 1;
  margin: 0;
  line-height: 30px;
  display: flex;
  align-items: center;
}
.infos-box .box p img {
  margin-right: 10px;
}
</style>