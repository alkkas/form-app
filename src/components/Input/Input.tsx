import React from 'react'
import { useField, FieldAttributes } from 'formik'
import { TextField } from '@mui/material'
type FormInputProps = { label: string }

const FormInput = ({
  label,
  ...props
}: FieldAttributes<any> & FormInputProps) => {
  const [field, meta] = useField(props)

  return (
    <>
      <TextField
        {...field}
        {...props}
        error={meta.touched && meta.error}
        helperText={meta.touched && meta.error}
        sx={{ width: '100%', m: '10px 0' }}
      />
    </>
  )
}

export default FormInput
