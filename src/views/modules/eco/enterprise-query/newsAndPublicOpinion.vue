<template>
	<div class="legalProceedings">
		<h3 class="title">舆论画像</h3>
		<div class="imgs">
			<div class="qinggan">
				<h4>舆论情感类型占比</h4>
				<el-date-picker v-model="month" type="month" placeholder="选择月" size="mini" style="width: 150px;">
				</el-date-picker>
				<div id="qinggan"></div>
			</div>
			<div class="yinxiang">
				<h4>近期媒体印象</h4>
        <img width="400px" height="300px" src="~@/assets/img/media.png">
<!--				<word-cloud-chart id="echarts09" :title="123" :data="echarts05Data"/>-->
			</div>
		</div>
		<h3 class="title">舆论新闻</h3>
<!--		<a class="yulun" href='script:;' v-for="(item,index) in Lists" :key="index">-->
<!--			<p style="color:rgba(47,115,235,1)"><span class="tag">{{item.tag}}</span>{{item.title}}</p>-->
<!--			<p class="desc">{{item.date}} 新闻来源：{{item.soures}}</p>-->
<!--			<p>{{item.content}}</p>-->
<!--		</a>-->
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
        label="标题"
        header-align="center"
        align="left"
        show-overflow-tooltip
        width="">
      </el-table-column>
      <el-table-column
        prop="laiyuan"
        header-align="center"
        align="left"
        label="来源"
        width="100">
      </el-table-column>
      <el-table-column
        prop="qingxiang"
        header-align="center"
        align="left"
        show-overflow-tooltip
        label="情感倾向"
        width="150">
      </el-table-column>
      <el-table-column
        prop="time"
        header-align="center"
        align="left"
        label="公布时间"
        width="150">
      </el-table-column>
    </el-table>
	</div>
</template>

<script>
	import wordCloudChart from './WordCloudChart'
	export default {
	  name: 'legalProceedings',
	  data () {
	    return {
	      width: 400,
	      height: 400,
	      month: '2019-07',
	      Lists: [{
	        tag: '新品升级',
	        title: '小米5C即将登场 小米松果发布会直播',
	        date: '2019-02-28 10:17:00',
	        soures: '91门户',
	        content: '91门户消息，今天下午，小米科技即将在北京国家会议中心举行新品发布会，正式发布旗下首款自主研发松果处理器'
	      }, {
        tag: '新品升级',
        title: '小米5C即将登场 小米松果发布会直播',
        date: '2019-02-28 10:17:00',
        soures: '91门户',
        content: '91门户消息，今天下午，小米科技即将在北京国家会议中心举行新品发布会，正式发布旗下首款自主研发松果处理器'
      }],
      echarts05Data: [],
      tableData: [{
        code: '1',
        namecode: '小米委托代理人花98元买假冒充电器索赔10万,店主赔1.2万',
        laiyuan: '百家号',
        qingxiang: '消极',
        time: '2020-03-21 04:22:46'
      }, {
        code: '2',
        namecode: '小米委托代理人花98元买假冒充电器后起诉,店主赔1.2万',
        laiyuan: '为其信息',
        qingxiang: '消极',
        time: '2020-03-21 04:22:46'
      }, {
        code: '3',
        namecode: '小米手机充电时起火 售后以未复工为由多日后仍未解决',
        laiyuan: '百家号',
        qingxiang: '消极',
        time: '2020-03-21 04:22:46'
      }, {
        code: '4',
        namecode: '小米手机充电时起火 售后以未复工为由多日后仍未解决',
        laiyuan: '新浪财经',
        qingxiang: '消极',
        time: '2020-03-21 04:22:46'
      }, {
        code: '5',
        namecode: '工信部约谈小米公司 要求全面排查问题隐患',
        laiyuan: '百家号',
        qingxiang: '消极',
        time: '2020-03-21 04:22:46'
      }]
	    }
	  },
	  components: {
	    wordCloudChart
	  },
	  mounted () {
	    this.draw()
	  },
	  methods: {
	    draw () {
	      let myChart = this.$echarts.init(document.getElementById('qinggan'))
	      myChart.setOption({
	        color: ['#37a2da', '#32c5e9', 'rgba(80,181,84)'],
	        tooltip: {
	          trigger: 'item',
	          formatter: '{a} <br/>{b} : {c} ({d}%)'
	        },
	        legend: {
	          type: 'scroll',
	          orient: 'vertical',
	          right: '40',
	          align: 'left',
	          top: 'middle',
	          itemWidth: 10,
	          itemHeight: 10,
	          textStyle: {
	            color: '#8C8C8C'
	          }
        },
	        series: [{
	          name: '情感舆论',
	          type: 'pie',
	          left: 0,
	          right: 100,
	          label: {
	            show: false
	          },
	          data: [{
	            value: 25,
	            name: '积极 25%'
	          },
	          {
	            value: 2,
	            name: '消极 2%'
	          },
	          {
	            value: 70,
	            name: '中立 70%'
	          }
	          ]
	        }]
	      })
	    }
	  }
	}
</script>
<style scoped>
  .title {
    font-size: 18px;
    border-left: 3px rgb(46, 132, 213) solid;
    padding-left: 5px;
    margin: 30px 0;
    display: flex;
    align-items: center;
  }
	.imgs {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.yulun {
		color: #555;
		text-decoration: none;
		font-size: 14px;
		border-bottom: 1px solid #e2e2e2;
		display: block;
		margin-bottom: 15px;
    width: 100%;
		padding-bottom: 15px;
	}
	.tag {
		background-color: rgba(24, 157, 236, 1);
		color: #fff;
		padding: 2px 5px;
		font-size: 12px;
		margin-right: 5px;
	}
	h4 {
		color: #555;
		height: 35px;
		line-height: 35px;
	}
	.desc {
		padding: 5px 0;
		color: #888;
		font-size: 12px;
	}
	.qinggan {
		width: 50%;
	}
	.yinxiang {
		width: 50%;
	}
	#qinggan {
		width: 100%;
		height: 300px;
	}
</style>
