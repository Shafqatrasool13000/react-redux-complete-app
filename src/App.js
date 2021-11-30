import { Provider } from 'react-redux';
import './App.css';
import AsyncContainer from './asyncActions/AsyncContainer';
// import CakeContainerHook from './components/cakeContainerHook';
// import IceCreamContainer from './components/IceCreamContainer';
// import OwnPropsContainer from './redux/OwnPropsContainer';
// import store from './redux/store/store';
import store from './asyncActions/store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
     <AsyncContainer/>
    </div>
    </Provider>
  // {/* <OwnPropsContainer cake/>
  // <OwnPropsContainer />
  // <CakeContainerHook/>
  // <IceCreamContainer/> */}
  );
}


export default App;