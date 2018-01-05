import React from 'react';
import "./Note.scss";

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
      <li className="Note" onClick={() => this.props.changeNote(this.props.sequenceNum, this.props.instrumentNum, this.props.index)}>
        <button className={`Note__button ${this.getClass()}`}>
        {this.props.noteVal ? <span onClick={this.playSound}>Note On</span> : <span>Note Off</span>}
        </button>
      </li>
    )
  }
}

export default Note;