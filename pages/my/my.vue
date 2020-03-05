<template>
	<view>
		<view class="myheadimg">
			<image src="../../static/my/user.png" mode="aspectFill" style="width: 100px;height: 100px;"></image>
			<text>{{user}}</text>
		</view>
		<view>
			<uni-list>
				<uni-list-item title="重置密码"  thumb="../../static/my/mima.png"></uni-list-item>
				<uni-list-item title="关于我们"  thumb="../../static/my/guanyu.png"></uni-list-item>
				<uni-list-item title="意见反馈"  thumb="../../static/my/yijian.png"></uni-list-item>
				<uni-list-item title="检查更新" @click="checkappup" thumb="../../static/my/ud.png" :note="note">
				</uni-list-item>
			</uni-list>
		</view>
		<view style="margin-top: 40px;padding: 0px 5px;">
			 <progress v-if="appup" :percent="upjd" show-info stroke-width="3" />
			 <text v-if="appup" style="font-size: 12pt;">{{writ}}kb/{{total}}kb</text>
		</view>
		<view class="exitapp">
			 <button type="default" @click="exitapp">退出</button>
		</view>
	</view>
</template>

<script>
	var _self;
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {uniList,uniListItem},
		data() {
			return {
				note:0,
				user:'',
				appup:false,
				upjd:0,
				writ:0,
				total:0
			}
		},
		methods: {
			exitapp(){
				try {
					uni.removeStorageSync('user');
				} catch (e) {
					// error
				}
				uni.reLaunch({
					url:"../login/login"
				})
			},
			checkappup(e){
				if(_self.appup){
					return;
				}
				var server = _self.weburl+'/wmcs/wmcsup.php'; //检查更新地址  
				    var req = { //升级检测数据  
				        "appid": plus.runtime.appid,  
				        "version": plus.runtime.version  
				    }; 
				    uni.request({  
				        url: server,  
				        data: req,  
				        success: (res) => {  
				            if (res.statusCode == 200 && res.data.status === 1) {  
								let upres=res;
				                uni.showModal({ //提醒用户更新  
									title: "系统更新提示",  
				                    content: res.data.note,  
				                    success: (res) => {  
				                        if (res.confirm) {
											_self.appup=true;
											var downloadTask = uni.downloadFile({
											    url: upres.data.url,
											    success: (res) => {
											        if (res.statusCode === 200) {
														_self.appup=false;
														let apk=res.tempFilePath;
														plus.runtime.install(apk);
											        }
											    },
												 complete: (res)=> {
													_self.appup=false;
												 }
											});
											downloadTask.onProgressUpdate(function(e){
												_self.upjd=e.progress;
												_self.writ=(e.totalBytesWritten/1024).toFixed(2);
												_self.total=(e.totalBytesExpectedToWrite/1024).toFixed(2);
											});
										
				                        }  
				                    }  
				                })  
				            }
							if(res.data.status === 0){
								plus.nativeUI.toast('已经是最新版本了!')
							}
				        }  ,
						complete: (e) => {
							//console.log(e);
						}
				    })
			}
			
		},
		onShow() {
			try {
				const value = uni.getStorageSync('user');
				if (value!='') {
					_self.user=value;
				}
			} catch (e) {
				// error
			}
		},
		onLoad() {
			_self=this;
			_self.note='V '+plus.runtime.version;
		}
		
	}
</script>

<style>
.myheadimg{
	display: flex;
	width: 100%;
	height: 150px;
	flex-direction: column;  /* 子元素横向排列 */
	justify-content: center; /* 相对父元素水平居中 */
	align-items: center; /*  子元素相对父元素垂直居中 */
}
.exitapp{
	width: 100%;
	position: absolute;
	bottom: 0px;
}
.uni-list-cell__content-note{
	position: absolute;
	left: 75%;
	top: 30upx;
}
</style>
