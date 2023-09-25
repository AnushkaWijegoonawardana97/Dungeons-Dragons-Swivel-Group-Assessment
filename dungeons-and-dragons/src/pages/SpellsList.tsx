import { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { getSpells } from '../actions/spellsAction';
import SpellCard from '../components/component/SpellCard';
import MainLayout from '../layouts/MainLayout';
import { Box, LinearProgress, Typography } from '@mui/material';

interface SpellsListProps {
    spells: any;
    loading: boolean;
    getSpells: () => void;
}

const SpellsList: FC<SpellsListProps> = ({ spells, loading, getSpells }): ReactElement => {
    useEffect(() => {
        getSpells();
    }, []);

    if (loading || spells === null) {
        return (
            <MainLayout>
                <LinearProgress />
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Box>
                <Typography variant='h3' gutterBottom sx={{ mb: 5 }}>
                    Dungeons & Dragons Spells Compendium
                </Typography>
            </Box>

            <Box
                rowGap={2}
                columnGap={2}
                display='grid'
                gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(4, 1fr)',
                }}
            >
                {spells.map((spell: any) => (
                    <SpellCard key={spell.index} spell={spell} />
                ))}
            </Box>
        </MainLayout>
    );
};

const mapStateToProps = (state: any) => ({
    spells: state.spell.spells,
    loading: state.spell.loading,
});

export default connect(mapStateToProps, { getSpells })(SpellsList);