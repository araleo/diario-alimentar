/* eslint-disable no-console */
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';

import { BUTTONS } from '../../constants/texts';
import useMeals from '../../hooks/use-meals';
import MealForm from '../MealForm/MealForm';
import MealsTable from '../MealsTable/MealsTable';
import FlexEndBox from '../UI/containers/FlexEndBox';

const Dashboard = () => {
  const { data, error, isLoading } = useMeals();

  console.log(data);
  console.log(error);
  console.log(isLoading);

  const [showForm, setShowForm] = useState<boolean>(true);

  const toggleForm = () => {
    setShowForm(show => !show);
  };

  return (
    <Box sx={{ width: '75%', minWidth: '600px', margin: 'auto' }}>
      {!showForm && (
        <FlexEndBox sx={{ marginBottom: '2rem' }}>
          <Button variant='contained' onClick={toggleForm}>
            {BUTTONS.newMeal}
          </Button>
        </FlexEndBox>
      )}
      {showForm && (
        <>
          <MealForm toggleForm={toggleForm} />
          <Divider sx={{ margin: '2rem 0' }} />
        </>
      )}
      <MealsTable />
    </Box>
  );
};

export default Dashboard;
