<template>
	<view class="s-page-wrapper is-100vh">
		<view class="registercontent">
			<view class="has-mglr-10 ">
				<view class=" has-mgtb-10 ">
					<label>手机号:</label>
					<input type="number" v-model="moblie" style="height:15px; line-height: 15px; font-size:15px;" maxlength="11" placeholder="请输入手机号"  />
					<view class="codeimg"></view>
				</view>
				<view class=" has-mgtb-10 ">
					<label>验证码:</label>
					<input type="number" v-model="vcode" style="height:15px; font-size:15px;" maxlength="6" placeholder="短信验证码" />
					<view class="codeimg" @tap="getsmscode">{{smsbtn.text}}</view>
				</view>
				<view class="has-mgtb-10">
					<label>新密码:</label>
					<input placeholder="请输入密码" v-model="passwd1" style="height:15px; font-size:15px;" :password="true" />
				</view>
				<view class="has-mgtb-10">
					<label>确认密码:</label>
					<input placeholder="请再次输入密码" v-model="passwd2" style="height:15px; font-size:15px;" :password="true" />
				</view>
				<view style="height: 15px;"></view>
				<view class=" registerbtn has-radius has-mgtb-20">
					<button @click="submit">提 交</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	import {checkPhone,checkPwd,toast,checkCode} from "@/common/common.js"
	export default {
		data() {
			return {
				moblie:'',
				vcode:'',
				passwd1:'',
				passwd2:'',
				smsbtn: {
					text: '获取验证码',
					status: false,
					codeTime: 60
				},
				timerId: null,
			};
		},
		methods: {
			getsmscode: function() {
				if (this.smsbtn.status == true ) {
					toast("别着急！短信已经发送了~");
					return false;
				}
				this.smsbtn.status = true; // 这段代码其实应该加在你request请求 短信发送成功后 
				this.timerId = setInterval(() => {
						var codeTime = this.smsbtn.codeTime;
						codeTime--;
						this.smsbtn.codeTime = codeTime;
						this.smsbtn.text = codeTime + "S";
						if (codeTime < 1) {
							clearInterval(this.timerId);
							this.smsbtn.text = "重新获取";
							this.smsbtn.codeTime = 60;
							this.smsbtn.status = false;
						}
					},
					1000);
				return false;
			},
			submit(){
				let moblie=_self.moblie;
				let vcode=_self.vcode;
				let pw1=_self.passwd1;
				let pw2=_self.passwd2;
				if(!checkPhone(moblie)){
					return;
				}
				if(!checkCode(vcode)){
					return;
				}
				if(!checkPwd(pw1)){
					return;
				}
				if(pw1!==pw2){
					toast('两次输入的密码不一样');
					return false;
				}
			}

		},
		onLoad() {
			_self=this;
		}
	}
</script>

<style>
	label{
		font-size: 12pt;
		color: #666666;
		width: 75px;
		margin-top: 3px;
	}
	input{
		margin-left: 5px;
		margin-top: 0px;
		padding: 0px;
	}
	.has-mgtb-10{
		display: flex;
		flex-direction: row;  /* 子元素横向排列 */
		margin: 15px 2px 0px 2px;
		padding: 10px 15px;
	}
	.registercontent {
		width: 85%;
		margin: 0 auto;
	}

	.logoimg {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	.is-input1 {
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		padding: 12rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}

	.iconfont {
		position: absolute;
		font-size: 40rpx;
		right: 12%;
		z-index: 999;
		width: 105rpx;
		text-align: center;
		color: #353535;
		margin-top: -11%;
		background: #fff;
		border-top-right-radius: 44rpx;
		border-bottom-right-radius: 44rpx;
		height: 80rpx;
		line-height: 80rpx;
	}

	.codeimg {
		position:relative;
		font-size: 28rpx;
		right: 0%;
		z-index: 999;
		width: 200rpx;
		text-align: center;
		color: #353535;
		background: #fff;
	}

	.registerbtn button {
		margin-top: 20rpx;
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		color: #ffffff;
		font-size: 32rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #f35;
		opacity: 0.8;
	}

	button:after {
		border: 2rpx solid #f2f2f2;
	}
</style>
