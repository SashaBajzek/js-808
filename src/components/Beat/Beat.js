// @flow
import React from 'react';
import styles from "./Beat.scss";

type Props = {
  beatOn: boolean,
  beatId: number,
  currentBeat: number,
  instrumentMute: boolean,
  sequenceId: number,
  color: string,
  toggleBeat: (number, number) => void
}

class Beat extends React.Component<Props> {
  current = styles.current;
  selected = styles.selected;
  instrumentMute = styles.instrumentMute;

  getClass = () => {
    const {
      beatOn, 
      beatId, 
      currentBeat,
      instrumentMute } = this.props;
    var classes = [];
    if(beatId === currentBeat) {
      classes.push(this.current);
    }
    if(beatOn) {
      classes.push(this.selected);
    }
    if(instrumentMute) {
      classes.push(this.instrumentMute);
    }
    return classes.join(' ');
  }

  render(){
    const { 
      sequenceId,
      beatId, 
      beatOn, 
      toggleBeat, 
      color
    } = this.props;
    return(
      <li className={styles.Beat} onClick={() => toggleBeat(beatId, sequenceId)}>
        <button className={`${styles.button} ${styles["button"+color]} ${this.getClass()}`}>
        {beatOn ? <span>Beat On</span> : <span>Beat Off</span>}
        </button>
      </li>
    )
  }
}

export default Beat;