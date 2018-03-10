/******************************************************************
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {MyComponent, comify} from 'base'

@comify()
export default class extends MyComponent {
  /**
   * 组件的属性列表
   */
  properties = {
    start: {
      value: 0,
      type: Number
    }
  }

  /**
   * 组件的初始数据
   */
  data = {

  }

  /**
   * 生命周期函数
   *
   * 原生的是 create，为了方便语法提醒，统一改成以 on 开头的函数
   */
  onCreated() {
    console.log('组件 Created')
  }

  onReady() {
    console.log('在 counter 组件中获取 store: ', this.getApp().store)
  }

  /**
   * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
   */
  onPropUpdate(prop, newValue, oldValue) {
    console.log(`属性 ${prop} 从 ${oldValue} 更新到了 ${newValue}`)
  }

  /**
   * 自定义的函数，不需要放在 methods 中，在 comify 中会帮你提取出来放到 methods
   */
  increase() {
    this.setDataSmart({start: this.data.start + 1})
  }

  /**
   * 自定义的函数，不需要放在 methods 中，在 comify 中会帮你提取出来放到 methods
   */
  decrease() {
    this.setDataSmart({start: this.data.start - 1})
  }
}

