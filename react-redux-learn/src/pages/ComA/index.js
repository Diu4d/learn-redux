import React from 'react'

import { connect } from 'react-redux'

class ComA extends React.Component {
  handleClick = () => {
    this.props.sendAction()
    console.log(this.props);
  }
  render() {
    return (
      <button onClick={this.handleClick}>+</button>
    )
  }
}
//这个函数要有一个返回值，返回值是一个对象
const mapDispatchToProps = dispatch => {
  return {
    sendAction: () => {
      // 利用dispatch发送一个action
      // 传递action对象我们要定义一个type属性
      dispatch({
        type: 'add_action'
      })
    }
  }
};

export default connect(null, mapDispatchToProps)(ComA)