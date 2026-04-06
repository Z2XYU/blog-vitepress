---
title: 标签
---

<script setup>
import { data as posts } from '../.vitepress/theme/posts.data'

const tag_map = new Map()

for (const post of posts) {
  for (const raw_tag of post.tags || []) {
    const tag = String(raw_tag).trim()
    if (!tag) continue

    if (!tag_map.has(tag)) {
      tag_map.set(tag, [])
    }

    tag_map.get(tag).push(post)
  }
}

const all_tags = Array.from(tag_map.entries())
  .map(([name, tag_posts]) => ({
    name,
    count: tag_posts.length,
    posts: tag_posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }))
  .sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count
    return a.name.localeCompare(b.name, 'zh-CN')
  })
</script>

# 标签

这里会自动聚合所有文章标签。

<div class="tags_overview">
  <a
    v-for="tag in all_tags"
    :key="tag.name"
    class="tag_overview_item"
    :href="`#tag-${encodeURIComponent(tag.name)}`"
  >
    <span>{{ tag.name }}</span>
    <span class="tag_overview_count">{{ tag.count }}</span>
  </a>
</div>

<div class="tag_group_list">
  <section
    v-for="tag in all_tags"
    :key="tag.name"
    class="tag_group"
    :id="`tag-${encodeURIComponent(tag.name)}`"
  >
    <div class="tag_group_header">
      <h2 class="tag_group_title">{{ tag.name }}</h2>
      <span class="tag_group_count">{{ tag.count }} 篇</span>
    </div>

    <div class="tag_post_list">
      <a
        v-for="post in tag.posts"
        :key="post.url"
        class="tag_post_item"
        :href="post.url"
      >
        <div class="tag_post_main">
          <div class="tag_post_title">{{ post.title }}</div>
          <div class="tag_post_desc">
            {{ post.description || '这篇文章暂时还没有摘要。' }}
          </div>
        </div>
        <div class="tag_post_date">{{ post.date }}</div>
      </a>
    </div>
  </section>
</div>