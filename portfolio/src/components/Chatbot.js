import ChatBot from "react-simple-chatbot";

export default function Chatbot() {
  return (
    <ChatBot
      floating
      steps={[
        { id: "1", message: "Hi! Ask me anything 👋", trigger: "2" },
        { id: "2", user: true, trigger: "3" },
        { id: "3", message: "Check projects section!", end: true },
      ]}
    />
  );
}