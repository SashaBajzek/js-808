import { connect } from 'react-redux';
import { getInstrumentFromSequence, getAvailableInstruments } from '../../getters';
import { changeInstrument, deleteSequence } from '../../actions/actions';
import Sequence from './Sequence';

const mapStateToProps = (state, ownProps) => ({
  instrumentColor: getInstrumentFromSequence(state, ownProps.sequenceId).color,
  currentInstrument: getInstrumentFromSequence(state, ownProps.sequenceId),
  allInstruments: state.instruments,
  availableInstruments: getAvailableInstruments(state)
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