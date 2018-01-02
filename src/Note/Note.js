import * as React from 'react';
import "./Note.css";

class Note extends React.Component {
  getClass = () => {
    var classes = "";
    if(this.props.index === this.props.currentFrame) {
      classes += " current";
    }
    if(this.props.noteVal) {
      classes += " selected";
    }
    return classes;
  }

  render(){
    return(
      <li className={`Note ${this.getClass()}`} onClick={() => this.props.changeNote(this.props.sequenceNum, this.props.instrumentNum, this.props.index)}>
        {this.props.noteVal ? <span onClick={this.playSound}></span> : ""}
      </li>
    )
  }
}

export default Note;