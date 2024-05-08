import React, { useEffect, useState } from "react"
import { UseGet } from "../../hook/UseGet"
import { connect } from "react-redux"
import { Label } from "../Label"
import {
  CloseButton,
  CheckButton,
  Input,
  NewLabelContainer,
} from "../../styles/components/ModalLabel"
import { backendApiCall } from "../../services/Api"
import { createNewLabel } from "../../services/label_s"
import { addLabel, deleteLabel, setLabels, updateLabel } from "../../state/actions/labelActions"
import { LabelI } from "../../types/Label"
import { ModalContainer, ModalWrapper, Layer, ModalButton } from "../../styles/components/Modal"

interface ModalLabelProps {
  addLabel: (label: any) => void
  deleteLabel: (id: number) => void
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  labels?: any
  setLabels?: (labels: LabelI[]) => void
  updateLabel: (label: LabelI) => void
}

const ModalLabel: React.FC<ModalLabelProps> = ({
  addLabel,
  deleteLabel,
  setShowModal,
  labels,
  setLabels,
  updateLabel,
}) => {
  const [label, setLabel] = useState("")
  const { data, error, isLoading } = UseGet("labels/all")

  useEffect(() => {
    if (data.length > 0) {
      setLabels && setLabels(data)
    }
  }, [data])
  const handleChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value)
  }
  const handleAddLabel = async (label: any) => {
    try {
      const response = await createNewLabel(backendApiCall, label)
      if (response.status === "success") {
        console.log("Label added")
        addLabel({
          id: response.data.id,
          name: response.data.name,
        })
        setLabel("")
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
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
          <div>Edit labels</div>
          <NewLabelContainer>
            <CloseButton role="button" aria-label="cancel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                width="18px"
                viewBox="0 0 18 18"
                fill="#000"
              >
                <path d="m0 0h18v18h-18zh18v18h-18z" fill="none" />
                <path d="m14.53 4.53l-1.06-1.06-4.47 4.47-4.47-4.47-1.06 1.06 4.47 4.47-4.47 4.47 1.06 1.06 4.47-4.47 4.47 4.47 1.06-1.06-4.47-4.47z" />
              </svg>
            </CloseButton>
            <Input
              type="text"
              placeholder="Create new label"
              value={label}
              onChange={handleChangeLabel}
            />

            <CheckButton
              role="button"
              aria-label="check"
              onClick={() => {
                handleAddLabel({ name: label })
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                width="18px"
                viewBox="0 0 18 18"
                fill="#000000"
              >
                <path d="m0 0h18v18h-18z" fill="none" />
                <path d="m6.61 11.89l-3.11-3.11-1.06 1.06 4.17 4.16 8.95-8.95-1.06-1.05z" />
              </svg>
            </CheckButton>
          </NewLabelContainer>
          <>
            {!isLoading &&
              !error &&
              labels.labels &&
              labels.labels.length > 0 &&
              labels.labels.map((label: any, index: number) => (
                <Label
                  key={index}
                  label={label}
                  deleteLabel={deleteLabel}
                  updaLabelState={updateLabel}
                />
              ))}
          </>
        </ModalWrapper>
      </ModalContainer>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    labels: state.labels,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    setLabels: (labels: any) => dispatch(setLabels(labels)),
    addLabel: (label: any) => dispatch(addLabel(label)),
    deleteLabel: (label: any) => dispatch(deleteLabel(label)),
    updateLabel: (label: any) => dispatch(updateLabel(label)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalLabel)
