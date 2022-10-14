/*
 * @Author: DaiYu
 * @Date: 2022-10-13 16:06:46
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-14 09:44:26
 * @FilePath: \build\vite\plugins\html.ts
 */
import { createHtmlPlugin } from 'vite-plugin-html'

const copyright_common_style = 'font-size: 14px; margin-bottom: 2px; padding: 6px 8px; color: #fff;'
const copyright_main_style = `${copyright_common_style} background: #e24329;`
const copyright_sub_style = `${copyright_common_style} background: #707070;`

export function createHtml(env, isBuild) {
  const { VITE_APP_TITLE, VITE_APP_DEBUG_TOOL } = env
  const copyrightScript = `
<script>
  console.info('%cPowered by%c万顺叫车', '${copyright_sub_style}', '${copyright_main_style}', '\\nhttps://www.wsecar.com/');
</script>
  `
  let devtoolScript = ''
  switch (VITE_APP_DEBUG_TOOL) {
    case 'eruda':
      devtoolScript = `
<script src="//unpkg.com/eruda/eruda.js"></script>
<script>
  eruda.init()
</script>
      `
      break
    case 'vconsole':
      devtoolScript = `
<script src="//unpkg.com/vconsole/dist/vconsole.min.js"></script>
<script>
  new VConsole()
</script>
      `
      break
  }
  const loadingScript = `
<script>
(function(){
  if(!!window.ActiveXObject || "ActiveXObject" in window) {
    document.getElementById('browser-upgrade').style.display = 'block'
  } else {
    var Loading = document.querySelector('.loading')
    Loading.classList.add('animate')
    Loading.addEventListener('animationend', function() {
      setTimeout(function() {
        Loading.classList.remove('animate')
      }, 600)
      setTimeout(function() {
        Loading.classList.add('animate')
      }, 1000)
    })
  }
})()
</script>
  `
  const html = createHtmlPlugin({
    inject: {
      data: {
        title: VITE_APP_TITLE,
        copyrightScript,
        loadingScript,
        devtoolScript,
      },
    },
    minify: isBuild,
  })
  return html
}
