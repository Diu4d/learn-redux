// 这个文件是创建 reducer函数的，专门用来处理发送过来的action

const initState = {
  value:'默认值'
};

const reducer = (state = initState,action) => {
  //reducer必须要有返回值
  console.log('reducer:',state,action);
  switch (action.type) {
    case "send_type":
    return Object.assign({}, state, action);
    default:
      return state;
  }
};

module.exports = {
  reducer
};