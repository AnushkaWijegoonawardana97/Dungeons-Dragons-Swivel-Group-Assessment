import { FC, ReactElement, useEffect } from 'react';
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { getSpells } from "../actions/spellsAction";
import SpellCard from "../components/component/SpellCard";
import MainLayout from '../layouts/MainLayout';

import { Box, Button, LinearProgress, Stack, Typography } from "@mui/material";
import { List } from "@mui/icons-material";
import PropTypes from "prop-types";
import LadingHeroHeader from '../components/pages/LadingHeroHeader';

interface LandingPageProps {
    spells: any;
    loading: boolean;
    getSpells: () => void;
}

const LandingPage: FC<LandingPageProps> = ({ spells, loading, getSpells }): ReactElement => {
    useEffect(() => {
        getSpells()
    }, [])

    return (
        <MainLayout>
            <LadingHeroHeader />
            <Box >
                <Stack direction='row' alignItems='center' sx={{ mb: 3 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h5' gutterBottom>
                            Spellcraft Repository
                        </Typography>
                    </Box>

                    <Box sx={{ flexShrink: 0 }}>
                        <Button
                            component={RouterLink}
                            to={'/spells'}
                            color='primary'
                            startIcon={<List />}>
                            View More
                        </Button>
                    </Box>
                </Stack>

                <Box
                    rowGap={2}
                    columnGap={2}
                    display='grid'
                    gridTemplateColumns={{
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(4, 1fr)",
                    }}>
                    {
                        (loading || spells === null) ? <LinearProgress sx={{
                            gridColumn: "1/4",
                        }} /> : <>{spells.slice(0, 12).map((spell: any) => <SpellCard key={spell.index} spell={spell} />)}</>
                    }
                </Box>
            </Box>
        </MainLayout>
    )
}

LandingPage.propTypes = {
    spells: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state: any) => ({
    spells: state.spell.spells,
    loading: state.spell.loading
})

export default connect(mapStateToProps, { getSpells })(LandingPage)