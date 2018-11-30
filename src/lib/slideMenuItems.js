module.exports = [
  {
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: '主页',
    router: {
      name: 'Index'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-shopping-cart',
    name: '香港代购',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '客户管理',
        router: {
          name: 'HKCustomer'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '商品管理',
        router: {
          name: 'HKGoods'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '供应商管理',
        router: {
          name: 'HKVendor'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '采购管理',
        router: {
          name: 'AlertExample'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '销售管理',
        router: {
          name: 'ModalExample'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-support',
    name: '华信工作',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '员工档案',
        router: {
          name: 'HXProfile'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '扩展功能',
        router: {
          name: 'DashboardV2'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-laptop',
    name: '商城管理',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '兑换管理',
        router: {
          name: 'APIExample'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '商品管理',
        router: {
          name: 'Icons'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '提货管理',
        router: {
          name: 'Buttons'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '评价管理',
        router: {
          name: 'Sliders'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '代售管理',
        router: {
          name: 'Timeline'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '快递公司',
        router: {
          name: 'Modals'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-bar-chart',
    name: '报表查询',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '我的相册',
        router: {
          name: 'GeneralElements'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '我的视频',
        router: {
          name: 'AdvancedElements'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '其他点滴',
        link: 'pages/forms/editors.html'
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-edit',
    name: '个人点滴',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '我的相册',
        router: {
          name: 'Sample'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '我的视频',
        router: {
          name: 'AdvancedElements'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '其他点滴',
        router: {
          name: 'AdvancedElements'
        }
      }
    ]
  }
]
