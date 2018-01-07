import React from 'react';
import "./VolumeAdjuster.scss";
import VolumeButton from "../VolumeButton/VolumeButton";
import VolumeRange from "../VolumeRange/VolumeRange";

class VolumeAdjuster extends React.Component {
  render(){
    const { instrumentMute, muteSound, changeVolume, instrumentNum, instrumentVolume } = this.props;

    return (
      <ul className="VolumeAdjuster__list">
        <li>
          <VolumeButton extraClassName={`VolumeButton__mute ${instrumentMute ? "VolumeButton__mute--muted": ""}`} text="Mute" icon="fa-volume-off" instrumentNum={instrumentNum} handleClick={muteSound}  volIncrement="0" />
        </li>
        <li className="VolumeAdjuster">
          <VolumeButton extraClassName="VolumeButton__increment" text="Volume Down" icon="fa-volume-down" instrumentNum={instrumentNum} handleClick={changeVolume} volIncrement="-1" />

          <VolumeRange extraClassName={`VolumeButton__mute ${instrumentMute ? "VolumeButton__mute--muted": ""}`} instrumentNum={instrumentNum} instrumentVolume={instrumentVolume} changeVolume={changeVolume} />

          <VolumeButton extraClassName="VolumeButton__increment"  text="Volume Up" icon="fa-volume-up" instrumentNum={instrumentNum} handleClick={changeVolume} volIncrement="1" />
        </li>
      </ul>
    );
  }
}

export default VolumeAdjuster;

/*


      <button className="VolumeButton__vol-button VolumeButton__vol-button--gold" instrument={instrumentNum} onClick={(e) => {changeVolume(e, -1)}}>
        <i instrument={instrumentNum} className="fa fa-volume-down" aria-hidden="true"></i>
        <span className="VolumeButton__vol-button-text">Volume Down</span>
      </button>
         
      <button className="VolumeButton__vol-button VolumeButton__vol-button--gold" instrument={instrumentNum} onClick={(e) => {changeVolume(e, 1)}}>
        <i instrument={instrumentNum} className="fa fa-volume-up" aria-hidden="true"></i>
        <span className="VolumeButton__vol-button-text">Volume Up</span>
      </button>

      */