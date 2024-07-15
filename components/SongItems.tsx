"use client";

import { Song } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemsProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItems: React.FC<SongItemsProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      onClick={() => onClick(data.id)}
      className="
    relative
    group
    flex
    flex-col
    items-center
    justify-center
    rounded-md
    overflow-hidden
    gap-x-4
    cursor-pointer
    transition
    "
    >
      <div
        className="
      relative
      aspect-square
      w-full
      h-full
      rounded-md
      overflow-hidden
      "
      >
        <Image
          className="object-cover transition group-hover:scale-110"
          src={imagePath || "/images/d1.jpg"}
          fill
          alt="Image"
        />
        <div
          className="
        transition
        opacity-0
        absolute
        w-full
        h-full
        rounded-md
        overflow-hidden
        bg-purple-950/10
        flex
        items-center
        justify-center
        group-hover:opacity-100
        "
        >
          <div 
          className="
          "
          >
            <PlayButton/>
          </div>
        </div>
      </div>
      <div
        className="
      flex
      flex-col
      items-start
      w-full
      p-4
      gap-y-1
      "
      >
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p
          className="
        text-neutral-400
        text-sm
        pb-4
        w-full
        truncate
        "
        >
          By {data.author}
        </p>
      </div>
    </div>
  );
};

export default SongItems;
