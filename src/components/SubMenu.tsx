import React from "react"
import { Item, MenuItem, Menu } from "../styles/components/SubOptions"

interface SubMenuProps {
  actions: {
    deleteNote: () => void
    addLabel: () => void
  }
}
export const SubMenu: React.FC<SubMenuProps> = ({ actions }) => {
  return (
    <>
      <Menu role="menu">
        <MenuItem role="menuItem">
          <Item role="button" tabIndex={0} onClick={() => actions.deleteNote()}>
            Delete Note
          </Item>
        </MenuItem>
      </Menu>
    </>
  )
}
