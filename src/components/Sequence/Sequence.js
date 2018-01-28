import React from 'react';
import VolumeAdjusterContainer from '../VolumeAdjuster/VolumeAdjusterContainer';
import PatternContainer from "../Pattern/PatternContainer";
import styles from "./Sequence.scss";

class Sequence extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  instrumentHandleChange = (event) => {
    let newInstrument = event.target.value;
    this.props.changeInstrument(this.props.sequenceId, newInstrument);
  }

  instrumentDelete = () => {
    this.props.deleteSequence(this.props.sequenceId);
  }

  renderOptions = () => {
    //current instrument displayed first
    const { currentInstrument } = this.props;
    var options = [
      <option className={`${styles["option"+currentInstrument.color]}`} key={`instrument${currentInstrument.id}`} id={`instrument${currentInstrument.id}`} value={currentInstrument.id}>{currentInstrument.displayName}</option>
    ];
    this.props.availableInstruments.forEach((instrument) => {
      options.push(
        <option className={`${styles["option"+instrument.color]}`} key={`instrument${instrument.id}`} id={`instrument${instrument.id}`} value={instrument.id}>{instrument.displayName}</option>
      );
    });
    return options;
  }

  render(){
    const {
      instrumentName,
      instrumentColor,
      sequenceId,
      currentInstrument
    } = this.props;
    return (
      <li className={`${styles.Sequence} ${styles["Sequence"+instrumentColor]}`}>
        <div className={styles.details}>
          <div className={styles.detailsCRUD}>
            <form onSubmit={this.handleSubmit}>
              <select name="instrumentName" id={`instrumentName${sequenceId}`} onChange={this.instrumentHandleChange} value={currentInstrument.id} className={styles.select} >
                {this.renderOptions()}
              </select>
              <label htmlFor={`instrumentName${sequenceId}`} className={styles.label}>instrument</label>
            </form>
            <button onClick={this.instrumentDelete} className={styles.button}>X</button>
          </div>
          <VolumeAdjusterContainer
            sequenceId={sequenceId}
          />
        </div>
        <PatternContainer sequenceId={sequenceId}/>
      </li>
    );
  }
}

export default Sequence;