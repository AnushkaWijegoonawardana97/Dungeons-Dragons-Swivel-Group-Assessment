import { FC, ReactElement, useEffect } from 'react';
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { getSpells } from "../actions/spellsAction";
import SpellCard from "../components/component/SpellCard";
import MainLayout from '../layouts/MainLayout';

import { Box, Button, LinearProgress, Stack, Typography } from "@mui/material";
import { List } from "@mui/icons-material";
import PropTypes from "prop-types";

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
            <Box rowGap={3}
                columnGap={3}
                display='grid'
                gridTemplateColumns={{
                    xs: "repeat(1, 1fr)",
                    sm: "2fr 1fr",
                }}
                alignItems={"center"}
                sx={{ mb: 5 }}>
                <Box>
                    <Typography variant='h6' gutterBottom>
                        Master the Mystic Arts
                    </Typography>
                    <Typography variant='h3' gutterBottom>
                        Dungeons & Dragons Spells Compendium
                    </Typography>

                    <Typography paragraph>
                        Welcome to the ultimate portal for all your Dungeons & Dragons spellcasting needs! Whether you're a seasoned wizard, a budding sorcerer, or a curious adventurer looking to delve into the arcane arts, you've arrived at the right place. Our website is your gateway to a comprehensive collection of spells and incantations from the rich and immersive world of D&D. From the destructive power of fireballs to the healing touch of clerics, we've meticulously cataloged an array of spells for your perusal. Explore our spell compendium, sharpen your magical skills, and embark on epic adventures with newfound knowledge. Join us on a journey where magic knows no bounds, and let the spellcasting begin!
                    </Typography>

                    <Button
                        component={RouterLink}
                        to={'/favourites'}
                        variant="contained">
                        Enchanting Favorites
                    </Button>
                </Box>

                <Box>
                    <img src="/landingBg.jpg" alt="" width={"100%"} />
                </Box>
            </Box>
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
                        }} /> : <>{spells.slice(0, 8).map((spell: any) => <SpellCard key={spell.index} spell={spell} />)}</>
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