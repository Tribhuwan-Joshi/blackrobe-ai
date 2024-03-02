import Image from "next/image";
import ChatInput from "./ChatInput";
import blackrobeIcon from "@/public/blackrobe-bot.png";

const ChatContainer = () => {
  return (
    <div className=" S chat-container flex overflow-auto space-y-3 relative flex-col gap px-2 py-4  mx-auto  rounded-lg w-full sm:w-2/3  h-[95%]  border border-white bg-[#2d2d2d56]   bg-center  ">
      <BotReply text="Welcome to Blackrobe, your personalized contract generator." />
      <BotReply
        text="Select type of contract to generate :-"
        options={[
          "Non-Disclosure Agreement (NDA)",
          "Service Agreement",
          "Employment Contract",
          "Freelance Contract",
          "Sales Contract",
          "Investor Agreement",
          "Insurance Agreement",
          "Lease Agreement",
          "Joint Venture Agreement",
          "Licensing Agreement",
          "Mortgage Contract",
          "Supply Agreement",
          "Maintenance Contract",
          "Outsourcing Agreement",
          "Agency Agreement",
        ]}
      />

      <ChatInput />
    </div>
  );
};

function BotReply({ text, options }: { text: string; options?: string[] }) {
  return (
    <div className="bot-reply items-center  flex   gap-8 text-lg bg-[#bebebe58] py-2 p-1 w-[80%]  rounded-md text-white ">
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

export default ChatContainer;
