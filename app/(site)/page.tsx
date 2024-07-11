import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className="
    bg-[#231b2e]
    rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
    "
    >
      <Header>
        <div className="mb-2">
          <h1
          className="
          text-white
          text-3xl
          font-semibold
          ">
            Welcom back
          </h1>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest songs
          </h1>
        </div>
      </div>
    </div>
  );
}
