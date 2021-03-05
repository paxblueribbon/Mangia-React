import './App.css';
import { Component } from 'react';
import NavBar from './components/NavBar'
import AffinityModal from './components/AffinityModal'
import SearchBar from './components/SearchBar'
import OrTry from './components/OrTry';
import NonExist from './components/NonExist';


class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <AffinityModal />
        <div className="container">
          <SearchBar />
          <OrTry/>
          <NonExist/>
        </div>
      </div>
    );
  }
}

export default App;