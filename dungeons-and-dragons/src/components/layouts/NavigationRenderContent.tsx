import { Favorite, GitHub, Home, ViewList } from "@mui/icons-material";
import { Box, IconButton, List } from "@mui/material";
import { FC, ReactElement } from 'react';
import { useNavigate } from "react-router-dom";

interface NavigationRenderContentProps {
}

const NavigationRenderContent: FC<NavigationRenderContentProps> = (props: NavigationRenderContentProps): ReactElement => {
    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ px: 2.5, py: 3, display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "space-between", height: "100%" }}>
                <img src='/dng_logo.png' alt='Plooo Logo' />

                <List disablePadding sx={{ p: 1 }}>
                    <IconButton
                        size='large'
                        sx={{
                            mr: 1,
                            color: "text.primary",
                        }}
                        onClick={() => navigate("/")}>
                        <Home />
                    </IconButton>
                    <IconButton
                        size='large'
                        sx={{
                            mr: 1,
                            color: "text.primary",
                        }}
                        onClick={() => navigate("/spells")}>
                        <ViewList />
                    </IconButton>
                    <IconButton
                        size='large'
                        sx={{
                            mr: 1,
                            color: "text.primary",
                        }}
                        onClick={() => navigate("/favourites")}>
                        <Favorite />
                    </IconButton>
                </List>

                <IconButton
                    size='large'
                    sx={{
                        mr: 1,
                        color: "text.primary",
                    }}
                >
                    <GitHub />
                </IconButton>
            </Box>
        </>
    )
}

export default NavigationRenderContent;