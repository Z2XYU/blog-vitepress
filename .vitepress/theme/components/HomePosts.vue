<script setup lang="ts">
import { data as posts } from '../posts.data'

const latest_posts = posts.slice(0, 6)

const build_tag_link = (tag: string) => {
  return `/posts/tags#tag-${encodeURIComponent(tag)}`
}
</script>

<template>
  <section class="home_posts_section">
    <div class="section_header">
      <div>
        <div class="section_eyebrow">Latest Posts</div>
        <h2 class="section_title">最新文章</h2>
      </div>
      <a class="section_more" href="/posts/">查看全部</a>
    </div>

    <div class="post_grid">
      <a
        v-for="(post, index) in latest_posts"
        :key="post.url"
        class="post_card reveal_item"
        :href="post.url"
        :style="{ animationDelay: `${index * 80}ms` }"
      >
        <div class="post_card_top">
          <div class="post_card_title">{{ post.title }}</div>
        </div>

        <div class="post_card_desc">
          {{ post.description || '这篇文章暂时还没有摘要。' }}
        </div>

        <div class="post_card_time">
          <div class="post_time_item">
            <span class="post_time_label">创建</span>
            <span class="post_time_value">{{ post.date || '—' }}</span>
          </div>
          <div class="post_time_item">
            <span class="post_time_label">更新</span>
            <span class="post_time_value">{{ post.updated || '—' }}</span>
          </div>
        </div>

        <div v-if="post.tags.length" class="post_card_tags">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="post_tag"
            @click.prevent.stop="location.href = build_tag_link(tag)"
          >
            {{ tag }}
          </span>
        </div>
      </a>
    </div>
  </section>
</template>