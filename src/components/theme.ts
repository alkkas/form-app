import { createTheme, responsiveFontSizes } from '@mui/material'
import MuiButton from './Input/InputTheme'
import typography from './typography'
import MuiContainer from './Container/Container'
import MuiAppBar from './AppBar/AppBar'
import MuiChip from './Chip/Chip'
const theme = createTheme({
  components: {
    MuiButton,
    MuiContainer,
    MuiAppBar,
    MuiChip,
  },
  typography,
})

export default responsiveFontSizes(theme)
