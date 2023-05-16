function hasRole(roles = [], rolesList = []) {
  for (let j = 0; j < roles.length; j++) {
    return rolesList.includes(roles[j])
  }
  return false
}

function filterAsyncRoutes(arr = [], rolesList = []) {
  const tempArr = []
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    if (!el.meta || !el.meta.roles || el.meta.roles.length === 0) continue
    if (hasRole(el.meta.roles, rolesList)) {
      if (el.children) {
        el.children = filterAsyncRoutes(el.children, rolesList)
      } else {
        el.children = []
      }
      tempArr.push(el)
    }
  }
  return tempArr
}

function handleHidden(el) {
  if (el.meta && !el.meta.hidden) {
    return true // 代表显示
  } else {
    return false
  }
}

export function handleSideBarMenuList(arr = []) {
  const tempArr = []
  for (let j = 0; j < arr.length; j++) {
    const el = arr[j]
    let children = []
    if (handleHidden(el)) {
      if (el.children && el.children.length > 0) {
        children = handleSideBarMenuList(el.children)
      }
      el.children = children
      tempArr.push({
        link: el.path,
        name: el.name,
        children: el.children,
        ...el.meta,
      })
    }
  }
  return tempArr
}

export default filterAsyncRoutes
