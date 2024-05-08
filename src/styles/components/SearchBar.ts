import styled from "styled-components"
export const Container = styled.div`
  position: relative;
  @media (max-width: 600px) {
    display: none;
  }
`
export const SearchBarContainer = styled.div`
  position: relative;
  height: 48px;
  width: 720px;
  @media (max-width: 600px) {
    width: 100%;
  }
`
export const Form = styled.form`
  position: relative;
  background-color: rgba(241, 243, 244);
  border-radius: 8px;
  @media (max-width: 600px) {
    width: 100%;
  }
`
export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  height: 46px;
  width: 100%;
  border-sizing: border-box;
`
export const InputContainer = styled.div`
  height: 46px;
  padding: 0;
  margin-left: 56px;
  margin-right: 49px;
  overflow: hidden;
`
export const SearchButton = styled.button`
  position: absolute;
  float: left;
  border: none;
  cursor: pointer;
  padding: 0 5px;
  outline: none;
  top: 0;
  line-height: 0;
  border-radius: 8px;
`
