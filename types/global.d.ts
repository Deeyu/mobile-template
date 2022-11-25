/*
 * @Author: DaiYu
 * @Date: 2022-10-13 17:14:32
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-22 18:11:02
 * @FilePath: \types\global.d.ts
 */
import type {
  ComponentRenderProxy,
  VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from 'vue'

declare global {
  // namespace AMap {
  //   export interface GeolocationResult {
  //     position: AMap.LngLat
  //     accuracy: number
  //     location_type: string
  //     message: string
  //     isConverted: boolean
  //     info: string
  //     addressComponent: any
  //     formattedAddress: string
  //     pois: array
  //     roads: array
  //     crosses: array
  //   }
  //   export interface GeolocationError {
  //     info: string
  //     message: string
  //   }
  // }
  const __SYSTEM_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }
  // declare interface Window {
  //   // Global vue app instance
  //   __APP__: App<Element>;
  // }

  // vue
  declare type PropType<T> = VuePropType<T>
  declare type VueNode = VNodeChild | JSX.Element

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  declare type Nullable<T> = T | null
  declare type NonNullable<T> = T extends null | undefined ? never : T
  declare type Recordable<T = any> = Record<string, T>
  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T
  }
  declare type Indexable<T = any> = {
    [key: string]: T
  }
  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }
  declare type TimeoutHandle = ReturnType<typeof setTimeout>
  declare type IntervalHandle = ReturnType<typeof setInterval>

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement
  }

  declare interface WheelEvent {
    path?: EventTarget[]
  }

  // 给对象类型添加新的属性
  declare type AppendToObject<T, U extends keyof any, V> = {
    [P in keyof T | U]: P extends keyof T ? T[P] : V
  }
  declare interface ViteEnv {
    VITE_PORT: number
    VITE_GLOB_APP_TITLE: string
    VITE_GLOB_APP_SHORT_NAME: string
    VITE_PUBLIC_PATH: string
    VITE_DROP_CONSOLE: boolean
    VITE_APP_INSPECT: boolean
    VITE_APP_API_BASEURL: string
    VITE_APP_DEBUG_TOOL: 'eruda' | 'vconsole' | 'none' | undefined
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
    VITE_LEGACY: boolean
    VITE_USE_IMAGEMIN: boolean
  }

  // 公参
  declare interface Packet {
    channel: string | number
    deviceId: string
    op: string
    platform: string | number
    softVersion: string
    sysVersion: string
  }

  declare function parseInt(s: string | number, radix?: number): number

  declare function parseFloat(string: string | number): number

  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy
    interface ElementAttributesProperty {
      $props: any
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
    interface IntrinsicAttributes {
      [elem: string]: any
    }
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}
