import { connect } from 'react-redux';
import { jumpToBeat } from '../../actions/actions';
import LoopHeader from './LoopHeader';

const mapStateToProps = (state, ownProps) => ({
  maxBeats: state.loops[state.currentLoop].maxBeats,
  currentBeat: state.currentBeat,
});

const dispatchProps = { jumpToBeat };

const LoopHeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(LoopHeader);

export default LoopHeaderContainer;