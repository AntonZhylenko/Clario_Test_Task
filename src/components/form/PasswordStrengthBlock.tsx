import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { errorColor, successColor } from '../../utils/constants';
import { ValidationCriteria } from '../../interfaces/validation';

const getCriteriaStyle = (status:'error'|'success'|null) => {
    const sx:SxProps<Theme> = {
        margin: "0.3rem 2rem"
    }
    if (status === 'error') {
        sx.color = errorColor
    } else if (status === 'success') {
        sx.color = successColor
    } else {
        sx.color = "#494f71"
    }
    return sx;
}

type PasswordStrengthProps = {
    validationCriteria: ValidationCriteria;
}

const PasswordStrengthBlock:React.FC<PasswordStrengthProps> = ({validationCriteria}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: "100%",
            margin: '1rem 0',
        }}>
            <Typography sx={{...getCriteriaStyle(validationCriteria.lengthStatus)}}>8 characters or more {"("}no spaces{")"}</Typography>
            <Typography sx={{...getCriteriaStyle(validationCriteria.caseStatus)}}>Uppercase and lowercase letters</Typography>
            <Typography sx={{...getCriteriaStyle(validationCriteria.digitStatus)}}>At least one digit</Typography>
        </Box>
    )
}

export default PasswordStrengthBlock;
