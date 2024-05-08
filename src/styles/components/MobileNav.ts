import styled from "styled-components"

export const MobileNavigationContainer = styled.div`
  background-image: linear-gradient(96deg, #5e60e7 0%, #9c7af2 65%, #9c7af2 71.35%);
  color: #ffff;
  position: fixed;
  top: 0;
  backdrop-filter: blur(2px);
  bottom: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  right: 0;
  transition: transform 0.3s ease;
  transform: translate(-100%, 0);
  &.active {
    transform: translate(0, 0);
  }

  @media (max-width: 1020px) {
    width: 65%;
    top: 80px;
  }

  @media (min-width: 1020px) {
    display: none;
    box-shadow: none;
    border: none;
    transform: translate(0, 0);
    background: none;
    position: relative;
  }
`
export const MobileNavigationList = styled.ul`
  position: relative;
  display: block;
  list-style: none;
  padding-top: 1rem;
  padding: 0.875rem 2rem;
`

export const MobileNavigationItem = styled.li`
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  margin: 1rem 0;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #ffff;
  }
  > a {
    position: relative;
    text-decoration: none;
    color: #ffff;
  }
`
