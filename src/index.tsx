import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import App from './components/App';
import './styles/init.css';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
