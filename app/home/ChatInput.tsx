import { BsSend } from "react-icons/bs";
const ChatInput = () => {
  return (
    <div className="w-full flex-1 flex  items-end justify-center ">
      <div className="w-[95%] rounded-md px-1 justify-center items-center flex gap-4 bg-[#9e9b9b6b]  h-14 my-6  ">
        <input
          className="rounded-md h-full w-full bg-inherit   text-white text-lg placeholder:text-white placeholder:focus:text-gray-200  placeholder:text-base outline-none px-2  "
          autoFocus={true}
          placeholder="Chat With Blackrobe"
        />
        <BsSend color="white" size={20} />
      </div>
    </div>
  );
};
export default ChatInput;
