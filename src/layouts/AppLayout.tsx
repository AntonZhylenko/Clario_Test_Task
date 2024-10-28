import { Box } from "@mui/material";
import { lightBlue } from "../utils/constants";

// would have header and footer in real app, based on design
const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Box sx={{
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: lightBlue,
        }}>
            {children}
        </Box>
    )
}

export default AppLayout;
