/*
 * @Author: DaiYu
 * @Date: 2022-10-14 11:01:09
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-15 08:57:14
 * @FilePath: \src\utils\packet.ts
 */
import { buildUUID, getUrlObj } from './index'

const { channel, platform } = getUrlObj()
const packet: Packet = {
	channel: channel || '10600001',
	deviceId: buildUUID(),
	op: '',
	platform: platform || '3',
	softVersion: 'H5',
	sysVersion: 'H5',
}
export default packet
