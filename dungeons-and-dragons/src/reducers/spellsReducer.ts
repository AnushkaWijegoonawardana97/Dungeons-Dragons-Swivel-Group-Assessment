import { ADD_FAVOUTITES, GET_CURRENT_SPELL, GET_FAVOUTITES, GET_SPELLS, REMOVE_FAVOUTITES, SET_LOADING, SPELLS_ERROR } from "../actions/types";

interface Spell {
    id: number;
    name: string;
    description: string;
}

interface State {
    spells: Spell[] | null;
    currentSpell: any | null;
    favourites: Spell[];
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    spells: null,
    currentSpell: {},
    favourites: [],
    loading: false,
    error: null
}

const reducer = (state: State = initialState, action: { payload: any; type: any; }): State => {
    switch (action.type) {
        case GET_SPELLS:
            return {
                ...state,
                spells: action.payload,
                loading: false
            }
        case GET_CURRENT_SPELL:
            console.log(action.payload, 'action.payload GET_CURRENT_SPELL')
            return {
                ...state,
                currentSpell: action.payload,
                loading: false
            }
        case GET_FAVOUTITES:
            return {
                ...state,
                loading: false
            }
        case ADD_FAVOUTITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
                loading: false
            }
        case REMOVE_FAVOUTITES:
            return {
                ...state,
                favourites: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SPELLS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;