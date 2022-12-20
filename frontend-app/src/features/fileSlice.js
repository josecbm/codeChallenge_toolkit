
import {createSlice} from '@reduxjs/toolkit'
export const fileSlice = createSlice({
    name: 'dataToolkit',
    initialState: {
        items: {}
    },
    reducers: {
        addItems: (state, action) => {
            console.log('este es el payload => ', action.payload);
            state.items = action.payload
        }
    }
})
export const {addItems} = fileSlice.actions;
export const selectItems = (state) => state.dataToolkit.items;
export default fileSlice.reducer;