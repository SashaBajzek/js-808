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
  instruments: [
    {
      id: "kick",
      displayName: "Kick",
      sound: "bubbleSound",
      color: "magenta"
    },
    {
      id: "snare",
      displayName: "Snare",
      sound: "claySound",
      color: "gold"
    },
    {
      id: "openHat",
      displayName: "Open Hat",
      sound: "coronaSound",
      color: "teal"
    },
    {
      id: "closedHat",
      displayName: "Closed Hat",
      sound: "moonSound",
      color: "green"
    },
    {
      id: "spiral",
      displayName: "Spiral",
      sound: "spiralSound",
      color: "blue"
    },
    {
      id: "ufo",
      displayName: "UFO",
      sound: "ufoSound",
      color: "orange"
    },
    {
      id: "splits",
      displayName: "Splits",
      sound: "splitsSound",
      color: "cherry"
    },
    {
      id: "veil",
      displayName: "Veil",
      sound: "veilSound",
      color: "purple"
    }
  ],
  sounds: [
    {
      id: "bubbleSound",
      sound: new Howl({
        src: [bubbleSound],
        volume: 0.5,
        mute: false
      }) 
    },
    {
      id: "claySound",
      sound: new Howl({
        src: [claySound],
        volume: 0.5,
        mute: false
      }) 
    },
    {
      id: "coronaSound",
      sound: new Howl({
        src: [coronaSound],
        volume: 0.5,
        mute: false
      }) 
    },
    {
      id: "moonSound",
      sound: new Howl({
        src: [moonSound],
        volume: 0.5,
        mute: false
      }) 
    },
    {
      id: "spiralSound",
      sound: new Howl({
        src: [spiralSound],
        volume: 0.5,
        mute: false
      }) 
    },
    {
      id: "ufoSound",
      sound: new Howl({
        src: [ufoSound],
        volume: 0.5,
        mute: false
      }) 
    },
    {
      id: "splitsSound",
      sound: new Howl({
        src: [splitsSound],
        volume: 0.5,
        mute: false
      }) 
    },
    {
      id: "veilSound",
      sound: new Howl({
        src: [veilSound],
        volume: 0.5,
        mute: false
      }) 
    }
  ]
}

export default initialState;