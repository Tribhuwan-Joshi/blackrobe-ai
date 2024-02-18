import Image, { StaticImageData } from "next/image";

export default function OAuthBtn({
  text,
  imgSrc,
}: {
  text: string;
  imgSrc: StaticImageData;
}) {
  return (
    <button className="flex p-2 md:py-3 min-w-max group flex-col justify-center relative border border-[#8738EB] rounded-md ">
      <div className="flex gap-2  items-center">
        <Image src={imgSrc} width={20} alt="icon" />
        <p className="text-white whitespace-nowrap">
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
          {text}
        </p>
      </div>
    </button>
  );
}
