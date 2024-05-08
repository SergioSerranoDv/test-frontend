import React, { useState } from "react"
import { SubMenu } from "./SubMenu"
import { backendApiCall } from "../services/Api"
import { ModalForm } from "./Modal"
import MenuLabels from "./MenuLabels"
import { deleteNote, updateNote } from "../services/notes_s"
import {
  Archive,
  NoteContainer,
  NoteContent,
  NoteFooter,
  NoteHeader,
  Options,
  Tag,
  Unarchive,
} from "../styles/components/Note"

interface NoteProps {
  labels: any
  id: number
  title: string
  content: string
  status: string
}
interface DispatchProps {
  addActiveNote: (note: any) => void
  addArchiveNote: (note: any) => void
  deleteActiveNote: (note: any) => void
  deleteArchiveNote: (note: any) => void
}
export const Note: React.FC<NoteProps & DispatchProps> = ({
  id,
  title,
  content,
  labels,
  status,
  addArchiveNote,
  addActiveNote,
  deleteActiveNote,
  deleteArchiveNote,
}) => {
  const [isOpenTheMenuLabels, setIsOpenTheMenuLabels] = useState(false)
  const [isOpenTheOptions, setIsOpenTheOptions] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const handleDeleteNote = async (id: number) => {
    try {
      const response = await deleteNote(backendApiCall, id)
      if (response.status === "success") {
        console.log("Note deleted")
        if (status === "active") {
          deleteActiveNote({ id, title, content, status: "active" })
        } else {
          deleteArchiveNote({ id, title, content, status: "archived" })
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleAddLabel = () => {
    console.log("Label added")
  }
  const handleUpdateNote = async (id: number, data: any) => {
    try {
      const response = await updateNote(backendApiCall, id, data)
      if (response.status === "success") {
        console.log("Note updated")
        if (data.status === "active") {
          addActiveNote({ id, title, content, status: "active" })
        } else {
          addArchiveNote({ id, title, content, status: "archived" })
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <NoteContainer>
        <NoteHeader role="button" onClick={() => setShowModal(true)}>
          {title}
        </NoteHeader>
        <NoteContent role="button" onClick={() => setShowModal(true)}>
          {content}
        </NoteContent>
        <NoteFooter>
          <Tag
            style={{ position: "relative" }}
            role="button"
            tabIndex={0}
            onClick={() => {
              console.log("clicked")
              setIsOpenTheMenuLabels(!isOpenTheMenuLabels)
            }}
          >
            <svg
              enableBackground="new 0 0 32 32"
              height="16px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="16px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="tag">
                <path
                  clipRule="evenodd"
                  d="M31.391,13.883l-5-8c-0.73-1.169-2.012-1.88-3.391-1.88H4   c-2.209,0-4,1.791-4,4v16c0,2.209,1.791,4,4,4h19c1.379,0,2.66-0.711,3.391-1.881l5-8C32.203,16.827,32.203,15.18,31.391,13.883z    M29.695,17.062l-5,8.002c-0.367,0.588-1.002,0.939-1.695,0.939H4c-1.103,0-2-0.898-2-2v-16c0-1.103,0.897-2,2-2h19   c0.693,0,1.328,0.352,1.695,0.939l5,8C30.098,15.587,30.098,16.419,29.695,17.062z"
                  fill="#333333"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M23,13.003c-1.658,0-3,1.343-3,3c0,1.657,1.342,3,3,3   c1.656,0,3-1.344,3-3C26,14.346,24.656,13.003,23,13.003z M23,18.004c-1.105,0-2-0.896-2-2c0-1.104,0.895-2,2-2   c1.104,0,2,0.896,2,2C25,17.107,24.104,18.004,23,18.004z"
                  fill="#333333"
                  fillRule="evenodd"
                />
              </g>
            </svg>
            {isOpenTheMenuLabels && <MenuLabels labels={labels} noteId={id} />}
          </Tag>
          {status === "active" ? (
            <Archive
              role="button"
              tabIndex={0}
              onClick={() => {
                handleUpdateNote(id, { title, content, status: "archived" })
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="#000"
              >
                <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z" />
              </svg>
            </Archive>
          ) : (
            <Unarchive
              role="button"
              tabIndex={0}
              onClick={() => {
                handleUpdateNote(id, { title, content, status: "active" })
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="#000"
              >
                <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5.5l4-4 4 4-1.41 1.41L13 13.33V17h-2v-3.67l-1.59 1.59L8 13.5z" />
              </svg>
            </Unarchive>
          )}
          <Options
            role="button"
            tabIndex={0}
            onClick={() => setIsOpenTheOptions(!isOpenTheOptions)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              width={16}
              xmlSpace="preserve"
              version="1.1"
              viewBox="0 0 18 18"
              enableBackground="new 0 0 18 18"
              fill="#000"
            >
              <path d="m9 5.5c1 0 1.8-0.8 1.8-1.8s-0.8-1.7-1.8-1.7-1.8 0.8-1.8 1.8 0.8 1.7 1.8 1.7zm0 1.7c-1 0-1.8 0.8-1.8 1.8s0.8 1.8 1.8 1.8 1.8-0.8 1.8-1.8-0.8-1.8-1.8-1.8zm0 5.3c-1 0-1.8 0.8-1.8 1.8s0.8 1.7 1.8 1.7 1.8-0.8 1.8-1.8-0.8-1.7-1.8-1.7z" />
            </svg>
            {isOpenTheOptions && (
              <SubMenu
                actions={{
                  deleteNote: () => handleDeleteNote(id),
                  addLabel: handleAddLabel,
                }}
              />
            )}
          </Options>
        </NoteFooter>
      </NoteContainer>
      {showModal && (
        <ModalForm
          showModal={showModal}
          setShowModal={setShowModal}
          info={{ id, title, content }}
        />
      )}
    </>
  )
}
