import { useDispatch } from "react-redux";
import { setCategory, startQuiz } from "../../redux/quizSlice";

interface CategoryBtnProps {
  category: string;
  title: string;
}

const CategoryBtn = ({ category, title }: CategoryBtnProps) => {
  const dispatch = useDispatch();

  const handleSelectCategory = (category: string) => {
    dispatch(setCategory(category));
    dispatch(startQuiz());
  };

  return (
    <button
      className="mt-3 py-3 px-2 md:px-8 text-sm md:text-base font-semibold text-white rounded bg-zinc-800 transition md:hover:scale-105 duration-200 cursor-pointer"
      onClick={() => handleSelectCategory(category)}
    >
      {title}
    </button>
  );
};

export default CategoryBtn;
