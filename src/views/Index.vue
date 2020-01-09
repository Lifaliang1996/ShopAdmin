<template>
	<div id="index">
		<!-- 侧边导航 -->
		<el-menu class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened router>
			<div class="home-icon">
				<img v-if="!isCollapse" src="@/assets/img/index/logo.png" alt />
				<img v-else src="@/assets/img/index/logo-collapse.png" alt />
			</div>
			<el-submenu v-for="(sub, index) in nav" :index="index.toString()" :key="index">
				<template slot="title">
					<i :class="sub.icon" class="iconfont icon"></i>
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

		<div class="right-box">
			<!-- 顶部导航 -->
			<div class="header-bar">
				<div class="header-left">
					<div class="sider-trigger" :class="{collapse: isCollapse}" @click="collapse">
						<i class="iconfont icon-zhedie"></i>
					</div>
				</div>
				<div class="header-right">
					<el-dropdown>
						<span class="dropdown-link">
							<el-avatar :size="35" class="avatar">user</el-avatar>
							<i class="el-icon-caret-bottom"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>消息中心</el-dropdown-item>
							<el-dropdown-item>退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>

			<!-- 内容主体 -->
			<div class="content"></div>
		</div>
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

.icon {
	margin-right: 5px;
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

.collapse {
	transform: rotate(90deg);
}

.right-box {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	.header-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30px;
		width: 100%;
		height: 60px;
		background-color: #fff;

		.header-left {
			display: flex;
			align-items: center;
			height: 100%;

			.sider-trigger {
				color: $gray2;
				transition: 0.2s;

				&:hover {
					color: $green;
				}

				.iconfont {
					font-size: 25px;
				}
			}
		}

		.header-right {
			display: flex;
			height: 100%;

			.dropdown-link {
				display: flex;
				align-items: center;
				height: 100%;
				cursor: pointer;

				.avatar {
					margin-right: 5px;
				}
			}
		}
	}

	.content {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
}
</style>>