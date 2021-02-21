import React from 'react'
//导入store
import store from '../../Store'

//导入action构建函数
import { sendAction } from '../../Action'
export default class Home extends React.Component {
  handleClick = () => {
    const action = sendAction();
    //发送一个action 利用store
    store.dispatch(action);
  };
  componentDidMount() {
    store.subscribe(() => {
      console.log('subscribe:', store.getState());
      this.setState({})
    })
  }
  render() {
    return (
      <>
      <button onClick={this.handleClick}>点击</button>
      <div>{store.getState().value}</div>
      </>
    )
  }
}