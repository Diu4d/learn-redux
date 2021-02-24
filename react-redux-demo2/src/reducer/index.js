const initState = {
  status: false
};

exports.Reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'sendlove':
      return {
        status: true
      };
    case 'stoplove':
      return {
        status: false
      };
    default:
      return state;
      //返回最新值 3
  }
};