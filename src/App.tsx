import Header from 'components/Header/Header'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from 'routes'
import Container from '@mui/material/Container'

function App() {
  return (
    <Container>
      <Header />
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
