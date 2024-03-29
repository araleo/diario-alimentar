import Typography from '@mui/material/Typography';

import { TITLE } from '../../constants/texts';

const Title = () => (
  <Typography
    variant='h1'
    color='primary'
    fontSize={60}
    fontWeight='bold'
    textAlign='center'
  >
    {TITLE}
  </Typography>
);

export default Title;
