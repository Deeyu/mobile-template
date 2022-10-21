/*
 * @Author: DaiYu
 * @Date: 2022-08-03 11:25:03
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-19 15:08:51
 * @FilePath: \src\enums\httpEnum.ts
 */
/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = 1,
  TIMEOUT = 401,
  INVALIDTOKEN = -13, // 无效token
  TYPE = 'success',
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

/**
 * @description:  contentTyp
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
