import styled from "styled-components";
import googlePlay from "../components/assets/googlePlay.png";
import appStore from "../components/assets/appleStore.png";
import screens from "../components/assets/screens.png";

export default function DownloadApp() {
  return (
    <Section>
      <div className="info">
        <h1>Download Now Travel Community Apps</h1>
        <div className="downloads">
          <img src={googlePlay} alt="googleplay" />
          <img src={appStore} alt="appStore" />
        </div>
      </div>
      <div className="screens">
        <img src={screens} alt="screens" />
      </div>
    </Section>
  );
}
const Section = styled.section`
  height: 25rem;
  width: 100%;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 5px 7px 29px 5px;

  margin: 3rem 0;
  background: linear-gradient(to right, #a6f2f2, #ddf181);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  position: relative;
  overflow: hidden;
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 2rem;
      width: 60%;
    }
    .downloads {
      display: flex;
      gap: 1rem;
      img {
        height: 2rem;
        cursor: pointer;
      }
    }
  }
  .screens {
    height: 22rem;
    /* box-shadow: rgba(100, 100, 111, 0.2) 5px 7px 29px 5px; */

    position: absolute;
    bottom: -2rem;
    right: 1rem;
    border-radius: 5px;
  }
`;
