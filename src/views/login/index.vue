<template>
    <div class="login-container">
      <van-nav-bar
        class="app-nav-bar"
        title="登录"
        left-arrow
        @click-left="$router.back()"
      />
      <van-form ref="login-form" @submit="onLogin" @failed="onFailed" :show-error-message="false" :show-error="false" validate-first>
        <van-cell-group>
          <van-field
            v-model="user.mobile"
            left-icon="smile-o"
            placeholder="请输入手机号"
            name="mobile"
            :rules="formRules.mobile"
          />
          <van-field
            v-model="user.code"
            clearable
            left-icon="music-o"
            placeholder="请输入验证码"
            name="code"
            :rules="formRules.code"
          >
          <template #button>
            <van-count-down v-if="isCountDownShow" :time="1000 * 60" format="ss s" @finis="isCountDownShow=false" />
            <van-button v-else class="send-btn" round size="small" @click.prevent="onSendSms ">发送验证码</van-button>
          </template>
          </van-field>
        </van-cell-group>
        <div class="login-btn-wrap">
          <van-button type="info" block>登录</van-button>
        </div>
      </van-form>
    </div>
</template>
<script>
import { login, sendSms } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      },
      isCountDownShow: false,
      isSendSmsLoading: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onSendSms () {
      try {
        await this.$refs['login-form'].validate('mobile')
        await sendSms(this.user.mobile)
        this.isCountDownShow = true
      } catch (err) {
        let message = ''
        if (err && err.response && err.response.status === 429) {
          // 发送短信失败的错误提示
          message = '发送太频繁了，请稍后重试'
        } else if (err.name === 'mobile') {
          // 表单验证失败的错误提示
          message = err.message
        } else {
          // 未知错误
          message = '发送失败，请稍后重试'
        }
        this.$toast({
          message: message,
          position: 'top'
        })
      }
    },
    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message, // 提示消息
          position: 'top' // 防止手机键盘太高看不见提示消息
        })
      }
      console.log(error)
    },
    async onLogin () {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(this.user)
        Toast.success('登录成功')
        this.$store.commit('setUser', res.data.data)
        // console.log(res)
      } catch (err) {
        Toast.fail('登陆失败,请检查手机号或验证码')
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .login-btn-wrap {
    padding: 26px 16px;
      .van-button__text{
      font-size: 15px;
      }
  }
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }
}
</style>
