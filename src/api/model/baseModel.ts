/*
 * @Author: DaiYu
 * @Date: 2022-07-02 10:04:02
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-07-02 10:04:03
 * @FilePath: \src\api\model\baseModel.ts
 */
export interface BasicPageParams {
  page: number
  pageSize: number
}

export interface BasicFetchResult<T> {
  items: T[]
  total: number
}
