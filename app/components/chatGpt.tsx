import { useChat } from "ai/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface ChatProps {
  isChatOpen: boolean;
  setChatOpen: (isOpen: boolean) => void;
}

export default function Chat({ isChatOpen, setChatOpen }: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  if (!isChatOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="fixed inset-0 grid aspect-auto items-center justify-center z-50"
    >
      <div className="rounded-3xl bg-vc-border-gradient shadow-lg shadow-black/40 max-w-screen-md mx-auto p-4  ">
        <div className="h-96 rounded-lg bg-vc-border-gradient shadow-lg shadow-black/90 overflow-auto">
          <div className="flex flex-col justify-between h-full">
            <div>
              {messages.map((m, index) => (
                <div className="p-2 text-bl_steel-notpurp" key={m.id}>
                  {m.role === "user" ? "User: " : "AI: "}
                  {m.content}
                  {index === messages.length - 1 ? (
                    <div ref={messagesEndRef} />
                  ) : null}
                </div>
              ))}
            </div>
            <form
              className="grid grid-cols-2 gap-y-2 gap-x-4"
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(event);
              }}
            >
              <input
                className="grid col-span-2 rounded-md p-2 text-bl_steel-charyo mb-2 w-full"
                value={input}
                onChange={handleInputChange}
                placeholder="Poly wanna calculator..."
              />
              <button
                className="grid col-span-1 border-solid border-2 border-bl_steel-notpurp text-bl_steel-notpurp p-2 rounded-md w-full hover:bg-bl_steel-notpurp hover:text-bl_steel-charyo transition-colors duration-200"
                onClick={() => setChatOpen(false)}
              >
                Close
              </button>
              <button
                className="grid col-span-1 border-solid border-2 border-bl_steel-notpurp text-bl_steel-notpurp p-2 rounded-md w-full hover:bg-bl_steel-notpurp hover:text-bl_steel-charyo transition-colors duration-200"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
