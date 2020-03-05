<template>
	<view>
		<uni-nav-bar left-icon="back" @click-left="click_left" @click-right="click_right" right-text="新建" title="发布通知"></uni-nav-bar>
	
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#4cd964"></uni-segmented-control>
		<view class="content">
		    <view v-show="current === 0">
		       
		    </view>
		    <view v-show="current === 1">
				
		    </view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		components: {uniNavBar,uniSegmentedControl},
		data() {
			return {
				items: ['发布通知(0)','接受通知(0)'],
				current: 0
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			click_left(e){
				uni.navigateBack({delta:1});
			},
			click_right(){
				uni.navigateTo({
					url:"./xjtz"
				})
			}
			
		}
	}
</script>

<style>

</style>
