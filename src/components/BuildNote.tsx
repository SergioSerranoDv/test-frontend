import React, { useState, useEffect, useRef } from "react"
import { backendApiCall } from "../services/Api"
import { createNewNote } from "../services/notes_s"
import {
  ActionsContainer,
  Content,
  SendButton,
  NewNoteSection,
  NewNoteContainer,
  LabelContainer,
} from "../styles/components/BuildNote"

interface DispatchProps {
  addActiveNote: (note: any) => void
}

export const BuildNote: React.FC<DispatchProps> = ({ addActiveNote }) => {
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const [showTitle, setShowTitle] = useState(false)
  const newNoteContainerRef = useRef<HTMLDivElement>(null)
  const handleTextChange = (event: any) => {
    setText(event.target.textContent)
  }
  const handleTitleChange = (event: any) => {
    setTitle(event.target.textContent)
  }
  const clearContent = () => {
    const title = document.querySelector(".Title")
    const content = document.querySelector(".Content")
    if (title) title.textContent = ""
    if (content) content.textContent = ""
    setTitle("")
    setText("")
    setShowTitle(false)
  }
  const handleClickOutside = (event: any) => {
    if (newNoteContainerRef.current && !newNoteContainerRef.current.contains(event.target)) {
      clearContent()
    }
  }
  const handleSendNote = async () => {
    try {
      const response = await createNewNote(backendApiCall, { title, content: text })
      if (response.status === "success") {
        clearContent()
        addActiveNote({
          id: response.data.id,
          title: response.data.title,
          content: response.data.content,
          status: "active",
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  return (
    <NewNoteSection>
      <NewNoteContainer ref={newNoteContainerRef}>
        {showTitle ? (
          <>
            <LabelContainer>{title.length === 0 && <span>Title</span>}</LabelContainer>
            <Content
              className="Title"
              contentEditable="true"
              aria-multiline="true"
              spellCheck="true"
              tabIndex={0}
              role="textbox"
              aria-label="Title"
              onInput={handleTitleChange}
            ></Content>
          </>
        ) : null}
        <LabelContainer>{text.length === 0 ? <span>Take a note...</span> : null}</LabelContainer>
        <Content
          className="Content"
          contentEditable="true"
          aria-multiline="true"
          spellCheck="true"
          tabIndex={0}
          role="textbox"
          aria-label="take a note"
          aria-placeholder="take a note"
          onInput={handleTextChange}
          onFocus={() => setShowTitle(true)}
        ></Content>
        {showTitle ? (
          <ActionsContainer>
            <SendButton onClick={() => handleSendNote()}>
              <svg
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
              >
                <path
                  d="m21.5 11.1-17.9-9c-.9-.4-1.9.4-1.5 1.3l2.5 6.7L16 12 4.6 13.9l-2.5 6.7c-.3.9.6 1.7 1.5 1.2l17.9-9c.7-.3.7-1.3 0-1.7z"
                  fill="#ffffff"
                  className="fill-000000"
                ></path>
              </svg>
            </SendButton>
          </ActionsContainer>
        ) : null}
      </NewNoteContainer>
    </NewNoteSection>
  )
}
