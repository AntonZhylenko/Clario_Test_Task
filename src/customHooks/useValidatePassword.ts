import { useState, useEffect, useCallback } from 'react';
import { validateCase, validateDigit, validateLength } from '../utils/validators/validatePassword';
import { ValidationCriteria } from '../interfaces/validation';

/**
 * Custom hook for validating password based on length, case, and digit criteria.
 *
 * @param {string} password - The password string to be validated.
 * @returns Returns ValidationStatus object and a function to validate password on submit.
 *
 * @example
 * const [validationStatus, validateSubmit] = useValidatePassword(password);
 * 
 * // validationStatus contains the current validation results based on criteria.
 * // A validation criterea is null by default, 'success' if passed, 'error' ONLY after unsuccessfully submited.
 * // validateSubmit function triggers validation, returns bool if all criteria passed and updates validationStatus.
 */
const useValidatePassword = (password: string): [ValidationCriteria, (password: string) => boolean] => {
    const [validationCriteria, setValidationStatus] = useState<ValidationCriteria>({
        lengthStatus: null,
        caseStatus: null,
        digitStatus: null,
    });

    useEffect(() => {
        setValidationStatus({
            lengthStatus: validateLength(password) ? 'success' : null,
            caseStatus: validateCase(password) ? 'success' : null,
            digitStatus: validateDigit(password) ? 'success' : null,
        });
    }, [password]);

    const validateSubmit = useCallback((password: string):boolean => {
        setValidationStatus({
            lengthStatus: validateLength(password) ? 'success' : 'error',
            caseStatus: validateCase(password) ? 'success' : 'error',
            digitStatus: validateDigit(password) ? 'success' : 'error',
        });
        return validateLength(password) && validateCase(password) && validateDigit(password);
    }, []);

    return [validationCriteria, validateSubmit];
};

export default useValidatePassword;
