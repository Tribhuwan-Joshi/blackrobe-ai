import { BsSend } from "react-icons/bs";

const ChatInput = () => {
  return (
    <div className="w-[90%] p-2 rounded-md absolute bg-[#8c40ef62]  bottom-4  flex-1 flex items-center justify-center">
      {/* Replace input with textarea for multiline input */}
      <textarea
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
