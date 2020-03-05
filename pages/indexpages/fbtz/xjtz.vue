<template>
	<view>
		<uni-nav-bar left-icon="back" @click-left="click_left" @click-right="click_right" right-text="发布" title="新建通知"></uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				
			}
		},
		methods: {
			click_left(e){
				uni.navigateBack({delta:1});
			},
			click_right(){
				plus.nativeUI.toast('发布通知中');
			}
		}
	}
</script>

<style>
.uni-navbar-btn-text{
	color: #2A62FF;
}
</style>
