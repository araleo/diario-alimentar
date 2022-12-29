import Box from '@mui/material/Box';
import AppForm from '../AppForm/AppForm';
import MealsTable from '../MealsTable/MealsTable';

const Dashboard = () => (
  <>
    <h2>Dashboard</h2>
    <Box
      sx={{
        width: '70%',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <AppForm />
    </Box>

    <Box sx={{ width: '75%', margin: 'auto' }}>
      <MealsTable />
    </Box>
  </>
);

export default Dashboard;
