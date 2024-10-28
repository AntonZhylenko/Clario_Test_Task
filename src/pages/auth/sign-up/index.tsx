import { useState } from "react";
import { Typography } from "@mui/material";
import PasswordInput from "../../../components/form/PasswordInput";
import AppButton from "../../../components/ui/Button";
import PasswordStrengthBlock from "../../../components/form/PasswordStrengthBlock";
import AuthLayout from "../../../layouts/AuthLayout";
import { darkBlue } from "../../../utils/constants";
import useValidatePassword from "../../../customHooks/useValidatePassword";
import useValidateEmail from "../../../customHooks/useValidateEmail";
import FormInput from "../../../components/form/FormInput";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationCriteria, validatePasswordBeforeSubmit] = useValidatePassword(password);
    const [emailValid, validateEmailBeforeSubmit] = useValidateEmail(email);

    const handleSubmit = () => {
        const passwordValid = validatePasswordBeforeSubmit(password);
        const emailValid = validateEmailBeforeSubmit(email);
        if (passwordValid && emailValid) {
            window.open('https://github.com/AntonZhylenko/Clario_Test_Task', '_blank');
        }
    }

    return (
        <AuthLayout>
            <Typography sx={{ color: darkBlue, fontSize: '2.125rem', fontWeight: 'bold', margin: '1.5rem 0' }}>Sign up</Typography>
            <FormInput
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ margin: "0.5rem 0" }}
                validationStatus={emailValid}
            />
            <PasswordInput
                placeholder={"Create your password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ margin: "0.5rem 0" }}
                validationCriteria={validationCriteria}
            />
            <PasswordStrengthBlock validationCriteria={validationCriteria} />
            <AppButton title="Sign Up" onClick={handleSubmit} sx={{width: "80%"}} />
        </AuthLayout>
    )
}

export default SignUp;
