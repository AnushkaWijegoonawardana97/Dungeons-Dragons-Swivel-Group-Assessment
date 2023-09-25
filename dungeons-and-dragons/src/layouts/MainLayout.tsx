import { Box, CssBaseline, Toolbar, Container } from "@mui/material"
import PropTypes from 'prop-types'
import { FC, ReactElement, useState } from 'react'
import AppBarMenu from "../components/layouts/AppBarMenu"
import DrawerMenu from "../components/layouts/DrawerMenu"
import CopyRight from "../components/component/CopyRight"

const MainLayout: FC<any> = ({ children }): ReactElement => {
    const [open, setOpen] = useState(false);

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
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout
