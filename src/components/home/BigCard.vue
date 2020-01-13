<template>
  <div class="big-card">
    <div class="title">{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.big-card {
  width: 100%;
  background-color: #fff;
  border: $border;

  .title:first-child {
    padding: 8px 15px;
    border-bottom: $border;
    background-color: #f3f3f3;
    color: #666;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>>