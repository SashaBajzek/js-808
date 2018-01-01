import * as React from 'react';

class Header extends React.Component {
  render(){
    const {stop, play, bpm, updateBPM, updateSequence} = this.props;
    return (
      <header className="App-header">
        <h1 className="App-title">JS-808</h1>
        <button onClick={stop}>Stop</button>
        <button onClick={play}>Play</button>
        <form>
          <input type="number" name="bpm" value={bpm} onChange={updateBPM}/>
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