import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  icon: 'close' | 'delete';
  buttonProps?: IconButtonProps;
};

const AppIconButton = ({ icon, buttonProps }: Props) => {
  const getIcon = () => {
    if (icon === 'close') {
      return <CloseIcon />;
    }
    if (icon === 'delete') {
      return <DeleteIcon />;
    }
    return <CloseIcon />;
  };

  return <IconButton {...buttonProps}>{getIcon()}</IconButton>;
};

export default AppIconButton;
