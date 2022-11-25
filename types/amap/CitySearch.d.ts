/*
 * @Author: DaiYu
 * @Date: 2022-11-22 18:12:09
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-23 08:31:11
 * @FilePath: \types\amap\CitySearch.d.ts
 */
declare namespace AMap {
  /**
   * @description plugins - AMap.CitySearch 根据IP返回对应城市信息，提供根据输入IP或自动获取IP获取对应城市信息功能
   * https://lbs.amap.com/api/jsapi-v2/documentation#citysearch
   */
  export class CitySearch {
    constructor()

    /**
     * 自动获取用户IP
     * @param CitySearchCallback
     * @param cbk
     */
    getLocalCity(callback: CitySearchCallback): void

    /**
     * 根据输入IP地址返回对应城市信息
     * @param ip
     * @param callback
     */
    getCityByIp(ip: string, callback: CitySearchCallback): void

    on(type: string, fn: any, context?: any, once?: boolean): void
    off(type: string, fn: any, context?: any, once?: boolean): void
  }

  export interface CitySearchCallback {
    (status: 'complete' | 'error' | 'no_data', result: CitySearchResult | string): void
  }

  export interface CitySearchResult {
    city: string
    bounds: AMap.Bounds
  }
}
