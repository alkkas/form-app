import { createBrowserRouter } from 'react-router-dom'
import Main from 'pages/Main/Main'
import Form from 'pages/Form/Form'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },

  {
    path: 'form',
    element: <Form />,
  },
])

export default router
