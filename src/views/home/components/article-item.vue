<template>
    <van-cell class="article-item">
      <div class="title van-multi-ellipsis--l3" slot="title">{{ article.title }}</div>
      <div slot="label">
          <div class="cover-warp" v-if="article.cover.type === 3">
              <div class="cover-item" v-for="(img, index) in article.cover.images" :key="index">
                  <van-image class="cover-item-img" fit="cover" :src="img" />
              </div>
          </div>
          <div class="label-wrap">
            <span>{{ article.aut_name }}</span>
            <span>{{ article.comm_count }}评论</span>
            <span>{{ article.pubdate | relativeTime }}</span>
          </div>
      </div>
      <van-image class="right-cover" v-if="article.cover.type === 1" fit="cover" :src="article.cover.images[0]" />
    </van-cell>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
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
  .article-item {
    .title {
      font-size: 16px;
      color: #3a3a3a;
    }
    /deep/ .van-image__img {
      flex: unset;
      width: 116px;
      height: 73px;
      // padding-left: 12px;
    }
    .label-wrap span {
      font-size: 11px;
      color: #b4b4b4;
      margin-right: 12px;
    }
    .right-cover {
      width: 116px;
      height: 73px;
    }
    .cover-warp {
      display: flex;
      padding: 15px 0;
      .cover-item {
        height: 73px;
        flex: 1;
        &:not(:last-child) {
          padding-right: 4px;
        }
        .cover-item-img {
          width: 100%;
          height: 73px;
        }
      }
    }
  }
</style>
