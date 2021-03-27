import './App.css';
import { Component } from 'react';
import MainComponent from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'

class App extends Component {
  render() {
    return (
      <Provider store={ConfigureStore}>
        <MainComponent/>
      </Provider>
    );
  }
}

export default App;