// 一个极小的模块，用于在「store」与「vite-ssg 创建的 router 实例」之间传递引用，
// 避免循环依赖：store 需要 router 来跳转，router 由 main.js 在 ViteSSG 回调里创建。
let _router = null

export function setRouter(r) {
  _router = r
}

export function getRouter() {
  return _router
}
