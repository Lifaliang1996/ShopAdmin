<template>
	<div>
		<!-- 顶部订单及销售信息 -->
		<div class="flex top-info">
			<card class="item" icon="icon-single" title="今日订单" :content="200" />
			<card class="item" icon="icon-qian2" title="今日销售总额" :content="5000" price />
			<card class="item" icon="icon-qian" title="昨日销售总额" :content="6000" price />
			<card class="item" icon="icon-qian1" title="近7天销售总额" :content="36000" price />
		</div>

		<!-- 待处理事务 -->
		<div class="container">
			<big-card title="待处理事务">
				<div class="pending flex">
					<div class="item link" v-for="(item, index) in pending" :key="index">
						<router-link :to="item.path" tag="div">{{ item.title }}</router-link>
						<div class="num">{{ item.num }}</div>
					</div>
				</div>
			</big-card>
		</div>

		<!-- 运营快捷入口 -->
		<div class="container">
			<big-card title="运营快捷入口">
				<div class="flex quick-enter">
					<router-link class="item link" to="/goods/add" tag="div">
						<div class="iconfont icon-tianjia"></div>
						<div class="title">添加商品</div>
					</router-link>
					<router-link class="item link" to="/order/list" tag="div">
						<div class="iconfont icon-single"></div>
						<div class="title">订单列表</div>
					</router-link>
					<router-link class="item link" to="/user/list" tag="div">
						<div class="iconfont icon-Management"></div>
						<div class="title">用户管理</div>
					</router-link>
					<router-link class="item link" to="/statistics/deal" tag="div">
						<div class="iconfont icon-tongjifenxi"></div>
						<div class="title">交易统计</div>
					</router-link>
					<router-link class="item link" to="/operate/advertising" tag="div">
						<div class="iconfont icon-guanggaoguanli"></div>
						<div class="title">广告管理</div>
					</router-link>
				</div>
			</big-card>
		</div>

		<el-row class="container" :gutter="20">
			<el-col :span="12">
				<!-- 商品总览 -->
				<div>
					<big-card title="商品总览">
						<el-row type="flex" justify="space-between" class="goods-user-info">
							<el-col v-for="(item, index) in goodInfo" :key="index">
								<div class="num">{{ item.num }}</div>
								<div class="title">{{ item.title }}</div>
							</el-col>
						</el-row>
					</big-card>
				</div>
			</el-col>

			<el-col :span="12">
				<!-- 用户总览 -->
				<div>
					<big-card title="用户总览">
						<el-row type="flex" justify="space-between" class="goods-user-info">
							<el-col v-for="(item, index) in userInfo" :key="index">
								<div class="num">{{ item.num }}</div>
								<div class="title">{{ item.title }}</div>
							</el-col>
						</el-row>
					</big-card>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Card from "@/components/home/Card.vue";
import BigCard from "@/components/home/BigCard.vue";

export default {
	data() {
		return {
			pending: [
				{
					title: "待付款订单",
					num: 20,
					path: "/order/list"
				},
				{
					title: "待发货订单",
					num: 21,
					path: "/order/list"
				},
				{
					title: "已发货订单",
					num: 50,
					path: "/order/list"
				},
				{
					title: "已完成订单",
					num: 60,
					path: "/order/list"
				},
				{
					title: "待确认退货订单",
					num: 6,
					path: "/order/list"
				},
				{
					title: "待处理退款订单",
					num: 2,
					path: "/order/list"
				},
				{
					title: "广告位即将到期",
					num: 2,
					path: "operate/advertising"
				}
			],
			goodInfo: [
				{ title: "已下架", num: 50 },
				{ title: "已上架", num: 450 },
				{ title: "库存紧张", num: 50 },
				{ title: "全部商品", num: 600 }
			],
			userInfo: [
				{ title: "今日新增", num: 50 },
				{ title: "昨日新增", num: 60 },
				{ title: "本月新增", num: 1500 },
				{ title: "会员总数", num: 100000 }
			]
		};
	},
	components: {
		Card,
		BigCard
	}
};
</script>

<style lang="scss" scoped>
.top-info {
	justify-content: space-between;
	.item {
		width: 23.5%;
	}
}

.pending {
	padding: 10px 10px 20px;

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 1%;
		padding: 0 10px;
		width: 31.33%;
		height: 40px;
		border-bottom: 1px solid #f0f0f0;
		font-size: 14px;

		.num {
			color: $red;
			&::before {
				content: "(";
				color: #666;
			}
			&::after {
				content: ")";
				color: #666;
			}
		}
	}
}

.quick-enter {
	padding: 30px 25px;
	.item {
		text-align: center;
		&:not(:first-child) {
			margin-left: 5%;
		}
		.iconfont {
			opacity: 0.8;
			font-size: 50px;
		}
		.title {
			margin-top: 10px;
			font-size: 14px;
		}
	}
}

.goods-user-info {
	padding: 30px 25px;
	text-align: center;
	.num {
		color: $red;
		font-size: 28px;
	}
	.title {
		margin-top: 6px;
		font-size: 14px;
	}
}
</style>