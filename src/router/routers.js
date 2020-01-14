export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        name: 'home',
        path: 'home',
        component: () => import('@/views/home/Home.vue')
      },
      // 商品
      {
        name: 'goods_list',
        path: 'goods/list',
        component: () => import('@/views/goods/List.vue')
      },
      {
        name: 'goods_add',
        path: 'goods/add'
      },
      {
        name: 'goods_recycle',
        path: 'goods/recycle'
      },
      {
        name: 'goods_comment',
        path: 'goods/comment'
      },
      {
        name: 'goods_category',
        path: 'goods/category'
      },
      {
        name: 'goods_type',
        path: 'goods/type'
      },
      {
        name: 'goods_brand',
        path: 'goods/brand'
      },
      {
        name: 'goods_images',
        path: 'goods/images'
      },

      // 订单
      {
        name: 'order_list',
        path: 'order/list'
      },
      {
        name: 'order_receipt',
        path: 'order/receipt'
      },
      {
        name: 'order_setting',
        path: 'order/order_setting'
      },
      {
        name: 'return_order',
        path: 'order/return_order'
      },
      {
        name: 'order_refund',
        path: 'order/refund'
      },
      {
        name: 'return_cause',
        path: 'order/return_cause'
      },
      {
        name: 'order_address',
        path: 'order/address'
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
        name: 'promotion_add_promotion',
        path: 'promotion/add_promotion'
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