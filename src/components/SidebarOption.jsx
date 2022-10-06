import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const SidebarOption = ({ Icon, title, addChannelOption }) => {
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      addDoc(collection(db, "rooms"), {
        name: channelName,
      });
    }
  };
  const selectChannel = () => {};
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon style={{ margin: 10 }} fontSize="small" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};
export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12;
  /* justify-content: space-between; */
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  > span {
    padding: 15px;
  }
`;
