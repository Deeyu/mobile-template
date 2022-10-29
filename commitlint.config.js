/*
 * @Author: DaiYu
 * @Date: 2022-02-22 09:31:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-28 16:45:15
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
        // 代码风格相关无影响运行结果的
        'style',
        // 性能, 体验优化
        'perf',
        // 重构
        'refactor',
        // 增加测试
        'test',
        // 文档/注释
        'docs',
        // 依赖更新/脚手架配置修改等
        `chore`,
        // 工作流改进
        'workflow',
        // 持续集成
        `ci`,
        // 类型定义文件更改
        `types`,
        // 回滚
        'revert',
        // 构建过程或辅助工具的变动
        'config',
      ],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'type-empty': [2, 'never'],
    'header-max-length': [2, 'always', 108],
  },
}
