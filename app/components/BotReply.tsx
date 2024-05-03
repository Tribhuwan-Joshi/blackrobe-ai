"use client";
import Image from "next/image";
import blackrobeIcon from "@/public/blackrobe-bot.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function BotReply({
  text: initialText,
  options,
  done,
  processInput,
}: {
  text: string;
  options?: string[];
  processInput?: (i: string) => void;
  done?: boolean;
}) {
  const [text, setText] = useState(initialText);
  const [isClicked, setIsClicked] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasResponseBeenGenerated, setHasResponseBeenGenerated] =
    useState(false);
  const router = useRouter();

  async function getResponse() {
    try {
      const res: {
        status: number;
        data: { aiResponse: string; contract: { id: number } };
      } = await axios.post("/api/contract", { text });
      if (res.status === 201) {
        setText(res.data.aiResponse);

        router.push(`/contracts/${res.data.contract.id}`);
        setHasResponseBeenGenerated(true);
      }
    } catch (error) {
      console.log(error);
      setText("Server Error Occurred. Try again later");
    }
  }

  // Call getResponse only if done is true and hasResponseBeenGenerated is false
  if (done && !isGenerating && !hasResponseBeenGenerated) {
    setIsGenerating(true);
    getResponse().finally(() => setIsGenerating(false));
  }

  return (
    <div className="bot-reply items-center flex gap-6 bg-[#bebebe58] py-2 p-1 md:w-[80%] rounded-md text-white ">
      <div className="bg-[#fffefe] min-h-[32px] self-start rounded-md px-2 min-w-[32px] p-1">
        <Image src={blackrobeIcon} width={32} alt="Icon" />
      </div>
      <div className="space-y-2">
        {isGenerating ? (
          <p>Crafting Contract...</p>
        ) : done ? (
          <div dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          <>
            <p>{text}</p>
            {options?.length && (
              <ul className="space-y-2 flex flex-col items-start">
                {options.map((o, index) => (
                  <li key={index} className="flex-1">
                    <button
                      className="border-[1px] md:border-[2px] bg-[#2d2d2d7c] hover:scale-110 transition-all ease-in-out border-gray-500 inset-2 p-1 rounded-md "
                      onClick={() => {
                        processInput!(String(index + 1));
                        setIsClicked(true);
                      }}
                      disabled={isClicked}
                    >
                      {index + 1}. {o}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
