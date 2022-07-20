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
    // 删除标签
    Delete_Single_Tags(state, index) {
      state.tagsViews.splice(index, 1)
      const newTags = state.tagsViews
      router.push(newTags[index - 1].path)
      setItem('tagsViews', state.tagsViews)
    }
    // 删除全部标签
    // Delete_All_Tags(state) {
    //   state.tagsViews = [
    //     {
    //       path: '/index',
    //       title: '主控台'
    //     }
    //   ]
    //   setItem('tagsViews', state.tagsViews)
    // }
    //  关闭其他标签
    // Close_Other_Tags(state, Path) {
    //   state.tagsViews.forEach((item, index) => {
    //     if (item.path === Path) {
    //       console.log(index, '当前index')
    //       // state.tagsView = state.tagsViews[index]
    //     }
    //   })
    //   setItem('tagsViews', state.tagsViews)
    // }
  }
}
