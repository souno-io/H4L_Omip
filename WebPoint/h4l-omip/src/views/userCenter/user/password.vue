<template>
	<el-card shadow="never" header="修改密码">
		<el-alert title="密码更新成功后，您将被重定向到登录页面，您可以使用新密码重新登录。" type="info" show-icon style="margin-bottom: 15px;"/>
		<el-form ref="form" :model="form" :rules="rules" label-width="120px" style="margin-top:20px;">
			<el-form-item label="当前密码" prop="old_password">
				<el-input v-model="form.old_password" type="password" show-password placeholder="请输入当前密码"></el-input>
				<div class="el-form-item-msg">必须提供当前登录用户密码才能进行更改</div>
			</el-form-item>
			<el-form-item label="新密码" prop="new_password">
				<el-input v-model="form.new_password" type="password" show-password placeholder="请输入新密码"></el-input>
				<sc-password-strength v-model="form.new_password"></sc-password-strength>
				<div class="el-form-item-msg">请输入包含英文、数字的8位以上密码</div>
			</el-form-item>
			<el-form-item label="确认新密码" prop="replay_password">
				<el-input v-model="form.replay_password" type="password" show-password placeholder="请再次输入新密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="save">保存密码</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import scPasswordStrength from '@/components/scPasswordStrength'

	export default {
		components: {
			scPasswordStrength
		},
		data() {
			return {
				form: {
					old_password: "",
					new_password: "",
					replay_password: ""
				},
				rules: {
					old_password: [
						{ required: true, message: '请输入当前密码'}
					],
					new_password: [
						{ required: true, message: '请输入新密码'}
					],
					replay_password: [
						{ required: true, message: '请再次输入新密码'},
						{validator: (rule, value, callback) => {
							if (value !== this.form.new_password) {
								callback(new Error('两次输入密码不一致'));
							}else{
								callback();
							}
						}}
					]
				}
			}
		},
		methods: {
			async save(){
				this.$refs.form.validate(async valid => {
					if (valid) {
						var data = {
							old_password: this.form.old_password,
							new_password: this.form.new_password,
							replay_password: this.form.replay_password,
						}
						var user = await this.$API.auth.changePass.post(data)
						if (user.code === 200) {
							this.$alert("密码修改成功，是否跳转至登录页使用新密码登录", "修改成功", {
								type: 'success',
								center: true
							}).then(() => {
								this.$router.replace({
									path: '/login'
								})
							}).catch(() => {
							})
						} else {
							this.$message.warning(user.message)
							return false
						}
					} else {
						return false
					}
				})
			}
		}
	}
</script>

<style>
</style>
