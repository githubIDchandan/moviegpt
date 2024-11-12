import { Provider } from 'react-redux';
import Body from './component/Body';
import appStore from './store/appStore';
import Header from './component/Header';

function App() {


console.log("app loaded")
  
  return (

    <div>
     
     <Provider store={appStore}>
    
      <Body/>
      </Provider>
    </div>

  );
}

export default App;