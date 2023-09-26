import { Favorite, Visibility } from "@mui/icons-material";
import { Button, Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import { FC, ReactElement, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavourites, removeFavourites } from "../../actions/spellsAction";

interface SpellCardProps {
    spell: any;
    favourites: any[];
    addFavourites: (spell: any) => void;
    removeFavourites: (spell: any, favourites: any[]) => void;
}

const SpellCard: FC<SpellCardProps> = ({ spell, favourites, addFavourites, removeFavourites }): ReactElement => {
    const [isFavourite, setIsFavourite] = useState(false)
    const navigate = useNavigate();

    const onFavouriteButtonClick = () => {
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

    const onViewButtonHandler = () => {
        navigate('/details', {
            state: {
                spell: spell.index
            }
        })
    }

    useEffect(() => {
        if (favourites.includes(spell)) {
            setIsFavourite(true)
        } else {
            setIsFavourite(false)
        }
    }, [favourites])


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 3 }}>
                    {spell.name}
                </Typography>

                <Stack direction='row' spacing={1} alignItems={'center'} justifyContent={"space-between"} sx={{ width: '100%' }}>
                    <IconButton onClick={onFavouriteButtonClick} color={isFavourite ? 'error' : 'default'}>
                        <Favorite />
                    </IconButton>
                    <Button variant="contained" startIcon={<Visibility />} onClick={onViewButtonHandler}>
                        View
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
}

SpellCard.propTypes = {

}

const mapStateToProps = (state: any) => ({
    favourites: state.spell.favourites,
    currentSpell: state.spell.currentSpell,
    loading: state.spell.loading
})

export default connect(mapStateToProps, { addFavourites, removeFavourites })(SpellCard)
