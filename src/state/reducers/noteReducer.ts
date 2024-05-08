const initialState = {
  notes: {
    active: [],
    archived: [],
    originalActive: [],
  },
}
export const noteReducer = (state = initialState, action: any) => {
  let activeNotes: any = state.notes.active
  let archivedNotes: any = state.notes.archived
  switch (action.type) {
    case "ADD_ACTIVE_NOTE": {
      activeNotes = [...activeNotes, action.payload]
      archivedNotes = archivedNotes.filter((note: any) => note.id !== action.payload.id)
      return {
        ...state,
        notes: {
          ...state.notes,
          active: activeNotes,
          archived: archivedNotes,
        },
      }
    }
    case "ADD_ARCHIVE_NOTE": {
      activeNotes = activeNotes.filter((note: any) => note.id !== action.payload.id)
      archivedNotes = [...archivedNotes, action.payload]
      return {
        ...state,
        notes: {
          ...state.notes,
          active: activeNotes,
          archived: archivedNotes,
        },
      }
    }
    case "DELETE_ACTIVE_NOTE": {
      activeNotes = activeNotes.filter((note: any) => note.id !== action.payload.id)
      return {
        ...state,
        notes: {
          ...state.notes,
          active: activeNotes,
        },
      }
    }
    case "DELETE_ARCHIVE_NOTE": {
      archivedNotes = archivedNotes.filter((note: any) => note.id !== action.payload.id)
      return {
        ...state,
        notes: {
          ...state.notes,
          archived: archivedNotes,
        },
      }
    }
    case "FILTER_NOTES_BY_LABEL": {
      console.log(action.payload)
      activeNotes = state.notes.originalActive.filter((note: any) => {
        return action.payload.some((labelToNoteItem: any) => labelToNoteItem.noteId === note.id)
      })
      return {
        ...state,
        notes: {
          ...state.notes,
          active: activeNotes,
        },
      }
    }
    case "SET_ACTIVE_NOTES": {
      return {
        ...state,
        notes: {
          ...state.notes,
          active: action.payload,
          originalActive: action.payload,
        },
      }
    }
    case "SET_ARCHIVE_NOTES": {
      return {
        ...state,
        notes: {
          ...state.notes,
          archived: action.payload,
        },
      }
    }
    default:
      return state
  }
}
