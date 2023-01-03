import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';

import { BUTTONS } from '../../constants/texts';
import AppForm from '../AppForm/AppForm';
import MealsTable from '../MealsTable/MealsTable';
import FlexEndBox from '../UI/containers/FlexEndBox';

const Dashboard = () => {
  const [showForm, setShowForm] = useState<boolean>(true);

  const toggleForm = () => {
    setShowForm(show => !show);
  };

  return (
    <Box sx={{ width: '75%', minWidth: '600px', margin: 'auto' }}>
      {!showForm && (
        <FlexEndBox sx={{ marginBottom: '2rem' }}>
          <Button variant='contained' onClick={toggleForm}>
            {BUTTONS.new}
          </Button>
        </FlexEndBox>
      )}
      {showForm && <AppForm toggleForm={toggleForm} />}
      <MealsTable />
    </Box>
  );
};

export default Dashboard;
