import React from 'react'
import defaultImg from '../assets/11.jpg'
import sendImg from '../assets/22.jpg'
import { connect } from 'react-redux'
class Boy extends React.Component {
  state = {
    isSend: false
  };
  handleClick = () => {
    // 触发函数dispatch传递action至reducer 2
    let { isSend } = this.state;
    isSend ? this.props.stopmsg() : this.props.sendmsg();
    this.setState({
      isSend: !isSend
    })
  };
  render() {
    return (
      <div>
        <img src={this.state.isSend ? sendImg : defaultImg} />
        <button onClick={this.handleClick}>{this.state.isSend ? '停止' : '发射'}</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  //返回至boy组件 1
  return {
    sendmsg: () => {
      dispatch({
        type: 'sendlove'
      })
    },
    stopmsg: () => {
      dispatch({
        type: 'stoplove'
      })
    }
  };
}
export default connect(null, mapDispatchToProps)(Boy)