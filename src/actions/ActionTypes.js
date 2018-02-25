const actions = [
  "PLAY",
  "PAUSE",
  "STOP",
  "ADVANCE_BEAT",
  "TOGGLE_BEAT",
  "PLAY_SOUND",
  "CHANGE_CURRENT_LOOP",
  "CHANGE_BPM",
  "MUTE",
  "CHANGE_VOLUME",
  "ADD_SEQUENCE",
  "DELETE_SEQUENCE",
  "CHANGE_INSTRUMENT",
  "JUMP_TO_BEAT",
  "CLEAR_BEATS"
]

const actionMap = {};

actions.forEach(action => {
  actionMap[action] = action;
});

export default actionMap;