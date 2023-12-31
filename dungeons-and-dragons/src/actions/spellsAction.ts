import axios from "axios";
import { Dispatch } from "redux";
import { ADD_FAVOUTITES, GET_CURRENT_SPELL, GET_FAVOUTITES, GET_SPELLS, REMOVE_FAVOUTITES, SET_LOADING, SPELLS_ERROR } from "./types";

export const getSpells = () => async (dispatch: Dispatch<{ type: string; payload: any; }>) => {
    try {
        setLoading();

        const response: any = await axios.get('https://www.dnd5eapi.co/api/spells');

        dispatch({
            type: GET_SPELLS,
            payload: response.data.results
        })
    } catch (error: any) {
        dispatch({
            type: SPELLS_ERROR,
            payload: error.response.data
        })
    }

}

export const getCurrentSpell = (name: string) => async (dispatch: Dispatch<{ type: string; payload: any; }>) => {
    try {
        setLoading();

        const response: any = await axios.get(`https://www.dnd5eapi.co/api/spells/${name}`);

        dispatch({
            type: GET_CURRENT_SPELL,
            payload: response.data
        })
    } catch (error: any) {
        dispatch({
            type: SPELLS_ERROR,
            payload: error.response.data
        })
    }

}

export const addFavourites = (spell: any) => async (dispatch: Dispatch<{ type: string; payload: any; }>) => {
    try {
        setLoading();
        dispatch({
            type: ADD_FAVOUTITES,
            payload: spell
        })
    } catch (error: any) {
        dispatch({
            type: SPELLS_ERROR,
            payload: error.response.data
        })
    }
}

export const getFavourites = () => async (dispatch: Dispatch<{ type: string; payload: any; }>) => {
    try {
        setLoading();
        dispatch({
            type: GET_FAVOUTITES,
            payload: ''
        })
    } catch (error: any) {
        dispatch({
            type: SPELLS_ERROR,
            payload: 'error.response.data'
        })
    }
}

export const removeFavourites = (spell: any, favourites: any) => async (dispatch: Dispatch<{ type: string; payload: any; }>) => {
    try {
        setLoading();
        const newFavourites = favourites.filter((el: any) => el.index !== spell.index)

        dispatch({
            type: REMOVE_FAVOUTITES,
            payload: newFavourites
        })
    } catch (error: any) {
        dispatch({
            type: SPELLS_ERROR,
            payload: "error.response.data"
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}