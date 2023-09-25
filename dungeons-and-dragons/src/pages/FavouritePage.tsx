import { Box, Button, Typography, LinearProgress } from "@mui/material"
import { FC, ReactElement, useEffect } from 'react'
import { Link as RouterLink } from "react-router-dom"
import SpellCard from '../components/component/SpellCard'
import MainLayout from '../layouts/MainLayout'
import { connect } from "react-redux"
import { getFavourites } from "../actions/spellsAction"



const FavouritePage: FC<any> = ({ favourites, loading, getFavourites }): ReactElement => {
    useEffect(() => {
        getFavourites()
    }, [favourites])

    return (
        <MainLayout>
            <Box sx={{ mb: 5 }}>
                <Typography variant='h6' gutterBottom>
                    Master the Art of Magic
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Explore Your Top Dungeons & Dragons Spells Collection
                </Typography>

                <Typography paragraph>
                    Our favorite Dungeons & Dragons spells represent the pinnacle of arcane and divine magic in the world of D&D. From the awe-inspiring fireballs that can turn the tide of battle to the subtle charms that sway the hearts of NPCs, these spells are the essence of spellcasting mastery. Whether you're a seasoned spellcaster or a novice adventurer, our curated selection offers a glimpse into the most versatile, powerful, and intriguing spells the D&D universe has to offer. Explore these spells to enhance your magical repertoire, embark on epic quests, and weave your own tales of enchantment and adventure. Unlock the secrets of our favorites and wield the forces of magic with style and finesse.
                </Typography>
            </Box>

            <Box
                rowGap={2}
                columnGap={2}
                display='grid'
                gridTemplateColumns={{
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                }}>
                {
                    (loading || favourites === null) ? <LinearProgress sx={{
                        gridColumn: "1/4",
                    }} /> : <>{favourites.map((spell: any) => <SpellCard key={spell.index} spell={spell} />)}</>
                }
            </Box>
        </MainLayout>
    )
}

FavouritePage.propTypes = {

}

const mapStateToProps = (state: any) => ({
    favourites: state.spell.favourites,
    loading: state.spell.loading
})

export default connect(mapStateToProps, { getFavourites })(FavouritePage)
