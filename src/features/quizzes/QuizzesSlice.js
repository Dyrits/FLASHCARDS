import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/TopicsSlice';

const options ={
    name: "quizzes",
    initialState: { quizzes: {} },
    reducers: {
        addQuiz: (state, { payload }) => {
            const { id, name, topicId, cardIds } = payload;
            state.quizzes[id] = { id, name, topicId, cardIds };
        },
    },
};

export const addQuizThunk = payload => {
    const { id: quizId, topicId } = payload;
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({ topicId, quizId }));
    };
};

export const quizzesSlice = createSlice(options);
export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;