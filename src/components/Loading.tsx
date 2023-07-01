import { ActivityIndicator } from "react-native"
import styled from "styled-components/native"

export const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#A4A4A4" />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`