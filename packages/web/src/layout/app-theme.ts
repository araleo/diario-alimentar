import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation';

const theme = createTheme({
  palette: {
    primary: {
      main: '#62368a',
    },
    secondary: {
      main: '#5da939',
    },
  },
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});

export default theme;
