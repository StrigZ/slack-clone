import styled from "styled-components";
import Spinner from "react-spinkit";
const LoadingPage = () => {
  return (
    <AppLoading>
      <AppLoadingContents>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />

        <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
      </AppLoadingContents>
    </AppLoading>
  );
};
export default LoadingPage;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
