import search from '../slices/search';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: { search: search.reducer }
});
export default store;