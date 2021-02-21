构建store 和 reducer
  1.创建reducer/index.js 文件，构建 reducer来响应 actions
  2.创建store.js 文件，通过createStore方法，把我们的reducer传入进来
  3.在app.js中引入 store

搭建页面结构
  1.创建一个组件，名字叫ComA，里面放一个 button按钮
  2.创建另外一个组件，名字叫ComB，里面放一个div，用来显示数组
  3.在app.js 中引入两个组件

Provider 组件实现
  1.导入Provider组件，在react-redux中进行导入
  2.需要利用Provider组件 对我们整个结构进行包裹
  3.给我们Provider组件设置 store 的属性，而这个值就是我们通过
  createStore构建出来的 store 实例对象