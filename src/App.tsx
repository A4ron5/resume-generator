import * as React from "react"
import { Normalize } from "styled-normalize"
import { Field } from "./ui/molecules"
import { Container, GlobalStyles } from "./ui/templates"

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Normalize />
      <Container>
        <Field title="Title" />
      </Container>
    </>
  )
}
