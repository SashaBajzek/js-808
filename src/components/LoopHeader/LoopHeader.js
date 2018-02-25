// @flow

import React from 'react';
import styles from "./LoopHeader.scss";

type Props = {
  maxBeats: number,
  currentBeat: number,
  jumpToBeat: () => void
}

class LoopHeader extends React.Component<Props> {
  current = styles.current;

  makeButton = (i) => {
    return <li className={`${styles.headeritem} ${this.getClass(i)}`} key={`header${i}`} id={i} onClick={() => this.props.jumpToBeat(i-1)}>
      <button className={`${styles.headerbutton} ${this.getClass(i)}`}>{i}</button>
    </li>
  }

  renderHeader = () => {
    let headerList = [];
    for(var i = 1; i <= this.props.maxBeats; i += 1) {
      headerList.push(this.makeButton(i))
    }
    return headerList;
  }

  getClass = (i) => {
    return i-1 === this.props.currentBeat ? this.current : "";
  }

  render() {
    return (
      <ul className={styles.headerlist}>
        {this.renderHeader()}
      </ul>
    )
  }
}

export default LoopHeader;