<script setup lang="ts">
import { data as posts } from '../posts.data'

const build_tag_link = (tag: string) => {
  return `/posts/tags#tag-${encodeURIComponent(tag)}`
}
</script>

<template>
  <div class="archive_page">
    <div class="archive_header">
      <div class="archive_eyebrow">Archive</div>
      <h1 class="archive_title">文章归档</h1>
      <p class="archive_desc">
        这里会自动读取 posts 目录下的 md 文件。排序按创建时间倒序，页面同时显示最后修改时间。
      </p>
    </div>

    <div class="archive_actions">
      <a class="archive_more_link" href="/posts/tags">查看标签</a>
    </div>

    <div class="archive_list">
      <a
        v-for="(post, index) in posts"
        :key="post.url"
        class="archive_item reveal_item"
        :href="post.url"
        :style="{ animationDelay: `${index * 60}ms` }"
      >
        <div class="archive_item_main">
          <div class="archive_item_title">{{ post.title }}</div>
          <div class="archive_item_desc">
            {{ post.description || '这篇文章暂时还没有摘要。' }}
          </div>

          <div class="archive_item_time">
            <span>创建：{{ post.date || '—' }}</span>
            <span>更新：{{ post.updated || '—' }}</span>
          </div>

          <div v-if="post.tags.length" class="archive_item_tags">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="post_tag"
              @click.prevent.stop="location.href = build_tag_link(tag)"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>