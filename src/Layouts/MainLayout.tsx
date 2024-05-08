import React, { PropsWithChildren } from "react"
import { Navbar } from "../components/Navbar"
export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
