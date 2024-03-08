import CategoryBtn from "./buttons/CategoryBtn";

export default function HomeScreen() {
  return (
    <div className="p-2 md:h-screen bg-darkBlue md:flex flex-col justify-center">
      <nav className="p-4 flex items-center justify-center">
        <h2 className="font-mono tracking-wide text-xl lg:text-3xl font-bold text-cyan-600">
          KELQUIZ
        </h2>
      </nav>
      <h1 className="text-4xl max-w-xs mx-auto text-center mt-2 md:text-6xl lg:text-7xl md:max-w-lg  lg:max-w-4xl font-serif p-2 text-white">
        Welcome to KelQuiz
      </h1>

      <div>
        <h2 className="text-lg font-base max-w-md md:max-w-lg lg:max-w-3xl lg:text-xl font-semibold text-center mx-auto mt-10 p-3 lg:mt-8 text-cyan-600">
          PICK A CATEGORY
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md: lg:grid-cols-4 p-4 max-w-xs md:max-w-6xl mx-auto ">
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
