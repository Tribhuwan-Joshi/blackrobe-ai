import Image from "next/image";
import ChatInput from "./ChatInput";
import blackrobeIcon from "@/public/blackrobe-bot.png";

const ChatContainer = () => {
  return (
    <div className=" flex relative flex-col px-2 py-4  mx-auto  rounded-lg w-full sm:w-2/3  h-4/5  border border-white bg-[#2d2d2d56]   bg-center  ">
      <BotReply text="Welcome to Blackrobe, your personalized contract generator." />
    </div>
  );
};

function BotReply({ text }: { text: string }) {
  return (
    <div className="bot-reply flex  items-center gap-8 text-xl bg-[#bebebe58] py-2 p-1 w-[80%]  rounded-md text-white ">
      <div className="bg-[#fffefe] rounded-md px-2 max-w-max p-1">
        <Image src={blackrobeIcon} width={36} height={36} alt="Icon" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default ChatContainer;
