import * as React from 'react';
import './Header.scss';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

class Header extends React.Component {
  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    const {stop, play, bpm, updateBPM, updateSequence, playing} = this.props;
    return (
      <header className="Header">
        <h1 className="Header__title">JS-808</h1>
        <div className="Header__play-controls">
          <button className="Header__button--stop" onClick={stop}><i className="fa fa-stop" aria-hidden="true"></i><span className="Header__button-text">Stop</span></button>
          <button className="Header__button--play" onClick={play}>
          {playing ? <i className="fa fa-pause"><span className="Header__button-text">Pause</span></i> :
          <i className="fa fa-play"><span className="Header__button-text">Play</span></i> }
          </button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="bpm" value={bpm} onChange={updateBPM}/>
          <label htmlFor="bpm">BPM</label>
          <select name="sequence" onChange={updateSequence}>
            <option value="0">Sequence 1</option>
            <option value="1">Sequence 2</option>
            <option value="2">Sequence 3</option>
          </select>
        </form>
      </header>
    )
  }
}

export default Header;