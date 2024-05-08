import { LabelI } from "../../types/Label"

export const setLabels = (paylaod: LabelI[]) => {
  return {
    type: "SET_LABELS",
    payload: paylaod,
  }
}

export const addLabel = (paylaod: LabelI) => {
  return {
    type: "ADD_LABEL",
    payload: paylaod,
  }
}

export const deleteLabel = (paylaod: any) => {
  return {
    type: "DELETE_LABEL",
    payload: paylaod,
  }
}
export const updateLabel = (paylaod: any) => {
  return {
    type: "UPDATE_LABEL",
    payload: paylaod,
  }
}
