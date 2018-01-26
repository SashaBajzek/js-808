import React from 'react';
import styles from './Header.scss';
import fontAwesome from '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0
    };
  }

  componentWillUnmount = () => {
    this.clearPlayingInterval();
  }

  clearPlayingInterval = () => {
    clearInterval(this.state.intervalId);
  }

  setNewInterval = (newBPM) => {
    const bpm = newBPM ? newBPM : this.props.bpm;
    this.setState(
      {
        intervalId: setInterval(this.advanceBeatPlaySounds, 60/bpm*1000)
      });
  }

  advanceBeatPlaySounds = () => {
    this.props.advanceBeat();
    this.props.playSound();
  }

  playLoop = () => {
    this.props.play();
    this.setNewInterval();
  }

  pauseLoop = () => {
    this.props.pause();
    this.clearPlayingInterval();
  }

  stopLoop = () => {
    this.props.stop();
    this.clearPlayingInterval();
  }

  handleSubmit(event){
    event.preventDefault();
  }

  bpmHandleChange = (e) => {
    const newBPM = e.target.value;
    this.props.changeBPM(newBPM);
    this.clearPlayingInterval();
    if(this.props.playing) {
      this.setNewInterval(newBPM);
    }
  }

  loopHandleChange = (e) => {
    const newCurrentLoop = parseInt(e.target.value, 0);
    this.props.changeCurrentLoop(newCurrentLoop);
  }

  renderOptions = () => {
    var options = [];
    for(var i = 0; i < this.props.loops.length; i++) {
      options.push(<option key={`loop${i}`} value={i}>{this.props.loops[i].name}</option>);
    }
    return options;
  }

  render(){
    const { playing, bpm} = this.props;
    const { fa, 'fa-stop':fa_stop, 'fa-play':fa_play, 'fa-pause':fa_pause } = fontAwesome;
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>JS-808</h1>
        <div className={styles.controlscontainer}>
          <div className={styles.buttoncontainer}>
            <button className={`${styles.button} ${styles.buttonstop}`} onClick={this.stopLoop}><i className={[fa, fa_stop].join(' ')} aria-hidden="true"></i><span className={styles.buttontext}>Stop</span></button>
            <button className={`${styles.button} ${styles.buttonplay}`} onClick={playing ? this.pauseLoop : this.playLoop}>
            {playing ? <i className={[fa, fa_pause].join(' ')}><span className={styles.buttontext}>Pause</span></i> :
            <i className={[fa, fa_play].join(' ')}><span className={styles.buttontext}>Play</span></i> }
            </button>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input className={styles.input} type="number" name="bpm" id="bpm" value={bpm} onChange={this.bpmHandleChange}/>
            <label htmlFor="bpm">BPM</label>
            <select className={styles.select} name="loopName" id="loopName" onChange={this.loopHandleChange}>
              {this.renderOptions()}
            </select>
            <label htmlFor="loopName" className={styles.label}>Loop</label>
          </form>
        </div>
      </header>
    )
  }
}

export default Header;