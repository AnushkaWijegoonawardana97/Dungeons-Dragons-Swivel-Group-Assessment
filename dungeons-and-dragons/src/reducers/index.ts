import { combineReducers } from "redux";
import spellsReducer from "./spellsReducer";

export default combineReducers({
  spell: spellsReducer,
});

