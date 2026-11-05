import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {

  state = {
    intervalId: 0
  };

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

  clearBeats = () => {
    this.props.clearBeats();
  }

  handleSubmit(event){
    event.preventDefault();
  }

  bpmHandleChange = (e) => {
    const newBPM = parseInt(e.currentTarget.value, 0);
    this.props.changeBPM(newBPM);
    this.clearPlayingInterval();
    if(this.props.playing) {
      this.setNewInterval(newBPM);
    }
  }

  loopHandleChange = (e) => {
    const newCurrentLoop = parseInt(e.currentTarget.value, 0);
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
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>JS-808</h1>
          <div className={styles.controlscontainer}>
            <div className={styles.buttoncontainer}>
              <button className={`${styles.button} ${styles.buttonstop}`} onClick={this.stopLoop}><i className="fa fa-stop" aria-hidden="true"></i><span className={styles.buttontext}>Stop</span></button>
              <button className={`${styles.button} ${styles.buttonplay}`} onClick={playing ? this.pauseLoop : this.playLoop}>
              {playing ? <i className="fa fa-pause"><span className={styles.buttontext}>Pause</span></i> :
              <i className="fa fa-play"><span className={styles.buttontext}>Play</span></i> }
              </button>
              <button className={`${styles.button} ${styles.buttonclear}`} onClick={this.clearBeats}>Clear</button>
            </div>
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <div>
                <input className={styles.input} type="number" name="bpm" id="bpm" value={bpm} onChange={this.bpmHandleChange}/>
                <label htmlFor="bpm">BPM</label>
              </div>
              <div className={styles.selectwrapper}>
                <select className={styles.select} name="loopName" id="loopName" onChange={this.loopHandleChange}>
                {this.renderOptions()}
              </select>
              </div>
              <label htmlFor="loopName" className={styles.label}>Loop</label>
            </form>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;