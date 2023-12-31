import { FC, ReactElement, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { addFavourites, getCurrentSpell, removeFavourites } from "../actions/spellsAction";
import MainLayout from '../layouts/MainLayout';

import { Favorite, StackedBarChart, TrackChanges } from "@mui/icons-material";
import { Avatar, Box, Card, CardMedia, Divider, IconButton, LinearProgress, ListItemText, Stack, Typography } from "@mui/material";
import PropTypes from 'prop-types';

interface DetailsPageProps {
    currentSpell: any;
    loading: boolean;
    favourites: any[];
    getCurrentSpell: (spell: any) => void;
    addFavourites: (spell: any) => void;
    removeFavourites: (spell: any, favourites: any[]) => void;
}

const DetailsPage: FC<DetailsPageProps> = ({ favourites, currentSpell, loading, getCurrentSpell, addFavourites, removeFavourites }): ReactElement => {
    const [isFavourite, setIsFavourite] = useState(false)
    const [favouritesArr, setFavouriteArr] = useState(favourites)

    const location = useLocation()

    useEffect(() => {
        console.log(location.state.spell)
        getCurrentSpell(location.state.spell)
    }, [])

    useEffect(() => {
        const newFavourites = favouritesArr?.map(item => item.index);
        console.log(newFavourites)
        if (newFavourites.includes(currentSpell.index)) {
            setIsFavourite(true)
        }
    }, [favouritesArr])


    const onFavouriteButtonClick = () => {
        const spell = {
            index: currentSpell.index,
            name: currentSpell.name,
            url: currentSpell.url
        }
        if (favourites.length === 0) {
            addFavourites(spell)
        } else {
            if (favourites.includes(spell)) {
                removeFavourites(spell, favourites)
            } else {
                addFavourites(spell)
            }
        }
    }

    if (loading || currentSpell === null) {
        return <MainLayout><LinearProgress /></MainLayout>
    }

    return (
        <MainLayout>
            <Stack >
                <Card sx={{ mb: 5 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image="/detailsBg.jpg"
                        title="green iguana"
                    />
                </Card>
                <Stack direction="row" sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        {currentSpell?.name}
                    </Typography>

                    <IconButton onClick={onFavouriteButtonClick} color={isFavourite ? 'error' : 'default'}>
                        <Favorite />
                    </IconButton>
                </Stack>

                <Stack spacing={3} direction="row" flexWrap="wrap" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ typography: 'body2' }}>
                        <StackedBarChart sx={{ color: 'warning.main' }} />
                        <Box component="span" sx={{ typography: 'subtitle2' }}>
                            Level {currentSpell?.level}
                        </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ typography: 'body2' }}>
                        <TrackChanges sx={{ color: 'success.main' }} />
                        <Box component="span" sx={{ typography: 'subtitle2' }}>
                            {currentSpell?.range}
                        </Box>
                    </Stack>
                </Stack>

                <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

                <Box
                    gap={3}
                    display="grid"
                    gridTemplateColumns={{
                        xs: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    }}
                >
                    <Stack spacing={1.5} direction="row">
                        <ListItemText
                            primary={"Ritual"}
                            secondary={currentSpell?.ritual ? "Yes" : "No"}
                            primaryTypographyProps={{
                                typography: 'body2',
                                color: 'text.secondary',
                                mb: 0.5,
                            }}
                            secondaryTypographyProps={{
                                typography: 'subtitle2',
                                color: 'text.primary',
                                component: 'span',
                            }}
                        />
                    </Stack>

                    <Stack spacing={1.5} direction="row">
                        <ListItemText
                            primary={"Duration"}
                            secondary={currentSpell?.duration}
                            primaryTypographyProps={{
                                typography: 'body2',
                                color: 'text.secondary',
                                mb: 0.5,
                            }}
                            secondaryTypographyProps={{
                                typography: 'subtitle2',
                                color: 'text.primary',
                                component: 'span',
                            }}
                        />
                    </Stack>

                    <Stack spacing={1.5} direction="row">
                        <ListItemText
                            primary={"Concentration"}
                            secondary={currentSpell?.concentration ? "Yes" : "No"}
                            primaryTypographyProps={{
                                typography: 'body2',
                                color: 'text.secondary',
                                mb: 0.5,
                            }}
                            secondaryTypographyProps={{
                                typography: 'subtitle2',
                                color: 'text.primary',
                                component: 'span',
                            }}
                        />
                    </Stack>

                    <Stack spacing={1.5} direction="row">
                        <ListItemText
                            primary={"Attack Type"}
                            secondary={currentSpell?.attack_type}
                            primaryTypographyProps={{
                                typography: 'body2',
                                color: 'text.secondary',
                                mb: 0.5,
                            }}
                            secondaryTypographyProps={{
                                typography: 'subtitle2',
                                color: 'text.primary',
                                component: 'span',
                            }}
                        />
                    </Stack>

                    <Stack spacing={1.5} direction="row">
                        <ListItemText
                            primary={"Damage Type"}
                            secondary={currentSpell?.damage?.damage_type?.name}
                            primaryTypographyProps={{
                                typography: 'body2',
                                color: 'text.secondary',
                                mb: 0.5,
                            }}
                            secondaryTypographyProps={{
                                typography: 'subtitle2',
                                color: 'text.primary',
                                component: 'span',
                            }}
                        />
                    </Stack>

                    <Stack spacing={1.5} direction="row">
                        <ListItemText
                            primary={"School Name"}
                            secondary={currentSpell?.school?.name}
                            primaryTypographyProps={{
                                typography: 'body2',
                                color: 'text.secondary',
                                mb: 0.5,
                            }}
                            secondaryTypographyProps={{
                                typography: 'subtitle2',
                                color: 'text.primary',
                                component: 'span',
                            }}
                        />
                    </Stack>

                    <Stack spacing={1.5} direction="row">
                        <ListItemText
                            primary={"Classes Name"}
                            secondary={currentSpell?.classes?.name}
                            primaryTypographyProps={{
                                typography: 'body2',
                                color: 'text.secondary',
                                mb: 0.5,
                            }}
                            secondaryTypographyProps={{
                                typography: 'subtitle2',
                                color: 'text.primary',
                                component: 'span',
                            }}
                        />
                    </Stack>
                </Box>


                <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

                <Stack spacing={3}>
                    <Typography variant="h6">Description</Typography>

                    <Box component="div" sx={{ typography: 'paragraph' }}>
                        {currentSpell?.desc}
                    </Box>

                    {currentSpell?.higher_level && <><Typography variant="h6">Higher Level</Typography>

                        <Box component="div" sx={{ typography: 'paragraph' }}>
                            {currentSpell?.higher_level}
                        </Box></>}


                    {currentSpell?.material && <><Typography variant="h6">Material</Typography>

                        <Box component="div" sx={{ typography: 'paragraph' }}>
                            {currentSpell?.material}
                        </Box></>}


                    <Typography variant="h6">Components</Typography>

                    <Box
                        rowGap={2}
                        display="grid"
                        gridTemplateColumns={{
                            xs: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        }}
                    >
                        {currentSpell?.components?.map((component: string) => <Stack
                            spacing={1}
                            direction="row"
                            alignItems="center"
                        >
                            <Avatar> {component}</Avatar>
                        </Stack>)}
                    </Box>
                </Stack>
            </Stack>
        </MainLayout >
    )
}

DetailsPage.propTypes = {
    currentSpell: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state: any) => ({
    currentSpell: state.spell.currentSpell,
    favourites: state.spell.favourites,
    loading: state.spell.loading
})

export default connect(mapStateToProps, { getCurrentSpell, addFavourites, removeFavourites })(DetailsPage)