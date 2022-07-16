// 存储
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 获取
export const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 删除单个
export const removeItem = (key) => {
  localStorage.removeItem(key)
}

// 删除所有
export const removeAllItem = () => {
  localStorage.clear()
}
