import { connect } from 'react-redux';
import { play, pause, stop, changeBPM, changeCurrentLoop, advanceBeat, playSound, clearBeats } from '../../actions/actions';
import Header from './Header';

const mapStateToProps = (state) => ({
  playing: state.playing,
  bpm: state.bpm,
  loops: state.loops
});

const dispatchProps = { play, pause, stop, changeBPM, changeCurrentLoop, advanceBeat, playSound, clearBeats };

const HeaderContainer = connect(
	mapStateToProps,
	dispatchProps
)(Header);

export default HeaderContainer;