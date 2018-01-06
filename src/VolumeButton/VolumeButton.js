import React from 'react';
import "./VolumeButton.scss";

class VolumeButton extends React.Component {
  volHandleClick = (e) => {
    this.props.handleClick(this.props.instrumentNum, e, this.props.volIncrement);
  };

  render(){
    const { text, icon, extraClassName } = this.props;

    return (
      <button className={`VolumeButton__vol-button ${extraClassName}`} onClick={ (e) => this.volHandleClick(e) }>
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        <span className="VolumeButton__vol-button-text">{text}</span>
      </button>
    );
  }
}

export default VolumeButton;

/*

<button className={`VolumeButton__vol-button VolumeButton__mute ${instrumentMute ? "VolumeButton__mute--muted": ""}`} onClick={() => muteSound(instrumentNum)}>
        <i className="fa fa-volume-off" aria-hidden="true"></i>
        <span className="VolumeButton__vol-button-text">Mute</span>
      </button>

      <button className="VolumeButton__vol-button VolumeButton__vol-button--gold" instrument={instrumentNum} onClick={(e) => {changeVolume(e, -1)}}>
        <i instrument={instrumentNum} className="fa fa-volume-down" aria-hidden="true"></i>
        <span className="VolumeButton__vol-button-text">Volume Down</span>
      </button>
         
      <button className="VolumeButton__vol-button VolumeButton__vol-button--gold" instrument={instrumentNum} onClick={(e) => {changeVolume(e, 1)}}>
        <i instrument={instrumentNum} className="fa fa-volume-up" aria-hidden="true"></i>
        <span className="VolumeButton__vol-button-text">Volume Up</span>
      </button>

*/