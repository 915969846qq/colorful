import React, { Component } from 'react'

//客户服务
export default class Personal_customer_service extends Component {
  render() {
    return (
      <div>
        <h4>客户服务</h4>
        <div className="fang_paddtop100 fang_FangCenter">
          <h1 className="fang_Button50">Colorful ,欢迎您！</h1>
          <p className="fang_Button50">
            温馨提示：因促销火爆，咨询顾客较多，请您耐心等待，敬请谅解！
          </p>
          <button className="fang_width200 fang_height30 fang_border fang_wcolor fang_RBColor fang_myh">
            开始咨询
          </button>
        </div>
      </div>
    )
  }
}
