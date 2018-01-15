const actions = [
  "PLAY",
  "PAUSE",
  "STOP",
  "MUTE",
  "INCREASE_VOLUME",
  "DECREASE_VOLUME",
  "CHANGE_BPM",
  "CHANGE_CURRENT_LOOP",
  "ADVANCE_BEAT",
  "PLAY_SOUND",
  "ADD_SEQUENCE",
  "DELETE_SEQUENCE",
  "CHANGE_INSTRUMENT"
]

const actionMap = {};

actions.forEach(action => {
  actionMap[action] = action;
});

export default actionMap;