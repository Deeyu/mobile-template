/*
 * @Author: DaiYu
 * @Date: 2022-07-02 10:07:47
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-07-02 10:07:47
 * @FilePath: \types\utils.d.ts
 */
import type { ComputedRef, Ref } from 'vue'

export type DynamicProps<T> = {
  [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>
}
