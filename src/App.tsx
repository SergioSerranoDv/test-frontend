import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Archive from "./pages/archive"
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
        </>
      </Routes>
    </BrowserRouter>
  )
}
