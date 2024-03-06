"use client";
import { KeyboardEvent, useState } from "react";
import { BsSend } from "react-icons/bs";

const ChatInput = () => {
  const [userInput, setUserInput] = useState("");
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    console.log("keydown");
    if (e.key == "Enter" && userInput.trim()) {
      e.preventDefault();
      console.log("user's choice", userInput.trim());
      setUserInput("");
    }
  };
  return (
    <div className="w-[95%] md:w-[90%] p-2 rounded-md  bg-[#8c40ef62]    flex-1 flex items-center justify-center">
      <textarea
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        onKeyDown={handleKeyDown}
        className="rounded-md min-h-max w-full bg-transparent  text-white text-lg placeholder:text-white placeholder:focus:text-gray-200 placeholder:text-base outline-none px-2 resize-none"
        autoFocus={true}
        placeholder="Chat With Blackrobe"
        rows={1} // Start with one row
        style={{ minHeight: "2rem" }} // Set a minimum height
      />
      <BsSend color="white" className="mr-5 cursor-pointer" size={20} />
    </div>
  );
};

export default ChatInput;
