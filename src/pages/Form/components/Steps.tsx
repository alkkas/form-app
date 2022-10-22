import React from 'react'
import Box from '@mui/material/Box'
import { Stepper, StepButton, Step } from '@mui/material'
import { purp } from 'components/common/colors.styles'
type stepProps = { step: number }
const steps = [1, 2, 3]
export default function Steps({ step }: stepProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={step}>
        {steps.map((label) => (
          <Step key={label}>
            <StepButton></StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
