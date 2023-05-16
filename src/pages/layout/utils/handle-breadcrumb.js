/**
 * 处理面包屑
 * */
export const handleBreadcrumb = (currentRoutes = []) => {
  const tempArr = []
  currentRoutes.forEach(it => {
    tempArr.push({
      path: it.path,
      label: it.meta.title,
    })
  })
  return tempArr
}
