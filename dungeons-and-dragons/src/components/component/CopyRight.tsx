import { Link, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';

interface CopyRightProps {
    [key: string]: any;
}

const CopyRight: FC<CopyRightProps> = (props): ReactElement => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/AnushkaWijegoonawardana97/Dungeons-Dragons-Swivel-Group-Assessment">
                Github Code
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

CopyRight.propTypes = {};

export default CopyRight;