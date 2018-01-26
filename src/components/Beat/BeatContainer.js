import { connect } from 'react-redux';
import Beat from './Beat';
import { toggleBeat } from '../../actions/actions';

const getBeat = (state, sequenceId, beatId) => {
  let beat = state.loops[state.currentLoop].sequences[sequenceId].pattern[beatId];
  return beat;
}

const getInstrumentFromSeqId = (state, sequenceId) => {
  let instrumentKey = state.loops[state.currentLoop].sequences[sequenceId].instrument;
  let instrumentIndex = state.instruments.findIndex(x => x.id === instrumentKey);
  let instrument = state.instruments[instrumentIndex];
  return instrument;
}

const mapStateToProps = (state, ownProps) => ({
  beatOn: getBeat(state, ownProps.sequenceId, ownProps.beatId),
  color: getInstrumentFromSeqId(state, ownProps.sequenceId).color,
  currentBeat: state.currentBeat
});

const dispatchProps = { toggleBeat };

const BeatContainer = connect(
  mapStateToProps,
  dispatchProps
)(Beat);

export default BeatContainer;