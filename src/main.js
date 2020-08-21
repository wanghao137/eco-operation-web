import Vue from 'vue'
import App from '@/App'
import router from '@/router'                 // api: https://github.com/vuejs/vue-router
import store from '@/store'                   // api: https://github.com/vuejs/vuex
import VueCookie from 'vue-cookie'            // api: https://github.com/alfhen/vue-cookie
import 'element-ui/lib/theme-chalk/index.css'
import '@/element-ui'                         // api: https://github.com/ElemeFE/element
import '@/icons'                              // api: http://www.iconfont.cn/
import '@/element-ui-theme'
import '@/assets/scss/index.scss'
import httpRequest from '@/utils/httpRequest' // api: https://github.com/axios/axios
import { isAuth } from '@/utils'
import cloneDeep from 'lodash/cloneDeep'
import BaiduMap from 'vue-baidu-map'
import echarts from 'echarts'
import Highchart from 'highcharts/highcharts'
import HighchartsVue from 'highcharts-vue'
import exporting from 'highcharts/modules/exporting'
import sankey from 'highcharts/modules/sankey'
import oldie from 'highcharts/modules/oldie'
import sandSignika from 'highcharts/themes/sand-signika'
import dependencywheel from 'highcharts/modules/dependency-wheel'
exporting(Highchart)
sankey(Highchart)
oldie(Highchart)
sandSignika(Highchart)
dependencywheel(Highchart)
Vue.use(HighchartsVue)

Vue.prototype.$echarts = echarts
Vue.use(BaiduMap, {
  ak: 'waNgMpAwF3uaYVDhtw2kWcvcgpdvIxtr'
})
Vue.use(VueCookie)
Vue.config.productionTip = false

// 非生产环境, 适配mockjs模拟数据                 // api: https://github.com/nuysoft/Mock
if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}

// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法
Vue.prototype.isAuth = isAuth     // 权限方法

// 保存整站vuex本地储存初始状态
window.SITE_CONFIG['storeState'] = cloneDeep(store.state)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
