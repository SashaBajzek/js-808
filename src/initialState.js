import { Howl } from 'howler';
import * as bubbleSound from "./sounds/bubbles.mp3";
import * as claySound from "./sounds/clay.mp3";
import * as coronaSound from "./sounds/corona.mp3";
import * as moonSound from "./sounds/moon.mp3";
import * as spiralSound from "./sounds/dotted-spiral.mp3";
import * as ufoSound from "./sounds/ufo.mp3";
import * as splitsSound from "./sounds/splits.mp3";
import * as veilSound from "./sounds/veil.mp3";

const initialState = {
  bpm: 128,
  currentBeat: -1,
  currentLoop: 0,
  intervalId: 0,
  playing: false,
  loops: [
    { 
      name: "Loop 1",
      maxBeats: 8,
      sequences: [
        {
          instrument: "kick",
          pattern: [true, true, false, false, false, false, false, false]
        },
        {
          instrument: "snare",
          pattern: [false, false, true, true, false, false, false, false]
        },
        {
          instrument: "openHat",
          pattern: [false, false, false, false, true, true, false, false]
        },
        {
          instrument: "closedHat",
          pattern: [false, false, false, false, false, false, true, true]
        }
      ]
    },
    { 
      name: "Loop 2",
      maxBeats: 8,
      sequences: [
        {
          instrument: "kick",
          pattern: [true, false, false, false, false, false, false, false]
        },
        {
          instrument: "snare",
          pattern: [false, false, true, false, false, false, false, false]
        },
        {
          instrument: "openHat",
          pattern: [false, false, false, false, true, false, false, false]
        },
        {
          instrument: "closedHat",
          pattern: [false, false, false, false, false, false, true, false]
        }
      ]
    },
    { 
      name: "Loop 3",
      maxBeats: 16,
      sequences: [
        {
          instrument: "kick",
          pattern: [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false]
        },
        {
          instrument: "snare",
          pattern: [false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false]
        },
        {
          instrument: "openHat",
          pattern: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false]
        },
        {
          instrument: "closedHat",
          pattern: [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false]
        }
      ]
    }
  ],
  instruments: {
    kick: {
      id: "kick",
      displayName: "Kick",
      color: "magenta",
      sound: new Howl({
        src: [bubbleSound],
        volume: 0.5,
        muted: false
      })
    },
    snare: {
      id: "snare",
      displayName: "Snare",
      color: "gold",
      sound: new Howl({
        src: [claySound],
        volume: 0.5,
        muted: false
      })
    },
    openHat: {
      id: "openHat",
      displayName: "Open Hat",
      color: "teal",
      sound: new Howl({
        src: [coronaSound],
        volume: 0.5,
        muted: false
      }) 
    },
    closedHat: {
      id: "closedHat",
      displayName: "Closed Hat",
      color: "green",
      sound: new Howl({
        src: [moonSound],
        volume: 0.5,
        muted: false
      }) 
    },
    spiral: {
      id: "spiral",
      displayName: "Spiral",
      color: "blue",
      sound: new Howl({
        src: [spiralSound],
        volume: 0.5,
        muted: false
      }) 
    },
    ufo: {
      id: "ufo",
      displayName: "UFO",
      color: "orange",
      sound: new Howl({
        src: [ufoSound],
        volume: 0.5,
        muted: false
      }) 
    },
    splits: {
      id: "splits",
      displayName: "Splits",
      color: "cherry",
      sound: new Howl({
        src: [splitsSound],
        volume: 0.5,
        muted: false
      }) 
    },
    veil: {
      id: "veil",
      displayName: "Veil",
      color: "purple",
      sound: new Howl({
        src: [veilSound],
        volume: 0.5,
        muted: false
      }) 
    }
  }
}

export default initialState;

// Set up typechecking of the state with flow

export type State = {
  bpm: number,
  currentBeat: number,
  currentLoop: number,
  intervalId: number,
  playing: boolean,
  loops: Array<
    { 
      name: string,
      maxBeats: number,
      sequences: Array<
        {
          instrument: string,
          pattern: [boolean]
        }
      >
    }
  >,
  instruments: {
    kick: {
      id: string,
      displayName: string,
      color: string,
      sound: {
        src: string,
        volume: number,
        muted: boolean
      }
    },
    snare: {
      id: string,
      displayName: string,
      color: string,
      sound: {
        src: string,
        volume: number,
        muted: boolean
      }
    },
    openHat: {
      id: string,
      displayName: string,
      color: string,
      sound: {
        src: string,
        volume: number,
        muted: boolean
      }
    },
    closedHat: {
      id: string,
      displayName: string,
      color: string,
      sound: {
        src: string,
        volume: number,
        muted: boolean
      }
    },
    spiral: {
      id: string,
      displayName: string,
      color: string,
      sound: {
        src: string,
        volume: number,
        muted: boolean
      }
    },
    ufo: {
      id: string,
      displayName: string,
      color: string,
      sound: {
        src: string,
        volume: number,
        muted: boolean
      }
    },
    splits: {
      id: string,
      displayName: string,
      color: string,
      sound: {
        src: string,
        volume: number,
        muted: boolean
      }
    },
    veil: {
      id: string,
      displayName: string,
      color: string,
      sound: {
        src: string,
        volume: number,
        muted: boolean
      }
    }
  }
}