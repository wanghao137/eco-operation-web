<template>
  <div class="wrap1">
    <!-- <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in data" :key="index" :label="item.type" :name="item.id"></el-tab-pane>
    </el-tabs>-->
    <div class="main">
      <div v-if="liIndex == 0">
        <div class="main-box">
          <div class="left">关键词：</div>
          <div class="right">
            <el-input v-model="input" style="width:200px;margin-left:10px" placeholder="请输入关键词,非必填"></el-input>
          </div>
        </div>
        <div class="main-box">
          <div class="left">地区：</div>
          <div class="right">
            <el-cascader
              v-model="value"
              style="width:200px;margin-left:24px"
              :options="options"
              @change="handleChange"
            ></el-cascader>
          </div>
        </div>
        <div class="main-box">
          <div class="left">行业：</div>
          <div class="right">
            <el-cascader
              v-model="value1"
              style="width:200px;margin-left:24px"
              :options="options1"
              @change="handleChange1"
            ></el-cascader>
          </div>
        </div>
      </div>
      <div class="main-box" v-for="(item,index) in data[liIndex].child" :key="index">
        <div class="left">{{item.name}}：</div>
        <div class="right">
          <p v-for="(val,num) in item.child" :key="num">
            <span v-if="val.name=='更多' || val.name=='自定义'">{{val.name}}</span>
            <el-checkbox v-model="val.check" v-else-if="item.name == '风险级别' || item.name=='信用级别'">
              <span :class="color[val.name]">{{val.name}}</span>
            </el-checkbox>
            <el-checkbox v-model="val.check" v-else>{{val.name}}</el-checkbox>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "./data.json";
import area from "./area.json";
import indusrt from "./indusrt.json";
import indusrt1 from "./indusrt1.json";
import { treeDataTranslate } from "@/utils";
export default {
  name: "advancedSearch",
  data() {
    return {
      input: "",
      data: [],
      activeName: "basic",
      value: [],
      options: [],
      value1: [],
      options1: [],
      color: {
        高危: "red",
        高风险: "orange",
        低风险: "yellow",
        正常: "green",
        优: "c1",
        良: "c2",
        中等: "c3",
        一般: "c4",
        较差: "c5",
      },
    };
  },
  watch: {
    liIndex(val) {
      this.reset();
    },
  },
  created() {
    const AZ = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "J",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let tree = indusrt1;
    var res = [];
    for (var i = 0; i < tree.length; i++) {
      var temp = {},
        temp1 = {},
        temp2 = {},
        temp3 = {};
      if (AZ.includes(tree[i].num)) {
        temp.pid = null;
        temp.id = tree[i].num;
        temp.label = tree[i]["一级"];
        temp.value = tree[i]["一级"];
        if (tree[i].num1) {
          temp1.id = tree[i].num1;
          temp1.label = tree[i]["二级"];
          temp1.value = tree[i]["三级"];
          temp1.pid = tree[i].num;
        }
        if (tree[i].num2) {
          temp2.id = tree[i].num2;
          temp2.label = tree[i]["三级"];
          temp2.value = tree[i]["三级"];
          temp2.pid = tree[i].num1;
        }
        if (tree[i].num3) {
          temp3.id = tree[i].num3;
          temp3.label = tree[i]["四级"];
          temp3.value = tree[i]["四级"];
          temp3.pid = tree[i].num2;
        }
      }
      if (Object.keys(temp).length > 0) res.push(temp);
      if (Object.keys(temp1).length > 0) res.push(temp1);
      if (Object.keys(temp2).length > 0) res.push(temp2);
      if (Object.keys(temp3).length > 0) res.push(temp3);
    }
    const age = "id";
    const myTree = res.reduce(
      (all, next) =>
        all.some((atom) => atom[age] == next[age]) ? all : [...all, next],
      []
    );
    let t = treeDataTranslate(myTree, "id", "pid");
    console.log(t);
    area.forEach((item) => {
      item.value = item.name;
      item.label = item.name;
      item.children = item.city;
      item.children.forEach((val) => {
        val.value = val.name;
        val.label = val.name;
        val.children = val.area;
        var arr = [];
        val.area.forEach((val1) => {
          const obj = {
            value: val1,
            label: val1,
          };
          arr.push(obj);
        });
        val.children = arr;
      });
    });
    this.options = area;
    this.options1 = t;
    var data = json;
    data.forEach((info) => {
      info.child.forEach((item) => {
        if (typeof item.child[0] !== "object") {
          const arr = [];
          item.child.forEach((val) => {
            const obj = {
              name: val,
              check: false,
            };
            arr.push(obj);
          });
          item.child = arr;
        }
      });
    });
    this.data = data;
  },
  props: ["liIndex"],
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleChange1(value) {
      console.log(value);
    },
    reset() {
      this.input = "";
      this.value = [];
      this.value1 = [];
      var data = this.data;
      data.forEach((info) => {
        info.child.forEach((item) => {
          item.child.forEach((val) => {
            val.check = false;
          });
        });
      });
      this.data = data;
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
      console.log(this.value1)
      if (this.input != "") {
        infoArr["关键词"] = [this.input];
      }
      if (this.value.length != 0) {
        infoArr["地区"] = this.value;
      }
      if (this.value1.length != 0) {
        infoArr["行业"] = this.value1;
      }
      console.log(infoArr)
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
.red {
  color: red;
}
.orange {
  color: orange;
}
.green {
  color: green;
}
.yellow {
  color: yellow;
}
.c1 {
  color: rgb(0, 32, 86);
}
.c2 {
  color: rgb(46, 117, 182);
}
.c3 {
  color: rgb(157, 195, 230);
}
.c4 {
  color: rgb(255, 192, 0);
}
.c5 {
  color: rgb(255, 0, 0);
}
</style>
