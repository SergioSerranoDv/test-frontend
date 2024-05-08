import React, { useEffect } from "react"
import { connect } from "react-redux"
import { MainLayout } from "../Layouts/MainLayout"
import { BuildNote } from "../components/BuildNote"
import { Layout } from "../styles/components/Grid"
import { Note } from "../components/Note"
import { SideBar } from "../components/SideBar"
import { UseGet } from "../hook/UseGet"
import { NoteI } from "../types/Note"
import {
  addActiveNote,
  addArchiveNote,
  deleteActiveNote,
  deleteArchiveNote,
  setActiveNotes,
} from "../state/actions/noteActions"
import { Container } from "../styles/GlobalStyles"
import { setLabels } from "../state/actions/labelActions"
interface StateProps {
  notes: any
  labels: any
}
interface DispatchProps {
  setActiveNotes: (notes: any) => void
  setLabels: (labels: any) => void
  addActiveNote: (note: any) => void
  addArchiveNote: (note: any) => void
  deleteActiveNote: (note: any) => void
  deleteArchiveNote: (note: any) => void
}
const Home: React.FC<StateProps & DispatchProps> = ({
  notes,
  labels,
  setActiveNotes,
  setLabels,
  addActiveNote,
  addArchiveNote,
  deleteActiveNote,
  deleteArchiveNote,
}) => {
  const { data, error, isLoading } = UseGet("notes/all/active")
  const { data: labelsData } = UseGet("labels/all")

  useEffect(() => {
    if (data.length > 0) {
      setActiveNotes(data)
    }
    if (labelsData.length > 0) {
      setLabels(labelsData)
    }
  }, [data])

  return (
    <MainLayout>
      <Container>
        <SideBar />
        <div
          style={{
            width: "100%",
          }}
        >
          <BuildNote addActiveNote={addActiveNote} />
          <Layout>
            {!isLoading &&
              !error &&
              notes.notes.active.length > 0 &&
              notes.notes.active.map((note: NoteI) => (
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
      </Container>
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
    setActiveNotes: (notes: any) => dispatch(setActiveNotes(notes)),
    setLabels: (labels: any) => dispatch(setLabels(labels)),
    addActiveNote: (note: any) => dispatch(addActiveNote(note)),
    addArchiveNote: (note: any) => dispatch(addArchiveNote(note)),
    deleteActiveNote: (note: any) => dispatch(deleteActiveNote(note)),
    deleteArchiveNote: (note: any) => dispatch(deleteArchiveNote(note)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
