import { Box, Button, Typography } from "@mui/material";
import { FC } from 'react';
import { Link as RouterLink } from "react-router-dom";

interface LadingHeroHeaderProps {

}

const LadingHeroHeader: FC<LadingHeroHeaderProps> = () => {
    return (
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
    )
}

LadingHeroHeader.propTypes = {

}

export default LadingHeroHeader;