import BotReply from "../components/BotReply";
import UserReply from "../components/UserReply";
import ChatInput from "./ChatInput";

const ChatContainer = () => {
  return (
    <div className="chat-container flex overflow-auto  space-y-3 relative flex-col gap px-2 py-4 mx-auto rounded-lg w-full sm:w-2/3 h-[95%] border border-white bg-[#2d2d2d56] bg-center ">
      <div className="space-y-3 p-2 ">
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
      </div>
      <UserReply text="Alpha beta when u hear me count to four sedate till i am normal" />
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
