import { Components, Theme } from '@mui/material'
import { purp, purpLight } from 'components/common/colors.styles'

const Chip: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: {
      background: purpLight,
      color: purp,
      borderRadius: 3,
      height: 'auto',
    },
    label: {
      padding: '2px 5px',
    },
  },
}
export default Chip
