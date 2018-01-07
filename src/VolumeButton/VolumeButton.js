import React from 'react';
import "./VolumeButton.scss";

class VolumeButton extends React.Component {
  volHandleClick = (e) => {
    this.props.handleClick(this.props.instrumentNum, e, this.props.volIncrement);
  };

  render(){
    const { text, icon, extraClassName } = this.props;

    return (
      <button className={`VolumeButton ${extraClassName}`} onClick={ (e) => this.volHandleClick(e) }>
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        <span className="VolumeButton__text">{text}</span>
      </button>
    );
  }
}

export default VolumeButton;