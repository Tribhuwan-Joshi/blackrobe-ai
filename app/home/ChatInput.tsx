import { BsSend } from "react-icons/bs";

const ChatInput = () => {
  return (
    <div className="w-full flex-1 flex items-end justify-center">
      <div className="w-[95%] rounded-md px-1 justify-center items-center flex gap-4 bg-[#9e9b9b6b] my-6">
        {/* Replace input with textarea for multiline input */}
        <textarea
          className="rounded-md w-full bg-transparent text-white text-lg placeholder:text-white placeholder:focus:text-gray-200 placeholder:text-base outline-none px-2 resize-none"
          autoFocus={true}
          placeholder="Chat With Blackrobe"
          rows={1} // Start with one row
          style={{ minHeight: "2rem" }} // Set a minimum height
        />
        <BsSend color="white" className="mr-5 cursor-pointer" size={20} />
      </div>
    </div>
  );
};

export default ChatInput;
