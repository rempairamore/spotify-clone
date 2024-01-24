import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites : []
}

const favourites_slice = createSlice(
    {
        name: 'favourites',
        initialState : initialState,
        reducers: {
            addFavourite(state, action) {

                if (state.favourites.includes(action.payload)) {
                console.log("valore già presente");
                } else {
                state.favourites.push(action.payload)
                }
                },
            removeFavourite(state, action) {
                return {
                    ...state,
                    favourites: state.favourites.filter(numero => numero !== action.payload)
                }

            }
        }
    }
)

    const {actions, reducer} = favourites_slice;
    export const {addFavourite,removeFavourite} = actions;

    export default reducer;