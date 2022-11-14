import React, { Dispatch } from 'react'
import Box from '@mui/material/Box'
import { Stepper, StepButton, Step } from '@mui/material'
import AccountInfo from 'pages/Form/components/AccountInfo'
import ContactInfo from 'pages/Form/components/ContactInfo'
import PersonalInfo from 'pages/Form/components/PersonalInfo'
import Button from '@mui/material/Button'
import { Formik, Form } from 'formik'
import { formValuesValidator, initialValues } from 'pages/Form/FromMisc'
import Typography from '@mui/material/Typography'

const formInitialValues = {
  ...initialValues.accountInfo,
  ...initialValues.contactInfo,
  ...initialValues.personalInfo,
}

type stepProps = { step: number; setStep: Dispatch<number> }

const steps = [<AccountInfo />, <ContactInfo />, <PersonalInfo />]
const stepTitles = ['Account info', 'Contact info', 'personal info']
export default function Steps({ step, setStep }: stepProps) {
  function goNext() {
    setStep(step + 1 < steps.length ? step + 1 : step)
  }

  function goBack() {
    setStep(step - 1 >= 0 ? step - 1 : step)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={step}>
        {steps.map((Component, index) => (
          <Step key={index + 1}>
            <StepButton onClick={() => setStep(index)}></StepButton>
          </Step>
        ))}
      </Stepper>
      <Formik
        initialValues={formInitialValues}
        onSubmit={() => {
          if (step === steps.length - 1) {
            console.log('send')
          } else {
            goNext()
          }
        }}
        validationSchema={formValuesValidator}
      >
        <Form>
          <Typography sx={{ m: '20px 0 10px' }} variant="h4">
            {stepTitles[step]}
          </Typography>
          {steps[step]}
          <Button onClick={goBack} disabled={step === 0}>
            prev
          </Button>
          {step === steps.length - 1 ? (
            <Button variant="contained">Send</Button>
          ) : (
            <Button type="submit">next</Button>
          )}
        </Form>
      </Formik>
    </Box>
  )
}
