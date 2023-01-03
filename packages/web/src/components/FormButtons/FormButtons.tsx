import { BoxProps } from '@mui/material';
import ResetButton from '../ResetButton/ResetButton';
import SubmitButton from '../SubmitButton/SubmitButton';
import SpaceAroundBox from '../UI/containers/SpaceAroundBox';

type Props = {
  resetCallback: () => void;
  containerProps?: BoxProps;
};

const FormButtons = ({ resetCallback, containerProps }: Props) => (
  <SpaceAroundBox
    sx={{ width: '50%', margin: '2rem auto' }}
    {...containerProps}
  >
    <ResetButton callback={resetCallback} />
    <SubmitButton />
  </SpaceAroundBox>
);

export default FormButtons;
