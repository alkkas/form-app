import { Components, Theme } from '@mui/material'

const Container: Components<Theme>['MuiContainer'] = {
  styleOverrides: {
    root: {
      padding: '0 15px',
      maxWidth: 1200,
    },
  },
}

export default Container
