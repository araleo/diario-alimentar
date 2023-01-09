import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';

import { BUTTONS, ERRORS } from '../../constants/texts';
import useMeals from '../../hooks/use-meals';
import MealForm from '../MealForm/MealForm';
import MealsTable from '../MealsTable/MealsTable';
import FlexEndBox from '../UI/containers/FlexEndBox';

const Dashboard = () => {
  const { data: meals, error, isLoading } = useMeals();

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
      {isLoading ? (
        <LinearProgress color='primary' />
      ) : error ? (
        <Typography>{ERRORS.unexpected}</Typography>
      ) : (
        <MealsTable meals={meals || []} />
      )}
    </Box>
  );
};

export default Dashboard;
