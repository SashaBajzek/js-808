import { connect } from 'react-redux';
import Pattern from './Pattern';

const mapStateToProps = (state, ownProps) => ({
  pattern: state.loops[state.currentLoop].sequences[ownProps.sequenceId].pattern
});

const PatternContainer = connect(
  mapStateToProps,
  null
)(Pattern);

export default PatternContainer;