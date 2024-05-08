import { NoteI } from "../../types/Note"
export const setActiveNotes = (paylaod: NoteI[]) => {
  return {
    type: "SET_ACTIVE_NOTES",
    payload: paylaod,
  }
}

export const setArchiveNotes = (paylaod: NoteI[]) => {
  return {
    type: "SET_ARCHIVE_NOTES",
    payload: paylaod,
  }
}

export const addActiveNote = (paylaod: NoteI) => {
  return {
    type: "ADD_ACTIVE_NOTE",
    payload: paylaod,
  }
}

export const addArchiveNote = (paylaod: NoteI) => {
  return {
    type: "ADD_ARCHIVE_NOTE",
    payload: paylaod,
  }
}
export const deleteActiveNote = (payload: NoteI) => {
  return {
    type: "DELETE_ACTIVE_NOTE",
    payload: payload,
  }
}
export const deleteArchiveNote = (payload: NoteI) => {
  return {
    type: "DELETE_ARCHIVE_NOTE",
    payload: payload,
  }
}

export const filerNotesByLabel = (payload: any) => {
  return {
    type: "FILTER_NOTES_BY_LABEL",
    payload: payload,
  }
}
