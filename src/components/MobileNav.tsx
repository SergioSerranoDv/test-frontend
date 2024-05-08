import React from "react"
import SearchBar from "./SearchBar"
import {
  MobileNavigationContainer,
  MobileNavigationList,
  MobileNavigationItem,
} from "../styles/components/MobileNav"

interface MobileNavigationProps {
  isOPenMobileNav: boolean
}
export const MobileNav: React.FC<MobileNavigationProps> = ({ isOPenMobileNav }) => {
  return (
    <>
      <MobileNavigationContainer className={isOPenMobileNav ? "active" : ""}>
        <div>
          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(255,255,255)",
              padding: "1rem",
            }}
          >
            <SearchBar />
          </div>
        </div>
        <MobileNavigationList>
          <MobileNavigationItem>
            <a href="/">Inicio</a>
          </MobileNavigationItem>
        </MobileNavigationList>
      </MobileNavigationContainer>
    </>
  )
}
