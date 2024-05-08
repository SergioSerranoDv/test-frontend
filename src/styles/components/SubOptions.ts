import styled from "styled-components"
export const Menu = styled.div`
  position: absolute;
  top: -80px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 1px rgba(60, 64, 67, 0.15);
  border-radius: 4px;
  padding: 6px 0;
  outline: none;
  font-size: 13px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`
export const MenuItem = styled.div`
  padding: 5px 10px 5px 17px;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`
export const Item = styled.div`
  border: 1px solid transparent;
  position: relative;
  cursor: pointer;
  color: #333;
  white-space: nowrap;
  margin: 0;
  list-style: none;
`
export const CheckBox = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 18px;
  height: 18px;
  opacity: 0.54;
`
