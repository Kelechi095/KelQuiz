import UiLoader from "./UiLoader";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-900 ">
      <UiLoader />
    </div>
  );
};

export default Loading;
