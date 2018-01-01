import * as React from 'react';
import Instrument from "./Instrument";

class Sequence extends React.Component {
  renderInstruments = () => {
    let instrumentList = [];
    for(var i = 0; i < this.props.sequence.frames.length; i+=1) {
      instrumentList.push(<Instrument key={`instrument${i}`} name={this.props.sequence.instruments[i]} frames={this.props.sequence.frames[i]} currentFrame={this.props.currentFrame} changeNote={this.props.changeNote} sequenceNum={this.props.number} instrumentNum={i} />);
    }
    return instrumentList;
  }

  render() {
    return (
      <div className="Sequence">
        <h1>Sequence {this.props.number + 1}</h1>
        <ul className="">
          {this.renderInstruments()}
        </ul>
      </div>
    )
  }
}

export default Sequence;