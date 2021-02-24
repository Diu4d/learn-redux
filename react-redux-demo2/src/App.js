import Boy from './pages/boy'
import Girl from './pages/girls'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="boy"><Boy /></div>
        <div className="girl"><Girl /></div>
      </div>
    </Provider>
  );
}

export default App;
