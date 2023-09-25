import { Search } from "@mui/icons-material"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, LinearProgress } from "@mui/material"
import PropTypes from "prop-types"
import { FC, ReactElement, useEffect } from 'react'
import { connect } from "react-redux"
import SpellCard from '../components/component/SpellCard'
import MainLayout from '../layouts/MainLayout'
import { getSpells } from "../actions/spellsAction"

const SpellsList: FC<any> = ({ spells, loading, getSpells }): ReactElement => {
    useEffect(() => {
        getSpells()
    }, [])

    if (loading || spells === null) {
        return <MainLayout><LinearProgress /></MainLayout>
    }

    return (
        <MainLayout>
            <Stack
                spacing={3}
                justifyContent={{ xs: "center", md: "space-around" }}
                alignItems={{ xs: "flex-end", md: "center" }}
                direction={{
                    xs: "column",
                    md: "row",
                }}
                sx={{
                    pr: { xs: 2.5, md: 1 },
                    mb: 5
                }}>
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='spells'
                    label='Search Spells'
                    name='spells'
                    autoComplete='spells'
                    autoFocus
                />
                <Button variant='contained' startIcon={<Search />} sx={{ width: '500px', p: 1.75 }} size="large">Search</Button>
            </Stack>

            <Box
                rowGap={2}
                columnGap={2}
                display='grid'
                gridTemplateColumns={{
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                }} >
                {spells.map((spell: any) => <SpellCard key={spell.index} spell={spell} />)}

            </Box>
        </MainLayout>
    )
}

SpellsList.propTypes = {
    spells: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state: any) => ({
    spells: state.spell.spells,
    loading: state.spell.loading
})

export default connect(mapStateToProps, { getSpells })(SpellsList)
