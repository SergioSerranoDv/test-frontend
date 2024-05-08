import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { UseGet } from "../hook/UseGet"
import { setLabelToNote } from "../state/actions/labelToNoteActions"
import { filerNotesByLabel } from "../state/actions/noteActions"
import {
  Form,
  Input,
  InputContainer,
  SearchBarContainer,
  SearchButton,
} from "../styles/components/SearchBar"
interface StateProps {
  notes?: any
  labels?: any
  labelToNote?: any
}
interface DispatchProps {
  setLabelToNote?: (labelToNote: any) => void
  setActiveNotes?: (notes: any) => void
  filterNotesByLabel?: (notes: any) => void
}
const SearchBar: React.FC<StateProps & DispatchProps> = ({
  labelToNote,
  setLabelToNote,
  filterNotesByLabel,
  labels,
  notes,
}) => {
  const [search, setSearch] = useState<string>("")
  const { data } = UseGet("labeltonote/all")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    const filteredNotes = filterNotes(e.target.value)
    // filterNotesByLabel && filterNotesByLabel(filteredNotes)
  }

  useEffect(() => {
    if (data.length > 0) {
      setLabelToNote && setLabelToNote(data)
    }
  }, [data])
  const filterNotes = (searchQuery: string) => {
    const filteredLabels = labels.labels.filter((label: any) =>
      label.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const filteredLabelToNote = labelToNote.labelToNote.filter((labelToNoteItem: any) =>
      filteredLabels.some((label: any) => label.id === labelToNoteItem.labelId)
    )

    const filteredNotes = searchQuery
      ? notes.notes.active.filter((note: any) =>
          filteredLabelToNote.some((labelToNoteItem: any) => labelToNoteItem.noteId === note.id)
        )
      : notes.notes.active

    return filteredNotes
  }
  return (
    <SearchBarContainer>
      <Form>
        <InputContainer>
          <Input type="text" placeholder="Search..." value={search} onChange={handleSearch} />
        </InputContainer>
        <SearchButton>
          <svg
            focusable="false"
            height="24px"
            style={{
              padding: "8px",
              margin: "3px",
              color: "rgba(0, 0, 0, 0.54)",
            }}
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
            <path d="M0,0h24v24H0V0z" fill="none"></path>
          </svg>
        </SearchButton>
      </Form>
    </SearchBarContainer>
  )
}
const mapStateToProps = (state: any) => ({
  notes: state.notes,
  labels: state.labels,
  labelToNote: state.labelToNote,
})
const mapDispatchToProps = (dipatch: any) => ({
  setLabelToNote: (labelToNote: any) => dipatch(setLabelToNote(labelToNote)),
  filterNotesByLabel: (notes: any) => dipatch(filerNotesByLabel(notes)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
