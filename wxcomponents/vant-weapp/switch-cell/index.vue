<template>
<uni-shadow-root class="vant-weapp-switch-cell-index"><van-cell center :title="title" :label="label" :border="border" :icon="icon" custom-class="van-switch-cell" :use-label-slot="useLabelSlot">
  <slot slot="icon" name="icon"></slot>
  <slot slot="title" name="title"></slot>
  <slot slot="label" name="label"></slot>
  <van-switch :size="size" :checked="checked" :loading="loading" :disabled="disabled" :active-color="activeColor" :inactive-color="inactiveColor" :active-value="activeValue" :inactive-value="inactiveValue" custom-class="van-switch-cell__switch" @change="onChange"></van-switch>
</van-cell></uni-shadow-root>
</template>

<script>
import VanCell from '../cell/index.vue'
import VanSwitch from '../switch/index.vue'
global['__wxVueOptions'] = {components:{'van-cell': VanCell,'van-switch': VanSwitch}}

global['__wxRoute'] = 'vant-weapp/switch-cell/index'
import { VantComponent } from '../common/component';
VantComponent({
    field: true,
    props: {
        value: null,
        icon: String,
        title: String,
        label: String,
        border: Boolean,
        checked: Boolean,
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        useLabelSlot: Boolean,
        size: {
            type: String,
            value: '24px'
        },
        activeValue: {
            type: null,
            value: true
        },
        inactiveValue: {
            type: null,
            value: false
        }
    },
    watch: {
        checked(value) {
            this.set({ value });
        }
    },
    created() {
        this.set({ value: this.data.checked });
    },
    methods: {
        onChange(event) {
            this.$emit('change', event.detail);
        }
    }
});
export default global['__wxComponents']['vant-weapp/switch-cell/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-switch-cell{padding-top:9px;padding-bottom:9px}.van-switch-cell__switch{vertical-align:middle}
</style>