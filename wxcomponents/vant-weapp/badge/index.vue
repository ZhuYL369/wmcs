<template>
<uni-shadow-root class="vant-weapp-badge-index"><view :class="(utils.bem('badge', { active }))+' van-hairline custom-class'" hover-class="van-badge--hover" hover-stay-time="70" @click="onClick">
  <view class="van-badge__text">
    <van-info v-if="info !== null" :info="info" custom-style="right: 4px"></van-info>
    {{ title }}
  </view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>
import VanInfo from '../info/index.vue'
global['__wxVueOptions'] = {components:{'van-info': VanInfo}}

global['__wxRoute'] = 'vant-weapp/badge/index'
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        type: 'ancestor',
        name: 'badge-group',
        linked(target) {
            this.parent = target;
        }
    },
    props: {
        info: null,
        title: String
    },
    methods: {
        onClick() {
            const { parent } = this;
            if (!parent) {
                return;
            }
            const index = parent.badges.indexOf(this);
            parent.setActive(index).then(() => {
                this.$emit('click', index);
                parent.$emit('change', index);
            });
        },
        setActive(active) {
            return this.set({ active });
        }
    }
});
export default global['__wxComponents']['vant-weapp/badge/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-badge{display:block;padding:20px 12px 20px 9px;overflow:hidden;font-size:14px;line-height:1.4;color:#7d7e80;word-break:break-all;background-color:#f8f8f8;border-left:3px solid transparent;box-sizing:border-box;-webkit-user-select:none;user-select:none}.van-badge--hover{background-color:#f2f3f5}.van-badge:after{border-bottom-width:1px}.van-badge--active{font-weight:700;color:#333;border-color:#f44}.van-badge--active:after{border-right-width:1px}.van-badge--active,.van-badge--active.van-badge--hover{background-color:#fff}.van-badge__text{position:relative}
</style>