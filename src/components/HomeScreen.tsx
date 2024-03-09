import { useEffect, useState } from "react";
import CategoryBtn from "./buttons/CategoryBtn";

export default function HomeScreen() {
  const [colorIndex, setColorIndex] = useState(0);
  const colorArr = [
    "text-purple-200",
    "text-purple-300",
    "text-purple-400",
    "text-purple-500",
    "text-purple-400",
    "text-purple-300",
    "text-purple-200",

  ];

  useEffect(() => {
    const id = setInterval(() => {
      if (colorIndex < colorArr.length - 1) {
        setColorIndex(colorIndex + 1);
      } else {
        setColorIndex(0);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [colorArr.length, colorIndex]);

  return (
    <div className="p-2 md:h-screen bg-zinc-900 md:flex flex-col justify-center">
      <h1 className="text-4xl max-w-xs my-8 md:mt-0 md:mb-8 font-semibold font-mono text-white mx-auto text-center mt-2 md:text-6xl lg:text-7xl md:max-w-lg lg:max-w-4xl p-2">
        WELCOME TO KELQUIZ
      </h1>

      <section>
        <h2
          className={`text-lg md:text-xl p-2 w-fit mx-auto font-mono font-semibold
          ${colorArr[colorIndex]} 
          `}
        >
          PICK A CATEGORY
        </h2>
      </section>

      <section className="grid grid-cols-1 gap-4 md:lg:grid-cols-4 md:p-4 p-4 md:max-w-6xl mx-auto border border-dashed border-neutral-500 md:mt-3 mb-6 ">
        <CategoryBtn category="GK" title="General Knowledge" />
        <CategoryBtn category="BOOKS" title="Books" />
        <CategoryBtn category="CELEBRITIES" title="Celebrities" />
        <CategoryBtn category="SPORTS" title="Sports" />
        <CategoryBtn category="HISTORY" title="History" />
        <CategoryBtn category="MUSIC" title="Music" />
        <CategoryBtn category="MOVIES" title="Movies" />
        <CategoryBtn category="ANIMALS" title="Animals" />
        <CategoryBtn category="MATHS" title="Mathematics" />
        <CategoryBtn category="MYTH" title="Mythology" />
        <CategoryBtn category="TV" title="Television" />
        <CategoryBtn category="SCIENCE" title="Science" />
        <CategoryBtn category="GADGETS" title="Gadgets" />
        <CategoryBtn category="ANIME" title="Anime/Manga" />
        <CategoryBtn category="CARTOONS" title="Cartoons" />
        <CategoryBtn category="GEOGRAPHY" title="Geography" />
      </section>
    </div>
  );
}
