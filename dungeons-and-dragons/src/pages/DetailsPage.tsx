import { FC, ReactElement, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSpell } from "../actions/spellsAction";
import MainLayout from '../layouts/MainLayout';
import { LinearProgress } from "@mui/material"

const DetailsPage: FC<any> = ({ currentSpell, loading, spells, getSpell }): ReactElement => {
    const location = useLocation()
    console.log(location.state.spell, 'location.state.spell')

    useEffect(() => {
        getSpell(location.state.spell)
    }, [currentSpell])

    // console.log(currentSpell)

    if (loading || currentSpell === null) {
        return <MainLayout><LinearProgress /></MainLayout>
    }

    return (
        <MainLayout>
            This is Details Page
            {currentSpell?.name}
            {JSON.stringify(spells)}
        </MainLayout>
    )
}

DetailsPage.propTypes = {
    currentSpell: PropTypes.object,
}

const mapStateToProps = (state: any) => ({
    currentSpell: state.spell.currentSpell,
    spells: state.spell.spells,
    loading: state.spell.loading
})

export default connect(mapStateToProps, { getSpell })(DetailsPage)
