import React, { FC, ReactElement } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import { ElevationScrollProps } from '../../utils/Interface'

function ElevationScroll({ children, window }: ElevationScrollProps) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const ElevateAppBar: FC<any> = (props): ReactElement => {
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

export default ElevateAppBar
