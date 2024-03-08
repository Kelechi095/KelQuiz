import { store } from "../redux/store";
export type RootState = ReturnType<typeof store.getState>;

export type Questions = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
