import { Box, Container, Toolbar } from "@mui/material";
import PropTypes from 'prop-types';
import { FC, ReactElement, ReactNode, useState } from 'react';
import CopyRight from "../components/component/CopyRight";
import AppBarMenu from "../components/layouts/AppBarMenu";
import DrawerMenu from "../components/layouts/DrawerMenu";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }): ReactElement => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBarMenu onOpenNav={() => setOpen(true)} />
                <DrawerMenu openNav={open} onCloseNav={() => setOpen(false)} />

                <Container maxWidth='xl' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 3, mb: 5 }}>
                    <Toolbar />
                    <>
                        {children}
                    </>
                </Container>
            </Box>
            <CopyRight sx={{ pb: 5 }} />
        </>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;