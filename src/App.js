import { store } from './store';
import { Provider } from 'react-redux';
import IntroScreen from './IntroScreen'

function App() {
  return (
    <Provider store = {store}>
      <IntroScreen /> 
    </Provider>
  );
}

export default App;
