export default class CustomError extends Error {
  constructor(message, tag) {
    super(message) // 调用基类的构造函数，并传递错误消息

    this.tag = tag // 自定义错误代码
  }
}
