import React from 'react';
import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/system';

interface ButtonProps {
  title: string;
  onClick: () => void;
  sx?: SxProps<Theme>;
}

/**
 * A MUI Button with styles applied.
 *
 * @param {string} title
 * @param {function} onClick
 * @param {SxProps<Theme>} sx - Optional styling properties.
 * 
 * @returns {JSX.Element} Styled MUI Button.
 */
const AppButton: React.FC<ButtonProps> = ({ title, onClick, sx, ...props }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        background: 'linear-gradient(90deg, #68C0F8 0%, #4A79FF 100%)',
        borderRadius: '50px',
        color: 'white',
        padding: '10px 30px',
        fontSize: '16px',
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          background: 'linear-gradient(90deg, #68C0F8 0%, #4A79FF 100%)',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
        ...sx,
      }}
      {...props}
    >
      {title}
    </Button>
  );
};

export default AppButton;
