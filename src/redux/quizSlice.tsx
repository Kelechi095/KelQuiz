import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameState: "off",
  questionIndex: 0,
  userScore: 0,
  timer: 10,
  category: null
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state) => {
      state.gameState = "start";
      state.questionIndex = 0;
      state.userScore = 0;
      state.timer = 10;
    },
    finishQuiz: (state) => {
      state.gameState = "finish";
      state.timer = 10;
    },
    endQuiz: (state) => {
      state.gameState = "off";
      state.timer = 10;
    },
    nextQuestion: (state) => {
      state.timer = 10;
      state.questionIndex++;
    },
    increaseUserScore: (state, action) => {
      if (action.payload > 0) {
        state.userScore = state.userScore + 10;
      } 
    },
    resetTimer3: (state) => {
      state.timer = 3
    },
    resetTimer: (state) => {
      state.timer = 10
    },
    setCategory: (state, action) => {
      state.category = action.payload
      state.gameState = "start";
      state.questionIndex = 0;
      state.userScore = 0;
      state.timer = 10;
    },

    startTimer: (state) => {
      state.timer = state.timer - 1;
    },
  },
});

export const {
  startQuiz,
  finishQuiz,
  endQuiz,
  nextQuestion,
  increaseUserScore,
  startTimer,
  setCategory,
  resetTimer,
  resetTimer3
} = quizSlice.actions;

export default quizSlice.reducer;
