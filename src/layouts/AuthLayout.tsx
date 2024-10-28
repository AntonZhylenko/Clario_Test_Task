import { Box } from "@mui/material";
import AppLayout from "./AppLayout";

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <AppLayout>
            <Box sx={{
                margin: '10% auto 0',
                width: "340px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {children}
            </Box>
        </AppLayout>
    )
}

export default AuthLayout;
