import { List } from "@mui/icons-material";
import { Box, Button, Card, CardContent, LinearProgress, Typography } from "@mui/material";
import { FC, ReactElement, useEffect } from 'react';
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { getFavourites } from "../actions/spellsAction";
import SpellCard from '../components/component/SpellCard';
import MainLayout from '../layouts/MainLayout';

interface FavouritePageProps {
    favourites: any[];
    loading: boolean;
    getFavourites: () => void;
}

const FavouritePage: FC<FavouritePageProps> = ({ favourites, loading, getFavourites }): ReactElement => {
    useEffect(() => {
        getFavourites();
    }, [favourites]);

    return (
        <MainLayout>
            <Box sx={{ mb: 5 }}>
                <Typography variant='h3' gutterBottom>
                    Explore Your Top Dungeons & Dragons Spells Collection
                </Typography>
            </Box>

            <Box
                rowGap={2}
                columnGap={2}
                display='grid'
                gridTemplateColumns={{
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(4, 1fr)",
                }}>
                {
                    (loading || favourites === null) ? <LinearProgress sx={{
                        gridColumn: "1/5",
                    }} /> : <>{favourites.length !== 0 ? favourites?.map((spell: any) => <SpellCard key={spell.index} spell={spell} />) : <Card sx={{ gridColumn: "1/5", }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ textAlign: 'center', mb: 3 }}>
                                Looks like you haven't selected any favorites yet. Let's change that!
                            </Typography>

                            <Button
                                component={RouterLink}
                                to={'/spells'}
                                color='primary'
                                startIcon={<List />}>
                                View More
                            </Button>
                        </CardContent>
                    </Card>}</>
                }
            </Box>
        </MainLayout>
    );
};

const mapStateToProps = (state: any) => ({
    favourites: state.spell.favourites,
    loading: state.spell.loading
});

export default connect(mapStateToProps, { getFavourites })(FavouritePage);