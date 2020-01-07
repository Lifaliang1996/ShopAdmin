<template>
	<div id="index">
		<el-menu
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			:collapse="isCollapse"
		>
			<div class="home-icon">
				<img v-if="!isCollapse" src="@/assets/img/index/logo.png" alt />
				<img v-else src="@/assets/img/index/logo-collapse.png" alt />
			</div>
			<el-submenu v-for="(sub, index) in nav" :index="index.toString()" :key="index">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">{{ sub.title }}</span>
				</template>
				<el-menu-item-group v-for="(group, index) in sub.child" :key="index">
					<span v-if="group.title !== ''" slot="title">{{ group.title }}</span>
					<el-menu-item
						v-for="(item, index) in group.content"
						:index="item.path"
						:key="index"
					>{{ item.name }}</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>

		<div class="right">
			<div class="header-bar">
				<div class="sider-trigger" @click="collapse"></div>
			</div>
			<div class="content"></div>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
import nav from "@/utils/nav.js";

export default {
	data() {
		return {
			nav: nav,
			isCollapse: false
		};
	},
	methods: {
		handleOpen(key, keyPath) {},
		handleClose(key, keyPath) {},
		collapse() {
			this.isCollapse = !this.isCollapse;
		}
	}
};
</script>

<style lang="scss" scoped>
#index {
	width: 100vw;
	height: 100vh;
	display: flex;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	height: 100vh;
	background-color: #353441;
}

.home-icon {
	margin: 20px 0 10px;
	width: 100%;
	height: 40px;
	text-align: center;
	opacity: 0.9;

	& img {
		height: 100%;
	}

	&:hover {
		opacity: 1;
	}
}

.right {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	.header-bar {
		display: flex;
		align-items: center;
		padding: 0 20px;
		width: 100%;
		height: 60px;
		background-color: #fff;

		.sider-trigger {
			width: 30px;
			height: 50px;
			background-color: red;
		}
	}

	.content {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
}
</style>>