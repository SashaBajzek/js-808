import { connect } from 'react-redux';
import { play, pause, stop, changeBPM, changeCurrentLoop } from '../../actions/actions';
import App from './App';

const mapStateToProps = (state) => ({
  playing: state.playing,
  bpm: state.bpm,
  loops: state.loops
});

const dispatchProps = { play, pause, stop, changeBPM, changeCurrentLoop };

const AppContainer = connect(
  mapStateToProps,
  dispatchProps
)(App);

export default AppContainer;