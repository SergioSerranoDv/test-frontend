import React, { useState } from "react"
import { UpdateButton } from "../styles/components/Label"
import { Input } from "../styles/components/ModalLabel"
import { deleteLabelById, updateLabel } from "../services/label_s"
import { LabelI } from "../types/Label"
import { backendApiCall } from "../services/Api"
import { NewLabelContainer } from "../styles/components/ModalLabel"

interface LabelProps {
  label: LabelI
}
interface DispatchProps {
  deleteLabel: (id: number) => void
  updaLabelState: (label: LabelI) => void
}
export const Label: React.FC<LabelProps & DispatchProps> = ({
  label,
  deleteLabel,
  updaLabelState,
}) => {
  const [name, setName] = useState(label.name)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleUpdateLabel = async () => {
    try {
      const response = await updateLabel(backendApiCall, { name, id: label.id })
      if (response.status === "success") {
        console.log("Label updated")
        updaLabelState({
          id: label.id,
          name,
          createdAt: label.createdAt,
          updatedAt: label.updatedAt,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleDeleteLabel = async () => {
    try {
      const response = await deleteLabelById(backendApiCall, label.id)
      if (response.status === "success") {
        console.log("Label deleted")
        deleteLabel(label.id)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NewLabelContainer>
      <UpdateButton role="button" onClick={() => handleDeleteLabel()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          width="18px"
          viewBox="0 0 48 48"
          fill="#000000"
        >
          <path d="m12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z" />
          <path d="m0 0h48v48h-48z" fill="none" />
        </svg>
      </UpdateButton>
      <Input type="text" placeholder="Enter label name" value={name} onChange={handleInputChange} />
      <UpdateButton role="button" onClick={() => handleUpdateLabel()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          width="18px"
          viewBox="0 0 48 48"
          fill="#000000"
        >
          <path d="m6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c0.78-0.78 0.78-2.05 0-2.83l-4.67-4.67c-0.78-0.78-2.05-0.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" />
          <path d="m0 0h48v48h-48z" fill="none" />
        </svg>
      </UpdateButton>
    </NewLabelContainer>
  )
}
