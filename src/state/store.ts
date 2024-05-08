import { createStore, combineReducers } from "redux"
import { noteReducer } from "./reducers/noteReducer"
import { labelReduer } from "./reducers/labelReducer"
import { labelToNoteReducer } from "./reducers/LabelToNoteReducer"

const rootReducer = combineReducers({
  notes: noteReducer,
  labels: labelReduer,
  labelToNote: labelToNoteReducer,
})
const store = createStore(rootReducer)
export default store
