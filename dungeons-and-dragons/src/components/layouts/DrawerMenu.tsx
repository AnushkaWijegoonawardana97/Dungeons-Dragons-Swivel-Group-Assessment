import { FC, ReactElement, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import { NAV_WIDTH } from '../../utils/Constant';
import NavigationRenderContent from "./NavigationRenderContent";
import useResponsive from "../../hooks/useResponsive";

interface DrawerMenuProps {
    openNav: boolean;
    onCloseNav: () => void;
}

const DrawerMenu: FC<DrawerMenuProps> = ({ openNav, onCloseNav }): ReactElement => {
    const isDesktop: boolean = useResponsive("up", "lg");
    const { pathname } = useLocation();

    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Box
            component='nav'
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV_WIDTH },
            }}>
            {isDesktop ? (
                <Drawer
                    open
                    variant='permanent'
                    PaperProps={{
                        sx: {
                            width: NAV_WIDTH,
                            bgcolor: "background.default",
                            borderRightStyle: "dashed",
                        },
                    }}>
                    <NavigationRenderContent />
                </Drawer>
            ) : (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    PaperProps={{
                        sx: { width: NAV_WIDTH },
                    }}>
                    <NavigationRenderContent />
                </Drawer>
            )}
        </Box>
    );
}

export default DrawerMenu;