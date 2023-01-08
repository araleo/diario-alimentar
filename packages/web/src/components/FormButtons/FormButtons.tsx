import { BoxProps } from '@mui/material';
import ResetButton from '../ResetButton/ResetButton';
import SubmitButton from '../SubmitButton/SubmitButton';
import SpaceAroundBox from '../UI/containers/SpaceAroundBox';

type Props = {
  resetCallback: () => void;
  containerProps?: BoxProps;
  disabled?: boolean;
};

const FormButtons = ({ resetCallback, containerProps, disabled }: Props) => (
  <SpaceAroundBox
    sx={{ width: '50%', margin: '2rem auto' }}
    {...containerProps}
  >
    <ResetButton disabled={disabled} callback={resetCallback} />
    <SubmitButton disabled={disabled} />
  </SpaceAroundBox>
);

export default FormButtons;
