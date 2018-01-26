import { connect } from 'react-redux';
import { getInstrumentFromSequence } from '../../getters';
import Sequence from './Sequence';

const mapStateToProps = (state, ownProps) => ({
  instrumentName: getInstrumentFromSequence(state, ownProps.sequenceId).displayName,
  instrumentColor: getInstrumentFromSequence(state, ownProps.sequenceId).color
});

const SequenceContainer = connect(
  mapStateToProps,
  null
)(Sequence);

export default SequenceContainer;