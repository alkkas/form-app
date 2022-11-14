import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { purp } from 'components/common/colors.styles'
import Steps from './components/Steps'

interface formDataType {
  [i: string]: string | number
}
export const formDataContext = React.createContext({})
export default function Form() {
  const [step, setStep] = useState(0)

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        sx={{
          width: 550,
          maxWidth: 550,
          padding: 5,
          borderRadius: 3,
          border: `1px solid ${purp}`,
        }}
      >
        <Steps step={step} setStep={setStep} />
      </Box>
    </Box>
  )
}
