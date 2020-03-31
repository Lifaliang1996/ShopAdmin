<template>
	<div>
		<!-- 头部步骤条 -->
		<el-steps :active="stepActive" align-center process-status="process" finish-status="success">
			<el-step title="填写商品信息"></el-step>
			<el-step title="填写商品属性"></el-step>
			<el-step title="选择商品关联"></el-step>
		</el-steps>

		<div>
			<div v-if="stepActive == 0">
				<el-form :model="goodsInfo" :rules="rules" ref="goodsForm" label-width="100px">
					<el-form-item label="商品分类" prop="typeId">
						<el-cascader
							v-model="category"
							:options="categoryOptions"
							:props="{expandTrigger: 'hover'}"
							placeholder="选择商品分类"
						/>
					</el-form-item>
					<el-form-item label="商品名称" prop="goodsName">
						<el-input class="input" type="text" v-model="goodsInfo.goodsName" />
					</el-form-item>
					<el-form-item label="副标题" prop="goodsSubtitle">
						<el-input class="input" type="text" v-model="goodsInfo.goodsSubtitle" />
					</el-form-item>
					<el-form-item label="商品品牌" prop="brandId">
						<el-select v-model="goodsInfo.brandId" placeholder="选择商品品牌">
							<el-option
								v-for="item in brandOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="商品介绍" prop="goodsDesc">
						<el-input class="input" type="textarea" v-model="goodsInfo.goodsDesc" />
					</el-form-item>
					<el-form-item label="商品货号">
						<el-input class="input" type="text" v-model="goodsInfo.goodsNo" />
					</el-form-item>
					<el-form-item label="商品售价" prop="goodsPrice">
						<el-input class="input" type="text" v-model="goodsInfo.goodsPrice" />
					</el-form-item>
					<el-form-item label="市场价">
						<el-input class="input" type="text" v-model="goodsInfo.marketPrice" />
					</el-form-item>
					<el-form-item label="商品库存" prop="goodsStock">
						<el-input class="input" type="text" v-model="goodsInfo.goodsStock" />
					</el-form-item>
					<el-form-item label="库存预警值" prop="goodsWarning">
						<el-input class="input" type="text" v-model="goodsInfo.goodsWarning" />
					</el-form-item>
					<el-form-item label="计量单位">
						<el-input class="input" type="text" v-model="goodsInfo.goodsUnit" />
					</el-form-item>
					<el-form-item label="商品重量">
						<el-input class="input" type="text" v-model="goodsInfo.goodsWeight" />
					</el-form-item>
				</el-form>
				<el-button type="primary " @click="toStepTwo">下一步，填写商品属性</el-button>
			</div>
			<div v-if="stepActive == 1">填写商品信息</div>
			<div v-if="stepActive == 2">填写商品属性</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			stepActive: 0,
			categoryOptions: [
				{
					value: 1,
					label: "服饰",
					children: [
						{
							value: 11,
							label: "衣服"
						},
						{
							value: 12,
							label: "裤子"
						},
						{
							value: 1,
							label: "鞋子"
						}
					]
				},
				{
					value: 2,
					label: "食品",
					children: [
						{
							value: 21,
							label: "水果"
						},
						{
							value: 22,
							label: "蔬菜"
						},
						{
							value: 23,
							label: "零食"
						}
					]
				},
				{
					value: 3,
					label: "家电",
					children: [
						{
							value: 31,
							label: "电视"
						},
						{
							value: 32,
							label: "冰箱"
						},
						{
							value: 33,
							label: "空调"
						}
					]
				}
			],
			brandOptions: [
				{ value: 101, label: "苹果" },
				{ value: 102, label: "华为" },
				{ value: 103, label: "小米" }
			],
			category: [],
			rules: {
				goodsName: [
					{ required: true, message: "请输入商品名称", trigger: "blur" }
				],
				goodsSubtitle: [
					{ required: true, message: "请输入商品副标题", trigger: "blur" }
				],
				brandId: [
					{ required: true, message: "请选择商品品牌", trigger: "change" }
				],
				goodsDesc: [
					{ required: true, message: "请输入商品介绍", trigger: "blur" }
				],
				goodsPrice: [
					{ required: true, message: "请输入商品售价", trigger: "blur" }
				],
				goodsStock: [
					{ required: true, message: "请输入商品库存", trigger: "blur" }
				],
				goodsWarning: [
					{ required: true, message: "请输入库存预警值", trigger: "blur" }
				]
			},
			goodsInfo: {
				typeId: "",
				childId: "",
				goodsName: "",
				goodsSubtitle: "",
				brandId: "",
				goodsDesc: "",
				goodsNo: "",
				goodsPrice: "",
				marketPrice: "",
				goodsStock: "",
				goodsWarning: "",
				goodsUnit: "",
				goodsWeight: "",
				styleId: "",
				merchantSpecifications: [
					{
						name: "",
						value: []
					}
				],
				merchantGoodsTypePropertyList: [
					{
						nameValue: [
							{
								name: "",
								value: ""
							}
						],
						goodsSalePrice: "",
						goodsStock: "",
						stockWarning: "",
						skuCode: ""
					}
				],
				merchantParamDetailIds: {
					merchantParamDetails: [
						{
							paramDetailName: "",
							specificationsValue: ""
						}
					],
					mainMaterial: "",
					paramObject: ""
				},
				goodsImg: "",
				navId: Number,
				navChildId: Number,
				goodsMobileImg: ""
			}
		};
	},
	watch: {
		category() {
			this.goodsInfo.typeId = this.category[0];
			this.goodsInfo.childId = this.category[1];
		}
	},
	methods: {
		nextStep() {
			this.stepActive++;
		},
		// 下一步，填写商品属性
		toStepTwo() {
			this.$refs.goodsForm.validate(res => {
				if (res) {
          // 要填的信息都填好了就跳转下一步
					this.stepActive++;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.input {
	width: 400px;
}
</style>>