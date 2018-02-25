import { connect } from 'react-redux';
import { addSequence, jumpToBeat } from '../../actions/actions';
import { getAvailableInstruments } from '../../getters';
import Loop from './Loop';

const shouldDisable = (state) => {
  if (getAvailableInstruments(state).length < 1) {
    return true;
  } else {
    return false;
  }
}

const mapStateToProps = (state, ownProps) => ({
  loopName: state.loops[state.currentLoop].name,
  maxBeats: state.loops[state.currentLoop].maxBeats,
  currentBeat: state.currentBeat,
  numSequences: state.loops[state.currentLoop].sequences.length,
  disableAddSequence: shouldDisable(state)
});

const dispatchProps = { addSequence, jumpToBeat };

const LoopContainer = connect(
  mapStateToProps,
  dispatchProps
)(Loop);

export default LoopContainer;