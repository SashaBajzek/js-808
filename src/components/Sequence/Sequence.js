// @flow

import React from 'react';
import VolumeAdjusterContainer from '../VolumeAdjuster/VolumeAdjusterContainer';
import PatternContainer from "../Pattern/PatternContainer";
import styles from "./Sequence.scss";
import fontAwesome from '../../../node_modules/font-awesome/css/font-awesome.min.css';

type Props = {
  changeInstrument: (number, string) => void,
  deleteSequence: (number) => void,
  currentInstrument: {
    id: string,
    displayName: string,
    color: string,
    sound: {
      src: string,
      volume: number,
      muted: boolean
    }
  },
  sequenceId: number,
  instrumentColor: string,
  availableInstruments: Array<{
    id: string,
    displayName: string,
    color: string,
    sound: {
      src: string,
      volume: number,
      muted: boolean
    }
  }>
}

class Sequence extends React.Component<Props> {
  fa = fontAwesome['fa'];
  fa_chevron_down = fontAwesome['fa-chevron-down'];

  handleSubmit = (event: SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();
  }

  instrumentHandleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    // to access input instance use event.currentTarget
		//(event.currentTarget: HTMLInputElement);
    let newInstrument = event.currentTarget.value;
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
      instrumentColor,
      sequenceId,
      currentInstrument
    } = this.props;
    const { fa, 'fa-times':fa_times } = fontAwesome;
    return (
      <li className={`${styles.Sequence} ${styles["Sequence"+instrumentColor]}`}>
        <div className={styles.details}>
          <div className={styles.detailsCRUD}>
            <form onSubmit={this.handleSubmit}>
              <div className={styles.selectwrapper}>
                <select name="instrument" id={`instrument${sequenceId}`} onChange={this.instrumentHandleChange} value={currentInstrument.id} className={styles.select} >
                  {this.renderOptions()}
                </select>
              </div>
              <label htmlFor={`instrument${sequenceId}`} className={styles.label}>instrument</label>
            </form>
            <button onClick={this.instrumentDelete} className={styles.button}>
              <i className={[fa, fa_times].join(' ')} aria-hidden="true"></i>
              <span className={styles.butontext}>Delete</span>
            </button>
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