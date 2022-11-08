/*
 * @Author: DaiYu
 * @Date: 2022-10-17 09:22:28
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-17 09:22:29
 * @FilePath: \types\index.d.ts
 */
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>
}

declare type RefType<T> = T | null

declare type LabelValueOptions = {
  label: string
  value: any
  [key: string]: string | number | boolean
}[]

declare type EmitType = (event: string, ...args: any[]) => void

declare type TargetContext = '_self' | '_blank'

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T
}

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
