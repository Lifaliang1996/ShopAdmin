<template>
	<div class="card">
		<div class="icon">
			<i class="iconfont" :class="icon"></i>
		</div>
		<div class="text">
			<p class="title">{{ title }}</p>
			<p class="content"><span v-if="price">￥</span>{{ content }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		icon: String,
		title: String,
    content: Number,
    price: {
      type: Boolean,
      default() {
        return false
      }
    }
	}
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  height: 100px;
	padding: 20px 15px;
  border: $border;
  background-color: #fff;
  overflow: hidden;

  .icon {
    display: flex;
    align-items: center;
    color: $green;
    .iconfont {
      font-size: 50px;
    }
  }

  .text {
    margin-left: 10px;
    .title {
      color: #999999;
    }
    .content {
      margin-top: 5px;
      color: #666666;
      font-size: 20px;
    }
  }
}
</style>>
