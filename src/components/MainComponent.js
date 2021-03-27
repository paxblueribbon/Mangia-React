import { Component } from "react";
import NavBar from './NavBar'
import AffinityModal from './AffinityModal'
import SearchBar from './SearchBar'
import OrTry from './OrTry';
import NonExist from './NonExist';
import AffinitySection from './AffinitySection';
import RecipesSection from './RecipesSection';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    affinityDb: state.affinityDb
  }
}

class MainComponent extends Component {

render() {
  return (
    <div className="app">
      <NavBar />
      <AffinityModal />
      <div className="container">
        <SearchBar />
        <OrTry />
        <NonExist />
        <AffinitySection />
        <RecipesSection />
      </div>
    </div>
  )
}
}

export default withRouter(connect(mapStateToProps)(MainComponent));