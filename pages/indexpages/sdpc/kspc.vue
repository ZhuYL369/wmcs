<template>
	<view class="box">
		<view>
			<ss-upload-image :url="url" :file-list="fileList" :name="name" :limit="limit" @on-success="onSuccess" @on-error="onError" @on-remove="onRemove" @on-process="onProcess" @on-choose="onChoose"></ss-upload-image>
		</view>
	</view>
</template>
<script>
	var _self;
	import ssUploadImage from '@/components/ss-upload-image/ss-upload-image.vue'
	export default {
		components: {
			ssUploadImage
		},
		data() {
			return {
				limit:3,
				fileList: [],
				url: 'http://',
				name: 'file'
			}
		},
		methods: {
			// 上传成功
			onSuccess(res) {
				// 响应示例
				// {
				//    code: 0,
				//    data: {
				//      image_url: 'http://www.xxxxx.png'
				//    },
				//    message: '上传成功'
				// }
				if (res.code === 0) {
				  this.fileList.push(res.data.image_url)
				}
				console.log(res)
			},
			// 上传进程
			onProcess(res) {
				console.log(res)
			},
			// 上传失败
			onError(err) {
				console.log(err)
			},
			// 移除
			onRemove(index) {
				console.log(index);
				this.fileList.splice(index, 1)
			},
			clog(){
				console.log(this.fileList);
			},
			onChoose(filelist){
				this.fileList=filelist;
			}
			
		},
		onLoad() {
			_self=this;
		},
		onShow() {

		}
		
	}
</script>
<style>
	.box{
		padding: 40upx 20upx;
	}
</style>