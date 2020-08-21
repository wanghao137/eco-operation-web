<template>
	<div class="contaniner">
		<el-tabs v-model="activeName">
			<el-tab-pane label="省内互动" name="first">
				<interaction/>
			</el-tab-pane>
			<el-tab-pane label="全国资本流动" name="second">
				<capitalFlows/>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
	import interaction from './interaction.vue'
	import capitalFlows from './capitalFlows.vue'
	export default{
	  data () {
    return {
      activeName: 'first'
    }
	  },
	  components: {
	    interaction,
	    capitalFlows
	  },
	  mounted () {
	  }
	}
</script>
<style scoped>
</style>
