import styled from "styled-components"

export const Header = styled.header`
  position: sticky;
  top: 0;
  height: 4em;
  background: rgba(255, 255, 255);
  border-bottom: 1px solid rgba(211, 211, 211);
  padding: 8px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`
export const Burger = styled.div`
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
export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`
export const Navbar = styled.nav``
