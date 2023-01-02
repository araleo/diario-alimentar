import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  icon: 'close' | 'delete';
  buttonProps?: IconButtonProps;
};

const AppIconButton = ({ icon, buttonProps }: Props) => {
  const getIcon = () => {
    if (icon === 'close') {
      return <CloseIcon />;
    }
    return <CloseIcon />;
  };

  return <IconButton {...buttonProps}>{getIcon()}</IconButton>;
};

export default AppIconButton;
