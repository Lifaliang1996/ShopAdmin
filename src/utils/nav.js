export default [
  // 商品
  {
    title: '商品',
    icon: 'icon-goods-copy',
    child: [
      {
        name: '商品列表',
        path: '/goods/list'
      },
      {
        name: '添加商品',
        path: '/goods/add'
      },
      {
        name: '商品回收站',
        path: '/goods/recycle'
      },
      {
        name: '商品评价',
        path: '/goods/comment'
      },
      {
        name: '商品分类',
        path: '/goods/category'
      },
      {
        name: '商品类型',
        path: '/goods/type'
      },
      {
        name: '品牌管理',
        path: '/goods/brand'
      },
      {
        name: '商品图片库',
        path: '/goods/images'
      },
    ]
  },

  // 订单
  {
    title: '订单',
    icon: 'icon-dingdan',
    child: [
      {
        name: '订单列表',
        path: '/order/list'
      },
      {
        name: '确认收货',
        path: '/order/receipt'
      },
      {
        name: '订单设置',
        path: '/order/order_setting'
      },
      {
        name: '退货申请处理',
        path: '/order/return_order'
      },
      {
        name: '退款申请处理',
        path: '/order/refund'
      },
      {
        name: '退货原因设置',
        path: '/order/return_cause'
      },
      {
        name: '发货点信息管理',
        path: '/order/address'
      },
    ]
  },

  // 促销
  {
    title: '促销',
    icon: 'icon-iconfontzhizuobiaozhun02100',
    child: [
      {
        name: '类目列表',
        path: '/promotion/header'
      },
      {
        name: '添加类目',
        path: '/promotion/add_header'
      },
      {
        name: '拼团商品列表',
        path: '/promotion/list'
      },
      {
        name: '添加拼团商品',
        path: '/promotion/add_promotion'
      },
      {
        name: '成团管理',
        path: '/promotion/title_list'
      },
      {
        name: '订单管理',
        path: '/promotion/title_promotion'
      },
    ]
  },

  // 库存
  {
    title: '库存',
    icon: 'icon-kucunqingdan',
    child: [
      {
        name: '商品入库',
        path: '/stock/in'
      },
      {
        name: '商品出库',
        path: '/stock/out'
      }
    ]
  },

  // 用户
  {
    title: '用户',
    icon: 'icon-user',
    child: [
      {
        name: '用户列表',
        path: '/user/list'
      },
    ]
  },

  // 运营
  {
    title: '运营',
    icon: 'icon-yunyingzhongxin',
    child: [
      {
        name: '广告列表',
        path: '/operate/advertising'
      },
      {
        name: '添加广告',
        path: '/operate/add_advertising'
      }
    ]
  },

  // 统计
  {
    title: '统计',
    icon: 'icon-tongji',
    child: [
      {
        name: '交易统计',
        path: '/statistics/deal'
      },
      {
        name: '商品统计',
        path: '/statistics/goods'
      },
      {
        name: '搜索统计',
        path: '/statistics/search'
      }
    ]
  },
]