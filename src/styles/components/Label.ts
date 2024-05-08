import styled from "styled-components"

export const LabelContainer = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  margin-top: 1rem;
`
export const UpdateButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f1f1f1;
  }
`
