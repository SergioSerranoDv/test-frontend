import styled from "styled-components"

export const Layer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`
export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const ModalWrapper = styled.div`
  display: block;
  align-items: center;
  gap: 1rem;
  width: 532px;
  border-radius: 15px;
  padding: 2rem;
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
  @media (max-width: 600px) {
    width: 300px;
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    width: 400px;
  }
`
export const ModalButton = styled.button`
  text-align: right;
  padding: 0.2rem 0.4rem;
  border: none;
  border-radius: 0.25rem;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    background-color: #f1f1f1;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  pad
  max-width: 500px;
`

export const Input = styled.input`
  display: block;
  width: -webkit-fill-available;
  padding: 0.8rem 2.2rem;
  border: 1px solid #ccc;
  border-radius: 9px;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: rgb(140, 187, 237);
  }
`
export const WrapperInput = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;
`
export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-align: left;
  font-weight: 500;
  color: #333;
`

export const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 9px;
  background-color: #6873ee;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7983ff;
  }
`
