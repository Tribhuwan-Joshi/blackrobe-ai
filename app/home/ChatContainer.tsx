"use client";
import { useState } from "react";
import BotReply from "../components/BotReply";
import UserReply from "../components/UserReply";
import ChatInput from "./ChatInput";

type messageType = {
  text: string;
  type: "Bot" | "User";
  options?: string[];
};

const ChatContainer = () => {
  const [messages, setMessages] = useState<messageType[]>([
    {
      type: "Bot",
      text: "Welcome to Blackrobe ! Your personalized contract generator.",
    },
    {
      text: "Select contract ID to generate the contract",
      type: "Bot",
      options: [
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
      ],
    },
    { type: "User", text: "Mortgage Contract" },
  ]);

  return (
    <div className=" flex  overflow-auto  space-y-3 relative flex-col gap px-2 py-4 mx-auto rounded-lg w-full sm:w-2/3 h-[95%] border border-white bg-[#2d2d2d56] bg-center ">
      <div className="chat-container space-y-3 p-2 flex-1 flex flex-col">
        {messages.map((m, i) =>
          m.type === "Bot" ? (
            <BotReply key={i} options={m.options} text={m.text} />
          ) : (
            <UserReply key={i} text={m.text} />
          )
        )}
      </div>

      <ChatInput />
    </div>
  );
};

export default ChatContainer;
