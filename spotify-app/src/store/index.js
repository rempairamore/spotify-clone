import {configureStore} from '@reduxjs/toolkit'
import favouritesReducer from '../slice/favouritesSlice'
import rockReducer  from '../slice/rockSlice'

export const store = configureStore({
    reducer : {
        favourites : favouritesReducer,
        rock : rockReducer,
        // pop: popReducer,
        // hipPop: hipPopReducer
    }
})