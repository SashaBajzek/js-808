import * as React from 'react';
import "./Note.css";

class Note extends React.Component {
  getClass = () => {
    return this.props.index === this.props.currentFrame ? "current" : "";
  }

  render(){
    return(
      <li className={`Note ${this.getClass()}`} onClick={() => this.props.changeNote(this.props.sequenceNum, this.props.instrumentNum, this.props.index)}>
        {this.props.noteVal ? <i onClick={this.playSound} className="fa fa-circle"></i> : ""}
      </li>
    )
  }
}

export default Note;