import { createSlice } from '@reduxjs/toolkit';

const options ={
    name: "cards",
    initialState: { cards: {} },
    reducers: {
        addCard: (state, { payload }) => {
            const { id, front, back } = payload;
            state.cards[id] = { id, front, back };
        },
    },
};

export const cardsSlice = createSlice(options);
export const selectCards = state => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;