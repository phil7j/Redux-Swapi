import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetch } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return <h1>Loading....</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching,
  error: state.charsReducer.error
});

// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetch
  }
)(CharacterListView);
