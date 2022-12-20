import { createSlice, configureStore } from '@reduxjs/toolkit'
import fileSlice from '../features/fileSlice'

export default configureStore({
    reducer: {
        dataToolkit: fileSlice
    }
})