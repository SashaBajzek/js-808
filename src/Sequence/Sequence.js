import React from 'react';
import Instrument from "../Instrument/Instrument";
import styles from "./Sequence.scss";

class Sequence extends React.Component {
  current = styles.current;
  
  renderHeader = () => {
    let headerList = [];
    for(var i = 1; i <= this.props.sequence.totalFrames; i += 1) {
      headerList.push(<li className={`${styles.headeritem} ${this.getClass(i)}`} key={`header${i}`}>{i}</li>)
    }
    return headerList;
  }

  renderInstruments = () => {
    let instrumentList = [];
    for(var i = 0; i < this.props.sequence.frames.length; i+=1) {
      instrumentList.push(<Instrument key={`instrument${i}`} name={this.props.sequence.instruments[i]} frames={this.props.sequence.frames[i]} currentFrame={this.props.currentFrame} changeNote={this.props.changeNote} instrumentVolume={this.props.sounds[i].volume()} instrumentMute={this.props.sounds[i].mute()} muteSound={this.props.muteSound} changeVolume={this.props.changeVolume} sequenceNum={this.props.number} instrumentNum={i} />);
    }
    return instrumentList;
  }

  getClass = (i) => {
    return i-1 === this.props.currentFrame ? this.current : "";
  }

  render() {
    return (
      <div className={styles.Sequence}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sequence {this.props.number + 1}</h2>
          <ul className={styles.headerlist}>
            {this.renderHeader()}
          </ul>
        </div>
        <ul className={styles.instrumentlist}>
          {this.renderInstruments()}
        </ul>
      </div>
    )
  }
}

export default Sequence;