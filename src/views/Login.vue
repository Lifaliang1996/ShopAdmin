<template>
	<div class="container" @keyup.enter="login">
		<div class="bg"></div>
		<div class="login">
			<div class="title">后台管理系统</div>
			<div class="login-form">
				<img class="login-icon" src="@/assets/img/login/u2176.png" alt />
				<input class="login-input" type="text" placeholder="用户名" v-model="user.name" />
			</div>
			<div class="login-form">
				<img class="login-icon" src="@/assets/img/login/u2178.png" alt />
				<input class="login-input" type="password" placeholder="密码" v-model="user.password" />
			</div>
			<el-button type="primary" @click="login" class="btn">登录</el-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: "",
				password: ""
			}
		};
	},
	methods: {
		login() {
			if (!this.user.name) {
				this.$message({
					message: "请输入用户名",
					type: "warning"
				});
				return;
			}
			if (!this.user.password) {
				this.$message({
					message: "请输入密码",
					type: "warning"
				});
				return;
			}
			if (this.user.name != "admin") {
				this.$message({
					message: "用户名错误",
					type: "error"
				});
				return;
			}
			this.$message({
				message: "登录成功",
				type: "success"
			});
			this.$store.commit("setUserInfo", this.user);
			setTimeout(() => {
				this.$router.push("/home");
			}, 300);
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
}

.bg {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	height: 220px;
	background-color: $green;
	background-image: url("~@/assets/img/login/u2154_state0.png");
}

.login {
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 10;
	width: 350px;
	height: 400px;
	padding: 0 25px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba($color: #999999, $alpha: 0.8);
	border-top: 10px solid $green;

	.title {
		margin-top: 80px;
		color: $green;
		font-size: 25px;
		font-weight: 600;
	}

	.btn {
		width: 100%;
		margin-top: 20px;
		font-size: 20px;
	}

	.login-form {
		position: relative;
		margin-top: 20px;
		width: 100%;

		.login-icon {
			position: absolute;
			top: 10px;
			left: 8px;
			height: 24px;
		}

		.login-input {
			padding: 0 15px 0 40px;
			width: 100%;
			height: 45px;
			line-height: 100%;
			border-radius: 3px;
			border: 1px solid $gray3;
			outline: none;
			color: $gray2;

			&:focus {
				border: 2px solid $green;
			}
		}
	}
}
</style>>