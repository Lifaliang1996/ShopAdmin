<template>
	<div>
		<el-table :data="goodsList">
      <el-table-column type="selection" align="center" width="50"></el-table-column>
			<el-table-column align="center" width="80" prop="id" label="ID"></el-table-column>
			<el-table-column align="center" width="100" label="图片">
				<template slot-scope="scope">
					<img :src="scope.row.goodsImg" class="goods-img" alt />
				</template>
			</el-table-column>
			<el-table-column align="center" prop="goodsName" label="名称"></el-table-column>
			<el-table-column align="center" label="价格">
        <template slot-scope="scope"><span class="price">{{ scope.row.goodsPrice }}</span></template>
      </el-table-column>
			<el-table-column align="center" prop="buyNum" label="销量"></el-table-column>
			<el-table-column align="center" prop="goodsStock" label="库存"></el-table-column>
			<el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <span class="text-button" size="mini">修改</span>
          <span class="text-button" size="mini">删除</span>
        </template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			goodsList: []
		};
	},
	created() {
		this.axios
			.post("/merchant_goods_list", {
				currentPage: 2,
				pageSize: 10
			})
			.then(res => {
				this.goodsList = res.list;
			});
	}
};
</script>

<style>
.goods-img {
	width: 40px;
	height: 40px;
}

.text-button {
  margin-right: 5px;
}
</style>