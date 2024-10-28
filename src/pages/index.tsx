import AppButton from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { signUpPath } from "../App";
import { Box } from "@mui/material";
import AppLayout from "../layouts/AppLayout";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <AppLayout>
            <Box sx={{margin: '10% auto'}}>
                <AppButton title={"Register"} onClick={() => navigate(signUpPath)} />
            </Box>
        </AppLayout>
    )
}

export default HomePage;
