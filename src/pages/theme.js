import { createTheme } from '@mui/material';
import { deepPurple, purple, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        main: deepPurple[200],
        primary: purple,
        secondary: red,
    },
});

export default theme;