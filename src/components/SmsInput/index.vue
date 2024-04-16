<template>
  <van-field
    type="number"
    v-model="smsCode"
    :maxlength="maxlength"
    :label="label"
    :border="border"
    :placeholder="placeholder"
    center
    @focus="phoneFocus"
    @blur="phoneBlur"
  >
    <template #right-icon>
      <van-icon
        v-show="showClear"
        size="16"
        color="#999"
        class="clear"
        name="cross"
        @click="clear"
      />
    </template>
    <template #button>
      <van-button
        v-if="!showTime"
        :class="[props.smsEnabled ? 'sms_btn' : 'disable_btn']"
        size="mini"
        @click="getSms"
      >
        {{ smsBtnText }}
      </van-button>
      <van-count-down
        v-else
        ref="countDown"
        class="disable_btn"
        :time="time"
        :format="format"
        @finish="countTimeFinish"
      />
    </template>
  </van-field>
</template>

<script lang="ts" setup>
// 定义组件名
defineOptions({ name: 'SmsInput' })
import type { CountDownInstance } from 'vant'
const props = defineProps({
  smsEnabled: {
    type: Boolean,
    default: false,
  },
  time: {
    type: Number,
    default: 60000,
  },
  label: {
    type: String,
    default: '',
  },
  // vue3 默认使用特定的 modelValue ，避免 value 的占用，通过 update:modelValue 实现数据双向绑定
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '请输入验证码',
  },
  format: {
    type: String,
    default: 'sss后重新发送',
  },
  maxlength: {
    type: Number,
    default: 4,
  },
  border: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
})
// const countDown = ref<Nullable<HTMLElement>>()
const countDown = ref<CountDownInstance>()
const showTime = ref(false) // 倒计时开关
const smsBtnText = ref('获取验证码')
const focusFlag = ref(false) // 聚焦标识
const emit = defineEmits(['getSms', 'update:modelValue'])
const showClear = computed(() => props.clearable && props.modelValue && focusFlag.value)
const smsCode = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
onBeforeUnmount(() => {
  unref(countDown)?.reset()
})
const phoneFocus = () => {
  focusFlag.value = true
}
const phoneBlur = () => {
  useTimeoutFn(() => {
    focusFlag.value = false
  }, 100)
}
const countTimeFinish = () => {
  showTime.value = false
  smsBtnText.value = '重新获取'
}
const getSms = () => {
  emit('getSms')
  showTime.value = true
}
const clear = () => {
  smsCode.value = ''
}
// 将方法、变量暴露给父组件使用，父组件才可通过ref API拿到子组件暴露的数据
// defineExpose({
//   // 解构state
//   ...toRefs(smsBtnText),
//   // 声明方法
//   changeName() {},
// })
</script>

<style lang="less" scoped>
:deep(.van-button--default) {
  background-color: transparent;
  border: none;
}
:deep(.van-field__button) {
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.sms_btn {
  color: @red;
}
.disable_btn {
  color: @red;
  opacity: 0.4;
}
</style>
