import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { useEffect, useRef } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import { selectRoomId } from "./features/appSlice";
import { db } from "./firebase";
import Message from "./Message";

const Chat = () => {
  const chatRef = useRef();
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && doc(collection(db, "rooms"), roomId)
  );

  const q =
    roomId &&
    query(
      query(
        collection(doc(collection(db, "rooms"), roomId), "messages"),
        orderBy("timestamp", "asc")
      )
    );
  const [roomMessages, loading] = useCollection(q);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <ChatHeader>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined /> Details
              </p>
            </HeaderRight>
          </ChatHeader>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            // ChannelName
            channelId={roomId}
            channelName={roomDetails?.data().name}
            chatRef={chatRef}
          />
        </>
      )}
    </ChatContainer>
  );
};
export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
    > .MuiSvgIcon-root {
      margin-left: 10px;
      font-size: 18px;
    }
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    > .MuiSvgIcon-root {
      margin-right: 5px !important;
      font-size: 16px;
    }
  }
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
