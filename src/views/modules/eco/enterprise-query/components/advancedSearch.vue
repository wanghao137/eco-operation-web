<template>
  <div class="wrap1">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in data" :key="index" :label="item.type" :name="item.id"></el-tab-pane>
    </el-tabs>
    <div class="main">
      <div class="main-box" v-for="(item,index) in data[liIndex].child" :key="index">
        <div class="left">{{item.name}}：</div>
        <div class="right">
          <p v-for="(val,num) in item.child" :key="num">
            <span v-if="val.name=='更多' || val.name=='自定义'">{{val.name}}</span>
            <el-checkbox v-model="val.check" v-else>{{val.name}}</el-checkbox>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "advancedSearch",
  data() {
    return {
      data: [
        {
          type: "基本信息",
          id: "basic",
          child: [
            {
              name: "搜索范围",
              child: [
                "企业名称",
                "法人/股东/高管",
                "产品服务",
                "商标",
                "联系方式",
                "经营范围",
              ],
            },
            {
              name: "机构类型",
              child: [
                "企业",
                "事业单位",
                "基金会",
                "社会组织",
                "律所",
                "香港特别行政区企业",
                "台湾省企业",
                "更多",
              ],
            },
            {
              name: "省份地区",
              child: [
                "广东省",
                "北京市",
                "上海市",
                "江苏省",
                "江西省",
                "浙江省",
                "山东省",
                "更多",
              ],
            },
            {
              name: "注册资本",
              child: [
                "0-100万",
                "100-200万",
                "200-500万",
                "500-1000万",
                "1000万以上",
                "自定义",
              ],
            },
            {
              name: "成立时间",
              child: [
                "成立一年内",
                "成立1-5年",
                "成立5-10年",
                "成立15年以上",
                "自定义",
              ],
            },
            {
              name: "行业分类",
              child: [
                "电力、热力、燃气及水生产和供应业",
                "建筑业",
                "批发和零售业",
                "交通运输、仓储和邮政业",
                "信息传输、计算机服务和软件业",
                "更多",
              ],
            },
          ],
        },
        {
          type: "风险信息",
          id: "risk",
          child: [
            {
              name: "风险类别",
              child: [
                "全部",
                "失信人",
                "税收违法",
                "行政处罚记录",
                "法院公告",
                "法律诉讼",
                "12135投诉",
                "立案信息",
                "高管涉案涉毒",
                "异常变动",
                "股权变动",
                "破产风险",
                "欺诈风险",
                "舆情风险",
              ],
            },
            {
              name: "风险级别",
              child: ["全部", "高危", "高风险", "低风险", "正常"],
            },
            {
              name: "搜索范围",
              child: ["企业自身", "关联企业"],
            },
          ],
        },
        {
          type: "信用信息",
          id: "credit",
          child: [
            {
              name: "创新资质",
              child: ["全部", "商标", "专利", "著作权", "资质荣誉", "政府评级"],
            },
            {
              name: "经营状态",
              child: ["全部", "招投标", "购地信息", "进出口", "产品信息"],
            },
            {
              name: "发展潜力",
              child: [
                "全部",
                "享受政府扶持补贴",
                "融资能力",
                "投资情况",
                "招聘情况",
              ],
            },
            {
              name: "财务能力",
              child: [
                "全部",
                "收入行业前20",
                "利润行业前20",
                "资产总额行业前20",
              ],
            },
            {
              name: "信用级别",
              child: ["全部", "优", "良", "中等", "一般", "较差"],
            },
          ],
        },
      ],
      activeName: "basic",
      liIndex: 0,
    };
  },
  created() {
    var data = this.data;
    data.forEach((info) => {
      info.child.forEach((item) => {
        const arr = [];
        item.child.forEach((val) => {
          const obj = {
            name: val,
            check: false,
          };
          arr.push(obj);
        });
        item.child = arr;
      });
    });
  },
  methods: {
    reset() {
      var data = this.data;
      data.forEach((info) => {
        info.child.forEach((item) => {
          item.child.forEach((val) => {
            val.check = false;
          });
        });
      });
      this.data = data
    },
    confirm() {
      var infoArr = {};
      var data = this.data;
      data.forEach((info) => {
        info.child.forEach((item) => {
          item.child.forEach((val) => {
            if (val.check) {
              if (!infoArr[item.name]) infoArr[item.name] = [];
              infoArr[item.name].push(val.name);
            }
          });
        });
      });
      this.$emit("confirmVal", infoArr);
    },
    handleClick(tab, event) {
      if (tab.name == "basic") {
        this.liIndex = 0;
      } else if (tab.name == "risk") {
        this.liIndex = 1;
      } else if (tab.name == "credit") {
        this.liIndex = 2;
      }
    },
  },
};
</script>
<style scoped>
p {
  margin: 0;
}
.main-box {
  display: flex;
  margin-bottom: 15px;
}
.left {
  color: #999999;
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