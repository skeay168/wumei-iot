/******************************************************************************
 * 作者：kerwincui
 * 时间：2021-06-08
 * 邮箱：164770707@qq.com
 * 源码地址：https://gitee.com/kerwincui/wumei-smart
 * author: kerwincui
 * create: 2021-06-08
 * email：164770707@qq.com
 * source:https://github.com/kerwincui/wumei-smart
 ******************************************************************************/
import request from '@/utils/request'

// 更新设备状态
export function updateDeviceStatus(data) {
  return request({
    url: '/system/mqtt/updateStatus',
    method: 'post',
    data: data
  })
}

// 更新设备配置
export function updateDeviceSetting(data) {
  return request({
    url: '/system/mqtt/updateSetting',
    method: 'post',
    data: data
  })
}