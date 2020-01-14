<template>
	<div>list</div>
</template>

<script>
export default {
	data() {
		return {
			goods: {}
		};
	},
	created() {
		this.axios
			.post("/merchant_goods_list", {
				currentPage: 2,
				pageSize: 10
			})
			.then(res => {
				console.log(res);
			});
	}
};
</script>

<style>
</style>