import React, { useState } from "react"
import { Burger, LogoContainer, Header } from "../styles/components/Navbar"
import logo from "../assets/document.svg"
import SearchBar from "./SearchBar"
import { MobileNav } from "./MobileNav"
import { Container } from "../styles/components/SearchBar"

export const Navbar = () => {
  const [isOPenMobileNav, setIsOpenMobileNav] = useState<boolean>(false)
  return (
    <Header>
      <LogoContainer>
        <div>
          <img width={40} height={40} src={logo} alt="Keay Notes 2024" />
        </div>
        <span>
          <strong>Keay Notes</strong>
        </span>
      </LogoContainer>
      <Container>
        <SearchBar />
      </Container>
      <Burger role="button" onClick={() => setIsOpenMobileNav(!isOPenMobileNav)}>
        <svg
          width={24}
          height={24}
          style={{
            color: "rgb(95, 99, 104)",
          }}
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </Burger>
      <MobileNav isOPenMobileNav={isOPenMobileNav} />
    </Header>
  )
}
