/*
 * @Author: DaiYu
 * @Date: 2022-04-22 17:44:22
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-04-16 11:38:04
 * @FilePath: \postcss.config.js
 */
// const path = require('path')
// module.exports = () => {
//   return {
//     // 数组写法
//     // plugins: [
//     //   require('autoprefixer')({
//     //     overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
//     //   }),
//     //   require('cnjm-postcss-px-to-viewport')({
//     //     unitToConvert: 'px', // 要转化的单位
//     //     viewportWidth: 750, // UI设计稿的宽度
//     //     unitPrecision: 6, // 转换后的精度，即小数点位数
//     //     propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
//     //     viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
//     //     fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
//     //     selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，
//     //     minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
//     //     mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
//     //     replace: true, // 是否转换后直接更换属性值
//     //     exclude: [], // 设置忽略文件，用正则做目录名匹配
//     //     landscape: false, // 是否处理横屏情况
//     //     // 如果没有使用其他的尺寸来设计，下面这个方法可以不需要，比如vant是375的
//     //     customFun: ({ file }) => {
//     //       // 这个自定义的方法是针对处理vant组件下的设计稿为375问题
//     //       const designWidth = path.join(file).includes(path.join('node_modules', 'vant'))
//     //         ? 375
//     //         : 750
//     //       return designWidth
//     //     },
//     //   }),
//     //   {
//     //     postcssPlugin: 'internal:charset-removal',
//     //     AtRule: {
//     //       charset: atRule => {
//     //         if (atRule.name === 'charset') {
//     //           atRule.remove()
//     //         }
//     //       },
//     //     },
//     //   }
//     // ],
//     plugins: {
//       autoprefixer: {
//         overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
//       },
//       // 修改插件名称
//       'cnjm-postcss-px-to-viewport': {
//         unitToConvert: 'px', // 要转化的单位
//         viewportWidth: 750, // UI设计稿的宽度
//         unitPrecision: 6, // 转换后的精度，即小数点位数
//         propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
//         viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
//         fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
//         selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，
//         minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
//         mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
//         replace: true, // 是否转换后直接更换属性值
//         exclude: [], // 设置忽略文件，用正则做目录名匹配
//         landscape: false, // 是否处理横屏情况
//         // 如果没有使用其他的尺寸来设计，下面这个方法可以不需要，比如vant是375的
//         customFun: ({ file }) => {
//           // 这个自定义的方法是针对处理vant组件下的设计稿为375问题
//           const designWidth = path.join(file).includes(path.join('node_modules', 'vant'))
//             ? 375
//             : 750
//           return designWidth
//         },
//       },
//     },
//   }
// }
/**
 * 由于在vite中用 module.exports = (param) => {} 这种方式导出postcss配置时，param中没有文件相关信息，
 * 同时postcss-px-to-viewport也没有提供类似postcss-pxtorem中 rootValue({ file }) {} 的方法，无法根据文件路径动态设置viewportWidth
 * 所以只能通过多次px2viewport()处理不同文件的hack方式来设置viewportWidth
 *
 * postcss-px-to-viewport v1.1.1不支持include配置项，v1.2.0开始加入include，但是并没有发布到npm仓库
 * 如在v1.1.1中使用include，无效果，并且执行多次导致转换混乱
 *
 * postcss-px-to-viewport 不支持 postcss 8.x，而vite内置postcss 8.x，所以使用postcss-px-to-viewport会抛出警告
 * 改用postcss-px-to-viewport-8-plugin替代
 */

// FIXME: 升级 vite5 后控制台警告：The CJS build of Vite's Node API is deprecated.
// 将 "type": "module" 添加到 package.json 后，
// 所有*.js文件现在都解释为 ESM，并且需要使用 ESM 语法。您可以使用扩展名重命名文件.cjs来继续使用 CJS。
// require 是cjs 语法

import autoprefixer from 'autoprefixer'
import viewport from 'postcss-mobile-forever'

const baseViewportOpts = {
  appSelector: '#app', // 根元素选择器，用于设置桌面端和横屏时的居中样式
  viewportWidth: 750, // 设计稿的视口宽度，可传递函数动态生成视图宽度
  unitPrecision: 6, // 单位转换后保留的精度（很多时候无法整除）
  maxDisplayWidth: 600, // 桌面端最大展示宽度
  propList: [
    '*',
    // '!font-size'
  ],
  // 能转化为vw的属性列表，!font-size表示font-size后面的单位不会被转换
  // 指定不转换为视口单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名
  // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
  // 下面配置表示类名中含有'keep-px'以及'.ignore'类都不会被转换
  selectorBlackList: ['.ignore', 'keep-px'],
  // 下面配置表示属性值包含 '1px solid' 的内容不会转换
  valueBlackList: ['1px solid'],
  // exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件
  // include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
  mobileUnit: 'vw', // 指定需要转换成的视口单位，建议使用 vw
  rootContainingBlockSelectorList: ['van-popup--bottom'], // 指定包含块是根包含块的选择器，这种选择器的定位通常是 `fixed`，但是选择器内没有 `position: fixed`
}

export default {
  plugins: [
    autoprefixer(),
    viewport({
      ...baseViewportOpts,
      // 只将 vant 转为 375 设计稿的 viewport，其它样式的视图宽度为 750
      viewportWidth: file => (file.includes('node_modules/vant/') ? 375 : 750),
    }),
  ],
}
