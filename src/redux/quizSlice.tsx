import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameState: "off",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state) => {
      state.gameState = "start";
    },
    finishQuiz: (state) => {
      state.gameState = "finish";
    },
    endQuiz: (state) => {
      state.gameState = "off";
    },
    

  },
});

export const { startQuiz, finishQuiz, endQuiz } = quizSlice.actions;

export default quizSlice.reducer;
