/*
 * @Author: DaiYu
 * @Date: 2022-10-25 10:13:33
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-25 10:53:15
 * @FilePath: \src\utils\config.js
 */
export const MD5SING = 'DHHjTQf2ERQbw1oYXtBoqfnFeH1DcFv5Mr0f0B3vfao'

// oss资源地址
export const OSSURL = 'https://wsjc-web.oss-cn-shenzhen.aliyuncs.com/carMobile/images/'

// 神策服务地址
export const SA_SERVER_URL = `https://sensors-datasink.wsecar.com/sa?project=${
  import.meta.env.VITE_SENSORS || 'default'
}`
