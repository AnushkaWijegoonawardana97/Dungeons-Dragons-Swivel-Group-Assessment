import { FC, ReactElement } from 'react';
import { AppBar, Box, IconButton, Toolbar, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Menu } from "@mui/icons-material";
import { HEADER_DESKTOP, HEADER_MOBILE, NAV_WIDTH } from '../../utils/Constant';
import { bgBlur } from "../../utils/cssStyles";

interface AppBarMenuProps {
    onOpenNav: () => void;
}

const StyledRoot = styled(AppBar)(({ theme }): any => ({
    ...bgBlur({ color: theme.palette.background.default }),
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
        width: `calc(100% - ${NAV_WIDTH + 1}px)`,
    },
}));

const StyledToolbar = styled(Toolbar)(({ theme }): any => ({
    minHeight: HEADER_MOBILE,
    [theme.breakpoints.up("lg")]: {
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

const AppBarMenu: FC<AppBarMenuProps> = ({ onOpenNav }): ReactElement => {
    return (
        <StyledRoot>
            <StyledToolbar>
                {/* <Box sx={{
                    display: { sm: "none" },
                }}>
                    <Typography variant="h3" color="text.primary" align="center">
                        In a realm of imagination, heroes arise.
                    </Typography>
                </Box> */}
                <Box sx={{
                    display: { lg: "none" },
                }}>
                    <img src='/dng_logo.png' alt='Plooo Logo' width={'30px'} />
                </Box>

                <Box sx={{ flexGrow: 1, display: { lg: "none" }, }} />

                <IconButton
                    onClick={onOpenNav}
                    sx={{
                        mr: 1,
                        color: "text.primary",
                        display: { lg: "none" },
                    }}>
                    <Menu />
                </IconButton>
            </StyledToolbar>
        </StyledRoot >
    )
}

AppBarMenu.propTypes = {
    onOpenNav: PropTypes.func.isRequired,
}

export default AppBarMenu;