<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="turl"></web-view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				turl:'',
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		methods: {
			
		},
		onLoad(opt) {
			_self=this;
			_self.turl=opt.url;
		}
	}
</script>

<style>

</style>
