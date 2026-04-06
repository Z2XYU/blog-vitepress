import { createContentLoader } from 'vitepress'

export interface Post_item {
  title: string
  url: string
  date: string
  updated: string
  description: string
  tags: string[]
  cover: string
  draft: boolean
}

declare const data: Post_item[]
export { data }

function normalize_post(item: any): Post_item {
  const frontmatter = item.frontmatter ?? {}

  return {
    title: frontmatter.title ?? item.url.split('/').pop() ?? '未命名文章',
    url: item.url,
    date: frontmatter.date ?? '',
    updated: frontmatter.updated ?? frontmatter.date ?? '',
    description:
      frontmatter.description ??
      frontmatter.desc ??
      item.excerpt?.replace(/<[^>]+>/g, '').trim() ??
      '',
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    cover: frontmatter.cover ?? '',
    draft: Boolean(frontmatter.draft)
  }
}

export default createContentLoader('posts/*.md', {
  excerpt: true,
  render: false,
  transform(raw_data) {
    return raw_data
      .map(normalize_post)
      .filter((item) => !item.draft)
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
  }
})