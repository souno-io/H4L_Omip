<template>
	<el-dialog :title="titleMap[mode]" v-model="visible" :width="500" destroy-on-close @closed="$emit('closed')">
		<el-form :model="form" :rules="rules" :disabled="mode==='show'" ref="dialogForm" label-width="100px"
				 label-position="left">
			<el-form-item label="头像" prop="avatar">
				<sc-upload v-model="form.avatar" title="上传头像"></sc-upload>
			</el-form-item>
			<el-form-item label="登录账号" prop="username">
				<el-input v-model="form.username" :disabled="mode==='edit'" placeholder="用于登录系统"
						  clearable></el-input>
			</el-form-item>
			<el-form-item label="姓名" prop="name">
				<el-input v-model="form.name" placeholder="请输入完整的真实姓名" clearable></el-input>
			</el-form-item>
			<el-form-item label="手机号码" prop="phone">
				<el-input type="number" v-model="form.phone" placeholder="请输入手机号码" clearable></el-input>
			</el-form-item>
<!--			<template v-if="mode==='add'">-->
<!--				<el-form-item label="登录密码" prop="password">-->
<!--					<el-input type="password" v-model="form.password" clearable show-password></el-input>-->
<!--				</el-form-item>-->
<!--				<el-form-item label="确认密码" prop="password2">-->
<!--					<el-input type="password" v-model="form.password2" clearable show-password></el-input>-->
<!--				</el-form-item>-->
<!--			</template>-->
			<el-form-item label="所属部门" prop="user_departments">
				<el-cascader v-model="form.user_departments" :options="depts" :props="deptsProps" clearable
							 style="width: 100%;"></el-cascader>
			</el-form-item>
			<el-form-item label="所属角色" prop="user_roles">
				<el-select v-model="form.user_roles" multiple filterable style="width: 100%">
					<el-option v-for="item in groups" :key="item.id" :label="item.label" :value="item.id"/>
				</el-select>
			</el-form-item>
		</el-form>
		<template #footer>
			<el-button @click="visible=false">取 消</el-button>
			<el-button v-if="mode!=='show'" type="primary" :loading="isSaveing" @click="submit()">保 存</el-button>
		</template>
	</el-dialog>
</template>

<script>
export default {
	emits: ['success', 'closed'],
	data() {
		return {
			mode: "add",
			titleMap: {
				add: '新增用户',
				edit: '编辑用户',
				show: '查看'
			},
			visible: false,
			isSaveing: false,
			//表单数据
			form: {
				id: "",
				username: "",
				avatar: "",
				name: "",
				phone: "",
				user_departments: "",
				user_roles: []
			},
			//验证规则
			rules: {
				avatar: [
					{required: true, message: '请上传头像'}
				],
				username: [
					{required: true, message: '请输入登录账号'}
				],
				phone: [
					{required: true, message: '请输入手机号码'}
				],
				name: [
					{required: true, message: '请输入真实姓名'}
				],
				password: [
					{required: true, message: '请输入登录密码'},
					{
						validator: (rule, value, callback) => {
							if (this.form.password2 !== '') {
								this.$refs.dialogForm.validateField('password2');
							}
							callback();
						}
					}
				],
				password2: [
					{required: true, message: '请再次输入密码'},
					{
						validator: (rule, value, callback) => {
							if (value !== this.form.password) {
								callback(new Error('两次输入密码不一致!'));
							} else {
								callback();
							}
						}
					}
				],
				user_departments: [
					{required: true, message: '请选择所属部门'}
				],
				user_roles: [
					{required: false, message: '请选择所属角色', trigger: 'change'}
				]
			},
			//所需数据选项
			groups: [],
			groupsProps: {
				value: "id",
				multiple: true,
				checkStrictly: true
			},
			depts: [],
			deptsProps: {
				value: "id",
				checkStrictly: false
			}
		}
	},
	mounted() {
		this.getGroup()
		this.getDept()
	},
	methods: {
		//显示
		open(mode = 'add') {
			this.mode = mode;
			this.visible = true;
			return this
		},
		//加载树数据
		async getGroup() {
			var res = await this.$API.system.role.list.get();
			this.groups = res.data.rows;
		},
		async getDept() {
			var res = await this.$API.system.dept.list.get();
			this.depts = res.data.rows;
		},
		//表单提交方法
		submit() {
			this.$refs.dialogForm.validate(async (valid) => {
				let res;
				if (valid) {
					this.isSaveing = true;
					if (this.mode === 'add') {
						// eslint-disable-next-line no-redeclare
						res = await this.$API.user.add.post(this.form);
					} else {
						// eslint-disable-next-line no-redeclare
						res = await this.$API.user.edit.patch(this.form);
					}
					this.isSaveing = false;
					if (res.code === 200 || res.code === 201) {
						this.$emit('success', this.form, this.mode)
						this.visible = false;
						this.$message.success("操作成功")
					} else {
						this.$alert(res.message, "提示", {type: 'error'})
					}
				} else {
					return false;
				}
			})
		},
		//表单注入数据
		setData(data) {
			// this.form.id = data.id
			// this.form.username = data.username
			// this.form.avatar = data.avatar
			// this.form.name = data.name
			// this.form.user_roles = data.user_roles
			// this.form.user_departments = data.user_departments

			//可以和上面一样单个注入，也可以像下面一样直接合并进去
			Object.assign(this.form, data)
		}
	}
}
</script>

<style>
</style>
