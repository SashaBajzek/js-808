import { Howl } from 'howler';
import * as bubbleSound from "../sounds/bubbles.mp3";
import * as claySound from "../sounds/clay.mp3";
import * as coronaSound from "../sounds/corona.mp3";
import * as moonSound from "../sounds/moon.mp3";

const initialState = {
  sequences: [
    { 
      sequenceNum: 0,
      sequenceName: "Sequence 1",
      maxFrames: 8,
      frames: {
        Kick: {
          instrumentName: "Kick",
          sound: "bubbleSound",
          notes: [1, 1, 0, 0, 0, 0, 0, 0]
        },
        Snare: {
          instrumentName: "Snare",
          sound: "claySound",
          notes: [0, 0, 1, 1, 0, 0, 0, 0]
        },
        OpenHat: {
          instrumentName: "Open Hat",
          sound: "coronaSound",
          notes: [0, 0, 0, 0, 1, 1, 0, 0]
        },
        ClosedHat: {
          instrumentName: "Closed Hat",
          sound: "moonSound",
          notes: [0, 0, 0, 0, 0, 0, 1, 1]
        }
      }
    },
    { 
      sequenceNum: 1,
      sequenceName: "Sequence 2",
      maxFrames: 8,
      frames: {
        Kick: {
          instrumentName: "Kick",
          sound: "bubbleSound",
          notes: [1, 0, 0, 0, 1, 0, 0, 0]
        },
        Snare: {
          instrumentName: "Snare",
          sound: "claySound",
          notes: [0, 1, 0, 0, 0, 1, 0, 0]
        },
        OpenHat: {
          instrumentName: "Open Hat",
          sound: "coronaSound",
          notes: [0, 0, 1, 0, 0, 0, 1, 0]
        },
        ClosedHat: {
          instrumentName: "Closed Hat",
          sound: "moonSound",
          notes: [0, 0, 0, 1, 0, 0, 0, 1]
        }
      }
    },
    { 
      sequenceNum: 2,
      sequenceName: "Sequence 3",
      maxFrames: 16,
      frames: {
        Kick: {
          instrumentName: "Kick",
          sound: "bubbleSound",
          notes: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
        },
        Snare: {
          instrumentName: "Snare",
          sound: "claySound",
          notes: [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0]
        },
        OpenHat: {
          instrumentName: "Open Hat",
          sound: "coronaSound",
          notes: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0]
        },
        ClosedHat: {
          instrumentName: "Closed Hat",
          sound: "moonSound",
          notes: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]
        }
      }
    }
  ],
  currentSequence: 0,
  currentFrame: -1,
  playing: false,
  bpm: 128,
  intervalId: 0,
  sounds: {
    bubbleSound: {
      sound: new Howl({
        src: [bubbleSound],
        volume: 0.5,
        mute: false
      })
    },
    claySound: {
      sound: new Howl({
        src: [claySound],
        volume: 0.5,
        mute: false
      })
    },
    coronaSound: {
      sound: new Howl({
        src: [coronaSound],
        volume: 0.5,
        mute: false
      })
    },
    moonSound: {
      sound: new Howl({
        src: [moonSound],
        volume: 0.5,
        mute: false
      })
    }
  }
}

export default initialState;