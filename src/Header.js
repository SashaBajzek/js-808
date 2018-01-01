import * as React from 'react';
import './Header.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class Header extends React.Component {
  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    const {stop, play, bpm, updateBPM, updateSequence} = this.props;
    return (
      <header className="Header">
        <h1 className="Header__title">JS-808</h1>
        <button onClick={stop}><i className="fa fa-stop" aria-hidden="true"></i> Stop</button>
        <button onClick={play}><i className="fa fa-play" aria-hidden="true"></i> / <i className="fa fa-pause" aria-hidden="true"></i> Play / Pause</button>
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