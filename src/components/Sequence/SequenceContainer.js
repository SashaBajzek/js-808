import { connect } from 'react-redux';
import { getInstrumentFromSequence } from '../../getters';
import { changeInstrument, deleteSequence } from '../../actions/actions';
import Sequence from './Sequence';

const mapStateToProps = (state, ownProps) => ({
  instrumentName: getInstrumentFromSequence(state, ownProps.sequenceId).displayName,
  instrumentColor: getInstrumentFromSequence(state, ownProps.sequenceId).color,
  currentInstrument: getInstrumentFromSequence(state, ownProps.sequenceId),
  allInstruments: state.instruments
});

const dispatchProps = {
  changeInstrument,
  deleteSequence
};

const SequenceContainer = connect(
  mapStateToProps,
  dispatchProps
)(Sequence);

export default SequenceContainer;