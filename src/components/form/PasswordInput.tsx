import React, { useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { inputErrorStyles, inputStyles } from '../../styles/InputStyles';
import { ValidationCriteria } from '../../interfaces/validation';

type PasswordInputProps = TextFieldProps & {
    validationCriteria: ValidationCriteria;
}

const getValidatedInputStyles = (validationCriteria: ValidationCriteria) => {
    if (Object.values(validationCriteria).some((status) => status === 'error')) { // all criteria are 'error'
        return inputErrorStyles;
    } else {
        return {};
    }
};

/**
 * A styled MUI TextField with "show/hide" functionality.
 * 
 * @prop {validationCriteria} - 'error' | 'success' | null;
 * 
 * if validationCriteria passed, may change colors based on the status;
 */
const PasswordInput: React.FC<PasswordInputProps> = ({validationCriteria, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      fullWidth
      type={showPassword ? 'text' : 'password'}
      slotProps={{
        input: {
        endAdornment: (
            <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </InputAdornment>
        ),
        sx: {
            ...inputStyles,
            ...getValidatedInputStyles(validationCriteria)
        },
      }}}
      { ...props }
    />
  );
};

export default PasswordInput;
