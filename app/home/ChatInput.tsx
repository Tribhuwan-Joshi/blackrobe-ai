"use client";
import { KeyboardEvent, useState } from "react";
import { BsSend } from "react-icons/bs";

const ChatInput = ({
  processInput,
}: {
  processInput: (input: string) => void;
}) => {
  const [userInput, setUserInput] = useState("");
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && userInput.trim()) {
      e.preventDefault(); // Prevent the default behavior of Enter key press
      setUserInput(""); // Clear the input
      processInput(userInput.trim()); // Process the input
    }
  };

  const handleInput = (e: any) => {
    e.preventDefault();
    if (userInput.trim()) {
      setUserInput("");
      processInput(userInput.trim());
    }
  };
  return (
    <div className="w-[95%] max-h-[50px]  md:w-[90%] p-2 rounded-md  bg-[#8c40ef62]    flex-1 flex items-center justify-center">
      <textarea
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        onKeyDown={handleKeyDown}
        className="rounded-md min-h-max w-full bg-transparent  text-white text-lg placeholder:text-white placeholder:focus:text-gray-200 placeholder:text-base outline-none px-2 resize-none "
        autoFocus={true}
        placeholder="Chat With Blackrobe"
        rows={1} // Start with one row
        style={{ minHeight: "2rem" }} // Set a minimum height
      />
      <button onClick={handleInput}>
        <BsSend color="white" className="mr-5 cursor-pointer" size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
