import Image from "next/image";
import blackrobeIcon from "@/public/blackrobe-bot.png";

export default function BotReply({
  text,
  options,
}: {
  text: string;
  options?: string[];
}) {
  return (
    <div className="bot-reply items-center  flex   gap-6  bg-[#bebebe58] py-2 p-1 md:w-[80%]  rounded-md text-white ">
      <div className="bg-[#fffefe] max-h-max self-start rounded-md px-2 max-w-max p-1">
        <Image src={blackrobeIcon} width={32} alt="Icon" />
      </div>
      <div className="space-y-2">
        <p>{text}</p>

        {options?.length && (
          <ul className="space-y-1">
            {options.map((o, i) => (
              <li key={i}>
                {i + 1}. {o}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
