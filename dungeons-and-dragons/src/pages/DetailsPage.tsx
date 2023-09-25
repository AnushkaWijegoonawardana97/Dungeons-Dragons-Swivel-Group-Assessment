import { FC, ReactElement, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCurrentSpell } from "../actions/spellsAction";
import MainLayout from '../layouts/MainLayout';
import { LinearProgress, Stack, Divider, Typography, IconButton, Box, Avatar, ListItemText } from "@mui/material"
import { Favorite, StackedBarChart, AutoFixNormal, TrackChanges } from "@mui/icons-material";

const DetailsPage: FC<any> = ({ currentSpell, loading, getCurrentSpell }): ReactElement => {
    const location = useLocation()

    useEffect(() => {
        console.log(location.state.spell)
        getCurrentSpell(location.state.spell)
    }, [])

    const onFavouriteButtonClick = () => {
        // if (favourites.length === 0) {
        //     addFavourites(spell)
        // } else {
        //     if (favourites.includes(spell)) {
        //         removeFavourites(spell, favourites)
        //     } else {
        //         addFavourites(spell)
        //     }
        // }
        console.log('....')
    }

    if (loading || currentSpell === null) {
        return <MainLayout><LinearProgress /></MainLayout>
    }

    return (
        <MainLayout>
            <Stack >
                <Stack direction="row" sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        {currentSpell?.name}
                    </Typography>

                    <IconButton onClick={onFavouriteButtonClick}>
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
                </Box>


                <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

                <Stack spacing={3}>
                    <Typography variant="h6">Description</Typography>

                    <Box component="div" sx={{ typography: 'paragraph' }}>
                        {currentSpell?.desc}
                    </Box>

                    <Typography variant="h6">Higher Level</Typography>

                    <Box component="div" sx={{ typography: 'paragraph' }}>
                        {currentSpell?.higher_level}
                    </Box>

 {currentSpell?.material && <><Typography variant="h6">Material</Typography>

                    <Box component="div" sx={{ typography: 'paragraph' }}>
                        {currentSpell?.material}
                    </Box></>}
                    

                    <Typography variant="h6">Components</Typography>

                    <Box
                        rowGap={2}
                        display="grid"
                        gridTemplateColumns={{
                            xs: 'repeat(1, 1fr)',
                            md: 'repeat(2, 1fr)',
                        }}
                    > {currentSpell?.components?.map((component: string) => <Stack
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
    loading: state.spell.loading
})

export default connect(mapStateToProps, { getCurrentSpell })(DetailsPage)
