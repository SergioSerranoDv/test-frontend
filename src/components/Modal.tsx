import React, { useState } from "react"
import { ModalContainer, ModalWrapper, Layer, ModalButton } from "../styles/components/Modal"
import { ActionsContainer, Content, SendButton } from "../styles/components/BuildNote"
import { backendApiCall } from "../services/Api"
import { updateNote } from "../services/notes_s"
interface ModalFormProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  info: {
    id: number
    title: string
    content: string
  }
}

export const ModalForm: React.FC<ModalFormProps> = ({ setShowModal, info }) => {
  const [title, setTitle] = useState(info.title)
  const [content, setContent] = useState(info.content)

  const handleTitleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    setTitle(event.target.textContent || info.title)
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    setContent(event.target.textContent || info.content)
  }
  const handleUpdateNote = async (id: number, data: any) => {
    try {
      const response = await updateNote(backendApiCall, id, data)
      if (response.status === "success") {
        console.log("Note updated")
        setShowModal(false)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Layer></Layer>
      <ModalContainer>
        <ModalWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <ModalButton onClick={() => setShowModal(false)}>X</ModalButton>
          </div>
          <Content
            contentEditable
            aria-multiline
            spellCheck
            tabIndex={0}
            role="textbox"
            aria-label="Title"
            onInput={handleTitleChange}
          >
            {info.title}
          </Content>
          <Content
            contentEditable
            aria-multiline
            spellCheck
            tabIndex={0}
            role="textbox"
            aria-label="content"
            onInput={handleContentChange}
          >
            {info.content}
          </Content>
          <ActionsContainer>
            <SendButton
              onClick={() =>
                handleUpdateNote(info.id, {
                  title,
                  content,
                })
              }
            >
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
        </ModalWrapper>
      </ModalContainer>
    </>
  )
}
