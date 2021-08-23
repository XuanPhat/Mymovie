import { Provider } from 'react-redux';
import AppFootball from './routes/web';
import configureStore from './store/index';

const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppFootball/>
    </Provider>
  )
}
export default App;
