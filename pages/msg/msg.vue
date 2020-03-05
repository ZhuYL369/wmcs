<template>
    <view>
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
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		components: {uniSegmentedControl},
		data() {
        return {
            items: ['通知(0)','监管(0)'],
            current: 0
        }
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			}
		}
	}
</script>

<style>

</style>
