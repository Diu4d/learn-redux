//接收两个参数

const initState = {
  count: 0
};
// reducer 要接收action 然后进行逻辑处理的
// 判断 发送过来的action 是不是我们需要的
// 如果是我们需要的，就应该return一个新的state
exports.reducer = (state = initState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case 'add_action':
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};