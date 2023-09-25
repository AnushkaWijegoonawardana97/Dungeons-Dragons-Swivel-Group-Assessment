import React from 'react'
import PropTypes from 'prop-types'
import { FC, ReactElement } from 'react';
import { Link, Typography } from '@mui/material';

const CopyRight: FC<any> = (props): ReactElement => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props} >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

CopyRight.propTypes = {

}

export default CopyRight
