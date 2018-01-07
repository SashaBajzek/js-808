import { Howl } from 'howler';
import * as bubbleSound from "../sounds/bubbles.mp3";
import * as claySound from "../sounds/clay.mp3";
import * as coronaSound from "../sounds/corona.mp3";
import * as moonSound from "../sounds/moon.mp3";

const initialState = {
  sequences: [
    {
      totalFrames: 8,
      instruments: ["Kick", "Snare", "Open Hat", "Closed Hat"],
      frames: [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1]
      ]
    },
    {
      totalFrames: 8,
      instruments: ["Kick", "Snare", "Open Hat", "Closed Hat"],
      frames: [
        [0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0]
      ]
    },
    { 
      totalFrames: 16,
      instruments: ["Kick", "Snare", "Open Hat", "Closed Hat"],
      frames: [
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
      ]
    }
  ],
  currentSequence: 0,
  currentFrame: -1,
  playing: false,
  bpm: 128,
  intervalId: 0,
  sounds: [
    new Howl({
      src: [bubbleSound],
      volume: 0.5,
      mute: false
    }),
    new Howl({
      src: [claySound],
      volume: 0.5,
      mute: false
    }),
    new Howl({
      src: [coronaSound],
      volume: 0.5,
      mute: false
    }),
    new Howl({
      src: [moonSound],
      volume: 0.5,
      mute: false
    })
  ]
}

export default initialState;