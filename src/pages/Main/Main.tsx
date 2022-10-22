import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h1" align="center" gutterBottom>
        Check out this amazing form!
      </Typography>
      <Link to="form">
        <Button variant="contained" size="large">
          Apply
        </Button>
      </Link>
    </Box>
  )
}
