import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button
      className="
      rounded-full
      border
      border-inherit
      flex
      items-center
      p-4
    "
    >
      <FaPlay className="text-white" />
    </button>
  );
};

export default PlayButton;
