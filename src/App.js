import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Home/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
