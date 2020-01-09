export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
    children: [
      // 商品
      {
        name: 'promotion_list',
        path: 'promotion/list'
      },
      {
        name: 'promotion_add',
        path: 'promotion/add'
      },
      {
        name: 'promotion_recycle',
        path: 'promotion/recycle'
      },
      {
        name: 'promotion_comment',
        path: 'promotion/comment'
      },
      {
        name: 'promotion_category',
        path: 'promotion/category'
      },
      {
        name: 'promotion_type',
        path: 'promotion/type'
      },
      {
        name: 'promotion_brand',
        path: 'promotion/brand'
      },
      {
        name: 'promotion_images',
        path: 'promotion/images'
      },

      // 订单
      {
        name: 'promotion_list',
        path: 'promotion/list'
      },
      {
        name: 'promotion_receipt',
        path: 'promotion/receipt'
      },
      {
        name: 'promotion_setting',
        path: 'promotion/promotion_setting'
      },
      {
        name: 'return_goods',
        path: 'promotion/return_goods'
      },
      {
        name: 'promotion_refund',
        path: 'promotion/refund'
      },
      {
        name: 'return_cause',
        path: 'promotion/return_cause'
      },
      {
        name: 'promotion_address',
        path: 'promotion/address'
      },

      // 促销
      {
        name: 'promotion_header',
        path: 'promotion/header'
      },
      {
        name: 'promotion_add_header',
        path: 'promotion/add_header'
      },
      {
        name: 'promotion_list',
        path: 'promotion/list'
      },
      {
        name: 'promotion_add_goods',
        path: 'promotion/add_goods'
      },
      {
        name: 'promotion_title_list',
        path: 'promotion/title_list'
      },
      {
        name: 'promotion_title_promotion',
        path: 'promotion/title_promotion'
      },

      // 库存
      {
        name: 'stock_in',
        path: 'stock/in'
      },
      {
        name: 'stock_out',
        path: 'stock/out'
      },

      // 用户
      {
        name: 'user_list',
        path: 'user/list'
      },

      // 运营
      {
        name: 'operate_advertising',
        path: 'operate/advertising'
      },
      {
        name: 'operate_add_advertising',
        path: 'operate/add_advertising'
      },

      // 统计
      {
        name: 'statistics_deal',
        path: 'statistics/deal'
      },
      {
        name: 'statistics_goods',
        path: 'statistics/goods'
      },
      {
        name: 'statistics_search',
        path: 'statistics/search'
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]