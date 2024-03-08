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
      className="mt-3 py-2 px-2 md:px-8 text-sm text-white border rounded border-cyan-600 transition md:hover:scale-105 duration-200 cursor-pointer"
      onClick={() => handleSelectCategory(category)}
    >
      {title}
    </button>
  );
};

export default CategoryBtn;
