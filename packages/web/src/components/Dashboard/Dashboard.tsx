import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

import { BUTTONS } from '../../constants/texts';
// import { useAppSelector } from '../../hooks/use-redux';
import { auth } from '../../services/firebase';
import MealForm from '../MealForm/MealForm';
import MealsTable from '../MealsTable/MealsTable';
import FlexEndBox from '../UI/containers/FlexEndBox';

const Dashboard = () => {
  const [showForm, setShowForm] = useState<boolean>(true);

  const toggleForm = () => {
    setShowForm(show => !show);
  };

  // eslint-disable-next-line no-console
  onAuthStateChanged(auth, user => console.log(user));

  return (
    <Box sx={{ width: '75%', minWidth: '600px', margin: 'auto' }}>
      {!showForm && (
        <FlexEndBox sx={{ marginBottom: '2rem' }}>
          <Button variant='contained' onClick={toggleForm}>
            {BUTTONS.new}
          </Button>
        </FlexEndBox>
      )}
      {showForm && <MealForm toggleForm={toggleForm} />}
      <MealsTable />
    </Box>
  );
};

export default Dashboard;
