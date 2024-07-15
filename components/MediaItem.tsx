import { Song } from "@/types";
import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  return (
    <div
      className="
    flex
    items-center
    gap-x-3
    cursor-pointer
    hover:bg-purple-800/10
    w-full
    p-2
    rounded-md
    "
    >
      <div
        className="
        relative
        rounded-md
        min-h-[48px]
        min-w-[48px]
        overflow-hidden
        "
      >
        <Image
          fill
          src={imageUrl || "/images/d1.jpg"}
          alt="Media Item Image"
          className="object-cover"
        />
      </div>
      <div
        className="
      flex
      flex-col
      gap-y-1
      overflow-hidden
      "
      >
        <p className="text-white truncate">{data.title}</p>
        <p
          className="
          text-neutral-400
        text-sm 
        truncate"
        >
          {data.author}
        </p>
      </div>
    </div>
  );
};

export default MediaItem;
