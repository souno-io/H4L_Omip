<template>
	<el-container>
		<el-aside width="300px" v-loading="showDicloading">
			<el-container>
				<el-header>
					<el-input placeholder="输入关键字进行过滤" v-model="dicFilterText" clearable></el-input>
				</el-header>
				<el-main class="nopadding">
					<el-tree ref="dic" class="menu filter-tree" node-key="id" :data="dicList" :props="dicProps"
							 :highlight-current="true" :expand-on-click-node="false" :filter-node-method="dicFilterNode"
							 @node-click="dicClick">
						<template #default="{node, data}">
							<span class="custom-tree-node">
								<span class="label">{{ node.label }}</span>
								<span class="code">{{ data.code }}</span>
							</span>
						</template>
					</el-tree>
				</el-main>
			</el-container>
		</el-aside>
		<el-container class="is-vertical">
			<el-header>
				<div class="left-panel">
					<div class="block">
						<el-date-picker
							v-model="data_range"
							format="YYYY年MM月DD日"
							value-format="YYYY-MM-DD"
							type="daterange"
							unlink-panels
							range-separator="至"
							start-placeholder="开始日期"
							end-placeholder="结束日期">
						</el-date-picker>
					</div>
					&nbsp;&nbsp;&nbsp;
					<el-button type="primary" icon="el-icon-search"
							   @click="this.$refs.table.reload({id:item.id,start_date: data_range[0],end_date: data_range[1]})"></el-button>
				</div>
				<div class="right-panel">
					<el-button type="primary" icon="el-icon-printer" @click="print_table()"></el-button>
					<el-button type="primary" icon="el-icon-download"
							   @click="exportExcelHandle('exportTable')"></el-button>
				</div>
			</el-header>
			<el-main class="nopadding">
				<scTable ref="table" :apiObj="listApi" row-key="id" :params="listApiParams" id="exportTable"
						 @selection-change="selectionChange" hidePagination>
					<el-table-column label="序号" align="center">
						<template v-slot="scop">
							{{ scop.$index + 1 }}
						</template>
					</el-table-column>
					<el-table-column label="住院号码" prop="住院号码" width="85"></el-table-column>
					<el-table-column label="姓名" prop="姓名" width="80"></el-table-column>
					<el-table-column label="身份证号" prop="身份证号" width="155"></el-table-column>
					<el-table-column label="年龄" prop="年龄" width="60"></el-table-column>
					<el-table-column label="入院科别" prop="入院科别" width="150"></el-table-column>
					<el-table-column label="出院主要诊断编码" prop="出院主要诊断编码" width="100"></el-table-column>
					<el-table-column label="出院主要诊断名称" prop="出院主要诊断名称" width="150"></el-table-column>
					<el-table-column label="出院诊断疾病编码1" prop="出院诊断疾病编码1" width="100"></el-table-column>
					<el-table-column label="出院诊断其他诊断1" prop="出院诊断其他诊断1" width="150"></el-table-column>
					<el-table-column label="主要手术操作编码" prop="主要手术操作编码" width="100"></el-table-column>
					<el-table-column label="主要手术操作名称" prop="主要手术操作名称" width="150"></el-table-column>
					<el-table-column label="住院天数" prop="住院天数" width="60"></el-table-column>
					<el-table-column label="总费用" prop="总费用" width="100"></el-table-column>
					<el-table-column label="离院方式" prop="离院方式" width="60"></el-table-column>
				</scTable>
			</el-main>
		</el-container>
	</el-container>

	<dic-dialog v-if="dialog.dic" ref="dicDialog" @success="handleDicSuccess" @closed="dialog.dic=false"></dic-dialog>

	<list-dialog v-if="dialog.list" ref="listDialog" @success="handleListSuccess"
				 @closed="dialog.list=false"></list-dialog>

</template>

<script>
import dicDialog from './dic'
import listDialog from './list'
import print from '@/utils/print'
import excelExportUtil from '@/utils/exportExcel'

export default {
	name: 'drgs',
	components: {
		dicDialog,
		listDialog
	},
	data() {
		return {
			item: {
				id: '',
				label: '',
			},
			dialog: {
				dic: false,
				info: false
			},
			data_range: '',
			showDicloading: true,
			dicList: [],
			dicFilterText: '',
			dicProps: {
				label: 'label'
			},
			listApi: null,
			listApiParams: {},
			selection: []
		}
	},
	watch: {
		dicFilterText(val) {
			this.$refs.dic.filter(val);
		}
	},
	mounted() {
		this.data_range = [this.getFirstDay(), this.getLastDay()]
		this.getDic()
	},
	methods: {
		print_table() {
			print(this.$refs['table'])
		},
		exportExcelHandle(tableId) {
			excelExportUtil.exportExcel(tableId, this.item.label + "(" + this.data_range[0] + "_" + this.data_range[1] + ")", ".xlsx", true);
		},
		getFirstDay() {
			//当前月第一天
			const y = new Date().getFullYear(); //获取年份
			let m = new Date().getMonth() + 1; //获取月份
			const d = "01";
			m = m < 10 ? "0" + m : m; //月份补 0
			return [y, m, d].join("-");
		},
		getLastDay() {
			//当前月最后一天
			const y = new Date().getFullYear(); //获取年份
			let m = new Date().getMonth() + 1; //获取月份
			let d = new Date(y, m, 0).getDate(); //获取当月最后一日
			m = m < 10 ? "0" + m : m; //月份补 0
			d = d < 10 ? "0" + d : d; //日数补 0
			return [y, m, d].join("-");
		},
		//加载树数据
		async getDic() {
			var res = await this.$API.drgs.list.get({pageSize: 100});
			this.showDicloading = false;
			this.dicList = res.data.rows;
			//获取第一个节点,设置选中 & 加载明细列表
			var firstNode = this.dicList[0];
			if (firstNode) {
				this.$nextTick(() => {
					this.$refs.dic.setCurrentKey(firstNode.id)
				})
				this.listApiParams = {
					id: firstNode.id,
					start_date: this.data_range[0],
					end_date: this.data_range[1],
				}
				this.item.id = firstNode.id;
				this.item.label = firstNode.label;
				this.listApi = this.$API.drgs.details;
			}
		},
		//树过滤
		dicFilterNode(value, data) {
			if (!value) return true;
			var targetText = data.label + data.code;
			return targetText.indexOf(value) !== -1;
		},

		//树点击事件
		dicClick(data) {
			this.item.id = data.id;
			this.item.label = data.label;
			this.$refs.table.reload({
				id: data.id,
				start_date: this.data_range[0],
				end_date: this.data_range[1],
			})
		},
	}
}
</script>

<style scoped>
/*.filter-tree {*/
/*	!* border: 1px solid #dcdfe6; *!*/
/*	min-width: 100%;*/
/*	display: inline-block;*/
/*	overflow: auto;*/
/*	margin-top: 12px;*/
/*}*/

/*.filter-tree span {*/
/*	font-size: 16px;*/
/*	display: block;*/
/*	overflow: hidden;*/
/*/ / word-break: keep-all;*/
/*/ / white-space: nowrap;*/
/*/ / text-overflow: ellipsis;*/
/*	padding-right: 12px;*/
/*}*/

.menu:deep(.el-tree-node__label) {
	display: flex;
	flex: 1;
	height: 100%;
}

.custom-tree-node {
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
	padding-right: 24px;
	height: 100%;
}

.custom-tree-node .code {
	font-size: 12px;
	color: #999;
}

.custom-tree-node .do {
	display: none;
}

.custom-tree-node:hover .code {
	display: none;
}

.custom-tree-node:hover .do {
	display: inline-block;
}
</style>
