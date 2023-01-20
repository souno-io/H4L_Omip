<!--本文件由FirstUI授权予叶兴（手机号：  1 8 79 8  79 15 4 9，身份证尾号：     055916）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">UploadVideo <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">UploadVideo 视频上传，拍摄或从手机相册中选择视频进行上传。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">自动上传</view>
			<fui-upload-video immediate :url="url" ref="upload" @success="success" @error="error" @complete="complete">
			</fui-upload-video>
			<view class="fui-section__title">手动上传</view>
			<view class="fui-btn__box">
				<fui-button type="gray" width="400rpx" height="84rpx" text="开始上传" bold @click="startUpload">
				</fui-button>
			</view>
			<fui-upload-video :width="340" :max="2" background="#333" addColor="#d1d1d1" :fileList="fileList" :url="url" ref="upload2" @success="success2" @error="error2"
				@complete="complete2">
			</fui-upload-video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//上传接口地址
				url: 'https://ffa.firstui.cn/api/example/upload-file',
				//上传状态，用于保存或其他操作时做判断
				status: '',
				//上传的视频地址列表
				urls: [],
				//上传状态，用于保存或其他操作时做判断
				status2: '',
				//初始化已上传的视频列表
				fileList: ['https://ffa.firstui.cn/uploadfile/220831211231709.mp4'],
				//上传的视频地址列表
				urls2: []
			}
		},
		onLoad() {
			this.urls2 = this.fileList
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			success(e) {
				console.log(e)
				//上传成功回调，处理服务器返回数据【此处根据实际返回数据进行处理】
				let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}")
				this.status = e.status
				if (res.data.url) {
					//处理结果返回给组件
					//data.url为上传成功后返回的视频地址
					//e.index为视频索引值
					this.$refs.upload.result(res.data.url, e.index)
				}
			},
			error(e) {
				this.status = e.status
			},
			complete(e) {
				this.status = e.status
				this.urls = e.urls
				if (this.status === 'success' && e.action === 'upload') {
					this.fui.toast('上传完成！')
					//已上传完成的视频列表 this.urls
					console.log(this.urls)
				}
			},
			success2(e) {
				console.log(e)
				//上传成功回调，处理服务器返回数据【此处根据实际返回数据进行处理】
				let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}")
				this.status = e.status
				if (res.data.url) {
					//处理结果返回给组件
					//data.url为上传成功后返回的视频地址
					//e.index为视频索引值
					this.$refs.upload2.result(res.data.url, e.index)
				}
			},
			error2(e) {
				this.status2 = e.status
				uni.showModal({
					content: JSON.stringify(e)
				})
			},
			complete2(e) {
				this.status2 = e.status
				this.urls2 = e.urls
				if (this.status2 === 'success' && e.action === 'upload') {
					this.fui.toast('上传完成！')
					//已上传完成的视频列表 this.urls
					console.log(this.urls)
				}
			},
			startUpload() {
				if (!this.status2 || this.status2 !== 'preupload') {
					this.fui.toast('请选择需要上传的视频！')
					return
				}
				//开始上传
				this.$refs.upload2.start()
			}
		}
	}
</script>

<style>
	.fui-btn__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-bottom: 64rpx;
	}
	.fui-page__bd{
		padding-left: 24rpx;
		box-sizing: border-box;
	}
</style>