<template>
	<div class="container">
		<div class="bg"></div>
		<div class="login">
			<div class="title">后台管理系统</div>
			<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
		</div>
	</div>
</template>

<script>
export default {};
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
  height: 450px;
  padding: 0 20px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba($color: #999999, $alpha: 0.8);
	border-top: 10px solid $green;

	.title {
		margin-top: 100px;
		color: $green;
		font-size: 25px;
		font-weight: 600;
	}
}
</style>>