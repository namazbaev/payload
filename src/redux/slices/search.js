import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    text: '',
    isShowKeyboard: true
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggle: (state, { payload }) => {
            state.isShowKeyboard = payload
        },
        writeText: (state, { payload }) => {
            state.text = payload
        },
        removeText: (state, { payload }) => {
            if (state.text == '') return
            let value = state.text.slice(0, -1)
            if (value.length === 1) {
                state.text = ''
            }
            state.text = value
        }
    }
})
export const searchAction = searchSlice.actions;
export default searchSlice;