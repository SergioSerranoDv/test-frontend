import styled from "styled-components"

export const NewNoteSection = styled.div`
  position: relative;
  width: 600px;
  margin: 32px auto 16px auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`
export const NewNoteContainer = styled.div`
  position: relative;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 2px 6px 1px rgba(60, 64, 67, 0.149);
`

export const SendButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 12px;
  border: none;
  background-color: rgb(66, 133, 244);
  trnasition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgb(26, 97, 186);
  }
`
export const LabelContainer = styled.div`
  position: absolute;
  width: 100%;
  pointer-events: none;
  box-sizing: border-box;
  padding: 12px 16px 12px 16px;
  outline: none;
`
export const Content = styled.div`
  padding: 12px 16px 12px 16px;
  outline: none;
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  min-height: 30px;
  cursor: text;
`
export const ActionsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px 8px 16px;
`
