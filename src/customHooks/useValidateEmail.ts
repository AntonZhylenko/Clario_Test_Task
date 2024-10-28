import { useState, useEffect, useCallback } from 'react';
import validateEmail from '../utils/validators/validateEmail';
import { ValidationStatus } from '../interfaces/validation';

/**
 * Custom hook for validating email.
 *
 * @param {string} email - The email string to be validated.
 * @returns Returns validation status and a function to validate email on submit.
 *
 * @example
 * const [validationStatus, validateSubmit] = useValidateEmail(email);
 * 
 * // validationStatus contains the current validation result.
 * // A validation criterea is null by default, 'success' if passed, 'error' ONLY after unsuccessfully submited.
 * // validateSubmit function triggers validation, returns bool if email is valid.
 */
const useValidateEmail = (email: string): [ValidationStatus, (email: string) => boolean] => {
    const [validationStatus, setValidationStatus] = useState<ValidationStatus>(null);

    useEffect(() => {
        setValidationStatus(validateEmail(email) ? 'success' : null);
    }, [email]);

    const validateSubmit = useCallback((email: string):boolean => {
        setValidationStatus(validateEmail(email) ? 'success' : 'error');
        return validateEmail(email);
    }, []);

    return [validationStatus, validateSubmit];
};

export default useValidateEmail;
