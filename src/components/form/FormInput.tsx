import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ValidationStatus } from '../../interfaces/validation';
import { inputErrorStyles, inputStyles, inputSuccessStyles } from '../../styles/InputStyles';

type FormInputProps = TextFieldProps & {
    validationStatus?: ValidationStatus;
}

const getValidatedInputStyles = (validationStatus?: ValidationStatus) => {
    switch (validationStatus) {
        case 'success':
            return inputSuccessStyles;
        case 'error':
            return inputErrorStyles;
        default:
            return {};
    }
};

/**
 * A styled MUI TextField.
 * 
 * @prop {validationStatus} - 'error' | 'success' | null | undefined;
 * 
 * if validationStatus passed, may change colors based on the status;
 */
const FormInput: React.FC<FormInputProps> = ({validationStatus, ...props }) => {

  return (
    <TextField
    fullWidth
    color='error'
      slotProps={{
        input: {
          sx: {
            ...inputStyles,
            ...getValidatedInputStyles(validationStatus),
        },
      }}}
      { ...props }
    />
  );
};

export default FormInput;
