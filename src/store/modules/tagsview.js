import { getItem, setItem } from '@/utils/storage'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    tagsViews: getItem('tagsViews') || []
  },
  mutations: {
    SET_TAGSVIEWS(state, tagsViews) {
      // 过滤
      const newTagsViews = state.tagsViews.find((item) => {
        return item.path === tagsViews.path
      })
      if (!newTagsViews) {
        state.tagsViews.push(tagsViews)
        setItem('tagsViews', state.tagsViews)
      }
      // console.log(state.tagsViews, 'state.tagsViews')
    },
    Delete_Single_Tags(state, index) {
      state.tagsViews.splice(index, 1)
      const newTags = state.tagsViews
      router.push(newTags[index - 1].path)
      setItem('tagsViews', state.tagsViews)
    }
  }
}
