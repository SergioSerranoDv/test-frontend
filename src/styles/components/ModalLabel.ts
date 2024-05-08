import styled from "styled-components"
export const NewLabelContainer = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  margin-top: 1rem;
`
export const CloseButton = styled.div`
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
export const CheckButton = styled.div`
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
export const Input = styled.input`
  flex: 1 1 auto;
  font-size: 14px;
  font-weight: 500;
  margin: 0 15px;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #d9d9d9;
  color: #3c4043;
  height: 25px;
  outline: none;
  padding: 0;
`
