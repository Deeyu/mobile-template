/*
 * @Author: DaiYu
 * @Date: 2022-11-21 10:40:54
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-23 10:22:33
 * @FilePath: \src\hooks\useAmap.ts
 */
import AMapLoader from '@amap/amap-jsapi-loader'
import { AMAPKEY } from '@/utils/config'
import { ref, Ref, shallowRef, watchEffect } from 'vue'
interface AMapLoaderOptions {
  key: string // 申请好的Web端开发者Key，首次调用 load 时必填
  version: string // 指定要加载的 JSAPI 的版本，缺省时默认为 2.0.0
  plugins?: string[] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  Loca?: {
    version?: string
  }
  AMapUI?: {
    version?: string // AMapUI 缺省 1.1
    plugins?: string[] // 需要加载的 AMapUI ui插件
  }
  serviceHost?: string
  securityJsCode?: string
  offline?: boolean //是否离线部署
}
// 加载地图API
export function loadAMap(config: Partial<AMapLoaderOptions> = {}) {
  const mergeConfig: AMapLoaderOptions = { key: AMAPKEY, version: '2.0', plugins: [], ...config }
  return new Promise((reslove, reject) => {
    AMapLoader.load(mergeConfig)
      .then(AMap => {
        reslove(AMap)
      })
      .catch(err => reject(err))
  })
}

// 初始化地图 ，传入作为容器的元素节点
export function useAMap(
  mapContainerRef: Ref<HTMLDivElement | string>,
  config: Partial<AMapLoaderOptions> | undefined,
  options?: Partial<AMap.MapOptions>,
): Ref<AMap.Map | undefined> {
  const mapRef = shallowRef<AMap.Map>()
  const aMapLoaded = ref<boolean>(false)
  loadAMap(config).then(() => {
    aMapLoaded.value = true
  })
  watchEffect(() => {
    if (aMapLoaded.value && mapContainerRef.value) {
      mapRef.value = new AMap.Map(mapContainerRef.value, options)
    }
  })
  return mapRef
}

/** 高德地图获取当前用户位置 */
export function getLocation(): Promise<any> {
  return new Promise((resolve, reject) => {
    loadAMap({ plugins: ['AMap.Geolocation', 'AMap.Geocoder'] })
      .then(() => {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          // timeout: 10000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          // showButton: false, //显示定位按钮，默认：true
          // showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          // showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          // panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          // zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          extensions: 'all', // 默认为'base',只返回地址信息；设定为'all'的时候将返回周边POI、道路交叉口等信息。
          GeoLocationFirst: true, // 默认为false，设置为true的时候可以调整PC端为优先使用浏览器定位，失败后使用IP定位
        })
        geolocation.getCurrentPosition((status, result) => {
          if (status == 'complete') {
            const {
              info = '',
              position: { lng, lat },
              formattedAddress = '',
              addressComponent,
              pois = [],
            } = result
            if (info == 'SUCCESS') {
              const location = {
                lng,
                lat,
                formattedAddress,
                ...addressComponent,
                pois,
              }
              resolve(location)
            } else {
              wsGeocoder([lng, lat])
                .then(res => {
                  resolve(res)
                })
                .catch(e => console.log(e))
            }
          } else {
            console.log('定位失败')
            reject(result)
          }
        })
      })
      .catch(e => {
        console.error(e)
      })
  })
}

// 地理编码
export function wsGeocoder(lnglat: [number, number]) {
  return new Promise((resolve, reject) => {
    loadAMap({ plugins: ['AMap.Geocoder'] })
      .then(() => {
        // 正向地理编码
        const geocoder = new AMap.Geocoder({
          // city: "010", //城市设为北京，默认：“全国”
          // radius: 1000 //范围，默认：1000
          extensions: 'all',
        })
        // geocoder.getLocation('北京市海淀区苏州街', function(status, result) {
        //   if (status === 'complete' && result.info === 'OK') {
        //     // result中对应详细地理坐标信息
        //   }
        // })
        // 逆向地理编码
        geocoder.getAddress(lnglat, (status, result) => {
          if (status === 'complete' && result.info === 'OK') {
            // result为对应的地理位置详细信息
            // let { formattedAddress = '', addressComponent = {}, pois = [] } = result.regeocode
            resolve(result.regeocode)
          } else {
            reject(result)
          }
        })
      })
      .catch(e => {
        console.error(e)
      })
  })
}

// IP定位获取当前城市信息
export function ipGetCity() {
  new Promise((resolve, reject) => {
    AMap.plugin('AMap.CitySearch', () => {
      const citySearch = new AMap.CitySearch()
      citySearch.getLocalCity((status, result) => {
        if (status === 'complete') {
          // 查询成功，result即为当前所在城市信息
          console.log(result)
          resolve(result)
        } else {
          reject(result)
        }
      })
    })
  })
}
