"use client";
import { useEffect, useRef, useState } from "react";
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
      text: "Welcome to Blackrobe! Your personalized contract generator.",
    },
    {
      text: "Select a contract ID to generate the contract",
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
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [isChatStarted, setChatStarted] = useState(false);
  const [optionslen, setOptionsLen] = useState(15);
  const processInput = async (input: string) => {
    if (!isChatStarted) {
      if (!isNaN(parseInt(input)) && isFinite(parseFloat(input))) {
        const inputNumber = parseInt(input);
        if (inputNumber >= 1 && inputNumber <= optionslen) {
          setMessages((prev) => [
            ...prev,
            { text: ` ${input}`, type: "User" },
            { text: `You entered ${input}`, type: "Bot" },
          ]);
          return; // Exit early if input is valid
        }
      }
      setMessages((prev) => [
        ...prev,
        { text: ` ${input}`, type: "User" },
        { text: "Please provide a valid option", type: "Bot" },
      ]);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex overflow-hidden space-y-3 relative flex-col gap px-2 py-4 mx-auto rounded-lg w-full sm:w-2/3 h-[95%] border border-white bg-[#2d2d2d56] bg-center">
      <div
        ref={chatContainerRef}
        className="chat-container space-y-3 p-2 flex-1 flex flex-col overflow-auto"
      >
        {messages.map((m, i) =>
          m.type === "Bot" ? (
            <BotReply key={i} options={m.options} text={m.text} />
          ) : (
            <UserReply key={i} text={m.text} />
          )
        )}
      </div>

      <ChatInput processInput={processInput} />
    </div>
  );
};

export default ChatContainer;
