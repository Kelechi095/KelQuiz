import CategoryBtn from "./buttons/CategoryBtn";

export default function HomeScreen() {
  return (
    <div className="p-2 md:h-screen bg-zinc-900 md:flex flex-col justify-center">
      
      <h1 className="text-4xl max-w-xs mb-8 font-semibold font-mono text-white mx-auto text-center mt-2 md:text-6xl lg:text-7xl md:max-w-lg lg:max-w-4xl p-2">
        Welcome to KelQuiz
      </h1>

      <div>
        <h2 className="text-lg md:text-xl p-2 text-white w-fit mx-auto font-mono font-semibold">
          PICK A CATEGORY
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:lg:grid-cols-4 md:p-8 p-4 md:max-w-6xl mx-auto border border-dashed border-neutral-500 md:mt-3 ">
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
      </div>
    </div>
  );
}
