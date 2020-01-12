import * as React from "react"
import styled from "styled-components"
import { FieldLine, FieldTitle } from "../atoms"

type FieldType = {
  title: string
}

const FieldWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 150px;
`

export const Field = (props: FieldType) => {
  const { title } = props
  return (
    <FieldWrapper>
      <FieldTitle htmlFor={title}>{title}</FieldTitle>
      <FieldLine id={title} />
    </FieldWrapper>
  )
}
