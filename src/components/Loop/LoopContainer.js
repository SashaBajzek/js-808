import { connect } from 'react-redux';
import Loop from './Loop';

const mapStateToProps = (state, ownProps) => ({
  loopName: state.loops[state.currentLoop].name,
  maxBeats: state.loops[state.currentLoop].maxBeats,
  currentBeat: state.currentBeat,
  numSequences: state.loops[state.currentLoop].sequences.length
});

const LoopContainer = connect(
  mapStateToProps,
  null
)(Loop);

export default LoopContainer;