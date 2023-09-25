import {
    Box,
    IconButton,
    List, ListItemButton,
    ListItemIcon,
    styled
} from "@mui/material";
import { FC, ReactElement } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, GitHub, Home, ViewList, Favorite } from "@mui/icons-material"

const NavigationRenderContent: FC<any> = (props: any): ReactElement => {
    const { pathname } = useLocation();
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
                    }}>
                    <GitHub />
                </IconButton>
            </Box>
        </>
    )
}

NavigationRenderContent.propTypes = {

}

export default NavigationRenderContent
