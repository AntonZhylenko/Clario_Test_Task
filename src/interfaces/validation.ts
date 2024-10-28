export type ValidationStatus = 'error' | 'success' | null;

export type ValidationCriteria = {
    lengthStatus: ValidationStatus;
    caseStatus: ValidationStatus;
    digitStatus: ValidationStatus;
}