<template>
    <div>
      <div class="user-info">
        <van-cell-group>
          <van-cell title="昵称" value="内容" center>
            <van-image slot="icon" round fit="cover" width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <van-button size="small" round>编辑资料</van-button>
          </van-cell>
          <van-grid>
            <van-grid-item text="文字" >
              <div class="span">123</div>
              <div class="text">头条</div>
            </van-grid-item>
            <van-grid-item text="文字" >
              <div class="span">123</div>
              <div class="text">关注</div>
            </van-grid-item>
            <van-grid-item text="文字" >
              <div class="span">123</div>
              <div class="text">粉丝</div>
            </van-grid-item>
            <van-grid-item text="文字" >
              <div class="span">123</div>
              <div class="text">获赞</div>
            </van-grid-item>
          </van-grid>
        </van-cell-group>
        <van-grid :column-num="2">
          <van-grid-item icon="star-o" text="文字" />
          <van-grid-item icon="browsing-history-o" text="文字" />
        </van-grid>
        <van-cell title="消息通知" is-link url="/" />
        <van-cell title="小智同学" is-link to="/" />
        <van-cell title="退出登录" />
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
</style>
