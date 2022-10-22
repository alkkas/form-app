import { Components, Theme } from '@mui/material'
import { purp, white } from 'components/common/colors.styles'

const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.variant === 'contained' && {
        backgroundColor: purp,
        color: white,
        '&:hover': {
          backgroundColor: purp,
        },
      }),
      padding: '16px 55px',
      fontWeight: 400,
      fontSize: 16,
      borderRadius: 8,
    }),
  },
}

export default MuiButton
