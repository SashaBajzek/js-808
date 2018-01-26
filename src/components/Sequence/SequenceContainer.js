import { connect } from 'react-redux';
import Sequence from './Sequence';

const getInstrumentFromSeqId = (state, sequenceId) => {
  let instrumentKey = state.loops[state.currentLoop].sequences[sequenceId].instrument;
  let instrumentIndex = state.instruments.findIndex(x => x.id === instrumentKey);
  let instrument = state.instruments[instrumentIndex];
  return instrument;
}

const mapStateToProps = (state, ownProps) => ({
  instrumentName: getInstrumentFromSeqId(state, ownProps.sequenceId).displayName,
  instrumentColor: getInstrumentFromSeqId(state, ownProps.sequenceId).color
});

const SequenceContainer = connect(
  mapStateToProps,
  null
)(Sequence);

export default SequenceContainer;