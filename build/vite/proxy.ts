/*
 * @Author: DaiYu
 * @Date: 2022-10-13 11:05:30
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-19 09:51:56
 * @FilePath: \build\vite\proxy.ts
 */
import { API_PREFIX, API_BASE_URL } from '../constant'
import { ProxyOptions } from 'vite'
type ProxyTargetList = Record<string, ProxyOptions>

const init: ProxyTargetList = {
  // test
  [API_PREFIX]: {
    target: API_BASE_URL,
    changeOrigin: true,
    rewrite: path => path.replace(new RegExp(`^${API_BASE_URL}`), ''),
  },
}

export default init
