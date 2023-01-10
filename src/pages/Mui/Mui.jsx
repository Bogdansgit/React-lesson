import { ThemeProvider } from '@mui/material/styles';
import BasicCard from '../../MuiComponents/BasicCard';
import BasicPagination from '../../MuiComponents/BasicPagination';
import BasicStack from '../../MuiComponents/BasicStack';
import ButtonAppBar from '../../MuiComponents/ButtonAppBar';
import StandardImageList from '../../MuiComponents/StandardImageList';
import theme  from '../theme';


function Mui() {

	return (
		<ThemeProvider theme={theme}>
			<ButtonAppBar />
			<StandardImageList />
			<BasicStack />
			<BasicCard />
			<BasicPagination />
		</ThemeProvider>
	)
}

export default Mui;