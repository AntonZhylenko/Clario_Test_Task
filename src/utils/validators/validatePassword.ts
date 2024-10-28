export const validateLength = (password: string) => password.length >= 8 && !password.includes(' ');
export const validateCase = (password: string) => /[a-z]/.test(password) && /[A-Z]/.test(password);
export const validateDigit = (password: string) => /\d/.test(password);