import styled from "styled-components"
export const NoteContainer = styled.div`
  position: relative;
  min-height: 60px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  margin: 16px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`
export const NoteHeader = styled.div`
  position: relative;
  min-height: 38px;
  cursor: default;
  font-weight: 500;
  font-size: 1rem;
  padding: 16px 16px 0 16px;
`
export const NoteContent = styled.div`
  min-height: 30px;
  cursor: default;
  color: rgb(32, 33, 36);
  padding: 12px 16px 12px 16px;
  word-wrap: break-word;
  white-space: pre-wrap;
`
export const NoteFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 4px 8px 16px;
`
export const Tag = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin: 0 4px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`
export const Options = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin: 0 4px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`
export const Unarchive = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin: 0 4px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`
export const Archive = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin: 0 4px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`
