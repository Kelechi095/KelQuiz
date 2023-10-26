import { store } from "../redux/store"
export type RootState = ReturnType<typeof store.getState>


export type Quiz = {
    id: number,
    question: string;
    options: string[];
    answer: number
}