<template>
  <div>
    <!-- 头部步骤条 -->
    <el-steps :active="stepActive" align-center process-status="process" finish-status="success">
      <el-step title="选择商品分类"></el-step>
      <el-step title="填写商品信息"></el-step>
      <el-step title="填写商品属性"></el-step>
      <el-step title="选择商品关联"></el-step>
    </el-steps>

    <div>
      <div v-if="stepActive == 0">选择商品分类</div>
      <div v-if="stepActive == 1">填写商品信息</div>
      <div v-if="stepActive == 2">填写商品属性</div>
      <div v-if="stepActive == 3">选择商品关联</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stepActive: 0
    }
  },
  methods: {
    nextStep() {
      this.stepActive++
    }
  }
}
</script>

<style>

</style>