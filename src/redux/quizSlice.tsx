import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz: () => {},
  },
});

export const { addQuiz } = quizSlice.actions;

export default quizSlice.reducer;
