import { useTheme } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';
import { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  paperProps?: PaperProps;
  style?: CSSProperties;
};

const OutlinedPaper = ({ children, paperProps, style }: Props) => {
  const theme = useTheme();
  const border = `1px solid ${theme.palette.primary.main}`;

  return (
    <Paper {...paperProps} sx={{ padding: '2rem', border, ...style }}>
      {children}
    </Paper>
  );
};

export default OutlinedPaper;
