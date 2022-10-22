import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Chip } from '@mui/material'
import { black } from 'components/common/colors.styles'

export default function Header() {
  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            sx={{ marginRight: 2, color: black }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" sx={{ mr: 1 }}>
            React Form
          </Typography>
          <Chip label="in progress" />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
