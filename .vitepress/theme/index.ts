import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HomePosts from './components/HomePosts.vue'
import PostList from './components/PostList.vue'
import './custom.css'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomePosts', HomePosts)
    app.component('PostList', PostList)
  }
}

export default theme