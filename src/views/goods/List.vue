<template>
	<div>
		<div class="search">
			<el-input class="text" type="text" v-model="searchMsg.id_name" size="small" placeholder="商品名称/商品货号"></el-input>
			<el-select
				v-model="searchMsg.category"
				style="margin: 0 20px;"
				size="small"
				placeholder="请选择商品分类"
			>
				<el-option value="分类1" label="分类1"></el-option>
				<el-option value="分类2" label="分类2"></el-option>
				<el-option value="分类2" label="分类2"></el-option>
			</el-select>
			<el-select v-model="searchMsg.brand" style="margin: 0 20px;" size="small" placeholder="请选择商品品牌">
				<el-option value="品牌1" label="品牌1"></el-option>
				<el-option value="品牌2" label="品牌2"></el-option>
				<el-option value="品牌3" label="品牌3"></el-option>
			</el-select>
      <el-button size="small">查询结果</el-button>
		</div>
		<el-table ref="table" :data="goodsInfo.list" @select-all="selectedAll = !selectedAll" border>
			<el-table-column type="selection" align="center" width="50"></el-table-column>
			<el-table-column align="center" width="80" prop="id" label="ID"></el-table-column>
			<el-table-column align="center" width="100" label="图片">
				<template slot-scope="scope">
					<img :src="scope.row.goodsImg" class="goods-img" alt />
				</template>
			</el-table-column>
			<el-table-column align="center" prop="goodsName" label="名称"></el-table-column>
			<el-table-column align="center" label="价格">
				<template slot-scope="scope">
					<span class="price">{{ scope.row.goodsPrice }}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" prop="buyNum" label="销量"></el-table-column>
			<el-table-column align="center" prop="goodsStock" label="库存"></el-table-column>
			<el-table-column align="center" label="操作">
				<template>
					<span class="text-button" size="mini">修改</span>
					<span class="text-button" size="mini">删除</span>
				</template>
			</el-table-column>
		</el-table>
		<div class="footer">
			<div class="batch-operation">
				<el-checkbox v-model="selectedAll" @change="selectAll">全选</el-checkbox>
				<el-select v-model="batchOperation" style="margin: 0 20px;" size="small" placeholder="批量操作">
					<el-option value="del" label="删除"></el-option>
				</el-select>
				<el-button size="small">确定</el-button>
			</div>
			<el-pagination
				background
				:page-size="pageSize"
				:current-page="currentPage"
				:total="goodsInfo.totalCount"
				layout="total, prev, pager, next, jumper"
				@current-change="pageTurn"
			></el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentPage: 1,
			pageSize: 10,
			goodsInfo: [],
			selectedAll: false,
			searchMsg: { id_name: null, category: null, brand: null },
			batchOperation: null
		};
	},
	methods: {
		requestData() {
			this.axios
				.post("/merchant_goods_list", {
					currentPage: this.currentPage,
					pageSize: this.pageSize
				})
				.then(res => {
					this.goodsInfo = res;
				});
		},

		selectAll() {
			this.$refs.table.toggleAllSelection();
			this.selectedAll = !this.selectedAll;
		},

		pageTurn(page) {
			this.currentPage = page;
			this.requestData();
		}
	},
	created() {
		this.requestData();
	}
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  margin-bottom: 10px;
  padding: 15px 30px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  .text {
    width: 250px;
  }
}

.goods-img {
  width: 40px;
  height: 40px;
}

.text-button {
  margin-right: 5px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
  background-color: #ffffff;
  border: 1px solid #ebeef5;
}
</style>