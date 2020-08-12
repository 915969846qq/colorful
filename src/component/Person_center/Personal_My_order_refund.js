import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Dropdown } from 'antd';F
// import { DownOutlined } from '@ant-design/icons';
//装修订单  ---退款
class Personal_My_order_refund extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      click: 3,
    }

  }
  // 点击页数
  gopage(page, s) {

    this.setState({
      page: page
    }, () => {
      // let gopage=this.state.page
      this.refundList(this.state.page);
    })
  }
  // 上一页
  lastpage() {
    let pages = this.state.page
    if (pages > 1) {
      this.setState({
        page: pages - 1
      }, () => {
        this.refundList(this.state.page);

      })

    }
  }
  // 下一页
  nextpage() {
    let pages = this.state.page;
    if (pages < Math.ceil(this.props.post.length / 3)) {
      this.setState({
        page: pages + 1
      }, () => {
        this.refundList(this.state.page);
      })
    }
  }
  refundList(page) {
    this.setState({
      endpage: Math.ceil(this.state.postarr.length / 3)
    }, () => {
      this.pagesList();
      if (this.state.page > this.state.endpage) {
        this.setState({
          page: this.state.endpage
        }, () => {
          this.orderList(this.state.page);
        })
      }
    })
    let theorder = this.state.postarr.slice((page - 1) * 3, page * 3);
    let TheOrder = theorder.map((item) => {
      return (<tr className="refund-content-content" >
        <td className="refund-content-content-top">
          <span>{item.id}</span>
        </td>
        <td className="refund-content-content-top">
          <span>{item.orderid}</span>
        </td>
        <td className="refund-content-content-top">
          <img src={item.src} alt="商品图片"></img>
          <span>{item.name}</span>
        </td>
        <td className="refund-content-content-top">
          <span>￥{item.refundprice}</span>
        </td>
        <td className="refund-content-content-top">
          <span>{item.reason}</span>
        </td>
        <td className="refund-content-content-top">
          <span>{item.applytime}</span>
        </td>
        <td className="refund-content-content-top">
          <span>{item.flag}</span>
        </td>
        <td>
          <span>查看</span>
        </td>
      </tr>)
    })
    this.setState({
      refundlist: TheOrder
    })
  }
  pagesList() {
    let pages = [];
    for (let i = 1; i <= this.state.endpage; i++) {
      let page = <span className={this.state.page === i ? 'onpage' : 'page'} key={i} onClick={this.gopage.bind(this, i)}>{i}</span>;
      pages.push(page)
    }
    console.log(pages)
    this.setState({
      pages: pages,
    })
  }
  componentDidMount() {
    // console.log(this.props.post)
    this.setState({
      postarr: this.props.post,
    }, () => {
      this.refundList(1);
    });
    this.setState({
      endpage: Math.ceil(this.props.post.length / 3),
    }, () => {
      this.pagesList(this.state.endpage);
    });
  }
  gopay() {

  }
  del() {

  }
  add() {

  }
  render() {
    return (
      <div>
        <div className="refund-header">
          <strong className={this.state.click === 1 ? 'change' : 'null'}>申请退换货</strong>
          <strong className={this.state.click === 2 ? 'change' : 'null'}>退换货记录</strong>
          <strong className={this.state.click === 3 ? 'change' : 'null'}>退款明细</strong>
        </div>
        <div className="refund-content">
          <table className="refund-content-table">
            <thead>
              <tr>
                <th>服务单号</th>
                <th>订单编号</th>
                <th>商品名称</th>
                <th>退款金额</th>
                <th>差额原因</th>
                <th>申请时间</th>
                <th>退款状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {this.state.refundlist}
            </tbody>
          </table>
          <div className="refund-content-statement">
            <h2>退换货申请常见问题</h2>
            <p>1. “申请”按钮若为灰色，可能是因为订单尚未完成或该商品正在返修/退换货中;</p>
            <p>2. 查看 <strong>售后政策</strong>;</p>
          </div>
          <div >
            <div className="refund-content-footer">
              <span className="lastpage" onClick={this.lastpage.bind(this)}>上一页</span>
              {this.state.pages}
              <span className="nextpage" onClick={this.nextpage.bind(this)}>下一页</span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
const MapStateToProps = (state, OwnProps) => {
  return {
    post: state.cartorder.refundlist
  }
}
export default connect(MapStateToProps)(Personal_My_order_refund)
