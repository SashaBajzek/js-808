import * as React from 'react';
import Instrument from "../Instrument/Instrument";
import "./Sequence.css";

class Sequence extends React.Component {
  renderInstruments = () => {
    let instrumentList = [];
    for(var i = 0; i < this.props.sequence.frames.length; i+=1) {
      instrumentList.push(<Instrument key={`instrument${i}`} name={this.props.sequence.instruments[i]} frames={this.props.sequence.frames[i]} currentFrame={this.props.currentFrame} changeNote={this.props.changeNote} instrumentVolume={this.props.sounds[i].volume()} muteSound={this.props.muteSound} changeVolume={this.props.changeVolume} sequenceNum={this.props.number} instrumentNum={i} />);
    }
    return instrumentList;
  }

  renderHeader = () => {
    let headerList = [];
    for(var i = 1; i <= this.props.sequence.totalFrames; i += 1) {
      headerList.push(<li className={this.getClass(i)} key={`header${i}`}>{i}</li>)
    }
    return headerList;
  }

  getClass = (i) => {
    return i-1 === this.props.currentFrame ? "Sequence__current" : "";
  }

  render() {
    return (
      <div className="Sequence">
        <div className="Sequence__header">
          <h1>Sequence {this.props.number + 1}</h1>
          <ul className="Sequence__header-list">
            {this.renderHeader()}
          </ul>
        </div>
        <ul className="Sequence__instrument-list">
          {this.renderInstruments()}
        </ul>
      </div>
    )
  }
}

export default Sequence;