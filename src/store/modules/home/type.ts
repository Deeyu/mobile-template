/*
 * @Author: DaiYu
 * @Date: 2022-10-13 10:07:46
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 10:07:47
 * @FilePath: \src\store\modules\home\type.ts
 */
export interface BannerStore {
  encodeId: string | number
  exclusive: false
  imageUrl: string
  scm: string
  targetId: string | number
  targetType: number
  titleColor: string
  typeTitle: string
  pic: string
  alg: string
  bannerId: string | number
  s_ctrp: string
  showAdTag: boolean
  adDispatchJson: null
  adLocation: null
  adSource: null
  adid: null
  event: null
  extMonitor: null
  extMonitorInfo: null
  monitorBlackList: null
  monitorClick: null
  monitorClickList: null
  monitorImpress: null
  monitorImpressList: null
  monitorType: null
  program: null
  song: null
  url: null
  video: null
  [x: string]: any
}
// Partial转换成可选字段
export type PartialBanner = Partial<BannerStore>[]

export interface AppStore {
  bannerList: PartialBanner
}
