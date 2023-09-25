import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React, { FC, ReactElement, ReactNode } from 'react';

interface ElevationScrollProps {
    children: ReactElement;
    window?: () => Window;
}

const ElevationScroll: FC<ElevationScrollProps> = ({ children, window }): ReactElement => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

interface ElevateAppBarProps {
    children: ReactNode;
}

const ElevateAppBar: FC<ElevateAppBarProps> = (props): ReactElement => {
    return (
        <ElevationScroll {...props}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Scroll to elevate App bar
                    </Typography>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}

ElevateAppBar.propTypes = {

}

export default ElevateAppBar;