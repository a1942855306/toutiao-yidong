<template>
    <div class="article-list">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :success-text="Text" :success-duration="1500">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <!-- <van-cell v-for="article in articles" :key="article.art_id" :title="article.title" /> -->
            <article-iteam :article="article" v-for="article in articles" :key="article.art_id" />
        </van-list>
      </van-pull-refresh>
    </div>
</template>
<script>
import { getArticle } from '@/api/article'
import articleIteam from './article-item'
export default {
  name: 'ArticleList',
  components: {
    articleIteam
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      articles: [],
      loading: false,
      finished: false,
      timestamp: null,
      isLoading: false,
      Text: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      const { data } = await getArticle({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 1
      })
      const { results } = data.data
      this.articles.push(...results)
      this.loading = false
      if (results.length) {
        this.timestamp = data.data.pre_timestamp
      } else {
        this.finished = true
      }
    },
    async onRefresh () {
      const { data } = await getArticle({
        channel_id: this.channel.id,
        timestamp: Date.now(),
        with_top: 1
      })
      this.articles.unshift(...data.data.results)
      this.isLoading = false
      this.Text = `更新了${data.data.results.length}条数据`
    }
  }
}
</script>

<style scoped lang="less">
  .article-list{
    position: fixed;
    left: 0;
    right: 0;
    top: 90px;
    bottom: 50px;
    overflow-y: auto;
  }
</style>
