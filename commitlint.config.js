/*
 * @Author: DaiYu
 * @Date: 2022-02-22 09:31:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 09:50:54
 * @FilePath: \commitlint.config.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // 新功能（feature）
        'feat',
        // 修补bug
        'fix',
        // 文档（documentation）
        'docs',
        // 格式（不影响代码运行的变动）
        'style',
        // 重构（即不是新增功能，也不是修改bug的代码变动）
        'refactor',
        // 增加测试
        'test',
        'build',
        // 回滚
        'revert',
        // 构建过程或辅助工具的变动
        'config',
        // 性能, 体验优化
        'perf',
        // 其他改动
        'chore',
      ],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'type-empty': [2, 'never'],
    'header-max-length': [2, 'always', 108],
  },
}
