<template>
    <div class="home-container">
      <van-nav-bar>
        <van-button slot="title" class="search-btn" icon="search" type="info" round size="small">搜索</van-button>
      </van-nav-bar>
      <van-tabs v-model="active">
        <van-tab :title="iteam.name" v-for="iteam in channels" :key="iteam.id">
          <article-list :channel="iteam" />
        </van-tab>
      </van-tabs>
    </div>
</template>
<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list'
export default {
  name: '',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      try {
        const res = await getUserChannels()
        console.log(res)
        this.channels = res.data.data.channels
      } catch (err) {
        this.$toast('获取用户频道失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
  .home-container{
    /deep/ .van-nav-bar__title {
      max-width: none;
    }
    .search-btn {
      width: 277px;
      height: 32px;
      background: #5babfb;
      border: none;
      .van-icon {
        font-size: 16px;
      }
      .van-button__text {
        font-size: 14px;
      }
    }
  }
</style>
