import { Components, Theme } from '@mui/material'
import { white, black } from 'components/common/colors.styles'

const AppBar: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: {
      maxWidth: 1200,
      right: '50%',
      transform: 'translateX(50%)',
      background: white,
      boxShadow: 'unset',
      borderBottom: `1px solid ${black}`,
    },
  },
}

export default AppBar
