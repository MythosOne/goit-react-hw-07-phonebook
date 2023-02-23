import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from '../redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled] (state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    
    // addContacts(state, action) {
    //   state.items.push(action.payload);
    // },

    // deleteContacts(state, action) {
    //   state.items = state.items.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    // setFilter(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

export const { addContacts, deleteContacts, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
