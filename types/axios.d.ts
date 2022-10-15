/*
 * @Author: DaiYu
 * @Date: 2022-10-13 17:03:31
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 17:03:32
 * @FilePath: \types\axios.d.ts
 */
/*
 * @Author: DaiYu
 * @Date: 2022-07-01 10:45:10
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-08-03 10:40:08
 * @FilePath: \types\axios.d.ts
 */
export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined

export interface RequestOptions {
  // Splicing request parameters to url
  joinParamsToUrl?: boolean
  // Format request parameter time
  formatDate?: boolean
  // Whether to process the request result
  isTransformResponse?: boolean
  // Whether to return native response headers
  // For example: use this attribute when you need to get the response headers
  isReturnNativeResponse?: boolean
  // Whether to join url
  joinPrefix?: boolean
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string
  // 请求拼接路径
  urlPrefix?: string
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode
  // Whether to add a timestamp
  joinTime?: boolean
  ignoreCancelToken?: boolean
  // Whether to send token in header
  withToken?: boolean
}

export interface Result<T = unknown> {
  code: number
  msg: string
  data: T
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable
  // File parameter interface field name
  name?: string
  // file name
  file: File | Blob
  // file name
  filename?: string
  [key: string]: any
}
