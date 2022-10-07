import { Button } from "@mui/material";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { db } from "./firebase";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(channelId);
    if (!channelId) return;

    const roomsCollectionRef = collection(db, "rooms");
    const messagesDocRef = doc(roomsCollectionRef, channelId);

    addDoc(collection(messagesDocRef, "messages"), {
      message: input,
      timestamp: serverTimestamp(),
      user: "Sheesh Kebab Lover",
      userImage:
        "https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2022/03/Seekh-Kebab-1200x675.jpg",
    });

    setInput("");
    chatRef?.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};
export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;

    > input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }

    > button {
      display: none !important ;
    }
  }
`;
