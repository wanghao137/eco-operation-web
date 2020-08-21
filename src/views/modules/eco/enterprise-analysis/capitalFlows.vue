<template>
	<div class="capitalflows">
		<div class="header">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="时间">
					<el-date-picker v-model="formInline.smonth" type="month" placeholder="选择月" size="small" style="width: 120px;">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="行业">
					<el-select v-model="formInline.hangye" placeholder="行业" size="small" style="width: 120px;">
						<el-option label="全部行业" value="0"></el-option>
						<el-option label="制造业" value="1"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-radio-group v-model="formInline.fangxiang" size="mini">
						<el-radio-button label="资本流出"></el-radio-button>
						<el-radio-button label="资本流入"></el-radio-button>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="单位">
					<el-select v-model="formInline.danwei" placeholder="单位" size="small" style="width: 100px;">
						<el-option label="亿元" value="0"></el-option>
						<el-option label="万元" value="1"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</div>
		<div class="content">
			<div class="content-l">
				<p class="title">宁波市全部行业资本流出地区</p>
				<div class="chartOptions">
					<div id="map" class="map"></div>
				</div>
			</div>
			<div class="content-r">
				<div class="content-r-r">
					<div class="content-r-t">
						<p class="title">宁波市全部行业资本流出前十城市</p>
						<div style="padding:15px;">
							<el-table :data="tableData" style="width: 100%;" height="250" border>
								<el-table-column prop="id" label="排名" align="center">
								</el-table-column>
								<el-table-column prop="area" label="地区" align="center">
								</el-table-column>
								<el-table-column prop="money" label="金额" align="center">
								</el-table-column>
							</el-table>
						</div>
					</div>
					<div class="content-r-b">
						<p class="title">宁波市全部行业资本流出主要行业</p>
						<div id="charts"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import china from 'echarts/map/js/china.js'
	export default {
	  data () {
			return {
				formInline: {
					smonth: '2019-12',
					hangye: '0',
					fangxiang: '资本流出',
					danwei: '0',
				},
				tableData: [{
					id: 1,
					area: '宁波',
					money: '159.47'
				}, {
					id: 2,
					area: '深圳市',
					money: '159.47'
				}, {
					id: 3,
					area: '杭州市',
					money: '13.29'
				}, {
					id: 4,
					area: '静安区',
					money: '7.32'
				}, {
					id: 5,
					area: '静安区',
					money: '7.32'
				}],
				dataFrom: '北京市',
				geoCoordMap: {
					'齐齐哈尔': [123.97, 47.33],
					'重庆市': [108.384366, 30.439702],
					'北京市': [116.4551, 40.2539],
					'安徽': [117.17, 31.52, 14],
					'河北': [114.30, 38.02, 8],
					'山东': [117.00, 36.40, 8],
					"陕西": [108.57, 34.17],
					"山西": [112.33, 37.54],
				},
				data:[{
				        name: '齐齐哈尔'
				    }, {
				        name: '重庆市'
				    }, {
				        name: '北京市'
				    }, {
				        name: '安徽'
				    }, {
				        name: '河北'
				    }, {
				        name: '山东'
				    }, {
				        name: '陕西'
				    }, {
				        name: '山西'
				    }

				]
			}
		},
		mounted() {
			this.draw();
			this.draw2();
		},
		methods: {
			draw() {
				let myChart = this.$echarts.init(document.getElementById('charts'));
				myChart.setOption({
					legend: {
						textStyle: {
							color: '#9B9B9B'
						},
						right: 37,
						top: 10,
					},
					tooltip: {},
					xAxis: {
						type: 'category',
						data: ['房地产', '制造', '建筑', '科学', '金融', '批发', '信息', '电力', '交通', '卫生', '文化', '农/林', '采矿', '住宿', '居民'],
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							color: '#555',
							rotate: 45,
						},
					},
					yAxis: {
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: '#efefef'
							}
						},
						axisLabel: {
							color: '#555',
						},
					},
					series: [{
						type: 'bar',
						barWidth: 15,
						data: [100, 78, 56, 124, 67, 65, 95, 100, 78, 56, 124, 67, 65, 95, 40],
						label: {
							show: true,
							position: 'top',
							textStyle: {
								color: '#ffffff'
							}
						},
						itemStyle: {
							normal: {
								color: 'rgba(23,89,242,1)'
							}
						}
					}]
				})
			},
			draw2() {
				var self =this;
				let myChart3 = this.$echarts.init(document.getElementById('map'));
				myChart3.setOption({
					visualMap: {
						min: 0,
						max: 100,
						left: 'left',
						top: 'bottom',
						text: ['高', '低'],
						calculable: true,
						inRange: {
							color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#A1CDFF', '#54A6FF', '#248CFF']
						}
					},
					toolbox: {
						show: true,
						orient: 'vertical',
						left: 'right',
						top: 'center',
						feature: {
							dataView: {
								readOnly: false
							},
							restore: {},
							saveAsImage: {}
						}
					},
					geo: {
						map: 'china',
						zoom: 1,
						label: {
							normal: {
								show: true,
								color: '#c1c4c8'
							},
							emphasis: {
								show: false,
								color: '#292929'
							}
						},
						roam: false,
						itemStyle: {
							normal: {
								areaColor: '#fbfbfb',
								borderColor: '#8A8A8A'

							},
							emphasis: {
								areaColor: ''
							}
						}
					},
					series: [{
							name: '',
							type: 'lines',
							zlevel: 2,
							symbol: 'circle',
							symbolSize: 2,
							effect: {
								show: true,
								period: 4, //箭头指向速度，值越小速度越快
								trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
								symbol: 'arrow', //箭头图标
								symbolSize: 5, //图标大小
							},
							lineStyle: {
								normal: {
									color: '#5FE8F6',
									width: 1,
									opacity: 0.5,
									curveness: 0.2
								}
							},
							data:self.data.map(function(dataItem) {
								return {
									fromName: self.dataFrom,
									toName: dataItem.name,
									coords: [
										self.geoCoordMap[self.dataFrom],
										self.geoCoordMap[dataItem.name]
									]
								}
							})
						}, {
							name: '供需占比',
							type: 'effectScatter',
							coordinateSystem: 'geo',
							data: self.convertData(self.data),
							symbolSize: 12,
							showEffectOn: 'render',
							rippleEffect: {
								scale: 5,
								brushType: 'stroke'
							},
							hoverAnimation: true,
							label: {
								normal: {
									formatter: '{b}',
									position: 'right',
									show: false
								},
								emphasis: {
									show: true
								}
							},
							itemStyle: {
								normal: {
									color: '#c60fff',
									shadowBlur: 20,
									shadowColor: '#333'
								}
							}
						},
						{
							type: 'map',
							mapType: 'china',
							geoIndex: 0,
							label: {
								normal: {
									show: true
								},
								emphasis: {
									show: true
								}
							},
							data: [{
								name: '齐齐哈尔',
								"value": "35"
							}, {
								name: '重庆市',
								"value": "60"
							}, {
								name: '北京市',
								"value": "59"
							}, {
								name: '安徽',
								"value": "100"
							}, {
								name: '河北',
								"value": "89"
							}, {
								name: '山东',
								"value": "11"
							}, {
								name: '陕西',
								"value": "23"
							}, {
								name: '山西',
								"value": "54"
							}]
						}
					]
				})
			},
			convertData(data) {
				var res = [];
				for (var i = 0; i < data.length; i++) {
					var geoCoord = this.geoCoordMap[data[i].name];
					if (geoCoord) {
						res.push({
							name: data[i].name,
							value: geoCoord.concat(data[i].value)
						});
					}
				}
				return res;
			}
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		justify-content: space-between;
	}
	.content-l,
	.content-r {
		flex: 1;
		margin: 7px;
	}
	.title {
		padding-left: 10px;
		color: #333;
		font-size: 16px;
		font-weight: 400;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
	.content-r-r {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
	.content-r-t {
		margin-bottom: 15px;
	}
	.content-r-t,
	.content-r-b {
		flex: 1;
		background-color: #fff;
		height: 250px;
	}
	.map {
		width: 580px;
		height: 580px;
	}
	#charts {
		width: 550px;
		height: 250px;
	}
</style>
