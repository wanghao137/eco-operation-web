// 生成菜单管理数据列表
var dataList = [
  {
    'menuId': '1',
    'parentId': 0,
    'parentName': null,
    'name': '系统管理',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 2,
    'open': null,
    'list': null
  },
  {
    'menuId': '2',
    'parentId': 1,
    'parentName': '系统管理',
    'name': '管理员列表',
    'url': 'sys/user',
    'perms': null,
    'type': 1,
    'icon': 'admin',
    'orderNum': 1,
    'open': null,
    'list': null
  },
  {
    'menuId': '3',
    'parentId': 1,
    'parentName': '系统管理',
    'name': '角色管理',
    'url': 'sys/role',
    'perms': null,
    'type': 1,
    'icon': 'role',
    'orderNum': 2,
    'open': null,
    'list': null
  },
  {
    'menuId': '4',
    'parentId': 1,
    'parentName': '系统管理',
    'name': '菜单管理',
    'url': 'sys/menu',
    'perms': null,
    'type': 1,
    'icon': 'menu',
    'orderNum': 3,
    'open': null,
    'list': null
  },
  {
    'menuId': '5',
    'parentId': 1,
    'parentName': '系统管理',
    'name': 'SQL监控',
    'url': 'http://39.105.180.9:9807/tag-label-server/druid/sql.html',
    'perms': null,
    'type': 1,
    'icon': 'sql',
    'orderNum': 4,
    'open': null,
    'list': null
  },
  {
    'menuId': '6',
    'parentId': 1,
    'parentName': '系统管理',
    'name': '定时任务',
    'url': 'job/schedule',
    'perms': null,
    'type': 1,
    'icon': 'job',
    'orderNum': 5,
    'open': null,
    'list': null
  },
  {
    'menuId': '7',
    'parentId': 6,
    'parentName': '定时任务',
    'name': '查看',
    'url': null,
    'perms': 'sys:schedule:list,sys:schedule:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '8',
    'parentId': 6,
    'parentName': '定时任务',
    'name': '新增',
    'url': null,
    'perms': 'sys:schedule:save',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '9',
    'parentId': 6,
    'parentName': '定时任务',
    'name': '修改',
    'url': null,
    'perms': 'sys:schedule:update',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '10',
    'parentId': 6,
    'parentName': '定时任务',
    'name': '删除',
    'url': null,
    'perms': 'sys:schedule:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '11',
    'parentId': 6,
    'parentName': '定时任务',
    'name': '暂停',
    'url': null,
    'perms': 'sys:schedule:pause',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '12',
    'parentId': 6,
    'parentName': '定时任务',
    'name': '恢复',
    'url': null,
    'perms': 'sys:schedule:resume',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '13',
    'parentId': 6,
    'parentName': '定时任务',
    'name': '立即执行',
    'url': null,
    'perms': 'sys:schedule:run',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '14',
    'parentId': 6,
    'parentName': '定时任务',
    'name': '日志列表',
    'url': null,
    'perms': 'sys:schedule:log',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '15',
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '查看',
    'url': null,
    'perms': 'sys:user:list,sys:user:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '16',
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '新增',
    'url': null,
    'perms': 'sys:user:save,sys:role:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '17',
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '修改',
    'url': null,
    'perms': 'sys:user:update,sys:role:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '18',
    'parentId': 2,
    'parentName': '管理员列表',
    'name': '删除',
    'url': null,
    'perms': 'sys:user:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '19',
    'parentId': 3,
    'parentName': '角色管理',
    'name': '查看',
    'url': null,
    'perms': 'sys:role:list,sys:role:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '20',
    'parentId': 3,
    'parentName': '角色管理',
    'name': '新增',
    'url': null,
    'perms': 'sys:role:save,sys:menu:list',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '21',
    'parentId': 3,
    'parentName': '角色管理',
    'name': '修改',
    'url': null,
    'perms': 'sys:role:update,sys:menu:list',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '22',
    'parentId': 3,
    'parentName': '角色管理',
    'name': '删除',
    'url': null,
    'perms': 'sys:role:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '23',
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '查看',
    'url': null,
    'perms': 'sys:menu:list,sys:menu:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '24',
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '新增',
    'url': null,
    'perms': 'sys:menu:save,sys:menu:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '25',
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '修改',
    'url': null,
    'perms': 'sys:menu:update,sys:menu:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '26',
    'parentId': 4,
    'parentName': '菜单管理',
    'name': '删除',
    'url': null,
    'perms': 'sys:menu:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': '27',
    'parentId': 1,
    'parentName': '系统管理',
    'name': '参数管理',
    'url': 'sys/config',
    'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
    'type': 1,
    'icon': 'config',
    'orderNum': 6,
    'open': null,
    'list': null
  },
  {
    'menuId': '29',
    'parentId': 1,
    'parentName': '系统管理',
    'name': '系统日志',
    'url': 'sys/log',
    'perms': 'sys:log:list',
    'type': 1,
    'icon': 'log',
    'orderNum': 7,
    'open': null,
    'list': null
  },
  {
    'menuId': '30',
    'parentId': 1,
    'parentName': '系统管理',
    'name': '文件上传',
    'url': 'oss/oss',
    'perms': 'sys:oss:all',
    'type': 1,
    'icon': 'oss',
    'orderNum': 6,
    'open': null,
    'list': null
  },
  {
    'menuId': '196',
    'parentId': 0,
    'parentName': null,
    'name': '企业查询',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'log',
    'orderNum': 1,
    'open': null,
    'list': null
  },
  {
    'menuId': '211',
    'parentId': 196,
    'parentName': '企业查询',
    'name': '企业综合查询',
    'url': 'eco/enterprise-query/Integrated-query',
    'perms': null,
    'type': 1,
    'icon': 'bianji',
    'orderNum': 1,
    'open': null,
    'list': null
  },
  {
    'menuId': '212',
    'parentId': 196,
    'parentName': '企业查询',
    'name': '企业全景信息',
    'url': 'eco/enterprise-query/panoramic-inf',
    'perms': null,
    'type': 1,
    'icon': 'shoucangfill',
    'orderNum': 2,
    'open': null,
    'list': null
  },
  {
    'menuId': '13',
    'parentId': 10,
    'parentName': null,
    'name': '搜索详情',
    'url': 'eco/enterprise-query/searchDetails',
    'perms': null,
    'type': 1,
    'icon': 'log',
    'orderNum': 2,
    'open': null,
    'list': null
  }
]
// 左侧菜单配置
var navDataList = [
  {
    'menuId': '10',
    'parentId': 0,
    'parentName': null,
    'name': '企业查询',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'sousuo',
    'orderNum': 4,
    'open': null,
    'list': [
      {
        'menuId': '12',
        'parentId': 10,
        'parentName': null,
        'name': '企业全景信息',
        'url': 'eco/enterprise-query/enterpriseInquiry',
        'perms': null,
        'type': 1,
        'icon': 'sousuo',
        'orderNum': 2,
        'open': null,
        'list': null
      },
      {
        'menuId': '98',
        'parentId': 10,
        'parentName': null,
        'name': '企业信息',
        'url': 'eco/enterprise-query/panoramic-inf',
        'perms': null,
        'type': 1,
        'icon': 'log',
        'orderNum': 2,
        'open': null,
        'list': null
      },
      {
        'menuId': '99',
        'parentId': 10,
        'parentName': null,
        'name': '搜索详情',
        'url': 'eco/enterprise-query/searchDetails',
        'perms': null,
        'type': 1,
        'icon': 'log',
        'orderNum': 2,
        'open': null,
        'list': null
      }
    ]
  },
  {
    'menuId': '13',
    'parentId': 0,
    'parentName': null,
    'name': '产业发展',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'mudedi',
    'orderNum': 4,
    'open': null,
    'list': [
      {
        'menuId': '14',
        'parentId': 13,
        'parentName': null,
        'name': '挖掘优势产业',
        'url': 'eco/industrial-dev/adv-industries',
        'perms': null,
        'type': 1,
        'icon': 'mudedi',
        'orderNum': 1,
        'open': null,
        'list': null
      },
      {
        'menuId': '15',
        'parentId': 13,
        'parentName': null,
        'name': '企业成长性分析',
        'url': 'eco/industrial-dev/Industry-overlap',
        'perms': null,
        'type': 1,
        'icon': 'gc',
        'orderNum': 2,
        'open': null,
        'list': null
      },
      {
        'menuId': '16',
        'parentId': 13,
        'parentName': null,
        'name': '区域产业结构差异',
        'url': 'eco/industrial-dev/growth-industry',
        'perms': null,
        'type': 1,
        'icon': 'tubiao',
        'orderNum': 3,
        'open': null,
        'list': null
      }
      // {
      //   'menuId': '17',
      //   'parentId': 13,
      //   'parentName': null,
      //   'name': '重点产业链分析',
      //   'url': 'eco/industrial-dev/key-industrial',
      //   'perms': null,
      //   'type': 1,
      //   'icon': 'shoucangfill',
      //   'orderNum': 4,
      //   'open': null,
      //   'list': null
      // }
    ]
  },
  {
    'menuId': '18',
    'parentId': 0,
    'parentName': null,
    'name': '企业分析',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'sq',
    'orderNum': 4,
    'open': null,
    'list': [
      {
        'menuId': '69',
        'parentId': 18,
        'parentName': null,
        'name': '企业基本情况分析',
        'url': 'eco/enterprise-analysis/enterprise-activity',
        'perms': null,
        'type': 1,
        'icon': 'mudedi',
        'orderNum': 1,
        'open': null,
        'list': null
      },
      {
        'menuId': '60',
        'parentId': 18,
        'parentName': null,
        'name': '企业活跃度分析',
        'url': 'eco/enterprise-analysis/enterprise-survival',
        'perms': null,
        'type': 1,
        'icon': 'gc',
        'orderNum': 2,
        'open': null,
        'list': null
      },
      {
        'menuId': '62',
        'parentId': 18,
        'parentName': null,
        'name': '资本流动分析',
        'url': 'eco/enterprise-analysis/capital-flows',
        'perms': null,
        'type': 1,
        'icon': 'shoucangfill',
        'orderNum': 4,
        'open': null,
        'list': null
      }
      // {
      //   'menuId': '21',
      //   'parentId': 18,
      //   'parentName': null,
      //   'name': '企业特征分析',
      //   'url': 'eco/enterprise-analysis/enterprise-cha',
      //   'perms': null,
      //   'type': 1,
      //   'icon': 'tubiao',
      //   'orderNum': 3,
      //   'open': null,
      //   'list': null
      // },
    ]
  },
  {
    'menuId': '38',
    'parentId': 0,
    'parentName': null,
    'name': '风险企业监控',
    'url': 'eco/eco-business/risk-enterprise',
    'perms': null,
    'type': 0,
    'icon': 'dangdifill',
    'orderNum': 5,
    'open': null,
    'list': [
    ]
  },
  {
    'menuId': '39',
    'parentId': 0,
    'parentName': null,
    'name': '优质企业挖掘',
    'url': 'eco/eco-business/quality-enterprise',
    'perms': null,
    'type': 0,
    'icon': 'shoucangfill',
    'orderNum': 5,
    'open': null,
    'list': [
    ]
  },
  {
    'menuId': '1',
    'parentId': 0,
    'parentName': null,
    'name': '系统管理',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 5,
    'open': null,
    'list': [
      {
        'menuId': '2',
        'parentId': 1,
        'parentName': null,
        'name': '管理员列表',
        'url': 'sys/user',
        'perms': null,
        'type': 1,
        'icon': 'admin',
        'orderNum': 1,
        'open': null,
        'list': null
      },
      {
        'menuId': '3',
        'parentId': 1,
        'parentName': null,
        'name': '角色管理',
        'url': 'sys/role',
        'perms': null,
        'type': 1,
        'icon': 'role',
        'orderNum': 2,
        'open': null,
        'list': null
      },
      {
        'menuId': '4',
        'parentId': 1,
        'parentName': null,
        'name': '菜单管理',
        'url': 'sys/menu',
        'perms': null,
        'type': 1,
        'icon': 'menu',
        'orderNum': 3,
        'open': null,
        'list': null
      },
      {
        'menuId': '5',
        'parentId': 1,
        'parentName': null,
        'name': 'SQL监控',
        'url': 'http://39.105.180.9:9807/tag-label-server/druid/sql.html',
        'perms': null,
        'type': 1,
        'icon': 'sql',
        'orderNum': 4,
        'open': null,
        'list': null
      },
      {
        'menuId': '6',
        'parentId': 1,
        'parentName': null,
        'name': '定时任务',
        'url': 'job/schedule',
        'perms': null,
        'type': 1,
        'icon': 'job',
        'orderNum': 5,
        'open': null,
        'list': null
      },
      {
        'menuId': '7',
        'parentId': 1,
        'parentName': null,
        'name': '参数管理',
        'url': 'sys/config',
        'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
        'type': 1,
        'icon': 'config',
        'orderNum': 6,
        'open': null,
        'list': null
      },
      {
        'menuId': '8',
        'parentId': 1,
        'parentName': null,
        'name': '文件上传',
        'url': 'oss/oss',
        'perms': 'sys:oss:all',
        'type': 1,
        'icon': 'oss',
        'orderNum': 6,
        'open': null,
        'list': null
      },
      {
        'menuId': '9',
        'parentId': 1,
        'parentName': null,
        'name': '系统日志',
        'url': 'sys/log',
        'perms': 'sys:log:list',
        'type': 1,
        'icon': 'log',
        'orderNum': 7,
        'open': null,
        'list': null
      }
    ]
  }
]

// 获取导航菜单列表 / 权限
export function nav () {
  return {
    // isOpen: false,
    url: '/sys/menu/nav',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menuList': navDataList,
      'permissions': [
        'sys:config:save',
        'sys:config:update',
        'sys:menu:select',
        'sys:schedule:update',
        'sys:role:update',
        'sys:user:save',
        'sys:menu:update',
        'sys:menu:delete',
        'sys:menu:list',
        'sys:schedule:resume',
        'sys:user:update',
        'sys:menu:info',
        'sys:role:select',
        'sys:menu:save',
        'sys:schedule:run',
        'sys:config:delete',
        'sys:schedule:pause',
        'sys:log:list',
        'sys:role:list',
        'sys:schedule:save',
        'sys:role:save',
        'sys:schedule:log',
        'sys:schedule:list',
        'sys:oss:all',
        'sys:schedule:info',
        'sys:config:info',
        'sys:user:delete',
        'sys:config:list',
        'sys:user:list',
        'sys:role:info',
        'sys:schedule:delete',
        'sys:user:info'
      ]
    }
  }
}

// 获取菜单列表
export function list () {
  return {
    // isOpen: false,
    url: '/sys/menu/list',
    type: 'get',
    data: dataList
  }
}

// 获取上级菜单
export function select () {
  let dataList = JSON.parse(JSON.stringify(navDataList))
  dataList = dataList.concat(dataList[0].list)
  return {
    // isOpen: false,
    url: '/sys/menu/select',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menuList': dataList
    }
  }
}

// 获取菜单信息
export function info () {
  return {
    // isOpen: false,
    url: '/sys/menu/info',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menu': dataList[0]
    }
  }
}

// 添加菜单
export function add () {
  return {
    // isOpen: false,
    url: '/sys/menu/save',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 修改菜单
export function update () {
  return {
    // isOpen: false,
    url: '/sys/menu/update',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 删除菜单
export function del () {
  return {
    // isOpen: false,
    url: '/sys/menu/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
