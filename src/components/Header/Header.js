import React from 'react';
import styles from './Header.scss';
import fontAwesome from '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

class Header extends React.Component {
  handleSubmit(event){
    event.preventDefault();
  }

  renderOptions = () => {
    var options = [];
    for(var i = 0; i < this.props.loops.length; i++) {
      options.push(<option key={`loop${i}`} value={i}>{this.props.loops[i].name}</option>);
    }
    return options;
  }

  render(){
    const {stop, play, bpm, updateBPM, changePlayingLoop, playing} = this.props;
    const { fa, 'fa-stop':fa_stop, 'fa-play':fa_play, 'fa-pause':fa_pause } = fontAwesome;
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>JS-808</h1>
        <div className={styles.controlscontainer}>
          <div className={styles.buttoncontainer}>
            <button className={`${styles.button} ${styles.buttonstop}`} onClick={stop}><i className={[fa, fa_stop].join(' ')} aria-hidden="true"></i><span className={styles.buttontext}>Stop</span></button>
            <button className={`${styles.button} ${styles.buttonplay}`} onClick={play}>
            {playing ? <i className={[fa, fa_pause].join(' ')}><span className={styles.buttontext}>Pause</span></i> :
            <i className={[fa, fa_play].join(' ')}><span className={styles.buttontext}>Play</span></i> }
            </button>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input className={styles.input} type="number" name="bpm" id="bpm" value={bpm} onChange={updateBPM}/>
            <label htmlFor="bpm">BPM</label>
            <select className={styles.select} name="loopName" id="loopName" onChange={changePlayingLoop}>
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