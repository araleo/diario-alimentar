import { useTheme } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  paperProps?: PaperProps;
};

const OutlinedPaper = ({ children, paperProps }: Props) => {
  const theme = useTheme();
  const border = `1px solid ${theme.palette.primary.main}`;

  return (
    <Paper sx={{ padding: '1rem', border }} {...paperProps}>
      {children}
    </Paper>
  );
};

export default OutlinedPaper;
