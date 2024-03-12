"use client";
import { useEffect, useRef, useState } from "react";
import BotReply from "../components/BotReply";
import UserReply from "../components/UserReply";
import ChatInput from "./ChatInput";
import questions from "../helpers/questions";

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
      text: "Click/Provide the contract ID to generate the contract",
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
  const [contractId, setContractId] = useState(-1);
  const [subQuestionLen, setSubqLen] = useState(0);
  const [subQuestionInd, setSubqInd] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [contractGenerated, setContractGenerated] = useState(false);
  const [isChatStarted, setChatStarted] = useState(false);
  const [typeCount, setTypeCount] = useState(15);
  const processInput = async (input: string) => {
    if (contractGenerated) {
      setMessages((prev) => [
        ...prev,
        { text: input, type: "User" },
        {
          text: "Upgrade to premium to generate more contracts at once",
          type: "Bot",
        },
      ]);
      return;
    }
    if (!isChatStarted) {
      if (
        !isNaN(parseInt(input)) &&
        isFinite(parseFloat(input)) &&
        parseInt(input) >= 1 &&
        parseInt(input) <= typeCount
      ) {
        const inputNumber = parseInt(input);

        setChatStarted(true);
        setContractId(inputNumber - 1);
        setSubqLen(questions[inputNumber - 1].questions.length);
        setMessages((prev) => [
          ...prev,
          {
            text: ` ${input}- ${questions[inputNumber - 1].category}`,
            type: "User",
          },
          { text: questions[inputNumber - 1].questions[0], type: "Bot" },
        ]);
        setSubqInd(1);
        return; // Exit early if input is valid
      } else {
        setMessages((prev) => [
          ...prev,
          { text: ` ${input}`, type: "User" },
          { text: "Please provide a valid option", type: "Bot" },
        ]);
      }
    } else {
      setMessages((prev) => [...prev, { text: ` ${input}`, type: "User" }]);
      setSubqInd((prev) => prev + 1);
      if (subQuestionInd == subQuestionLen) {
        setMessages((prev) => [
          ...prev,
          { text: "Contract Generated Successfully", type: "Bot" },
        ]);
        setContractGenerated(true);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            text: questions[contractId].questions[subQuestionInd],
            type: "Bot",
          },
        ]);
      }
    }
  };

  useEffect(() => {
    if (!isChatStarted && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
      return;
    }
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isChatStarted]);

  return (
    <div className="flex overflow-hidden text-lg space-y-3 relative flex-col gap px-2 py-4 mx-auto rounded-lg w-full sm:w-2/3 h-[95%] border border-white bg-[#2d2d2d56] bg-center">
      <div
        ref={chatContainerRef}
        className="chat-container space-y-3 p-2 flex-1 flex flex-col overflow-auto"
      >
        {messages.map((m, i) =>
          m.type === "Bot" ? (
            <BotReply
              key={i}
              options={m.options}
              processInput={processInput}
              text={m.text}
            />
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
