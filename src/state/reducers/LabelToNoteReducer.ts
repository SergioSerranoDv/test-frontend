const initialState = {
  labelToNote: [],
}
export const labelToNoteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_LABEL_TO_NOTE": {
      return {
        ...state,
        labelToNote: action.payload,
      }
    }

    default:
      return state
  }
}
