import React, { useEffect } from "react"
import { connect } from "react-redux"
import { MainLayout } from "../Layouts/MainLayout"
import { Layout } from "../styles/components/Grid"
import { Note } from "../components/Note"
import { SideBar } from "../components/SideBar"
import {
  addActiveNote,
  addArchiveNote,
  deleteActiveNote,
  deleteArchiveNote,
  setArchiveNotes,
} from "../state/actions/noteActions"
import { UseGet } from "../hook/UseGet"
import { NoteI } from "../types/Note"

interface StateProps {
  notes: any
  labels: any
}
interface DispatchProps {
  setArchiveNotes: (notes: any) => void
  addActiveNote: (note: any) => void
  addArchiveNote: (note: any) => void
}

const Archive: React.FC<StateProps & DispatchProps> = ({
  notes,
  labels,
  setArchiveNotes,
  addActiveNote,
  addArchiveNote,
}) => {
  const { data, error, isLoading } = UseGet("notes/all/archived")
  useEffect(() => {
    if (data.length > 0) {
      setArchiveNotes(data)
    }
  }, [data])

  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBar />
        <div
          style={{
            width: "100%",
          }}
        >
          <Layout>
            {!isLoading &&
              !error &&
              notes.notes.archived.length > 0 &&
              notes.notes.archived.map((note: NoteI) => (
                <Note
                  labels={labels.labels}
                  addActiveNote={addActiveNote}
                  addArchiveNote={addArchiveNote}
                  deleteActiveNote={deleteActiveNote}
                  deleteArchiveNote={deleteArchiveNote}
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  content={note.content}
                  status={note.status}
                />
              ))}
          </Layout>
        </div>
      </div>
    </MainLayout>
  )
}
const mapStateToProps = (state: any) => {
  return {
    notes: state.notes,
    labels: state.labels,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    setArchiveNotes: (notes: any) => dispatch(setArchiveNotes(notes)),
    addActiveNote: (note: any) => dispatch(addActiveNote(note)),
    addArchiveNote: (note: any) => dispatch(addArchiveNote(note)),
    deleteActiveNote: (note: any) => dispatch(deleteActiveNote(note)),
    deleteArchiveNote: (note: any) => dispatch(deleteArchiveNote(note)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archive)
