<h1>Vue3-mobile 移动端H5项目模板</h1>

## 简介

Vue3-mobile 使用了最新的 `vue3`,`vite3`,`TypeScript,vant4`等主流技术开发。

## 🪂 代码规范

🪁 目前多数团队一般使用[husky](https://github.com/typicode/husky)和  [lint-staged](https://github.com/okonet/lint-staged) 来约束代码规范，

- 通过 `pre-commit`实现 lint 检查、单元测试、代码格式化等。
- 结合 VsCode 编辑器（保存时自动执行格式化：editor.formatOnSave: true）
- 配合 Git hooks 钩子（commit 前或提交前执行：pre-commit => npm run lint:lint-staged）
- IDE 配置（`.editorconfig`）、ESLint 配置（`.eslintrc.js`  和  `.eslintignore`）详细请看对应的配置文件。

## 特性和文档

1. [Vite](https://vitejs.dev/) - 熟悉 vite 特性
2. [Vue3](https://v3.vuejs.org/) - 熟悉 Vue 基础语法
3. Api 自动引入
4. UI 组件按需加载，自动导入
5. 图标自动引入
6. [VueUse](https://vueuse.org/) 支持
7. [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript`基本语法
8. [pinia](https://pinia.web3doc.top/) 状态管理
9. pnpm 包管理器
10. 组件库使用 👉[vant4](https://vant-contrib.gitee.io/vant/v4/#/zh-CN/home)

## `node` 版本推荐 🐎

因为该模板完全面向现代，所以推荐大家使用 `node` 当前的长期维护版本 `v16`， 大于 `v16.13.1` 即可

## 安装使用 🐂

强烈推荐大家使用更快更合理的 `pnpm` 包管理器 👉 [安装教程](https://pnpm.io/zh/installation)

- 环境配置

```shell
  本地环境需要安装 pnpm 7.x 、Node.js 16+
  node版本控制可以使用nvm
```

- 安装依赖

```shell
pnpm install
```

- 依赖更新

```shell
# 安全版本更新
pnpm deps:fresh

# 主版本更新，可能是破坏性更新，谨慎使用，做好测试
pnpm deps:fresh:major

# 次版本更新，可能是破坏性更新，谨慎使用，做好测试
pnpm deps:fresh:minor

# 补丁版本更新
pnpm deps:fresh:patch

```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 灵活使用 [vueuse](https://vueuse.org/)

```typescript
// 获取页面query
import { useUrlSearchParams } from '@vueuse/core'
const params = useUrlSearchParams('history')
console.log(params.foo) // 'bar'
params.foo = 'bar'
params.vueuse = 'awesome'
#url updated to `?foo=bar&vueuse=awesome`
```
