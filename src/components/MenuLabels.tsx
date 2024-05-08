import React, { useEffect } from "react"
import { connect } from "react-redux"
import { LabelI } from "../types/Label"
import { UseGet } from "../hook/UseGet"
import { Item, MenuItem, Menu, CheckBox } from "../styles/components/SubOptions"
import { createLabelToNote, deleteLabelToNote } from "../services/labelToNote_s"
import { backendApiCall } from "../services/Api"
import { setLabelToNote } from "../state/actions/labelToNoteActions"

interface MenuLabelsProps {
  labels: LabelI[]
  noteId: number
}

interface StateProps {
  labelToNote?: any
}
interface DispatchProps {
  setLabelToNote?: (labelToNote: any) => void
  deleteLabelToNote?: (labelToNote: any) => void
}
const MenuLabels: React.FC<MenuLabelsProps & StateProps & DispatchProps> = ({
  labels,
  noteId,
  labelToNote,
  setLabelToNote,
}) => {
  const { data, isLoading } = UseGet("labeltonote/all")
  useEffect(() => {
    if (data.length > 0) {
      setLabelToNote && setLabelToNote(data)
    }
  }, [data])

  const handleDeleteLabel = async (notedId: number, labelId: number) => {
    try {
      const response = await deleteLabelToNote(backendApiCall, notedId, labelId)
      if (response.status === "success") {
        console.log("Label deleted")
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleAddLabel = async (noteId: number, labelId: number) => {
    try {
      const response = await createLabelToNote(backendApiCall, { noteId, labelId })
      if (response.status === "success") {
        console.log("Label added")
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Menu role="menu">
      {labels.map((label: any) => (
        <MenuItem
          style={{
            display: "flex",
          }}
          key={label.id}
          role="menuitemcheckbox"
          onClick={() => {
            if (
              !isLoading &&
              labelToNote &&
              labelToNote.labelToNote.length > 0 &&
              labelToNote.labelToNote.find(
                (labelToNote: any) =>
                  labelToNote.labelId === label.id && labelToNote.noteId === noteId
              )
            ) {
              handleDeleteLabel(noteId, label.id)
            } else {
              handleAddLabel(noteId, label.id)
            }
          }}
        >
          <CheckBox>
            {!isLoading &&
            labelToNote &&
            labelToNote.labelToNote.length > 0 &&
            labelToNote.labelToNote.find(
              (labelToNote: any) =>
                labelToNote.labelId === label.id && labelToNote.noteId === noteId
            ) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#000"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#000"
              >
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
            )}
          </CheckBox>
          <Item role="button" tabIndex={0} onClick={() => {}}>
            {label.name}
          </Item>
        </MenuItem>
      ))}
    </Menu>
  )
}
const mapStateToProps = (state: any) => ({
  labelToNote: state.labelToNote,
})
const mapDispatchToProps = (dipatch: any) => ({
  setLabelToNote: (labelToNote: any) => dipatch(setLabelToNote(labelToNote)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuLabels)
