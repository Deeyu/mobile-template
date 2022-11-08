/*
 * @Author: DaiYu
 * @Date: 2022-02-21 10:38:30
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-28 17:29:46
 * @FilePath: \.prettierrc.js
 */
module.exports = {
  printWidth: 100, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）ab进行缩进（默认false）
  useTabs: false, // 是否使用tab空格
  singleQuote: true, // 使用单引号（默认false）
  semi: false, // 声明结尾使用分号(默认true)
  trailingComma: 'all', // 多行使用拖尾逗号（默认none）
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
  endOfLine: 'auto', // 因为prettier的规范和eslint的换行规则不同，所以这个必须配置。要不然每次打开文件都会有一堆的警告
  htmlWhitespaceSensitivity: 'ignore',
}
