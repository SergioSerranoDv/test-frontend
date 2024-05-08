const initialState = {
  labels: [],
}
export const labelReduer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_LABEL": {
      return {
        ...state,
        labels: [...state.labels, action.payload],
      }
    }
    case "DELETE_LABEL": {
      return {
        ...state,
        labels: state.labels.filter((label: any) => label.id !== action.payload),
      }
    }
    case "SET_LABELS": {
      return {
        ...state,
        labels: action.payload,
      }
    }
    case "UPDATE_LABEL": {
      return {
        ...state,
        labels: state.labels.map((label: any) => {
          if (label.id === action.payload.id) {
            return action.payload
          }
          return label
        }),
      }
    }
    default:
      return state
  }
}
